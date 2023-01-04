import React from 'react'
import './contact.css'

export const Contact = () => {
return (
<section id="contact">
<div className='h5-container'>
        <h5>/contact ━━━━━━━</h5>
      </div>
  <div className="container__contact">
<div className="what">
<h3>What's Next?</h3>
</div>
<div className="touch">
<h3>Get In Touch</h3>
</div>
<div className="description__contact">
<p>I will be glad to contribute to any project, Let's build something amazing together!</p>
</div>
<div className="hello">
<a href = "mailto:aradhya@my.yorku.ca" className='btn'> Say hello</a>
</div>
</div>
</section>
)
}

export default Contact