/* ハンバーガーメニューボタン
-------------------------------------------------------------*/
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

/* ハンバーガーメニューが現れる
-------------------------------------------------------------*/
//画面をロードしたら実行
$(window).on('load', function () {
  ScrollAnime();
});

//スクロールしたら実行
$(window).scroll(function () {
  ScrollAnime();
});

//変数定義
let beforePos = 0;                         //スクロール前位置
let window_h = $(window).height() / 2;     //画面中央位置

function ScrollAnime() {
  let scroll_top = $(window).scrollTop();
  
  //上にスクロール もしくは 画面中央より上なら
  if(window_h > scroll_top || 0 > scroll_top - beforePos){
    //ヘッダーメニューを非表示
    $('#header').removeClass('UpMove');
    $('#header').addClass('DownMove');
    
    //ハンバーガーメニューを表示
    $('#HbButton').removeClass('DownMove');
    $('#HbButton').addClass('UpMove');

  //下にスクロールしたら
  }else {
    //ヘッダーメニューを表示
    $('#header').removeClass('DownMove');
    $('#header').addClass('UpMove');
    
    //ハンバーガーメニューを非表示
    $('#HbButton').removeClass('UpMove');
    $('#HbButton').addClass('DownMove');
  }
  
  //スクロール前の場所を保持
  beforePos = scroll_top;
}

/* Swiper
-------------------------------------------------------------*/
window.addEventListener('load', function(){
  var elem = document.querySelector(".swiper-container");
  if (elem !== null) { //swiper-containerがあれば…
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, //ループさせる
    effect: "fade", //フェードのエフェクト
    autoplay: {
      delay: 4000, //４秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
    speed: 2000, //２秒かけながら次の画像へ移動
    allowTouchMove: false, //マウスでのスワイプを禁止
    navigation: { //左右のページ送りを有効にする
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: { //円形のページネーションを有効にする
      el: ".swiper-pagination",
      clickable: true //クリックを有効にする
    }
  });
}
});

/* drawer
-------------------------------------------------------------*/
$(document).ready(function() {
  $('.drawer').drawer();
});