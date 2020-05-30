function dis(A)
{
    var msg = new SpeechSynthesisUtterance(A);
    msg.rate = 0.7;
    msg.pitch = 1;
    window.speechSynthesis.speak(msg);
  //  window.speechSynthesis.speak("welcome");
    alert("You have selected " +A)

    // var property = document.getElementById(btn);
    //     property.style.backgroundColor = "red"
}