const namee=document.getElementById("1");
const fname=document.getElementById("2");
const mnumber=document.getElementById("3");
const mail=document.getElementById("4");
const datee=document.getElementById("5");


const btn1=document.getElementById("btn");

const para=document.getElementById("write");



btn1.addEventListener('click', function(){
    const pname=`<span>${namee.value}</span>`
    const ffname=fname.value;
    const mobname=mnumber.value;
    const mailname=mail.value;
    const dateename=datee.value;

    para.textContent=`hellO ${pname} son of ${ffname} confirm your mobile number ${mobname} mail ${mailname} and the date ${dateename} `
})