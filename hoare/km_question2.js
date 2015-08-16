// Rational number class
function Rational(whole, num, denom)
{
	this.whole = whole;
	this.num = num;
	this.denom = denom;
	this.reduce = ratReduce;
	this.reduce();
}

function ratReduce() {
	n = this.whole * this.denom + this.num;
	g = gcd(n, this.denom);
	n = n / g;
	this.denom = this.denom / g;
	this.whole = Math.floor(n/this.denom);
	this.num = n % this.denom;
}

function add(a,b) {
	c = new Rational(0,0,0);
        c.whole = a.whole + b.whole;
	c.num = a.num * b.denom + b.num * a.denom;
	c.denom = a.denom * b.denom;
	c.reduce();
	return c;
}

function sub(a,b) {
	c = new Rational(0,0,1);
	c.num = (a.whole * a.denom + a.num) * b.denom - (b.whole * b.denom + b.num) * a.denom;
	c.denom = a.denom * b.denom;
	c.reduce();
	return c;
}

function multi(a,b) {
	c = new Rational(0,0,1);
	c.num = (a.whole * a.denom + a.num)*(b.whole * b.denom + b.num);
	c.denom = a.denom * b.denom;
	c.reduce();
	return c;
}

function div(a,b) {
	c = new Rational(0,0,0);
	c.num = (a.whole * a.denom + a.num) * b.denom;
	c.denom = a.denom * (b.whole * b.denom + b.num);
	c.reduce;
	return c;
}

// Functions for kidsmath
function getCookie(cookie)
{
	  var results = document.cookie.match ( '(^|;) ?' + cookie + '=([^;]*)(;|$)' );
	    if ( results ) {
	        return ( unescape ( results[2] ) );
	    } else {
	          return null;
	    }
}

function randNum(l,h) {
  return Math.floor(Math.random()*(h-l+1))+l;
}

function showStuff(ele) {
	ele.style.display="inline";
}

function hideStuff(ele) {
	ele.style.display="none";
}

function gcd(a,b) {
  var x = a;
  var y = b;
  var r;
  while (y !=0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
}

function isNumber(field) {
    var re = /^[0-9]+$/;
    return (re.test(field));
}

function loadQuestion(a, b) {
  var q1w = document.getElementById("q1w");
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2w = document.getElementById("q2w");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var a1w = document.getElementById("a1w");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");
  q1w.value = a.whole;
  q1n.value = a.num;
  q1d.value = a.denom;
  if (a.denom == 1) {
    showStuff(q1w);
    hideStuff(q1n);
    hideStuff(q1d);
    q1w.value = 0;
    q1n.value = " ";
    q1d.value = " ";
    q1div.value = "";
  } else if (a.whole == 0) {
    hideStuff(q1w);
    q1w.value = " ";
  }
  q2w.value = b.whole;
  q2n.value = b.num;
  q2d.value = b.denom;
  if (b.whole == 0) {
    hideStuff(q2w);
    q2w.value = " ";
  }
  if (b.denom == 1) {
    showStuff(q2w);
    hideStuff(q2n);
    hideStuff(q2d);
    q2w.value = 0;
    q2n.value = " ";
    q2d.value = " "
    q2div.value = " ";
  } else if (b.whole == 0) {
    hideStuff(q2w);
    q2w.value = " ";
  }
  a1w.value = "";
  a1n.value = "";
  a1d.value = "";
  a1div.value = "\u2015";
}

function showWhole() {
  var q1w = document.getElementById("q1w");
  var q2w = document.getElementById("q2w");
  var a1w = document.getElementById("a1w");
  
  showStuff(q1w); 
  showStuff(q2w);
  showStuff(a1w);
}

function hideWhole() {
  var q1w = document.getElementById("q1w");
  var q2w = document.getElementById("q2w");
  var a1w = document.getElementById("a1w");

  hideStuff(q1w);
  hideStuff(q2w);
  showStuff(a1w);
}

function showFrac() {
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");

  showStuff(q1n); showStuff(q1d); showStuff(q1div);
  showStuff(q2n); showStuff(q2d); showStuff(q2div);
  showStuff(a1n); showStuff(a1d); showStuff(a1div);
}

function hideFrac() {
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");

  hideStuff(q1n); hideStuff(q1d); hideStuff(q1div);
  hideStuff(q2n); hideStuff(q2d); hideStuff(q2div);
  hideStuff(a1n); hideStuff(a1d); hideStuff(a1div);

}

function makeAddWhole() { 
  var qop = document.getElementById("qop");
  showWhole();
  hideFrac();
  q1 = new Rational(randNum(0,9), 0, 1);
  q2 = new Rational(randNum(0,9), 0, 1);
  loadQuestion(q1, q2);
  qop.value = "+";
}

function makeAddSimple() { 
  var qop = document.getElementById("qop");
  hideWhole();
  showFrac();
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(0, n, d);
  d=randNum(2,9);
  n=randNum(1,d-1);
  q2 = new Rational(0, n, d);
  loadQuestion(q1, q2);
  qop.value = "+";
}

function makeAddCompound() { 
  var qop = document.getElementById("qop");
  showWhole();
  showFrac();
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(randNum(0,9), n, d);
  d=randNum(2,9);
  n=randNum(1,d-1);
  q2 = new Rational(randNum(0,9), n, d);
  loadQuestion(q1, q2);
  qop.value = "+";
}

function makeMultiWhole() { 
  var qop = document.getElementById("qop");
  showWhole();
  hideFrac();
  var q1 = new Rational(randNum(0,9), 0, 1);
  var q2 = new Rational(randNum(0,9), 0, 1);
  loadQuestion(q1, q2);
  qop.value = "\u00d7";

}

function makeMultiSimple() { 
  var qop = document.getElementById("qop");
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(0, n, d);
  hideWhole();
  showFrac();
  d=randNum(2,9);
  n=randNum(1,d-1);
  q2 = new Rational(0, n, d);
  loadQuestion(q1, q2);
  qop.value = "\u00d7";
}

function makeMultiCompound() { 
  var qop = document.getElementById("qop");
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(randNum(0,9), n, d);
  showWhole();
  showFrac();
  d=randNum(2,9);
  n=randNum(1,d-1);
  q2 = new Rational(randNum(0,9), n, d);
  loadQuestion(q1, q2);
  qop.value = "\u00d7";

}

function makeSubWhole() { 
  var qop = document.getElementById("qop");
  showWhole();
  hideFrac();
  var w=randNum(0,9);
  var d=1;
  var n=0;
  var q1 = new Rational(w, n, d);
  w=randNum(0,9);
  d=1;
  n=0;
  var q2 = new Rational(w, n, d);
  q = sub(q1, q2);
  if (q.whole < 0 || q.num < 0 || q.denom < 0) {
      var tmp = q1;
      q1 = q2;
      q2 = tmp;
  }
  loadQuestion(q1, q2);
  qop.value = "-";

}

function makeSubSimple() {
  var qop = document.getElementById("qop");
  hideWhole();
  showFrac();
  var w=0;
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(w, n, d);
  var w=0;
  d=randNum(2,9);
  n=randNum(1,d-1);
  var q2 = new Rational(w, n, d);
  q = sub(q1, q2);
  if (q.whole < 0 || q.num < 0 || q.denom < 0) {
      var tmp = q1;
      q1 = q2;
      q2 = tmp;
  }
  loadQuestion(q1, q2);
  qop.value = "-";
}

function makeSubCompound() {
  var qop = document.getElementById("qop");
  showWhole();
  showFrac();
  var w=randNum(0,9);
  var d=randNum(2,9);
  var n=randNum(1,d-1);
  var q1 = new Rational(w, n, d);
  w=randNum(0,0);
  d=randNum(2,9);
  d=randNum(2,9);
  n=randNum(1,d-1);
  var q2 = new Rational(w, n, d);
  q = sub(q1, q2);
  if (q.whole < 0 || q.num < 0 || q.denom < 0) {
      var tmp = q1;
      q1 = q2;
      q2 = tmp;
  }
  loadQuestion(q1, q2);
  qop.value = "-";
}
/*
function makeDivWhole() { 
  var q1w = document.getElementById("q1w");
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2w = document.getElementById("q2w");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var qop = document.getElementById("qop");
  var a1w = document.getElementById("a1w");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");

  showStuff(q1w); hideStuff(q1n); hideStuff(q1d); hideStuff(q1div);
  showStuff(q2w); hideStuff(q2n); hideStuff(q2d); hideStuff(q2div);
  showStuff(a1w); showStuff(a1n); showStuff(a1d); showStuff(a1div);
  q1w.value = randNum(0,9);
  q1n.value = 0;
  q1d.value = 1;
  q2w.value = randNum(1,9);
  q2n.value = 0;
  q2d.value = 1;
  a1w.value = 0;
  a1n.value = 0;
  a1d.value = 1;
  qop.value = "\u00f7";
}

function makeDivSimple() { 
  var q1w = document.getElementById("q1w");
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2w = document.getElementById("q2w");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var qop = document.getElementById("qop");
  var a1w = document.getElementById("a1w");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");

  hideStuff(q1w); showStuff(q1n); showStuff(q1d); showStuff(q1div);
  hideStuff(q2w); showStuff(q2n); showStuff(q2d); showStuff(q2div);
  showStuff(a1w); showStuff(a1n); showStuff(a1d); showStuff(a1div);
  q1w.value = 0;
  q1d.value = randNum(2,9);
  q1n.value = randNum(1,q1d.value-1);
  q2w.value = 0;
  q2d.value = randNum(2,9);
  q2n.value = randNum(1,q2d.value-1);
  a1w.value = 0;
  a1n.value = 0;
  a1d.value = 1;
  qop.value = "\u00f7";

}

function makeDivCompound() { 
  var q1w = document.getElementById("q1w");
  var q1n = document.getElementById("q1n");
  var q1d = document.getElementById("q1d");
  var q1div = document.getElementById("q1div");
  var q2w = document.getElementById("q2w");
  var q2n = document.getElementById("q2n");
  var q2d = document.getElementById("q2d");
  var q2div = document.getElementById("q2div");
  var qop = document.getElementById("qop");
  var a1w = document.getElementById("a1w");
  var a1n = document.getElementById("a1n");
  var a1d = document.getElementById("a1d");
  var a1div = document.getElementById("a1div");

  showStuff(q1w); showStuff(q1n); showStuff(q1d); showStuff(q1div);
  showStuff(q2w); showStuff(q2n); showStuff(q2d); showStuff(q2div);
  showStuff(a1w); showStuff(a1n); showStuff(a1d); showStuff(a1div);
  q1w.value = randNum(0,9);
  q1d.value = randNum(2,9);
  q1n.value = randNum(1,q1d.value-1);
  q2w.value = randNum(0,9);
  q2d.value = randNum(2,9);
  q2n.value = randNum(1,q2d.value-1);
  a1w.value = 0;
  a1n.value = 0;
  a1d.value = 1;
  qop.value = "\u00f7";

}

*/
function makeQuestion() {
	switch (randNum(0,8)) {
		case 0: makeAddWhole();
			break;
		case 1: makeAddSimple();
			break;
	        case 2: makeAddCompound();
			break;
	        case 3: makeMultiWhole();
			break;
	        case 4: makeMultiSimple();
			break;
	        case 5: makeMultiCompound();
			break;
	        case 6: makeSubWhole();
			break;
	        case 7: makeSubSimple();
			break;
	        case 8: makeSubCompound();
			break;
/*	        case 9: makeDivWhole();
			break;
	        case 10: makeDivSimple();
			break;
	        case 11: makeDivCompound();
			break; */
	}

        var ques = document.getElementById("ques");
        ques.value++;
	document.getElementById("a1w").select();
}

function checkAnswer() {
  
  var q1w = Number(document.getElementById("q1w").value);
  var q1n = Number(document.getElementById("q1n").value);
  var q1d = Number(document.getElementById("q1d").value);
  (q1w == " ") && (q1w = 0);
  (q1n == " ") && (q1n = 0) ;
  (q1d == " ") && (q1d = 1) ;
  var q1 = new Rational(q1w, q1n, q1d);
  var q2w = Number(document.getElementById("q2w").value);
  var q2n = Number(document.getElementById("q2n").value);
  var q2d = Number(document.getElementById("q2d").value);
  (q2w == " ") && (q2w = 0);
  (q2n == " ") && (q2n = 0);
  (q2d == " ") && (q2d = 1);
  var q2 = new Rational(q2w, q2n, q2d);
  var a1w = Number(document.getElementById("a1w").value);
  var a1n = Number(document.getElementById("a1n").value);
  var a1d = Number(document.getElementById("a1d").value);
  var a1div = Number(document.getElementById("a1div"));
  (a1w == "") && (a1w = 0);
  (a1n == "") && (a1div.value = "");
  (a1n == "") && (a1n = 0);
  (a1d == "") && (a1d = 1);
  
  var a1 = new Rational(a1w, a1n, a1d);
  var qop = document.getElementById("qop").value;
  if (!(isNumber(a1w) && isNumber(a1n) && isNumber(a1d))) {
      alert("Invalid numeric entered " + a1w + " " + a1n + "/" + a1d + "\n" +
            "Try again");
      tries = document.getElementById("try");
      tries.value++;
      return false;
  }
  switch (qop) {
	  case "+":
	    q = add(q1, q2);
	    break;
          case "\u00d7":
	    q = multi(q1, q2);
	    break;
	  case "-":
	    q = sub(q1, q2);
	    break;
//	  case "\u00f7":
//            qn = q1n * q2d;
//	    qd = q1d * q2n;
//	    break; 
  }
  if ( (a1.whole == q.whole) && (a1.num == q.num) && (a1.denom == q.denom)) {
      right = document.getElementById("right");
      right.value++;
      wrong = document.getElementById("wrong");
      alert("Good answer!!\n" +
            "You answered " + a1w + " " + a1n + "/" + a1d + "\n" +
	    "The reduced answer is " + q.whole + " " + q.num + "/" + q.denom + "\n" +
	    "That's now:\n" + 
            right.value + " right\n" +
            wrong.value + " wrong\n" );
      makeQuestion();
      return true;
  } else {
      right = document.getElementById("right");
      wrong = document.getElementById("wrong");
      wrong.value++;
      alert("Bad answer!!\n" +
            "You answered " + a1w + " " + a1n + "/" + a1d + "\n" +
	    "The the correct answer (in reduced form) is \n" + 
	    q.whole + " " + q.num + "/" + q.denom + "\n" +
	    "That's now:\n" + 
            right.value + " right\n" +
            wrong.value + " wrong\n" );
      makeQuestion();
      return true;
  } 
}

function play() {
        var base = document.getElementById("base");
        var name_field = document.getElementById("name");
	var re = /(.*)\/km_question2.html/;
	var bn = "".concat(parent.location);
	base.value = bn.replace(re, "$1");
	var name = getCookie("name");
       	name_field.value = name;
	name_field.size = name.length;
	makeQuestion();
}

function quit() {
	if (!confirm("Do you really want to quit?")) {
		return false;
	}
	var ques = document.getElementById("ques");
	ques.value--;
        var form  = document.getElementById("form");
	form.submit();
}

