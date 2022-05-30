
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [quote, setquote] = useState("Your most unhappy customers are your greatest source of learning");
  const [author,setauthor]=useState("Bill gates");

  const getquotes=async()=>{

  const url="https://api.quotable.io/random";
  const  res= await axios.get(url);
  
    setquote(res.data.content)
    setauthor(res.data.author)

  }
  // copy the quotes text
  const copy=()=>{
    navigator.clipboard.writeText(quote);
   
  }
// speak the quotes
 const sound=()=>{
  let utterance=new SpeechSynthesisUtterance(`${quote} by ${author}`);
  speechSynthesis.speak(utterance);
 }
 // tweet the quotes
 const tweet=()=>{
  let tweeturl=`https://twitter.com/intent/tweet?url=${quote}`;
  window.open(tweeturl,"_blank");
 }
  return (
    <div className="container-fluid">

    <div className="row">
        <div className="col-sm-12 col-xm-12">
         <div className="wrapper">
             <h1>Quotes of the day</h1>
             <div  className="quotes-area">
             <i className="fa-solid fa-quote-left"></i>
             <div id="quotes">
               {quote}
            </div>
             <i   className="fa-solid fa-quote-right"></i>
            </div>
             <div id="author">{author}</div>
                <ul>
                    <li><i onClick={sound} id="sound"className="fa-solid fa-microphone"></i></li>
                    <li><i onClick={copy} id="copy"className="fa-solid fa-copy"></i></li>
                    <li><i onClick={tweet} id="twitter"className="fa-brands fa-twitter"></i></li>
                    <li> <button onClick={getquotes}id="btn">New quote</button></li>
                </ul>
            
         </div>
        </div>
    </div>
</div>

  );
}

export default App;
