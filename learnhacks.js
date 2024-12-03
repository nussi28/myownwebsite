const url="http://localhost:3000/themen";
const elTable=document.querySelector(".dataTable");
const tableTbody=document.querySelector(".dataTable tbody");
const tableTfootSpan=document.querySelector(".dataTable tfoot span");
const elFormCoffees=document.querySelector("#formThemen");
const elBtSubmit=document.querySelector("#btSubmit");
const fberuf=document.querySelector("#beruf");
const flernfeld=document.querySelector("#lernfeld");
const fname=document.querySelector("#name");
const elBtSearch=document.querySelector("#btSearch");
const elSearch=document.querySelector("#search");

elBtSubmit.addEventListener("click", function() {
    const beruf = fberuf.value.trim();
    const lernfeld = flernfeld.value.trim();
    const name = fname.value.trim();

    if (beruf === "" || lernfeld === "" || name === "") {
        console.error("Bitte füllen Sie alle Felder aus!");
        return;
    }

    console.log("Ausbildungsberuf:", beruf);
    console.log("Lernfeld:", lernfeld);
    console.log("Name:", name);
});