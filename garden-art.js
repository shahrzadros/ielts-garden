const gardenMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const catHop = [0, -4, -7, -9, -9, -7, -4, 0, 0, -3, -6, -7, -6, -3, 0, 0, 0, 0];
const plantSway = [0, 2, 5, 7, 5, 2, 0, -2, -5, -7, -5, -2];
let gardenHappy = false;
let gardenFrame = null;
let lastHop = 0;
let lastSway = 0;

function draw(happy) {
  gardenHappy = happy;
  paintGarden(happy, gardenMotion.matches ? 0 : lastHop, gardenMotion.matches ? 0 : lastSway);
  if (!gardenMotion.matches && gardenFrame === null) {
    gardenFrame = requestAnimationFrame(animateGarden);
  }
}

function animateGarden(time) {
  if (gardenMotion.matches) {
    gardenFrame = null;
    paintGarden(gardenHappy);
    return;
  }
  const hop = catHop[Math.floor(time / 70) % catHop.length];
  const sway = plantSway[Math.floor(time / 90) % plantSway.length];
  if (hop !== lastHop || sway !== lastSway) paintGarden(gardenHappy, hop, sway);
  gardenFrame = requestAnimationFrame(animateGarden);
}

gardenMotion.addEventListener("change", () => draw(gardenHappy));

function paintGarden(happy, hop = 0, sway = 0) {
  lastHop = hop;
  lastSway = sway;
  const canvas = el("art");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  function rect(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  function sprite(x, y, rows, palette, scale = 1, sway = 0) {
    rows.forEach((row, dy) => {
      [...row].forEach((pixel, dx) => {
        if (palette[pixel]) rect(palette[pixel], x + dx * scale + Math.round(sway * (1 - dy / (rows.length - 1))), y + dy * scale, scale, scale);
      });
    });
  }

  function sparkle(x, y, color) {
    rect(color, x + 1, y, 1, 3);
    rect(color, x, y + 1, 3, 1);
  }

  // Stepped silhouette and grass tile beneath the two characters.
  const glade = "#365e43";
  rect(glade, 24, 10, 62, 52);
  rect(glade, 18, 17, 74, 39);
  rect(glade, 12, 25, 86, 24);
  rect("#203d30", 8, 59, 94, 7);
  rect("#203d30", 13, 66, 84, 2);
  rect("#66884e", 11, 58, 88, 3);
  rect("#496b45", 17, 61, 76, 3);
  for (const [x, y] of [[10, 43], [24, 14], [46, 22], [84, 13], [96, 35]]) {
    sparkle(x, y, "#91af65");
  }
  for (const x of [18, 40, 57, 89]) {
    rect("#a3ba68", x, 57, 3, 1);
    rect("#a3ba68", x + 1, 56, 1, 1);
  }

  sprite(12, 29, [
    "..o....o......",
    ".ogg..oGGo....",
    ".ogGooGggo....",
    "..ogGGggo.....",
    "...ooGoo......",
    ".....o........",
    "..ooooooooo...",
    ".ottttttttto..",
    ".oTTTTTTTTTo..",
    "..ottktkttto..",
    "..otttptttto..",
    "...obbbbbbo...",
    "....oooooo....",
  ], {o:"#22382b", g:"#6aa04d", G:"#b9d66d", t:"#d7925e", T:"#f6ba7e", b:"#b56945", k:"#493528", p:"#f5aaa0"}, 2, sway);

  ctx.save();
  ctx.translate(0, hop);

  const outline = "#3f3028";
  const orange = "#e39850";
  const light = "#ffc879";
  const stripe = "#b46939";
  // Tail, body and paws.
  rect(outline, 78, 47, 18, 9);
  rect(outline, 91, 39, 6, 14);
  rect(outline, 88, 37, 8, 6);
  rect(orange, 80, 49, 14, 5);
  rect(orange, 92, 40, 3, 10);
  rect(light, 89, 39, 5, 3);
  rect(stripe, 88, 49, 2, 5);
  rect(outline, 49, 45, 34, 13);
  rect(outline, 46, 51, 39, 7);
  rect(outline, 48, 56, 35, 4);
  rect(orange, 48, 52, 35, 5);
  rect(orange, 51, 47, 30, 8);
  rect(light, 50, 55, 9, 3);
  rect(light, 73, 55, 9, 3);

  // Head and ears.
  rect(outline, 48, 26, 39, 20);
  rect(outline, 51, 46, 33, 4);
  rect(outline, 49, 22, 7, 11);
  rect(outline, 79, 22, 7, 11);
  rect(orange, 50, 29, 35, 15);
  rect(orange, 53, 43, 29, 5);
  rect(orange, 51, 24, 4, 7);
  rect(orange, 80, 24, 4, 7);
  rect("#eeab9c", 52, 26, 2, 4);
  rect("#eeab9c", 81, 26, 2, 4);
  rect(stripe, 50, 34, 4, 2);
  rect(stripe, 81, 34, 4, 2);
  rect(light, 58, 40, 19, 6);
  rect(light, 61, 45, 13, 2);
  rect("#98533b", 66, 41, 3, 2);
  rect(outline, 67, 43, 1, 1);
  for (const x of [57, 75]) {
    if (happy) {
      rect(outline, x + 1, 35, 3, 1);
      rect(outline, x, 36, 1, 2);
      rect(outline, x + 4, 36, 1, 2);
    } else {
      rect(outline, x + 1, 35, 2, 3);
    }
  }
  if (happy) rect(outline, 65, 44, 5, 2);

  // Red knit cap with ribbed brim, stitches and a cream pom-pom.
  const hatEdge = "#26372a";
  rect(hatEdge, 59, 14, 18, 14);
  rect(hatEdge, 56, 19, 24, 10);
  rect(hatEdge, 54, 25, 28, 6);
  rect("#a23d36", 61, 16, 14, 10);
  rect("#a23d36", 58, 21, 20, 6);
  rect("#d86653", 56, 26, 24, 3);
  for (const x of [59, 64, 69, 74]) {
    rect("#f5a18a", x, 26, 1, 2);
    rect("#cb5949", x + 2, 21, 1, 3);
  }
  rect(hatEdge, 64, 9, 8, 7);
  rect("#f4e4ab", 65, 10, 6, 4);
  rect("#fff4c8", 66, 9, 4, 3);
  rect("#c5af78", 66, 14, 4, 1);

  ctx.restore();

  if (happy) {
    for (const [x, y] of [[47, 14], [88, 18], [79, 7], [100, 48]]) {
      sparkle(x, y, "#f6d77d");
    }
  }
}

function gardenIcon(name) {
  return '<img class="pixel-icon" src="' + name + '.png" alt="" width="24" height="24">';
}
