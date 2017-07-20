var canvas;
var gl;

function start() {
    canvas = document.getElementById("glCanvas");
    initWebGL(canvas);
    if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set clear color to black, fully opaque
        gl.enable(gl.DEPTH_TEST); // Enable depth testing
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear the color as well as the depth buffer.
    }
}

function initWebGL() {
    gl = null;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'); // Try to grab the standard context. If it fails, fallback to experimental.
    } catch (e) {
        console.log(e);
    }

    if (!gl) {
        alert("Your browser may not support WebGL.");
    }
}