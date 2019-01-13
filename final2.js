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
  question.innerHTML += "<input id='answer1-item' type='text' placeholder='解答欄'><br>"
  question.innerHTML += "<input type='button' value='回答' onclick='hoge" + i + "();'><br>"

}}


function a(){
  console.log(answer)
}
