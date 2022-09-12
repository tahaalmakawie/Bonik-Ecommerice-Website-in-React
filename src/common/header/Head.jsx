import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +20 111 678 8581</label>
            <i className='fa fa-envelope'></i>
            <label> tahaalmakawie@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
