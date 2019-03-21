import React from 'react'

import map from 'lodash/map'

import afghanistanSvg from './icons/afghanistan.svg'
import albaniaSvg from './icons/albania.svg'
import algeriaSvg from './icons/algeria.svg'
import americanSamoaSvg from './icons/american-samoa.svg'
import andorraSvg from './icons/andorra.svg'
import angolaSvg from './icons/angola.svg'
import antiguaAndBarbudaSvg from './icons/antigua-and-barbuda.svg'
import argentinaSvg from './icons/argentina.svg'
import armeniaSvg from './icons/armenia.svg'
import arubaSvg from './icons/aruba.svg'
import australiaSvg from './icons/australia.svg'
import austriaSvg from './icons/austria.svg'
import azerbaijanSvg from './icons/azerbaijan.svg'
import bahamasSvg from './icons/bahamas.svg'
import bahrainSvg from './icons/bahrain.svg'
import bangladeshSvg from './icons/bangladesh.svg'
import barbadosSvg from './icons/barbados.svg'
import belarusSvg from './icons/belarus.svg'
import belgiumSvg from './icons/belgium.svg'
import belizeSvg from './icons/belize.svg'
import beninSvg from './icons/benin.svg'
import bermudaSvg from './icons/bermuda.svg'
import bhutanSvg from './icons/bhutan.svg'
import boliviaSvg from './icons/bolivia.svg'
import bosniaAndHerzegovinaSvg from './icons/bosnia-and-herzegovina.svg'
import botswanaSvg from './icons/botswana.svg'
import brazilSvg from './icons/brazil.svg'
import bruneiSvg from './icons/brunei.svg'
import bulgariaSvg from './icons/bulgaria.svg'
import burkinaFasoSvg from './icons/burkina-faso.svg'
import burundiSvg from './icons/burundi.svg'
import cambodiaSvg from './icons/cambodia.svg'
import cameroonSvg from './icons/cameroon.svg'
import canadaSvg from './icons/canada.svg'
import capeVerdeSvg from './icons/cape-verde.svg'
import centralAfricanRepublicSvg from './icons/central-african-republic.svg'
import chadSvg from './icons/chad.svg'
import chileSvg from './icons/chile.svg'
import chinaSvg from './icons/china.svg'
import colombiaSvg from './icons/colombia.svg'
import comorosSvg from './icons/comoros.svg'
import cookIslandsSvg from './icons/cook-islands.svg'
import costaRicaSvg from './icons/costa-rica.svg'

// import from './icons/croatia.svg'
// import from './icons/cuba.svg'
// import from './icons/curacao.svg'
// import from './icons/cyprus.svg'
// import from './icons/czech-republic.svg'
// import from './icons/democratic-republic-of-congo.svg'
// import from './icons/denmark.svg'
// import from './icons/djibouti.svg'
// import from './icons/dominica.svg'
// import from './icons/dominican-republic.svg'
// import from './icons/east-timor.svg'
// import from './icons/ecuador.svg'
// import from './icons/egypt.svg'
// import from './icons/england.svg'
// import from './icons/equatorial-guinea.svg'
// import from './icons/eritrea.svg'
// import from './icons/estonia.svg'
// import from './icons/ethiopia.svg'
// import from './icons/european-union.svg'
// import from './icons/falkland-islands.svg'
// import from './icons/faroe-islands.svg'
// import from './icons/fiji.svg'
// import from './icons/finland.svg'
// import from './icons/france.svg'
// import from './icons/french-polynesia.svg'
// import from './icons/gabon.svg'
// import from './icons/galapagos-islands.svg'
// import from './icons/gambia.svg'
// import from './icons/georgia.svg'
// import from './icons/germany.svg'
// import from './icons/ghana.svg'
// import from './icons/gibraltar.svg'
// import from './icons/greece.svg'
// import from './icons/greenland.svg'
// import from './icons/grenada.svg'
// import from './icons/guam.svg'
// import from './icons/guatemala.svg'
// import from './icons/guernsey.svg'
// import from './icons/guinea-bissau.svg'
// import from './icons/guinea.svg'
// import from './icons/guyana.svg'
// import from './icons/haiti.svg'
// import from './icons/hawaii.svg'
// import from './icons/honduras.svg'
// import from './icons/hong-kong.svg'
// import from './icons/hungary.svg'
// import from './icons/iceland.svg'
// import from './icons/india.svg'
// import from './icons/indonesia.svg'
// import from './icons/iran.svg'
// import from './icons/iraq.svg'
// import from './icons/ireland.svg'
// import from './icons/isle-of-man.svg'
// import from './icons/israel.svg'
// import from './icons/italy.svg'
// import from './icons/ivory-coast.svg'
// import from './icons/jamaica.svg'
// import from './icons/japan.svg'
// import from './icons/jersey.svg'
// import from './icons/jordan.svg'
// import from './icons/kazakhstan.svg'
// import from './icons/kenya.svg'
// import from './icons/kiribati.svg'
// import from './icons/kosovo.svg'
// import from './icons/kuwait.svg'
// import from './icons/kyrgyzstan.svg'
// import from './icons/laos.svg'
// import from './icons/latvia.svg'
// import from './icons/lebanon.svg'
// import from './icons/lesotho.svg'
// import from './icons/liberia.svg'
// import from './icons/libya.svg'
// import from './icons/liechtenstein.svg'
// import from './icons/lithuania.svg'
// import from './icons/luxembourg.svg'
// import from './icons/macao.svg'
// import from './icons/madagascar.svg'
// import from './icons/madeira.svg'
// import from './icons/malawi.svg'
// import from './icons/malaysia.svg'
// import from './icons/maldives.svg'
// import from './icons/mali.svg'
// import from './icons/malta.svg'
// import from './icons/marshall-island.svg'
// import from './icons/martinique.svg'
// import from './icons/mauritania.svg'
// import from './icons/mauritius.svg'
// import from './icons/melilla.svg'
// import from './icons/mexico.svg'
// import from './icons/micronesia.svg'
// import from './icons/moldova.svg'
// import from './icons/monaco.svg'
// import from './icons/mongolia.svg'
// import from './icons/montenegro.svg'
// import from './icons/montserrat.svg'
// import from './icons/morocco.svg'
// import from './icons/mozambique.svg'
// import from './icons/myanmar.svg'
// import from './icons/namibia.svg'
// import from './icons/nato.svg'
// import from './icons/nauru.svg'
// import from './icons/nepal.svg'
// import from './icons/netherlands.svg'
// import from './icons/new-zealand.svg'
// import from './icons/nicaragua.svg'
// import from './icons/niger.svg'
// import from './icons/nigeria.svg'
// import from './icons/niue.svg'
// import from './icons/norfolk-island.svg'
// import from './icons/north-korea.svg'
// import from './icons/northen-cyprus.svg'
// import from './icons/northern-marianas-islands.svg'
// import from './icons/norway.svg'
// import from './icons/oman.svg'
// import from './icons/orkney-islands.svg'
// import from './icons/ossetia.svg'
// import from './icons/pakistan.svg'
// import from './icons/palau.svg'
// import from './icons/palestine.svg'
// import from './icons/panama.svg'
// import from './icons/papua-new-guinea.svg'
// import from './icons/paraguay.svg'
// import from './icons/peru.svg'
// import from './icons/philippines.svg'
// import from './icons/pitcairn-islands.svg'
// import from './icons/portugal.svg'
// import from './icons/puerto-rico.svg'
// import from './icons/qatar.svg'
// import from './icons/rapa-nui.svg'
// import from './icons/republic-of-macedonia.svg'
// import from './icons/republic-of-poland.svg'
// import from './icons/republic-of-the-congo.svg'
// import from './icons/romania.svg'
// import from './icons/russia.svg'
// import from './icons/rwanda.svg'
// import from './icons/saba-island.svg'
// import from './icons/saint-kitts-and-nevis.svg'
// import from './icons/salvador.svg'
// import from './icons/samoa.svg'
// import from './icons/san-marino.svg'
// import from './icons/sao-tome-and-principe.svg'
// import from './icons/sardinia.svg'
// import from './icons/saudi-arabia.svg'
// import from './icons/scotland.svg'
// import from './icons/senegal.svg'
// import from './icons/serbia.svg'
// import from './icons/seychelles.svg'
// import from './icons/sierra-leone.svg'
// import from './icons/singapore.svg'
// import from './icons/sint-eustatius.svg'
// import from './icons/sint-maarten.svg'
// import from './icons/slovakia.svg'
// import from './icons/slovenia.svg'
// import from './icons/solomon-islands.svg'
// import from './icons/somalia.svg'
// import from './icons/somaliland.svg'
// import from './icons/south-africa.svg'
// import from './icons/south-korea.svg'
// import from './icons/south-sudan.svg'
// import from './icons/spain.svg'
// import from './icons/sri-lanka.svg'
// import from './icons/st-barts.svg'
// import from './icons/st-lucia.svg'
// import from './icons/st-vincent-and-the-grenadines.svg'
// import from './icons/sudan.svg'
// import from './icons/suriname.svg'
// import from './icons/swaziland.svg'
// import from './icons/sweden.svg'
// import from './icons/switzerland.svg'
// import from './icons/syria.svg'
// import from './icons/taiwan.svg'
// import from './icons/tajikistan.svg'
// import from './icons/tanzania.svg'
// import from './icons/thailand.svg'
// import from './icons/tibet.svg'
// import from './icons/togo.svg'
// import from './icons/tokelau.svg'
// import from './icons/tonga.svg'
// import from './icons/transnistria.svg'
// import from './icons/trinidad-and-tobago.svg'
// import from './icons/tunisia.svg'
// import from './icons/turkey.svg'
// import from './icons/turkmenistan.svg'
// import from './icons/turks-and-caicos.svg'
// import from './icons/tuvalu.svg'
// import from './icons/uganda.svg'
// import from './icons/ukraine.svg'
// import from './icons/united-arab-emirates.svg'
// import from './icons/united-kingdom.svg'
// import from './icons/united-nations.svg'
// import from './icons/united-states-of-america.svg'
// import from './icons/uruguay.svg'
// import from './icons/uzbekistn.svg'
// import from './icons/vanuatu.svg'
// import from './icons/vatican-city.svg'
// import from './icons/venezuela.svg'
// import from './icons/vietnam.svg'
// import from './icons/virgin-islands.svg'
// import from './icons/wales.svg'
// import from './icons/western-sahara.svg'
// import from './icons/yemen.svg'
// import from './icons/zambia.svg'
// import from './icons/zimbabwe.svg'

const countryList = [{
  name: 'Afghanistan',
  value: 'af',
  icon: afghanistanSvg,
}, {
  name: 'Albania',
  value: 'al',
  icon: albaniaSvg,
}, {
  name: 'Algeria',
  value: 'dz',
  icon: algeriaSvg,
}, {
  name: 'American Samoa',
  value: 'as',
  icon: americanSamoaSvg,
}, {
  name: 'Andorra',
  value: 'ad',
  icon: andorraSvg,
}, {
  name: 'Angola',
  value: 'ao',
  icon: angolaSvg,
}, {
  name: 'Antigua and Barbuda',
  value: 'ag',
  icon: antiguaAndBarbudaSvg,
}, {
  name: 'Argentina',
  value: 'ar',
  icon: argentinaSvg,
}, {
  name: 'Armenia',
  value: 'am',
  icon: armeniaSvg,
}, {
  name: 'Aruba',
  value: 'aw',
  icon: arubaSvg,
}, {
  name: 'Australia',
  value: 'au',
  icon: australiaSvg,
}, {
  name: 'Austria',
  value: 'at',
  icon: austriaSvg,
}, {
  name: 'Azerbaijan',
  value: 'az',
  icon: azerbaijanSvg,
}, {
  name: 'Bahamas',
  value: 'bs',
  icon: bahamasSvg,
}, {
  name: 'Bahrain',
  value: 'bh',
  icon: bahrainSvg,
}, {
  name: 'Bangladesh',
  value: 'bd',
  icon: bangladeshSvg,
}, {
  name: 'Barbados',
  value: 'bb',
  icon: barbadosSvg,
}, {
  name: 'Belarus',
  value: 'by',
  icon: belarusSvg,
}, {
  name: 'Belgium',
  value: 'be',
  icon: belgiumSvg,
}, {
  name: 'Belize',
  value: 'bz',
  icon: belizeSvg,
}, {
  name: 'Benin',
  value: 'bj',
  icon: beninSvg,
}, {
  name: 'Bermuda',
  value: 'bm',
  icon: bermudaSvg,
}, {
  name: 'Bhutan',
  value: 'bt',
  icon: bhutanSvg,
}, {
  name: 'Bolivia',
  value: 'bo',
  icon: boliviaSvg,
}, {
  name: 'Bosnia and Herzegovina',
  value: 'ba',
  icon: bosniaAndHerzegovinaSvg,
}, {
  name: 'Botswana',
  value: 'bw',
  icon: botswanaSvg,
}, {
  name: 'Brazil',
  value: 'br',
  icon: brazilSvg,
}, {
  name: 'Brunei',
  value: 'bn',
  icon: bruneiSvg,
}, {
  name: 'Bulgaria',
  value: 'bg',
  icon: bulgariaSvg,
}, {
  name: 'Burkina Faso',
  value: 'bf',
  icon: burkinaFasoSvg,
}, {
  name: 'Burundi',
  value: 'bi',
  icon: burundiSvg,
}, {
  name: 'Cambodia',
  value: 'kh',
  icon: cambodiaSvg,
}, {
  name: 'Cameroon',
  value: 'cm',
  icon: cameroonSvg,
}, {
  name: 'Canada',
  value: 'ca',
  icon: canadaSvg,
}, {
  name: 'Cape Verde',
  value: 'cv',
  icon: capeVerdeSvg,
}, {
  name: 'Central African Republic',
  value: 'cf',
  icon: centralAfricanRepublicSvg,
}, {
  name: 'Chad',
  value: 'td',
  icon: chadSvg,
}, {
  name: 'Chile',
  value: 'cl',
  icon: chileSvg,
}, {
  name: 'China',
  value: 'cn',
  icon: chinaSvg,
}, {
  name: 'Colombia',
  value: 'co',
  icon: colombiaSvg,
}, {
  name: 'Comoros',
  value: 'km',
  icon: comorosSvg,
}, {
  name: 'Cook Islands',
  value: 'ck',
  icon: cookIslandsSvg,
}, {
  name: 'Costa Rica',
  value: 'cr',
  icon: costaRicaSvg,
}]

export default map(countryList, ({ name, value, icon }) => ({
  name,
  value,
  view: () => (
    <div>{ name }</div>
  ),
}))
