///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [16, -23.5],
		zoom: 9,
		minZoom: 9,
		maxZoom: 13,
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////

//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Temperatura e teledetección<br>en Cabo Verde<br>';
	 return div;
	};
	title2.addTo(map);

//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/composi.png"  width="312px" height="150px" ></img></a>';
	 return div;
	};
	title1.addTo(map);


//Logo CLIMACAVE
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/CLIMACAVE LOGO _transparencia.png" width="135px" height="94px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 



///////////Cartografía de referencia///////////
var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2023 <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2023</strong></a>',
	}).addTo(map);		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    attribution: '| <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2023</strong></a>'
    })
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: ' ',
    pane: 'labels'
    }).addTo(map)


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: 'Map data &copy'
	})

var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});

var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>',
	});

//MDT
 var relieve = L.imageOverlay('images/MDT_900_MOD.png',
  imageBounds = [
    [17.2036,-25.3621],
    [17.2032,-22.662],
    [14.7995,-25.3461],
    [14.7991,-22.662]

  ]).addTo(map)


relieve.setOpacity(0.15);


//Mapas en formato imagen
var m1 = L.imageOverlay('images/sci.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])
 
 var m10 = L.imageOverlay('images/at_savi.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])


var m11 = L.imageOverlay('images/ferrous_iron.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])



var m12 = L.imageOverlay('images/g_savi.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])

var m13 = L.imageOverlay('images/io.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])


var m2 = L.imageOverlay('images/lst.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])

var m22 = L.imageOverlay('images/aireee.png',
  imageBounds = [
    [17.2038,-25.361],
    [14.802,-22.658]

  ]).addTo(map)

var m3 = L.imageOverlay('images/ndsi.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])

var m4 = L.imageOverlay('images/ndvi.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])

var m9 = L.imageOverlay('images/srmirred.png',
  imageBounds = [
    [17.2038,-25.362],
    [14.802,-22.661]

  ])

var m23 = L.imageOverlay('images/t_aire.png',
  imageBounds = [
    [17.2038,-25.361],
    [14.802,-22.665]

  ])



///////////Otras funcionalidades
//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[16, -24], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);

///////////Estilo de las capas especificas del visor///////////

//estilo mapa Cambio
function getColor2(a) {
	
return a < 0.312? '#1A9640' :
	a < 0.625? '#58B352':
	a < 80? '#E75B3A':
	a < 100? '#D7191B':
	
	'#C2523C';
};


function style2(feature) {
	return {
		
		weight: 2,
		opacity: 1,
		color: 'grey',
		dashArray: '0',
		fillOpacity: 0
	};
};

function popup2(feature, layer) {
	if (feature.properties && feature.properties.Ilha1) {
		layer.bindTooltip("<strong>Illa: </strong>"+feature.properties.Ilha1,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson2 = L.geoJson(TCR, {
	style: style2,
	onEachFeature: popup2
});


var mapa2 = L.layerGroup([geojson2]).addTo(map);


//BASE TREE
var baseTree = [
	{ label: "<strong>Limpar mapa", layer: osm3 },
	{
	label: '<strong>Temperatura do aire',
	children: [
		{ label: "Temperatura do aire media máxima (datos meteorolóxicos)", layer: m22 },
		{ label: "Temperatura do aire media máxima (datos de teledetección)", layer: m23 },

	]},
	{
	label: '<strong>Índices de teledetección',
	children: [


		{ label: "Índice LST", layer: m2 },
		{ label: "Índice NDVI", layer: m4 },
		{ label: "Índice ATSAVI", layer: m10 },
		{ label: "Índice GSAVI", layer: m12 },
		{ label: "Índice SRMIR/Red", layer: m9 },
		{ label: "Índice NDSI", layer: m3 },
		{ label: "Índice Ferrous Iron", layer: m11 },
		{ label: "Índice IO", layer: m13 },
		{ label: "Índice SCI", layer: m1 },
		
	]},
	
];	
	
//OVERLAY TREE	
var overlayTree = {
	label: 'Mapas de referencia',
	children: [
	
		//{ label: "<b>Límites de Comunidades Autónomas", layer: comunidades},
		{ label: "Relevo", layer: relieve},
		{ label: "OpenStreetMap", layer: osm},
		{ label: "Toponimia", layer: positronLabels},

	]
};	

//leyenda modelo espacial 

var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'SCI medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m1,
		image:'<img src="images/lenda1.png"',
			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices SCI. Máscara de nubes aplicada a cada imaxe de satélite individualmente <br><br> Indicador da composición mineral do solo'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 

				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:'<br><img src="images/SCI_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);

var htmlLegend10 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'ATSAVI medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m10,
		image:'<img src="images/lenda1.png"',
			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices ATSAVI. Máscara de nubes aplicada a cada imaxe de satélite individualmente'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Indicador de área foliar ou biomasa da vexetación'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {  
				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {


				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:'<br><img src="images/ATSAVI_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend10);


var htmlLegend11 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Ferrous Iron medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m11,
		image:'<img src="images/lenda1.png"',
			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices Ferrous Iron. Máscara de nubes aplicada a cada imaxe de satélite individualmente<br><br>Indicador da alteración das rochas e da súa composición mineral específica'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 

				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/FERROUS IRON_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend11);

var htmlLegend12 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'GSAVI medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m12,
		image:'<img src="images/lenda12.png"',
			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices GSAVI. Máscara de nubes aplicada a cada imaxe de satélite individualmente<br><br>Indicador de área foliar ou biomasa da vexetación'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 

				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/GSAVI_Leyenda.jpg" width="150px" height="220px" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend12);

var htmlLegend13 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'IO medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m13,
		image:'<img src="images/lenda1.png"',
			
			elements: [{label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices IO. Máscara de nubes aplicada a cada imaxe de satélite individualmente<br><br>Indicador da alteración das rochas e da súa composición mineral específica'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 

				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {label:'<br><img src="images/IO_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend13);

var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media superficial na estación seca (LST)<br>Período 2013-2020<br>'+"<\h3>",
			layer: m2,
		image:'<img src="images/lenda2.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Algoritmo mono-window para a estimación da temperatura superficial con corrección de emisividade a partir dun metodo de limiares de NDVI e proporción de vexetación. Máscara de nubes aplicada a cada imaxe de satélite individualmente'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Expresa a temperatura superficial da vexetación, zonas de solo espido ou outras ocupacións do solo'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:'<br><img src="images/LST_Leyenda.jpg" width="150px" height="220px" ></img><br>',



				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);


var htmlLegend22 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura do aire media máxima anual na estación seca (Periodo 2013-2020). <br>Modelo dende datos meteorolóxicos.<br>'+"<\h3>",
			layer: m22,
		image:'<img src="images/lenda_aire.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Modelización estatística e interpolación espacial a partir de datos observados en estacións meteorolóxicas'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:'<br><img src="images/lenda_aire.png" width="150px" height="220px" ></img><br>',



				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorología e Geofísica (INMG) e a Agencia Estatal de Meteorología (AEMET).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend22);

var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'NDSI medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m3,
		image:'<img src="images/lenda1.png"',
			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices NDSI. Máscara de nubes aplicada a cada imaxe de satélite individualmente <br><br> Indicador de superficie de solo branco'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {label:'<br><img src="images/NDSI_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			


			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);

var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'NDVI medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m4,
		image:'<img src="images/lenda1.png"',

			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices NDVI. Máscara de nubes aplicada a cada imaxe de satélite individualmente'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Indicador de cobertura, vigor ou biomasa da vexetación'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/NDVI_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}	

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);

	var htmlLegend9 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'SRMIR/Red medio na estación seca<br>Período 2013-2020<br>'+"<\h3>",
			layer: m9,
		image:'<img src="images/lenda1.png"',

			
			elements: [{
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media temporal dos índices SRMIR/Red. Máscara de nubes aplicada a cada imaxe de satélite individualmente<br><br>Indicador de cobertura, vigor ou biomasa da vexetación'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 30 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/SRMIRRed_Leyenda.jpg" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) a partir de 18-28 imaxes Landsat 8,9 da colección 2 e o nivel 1 en función do tile. Hora de adquisición aproximada 11:52 UTC.<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			


			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend9);	


var htmlLegend23 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura do aire media máxima anual na estación seca (Periodo 2013-2020). <br>Modelo dende datos de teledetección e relevo.<br>'+"<\h3>",
			layer: m23,
		image:'<img src="images/lenda_aire.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Modelización mediante algoritmo Random Forest (a través de árbores de decisión) a partir de datos de temperatura do aire media máxima anual (modelo espacial de datos meteorolóxicos), LST e relevo'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Resolución espacial: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:'<br><img src="images/lenda_aire.png" width="150px" height="220px" ></img><br>',



				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorología e Geofísica (INMG) e a Agencia Estatal de Meteorología (AEMET).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend23);






//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});