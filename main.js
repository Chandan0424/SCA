function start(){navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GRfMWrq-p/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("MODEL IS LOADED!!")
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}