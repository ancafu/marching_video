var video;
var play;
var pause;
var volume;
var slower;
var faster;
var skip;
var mute;
var slider;
var vintage;
var orig;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window")
});

document.addEventListener("DOMContentLoaded", function() {
	video = document.getElementById("player1");
    play = document.getElementById("play");
    pause = document.getElementById("pause");
	volume = document.getElementById("volume");
	slower = document.getElementById("slower");
	faster = document.getElementById("faster");
	skip = document.getElementById("skip");
	mute = document.getElementById("mute");
	slider = document.getElementById("slider");
	vintage = document.getElementById("vintage");
	orig = document.getElementById("orig");

    play.addEventListener("click", function() {
        video.play();
		volume.textContent = video.volume * 100 + "%";
        console.log("Play Video");
    });

    pause.addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

	slower.addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("Video Speed (Slow Down): " + video.playbackRate);
	})

	faster.addEventListener("click", function() {
		video.playbackRate/= 0.9;
		console.log("Video Speed(Speed Up): " + video.playbackRate);
	})

	skip.addEventListener("click", function() {
		var skippedTime = video.currentTime += 10;
		if (skippedTime > video.duration) {
			video.currentTime = 0;
		}
		else {
			video.currentTime = skippedTime;
		}
		console.log("Video Length: " + video.currentTime + " seconds");
	})

	mute.addEventListener("click", function() {
		video.muted = !video.muted;
		if (video.muted) {
			mute.textContent = "Unmute";
			console.log("Muted Video");
		}
		else {
			mute.textContent = "Mute";
			console.log("Unmuted Video");
		}
	})

	slider.addEventListener("input", function() {
		video.volume = slider.value / 100
		volume.textContent = slider.value + "%";
		console.log("Video Volume: " + slider.value + "%");
	})

	vintage.addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Old School Version");
	})

	orig.addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Original Version");
	})
});

