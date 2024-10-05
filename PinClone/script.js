// Making every feature on navbar red on hover and black on remove cursor--

var features = document.querySelectorAll(".feature");

function feature_on(){
    features.forEach(function(a){
            a.addEventListener("mouseenter",function(){
                a.style.color = "red";
            });
        });
}
feature_on()

function feature_off(){
    features.forEach(function(a){
        a.addEventListener("mouseleave", function(){
            a.style.color = "black"
        });
    });
}

feature_off()

// Making function black background on click

// function bg_black(){
//     features.forEach(function(onclick){
//         onclick.addEventListener("onclick", function(){
//             onclick.style.border = "50px";
//             // border-top-left-radius: "50px";
//             // border-bottom-left-radius: "50px";
//             // border-top-right-radius: "50px";
//             // border-bottom-right-radius: "50px";
//         })
//     })
// }

