
$(window).on("load",function() {
    /*---------Preloader------------- */
    $(".preloader").fadeOut("1000"); 
});

$(document).ready(function(){
    /*-----------NavBar Shrink------------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink"); 
        }
        else{
            $(".navbar").removeClass("navbar-shrink"); 
        }
    });
    
    /*------------Video Popup-------*/
    const videoSrc = $("#player-1").attr("src"); 
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });

    /*--------Features Carousel--------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,    
            },
            1000:{
                items:3,
            }
        }
    });


    /*-------Screemshoots Carousel---------------- */
    $('.screenshoot-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,    
            },
            1000:{
                items:4,
            }
        }
    });

    /*-------Testimials Carousel---------------- */
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,    
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------Team Carousel------------------ */
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,    
            },
            1000:{
                items:3,
            }
        }
    });
    /*--------------Page Scrolling - Scrollit-------------*/
    $.scrollIt({
        topOffset: -50
    }); 

    /*--------------- NavBar Collapse---------------------- */
    $(".navbar-link").on("click",function(){
        $(".navbar-collapse").collapse("hide");
    });
    /*------------ Toglle Theme - Light & Dark Mode ------------ */
    function toggleTheme(){
        if(localStorage.getItem("shala-theme") !== null){
            if(localStorage.getItem("shala-theme") == "dark"){
                $("body").addClass("dark");
            }
            else{ 
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme","dark");
        }
        else{
            localStorage.setItem("shala-theme","light");
        }
        updateIcon();
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

}); 