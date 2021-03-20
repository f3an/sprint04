let array = document.getElementsByTagName("li");

for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (
        current.hasAttributes() === false ||
        (current.getAttribute("class") !== "good" &&
            current.getAttribute("class") !== "evil" &&
            current.getAttribute("class") !== "unknown")
    ) {
        current.setAttribute("class", "unknown");
    }
    let att = current.attributes;
    if (!att["data-element"]) {
        current.setAttribute("data-element", "none");
    }
    let dataElement = current.getAttribute("data-element").split(" ");
    let br = document.createElement("br");
    current.appendChild(br);

    let circleClass;

    function add() {
        let divCircle = document.createElement("div");
        circleClass = document.createAttribute("class");
        current.appendChild(divCircle);
        divCircle.setAttributeNode(circleClass);
        circleClass.value = "elem";

        if (dataElement.includes("none")) {
            let divLine = document.createElement("div");
            let lineClass = document.createAttribute("class");
            divLine.setAttributeNode(lineClass);
            divCircle.appendChild(divLine);
            lineClass.value = "line";
        }
    }
    for (let x = 0; x < dataElement.length; x++) {
        add();
        circleClass.value += " " + dataElement[x];
    }
    console.log(current);
}