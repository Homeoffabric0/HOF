(function () {
  'use strict';

  /* =========================================================
     HOF — HOME OF FABRIC
     WEBSITE PRODUCT SYSTEM
     ========================================================= */

  var WA = 'https://wa.me/2348087674813?text=';
  var FABRIC_IMG_DIR = 'products/fabrics/';
  var CAPS_IMG_DIR = 'products/caps/';

  var registry = {};
  var productCounter = 0;

  function wa(message) {
    return WA + encodeURIComponent(message);
  }

  function esc(value) {
    return String(value).replace(/[&<>"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[char];
    });
  }

  function imagePath(file, item) {
    if (!file) return '';

    if (file.indexOf('/') !== -1) {
      return file;
    }

    if (item && item.c === 'Caps') {
      return CAPS_IMG_DIR + file;
    }

    return FABRIC_IMG_DIR + file;
  }

  /* =========================================================
     FABRICS
     ========================================================= */

  var fabrics = [
    {
      n: 'Mr. Fendi',
      p: '₦4,500',
      u: 'yard',
      c: 'Fabrics',
      img: [
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
      n: 'Phanta Plus',
      p: '₦5,500',
      u: 'yard',
      c: 'Fabrics',
      img: [
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
      n: 'Supreme Longhua',
      p: '₦3,700',
      u: 'yard',
      c: 'Fabrics',
      img: [
        '27f6fb66-a40c-48f9-8f5e-cadc3d44cf0c.jpeg',
        '04f38d22-38b4-408e-a574-d734911db6db.jpeg',
        '3512b08e-314e-4b95-8160-705a705a332c.jpeg',
        '59d206e7-ef36-4de1-bd65-ced9bcf1c33f.jpeg'
      ]
    },
    {
      n: 'Wagambari',
      p: '₦30,000',
      u: '5-yard set',
      c: 'Wagambari',
      d: "Traditional men's fabric, supplied as a 5-yard set.",
      img: [
        '12f09750-4c2f-4525-b568-d83e49d6c67d.jpeg',
        '73307f85-0d62-4bc9-9dd3-c8abf27992b2.jpeg',
        'c0a42112-daad-4d7a-9b8f-b8ec05aca145.jpeg'
      ]
    },
    {
      n: 'Excelsior',
      p: '₦3,800',
      u: 'yard',
      c: 'Fabrics',
      img: [
        'f955dc00-e2d5-4063-8bc6-8db54fc95919.jpeg',
        '92d1cdae-53bf-4baa-b762-2158c1da7c3e.jpeg',
        '56bf07d0-14c2-44d8-af9d-541f447c98d3.jpeg'
      ]
    },
    {
      n: 'Goods Will',
      p: '₦3,800',
      u: 'yard',
      c: 'Fabrics',
      img: [
        'dcb99a46-af61-4769-8657-2374797a9d55.jpeg',
        '91569b1e-4893-4964-af21-0e9797dd3a0a.jpeg',
        'f7533c93-561e-42c2-a55a-324efb0ed811.jpeg'
      ]
    },
    {
      n: 'Casacada by Mhood',
      p: '₦4,500',
      u: 'yard',
      c: 'Fabrics',
      img: [
        '4e43461d-5b59-4c2f-9862-392607783c17.jpeg',
        'b2d25623-2da6-403a-a9d4-e80c13a1937d.jpeg',
        'a244258d-9930-48b0-9b5a-5f46b52783f3.jpeg'
      ]
    },
    {
      n: 'Oliva',
      p: '₦4,000',
      u: 'yard',
      c: 'Fabrics',
      img: [
        'acda9fee-d330-4236-a00a-b9c33fcb3586.jpeg',
        '8a28a35e-14c7-45dd-b6f3-b2a6324b8a46.jpeg',
        'a0eb8619-13cc-4bff-9b0c-bd3a1f0c4f9b.jpeg'
      ]
    },
    {
      n: 'Trevita',
      p: '₦4,000',
      u: 'yard',
      c: 'Fabrics',
      img: [
        '158153ca-1802-4963-b3c5-ebe39dcd0611.jpeg',
        '575ad282-d4b4-49a4-963b-dd5977b0c71f.jpeg',
        'c74dd1ab-0bcd-42e2-87bb-263364bd01a8.jpeg'
      ]
    },
    {
      n: 'Turkish Wool',
      p: '₦11,500',
      u: 'yard',
      c: 'Fabrics',
      d: 'Wool fabric for refined tailoring.',
      img: [
        'b2def7dd-4815-43b6-800a-cabf775b9143.jpeg',
        '4e66d369-c72b-40b8-af99-77bfef461b8b.jpeg',
        '89322bd9-7a3b-407c-9b19-258d632d8252.jpeg'
      ]
    },
    {
      n: 'Yak Wool',
      p: '₦13,500',
      u: 'yard',
      c: 'Fabrics',
      d: 'Wool fabric from our premium range.',
      img: [
        '4821145a-eba2-4978-833e-bdca3160b61d.jpeg',
        '5767b311-a8b4-4a93-a704-6963ea99ea4e.jpeg',
        'c1ba8974-1a60-4da2-ac7b-2cd80098ef2f.jpeg',
        'd67b7729-aaab-4d09-bd3e-c9b3b6b3f583.jpeg'
      ]
    },
    {
      n: 'VIP Ultimate',
      p: '₦7,000',
      u: 'yard',
      c: 'Fabrics',
      d: 'A premium selection for distinguished dressing.',
      img: [
        '7a632124-9ed9-4d62-b536-c6002134f0fb.jpeg',
        'ad31e554-d1e9-4b20-b3ff-4c4a4b9cf839.jpeg',
        'da40dc4a-d45f-47cb-99bc-6edbb18dc325.jpeg'
      ]
    }
  ];

  /* =========================================================
     CAPS
     ========================================================= */

  var caps = [
    {
      n: 'Zeeta',
      p: '₦6,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'A refined traditional men’s cap with an elegant finish, designed to complement premium native outfits.',
      img: [
        'f21c5def-a15f-48e2-a48f-540093b535eb.jpeg',
        '3963aba0-e097-43d5-a045-7163eb687c47.jpeg',
        '991209fb-5971-4e41-b305-ab21ccab75ed.jpeg',
        '18d2ebe8-3feb-47e8-b3e5-68ddf4b25efc.jpeg',
        'b99c9447-d3ba-4ddc-9b2c-93fd6150e957.jpeg'
      ]
    },
    {
      n: 'Eleganza',
      p: '₦9,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'A sophisticated men’s cap designed with an elegant look to elevate distinguished native dressing.',
      img: [
        '45f6cdb2-ae7b-420a-8339-1048dd312e4a.jpeg',
        '0c862dc7-9110-4d12-bff4-f71f60f64ac5.jpeg',
        '675df448-56fc-4ef3-bf2d-76019f56c396.jpeg',
        '7b826404-6574-40f0-8a8e-9619c5959376.jpeg',
        '83d6f22a-9d8f-4021-9815-00798d86d356.jpeg',
        '830405df-d9e3-4aa4-a828-e0ac984c2f58.jpeg',
        '88f3d29b-ae78-41b8-9d65-819d9e5a1f79.jpeg',
        '9c2db721-9243-4c3a-a881-33ace8889f78.jpeg',
        '351d0c31-10a4-4a13-9e9c-28528984d264.jpeg'
      ]
    },
    {
      n: 'Dara',
      p: '₦36,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'A premium traditional men’s cap with a distinctive and elegant design, perfect for formal occasions and refined native wear.',
      img: [
        'c2ea363b-2f67-446f-8572-12edb7c4d0f9.jpeg',
        '05f7ff4f-eb81-4d30-a8a0-1f902c3dd525.jpeg',
        '6729ec29-4811-4d41-be91-2bdbc14ecc44.jpeg',
        '918a4fe7-f74f-44b6-8a89-75fffcbf1868.jpeg',
        'df030906-fabb-4d39-b0ff-8e9e6f6bc930.jpeg'
      ]
    },
    {
      n: 'Zanna',
      p: '₦18,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'An elegant men’s cap crafted to bring a distinguished finishing touch to premium native outfits.',
      img: [
        'IMG_4957.jpeg',
        'IMG_4958.jpeg',
        'IMG_4959.jpeg',
        'IMG_4960.jpeg',
        'IMG_4961.jpeg',
        'IMG_4962.jpeg',
        'IMG_4963.jpeg',
        'IMG_4964.jpeg',
        'IMG_4965.jpeg',
        'IMG_4966.jpeg',
        'IMG_4967.jpeg',
        'IMG_4968.jpeg',
        'ca602fe3-faa1-42a3-ad7c-3ea63449251d.jpeg'
      ]
    },
    {
      n: 'Tangaran',
      p: '₦40,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'A premium traditional cap with a bold and sophisticated presence, designed for elevated native styling.',
      img: [
        'IMG_4970.jpeg',
        'IMG_4971.jpeg',
        'IMG_4972.jpeg',
        'IMG_4973.jpeg',
        'IMG_4974.jpeg',
        'IMG_4975.jpeg',
        'IMG_4976.jpeg',
        'IMG_4977.jpeg',
        'IMG_4978.jpeg',
        'IMG_4979.jpeg'
      ]
    },
    {
      n: 'Kindai Miyamar Borno',
      p: '₦35,000',
      u: 'wholesale price',
      c: 'Caps',
      d: 'A distinguished traditional cap inspired by Northern elegance, made for premium native dressing and special occasions.',
      img: [
        'IMG_4986.jpeg',
        'IMG_4989.jpeg',
        'IMG_4988.jpeg',
        'IMG_4990.jpeg',
        'IMG_4987.jpeg',
        '335d41d3-d730-418a-b806-c10a9c913c1f.jpeg',
        '44d56d57-f771-4d92-aaf8-a4b8a52b88e0.jpeg',
        '5226cc13-aa5a-4ad5-aaaa-d0341b1cf79e.jpeg',
        '81e7ca62-960d-4fbe-acbd-e371d67b023f.jpeg',
        '9dd6877b-9384-424b-a762-6006437ece1b.jpeg',
        'daccdc21-4f7c-4a84-b543-a982c7138ba8.jpeg'
      ]
    }
  ];

  /* =========================================================
     PRODUCT CARDS
     ========================================================= */

  function createCard(item) {
    var id = 'product-' + productCounter++;

    registry[id] = item;

    var firstImage = item.img && item.img.length
      ? '<img src="' +
        esc(imagePath(item.img[0], item)) +
        '" alt="' +
        esc(item.n) +
        ' — HOF Home of Fabric" loading="lazy" decoding="async">'
      : '';

    return (
      '<article class="pc rv">' +

        '<button ' +
        'type="button" ' +
        'class="pc-trigger" ' +
        'data-product-id="' +
        id +
        '" ' +
        'aria-label="View ' +
        esc(item.n) +
        ' details">' +

          '<span class="sw has-product-image">' +
            firstImage +
          '</span>' +

          '<span class="pc-body">' +
            '<span class="pc-name">' +
              esc(item.n) +
            '</span>' +

            (item.d
              ? '<span class="pc-desc">' +
                  esc(item.d) +
                '</span>'
              : '') +

            '<span class="price">' +
              esc(item.p) +
            '</span>' +

            '<span class="unit"> / ' +
              esc(item.u) +
            '</span>' +

            '<span class="avail">' +
              'Confirm availability on WhatsApp' +
            '</span>' +

          '</span>' +

        '</button>' +

        '<a class="order" href="' +
          wa(
            'Hello HOF — Home of Fabric. I am interested in ' +
            item.n +
            '. Please send me more details and availability.'
          ) +
          '" target="_blank" rel="noopener noreferrer">' +
          'Order on WhatsApp' +
        '</a>' +

      '</article>'
    );
  }

  function renderGrid(elementId, items) {
    var element = document.getElementById(elementId);

    if (!element) return;

    element.innerHTML = items.map(createCard).join('');
  }

  /* CAPS */
  renderGrid('capGrid', caps);

  /* =========================================================
     FABRIC FILTERS
     ========================================================= */

  var categories = [
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

  var chips = document.getElementById('fabricChips');
  var activeCategory = 'All';
  var searchTerm = '';

  if (chips) {
    chips.innerHTML = categories.map(function (category, index) {
      return (
        '<button type="button" class="chip" data-category="' +
        esc(category) +
        '" aria-pressed="' +
        (index === 0 ? 'true' : 'false') +
        '">' +
        esc(category) +
        '</button>'
      );
    }).join('');
  }

  function renderFabrics() {
    var results = fabrics.filter(function (item) {

      var categoryMatch =
        activeCategory === 'All' ||
        item.c === activeCategory;

      var searchText = (
        item.n + ' ' +
        (item.d || '') + ' ' +
        item.c
      ).toLowerCase();

      var searchMatch =
        !searchTerm ||
        searchText.indexOf(searchTerm) !== -1;

      return categoryMatch && searchMatch;
    });

    renderGrid('fabricGrid', results);

    var empty = document.getElementById('fabricEmpty');

    if (empty) {
      empty.hidden = results.length > 0;
    }
  }

  renderFabrics();

  if (chips) {
    chips.addEventListener('click', function (event) {
      var button = event.target.closest('.chip');

      if (!button) return;

      activeCategory =
        button.getAttribute('data-category');

      chips.querySelectorAll('.chip').forEach(function (chip) {
        chip.setAttribute(
          'aria-pressed',
          chip === button ? 'true' : 'false'
        );
      });

      renderFabrics();
    });
  }

  var search = document.getElementById('fabricSearch');

  if (search) {
    search.addEventListener('input', function () {
      searchTerm =
        search.value.trim().toLowerCase();

      renderFabrics();
    });
  }

  /* =========================================================
     SHOP BY CATEGORY
     ========================================================= */

  var categoryIndex =
    document.getElementById('sbcIndex');

  if (categoryIndex) {

    var categoryRows = [
      ['Fabrics', 'Fabrics', 'fabrics'],
      ['Lace', 'Lace', 'fabrics'],
      ['Voil', 'Voil', 'fabrics'],
      ['Atiku', 'Atiku', 'fabrics'],
      ['Swiss', 'Swiss', 'fabrics'],
      ['Getzner', 'Getzner', 'fabrics'],
      ['Shadda', 'Shadda', 'fabrics'],
      ['Wagambari', 'Wagambari', 'fabrics'],
      ["Men's Caps", "Men's Caps", 'caps']
    ];

    categoryIndex.innerHTML =
      categoryRows.map(function (row) {

        var count =
          row[2] === 'caps'
            ? caps.length
            : fabrics.filter(function (item) {
                return item.c === row[1];
              }).length;

        return (
          '<button type="button" class="sbc-row" ' +
          'data-category="' +
          esc(row[1]) +
          '" ' +
          'data-target="' +
          row[2] +
          '">' +

            '<span class="sbc-name">' +
              esc(row[0]) +
            '</span>' +

            '<span class="sbc-meta">' +
              '<span class="sbc-count">' +
                count +
                (count === 1 ? ' piece' : ' pieces') +
              '</span>' +

              '<span class="sbc-arrow">&rarr;</span>' +

            '</span>' +

          '</button>'
        );

      }).join('');

    categoryIndex.addEventListener('click', function (event) {

      var row =
        event.target.closest('.sbc-row');

      if (!row) return;

      var target =
        row.getAttribute('data-target');

      var category =
        row.getAttribute('data-category');

      if (target === 'caps') {

        var capsSection =
          document.getElementById('caps');

        if (capsSection) {
          capsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        return;
      }

      activeCategory = category;
      searchTerm = '';

      if (search) {
        search.value = '';
      }

      if (chips) {
        chips.querySelectorAll('.chip').forEach(function (chip) {
          chip.setAttribute(
            'aria-pressed',
            chip.getAttribute('data-category') === category
              ? 'true'
              : 'false'
          );
        });
      }

      renderFabrics();

      var fabricSection =
        document.getElementById('fabrics');

      if (fabricSection) {
        fabricSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

    });
  }

  /* =========================================================
     PRODUCT DETAIL MODAL
     ========================================================= */

  var backdrop =
    document.getElementById('modalBackdrop');

  var modalTitle =
    document.getElementById('modalTitle');

  var modalPrice =
    document.getElementById('modalPrice');

  var modalDesc =
    document.getElementById('modalDesc');

  var modalAvail =
    document.getElementById('modalAvail');

  var modalOrder =
    document.getElementById('modalOrder');

  var modalSwatch =
    document.getElementById('modalSwatch');

  var currentProduct = null;
  var currentImageIndex = 0;

  function openProduct(item) {

    if (!item) return;

    if (!backdrop) {
      console.error(
        'HOF: modalBackdrop was not found.'
      );
      return;
    }

    currentProduct = item;
    currentImageIndex = 0;

    if (modalTitle) {
      modalTitle.textContent = item.n;
    }

    if (modalPrice) {
      modalPrice.innerHTML =
        '<strong>' +
        esc(item.p) +
        '</strong>' +
        '<span> / ' +
        esc(item.u) +
        '</span>';
    }

    if (modalDesc) {
      modalDesc.textContent =
        item.d ||
        'Premium selection from HOF — Home of Fabric.';
    }

    if (modalAvail) {
      modalAvail.textContent =
        'Available — confirm current colours and stock on WhatsApp.';
    }

    renderModalGallery();

    if (modalOrder) {
      modalOrder.href = wa(
        'Hello HOF — Home of Fabric 👋\n\n' +
        'I am interested in: ' +
        item.n +
        '\n' +
        'Price: ' +
        item.p +
        ' / ' +
        item.u +
        '\n\n' +
        'Please send me more details and availability.'
      );
    }

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

    var closeButton =
      document.getElementById('modalClose');

    if (closeButton) {
      setTimeout(function () {
        closeButton.focus();
      }, 50);
    }
  }

  function renderModalGallery() {

    if (!modalSwatch || !currentProduct) {
      return;
    }

    var images =
      currentProduct.img || [];

    var image =
      images[currentImageIndex];

    var imageHTML = image
      ? '<img src="' +
        esc(imagePath(image, currentProduct)) +
        '" alt="' +
        esc(currentProduct.n) +
        ' — HOF Home of Fabric" draggable="false">'
      : '';

    modalSwatch.innerHTML =
      '<div class="gal">' +

        '<div class="gal-track">' +
          '<div class="gal-slide">' +
            imageHTML +
          '</div>' +
        '</div>' +

        '<button type="button" class="gal-nav gal-prev" aria-label="Previous photo">' +
          '&#8249;' +
        '</button>' +

        '<button type="button" class="gal-nav gal-next" aria-label="Next photo">' +
          '&#8250;' +
        '</button>' +

        '<span class="gal-count">' +
          (images.length
            ? (currentImageIndex + 1) +
              ' / ' +
              images.length
            : '') +
        '</span>' +

      '</div>' +

      '<button type="button" class="modal-close" id="modalClose" aria-label="Close">' +
        '&times;' +
      '</button>';

  }

  function closeProduct() {

    if (!backdrop) return;

    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    currentProduct = null;
  }

  function nextImage() {

    if (!currentProduct) return;

    var images =
      currentProduct.img || [];

    if (images.length < 2) return;

    currentImageIndex =
      (currentImageIndex + 1) %
      images.length;

    renderModalGallery();
  }

  function previousImage() {

    if (!currentProduct) return;

    var images =
      currentProduct.img || [];

    if (images.length < 2) return;

    currentImageIndex =
      (currentImageIndex - 1 + images.length) %
      images.length;

    renderModalGallery();
  }

  /* =========================================================
     ONE GLOBAL CLICK HANDLER
     ========================================================= */

  document.addEventListener('click', function (event) {

    /* PRODUCT CARD */
    var productButton =
      event.target.closest('.pc-trigger');

    if (productButton) {

      var productId =
        productButton.getAttribute(
          'data-product-id'
        );

      var product =
        registry[productId];

      if (product) {
        openProduct(product);
      }

      return;
    }

    /* CLOSE MODAL */
    if (
      event.target === backdrop ||
      event.target.closest('#modalClose')
    ) {
      closeProduct();
      return;
    }

    /* PREVIOUS IMAGE */
    if (
      event.target.closest('.gal-prev')
    ) {
      previousImage();
      return;
    }

    /* NEXT IMAGE */
    if (
      event.target.closest('.gal-next')
    ) {
      nextImage();
      return;
    }

  });

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener('keydown', function (event) {

    if (
      !backdrop ||
      !backdrop.classList.contains('open')
    ) {
      return;
    }

    if (event.key === 'Escape') {
      closeProduct();
    }

    if (event.key === 'ArrowRight') {
      nextImage();
    }

    if (event.key === 'ArrowLeft') {
      previousImage();
    }

  });

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  var burger =
    document.querySelector('.burger');

  var menu =
    document.getElementById('menu');

  if (burger && menu) {

    burger.addEventListener('click', function () {

      var open =
        menu.classList.toggle('open');

      burger.setAttribute(
        'aria-expanded',
        String(open)
      );

      document.body.style.overflow =
        open ? 'hidden' : '';

    });

    menu.addEventListener('click', function (event) {

      if (event.target.closest('a')) {

        menu.classList.remove('open');

        burger.setAttribute(
          'aria-expanded',
          'false'
        );

        document.body.style.overflow = '';

      }

    });

  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  var revealItems =
    document.querySelectorAll('.rv');

  if ('IntersectionObserver' in window) {

    var observer =
      new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add('in');

            observer.unobserve(entry.target);

          }

        });

      }, {
        threshold: 0.1
      });

    revealItems.forEach(function (element) {
      observer.observe(element);
    });

  } else {

    revealItems.forEach(function (element) {
      element.classList.add('in');
    });

  }

  /* =========================================================
     FLOATING WHATSAPP
     ========================================================= */

  var floating =
    document.getElementById('fab');

  if (floating) {

    function updateFloating() {

      floating.classList.toggle(
        'show',
        window.scrollY >
        window.innerHeight * 0.8
      );

    }

    window.addEventListener(
      'scroll',
      updateFloating,
      { passive: true }
    );

    updateFloating();

  }

})();
