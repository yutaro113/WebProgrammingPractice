alert(111);
console.log("はじめてのJavaScript")
console.log(23+5)
console.log(2000-1800)
console.log("18+5")

var name = "井上 祐太郎"
console.log(name)

var score = Math.floor(Math.random()*100)+1
/*var point = 70; */

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

$(document).ready(function(){
    $("#a").on('click', function(){ //「イベント」を制御
        $("#a").html("jquery") 　　　//「セレクタ」に対して「メソッド」を実行する
    })
});
