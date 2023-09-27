let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('second');
let ampm = document.getElementById('ampm');

let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let ss = document.getElementById('ss');

setInterval(() => {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	const am = h >= 12 ? 'PM' : 'AM';

	if (h > 12) {
		h = h - 12;
	}

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
	ampm.innerHTML = am;

	hr.style.transform = `rotateZ(${h * 30}deg)`;
	mn.style.transform = `rotateZ(${m * 6}deg)`;
	ss.style.transform = `rotateZ(${s * 6}deg)`;
});
