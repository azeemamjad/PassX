let toggle = document.querySelector(".toggle");
let toggle1 = document.querySelector(".toggle1");
let toggle2 = document.querySelector(".toggle2");
function Animatedtoggle()
{
    toggle.classList.toggle("active");
}
function Animatedtoggle1()
{
    toggle1.classList.toggle("active");
}
function Animatedtoggle2()
{
    toggle2.classList.toggle("active");
}
function generatePassword(t, t1, t2, n) {
    const numbers = '0123456789';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()-_+=<>?';

    let validChars = '';

    if (t) validChars += numbers;
    if (t1) validChars += characters;
    if (t2) validChars += specialCharacters;

    if (validChars.length === 0) {
        return 'No character types selected for the password.';
    }

    let password = '';
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    return password;
}


function generate()
{
    let t=toggle.classList.contains("active");
    let t1=toggle1.classList.contains("active");
    let t2=toggle2.classList.contains("active");
    let pas=document.querySelector(".passwords");
    const length = document.querySelector(".len").value;
    const newPassword = generatePassword(t, t1, t2, length);
const newPassword1 = generatePassword(t, t1, t2, length);
const newPassword2 = generatePassword(t, t1, t2, length);
const newPassword3 = generatePassword(t, t1, t2, length);
const newPassword4 = generatePassword(t, t1, t2, length);
if ((newPassword == 'No character types selected for the password.') || (length <= 3))
{
    pas.innerHTML = '<h2>No character types selected for the password. or password length not given please give the correct length(4 or greater) and "turn on" atleast one button</h2>';
}
else
{
pas.innerHTML = '<table border="1">' +
    '<tr>' +
    '<th colspan="2">Here Are The Passwords Generated</th>' +
    '</tr>' +
    '<tr>' +
    '<td class="ps">' + newPassword + '<img src="img/copy.svg" alt="copy" class="copy" onclick="co()"></td>' +
    '</tr >' +
    '<tr>' +
    '<td class="ps1">' + newPassword1 + '<img src="img/copy.svg" alt="copy" class="copy1" onclick="co1()"></td>' +
    '</tr>' +
    '<tr>' +
    '<td class="ps2">' + newPassword2 + '<img src="img/copy.svg" alt="copy" class="copy2" onclick="co2()"></td>' +
    '</tr>' +
    '<tr>' +
    '<td class="ps3">' + newPassword3 + '<img src="img/copy.svg" alt="copy" class="copy3" onclick="co3()"></td>' +
    '</tr>' +
    '<tr>' +
    '<td class="ps4">' + newPassword4 + '<img src="img/copy.svg" alt="copy" class="copy4" onclick="co4()"></td>' +
    '</tr>' +
    '</table>';
}
}

function co() {
    let p = document.querySelector(".ps").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = p;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + p);
}

function co1() {
    let p = document.querySelector(".ps1").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = p;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + p);
}
function co2() {
    let p = document.querySelector(".ps2").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = p;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + p);
}
function co3() {
    let p = document.querySelector(".ps3").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = p;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + p);
}
function co4() {
    let p = document.querySelector(".ps4").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = p;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + p);
}