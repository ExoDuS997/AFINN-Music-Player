function song1(){
    var y = localStorage.getItem("textval");
    if(y<=-10){
        var arr = ["Bury a friend","Dreamin","Genesis","Never Too Late","Numb","One Step Closer","Platypus (I hate you)","The Way I Am","Without Me"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/angry/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/angry/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/angry/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/angry/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-10 && y<=-6){
        var arr = ["Before I Forget","The Way I Am","Cool to Hate","Don't Be Dumb","I'm So Sick","Leave Me Alone","Little Bitch","Caught Out There","One Step Closer"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/averted/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/averted/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/averted/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/averted/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-6 && y<=-2){
        var arr = ["Be Alright","Hollywood's Bleeding","Circles","Hope is a dangerous","Past Life","Shrike","Slow Burn","Sober","Walking By"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/sad/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/sad/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/sad/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/sad/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>-2 && y<=2){
        var arr = ["Don't Let Me Down","Girls Like You","Godzilla","Lily","Lose Somebody","Paris","Perfect","Senorita","Taki Taki"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/neutral/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/neutral/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/neutral/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/neutral/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else if(y>2 && y<=6){
        var arr = ["Despacito","Don't Worry Be Happy","Good Life","Happy","Hymn For The Weekend","I Gotta Feeling","Love On Top","On My Way","One Call Away"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }else{
        var arr = ["Despacito","Don't Worry Be Happy","Good Life","Happy","Hymn For The Weekend","I Gotta Feeling","Love On Top","On My Way","One Call Away"];
        var arr1 = arr.sort(() => Math.random() - Math.random()).slice(0,5);
        document.getElementById("eras").innerHTML='<div id="container" class="animat">'+		
        '<ul>'+
        '<li class="grido"><div>'+arr1[0]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[0]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[1]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[1]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[2]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[2]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
        '<li class="grido"><div>'+arr1[3]+'</div><div>...</div><div><audio controls><source src="/stylesheets/Music/English/happy/'+arr1[3]+'.mp3" type="audio/mpeg"></audio></div></li><br>'+
		'</ul>'+
	    '</div>';
    }
}