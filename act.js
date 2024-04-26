var index = 0;

function changecolor(){
    var colors = ["blue","red","orange","green","violet","yellow"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length -1)
       index = 0
}

