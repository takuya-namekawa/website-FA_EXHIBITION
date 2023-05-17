$(function(){
  
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function(){
     // ハンバーガーメニューの共通処理を呼び出す
    hambuger();
  });
  
  
  // メニューのリンクをクリックした時
  $('#navi a').on('click', function(){
    
    // ハンバーガーメニューの共通処理を呼び出す
     hambuger();
  });
  
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  
  $('a[href^="#"]').click(function(){
    
    // リンクを取得
    let href= $(this).attr("href");
    
     // ジャンプ先のid名をセット
     
    let target = $(href == "#" || href == "" ? 'html' : href);
    
     // トップからジャンプ先の要素までの距離を取得
     
    let position = target.offset().top;
    
    
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
    
  });
  
  
  /*=================================================
  フェード表示
  ===================================================*/
  
  $(".inview").on("inview", function(event, isInView) {
      
      if (isInView) {
        // 要素（inviewクラス）が表示されたらshowクラスを追加する
        $(this).stop().addClass("show");
      }
  });
  
  
  
  
  
  
  
});