var path,boy,cash,diamonds,sword,jwellery;
var pathImg,boyImg,cashImg, diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG, diamondsG,jwelleryG, swordGroup;

//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadAnimation("gameOver.png");
}