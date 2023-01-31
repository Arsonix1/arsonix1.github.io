<? $QUERY = $_REQUEST['q']?str_replace("\"", "", $_REQUEST['q']):date("d.m.Y");?>
<!DOCTYPE html>
<html lang="en-US">
<head>
	 <meta charset="utf-8"> 	 
	  <title>
	 	Daily videos <?=$QUERY?>
	 </title>

	<style>
		
	
		body {font-family: sans-serif; background: black; margin: 0 0 50px;}
		button {font-size:16px; border:0; color:white; margin:0 auto; display: block; border-radius: 5px; padding:10px; opacity: 0.8; transition:0.3s; cursor: pointer; min-width: 120px; margin-top: 25px; }
		button:hover{opacity: 1;}
		.content { color:black; text-align: center;  position:absolute; background: white; display: block; border-radius: 20px;}
		
		.container{ margin: 0 auto; position: relative;}
		
		.video {border-radius: 10px;}
		

		h3 {font-size: 16px;}
		
		p {font-size: 13px;}
		
		
		.img {background-size: cover; background-repeat: no-repeat; background-position: center center; border-radius: 10px;}
		

		.square .img {position: absolute; width:230px; height:230px; left: 10px; top:10px;}
		.square .img:after{position: relative; width: 230px; height: 230px; background-color: rgba(0,0,0,0.6); content: ''; display: block; border-radius: 10px;}
		.square h3{color: #fff;}
		.square .info{color: #fff; position: relative; z-index: 10; padding: 10px 20px;}
		.square button{z-index: 20; position: relative;}
		.square .info{display: table-cell;vertical-align: middle;height: 250px;}


		.big .img {width: 250px; height:250px; margin: 20px auto;}

		.vertical .img {width: 230px; height: 230px; margin:10px auto;}
		.vertical .info{display: table-cell;vertical-align: middle;height: 250px;}
	
		.horizontal {text-align: left; }
		.horizontal .img {width: 230px; height: 230px; margin: 10px; float:left; }
		.horizontal .info{display: table-cell;vertical-align: middle;height: 250px; padding-right: 15px;}


		.white {color:white;}
		.white h3 {color:white; font-size: 20px;}
		.white button {background: white; color:black;}
		
		.search{width:80%; height:50px; margin: 0 auto 10px; display: block; border-radius: 20px; border: 10px solid rgba(0,0,0,0); padding: 0 10px;outline: none; ;position: relative; box-sizing: border-box;}
		.search input{width: 99%; border: none; line-height: 26px; font-size:20px; background: rgba(0,0,0,0);  color:white;}
		.search input:focus{outline: none;}
		.icon-search{position: absolute; right: 10px; width: 28px; height: 28px; top: 0px; cursor: pointer; z-index: 10; fill:white; }
		
		
		.frame{width:80%; height: 600px; background: white; margin: 0 auto 70px; border: none; box-shadow: 0 20px 35px 1px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0,0,0,0.2); display: block; border-radius: 5px; }
		
				
			
		
		
	</style>
</head>
<body>
	
		


	<br><br>

	<div class="container setwidth" id="container1"></div>
	<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">  
	    <symbol id="icon-search" viewBox="0 0 512 512">
	      <path d="m347 238c0-36-12-66-37-91-25-25-55-37-91-37-35 0-65 12-90 37-25 25-38 55-38 91 0 35 13 65 38 90 25 25 55 38 90 38 36 0 66-13 91-38 25-25 37-55 37-90z m147 237c0 10-4 19-11 26-7 7-16 11-26 11-10 0-19-4-26-11l-98-98c-34 24-72 36-114 36-27 0-53-5-78-16-25-11-46-25-64-43-18-18-32-39-43-64-10-25-16-51-16-78 0-28 6-54 16-78 11-25 25-47 43-65 18-18 39-32 64-43 25-10 51-15 78-15 28 0 54 5 79 15 24 11 46 25 64 43 18 18 32 40 43 65 10 24 16 50 16 78 0 42-12 80-36 114l98 98c7 7 11 15 11 25z"/>
	    </symbol>
	</svg>	
	<div class="search setwidth">
		<form method="get" target="_blank" action="https://searchresults.store/search"> <input name="q" value="<?=$QUERY?>" ></form>
		<svg class="icon-search"><use xlink:href="#icon-search"></use></svg>
	</div>


	


<!-- 	<script src="https://mediapalmtree.com/v2/loader.js?_t=55824" data-ts="1674742154" data-token="dc72e925d9aa88fba1b459a68f0fd1a7ac1900cc" data-am="true" data-promo-cdn="mediapalmtree.com"></script> -->

	<br><br>

	<div class="container setwidth video" id="test"></div>
	<div class="container setwidth" id="container2"></div>
	


<script>
	
var settings = {
		size: 250,
		margin: 10,
		maxColumns: 4,
		mainColor: r(0,1),
		maxBlockWidth: 3, 
		maxBlockHeight: 2
	},  
	windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	contentColumns = Math.min(settings.maxColumns, Math.floor(windowWidth /(settings.size + settings.margin)));

 var hue2rgb = function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }
	
	function hslToRgb(h, s, l){
    	var r, g, b;

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
   
	    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}
		
	function r(a, b) {
		return (Math.random() * (b-a)) + a;
	}

	function ri(a, b) {
		return Math.round(Math.random() * (b-a)) + a;
	}

	function getRgbColor(h, s, l) {
		return 'rgb('+hslToRgb(h % 1, s || 0.5, l || 0.5).join(',')+')';
	}
	
	function getRandomGradient(hue) {
		hue = (hue || r(0, 1));
		return "linear-gradient(45deg, "+getRgbColor(hue, 0.3)+", "+getRgbColor(hue+0.05, 0.4)+")";
	}
	

	var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".search {background:"+getRandomGradient(settings.mainColor)+"} .accent { background: "+getRgbColor(settings.mainColor)+";} h3 {color: "+getRgbColor(settings.mainColor, 0.6, 0.4)+";} .accent-fill {fill: "+getRgbColor(settings.mainColor, 0.6, 0.4)+";} .setwidth{width:"+(contentColumns * (settings.size + settings.margin) - settings.margin) + "px}";
	document.body.appendChild(css);
	
	
	function contentBlock(rows, parent, columns){
	
		var layout = [],
			blockNumber = 1,
			spaceLimiter = 3,
			blocks = [],
			color = settings.mainColor,
			container = document.createElement("div");
			
		container.style.width = (columns * (settings.size + settings.margin) - settings.margin) + "px";
		container.style.height = (rows * (settings.size + settings.margin)) + "px";
		container.className = 'container';
		
		for (var y = 0; y < rows; y++) {
			layout[y] = [];
			for (var x = 0; x < columns; x++) {
				layout[y][x] = 0;
			}
		}
		
		for (var y = 0; y < rows; y++) {
			for (var x = 0; x < columns; x++) {
				if (!layout[y][x]) {
					
					var availableWidth = 0;
					for (var dx = x; dx < columns; dx++) 
						if (!layout[y][dx]) availableWidth ++;
						else break;
					
					var bw = ri(1, Math.min(settings.maxBlockWidth, availableWidth));
					var bh = ri(1, Math.min(settings.maxBlockHeight, rows - y, Math.floor(spaceLimiter / bw)));
	
					for (var dy = y; dy < y + bh; dy++ ) 				
						for (var dx = x; dx < x + bw; dx++ ) layout[dy][dx] = blockNumber;
	
	
					blocks.push({top:y, left:x, width:bw, height:bh});
	
					blockNumber++;
					
					var div = document.createElement("div");
						div.style.left = x * (settings.size + settings.margin) + "px";
						div.style.top = y * (settings.size + settings.margin) + "px";
						div.style.width = bw * settings.size + (bw - 1) * settings.margin + "px";
						div.style.height = bh * settings.size + (bh - 1) * settings.margin + "px";
					
					
					var blockStyle = 'horizontal';
	
					if (bw==1 && bh==1) {
						blockStyle = 'square'; 
					}
					else if (bw>1 && bh>1) {
						blockStyle = 'big'; 
						spaceLimiter = 3;
					}
					else if (bw == 1) {
						blockStyle = 'vertical'; 	
					}
					if (bw > 2) {
						div.style.backgroundImage = getRandomGradient(color += 0.04);
						blockStyle += ' white';
					}
					
					
					div.className = 'content '+blockStyle;
					
					var ad = advertisement[ri(0, advertisement.length - 1)];
					
					div.innerHTML += '<div class="img" style="background-image:URL('+ad.img+')"></div><div class="info"><h3>'+ad.header+'</h3><p>'+ad.text+'</p>'+ (ad.CTA?'<button class="accent">'+ad.CTA+'</button></div>':'');
					container.appendChild(div);
					
					div.onclick = function(){document.location.href = "https://searchresults.store/search?q="+ad.q;}
				}
			}
		}
		
		parent.appendChild(container);
		
	};
	
	
	
	
	//contentBlock(1, document.getElementById('container1'), contentColumns);
 	contentBlock(1, document.getElementById('container2'), contentColumns);
	
	
</script>
	
	<script src="//mediapalmtree.com/v2/loader.js?_t=55827" data-ts="1674811401" data-token="ed96124ee4e3f6e212b2a205cb8959c7b3e9ae06" data-q="<?=$QUERY?>" data-am="true" data-promo-cdn="mediapalmtree.com"></script>


	
	
</body>
</html>