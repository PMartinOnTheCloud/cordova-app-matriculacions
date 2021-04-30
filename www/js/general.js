$(document).ready( function () {
    displayUfs();
    displayPersonal();
});

function displayUfs() {
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

    $('div#test-swipe-3 a#lock').click(lockUfs);
    $('div#test-swipe-3 a#unlock').click(unlockUfs);
    $('div#test-swipe-3 a#selectAll').click(selectAll);
    $('div#test-swipe-3 a#deselectAll').click(deselectAll);

    $('div#test-swipe-3 > ul.collapsible').before(`<ul> <li><strong>PREU MATRICULA:</strong> <span id="totalPrice">0 €<span></li> </ul>`);

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
        changeTotalPrice($(this).data("precio"),"+");
    } else {
        changeTotalPrice($(this).data("precio"),"-");
    }
}

function changeTotalPrice(precio, sign) {
    if (sign == "+") {
        $('div#test-swipe-3 > ul > li > span#totalPrice').text(getCurrentPrice() + precio + " €");
    } else if (sign == "-") {
        $('div#test-swipe-3 > ul > li > span#totalPrice').text(getCurrentPrice() - precio + " €");
    }
}

function getCurrentPrice() {
    return parseInt($('div#test-swipe-3 > ul > li > span#totalPrice').text());
}


function lockUfs() {
    $('div#test-swipe-3 a#selectAll').attr("disabled",true);
    $('div#test-swipe-3 a#deselectAll').attr("disabled",true);
    $('div#test-swipe-3 a#lock').css('display', "none");
    $('div#test-swipe-3 a#unlock').css('display', "inline-block");
    $('div#test-swipe-3 input[type="checkbox"]').attr("disabled",true);
}

function unlockUfs() {
    $('div#test-swipe-3 a#selectAll').attr("disabled",false);
    $('div#test-swipe-3 a#deselectAll').attr("disabled",false);
    $('div#test-swipe-3 a#lock').css('display', "inline-block");
    $('div#test-swipe-3 a#unlock').css('display', "none");
    $('div#test-swipe-3 input[type="checkbox"]').attr("disabled",false);
}


function displayPersonal() {
    $('div#test-swipe-4 a#edit').click(editData);
    $('div#test-swipe-4 a#accept').click(saveData);
}

function editData() {

    $('div#test-swipe-4 a#accept').css('display', "inline-block");
    $('div#test-swipe-4 a#edit').css('display', "none");

    $('div#test-swipe-4 span').css('display','none');

    valorNom = $('div#test-swipe-4 div#nomAlumn > span').text();
    valorCognom = $('div#test-swipe-4 div#cognomAlumn > span').text();
    valorEdat = $('div#test-swipe-4 div#edatAlumn > span').text();
    valorDNI = $('div#test-swipe-4 div#dniAlumn > span').text();
    
    $('div#test-swipe-4 div#nomAlumn > input').val(valorNom);
    $('div#test-swipe-4 div#cognomAlumn > input').val(valorCognom);
    $('div#test-swipe-4 div#edatAlumn > input').val(valorEdat);
    $('div#test-swipe-4 div#dniAlumn > input').val(valorDNI);

    $('div#test-swipe-4 input').css('display','inline-block');
    



}

function saveData() {
    $('div#test-swipe-4 a#edit').css('display', "inline-block");
    $('div#test-swipe-4 a#accept').css('display', "none");

    $('div#test-swipe-4 input').css('display','none');

    valorNom = $('div#test-swipe-4 div#nomAlumn > input').val();
    valorCognom = $('div#test-swipe-4 div#cognomAlumn > input').val();
    valorEdat = $('div#test-swipe-4 div#edatAlumn > input').val();
    valorDNI = $('div#test-swipe-4 div#dniAlumn > input').val();

    $('div#test-swipe-4 div#nomAlumn > span').text(valorNom);
    $('div#test-swipe-4 div#cognomAlumn > span').text(valorCognom);
    $('div#test-swipe-4 div#edatAlumn > span').text(valorEdat);
    $('div#test-swipe-4 div#dniAlumn > span').text(valorDNI);

    $('div#test-swipe-4 span').css('display','inline-block');

}

function selectAll() {
    $('div#test-swipe-3 input[type="checkbox"]').each(function() {
        if (!this.checked) {
            $(this).click();
        }
    });
}

function deselectAll() {
    $('div#test-swipe-3 input[type="checkbox"]').each(function() {
        if (this.checked) {
            $(this).click();
        }
    });
}