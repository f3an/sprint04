let arr = [];
let msg = document.getElementById("mbox");
let tarea = document.getElementById("textarea");
let add = document.getElementById("add");
let cls = document.getElementById("cls");

add.addEventListener(
  "click",
  function add() {
    if (tarea.value == "") {
      alert("Textarea is empty");
      if (!document.cookie) {
        document.getElementById("mbox").innerHTML = "no cookies";
      } else {
        document.getElementById("mbox").innerHTML = document.cookie;
      }
    } else {
      arr.push( tarea.value + " ");
      document.cookie = "-->" + "" + arr + " ; max-age=3600";
      document.getElementById("mbox").innerHTML = document.cookie;
      console.log(document.cookie);
    }
  },
  false
);

cls.addEventListener(
  "click",
  function cls() {
    if (!document.cookie) {
      alert("no coookies");
    } else {
      document.cookie = "-->" + "" + arr + "; max-age=0";
      arr=[];
      console.log(document.cookie);
      document.getElementById("mbox").innerHTML = "[Empty]";
    }
  },
  false
);

console.log(document.cookie);