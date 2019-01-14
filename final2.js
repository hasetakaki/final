function question_number(){
  var x = Number(document.getElementById("hoge").value)
  for (var i = 0; i < x; i++){
var clone = document.getElementById('clone')
clone.innerHTML += "問題　　：<input id='question" + i + "'type='text' placeholder='問題' size='40'><br>"
clone.innerHTML += "答え　　：<input id='answer" + i + "' type='text' placeholder='解答欄'><br>"
  }
}

var answer = [];
function createQuestion(){
  var question = document.getElementById('question')
  var x = Number(document.getElementById("hoge").value)

  for (var i = 0; i < x; i++){
  answer.push(document.getElementById('answer' + i).value);
 question.innerHTML += document.getElementById('question' + i).value;
 question.innerHTML += "<p><input id='answer_item" + i + "' type='text' placeholder='解答欄'></p>"
}
document.getElementById('allquestion').innerHTML = "<h2>'Question!'</h2>"
document.getElementById('result').innerHTML = "<input type='button' value='result' onclick='result();'>"
}

var score = 0;
var answer_item = [];

function result(){
  var x = Number(document.getElementById("hoge").value)
score = 0
  for(var i = 0; i < x; i++){
    answer_item.push(document.getElementById('answer_item' + i).value)
    if(answer[i] == answer_item[i]){
      score += 1
    }
  }
  alert('あなたのスコアは' + score + '点です！')
}
