<template>
  <nav :class="scrolled ? 'scroll' : ''">
    <div class="nav-container">
      <g-link to="/" style="color:#4d4646;">
      <div class="logo j-text-bold">
        justaashir
        <b class="j-color-primary">.</b>
      </div>
      </g-link>
      <div class="nav-links">
        <g-link to="/about" class="link">About</g-link>
        <g-link to="/blog" class="link">Blog</g-link>
        <g-link to="/contact" class="link">Contact</g-link>
        <a href="https://www.twitter.com/justaashir" class="link"><img src="@/assets/icons/twitter.png" alt=""></a>
        <a href="https://www.github.com/justaashir" class="link"><img src="@/assets/icons/github.png" alt=""></a>
         <a href="https://www.dev.to/justaashir" class="link"><img src="@/assets/icons/dev.png" alt=""></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

// Mobile
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  .logo {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.6rem;
    border-bottom: 2px solid transparent;
  }
  .nav-container {
    display: flex;
    align-items: center;
    height: 55px;
    padding: 0 1rem;
    max-width: 960px;
    margin: auto;
    justify-content: space-between;
    -webkit-transition: height 0.3s ease;
    transition: height 0.3s ease;

    .nav-links {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      flex: 1 1;
      align-items: center;
      .link {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.6rem;
        color: grey;
        border-bottom: 2px solid transparent;
        &:hover {
          color: #257942;
          background-color: #effaf3;
          -webkit-transition: background-color 0.3s ease;
          transition: background-color 0.3s ease;
        }
      }
    }
  }
}
nav.scroll {
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #257942;
}
nav.scroll .nav-container {
  border-bottom: none;
}
img{
  width:40px;
}

// PC & Tablet
@media (min-width: 620px) {
  img{
  width:25px;
}
  nav {
    .logo {
      font-size: 1.5em;
      padding: 1rem 0rem;
    }
    .nav-container {
      height: 70px;
      .nav-links {
        flex-direction: row;
        justify-content: space-between;
        flex: unset;
        height: 100%;
        .link {
          font-size: 1rem;
          margin: 0 1rem;
          padding: 1rem 0.5rem;
        }
      }
    }
  }
  nav.scroll .nav-container {
    height: 60px;
    border-bottom: 0px solid #257942;
  }
}
</style>
<script>
export default {
  data(){
    return{
      scrolled: false
    }
  },
  methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
  }
},
created () {
  if (process.isClient) {
  window.addEventListener('scroll', this.handleScroll);
}
},
destroyed () {
  if (process.isClient) {
  window.removeEventListener('scroll', this.handleScroll);
}
}
}
</script>