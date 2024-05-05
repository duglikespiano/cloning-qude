window.onload = () => {
	//01.gnb애니메이션
	const menuOpen = document.querySelector('.gnb .menuOpen');
	const menuBox = document.querySelector('.gnb .menuBox');

	menuOpen.addEventListener('click', () => {
		menuBox.classList.toggle('on');
	});

	gsap.registerPlugin(ScrollTrigger);
	//02.visual
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.visual',
				start: '100% 100%',
				end: '100% 0%',
				scrub: 1,
				//markers: true,
			},
		})
		.to(
			'.logoWrap #j',
			{
				x: -150,
				y: 250,
				rotate: 20,
				ease: 'none',
			},
			0
		)
		.to(
			'.logoWrap #y',
			{
				x: -30,
				y: 150,
				rotate: -10,
				ease: 'none',
			},
			0
		)
		.to(
			'.logoWrap #o',
			{
				x: 0,
				y: 400,
				rotate: -10,
				ease: 'none',
			},
			0
		)
		.to(
			'.logoWrap #u',
			{
				x: -50,
				y: 300,
				rotate: 10,
				ease: 'none',
			},
			0
		)
		.to(
			'.logoWrap #n',
			{
				x: 100,
				y: 100,
				rotate: -10,
				ease: 'none',
			},
			0
		)
		.to(
			'.logoWrap #g',
			{
				x: 10,
				y: 450,
				rotate: 20,
				ease: 'none',
			},
			0
		);

	//03.mainTextBox .title i
	gsap.utils.toArray('.mainTextBox .title i').forEach((element) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: element,
					start: '100% 100%',
					end: '100% 100%',
					scrub: 1,
					//markers: true,
				},
			})
			.fromTo(element, { opacity: 0, y: 150 }, { opacity: 1, y: 0, ease: 'none' }, 0);
	});

	//04.subText p
	gsap.utils.toArray('.subText p').forEach((element) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: element,
					start: '100% 100%',
					end: '100% 100%',
					scrub: 1,
					// markers: true,
				},
			})
			.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'none' }, 0);
	});

	//05.con1
	let textAnimationList = document.querySelectorAll('.con1 .textAni li');
	let textAnimation = gsap.timeline({ repeat: -1 });
	for (let element of textAnimationList) {
		textAnimation.to(element, { x: 0, opacity: 1, repeat: 1, duration: 0.8, delay: 0, yoyo: true, ease: 'power4.out' });
	}

	//06.con4
	gsap.utils.toArray('.con4 .listBox .box').forEach((element) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: element,
					start: '0% 20%',
					end: '0% 0%',
					scrub: 1,
					// markers: true,
				},
			})
			.to(element, { transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)' });
	});

	//07.con3
	gsap.utils.toArray('.con3 .listBox li').forEach((element, i) => {
		ScrollTrigger.create({
			trigger: element,
			start: '0% 50%',
			end: '0% 50%',
			// markers: true,
			onEnter: () => {
				gsap.set(element, {
					rotationX: '-65deg',
					z: '-500px',
					opacity: 0,
				});
				gsap.to(element, {
					rotationX: 0,
					z: 0,
					opacity: 1,
					delay: (i % 3) * 0.05,
					duration: 0.3,
				});
			},
		});
	});

	//08.con5
	let listBox = document.querySelectorAll('.con5 .listBox li');
	let imgBox = document.querySelector('.con5 .imgBox');
	let img = document.querySelector('.con5 .imgBox img');

	for (const [i, element] of listBox.entries()) {
		element.addEventListener('mouseover', () => {
			img.src = `image/img${i}.jpg`;
			gsap.set(imgBox, {
				scale: 0,
				opacity: 0,
			});
			gsap.to(imgBox, {
				scale: 1,
				opacity: 1,
				duration: 0.3,
			});
		});
		element.addEventListener('mousemove', (event) => {
			let imgBoxX = event.pageX + 20;
			let imgBoxY = event.pageY - 20;
			imgBox.style.left = imgBoxX + 'px';
			imgBox.style.top = imgBoxY + 'px';
		});
		element.addEventListener('mouseout', (event) => {
			gsap.to(imgBox, {
				scale: 0,
				opacity: 0,
				duration: 0.3,
			});
		});
	}
	gsap.timeline({
		scrollTrigger: {
			trigger: '.con5',
			start: '0% 100%',
			end: '100% 0%',
			toggleClass: {
				targets: '.wrap',
				className: 'on',
			},
		},
	});

	//09.footer
	gsap
		.timeline({
			scrollTrigger: {
				trigger: 'footer',
				start: '0% 100%',
				end: '100% 0%',
				scrub: 1,
				//markers: true,
			},
		})
		.to(
			'.logoWrap',
			{
				top: '20%',
				ease: 'none',
			},
			0
		);
};

//10.loading
let loading = document.querySelector('.loading');
let rotateElements = document.querySelectorAll('.rotate');
let opacityElements = document.querySelectorAll('.opacity');
setTimeout(() => loading.classList.add('scene1'), 0);
setTimeout(() => loading.classList.add('scene2'), 1500);
setTimeout(() => loading.classList.remove('scene1', 'scene2'), 2500);
setTimeout(() => rotateElements.forEach((element) => element.classList.add('on')), 2500);
setTimeout(() => opacityElements.forEach((element) => element.classList.add('on')), 2500);
