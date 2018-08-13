<template>
  <div id="app">
        <router-view name="header-top"></router-view>

        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>

</div>
</template>

<script>
    import Header from './components/Header.vue';
  

    export default {
        components: {
            appHeader: Header,


        }
    }
</script>

<style>
* {
  box-sizing: border-box;
}

i{
  cursor: pointer;
}
    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
    body{
      color: #202020;
    }
h2{
  font-size: 2rem;
  font-family: 'Dosis', sans-serif;
  margin: .5rem 0 1rem;
  text-transform: capitalize;
  color: #202020;
}

h5{
  color: #202020;
  font-size: 0.9rem;
  margin: .5rem 0 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
}
  p{
    font-size: 0.8rem;
    color: #ADADAD;
    line-height: 1.5;
    margin: .5rem 0 1rem;
    font-weight: 300;

  }
  a{
    font-size: 1.1rem;
    text-decoration: none;
    transition: all .5s ease-in-out;


  }
  &:hover{
    color: #911A20;
    text-decoration: none;
  }
  strong{
    font-weight: 600;
  }
  em{
    font-style:italic;
  }

</style>
