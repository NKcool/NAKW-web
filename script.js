







var moveDiv = document.getElementById('movediv');
window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    moveDiv.style.top = y + "px";
    moveDiv.style.left = x + "px";
};

$('.h1div h1').textillate({ in: { effect: 'fadeInUp', delay: 25 } });
$('.upAnimation').textillate({ in: { effect: 'fadeInUp', delay: 25 } });

document.querySelectorAll(".img").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {

        document.querySelector(".main").style.backgroundColor = dets.target.dataset.color
        document.querySelector(".svgdiv").style.display = "flex"
        document.querySelector(".svgdiv").style.transform = `translate(${dets.clientX - 40}px,${dets.clientY - 40}px)`
        document.querySelector("#movediv").style.display = "none"
        
    })

    elem.addEventListener("mouseout", function () {
        document.querySelector(".main").style.backgroundColor = "initial"
        $("#movediv").css({

            "height": "20px",
            "width": "20px",
            "background-color": "transparent",
            "mix-blend-mode": "initial",
            "display": "initial"

        })
        document.querySelector(".svgdiv").style.display = "none"
    })
})

document.querySelectorAll(".hovereffect").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        $("#movediv").css({

            "height": "80px",
            "width": "80px",
            "background-color": "white",
            "mix-blend-mode": "difference",
            "transform": "translate(-30px,-40px)",
            "z-index": "999999"

        })
    })
    elem.addEventListener("mouseout", function () {
        $("#movediv").css({

            "height": "20px",
            "width": "20px",
            "background-color": "transparent",
            "mix-blend-mode": "initial",
            "display": "initial",
            "transform": "translate(0px,0px)"

        })
    })
})

document.querySelector(".Ncircle").addEventListener("mousemove", function (dets) {
    $("#circleBtm").css({
        "transform": `translate(${dets.clientX * .2}px,${dets.clientY * .2 - 50}px)`
    })
})
document.querySelector(".Ncircle").addEventListener("mouseout", function (dets){
    $("#circleBtm").css({
        "transform": `translate(0px,0px)`
    })
})











