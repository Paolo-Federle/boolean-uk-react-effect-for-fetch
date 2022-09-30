import ArtList from './components/ArtList'
import { useEffect, useState } from "react"

function ArtsSection() {

  const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?page=6&limit=3')
      .then(resp => resp.json())
      .then(data =>{
        // console.log("my data is", data)
        setArtData(data.data)}
      )
  }, [])

  // console.log("artData is", artData)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ArtList   artData={artData}  />
      </div>
    </section>
  )
}

export default ArtsSection
