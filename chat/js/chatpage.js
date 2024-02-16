let menulist = document.querySelectorAll('.menu-list');
for (let i = 0; i < menulist.length; i++) {
	menulist[i].addEventListener('mouseover', () => {
		for (let j = 0; j < menulist.length; j++) {
			menulist[j].classList.remove('active');
		}
		menulist[i].classList.add('active');
	});
}
