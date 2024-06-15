		const KEYS_NORMAL = ['Q', 'W', 'E', 'R'];
		const KEYS_HARD = ['Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F'];
		const SIZE = 600;

		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function calculateDistance(x1, y1, x2, y2) {
			const deltaX = x2 - x1;
			const deltaY = y2 - y1;
			return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		}

		class Beat {
			constructor({ parent, delay, top, left }) {
				this.parent = parent;
				this.playing = true; // playing, done
				if (this.parent.options.difficulty == "hard") {
					console.log("hard");
					this.key = KEYS_HARD[getRandomInt(0, KEYS_HARD.length - 1)];
				} else {
					this.key = KEYS_NORMAL[getRandomInt(0, KEYS_NORMAL.length - 1)];
				}
				this.animations = {
					beat: null,
					outer: null,
					resultRing: null,
				};

				// console.log("New Beat", top, left);
				this.top = top;
				this.left = left;

				this.elements = {
					beat: Object.assign(document.createElement("div"), {className: "beat"}),
					inner: Object.assign(document.createElement("div"), {className: "inner"}),
					outer: Object.assign(document.createElement("div"), {className: "outer"}),
					key: Object.assign(document.createElement("div"), {className: "key"}),
				};

				this.elements.beat.style.top = this.top + "px";
		 		this.elements.beat.style.left = this.left + "px";
				this.elements.key.textContent = this.key;
				this.elements.beat.append(this.elements.inner, this.elements.outer, this.elements.key);
				document.body.append(this.elements.beat);

				this.animations.outer = anime({
					targets: this.elements.outer,
					width: 0,
					height: 0,
					delay,
					duration: 1500,
					autoplay: true,
					easing: 'linear',
					complete: (anim) => {
						this.bad();
						// completeLogEl.value = 'completed : ' + anim.completed;
					}
				});
			}

			end(result) {
				this.playing = false;
				this.animations.outer.pause();

				const resultElement = Object.assign(document.createElement("div"), {className: "result"});
				resultElement.textContent = result;
				this.elements.beat.classList.add(result.toLowerCase());
				this.elements.beat.append(resultElement);

				this.animations.beat = anime({
					targets: this.elements.beat,
					opacity: 0,
					duration: 500,
					autoplay: true,
					easing: 'linear',
					complete: (anim) => {
						this.elements.beat.remove();
					}
				});

				if (result == "Good" || result == "Perfect") {
					const resultRingElement = Object.assign(document.createElement("div"), {className: "resultRing"});
					this.elements.beat.append(resultRingElement);
					this.animations.resultRing = anime({
						targets: resultRingElement,
						opacity: 0,
						width: "100%",
						height: "100%",
						duration: 500,
						autoplay: true,
						easing: 'linear',
					});
				}

				// setTimeout(() => {
				// 	this.elements.beat.style.transition = "opacity 0.5s";
				// 	this.elements.beat.style.opacity = "0";
				// }, 500);
				// setTimeout(() => {
				// 	this.elements.beat.remove();
				// }, 1000);
			}

			bad() {
				this.end("Bad");
				this.parent.score.bad++;
				this.parent.updateScore();
			}
			good() {
				this.end("Good");
				this.parent.score.good++;
				this.parent.updateScore();
			}
			perfect() {
				this.end("Perfect");
				this.parent.score.perfect++;
				this.parent.updateScore();
			}

			play() {
				if (this.animations.beat) this.animations.beat.play();
				if (this.animations.resultRing) this.animations.resultRing.play();
				if (this.playing) this.animations.outer.play();
			}
			pause() {
				if (this.animations.beat) this.animations.beat.pause();
				if (this.animations.resultRing) this.animations.resultRing.pause();
				this.animations.outer.pause();
			}

			// nextFrame(timestamp) {
			// 	// console.log("Beat nextFrame", timestamp);
			// 	if (!this.startTimestamp) this.startTimestamp = timestamp;
			// 	const progress = (timestamp - this.startTimestamp) / 1500;
			// 	this.size = 100 - (100 * Math.min(progress, 1));
			// 	console.log("size", this.size);
			// 	this.elements.outer.style.width = this.size + "%";
			// 	this.elements.outer.style.height = this.size + "%";
			// }
		}
		class Helper {
			constructor() {
				this.playing = true;
				this.beats = [];
				this.lastTimestamp = 0;
				this.frames = 0;
				this.timeline = [];
				this.options = {
					get difficulty() {
						return document.querySelector("[name='difficulty']:checked").value;
					}
				};

				document.addEventListener('keydown', (event) => { this.onKeydown(event); });

				this.score = {
					perfect: 0,
					good: 0,
					bad: 0,
				};
				this.elements = {
					wrap: Object.assign(document.createElement("div"), {className: "score"}),
					bad: Object.assign(document.createElement("div"), {className: "bad"}),
					good: Object.assign(document.createElement("div"), {className: "good"}),
					perfect: Object.assign(document.createElement("div"), {className: "perfect"}),
					
					count_bad: Object.assign(document.createElement("span"), {className: "count", textContent: 0}),
					count_good: Object.assign(document.createElement("span"), {className: "count", textContent: 0}),
					count_perfect: Object.assign(document.createElement("span"), {className: "count", textContent: 0}),

					overlay: document.querySelector(".overlay"),
					background_video: document.querySelector("#background-video"),
				};

				document.querySelector("[name='background']").addEventListener('change', (event) => {
					this.elements.background_video.style.display = event.target.checked ? "block" : "none";
				});

				this.elements.bad.append(Object.assign(document.createElement("div"), {className: "label", textContent: "Bad"}), this.elements.count_bad);
				this.elements.good.append(Object.assign(document.createElement("div"), {className: "label", textContent: "Good"}), this.elements.count_good);
				this.elements.perfect.append(Object.assign(document.createElement("div"), {className: "label", textContent: "Perfect"}), this.elements.count_perfect);
				this.elements.wrap.append(this.elements.perfect, this.elements.good, this.elements.bad);
				document.body.append(this.elements.wrap);

				// this.elements.overlay.append(Object.assign(document.createElement("h1"), {textContent: "Paused"}));
				// const label_difficulty_normal = Object.assign(document.createElement("label"));
				// label_difficulty_normal.append(Object.assign(document.createElement("input"), {type: "radio"}), "Normal");
				// this.elements.overlay.append(label_difficulty_normal);

				// document.body.append(this.elements.overlay);

				// 	if (!this.circles.length) return;
				// 	const pressedKey = event.key.toUpperCase();
				// 	const nextCircle = this.circles[0];
				// 	if (keys.includes(pressedKey)) {
				// 		if (nextCircle.key == pressedKey) nextCircle.catch();
				// 		else nextCircle.end("bad");
				// 	}
				// });

				// setTimeout(() => {
				// 	this.beats.push(new Beat(300, 300));
				// }, 1000);

				this.animate();
				this.setTImeline(1000, () => {
					this.next();
				});
				// setTimeout(() => {
				// 	this.next();
				// 	// setInterval(() => {
				// 	// 	this.next();
				// 	// }, 5800);
				// }, 1000);
			}

			updateScore() {
				this.elements.count_perfect.textContent = this.score.perfect;
				this.elements.count_good.textContent = this.score.good;
				this.elements.count_bad.textContent = this.score.bad;
			}

			onKeydown(event) {
				const pressedKey = event.key.toUpperCase();
				console.log("onKeyDown", pressedKey);
				if (pressedKey == "ESCAPE") {
					if (this.playing) {
						this.pause();
					} else {
						this.play();
					}
					return;
				}
				if (!this.beats.length || !this.playing) return;
				const beat = this.getCurrentBeat();
				if (!beat) return;

				const KEYS = this.options.difficulty == "hard" ? KEYS_HARD : KEYS_NORMAL;

				if (KEYS.includes(pressedKey)) {
					if (beat.key == pressedKey) {
						const size = beat.animations.outer.progress;
						if (size <= 55 && size >= 47) {
							beat.perfect();
							return;
						} else if (size <= 60 && size >= 45) {
							beat.good();
							return;
						} else {
							beat.bad();
							return;
						}
					}
					beat.bad();
					return;
				}
			}

			getCurrentBeat() {
				for (const beat of this.beats) {
					if (beat.playing) return beat;
				}
				return null;
			}

			setTImeline(delay, callback) {
				this.timeline.push({
					frame: this.frames + delay,
					callback,
				});
			}

			next() {
				this.newBeat();
				if (getRandomInt(0, 2) == 0) {
				// if (true) {
					this.setTImeline(250, () => {
						this.newBeat();
					});
				}
				this.setTImeline(5800, () => {
					this.next();
				});
			}

			newBeat(delay = 0) {
				let top = getRandomInt(0, window.innerHeight - SIZE);
				let left = getRandomInt(0, window.innerWidth - SIZE);
				const prevBeat = this.getCurrentBeat();
				if (prevBeat) {
					while (calculateDistance(top, left, prevBeat.top, prevBeat.left) < SIZE * 0.9) {
						top = getRandomInt(0, window.innerHeight - SIZE);
						left = getRandomInt(0, window.innerWidth - SIZE);
					}
				}
				const beat = new Beat({ parent: this, delay, top, left });
				
				this.beats.push(beat);
			}

			nextFrame(timestamp) {
				const elapsed = timestamp - this.lastTimestamp;
				this.lastTimestamp = timestamp;
				if (this.playing) {
					this.frames += elapsed;
					for (const timelineIdx in this.timeline) {
						const timelineItem = this.timeline[timelineIdx];
						if (this.frames >= timelineItem.frame) {
							timelineItem.callback();
							this.timeline.splice(timelineIdx, 1);
						}
					}
				}
				this.animate();
			}
			animate() {
				this.animationId = requestAnimationFrame((timestamp) => { this.nextFrame(timestamp); });
			}

			play() {
				this.playing = true;
				this.elements.overlay.classList.add("hide");
				this.elements.background_video.play();
				for (const beat of this.beats) {
					beat.play();
				}
			}
			pause() {
				this.playing = false;
				this.elements.overlay.classList.remove("hide");
				this.elements.background_video.pause();
				this.pausedTimestamp = new Date().getTime();
				for (const beat of this.beats) {
					beat.pause();
				}
			}

		}

		const BeatHelper = new Helper();
		BeatHelper.pause();