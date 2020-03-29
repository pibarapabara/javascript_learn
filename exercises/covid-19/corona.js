console.log ("COVID - 19 : Hello Corona");

document.getElementById("countries").innerHTML += '<button id="voice">Voice</button>';
document.getElementById("voice").onclick = () => {
    console.log('voice');
    const rows = Array.from(document.querySelectorAll("#main_table_countries_today tbody tr")).slice(0,3)
    const sentences = rows.map((node) => {
        const columns = node.querySelectorAll ("td");
        const country = columns[0].innerText;
        const newCases = columns[2].innerText || "0";
        const newDeaths = columns[4].innerText || "0";

        return "" + country + " new cases: " + newCases + "." + " new deaths: " + newDeaths + ".";
    });
    const text = sentences.join(' ');

    const utterThis = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterThis);
};

