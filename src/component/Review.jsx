import React from 'react'

const Review = () => {
  return (
    <div className='rev1' id="a12">
      <div ><p style={{alignItems:'center',justifyContent:'center',display:'flex'}}>Testimonials</p>
      <h1 style={{alignItems:'center',justifyContent:'center',display:'flex',marginBottom:'64px'}}>Lovely people say about us </h1>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src="LeftArrow.png" alt="" style={{width:'64px',height:'64px',marginTop:'120px'}} />
        <div style={{margin:'40px 24px 40px 24px',flexWrap:'wrap'}}>
           <div style={{margin:'0 0 24px 0',display:'flex',justifyContent:'center'}}><img src="f1.png" alt="" /></div>
           <p style={{width:'281px',height:'88px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga beatae ratione asperiores aliquid veniam aspernatur quos, nesciunt perspiciatis ea consequatur at quas ab. Asperiores!</p>
        </div>
        <div style={{margin:'40px 24px 40px 24px'}}>
           <div style={{margin:'0 0 24px 0',display:'flex',justifyContent:'center'}}><img src="f2.png" alt="" /></div>
           <p style={{width:'281px',height:'88px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga beatae ratione asperiores aliquid veniam aspernatur quos, nesciunt perspiciatis ea consequatur at quas ab. Asperiores!</p>
        </div>
        <div style={{margin:'40px 24px 40px 24px'}}>
           <div style={{margin:'0 0 24px 0',display:'flex',justifyContent:'center'}}><img src="f3.png" alt="" /></div>
           <p style={{width:'281px',height:'88px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga beatae ratione asperiores aliquid veniam aspernatur quos, nesciunt perspiciatis ea consequatur at quas ab. Asperiores!</p>
        </div>
        <img src="RightArrow.png" alt="" style={{width:'64px',height:'64px',marginTop:'120px'}} />
      </div>
      </div>
  )
}

export default Review
