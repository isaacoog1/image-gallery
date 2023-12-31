import { useEffect, useState } from 'react'
import './App.css'
import  ImageCard  from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [term]);  

  return (
    <div className="container mx-auto mb-20">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-center mx-auto mt-32 text-5xl">No Images Found!</h1>}

      {isLoading ? <h1 className="text-center mx-auto mt-32 text-6xl">Loading...</h1> : <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  )
}

export default App
