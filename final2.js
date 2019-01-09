function question_number(){
  var x = Number(document.getElementById("hoge").value)
  for (var i = 0; i < x; i++){
var clone = document.getElementById('clone')
clone.innerHTML += "問題　　：<input id='question" + i + "'type='text' placeholder='問題' size='40'><br>"
clone.innerHTML += "答え　　：<input id='answer" + i + "' type='text' placeholder='解答欄'><br>"
  }
}
function createQuestion(){
  var answer = []
    answer.push(document.getElementById('clone').value)
}
function alert(){
  alert(answer[1])
}
