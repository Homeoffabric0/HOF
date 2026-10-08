(function(){
  var WA='https://wa.me/2348087674813?text=';

  function wa(msg){
    return WA+encodeURIComponent(msg);
  }

  function esc(s){
    return String(s).replace(/[&<>"]/g,function(c){
      return {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;'
      }[c];
    });
  }

  /* =========================================================
     HOF — HOME OF FABRIC
     PRODUCT CATALOGUE
     ========================================================= */

  var IMG_DIR='products/fabrics/';

  var fabrics=[

  {
    n:'Mr. Fendi',
    p:'₦4,500',
    u:'yard',
    c:'Fabrics',
    img:[
      '0a33cbdc-2e1d-4f6e-98c4-937ec276c8d0.jpeg',
      '0f46adae-d82d-431b-80cf-df8c51d07349.jpeg',
      '5ff9bded-a8c2-4994-949f-f8ca4b3e3103.jpeg',
      '7a1a054a-dbf3-4189-9f14-1d8a3c83522e.jpeg',
      '8b2ce98a-7a5e-4287-93ad-e06d45d6c3c3.jpeg',
      '926bcce8-1117-4bad-93c8-a79f7606686c.jpeg',
      'b8a8bf51-7c44-499b-9f5e-e794bb70b10c.jpeg'
    ]
  },

  {
    n:'Phanta Plus',
    p:'₦5,500',
    u:'yard',
    c:'Fabrics',
    img:[
      '01b7bc6d-68d8-4915-a795-59bc6dbd6c66.jpeg',
      '0cd51af6-0040-4923-b224-3fb02b8a4510.jpeg',
      '533d7f2d-d9f8-470e-bd49-024f6d1b5ce1.jpeg',
      'b5b62d5f-b4a8-4c7b-a263-e81de439e01c.jpeg',
      'ced7fb43-5989-4d37-adac-9d50d785678f.jpeg',
      'd1900077-1abe-4701-a4be-1d6a4fed6764.jpeg',
      'f08b7fb2-a416-45eb-9e5b-e4f72908db9a.jpeg',
      'f5803ace-4ca9-4e26-9480-0bbcc2c1ce03.jpeg',
      'f7e5b68a-eab2-4c27-b99c-4ac33fa8f6dc.jpeg',
      'fbe3da1f-60e4-4417-bf53-c4dcf4461f99.jpeg',
      'ffc2e686-1408-46d7-b744-ae3934819a99.jpeg'
    ]
  },

  {
    n:'Supreme Longhua',
    p:'₦3,700',
    u:'yard',
    c:'Fabrics',
    img:[
      '27f6fb66-a40c-48f9-8f5e-cadc3d44cf0c.jpeg',
      '04f38d22-38b4-408e-a574-d734911db6db.jpeg',
      '3512b08e-314e-4b95-8160-705a705a332c.jpeg',
      '59d206e7-ef36-4de1-bd65-ced9bcf1c33f.jpeg'
    ]
  },

  {
    n:'Wagambari',
    p:'₦30,000',
    u:'5-yard set',
    d:'Traditional men\'s fabric, supplied as a 5-yard set.',
    c:'Wagambari',
    img:[
      '12f09750-4c2f-4525-b568-d83e49d6c67d.jpeg',
      '73307f85-0d62-4bc9-9dd3-c8abf27992b2.jpeg',
      'c0a42112-daad-4d7a-9b8f-b8ec05aca145.jpeg'
    ]
  },

  {
    n:'Excelsior',
    p:'₦3,800',
    u:'yard',
    c:'Fabrics',
    img:[
      'f955dc00-e2d5-4063-8bc6-8db54fc95919.jpeg',
      '92d1cdae-53bf-4baa-b762-2158c1da7c3e.jpeg',
      '56bf07d0-14c2-44d8-af9d-541f447c98d3.jpeg'
    ]
  },

  {
    n:'Goods Will',
    p:'₦3,800',
    u:'yard',
    c:'Fabrics',
    img:[
      'dcb99a46-af61-4769-8657-2374797a9d55.jpeg',
      '91569b1e-4893-4964-af21-0e9797dd3a0a.jpeg',
      'f7533c93-561e-42c2-a55a-324efb0ed811.jpeg'
    ]
  },

  {
    n:'Casacada by Mhood',
    p:'₦4,500',
    u:'yard',
    c:'Fabrics',
    img:[
      '4e43461d-5b59-4c2f-9862-392607783c17.jpeg',
      'b2d25623-2da6-403a-a9d4-e80c13a1937d.jpeg',
      'a244258d-9930-48b0-9b5a-5f46b52783f3.jpeg'
    ]
  },

  {
    n:'Oliva',
    p:'₦4,000',
    u:'yard',
    c:'Fabrics',
    img:[
      'acda9fee-d330-4236-a00a-b9c33fcb3586.jpeg',
      '8a28a35e-14c7-45dd-b6f3-b2a6324b8a46.jpeg',
      'a0eb8619-13cc-4bff-9b0c-bd3a1f0c4f9b.jpeg'
    ]
  },

  {
    n:'Trevita',
    p:'₦4,000',
    u:'yard',
    c:'Fabrics',
    img:[
      '158153ca-1802-4963-b3c5-ebe39dcd0611.jpeg',
      '575ad282-d4b4-49a4-963b-dd5977b0c71f.jpeg',
      'c74dd1ab-0bcd-42e2-87bb-263364bd01a8.jpeg'
    ]
  },

  {
    n:'Turkish Wool',
    p:'₦11,500',
    u:'yard',
    d:'Wool fabric for refined tailoring.',
    c:'Fabrics',
    img:[
      'b2def7dd-4815-43b6-800a-cabf775b9143.jpeg',
      '4e66d369-c72b-40b8-af99-77bfef461b8b.jpeg',
      '89322bd9-7a3b-407c-9b19-258d632d8252.jpeg'
    ]
  },

  {
    n:'Yak Wool',
    p:'₦13,500',
    u:'yard',
    d:'Wool fabric from our premium range.',
    c:'Fabrics',
    img:[
      '4821145a-eba2-4978-833e-bdca3160b61d.jpeg',
      '5767b311-a8b4-4a93-a704-6963ea99ea4e.jpeg',
      'c1ba8974-1a60-4da2-ac7b-2cd80098ef2f.jpeg',
      'd67b7729-aaab-4d09-bd3e-c9b3b6b3f583.jpeg'
    ]
  },

  {
    n:'VIP Ultimate',
    p:'₦7,000',
    u:'yard',
    d:'A premium selection for distinguished dressing.',
    c:'Fabrics',
    img:[
      '7a632124-9ed9-4d62-b536-c6002134f0fb.jpeg',
      'ad31e554-d1e9-4b20-b3ff-4c4a4b9cf839.jpeg',
      'da40dc4a-d45f-47cb-99bc-6edbb18dc325.jpeg'
    ]
  }

];


  /* =========================================================
     CAPS
     ========================================================= */

  var caps=[
    {
      n:'Zeeta',
      c:'Men\'s Caps'
    },
    {
      n:'Eleganza',
      c:'Men\'s Caps'
    },
    {
      n:'Dara',
      c:'Men\'s Caps'
    },
    {
      n:'Zanna',
      c:'Men\'s Caps'
    },
    {
      n:'Tangaran',
      c:'Men\'s Caps'
    },
    {
      n:'Kindai Miyamar Borno',
      c:'Men\'s Caps'
    }
  ];


  /* =========================================================
     NEW ARRIVALS
     ========================================================= */

  var arrivals=[];


  /* =========================================================
     PRODUCT CARD SYSTEM
     ========================================================= */

  var pats=[
    'twill',
    'stripe',
    'rib',
    'basket',
    'herring',
    'dot'
  ];

  var registry={};
  var uid=0;


  function makeCard(item){

    var id='p'+(uid++);

    registry[id]=item;

    var pat=pats[uid%pats.length];

    var price=item.p
      ? '<span class="price">'+esc(item.p)+'</span>'
        +(item.u
          ? '<span class="unit"> / '+esc(item.u)+'</span>'
          : '')
      : '<span class="ask">Price on request</span>';

    var msg=
      'Hello HOF, I am interested in '+item.n+
      '. Please send me more details and availability.';

    var hasImage=item.img && item.img.length;

    var visual='';

    if(hasImage){

      var firstImage=esc(imgSrc(item.img[0]));

      visual=
        '<span class="sw has-product-image">'
        +'<img src="'+firstImage+'" alt="'+esc(item.n)+' — HOF Home of Fabric" loading="lazy" decoding="async">'
        +'</span>';

    }else{

      visual=
        '<span class="sw">'
        +'<svg aria-hidden="true" focusable="false">'
        +'<rect width="100%" height="100%" fill="url(#p-'+pat+')"/>'
        +'</svg>'
        +'</span>';

    }

    return(
      '<div class="pc rv" style="--d:'+((uid%8)*35)+'ms">'

      +'<button type="button" class="pc-trigger" data-id="'+id+'" aria-label="View details: '+esc(item.n)+'">'

      +visual

      +'<span class="pc-body">'

      +'<span class="pc-name">'+esc(item.n)+'</span>'

      +(item.d
        ? '<span class="pc-desc">'+esc(item.d)+'</span>'
        : '')

      +price

      +'<span class="avail">'
      +(item.tag
        ? esc(item.tag)
        : 'Confirm availability on WhatsApp')
      +'</span>'

      +'</span>'

      +'</button>'

      +'<a class="order" href="'+wa(msg)+'" target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp: '+esc(item.n)+'">'
      +'Order on WhatsApp'
      +'</a>'

      +'</div>'
    );
  }


  function fillGrid(id,list){

    var el=document.getElementById(id);

    if(el){
      el.innerHTML=list.map(makeCard).join('');
    }

  }


  fillGrid('capGrid',caps);
  fillGrid('arrivalGrid',arrivals);


  /* =========================================================
     FABRIC SEARCH + CATEGORY FILTER
     ========================================================= */

  var cats=[
    'All',
    'Fabrics',
    'Lace',
    'Voil',
    'Atiku',
    'Swiss',
    'Getzner',
    'Shadda',
    'Wagambari'
  ];

  var chipsEl=document.getElementById('fabricChips');

  if(chipsEl){

    chipsEl.innerHTML=cats.map(function(c,i){

      return(
        '<button type="button" class="chip" data-cat="'+esc(c)+'" aria-pressed="'+
        (i===0?'true':'false')+
        '">'+esc(c)+'</button>'
      );

    }).join('');

  }


  var activeCat='All';
  var query='';


  function renderFabrics(){

    var list=fabrics.filter(function(f){

      var matchCat=
        activeCat==='All' ||
        f.c===activeCat;

      var hay=(
        f.n+' '+
        (f.d||'')+' '+
        f.c
      ).toLowerCase();

      var matchQuery=
        !query ||
        hay.indexOf(query)>-1;

      return matchCat && matchQuery;

    });


    var grid=document.getElementById('fabricGrid');
    var empty=document.getElementById('fabricEmpty');

    if(grid){

      grid.innerHTML=list.map(makeCard).join('');

    }

    if(empty){

      empty.hidden=list.length>0;

    }

  }


  renderFabrics();


  if(chipsEl){

    chipsEl.addEventListener('click',function(e){

      var b=e.target.closest('.chip');

      if(!b)return;

      chipsEl.querySelectorAll('.chip').forEach(function(c){

        c.setAttribute('aria-pressed','false');

      });

      b.setAttribute('aria-pressed','true');

      activeCat=b.getAttribute('data-cat');

      renderFabrics();

    });

  }


  var searchInput=document.getElementById('fabricSearch');

  if(searchInput){

    searchInput.addEventListener('input',function(){

      query=
        searchInput.value
        .trim()
        .toLowerCase();

      renderFabrics();

    });

  }


  /* =========================================================
     SHOP BY CATEGORY
     ========================================================= */

  var catMaster=[

    {
      label:'Fabrics',
      key:'Fabrics',
      target:'fabrics'
    },

    {
      label:'Lace',
      key:'Lace',
      target:'fabrics'
    },

    {
      label:'Voil',
      key:'Voil',
      target:'fabrics'
    },

    {
      label:'Atiku',
      key:'Atiku',
      target:'fabrics'
    },

    {
      label:'Swiss',
      key:'Swiss',
      target:'fabrics'
    },

    {
      label:'Getzner',
      key:'Getzner',
      target:'fabrics'
    },

    {
      label:'Shadda',
      key:'Shadda',
      target:'fabrics'
    },

    {
      label:'Wagambari',
      key:'Wagambari',
      target:'fabrics'
    },

    {
      label:'Men\'s Caps',
      key:'Men\'s Caps',
      target:'caps'
    }

  ];


  var sbcEl=document.getElementById('sbcIndex');


  if(sbcEl){

    sbcEl.innerHTML=catMaster.map(function(cat){

      var count=
        cat.target==='caps'
        ? caps.length
        : fabrics.filter(function(f){
            return f.c===cat.key;
          }).length;

      var countLabel=
        count>0
        ? count+(count===1?' piece':' pieces')
        : 'Ask on WhatsApp';

      return(
        '<button type="button" class="sbc-row" data-key="'+
        esc(cat.key)+
        '" data-target="'+
        cat.target+
        '">'

        +'<span class="sbc-name">'+
        esc(cat.label)+
        '</span>'

        +'<span class="sbc-meta">'

        +'<span class="sbc-count">'+
        esc(countLabel)+
        '</span>'

        +'<span class="sbc-arrow" aria-hidden="true">&rarr;</span>'

        +'</span>'

        +'</button>'
      );

    }).join('');


    sbcEl.addEventListener('click',function(e){

      var row=e.target.closest('.sbc-row');

      if(!row)return;

      var key=row.getAttribute('data-key');
      var target=row.getAttribute('data-target');


      if(target==='caps'){

        var capsSection=document.getElementById('caps');

        if(capsSection){

          capsSection.scrollIntoView({
            behavior:'smooth',
            block:'start'
          });

        }

        return;

      }


      activeCat=key;
      query='';

      if(searchInput){
        searchInput.value='';
      }

      renderFabrics();


      if(chipsEl){

        chipsEl.querySelectorAll('.chip').forEach(function(c){

          c.setAttribute(
            'aria-pressed',
            c.getAttribute('data-cat')===key
            ? 'true'
            : 'false'
          );

        });

      }


      var fabricSection=document.getElementById('fabrics');

      if(fabricSection){

        fabricSection.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });

      }

    });

  }


  /* =========================================================
     PRODUCT DETAIL MODAL
     ========================================================= */

  var backdrop=
    document.getElementById('modalBackdrop');

  var lastFocus=null;

  var gal=null;

  var reduceMotion=
    window.matchMedia(
      '(prefers-reduced-motion:reduce)'
    );


  var closeBtn=
    '<button type="button" class="modal-close" id="modalClose" aria-label="Close">&times;</button>';


  function imgSrc(f){

    return f.indexOf('/')>-1
      ? f
      : IMG_DIR+f;

  }


  function patternSwatch(){

    var pat=
      pats[
        Math.floor(
          Math.random()*pats.length
        )
      ];

    return(
      '<svg aria-hidden="true" focusable="false">'
      +'<rect width="100%" height="100%" fill="url(#p-'+pat+')"/>'
      +'</svg>'
    );

  }


  /* =========================================================
     GALLERY
     ========================================================= */

  function galSync(){

    if(!gal)return;

    var c=gal.track.children.length;

    var w=gal.track.clientWidth;

    if(!c || !w)return;

    var i=Math.max(
      0,
      Math.min(
        c-1,
        Math.round(
          gal.track.scrollLeft/w
        )
      )
    );

    gal.i=i;

    if(gal.count){

      gal.count.textContent=
        (i+1)+' / '+c;

    }

    if(gal.thumbs){

      [].forEach.call(
        gal.thumbs.children,
        function(b,k){

          b.setAttribute(
            'aria-current',
            k===i?'true':'false'
          );

        }
      );

    }

  }


  function galStep(d){

    if(!gal)return;

    galGo(
      (gal.pend!=null
        ? gal.pend
        : gal.i
      )+d
    );

  }


  function galGo(n){

    if(!gal)return;

    var c=
      gal.track.children.length;

    if(c<2)return;

    n=(n+c)%c;

    gal.pend=n;

    clearTimeout(gal.pt);

    gal.pt=setTimeout(function(){

      if(gal){
        gal.pend=null;
      }

    },700);


    gal.track.scrollTo({

      left:
        n*gal.track.clientWidth,

      behavior:
        reduceMotion.matches
        ? 'auto'
        : 'smooth'

    });

  }


  function galRefresh(){

    if(!gal)return;

    var c=
      gal.track.children.length;

    var multi=c>1;


    if(gal.thumbs){

      gal.thumbs.hidden=!multi;

      [].forEach.call(
        gal.thumbs.children,
        function(b,k){

          b.setAttribute(
            'data-i',
            k
          );

          b.setAttribute(
            'aria-label',
            'Show photo '+(k+1)
          );

        }
      );

    }


    [].forEach.call(
      document.querySelectorAll(
        '#modalSwatch .gal-nav,#modalSwatch .gal-count'
      ),
      function(el){

        el.hidden=!multi;

      }
    );


    galSync();

  }


  function buildGallery(item){

    var sw=
      document.getElementById(
        'modalSwatch'
      );

    if(!sw)return;


    var th=
      document.getElementById(
        'modalThumbs'
      );


    /*
      If modalThumbs doesn't exist in index.html,
      create it automatically.
    */

    if(!th){

      th=document.createElement('div');

      th.id='modalThumbs';

      th.className='modal-thumbs';

      sw.parentNode.insertBefore(
        th,
        sw.nextSibling
      );

    }


    gal=null;

    th.hidden=true;

    th.innerHTML='';


    var files=
      (item.img||[]).filter(Boolean);


    /* No images */

    if(!files.length){

      sw.innerHTML=
        patternSwatch()+
        closeBtn;

      return;

    }


    var slides='';
    var thumbs='';


    files.forEach(function(f,i){

      var src=
        esc(imgSrc(f));

      var alt=
        esc(
          item.n+
          ' — HOF Home of Fabric, photo '+
          (i+1)
        );


      slides+=
        '<div class="gal-slide">'
        +'<img src="'+src+'" alt="'+alt+
        '" decoding="async" draggable="false"'+
        (i?' loading="lazy"':'')+
        '>'
        +'</div>';


      thumbs+=
        '<button type="button" class="thumb" data-i="'+i+
        '" aria-label="Show photo '+(i+1)+'">'
        +'<img src="'+src+
        '" alt="" decoding="async" loading="lazy" draggable="false">'
        +'</button>';

    });


    sw.innerHTML=
      '<div class="gal" role="group" aria-roledescription="carousel" aria-label="'+
      esc(item.n)+
      ' photos">'

      +'<div class="gal-track">'+
      slides+
      '</div>'

      +'<button type="button" class="gal-nav gal-prev" aria-label="Previous photo">&#8249;</button>'

      +'<button type="button" class="gal-nav gal-next" aria-label="Next photo">&#8250;</button>'

      +'<span class="gal-count" aria-live="polite"></span>'

      +'</div>'

      +closeBtn;


    th.innerHTML=thumbs;


    gal={

      track:
        sw.querySelector('.gal-track'),

      count:
        sw.querySelector('.gal-count'),

      thumbs:th,

      i:0

    };


    var ticking=false;


    gal.track.addEventListener(
      'scroll',
      function(){

        if(!ticking){

          ticking=true;

          requestAnimationFrame(
            function(){

              ticking=false;

              galSync();

            }
          );

        }

      },
      {passive:true}
    );


    galRefresh();

  }


  /* =========================================================
     GALLERY BUTTONS
     ========================================================= */

  document.addEventListener(
    'click',
    function(e){

      if(!gal)return;

      var t=
        e.target.closest(
          '.gal-prev,.gal-next,.thumb'
        );

      if(!t)return;


      if(
        t.classList.contains('thumb')
      ){

        galGo(
          +t.getAttribute('data-i')
        );

      }else{

        galStep(
          t.classList.contains('gal-next')
          ? 1
          : -1
        );

      }

    }
  );


  document.addEventListener(
    'keydown',
    function(e){

      if(
        !gal ||
        !backdrop ||
        !backdrop.classList.contains('open')
      ){
        return;
      }


      if(e.key==='ArrowRight'){

        e.preventDefault();

        galStep(1);

      }


      else if(e.key==='ArrowLeft'){

        e.preventDefault();

        galStep(-1);

      }

    }
  );


  /* =========================================================
     OPEN PRODUCT
     ========================================================= */

  function openModal(item){

    if(!item || !backdrop)return;

    lastFocus=
      document.activeElement;


    var title=
      document.getElementById(
        'modalTitle'
      );

    var price=
      document.getElementById(
        'modalPrice'
      );

    var desc=
      document.getElementById(
        'modalDesc'
      );

    var avail=
      document.getElementById(
        'modalAvail'
      );

    var order=
      document.getElementById(
        'modalOrder'
      );


    if(title){
      title.textContent=item.n;
    }


    if(price){

      price.innerHTML=item.p

        ? '<span class="price">'+
          esc(item.p)+
          '</span>'+
          (item.u
            ? '<span class="unit">/ '+
              esc(item.u)+
              '</span>'
            : '')

        : '<span class="ask" style="font:italic 500 1.1rem/1 var(--display)">Price on request</span>';

    }


    if(desc){

      desc.textContent=
        item.d ||
        'Premium selection from HOF — Home of Fabric.';

    }


    if(avail){

      avail.textContent=
        (item.u
          ? 'Unit: '+item.u+'   ·   '
          : '')+
        'Availability confirmed on WhatsApp';

    }


    buildGallery(item);


    var msg=
      'Hello HOF, I am interested in '+
      item.n+
      '. Please send me more details and availability.';


    if(order){

      order.href=wa(msg);

    }


    backdrop.classList.add('open');

    backdrop.setAttribute(
      'aria-hidden',
      'false'
    );

    document.body.style.overflow='hidden';


    var close=
      document.getElementById(
        'modalClose'
      );

    if(close){

      close.focus();

    }

  }


  function closeModal(){

    if(!backdrop)return;


    backdrop.classList.remove(
      'open'
    );

    backdrop.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.style.overflow='';


    if(
      lastFocus &&
      lastFocus.focus
    ){

      lastFocus.focus();

    }

  }


  /* =========================================================
     PRODUCT CARD CLICK
     ========================================================= */

  document.addEventListener(
    'click',
    function(e){

      var trig=
        e.target.closest(
          '.pc-trigger'
        );


      if(trig){

        openModal(
          registry[
            trig.getAttribute(
              'data-id'
            )
          ]
        );

        return;

      }


      if(
        e.target===backdrop ||
        e.target.closest('#modalClose')
      ){

        closeModal();

      }

    }
  );


  document.addEventListener(
    'keydown',
    function(e){

      if(
        !backdrop ||
        !backdrop.classList.contains('open')
      ){

        return;

      }


      if(e.key==='Escape'){

        closeModal();

        return;

      }


      if(e.key==='Tab'){

        var focusable=
          backdrop.querySelectorAll(
            'button,a[href]'
          );


        if(!focusable.length)return;


        var first=
          focusable[0];

        var last=
          focusable[
            focusable.length-1
          ];


        if(
          e.shiftKey &&
          document.activeElement===first
        ){

          e.preventDefault();

          last.focus();

        }


        else if(
          !e.shiftKey &&
          document.activeElement===last
        ){

          e.preventDefault();

          first.focus();

        }

      }

    }
  );


  /* =========================================================
     MOBILE MENU
     ========================================================= */

  var burger=
    document.querySelector(
      '.burger'
    );

  var nav=
    document.getElementById(
      'menu'
    );

  var mainEl=
    document.getElementById(
      'main'
    );

  var footerEl=
    document.querySelector(
      '.footer'
    );


  function setMenu(open){

    if(!nav || !burger)return;


    nav.classList.toggle(
      'open',
      open
    );


    burger.setAttribute(
      'aria-expanded',
      open
    );


    burger.setAttribute(
      'aria-label',
      open
      ? 'Close menu'
      : 'Open menu'
    );


    document.body.style.overflow=
      open
      ? 'hidden'
      : '';


    [mainEl,footerEl].forEach(
      function(el){

        if(!el)return;

        if(open){

          el.setAttribute(
            'inert',
            ''
          );

        }else{

          el.removeAttribute(
            'inert'
          );

        }

      }
    );

  }


  if(burger){

    burger.addEventListener(
      'click',
      function(){

        setMenu(
          !nav.classList.contains(
            'open'
          )
        );

      }
    );

  }


  if(nav){

    nav.addEventListener(
      'click',
      function(e){

        if(
          e.target.closest('a')
        ){

          setMenu(false);

        }

      }
    );

  }


  document.addEventListener(
    'keydown',
    function(e){

      if(e.key==='Escape'){

        setMenu(false);

      }

    }
  );


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  var items=
    document.querySelectorAll(
      '.rv'
    );


  if(
    'IntersectionObserver' in window
  ){

    var io=
      new IntersectionObserver(
        function(es){

          es.forEach(
            function(e){

              if(
                e.isIntersecting
              ){

                e.target.classList.add(
                  'in'
                );

                io.unobserve(
                  e.target
                );

              }

            }
          );

        },
        {
          threshold:.12,
          rootMargin:'0px 0px -6% 0px'
        }
      );


    items.forEach(
      function(el){

        io.observe(el);

      }
    );


  }else{

    items.forEach(
      function(el){

        el.classList.add(
          'in'
        );

      }
    );

  }


  /* =========================================================
     FLOATING WHATSAPP BUTTON
     ========================================================= */

  var fab=
    document.getElementById(
      'fab'
    );

  var scrollTicking=false;


  function onScroll(){

    scrollTicking=false;

    if(!fab)return;

    fab.classList.toggle(
      'show',
      window.scrollY >
      window.innerHeight*.8
    );

  }


  window.addEventListener(
    'scroll',
    function(){

      if(!scrollTicking){

        scrollTicking=true;

        requestAnimationFrame(
          onScroll
        );

      }

    },
    {passive:true}
  );


  onScroll();

})();
