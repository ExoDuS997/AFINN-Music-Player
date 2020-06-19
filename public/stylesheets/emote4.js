function song2(){
    var y = localStorage.getItem("textval");
    if(y<=-10){
        var arr = ["Apna Time","BOLO HAR HAR","NADAAN PARINDE","Deva Shree","Jee Karda","Rock On","Sadda Haq","Zinda"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,4);
        
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-10 && y<=-6){
        var arr = ["Bulleya","Channa Mereya","Kabira","Kahin Toh Hogi","Lag Jaa Gale","Maana Ke Hum","Phir Le Aya Dil","Tujhe Bhula Diya","Karuppu Vellai"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-6 && y<=-2){
        var arr = ["Alvida","Awari","Dard Dilo Ke","Hamdard","Judaai","Saaiyaan","Samjhawan","Sun Raha Hai","Tu Hai Ki Nahin"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-2 && y<=2){
        var arr = ["Chal Ghar Chale","Dil Mein Ho Tum","Humraah","Khairiyat","Pal Pal Dil Ke","Pal","Sapna Jahan","Tera Fitoor","Thodi Jagah","Uska Hi Banana"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>2 && y<=6){
        var arr = ["Badtameez Dil","Dheeme Dheeme","First Class","Ghungroo Song","Hook Up Song","Illahi","Locha E Ulfat","Malang","Sauda Khara Khara"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else{
        var arr = ["Badtameez Dil","Dheeme Dheeme","First Class","Ghungroo Song","Hook Up Song","Illahi","Locha E Ulfat","Malang","Sauda Khara Khara"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="" type="audio/mp3"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }
}