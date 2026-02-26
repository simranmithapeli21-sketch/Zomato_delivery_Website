document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchBtn");

  function search() {
    const query = input.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // Replace with real search logic later
    } else {
      alert("Please enter something to search.");
    }
  }

  button.addEventListener("click", search);

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });
});

