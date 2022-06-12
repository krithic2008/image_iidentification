var cam=document.getElementById("camera")
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90

})
Webcam.attach("#camera")
function take_snapshot(){
    Webcam.snap(
        function(snap) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+snap+'"/>';
        }
    )
}
console.log(ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/osRruU6By/model.json",
function (){
    console.log("model loaded");
} )
function check() {
    var image=document.getElementById("captured_image");
    classifier.classify(image,function (error,img){
        if(error){
            console.log(error);
        }
        else{
            console.log(img);
            document.getElementById("result_object_name").innerHTML=img[0].label;
            document.getElementById("result_object_accuracy").innerHTML=img[0].confidence.toFixed(2);
        }

    })
}
