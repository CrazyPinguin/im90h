let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == "images/bg.gif"){
        myImage.setAttribute('src',"images/bg.jpg");
    }else{
        myImage.setAttribute('src',"images/bg.gif");
    }
}

let myHeading = document.querySelector('h1');
myHeading.textContent = "i am 90h,please try your best!"

myButton.onclick = function(){
    alert("切个粑粑,自个儿找乐子去吧~");
}