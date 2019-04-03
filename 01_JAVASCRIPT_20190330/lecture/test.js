/*
alert(111);
console.log("はじめてのJavaScript")
console.log(23+5)
console.log(2000-1800)
console.log("18+5")

var name = "井上 祐太郎"
console.log(name)

var score = Math.floor(Math.random()*100)+1

if (score >= 80){
    console.log("SCORE:%d 素晴らしい！おめでとう",score)
}else if (score >= 70){
    console.log("SCORE:%d まあまあ素晴らしい！おめでとう",score)
}else if (score >= 60){
    console.log("SCORE:%d よくできました！おめでとう",score)
}else if (score >= 50){
    console.log("SCORE:%d まあまあよくできました！おめでとう",score)
}else {
    console.log("SCORE:%d もっと頑張りましょう!",score)
} 
*/

//index.htmlのid=aに対する制御
$(document).ready(function(){
    $("#a").on('click', function(){ //「イベント」を制御
        $("#a").html("jquery") 　　　//「セレクタ」に対して「メソッド」を実行する
    
    var score = Math.floor(Math.random()*100)+1
    $("#a").css("color","black");

    if (score >= 80){
        console.log("SCORE:%d 素晴らしい！おめでとう",score);
        $("#a").html('<img src="https://keyplayers.jp/wp-content/uploads/2018/04/gs_03.jpg" alt="">')
        $("#a").append("<br>素晴らしい！おめでとう SCORE:"+score);
        $("#a").css("color","red");
    }else if (score >= 70){
        console.log("SCORE:%d まあまあ素晴らしい！おめでとう",score)
        $("#a").html("まあまあ素晴らしい！おめでとう SCORE:"+score)
    }else if (score >= 60){
        console.log("SCORE:%d よくできました！おめでとう",score)
        $("#a").html("よくできました！おめでとう SCORE:"+score)
    }else if (score >= 50){
        console.log("SCORE:%d まあまあよくできました！おめでとう",score)
        $("#a").html("まあまあよくできました！おめでとう SCORE:"+score)
    }else {
        console.log("SCORE:%d もっと頑張りましょう!",score)
        $("#a").html("もっと頑張りましょう SCORE:"+score)
    }   
    })
});
