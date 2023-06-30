import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Story () {
  return (
    <div className="Story">
    <Header />
    <div className="story-div">
      <div className="story-div-block1">
        <h1>He Called She Picked</h1>
        <img src="image.png" alt="" />
      </div>
      <div className="story-div-block2">
        <img className="story-image" src="Mask group 2.png" alt="" />
        <img className="story-image1" src="image1.png" alt="" />
      </div>
    </div>
    <p className="story-div-text">
      Songwriter. She Ministers both with the Pure Streams and as an
      independent artist with Glory Music. Those that know Toyosi know not to
      be fooled by her goofiness, or her small frame - she pipes down a weight
      that can only be from Heaven, and leaves a trail of results that can
      only be of God. She loves God, and as a result, is passionate for the
      souls He loves also. She's serving God with her youth, and ministering
      to the youth, in campuses and conferences. She sings her testimony in
      her first single 'Beauty for Ashes' released under the Glory Music
      record label, and features in songs by Pure Streams such as 'Inside Me'
      and 'My Praise is Everyday'
    </p>
    <p className="story-div-text">
      Songwriter. She Ministers both with the Pure Streams and as an
      independent artist with Glory Music. Those that know Toyosi know not to
      be fooled by her goofiness, or her small frame - she pipes down a weight
      that can only be from Heaven, and leaves a trail of results that can
      only be of God. She loves God, and as a result, is passionate for the
      souls He loves also. She's serving God with her youth, and ministering
      to the youth, in campuses and conferences. She sings her testimony in
      her first single 'Beauty for Ashes' released under the Glory Music
      record label, and features in songs by Pure Streams such as 'Inside Me'
      and 'My Praise is Everyday'
    </p>
    <div className="story-div-email-section">
      <div className="blockDiv">
        <img src="Mask group 1.png" alt="" />
        <div className="flexBar">
          <img src="Mask group 2.png" alt="" />
          <div className="emailSection">
            <h2>Join The Waiting List</h2>
            <p>Be first to know when there is a new release.</p>
            <div className="form">
              <input type="text" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <img className="img" src="Mask group3.png" alt="" />
      </div>
    </div>
    <Footer />
  </div>
  )
}
