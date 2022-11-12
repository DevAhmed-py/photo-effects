const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillText("Canvas text!!!", 100, 50)

function uploadImage(e) {
    ReadableStream.readDataURL(e.targetfile[0]);
}