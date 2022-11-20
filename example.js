
// JS 
  
var dateCache = {}; 
var tooltipPalette = [ 
  '#d53838', //Confirmed 
  '#FF9800', //Active 
  '#00C853', //Recovered 
  '#212121'
]; 
var countriesInfo = { 
  Andorra: { flag: '����', code: 'AD' }, 
  'United Arab Emirates': { 
    flag: '����', 
    code: 'AE'
  }, 
  Afghanistan: { flag: '����', code: 'AF' }, 
  'Antigua and Barbuda': { 
    flag: '����', 
    code: 'AG'
  }, 
  Anguilla: { flag: '����', code: 'AI' }, 
  Albania: { flag: '����', code: 'AL' }, 
  Armenia: { flag: '����', code: 'AM' }, 
  Angola: { flag: '����', code: 'AO' }, 
  Antarctica: { flag: '����', code: 'AQ' }, 
  Argentina: { flag: '����', code: 'AR' }, 
  'American Samoa': { flag: '����', code: 'AS' }, 
  Austria: { flag: '����', code: 'AT' }, 
  Australia: { flag: '����', code: 'AU' }, 
  Aruba: { flag: '����', code: 'AW' }, 
  'Åland Islands': { flag: '����', code: 'AX' }, 
  Azerbaijan: { flag: '����', code: 'AZ' }, 
  'Bosnia and Herzegovina': { 
    flag: '����', 
    code: 'BA'
  }, 
  Barbados: { flag: '����', code: 'BB' }, 
  Bangladesh: { flag: '����', code: 'BD' }, 
  Belgium: { flag: '����', code: 'BE' }, 
  'Burkina Faso': { flag: '����', code: 'BF' }, 
  Bulgaria: { flag: '����', code: 'BG' }, 
  Bahrain: { flag: '����', code: 'BH' }, 
  Burundi: { flag: '����', code: 'BI' }, 
  Benin: { flag: '����', code: 'BJ' }, 
  'Saint Barthélemy': { flag: '����', code: 'BL' }, 
  Bermuda: { flag: '����', code: 'BM' }, 
  Brunei: { flag: '����', code: 'BN' }, 
  Bolivia: { flag: '����', code: 'BO' }, 
  'Bonaire, Sint Eustatius and Saba': { 
    flag: '����', 
    code: 'BQ'
  }, 
  Brazil: { flag: '����', code: 'BR' }, 
  Bahamas: { flag: '����', code: 'BS' }, 
  Bhutan: { flag: '����', code: 'BT' }, 
  'Bouvet Island': { flag: '����', code: 'BV' }, 
  Botswana: { flag: '����', code: 'BW' }, 
  Belarus: { flag: '����', code: 'BY' }, 
  Belize: { flag: '����', code: 'BZ' }, 
  Canada: { flag: '����', code: 'CA' }, 
  'Cocos (Keeling) Islands': { 
    flag: '����', 
    code: 'CC'
  }, 
  'Congo (Kinshasa)': { flag: '����', code: 'CD' }, 
  'Central African Republic': { 
    flag: '����', 
    code: 'CF'
  }, 
  'Congo (Brazzaville)': { 
    flag: '����', 
    code: 'CG'
  }, 
  Switzerland: { flag: '����', code: 'CH' }, 
  "Cote d'Ivoire": { flag: '����', code: 'CI' }, 
  'Cook Islands': { flag: '����', code: 'CK' }, 
  Chile: { flag: '����', code: 'CL' }, 
  Cameroon: { flag: '����', code: 'CM' }, 
  China: { flag: '����', code: 'CN' }, 
  Colombia: { flag: '����', code: 'CO' }, 
  'Costa Rica': { flag: '����', code: 'CR' }, 
  Cuba: { flag: '����', code: 'CU' }, 
  'Cabo Verde': { flag: '����', code: 'CV' }, 
  Curaçao: { flag: '����', code: 'CW' }, 
  'Christmas Island': { flag: '����', code: 'CX' }, 
  Cyprus: { flag: '����', code: 'CY' }, 
  Czechia: { flag: '����', code: 'CZ' }, 
  Germany: { flag: '����', code: 'DE' }, 
  Djibouti: { flag: '����', code: 'DJ' }, 
  Denmark: { flag: '����', code: 'DK' }, 
  Dominica: { flag: '����', code: 'DM' }, 
  'Dominican Republic': { 
    flag: '����', 
    code: 'DO' 
  }, 
  'Cruise Ship': { flag: '��' }, 
  Algeria: { flag: '����', code: 'DZ' }, 
  Ecuador: { flag: '����', code: 'EC' }, 
  Estonia: { flag: '����', code: 'EE' }, 
  Egypt: { flag: '����', code: 'EG' }, 
  'Western Sahara': { flag: '����', code: 'EH' }, 
  Eritrea: { flag: '����', code: 'ER' }, 
  Spain: { flag: '����', code: 'ES' }, 
  Ethiopia: { flag: '����', code: 'ET' }, 
  'European Union': { flag: '����', code: 'EU' }, 
  Finland: { flag: '����', code: 'FI' }, 
  Fiji: { flag: '����', code: 'FJ' }, 
  'Falkland Islands (Malvinas)': { 
    flag: '����', 
    code: 'FK' 
  }, 
  Micronesia: { flag: '����', code: 'FM' }, 
  'Faroe Islands': { flag: '����', code: 'FO' }, 
  France: { flag: '����', code: 'FR' }, 
  Gabon: { flag: '����', code: 'GA' }, 
  'United Kingdom': { flag: '����', code: 'GB' }, 
  Grenada: { flag: '����', code: 'GD' }, 
  Georgia: { flag: '����', code: 'GE' }, 
  'French Guiana': { flag: '����', code: 'GF' }, 
  Guernsey: { flag: '����', code: 'GG' }, 
  Ghana: { flag: '����', code: 'GH' }, 
  Gibraltar: { flag: '����', code: 'GI' }, 
  Greenland: { flag: '����', code: 'GL' }, 
  Gambia: { flag: '����', code: 'GM' }, 
  Guinea: { flag: '����', code: 'GN' }, 
  Guadeloupe: { flag: '����', code: 'GP' }, 
  'Equatorial Guinea': { flag: '����', code: 'GQ' }, 
  Greece: { flag: '����', code: 'GR' }, 
  'South Georgia': { flag: '����', code: 'GS' }, 
  Guatemala: { flag: '����', code: 'GT' }, 
  Guam: { flag: '����', code: 'GU' }, 
  'Guinea-Bissau': { flag: '����', code: 'GW' }, 
  Guyana: { flag: '����', code: 'GY' }, 
  'Hong Kong': { flag: '����', code: 'HK' }, 
  'Heard Island and Mcdonald Islands': { 
    flag: '����', 
    code: 'HM' 
  }, 
  Honduras: { flag: '����', code: 'HN' }, 
  Croatia: { flag: '����', code: 'HR' }, 
  Haiti: { flag: '����', code: 'HT' }, 
  Hungary: { flag: '����', code: 'HU' }, 
  Indonesia: { flag: '����', code: 'ID' }, 
  Ireland: { flag: '����', code: 'IE' }, 
  Israel: { flag: '����', code: 'IL' }, 
  'Isle of Man': { flag: '����', code: 'IM' }, 
  India: { flag: '����', code: 'IN' }, 
  'British Indian Ocean Territory': { 
    flag: '����', 
    code: 'IO' 
  }, 
  Iraq: { flag: '����', code: 'IQ' }, 
  Iran: { flag: '����', code: 'IR' }, 
  Iceland: { flag: '����', code: 'IS' }, 
  Italy: { flag: '����', code: 'IT' }, 
  Jersey: { flag: '����', code: 'JE' }, 
  Jamaica: { flag: '����', code: 'JM' }, 
  Jordan: { flag: '����', code: 'JO' }, 
  Japan: { flag: '����', code: 'JP' }, 
  Kenya: { flag: '����', code: 'KE' }, 
  Kyrgyzstan: { flag: '����', code: 'KG' }, 
  Cambodia: { flag: '����', code: 'KH' }, 
  Kiribati: { flag: '����', code: 'KI' }, 
  Comoros: { flag: '����', code: 'KM' }, 
  'Saint Kitts and Nevis': { 
    flag: '����', 
    code: 'KN' 
  }, 
  'North Korea': { flag: '����', code: 'KP' }, 
  'Korea, South': { flag: '����', code: 'KR' }, 
  Kuwait: { flag: '����', code: 'KW' }, 
  'Cayman Islands': { flag: '����', code: 'KY' }, 
  Kazakhstan: { flag: '����', code: 'KZ' }, 
  Laos: { flag: '����', code: 'LA' }, 
  Lebanon: { flag: '����', code: 'LB' }, 
  'Saint Lucia': { flag: '����', code: 'LC' }, 
  Liechtenstein: { flag: '����', code: 'LI' }, 
  'Sri Lanka': { flag: '����', code: 'LK' }, 
  Liberia: { flag: '����', code: 'LR' }, 
  Lesotho: { flag: '����', code: 'LS' }, 
  Lithuania: { flag: '����', code: 'LT' }, 
  Luxembourg: { flag: '����', code: 'LU' }, 
  Latvia: { flag: '����', code: 'LV' }, 
  Libya: { flag: '����', code: 'LY' }, 
  Morocco: { flag: '����', code: 'MA' }, 
  Monaco: { flag: '����', code: 'MC' }, 
  Moldova: { flag: '����', code: 'MD' }, 
  Montenegro: { flag: '����', code: 'ME' }, 
  'Saint Martin (French Part)': { 
    flag: '����', 
    code: 'MF' 
  }, 
  Madagascar: { flag: '����', code: 'MG' }, 
  'North Macedonia': { flag: '����', code: 'MK' }, 
  Mali: { flag: '����', code: 'ML' }, 
  Burma: { flag: '����', code: 'MM' }, 
  Mongolia: { flag: '����', code: 'MN' }, 
  Macao: { flag: '����', code: 'MO' }, 
  'Northern Mariana Islands': { 
    flag: '����', 
    code: 'MP' 
  }, 
  Martinique: { flag: '����', code: 'MQ' }, 
  Mauritania: { flag: '����', code: 'MR' }, 
  Montserrat: { flag: '����', code: 'MS' }, 
  Malta: { flag: '����', code: 'MT' }, 
  Malawi: { flag: '����', code: 'MW' }, 
  Mexico: { flag: '����', code: 'MX' }, 
  Malaysia: { flag: '����', code: 'MY' }, 
  Mozambique: { flag: '����', code: 'MZ' }, 
  Namibia: { flag: '����', code: 'NA' }, 
  'New Caledonia': { flag: '����', code: 'NC' }, 
  Niger: { flag: '����', code: 'NE' }, 
  'Norfolk Island': { flag: '����', code: 'NF' }, 
  Nigeria: { flag: '����', code: 'NG' }, 
  Nicaragua: { flag: '����', code: 'NI' }, 
  Netherlands: { flag: '����', code: 'NL' }, 
  Norway: { flag: '����', code: 'NO' }, 
  Nepal: { flag: '����', code: 'NP' }, 
  Nauru: { flag: '����', code: 'NR' }, 
  Niue: { flag: '����', code: 'NU' }, 
  'New Zealand': { flag: '����', code: 'NZ' }, 
  Oman: { flag: '����', code: 'OM' }, 
  Panama: { flag: '����', code: 'PA' }, 
  Peru: { flag: '����', code: 'PE' }, 
  'French Polynesia': { flag: '����', code: 'PF' }, 
  'Papua New Guinea': { flag: '����', code: 'PG' }, 
  Philippines: { flag: '����', code: 'PH' }, 
  Pakistan: { flag: '����', code: 'PK' }, 
  Poland: { flag: '����', code: 'PL' }, 
  'Saint Pierre and Miquelon': { 
    flag: '����', 
    code: 'PM' 
  }, 
  Pitcairn: { flag: '����', code: 'PN' }, 
  'Puerto Rico': { flag: '����', code: 'PR' }, 
  'Palestinian Territory': { 
    flag: '����', 
    code: 'PS' 
  }, 
  Portugal: { flag: '����', code: 'PT' }, 
  Palau: { flag: '����', code: 'PW' }, 
  Paraguay: { flag: '����', code: 'PY' }, 
  Qatar: { flag: '����', code: 'QA' }, 
  Réunion: { flag: '����', code: 'RE' }, 
  Romania: { flag: '����', code: 'RO' }, 
  Serbia: { flag: '����', code: 'RS' }, 
  Russia: { flag: '����', code: 'RU' }, 
  Rwanda: { flag: '����', code: 'RW' }, 
  'Saudi Arabia': { flag: '����', code: 'SA' }, 
  'Solomon Islands': { flag: '����', code: 'SB' }, 
  Sudan: { flag: '����', code: 'SD' }, 
  Sweden: { flag: '����', code: 'SE' }, 
  Singapore: { flag: '����', code: 'SG' }, 
  'Saint Helena, Ascension and Tristan Da Cunha': { 
    flag: '����', 
    code: 'SH' 
  }, 
  Slovenia: { flag: '����', code: 'SI' }, 
  'Svalbard and Jan Mayen': { 
    flag: '����', 
    code: 'SJ' 
  }, 
  Slovakia: { flag: '����', code: 'SK' }, 
  'Sierra Leone': { flag: '����', code: 'SL' }, 
  'San Marino': { flag: '����', code: 'SM' }, 
  Senegal: { flag: '����', code: 'SN' }, 
  Somalia: { flag: '����', code: 'SO' }, 
  Suriname: { flag: '����', code: 'SR' }, 
  'South Sudan': { flag: '����', code: 'SS' }, 
  'Sao Tome and Principe': { 
    flag: '����', 
    code: 'ST' 
  }, 
  'El Salvador': { flag: '����', code: 'SV' }, 
  'Sint Maarten (Dutch Part)': { 
    flag: '����', 
    code: 'SX' 
  }, 
  Syria: { flag: '����', code: 'SY' }, 
  Eswatini: { flag: '����', code: 'SZ' }, 
  'Turks and Caicos Islands': { 
    flag: '����', 
    code: 'TC' 
  }, 
  Chad: { flag: '����', code: 'TD' }, 
  'French Southern Territories': { 
    flag: '����', 
    code: 'TF' 
  }, 
  Togo: { flag: '����', code: 'TG' }, 
  Thailand: { flag: '����', code: 'TH' }, 
  Tajikistan: { flag: '����', code: 'TJ' }, 
  Tokelau: { flag: '����', code: 'TK' }, 
  'Timor-Leste': { flag: '����', code: 'TP' }, 
  Turkmenistan: { flag: '����', code: 'TM' }, 
  Tunisia: { flag: '����', code: 'TN' }, 
  Tonga: { flag: '����', code: 'TO' }, 
  Turkey: { flag: '����', code: 'TR' }, 
  'Trinidad and Tobago': { 
    flag: '����', 
    code: 'TT' 
  }, 
  Tuvalu: { flag: '����', code: 'TV' }, 
  'Taiwan*': { flag: '����', code: 'TW' }, 
  Tanzania: { flag: '����', code: 'TZ' }, 
  Ukraine: { flag: '����', code: 'UA' }, 
  Uganda: { flag: '����', code: 'UG' }, 
  'United States Minor Outlying Islands': { 
    flag: '����', 
    code: 'UM' 
  }, 
  US: { flag: '����', code: 'US' }, 
  Uruguay: { flag: '����', code: 'UY' }, 
  Uzbekistan: { flag: '����', code: 'UZ' }, 
  'Saint Vincent and the Grenadines': { 
    flag: '����', 
    code: 'VC' 
  }, 
  Venezuela: { flag: '����', code: 'VE' }, 
  'Virgin Islands, British': { 
    flag: '����', 
    code: 'VG' 
  }, 
  'Virgin Islands, U.S.': { 
    flag: '����', 
    code: 'VI' 
  }, 
  Vietnam: { flag: '����', code: 'VN' }, 
  Vanuatu: { flag: '����', code: 'VU' }, 
  'Wallis and Futuna': { flag: '����', code: 'WF' }, 
  Samoa: { flag: '����', code: 'WS' }, 
  Kosovo: { flag: '����', code: 'XK' }, 
  Yemen: { flag: '����', code: 'YE' }, 
  Mayotte: { flag: '����', code: 'YT' }, 
  'South Africa': { flag: '����', code: 'ZA' }, 
  Zambia: { flag: '����', code: 'ZM' }, 
  Zimbabwe: { flag: '����', code: 'ZW' } 
}; 
var countriesKeys = Object.keys(countriesInfo); 
var selectedBeforeSummary; 
var confirmedPalette = JSC.colorToPalette( 
  tooltipPalette[0], 
  { lightness: 0.6 }, 
  8, 
  0 
) 
  .reverse() 
  .slice(0, 7); 
var activePalette = JSC.colorToPalette( 
  tooltipPalette[1], 
  { lightness: 0.8 }, 
  7, 
  0 
) 
  .reverse() 
  .slice(0, 7); 
var recoveredPalette = JSC.colorToPalette( 
  tooltipPalette[2], 
  { lightness: 1 }, 
  7, 
  0 
) 
  .reverse() 
  .slice(0, 6); 
var deathsPalette = JSC.colorToPalette( 
  tooltipPalette[3], 
  { lightness: 0.8 }, 
  7, 
  0 
) 
  .reverse() 
  .slice(0, 6); 
var tabs = ['Active', 'Recovered', 'Deaths']; 
var timer; 
  
makeBubbleScatter(); 
function makeBubbleScatter() { 
  var data; 
  var chart, map; 
  var mapSerId = 'mapSerTime'; 
  var startDate, endDate, currentDate; 
  var lastSliderVal; 
  var racebarColorLookup = {}; 
  
  /*    var chartTitleOptions = {       fontSize: '16px',       autoWrap: 'wrap'    };*/ 
  var palette = confirmedPalette; 
  var selectedType = 'Active'; 
  var bubbleSizeBy = 'Deaths'; 
  var selectedCountries = ['KE', 'UG', 'TZ']; 
  updateColors(selectedCountries); 
  var isPlaying; 
  if (!chart) { 
    JSC.fetch( 
       'https://raw.githubusercontent.com/wanyama413/covid19/main/covidData.csv'  
    ) 
      .then(function(response) { 
        return response.text(); 
      }) 
      .then(function(text) { 
        data = JSC.csv2Json(text, { 
          coerce: function(d, i) { 
            return { 
              Date: +new Date(d.Date), 
              Country: d.Country, 
              Confirmed: +d.Confirmed, 
              Active: 
                d.Confirmed - 
                d.Recovered - 
                d.Deaths, 
              Recovered: +d.Recovered, 
              Deaths: +d.Deaths 
            }; 
          } 
        }); 
        JSC.fetch( 
           'https://raw.githubusercontent.com/wanyama413/covid19/main/covidData.csv'  
        ) 
          .then(function(response) { 
            return response.text(); 
          }) 
          .then(function(text) { 
            var greenlandData = JSC.csv2Json( 
              text, 
              { 
                coerce: function(d, i) { 
                  return { 
                    Date: +new Date(d.Date), 
                    Country: d['Province/State'], 
                    Confirmed: +d.Confirmed, 
                    Active: 
                      d.Confirmed - 
                      d.Recovered - 
                      d.Deaths, 
                    Recovered: +d.Recovered, 
                    Deaths: +d.Deaths 
                  }; 
                } 
              } 
            ).filter(function(x) { 
              return x.Country === 'Greenland'; 
            }); 
            data = data.concat(greenlandData); 
            startDate = JSC.formatDate( 
              data[0].Date, 
              'd' 
            ); 
            endDate = JSC.formatDate( 
              data[data.length - 1].Date, 
              'd' 
            ); 
            var emptyCounties = [ 
              'Turkmenistan', 
              'North Korea', 
              'Lesotho' 
            ]; 
            emptyCounties.forEach(function(item) { 
              if ( 
                data.find(function(x) { 
                  return x.id === item; 
                }) === undefined 
              ) { 
                for ( 
                  var i = new Date(startDate); 
                  i <= new Date(endDate); 
                  i = addDays(i, 1) 
                ) { 
                  data.push({ 
                    Date: i, 
                    Country: item, 
                    Confirmed: 0, 
                    Active: 0, 
                    Recovered: 0, 
                    Deaths: 0 
                  }); 
                } 
              } 
            }); 
            currentDate = endDate; 
            chart = renderChart(data, function( 
              chrt 
            ) { 
              map = renderMap(data); 
              playPause(true, data, chrt); 
            }); 
          }); 
      }); 
  } 
  
  function renderMap(data) { 
    var unselectTimer; 
    var chartRendered; 
    return JSC.chart( 
      'mapDiv3', 
      { 
        //okaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        
        type: 'map solid', 
        animation_duration: 0, 
        defaultSeries: { 
          pointSelection: 'multiple', 
          shape: { padding: -0.01 } 
        }, 
        legend: { 
          position: 'bottom', 
          template: '%icon,%name', 
          defaultEntry: { 
            icon_width: 10, 
            style_fontSize: 10 
          }, 
          customEntries: makeMapLegendEntries( 
            activePalette 
          ) 
        }, 
        events_pointSelectionChanged: function( 
          items 
        ) { 
          var ids = items.map(function(item) { 
            return item.id; 
          }); 
          selectedCountries = ids; 
          this.uiItems('global').options({ 
            visible: ids.length > 1 
          }); 
          document.getElementById( 
            'chartTitle3' 
          ).innerHTML = makeTitle( 
            JSC.formatDate(currentDate, 'm'), 
            (ids.length < 6 
              ? idsToNames(ids) 
              : idsToFlags(ids) 
            ).join(', ') 
          ); 
          chart 
            .series(0) 
            .options({ 
              points: makeChartSeries(data)[0] 
                .points 
            }); 
        }, 
        annotations: [ 
          { 
            position: 'inside top left', 
            fill: 'white', 
            label: { 
              text: 
                'Select countries to compare:', 
              style: { fontSize: '16px' } 
            } 
          } 
        ], 
        palette: makeSmartPalette( 
          activePalette, 
          'active' 
        ), 
        defaultPoint: { 
          tooltip: 
            '<b>%name</b><br>' + 
            'Confirmed: <b><span style="color:' + 
            tooltipPalette[0] + 
            '">%confirmed</span></b><br>' + 
            'Active: <b><span style="color:' + 
            tooltipPalette[1] + 
            '">%active</span></b><br>' + 
            'Recovered: <b><span style="color:' + 
            tooltipPalette[2] + 
            '">%recovered</span></b><br>' + 
            'Deaths: <b><span style="color:' + 
            tooltipPalette[3] + 
            '">%deaths</span></b>', 
          outline: { color: 'white', width: 0.5 }, 
          focusGlow: false, 
          states: { 
            hover: { 
              fill: 'currentColor', 
              outline: { 
                color: 'black', 
                width: 1 
              } 
            }, 
            select: { 
              enabled: true, 
              fill: 'currentColor', 
              outline: { 
                color: 'black', 
                width: 1 
              } 
            } 
          } 
        }, 
        series: makeMapSeries(data, mapSerId), 
        toolbar_items: { 
          resetZoom_position: 
            'inside bottom left', 
          caseTypes: { 
            items: generateButtons(), 
            value: 'Active', 
            position: 'outside top', 
            boxVisible: false, 
            label_text: '', 
            width: 280, 
            margin: 5, 
            itemsBox: { 
              layout: 'horizontal', 
              visible: true, 
              margin_top: 5 
            }, 
            defaultItem: { 
              type: 'radio', 
              position: 'top', 
              icon_visible: false, 
              padding: [6, 12, 6, -8], 
              margin: 0, 
              outline_width: 0, 
              fill: '#F5F5F5', 
              label_color: '#BDBDBD', 
              states_select: { 
                label_color: 'white' 
              }, 
              states_hover: { 
                label_color: 'white' 
              } 
            }, 
            events: { 
              change: function(val) { 
                selectedType = val; 
                playPause(true, data); 
                updateChart(data, val); 
                map.redraw(); 
              } 
            } 
          }, 
          global: { 
            type: 'button', 
            visible: false, 
            label: { 
              text: 'Clear', 
              style_fontSize: '14px' 
            }, 
            fill: 'white', 
            padding: [4, 8], 
            events_click: function() { 
              map 
                .series(0) 
                .points() 
                .options({ selected: false }); 
            } 
          } 
        } 
      }, 
      function(c) { 
        chartRendered = true; 
        var series = c.series(0); 
        selectedCountries.forEach(function( 
          item, 
          i 
        ) { 
          series 
            .points(function(p) { 
              return p.options('id') === item; 
            }) 
            .options( 
              { selected: true }, 
              i === selectedCountries.length - 1 
            ); 
        }); 
      } 
    ); 
  } 
  
  function renderChart(data, cb) { 
    document.getElementById( 
      'chartTitle3' 
    ).innerHTML = makeTitle( 
      JSC.formatDate(currentDate, 'm'), 
      idsToNames(selectedCountries) 
    ); 
    var chartSeries = makeChartSeries(data); 
    return JSC.chart( 
      'chartDiv3', 
      { 
        type: 'bubble', 
        // margin_top:40, 
        palette: [tooltipPalette[0]], 
        legend: { visible: false }, 
        events_pointSelectionChanged: function( 
          items 
        ) { 
          var ids = items.map(function(item) { 
            return item.id; 
          }); 
          selectedCountries = ids; 
          document.getElementById( 
            'chartTitle3' 
          ).innerHTML = makeTitle( 
            JSC.formatDate(currentDate, 'm'), 
            (ids.length < 6 
              ? idsToNames(ids) 
              : idsToFlags(ids) 
            ).join(', ') 
          ); 
          this.series(0).options({ 
            points: makeChartSeries(data)[0] 
              .points 
          }); 
          map 
            .uiItems('global') 
            .options({ visible: ids.length > 1 }); 
          map 
            .series(0) 
            .points() 
            .options({ selected: false }); 
          ids.forEach(function(id) { 
            map 
              .series(0) 
              .points(id) 
              .options({ selected: true }); 
          }); 
        }, 
        defaultPoint: { 
          outline_width: 0, 
          legendEntry_visible: false, 
          label: { 
            text: '%name', 
            style_fontSize: '14px' 
          }, 
          tooltip: 
            '<b>%name</b><br>' + 
            'Confirmed: <b><span style="color:' + 
            tooltipPalette[0] + 
            '">%confirmed</span></b><br>' + 
            'Active: <b><span style="color:' + 
            tooltipPalette[1] + 
            '">%active</span></b><br>' + 
            'Recovered: <b><span style="color:' + 
            tooltipPalette[2] + 
            '">%recovered</span></b><br>' + 
            'Deaths: <b><span style="color:' + 
            tooltipPalette[3] + 
            '">%deaths</span></b>', 
          states_select: { 
            opacity: 1, 
            fill: 'currentColor' 
          } 
        }, 
        yAxis: { 
          label_text: 'Confirmed cases', 
          alternateGridFill: 'none', 
          formatString: 'a', 
          scale_type: 'logarithmic' 
        }, 
        xAxis: { 
                    
          label_text: selectedType + ' cases %', 
          defaultTick_label_text: '%value%', 
          scale_range: [0, 100] 
        }, 
        defaultSeries: { 
          legendEntry_visible: false, 
          pointSelection: 'multiple', 
          palette: 'default' 
        }, 
        series: chartSeries, 
        toolbar_items: { 
          zoom_visible: false, 
          label: { 
            label: { 
              text: 'Bubble size: ', 
              style_fontSize: 14 
            }, 
            margin_bottom: 44, 
            position: 'top left', 
            boxVisible: false 
          }, 
          bubbleSize: { 
            type: 'select', 
            position: 'top left', 
            items: tabs.join(','), 
            value: bubbleSizeBy, 
            margin_bottom: 44, 
            label_style_fontSize: 14, 
            events_change: function(val) { 
              bubbleSizeBy = val; 
              var chartSeries = makeChartSeries( 
                data 
              ); 
              setTimeout(function() { 
                chart 
                  .series(0) 
                  .points(chartSeries[0].points); 
              }, 20); 
            } 
          }, 
          logScale: { 
            type: 'toggle', 
            position: 'inside top right', 
            value: true, 
            label_text: 'Logarithmic', 
            events_change: function(val) { 
              chart 
                .axes('y') 
                .options({ 
                  scale_type: val 
                    ? 'logarithmic' 
                    : 'auto' 
                }); 
            } 
          }, 
          sliderWrapper: { 
            itemsBox_visible: false, 
            position: 'inside top left', 
            offset: '0,-42', 
            boxVisible: false, 
            label_text: '', 
            itemsBox: { visible: true }, 
            defaultItem: { boxVisible: false }, 
            items: { 
              slider: { 
                type: 'range', 
                width: 180, 
                throttle: 0, 
                value: new Date( 
                  currentDate 
                ).getTime(), 
                min: new Date( 
                  startDate 
                ).getTime(), 
                max: new Date(endDate).getTime(), 
                events_change: function(val) { 
                  if (lastSliderVal === val) { 
                    return; 
                  } 
                  updateSliderTitle(val); 
                  if (!isPlaying) { 
                    updateFromSlider(val, data); 
                  } else { 
                    moveSlider(val, data); 
                    playPause(true, data); 
                  } 
  
                  resizeDivs(); 
                  lastSliderVal = val; 
                }, 
                itemsBox: { visible: true } 
              }, 
              Stop: { 
                type: 'option', 
                height: 20, 
                value: false, 
                margin: [6, 6, 6, 16], 
                icon_name: 'system/default/pause', 
                icon_size: 20, 
                label_text: '', 
                events_change: function(val) { 
                  playPause(val, data); 
                } 
              } 
            } 
          } 
        } 
      }, 
      cb 
    ); 
  } 
  
  function makeMapSeries(data, id) { 
    var series = JSC.nest() 
      .key('Country') 
      .pointRollup(function(key, val) { 
        var values = val[0]; 
        return { 
          map: getCountryCode(key), 
          id: getCountryCode(key), 
          z: values[selectedType], 
          attributes: { 
            confirmed: values.Confirmed, 
            active: values.Active, 
            recovered: values.Recovered, 
            deaths: values.Deaths, 
            deathRate: 
              values.Confirmed >= 1000 
                ? JSC.formatNumber( 
                    (values.Deaths / 
                      values.Confirmed) * 
                      100, 
                    'n2' 
                  ) + '%' 
                : 'not enough data' 
          } 
        }; 
      }) 
      .series( 
        data.filter(function(x) { 
          return ( 
            formatDateCached(x.Date) === 
              currentDate && 
            countriesInfo[x.Country] !== undefined 
          ); 
        }) 
      ); 
    if (id) { 
      series.id = id; 
    } 
    return series; 
  } 
  
  function makeUpdateMapSeries(data, id) { 
    var series = JSC.nest() 
      .key('Country') 
      .pointRollup(function(key, val) { 
        var values = val[0]; 
        return { 
          id: getCountryCode(key), 
          z: values[selectedType], 
          attributes: { 
            confirmed: values.Confirmed, 
            active: values.Active, 
            recovered: values.Recovered, 
            deaths: values.Deaths, 
            deathRate: 
              values.Confirmed >= 1000 
                ? JSC.formatNumber( 
                    (values.Deaths / 
                      values.Confirmed) * 
                      100, 
                    'n2' 
                  ) + '%' 
                : 'not enough data' 
          } 
        }; 
      }) 
      .series( 
        data.filter(function(x) { 
          return ( 
            countriesInfo[x.Country] !== 
              undefined && 
            formatDateCached(x.Date) === 
              currentDate 
          ); 
          //return countriesInfo[x.Country] !== undefined && JSC.formatDate(x.Date, 'd') === currentDate; 
        }) 
      ); 
    if (id) { 
      series.id = id; 
    } 
    return series; 
  } 
  
  function makeChartSeries(data) { 
    var series = [ 
      { 
        points: JSC.nest() 
          .key('Country') 
          .pointRollup(function(key, val) { 
            var values = val[0]; 
            var result = { 
              selected: false, 
              name: values.Country, 
              opacity: 0.5, 
              color: '#b0b0b0', 
              label_visible: false, 
              x: 
                (values[selectedType] / 
                  values.Confirmed) * 
                100, 
              y: +values.Confirmed, 
              z: +values[bubbleSizeBy], 
              id: getCountryCode(key), 
              attributes: { 
                confirmed: values.Confirmed, 
                active: values.Active, 
                recovered: values.Recovered, 
                deaths: values.Deaths 
              } 
            }; 
            selectedCountries.forEach(function( 
              item, 
              i 
            ) { 
              if (getCountryCode(key) === item) { 
                result.selected = true; 
                result.color = getRaceBarColor( 
                  values.Country 
                ); 
                result.opacity = 1; 
                result.label_visible = true; 
              } 
            }); 
            return result; 
          }) 
          .points( 
            data.filter(function(x) { 
              return ( 
                formatDateCached(x.Date) === 
                  currentDate && 
                countriesInfo[x.Country] !== 
                  undefined && 
                x.Confirmed !== 0 
              ); 
            }) 
          ) 
      } 
    ]; 
    series.forEach(function(item, i) { 
      item.points = item.points.filter(function( 
        x 
      ) { 
        return x !== undefined && x !== null; 
      }); 
    }); 
    return series; 
  } 
  
  function updateChart(data, type) { 
    var entries, palette; 
    switch (type) { 
      case 'Confirmed': 
        entries = makeMapLegendEntries( 
          confirmedPalette 
        ); 
        palette = makeSmartPalette( 
          confirmedPalette, 
          'confirmed' 
        ); 
        chart.options( 
          { palette: [tooltipPalette[0]] }, 
          false 
        ); 
        break; 
      case 'Active': 
        entries = makeMapLegendEntries( 
          activePalette 
        ); 
        palette = makeSmartPalette( 
          activePalette, 
          'active' 
        ); 
        chart.options( 
          { palette: [tooltipPalette[1]] }, 
          false 
        ); 
        break; 
      case 'Recovered': 
        entries = makeMapLegendEntries( 
          recoveredPalette 
        ); 
        palette = makeSmartPalette( 
          recoveredPalette, 
          'recovered' 
        ); 
        chart.options( 
          { palette: [tooltipPalette[2]] }, 
          false 
        ); 
        break; 
      case 'Deaths': 
        entries = makeMapLegendEntries( 
          deathsPalette 
        ); 
        palette = makeSmartPalette( 
          deathsPalette, 
          'deaths' 
        ); 
        chart.options( 
          { palette: [tooltipPalette[3]] }, 
          false 
        ); 
  
        break; 
    } 
    map.options({ palette: palette }); 
    map 
      .legends(0) 
      .entries() 
      .remove(false); 
    map 
      .legends(0) 
      .options({ customEntries: entries }); 
    if ( 
      map.legends(0).entries().items.length > 
      entries.length 
    ) { 
      map 
        .legends(0) 
        .entries(7) 
        .remove(); 
    } 
  
    document.getElementById( 
      'chartTitle3' 
    ).innerHTML = makeTitle( 
      JSC.formatDate(currentDate, 'm'), 
      (selectedCountries.length < 6 
        ? idsToNames(selectedCountries) 
        : idsToFlags(selectedCountries) 
      ).join(', ') 
    ); 
  
    var chartSeries = makeChartSeries(data); 
    chart 
      .axes('x') 
      .options({ label_text: type + ' cases %' }); 
    setTimeout(function() { 
      chart 
        .series(0) 
        .points(chartSeries[0].points); 
    }, 20); 
  } 
  
  function updateSliderTitle(date) { 
    currentDate = JSC.formatDate( 
      new Date( 
        new Date(date).getFullYear(), 
        new Date(date).getMonth(), 
        new Date(date).getDate() 
      ), 
      'd' 
    ); 
    document.getElementById( 
      'chartTitle3' 
    ).innerHTML = makeTitle( 
      JSC.formatDate(currentDate, 'm'), 
      (selectedCountries.length < 6 
        ? idsToNames(selectedCountries) 
        : idsToFlags(selectedCountries) 
      ).join(', ') 
    ); 
  } 
  
  function moveSlider(date, data) { 
    currentDate = JSC.formatDate( 
      new Date( 
        new Date(date).getFullYear(), 
        new Date(date).getMonth(), 
        new Date(date).getDate() 
      ), 
      'd' 
    ); 
  
    chart 
      .uiItems('slider') 
      .options({ 
        value: new Date(currentDate).getTime() 
      }); 
  
    updateFromSlider(date, data); 
  } 
  
  function updateFromSlider(date, data) { 
    currentDate = JSC.formatDate( 
      new Date( 
        new Date(date).getFullYear(), 
        new Date(date).getMonth(), 
        new Date(date).getDate() 
      ), 
      'd' 
    ); 
  
    var mapSeries = makeUpdateMapSeries( 
      data, 
      mapSerId 
    ); 
    var chartSeries = makeChartSeries(data); 
    map 
      .series(0) 
      .options({ points: mapSeries[0].points }); 
    setTimeout(function() { 
      chart 
        .series(0) 
        .options({ 
          points: chartSeries[0].points 
        }); 
    }, 20); 
  } 
  
  function animateChart(data) { 
    clearInterval(timer); 
    timer = setInterval(function() { 
      if ( 
        new Date(currentDate).getTime() < 
        new Date(endDate).getTime() 
      ) { 
        currentDate = addDays(currentDate, 1); 
        //moveSlider(currentDate, data); 
        chart 
          .uiItems('slider') 
          .options({ 
            value: new Date(currentDate).getTime() 
          }); 
        document.getElementById( 
          'chartTitle3' 
        ).innerHTML = makeTitle( 
          JSC.formatDate(currentDate, 'm'), 
          (selectedCountries.length < 6 
            ? idsToNames(selectedCountries) 
            : idsToFlags(selectedCountries) 
          ).join(', ') 
        ); 
        updateFromSlider(currentDate, data); 
      } else { 
        playPause(true, data); 
      } 
    }, 800); 
  } 
  
  function playPause(val, data, chrt) { 
    var c = chrt || chart; 
    if (val) { 
      c.uiItems('Stop').options({ 
        label_text: 'Play', 
        icon_name: 'system/default/play', 
        value: val 
      }); 
      clearInterval(timer); 
      isPlaying = false; 
    } else { 
      c.uiItems('Stop').options({ 
        label_text: 'Pause', 
        icon_name: 'system/default/pause', 
        value: val 
      }); 
      isPlaying = true; 
      var startDateNum = new Date( 
          startDate 
        ).getTime(), 
        endDateNum = new Date(endDate).getTime(); 
      if ( 
        new Date(currentDate).getTime() === 
        endDateNum 
      ) { 
        //middle 
        var midDateNum = 
          (startDateNum + endDateNum) / 2; 
  
        currentDate = new Date(midDateNum); 
        c.uiItems('slider').options({ 
          value: new Date(midDateNum).getTime() 
        }); 
      } 
  
      animateChart(data); 
    } 
  } 
  
  function makeTitle(date, country) { 
    return ( 
      'COVID-19 ' + 
      colorTypeText(selectedType) + 
      ': <b>' + 
      date + 
      '</b><br>' + 
      '<b>' + 
      country + 
      '</b>' 
    ); 
  } 
  function updateColors(ids) { 
    var colors = JSC.getPalette(0); 
    racebarColorLookup = {}; 
    ids.forEach(function(id, i) { 
      racebarColorLookup[id] = 
        colors[i % colors.length]; 
    }); 
  } 
  function getRaceBarColor(id) { 
    if (id.length > 2 && countriesInfo[id]) { 
      id = countriesInfo[id].code; 
    } 
    return racebarColorLookup[id]; 
  } 
} 
  
function addDays(date, days) { 
  return new Date(date).setDate( 
    new Date(date).getDate() + days 
  ); 
} 
  
function formatDateCached(num) { 
  if (!dateCache[num]) { 
    dateCache[num] = JSC.formatDate(num, 'd'); 
  } 
  return dateCache[num]; 
} 
function colorTypeText(type) { 
  var typeToColor = { 
    Confirmed: tooltipPalette[0], 
    Active: tooltipPalette[1], 
    Recovered: tooltipPalette[2], 
    Deaths: tooltipPalette[3] 
  }; 
  return ( 
    '<span style="color:' + 
    typeToColor[type] + 
    '">' + 
    type + 
    '</span>' + 
    (type !== 'Deaths' ? ' Cases' : '') 
  ); 
} 
function getCountryCode(country) { 
  return countriesInfo[country] === undefined 
    ? undefined 
    : countriesInfo[country].code; 
} 
function makeSmartPalette(palette, name) { 
  var smartPalette = { 
    pointValue: function(p) { 
      return p.options('attributes_' + name); 
    }, 
    ranges: [ 
      { 
        value: 0, 
        color: '#E0E0E0', 
        legendEntry_visible: false
      } 
    ] 
  }; 
  palette.forEach(function(item, i) { 
    smartPalette.ranges.push({ 
      value: [ 
        Math.pow(10, i), 
        Math.pow(10, i + 1) - 1 
      ], 
      color: item, 
      legendEntry_visible: false
    }); 
  }); 
  return smartPalette; 
} 
  
function makeMapLegendEntries(palette) { 
  var customEntries = [ 
    { id: 'e0', name: '0', icon_color: '#E0E0E0' } 
  ]; 
  palette.forEach(function(item, i) { 
    var result = { 
      id: 'e' + i, 
      name: 
        JSC.formatNumber(Math.pow(10, i), 'a') + 
        ' - ' + 
        JSC.formatNumber( 
          Math.pow(10, i + 1), 
          'a' 
        ), 
      icon_color: item 
    }; 
    if (i === palette.length - 1) { 
      result = { 
        id: 'e' + i, 
        name: 
          JSC.formatNumber(Math.pow(10, i), 'a') + 
          '+', 
        icon_color: item 
      }; 
    } 
    customEntries.push(result); 
  }); 
  return customEntries; 
} 
function generateButtons() { 
  var buttons = {}; 
  tabs.forEach(function(item, i) { 
    buttons[item] = { 
      label_text: item, 
      states: { 
        select: { fill: tooltipPalette[i + 1] }, 
        hover: { fill: tooltipPalette[i + 1] } 
      } 
    }; 
  }); 
  return buttons; 
} 
function idsToNames(ids) { 
  return ids.map(function(id) { 
    var found = countriesKeys.find(function(key) { 
      if (countriesInfo[key].code === id) { 
        return key; 
      } 
    }); 
    return found || id; 
  }); 
} 
  
function idsToFlags(ids) { 
  return ids.map(function(id) { 
    var fnd; 
    var found = countriesKeys.find(function(key) { 
      if (countriesInfo[key].code === id) { 
        fnd = countriesInfo[key].flag; 
        return countriesInfo[key].flag; 
      } 
    }); 
    return fnd || found || id; 
  }); 
} 
function resizeDivs() { 
  document.getElementById( 
    'chartDiv3' 
  ).style.height = 
    document.getElementById('firstChartWrapper3') 
      .offsetHeight - 
    document.getElementById('chartTitle3') 
      .offsetHeight + 
    'px'; 
} 