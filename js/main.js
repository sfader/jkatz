var purrA = new Audio('purr.mp3');

function wagTail()
  {
      document.getElementById("kat").src="../jkatz/ck2.png";
      purrA.play();
      window.setTimeout(wagTailBack,500);
  }

  function wagTailBack(){
    document.getElementById("kat").src="../jkatz/ck1.png";
  }