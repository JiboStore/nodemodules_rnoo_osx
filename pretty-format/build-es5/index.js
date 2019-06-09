(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

	var conversions = createCommonjsModule(function (module) {
		/* MIT license */

		// NOTE: conversions should only return primitive values (i.e. arrays, or
		//       values that give correct `typeof` results).
		//       do not use box values types (i.e. Number(), String(), etc.)

		var reverseKeywords = {};
		for (var key in colorName) {
			if (colorName.hasOwnProperty(key)) {
				reverseKeywords[colorName[key]] = key;
			}
		}

		var convert = module.exports = {
			rgb: { channels: 3, labels: 'rgb' },
			hsl: { channels: 3, labels: 'hsl' },
			hsv: { channels: 3, labels: 'hsv' },
			hwb: { channels: 3, labels: 'hwb' },
			cmyk: { channels: 4, labels: 'cmyk' },
			xyz: { channels: 3, labels: 'xyz' },
			lab: { channels: 3, labels: 'lab' },
			lch: { channels: 3, labels: 'lch' },
			hex: { channels: 1, labels: ['hex'] },
			keyword: { channels: 1, labels: ['keyword'] },
			ansi16: { channels: 1, labels: ['ansi16'] },
			ansi256: { channels: 1, labels: ['ansi256'] },
			hcg: { channels: 3, labels: ['h', 'c', 'g'] },
			apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
			gray: { channels: 1, labels: ['gray'] }
		};

		// hide .channels and .labels properties
		for (var model in convert) {
			if (convert.hasOwnProperty(model)) {
				if (!('channels' in convert[model])) {
					throw new Error('missing channels property: ' + model);
				}

				if (!('labels' in convert[model])) {
					throw new Error('missing channel labels property: ' + model);
				}

				if (convert[model].labels.length !== convert[model].channels) {
					throw new Error('channel and label counts mismatch: ' + model);
				}

				var channels = convert[model].channels;
				var labels = convert[model].labels;
				delete convert[model].channels;
				delete convert[model].labels;
				Object.defineProperty(convert[model], 'channels', { value: channels });
				Object.defineProperty(convert[model], 'labels', { value: labels });
			}
		}

		convert.rgb.hsl = function (rgb) {
			var r = rgb[0] / 255;
			var g = rgb[1] / 255;
			var b = rgb[2] / 255;
			var min = Math.min(r, g, b);
			var max = Math.max(r, g, b);
			var delta = max - min;
			var h;
			var s;
			var l;

			if (max === min) {
				h = 0;
			} else if (r === max) {
				h = (g - b) / delta;
			} else if (g === max) {
				h = 2 + (b - r) / delta;
			} else if (b === max) {
				h = 4 + (r - g) / delta;
			}

			h = Math.min(h * 60, 360);

			if (h < 0) {
				h += 360;
			}

			l = (min + max) / 2;

			if (max === min) {
				s = 0;
			} else if (l <= 0.5) {
				s = delta / (max + min);
			} else {
				s = delta / (2 - max - min);
			}

			return [h, s * 100, l * 100];
		};

		convert.rgb.hsv = function (rgb) {
			var rdif;
			var gdif;
			var bdif;
			var h;
			var s;

			var r = rgb[0] / 255;
			var g = rgb[1] / 255;
			var b = rgb[2] / 255;
			var v = Math.max(r, g, b);
			var diff = v - Math.min(r, g, b);
			var diffc = function diffc(c) {
				return (v - c) / 6 / diff + 1 / 2;
			};

			if (diff === 0) {
				h = s = 0;
			} else {
				s = diff / v;
				rdif = diffc(r);
				gdif = diffc(g);
				bdif = diffc(b);

				if (r === v) {
					h = bdif - gdif;
				} else if (g === v) {
					h = 1 / 3 + rdif - bdif;
				} else if (b === v) {
					h = 2 / 3 + gdif - rdif;
				}
				if (h < 0) {
					h += 1;
				} else if (h > 1) {
					h -= 1;
				}
			}

			return [h * 360, s * 100, v * 100];
		};

		convert.rgb.hwb = function (rgb) {
			var r = rgb[0];
			var g = rgb[1];
			var b = rgb[2];
			var h = convert.rgb.hsl(rgb)[0];
			var w = 1 / 255 * Math.min(r, Math.min(g, b));

			b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

			return [h, w * 100, b * 100];
		};

		convert.rgb.cmyk = function (rgb) {
			var r = rgb[0] / 255;
			var g = rgb[1] / 255;
			var b = rgb[2] / 255;
			var c;
			var m;
			var y;
			var k;

			k = Math.min(1 - r, 1 - g, 1 - b);
			c = (1 - r - k) / (1 - k) || 0;
			m = (1 - g - k) / (1 - k) || 0;
			y = (1 - b - k) / (1 - k) || 0;

			return [c * 100, m * 100, y * 100, k * 100];
		};

		/**
	  * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	  * */
		function comparativeDistance(x, y) {
			return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
		}

		convert.rgb.keyword = function (rgb) {
			var reversed = reverseKeywords[rgb];
			if (reversed) {
				return reversed;
			}

			var currentClosestDistance = Infinity;
			var currentClosestKeyword;

			for (var keyword in colorName) {
				if (colorName.hasOwnProperty(keyword)) {
					var value = colorName[keyword];

					// Compute comparative distance
					var distance = comparativeDistance(rgb, value);

					// Check if its less, if so set as closest
					if (distance < currentClosestDistance) {
						currentClosestDistance = distance;
						currentClosestKeyword = keyword;
					}
				}
			}

			return currentClosestKeyword;
		};

		convert.keyword.rgb = function (keyword) {
			return colorName[keyword];
		};

		convert.rgb.xyz = function (rgb) {
			var r = rgb[0] / 255;
			var g = rgb[1] / 255;
			var b = rgb[2] / 255;

			// assume sRGB
			r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
			g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
			b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

			var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
			var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
			var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

			return [x * 100, y * 100, z * 100];
		};

		convert.rgb.lab = function (rgb) {
			var xyz = convert.rgb.xyz(rgb);
			var x = xyz[0];
			var y = xyz[1];
			var z = xyz[2];
			var l;
			var a;
			var b;

			x /= 95.047;
			y /= 100;
			z /= 108.883;

			x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
			y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
			z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

			l = 116 * y - 16;
			a = 500 * (x - y);
			b = 200 * (y - z);

			return [l, a, b];
		};

		convert.hsl.rgb = function (hsl) {
			var h = hsl[0] / 360;
			var s = hsl[1] / 100;
			var l = hsl[2] / 100;
			var t1;
			var t2;
			var t3;
			var rgb;
			var val;

			if (s === 0) {
				val = l * 255;
				return [val, val, val];
			}

			if (l < 0.5) {
				t2 = l * (1 + s);
			} else {
				t2 = l + s - l * s;
			}

			t1 = 2 * l - t2;

			rgb = [0, 0, 0];
			for (var i = 0; i < 3; i++) {
				t3 = h + 1 / 3 * -(i - 1);
				if (t3 < 0) {
					t3++;
				}
				if (t3 > 1) {
					t3--;
				}

				if (6 * t3 < 1) {
					val = t1 + (t2 - t1) * 6 * t3;
				} else if (2 * t3 < 1) {
					val = t2;
				} else if (3 * t3 < 2) {
					val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
				} else {
					val = t1;
				}

				rgb[i] = val * 255;
			}

			return rgb;
		};

		convert.hsl.hsv = function (hsl) {
			var h = hsl[0];
			var s = hsl[1] / 100;
			var l = hsl[2] / 100;
			var smin = s;
			var lmin = Math.max(l, 0.01);
			var sv;
			var v;

			l *= 2;
			s *= l <= 1 ? l : 2 - l;
			smin *= lmin <= 1 ? lmin : 2 - lmin;
			v = (l + s) / 2;
			sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

			return [h, sv * 100, v * 100];
		};

		convert.hsv.rgb = function (hsv) {
			var h = hsv[0] / 60;
			var s = hsv[1] / 100;
			var v = hsv[2] / 100;
			var hi = Math.floor(h) % 6;

			var f = h - Math.floor(h);
			var p = 255 * v * (1 - s);
			var q = 255 * v * (1 - s * f);
			var t = 255 * v * (1 - s * (1 - f));
			v *= 255;

			switch (hi) {
				case 0:
					return [v, t, p];
				case 1:
					return [q, v, p];
				case 2:
					return [p, v, t];
				case 3:
					return [p, q, v];
				case 4:
					return [t, p, v];
				case 5:
					return [v, p, q];
			}
		};

		convert.hsv.hsl = function (hsv) {
			var h = hsv[0];
			var s = hsv[1] / 100;
			var v = hsv[2] / 100;
			var vmin = Math.max(v, 0.01);
			var lmin;
			var sl;
			var l;

			l = (2 - s) * v;
			lmin = (2 - s) * vmin;
			sl = s * vmin;
			sl /= lmin <= 1 ? lmin : 2 - lmin;
			sl = sl || 0;
			l /= 2;

			return [h, sl * 100, l * 100];
		};

		// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
		convert.hwb.rgb = function (hwb) {
			var h = hwb[0] / 360;
			var wh = hwb[1] / 100;
			var bl = hwb[2] / 100;
			var ratio = wh + bl;
			var i;
			var v;
			var f;
			var n;

			// wh + bl cant be > 1
			if (ratio > 1) {
				wh /= ratio;
				bl /= ratio;
			}

			i = Math.floor(6 * h);
			v = 1 - bl;
			f = 6 * h - i;

			if ((i & 0x01) !== 0) {
				f = 1 - f;
			}

			n = wh + f * (v - wh); // linear interpolation

			var r;
			var g;
			var b;
			switch (i) {
				default:
				case 6:
				case 0:
					r = v;g = n;b = wh;break;
				case 1:
					r = n;g = v;b = wh;break;
				case 2:
					r = wh;g = v;b = n;break;
				case 3:
					r = wh;g = n;b = v;break;
				case 4:
					r = n;g = wh;b = v;break;
				case 5:
					r = v;g = wh;b = n;break;
			}

			return [r * 255, g * 255, b * 255];
		};

		convert.cmyk.rgb = function (cmyk) {
			var c = cmyk[0] / 100;
			var m = cmyk[1] / 100;
			var y = cmyk[2] / 100;
			var k = cmyk[3] / 100;
			var r;
			var g;
			var b;

			r = 1 - Math.min(1, c * (1 - k) + k);
			g = 1 - Math.min(1, m * (1 - k) + k);
			b = 1 - Math.min(1, y * (1 - k) + k);

			return [r * 255, g * 255, b * 255];
		};

		convert.xyz.rgb = function (xyz) {
			var x = xyz[0] / 100;
			var y = xyz[1] / 100;
			var z = xyz[2] / 100;
			var r;
			var g;
			var b;

			r = x * 3.2406 + y * -1.5372 + z * -0.4986;
			g = x * -0.9689 + y * 1.8758 + z * 0.0415;
			b = x * 0.0557 + y * -0.2040 + z * 1.0570;

			// assume sRGB
			r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

			g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

			b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

			r = Math.min(Math.max(0, r), 1);
			g = Math.min(Math.max(0, g), 1);
			b = Math.min(Math.max(0, b), 1);

			return [r * 255, g * 255, b * 255];
		};

		convert.xyz.lab = function (xyz) {
			var x = xyz[0];
			var y = xyz[1];
			var z = xyz[2];
			var l;
			var a;
			var b;

			x /= 95.047;
			y /= 100;
			z /= 108.883;

			x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
			y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
			z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

			l = 116 * y - 16;
			a = 500 * (x - y);
			b = 200 * (y - z);

			return [l, a, b];
		};

		convert.lab.xyz = function (lab) {
			var l = lab[0];
			var a = lab[1];
			var b = lab[2];
			var x;
			var y;
			var z;

			y = (l + 16) / 116;
			x = a / 500 + y;
			z = y - b / 200;

			var y2 = Math.pow(y, 3);
			var x2 = Math.pow(x, 3);
			var z2 = Math.pow(z, 3);
			y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
			x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
			z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

			x *= 95.047;
			y *= 100;
			z *= 108.883;

			return [x, y, z];
		};

		convert.lab.lch = function (lab) {
			var l = lab[0];
			var a = lab[1];
			var b = lab[2];
			var hr;
			var h;
			var c;

			hr = Math.atan2(b, a);
			h = hr * 360 / 2 / Math.PI;

			if (h < 0) {
				h += 360;
			}

			c = Math.sqrt(a * a + b * b);

			return [l, c, h];
		};

		convert.lch.lab = function (lch) {
			var l = lch[0];
			var c = lch[1];
			var h = lch[2];
			var a;
			var b;
			var hr;

			hr = h / 360 * 2 * Math.PI;
			a = c * Math.cos(hr);
			b = c * Math.sin(hr);

			return [l, a, b];
		};

		convert.rgb.ansi16 = function (args) {
			var r = args[0];
			var g = args[1];
			var b = args[2];
			var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

			value = Math.round(value / 50);

			if (value === 0) {
				return 30;
			}

			var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

			if (value === 2) {
				ansi += 60;
			}

			return ansi;
		};

		convert.hsv.ansi16 = function (args) {
			// optimization here; we already know the value and don't need to get
			// it converted for us.
			return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
		};

		convert.rgb.ansi256 = function (args) {
			var r = args[0];
			var g = args[1];
			var b = args[2];

			// we use the extended greyscale palette here, with the exception of
			// black and white. normal palette only has 4 greyscale shades.
			if (r === g && g === b) {
				if (r < 8) {
					return 16;
				}

				if (r > 248) {
					return 231;
				}

				return Math.round((r - 8) / 247 * 24) + 232;
			}

			var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

			return ansi;
		};

		convert.ansi16.rgb = function (args) {
			var color = args % 10;

			// handle greyscale
			if (color === 0 || color === 7) {
				if (args > 50) {
					color += 3.5;
				}

				color = color / 10.5 * 255;

				return [color, color, color];
			}

			var mult = (~~(args > 50) + 1) * 0.5;
			var r = (color & 1) * mult * 255;
			var g = (color >> 1 & 1) * mult * 255;
			var b = (color >> 2 & 1) * mult * 255;

			return [r, g, b];
		};

		convert.ansi256.rgb = function (args) {
			// handle greyscale
			if (args >= 232) {
				var c = (args - 232) * 10 + 8;
				return [c, c, c];
			}

			args -= 16;

			var rem;
			var r = Math.floor(args / 36) / 5 * 255;
			var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
			var b = rem % 6 / 5 * 255;

			return [r, g, b];
		};

		convert.rgb.hex = function (args) {
			var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

			var string = integer.toString(16).toUpperCase();
			return '000000'.substring(string.length) + string;
		};

		convert.hex.rgb = function (args) {
			var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
			if (!match) {
				return [0, 0, 0];
			}

			var colorString = match[0];

			if (match[0].length === 3) {
				colorString = colorString.split('').map(function (char) {
					return char + char;
				}).join('');
			}

			var integer = parseInt(colorString, 16);
			var r = integer >> 16 & 0xFF;
			var g = integer >> 8 & 0xFF;
			var b = integer & 0xFF;

			return [r, g, b];
		};

		convert.rgb.hcg = function (rgb) {
			var r = rgb[0] / 255;
			var g = rgb[1] / 255;
			var b = rgb[2] / 255;
			var max = Math.max(Math.max(r, g), b);
			var min = Math.min(Math.min(r, g), b);
			var chroma = max - min;
			var grayscale;
			var hue;

			if (chroma < 1) {
				grayscale = min / (1 - chroma);
			} else {
				grayscale = 0;
			}

			if (chroma <= 0) {
				hue = 0;
			} else if (max === r) {
				hue = (g - b) / chroma % 6;
			} else if (max === g) {
				hue = 2 + (b - r) / chroma;
			} else {
				hue = 4 + (r - g) / chroma + 4;
			}

			hue /= 6;
			hue %= 1;

			return [hue * 360, chroma * 100, grayscale * 100];
		};

		convert.hsl.hcg = function (hsl) {
			var s = hsl[1] / 100;
			var l = hsl[2] / 100;
			var c = 1;
			var f = 0;

			if (l < 0.5) {
				c = 2.0 * s * l;
			} else {
				c = 2.0 * s * (1.0 - l);
			}

			if (c < 1.0) {
				f = (l - 0.5 * c) / (1.0 - c);
			}

			return [hsl[0], c * 100, f * 100];
		};

		convert.hsv.hcg = function (hsv) {
			var s = hsv[1] / 100;
			var v = hsv[2] / 100;

			var c = s * v;
			var f = 0;

			if (c < 1.0) {
				f = (v - c) / (1 - c);
			}

			return [hsv[0], c * 100, f * 100];
		};

		convert.hcg.rgb = function (hcg) {
			var h = hcg[0] / 360;
			var c = hcg[1] / 100;
			var g = hcg[2] / 100;

			if (c === 0.0) {
				return [g * 255, g * 255, g * 255];
			}

			var pure = [0, 0, 0];
			var hi = h % 1 * 6;
			var v = hi % 1;
			var w = 1 - v;
			var mg = 0;

			switch (Math.floor(hi)) {
				case 0:
					pure[0] = 1;pure[1] = v;pure[2] = 0;break;
				case 1:
					pure[0] = w;pure[1] = 1;pure[2] = 0;break;
				case 2:
					pure[0] = 0;pure[1] = 1;pure[2] = v;break;
				case 3:
					pure[0] = 0;pure[1] = w;pure[2] = 1;break;
				case 4:
					pure[0] = v;pure[1] = 0;pure[2] = 1;break;
				default:
					pure[0] = 1;pure[1] = 0;pure[2] = w;
			}

			mg = (1.0 - c) * g;

			return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
		};

		convert.hcg.hsv = function (hcg) {
			var c = hcg[1] / 100;
			var g = hcg[2] / 100;

			var v = c + g * (1.0 - c);
			var f = 0;

			if (v > 0.0) {
				f = c / v;
			}

			return [hcg[0], f * 100, v * 100];
		};

		convert.hcg.hsl = function (hcg) {
			var c = hcg[1] / 100;
			var g = hcg[2] / 100;

			var l = g * (1.0 - c) + 0.5 * c;
			var s = 0;

			if (l > 0.0 && l < 0.5) {
				s = c / (2 * l);
			} else if (l >= 0.5 && l < 1.0) {
				s = c / (2 * (1 - l));
			}

			return [hcg[0], s * 100, l * 100];
		};

		convert.hcg.hwb = function (hcg) {
			var c = hcg[1] / 100;
			var g = hcg[2] / 100;
			var v = c + g * (1.0 - c);
			return [hcg[0], (v - c) * 100, (1 - v) * 100];
		};

		convert.hwb.hcg = function (hwb) {
			var w = hwb[1] / 100;
			var b = hwb[2] / 100;
			var v = 1 - b;
			var c = v - w;
			var g = 0;

			if (c < 1) {
				g = (v - c) / (1 - c);
			}

			return [hwb[0], c * 100, g * 100];
		};

		convert.apple.rgb = function (apple) {
			return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
		};

		convert.rgb.apple = function (rgb) {
			return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
		};

		convert.gray.rgb = function (args) {
			return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
		};

		convert.gray.hsl = convert.gray.hsv = function (args) {
			return [0, 0, args[0]];
		};

		convert.gray.hwb = function (gray) {
			return [0, 100, gray[0]];
		};

		convert.gray.cmyk = function (gray) {
			return [0, 0, 0, gray[0]];
		};

		convert.gray.lab = function (gray) {
			return [gray[0], 0, 0];
		};

		convert.gray.hex = function (gray) {
			var val = Math.round(gray[0] / 100 * 255) & 0xFF;
			var integer = (val << 16) + (val << 8) + val;

			var string = integer.toString(16).toUpperCase();
			return '000000'.substring(string.length) + string;
		};

		convert.rgb.gray = function (rgb) {
			var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
			return [val / 255 * 100];
		};
	});
	var conversions_1 = conversions.rgb;
	var conversions_2 = conversions.hsl;
	var conversions_3 = conversions.hsv;
	var conversions_4 = conversions.hwb;
	var conversions_5 = conversions.cmyk;
	var conversions_6 = conversions.xyz;
	var conversions_7 = conversions.lab;
	var conversions_8 = conversions.lch;
	var conversions_9 = conversions.hex;
	var conversions_10 = conversions.keyword;
	var conversions_11 = conversions.ansi16;
	var conversions_12 = conversions.ansi256;
	var conversions_13 = conversions.hcg;
	var conversions_14 = conversions.apple;
	var conversions_15 = conversions.gray;

	/*
		this function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);

		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);

			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];

		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	var route = function route(fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};

		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];

			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var convert = {};

	var models = Object.keys(conversions);

	function wrapRaw(fn) {
		var wrappedFn = function wrappedFn(args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			return fn(args);
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		var wrappedFn = function wrappedFn(args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			var result = fn(args);

			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(function (fromModel) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels });
		Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });

		var routes = route(fromModel);
		var routeModels = Object.keys(routes);

		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	var colorConvert = convert;

	var ansiStyles = createCommonjsModule(function (module) {

		var wrapAnsi16 = function wrapAnsi16(fn, offset) {
			return function () {
				var code = fn.apply(colorConvert, arguments);
				return '\x1B[' + (code + offset) + 'm';
			};
		};

		var wrapAnsi256 = function wrapAnsi256(fn, offset) {
			return function () {
				var code = fn.apply(colorConvert, arguments);
				return '\x1B[' + (38 + offset) + ';5;' + code + 'm';
			};
		};

		var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
			return function () {
				var rgb = fn.apply(colorConvert, arguments);
				return '\x1B[' + (38 + offset) + ';2;' + rgb[0] + ';' + rgb[1] + ';' + rgb[2] + 'm';
			};
		};

		function assembleStyles() {
			var codes = new Map();
			var styles = {
				modifier: {
					reset: [0, 0],
					// 21 isn't widely supported and 22 does the same thing
					bold: [1, 22],
					dim: [2, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					hidden: [8, 28],
					strikethrough: [9, 29]
				},
				color: {
					black: [30, 39],
					red: [31, 39],
					green: [32, 39],
					yellow: [33, 39],
					blue: [34, 39],
					magenta: [35, 39],
					cyan: [36, 39],
					white: [37, 39],
					gray: [90, 39],

					// Bright color
					redBright: [91, 39],
					greenBright: [92, 39],
					yellowBright: [93, 39],
					blueBright: [94, 39],
					magentaBright: [95, 39],
					cyanBright: [96, 39],
					whiteBright: [97, 39]
				},
				bgColor: {
					bgBlack: [40, 49],
					bgRed: [41, 49],
					bgGreen: [42, 49],
					bgYellow: [43, 49],
					bgBlue: [44, 49],
					bgMagenta: [45, 49],
					bgCyan: [46, 49],
					bgWhite: [47, 49],

					// Bright color
					bgBlackBright: [100, 49],
					bgRedBright: [101, 49],
					bgGreenBright: [102, 49],
					bgYellowBright: [103, 49],
					bgBlueBright: [104, 49],
					bgMagentaBright: [105, 49],
					bgCyanBright: [106, 49],
					bgWhiteBright: [107, 49]
				}
			};

			// Fix humans
			styles.color.grey = styles.color.gray;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(styles)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var groupName = _step.value;

					var group = styles[groupName];

					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = Object.keys(group)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var styleName = _step3.value;

							var style = group[styleName];

							styles[styleName] = {
								open: '\x1B[' + style[0] + 'm',
								close: '\x1B[' + style[1] + 'm'
							};

							group[styleName] = styles[styleName];

							codes.set(style[0], style[1]);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}

					Object.defineProperty(styles, groupName, {
						value: group,
						enumerable: false
					});

					Object.defineProperty(styles, 'codes', {
						value: codes,
						enumerable: false
					});
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var ansi2ansi = function ansi2ansi(n) {
				return n;
			};
			var rgb2rgb = function rgb2rgb(r, g, b) {
				return [r, g, b];
			};

			styles.color.close = '\x1B[39m';
			styles.bgColor.close = '\x1B[49m';

			styles.color.ansi = {
				ansi: wrapAnsi16(ansi2ansi, 0)
			};
			styles.color.ansi256 = {
				ansi256: wrapAnsi256(ansi2ansi, 0)
			};
			styles.color.ansi16m = {
				rgb: wrapAnsi16m(rgb2rgb, 0)
			};

			styles.bgColor.ansi = {
				ansi: wrapAnsi16(ansi2ansi, 10)
			};
			styles.bgColor.ansi256 = {
				ansi256: wrapAnsi256(ansi2ansi, 10)
			};
			styles.bgColor.ansi16m = {
				rgb: wrapAnsi16m(rgb2rgb, 10)
			};

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = Object.keys(colorConvert)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var key = _step2.value;

					if (_typeof(colorConvert[key]) !== 'object') {
						continue;
					}

					var suite = colorConvert[key];

					if (key === 'ansi16') {
						key = 'ansi';
					}

					if ('ansi16' in suite) {
						styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
						styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
					}

					if ('ansi256' in suite) {
						styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
						styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
					}

					if ('rgb' in suite) {
						styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
						styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return styles;
		}

		// Make the export immutable
		Object.defineProperty(module, 'exports', {
			enumerable: true,
			get: assembleStyles
		});
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 *      
	 */

	var getSymbols = Object.getOwnPropertySymbols || function (obj) {
	  return [];
	};

	var isSymbol = function isSymbol(key) {
	  return (
	    // $FlowFixMe string literal `symbol`. This value is not a valid `typeof` return value
	    (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'symbol' || toString.call(key) === '[object Symbol]'
	  );
	};

	// Return entries (for example, of a map)
	// with spacing, indentation, and comma
	// without surrounding punctuation (for example, braces)
	function printIteratorEntries(
	// Flow 0.51.0: property `@@iterator` of $Iterator not found in Object
	// To allow simplistic getRecordIterator in immutable.js
	iterator, config, indentation, depth, refs, printer) {
	  var separator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ': ';

	  var result = '';
	  var current = iterator.next();

	  if (!current.done) {
	    result += config.spacingOuter;

	    var indentationNext = indentation + config.indent;

	    while (!current.done) {
	      var name = printer(current.value[0], config, indentationNext, depth, refs);
	      var value = printer(current.value[1], config, indentationNext, depth, refs);

	      result += indentationNext + name + separator + value;

	      current = iterator.next();

	      if (!current.done) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }

	    result += config.spacingOuter + indentation;
	  }

	  return result;
	}

	// Return values (for example, of a set)
	// with spacing, indentation, and comma
	// without surrounding punctuation (braces or brackets)
	function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
	  var result = '';
	  var current = iterator.next();

	  if (!current.done) {
	    result += config.spacingOuter;

	    var indentationNext = indentation + config.indent;

	    while (!current.done) {
	      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);

	      current = iterator.next();

	      if (!current.done) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }

	    result += config.spacingOuter + indentation;
	  }

	  return result;
	}

	// Return items (for example, of an array)
	// with spacing, indentation, and comma
	// without surrounding punctuation (for example, brackets)
	function printListItems(list, config, indentation, depth, refs, printer) {
	  var result = '';

	  if (list.length) {
	    result += config.spacingOuter;

	    var indentationNext = indentation + config.indent;

	    for (var i = 0; i < list.length; i++) {
	      result += indentationNext + printer(list[i], config, indentationNext, depth, refs);

	      if (i < list.length - 1) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }

	    result += config.spacingOuter + indentation;
	  }

	  return result;
	}

	// Return properties of an object
	// with spacing, indentation, and comma
	// without surrounding punctuation (for example, braces)
	function printObjectProperties(val, config, indentation, depth, refs, printer) {
	  var result = '';
	  var keys = Object.keys(val).sort();
	  var symbols = getSymbols(val);

	  if (symbols.length) {
	    keys = keys.filter(function (key) {
	      return !isSymbol(key);
	    }).concat(symbols);
	  }

	  if (keys.length) {
	    result += config.spacingOuter;

	    var indentationNext = indentation + config.indent;

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var name = printer(key, config, indentationNext, depth, refs);
	      var value = printer(val[key], config, indentationNext, depth, refs);

	      result += indentationNext + name + ': ' + value;

	      if (i < keys.length - 1) {
	        result += ',' + config.spacingInner;
	      } else if (!config.min) {
	        result += ',';
	      }
	    }

	    result += config.spacingOuter + indentation;
	  }

	  return result;
	}

	var asymmetricMatcher = Symbol.for('jest.asymmetricMatcher');
	var SPACE = ' ';

	var serialize = function serialize(val, config, indentation, depth, refs, printer) {
	  var stringedValue = val.toString();

	  if (stringedValue === 'ArrayContaining' || stringedValue === 'ArrayNotContaining') {
	    if (++depth > config.maxDepth) {
	      return '[' + stringedValue + ']';
	    }
	    return stringedValue + SPACE + '[' + printListItems(val.sample, config, indentation, depth, refs, printer) + ']';
	  }

	  if (stringedValue === 'ObjectContaining' || stringedValue === 'ObjectNotContaining') {
	    if (++depth > config.maxDepth) {
	      return '[' + stringedValue + ']';
	    }
	    return stringedValue + SPACE + '{' + printObjectProperties(val.sample, config, indentation, depth, refs, printer) + '}';
	  }

	  if (stringedValue === 'StringMatching' || stringedValue === 'StringNotMatching') {
	    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
	  }

	  if (stringedValue === 'StringContaining' || stringedValue === 'StringNotContaining') {
	    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
	  }

	  return val.toAsymmetricMatcher();
	};

	var test = function test(val) {
	  return val && val.$$typeof === asymmetricMatcher;
	};

	var AsymmetricMatcher = { serialize: serialize, test: test };

	var ansiRegex = function ansiRegex(options) {
		options = Object.assign({
			onlyFirst: false
		}, options);

		var pattern = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');

		return new RegExp(pattern, options.onlyFirst ? undefined : 'g');
	};

	var toHumanReadableAnsi = function toHumanReadableAnsi(text) {
	  return text.replace(ansiRegex(), function (match, offset, string) {
	    switch (match) {
	      case ansiStyles.red.close:
	      case ansiStyles.green.close:
	      case ansiStyles.cyan.close:
	      case ansiStyles.gray.close:
	      case ansiStyles.white.close:
	      case ansiStyles.yellow.close:
	      case ansiStyles.bgRed.close:
	      case ansiStyles.bgGreen.close:
	      case ansiStyles.bgYellow.close:
	      case ansiStyles.inverse.close:
	      case ansiStyles.dim.close:
	      case ansiStyles.bold.close:
	      case ansiStyles.reset.open:
	      case ansiStyles.reset.close:
	        return '</>';
	      case ansiStyles.red.open:
	        return '<red>';
	      case ansiStyles.green.open:
	        return '<green>';
	      case ansiStyles.cyan.open:
	        return '<cyan>';
	      case ansiStyles.gray.open:
	        return '<gray>';
	      case ansiStyles.white.open:
	        return '<white>';
	      case ansiStyles.yellow.open:
	        return '<yellow>';
	      case ansiStyles.bgRed.open:
	        return '<bgRed>';
	      case ansiStyles.bgGreen.open:
	        return '<bgGreen>';
	      case ansiStyles.bgYellow.open:
	        return '<bgYellow>';
	      case ansiStyles.inverse.open:
	        return '<inverse>';
	      case ansiStyles.dim.open:
	        return '<dim>';
	      case ansiStyles.bold.open:
	        return '<bold>';
	      default:
	        return '';
	    }
	  });
	};

	var test$1 = function test(val) {
	  return typeof val === 'string' && val.match(ansiRegex());
	};

	var serialize$1 = function serialize(val, config, indentation, depth, refs, printer) {
	  return printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
	};

	var ConvertAnsi = { serialize: serialize$1, test: test$1 };

	var SPACE$1 = ' ';

	var OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'];
	var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;

	var testName = function testName(name) {
	  return OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
	};

	var test$2 = function test(val) {
	  return val && val.constructor && val.constructor.name && testName(val.constructor.name);
	};

	// Convert array of attribute objects to props object.
	var propsReducer = function propsReducer(props, attribute) {
	  props[attribute.name] = attribute.value;
	  return props;
	};

	var serialize$2 = function serialize(collection, config, indentation, depth, refs, printer) {
	  var name = collection.constructor.name;
	  if (++depth > config.maxDepth) {
	    return '[' + name + ']';
	  }

	  return (config.min ? '' : name + SPACE$1) + (OBJECT_NAMES.indexOf(name) !== -1 ? '{' + printObjectProperties(name === 'NamedNodeMap' ? Array.prototype.reduce.call(collection, propsReducer, {}) : Object.assign({}, collection), config, indentation, depth, refs, printer) + '}' : '[' + printListItems(Array.from(collection), config, indentation, depth, refs, printer) + ']');
	};

	var DOMCollection = { serialize: serialize$2, test: test$2 };

	/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 *      
	 */

	function escapeHTML(str) {
	  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	// Return empty string if keys is empty.
	var printProps = function printProps(keys, props, config, indentation, depth, refs, printer) {
	  var indentationNext = indentation + config.indent;
	  var colors = config.colors;
	  return keys.map(function (key) {
	    var value = props[key];
	    var printed = printer(value, config, indentationNext, depth, refs);

	    if (typeof value !== 'string') {
	      if (printed.indexOf('\n') !== -1) {
	        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
	      }
	      printed = '{' + printed + '}';
	    }

	    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
	  }).join('');
	};

	// Return empty string if children is empty.
	var printChildren = function printChildren(children, config, indentation, depth, refs, printer) {
	  return children.map(function (child) {
	    return config.spacingOuter + indentation + (typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs));
	  }).join('');
	};

	var printText = function printText(text, config) {
	  var contentColor = config.colors.content;
	  return contentColor.open + escapeHTML(text) + contentColor.close;
	};

	var printComment = function printComment(comment, config) {
	  var commentColor = config.colors.comment;
	  return commentColor.open + '<!--' + escapeHTML(comment) + '-->' + commentColor.close;
	};

	// Separate the functions to format props, children, and element,
	// so a plugin could override a particular function, if needed.
	// Too bad, so sad: the traditional (but unnecessary) space
	// in a self-closing tagColor requires a second test of printedProps.
	var printElement = function printElement(type, printedProps, printedChildren, config, indentation) {
	  var tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
	};

	var printElementAsLeaf = function printElementAsLeaf(type, config) {
	  var tagColor = config.colors.tag;
	  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
	};

	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;
	var FRAGMENT_NODE = 11;

	var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;

	var testNode = function testNode(nodeType, name) {
	  return nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name) || nodeType === TEXT_NODE && name === 'Text' || nodeType === COMMENT_NODE && name === 'Comment' || nodeType === FRAGMENT_NODE && name === 'DocumentFragment';
	};

	var test$3 = function test(val) {
	  return val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name);
	};

	// Convert array of attribute objects to keys array and props object.
	var keysMapper = function keysMapper(attribute) {
	  return attribute.name;
	};
	var propsReducer$1 = function propsReducer(props, attribute) {
	  props[attribute.name] = attribute.value;
	  return props;
	};

	var serialize$3 = function serialize(node, config, indentation, depth, refs, printer) {
	  if (node.nodeType === TEXT_NODE) {
	    return printText(node.data, config);
	  }

	  if (node.nodeType === COMMENT_NODE) {
	    return printComment(node.data, config);
	  }

	  var type = node.nodeType === FRAGMENT_NODE ? 'DocumentFragment' : node.tagName.toLowerCase();

	  if (++depth > config.maxDepth) {
	    return printElementAsLeaf(type, config);
	  }

	  return printElement(type, printProps(Array.prototype.map.call(node.attributes || [], keysMapper).sort(), Array.prototype.reduce.call(node.attributes || [], propsReducer$1, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
	};

	var DOMElement = { serialize: serialize$3, test: test$3 };

	// SENTINEL constants are from https://github.com/facebook/immutable-js
	var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	var IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4
	var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	var getImmutableName = function getImmutableName(name) {
	  return 'Immutable.' + name;
	};
	var printAsLeaf = function printAsLeaf(name) {
	  return '[' + name + ']';
	};
	var SPACE$2 = ' ';
	var LAZY = '…'; // Seq is lazy if it calls a method like filter

	var printImmutableEntries = function printImmutableEntries(val, config, indentation, depth, refs, printer, type) {
	  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE$2 + '{' + printIteratorEntries(val.entries(), config, indentation, depth, refs, printer) + '}';
	};

	// Record has an entries method because it is a collection in immutable v3.
	// Return an iterator for Immutable Record from version v3 or v4.
	var getRecordEntries = function getRecordEntries(val) {
	  var i = 0;
	  return {
	    next: function next() {
	      if (i < val._keys.length) {
	        var key = val._keys[i++];
	        return { done: false, value: [key, val.get(key)] };
	      }
	      return { done: true };
	    }
	  };
	};

	var printImmutableRecord = function printImmutableRecord(val, config, indentation, depth, refs, printer) {
	  // _name property is defined only for an Immutable Record instance
	  // which was constructed with a second optional descriptive name arg
	  var name = getImmutableName(val._name || 'Record');
	  return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE$2 + '{' + printIteratorEntries(getRecordEntries(val), config, indentation, depth, refs, printer) + '}';
	};

	var printImmutableSeq = function printImmutableSeq(val, config, indentation, depth, refs, printer) {
	  var name = getImmutableName('Seq');

	  if (++depth > config.maxDepth) {
	    return printAsLeaf(name);
	  }

	  if (val[IS_KEYED_SENTINEL]) {
	    return name + SPACE$2 + '{' + (
	    // from Immutable collection of entries or from ECMAScript object
	    val._iter || val._object ? printIteratorEntries(val.entries(), config, indentation, depth, refs, printer) : LAZY) + '}';
	  }

	  return name + SPACE$2 + '[' + (val._iter || // from Immutable collection of values
	  val._array || // from ECMAScript array
	  val._collection || // from ECMAScript collection in immutable v4
	  val._iterable // from ECMAScript collection in immutable v3
	  ? printIteratorValues(val.values(), config, indentation, depth, refs, printer) : LAZY) + ']';
	};

	var printImmutableValues = function printImmutableValues(val, config, indentation, depth, refs, printer, type) {
	  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE$2 + '[' + printIteratorValues(val.values(), config, indentation, depth, refs, printer) + ']';
	};

	var serialize$4 = function serialize(val, config, indentation, depth, refs, printer) {
	  if (val[IS_MAP_SENTINEL]) {
	    return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map');
	  }

	  if (val[IS_LIST_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, 'List');
	  }
	  if (val[IS_SET_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set');
	  }
	  if (val[IS_STACK_SENTINEL]) {
	    return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack');
	  }

	  if (val[IS_SEQ_SENTINEL]) {
	    return printImmutableSeq(val, config, indentation, depth, refs, printer);
	  }

	  // For compatibility with immutable v3 and v4, let record be the default.
	  return printImmutableRecord(val, config, indentation, depth, refs, printer);
	};

	// Explicitly comparing sentinel properties to true avoids false positive
	// when mock identity-obj-proxy returns the key as the value for any key.
	var test$4 = function test(val) {
	  return val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
	};

	var Immutable = { serialize: serialize$4, test: test$4 };

	var elementSymbol = Symbol.for('react.element');
	var fragmentSymbol = Symbol.for('react.fragment');
	var forwardRefSymbol = Symbol.for('react.forward_ref');
	var providerSymbol = Symbol.for('react.provider');
	var contextSymbol = Symbol.for('react.context');

	// Given element.props.children, or subtree during recursive traversal,
	// return flattened array of children.
	var getChildren = function getChildren(arg) {
	  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	  if (Array.isArray(arg)) {
	    arg.forEach(function (item) {
	      getChildren(item, children);
	    });
	  } else if (arg != null && arg !== false) {
	    children.push(arg);
	  }
	  return children;
	};

	var getType = function getType(element) {
	  var type = element.type;
	  if (typeof type === 'string') {
	    return type;
	  }
	  if (typeof type === 'function') {
	    return type.displayName || type.name || 'Unknown';
	  }
	  if (type === fragmentSymbol) {
	    return 'React.Fragment';
	  }
	  if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null) {
	    if (type.$$typeof === providerSymbol) {
	      return 'Context.Provider';
	    }

	    if (type.$$typeof === contextSymbol) {
	      return 'Context.Consumer';
	    }

	    if (type.$$typeof === forwardRefSymbol) {
	      var functionName = type.render.displayName || type.render.name || '';

	      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    }
	  }
	  return 'UNDEFINED';
	};

	var getPropKeys = function getPropKeys(element) {
	  var props = element.props;


	  return Object.keys(props).filter(function (key) {
	    return key !== 'children' && props[key] !== undefined;
	  }).sort();
	};

	var serialize$5 = function serialize(element, config, indentation, depth, refs, printer) {
	  return ++depth > config.maxDepth ? printElementAsLeaf(getType(element), config) : printElement(getType(element), printProps(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), printChildren(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
	};

	var test$5 = function test(val) {
	  return val && val.$$typeof === elementSymbol;
	};

	var ReactElement = { serialize: serialize$5, test: test$5 };

	var testSymbol = Symbol.for('react.test.json');

	var getPropKeys$1 = function getPropKeys(object) {
	  var props = object.props;


	  return props ? Object.keys(props).filter(function (key) {
	    return props[key] !== undefined;
	  }).sort() : [];
	};

	var serialize$6 = function serialize(object, config, indentation, depth, refs, printer) {
	  return ++depth > config.maxDepth ? printElementAsLeaf(object.type, config) : printElement(object.type, object.props ? printProps(getPropKeys$1(object),
	  // Despite ternary expression, Flow 0.51.0 found incorrect error:
	  // undefined is incompatible with the expected param type of Object
	  // $FlowFixMe
	  object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? printChildren(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);
	};

	var test$6 = function test(val) {
	  return val && val.$$typeof === testSymbol;
	};

	var ReactTestComponent = { serialize: serialize$6, test: test$6 };

	var toString$1 = Object.prototype.toString;
	var toISOString = Date.prototype.toISOString;
	var errorToString = Error.prototype.toString;
	var regExpToString = RegExp.prototype.toString;
	var symbolToString = Symbol.prototype.toString;

	// Explicitly comparing typeof constructor to function avoids undefined as name
	// when mock identity-obj-proxy returns the key as the value for any key.
	var getConstructorName = function getConstructorName(val) {
	  return typeof val.constructor === 'function' && val.constructor.name || 'Object';
	};

	// Is val is equal to global window object? Works even if it does not exist :)
	/* global window */
	var isWindow = function isWindow(val) {
	  return typeof window !== 'undefined' && val === window;
	};

	var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
	var NEWLINE_REGEXP = /\n/gi;

	var PrettyFormatPluginError = function (_Error) {
	  inherits(PrettyFormatPluginError, _Error);

	  function PrettyFormatPluginError(message, stack) {
	    classCallCheck(this, PrettyFormatPluginError);

	    var _this = possibleConstructorReturn(this, (PrettyFormatPluginError.__proto__ || Object.getPrototypeOf(PrettyFormatPluginError)).call(this, message));

	    _this.stack = stack;
	    _this.name = _this.constructor.name;
	    return _this;
	  }

	  return PrettyFormatPluginError;
	}(Error);

	function isToStringedArrayType(toStringed) {
	  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';
	}

	function printNumber(val) {
	  return Object.is(val, -0) ? '-0' : String(val);
	}

	function printFunction(val, printFunctionName) {
	  if (!printFunctionName) {
	    return '[Function]';
	  }
	  return '[Function ' + (val.name || 'anonymous') + ']';
	}

	function printSymbol(val) {
	  return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
	}

	function printError(val) {
	  return '[' + errorToString.call(val) + ']';
	}

	function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
	  if (val === true || val === false) {
	    return '' + val;
	  }
	  if (val === undefined) {
	    return 'undefined';
	  }
	  if (val === null) {
	    return 'null';
	  }

	  var typeOf = typeof val === 'undefined' ? 'undefined' : _typeof(val);

	  if (typeOf === 'number') {
	    return printNumber(val);
	  }
	  if (typeOf === 'string') {
	    if (escapeString) {
	      return '"' + val.replace(/"|\\/g, '\\$&') + '"';
	    }
	    return '"' + val + '"';
	  }
	  if (typeOf === 'function') {
	    return printFunction(val, printFunctionName);
	  }
	  if (typeOf === 'symbol') {
	    return printSymbol(val);
	  }

	  var toStringed = toString$1.call(val);

	  if (toStringed === '[object WeakMap]') {
	    return 'WeakMap {}';
	  }
	  if (toStringed === '[object WeakSet]') {
	    return 'WeakSet {}';
	  }
	  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
	    return printFunction(val, printFunctionName);
	  }
	  if (toStringed === '[object Symbol]') {
	    return printSymbol(val);
	  }
	  if (toStringed === '[object Date]') {
	    return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val);
	  }
	  if (toStringed === '[object Error]') {
	    return printError(val);
	  }
	  if (toStringed === '[object RegExp]') {
	    if (escapeRegex) {
	      // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
	      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	    return regExpToString.call(val);
	  }

	  if (val instanceof Error) {
	    return printError(val);
	  }

	  return null;
	}

	function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
	  if (refs.indexOf(val) !== -1) {
	    return '[Circular]';
	  }
	  refs = refs.slice();
	  refs.push(val);

	  var hitMaxDepth = ++depth > config.maxDepth;
	  var min = config.min;

	  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function' && !hasCalledToJSON) {
	    return printer(val.toJSON(), config, indentation, depth, refs, true);
	  }

	  var toStringed = toString$1.call(val);
	  if (toStringed === '[object Arguments]') {
	    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + printListItems(val, config, indentation, depth, refs, printer) + ']';
	  }
	  if (isToStringedArrayType(toStringed)) {
	    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : val.constructor.name + ' ') + '[' + printListItems(val, config, indentation, depth, refs, printer) + ']';
	  }
	  if (toStringed === '[object Map]') {
	    return hitMaxDepth ? '[Map]' : 'Map {' + printIteratorEntries(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';
	  }
	  if (toStringed === '[object Set]') {
	    return hitMaxDepth ? '[Set]' : 'Set {' + printIteratorValues(val.values(), config, indentation, depth, refs, printer) + '}';
	  }

	  // Avoid failure to serialize global window object in jsdom test environment.
	  // For example, not even relevant if window is prop of React element.
	  return hitMaxDepth || isWindow(val) ? '[' + getConstructorName(val) + ']' : (min ? '' : getConstructorName(val) + ' ') + '{' + printObjectProperties(val, config, indentation, depth, refs, printer) + '}';
	}

	function printPlugin(plugin, val, config, indentation, depth, refs) {
	  var printed = void 0;

	  try {
	    printed = plugin.serialize ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, function (valChild) {
	      return printer(valChild, config, indentation, depth, refs);
	    }, function (str) {
	      var indentationNext = indentation + config.indent;
	      return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext);
	    }, {
	      edgeSpacing: config.spacingOuter,
	      min: config.min,
	      spacing: config.spacingInner
	    }, config.colors);
	  } catch (error) {
	    throw new PrettyFormatPluginError(error.message, error.stack);
	  }
	  if (typeof printed !== 'string') {
	    throw new Error('pretty-format: Plugin must return type "string" but instead returned "' + (typeof printed === 'undefined' ? 'undefined' : _typeof(printed)) + '".');
	  }
	  return printed;
	}

	function findPlugin(plugins, val) {
	  for (var p = 0; p < plugins.length; p++) {
	    try {
	      if (plugins[p].test(val)) {
	        return plugins[p];
	      }
	    } catch (error) {
	      throw new PrettyFormatPluginError(error.message, error.stack);
	    }
	  }

	  return null;
	}

	function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
	  var plugin = findPlugin(config.plugins, val);
	  if (plugin !== null) {
	    return printPlugin(plugin, val, config, indentation, depth, refs);
	  }

	  var basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
	  if (basicResult !== null) {
	    return basicResult;
	  }

	  return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
	}

	var DEFAULT_THEME = {
	  comment: 'gray',
	  content: 'reset',
	  prop: 'yellow',
	  tag: 'cyan',
	  value: 'green'
	};

	var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);

	var DEFAULT_OPTIONS = {
	  callToJSON: true,
	  escapeRegex: false,
	  escapeString: true,
	  highlight: false,
	  indent: 2,
	  maxDepth: Infinity,
	  min: false,
	  plugins: [],
	  printFunctionName: true,
	  theme: DEFAULT_THEME
	};

	function validateOptions(options) {
	  Object.keys(options).forEach(function (key) {
	    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
	      throw new Error('pretty-format: Unknown option "' + key + '".');
	    }
	  });

	  if (options.min && options.indent !== undefined && options.indent !== 0) {
	    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
	  }

	  if (options.theme !== undefined) {
	    if (options.theme === null) {
	      throw new Error('pretty-format: Option "theme" must not be null.');
	    }

	    if (_typeof(options.theme) !== 'object') {
	      throw new Error('pretty-format: Option "theme" must be of type "object" but instead received "' + _typeof(options.theme) + '".');
	    }
	  }
	}

	var getColorsHighlight = function getColorsHighlight(options) {
	  return (
	    // $FlowFixMe: Flow thinks keys from `Colors` are missing from `DEFAULT_THEME_KEYS`
	    DEFAULT_THEME_KEYS.reduce(function (colors, key) {
	      var value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
	      var color = ansiStyles[value];
	      if (color && typeof color.close === 'string' && typeof color.open === 'string') {
	        colors[key] = color;
	      } else {
	        throw new Error('pretty-format: Option "theme" has a key "' + key + '" whose value "' + value + '" is undefined in ansi-styles.');
	      }
	      return colors;
	    }, Object.create(null))
	  );
	};

	var getColorsEmpty = function getColorsEmpty() {
	  return (
	    // $FlowFixMe: Flow thinks keys from `Colors` are missing from `DEFAULT_THEME_KEYS`
	    DEFAULT_THEME_KEYS.reduce(function (colors, key) {
	      colors[key] = { close: '', open: '' };
	      return colors;
	    }, Object.create(null))
	  );
	};

	var getPrintFunctionName = function getPrintFunctionName(options) {
	  return options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
	};

	var getEscapeRegex = function getEscapeRegex(options) {
	  return options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
	};

	var getEscapeString = function getEscapeString(options) {
	  return options && options.escapeString !== undefined ? options.escapeString : DEFAULT_OPTIONS.escapeString;
	};

	var getConfig = function getConfig(options) {
	  return {
	    callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
	    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
	    escapeRegex: getEscapeRegex(options),
	    escapeString: getEscapeString(options),
	    indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
	    maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
	    min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
	    plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
	    printFunctionName: getPrintFunctionName(options),
	    spacingInner: options && options.min ? ' ' : '\n',
	    spacingOuter: options && options.min ? '' : '\n'
	  };
	};

	function createIndent(indent) {
	  return new Array(indent + 1).join(' ');
	}

	function prettyFormat(val, options) {
	  if (options) {
	    validateOptions(options);
	    if (options.plugins) {
	      var plugin = findPlugin(options.plugins, val);
	      if (plugin !== null) {
	        return printPlugin(plugin, val, getConfig(options), '', 0, []);
	      }
	    }
	  }

	  var basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
	  if (basicResult !== null) {
	    return basicResult;
	  }

	  return printComplexValue(val, getConfig(options), '', 0, []);
	}

	prettyFormat.plugins = {
	  AsymmetricMatcher: AsymmetricMatcher,
	  ConvertAnsi: ConvertAnsi,
	  DOMCollection: DOMCollection,
	  DOMElement: DOMElement,
	  Immutable: Immutable,
	  ReactElement: ReactElement,
	  ReactTestComponent: ReactTestComponent
	};

	module.exports = prettyFormat;

})));
