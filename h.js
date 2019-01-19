class questions{
    constructor(question,options,correct)
    {
        this.question = question;
        this.options = options;
        this.correct = correct;
    }
}
class level
{
    constructor(id,questions)
    {
        this.id = id;
        this.questions = questions;
    }

}
var data = new questions()
var new_level = new level(1);
let sendObj = JSON.stringify({level_no:1});
function getData()
{
    var questions=[];
    function loadDoc()
    {
        
        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        questions = JSON.parse(this.responseText).slice(0);
    }
  };
  xhttp.open("POST", "ajax_info.txt", true);
  xhttp.send(sendObj);
    }
    return questions;
}
