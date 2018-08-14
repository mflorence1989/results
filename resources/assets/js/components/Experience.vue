<template lang="html">
<section id="Reviews">

<div class="container">
  <router-view></router-view>
  <i class="fa fa-arrow-left" @click="navigateToHome" ></i>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
<div class="row">

<div class="col-md-8 side-img">

<div class="side-img">

<img src="https://images.pexels.com/photos/884450/pexels-photo-884450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
</div>
</div>
<div class="col-md-4">
<h2> Technology Experience</h2>
<h5>Web Developement + Support</h5>

<p>STONEMOR LP - TIER 2 SOFTWARE APPLICATION SUPPORT (2014 -2017)
Debugged internal Applications.
Designed internal application dashboard.
Maintained hardware & software database.
</p>
<p>JEFFERIES LLC - AUDIO VISUAL TECHNICIAN (2011 – 2014)
Set up all audio and visual equipment for large scale banking events.
Configured video & audio conferences.
</p>
<p>Tuition.io- Html Email Developer (4-18-current)
Create & Design Html Email templates.
UX UI design.
Litmus Testing Tools
</p>
<div class="author">
  <strong>1-1-2013</strong> - <strong>4-19-1989</strong>
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

<style lang="css">

#Reviews{
  padding: 100px 0;
text-align:right;

}
p{
  font-size: 0.8rem;
}
.side-img{
  text-align: left;
  position: relative;

}
h2{
  margin-bottom: 3rem;
}

img{
  position: absolute;
  height: 300px;

}
h4{
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
.author{
  font-size: 0.8rem;
  color: $paragraphColor;
  font-weight: 300;
  text-transform: capitalize;
  margin-bottom: 2rem;



}
strong{



}


</style>
