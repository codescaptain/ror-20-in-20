import React, { useState, createRef, useEffect } from 'react'
import { Like, ReplyIcon, Retweet, Share, Verified } from './icons';
import { useScreenshot } from 'use-react-screenshot'
import Loader from './Loader';


function App() {
  const ref = createRef(null)
  const downloadRef = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [tweet, setTweet] = useState('')
  const [avatar, setAvatar] = useState('')
  const [retweets, setRetweets] = useState(0)
  const [quoteTweets, setQuoteTweets] = useState(0)
  const [like, setLike] = useState(0)

  useEffect(() => {
    if(image){
      downloadRef.current.click();
    }
  }, [image])

  const tweetFormat = (tweet) => {
    tweet = tweet
    .replace(/@([\w]+)/gi, '<span>@$1</span>')
    .replace(/#([\wşçöğüı]+)/gi, '<span>#$1</span>')
    .replace(/(https?:\/\/[\w\.\/]+)/gi, '<span>$1</span>')
    return tweet;
  }

  const formatNumber = (number) => {
    if(Number(number) < 1000) {
      return number;
    }
    else {
      number /= 1000;
      number = String(number).split('.')
      return number[0] + ( number[1] > 100 ? ',' + number[1].slice(0,1) + ' B' : ' B' )

    }
  }

  const avatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      setAvatar(this.result)
    } )
    reader.readAsDataURL(file)

  }
  
  return (
    <>
    <div className="tweet-settings">
      <h3>Tweet Ayarları</h3>
      <ul>
        <label>Ad Soyad</label>
        <li>
          <input 
            type="text" 
            className="input" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
        <label>Kullanıcı Adı</label>
          <input 
            type="text" 
            className="input" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </li>
        <li>
        <label>Tweet</label>
          <textarea 
            className="textarea"
            value={tweet}
            maxLength="290"
            onChange={(e) => setTweet(e.target.value)}
          />
        </li>
        <li>
        <label>Avatar Adı</label>
          <input 
            type="file" 
            className="input" 
            onChange={avatarHandle}
          />
        </li>
        <li>
        <label>ReTweet</label>
          <input 
            type="number" 
            className="input" 
            value={retweets}
            onChange={(e) => setRetweets(e.target.value)}
          />
        </li>
        <li>
        <label>Alıntı Tweetler</label>
          <input 
            type="number" 
            className="input" 
            value={quoteTweets}
            onChange={(e) => setQuoteTweets(e.target.value)}
          />
        </li>
        <li>
        <label>Beğeni</label>
          <input 
            type="number" 
            className="input" 
            value={like}
            onChange={(e) => setLike(e.target.value)}
          />
        </li>

        <li>
          <button  onClick={getImage}>
          Oluştur
        </button>
        </li>
        {image && <div className="download-url">
          <a ref={downloadRef} href={image} download="tweet.png"> Tweet Indir </a>
        </div>}
      </ul>
    </div>
    <div className="tweet-container">
      <div ref={ref} className="tweet">
        <div className="tweet-author">
          {avatar && <img src={avatar} alt="" /> || <Loader />}

          <div>
            <div className="name">
              {name || 'Ad Soyad'}
              {isVerified && <Verified />}
            </div>
            <div className="username">
              @{username || 'KullanıcıAdı'}
            </div>
          </div>
        </div>
        <div className="tweet-content">
          <p
            dangerouslySetInnerHTML={{
              __html: (tweet && tweetFormat(tweet)) || 'Bu alana örnek tweet gelecek'}}
          />
        </div>
        <div className="tweet-stats">
          <span>
            <b>{formatNumber(retweets)}</b> Retweet
          </span>
          <span>
            <b>{formatNumber(quoteTweets)}</b> Alıntı Tweetler
          </span>
          <span>
            <b>{formatNumber(like)}</b> Beğeni
          </span>
        </div>
        <div className="tweet-actions">
          <span><ReplyIcon/></span>
          <span><Retweet/></span>
          <span><Like/></span>
          <span><Share/></span>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
