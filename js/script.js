
const countwords=()=>{

    // Total characters count
    let totalnos = document.getElementById('words').value.length;
    document.getElementById('showdata').innerHTML = "Total Characters : " + totalnos;

    // Total Words Count

    let totalwords = document.getElementById('words').value;
     totalwords = totalwords.match(/\w+/g);
     totalwords = totalwords.length;

    document.getElementById('showdata2').innerHTML = "Total Words : " + totalwords;
}