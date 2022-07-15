var iniRandom = [1,2,3]
var afterPick = [1,2,3]
var firstPick
var debug
var ismobile = false
var sw
var section1Event = {
    ini:function(){
        //1.random pic and keep the Index        
        function shuffle(a,b) {
            var num = Math.random() > 0.5 ? -1:1;
            return num;
          }
        iniRandom = iniRandom.sort(shuffle);
        console.log('三張卡牌隨機順序：',iniRandom)
        $('.f1').addClass("btn"+iniRandom[0])
        $('.f2').addClass("btn"+iniRandom[1])
        $('.f3').addClass("btn"+iniRandom[2])
        $('.btn1 .front').addClass('feature_1')
        $('.btn1 .back').addClass('feature_1_back')
        $('.btn2 .front').addClass('feature_2')
        $('.btn2 .back').addClass('feature_2_back')
        $('.btn3 .front').addClass('feature_3')
        $('.btn3 .back').addClass('feature_3_back')
        //2.add ClickEvent
        sw = $(window).width()
        if(sw<=640){
          swipeEvent.mobileIndex()
        }
        clickEvent.section1()
       
        $('.closeIntroBtn ,.mobileIntro').bind('touchstart click',function(e){
            e.preventDefault()
            TweenMax.to($(".mobileIntro"),0.5, { autoAlpha: 0,onComplete:function(){
                $(".mobileIntro").css("display", "none");
            } });
          //   TweenMax.to($(".pcIntro"),0.5, { autoAlpha: 0,onComplete:function(){
          //     $(".pcIntro").css("display", "none");
          // } });
        })
       
    }
}
var checkWitchCard
var clickEvent = {
    section1:function(){
        $('.btn1,.btn2,.btn3').bind('click',function(e){
            //console.log(e.currentTarget)
            e.preventDefault()
            
            checkWitchCard = $.inArray("btn1",e.currentTarget.classList)

            if(checkWitchCard != -1){
                firstPick = 1
                // TweenMax.to($(".btn1"),0.1, { scale: 1.1,onComplete:function(){
                //     TweenMax.to($(".btn1"),0.1, { scale: 1});
                // } });
                gtag('event', '首頁點擊豪華', { 'event_category': 'Click', 'event_label': '第一選項', 'value': 500 });
            }else{
                checkWitchCard = $.inArray("btn2",e.currentTarget.classList)
                if(checkWitchCard != -1){
                    firstPick = 2
                    gtag('event', '首頁點擊安全', { 'event_category': 'Click', 'event_label': '第一選項', 'value': 500 });
                    // TweenMax.to($(".btn2"),0.1, { scale: 1.1,onComplete:function(){
                    //     TweenMax.to($(".btn2"),0.1, { scale: 1});
                    // } });
                }else{
                    firstPick = 3
                    gtag('event', '首頁點擊空間', { 'event_category': 'Click', 'event_label': '第一選項', 'value': 500 });
                    // TweenMax.to($(".btn3"),0.1, { scale: 1.1,onComplete:function(){
                    //     TweenMax.to($(".btn3"),0.1, { scale: 1});
                    // } });
                }
            }
            //console.log('firstPick:' + firstPick)
            // if(e.currentTarget.classList[3]=='lastStyle'){
            //     firstPick = e.currentTarget.classList[4].slice(3,4)
            // }else{
            //     firstPick = e.currentTarget.classList[3].slice(3,4)
            // }
            //first完，重新轉換array，把隨機變排序 
            switch (parseInt(firstPick)) {
                case 1:  
                  console.log('第一個選擇的特色：豪華')
                  sendDataArray[0] = '豪華'
                  afterPick = [3,1,2]
                  break;
                case 2:
                    console.log('第一個選擇的特色：安全')
                    sendDataArray[0] = '安全'
                    afterPick = [1,2,3]
                  break;
                case 3:
                    console.log('第一個選擇的特色：空間')
                    sendDataArray[0] = '空間'
                    afterPick = [2,3,1]
                  break;
                default:
                  break;
              }
            //存第一個選取的特色firstPick
            
            View.showsection2()
        })
        
        //3.呼叫section2
    }
}
var rec2Pick = 1
var section2Event = {
    ini:function(){
    
    setTimeout(function(){
      sw = $(window).width()
      if(sw<=640){
        swipeEvent.mobile2();
      }else{
        swipeEvent.ini();
      }
    
      TweenMax.to($(".section2"), 0.3, { autoAlpha: 1 });
    },300)
      
    //   $('.blockBG').unbind()
    //   $('.blockBG').bind('click',closeSection2Event.close)
    //console.log('here firstPick',firstPick)
      switch (firstPick) {
        case 1:
          $('.slider_f1 img').attr('src','./_img/bf3.png')
          $('.slider_f2 img').attr('src','./_img/bf1.png')
          $('.slider_f3 img').attr('src','./_img/bf2.png')
          $('.slider_f1_m img').attr('src','./_img/bf3_m.png')
          $('.slider_f2_m img').attr('src','./_img/bf1_m.png')
          $('.slider_f3_m img').attr('src','./_img/bf2_m.png')
          $('.prev_text').css('backgroundImage',"url('./_img/fText3.png')")
          $('.next_text').css('backgroundImage',"url('./_img/fText2.png')")
          
          break;
        case 2:
            $('.slider_f1 img').attr('src','./_img/bf1.png')
            $('.slider_f2 img').attr('src','./_img/bf2.png')
            $('.slider_f3 img').attr('src','./_img/bf3.png')
            $('.slider_f1_m img').attr('src','./_img/bf1_m.png')
            $('.slider_f2_m img').attr('src','./_img/bf2_m.png')
            $('.slider_f3_m img').attr('src','./_img/bf3_m.png')
            $('.prev_text').css('backgroundImage',"url('./_img/fText1.png')")
          $('.next_text').css('backgroundImage',"url('./_img/fText3.png')")
          break;
        case 3:
            $('.slider_f1 img').attr('src','./_img/bf2.png')
            $('.slider_f2 img').attr('src','./_img/bf3.png')
            $('.slider_f3 img').attr('src','./_img/bf1.png')
            $('.slider_f1_m img').attr('src','./_img/bf2_m.png')
            $('.slider_f2_m img').attr('src','./_img/bf3_m.png')
            $('.slider_f3_m img').attr('src','./_img/bf1_m.png')
            $('.prev_text').css('backgroundImage',"url('./_img/fText2.png')")
          $('.next_text').css('backgroundImage',"url('./_img/fText1.png')")
          break;
  
        default:
          break;
      }
    },
    changeNextAndPrev:function(now){
        //存第2個選取的特色
        console.log(rec2Pick,now)
        //追蹤用
        switch (now) {
          case 1:  
            console.log('下方按鈕更換為豪華類別')
             $('.fBtn1').css('display','')
             $('.fBtn2').css('display','none')
             $('.fBtn3').css('display','none')
            break;
          case 2:
              console.log('下方按鈕更換為安全類別')
              $('.fBtn1').css('display','none')
             $('.fBtn2').css('display','')
             $('.fBtn3').css('display','none')
            break;
          case 3:
              console.log('下方按鈕更換為空間類別')
              $('.fBtn1').css('display','none')
             $('.fBtn2').css('display','none')
             $('.fBtn3').css('display','')
            break;
          default:
            break;
        }
        if(rec2Pick == 3){
          console.log('第二個選擇紀錄啟動')
            switch (now) {
                case 1:  
                  console.log('第二個選擇的特色：豪華')
                  sendDataArray[1] = '豪華'
                  break;
                case 2:
                    console.log('第二個選擇的特色：安全')
                    sendDataArray[1] = '安全'
                  break;
                case 3:
                    console.log('第二個選擇的特色：空間')
                    sendDataArray[1] = '空間'
                  break;
                default:
                  break;
              }
        }
        rec2Pick += 1 
        //console.log('rec2Pick',rec2Pick)
        //已經將第幾張卡片轉成哪個特色//豪安空
        //console.log('現在是第幾個功能',now)
        switch (now) {
            case 1:
              // console.log('專')
                $('.prev_text').css('backgroundImage',"url('./_img/fText3.png')")
              $('.next_text').css('backgroundImage',"url('./_img/fText2.png')")
              break;
            case 2:
              // console.log('安')
                $('.prev_text').css('backgroundImage',"url('./_img/fText1.png')")
              $('.next_text').css('backgroundImage',"url('./_img/fText3.png')")
              break;
              case 3:
                $('.prev_text').css('backgroundImage',"url('./_img/fText2.png')")
                $('.next_text').css('backgroundImage',"url('./_img/fText1.png')")
                break;
            default:
              break;
          }
    }
    
}

var swiper = null
var swipeEvent = {//swipeEvent.mobileIndex()
    ini:function(){
         swiper = new Swiper(".forRwd", {
            modules: [EffectCarousel],
            // Optional parameters
            effect: "carousel",
            // grabCursor: true,
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            slidesPerView: "1.8",
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {
              transitionEnd: function () {
                //alert(this.activeIndex);
                var whichOne = this.activeIndex;               
                 console.log('現在是第幾張卡'+ whichOne) 
                //轉換新arra             
                 switch (firstPick) {
                  case 1:
                    afterPick = [2,3,1,2,3]
                    break;
                    case 2:
                    afterPick = [3,1,2,3,1]
                    break;
                    case 3:
                    afterPick = [1,2,3,1,2]
                    break;
                  default:
                    break;
                 }
                 //console.log('afterPickafterPickafterPick',afterPick)
                //豪安空
                section2Event.changeNextAndPrev(afterPick[whichOne-2])
                //console.log('whichOne',whichOne)
                switch (whichOne-1) {
                  case 5:
                      // console.log('whichOne5嘆')
                      $('.slider_f1 img').css('opacity',1)
                    $('.slider_f2 img').css('opacity',0.5)
                    $('.slider_f3 img').css('opacity',0.5)
                      break;
                  case 2:
                    // console.log('whichOne2嘆')
                      $('.slider_f1 img').css('opacity',1)
                      $('.slider_f2 img').css('opacity',0.5)
                      $('.slider_f3 img').css('opacity',0.5)
                      break;
                  case 3:
                        // console.log('whichOne3專')
                        $('.slider_f1 img').css('opacity',0.5)
                        $('.slider_f2 img').css('opacity',1)
                        $('.slider_f3 img').css('opacity',0.5)
                    break;
                  case 1:
                    // console.log('whichOne1信')
                    $('.slider_f1 img').css('opacity',0.5)
                    $('.slider_f2 img').css('opacity',0.5)
                    $('.slider_f3 img').css('opacity',1)
                    break;
                  case 4:
                    // console.log('whichOne4信')
                    $('.slider_f1 img').css('opacity',0.5)
                    $('.slider_f2 img').css('opacity',0.5)
                    $('.slider_f3 img').css('opacity',1)
                    break;
                  default:
                    break;
                }
              },
            },
          });
          $('.nextbtn').unbind()
          $('.nextbtn').bind('click',function(){
            View.showsection3()
            console.log('Go Video Sction')
            })
          swiper.slideNext();   
    },
    mobileIndex:function(){
        swiper = new Swiper(".sc1_cardContainer_mobile", {
            modules: [EffectCarousel],
            // Optional parameters
            // effect: "carousel",
            grabCursor: true,
            direction: "horizontal",
            centeredSlides: true,
            // loop: true,
            slidesPerView: "1.8",
        
          });     
          swiper.slideNext();
    },
    mobile2:function(){//和上面的一樣如果上面有更動，這邊複製一份就好
      swiper = new Swiper(".forRwdM", {
        modules: [EffectCarousel],
        // Optional parameters
        effect: "carousel",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        slidesPerView: "1.8",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionStart: function () {
            var whichOne = this.activeIndex;               
             //console.log('現在是第幾張卡'+ whichOne) 
            //轉換新arra             
             switch (firstPick) {
              case 1:
                afterPick = [2,3,1,2,3]
                break;
                case 2:
                afterPick = [3,1,2,3,1]
                break;
                case 3:
                afterPick = [1,2,3,1,2]
                break;
              default:
                break;
             }
             //console.log('afterPickafterPickafterPick',afterPick)
            //豪安空
            section2Event.changeNextAndPrev(afterPick[whichOne-2])
            //console.log('whichOne',whichOne)
            switch (whichOne-1) {
              case 5:
                  // console.log('whichOne5嘆')
                  $('.slider_f1 img').css('opacity',1)
                $('.slider_f2 img').css('opacity',0.5)
                $('.slider_f3 img').css('opacity',0.5)
                  break;
              case 2:
                // console.log('whichOne2嘆')
                  $('.slider_f1 img').css('opacity',1)
                  $('.slider_f2 img').css('opacity',0.5)
                  $('.slider_f3 img').css('opacity',0.5)
                  break;
              case 3:
                    // console.log('whichOne3專')
                    $('.slider_f1 img').css('opacity',0.5)
                    $('.slider_f2 img').css('opacity',1)
                    $('.slider_f3 img').css('opacity',0.5)
                break;
              case 1:
                // console.log('whichOne1信')
                $('.slider_f1 img').css('opacity',0.5)
                $('.slider_f2 img').css('opacity',0.5)
                $('.slider_f3 img').css('opacity',1)
                break;
              case 4:
                // console.log('whichOne4信')
                $('.slider_f1 img').css('opacity',0.5)
                $('.slider_f2 img').css('opacity',0.5)
                $('.slider_f3 img').css('opacity',1)
                break;
              default:
                break;
            }
          },
        },
      });
      $('.nextbtn').unbind()
      $('.nextbtn').bind('click',function(){
        View.showsection3()
        console.log('Go Video Sction')
        })
      swiper.slideNext();   
    }
}


var sc3_player;
var countingTime;
var timer
var checkpoint_1 = false
var checkpoint_2 = false
var checkpoint_3 = false
var checkpoint_4 = false
var ism
var section3Event = {//section3Event.getYT()
    getYT:function(){
        sc3_player = new YT.Player("YTvideoSC3", {
            videoId: "Y8vZp7BmCFM", // YouTube 影片ID
            width: "1080", // 播放器寬度 (px)
            height: "720", // 播放器高度 (px)
            playerVars: {
              autoplay: 0, // 自動播放影片
              controls: 0, // 顯示播放器
              showinfo: 0, // 隱藏影片標題
              modestbranding: 1, // 隱藏YouTube Logo
              loop: 1, // 重覆播放
              playlist: "Y8vZp7BmCFM", // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
              fs: 0, // 隱藏全螢幕按鈕
              cc_load_policty: 0, // 隱藏字幕
              iv_load_policy: 3, // 隱藏影片註解
              autohide: 0, // 影片播放時，隱藏影片控制列
            },
            events: {
              onReady: section3Event.onPlayerReady,
              onStateChange: section3Event.onPlayerStateChange,
            },
        });

        $('.sc3nextBtn').bind('click',View.showsection4)
        $('.sc3nextBtn').bind('click',section3Event.mute)
    },
    onPlayerReady:function(e){
        e.target.mute(); 
        e.target.playVideo(); 
        $('.videoIcon , .videoMaskTrans').unbind()
        $('.videoIcon , .videoMaskTrans').bind('click',section3Event.playAndunMuted)
    },
    playAndunMuted:function(){
       ism = sc3_player.isMuted()
        // console.log(ism)
        section3Event.onCountung()
        if(ism){
            sc3_player.unMute()
            sc3_player.playVideoAt(0)
            TweenMax.to($(".videoIcon"),0.5, { autoAlpha: 0 });
            TweenMax.to($(".videoMask"),0.5, { autoAlpha: 0 });
           
        }else{
            sc3_player.mute()
            sc3_player.pauseVideo()
            TweenMax.to($(".videoIcon"),0.5, { autoAlpha: 1 });
            TweenMax.to($(".videoMask"),0.5, { autoAlpha: 1 });
        }
        console.log('開啟聲音'+ism)
    },
    mute:function(){
      sc3_player.mute()
      sc3_player.pauseVideo()
      TweenMax.to($(".videoIcon"),0.5, { autoAlpha: 1 });
      TweenMax.to($(".videoMask"),0.5, { autoAlpha: 1 });
    },
    onCountung:function(){
        countingTime = setInterval(function () {
            //console.log(sc3_player.getCurrentTime())
            timer = sc3_player.getCurrentTime()
            if(timer>10 && timer <11){
                console.log('checkPoint:10s')
                checkpoint_1 = true
                $.ajax({
                  type: "get",
                  url: "https://a.amnet.tw/t/?a=109&cat=22-16596822782&cert=c6b8da315b9ebbd8b5af834fa9c2f192&app=WEB",
                  success: function (response) {
                    console.log('check1')
                  }
                });
            }
            if(timer>20 && timer <21){
                console.log('checkPoint:20s')
                checkpoint_2 = true
                $.ajax({
                  type: "get",
                  url: "https://a.amnet.tw/t/?a=109&cat=22-16596838139&cert=4aab832b853d571cab653b0e16c1c55d&app=WEB",
                  success: function (response) {
                    console.log('check1')
                  }
                });
            }
            if(timer>30 && timer <31){
                console.log('checkPoint:30s')
                checkpoint_3 = true
                $.ajax({
                  type: "get",
                  url: "https://a.amnet.tw/t/?a=109&cat=22-16596846003&cert=bc4e33128a30213734a5ad524b0b5181&app=WEB",
                  success: function (response) {
                    console.log('check1')
                  }
                });
            }
            if(timer>39 && timer <40){
              console.log('checkPoint:40s')
              checkpoint_4 = true
              $.ajax({
                type: "get",
                url: "https://a.amnet.tw/t/?a=109&cat=22-16596853523&cert=f4e6eb345a5f6fe3f9bda6f28db8f2b6&app=WEB",
                success: function (response) {
                  console.log('check1')
                }
              });
          }
          }, 100);
          //clearInterval(countingTime);
    },
    onPlayerStateChange:function(e){
         //console.log(YT.PlayerState.PLAYING);
    },

}

var whickColorPick = 2;
var getName
var getTel
var getDealer

var section4Event = {
    ini:function(){
        for (let i = 1; i < 7; i++) {
            var clickBtn = eval("$('.colorBtn" + i + "')");
            clickBtn.bind("click", function (e) {
              whickColorPick = e.currentTarget.classList[0].slice(8, 9);
              whickColorPick = parseInt(whickColorPick)
              $(".colorBG").css(
                "background-image",
                "url('./_img/s4/color/colorBg" + i + ".png')"
              );
              $(".colorCar").css(
                "background-image",
                "url('./_img/s4/color/colorCar" + i + ".png')"
              );
              $(".colorName").css(
                "background-image",
                "url('./_img/s4/color/colorName" + i + ".png')"
              );
            });
          }
        
          $(".sc4nextBtn").bind("click", function () {
            //showColorCard
            $(".pickColored").css("display", "");
            //追蹤用
            switch (whickColorPick) {
              case 1:
                $('.pickedColor1').css('display','')
                $('.pickedColor2').css('display','none')
                $('.pickedColor3').css('display','none')
                $('.pickedColor4').css('display','none')
                $('.pickedColor5').css('display','none')
                $('.pickedColor6').css('display','none')
                break;
                case 2:
                  $('.pickedColor1').css('display','none')
                  $('.pickedColor2').css('display','')
                  $('.pickedColor3').css('display','none')
                  $('.pickedColor4').css('display','none')
                  $('.pickedColor5').css('display','none')
                  $('.pickedColor6').css('display','none')
                  break;
                  case 3:
                $('.pickedColor1').css('display','none')
                $('.pickedColor2').css('display','none')
                $('.pickedColor3').css('display','')
                $('.pickedColor4').css('display','none')
                $('.pickedColor5').css('display','none')
                $('.pickedColor6').css('display','none')
                break;
                case 4:
                $('.pickedColor1').css('display','none')
                $('.pickedColor2').css('display','none')
                $('.pickedColor3').css('display','none')
                $('.pickedColor4').css('display','')
                $('.pickedColor5').css('display','none')
                $('.pickedColor6').css('display','none')
                break;
                case 5:
                $('.pickedColor1').css('display','none')
                $('.pickedColor2').css('display','none')
                $('.pickedColor3').css('display','none')
                $('.pickedColor4').css('display','none')
                $('.pickedColor5').css('display','')
                $('.pickedColor6').css('display','none')
                break;
                case 6:
                $('.pickedColor1').css('display','none')
                $('.pickedColor2').css('display','none')
                $('.pickedColor3').css('display','none')
                $('.pickedColor4').css('display','none')
                $('.pickedColor5').css('display','none')
                $('.pickedColor6').css('display','')
                break;
            
              default:
                break;
            }
            TweenMax.to($(".pickColored"), 0.5, { autoAlpha: 1 });

            $(".colorCard").css(
              "background-image",
              "url('./_img/s4/color/colorCard" + whickColorPick + ".png')"
            );
            //mobile
            if(ismobile){
            $(".colorCard").css(
                "background-image",
                "url('./_img/s4/color/colorCardm" + whickColorPick + ".png')"
              );
            }
          });
        
          $(".closeBtn").bind("click", function () {
            TweenMax.to($(".pickColored"),0.5, { autoAlpha: 0,onComplete:function(){
                $(".pickColored").css("display", "none");
            } });
          });
          $(".iWantThisColor").bind("click", function () {
            //打開表單與紀錄顏色
            $(".formContainer").css("display", "");
            TweenMax.to($(".formContainer"), 0.5, { autoAlpha: 1 });
            console.log('所選的顏色是：1青2藍3白4金5灰6黑',whickColorPick)
            switch (whickColorPick) {
              case 1:
                sendDataArray[2] = '日冕金'
                break;
                case 2:
                  sendDataArray[2] = '月雲藍'
                  break;
                  case 3:
                sendDataArray[2] = '湛海藍'
                break;
                case 4:
                sendDataArray[2] = '晨曦白'
                break;
                case 5:
                sendDataArray[2] = '銀雪灰'
                break;
                case 6:
                sendDataArray[2] = '曜石黑'
                break;
              default:
                break;
            }
            
          });
          $(".closeBtnform").bind("click", function () {
            TweenMax.to($(".formContainer"),0.5, { autoAlpha: 0,onComplete:function(){
                $(".formContainer").css("display", "none");
            } });
            wizardEvent.step5()
          });

          $('.formnBtn').bind("click", function () {
            //送出表單
            getName = $('.yourName').val()
            getTel = $('.yourPhone').val()
            getDealer = $('.dealer').val()
            if(getName == ""){
                alert('請填寫姓名')
                return
            }
            if(getTel == ""){
                alert('請填寫聯絡電話')
                return
            }
            if(getDealer == ""){
                alert('請選擇經銷商')
                return
            }
            sendDataArray[3] = getTel
            sendDataArray[4] = getName
            sendDataArray[5] = getDealer

            //alert('表單已經送出，感謝您填寫表單，我們將會派專人與您服務')
            thankPageEvent.go();
            console.log('表單送出')
            TweenMax.to($(".formContainer"),0.5, { autoAlpha: 0,onComplete:function(){
                $(".formContainer").css("display", "none");
            } });
            TweenMax.to($(".pickColored"),0.5, { autoAlpha: 0,onComplete:function(){
                $(".pickColored").css("display", "none");
            } });

          });

          
    }
}
var thankPageEvent = {
  go:function(){
    $(".thanks").css('display','')
    TweenMax.to($(".thanks"), 1, { autoAlpha: 1 });
  }
}
var iniBGVideo = {//iniBGVideo.getYT()
  getYT:function(){
      sc3_player = new YT.Player("videoBanner", {
          videoId: "LLHeE10xlx0", // YouTube 影片ID
          width: "1080", // 播放器寬度 (px)
          height: "320", // 播放器高度 (px)
          playerVars: {
            autoplay: 0, // 自動播放影片
            controls: 0, // 顯示播放器
            showinfo: 0, // 隱藏影片標題
            modestbranding: 1, // 隱藏YouTube Logo
            loop: 1, // 重覆播放
            playlist: "LLHeE10xlx0", // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
            fs: 0, // 隱藏全螢幕按鈕
            cc_load_policty: 0, // 隱藏字幕
            iv_load_policy: 3, // 隱藏影片註解
            autohide: 0, // 影片播放時，隱藏影片控制列
          },
          events: {
            onReady: section3Event.onPlayerReady,
          },
      });

  },
  onPlayerReady:function(e){
      e.target.mute(); 
      e.target.playVideo(); 
     
  }

}
var sendData
var sendDataArray = ["ans1","和第一次選擇一樣","月雲灰","phone","name","dealer"]
var apiEvent = {//apiEvent.ini()
  check:function(){
    sendData = {
      answer1: sendDataArray[0],
      answer2: sendDataArray[1],
      answer3: sendDataArray[2],
      phone: sendDataArray[3],
      name: sendDataArray[4],
      dealer: sendDataArray[5]
    }
    console.log(sendData)
  },
  ini:function(){
    sendData = {
      answer1: sendDataArray[0],
      answer2: sendDataArray[1],
      answer3: sendDataArray[2],
      phone: sendDataArray[3],
      name: sendDataArray[4],
      dealer: sendDataArray[5]
    }
    
    $.ajax({
      type: "post",
      url: "https://infinitievent.com.tw/api/public/insertData",
      data: "data",
      dataType: "json",
      success: function (res) {
        console.log(res)
      }
    });
  }
}