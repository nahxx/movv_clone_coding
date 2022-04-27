$(function() {
  // script 영역

  // scroll 반응 영역
  $(window).scroll(function() {
    let winHeight = $(window).height();
    let scrTop = $(this).scrollTop();

    // 상단바 반응 영역
    if (scrTop >= winHeight) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }

    // ani 반응 영역
    $('.mov').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 300 && scrTop < thisOffset.top + winHeight) {
        $('#gnb li').removeClass('on');
        $('#gnb').find(`li:nth-of-type(${$(this).index() - 1})`).addClass('on');
        $(this).find('h2').addClass('ani');
        $(this).find('.htu-slider-wrapper').addClass('ani');
        $(this).find('h3').addClass('ani');
        $(this).find('.service-tap-wrapper').addClass('ani');
        $(this).find('.tap-service-wrapper').addClass('ani');
        $(this).find('.news-slider-wrapper').addClass('ani');
        $(this).find('.faq-tab').addClass('ani');
        $(this).find('.faq-tab-wrapper').addClass('ani');
      }
    });
    $('.vehicle h2').removeClass('ani');
    $('.vehicle h3').removeClass('ani');
    $('#gnb li:last-child').removeClass('on');

    // 첫번째 섹션(about) 반응 영역
    $('.about .row').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 800 && scrTop < thisOffset.top + 480) {
        $(this).find('.txt-box').addClass('ani');
        $(this).find('.img-box').addClass('ani');
      }
    });

    // 두번째 섹션(value) 반응 영역
    if(scrTop >= $('.value').offset().top - 200) {
      $('.value h3').addClass('ani'); // 두번째 섹션(value)
    }
    if(scrTop >= $('.value').offset().top) {
      $('.value li').addClass('ani'); // 두번째 섹션(value)
    }

  });

  // 메인배너 .info의 count 반응 영역
  let cntNum = $('.info dd span');
  cntNum.each(function() {
    // console.log($(this)); // 확인용
    $(this).prop('Counter', 0).animate({Counter: $(this).text()}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        // // let ceilNum = Math.ceil(now);
        // if(now <= $(this).text()) {
        //   now = Math.ceil(now);
        //   let nowArr = [];
        //   let nowComma = '';
        //   if(now > 999) {
        //     nowArr.push(now/1000);
        //     nowArr.push(now%1000);
        //     console.log(nowArr[0]);
        //     nowComma = `${nowArr[0]},${$nowArr[1]}`
        //     $(this).text(nowComma);
        //   } else if(now > 999999) {
        //     nowArr.push(now/1000000);
        //     nowArr.push(now%1000000/1000);
        //     nowArr.push(now%1000000%1000);
        //     nowComma = `${$(nowArr[0])},${$(nowArr[1])},${$(nowArr[2])}`
        //     $(this).text(nowComma);
        //   } else {
        //     $(this).text(now);
        //   }
        // }
        $(this).text(Math.ceil(now));
      }
    })
  });

  // 메인배너 .car의 이동 반응 영역
  $('.car').animate({
    left: '0px',
    opacity: '1'
  }, 1000);

  // 네번째 섹션(service)의 click 반응 구현
  let tapService = ['<div id="tab_1" class="tab-service"><div class="right-box"><a><span class="thum"><img src="./img/sec_service/airport.png" alt="이미지"></span></a></div><div class="txt-box"><p class="sbj">공항이동</p><p>자택에서 공항까지 공항에서 목적지까지<br>공항이동도 편안하게, 무브</p><a target="_blank" rel="noreferrer">예약 바로 가기 →</a></div></div>', '<div id="tab_2" class="tab-service"><div class="right-box"><a><span class="thum"><img src="./img/sec_service/free.png" alt="이미지"></span></a></div><div class="txt-box"><p class="sbj">자유여행</p><p>원하는 곳 어디든지 전용기사 전용차량으로<br>우리끼리 프라이빗하게 우리만의 특별한 자유여행, 무브</p><a target="_blank" rel="noreferrer">예약 바로 가기 →</a></div></div>', '<div id="tab_3" class="tab-service"><div class="right-box"><div class="buttons-box"><a class="btn arr" target="blank">무브 골프 소개</a><a class="btn play" target="blank">무브 골프 CF <em>15s</em></a></div><span class="thumn"><img src="./img/sec_service/golf.png" alt="이미지"></span></div><div class="txt-box"><p class="sbj">무브골프</p><p>편안한 라운딩 &amp; 일행 모두 즐기는 골프모임을 위해<br>골프장 갈 땐, 프라이빗 이동 서비스, 무브</p><a target="_blank" rel="noreferrer">예약 바로 가기 →</a></div></div>', '<div id="tab_4" class="tab-service"><div class="right-box"><a><span class="thum"><img src="./img/sec_service/business.png" alt="이미지"></span></a></div><div class="txt-box"><p class="sbj">무브비즈니스</p><p>임직원 출장 · VIP의전 서비스 넓고 쾌적한 차량으로 편안하게<br>성공 비즈니스를 이어주는 스마트 모빌리티, 무브</p><a target="_blank" rel="noreferrer">홈페이지 바로 가기 →</a></div></div>', '<div id="tab_5" class="tab-service"><div class="right-box"><a href="https://www.youtube.com/watch?v=6PABLwwid8E" target="blank"><div class="youtube"><span class="icon"></span><div class="txt">무브KTX CF <em>20s</em></div></div><span class="thum"><img src="./img/sec_service/ktx.png" alt="이미지"></span></a></div><div class="txt-box"><p class="sbj">무브KTX</p><p>KTX 예약도 무브에서 한 번에 편리하게<br>최대 50% 무브만의 할인 혜택까지<br>KTX 탈 땐, 무브 하세요</p><a target="_blank" rel="noreferrer">예약 바로 가기 →</a></div></div>', '<div id="tab_6" class="tab-service"><div class="right-box"><a href="https://www.youtube.com/watch?v=i9M6vrwq6F8" target="blank"><div class="youtube"><span class="icon"></span><div class="txt">병원이동 CF <em>20s</em></div></div><span class="thum"><img src="./img/sec_service/hospital.png" alt="이미지"></span></a></div><div class="txt-box"><p class="sbj">병원이동</p><p>전용기사/전용차량으로 운전 걱정없이<br>병원까지 편안하고 안전하게<br>병원갈 땐 무브하세요</p><a target="_blank" rel="noreferrer" href="https://movv.co/meta/hospital">예약 바로 가기 →</a></div></div>'];
  $('.service-tap').on('click', 'li', function() {
    let thisIdx = $(this).index();
    $('.service-tap li').removeClass('active');
    $(this).addClass('active');
    $('.tap-service-wrapper').html($(tapService[thisIdx]));
  });



  // 다섯번째 섹션(news)의 on클래스 추가(뉴스 display)
  $('.swiper span').click(function() {
    $('.swiper span').removeClass('active');
    $(this).addClass('active');
    $('.swiper-wrapper').removeClass('on');
    $('.swiper-wrapper').eq($(this).index()).addClass('on');
  });

  // 여섯번째 섹션(faq)의 .faq-tab-wrapper 새로 추가하기
  // 여섯번째 섹션(faq)의 li에 on클래스 추가(정적)
  $('.faq-list li').click(function() {
    $('.faq-list li').removeClass('on');
    $(this).addClass('on');
  });

  let fabFaqId = [1, 2, 3];
  let faqListCon = ['<div id="tab-faq-1" class="faq-con"><ul class="faq-list"><li><a>언제까지 예약해야 하나요?</a><p>원활한 배차를 위해 이용일로부터 3~4일 전까지는 예약하시기를 권장합니다. 주말이나 성수기의 경우 전 차량이 일찍 마감되는 경우가 있으니 예약을 조금 더 서둘러 주시는 것이 좋습니다.</p></li><li><a>당일 예약도 가능한가요?</a><p>픽업시간 4시간 전까지는 당일 예약도 가능합니다. 다만 전체 차량 풀부킹이거나 고객센터 영시간이 아닐 경우 배차가 불가능할 수도 있습니다. 결제 전 반드시 고객센터에 가능 여부를 먼저 확인해 주세요.</p></li><li><a>편도 이용도 가능한가요?</a><p>네. 편도 이용도 가능합니다.</p></li></ul></div>', '<div id="tab-faq-2" class="faq-con"><ul class="faq-list"><li><a>이용시간은 어떻게 카운트 되나요?</a><p>이용시간 카운트는 첫 승차부터 마지막 하차까지입니다. 골프장, 관광지, 식당 등에서의 대기 시간도 이용시간에 포함됩니다. 이용 시간 초과시 별도의 시간추가요금이 발생되며, 요금은 차종별로 상이합니다. 예약하신 차종의 시간추가요금은 예약확정시 메시지로 안내해 드립니다.</p></li><li><a>가고 싶은 장소를 다 갈 수 있나요?</a><p>예약된 권역 안에서는 어디든, 몇 군데든 자유롭게 이동 가능합니다. 예약된 권역을 벗어나게 될 경우 유류비와 통행료가 추가 청구될 수 있으며, 이동 전 고객센터에 문의해 주시길 바랍니다. </p></li><li><a>몇 명까지 탈 수 있나요?</a><p>부피가 큰 수화물 보유 여부에 따라 다릅니다. 예를 들어, 카니발, 스타리아, 스타렉스는 수화물이 없는 경우 7인, 수화물이 있는 경우 5인 탑승을 권장하며, 쏠라티는 수화물이 없는 경우 12인, 수화물이 있는 경우 10인 탑승을 권장합니다. 구성원 중 몸집이 작은 영유아가 동반되는 등, 탑승 인원에 대한 문의가 있는 경우에는 고객센터에 상담해 주세요.</p></li><li><a>이용당일 기사님은 어떻게 만나나요?</a><p>차량번호와 기사님 연락처를 이용일 전 날 18시 이전에 메시지로 안내해 드립니다. 요청하신 픽업 장소가 주차가 불가능한 장소일 경우 인근에서 대기하고 계실테니, 기사님과 통화하시거나 무브 앱의 차량호출 버튼을 이용하여 차량을 호출하시면 됩니다.</p></li></ul></div>', '<div id="tab-faq-3" class="faq-con"><ul class="faq-list"><li><a>추가요금은 어떻게 지불하나요?</a><p>추가요금이 발생할 경우, 영업일 기준 1일 후에 고객센터에서 정산하여 결제방법과 함께 메시지로 안내해 드립니다. 모든 추가요금은 고객센터를 통해서만 정산되니, 기사님께 직접 전달하지 말아 주세요.</p></li><li><a>보험은 가입되어 있나요?</a><p>유상운송이 가능한 차량으로 운행되고 있으며, 탑승하신 손님들도 적용 받으실 수 있는 자동차 보험으로 가입되어 있습니다. \'대인배상II\' 적용으로 상해급수와 상관없이 1인당 무한으로 설정되어 있습니다.</p></li><li><a>기사님 식사와 팁은 챙겨드려야 하나요?</a><p>아니요. 기사님 식사와 팁은 무브 서비스 이용 요금에 포함되어 있으니 부담 없이 편하게 이용해주세요.</p></li></ul></div>'];
  $('.faq-tab').on('click', 'li', function() { // .faq-tab의 li를 클릭했을 때
    let thisIdx = $(this).index(); // 해당 요소의 인덱스를 변수에 담음
    $('.faq-tab li').removeClass('active'); // 모든 li의 'active'클래스를 지우고
    $(this).addClass('active'); // 해당 li에만 'active'클래스를 추가해준다.
    $('.faq-tab-wrapper').html($(faqListCon[thisIdx])); // .faq-tab-wrapper의 html을 배열요소로 바꿔준다.

    // 여섯번째 섹션(faq)의 li에 on클래스 추가(동적)
    $('.faq-list').on('click', 'li', function() { // .faq-list의 li를 클릭했을 때
      $('.faq-list li').removeClass('on'); // 모든 li의 'on'클래스를 지우고
      $(this).addClass('on'); // 해당 li에만 'on'클래스를 추가해준다.
    });
  });
});
