Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/> ';
    });

}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded (){
    console.log('model loaded!');

}
function speak(){
    var synth=window.speechSynthesis;
    data_1="the first prediction is"+prediction_1;
    data_2=" and the second prediction is"+predicition_2;
    var utterthis=new SpeechSynthesisUtterance(data_1+data_2);
    synth.speak(utterthis);
    
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    if(gesture == "amazing") { toSpeak = "This is looking amazing";
     document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
     } else if(gesture == "best") { toSpeak = "All the best";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
     } else if(gesture == "victory") { toSpeak = "That was the marvelous victory";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
     } speak();
     } 
