// Oppgave 1: Endre bakgrunnsfargen til teksten
function changeColor() {
    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
    let textDiv = document.getElementById("text");
    let currentColor = textDiv.style.backgroundColor;
    
    // Velger en tilfeldig farge som ikke er den samme som nå
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    textDiv.style.backgroundColor = newColor;
}

// Oppgave 2: Legge til tekst og endre størrelse på et p-element
function modifyParagraph() {
    let paragraph = document.querySelector(".paragraph");
    paragraph.textContent = "Dette er den nye teksten";
    paragraph.style.fontSize = "24px"; // endrer skriftstørrelse
}

// Oppgave 3: Lage en to-do liste
function addToDo() {
    let selectedWord = document.querySelector("#wordList").value;
    let ul = document.getElementById("todoList");
    let li = document.createElement("li");
    li.textContent = selectedWord;
    ul.appendChild(li);
}

// Oppgave 4: Lage en kalender med eventer
function addEvent(day) {
    let eventText = prompt("Legg til en hendelse:");
    if (eventText) {
        let dayDiv = document.getElementById(day);
        let eventSpan = document.createElement("span");
        eventSpan.textContent = " - " + eventText;
        eventSpan.style.display = "block"; // legger det under dagen
        eventSpan.style.fontSize = "12px";
        eventSpan.style.color = "red";
        dayDiv.appendChild(eventSpan);
    }
}

// Oppgave 5: Dynamisk Tema-veksler
document.addEventListener("DOMContentLoaded", () => {
    // Finn containeren for Oppgave 5
    const oppgave5 = document.querySelector("h2:nth-of-type(5)"); // 5. <h2> er Oppgave 5

    if (oppgave5) {
        const btn = document.createElement("button");
        btn.id = "themeToggle";
        btn.textContent = "Bytt Tema";

        // Legg knappen rett etter overskriften Oppgave 5
        oppgave5.insertAdjacentElement("afterend", btn);

        // Event for å bytte tema
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");
        });

        // Sett standard til light-mode
        document.body.classList.add("light-mode");
    }
});


// Oppgave 6: Live Tekstredigerer

// Finn h2-elementet for Oppgave 6
const oppgave6 = Array.from(document.querySelectorAll("h2"))
    .find(h2 => h2.textContent.includes("Oppgave 6"));

// Opprett tekstfelt
const textarea = document.createElement("textarea");
textarea.placeholder = "Skriv tekst her...";
textarea.style.width = "100%";
textarea.style.height = "80px";
textarea.style.marginTop = "10px";

// Opprett font-størrelse dropdown
const sizeSelect = document.createElement("select");
["16px", "20px", "24px", "32px"].forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
});

// Opprett fargevelger
const colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.style.margin = "0 10px";

// Opprett font-familie dropdown
const fontSelect = document.createElement("select");
["Arial", "Times New Roman", "Verdana"].forEach(font => {
    const option = document.createElement("option");
    option.value = font;
    option.textContent = font;
    fontSelect.appendChild(option);
});

// Opprett forhåndsvisning
// Opprett forhåndsvisning
const preview = document.createElement("p");
preview.textContent = "Teksten vises her";
preview.style.border = "1px solid #ccc";
preview.style.padding = "10px";
preview.style.minHeight = "50px";
preview.style.marginTop = "10px";

// Legg til disse stilene:
preview.style.whiteSpace = "pre-wrap"; // Bevarer linjeskift fra textarea
preview.style.wordWrap = "break-word"; // Bryter lange ord
preview.style.overflowY = "auto"; // Legger til rullefelt hvis nødvendig


// Legg elementene under Oppgave 6
oppgave6.insertAdjacentElement("afterend", preview);
oppgave6.insertAdjacentElement("afterend", fontSelect);
oppgave6.insertAdjacentElement("afterend", colorInput);
oppgave6.insertAdjacentElement("afterend", sizeSelect);
oppgave6.insertAdjacentElement("afterend", textarea);

// Legg til eventer for live oppdatering
textarea.addEventListener("input", () => {
    preview.textContent = textarea.value;
});

sizeSelect.addEventListener("input", () => {
    preview.style.fontSize = sizeSelect.value;
});

colorInput.addEventListener("input", () => {
    preview.style.color = colorInput.value;
});

fontSelect.addEventListener("input", () => {
    preview.style.fontFamily = fontSelect.value;
});

const images = document.querySelectorAll(".zoom-img");
 
images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
    });
 
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

let draggedBox = null;
 
function dragStart(event) {
    draggedBox = event.target;
}
 
function allowDrop(event) {
    event.preventDefault();
}
 
function drop(event) {
    event.preventDefault();
    event.target.appendChild(draggedBox);
}
 
// Hent elementer med getElementById
document.getElementById("box1").addEventListener("dragstart", dragStart);
document.getElementById("box2").addEventListener("dragstart", dragStart);
document.getElementById("dropZone").addEventListener("dragover", allowDrop);
document.getElementById("dropZone").addEventListener("drop", drop);