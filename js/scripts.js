$(document).ready(function() {
    // Toggle the navigation menu when the hamburger button is clicked
    $('#hamburger-btn').click(function() {
        $('#menu-items').toggleClass('active');  // Toggle visibility using the "active" class
    });

    // Close the menu when a menu item is clicked
    $('#menu-items a').click(function() {
        $('#menu-items').removeClass('active');  // Hide the menu when a link is clicked
    });

    // Close the hamburger menu if clicked outside of it (for mobile view)
    $(document).click(function(event) {
        if (!$(event.target).closest('#menu-items, #hamburger-btn').length) {
            $('#menu-items').removeClass('active');  // Close the menu if clicked outside
        }
    });
});
