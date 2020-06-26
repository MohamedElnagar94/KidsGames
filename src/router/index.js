import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import $ from "jquery/dist/jquery.min";
// window.$ = window.jQuery = require('jquery');
// import Swal from "sweetalert2";
import "bootstrap/dist/js/bootstrap";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      reload: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/photoGallery",
    name: "PhotoGallery",
    component: () => import("../views/PhotoGallery.vue")
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue")
  },
  {
    path: "/numbersLevels",
    name: "NumbersLevels",
    component: () => import("../views/Kids/NumbersLevels.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/kidprofile",
    name: "KidzProfile",
    component: () => import("../views/KidzProfile.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/cardsLevels",
    name: "CardsLevels",
    component: () => import("../views/Kids/CardsLevels.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/sortsLevels",
    name: "SortsLevels",
    component: () => import("../views/Kids/SortsLevels.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/categories",
    name: "CategoriesCollection",
    component: () => import("../views/Kids/Categories.vue")
  },
  {
    path: "/numbers",
    name: "LearnNumbers",
    component: () => import("../views/Kids/Numbers/LearnNumbers.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/count",
    name: "CountNumbers",
    component: () => import("../views/Kids/Numbers/CountNumbers.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle2collections",
    name: "Puzzle2Collections",
    component: () => import("../views/Kids/Puzzle2Collection.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/pencilInBox",
    name: "PencilsInBox",
    component: () => import("../views/Kids/Numbers/PencilsInBox.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/order",
    name: "OrderNumbers",
    component: () => import("../views/Kids/Numbers/OrderNumbers.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/ballons",
    name: "Balloons",
    component: () => import("../views/Kids/Numbers/Balloons.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle1Collections",
    name: "Puzzle1Collection",
    component: () => import("../views/Kids/Puzzle1Collection.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/cards-2-2",
    name: "Card2-2",
    component: () => import("../views/Kids/Cards/Card2-2.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/cards-2-3",
    name: "Card2-3",
    component: () => import("../views/Kids/Cards/Card2-3.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/cards-3-4",
    name: "Card3-4",
    component: () => import("../views/Kids/Cards/Card3-4.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/cards-4-4",
    name: "Card4-4",
    component: () => import("../views/Kids/Cards/Card4-4.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/Exam2",
    name: "Exam1",
    component: () => import("../views/Kids/Practice/Exam1.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/Result",
    name: "Results",
    component: () => import("../views/Kids/Practice/Results.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else if (JSON.parse(localStorage.getItem("finalResult")).length === 0) {
        next("/numbersLevels");
      } else {
        next();
      }
    }
  },
  {
    path: "/numbersExam",
    name: "Exam2",
    component: () => import("../views/Kids/Practice/Exam2.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/mergesort",
    name: "MergeSort",
    component: () => import("../views/Kids/Sort/MergeSort.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/bubblesort",
    name: "BubbleSort",
    component: () => import("../views/Kids/Sort/BubbleSort.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/insertionsort",
    name: "InsertionSort",
    component: () => import("../views/Kids/Sort/InsertionSort.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/binarySearch",
    name: "BinarySearch",
    component: () => import("../views/Kids/Sort/BinarySearch.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/maze",
    name: "MazeRunner",
    component: () => import("../views/Kids/MazeRunner/MazeRunner.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle",
    name: "Puzzle1-4",
    component: () => import("../views/Kids/Puzzles/Puzzle1-4.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle2",
    name: "Puzzle2-3",
    component: () => import("../views/Kids/Puzzles/Puzzle2-3.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle3",
    name: "Puzzle2-4",
    component: () => import("../views/Kids/Puzzles/Puzzle2-4.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "/puzzle4",
    name: "Puzzle2-5",
    component: () => import("../views/Kids/Puzzles/Puzzle2-5.vue"),
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("auth")) {
        window.$("#loginModal").modal("show");
      } else {
        next();
      }
    }
  },
  {
    path: "*",
    name: "ErrorPage",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
