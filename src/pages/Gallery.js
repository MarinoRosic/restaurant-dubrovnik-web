import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import { slike } from "../slike"
import "yet-another-react-lightbox/styles.css"
import Images from "../components/Images"
import HeaderComponent from "../components/HeaderComponent"
import transition from '../transition'
import { Zoom } from "yet-another-react-lightbox/plugins"

const Gallery = () => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <HeaderComponent translate="translateX(-100%)" heading="gallery" />
      <div className="pt-10 mx-2">
        <Images data={slike} onClick={currentIndex => setIndex(currentIndex)} />
      </div>
        
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slike}
        plugins={[Zoom]}
      />
    </>
  )
}

export default transition(Gallery)
