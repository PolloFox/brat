//    Array of slides for the first image
var slides_list_1 = Array(
    {
        url: '/images/01_mini.jpg',
        big_href: '/images/01_big.jpg',
        alt: 'Etude de volumes',
        title: 'Etude de volumes',
    },
    {
        url: '/images/03_mini.jpg',
        big_href: '/images/03_big.jpg',
        alt: 'Etude d&#145;ombre',
        title: 'Etude d&#145;ombre',
    },
    {
        url: '/images/07_mini.jpg',
        big_href: '/images/07_big.jpg',
        alt: 'Etude de volumes',
        title: 'Etude de volumes',
    },
    {
        url: '/images/11_mini.jpg',
        big_href: '/images/11_big.jpg',
        alt: 'Analyse paysagère',
        title: 'Analyse paysagère',
    }
);

//    Array of slides for the second image
var slides_list_2 = Array(
  {
    url: '/images/02_mini.jpg',
    big_href: '/images/02_big.jpg',
    alt: 'Définition de périmètre',
    title: 'Définition de périmètre',
  },
  {
    url: '/images/12_mini.jpg',
    big_href: '/images/12_big.jpg',
    alt: 'Analyse paysagère',
    title: 'Analyse paysagère',
  },
  {
    url: '/images/13_mini.jpg',
    big_href: '/images/13_big.jpg',
    alt: 'Analyse d&#145;ambiance',
    title: 'Analyse d&#145;ambiance',
  },
  {
    url: '/images/14_mini.jpg',
    big_href: '/images/14_big.jpg',
    alt: 'Analyse des structures urbaines',
    title: 'Analyse des structures urbaines',
  }
);

//    Array of slides for the third image
var slides_list_3 = Array(
  {
    url: '/images/09_mini.jpg',
    big_href: '/images/09_big.jpg',
    alt: 'Photomontage',
    title: 'Photomontage',
  },
  {
    url: '/images/15_mini.jpg',
    big_href: '/images/15_big.jpg',
    alt: 'Photomontage',
    title: 'Photomontage',
  },
  {
    url: '/images/16_mini.jpg',
    big_href: '/images/16_big.jpg',
    alt: 'Analyse des fonctions urbaines',
    title: 'Analyse des fonctions urbaines',
  },
  {
    url: '/images/17_mini.jpg',
    big_href: '/images/17_big.jpg',
    alt: 'Analyse des structures urbaines',
    title: 'Analyse des structures urbaines',
  }
);

//    Array of slides for the fourth image
var slides_list_4 = Array(
  {
    url: '/images/04_mini.jpg',
    big_href: '/images/04_big.jpg',
    alt: 'Relevé de façade',
    title: 'Relevé de façade',
  },
  {
    url: '/images/18_mini.jpg',
    big_href: '/images/18_big.jpg',
    alt: 'Etude de relief',
    title: 'Etude de relief',
  },
  {
    url: '/images/19_mini.jpg',
    big_href: '/images/19_big.jpg',
    alt: 'Situation existante de fait',
    title: 'Situation existante de fait',
  },
  {
    url: '/images/20_mini.jpg',
    big_href: '/images/20_big.jpg',
    alt: 'Etude de volumes',
    title: 'Etude de volumes',
  }
);

//    Array of slides for the fifth image
var slides_list_5 = Array(
  {
    url: '/images/05_mini.jpg',
    big_href: '/images/05_big.jpg',
    alt: 'Inventaire sectoriel',
    title: 'Inventaire sectoriel',
  },
  {
    url: '/images/21_mini.jpg',
    big_href: '/images/21_big.jpg',
    alt: 'Simulation de traffic',
    title: 'Simulation de traffic',
  },
  {
    url: '/images/22_mini.jpg',
    big_href: '/images/22_big.jpg',
    alt: 'Localisation des fonctions',
    title: 'Localisation des fonctions',
  }
);

//    Array of slides for the sixth image
var slides_list_6 = Array(
  {
    url: '/images/06_mini.jpg',
    big_href: '/images/06_big.jpg',
    alt: 'Etude du relief',
    title: 'Etude du relief',
  },
  {
    url: '/images/23_mini.jpg',
    big_href: '/images/23_big.jpg',
    alt: 'Localisation des fonctions urbaines',
    title: 'Localisation des fonctions urbaines',
  },
  {
    url: '/images/24_mini.jpg',
    big_href: '/images/24_big.jpg',
    alt: 'Analyse des flux',
    title: 'Analyse des flux',
  }
);

//    Array of slides for the seventh image
var slides_list_7 = Array(
  {
    url: '/images/10_mini.jpg',
    big_href: '/images/10_big.jpg',
    alt: 'Relevé patrimonial',
    title: 'Relevé patrimonial',
  },
  {
    url: '/images/25_mini.jpg',
    big_href: '/images/25_big.jpg',
    alt: 'Plan d&#145;affectation',
    title: 'Plan d&#145;affectation',
  },
  {
    url: '/images/26_mini.jpg',
    big_href: '/images/26_big.jpg',
    alt: 'Analyse paysagère',
    title: 'Analyse paysagère',
  }
);

//    Array of slides for the eighth image
var slides_list_8 = Array(
  {
    url: '/images/08_mini.jpg',
    big_href: '/images/08_big.jpg',
    alt: 'Localisation',
    title: 'Localisation',
  },
  {
    url: '/images/27_mini.jpg',
    big_href: '/images/27_big.jpg',
    alt: 'Analyse paysagère',
    title: 'Analyse paysagère',
  },
  {
    url: '/images/28_mini.jpg',
    big_href: '/images/28_big.jpg',
    alt: 'Etude de volumes',
    title: 'Etude de volumes',
  }
);

//    Add the slides on initialisation
$('#slideshow-container-1').rsfSlideshow(
  {
    slides: slides_list_1,
    interval: 40,
    autostart: false,
  }
);
//    Add the slides on initialisation
$('#slideshow-container-2').rsfSlideshow(
  {
    slides: slides_list_2,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-3').rsfSlideshow(
  {
    slides: slides_list_3,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-4').rsfSlideshow(
  {
    slides: slides_list_4,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-5').rsfSlideshow(
  {
    slides: slides_list_5,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-6').rsfSlideshow(
  {
    slides: slides_list_6,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-7').rsfSlideshow(
  {
    slides: slides_list_7,
    interval: 40,
    autostart: false,
  }
);//    Add the slides on initialisation
$('#slideshow-container-8').rsfSlideshow(
  {
    slides: slides_list_8,
    interval: 40,
    autostart: false,
  }
);