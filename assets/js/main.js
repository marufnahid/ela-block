var glide = new Glide('.glide-brand-carousel', {
	type: 'carousel',
	perView: 7,
	focusAt: 4,
	gap: 40,
	autoplay: false,//default false
	hoverpause: true, //default true
	animationDuration:1000,
	breakpoints: {
		1400: {
			perView: 5
		},
		1200: {
			perView: 4
		},
		1024: {
			perView: 3
		},
		800: {
			perView: 2
		},
		480: {
			perView: 1
		}
	}
})

glide.mount()
