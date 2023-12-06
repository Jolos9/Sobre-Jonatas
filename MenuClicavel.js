function estado(){
    if (document.getElementById("MenuObjetivos").style.visibility=="visible"){
        document.getElementById("MenuObjetivos").style.visibility = "hidden";
    } else{
        document.getElementById("MenuObjetivos").style.visibility = "visible";
    }
}


function estadao(){
    if (document.getElementById("mudalingua").style.visibility=="visible"){
        document.getElementById("mudalingua").style.visibility = "hidden";
    } else{
        document.getElementById("mudalingua").style.visibility = "visible";
    }
}

var CarNum = 1;

function CarouselDir(){
    var image = document.getElementById("Carousel");
    var a = document.getElementById("carousel");
    if (CarNum == 1){
        image.src = "Carousel2.jpg";
        a.href = "Carousel2.html"
        CarNum = 2;
    }
    else{
        image.src = "Carousel1.jpg";
        a.href = "Carousel1.html"
        CarNum = 1;
    }
}

function CarouselEsq(){
    var image = document.getElementById("Carousel");
    var a = document.getElementById("carousel");
    if (CarNum == 1){
        image.src = "Carousel2.jpg";
        a.href = "Carousel2.html"
        CarNum = 2;
    } else {
        image.src = "Carousel1.jpg";
        a.href = "Carousel1.html"
        CarNum = 1;
    }
}
