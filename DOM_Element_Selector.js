document.addEventListener('DOMContentLoaded', function () {
    // 1. Select the heading by id and change its text content
    const mainHeading = document.getElementById('main-heading');
    mainHeading.textContent = 'DOM Manipulation in Action!';

    // 2. Select all paragraphs with the class 'text-content' and change their text color to blue
    const textContentParagraphs = document.getElementsByClassName('text-content');
    for (let paragraph of textContentParagraphs) {
        paragraph.style.color = 'blue';
    }

    // 3. Select the image by its id and change its source
    const mainImage = document.getElementById('main-image');
    mainImage.src = 'https://via.placeholder.com/150/0000FF/808080?text=New+Image';

    // 4. Select the container div by its class and change its background color
    const containerDiv = document.querySelector('.container');
    containerDiv.style.backgroundColor = '#f0f8ff';

    // 5. Select all paragraphs inside the container div and update their text content
    const containerParagraphs = containerDiv.querySelectorAll('p');
    containerParagraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Updated paragraph ${index + 1} inside the container.`;
    });
});
