//let right = document.getElementById('right');
//right.style.display = 'flex';
//right.style.flexDirection = 'column';
//right.style.flexWrap = 'wrap';
let rightHeader= document.getElementById('right-header');
let overview = document.getElementById('overview')
let internalStructure = document.getElementById('internalStructure');
let surfaceGeology = document.getElementById('surfaceGeology');
let mercury = document.getElementById('mercury')
let text = document.getElementById('text')
let img = document.getElementById('img')
  rightHeader.textContent = "MERCURY"
  text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
  img.src = "planet-mercury.svg"
//MERCURY
mercury.addEventListener('click', function(){
  rightHeader.textContent = "MERCURY";
  text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
  img.src = "planet-mercury.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "58.6 DAYS";
  revolutionTime2.textContent = "87.97 DAYS";
  radius2.textContent = "2,439.7 KM";
  averageTemp2.textContent = "430°c";
});

overview.addEventListener('click', function(){
  rightHeader.textContent = "MERCURY";
  text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
  img.src = "planet-mercury.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "58.6 DAYS";
  revolutionTime2.textContent = "87.97 DAYS";
  radius2.textContent = "2,439.7 KM";
  averageTemp2.textContent = "430°c";
});

internalStructure.addEventListener('click', function(){

  rightHeader.textContent = "MERCURY";
  text.textContent = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
   img.src = "planet-mercury-internal.svg";
});

surfaceGeology.addEventListener('click', function(){

  rightHeader.textContent = "MERCURY";
  text.textContent = " Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
  img.src = "geology-mercury.png";
});



mercury.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "MERCURY";
  text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
   img.src = "planet-mercury.svg";
});
});
mercury.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "MERCURY";
  text.textContent = " Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
  img.src = "planet-mercury-internal.svg";
});
});
mercury.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "MERCURY";
  text.textContent = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
  img.src = "geology-mercury.png";
});
});
rotationTime2.textContent = "58.6 DAYS";
revolutionTime2.textContent = "87.97 DAYS";
radius2.textContent = "2,439.7 KM";
averageTemp2.textContent = "430°c";
//img.addEventListener('click',function disappear() {
  //img.classList.add("disappear");
//})


//let mercuryDiv = document.getElementById('mercuryDiv')
//let venusDiv = document.getElementById('venusDiv')
//mercury.onclick = function(){

  //let img = document.getElementById('img')
  //rightHeader.textContent = "MERCURY"
  //let text = document.getElementById('text')
  //text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
  //img.src = "planet-mercury.svg";

  //mercury.addEventListener('click', event => {
    //if (event.target === mercury){
      //mercuryDiv.style.display = "block";

      //venusDiv.style.display = "none";
      //venus1.style.display = "none";
      //venus2.style.display = "none";
      //venus3.style.display = "none";
  //  }
//  });
//}

//change color://
//overview.onclick = function(){
  //overview.classList.add("active");
  //internalStructure.classList.remove("active");
  //surfaceGeology.classList.remove("active");
  //rightHeader.textContent = "MERCURY"
//  text.textContent = "Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
  //img.src = "planet-mercury.svg";
//}
//internalStructure.onclick = function(){
  //internalStructure.classList.add("active");
  //overview.classList.remove("active");
  //surfaceGeology.classList.remove("active");
  //rightHeader.textContent = "MERCURY"
  //text.textContent = " Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
  //img.src = "planet-mercury-internal.svg"
//}
//surfaceGeology.onclick = function(){
  //surfaceGeology.classList.add("active");
  //overview.classList.remove("active");
  ////internalStructure.classList.remove("active");
  //rightHeader.textContent = "MERCURY"
  //text.textContent = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
  //img.src = "geology-mercury.png"
//}
//last section
//let rotationTime2 = document.getElementById('rotationTime2');
//let revolutionTime2 = document.getElementById('revolutionTime2');
//let radius2 = document.getElementById('radius2');
//let averageTemp2 =document.getElementById('averageTemp2');
//rotationTime2.textContent = "58.6 DAYS";
//revolutionTime2.textContent = "87.97 DAYS";
//radius2.textContent = "2,439.7 KM";
//averageTemp2.textContent = "430°c";
//VENUS
let venus = document.getElementById('venus')
//
  //venus.addEventListener('click', event => {
    //if (event.target === venus){
      //mercuryDiv.style.display = "none";
      //venusDiv.style.display = "block";
    //}
  //});
  //let rotationTime2 = document.getElementById('rotationTime2');
  //let revolutionTime2 = document.getElementById('revolutionTime2');
  //let radius2 = document.getElementById('radius2');
  //let averageTemp2 = document.getElementById('averageTemp2');
  //rotationTime2.textContent = "243 Days";
  //revolutionTime2.textContent = "224.7 Days";
  //radius2.textContent = "6,051.8 KM";
  //averageTemp2.textContent = "471°c";
  //}


let venus1 = document.getElementById('venus1')
//venus1.onclick = function(){
////  venus1.classList.add("active");
//  venus2.classList.remove("active");
  //venus3.classList.remove("active");
//  rightHeader.textContent = "VENUS"

//}
let venus2 = document.getElementById('venus2')
//venus2.onclick = function(){
  //venus2.classList.add("active");
  //venus1.classList.remove("active");
  //venus3.classList.remove("active");


//}
let venus3 = document.getElementById('venus3')
//venus3.onclick = function(){
  //venus3.classList.add("active");
  //venus1.classList.remove("active");
  //venus2.classList.remove("active");
//  rightHeader.textContent = "VENUS"
  //text.textContent = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
//  img.src = "geology-venus.png";

//}
//venus.onclick = function(){
  //rightHeader.textContent = "VENUS"
  //text.textContent = "Venus Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. "
  //img.src = "planet-venus.svg"
  //img.style.transform = "scale(1, 1)"
  venus.addEventListener('click', function(){
    rightHeader.textContent = "VENUS";
    text.textContent = "Venus Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. ";
    img.src = "planet-venus.svg"
    img.style.transform = "scale(1, 1)";
    rotationTime2.textContent = "243 DAYS";
    revolutionTime2.textContent = "224.7 DAYS";
    radius2.textContent = "6,051.8 KM";
    averageTemp2.textContent = "471°c";
  });

venus.addEventListener('click', function(){
  overview.addEventListener('click', function(){
    rightHeader.textContent = "VENUS";
    text.textContent = "Venus Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. ";
     img.src = "planet-venus.svg";
  });
});
venus.addEventListener('click', function(){
  internalStructure.addEventListener('click', function(){
    rightHeader.textContent = "VENUS";
    text.textContent = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
    img.src = "planet-venus-internal.svg";
  });
});
venus.addEventListener('click', function(){
  surfaceGeology.addEventListener('click', function(){
    rightHeader.textContent = "VENUS";
    text.textContent = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
    img.src = "geology-venus.png";
  });
});
//EARTH
let earth = document.getElementById('earth')
earth.addEventListener('click', function(){
  rightHeader.textContent = "EARTH";
  text.textContent = "Earth Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
  img.src = "planet-earth.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "0.99 DAYS";
  revolutionTime2.textContent = "365.26 DAYS";
  radius2.textContent = "6,371 KM";
  averageTemp2.textContent = "16°c";
});

earth.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "EARTH";
  text.textContent = "Earth Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
   img.src = "planet-earth.svg";
});
});
earth.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "EARTH";
  text.textContent = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
  img.src = "planet-earth-internal.svg";
});
});
earth.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "EARTH";
  text.textContent = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
  img.src = "geology-earth.png";
});
});
//MARS
let mars = document.getElementById('mars')
mars.addEventListener('click', function(){
  rightHeader.textContent = "MARS";
  text.textContent = 'Mars Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". ';
  img.src = "planet-mars.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "1.03 DAYS";
  revolutionTime2.textContent = "1.88 YEARS";
  radius2.textContent = "3,389.5 KM";
  averageTemp2.textContent = "-28°c";
});

mars.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "MARS";
  text.textContent = 'Mars Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". ';
   img.src = "planet-mars.svg";
});
});
mars.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "MARS";
  text.textContent = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
  img.src = "planet-mars-internal.svg";
});
});
mars.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "MARS";
  text.textContent = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
  img.src = "geology-mars.png";
});
});
//JUPITER
let jupiter = document.getElementById('jupiter')
jupiter.addEventListener('click', function(){
  rightHeader.textContent = "JUPITER";
  text.textContent = 'Jupiter Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.';
  img.src = "planet-jupiter.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "9.93 HOURS";
  revolutionTime2.textContent = "11.86 YEARS";
  radius2.textContent = "69,911 KM";
  averageTemp2.textContent = "-108°c";
});

jupiter.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "JUPITER";
  text.textContent = 'Jupiter Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.';
   img.src = "planet-jupiter.svg";
});
});
jupiter.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "JUPITER";
  text.textContent = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
  img.src = "planet-jupiter-internal.svg";
});
});
jupiter.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "JUPITER";
  text.textContent = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
  img.src = "geology-jupiter.png";
});
});
//SATURN
let saturn = document.getElementById('saturn')
let all2 = document.getElementById('all2')
saturn.addEventListener('click', function(){
  img.style.marginTop = "-3em"
  rightHeader.textContent = "SATURN";
  text.textContent = 'Saturn Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.';
  img.src = "planet-saturn.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "10.8 HOURS";
  revolutionTime2.textContent = "29.46 YEARS";
  radius2.textContent = "58,232 KM";
  averageTemp2.textContent = "-138°c";
  //all2.style.marginTop = '0em';
});

saturn.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "SATURN";
  text.textContent = 'Saturn Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.';
   img.src = "planet-saturn.svg";
});
});
saturn.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "SATURN";
  text.textContent = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
  img.src = "planet-saturn-internal.svg";
});
});
saturn.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "SATURN";
  text.textContent = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
  img.src = "geology-saturn.png";
});
});
//URANUS
let uranus = document.getElementById('uranus')
uranus.addEventListener('click', function(){
  rightHeader.textContent = "URANUS";
  text.textContent = 'Uranus Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.';
  img.src = "planet-uranus.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "10.8 HOURS";
  revolutionTime2.textContent = "29.46 YEARS";
  radius2.textContent = "58,232 KM";
  averageTemp2.textContent = "-138°c";
});

uranus.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "URANUS";
  text.textContent = "Uranus Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
   img.src = "planet-uranus.svg";
});
});
uranus.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "URANUS";
  text.textContent = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
  img.src = "planet-uranus-internal.svg";
});
});
uranus.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "URANUS";
  text.textContent = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
  img.src = "geology-uranus.png";
});
});
//NEPTUN
let neptune = document.getElementById('neptune')
neptune.addEventListener('click', function(){
  rightHeader.textContent = "NEPTUNE";
  text.textContent = 'Neptune Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.';
  img.src = "planet-neptune.svg"
  img.style.transform = "scale(1, 1)";
  rotationTime2.textContent = "16.08 HOURS";
  revolutionTime2.textContent = "164.79 YEARS";
  radius2.textContent = "24,622 KM";
  averageTemp2.textContent = " -201°c";
});

neptune.addEventListener('click', function(){
overview.addEventListener('click', function(){
  rightHeader.textContent = "NEPTUNE";
  text.textContent = "Neptune Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
   img.src = "planet-neptune.svg";
});
});
neptune.addEventListener('click', function(){
internalStructure.addEventListener('click', function(){
  rightHeader.textContent = "NEPTUNE";
  text.textContent = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
  img.src = "planet-neptune-internal.svg";
});
});
neptune.addEventListener('click', function(){
surfaceGeology.addEventListener('click', function(){
  rightHeader.textContent = "NEPTUNE";
  text.textContent = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
  img.src = "geology-neptune.png";
});
});
//mobile version//

//menu
let menu = document.getElementById('menu');


    menu.addEventListener('click', function(){
    menu.classList.toggle("active");
      if(menu.classList.contains("active")){
      let background = document.getElementById('background');
      background.style.zIndex = "2";
        background.style.backgroundColor = "#070722"
         background.style.position ="relative";
        background.classList.toggle("active");
        let all = document.getElementById('all');
       //all.style.display = "none";
        all.style.transition = "1s"


        let menu3 = document.getElementById('menu3')
        let ul1 = document.getElementById('ul1')

       ul1.classList.add("active")

      }
      else{
        background.style.zIndex = "0";
        all.style.display = "flex";
        menu3.style.display = "none";
        ul1.classList.remove("active");
      }

      })


window.addEventListener('load', function checkWidth(){
  if (window.innerWidth > 850){
            background.style.zIndex = "0";
            all.style.display = "flex";
            menu3.style.display = "none";
            menu.classList.remove("active")
            ul1.classList.remove("active")
  let buttons = document.getElementById('buttons')
            buttons.classList.remove("active")
            let right = document.getElementById('right')
            right.classList.remove("active")
            let buttons2 = document.getElementById('buttons2')
            buttons2.classList.remove("active")
            let all2 = document.getElementById('all2')
            all2.classList.remove("active")
            let rightButtom = document.getElementById('rightButtom')
            rightButtom.classList.remove("active")
            let source = document.getElementById('source')
            source.classList.remove("active")
            let ul0 = document.getElementById('ul0')
            ul0.classList.remove("active")
        }
        else{
          buttons.classList.add("active")
          right.classList.add("active")
          buttons2.classList.add("active")
          all2.classList.add("active")
          rightButtom.classList.add("active")
          source.classList.add("active")
          ul0.classList.add("active")
        }
})
window.addEventListener('resize', function checkWidth(){
  if (window.innerWidth > 850){
            background.style.zIndex = "0";
            all.style.display = "flex";
            menu3.style.display = "none";
            menu.classList.remove("active")
            ul1.classList.remove("active")
  let buttons = document.getElementById('buttons')
            buttons.classList.remove("active")
            let right = document.getElementById('right')
            right.classList.remove("active")
            let buttons2 = document.getElementById('buttons2')
            buttons2.classList.remove("active")
            let all2 = document.getElementById('all2')
            all2.classList.remove("active")
            let rightButtom = document.getElementById('rightButtom')
            rightButtom.classList.remove("active")
            let source = document.getElementById('source')
            source.classList.remove("active")
            let ul0 = document.getElementById('ul0')
            ul0.classList.remove("active")
        }
        else{
          buttons.classList.add("active")
          right.classList.add("active")
          buttons2.classList.add("active")
          all2.classList.add("active")
          rightButtom.classList.add("active")
          source.classList.add("active")
          ul0.classList.add("active")
        }
})

  window.addEventListener('resize', function(){
    if (window.innerWidth > 850) {
    let ul1 = document.getElementById('ul1');
    ul1.classList.remove("active");

  }})

function change(){
  if (window.innerWidth < 850){
    internalStructure.textContent = "STRUCTURE";
    surfaceGeology.textContent = "SURFACE";
  }
  else{
    return;
  }
}
window.onload = function(){
  change()
}
window.onresize = function(){
  change()
}

console.log(internalStructure.textContent)

//function change(){
//  if (ul0.classList.contains("active")){

//  }
//}
//console.log(internalStructure.textContent);
//console.log(surfaceGeology.textContent);
