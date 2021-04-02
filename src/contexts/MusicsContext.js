import {createContext, useState} from "react"
export const MusicsContext= createContext()

const MusicsContextProvider=(props)=>{

  const [musics, setMusics] = useState([

    {
      name :"Bad Panda",
      image:"https://archive.org/download/She_Goes_To_France-6866/She_Goes_To_France-6866.jpg",
      src:"https://ia800704.us.archive.org/12/items/She_Goes_To_France-6866/American_Green_-_She_Goes_To_France.mp3",
      type:"audio/mpeg",
     
      
    },
    {
      name :"Harvest of Dreams",
      image:"https://archive.org/download/Harvest_of_Dreams-2543/Harvest_of_Dreams-2543.jpg",
      src:"https://ia802806.us.archive.org/4/items/Harvest_of_Dreams-2543/Bobb_Trimble_-_01_-_Premonitions_The_Fantasy.mp3",
      type:"audio/mpeg",
     
      
    },
    {
      name :"Cocktail Lady",
      image:"https://archive.org/download/555-4161/555-4161.jpg",
      src:"https://ia800701.us.archive.org/33/items/555-4161/Funky_Terrorist_-_02_-_cocktail_lady.mp3",
      type:"audio/mpeg",
    
      
    },
    {
      name :"ePop028 ",
      image:"https://archive.org/download/ePop028-13060/ePop028-13060.jpg",
      src:"https://ia802704.us.archive.org/33/items/ePop028-13060/Sleeping_Policemen_-_01_-_Vogelbird.mp3",
      type:"audio/mpeg",
    
      
    }
  ]);

  return(

    <MusicsContext.Provider value={{musics}}>
      {props.children}
    </MusicsContext.Provider>
  )
}


export default MusicsContextProvider