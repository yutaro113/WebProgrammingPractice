/******* エフェクト1：なめらかなページ表示 *******/

$('head').append(
    '<style>body{display:none;}'
    );
    $(window).on("load", function() {
    $('body').delay(300).fadeIn("slow");
    });

/******* エフェクト2：なめらかなページスクロール *******/

$(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒で記述
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

/******* エフェクト3：MOREボタンの制御 */
/*時間切れ*/


/******* エフェクト4：Form Submit時のポップアップ */
function check(){

	if(window.confirm('送信してよろしいですか？')){ // 確認ダイアログを表示
		return true;
	}
	else{ // 「キャンセル」時の処理
		window.alert('キャンセルされました'); // 警告ダイアログを表示
		return false;
	}

}