"use strict";

var faders = document.querySelectorAll(".fade-in");

var options = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

var appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(function (fader) {
    appearOnScroll.observe(fader);
});