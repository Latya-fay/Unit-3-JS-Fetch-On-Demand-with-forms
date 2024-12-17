// Function to initialize our form behavior and fetch logic
const init = () => {
 
  const inputForm = document.querySelector("form");

  // 2. Add an event listener for form submission
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // 3. Select the input field and get the value entered
    const input = document.querySelector("input#searchByID");
    const movieID = input.value; 

    // 4. Fetch data for the specific movie ID
    fetch(`http://localhost:3000/movies/${movieID}`)
      .then((response) => {
        if (!response.ok) {
          
          throw new Error("Movie not found");
        }
        return response.json(); 
      })
      .then((data) => {
        // 5. Select DOM elements where movie details will be displayed
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        // 6. Update the DOM with fetched movie details
        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        // 7. Handle errors
        console.error(error);
        alert("Movie not found. Please enter a valid ID.");
      });
  });
};


document.addEventListener("DOMContentLoaded", init);
