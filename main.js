var hall = 100;
var h = 20.2;
var w = 10;
var boardarr = [];
var sl = 40;
var holdarr = [];
var nextarr = [];
var slmin = 35;
var nextlen = 5;
var color = {
	mino: [
		[0, 0, 0],
		[0, 255, 255],
		[255, 255, 0],
		[255, 0, 255],
		[0, 0, 255],
		[255, 127, 0],
		[255, 0, 0],
		[0, 255, 0],
		[16, 16, 16],
		[64, 64, 64],
		[127, 127, 127]
	],
	sent: [
		[255, 255, 255],
		[0, 255, 0],
		[0, 0, 255],
		[255, 255, 0],
		[0, 255, 255]
	]
};
var proportion = { move: [1, 0.5], set: [1, 0.4], ghost: [1, 0.7], text: [1, 0.5] };
var minodata = [
	{
		name: 'X', ofs: 0, srs: 0, bonus: -1, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'I', ofs: -1, srs: 4, bonus: 0, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'O', ofs: 0, srs: 4, bonus: -1, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'T', ofs: 0, srs: 3, bonus: 1, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'J', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'L', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'Z', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}, {
		name: 'S', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		], [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]]
	}
];
for (let i = 0; i <= 7; i++) {
	minodata[i].mr = [];
	for (let j = 0; j < 4; j++) {
		minodata[i].mr[j] = []
		for (let k = 0; k < 6; k++) {
			minodata[i].mr[j][k] = minodata[i].md[j][6 - 1 - k];
		}
	}
}
var bonus = [
	{ open: 0, mino: [1] },
	{ open: 1, mino: [3] },
	{ open: 0, mino: [4, 5] },
	{ open: 0, mino: [6, 7] }
];

var srs = {
	3: {
		0: {
			1: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
			2: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			3: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }]
		},
		1: {
			0: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
			2: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
			3: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
		},
		2: {
			0: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			1: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
			3: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }]
		},
		3: {
			0: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
			1: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			2: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }]
		}
	},
	4: {
		0: {
			1: [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: -1 }, { x: 1, y: 2 }],
			2: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			3: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }]
		},
		1: {
			0: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 1 }, { x: -1, y: -2 }],
			2: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 1 }, { x: -1, y: -2 }],
			3: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
		},
		2: {
			0: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			1: [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: -1 }, { x: 1, y: 2 }],
			3: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }]
		},
		3: {
			0: [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
			1: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			2: [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }]
		}
	}
}

var linesent = [
	{ name: '      ', sent: { normal: { normal: 0, b2b: 0 }, spin: { normal: 0, b2b: 0 } } },
	{ name: 'Single', sent: { normal: { normal: 0, b2b: 0 }, spin: { normal: 2, b2b: 3 } } },
	{ name: 'Double', sent: { normal: { normal: 1, b2b: 0 }, spin: { normal: 4, b2b: 5 } } },
	{ name: 'Triple', sent: { normal: { normal: 2, b2b: 0 }, spin: { normal: 6, b2b: 8 } } },
	{ name: 'Tetris', sent: { normal: { normal: 4, b2b: 5 }, spin: { normal: 10, b2b: 13 } } }
];

var combosent = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5];
var sentnum = 0;
var combo = 0;
var time = {
	move: { start: 100, interval: 35 },
	down: { start: 30, interval: 10 }
};
var timename = {
	move: 'Move',
	down: 'Down',
	start: 'second',
	interval: 'delay'
};
var openghost = 1;

var key = {
	newgame: {
		name: 'Determine', use: 'Enter',
		lock: 0, timeout: null, interval: null, tag: null
	},
	left: {
		name: 'Move left', use: 'ArrowLeft',
		lock: 0, timeout: null, interval: null, tag: null
	},
	right: {
		name: 'Move right', use: 'ArrowRight',
		lock: 0, timeout: null, interval: null, tag: null
	},
	soft: {
		name: 'Soft down', use: 'ArrowDown',
		lock: 0, timeout: null, interval: null, tag: null
	},
	hard: {
		name: 'Hard down', use: 'Space',
		lock: 0, timeout: null, interval: null, tag: null
	},
	hold: {
		name: 'Hold', use: 'ShiftLeft',
		lock: 0, timeout: null, interval: null, tag: null
	},
	hold2: {
		name: 'Hold', use: 'KeyC',
		lock: 0, timeout: null, interval: null, tag: null
	},
	spinleft: {
		name: 'Spin left', use: 'ControlLeft',
		lock: 0, timeout: null, interval: null, tag: null
	},
	spinleft2: {
		name: 'Spin left', use: 'KeyZ',
		lock: 0, timeout: null, interval: null, tag: null
	},
	spinright: {
		name: 'Spin right', use: 'ArrowUp',
		lock: 0, timeout: null, interval: null, tag: null
	},
	spinright2: {
		name: 'Spin right', use: 'KeyX',
		lock: 0, timeout: null, interval: null, tag: null
	}
};
var keytmp = { ckn: '', obj: null };

function keyreset() {
	for (let name in key) {
		key[name].lock = 0;
		if (key[name].timeout != null) {
			clearTimeout(key[name].timeout);
		}
		if (key[name].interval != null) {
			clearInterval(key[name].interval);
		}
	}
}

var now;

function boardarrreset() {
	for (let i = 0; i < hall; i++) {
		for (let j = 0; j < w; j++) {
			boardarr[i][j].cnt = 0;
			boardarr[i][j].id = 0;
			boardarr[i][j].set = 0;
			boardarr[i][j].tag.style.background = 'none';
		}
	}
}

function loadcolor(orgrgb, proportion) {
	let hsl = rgbToHsl(...orgrgb);
	hsl[1] *= proportion[0];
	if (proportion[1] > 0.5) {
		hsl[2] += (proportion[1] - 0.5) / 0.5 * (1 - hsl[2]);
	} else if (proportion[1] < 0.5) {
		hsl[2] *= (proportion[1]) / 0.5;
	}
	return rgbToHex(...hslToRgb(...hsl));
}
function settextxoffset(element, line = 0) {
	let width = element.getAttribute('viewBox').split(' ')[2];
	let tag = element.getElementsByTagName('text');
	console.log(tag[line].getBBox().width);
	let newx = (width - tag[line].getBBox().width) / 2;
	tag[line].setAttribute('x', newx);
}
function settext(element, str) {
	let tag = element.getElementsByTagName('text');
	tag[0].innerHTML = str;
	settextxoffset(element);
}
function settextcolor(element, color) {
	let tag = element.getElementsByTagName('use');
	tag[1].setAttribute('fill', color);
	tag[1].setAttribute('stroke', color);
}
var setclearinterval = null;
function setclear(b2b, id, line, combo) {
	if (setclearinterval != null)
		clearInterval(setclearinterval);
	if (b2b) {
		b2btext.style.opacity = 1;
	} else {
		b2btext.style.opacity = 0;
	}
	if (id == 0) {
		spintext.style.opacity = 0;
		linetext.style.opacity = 0;
		linetext.style.top = '440px';
		settext(linetext, linesent[line].name);
		settextcolor(linetext, loadcolor(color.sent[line], proportion.text));
		linetext.style.opacity = 1;
	} else {
		spintext.style.opacity = 0;
		settext(spintext, minodata[id].name + '-spin');
		settextcolor(spintext, loadcolor(color.mino[id], proportion.text));
		spintext.style.opacity = 1;

		linetext.style.opacity = 0;
		linetext.style.top = '480px';
		settext(linetext, linesent[line].name);
		settextcolor(linetext, loadcolor(color.mino[id], proportion.text));
		linetext.style.opacity = 1;
	}
	if (combo == 0) {
		combonumtext.style.opacity = 0;
		combotext.style.opacity = 0;
	} else {
		combonumtext.style.opacity = 0;
		settext(combonumtext, combo);
		combonumtext.style.opacity = 1;
		combotext.style.opacity = 1;
	}
	setclearinterval = setInterval(function () {
		clearclear();
	}, 3000);
}

function clearclear() {
	b2btext.style.opacity = 0;
	spintext.style.opacity = 0;
	linetext.style.opacity = 0;
	combonumtext.style.opacity = 0;
	combotext.style.opacity = 0;
}

var action = {
	play: function () {
		mainboard.style.zIndex = -1;
		now = new mino();
		now.show();
		now.holdreset();
		game.change('play');
	},
	over: function () {
		game.change('pause');
		keyreset();
		overboard.style.zIndex = 1;
		game.change('over');
	},
	tomain: function () {
		now.holdreset();
		now.nextreset();
		keyreset();
		sentnum = 0;
		settext(sent, sentnum);
		clearclear();
		boardarrreset();
		overboard.style.zIndex = -1;
		mainboard.style.zIndex = 1;
		game.change('load');
	}
};
var game = {
	change: function (name) {
		window.onkeydown = function (e) {
			console.log(e.code);
			game[name].down(e);
		};
		window.onkeyup = function (e) {
			console.log(e.code);
			game[name].up(e);
		};
	},
	pause: {
		down: function (e) {
		},
		up: function (e) {
		}
	},
	load: {
		down: function (e) {
			switch (e.code) {
				case key.newgame.use:
					action.play();
					break;
				default:
					break;
			}
		},
		up: function (e) {
		}
	},
	over: {
		down: function (e) {
			switch (e.code) {
				case key.newgame.use:
					action.tomain();
					break;
				default:
					break;
			}
		},
		up: function (e) {
		}
	},
	play: {
		down: function (e) {
			switch (e.code) {
				case key.spinleft.use:
					if (key.spinleft.lock == 0) {
						now.spin(-1);
						key.spinleft.lock = 1;
					}
					break;
				case key.spinleft2.use:
					if (key.spinleft2.lock == 0) {
						now.spin(-1);
						key.spinleft2.lock = 1;
					}
					break;
				case key.spinright.use:
					if (key.spinright.lock == 0) {
						now.spin(1);
						key.spinright.lock = 1;
					}
					break;
				case key.spinright2.use:
					if (key.spinright2.lock == 0) {
						now.spin(1);
						key.spinright2.lock = 1;
					}
					break;
				case key.left.use:
					if (key.left.lock == 0) {
						now.movex(-1);
						key.left.lock = 1;
						key.left.timeout = setTimeout(function () {
							now.movex(-1, function () {
								if (key.left.timeout != null) {
									clearTimeout(key.left.timeout);
								}
								if (key.left.interval != null) {
									clearInterval(key.left.interval);
								}
							});
							key.left.timeout = null;
							key.left.interval = setInterval(function () {
								now.movex(-1, function () {
									if (key.left.timeout != null) {
										clearTimeout(key.left.timeout);
									}
									if (key.left.interval != null) {
										clearInterval(key.left.interval);
									}
								});
							}, time.move.interval);
						}, time.move.start);
					}
					break;
				case key.right.use:
					if (key.right.lock == 0) {
						now.movex(1);
						key.right.lock = 1;
						key.right.timeout = setTimeout(function () {
							now.movex(1, function () {
								if (key.right.timeout != null) {
									clearTimeout(key.right.timeout);
								}
								if (key.right.interval != null) {
									clearInterval(key.right.interval);
								}
							});
							key.right.timeout = null;
							key.right.interval = setInterval(function () {
								now.movex(1, function () {
									if (key.right.timeout != null) {
										clearTimeout(key.right.timeout);
									}
									if (key.right.interval != null) {
										clearInterval(key.right.interval);
									}
								});
							}, time.move.interval);
						}, time.move.start);
					}
					break;
				case key.soft.use:
					if (key.soft.lock == 0) {
						now.movey(-1);
						key.soft.lock = 1;
						key.soft.timeout = setTimeout(function () {
							now.movey(-1);
							key.soft.timeout = null;
							key.soft.interval = setInterval(function () {
								now.movey(-1);
							}, time.down.interval);
						}, time.down.start);
					}
					break;
				case key.hard.use:
					if (key.hard.lock == 0) {
						now.harddrop();
						key.hard.lock = 1;
					}
					break;
				case key.hold.use:
					if (key.hold.lock == 0) {
						now.hold();
						key.hold.lock = 1;
					}
					break;
				case key.hold2.use:
					if (key.hold2.lock == 0) {
						now.hold();
						key.hold2.lock = 1;
					}
					break;
				default:
					break;
			}
		},
		up: function (e) {
			switch (e.code) {
				case key.spinleft.use:
					key.spinleft.lock = 0;
					break;
				case key.spinleft2.use:
					key.spinleft2.lock = 0;
					break;
				case key.spinright.use:
					key.spinright.lock = 0;
					break;
				case key.spinright2.use:
					key.spinright2.lock = 0;
					break;
				case key.left.use:
					key.left.lock = 0;
					if (key.left.timeout != null) {
						clearTimeout(key.left.timeout);
					}
					if (key.left.interval != null) {
						clearInterval(key.left.interval);
					}
					break;
				case key.right.use:
					key.right.lock = 0;
					if (key.right.timeout != null) {
						clearTimeout(key.right.timeout);
					}
					if (key.right.interval != null) {
						clearInterval(key.right.interval);
					}
					break;
				case key.soft.use:
					key.soft.lock = 0;
					if (key.soft.timeout != null) {
						clearTimeout(key.soft.timeout);
					}
					if (key.soft.interval != null) {
						clearInterval(key.soft.interval);
					}
					break;
				case key.hard.use:
					key.hard.lock = 0;
					break;
				case key.hold.use:
					key.hold.lock = 0;
					break;
				case key.hold2.use:
					key.hold2.lock = 0;
					break;
				default:
					break;
			}
		}
	},
	keyset: {
		down: function (e) {
			keytmp.obj.use = e.code;
			keytmp.obj.tag.getElementsByTagName('rect')[0].setAttribute('fill', '#444');
			keytmp.obj.tag.getElementsByTagName('text')[1].innerHTML = keytmp.obj.use;
			setCookie(keytmp.ckn, keytmp.obj.use);
			game.change('pause');
		},
		up: function (e) {
		}
	}
};

class mino {
	constructor() {
		this.cnt = 1;
		this.next = [0];
		this.nextcnt = 0;
		this._hold = 0;
		this.holduse = 0;
		this.spinaction = 0;
		this.b2b = 0;
		this.nextload();
	}
	nextload() {
		while (this.nextcnt * 7 - this.cnt < 14) {
			let arr = [1, 2, 3, 4, 5, 6, 7];
			for (let i = 0; i < 7; i++) {
				let j = Math.floor(Math.random() * 7);
				let t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
			for (let i = 0; i < 7; i++) {
				this.next.push(arr[i]);
			}
			this.nextcnt++;
		}
		this.id = this.next[this.cnt++];
		this.rotate = 0;
		this.x = 5;
		this.y = 20;
		for (let i = 0; i < nextlen; i++) {
			this.showmin(nextarr[i], this.next[this.cnt + i]);
		}
	}
	nextreset() {
		for (let i = 0; i < nextlen; i++) {
			this.showmin(nextarr[i], 0);
		}
	}
	show() {
		if (openghost) {
			this.showghost();
		}
		this.showmino();
	}
	clear() {
		this.clearmino();
		if (openghost) {
			this.clearghost();
		}
	}
	test() {
		return this.testmino();
	}
	showmino() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.y + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					let ba = boardarr[y][x];
					ba.id = this.id;
					ba.tag.style.background = loadcolor(color.mino[this.id], proportion.move);
				}
			}
		}
	}
	clearmino() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.y + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					let ba = boardarr[y][x];
					ba.id = 0;
					ba.tag.style.background = 'none';
				}
			}
		}
	}
	testmino() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.y + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					if (x < 0 || x >= w) {
						return 0;
					}
					if (y < 0 || y >= hall) {
						return 0;
					}
					let ba = boardarr[y][x];
					if (ba.set == 1) {
						return 0;
					}
				}
			}
		}
		return 1;
	}
	showghost() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.ofsyghost() + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					let ba = boardarr[y][x];
					ba.id = this.id;
					ba.tag.style.background = loadcolor(color.mino[this.id], proportion.ghost);
				}
			}
		}
	}
	clearghost() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.ofsyghost() + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					let ba = boardarr[y][x];
					ba.id = 0;
					ba.tag.style.background = 'none';
				}
			}
		}
	}
	testghost(yy) {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = yy + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					if (x < 0 || x >= w) {
						return 0;
					}
					if (y < 0 || y >= hall) {
						return 0;
					}
					let ba = boardarr[y][x];
					if (ba.set == 1) {
						return 0;
					}
				}
			}
		}
		return 1;
	}
	ofsyghost() {
		for (let i = 1; i <= hall; i++) {
			if (!this.testghost(this.y - i)) {
				return this.y - i + 1;
			}
		}
		return 0;
	}
	_testspinclear(ofsx, ofsy) {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + ofsx + j - 3;
				let y = this.y + ofsy + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					if (x < 0 || x >= w) {
						return 1;
					}
					if (y < 0 || y >= hall) {
						return 1;
					}
					let ba = boardarr[y][x];
					if (ba.set == 1) {
						return 1;
					}
				}
			}
		}
		return 0;
	}
	testspinclear() {
		return (
			this._testspinclear(-1, 0) &&
			this._testspinclear(1, 0) &&
			this._testspinclear(0, -1) &&
			this._testspinclear(0, 1));
	}
	testgameover() {
		if (this.test()) {
		} else {
			this.y = 21;
			if (this.test()) {
			} else {
				action.over();
			}
		}
	}
	set() {
		let md = minodata[this.id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = this.x + j - 3;
				let y = this.y + i - 3 + md.ofs;
				if (md.mr[this.rotate][i][j] == 1) {
					let ba = boardarr[y][x];
					ba.id = this.id;
					ba.tag.style.background = loadcolor(color.mino[this.id], proportion.set);
					ba.cnt = this.cnt;
					ba.set = 1;
				}
			}
		}
		this.clearline();
		this.nextload();
		this.testgameover();
		this.spinaction = 0;
		this.show();
		this.holduse = 0;
	}
	_spin(r) {
		this.rotate += r;
		if (this.rotate >= 4)
			this.rotate -= 4;
		if (this.rotate < 0)
			this.rotate += 4;
	}
	_movex(x) {
		this.x += x;
	}
	_movey(y) {
		this.y += y;
	}
	spin(r) {
		let md = minodata[this.id];
		let j = this.rotate;
		this.clear();
		this._spin(r);
		let k = this.rotate;
		let s = srs[md.srs][j][k];
		let b = 0;
		for (let i = 0; i < 5; i++) {
			this.x += s[i].x;
			this.y += s[i].y;
			if (this.test()) {
				b = 1;
				break;
			} else {
				this.x -= s[i].x;
				this.y -= s[i].y;
			}
		}
		if (b == 1) {
			if (md.bonus == 1) {
				this.spinaction = this.testspinclear();
			}
		} else {
			this._spin(-r);
		}
		this.show();
		// this.testset();
	}
	movex(x, cb = function () { }) {
		this.clear();
		this._movex(x);
		if (this.test()) {
			this.spinaction = 0;
		} else {
			this._movex(-x);
			cb();
		}
		this.show();
		// this.testset();
	}
	movey(y, cb = function () { }) {
		this.clear();
		this._movey(y);
		if (this.test()) {
			this.spinaction = 0;
		} else {
			this._movey(-y);
			cb();
		}
		this.show();
		// this.testset();
	}
	isfloor() {
		let b = 0;
		this._movey(-1);
		if (this.test()) {
			b = 0;
		} else {
			b = 1;
		}
		this._movey(1);
		return b;
	}
	testset() {
		if (this.isfloor()) {
			this.set();
		}
	}
	harddrop() {
		this.clear();
		do {
			this._movey(-1);
		} while (this.test());
		this._movey(1);
		this.show();
		this.testset();
	}
	showmin(minarr, id) {
		let md = minodata[id];
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 6; j++) {
				let x = j;
				let y = i;
				let ma = minarr[y][x];
				if (md.mr[0][i][j] == 1) {
					ma.id = id;
					ma.tag.style.background = loadcolor(color.mino[id], proportion.move);
				} else {
					ma.id = 0;
					ma.tag.style.background = 'none';
				}
			}
		}
	}
	hold() {
		if (this.holduse == 1)
			return;
		this.holduse = 1;
		this.clear();
		if (this._hold == 0) {
			this._hold = this.id;
			this.showmin(holdarr, this.id);
			this.nextload();
			this.testgameover();
			this.show();
		} else {
			let tmp = this._hold;
			this._hold = this.id;
			this.showmin(holdarr, this.id);
			this.id = tmp;
			this.rotate = 0;
			this.x = 5;
			this.y = 20;
			this.testgameover();
			this.show();
		}
	}
	holdreset() {
		this.showmin(holdarr, 0);
	}
	clearline() {
		let linecnt = 0;
		let lineclear = [];
		let linenew = [];
		for (let i = 0; i < hall; i++) {
			lineclear[i] = 1;
			for (let j = 0; j < w; j++) {
				if (boardarr[i][j].set == 0) {
					lineclear[i] = 0;
					break;
				}
			}
			if (lineclear[i] == 1) {
				linecnt++;
			}

		}
		let linecnt2 = 0;
		for (let i = 0; i < hall; i++) {
			while (typeof lineclear[i + linecnt2] != 'undefined' && lineclear[i + linecnt2] == 1) {
				linecnt2++;
			}
			linenew[i] = i + linecnt2;
		}
		for (let i = 0; i < hall; i++) {
			if (linenew[i] < hall) {
				let k = linenew[i];
				for (let j = 0; j < w; j++) {
					boardarr[i][j].cnt = boardarr[k][j].cnt;
					boardarr[i][j].id = boardarr[k][j].id;
					boardarr[i][j].set = boardarr[k][j].set;
					boardarr[i][j].tag.style.background = boardarr[k][j].tag.style.background;
				}
			} else {
				for (let j = 0; j < w; j++) {
					boardarr[i][j].cnt = 0;
					boardarr[i][j].id = 0;
					boardarr[i][j].set = 0;
					boardarr[i][j].tag.style.background = 'none';
				}
			}
		}
		if (linecnt > 0) {
			let s = '';
			let num = 0;
			let action = '';
			let action2 = 0;
			let b2b = '';
			let b2b2 = 0;
			let ls = linesent[linecnt];
			if (this.spinaction) {
				action = 'spin';
				action2 = this.id;
				s += minodata[this.id] + '-Spin ';
			} else {
				action = 'normal';
				action2 = 0;
			}
			if (this.b2b) {
				if (ls.sent[action].b2b) {
					b2b = 'b2b';
					b2b2 = 1;
					s = 'Back to Back ' + s;
					this.b2b = 1;
				} else {
					b2b = 'normal';
					b2b2 = 0;
					this.b2b = 0;
				}
			} else {
				if (ls.sent[action].b2b) {
					b2b = 'normal';
					b2b2 = 0;
					this.b2b = 1;
				} else {
					b2b = 'normal';
					b2b2 = 0;
					this.b2b = 0;
				}
			}
			num += ls.sent[action][b2b];
			s += ls.name;

			if (combo == 1) {
				s += ' ' + combo + ' Combo';
			} else if (combo > 1) {
				s += ' ' + combo + ' Combos';
			}
			num += combosent[combo];
			sentnum += num;
			settext(sent, sentnum);
			console.log('sent:', num, s);
			setclear(b2b2, action2, linecnt, combo);
			combo++;
		} else {
			combo = 0;
		}
	}
}
window.onload = function () {
	board.style.width = w * sl + 'px';
	board.style.height = h * sl + 'px';
	for (let i = 0; i < hall; i++) {
		boardarr[i] = [];
		for (let j = 0; j < w; j++) {
			let tag = document.createElement('div');
			tag.style.width = sl + 'px';
			tag.style.height = sl + 'px';
			tag.style.left = sl * j + 'px';
			tag.style.top = sl * (h - 1 - i) + 'px';
			tag.style.background = (i + j) % 2 == 1 ? '#fff' : '#eee';
			board.appendChild(tag);

			tag = document.createElement('div');
			tag.style.width = sl + 'px';
			tag.style.height = sl + 'px';
			tag.style.left = sl * j + 'px';
			tag.style.top = sl * (h - 1 - i) + 'px';
			board.appendChild(tag);
			boardarr[i][j] = { cnt: 0, id: 0, set: 0, tag: tag };
		}
	}
	hold.style.width = 4 * slmin + 'px';
	hold.style.height = 4 * slmin + 'px';
	for (let i = 0; i < 6; i++) {
		holdarr[i] = [];
		for (let j = 0; j < 6; j++) {
			let tag = document.createElement('div');
			tag.style.width = slmin + 'px';
			tag.style.height = slmin + 'px';
			tag.style.left = slmin * (j - 1) + 'px';
			tag.style.top = slmin * (4 - 1 - i + 1) + 'px';
			tag.style.background = (i + j) % 2 == 1 ? '#fff' : '#eee';
			hold.appendChild(tag);

			tag = document.createElement('div');
			tag.style.width = slmin + 'px';
			tag.style.height = slmin + 'px';
			tag.style.left = slmin * (j - 1) + 'px';
			tag.style.top = slmin * (4 - 1 - i + 1) + 'px';
			hold.appendChild(tag);
			holdarr[i][j] = { cnt: 0, id: 0, set: 0, tag: tag };
		}
	}
	next.style.width = 4 * slmin + 2 + 'px';
	next.style.height = (4 * slmin + 20) * nextlen - 20 + 2 + 'px';
	for (let k = 0; k < nextlen; k++) {
		nextarr[k] = [];
		let ntag = document.createElement('div');
		ntag.style.width = 4 * slmin + 'px';
		ntag.style.height = 4 * slmin + 'px';
		ntag.style.left = 0 + 'px';
		ntag.style.top = k * (slmin * 4 + 20) + 'px';
		ntag.classList.add("next");
		next.appendChild(ntag);
		for (let i = 0; i < 6; i++) {
			nextarr[k][i] = [];
			for (let j = 0; j < 6; j++) {
				let tag = document.createElement('div');
				tag.style.width = slmin + 'px';
				tag.style.height = slmin + 'px';
				tag.style.left = slmin * (j - 1) + 'px';
				tag.style.top = slmin * (4 - 1 - i + 1) + 'px';
				tag.style.background = (i + j) % 2 == 1 ? '#fff' : '#eee';
				ntag.appendChild(tag);

				tag = document.createElement('div');
				tag.style.width = slmin + 'px';
				tag.style.height = slmin + 'px';
				tag.style.left = slmin * (j - 1) + 'px';
				tag.style.top = slmin * (4 - 1 - i + 1) + 'px';
				ntag.appendChild(tag);
				nextarr[k][i][j] = { cnt: 0, id: 0, set: 0, tag: tag };
			}
		}
	}
	game.change('load');
	settext(sent, sentnum);
	settextxoffset(senttext);

	settextxoffset(logotext);
	settextxoffset(logotext, 1);

	settextxoffset(playtext);
	playtext.onclick = function () {
		action.play();
	};

	settextxoffset(keybttext);
	keybttext.onclick = function () {
		keysetboard.style.zIndex = 1;
		game.change('pause');
	};

	settextxoffset(otherbttext);
	otherbttext.onclick = function () {
		otherboard.style.zIndex = 1;
		game.change('pause');
	};

	settextxoffset(gameover);
	settextxoffset(gameover, 1);

	settextxoffset(overoktext);
	overoktext.onclick = function () {
		action.tomain();
	};

	settextxoffset(keysetoktext);
	keysetoktext.onclick = function () {
		for (let ii in key) {
			key[ii].tag.getElementsByTagName('rect')[0].setAttribute('fill', '#444');
		}
		keysetboard.style.zIndex = -1;
		game.change('load');
	};

	settextxoffset(otheroktext);
	otheroktext.onclick = function () {
		otherboard.style.zIndex = -1;
		game.change('load');
	};

	let i = 0;
	for (let ii in key) {
		let tag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		keyset.appendChild(tag);
		let newy = i * 40 + 10;

		let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		text.setAttribute('y', 27);
		text.setAttribute('fill', '#222');
		text.setAttribute('stroke', '#222');
		text.setAttribute('stroke-width', '1');
		text.innerHTML = key[ii].name;
		tag.appendChild(text);

		let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x', 115);
		rect.setAttribute('y', 8);
		rect.setAttribute('rx', 5);
		rect.setAttribute('ry', 5);
		rect.setAttribute('width', 140);
		rect.setAttribute('height', 25);
		rect.setAttribute('fill', '#444');
		tag.appendChild(rect);

		let use = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		use.setAttribute('x', 125);
		use.setAttribute('y', 27);
		use.setAttribute('fill', '#fff');
		use.setAttribute('stroke', '#fff');
		use.setAttribute('stroke-width', '1');
		let ck = getCookie('key_' + ii);
		if (ck == '') ck = key[ii].use;
		key[ii].use = ck;
		use.innerHTML = key[ii].use;
		tag.appendChild(use);

		let width = keyset.getAttribute('viewBox').split(' ')[2];
		let newx = (width - tag.getBBox().width) / 2;
		tag.setAttribute('transform', 'translate(' + newx + ',' + newy + ')');
		key[ii].tag = tag;

		let ckn = 'key_' + ii;
		let iii = ii;
		tag.onclick = function name(params) {
			for (let ii in key) {
				key[ii].tag.getElementsByTagName('rect')[0].setAttribute('fill', '#444');
			}
			rect.setAttribute('fill', '#066');
			keytmp.ckn = ckn;
			keytmp.obj = key[iii];
			game.change('keyset');
		};
		i++;
	}

	i = 0;
	for (let ii in time) {
		for (let jj in time[ii]) {
			let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text.setAttribute('y', i * 60 + 27);
			text.setAttribute('fill', '#222');
			text.setAttribute('stroke', '#222');
			text.setAttribute('stroke-width', '1');
			text.innerHTML = timename[ii] + ' ' + timename[jj];
			gameset.appendChild(text);
			let width = gameset.getAttribute('viewBox').split(' ')[2];
			let newx = (width - text.getBBox().width) / 2;
			text.setAttribute('x', newx);

			let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rect.setAttribute('y', i * 60 + 38);
			rect.setAttribute('rx', 5);
			rect.setAttribute('ry', 5);
			rect.setAttribute('width', 120);
			rect.setAttribute('height', 25);
			rect.setAttribute('fill', '#444');
			gameset.appendChild(rect);
			newx = (width - rect.getBBox().width) / 2;
			rect.setAttribute('x', newx);

			let value = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			value.setAttribute('y', i * 60 + 58);
			value.setAttribute('fill', '#fff');
			value.setAttribute('stroke', '#fff');
			value.setAttribute('stroke-width', '1');
			gameset.appendChild(value);
			let valuename = timename[ii] + '_' + timename[jj] + '_value';
			let cv = getCookie(valuename);
			if (cv == '' || isNaN(cv)) cv = time[ii][jj];
			time[ii][jj] = cv * 1;
			value.innerHTML = time[ii][jj] + ' ms';
			newx = (width - value.getBBox().width) / 2;
			value.setAttribute('x', newx);
			value.setAttribute('id', valuename);

			let iii = ii;
			let jjj = jj;

			let changevalue = function (num) {
				time[iii][jjj] += num;
				if (time[iii][jjj] < 0) time[iii][jjj] = 0;
				if (time[iii][jjj] > 1000) time[iii][jjj] = 1000;
				value.innerHTML = time[iii][jjj] + ' ms';
				let newx = (width - value.getBBox().width) / 2;
				value.setAttribute('x', newx);
				setCookie(valuename, time[iii][jjj]);
			};
			newx = (width - rect.getBBox().width) / 2;
			let newy = i * 60;
			let subbt = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			subbt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#subbt');
			subbt.setAttribute('transform', 'translate(' + (newx - 60) + ',' + newy + ')');
			gameset.appendChild(subbt);
			subbt.onclick = function () {
				changevalue(-10);
			};

			let decbt = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			decbt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#decbt');
			decbt.setAttribute('transform', 'translate(' + (newx - 30) + ',' + newy + ')');
			gameset.appendChild(decbt);
			decbt.onclick = function () {
				changevalue(-1);
			};

			let incbt = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			incbt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#incbt');
			incbt.setAttribute('transform', 'translate(' + (newx + rect.getBBox().width + 5) + ',' + newy + ')');
			gameset.appendChild(incbt);
			incbt.onclick = function () {
				changevalue(1);
			};

			let addbt = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			addbt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#addbt');
			addbt.setAttribute('transform', 'translate(' + (newx + rect.getBBox().width + 35) + ',' + newy + ')');
			gameset.appendChild(addbt);
			addbt.onclick = function () {
				changevalue(10);
			};

			i++;
		}
	}

	let width = gameset.getAttribute('viewBox').split(' ')[2];
	let newx = (width - openghosttag.getBBox().width) / 2;
	openghosttag.setAttribute('transform', 'translate(' + newx + ',' + 250 + ')');
	let og = getCookie('openghost');
	if (og == '' || isNaN(og)) og = openghost;
	openghost = og * 1;
	openghostcheck.setAttribute('fill-opacity', openghost);
	openghosttag.onclick = function () {
		if (openghost) {
			openghost = 0;
		} else {
			openghost = 1;
		}
		openghostcheck.setAttribute('fill-opacity', openghost);
		setCookie('openghost', openghost);
	};

	newx = (width - spinbonustext.getBBox().width) / 2;
	spinbonustext.setAttribute('x', newx);
	spinbonustext.setAttribute('y', 320);
	for (let i = 0; i < 4; i++) {
		let tag = window['spinbonustag' + i];
		let check = window['spinbonuscheck' + i];
		let bns = bonus[i];
		let ckn = 'spinbonus' + i;
		let newx = (width - tag.getBBox().width) / 2;
		tag.setAttribute('transform', 'translate(' + (newx - 90 + i * 60) + ',' + 330 + ')');
		let sb = getCookie(ckn);
		if (sb == '' || isNaN(sb)) sb = bns.open;
		bns.open = sb * 1;
		for (let j = 0; j < bns.mino.length; j++) {
			minodata[bns.mino[j]].bonus = bns.open;
		}
		check.setAttribute('fill-opacity', bns.open);
		tag.onclick = function () {
			if (bns.open) {
				bns.open = 0;
			} else {
				bns.open = 1;
			}
			for (let j = 0; j < bns.mino.length; j++) {
				minodata[bns.mino[j]].bonus = bns.open;
			}
			check.setAttribute('fill-opacity', bns.open);
			setCookie(ckn, bns.open);
		};
	}
	document.body.style.opacity = 1;
};