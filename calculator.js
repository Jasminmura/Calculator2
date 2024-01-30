
var text = document.getElementById("Displaytext");


function Display(num){
 if (text.value=="0" || text.value == "undefined")
     text.value=num;
else
    text.value+=num;

}
function CalcResult(){
    {
        try {
            text.value = eval(text.value);
        } catch (error) {
            text.value = 'Error';
        }
    }
}
function showMessage() {
    var infoMessage = document.getElementById('infoMessage');
    infoMessage.style.display = 'block';

    setTimeout(function () {
      infoMessage.style.display = 'none';
    }, 3000);
  }
function Clear(){
    text.value = '0';

}
function RemoveElement(){
    text.value = text.value.substring(0, text.value.length - 1);
    if(text.value.length == 0){
        text.value = "0";
    }    
}

function CalculateSquare(){
    try {
        text.value = Math.pow(eval(text.value), 2);
    } catch (error) {
        text.value = "Error";
    }
}
