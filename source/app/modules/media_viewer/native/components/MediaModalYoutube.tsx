// app/modules/media_viewer/native/components/MediaModalYoutube.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = function(argFoo) { // Original name: HTML
        zuuluu = _closure1_slot8;
        michal = undefined;
        entity = argFoo;
        tangon = zuuluu.bind(michal)(entity);
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>';
        entity = '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: getJavascriptFromVideoID
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.start;
            zuuluu = null;
            michal = zuuluu == michal;
            verify = '';
            option = verify;
            if(michal) { _fun00002_ip = 58; continue _fun00001 }
 24:
            oscard = entity.start;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            tangon = "'start': ";
            michal = ',';
            option = report.bind(tangon)(oscard, michal);
 58:
            michal = entity.clip;
            michal = zuuluu == michal;
            golfie = verify;
            if(michal) { _fun00002_ip = 111; continue _fun00001 }
 74:
            oscard = entity.clip;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            tangon = "'clip': '";
            michal = "',";
            golfie = report.bind(tangon)(oscard, michal);
 111:
            michal = entity.clipt;
            michal = zuuluu == michal;
            if(michal) { _fun00002_ip = 161; continue _fun00001 }
 124:
            report = entity.clipt;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = "'clipt': '";
            michal = "',";
            verify = tangon.bind(zuuluu)(report, michal);
 161:
            output = entity.videoId;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            result = '\nconst tag = document.createElement(\'script\');\ntag.setAttribute(\'src\', "https://www.youtube.com/iframe_api");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player(\'player\', {\n    height:     \'100%\',\n    width:      \'100%\',\n    videoId:    \'';
            sizing = "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      ";
            michal = '\n      ';
            offset = "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
            kiloes = verify;
            backup = michal;
            foxtra = golfie;
            romeon = michal;
            yankee = option;
            entity = result[report](output, sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            update = report.visible;
            var _closure2_slot0 = update;
            romeon = report.style;
            tangon = report.source;
            zuuluu = {'visible': 0, 'style': 0, 'source': 0};
            entity = null;
            sequen = zuuluu;
            vacuum = null;
            michal = silentSetPrototypeOf(sequen, vacuum);
            golfie = 0;
            sequen = {};
            vacuum = report;
            ctrled = zuuluu;
            zuuluu = copyDataProperties(sequen, vacuum, ctrled);
            output = _closure1_slot4;
            yankee = output.useState;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            backup = 4;
            offset = oscard[backup];
            report = undefined;
            offset = option.bind(report)(offset);
            offset = offset.PlayerState;
            offset = offset.UNREADY;
            offset = yankee.bind(output)(offset);
            sizing = _closure1_slot3;
            kiloes = 2;
            offset = sizing.bind(report)(offset, kiloes);
            yankee = offset[golfie];
            var _closure2_slot1 = yankee;
            foxtra = 1;
            offset = offset[foxtra];
            var _closure2_slot2 = offset;
            offset = output.useState;
            offset = offset.bind(output)(report);
            offset = sizing.bind(report)(offset, kiloes);
            golfie = offset[golfie];
            offset = offset[foxtra];
            var _closure2_slot3 = offset;
            foxtra = _closure1_slot1;
            offset = 5;
            kiloes = oscard[offset];
            kiloes = foxtra.bind(report)(kiloes);
            result = kiloes.bind(report)(yankee);
            var _closure2_slot4 = result;
            offset = oscard[offset];
            offset = foxtra.bind(report)(offset);
            echoed = offset.bind(report)(update);
            var _closure2_slot5 = echoed;
            offset = output.useRef;
            foxtra = offset.bind(output)(entity);
            var _closure2_slot6 = foxtra;
            sizing = output.useEffect;
            kiloes = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot5;
                zuuluu = michal.MESSAGE_EMBEDS_ACTION_COMPLETED;
                michal = {'platform': 'youtube', 'action': 'attempted'};
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            offset = new Array(0);
            offset = sizing.bind(output)(kiloes, offset);
            sizing = output.useCallback;
            kiloes = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = global;
                    zuuluu = entity.JSON;
                    michal = zuuluu.parse;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = entity.type;
                    michal = entity.value;
                    entity = 'onReady';
                    if(!(entity !== zuuluu)) { _fun00006_ip = 527; continue _fun00005 }
 43:
                    entity = 'onError';
                    if(!(entity !== zuuluu)) { _fun00006_ip = 297; continue _fun00005 }
 54:
                    entity = 'onStateChange';
                    if(!(entity === zuuluu)) { _fun00006_ip = 625; continue _fun00005 }
 65:
                    entity = {};
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    golfie = 4;
                    option = zuuluu[golfie];
                    tangon = undefined;
                    option = oscard.bind(tangon)(option);
                    option = option.PlayerState;
                    option = option.UNSTARTED;
                    entity['-1'] = option;
                    option = zuuluu[golfie];
                    option = oscard.bind(tangon)(option);
                    option = option.PlayerState;
                    option = option.ENDED;
                    entity[0] = option;
                    option = zuuluu[golfie];
                    option = oscard.bind(tangon)(option);
                    option = option.PlayerState;
                    option = option.PLAYING;
                    entity[1] = option;
                    option = zuuluu[golfie];
                    option = oscard.bind(tangon)(option);
                    option = option.PlayerState;
                    option = option.PAUSED;
                    entity[2] = option;
                    option = zuuluu[golfie];
                    option = oscard.bind(tangon)(option);
                    option = option.PlayerState;
                    option = option.BUFFERING;
                    entity[3] = option;
                    zuuluu = zuuluu[golfie];
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.VIDEO_CUED;
                    entity[5] = zuuluu;
                    zuuluu = entity[michal];
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00006_ip = 274; continue _fun00005 }
 247:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golfie];
                    report = oscard.bind(tangon)(report);
                    report = report.PlayerState;
                    entity = zuuluu in report;
 274:
                    if(!entity) { _fun00006_ip = 625; continue _fun00005 }
 280:
                    entity = _closure2_slot2;
                    entity = entity.bind(tangon)(zuuluu);
                    _fun00006_ip = 625; continue _fun00005;
 297:
                    tangon = 'number';
                    entity = typeof michal;
                    zuuluu = michal;
                    if(!(tangon === entity)) { _fun00006_ip = 320; continue _fun00005 }
 311:
                    entity = michal.toString;
                    zuuluu = entity.bind(michal)();
 320:
                    entity = '2';
                    if(!(entity !== zuuluu)) { _fun00006_ip = 404; continue _fun00005 }
 330:
                    entity = '5';
                    if(!(entity !== zuuluu)) { _fun00006_ip = 396; continue _fun00005 }
 340:
                    entity = '100';
                    if(!(entity !== zuuluu)) { _fun00006_ip = 388; continue _fun00005 }
 350:
                    tangon = 'embed_not_allowed';
                    entity = '101';
                    oscard = tangon;
                    if(!(entity !== zuuluu)) { _fun00006_ip = 410; continue _fun00005 }
 369:
                    entity = '150';
                    oscard = tangon;
                    if(!(entity !== zuuluu)) { _fun00006_ip = 410; continue _fun00005 }
 382:
                    oscard = 'unknown';
                    _fun00006_ip = 410; continue _fun00005;
 388:
                    oscard = 'video_not_found';
                    _fun00006_ip = 410; continue _fun00005;
 396:
                    oscard = 'html5_error';
                    _fun00006_ip = 410; continue _fun00005;
 404:
                    oscard = 'invalid_parameter';
 410:
                    option = _closure2_slot2;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 4;
                    tangon = golfie[tangon];
                    report = undefined;
                    tangon = verify.bind(report)(tangon);
                    tangon = tangon.PlayerState;
                    tangon = tangon.ERRORED;
                    tangon = option.bind(report)(tangon);
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.bind(report)(oscard);
                    tangon = _closure1_slot1;
                    zuuluu = 6;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.track;
                    entity = _closure1_slot5;
                    zuuluu = entity.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    entity = {'platform': 'youtube', 'error': null, 'action': 'errored'};
                    entity['error'] = oscard;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00006_ip = 625; continue _fun00005;
 527:
                    zuuluu = _closure2_slot2;
                    entity = '-1';
                    if(!(entity !== michal)) { _fun00006_ip = 581; continue _fun00005 }
 542:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 4;
                    michal = michal[entity];
                    entity = undefined;
                    entity = tangon.bind(entity)(michal);
                    entity = entity.PlayerState;
                    michal = entity.READY;
                    _fun00006_ip = 618; continue _fun00005;
 581:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 4;
                    tangon = tangon[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tangon);
                    entity = entity.PlayerState;
                    michal = entity.ERRORED;
 618:
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 625:
                    entity = undefined;
                    return entity;
                }
            };
            offset = new Array(0);
            offset = sizing.bind(output)(kiloes, offset);
            sizing = output.useEffect;
            kiloes = new Array(5);
            kiloes[0] = foxtra;
            kiloes[1] = update;
            kiloes[2] = echoed;
            kiloes[3] = result;
            kiloes[4] = yankee;
            verify = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot6;
                    zuuluu = michal.current;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00008_ip = 66; continue _fun00007 }
 21:
                    tangon = _closure2_slot1;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.UNREADY;
                    michal = tangon !== zuuluu;
 66:
                    if(!michal) { _fun00008_ip = 287; continue _fun00007 }
 72:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00008_ip = 124; continue _fun00007 }
 79:
                    tangon = _closure2_slot4;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.UNREADY;
                    michal = tangon === zuuluu;
 124:
                    if(!michal) { _fun00008_ip = 172; continue _fun00007 }
 127:
                    tangon = _closure2_slot1;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.READY;
                    michal = tangon === zuuluu;
 172:
                    if(!michal) { _fun00008_ip = 201; continue _fun00007 }
 175:
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    zuuluu = tangon.injectJavaScript;
                    michal = 'window.player.playVideo();  true;';
                    michal = zuuluu.bind(tangon)(michal);
 201:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 208:
                    zuuluu = _closure2_slot5;
                    michal = !zuuluu;
 215:
                    if(!michal) { _fun00008_ip = 244; continue _fun00007 }
 218:
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    zuuluu = tangon.injectJavaScript;
                    michal = 'window.player.playVideo();  true;';
                    michal = zuuluu.bind(tangon)(michal);
 244:
                    michal = _closure2_slot0;
                    michal = !michal;
                    if(!michal) { _fun00008_ip = 258; continue _fun00007 }
 254:
                    michal = _closure2_slot5;
 258:
                    if(!michal) { _fun00008_ip = 287; continue _fun00007 }
 261:
                    entity = _closure2_slot6;
                    zuuluu = entity.current;
                    michal = zuuluu.injectJavaScript;
                    entity = 'window.player.pauseVideo(); true;';
                    entity = michal.bind(zuuluu)(entity);
 287:
                    entity = undefined;
                    return entity;
                }
            };
            verify = sizing.bind(output)(verify, kiloes);
            kiloes = 7;
            oscard = oscard[kiloes];
            verify = option.bind(report)(oscard);
            option = verify.getYoutubeVideoIdFromURI;
            oscard = tangon.uri;
            oscard = option.bind(verify)(oscard);
            if(!(entity == oscard)) { _fun00004_ip = 381; continue _fun00003 }
 347:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[kiloes];
            verify = verify.bind(report)(option);
            option = verify.getYoutubeClipVideoIdFromURI;
            tangon = tangon.uri;
            oscard = option.bind(verify)(tangon);
 381:
            if(!(entity != oscard)) { _fun00004_ip = 650; continue _fun00003 }
 388:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[backup];
            tangon = option.bind(report)(tangon);
            tangon = tangon.PlayerState;
            tangon = tangon.ERRORED;
            if(!(yankee === tangon)) { _fun00004_ip = 434; continue _fun00003 }
 421:
            tangon = 'embed_not_allowed';
            if(!(tangon !== golfie)) { _fun00004_ip = 605; continue _fun00003 }
 434:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 9;
            tangon = option[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.isAndroid;
            tangon = tangon.bind(golfie)();
            if(tangon) { _fun00004_ip = 470; continue _fun00003 }
 466:
            verify = {};
            _fun00004_ip = 484; continue _fun00003;
 470:
            verify = {'nestedScrollEnabled': true, 'overScrollMode': 'never', 'domStorageEnabled': true, 'mixedContentMode': 'compatibility'};
 484:
            option = _closure1_slot6;
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[backup];
            golfie = golfie.bind(report)(tangon);
            tangon = {};
            tangon['ref'] = foxtra;
            tangon['style'] = romeon;
            romeon = {};
            foxtra = _closure1_slot7;
            foxtra = foxtra.bind(report)(oscard);
            romeon['html'] = foxtra;
            tangon['source'] = romeon;
            romeon = 'https://www.youtube.com/embed';
            tangon['baseURL'] = romeon;
            tangon['playerState'] = yankee;
            tangon['onDataReceived'] = offset;
            offset = true;
            tangon['javaScriptEnabled'] = offset;
            tangon['javaScriptCanOpenWindowsAutomatically'] = offset;
            sequen = tangon;
            vacuum = verify;
            verify = copyDataProperties(sequen, vacuum);
            sequen = tangon;
            vacuum = zuuluu;
            zuuluu = copyDataProperties(sequen, vacuum);
            zuuluu = oscard.videoId;
            zuuluu = option.bind(report)(golfie, tangon, zuuluu);
            return zuuluu;
 605:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 8;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            oscard = oscard.videoId;
            michal['videoId'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 650:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/components/MediaModalYoutube.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();