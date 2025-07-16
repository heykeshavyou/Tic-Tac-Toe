<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
  </head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Finger+Paint&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rufina:wght@400;700&display=swap" rel="stylesheet">
  <style>
    *{
      font-family: "Finger Paint", sans-serif;
    }

    .main {
      display: flex;
      width: 470px;
      flex-wrap: wrap;
    }
    .class {
      width: 150px;
      height: 150px;
      font-size: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .bottom{
      border-bottom: 5px solid black;
    }
    .top{
      border-top: 5px solid black;
    }
    .right{
      border-right: 5px solid black;
    }
    .left{
      border-left: 5px solid black;
    }

  </style>
  <body>
    <h1 style="text-align: center;"> Tic Tac Toe</h1>
    <div style="display: grid; place-content: center; height: 70vh">
      <div class="main">
        <div class="class right bottom"   id="1" onclick="Filler(1)"></div>
        <div class="class left right bottom" id="2" onclick="Filler(2)"></div>
        <div class="class left  bottom" id="3" onclick="Filler(3)"></div>
        <div class="class right top  bottom" id="4" onclick="Filler(4)"></div>
        <div class="class left right top  bottom" id="5" onclick="Filler(5)"></div>
        <div class="class left  top  bottom" id="6" onclick="Filler(6)"></div>
        <div class="class right top " id="7" onclick="Filler(7)"></div>
        <div class="class left right top " id="8" onclick="Filler(8)"></div>
        <div class="class left top " id="9" onclick="Filler(9)"></div>
      </div>
    </div>
     <h1 style="text-align: center;" id="win"></h1> 
     <button onclick="Restart()" style="padding: 10px 20px 10px 20px; background: rgb(38, 168, 219); border: 0;border-radius: 10px;">Restart</button>
    <script src="./Tictactoe.js"></script>
  </body>
</html>
