```javascript
/* =========================================================
   VIDEO MODAL
========================================================= */

// Get elements
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");


/* =========================================================
   OPEN VIDEO
========================================================= */

function openVideo(videoSource) {

    // Set video source
    modalVideo.src = videoSource;

    // Show modal
    videoModal.style.display = "flex";

    // Prevent page scrolling
    document.body.style.overflow = "hidden";

    // Start video
    modalVideo.play();
}


/* =========================================================
   CLOSE VIDEO
========================================================= */

function closeVideo() {

    // Stop video
    modalVideo.pause();

    // Remove video source
    modalVideo.src = "";

    // Hide modal
    videoModal.style.display = "none";

    // Allow page scrolling again
    document.body.style.overflow = "";
}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE VIDEO
========================================================= */

videoModal.addEventListener("click", function (event) {

    if (event.target === videoModal) {
        closeVideo();
    }

});


/* =========================================================
   CLOSE WITH ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (videoModal.style.display === "flex") {
            closeVideo();
        }

    }

});
```
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');

    navLinks.classList.toggle('mobile-active');
}
