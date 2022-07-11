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
		'#000',
		'#0ff',
		'#ff0',
		'#f0f',
		'#00f',
		'#f70',
		'#f00',
		'#0f0',
		'#111',
		'#444',
		'#777'
	],
	sent: [
		'#fff',
		'#0f0',
		'#00f',
		'#ff0',
		'#0ff',
	]
};
var proportion = { move: [0, 0], set: [0.2, 0], ghost: [0, 0.4], text: [0, 0] };
var minodata = [
	{
		name: 'X', ofs: 0, srs: 0, bonus: -1, md: [[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]]
	}, {
		name: 'I', ofs: -1, srs: 4, bonus: 0, md: [[
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0]
		], [
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0]
		]]
	}, {
		name: 'O', ofs: 0, srs: 4, bonus: -1, md: [[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		]]
	}, {
		name: 'T', ofs: 0, srs: 3, bonus: 1, md: [[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0]
		]]
	}, {
		name: 'J', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 1, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0]
		]]
	}, {
		name: 'L', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[1, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0]
		]]
	}, {
		name: 'Z', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0]
		]]
	}, {
		name: 'S', ofs: 0, srs: 3, bonus: 0, md: [[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0]
		], [
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 1, 0]
		], [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0]
		], [
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0]
		]]
	}
];
for (let i = 0; i <= 7; i++) {
	minodata[i].mr = [];
	for (let j = 0; j < 4; j++) {
		minodata[i].mr[j] = []
		for (let k = 0; k < 4; k++) {
			minodata[i].mr[j][k] = minodata[i].md[j][4 - 1 - k];
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
	move: { start: { data: 100 }, interval: { data: 35 } },
	down: { start: { data: 30 }, interval: { data: 10 } }
};
var delayname = {
	move: 'Move',
	down: 'Down',
	start: 'second',
	interval: 'delay'
};
var ghost = { open: 1 };
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
	let min = Math.min(...proportion);
	let max = Math.max(...proportion);
	let d = max - min;
	let c = 1 - max;
	let p = proportion.indexOf(max);
	let outrgb = hexToRgb(orgrgb).map(v => Math.round(v * c + [0, 255][p] * d + 127.5 * min));
	return rgbToHex(...outrgb);
}

Object.defineProperty(Node.prototype, 'opacity', {
	set: function (o) {
		this.setAttribute('opacity', o);
	}, get: function () {
		return this.getAttribute('opacity');
	}
});
Object.defineProperty(Node.prototype, 'color', {
	set: function (color) {
		let use = this.querySelectorAll('use')[1];
		use.setAttribute('fill', color);
		use.setAttribute('stroke', color);
	}
});
Object.defineProperty(Node.prototype, 'str', {
	set: function (str) {
		this.querySelector('text').innerHTML = str;
	}
});

var time = (() => {
	let num = 0,
		data = 2,
		interval = null;
	function str() {
		return paddingLeft(Math.floor(num / 60), 2) + ':' + paddingLeft(num % 60, 2);
	}
	function initial() {
		num = data * 60;
		timenum.str = str();
	}
	function reset() {
		num = data * 60;
		timenum.str = str();
	}
	function start() {
		if (num != 0) {
			interval = setInterval(() => {
				num--;
				timenum.str = str();
				if (num == 0) {
					stop();
					action.timeup();
				}
			}, 1000);
		}
	}
	function stop() {
		if (interval != null)
			clearInterval(interval);
	}
	return {
		initial,
		reset,
		start,
		stop
	};
})();
var sent = (() => {
	let num = 0,
		b2b = 0,
		combo = 0,
		interval = null;
	function initial() {
		sentnum.str = num;
	}
	function reset() {
		num = 0;
		b2b = 0;
		combo = 0;
		sentnum.str = num;
		clear();
	}
	function clear() {
		if (interval != null)
			clearInterval(interval);
		b2bstr.opacity = 0;
		spinstr.opacity = 0;
		linestr.opacity = 0;
		combonum.opacity = 0;
		combostr.opacity = 0;
	}
	function test(id, line, spinaction) {
		if (line > 0) {
			let s = '',
				_num = 0,
				_id = 0,
				_idstr = '',
				_b2b = 0,
				_b2bstr = '',
				ls = sentdata.line[line];

			if (spinaction) {
				_idstr = 'spin';
				_id = id;
				s += minodata[id].name + '-Spin ';
			} else {
				_idstr = 'normal';
				_id = 0;
			}
			if (b2b) {
				if (ls.sent[_idstr].b2b) {
					_b2bstr = 'b2b';
					_b2b = 1;
					s = 'Back to Back ' + s;
					b2b = 1;
				} else {
					_b2bstr = 'normal';
					_b2b = 0;
					b2b = 0;
				}
			} else {
				if (ls.sent[_idstr].b2b) {
					_b2bstr = 'normal';
					_b2b = 0;
					b2b = 1;
				} else {
					_b2bstr = 'normal';
					_b2b = 0;
					b2b = 0;
				}
			}
			_num += ls.sent[_idstr][_b2bstr];
			s += ls.name;

			_num += sentdata.combo[combo];
			s += ' ' + combo + ' Combo';

			num += _num;
			sentnum.str = num;
			// console.log('sent:', _num, s);
			if (interval != null)
				clearInterval(interval);
			if (_b2b) {
				b2bstr.opacity = 1;
			} else {
				b2bstr.opacity = 0;
			}
			if (_id == 0) {
				spinstr.opacity = 0;
				linestr.opacity = 0;
				linestr.setAttribute('y', 400);
				linestr.str = sentdata.line[line].name;
				linestr.color = loadcolor(color.sent[line], proportion.text);
				linestr.opacity = 1;
			} else {
				spinstr.opacity = 0;
				spinstr.str = minodata[_id].name + '-spin';
				spinstr.color = loadcolor(color.mino[_id], proportion.text);
				spinstr.opacity = 1;

				linestr.opacity = 0;
				linestr.setAttribute('y', 440);
				linestr.str = sentdata.line[line].name;
				linestr.color = loadcolor(color.mino[_id], proportion.text);
				linestr.opacity = 1;
			}
			if (combo == 0) {
				combonum.opacity = 0;
				combostr.opacity = 0;
			} else {
				combonum.opacity = 0;
				combonum.str = combo;
				combonum.opacity = 1;
				combostr.opacity = 1;
			}
			interval = setInterval(() => {
				clear();
			}, 3000);
			combo++;
		} else {
			combo = 0;
		}
	}
	return {
		initial,
		reset,
		test,
		clear
	}
})();

var mino = (() => {
	let cnt = 1,
		next = [0],
		nextcnt = 0,
		_hold = 0,
		holduse = 0,
		spinaction = 0,
		id, rotate, x, y;
	function reset() {
		cnt = 1;
		next = [0];
		nextcnt = 0;
		_hold = 0;
		holduse = 0;
		spinaction = 0;
		nextload();
	}
	function nextload() {
		while (nextcnt * 7 - cnt < 14) {
			let arr = [1, 2, 3, 4, 5, 6, 7];
			for (let i = 0; i < 7; i++) {
				let j = Math.floor(Math.random() * 7);
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			for (let i = 0; i < 7; i++) {
				next.push(arr[i]);
			}
			nextcnt++;
		}
		id = next[cnt++];
		rotate = 0;
		x = 5;
		y = 20;
		for (let i = 0; i < nextlen; i++) {
			showmin(nextarr[i], next[cnt + i]);
		}
	}
	function nextreset() {
		for (let i = 0; i < nextlen; i++) {
			showmin(nextarr[i], 0);
		}
	}
	function show() {
		if (ghost.open) {
			showghost();
		}
		showmino();
	}
	function clear() {
		clearmino();
		if (ghost.open) {
			clearghost();
		}
	}
	function test() {
		return testmino();
	}
	function showmino() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = y + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					let ba = boardarr[_y][_x];
					ba.id = id;
					ba.color = loadcolor(color.mino[id], proportion.move);
				}
			}
		}
	}
	function clearmino() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = y + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					let ba = boardarr[_y][_x];
					ba.id = 0;
					ba.color = 'none';
				}
			}
		}
	}
	function testmino() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = y + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					if (_x < 0 || _x >= w) {
						return 0;
					}
					if (_y < 0 || _y >= hall) {
						return 0;
					}
					let ba = boardarr[_y][_x];
					if (ba.set == 1) {
						return 0;
					}
				}
			}
		}
		return 1;
	}
	function showghost() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = ofsyghost() + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					let ba = boardarr[_y][_x];
					ba.id = id;
					ba.color = loadcolor(color.mino[id], proportion.ghost);
				}
			}
		}
	}
	function clearghost() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = ofsyghost() + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					let ba = boardarr[_y][_x];
					ba.id = 0;
					ba.color = 'none';
				}
			}
		}
	}
	function testghost(yy) {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = yy + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					if (_x < 0 || _x >= w) {
						return 0;
					}
					if (_y < 0 || _y >= hall) {
						return 0;
					}
					let ba = boardarr[_y][_x];
					if (ba.set == 1) {
						return 0;
					}
				}
			}
		}
		return 1;
	}
	function ofsyghost() {
		for (let i = 1; i <= hall; i++) {
			if (!testghost(y - i)) {
				return y - i + 1;
			}
		}
		return 0;
	}
	function _testspinclear(ofsx, ofsy) {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + ofsx + j - 2;
				let _y = y + ofsy + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					if (_x < 0 || _x >= w) {
						return 1;
					}
					if (_y < 0 || _y >= hall) {
						return 1;
					}
					let ba = boardarr[_y][_x];
					if (ba.set == 1) {
						return 1;
					}
				}
			}
		}
		return 0;
	}
	function testspinclear() {
		return (
			_testspinclear(-1, 0) &&
			_testspinclear(1, 0) &&
			_testspinclear(0, -1) &&
			_testspinclear(0, 1));
	}
	function testgameover() {
		if (!test()) {
			y = 21;
			if (!test()) {
				action.over();
			}
		}
	}
	function set() {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = x + j - 2;
				let _y = y + i - 2 + md.ofs;
				if (md.mr[rotate][i][j] == 1) {
					let ba = boardarr[_y][_x];
					ba.id = id;
					ba.color = loadcolor(color.mino[id], proportion.set);
					ba.cnt = cnt;
					ba.set = 1;
				}
			}
		}
		clearline();
		nextload();
		testgameover();
		spinaction = 0;
		show();
		holduse = 0;
	}
	function _spin(r) {
		rotate += r;
		if (rotate >= 4)
			rotate -= 4;
		if (rotate < 0)
			rotate += 4;
	}
	function _movex(_x) {
		x += _x;
	}
	function _movey(_y) {
		y += _y;
	}
	function spin(r) {
		let md = minodata[id];
		let j = rotate;
		clear();
		_spin(r);
		let k = rotate;
		let s = srs[md.srs][j][k];
		try {
			for (let i = 0; i < 5; i++) {
				x += s[i].x;
				y += s[i].y;
				if (test()) {
					throw 'ok';
				} else {
					x -= s[i].x;
					y -= s[i].y;
				}
			}
			_spin(-r);
		} catch (e) {
			if (md.bonus == 1) {
				spinaction = testspinclear();
			}
		}
		show();
		// testset();
	}
	function movex(x, cb = () => { }) {
		clear();
		_movex(x);
		if (test()) {
			spinaction = 0;
		} else {
			_movex(-x);
			cb();
		}
		show();
		// testset();
	}
	function movey(y, cb = () => { }) {
		clear();
		_movey(y);
		if (test()) {
			spinaction = 0;
		} else {
			_movey(-y);
			cb();
		}
		show();
		// testset();
	}
	function isfloor() {
		let b = 0;
		_movey(-1);
		if (test()) {
			b = 0;
		} else {
			b = 1;
		}
		_movey(1);
		return b;
	}
	function testset() {
		if (isfloor()) {
			set();
		}
	}
	function harddrop() {
		clear();
		do {
			_movey(-1);
		} while (test());
		_movey(1);
		show();
		testset();
	}
	function showmin(minarr, id) {
		let md = minodata[id];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let _x = j;
				let _y = i;
				let ma = minarr[_y][_x];
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
	function hold() {
		if (holduse == 1)
			return;
		holduse = 1;
		clear();
		if (_hold == 0) {
			_hold = id;
			showmin(holdarr, id);
			nextload();
			testgameover();
			show();
		} else {
			[_hold, id] = [id, _hold];
			showmin(holdarr, _hold);
			rotate = 0;
			x = 5;
			y = 20;
			testgameover();
			show();
		}
	}
	function holdreset() {
		showmin(holdarr, 0);
	}
	function clearline() {
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
		sent.test(id, linecnt, spinaction);
	}
	return {
		reset,
		show,
		holdreset,
		nextreset,
		spin,
		movex,
		movey,
		harddrop,
		hold,
	};
})();

var action = {
	play() {
		mainboard.style.zIndex = -1;
		mino.reset();
		mino.show();
		mino.holdreset();
		time.start();
		game.mod = 'play';
	},
	over() {
		game.mod = 'pause';
		keyreset();
		gameover.opacity = 1;
		timeup.opacity = 0;
		overboard.style.zIndex = 1;
		time.stop();
		game.mod = 'over';
	},
	timeup() {
		game.mod = 'pause';
		keyreset();
		gameover.opacity = 0;
		timeup.opacity = 1;
		overboard.style.zIndex = 1;
		time.stop();
		game.mod = 'over';
	},
	tomain() {
		mino.holdreset();
		mino.nextreset();
		keyreset();
		sent.reset();
		time.reset();
		boardreset();
		overboard.style.zIndex = -1;
		mainboard.style.zIndex = 1;
		game.mod = 'load';
	}
};

var game = {
	set mod(name) {
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
						mino.spin(-1);
						key.spinleft.lock = 1;
					}
					break;
				case key.spinleft2.use:
					if (key.spinleft2.lock == 0) {
						mino.spin(-1);
						key.spinleft2.lock = 1;
					}
					break;
				case key.spinright.use:
					if (key.spinright.lock == 0) {
						mino.spin(1);
						key.spinright.lock = 1;
					}
					break;
				case key.spinright2.use:
					if (key.spinright2.lock == 0) {
						mino.spin(1);
						key.spinright2.lock = 1;
					}
					break;
				case key.spinhalf.use:
					if (key.spinhalf.lock == 0) {
						mino.spin(2);
						key.spinhalf.lock = 1;
					}
					break;
				case key.spinhalf2.use:
					if (key.spinhalf2.lock == 0) {
						mino.spin(2);
						key.spinhalf2.lock = 1;
					}
					break;
				case key.left.use:
					if (key.left.lock == 0) {
						mino.movex(-1);
						key.left.lock = 1;
						key.left.timeout = setTimeout(() => {
							mino.movex(-1, () => {
								if (key.left.timeout != null) {
									clearTimeout(key.left.timeout);
								}
								if (key.left.interval != null) {
									clearInterval(key.left.interval);
								}
							});
							key.left.timeout = null;
							key.left.interval = setInterval(() => {
								mino.movex(-1, () => {
									if (key.left.timeout != null) {
										clearTimeout(key.left.timeout);
									}
									if (key.left.interval != null) {
										clearInterval(key.left.interval);
									}
								});
							}, delay.move.interval.data);
						}, delay.move.start.data);
					}
					break;
				case key.right.use:
					if (key.right.lock == 0) {
						mino.movex(1);
						key.right.lock = 1;
						key.right.timeout = setTimeout(() => {
							mino.movex(1, () => {
								if (key.right.timeout != null) {
									clearTimeout(key.right.timeout);
								}
								if (key.right.interval != null) {
									clearInterval(key.right.interval);
								}
							});
							key.right.timeout = null;
							key.right.interval = setInterval(() => {
								mino.movex(1, () => {
									if (key.right.timeout != null) {
										clearTimeout(key.right.timeout);
									}
									if (key.right.interval != null) {
										clearInterval(key.right.interval);
									}
								});
							}, delay.move.interval.data);
						}, delay.move.start.data);
					}
					break;
				case key.soft.use:
					if (key.soft.lock == 0) {
						mino.movey(-1);
						key.soft.lock = 1;
						key.soft.timeout = setTimeout(() => {
							mino.movey(-1);
							key.soft.timeout = null;
							key.soft.interval = setInterval(() => {
								mino.movey(-1);
							}, delay.down.interval.data);
						}, delay.down.start.data);
					}
					break;
				case key.hard.use:
					if (key.hard.lock == 0) {
						mino.harddrop();
						key.hard.lock = 1;
					}
					break;
				case key.hold.use:
					if (key.hold.lock == 0) {
						mino.hold();
						key.hold.lock = 1;
					}
					break;
				case key.hold2.use:
					if (key.hold2.lock == 0) {
						mino.hold();
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
			keytmp.obj.show = keytmp.obj.use;
			setCookie(keytmp.ckn, keytmp.obj.use);
			game.mod = 'pause';
		},
		up(e) {
		}
	}
};

function createUseAndSetId(id) {
	return text2svg(`<use xlink:href="#${id}"/>`);
}
function createMino(bg, run, x, y, bgcolor) {
	let rect = text2svg(`<rect width="1" height="1" x="${x}" y="${y}" fill="${bgcolor}"/>`);
	bg.append(rect);
	rect = text2svg(`<rect width="1" height="1" x="${x}" y="${y}" fill="none"/>`);
	run.append(rect);
	return {
		cnt: 0, id: 0, set: 0,
		get color() {
			return rect.getAttribute('fill');
		},
		set color(c) {
			rect.setAttribute('fill', c);
		}
	};
}

function createValueSet(obj, name, x, y, low, high, unit, cb = () => { }) {
	let g = text2svg(`<g transform="translate(${x},${y})"></g>`);

	let text = text2svg(`<text x="140" y="22" fill="#222" stroke="#222" stroke-width="1">${name}</text>`);
	g.append(text);

	let vlrt = createUseAndSetId('vlrt');
	g.append(vlrt);

	let value = text2svg(`<text x="140" y="53" fill="#fff" stroke="#fff" stroke-width="1"></text>`);
	g.append(value);
	let valuename = name.replace(/ /g, '_') + '_value';
	let cv = getCookie(valuename);
	if (cv == '' || isNaN(cv)) cv = obj.data;
	obj.data = cv * 1;
	value.innerHTML = obj.data + ' ' + unit;
	cb();

	let changevalue = (num) => {
		obj.data += num;
		if (obj.data < low) obj.data = low;
		if (obj.data > high) obj.data = high;
		value.innerHTML = obj.data + ' ' + unit;
		setCookie(valuename, obj.data);
		cb();
	};

	let subbt = createUseAndSetId('subbt');
	g.append(subbt);
	subbt.onclick = () => {
		changevalue(-10);
	};

	let decbt = createUseAndSetId('decbt');
	g.append(decbt);
	decbt.onclick = () => {
		changevalue(-1);
	};

	let incbt = createUseAndSetId('incbt');
	g.append(incbt);
	incbt.onclick = () => {
		changevalue(1);
	};

	let addbt = createUseAndSetId('addbt');
	g.append(addbt);
	addbt.onclick = () => {
		changevalue(10);
	};

	return g;
}

function createCheckBox(obj, name, cookie, x, y, cb = () => { }) {
	let g = text2svg(`<g class="check" transform="translate(${x},${y})"></g>`);
	let rect = text2svg(`<use xlink:href="#cbrect"/>`);
	g.append(rect);
	let path = text2svg(`<use xlink:href="#cbpath"/>`);
	g.append(path);
	let text = text2svg(`<text x="30" y="22" fill="#222" stroke="#222" stroke-width="1">${name}</text>`);
	g.append(text);
	let cv = getCookie(cookie);
	if (cv == '' || isNaN(cv)) cv = obj.open;
	obj.open = cv * 1;
	path.opacity = obj.open;
	cb();
	g.onclick = () => {
		if (obj.open) {
			obj.open = 0;
		} else {
			obj.open = 1;
		}
		path.opacity = obj.open;
		setCookie(cookie, obj.open);
		cb();
	};
	return g;
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
	for (let i = 0; i < 4; i++) {
		holdarr[i] = [];
		for (let j = 0; j < 4; j++) {
			holdarr[i][j] = createMino(holdbg, holdrun, j, 4 - 2 - i + 1, (i + j) % 2 == 1 ? '#fff' : '#eee');
		}
	}
	next.style.setProperty('--nextlen', nextlen);
	for (let k = 0; k < nextlen; k++) {
		nextarr[k] = [];
		let nextsvg = text2svg(`<svg viewBox="0 0 4 4" class="next" style="--n:${k};"></svg>`);
		next.append(nextsvg);
		let nextbg = text2svg(`<g></g>`);
		let nextrun = text2svg(`<g></g>`);
		nextsvg.append(nextbg, nextrun);
		for (let i = 0; i < 4; i++) {
			nextarr[k][i] = [];
			for (let j = 0; j < 4; j++) {
				nextarr[k][i][j] = createMino(nextbg, nextrun, j, 4 - 2 - i + 1, (i + j) % 2 == 1 ? '#fff' : '#eee');
			}
		}
	}
	game.mod = 'load';

	sent.initial();
	time.initial();

	playbtn.onclick = () => {
		action.play();
	};

	keybtn.onclick = () => {
		keysetboard.style.zIndex = 1;
		game.mod = 'pause';
	};

	otherbtn.onclick = () => {
		otherboard.style.zIndex = 1;
		game.mod = 'pause';
	};

	overok.onclick = () => {
		action.tomain();
	};

	keysetok.onclick = () => {
		for (let ii in key) {
			key[ii].color = '#444';
		}
		keysetboard.style.zIndex = -1;
		game.mod = 'load';
	};

	otherok.onclick = () => {
		otherboard.style.zIndex = -1;
		game.mod = 'load';
	};

	let i = 0;
	for (let ii in key) {
		let nowkey = key[ii];
		let g = text2svg(`<g transform="translate(13,${i * 38 + 10})"></g>`);
		keyset.append(g);

		let text = text2svg(`<text y="22" fill="#222" stroke="#222" stroke-width="1">${nowkey.name}</text>`);
		g.append(text);

		let rect = text2svg(`<rect x="115" y="8" rx="5" ry="5" width="140" height="25" fill="#444"/>`);
		g.append(rect);
		Object.defineProperty(nowkey, 'color', {
			set: function (c) {
				rect.setAttribute('fill', c);
			}
		});

		let ck = getCookie('key_' + ii);
		if (ck == '') ck = nowkey.use;
		nowkey.use = ck;
		let show = text2svg(`<text x="125" y="22" fill="#fff" stroke="#fff" stroke-width="1">${nowkey.use}</text>`);
		g.append(show);
		Object.defineProperty(nowkey, 'show', {
			set: function (k) {
				show.innerHTML = k;
			}
		});

		let ckn = 'key_' + ii;
		let iii = ii;
		g.onclick = () => {
			for (let ii in key) {
				key[ii].color = '#444';
			}
			nowkey.color = '#066';
			keytmp.ckn = ckn;
			keytmp.obj = key[iii];
			game.mod = 'keyset';
		};
		i++;
	}

	i = 0;
	for (let ii in delay) {
		for (let jj in delay[ii]) {
			gameset.append(createValueSet(delay[ii][jj], delayname[ii] + ' ' + delayname[jj], 0, i * 60, 0, 1000, 'ms'));
			i++;
		}
	}
	gameset.append(createValueSet(time, 'Game Time', 0, 360, 0, 60, 'min', () => time.reset()));
	gameset.append(createCheckBox(ghost, 'Open Ghost', 'openghost', 70, 250));
	for (let i = 0; i < 4; i++) {
		gameset.append(createCheckBox(bonus[i], Array.from(bonus[i].mino, m => minodata[m].name).join(''), 'spinbonus' + i, 30 + i * 60, 320, () => {
			for (let j = 0; j < bonus[i].mino.length; j++) {
				minodata[bonus[i].mino[j]].bonus = bonus[i].open;
			}
		}));
	}

	document.body.style.opacity = 1;
};