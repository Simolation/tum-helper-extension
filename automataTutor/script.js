(function() {
  
  // only execute on the main page with the overview
  if(window.location.href.includes("automata.model.in.tum.de/main/course/index")) {

    const stillToDo = [];

    // get the table elements
    const elements = document.getElementsByTagName("tr")
    for (var i = 1; i < elements.length; i++) {
      const tds = elements[i].getElementsByTagName("td")

      // check if completed
      const completed = tds[2].innerHTML.replace(/\s/g, '').split("/").every( (val, i, arr) => val === arr[0])

      const ended = tds[4].innerHTML.trim() == "ended"

      if(ended) {
        elements[i].classList.add("over")
      }

      if (completed) {
        tds[2].prepend(document.createTextNode("✔️"))
      } else {
        tds[2].prepend(document.createTextNode("❌"))
      }
  
      // get all elements that are homeworks
      if(tds[0].innerHTML.trim().startsWith("H")) {
  
        // highlight homeworks
        if (completed) {
          elements[i].classList.add("tum-helper", "finished")
        } else {
          // add homeworks that are still to do to the list
          if (!ended) {
            stillToDo.push(elements[i].cloneNode(true))
          }

          elements[i].classList.add("tum-helper", "remaining")
        }
        
      }
    }

    // show homeworks to do on top
    const mainDiv = document.getElementById("main")
    const newHeading = document.createElement("h2")
    newHeading.appendChild(document.createTextNode("Open Homeworks"))

    // create table
    const newTable = document.createElement("table")
    const newTableBody = document.createElement("tbody")
    newTableBody.appendChild(elements[0].cloneNode(true))
    for (let i = 0; i < stillToDo.length; i++) {
      newTableBody.appendChild(stillToDo[i])
    }
    newTable.appendChild(newTableBody)

    mainDiv.prepend(newTable)
    mainDiv.prepend(newHeading)

  }

})();