    const isLoggedIn = sessionStorage.getItem('loggedIn');

    // If not logged in, redirect to the login page
    if (!isLoggedIn) {
        window.location.href = "index.html";
    }