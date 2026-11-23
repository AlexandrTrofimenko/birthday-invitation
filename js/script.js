
/* =====================================
   WINTER BIRTHDAY ESCAPE
   Main JavaScript
===================================== */


/* =====================================
   COUNTDOWN
===================================== */

// 26 декабря 2026 года, 18:00
// Калининградское время UTC+2

const birthdayDate = new Date(
    "2026-12-26T18:00:00+02:00"
).getTime();


function updateTimer() {

    const now = Date.now();
    const difference = birthdayDate - now;

    const timer = document.getElementById("timer");

    if (difference <= 0) {

        timer.innerHTML = `
            <p class="countdown-note">
                Этот вечер настал! До встречи! 
            </p>
        `;

        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});

