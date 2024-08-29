let slide=document.querySelectorAll(".brand");
let count=0;
slide.forEach(function(slides,index){
  slides.style.left=`${index * 100}%`; 
})
function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translate(-${count*100}%)`;
    })
}
setInterval(function(){
    count++;
    if(count==slide.length){
        count==0;
    }
    myfun();
},2000)