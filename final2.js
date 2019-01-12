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
  var x = Number(document.getElementById("hoge").value)
  for (var i = 0; i < x; i++){
  answer.push(document.getElementById('answer' + i).value);
}}
function a(){
  console.log(answer)
}
