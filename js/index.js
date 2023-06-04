$(document).ready(function($) {

  $(".scroll_move").click(function(event){         

          event.preventDefault();

          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

  });

});

// 클래스가 scroll_move인 a 태그를 눌렀을때 발생되게 하는 이벤트

// $(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동

// 500 은 스크롤 속도