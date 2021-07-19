
let sideopen = document.getElementById('open');
let close = document.getElementById('close');

sideopen.addEventListener('click', function(e){
    document.getElementById('side').style.width = "300px";
})

close.addEventListener('click', function(e){
    document.getElementById('side').style.width = "0px";
})