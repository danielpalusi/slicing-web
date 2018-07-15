window.onload = function(){

    	var nama = [
    	"Daniel Panggabean",
    	"Adrian Sirait",
    	"Hendro Prabowo",
    	"Emma Hannisa",
    	"Oktaviani Siahaan",
    	"Dian Shinta",
        ];
    	var buku = [
    	["Buku Node.js Versi 1.1","Putra"],
    	["Buku Node.js Versi 1.2","Partogi"],
    	["Buku Node.js Versi 1.3","Bowo"],
    	["Buku Node.js Versi 1.4","Laurencia"],
    	["Buku Node.js Versi 1.5","Debora"],
    	["Buku Node.js Versi 1.6","Shinta"],
    	];

        var kategori = [
            "Action",
            "Adventure",
            "Romance"
        ]

        var tabBook=[
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Business : Book About Business","Business",4,100],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Science : Book About Science","Science",3,101],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Fiction : Book About Fiction","Fiction",4,102],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Philosophy : Book About Philosophy","Philosophy",5,103],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Biography : Book About Biography","Biography",4,104],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Business : Book About Business 2","Business",2,105],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Science : Book About Science Part 2","Science",4,106],
        ["http://penerbitbip.id/wp-content/uploads/2016/07/Coverdepan-Mozaik.jpg","Fiction : Book About Fiction Part 2","Fiction",3,105],
        ];
    	
    	var i;
    	var j;
        var k;
        var l;
        var m;

        var author =document.getElementById("tetew");
    	for(i=0;i< nama.length;i++)
    	{
        	author.innerHTML +='<li><span><img src=\"https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" class="wiw" alt=""></span><span>'+(nama[i])+'</span></li>';
    	};

    	var topbuku =document.getElementById("tetew2");
    	for(j=0;j< buku.length;j++){
    		topbuku.innerHTML += '<li><div class="row"><div class="col-md-3"><img src=\"https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png" class="book" alt="Some picture"></div><div class="col-md-9"><b>'+(buku[j][0])+'</b><p>by '+(buku[j][1])+'</p></div></div></li>';
    	};

        var kate =document.getElementById("kategori");
        for(k=0;k< kategori.length;k++){
            kate.innerHTML += '<a class="dropdown-item" href=\"#">'+(kategori[k])+'</a>';
        };

        var ev =document.getElementById("everythings");
        for(l=0;l< tabBook.length;l++){
            ev.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
        };

        var bu =document.getElementById("onlyBusiness");
        for(l=0;l< tabBook.length;l++){
            if (tabBook[l][2]=='Business'){
            bu.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
            }
        };

        var sc =document.getElementById("onlyScience");
        for(l=0;l< tabBook.length;l++){
            if (tabBook[l][2]=='Science'){
            sc.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
            }
        };

        var fi =document.getElementById("onlyFiction");
        for(l=0;l< tabBook.length;l++){
            if (tabBook[l][2]=='Fiction'){
            fi.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
            }
        };

        var ph =document.getElementById("onlyPhilosophy");
        for(l=0;l< tabBook.length;l++){
            if (tabBook[l][2]=='Philosophy'){
            ph.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
            }
        };

        var bi =document.getElementById("onlyBiography");
        for(l=0;l< tabBook.length;l++){
            if (tabBook[l][2]=='Biography'){
            bi.innerHTML += '<div class="col-md-6"><div class="card"><img class="card-img-top" src=\"'+(tabBook[l][0])+'" id="cimg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+(tabBook[l][1])+'</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p>Rate: '+(tabBook[l][3])+'</p><p>'+(tabBook[l][4])+' voters</p><button type="button" class="btn btn-info" onClick="like(this)">Like!</button></div></div></div>';
            }
        };


            
    };

    function like(x){
            if (x.innerHTML == 'Like!'){
                x.innerHTML = 'Yay :)';
            }
            else{
                x.innerHTML = 'Like!';
            }
    };

    function somewhere(){
            location.href = 'https://google.com';
    };