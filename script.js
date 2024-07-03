// script.js - Example for adding interactivity (e.g., toggle details)

const jobEntries = document.querySelectorAll('.job');

jobEntries.forEach(job => {
    const jobTitle = job.querySelector('h3');
    const jobDetails = job.querySelector('ul');

    jobTitle.addEventListener('click', () => {
        jobDetails.classList.toggle('show-details');
    });
});
