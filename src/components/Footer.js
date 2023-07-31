import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = () => {
  return (
    <div>
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>
    
        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-autolink-body-emphasis text-decoration-none ">
        <InstagramIcon sx={{color:'teal', marginRight: '20px',fontSize:'35px'}}/><WhatsAppIcon sx={{color:'teal', marginRight: '20px',fontSize:'35px'}}/>
<MailOutlineIcon sx={{color:'teal', marginRight: '20px',fontSize:'35px'}}/>
        </a>
    
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
          <li class="nav-item"><a href="/products" class="nav-link px-2 text-body-secondary">Products</a></li>
          {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li> */}
          <li class="nav-item"><a href="/Cart" class="nav-link px-2 text-body-secondary">Cart</a></li>
          <li class="nav-item"><a href="register" class="nav-link px-2 text-body-secondary">Signin</a></li>
        </ul>
      </footer>
    </div></div>
  )
}

export default Footer