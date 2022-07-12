var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    speak();
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot1();
        save();
    },5000);

    setTimeout(function()
    {
        take_snapshot2();
        save();
    },15000);

    setTimeout(function()
    {
        take_snapshot3();
        save();
    },20000);

}
data_uri = "";
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    speak();
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpg',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot1()
{
    Webcam.snap(function(data_uri) {
        
        document.getElementById("result1").innerHTML = '<img id="selfie_image1"  src= "'+data_uri+'">';
    });
}

function take_snapshot2()
{
    Webcam.snap(function(data_uri) {
        
        document.getElementById("result2").innerHTML = '<img id="selfie_image2"  src= "'+data_uri+'">';
    });
}

function take_snapshot3()
{
    Webcam.snap(function(data_uri) {
        
        document.getElementById("result3").innerHTML = '<img id="selfie_image3"  src= "'+data_uri+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}