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

const loadNPause = async function () {
	try {
		let img = await createImage('img/img-1.jpg');
		console.log('Image 1 loaded');

		await wait(2);
		img.style.display = 'none';

		img = await createImage('img/img-2.jpg');
		console.log('Image 2 loaded');

		await wait(2);
		img.style.display = 'none';
	} catch (err) {
		console.error(err);
	}
};

//loadNPause();

const loadAll = async function (imgArr) {
	try {
		// created async arrow function
		const imgs = imgArr.map(async i => await createImage(i));

		// async function will always return promise
		console.log(imgs); // (2) [Promise, Promise]

		const imageEl = await Promise.all(imgs);
		console.log(imageEl); // (2) [img, img]

		imageEl.forEach(i => i.classList.add('parallel'));
	} catch (err) {
		console.error(err);
	}
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg']);
