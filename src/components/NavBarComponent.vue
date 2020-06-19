<template>
  <!-- NAVBAR -->
  <nav
    id="menuBar"
    class="navbar navbar-default lightHeader p-0"
    role="navigation"
  >
    <div class="container" style="display: unset">
      <div class="row align-items-center">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"
            ><img src="img/logo-school.png" alt="Kidz School"
          /></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div
          class="collapse navbar-collapse navbar-ex1-collapse text-left"
          style="flex-basis: unset"
        >
          <ul class="nav navbar-nav navbar-right" style="flex-direction: row">
            <li class="dropdown singleDrop color-1 active">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-home bg-color-1" aria-hidden="true"></i>
                <span class="active">Home</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-left">
                <li class=" active ">
                  <a class="flexClass" href="/">Kidz School</a>
                </li>
              </ul>
            </li>
            <li class="dropdown singleDrop color-3">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="fa fa-list-ul bg-color-3" aria-hidden="true"></i>
                <span>Pages</span></a
              >
              <ul class="dropdown-menu dropdown-menu-left">
                <li class=" ">
                  <RouterLink class="flexClass" to="/about">About</RouterLink>
                </li>
                <li class="dropdown dropdown-submenu ">
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Team<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class=" ">
                      <a class="flexClass" href="teachers.html">Teachers</a>
                    </li>
                    <li class=" ">
                      <a class="flexClass" href="teachers-details.html"
                        >Teacher Details</a
                      >
                    </li>
                  </ul>
                </li>
                <li class=" ">
                  <a class="flexClass" href="testimonial.html">Testimonial</a>
                </li>
                <li
                  class="dropdown dropdown-submenu
                     ||
                     ||
                     "
                >
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Events
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class=" ">
                      <a class="flexClass" href="all-events.html">All Events</a>
                    </li>
                    <li class="">
                      <a class="flexClass" href="single-event-left-sidebar.html"
                        >Single Event Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="flexClass"
                        href="single-event-right-sidebar.html"
                        >Single Event Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="">
                  <a class="flexClass" href="photo-gallery.html"
                    >Photo Gallery</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="pricing-table.html"
                    >Pricing Table</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="services.html">Services</a>
                </li>
                <li class="">
                  <a class="flexClass" href="service-details.html"
                    >Services Details</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="search-result.html"
                    >Search Results</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="contact-us.html">Contact Us</a>
                </li>
                <li class=""><a class="flexClass" href="faq.html">FAQ</a></li>
                <li class="">
                  <a class="flexClass" href="sign-up-or-login.html"
                    >Sign Up / Login</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="404.html">Error 404</a>
                </li>
                <li>
                  <a class="flexClass" href="coming-soon.html">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li class=" dropdown megaDropMenu color-2">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="300"
                data-close-others="true"
                aria-expanded="false"
              >
                <i class="fa fa-file-text-o bg-color-2" aria-hidden="true"></i>
                <span>Courses</span>
              </a>
              <ul class="row dropdown-menu">
                <li class="col-12 col-sm-12 col-md-3">
                  <ul class="list-unstyled">
                    <li>Courses Grid</li>
                    <li class="">
                      <a class="flexClass" href="course-grid-full.html"
                        >Courses Grid Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="course-grid-left-sidebar.html"
                        >Courses Grid Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="course-grid-right-sidebar.html"
                        >Courses Grid Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="col-12 col-sm-12 col-md-3">
                  <ul class="list-unstyled">
                    <li>Courses List</li>
                    <li class="">
                      <a href="course-list-fullwidth.html"
                        >Courses List Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="course-list-left-sidebar.html"
                        >Courses List left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="course-list-right-sidebar.html"
                        >Courses List Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="col-12 col-sm-12 col-md-3">
                  <ul class="list-unstyled">
                    <li>Single Course</li>
                    <li class="">
                      <a class="flexClass" href="course-single.html"
                        >Single Course Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="flexClass"
                        href="course-single-left-sidebar.html"
                        >Single Course left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="flexClass"
                        href="course-single-right-sidebar.html"
                        >Single Course Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="col-12 col-sm-12 col-md-3">
                  <ul class="list-unstyled">
                    <li>Checkout</li>
                    <li class="">
                      <a class="flexClass" href="checkout-step-1.html"
                        >Personal Info</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="checkout-step-2.html"
                        >Payment Info</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="checkout-step-3.html"
                        >Confirmation</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown singleDrop color-4">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="fa fa-pencil-square-o bg-color-4"
                  aria-hidden="true"
                ></i>
                <span>Store</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li
                  class="dropdown dropdown-submenu
                     ||
                     ||
                     "
                >
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Products<i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="">
                      <a class="flexClass" href="product.html"
                        >Products Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="product-left-sidebar.html"
                        >Products Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="product-right-sidebar.html"
                        >Products Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="">
                  <a class="flexClass" href="single-product.html"
                    >Single Product</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="category.html"
                    >Product Categories</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="cart-page.html">Cart</a>
                </li>
                <li class="dropdown dropdown-submenu">
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Checkout<i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class=" ">
                      <a class="flexClass" href="checkout-step-1.html"
                        >Personal Info</a
                      >
                    </li>
                    <li class=" ">
                      <a class="flexClass" href="checkout-step-2.html"
                        >Payment Info</a
                      >
                    </li>
                    <li class=" ">
                      <a class="flexClass" href="checkout-step-3.html"
                        >Confirmation</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown singleDrop color-5">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-calendar bg-color-5" aria-hidden="true"></i>
                <span>Blog</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li
                  class="dropdown dropdown-submenu
                     ||


                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Blog Grid<i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="">
                      <a class="flexClass" href="blog-grid.html"
                        >Blog Grid Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="blog-grid-left-sidebar.html"
                        >Blog Grid Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="blog-grid-right-sidebar.html"
                        >Blog Grid Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="dropdown dropdown-submenu
                     ||
                     ||
                     "
                >
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Blog List<i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="">
                      <a class="flexClass" href="blog-list.html"
                        >Blog List Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="blog-list-left-sidebar.html"
                        >Blog List Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="blog-list-right-sidebar.html"
                        >Blog List Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="dropdown dropdown-submenu
                     ||
                     ||
                     "
                >
                  <a
                    href="javascript:void(0)"
                    class="dropdown-toggle flexClass"
                    data-toggle="dropdown"
                    >Single Blog<i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="">
                      <a class="flexClass" href="single-blog.html"
                        >Single Blog Fullwidth</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="single-blog-left-sidebar.html"
                        >Single Blog Left Sidebar</a
                      >
                    </li>
                    <li class="">
                      <a class="flexClass" href="single-blog-right-sidebar.html"
                        >Single Blog Right Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown singleDrop color-6">
              <a
                href="javascript:void(0)"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="fa fa-gg bg-color-6" aria-hidden="true"></i>
                <span>Components</span></a
              >
              <ul class="dropdown-menu dropdown-menu-right">
                <li class=" ">
                  <a class="flexClass" href="accordion-toggles.html"
                    >Accordions &amp; Toggles</a
                  >
                </li>
                <li class="">
                  <a class="flexClass" href="tabs-dropdown.html"
                    >Tabs &amp; Dropdowns</a
                  >
                </li>
                <li class=" ">
                  <a class="flexClass" href="alert-label-badges.html"
                    >Alert-Label-badges</a
                  >
                </li>
                <li class=" ">
                  <a class="flexClass" href="progress-bar.html">Progress Bar</a>
                </li>
                <li class=" ">
                  <a class="flexClass" href="buttons.html">Buttons</a>
                </li>
                <li class=" ">
                  <a class="flexClass" href="forms.html">Forms</a>
                </li>
                <li class=" ">
                  <a class="flexClass" href="list-panel.html"
                    >Listgroups Panel</a
                  >
                </li>
                <li class=" ">
                  <a class="flexClass" href="tooltip-pagination.html"
                    >Tooltip Pagination</a
                  >
                </li>
                <li class=" ">
                  <a class="flexClass" href="typography.html">Typography</a>
                </li>
                <li class=" ">
                  <a class="flexClass" href="responsive-embed.html"
                    >Responsive Embed</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="cart-dropdown">
          <a href="#" class="bg-color-6 shop-cart">
            <i class="fa fa-shopping-basket " aria-hidden="true"></i>
            <span class="badge bg-color-1">3</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <li>
              <i class="fa fa-shopping-basket " aria-hidden="true"></i>3 items
              in your cart
            </li>
            <li>
              <a href="single-product.html">
                <div class="media">
                  <div class="media-left">
                    <img src="img/home/cart/cart-img.png" alt="cart-Image" />
                  </div>
                  <div class="media-body">
                    <h4>Barbie Racing Car</h4>
                    <div class="price">
                      <span class="color-1">$50</span>
                    </div>
                    <span class="amount">Qnt: 1</span>
                  </div>
                </div>
              </a>
              <span class="cancel"
                ><i class="fa fa-close" aria-hidden="true"></i
              ></span>
            </li>
            <li>
              <a href="single-product.html">
                <div class="media">
                  <div class="media-left">
                    <img src="img/home/cart/cart-img.png" alt="cart-Image" />
                  </div>
                  <div class="media-body">
                    <h4>Barbie Racing Car</h4>
                    <div class="price">
                      <span class="color-1">$50</span>
                    </div>
                    <span class="amount">Qnt: 1</span>
                  </div>
                </div>
              </a>
              <span class="cancel"
                ><i class="fa fa-close" aria-hidden="true"></i
              ></span>
            </li>
            <li>
              <a href="single-product.html">
                <div class="media">
                  <div class="media-left">
                    <img src="img/home/cart/cart-img.png" alt="cart-Image" />
                  </div>
                  <div class="media-body">
                    <h4>Barbie Racing Car</h4>
                    <div class="price">
                      <span class="color-1">$50</span>
                    </div>
                    <span class="amount">Qnt: 1</span>
                  </div>
                </div>
              </a>
              <span class="cancel"
                ><i class="fa fa-close" aria-hidden="true"></i
              ></span>
            </li>
            <li>
              <span class="cart-total">Subtotal</span>
              <span class="cart-price">$150</span>
              <div class="cart-button">
                <button
                  type="button"
                  class="btn btn-primary"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='checkout-step-1.html';"
                  data-cf-modified-12dcc391edff26dbc2c5b8bb-=""
                >
                  Checkout
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='cart-page.html';"
                  data-cf-modified-12dcc391edff26dbc2c5b8bb-=""
                >
                  View Cart
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent"
};
</script>

<style scoped>
.flexClass {
  display: flex;
}
.dropdown-toggle::after {
  border: none;
}
.dropdown-menu {
  top: 102%;
}
.dropdown-submenu .dropdown-menu {
  top: 0;
}
/*// Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
  .navbar-header {
    width: 100%;
  }
  .navbar-default .navbar-nav > li > a {
    padding: 12px !important;
  }
  .dropdown.singleDrop {
    width: 100% !important;
  }
  .dropdown.megaDropMenu {
    width: 100% !important;
  }
  .navbar-collapse li.dropdown .dropdown-menu {
    position: unset;
  }
}

/*// Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar-header {
    width: 100%;
  }
  .navbar-default .navbar-nav > li > a {
    padding: 12px !important;
  }
  .dropdown.singleDrop {
    width: 100% !important;
  }
  .dropdown.megaDropMenu {
    width: 100% !important;
  }
  .navbar-collapse li.dropdown .dropdown-menu {
    position: unset;
  }
  #menuBar.bb-fixed-header .navbar-nav > li > a {
    padding: 3px 0 0;
  }
}

/*// Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar-collapse {
    padding: 0;
  }
  #menuBar.bb-fixed-header .navbar-nav > li > a {
    padding: 3px 0 0;
  }
  .navbar-default .navbar-nav > li > a {
    padding: 24px 0 0;
  }
}

/*// Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
  #menuBar.bb-fixed-header .navbar-nav > li > a {
    padding: 3px 0 0;
  }
  .navbar-default .navbar-nav > li > a {
    padding: 24px 0 0;
  }
}

/*// Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
  #menuBar.bb-fixed-header .navbar-nav > li > a {
    padding: 3px 0 0;
  }
  .navbar-default .navbar-nav > li > a {
    padding: 24px 0 0;
  }
}
</style>
