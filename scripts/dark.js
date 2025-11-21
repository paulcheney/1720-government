const darkbutton = document.querySelector('#dark')
const mainarea = document.querySelector('main')


//Toggle the dark class off and on
darkbutton.addEventListener('click', () => {
	mainarea.classList.toggle('dark');
});