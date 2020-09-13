// const img = document.getElementById('dog');

// const fetchRandomDogImage = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             img.src = data.message; // setting the image url
//         })
// }

// fetchRandomDogImage();

/* ====================================================================== */

const images = document.querySelectorAll('.fadeIn');

const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        const target = entry.target;

        if (entry.intersectionRatio > 0) {
            target.style.animation = `fadeIn 1s ${target.dataset.delay} forwards ease-out`;
        } else {
            target.style.animation = `none`;
        }
    });
});

images.forEach((image) => {
    observer.observe(image);
});
