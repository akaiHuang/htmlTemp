var View = {
  ini: function () {
    $(".section1").css('display','none')
    TweenMax.set($(".section1"), { autoAlpha: 0 });
    $(".section2").css('display','none')
    TweenMax.set($(".section2"), { autoAlpha: 0 });
    $(".section3").css('display','none')
    TweenMax.set($(".section3"), { autoAlpha: 0 });
    
    $(".thanks").css('display','none')
    TweenMax.set($(".thanks"), { autoAlpha: 0 });
    
    $(".section4").css('display','none')
    TweenMax.set($(".section4"), { autoAlpha: 0 });
    $('.logo').click(function(){
        location.reload()
    })
  },
  showsection1: function () {
    $(".section1").css('display','')
    TweenMax.to($(".section1"), 1, { autoAlpha: 1 });
    setTimeout(iniBGVideo.getYT,500)
    section1Event.ini();
    
  },
  showsection2: function () {
    $(".section2").css('display','')
    $(".back").css("transform", "rotateY(180deg)");
    $(".front").css("transform", "rotateY(0deg)");
    wizardEvent.step2()
    section2Event.ini();
  },
  showsection3: function () {
    $(".section1").css('display','none')
    TweenMax.set($(".section1"), { autoAlpha: 0 });
    $(".section2").css('display','none')
    TweenMax.set($(".section2"), { autoAlpha: 0 });
    //video
    $(".section3").css('display','')
    TweenMax.to($(".section3"), 1, { autoAlpha: 1 });
    setTimeout(section3Event.getYT,500)
    wizardEvent.step3()
  },
  showsection4: function () {
    //停止youtube檢查點事件
    clearInterval(countingTime);
    //檢查觀看進度
    console.log('checkpoint_1:',checkpoint_1,'checkpoint_2:',checkpoint_2,'checkpoint_3:',checkpoint_3,)
    sw = $(window).width()
    if(sw <= 640){
        ismobile = true
    }
    $(".section3").css('display','none')
    TweenMax.set($(".section3"), { autoAlpha: 0 });
    //show
    $(".section4").css('display','')
    TweenMax.to($(".section4"), 1, { autoAlpha: 1 });
    //color
    $(".pickColored").css('display','none')
    TweenMax.set($(".pickColored"), { autoAlpha: 0 });
    //form
    $(".formContainer").css('display','none')
    TweenMax.set($(".formContainer"), { autoAlpha: 0 });
    wizardEvent.step4()
    section4Event.ini()
  }
};

var closeSection2Event = {
  close: function () {
    keepthisPick = false;
    //rec2Pick = false 可以重選但是不要再存一次
    TweenMax.set($(".section2"), { autoAlpha: 0 });
    $(".dot2").removeClass("dotCheck");
    TweenMax.to($(".pline"), 1, { css: { width: "0%" } });
  },
};

var wizardEvent = {
    step2:function(){
        TweenMax.to($(".pline"), 0.3, {
            css: { width: "25%" },
            onComplete: function () {
              $(".dot2").addClass("dotCheck");
              
            },
          });
    },
    step3:function(){
        TweenMax.to($(".pline"), 0.3, {
            css: { width: "45%" },
            onComplete: function () {
              $(".dot3").addClass("dotCheck");
             // section2Event.ini();
            },
          });
    },
    step4:function(){
        TweenMax.to($(".pline"), 0.3, {
            css: { width: "68%" },
            onComplete: function () {
              $(".dot4").addClass("dotCheck");
              //section2Event.ini();
            },
          });
    },
    step5:function(){
        TweenMax.to($(".pline"), 0.3, {
            css: { width: "93%" },
            onComplete: function () {
              $(".dot5").addClass("dotCheck");
             //section2Event.ini();
            },
          });
    }
}