import React, {useState} from 'react'
import HeaderComponent from '../components/HeaderComponent';
// import WineListComponent from '../components/WineListComponent';
// import WineListTitle from '../components/WineListTitle'
// import { wineListData } from '../data';
import { motion } from 'framer-motion';
import transition from '../transition';
import Images from "../components/Images"
import Lightbox from "yet-another-react-lightbox"
import { Zoom } from "yet-another-react-lightbox/plugins"
import { wineListSlike } from "../wineListSlike"
import { wineListGlavnaSlika } from "../wineListGlavnaSlika"
import "yet-another-react-lightbox/styles.css"

const WineList = () => {
  const [indexMenuChoice, setIndexMenuChoice] = useState(-1);
  //const { signatureCocktails, aperitifs, champagneList, sparklingWines, whiteWines } = wineListData;
  return (
    <> 
        <HeaderComponent translate="translateX(100%)" heading="Wine list"/>
        <section className='mt-4 flex justify-center mx-auto bg-wineList bg-center bg-no-repeat h-[480px]'>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 2, type: "spring" }
          }}
          className='flex items-center w-[250px]'
        >
        <Images data={wineListGlavnaSlika} onClick={currentIndex => setIndexMenuChoice(currentIndex)} />
          <Lightbox
              index={indexMenuChoice}
              open={indexMenuChoice >= 0}
              close={() => setIndexMenuChoice(-1)}
              slides={wineListSlike}
              plugins={[Zoom]}
          />
        </motion.div>
        {/* <WineListTitle title="Signature cocktails"/> 
            {signatureCocktails.map((item, index) => {
                const {name, ingredients, type, price, serving_size} = item;
                return <div className='container mx-auto px-8 lg:px-20' key={index}><WineListComponent name={name} ingredients={ingredients} type={type} price={price} serving_size={serving_size}/></div>
            })}
          <WineListTitle title="Aperitifs"/> 
            {aperitifs.map((item, index) => {
                const {name, ingredients, type, price, serving_size} = item;
                return <div className='container mx-auto px-8 lg:px-20' key={index}><WineListComponent name={name} ingredients={ingredients} type={type} price={price} serving_size={serving_size}/></div>
            })}
          <WineListTitle title="Champagne List"/>
          {champagneList.map((item, index) => {
              const {name, ingredients, type, price, serving_size} = item;
              return <div className='container mx-auto px-8 lg:px-20' key={index}><WineListComponent name={name} ingredients={ingredients} type={type} price={price} serving_size={serving_size} /></div>
          })}
          <WineListTitle title="Sparkling Wines"/>
          {sparklingWines.map((item, index) => {
              const {name, ingredients, type, price, serving_size, serving_size2, price2} = item;
              return <div className='container mx-auto px-8 lg:px-20' key={index}><WineListComponent name={name} ingredients={ingredients} type={type} price={price} serving_size={serving_size} serving_size2={serving_size2} price2={price2}/></div>
          })}
          <WineListTitle title="White Wines"/>
          {whiteWines.map((item, index) => {
              const {name, ingredients, type, price, serving_size, serving_size2, price2, price3, serving_size3} = item;
              return <div className='container mx-auto px-8 lg:px-20' key={index}><WineListComponent name={name} ingredients={ingredients} type={type} price={price} serving_size={serving_size} serving_size2={serving_size2} price2={price2} price3={price3} serving_size3={serving_size3}/></div>
          })} */}
        </section>
    </>
  )
}

export default transition(WineList);
