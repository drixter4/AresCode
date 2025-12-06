import './navbar.css'
export default function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg header-transparent bg-transparent header-reverse" data-header-hover="light">
        <div class="container-fluid">
          <div class="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
            <a class="navbar-brand" href="demo-business.html">
              <img src="images\LogoBlanco.png" data-at2x="images\LogoBlanco.png" alt="" class="default-logo" />
              <img src="images\Logo.png" data-at2x="images\Logo.png" alt="" class="alt-logo" />
              <img src="images\Logo.png" data-at2x="images\Logo.png" alt="" class="mobile-logo" />
            </a>
          </div>
          <div class="col-auto menu-order position-static">
            <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav alt-font">
                <li class="nav-item"><a href="demo-business.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="demo-business-about.html" class="nav-link">About</a></li>
                <li class="nav-item dropdown dropdown-with-icon-style02">
                  <a href="demo-business-services.html" class="nav-link">Services</a>
                  <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a href="demo-business-services-details.html"><i class="bi bi-briefcase"></i>Business planning</a></li>
                    <li><a href="demo-business-services-details.html"><i class="bi bi-clipboard-data"></i>Business research</a></li>
                    <li><a href="demo-business-services-details.html"><i class="bi bi-peace"></i>Tracking operations</a></li>
                    <li><a href="demo-business-services-details.html"><i class="bi bi-bar-chart-line"></i>Market research</a></li>
                    <li><a href="demo-business-services-details.html"><i class="bi bi-send-check"></i>Business campaign</a></li>
                    <li><a href="demo-business-services-details.html"><i class="bi bi-globe2"></i>Digital solutions</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a href="demo-business-clients.html" class="nav-link">Clients</a></li>
                <li class="nav-item"><a href="demo-business-pricing.html" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="demo-business-blog.html" class="nav-link">Blog</a></li>
                <li class="nav-item"><a href="demo-business-contact.html" class="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-auto col-xxl-3 col-lg-2 text-end d-none d-sm-flex">
            <div class="header-icon">
              <div class="d-none d-xxl-inline-block me-25px xxl-me-10px"><div class="alt-font fs-15 xl-fs-13 widget-text fw-500"><span class="w-35px h-35px bg-base-color d-inline-block lh-36 me-10px border-radius-100px"><i class="feather icon-feather-phone me-10px"></i></span><a href="tel:1800222000" class="widget-text text-white-hover">1 800 222 000</a></div></div>
              <div class="header-button"><a href="demo-business-contact.html" class="btn btn-very-small btn-transparent-white-light btn-rounded">Get a quote</a></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}