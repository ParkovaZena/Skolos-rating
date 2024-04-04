const tlac = document.getElementById('tlac');
const rads = document.querySelectorAll('input[type="radio"]');
const hod = document.getElementById('hodnocko');
let vys = ""; 

rads.forEach(sele => {
    sele.addEventListener("change", () => { 
        document.getElementById('hodno').classList.replace("hod","uka");
        vys =`You selected ${sele.value} out of 5`;
    });
});

tlac.addEventListener("click", () => {
    if(vys!==""){
    hod.innerText = vys;
    document.getElementById('vse').classList.replace("wrapper","hod");
    setTimeout(() => {location.reload();}, 4000);
    }
});