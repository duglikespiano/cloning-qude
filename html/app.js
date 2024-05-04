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
				x: 50,
				y: 450,
				rotate: 20,
				ease: 'none',
			},
			0
		);

	//03.mainTextBox .title i
	gsap.utils.toArray('.mainTextBox .title i').forEach((item) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: item,
					start: '100% 100%',
					end: '100% 100%',
					scrub: 1,
					//markers: true,
				},
			})
			.fromTo(item, { opacity: 0, y: 150 }, { opacity: 1, y: 0, ease: 'none' }, 0);
	});

	//04.subText p
	gsap.utils.toArray('.subText p').forEach((item) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: item,
					start: '100% 100%',
					end: '100% 100%',
					scrub: 1,
					markers: true,
				},
			})
			.fromTo(item, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'none' }, 0);
	});
};
