/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 50;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

//Select the DOM elements
const errorPara = document.querySelector("#error");
const list = document.querySelector("#list");

getList()
//.then goes with resolve side
.then((hobbitsArr) => {
  console.log(hobbitsArr);
  //iterate over the array of hobbits
  for (let i = 0; i < hobbitsArr.length; i++) {
    //create
    const newLi = document.createElement("li");
    //modify
    newLi.textContent = hobbitsArr[i];
    //append
    list.append(newLi);
  }
})
//.catch goes with reject side
.catch((failureObj) => {
  console.log(failureObj);
  errorPara.textContent = failureObj.message;
})

// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
