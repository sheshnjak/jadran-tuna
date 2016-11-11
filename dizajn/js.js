$(document).ready(function(){
if($.browser.msie && $.browser.version < 7){$("#zaglavlje").css("position","absolute");$("#kontejner").css("margin-top","287px")}; // popravak box modela, jeba ih bilgejts
$.emajl();

$.zaglavljeSlike.ucitajSlike(); // učitaj slike za zaglavlje i nakon toga pokreni animaciju (prije toga malo pričekaj)
$(window).load(function(){window.setTimeout('window.setInterval("$.zaglavljeSlike.animacija()",8000)',500);});

if(window.location.pathname.length>2){
$('ul#navigacija>li>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').parent().addClass("active");
$('div#podnozje>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').addClass("active");}

// testis zona

});
jQuery.extend({	// stare metode prebacene u $.namespace
emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a> >>> mailto:user_name@domain
$("a.emajl").each(function(){
$(this).attr("href",$(this).attr("href").replace(/([^A]+)AT([\w]+)/,"mailto:$1@$2"));
if(!$(this).text()) $(this).text($(this).attr("href").substr(7));
});},
debag: function(msg,rplc){ // funkcija za debugiranje skripti, rplc -> zamjena poruke
rplc ? $("p:first").empty().append(msg) : $("p:first").prepend(" "+msg);},
engleski: function(){ // koji je jezik, POZIVATI KAO if($.engleski())...
if(window.location.href.indexOf("-en.")==-1) return 0;else return 1;},
zaglavljeSlike:{
	slike:new Array(1,"dizajn/s1.jpg","dizajn/s2.jpg","dizajn/s3.jpg","dizajn/s4.jpg","dizajn/s5.jpg","dizajn/s6.jpg","dizajn/s7.jpg"),
	ucitajSlike:function(){
		$.each(this.slike,function(i){
			if(i){
				$.zaglavljeSlike.slike[i] = new Image();
				$.zaglavljeSlike.slike[i].src = this;
			}
		});
	},
	animacija:function(){
		this.trenutna = this.slike[0];
		(this.trenutna==this.slike.length-1) ? this.slijedeca=1 : this.slijedeca=this.trenutna+1;
		$("#zaglavlje").css("background-image","url(dizajn/s"+this.trenutna+".jpg)");
		$("#zaglavlje>img").css("display","none").attr("src","dizajn/s"+this.slijedeca+".jpg").fadeIn(2000,function(){$.zaglavljeSlike.slike[0]=$.zaglavljeSlike.slijedeca});
	}
}
// testis zona, dodaj zarez prije nove funkcije
});
