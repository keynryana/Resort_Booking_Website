const bookingForm = document.getElementById("bookingForm");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const successMessage = document.getElementById("successMessage");


// Get today's date
const today = new Date().toISOString().split("T")[0];


// Prevent past check-in dates
checkin.min = today;


// Check-out must be after check-in
checkin.addEventListener("change", function () {

    const selectedDate = new Date(checkin.value);

    selectedDate.setDate(selectedDate.getDate() + 1);

    checkout.min = selectedDate.toISOString().split("T")[0];

});


// Form submission
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check required fields
    if (!bookingForm.checkValidity()) {

        bookingForm.reportValidity();

        return;
    }


    // Make sure checkout is after checkin
    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);


    if (checkoutDate <= checkinDate) {

        alert("Check-out date must be at least one day after check-in.");

        return;
    }


    // Show success message
    successMessage.style.display = "block";


    // Reset form
    bookingForm.reset();

    // Restore minimum check-in date
    checkin.min = today;

});