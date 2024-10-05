var array = [
    {name:"Animal", image:"https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5pbWFsfGVufDB8fDB8fHww"},
    {name:"Mountain", image:"https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW58ZW58MHx8MHx8fDA%3D"},
    {name:"Yoga", image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BvcnR8ZW58MHx8MHx8fDA%3D"},
    {name:"Sea", image:"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNlYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Girls", image:"https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2lybHN8ZW58MHx8MHx8fDA%3D"},
    {name:"Indian", image:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW5kaWFufGVufDB8fDB8fHww"},
    {name:"Indian", image:"https://plus.unsplash.com/premium_photo-1682090842887-ce74633ad05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5kaWFufGVufDB8fDB8fHww"},
    {name:"Animal", image:"https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5pbWFsfGVufDB8fDB8fHww"},
    {name:"Mountain", image:"https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW58ZW58MHx8MHx8fDA%3D"},
    {name:"Yoga", image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BvcnR8ZW58MHx8MHx8fDA%3D"},
    {name:"Sea", image:"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNlYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Girls", image:"https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2lybHN8ZW58MHx8MHx8fDA%3D"},
    {name:"Indian", image:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW5kaWFufGVufDB8fDB8fHww"},
    {name:"Indian", image:"https://plus.unsplash.com/premium_photo-1682090842887-ce74633ad05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5kaWFufGVufDB8fDB8fHww"}
];

//Creating function for displaying images


function displayImages(){
    let clutter = ""
    array.forEach(function(item){
        clutter += `<div id="Box">
        <img src="${item.image}" alt="${item.name}">
        </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
    console.log("done")
};

displayImages();

// Making text input block onclick

function overlayFocus(){
    document.querySelector("#inputtext").addEventListener("focus", function(){
        document.querySelector(".overlay").style.opacity = "0.7";
    });
    
};

overlayFocus();

function remove_overlay(){
    document.querySelector("#inputtext").addEventListener("blur", function(){
        document.querySelector(".overlay").style.opacity = "0";
    })
}
remove_overlay();