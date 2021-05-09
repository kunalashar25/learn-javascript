'use strict';

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

const createImage = function (path) {
	return new Promise(function (resolve, reject) {
		const img = document.createElement('img');
		img.src = path;

		img.addEventListener('load', function () {
			imgContainer.append(img);
			resolve(img);
		});

		img.addEventListener('error', function () {
			reject(new Error(`Image not found at path ${path}`));
		});
	});
};

let currentImage;

createImage('img/img-1.jpg')
	.then(img => {
		currentImage = img;
		console.log(`Image loaded`);
		return wait(2);
	})
	.then(() => {
		currentImage.style.display = 'none';
		return createImage('img/img-2.jpg');
	})
	.then(img => {
		currentImage = img;
		console.log(`Image loaded`);
		return wait(2);
	})
	.then(() => {
		currentImage.style.display = 'none';
	})
	.catch(err => console.error(err));
