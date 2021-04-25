$(document).ready( function () {
    displayUfsInfo();
});

function displayUfsInfo() {
    const info = {
        "code": "IC01",
        "name": "Desenvolupament d'aplicaciones Webs",
        "hours": "2000",
        "modules": {
            "MP06": {
                "code": "MP06",
                "name": "Desenvolupament web entorn client",
                "hours": "150",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "Sintaxis del lenguaje",
                        "value": 120
                    },
                    "UF2": {
                        "code": "UF2",
                        "name": "Estructuras definidas por el programador",
                        "value": 80
                    },
                    "UF3": {
                        "code": "UF3",
                        "name": "DOM",
                        "value": 60
                    },
                    "UF4": {
                        "code": "UF4",
                        "name": "Comunicación asíncrona cliente-servidor",
                        "value": 150
                    }
                }
            },
            "MP07": {
                "code": "MP07",
                "name": "Desenvolupament web en entorn servidor",
                "hours": "200",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "Desenvolupament web entorn servidor",
                        "value": 140
                    },
                    "UF2": {
                        "code": "UF2",
                        "name": "Generació dinàmica de pàgines web",
                        "value": 100
                    },
                    "UF3": {
                        "code": "UF3",
                        "name": "Accés a dades",
                        "value": 120
                    },
                    "UF4": {
                        "code": "UF4",
                        "name": "Serveis web",
                        "value": 60
                    }
                }
            },
            "MP08": {
                "code": "MP08",
                "name": "Desplegament d'aplicacions web",
                "hours": "200",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "Servidor web i de transferència d'arxius",
                        "value": 40
                    },
                    "UF2": {
                        "code": "UF2",
                        "name": "Servidors d'aplicacions",
                        "value": 70
                    },
                    "UF3": {
                        "code": "UF3",
                        "name": "Desplegament",
                        "value": 80
                    },
                    "UF4": {
                        "code": "UF4",
                        "name": "control de versions i documentació",
                        "value": 100
                    }
                }
            },
            "MP09": {
                "code": "MP09",
                "name": "Disseny d'interfícies Web",
                "hours": "66",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "Disseny de la interfície",
                        "value": 80
                    },
                    "UF2": {
                        "code": "UF2",
                        "name": "Elements multimèdia: creació i integració",
                        "value": 30
                    },
                    "UF3": {
                        "code": "UF3",
                        "name": "Accessibilitat i usabilitat web",
                        "value": 50
                    }
                }
            },
            "DUAL": {
                "code": "DUAL",
                "name": "Apps Híbrides i Javascript entorn servidor",
                "hours": "200",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "NodeJS",
                        "value": 100
                    },
                    "UF2": {
                        "code": "UF2",
                        "name": "Apps Híbrides amb Cordova",
                        "value": 110
                    }
                }
            },
            "Proyecto": {
                "code": "PR",
                "name": "Credito de Sintesis",
                "hours": "400",
                "ufs": {
                    "UF1": {
                        "code": "UF1",
                        "name": "Proyecto",
                        "value": 200
                    }
                }
            }
        }
    }

    $('div#test-swipe-3 > ul.collapsible').collapsible();

    $.each(info['modules'], function(module) {
        $('div#test-swipe-3 > ul.collapsible').append(`<li><div class="collapsible-header">${module}</div></li>`);
        $.each(info['modules'][module]['ufs'], function (ufs) {
            let uf = info['modules'][module]['ufs'][ufs];
            let checkboxUf = `<p> <label> <input type="checkbox" /> <span> ${uf['code']}:  ${uf['name']} </span> </label> </p>`;
            $('div#test-swipe-3 > ul.collapsible > li:last-child').append(`<div class="collapsible-body">${checkboxUf}</div>`);
                
            let checkboxSelector = 'div#test-swipe-3 > ul.collapsible > li:last-child > div.collapsible-body:last-child input[type="checkbox"]'

            $(checkboxSelector).data("precio",uf["value"]);
            $(checkboxSelector).click(addOrLowerPrice);
            
        });    
    });
}

function addOrLowerPrice() {
    if (this.checked) {
        console.log(`Add ${ $(this).data("precio") }`);
    } else {
        console.log(`Retrieve ${ $(this).data("precio") }`);
    }
}