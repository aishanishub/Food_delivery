import React from "react";
import memesData from "./memesData.js";
export default function Meme()
{
    const [meme, setmeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemes, setallMemes] = React.useState([])

    React.useEffect(()=>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMemes(data.data.memes))
    },[])
    
    function getmemeImage()
    {
      const ran = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[ran].url
      setmeme( prevSetMeme =>
        ({
            ...prevSetMeme,
            randomImage : url
        })
      )
    }

    function handle(event)
    {
        const {name,value} = event.target
        setmeme(prevMeme =>
            ({
                ...prevMeme,
                [name]:value
            })
        )
    }
    return(
        <main>
            <div className="form">
                <input type="text"
                 placeholder="Top Text" 
                 className="input-text"
                 name="topText"
                 value={meme.topText}
                 onChange={handle}/>
                <input type="text" 
                placeholder="Bottom Text" 
                className="input-text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handle}/>
                <button className="form-button" onClick={getmemeImage}>Get a new meme image!</button>
            </div>
            <div className="meme">
            <img src = {meme.randomImage} className="meme-image"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}