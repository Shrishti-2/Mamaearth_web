function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display ="block";
    document.getElementById('carouselExampleSlidesOnly').style.opacity='0.2'
}
 const closeCoupon=() =>{
    document.getElementsByClassName('coupon')[0].style.display ="none";
    document.getElementById('carouselExampleSlidesOnly').style.opacity='1'
 }