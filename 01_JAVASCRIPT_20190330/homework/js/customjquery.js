
/******* エフェクト1：なめらかなページ表示 *******/

$('head').append(
    '<style>body{display:none;}'
    );
    $(window).on("load", function() {
    $('body').delay(300).fadeIn("slow");
    });

//サイコロアプリ表示
$(document).ready(function(){
    $('.saikoromenu').on('click',function(){
        $('.saikoromenu').css('display','none');
        $('.saikoroapp').fadeIn(1200).css('display','block');
    })
})  

//サイコロアプリのロジック
//参考：https://magnets.jp/web_design/9703/

$(document).ready(function(){
    var saikoro_number;
    var i = 4; //回転の状態
    var j = 1; //面の状態
    var s = 0; //動いた回数
    var jAry = [4,1,3,1,3,2]; //jの初期値

    //サイコロの目を決定
    function start(){
        console.log("START start function");
        saikoro_number = 1 + Math.floor( Math.random() * 6 );  //1～6の間で一つランダムな数字をsaikoro_numberに代入
        j = jAry[saikoro_number-1]  //jAryから出目に応じた順番の中身を取り出し変数jに取り出す
        if(saikoro_number == 3 || saikoro_number == 4 || saikoro_number == 6){  //出目が3.4.6の時
            console.log(" SAIKORO_NUMBER = 3 or 4 or 6 : SAIKORO_NUMBER ="+saikoro_number);
            korogasu('b');  //引数に'b'を渡しkorogasu()を実行
        } else {  //出目が1,2,5の時
            console.log(" SAIKORO_NUMBER = 1 or 3 or 5 : SAIKORO_NUMBER ="+saikoro_number);
            korogasu('a');  //数に'a'を渡しkorogasu()を実行
        }
    }
    //サイコロを転がす
    function korogasu(n){
        console.log("  START korogasu function");
        var saiImg = setInterval(function(){
            if(s<=16){
                console.log("   BRANCH : S<16 = S="+s);
                if(i<4){
                    console.log("    BRANCH : i<4 : i="+i+", j="+j);
                    imgURL = 'image/'+n+j+'_'+i+'.png'
                    $('#img').attr('src',imgURL);
                    i++;
                }else{
                    console.log("    BRANCH : i>=4 : i="+i+", j="+j);
                    imgURL = 'image/'+n+j+'_'+i+'.png'
                    $('#img').attr('src',imgURL);
                    i=1;
                    if(j<4){
                        j++;    
                    }else{
                        j=1;
                    }            
                }
                s ++;
            }else{
                console.log("   BRANCH : S>=16");
                clearInterval(saiImg);
                $('#img').removeClass();
                $('p').text( saikoro_number + 'の目が出ました！');
                    $('p').css("font-size","30px");
                    $('p').css("color","white");
                    $('p').removeClass('emphasize');
                if(saikoro_number==6){
                    $('p').css("color","white");
                    $('p').addClass('emphasize');
                }
                s = 0;
                i = 4;
                $('#button').prop("disabled", false);
            }
        }, 70);
    }
    
    //クリック時の動き
    $('#button').on('click', function() {
        $(this).prop("disabled", true);
        $('#img').addClass('bound');
        start();
    })
})
