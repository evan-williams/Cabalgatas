var selectorText = '.text';
var selectorMenu = '.menu';
var selectorLanguageLinks = '.language a';

var dataSpanish = 'sp';
var dataEnglish = 'en';

$(document).ready(function () {
    insertMenu();
    attachEvents();
    setLanguageValues();
});

var insertMenu = function () {
    $.get('/bits/menu.htm', null, function (result) {
        $(selectorMenu).html(result);
        setLanguageValues();
    });
};

var attachEvents = function () {
    $(selectorMenu).delegate(selectorLanguageLinks, 'click', eventLanguageChange);
};

var eventMenuLoaded = function (e) {
    setLanguageValues();
};

var eventLanguageChange = function (e) {
    var language = $(this).attr('data');
    actionSetLanguage(language);
};

var actionSetLanguage = function (language) {
    $.cookie('lang', language, { expires: 3650 });
    setLanguageValues();
};

var setLanguageValues = function () {
    var currentLanguage = $.cookie('lang');

    // Default if first time
    if (!currentLanguage) {
        currentLanguage = dataSpanish;
        actionSetLanguage(currentLanguage);
    }
    
    $(selectorText).each(function () {
        // Home
        setTextIfLang(this, currentLanguage, 'txt-home-title', dataSpanish, 'Cabalgatas Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-home-title', dataEnglish, 'Cabalgatas Lago Puelo');

        setTextIfLang(this, currentLanguage, 'txt-home-subtitle', dataSpanish, 'Cabalgatas Patagónicas - Parque Nacional Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-home-subtitle', dataEnglish, 'Patagonian Horse Treks - Lago Puelo National Park');

        setTextIfLang(this, currentLanguage, 'txt-home-paragraph', dataSpanish, '"Una insuperable forma de internarse en el paisaje cordillerano para apreciar de cerca la deslumbrante naturaleza de esta región andino patagónica."');
        setTextIfLang(this, currentLanguage, 'txt-home-paragraph', dataEnglish, '"An unbeatable way to see the Andes mountains and to experience first-hand the natural beauty this corner of Patagonia has to offer."');

        setTextIfLang(this, currentLanguage, 'txt-home-key1', dataSpanish, 'Guía con título de guardabosque de la región Andino-Patagónica, único autorizado para realizar cabalgatas dentro del parque.');
        setTextIfLang(this, currentLanguage, 'txt-home-key1', dataEnglish, 'Owned and operated by the only park-ranger authorised to lead horse treks in the national park.');

        setTextIfLang(this, currentLanguage, 'txt-home-key2', dataSpanish, 'Nuestros guías son baqueanos y bilingües en castellano e inglés.');
        setTextIfLang(this, currentLanguage, 'txt-home-key2', dataEnglish, 'Run by local, knowledable guides fluent in English and Spanish.');

        setTextIfLang(this, currentLanguage, 'txt-home-key3', dataSpanish, 'Estamos en la entrada al Parque Nacional y ofrecemos una amplia gama de excursiones desde una hora hasta varios días.');
        setTextIfLang(this, currentLanguage, 'txt-home-key3', dataEnglish, 'We are located at the entrance to the park and offer a variety of trips from 1 hour to several days.');

        setTextIfLang(this, currentLanguage, 'txt-home-key4', dataSpanish, 'Disfrute del privilegio de tener el Parque Nacional Puelo en la puerta de su casa.');
        setTextIfLang(this, currentLanguage, 'txt-home-key4', dataEnglish, 'Enjoy the privilige of having the national park on your doorstep.');

        //Menu
        setTextIfLang(this, currentLanguage, 'lnk-menu-home', dataSpanish, 'Casa');
        setTextIfLang(this, currentLanguage, 'lnk-menu-home', dataEnglish, 'Home');

        setTextIfLang(this, currentLanguage, 'lnk-menu-prices', dataSpanish, 'Precios');
        setTextIfLang(this, currentLanguage, 'lnk-menu-prices', dataEnglish, 'Prices');

        setTextIfLang(this, currentLanguage, 'lnk-menu-location', dataSpanish, 'Ubicacion');
        setTextIfLang(this, currentLanguage, 'lnk-menu-location', dataEnglish, 'Location');

        setTextIfLang(this, currentLanguage, 'lnk-menu-photos', dataSpanish, 'Fotos');
        setTextIfLang(this, currentLanguage, 'lnk-menu-photos', dataEnglish, 'Photos');

        setTextIfLang(this, currentLanguage, 'lnk-menu-about', dataSpanish, 'Sobre');
        setTextIfLang(this, currentLanguage, 'lnk-menu-about', dataEnglish, 'About');

        setTextIfLang(this, currentLanguage, 'lnk-menu-contact', dataSpanish, 'Contacto');
        setTextIfLang(this, currentLanguage, 'lnk-menu-contact', dataEnglish, 'Contact');

        setTextIfLang(this, currentLanguage, 'lnk-menu-accomodation', dataSpanish, 'Alojamiento');
        setTextIfLang(this, currentLanguage, 'lnk-menu-accomodation', dataEnglish, 'Accomodation');

        setTextIfLang(this, currentLanguage, 'lnk-menu-english', dataSpanish, 'Ingles');
        setTextIfLang(this, currentLanguage, 'lnk-menu-english', dataEnglish, 'English');

        setTextIfLang(this, currentLanguage, 'lnk-menu-spanish', dataSpanish, 'Castellano');
        setTextIfLang(this, currentLanguage, 'lnk-menu-spanish', dataEnglish, 'Spanish');

        //About
        setTextIfLang(this, currentLanguage, 'txt-about-ivan', dataSpanish, "Iván, nacido y criado en Lago Puelo, se ha dedicado a los caballos desde los 7 años. Su conocimiento del Parque Nacional Lago Puelo, su flora, su fauna y su geografía, sera invalorable para disfrutar de su entorno a pleno. Esto es fruto tanto de haber sido criado acá, como así de sus conocimientos adquiridos a través de sus estudios al recibirse de Guardaparque de la región Andino-patagónica. Trabajó con caballos en una estancia en Missisipi en los Estados Unidos antes de viajar a Europa. Se radicó en Escocia durante unos años antes de volver a Lago Puelo con su esposa Liza, para criar a sus dos hijitas en esta esquinita del paraíso.");
        setTextIfLang(this, currentLanguage, 'txt-about-ivan', dataEnglish, "Iván was born and raised in Lago Puelo. He has owned horses since he was 7 years old. His knowledge of the National Park, it's flora, fauna and geography, come from a lifetime of living in the area and from his studies as a Forest Ranger, specialising in the Andean Patagonian Region. He spent some time in Missisippi, in the USA, working on a horse ranch, before travelling to Europe. He settled in Scotland for a number of years, until he returned to Lago Puelo with his wife Liza, to raise their 2 young daughters, Chiara and Zoe in this little corner of paradise.");

        setTextIfLang(this, currentLanguage, 'txt-about-liza', dataSpanish, 'Liza también se crió en Lago Puelo, de padre argentino y madre escocesa, y creció hablando los dos idiomas. Al finalizar el secundario en Lago Puelo, viajó a Escocia donde se recibió de traductora e intérprete. A través de sus estudios viajó a México, España y Francia, antes de volver a radicarse en Lago Puelo. Está casada con Iván y durante los meses de invierno dirige su propia escuela de inglés junto con su hermana. Sin embargo, dedica la mayor parte de su tiempo a sus dos pequeñas.');
        setTextIfLang(this, currentLanguage, 'txt-about-liza', dataEnglish, 'Liza was also raised in Lago Puelo. She is half Scottish and half Argentinian and was brought up speaking both laguages. After finishing secondary school in Lago Puelo, she travelled to Scotland, where she completed a University degree in Translating and Interpreting. Her studies have taken her to Mexico, Spain and France before settling back in Lago Puelo. She is married to Iván and runs an English School during the winter months together with her sister. Most of the time, however, she runs around after their two young daughters.');

        //Contact
        setTextIfLang(this, currentLanguage, 'txt-contact-header', dataSpanish, 'Contáctese para organisar un paseo inolvidable');
        setTextIfLang(this, currentLanguage, 'txt-contact-header', dataEnglish, 'Contact us now to organise a booking');
        
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-ivan', dataSpanish, 'Celular (Iván)');
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-ivan', dataEnglish, 'Mobile (Iván)');

        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-liza', dataSpanish, 'Celular (Liza)');
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-liza', dataEnglish, 'Mobile (Liza)');

        setTextIfLang(this, currentLanguage, 'txt-contact-email', dataSpanish, 'Email');
        setTextIfLang(this, currentLanguage, 'txt-contact-email', dataEnglish, 'Email');

        setTextIfLang(this, currentLanguage, 'txt-contact-address', dataSpanish, 'Dirección');
        setTextIfLang(this, currentLanguage, 'txt-contact-address', dataEnglish, 'Address');

        //Prices
        setTextIfLang(this, currentLanguage, 'txt-prices-header', dataSpanish, 'Precios de algunos de nuestros recorridos (2011-12)');
        setTextIfLang(this, currentLanguage, 'txt-prices-header', dataEnglish, 'Prices for some of our excursions (2011-12)');
        
        setTextIfLang(this, currentLanguage, 'txt-prices-destination', dataSpanish, 'Destino');
        setTextIfLang(this, currentLanguage, 'txt-prices-destination', dataEnglish, 'Destination');

        setTextIfLang(this, currentLanguage, 'txt-prices-duration', dataSpanish, 'Duración');
        setTextIfLang(this, currentLanguage, 'txt-prices-duration', dataEnglish, 'Duration');

        setTextIfLang(this, currentLanguage, 'txt-prices-perhorse', dataSpanish, 'Cada caballo (pesos)');
        setTextIfLang(this, currentLanguage, 'txt-prices-perhorse', dataEnglish, 'Per horse (pesos)');

        setTextIfLang(this, currentLanguage, 'txt-prices-route', dataSpanish, 'Ruta');
        setTextIfLang(this, currentLanguage, 'txt-prices-route', dataEnglish, 'Route');

        setTextIfLang(this, currentLanguage, 'lnk-prices-showmap', dataSpanish, 'En el mapa');
        setTextIfLang(this, currentLanguage, 'lnk-prices-showmap', dataEnglish, 'Show on map');

        setTextIfLang(this, currentLanguage, 'txt-prices-1-destination', dataSpanish, 'Paseo de los Viejos Pobladores');
        setTextIfLang(this, currentLanguage, 'txt-prices-1-destination', dataEnglish, 'Trip round the farms of the first settlers');

        setTextIfLang(this, currentLanguage, 'txt-prices-2-destination', dataSpanish, 'Mirador del Cerro Currumahuida');
        setTextIfLang(this, currentLanguage, 'txt-prices-2-destination', dataEnglish, 'Viewpoint on the Currumahuida mountain');

        setTextIfLang(this, currentLanguage, 'txt-prices-3-destination', dataSpanish, 'Cuenca del Río Azul y costa del Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-prices-3-destination', dataEnglish, 'Along the River Azul to the coast of Lake Puelo');

        setTextIfLang(this, currentLanguage, 'txt-prices-4-destination', dataSpanish, '´Puesto de Maninga´ en el Cerro Currumahuida');
        setTextIfLang(this, currentLanguage, 'txt-prices-4-destination', dataEnglish, '´Maninga´s  refuge´ on the Currumahuida  mountain');

        setTextIfLang(this, currentLanguage, 'txt-prices-5-destination', dataSpanish, 'Puesto de Gendarmería sobre el Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-prices-5-destination', dataEnglish, 'Gendarmerie base on Lake Puelo');

        setTextIfLang(this, currentLanguage, 'txt-prices-6-destination', dataSpanish, 'Límite con Chile');
        setTextIfLang(this, currentLanguage, 'txt-prices-6-destination', dataEnglish, 'Border with Chile');

        setTextIfLang(this, currentLanguage, 'txt-prices-other', dataSpanish, 'Consulte precios por paseos más largos (ej: Paraje El Turbio, naciente del Río Chubut).');
        setTextIfLang(this, currentLanguage, 'txt-prices-other', dataEnglish, 'We also offer longer trips lasting several days (eg El Turbio , start of the river Chubut).');
        
        //Accomodation
        setTextIfLang(this, currentLanguage, 'txt-accomodation-header', dataSpanish, 'El Portal Del Lago Departamentos');
        setTextIfLang(this, currentLanguage, 'txt-accomodation-header', dataEnglish, 'El Portal Del Lago Apartments');

        setTextIfLang(this, currentLanguage, 'txt-accomodation-tariffs', dataSpanish, 'Tarifas 2011-12');
        setTextIfLang(this, currentLanguage, 'txt-accomodation-tariffs', dataEnglish, 'Tariffs 2011-12');

        setTextIfLang(this, currentLanguage, 'txt-accomodation-point1', dataSpanish, 'Totalmente equipados para 2 o 3 personas');
        setTextIfLang(this, currentLanguage, 'txt-accomodation-point1', dataEnglish, 'Fully equipped for 2 or 3 people');

        setTextIfLang(this, currentLanguage, 'txt-accomodation-point2', dataSpanish, 'Planta baja con jardín y parrilla');
        setTextIfLang(this, currentLanguage, 'txt-accomodation-point2', dataEnglish, 'Ground floor flat with garden and barbeque');

        setTextIfLang(this, currentLanguage, 'txt-accomodation-point3', dataSpanish, 'Atendido por sus dueños');
        setTextIfLang(this, currentLanguage, 'txt-accomodation-point3', dataEnglish, 'Owners on site');

        setTextIfLang(this, currentLanguage, 'txt-accprices-season', dataSpanish, 'Temporada');
        setTextIfLang(this, currentLanguage, 'txt-accprices-season', dataEnglish, 'Season');

        setTextIfLang(this, currentLanguage, 'txt-accprices-dates', dataSpanish, 'Fechas');
        setTextIfLang(this, currentLanguage, 'txt-accprices-dates', dataEnglish, 'Dates');
        
        setTextIfLang(this, currentLanguage, 'txt-accprices-2pax', dataSpanish, '2 pax');
        setTextIfLang(this, currentLanguage, 'txt-accprices-2pax', dataEnglish, '2 per');

        setTextIfLang(this, currentLanguage, 'txt-accprices-3pax', dataSpanish, '3 pax');
        setTextIfLang(this, currentLanguage, 'txt-accprices-3pax', dataEnglish, '3 per');
        
        setTextIfLang(this, currentLanguage, 'txt-accprices-lowseason', dataSpanish, 'Baja');
        setTextIfLang(this, currentLanguage, 'txt-accprices-lowseason', dataEnglish, 'Low');

        setTextIfLang(this, currentLanguage, 'txt-accprices-midseason', dataSpanish, 'Media');
        setTextIfLang(this, currentLanguage, 'txt-accprices-midseason', dataEnglish, 'Mid');

        setTextIfLang(this, currentLanguage, 'txt-accprices-highseason', dataSpanish, 'Alta');
        setTextIfLang(this, currentLanguage, 'txt-accprices-highseason', dataEnglish, 'High');

        setTextIfLang(this, currentLanguage, 'txt-accprices-lowdates', dataSpanish, 'Abril a Octubre');
        setTextIfLang(this, currentLanguage, 'txt-accprices-lowdates', dataEnglish, 'April to October');

        setTextIfLang(this, currentLanguage, 'txt-accprices-middates', dataSpanish, 'November a 19 Diciembre y Marzo');
        setTextIfLang(this, currentLanguage, 'txt-accprices-middates', dataEnglish, 'November to 19 December and March');

        setTextIfLang(this, currentLanguage, 'txt-accprices-highdates', dataSpanish, '20 Diciembre a fin de Febrero, Semana Santa, Vacaciones de Invierno');
        setTextIfLang(this, currentLanguage, 'txt-accprices-highdates', dataEnglish, '20 December to end of February, Easter, Winter Holidays');

        setTextIfLang(this, currentLanguage, 'txt-accprices-photos', dataSpanish, 'Fotos');
        setTextIfLang(this, currentLanguage, 'txt-accprices-photos', dataEnglish, 'Photos');
        
        //Location
        setTextIfLang(this, currentLanguage, 'txt-location-header', dataSpanish, 'Estamos justo en la entrada al Parque Nacional');
        setTextIfLang(this, currentLanguage, 'txt-location-header', dataEnglish, 'We are located at the entrance to the national park');
    });
};

var setTextIfLang = function (element, currentLanguage, textName, language, text) {
    if (currentLanguage == language && $(element).hasClass(textName)) {
        $(element).text(text);
    }
};
