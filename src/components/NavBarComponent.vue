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
              <a href="/" class="dropdown-toggle">
                <i class="fa fa-home bg-color-1" aria-hidden="true"></i>
                <span class="active">Home</span>
              </a>
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
                <li class="dropdown dropdown-submenu ">
                  <a href="/team" class="flexClass">Team </a>
                </li>
                <li class="">
                  <a class="flexClass" href="/photoGallery">Photo Gallery</a>
                </li>
              </ul>
            </li>
            <li class=" dropdown megaDropMenu color-2">
              <a href="/categories" class="dropdown-toggle">
                <i class="fa fa-file-text-o bg-color-2" aria-hidden="true"></i>
                <span>Categories</span>
              </a>
            </li>
            <li class="dropdown singleDrop color-4">
              <a href="/about" class="dropdown-toggle">
                <i class="fa fa-users bg-color-4" aria-hidden="true"></i>
                <span>About US</span>
              </a>
            </li>
            <li class="dropdown singleDrop color-5">
              <a href="/contactus" class="dropdown-toggle">
                <i class="fa fa-phone bg-color-5" aria-hidden="true"></i>
                <span>Contact Us</span>
              </a>
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
