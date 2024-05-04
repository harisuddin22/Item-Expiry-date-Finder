document.getElementById('expiryButton').addEventListener('click', function() {
    var currentDate = new Date();
    var expiryDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    alert('Your item will expire after 7 days on ' + expiryDate.toDateString());
});