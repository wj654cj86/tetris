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
			2: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
			3: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }]
		},
		1: {
			0: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
			2: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
			3: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }]
		},
		2: {
			0: [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }],
			1: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
			3: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }]
		},
		3: {
			0: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
			1: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }],
			2: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }]
		}
	},
	4: {
		0: {
			1: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: -2, y: -1 }, { x: 1, y: 2 }],
			2: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			3: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }]
		},
		1: {
			0: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: -2 }, { x: 2, y: 1 }],
			2: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 2 }, { x: 2, y: -1 }],
			3: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
		},
		2: {
			0: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			1: [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
			3: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 1 }, { x: -1, y: -2 }]
		},
		3: {
			0: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: -2 }, { x: -2, y: 1 }],
			1: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
			2: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 2 }, { x: -2, y: -1 }]
		}
	}
}

var sentdata = {
	line: [
		{ name: '      ', sent: { normal: { normal: 0, b2b: 0 }, spin: { normal: 0, b2b: 0 } } },
		{ name: 'Single', sent: { normal: { normal: 0, b2b: 0 }, spin: { normal: 2, b2b: 3 } } },
		{ name: 'Double', sent: { normal: { normal: 1, b2b: 0 }, spin: { normal: 4, b2b: 5 } } },
		{ name: 'Triple', sent: { normal: { normal: 2, b2b: 0 }, spin: { normal: 6, b2b: 8 } } },
		{ name: 'Tetris', sent: { normal: { normal: 4, b2b: 5 }, spin: { normal: 10, b2b: 13 } } }
	],
	combo: [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5]
};

var delay = {
	move: { start: 100, interval: 35 },
	down: { start: 30, interval: 10 }
};
var delayname = {
	move: 'Move',
	down: 'Down',
	start: 'second',
	interval: 'delay'
};
var openghost = 1;

var time = {
	num: 0,
	data: 2,
	interval: null,
	tostr() {
		return paddingLeft(Math.floor(this.num / 60), 2) + ':' + paddingLeft(this.num % 60, 2);
	},
	initial() {
		this.num = this.data * 60;
		settext(timenum, this.tostr());
	},
	reset() {
		this.num = this.data * 60;
		settext(timenum, this.tostr());
	},
	start() {
		if (this.num != 0) {
			this.interval = setInterval(() => {
				time.num--;
				settext(timenum, time.tostr());
				if (time.num == 0) {
					time.stop();
					action.timeup();
				}
			}, 1000);
		}
	},
	stop() {
		if (this.interval != null)
			clearInterval(this.interval);
	}
};
var key = {
	newgame: {
		name: 'Determine', use: 'Enter',
		lock: 0, timeout: null, interval: null
	},
	left: {
		name: 'Move left', use: 'ArrowLeft',
		lock: 0, timeout: null, interval: null
	},
	right: {
		name: 'Move right', use: 'ArrowRight',
		lock: 0, timeout: null, interval: null
	},
	soft: {
		name: 'Soft down', use: 'ArrowDown',
		lock: 0, timeout: null, interval: null
	},
	hard: {
		name: 'Hard down', use: 'Space',
		lock: 0, timeout: null, interval: null
	},
	hold: {
		name: 'Hold', use: 'ShiftLeft',
		lock: 0, timeout: null, interval: null
	},
	hold2: {
		name: 'Hold', use: 'KeyC',
		lock: 0, timeout: null, interval: null
	},
	spinleft: {
		name: 'Spin left', use: 'ControlLeft',
		lock: 0, timeout: null, interval: null
	},
	spinleft2: {
		name: 'Spin left', use: 'KeyZ',
		lock: 0, timeout: null, interval: null
	},
	spinright: {
		name: 'Spin right', use: 'ArrowUp',
		lock: 0, timeout: null, interval: null
	},
	spinright2: {
		name: 'Spin right', use: 'KeyX',
		lock: 0, timeout: null, interval: null
	},
	spinhalf: {
		name: 'Spin half', use: 'AltLeft',
		lock: 0, timeout: null, interval: null
	},
	spinhalf2: {
		name: 'Spin half', use: 'KeyS',
		lock: 0, timeout: null, interval: null
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

function boardreset() {
	for (let i = 0; i < hall; i++) {
		for (let j = 0; j < w; j++) {
			boardarr[i][j].cnt = 0;
			boardarr[i][j].id = 0;
			boardarr[i][j].set = 0;
			boardarr[i][j].color = 'none';
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
function settext(element, str = '') {
	let tag = element.getElementsByTagName('text');
	tag[0].innerHTML = str;
}
function settextcolor(element, color) {
	let tag = element.getElementsByTagName('use');
	tag[1].setAttribute('fill', color);
	tag[1].setAttribute('stroke', color);
}

var sent = {
	num: 0,
	b2b: 0,
	combo: 0,
	interval: null,
	initial() {
		settext(sentnum, this.num);
	},
	reset() {
		this.num = 0;
		this.b2b = 0;
		this.combo = 0;
		settext(sentnum, this.num);
		this.clear();
	},
	test(id, line, spinaction) {
		if (line > 0) {
			let s = '';
			let num = 0;
			let action = '';
			let action2 = 0;
			let b2b = '';
			let b2b2 = 0;
			let ls = sentdata.line[line];

			if (spinaction) {
				action = 'spin';
				action2 = id;
				s += minodata[id].name + '-Spin ';
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

			num += sentdata.combo[this.combo];
			s += ' ' + this.combo + ' Combo';

			this.num += num;
			settext(sentnum, this.num);
			// console.log('sent:', num, s);
			this.set(action2, line, b2b2);
			this.combo++;
		} else {
			this.combo = 0;
		}
	},
	set(id, line, b2b) {
		if (this.interval != null)
			clearInterval(this.interval);
		if (b2b) {
			b2btext.style.opacity = 1;
		} else {
			b2btext.style.opacity = 0;
		}
		if (id == 0) {
			spintext.style.opacity = 0;
			linetext.style.opacity = 0;
			linetext.style.top = '560px';
			settext(linetext, sentdata.line[line].name);
			settextcolor(linetext, loadcolor(color.sent[line], proportion.text));
			linetext.style.opacity = 1;
		} else {
			spintext.style.opacity = 0;
			settext(spintext, minodata[id].name + '-spin');
			settextcolor(spintext, loadcolor(color.mino[id], proportion.text));
			spintext.style.opacity = 1;

			linetext.style.opacity = 0;
			linetext.style.top = '600px';
			settext(linetext, sentdata.line[line].name);
			settextcolor(linetext, loadcolor(color.mino[id], proportion.text));
			linetext.style.opacity = 1;
		}
		if (this.combo == 0) {
			combonumtext.style.opacity = 0;
			combotext.style.opacity = 0;
		} else {
			combonumtext.style.opacity = 0;
			settext(combonumtext, this.combo);
			combonumtext.style.opacity = 1;
			combotext.style.opacity = 1;
		}
		this.interval = setInterval(() => {
			sent.clear();
		}, 3000);
	},
	clear() {
		if (this.interval != null)
			clearInterval(this.interval);
		b2btext.style.opacity = 0;
		spintext.style.opacity = 0;
		linetext.style.opacity = 0;
		combonumtext.style.opacity = 0;
		combotext.style.opacity = 0;
	}
};

var now;

var action = {
	play() {
		mainboard.style.zIndex = -1;
		now = new mino();
		now.show();
		now.holdreset();
		time.start();
		game.change('play');
	},
	over() {
		game.change('pause');
		keyreset();
		gameover.style.opacity = 1;
		timeup.style.opacity = 0;
		overboard.style.zIndex = 1;
		time.stop();
		game.change('over');
	},
	timeup() {
		game.change('pause');
		keyreset();
		gameover.style.opacity = 0;
		timeup.style.opacity = 1;
		overboard.style.zIndex = 1;
		time.stop();
		game.change('over');
	},
	tomain() {
		now.holdreset();
		now.nextreset();
		keyreset();
		sent.reset();
		time.reset();
		boardreset();
		overboard.style.zIndex = -1;
		mainboard.style.zIndex = 1;
		game.change('load');
	}
};

var game = {
	change(name) {
		window.onkeydown = (e) => {
			// console.log(e.code);
			game[name].down(e);
			return false;
		};
		window.onkeyup = (e) => {
			// console.log(e.code);
			game[name].up(e);
			return false;
		};
	},
	pause: {
		down(e) {
		},
		up(e) {
		}
	},
	load: {
		down(e) {
			switch (e.code) {
				case key.newgame.use:
					action.play();
					break;
				default:
					break;
			}
		},
		up(e) {
		}
	},
	over: {
		down(e) {
			switch (e.code) {
				case key.newgame.use:
					action.tomain();
					break;
				default:
					break;
			}
		},
		up(e) {
		}
	},
	play: {
		down(e) {
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
				case key.spinhalf.use:
					if (key.spinhalf.lock == 0) {
						now.spin(2);
						key.spinhalf.lock = 1;
					}
					break;
				case key.spinhalf2.use:
					if (key.spinhalf2.lock == 0) {
						now.spin(2);
						key.spinhalf2.lock = 1;
					}
					break;
				case key.left.use:
					if (key.left.lock == 0) {
						now.movex(-1);
						key.left.lock = 1;
						key.left.timeout = setTimeout(() => {
							now.movex(-1, () => {
								if (key.left.timeout != null) {
									clearTimeout(key.left.timeout);
								}
								if (key.left.interval != null) {
									clearInterval(key.left.interval);
								}
							});
							key.left.timeout = null;
							key.left.interval = setInterval(() => {
								now.movex(-1, () => {
									if (key.left.timeout != null) {
										clearTimeout(key.left.timeout);
									}
									if (key.left.interval != null) {
										clearInterval(key.left.interval);
									}
								});
							}, delay.move.interval);
						}, delay.move.start);
					}
					break;
				case key.right.use:
					if (key.right.lock == 0) {
						now.movex(1);
						key.right.lock = 1;
						key.right.timeout = setTimeout(() => {
							now.movex(1, () => {
								if (key.right.timeout != null) {
									clearTimeout(key.right.timeout);
								}
								if (key.right.interval != null) {
									clearInterval(key.right.interval);
								}
							});
							key.right.timeout = null;
							key.right.interval = setInterval(() => {
								now.movex(1, () => {
									if (key.right.timeout != null) {
										clearTimeout(key.right.timeout);
									}
									if (key.right.interval != null) {
										clearInterval(key.right.interval);
									}
								});
							}, delay.move.interval);
						}, delay.move.start);
					}
					break;
				case key.soft.use:
					if (key.soft.lock == 0) {
						now.movey(-1);
						key.soft.lock = 1;
						key.soft.timeout = setTimeout(() => {
							now.movey(-1);
							key.soft.timeout = null;
							key.soft.interval = setInterval(() => {
								now.movey(-1);
							}, delay.down.interval);
						}, delay.down.start);
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
		up(e) {
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
				case key.spinhalf.use:
					key.spinhalf.lock = 0;
					break;
				case key.spinhalf2.use:
					key.spinhalf2.lock = 0;
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
		down(e) {
			keytmp.obj.use = e.code;
			keytmp.obj.color = '#444';
			keytmp.obj.use2 = keytmp.obj.use;
			setCookie(keytmp.ckn, keytmp.obj.use);
			game.change('pause');
		},
		up(e) {
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
					ba.color = loadcolor(color.mino[this.id], proportion.move);
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
					ba.color = 'none';
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
					ba.color = loadcolor(color.mino[this.id], proportion.ghost);
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
					ba.color = 'none';
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
					ba.color = loadcolor(color.mino[this.id], proportion.set);
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
	movex(x, cb = () => { }) {
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
	movey(y, cb = () => { }) {
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
					ma.color = loadcolor(color.mino[id], proportion.move);
				} else {
					ma.id = 0;
					ma.color = 'none';
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
					boardarr[i][j].color = boardarr[k][j].color;
				}
			} else {
				for (let j = 0; j < w; j++) {
					boardarr[i][j].cnt = 0;
					boardarr[i][j].id = 0;
					boardarr[i][j].set = 0;
					boardarr[i][j].color = 'none';
				}
			}
		}
		sent.test(this.id, linecnt, this.spinaction);
	}
}

function createUseAndSetId(id) {
	let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id);
	return use;
}
function createMino(bg, run, x, y, bgcolor) {
	let use = createUseAndSetId('basemino');
	use.setAttribute('x', x);
	use.setAttribute('y', y);
	use.setAttribute('fill', bgcolor);
	bg.append(use);

	use = createUseAndSetId('basemino');
	use.setAttribute('x', x);
	use.setAttribute('y', y);
	use.setAttribute('fill', 'none');
	run.append(use);
	return {
		cnt: 0, id: 0, set: 0,
		get color() {
			return use.getAttribute('fill');
		},
		set color(c) {
			use.setAttribute('fill', c);
		}
	};
}

window.onload = () => {
	document.body.style.setProperty('--w', w);
	document.body.style.setProperty('--h', h);
	document.body.style.setProperty('--sl', sl + 'px');
	board.setAttribute('viewBox', [0, 0, w, h].join(' '));
	for (let i = 0; i < hall; i++) {
		boardarr[i] = [];
		for (let j = 0; j < w; j++) {
			boardarr[i][j] = createMino(boardbg, boardrun, j, h - 1 - i, (i + j) % 2 == 1 ? '#fff' : '#eee');
		}
	}
	document.body.style.setProperty('--slmin', slmin + 'px');
	for (let i = 0; i < 6; i++) {
		holdarr[i] = [];
		for (let j = 0; j < 6; j++) {
			holdarr[i][j] = createMino(holdbg, holdrun, j - 1, 4 - 1 - i + 1, (i + j) % 2 == 1 ? '#fff' : '#eee');
		}
	}
	next.style.width = 4 * slmin + 2 + 'px';
	next.style.height = (4 * slmin + 20) * nextlen - 20 + 2 + 'px';
	for (let k = 0; k < nextlen; k++) {
		nextarr[k] = [];
		let nextsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		nextsvg.setAttribute('viewBox', [0, 0, 4, 4].join(' '));
		nextsvg.style.setProperty('--n', k);
		nextsvg.classList.add("next");
		next.append(nextsvg);
		let nextbg = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		let nextrun = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		nextsvg.append(nextbg, nextrun);
		for (let i = 0; i < 6; i++) {
			nextarr[k][i] = [];
			for (let j = 0; j < 6; j++) {
				nextarr[k][i][j] = createMino(nextbg, nextrun, j - 1, 4 - 1 - i + 1, (i + j) % 2 == 1 ? '#fff' : '#eee');
			}
		}
	}
	game.change('load');

	sent.initial();
	time.initial();

	playtext.onclick = () => {
		action.play();
	};

	keybttext.onclick = () => {
		keysetboard.style.zIndex = 1;
		game.change('pause');
	};

	otherbttext.onclick = () => {
		otherboard.style.zIndex = 1;
		game.change('pause');
	};

	overoktext.onclick = () => {
		action.tomain();
	};

	keysetoktext.onclick = () => {
		for (let ii in key) {
			key[ii].color = '#444';
		}
		keysetboard.style.zIndex = -1;
		game.change('load');
	};

	otheroktext.onclick = () => {
		otherboard.style.zIndex = -1;
		game.change('load');
	};

	let i = 0;
	for (let ii in key) {
		let nowkey = key[ii];
		let tag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		tag.setAttribute('transform', 'translate(' + 13 + ',' + (i * 38 + 10) + ')');
		keyset.append(tag);

		let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		text.setAttribute('y', 22);
		text.setAttribute('fill', '#222');
		text.setAttribute('stroke', '#222');
		text.setAttribute('stroke-width', '1');
		text.innerHTML = nowkey.name;
		tag.append(text);

		let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x', 115);
		rect.setAttribute('y', 8);
		rect.setAttribute('rx', 5);
		rect.setAttribute('ry', 5);
		rect.setAttribute('width', 140);
		rect.setAttribute('height', 25);
		rect.setAttribute('fill', '#444');
		tag.append(rect);
		Object.defineProperty(nowkey, 'color', {
			set: function (c) {
				rect.setAttribute('fill', c);
			}
		});

		let use = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		use.setAttribute('x', 125);
		use.setAttribute('y', 22);
		use.setAttribute('fill', '#fff');
		use.setAttribute('stroke', '#fff');
		use.setAttribute('stroke-width', '1');
		let ck = getCookie('key_' + ii);
		if (ck == '') ck = nowkey.use;
		nowkey.use = ck;
		use.innerHTML = nowkey.use;
		tag.append(use);
		Object.defineProperty(nowkey, 'use2', {
			set: function (k) {
				use.innerHTML = k;
			}
		});

		let ckn = 'key_' + ii;
		let iii = ii;
		tag.onclick = () => {
			for (let ii in key) {
				key[ii].color = '#444';
			}
			nowkey.color = '#066';
			keytmp.ckn = ckn;
			keytmp.obj = key[iii];
			game.change('keyset');
		};
		i++;
	}

	i = 0;
	for (let ii in delay) {
		for (let jj in delay[ii]) {
			let tag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			tag.setAttribute('transform', 'translate(' + 0 + ',' + i * 60 + ')');
			gameset.append(tag);

			let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text.setAttribute('x', 140);
			text.setAttribute('y', 22);
			text.setAttribute('fill', '#222');
			text.setAttribute('stroke', '#222');
			text.setAttribute('stroke-width', '1');
			text.innerHTML = delayname[ii] + ' ' + delayname[jj];
			tag.append(text);

			let vlrt = createUseAndSetId('vlrt');
			tag.append(vlrt);

			let value = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			value.setAttribute('x', 140);
			value.setAttribute('y', 53);
			value.setAttribute('fill', '#fff');
			value.setAttribute('stroke', '#fff');
			value.setAttribute('stroke-width', '1');
			tag.append(value);
			let valuename = delayname[ii] + '_' + delayname[jj] + '_value';
			let cv = getCookie(valuename);
			if (cv == '' || isNaN(cv)) cv = delay[ii][jj];
			delay[ii][jj] = cv * 1;
			value.innerHTML = delay[ii][jj] + ' ms';
			value.setAttribute('id', valuename);

			let iii = ii;
			let jjj = jj;

			let changevalue = (num) => {
				delay[iii][jjj] += num;
				if (delay[iii][jjj] < 0) delay[iii][jjj] = 0;
				if (delay[iii][jjj] > 1000) delay[iii][jjj] = 1000;
				value.innerHTML = delay[iii][jjj] + ' ms';
				setCookie(valuename, delay[iii][jjj]);
			};

			let subbt = createUseAndSetId('subbt');
			tag.append(subbt);
			subbt.onclick = () => {
				changevalue(-10);
			};

			let decbt = createUseAndSetId('decbt');
			tag.append(decbt);
			decbt.onclick = () => {
				changevalue(-1);
			};

			let incbt = createUseAndSetId('incbt');
			tag.append(incbt);
			incbt.onclick = () => {
				changevalue(1);
			};

			let addbt = createUseAndSetId('addbt');
			tag.append(addbt);
			addbt.onclick = () => {
				changevalue(10);
			};

			i++;
		}
	}

	openghosttag.setAttribute('transform', 'translate(70,' + 250 + ')');
	let og = getCookie('openghost');
	if (og == '' || isNaN(og)) og = openghost;
	openghost = og * 1;
	openghostcheck.setAttribute('fill-opacity', openghost);
	openghosttag.onclick = () => {
		if (openghost) {
			openghost = 0;
		} else {
			openghost = 1;
		}
		openghostcheck.setAttribute('fill-opacity', openghost);
		setCookie('openghost', openghost);
	};

	spinbonustext.setAttribute('x', 140);
	spinbonustext.setAttribute('y', 310);
	for (let i = 0; i < 4; i++) {
		let tag = window['spinbonustag' + i];
		let check = window['spinbonuscheck' + i];
		let bns = bonus[i];
		let ckn = 'spinbonus' + i;
		tag.setAttribute('transform', 'translate(' + (30 + i * 60) + ',' + 320 + ')');
		let sb = getCookie(ckn);
		if (sb == '' || isNaN(sb)) sb = bns.open;
		bns.open = sb * 1;
		for (let j = 0; j < bns.mino.length; j++) {
			minodata[bns.mino[j]].bonus = bns.open;
		}
		check.setAttribute('fill-opacity', bns.open);
		tag.onclick = () => {
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

	let tag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	tag.setAttribute('transform', 'translate(' + 0 + ',' + 360 + ')');
	gameset.append(tag);

	let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', 140);
	text.setAttribute('y', 22);
	text.setAttribute('fill', '#222');
	text.setAttribute('stroke', '#222');
	text.setAttribute('stroke-width', '1');
	text.innerHTML = 'Game Time';
	tag.append(text);

	let vlrt = createUseAndSetId('vlrt');
	tag.append(vlrt);

	let value = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	value.setAttribute('x', 140);
	value.setAttribute('y', 53);
	value.setAttribute('fill', '#fff');
	value.setAttribute('stroke', '#fff');
	value.setAttribute('stroke-width', '1');
	tag.append(value);
	let valuename = 'Game_Time_value';
	let cv = getCookie(valuename);
	if (cv == '' || isNaN(cv)) cv = time.data;
	time.data = cv * 1;
	value.innerHTML = time.data + ' min';
	time.reset();
	value.setAttribute('id', valuename);

	let changevalue = (num) => {
		time.data += num;
		if (time.data < 0) time.data = 0;
		if (time.data > 60) time.data = 60;
		value.innerHTML = time.data + ' min';
		time.reset();
		setCookie(valuename, time.data);
	};

	let subbt = createUseAndSetId('subbt');
	tag.append(subbt);
	subbt.onclick = () => {
		changevalue(-10);
	};

	let decbt = createUseAndSetId('decbt');
	tag.append(decbt);
	decbt.onclick = () => {
		changevalue(-1);
	};

	let incbt = createUseAndSetId('incbt');
	tag.append(incbt);
	incbt.onclick = () => {
		changevalue(1);
	};

	let addbt = createUseAndSetId('addbt');
	tag.append(addbt);
	addbt.onclick = () => {
		changevalue(10);
	};

	document.body.style.opacity = 1;
};