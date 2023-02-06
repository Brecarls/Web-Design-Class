window.onload = initLinks;

var thePic = 0;
var arrMyPix = new Array("StarGaze.jpg", "WildemountMap.jpg", "YouTube_map.jpg", "unknown.png");

function initLinks(){
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious(){
    if (thePic == 0){
        thePic = arrMyPix.length;
    }
    thePic--;
    document.getElementById("myPicture").src = arrMyPix[thePic];
    return false;
}

function processNext(){
    thePic++;
    if (thePic == arrMyPix.length){
        thePic = 0;
    }
    document.getElementById("myPicture").src = arrMyPix[thePic];
    return false;
}