function calculateAge() {
    // Get the user's date of birth from the input field
    const dob = new Date(document.getElementById('dob').value);
    // Get today's date
    const today = new Date();

    // Calculate the difference in years, months, and days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust if the birth date hasn't occurred yet this year
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (months < 0) ? 12 : 0;
    }
    
    // Adjust if the birth date hasn't occurred yet this month
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    // Display the result in a human-friendly format
    if (isNaN(years)) {
        document.getElementById('result').innerHTML = "Please select a valid date.";
    } else {
        document.getElementById('result').innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    }
}
