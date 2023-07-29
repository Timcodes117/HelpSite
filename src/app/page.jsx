"use client"
import React, { useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faStar,faBriefcase, faCalendarAlt, faAngleRight, faAngleDown, faAt, faPhone,   } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope, faComment} from '@fortawesome/free-regular-svg-icons'
import './page.css'
import Image from 'next/image'

const Page= ()=> {
  config.autoAddCss = false
  const commentsArray = [
    {id: 'dd', name: 'Soowon E.', stars: [0, 0, 0, 0, 0],comment: "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He s an expert that you can trust in any handman task. I'd definitely hire him again. ", requests: 'April 3, 2022'},
    {id: 'pgc', name: 'Betsy.T', stars: [0, 0, 0],comment: 'Punctual, great communication, great work. I look forward to working with Thomas again!"', requests: 'march 15, 2023'},
    {id: 'gcra', name: 'Ray E.', stars: [0, 0, 0, 0],comment: 'Great cleaning! Reliable and was able to accommodate my schedule. Would recommend thanks Nikolina!"', requests: 'may 16, 2023'},
    {id: 'sad', name: 'Seema.H', stars: [0, 0, 0, 0, 0],comment: 'Great cleaning! Reliable and was able to accommodate my schedule. Would recommend thanks Nikolina!', requests: 'febuary 19, 2023'},
    {id: 'sewffe', name: 'happiness', stars: [0, 0, 0],comment: 'Great cleaning! Reliable and was able to accommodate my schedule. Would recommend thanks Nikolina!', requests: 'june 23, 2022'},
    {id: 'fcgr', name: 'Joy', stars: [0, 0, 0, 0,], comment: 'Great cleaning! Reliable and was able to accommodate my schedule. Would recommend thanks Nikolina!', requests: 'may 5, 2023'},
    {id: 'rffr', name: 'Mable', stars: [0, 0, 0, 0, 0],comment: 'Great cleaning! Reliable and was able to accommodate my schedule. Would recommend thanks Nikolina!', requests: 'june 2023'},
  ]

  const servicesArray = [
    {id: 'tt', title: '', requests: ''},
    {id: 'dd', title: '', requests: ''},
    {id: 'ff', title: '', requests: ''},
    {id: 'cc', title: '', requests: ''},
    {id: 'zz', title: '', requests: ''},
    {id: 'ss', title: '', requests: ''},
    {id: 'ww', title: '', requests: ''},
    {id: 'qq', title: '', requests: ''},
    {id: 'll', title: '', requests: ''},
    {id: 'op', title: '', requests: ''},
  ]

  const FAQ = [
    {first: [
      {id: 'wdy', title: 'What do you need to become a HelpInc', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'},
      {id: 'hdi', title: 'How do I get a job?', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'},
      {id: 'din', title: 'Do I need experience for the task?', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'}
    ]},
    {second: [
      {id: 'hld', title: 'How long does it take to process my registration?', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'},
      {id: 'hwi', title: 'How will I get the money?', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'},
      {id: 'wco', title: 'What categories of tasks can I perform on TaskRabbit?', details: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it s clear to Clients which services you offer.'}
    ]},
  ]

  const [chosenId, visibility] = useState('null');


  return (
    <>
    <header>
      <div className="logo"></div>
      <nav>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">Confidential policy</a>
        <a href="">About us</a>
        <a href="">Blog</a> 
      </nav>
    </header>

{/* hero section */}
    <div className="hero">
      <div className="hero_name">
        <strong style={{fontSize: 50,fontWeight: 'bold', width: '99%', wordWrap: 'break-word'}}>Revolutionizing Everyday Work</strong>
        <br />
        <label style={{fontSize: 15, fontWeight: '500', width: '99%'}}>Everyday work is important, but it s also time consuming. We can help.</label>
        <br />
        <div className='cent' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <button id='app'></button>
        <button id='gp'></button>
        </div>
        <br />
        <div className="ratings cent">
          <strong style={{fontSize: 30, fontFamily: 'sans-serif'}}>4.8</strong>
          <div style={{marginLeft: 5, display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
            <div className="star">
              <FontAwesomeIcon icon={faStar} style={{color: 'gold', width: 10, height: 10}} />
              <FontAwesomeIcon icon={faStar} style={{color: 'gold', width: 10, height: 10}} />
              <FontAwesomeIcon icon={faStar} style={{color: 'gold', width: 10, height: 10}} />
              <FontAwesomeIcon icon={faStar} style={{color: 'gold', width: 10, height: 10}} />
              <FontAwesomeIcon icon={faStar} style={{color: 'gold', width: 10, height: 10}} />
              </div>
            <div style={{fontSize: 10, marginTop: 2.5, marginBottom: 2.5}}>
              990+ Reviews
            </div>
          </div>
        </div>
        <br />
      </div>
<br />
      <div className="hero_img"></div>
    </div>

{/* service secction */}
    <div className="services">
      <label  style={{width: '100%', textAlign: 'center', color: '#2f518e', fontWeight: '500'}}>Popular</label>
      <strong style={{width: '100%', textAlign: 'center', fontSize: 20}}>Popular services</strong>
      <br />
      <div className="view">
        {
          servicesArray.map((service, ind)=>{
            return(
              <div className="service_box" key={ind}>
              <div className="thumbnail"></div>
              <label htmlFor=""></label>
              <b></b>
              </div>
              )
          })
        }
      </div>
    </div>
    <br />
    <br />

{/* Join section */}
<div className="Join">
  <label  style={{width: '100%', fontSize: 15, textAlign: 'center', color: '#2f518e', fontWeight: '500'}}>Join us</label>
  <strong style={{width: '100%', fontSize: 25, textAlign: 'center', }}>Our app</strong>
  <br />
  <br />
  <div className='japp' style={{display: 'flex', flexDirection: 'row', gap: 100, alignItems: 'center', justifyContent: 'center'}}>

  <div className="Join_img"></div>
  <div className="J_name">
    <strong style={{fontSize: 50}}>Download our App Now</strong>
    <br />
    <br />
    <label style={{color: 'gray', fontSize: 15}}>Make your to do list wherever you are with our mobile app.</label>
    <br />
    <label style={{color: 'gray', fontSize: 15}}> Help is an easy way to find qualified and reliable local Helpers for everything from assembling and installing furniture to moving and cleaning.</label>
    <br />
    <div className='cent' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <button id='app'></button>
        <button id='gp'></button>
        </div>
  </div>
  </div>
</div>
<br />
<br />
<br />

{/* Questions */}

<div className="FAQ">
  <label style={{width: '100%', fontSize: 15, textAlign: 'center', color: '#2f518e',  fontWeight: '500'}}>Questions</label>
  <strong style={{width: '100%', fontSize: 25, textAlign: 'center'}}>Frequently asked questions</strong>
  <br />
  <br />
  <div className="faq_view">
    <div style={{width: '90%', maxWidth: 500, display: 'flex', flexDirection: 'column', minHeight: 100, alignItems: 'center'}}>

{
  FAQ[0].first.map((data, index)=>{
    return(
      <>

      <div className="questionDropDownView" id={data.id} key={index} onClick={()=> chosenId !== data.id ? visibility(data.id) : visibility('null')}>
      <div style={{marginLeft: 10, width: '80%', fontWeight: '500',fontWeight: '500', fontSize: 15, minHeight: 50, display: 'flex', alignItems: 'center', }} key={data.id}>{data.title} { chosenId !== data.id ? <FontAwesomeIcon icon={faAngleRight} style={{width: 20, height: 20, position: 'absolute', right: 10 }} />:<FontAwesomeIcon icon={faAngleDown} style={{width: 20, height: 20, position: 'absolute', right: 10 }} bounce/>} </div>
      {/* <br /> */}
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      {chosenId === data.id ? 
      <>
      <br/> 
      <label style={{ fontSize: 13, marginBottom: 10, wordSpacing: 5,color: 'gray', textAlign: 'center', maxWidth: 300, width: '100%', minHeight: 0}}>{data.details}</label>
      <br/> 
      </>
    : null}
      </div>
    </div>
    <br />
    </>
    )
  })
}
    

    </div>

    <div style={{width: '90%', maxWidth: 500, display: 'flex', flexDirection: 'column', minHeight: 100, alignItems: 'center'}}>
    {
  FAQ[1].second.map((data, index)=>{
    return(
      <>
<div className="questionDropDownView"  id={data.id} key={index} onClick={()=> chosenId !== data.id ? visibility(data.id) : visibility('null')}>
      <div style={{marginLeft: 10, width: '80%', fontWeight: '500',fontWeight: '500', fontSize: 15, minHeight: 50, display: 'flex', alignItems: 'center', }} key={data.id}>{data.title} { chosenId !== data.id ? <FontAwesomeIcon icon={faAngleRight} style={{width: 20, height: 20, position: 'absolute', right: 10 }} />:<FontAwesomeIcon icon={faAngleDown} style={{width: 20, height: 20, position: 'absolute', right: 10 }} bounce/>} </div>
      {/* <br /> */}
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      {chosenId === data.id ? 
      <>
      <br/> 
      <label style={{ fontSize: 13, marginBottom: 10, wordSpacing: 5,color: 'gray', textAlign: 'center', maxWidth: 300, width: '100%', minHeight: 0}}>{data.details}</label>
      <br/> 
      </>
    : null}
      </div>
    </div>
    <br />
    </>
    )
  })
}
    </div>

  </div>
</div>
<br />
<br />

{/* Contact */}

<div className="contact">
<label style={{width: '100%', textAlign: 'center', fontSize: 15, color: '#2f518e',  fontWeight: '500'}}>contacts</label>
  <strong style={{width: '100%', textAlign: 'center', fontSize: 25}}>Contact us</strong>
  <div style={{display: 'flex', flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
  <form action="">
    <div className="form_img">
      <div className="img"></div>
      <br />
      <div className="dets">
        <div className="det_info">
          <b> <FontAwesomeIcon icon={faPhone} style={{marginRight: 5}}/> Call us</b>
          <label style={{fontSize: 11, color: 'gray'}}>+234 05156</label>
        </div>
        <div className="det_info">
          <b><FontAwesomeIcon icon={faAt} style={{marginRight: 5}}/>Our email</b>
          <label style={{fontSize: 11, color: 'gray'}}>@helpyou@gmail.com</label>
        </div>
      </div>
    </div>
    <div className="form_fields">
      <div className="input_container">
        <FontAwesomeIcon icon={faUser}  style={{margin: 20, width: 20, height: 20}}/>
        <input type="text" placeholder='Your name' />
      </div>
      <div className="input_container">
        <FontAwesomeIcon icon={faEnvelope}  style={{margin: 20, width: 20, height: 20}}/>
        <input type="text"placeholder='Your subject' />
      </div>
      <div className="input_container" style={{minHeight: 130, alignItems: 'flex-start'}}>
        <FontAwesomeIcon icon={faComment}  style={{margin: 20, width: 20, height: 20}}/>
        <textarea name="" id="" placeholder='Your message' ></textarea>
      </div>

      <button type='submit'><label>Signup</label></button>
    </div>
  </form>
    </div>
</div>

<div className="comments">
  <label style={{width: '100%', textAlign: 'center', fontSize: 15, color: '#2f518e',  fontWeight: '500'}}>Reviews</label>
  <br />
  <b style={{width: '100%', textAlign: 'center', fontSize: 30}}>Feedback from you</b>
  <br />
  <br />
  <br />
  <div className="CView">
    {
      commentsArray.map((comment, index)=>{
        return (

          <div className="comment_Box" key={index}>
      <div className="Cprofile"></div>
      <b>{comment.name}</b>
      <div>
      {
        [...comment.stars].map((star, index)=>{
          return(
            <FontAwesomeIcon icon={faStar} key={index} style={{width: 20, height: 20, color: 'gold'}}/>
      
          )
        })
      }
      </div>
      <br />
      <br />
      <figcaption style={{width: '90%', fontSize: 15, color: 'gray'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ut laborum illum quasi. Sequi odit maiores repellat molestias vel. Saepe odit architecto tenetur dolor exercitationem fugit delectus nulla, illo facilis.</figcaption>
      <div className="date">{comment.requests}</div>
    </div>
          )
      })
    }
  </div>
  <br />
  <div style={{width: '100%', height: 50, display: 'flex', alignItems:'center', justifyContent: 'center', gap: 10}}>
    <div className="sliderDot" style={{background:' #03c3de', border: 'none'}}></div>
    <div className="sliderDot" style={{}}></div>
    <div className="sliderDot" style={{}}></div>
    <div className="sliderDot" style={{}}></div>
    <div className="sliderDot" style={{}}></div>
  </div>
  <br />

</div>

<br />
<footer>
      <div className="det">
        <div className="logo"></div>
        <label htmlFor="" style={{fontSize: 17, letterSpacing: 2, lineHeightStep: 2, color: 'gray',}}>Make your to-do list wherever you are with our mobile app.</label>
      <br />
      <label htmlFor="">©2023. All rights reserved.</label>
      </div>

      <div className="lnx">
        <strong style={{fontSize: 20, color: '#2f518e'}}>About Us</strong>
       <a href="">FAQ’s</a>
       <a href="">Confidentiality policy </a>
       <a href="">Contact</a>
       <a href="">Blog</a>
      
      </div>
      
      <div className="lnx">
        <strong style={{fontSize: 20, color: '#2f518e'}}>Contact</strong>
       <a href="">+351-965-990 000</a>
       <a href="">@helpyou@gmail.com</a>
      </div>

      <div className="lnx" style={{minWidth: 250}}>
        <strong style={{fontSize: 20, color: '#2f518e' }}>Download our app</strong>
        <br />
       <label style={{width: '100%', fontSize: 11}}>Tackle your to do list wherever you are with our mobile app.</label>
       <br />
       <div className='cent' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <button id='app'></button>
        <button id='gp'></button>
        </div>
      </div>
      <label style={{minWidth: '100%', textAlign: 'center', marginTop: 50, color: '#868686'}}>By using this website, you understand the information being presented is provided for informational purposes only</label>
    </footer>

    </>
  )
}

export default Page
