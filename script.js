$(function () {
  //ハンバーガーメニューのアクション
  $('#hamburger').click(function() {
    $(this).toggleClass('active');
    $('.hidden').toggleClass('active');
  });

  $('.hidden a').click(function() {
    $('#hamburger').removeClass('active');
    $('.hidden').removeClass('active');
  });

  // メイン画像のカルーセル
  $('.carousel').slick({
    fade: true,
    autospeed: true,
    speed: 2000,
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 理由１：左からスライドイン
  $(window).scroll(function () {
    $('.reason1').each(function () {
      const scroll = $(window).scrollTop();
      const elemPos = $(this).offset().top;
			const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
				$(this).addClass('scrollin');
      }
    });
  });

  // 理由２：右からスライドイン
  $(window).scroll(function () {
    $('.reason2').each(function () {
      const scroll = $(window).scrollTop();
      const elemPos = $(this).offset().top;
			const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
				$(this).addClass('scrollin');
      }
    });
  });

  // 受講生の声：フェードイン
  $(window).scroll(function () {
    $('#voice .list li').each(function() {
      const scroll = $(window).scrollTop();
      const elemPos = $(this).offset().top;
			const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
				$(this).addClass('fadein');
      }
    });
  });
});