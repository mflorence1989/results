<template >
  <section id="SpecialMenu">

  <div class="container">
    <i class="fa fa-arrow-left" @click="navigateToHome" ></i>
    <h5 class="comp-title">Portfolio Projects</h5>
    <div class="row">
      <div class="col-md-4">
        <div class="box">
          <div class="box-img-one">
            <div class="price-circle">
              <i class="fab fa-react"></i>
            </div>

          </div>
          <a href="https://flip-homes.herokuapp.com/">Flip Homes</a>
          <p> Website that showcases properties worth "flipping".</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box">
          <div class="box-img-two">
            <div class="price-circle">
              <i class="fab fa-react"></i>
            </div>
          </div>
          <a href="https://crypto-coin-calculator.herokuapp.com/">Bitcoin calculator</a>
          <p>Bitcoin calculator to track investors profits & losses.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box">
          <div class="box-img-three">
            <div class="price-circle">
              <i class="fab fa-html5"></i>
            </div>

          </div>
          <a href="https://marios-email-template.herokuapp.com">Html email template</a>
          <p>Html Email design. Tested with Litmus.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box">
          <div class="box-img-four">
            <div class="price-circle">
              <i class="fab fa-js"></i>
            </div>
          </div>
          <a href="http://fierce-savannah-42727.herokuapp.com">Community jobs</a>
          <p>Website created for community jobs</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="box">
          <div class="box-img-five">
            <div class="price-circle">
              <i class="fab fa-js"></i>
            </div>
          </div>
          <a href="http://fierce-savannah-42727.herokuapp.com">Community jobs</a>
          <p>Website created for community jobs</p>
        </div>
      </div>
    </div>

  </div>
  </section>


</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>
#SpecialMenu{
  padding: 100px 0;
  background: $greyBG;
  background-position: center;
  background-repeat: repeat;
}

.box{
  background: white;
  padding: 20px;
  margin-top: 40px;

}
/* a{
  text-decoration: none;
  color: pink;
  text-align: center;
  text-transform: capitalize;
} */

.box-img-one{
  width:100%;
  height:200px;
  background: url("https://mario-resume-portfolio.s3.us-east-2.amazonaws.com/uploads/portfolio/thumb_image/3/Screenshot_from_2018-03-27_22-43-09.png");
  background-size: cover;
  background-position: center;
  position: inline-block !important;
  margin-bottom: 50px;

}
.box-img-two{
  width:100%;
  height:200px;
  background: url("https://mario-resume-portfolio.s3.us-east-2.amazonaws.com/uploads/portfolio/thumb_image/4/Screenshot_from_2018-04-09_00-03-01.png");
  background-size: cover;
  background-position: center;
  position: inline-block !important;
  margin-bottom: 50px;

}
.box-img-three{
  width:100%;
  height:200px;
  background: url("https://mario-resume-portfolio.s3.us-east-2.amazonaws.com/uploads/portfolio/thumb_image/5/laster_email.png");
  background-size: cover;
  background-position: center;
  position: inline-block !important;
  margin-bottom: 50px;
}
.box-img-four{
  width:100%;
  height:200px;
  background: url("https://mario-resume-portfolio.s3.us-east-2.amazonaws.com/uploads/portfolio/thumb_image/2/oddgigs.png");
  background-size: cover;
  background-position: center;
  position: inline-block !important;
  margin-bottom: 50px;

}
.box-img-five{
  width:100%;
  height:200px;
  background: url("https://s8.postimg.cc/xl2fxo2t1/tuition_picture.png");
  background-size: cover;
  background-position: center;
  display: flex;
  margin-bottom: 50px;

}
.comp-title{
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  display: block;
}
.price-circle{
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  font-family: $displayFont;
  font-size: 2.5rem;
  background: white;
  height:50px;
  background: grey;
  width:50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 50%);
  box-shadow: 0px 0px 0px 10px rgba(255,255,255,0.41);

}
.details{
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
  line-height: 2;
  margin:0;
}
.boxes{
  padding-bottom: 50px;
}


</style>
