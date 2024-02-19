
// reviews array
  const reviews = [];

  // Function to handle form submission
  const handleSubmit = (event) => {
      event.preventDefault(); // Prevent form submission

      // Get the review input value
      const reviewInput = document.getElementById("reviewInput").value;

      // Add the review to the reviews array
      reviews.push(reviewInput);

      // Clear the review input field
      document.getElementById("reviewInput").value = "";

      // Display the updated reviews
      displayReviews();
  };

  // Function to display reviews
  const displayReviews = () => {
      // Get the reviews list container
      const reviewsList = document.getElementById("reviewsList");

      // Clear previous reviews
      reviewsList.innerHTML = "";

      // Populate the reviews list with submitted reviews
      reviews.forEach(review => {
          const li = document.createElement("li");
          li.textContent = review;
          reviewsList.appendChild(li);
      });
  };

  // Function to handle clearing reviews
  const clearReviews = () => {
      // Clear the reviews array
      reviews.length = 0;

      // Clear the reviews display
      displayReviews();
  };

  // Add event listener for form submission
  document.getElementById("reviewForm").addEventListener("submit", handleSubmit);

  // Add event listener for button click to clear reviews
  document.getElementById("clearReviewsButton").addEventListener("click", clearReviews);