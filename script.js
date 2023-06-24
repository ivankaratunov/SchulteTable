
function start() {
    let p = parseInt(new Date().getTime()/1000)
    let push = document.getElementById('here2').innerText=p;
    var a = [];
    for (var i = 1; i < 26; i++)
      a.push(i);
    a.sort(function() { return Math.random() - 0.5; });


    var table = $('table');
    table.empty();

    var index = 0;
    for (r = 0; r < 5; ++r) {
      var row = $('<tr>');
      for (c = 0; c < 5; ++c) {
        row.append('<td class="content" id="x'+ a[index] +'">' + '<b>'  + a[index++] + '</b>' +  '</td>');
      }
      table.append(row);
    }
    const colors = ['grey', '#FF4500'];
    var i=1;
    while (i<=25) {
       var tdid = document.getElementById('x' + i);
      var randcolor = colors[Math.floor(Math.random()*colors.length)];
       tdid.style.background = randcolor;
       i++;
    }
    var i=1
    var h = "rgb(128, 128, 128)";
    var r = "rgb(255, 69, 0)";
    while (i<=25) {
      element =  document.getElementById('x'+ i);
      color = window.getComputedStyle(element).backgroundColor;
      let cal = color;
      if (color===h) {
        element.setAttribute("col", "65");
      }
      if (color===r) {
        element.setAttribute("col", "83");
      }
      i++
}
$(".content").css({
  fontSize: "50px"
})
  } 


  $(document).keydown(function(a) {
    let dre = document.getElementById('here').innerText*1; // получаем значение ячейки
    let get2 = document.getElementById("x" + dre); // получаем элемент
    var idStr = get2.id; // Получаем id.
    let get = document.getElementById(idStr).innerText; // получаем элемент
    var b = get2.getAttribute("col"); // получаем атрибут

    if (a.keyCode == b) {
      let dat = document.getElementById('here').innerText*1;
      let curentsell = document.getElementById("x" + dat);
      $(curentsell).css('background', 'blue');
      let con = Number(dat)+Number(1);
      let finish = document.getElementById('here').innerText=con;
      let dat2 = document.getElementById('here').innerText*1;
      if (dat2===26) {
        alert("Вы выйграли!!!");
        let dob6 = document.getElementById('here2').innerText;
        let c = parseInt(new Date().getTime()/1000)
        let con = Number(c)-Number(dob6);
       let push = document.getElementById('timer').innerText = "Вы выйграли за:" + con +" секунд!!!";
      }
    }
    else {
      alert("Нет");
    }
    })