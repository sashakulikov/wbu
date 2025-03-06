// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARRByK3-QRN6BLv23JIPG7tUfcC3PU5Mk",
    authDomain: "sosa-test-bd8ca.firebaseapp.com",
    databaseURL: "https://sosa-test-bd8ca-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sosa-test-bd8ca",
    storageBucket: "sosa-test-bd8ca.firebasestorage.app",
    messagingSenderId: "709279438846",
    appId: "1:709279438846:web:cb0a718e5a01374dbe52af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const themeRef = ref(db, 'selectedTheme');  // Ссылка на выбранную тему

let backgroundColor = [29, 29, 29]; // Default background color
let panoramaImage;
let font;
let angleY = 0, angleX = 0;
let angleYOffset = 0, angleXOffset = 0;
let angleSpeed = 0.01;
let bgGraphics;

// Load assets
function preload() {
    font = loadFont("TimesNRCondensed.otf");
    panoramaImage = loadImage("pan5.svg"); // Default panorama
}

// Setup canvas
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    bgGraphics = createGraphics(windowWidth, windowHeight, WEBGL);
    textAlign(CENTER, CENTER);
    textFont(font);
    frameRate(30);

    // Listen for theme updates from Firebase
    onValue(themeRef, (snapshot) => {
        const theme = snapshot.val();
        updateTheme(theme);
    });
}

// Draw function
function draw() {
    background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);

    // Панорама
    angleYOffset += angleSpeed;
    angleXOffset += angleSpeed / 2;
    angleY = sin(angleYOffset) * 0.3;
    angleX = cos(angleXOffset) * 0.15;

    bgGraphics.push();
    bgGraphics.background(0);
    bgGraphics.rotateY(angleY);
    bgGraphics.rotateX(angleX);
    bgGraphics.texture(panoramaImage);
    bgGraphics.sphere(800);
    bgGraphics.pop();

    blendMode(EXCLUSION);
    image(bgGraphics, 0, 0, width, height);
    blendMode(BLEND);
}

// Update theme based on Firebase data
function updateTheme(theme) {
    if (theme && theme.backgroundColor1) {
        backgroundColor = theme.backgroundColor1; // Устанавливаем цвет фона
    }

    if (theme && theme.panorama) {
        panoramaImage = loadImage(`images/${theme.panorama}`); // Заменяем панораму
    }
}

// Resize canvas on window resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
