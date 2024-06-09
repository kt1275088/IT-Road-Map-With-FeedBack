// Function to show feedback form
function showFeedbackForm() {
    document.getElementById("feedbackFormContainer").style.display = "block";
    document.getElementById("feedbackListContainer").style.display = "none";
}

// Function to show feedback list
function showFeedbackList() {
    document.getElementById("feedbackFormContainer").style.display = "none";
    document.getElementById("feedbackListContainer").style.display = "block";
}

// Event listener for showing feedback form
document.getElementById("showFeedbackFormBtn").addEventListener("click", function() {
    showFeedbackForm();
});

// Event listener for form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Assume here you'll send the feedback data to a server for processing/storage
    // For demonstration purposes, let's just log the feedback to the console
    console.log("Feedback submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you can display a confirmation message to the user
    alert("Thank you for your feedback!");
    // Reset the form
    document.getElementById("feedbackForm").reset();

    // Show the feedback list after submitting feedback
    showFeedbackList();
});

// Initially show the feedback form
showFeedbackForm();
