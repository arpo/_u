Snippets
=========

Fiddle
--------

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>Titled</title>
		<style>
			body {
				font-family: sans-serif;
			}
		</style>
	</head>
	<body>
		<script type="text/javascript" src="https://gitcdn.link/repo/arpo/_u/master/_u.js"></script>
		<script type="text/javascript">
			document.addEventListener('DOMContentLoaded', function () {

			}, false);
		</script>
	</body>
	</html>

Modul pattern
-------------
	
	const HBR = window['FOO'] || {}; // eslint-disable-line
	FOO.bar = (function () {

		function _run() {
			console.log(On the run);
		}

		return {
			run: _run
		};
	}());


Class and sub class
-------------------

	/*
	* FOO.bar 1.0
	*/

	var FOO = FOO || {};
	FOO.bar = function () {

			const that = this;
			that.id = 'bar' + FOO.bar.getId();
			FOO.bar.all[that.id] = that;

	};

	FOO.bar.prototype = {};

	FOO.bar.prototype.destroy = function () {
		const that = this;
		delete FOO.bar.all[that.id];
	};

	FOO.bar.all = {};

	FOO.bar.getId = function() {
		return (new Date().getTime()) + (parseInt(Math.random() * 100)).toString();
	};

	//Sub class of FOO.bar
	FOO.subFoo = function () {
		FOO.bar.call(this); // call super constructor.
	};

	// subclass extends superclass
	FOO.subFoo.prototype = Object.create(FOO.bar.prototype);
	FOO.subFoo.prototype.constructor = FOO.subFoo;

	// Override method
	FOO.subFoo.prototype.move = function(x, y) {
		FOO.bar.prototype.move.call(this, x, y); // call superclass method
		console.log = 'FOO.subFoo moved.';
	};


Trace
-----
	https://gitcdn.link/repo/arpo/trace.js/master/trace.min.js
	trace('Foo', 'bar')

Center HV
----------
	.centerH {
		display: flex;
		justify-content: center;
		-webkit-justify-content: center;
	}
	.centerV {
		display: flex;
		align-items: center;
		display: -webkit-flex;
		-webkit-align-items: center;
	}

Timelock
-----------
	let timelock;
	if (timelock) window.clearTimeout(timelock);
	timelock = window.setTimeout(() => {
		console.log('My timeout function');
	}, 500);

Cover
------
	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
		}
		.cover {
			width: 100%;
			height: 100%;
			background-size: cover;
			background-position: center center;
		}
	</style>

	<div class="cover" style="background-image: url(https://picsum.photos/1100/700/?random);"></div>

Callee
------
	console.log(arguments.callee.caller.toString());

Two column layout
------------------
	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="utf-8">
		<title>2 Cols</title>
		<style>
			html {
				height: 100%;
			}
			body {
				background-color: pink;
				padding-bottom: 40px;
			}
			.main {
				width: 900px;
				border: 1px solid #000;
				background-color: #fff;
				position: relative;
				margin: 0 auto;
				margin-top: 35px;
				text-align: left;
				padding: 0px;
				height: 100%;
			}
			.content {
				margin: 50px 40px 70px 40px;
			}
			.leftCol {
				float: left;
				width: 300px;
				height: 150px;
				background-color: yellow;
			}
			.rigthCol {
				float: right;
				background-color: lime;
				width: 200px;
				height: 350px;
			}
		</style>
	</head>

	<body>
		<div class="main">
			<div class="content">
				<div class="leftCol">
					<h2>Left Col</h2>
				</div>
				<div class="rigthCol">
					<h2>Right Col</h2>
				</div>
				<div style="clear:both;"></div>
			</div>
		</div>
	</body>

	</html>

transform scale
----------------
	transition: all 0.1s ease-out;
	transform: scale(1.1);