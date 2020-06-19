<template>
  <!-- HEADER -->
  <header id="pageTop" class="header-wrapper">
    <ColorBar topFixed="top-fixed"></ColorBar>
    <!-- TOP INFO BAR -->
    <div class="top-info-bar bg-color-7">
      <div class="container p-0">
        <div class="row text-left">
          <div class="col-md-7">
            <ul
              class="list-inline topList d-flex justify-content-start align-items-center"
            >
              <li>
                <i class="fa fa-envelope bg-color-1" aria-hidden="true"></i>
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li>
              <li>
                <i class="fa fa-phone bg-color-2" aria-hidden="true"></i> +1 234
                567 8900
              </li>
              <li>
                <i class="fa fa-clock-o bg-color-6" aria-hidden="true"></i>
                Open: 9am - 6pm
              </li>
            </ul>
          </div>
          <div class="col-md-5">
            <ul class="list-inline functionList w-100">
              <li><i class="fa fa-globe bg-color-4" aria-hidden="true"></i></li>
              <li class="LanguageList">
                <select name="guiest_id1" id="guiest_id1" class="select-drop">
                  <option value="0"
                    ><i class="fa fa-globe bg-color-4" aria-hidden="true"></i>
                    Language</option
                  >
                  <option value="1">English</option>
                  <option value="2">Spanish</option>
                  <option value="3">Hindi</option>
                </select>
              </li>
              <li>
                <i class="fa fa-unlock-alt bg-color-5" aria-hidden="true"></i>
                <a href="#loginModal" data-toggle="modal">Login</a
                ><span>or</span
                ><a href="#createAccount" data-toggle="modal"
                  >Create an account</a
                >
              </li>
              <li class="cart-dropdown">
                <a href="#" class="bg-color-6 shop-cart">
                  <i class="fa fa-shopping-basket " aria-hidden="true"></i>
                  <span class="badge bg-color-1">3</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <i class="fa fa-shopping-basket " aria-hidden="true"></i>3
                    items in your cart
                  </li>
                  <li>
                    <a href="single-product.html">
                      <div class="media">
                        <div class="media-left">
                          <img
                            src="img/home/cart/cart-img.png"
                            alt="cart-Image"
                          />
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
                          <img
                            src="img/home/cart/cart-img.png"
                            alt="cart-Image"
                          />
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
                          <img
                            src="img/home/cart/cart-img.png"
                            alt="cart-Image"
                          />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Nav></Nav>
  </header>
</template>

<script>
import ColorBar from "@/components/ColorBarComponent.vue";
import Nav from "@/components/NavBarComponent";
export default {
  name: "NavBar",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Nav,
    ColorBar
  }
};
</script>

<style scoped>
/*// Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
  .top-info-bar {
    display: none;
  }
  .navbar-header {
    width: 100%;
  }
}

/*// Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px) {
  .top-info-bar {
    display: none;
  }
}

/*// Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
}

/*// Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/*// Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
}
</style>
