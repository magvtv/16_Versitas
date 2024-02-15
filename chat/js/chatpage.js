let menulist = document.querySelectorAll('.menu-list');
for (let i = 0; i < menulist.length; i++) {
	menulist[i].addEventListener('mouseover', () => {
		let j = 0;
		while (j < menulist.length) {
			menulist[j++].className = 'menu-list';
		}
		menulist[i].className = 'menu-list active';
	});
}
