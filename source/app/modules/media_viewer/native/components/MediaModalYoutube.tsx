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
            oscard = argFoo;
            update = oscard.visible;
            var _closure2_slot0 = update;
            yankee = oscard.style;
            tangon = oscard.source;
            zuuluu = {'visible': 0, 'style': 0, 'source': 0};
            entity = null;
            sequen = zuuluu;
            vacuum = null;
            michal = silentSetPrototypeOf(sequen, vacuum);
            report = 0;
            sequen = {};
            vacuum = oscard;
            ctrled = zuuluu;
            michal = copyDataProperties(sequen, vacuum, ctrled);
            output = _closure1_slot4;
            offset = output.useState;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            foxtra = 4;
            verify = golfie[foxtra];
            oscard = undefined;
            verify = option.bind(oscard)(verify);
            verify = verify.PlayerState;
            verify = verify.UNREADY;
            verify = offset.bind(output)(verify);
            sizing = _closure1_slot3;
            kiloes = 2;
            verify = sizing.bind(oscard)(verify, kiloes);
            offset = verify[report];
            var _closure2_slot1 = offset;
            romeon = 1;
            verify = verify[romeon];
            var _closure2_slot2 = verify;
            verify = output.useState;
            verify = verify.bind(output)(oscard);
            verify = sizing.bind(oscard)(verify, kiloes);
            report = verify[report];
            verify = verify[romeon];
            var _closure2_slot3 = verify;
            romeon = _closure1_slot1;
            verify = 5;
            kiloes = golfie[verify];
            kiloes = romeon.bind(oscard)(kiloes);
            result = kiloes.bind(oscard)(offset);
            var _closure2_slot4 = result;
            verify = golfie[verify];
            verify = romeon.bind(oscard)(verify);
            echoed = verify.bind(oscard)(update);
            var _closure2_slot5 = echoed;
            verify = output.useRef;
            romeon = verify.bind(output)(entity);
            var _closure2_slot6 = romeon;
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
            verify = new Array(0);
            verify = sizing.bind(output)(kiloes, verify);
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
            verify = new Array(0);
            verify = sizing.bind(output)(kiloes, verify);
            sizing = output.useEffect;
            kiloes = new Array(5);
            kiloes[0] = romeon;
            kiloes[1] = update;
            kiloes[2] = echoed;
            kiloes[3] = result;
            kiloes[4] = offset;
            backup = function() {
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
            backup = sizing.bind(output)(backup, kiloes);
            kiloes = 7;
            golfie = golfie[kiloes];
            backup = option.bind(oscard)(golfie);
            option = backup.getYoutubeVideoIdFromURI;
            golfie = tangon.uri;
            golfie = option.bind(backup)(golfie);
            if(!(entity == golfie)) { _fun00004_ip = 385; continue _fun00003 }
 351:
            backup = _closure1_slot0;
            option = _closure1_slot2;
            option = option[kiloes];
            backup = backup.bind(oscard)(option);
            option = backup.getYoutubeClipVideoIdFromURI;
            tangon = tangon.uri;
            golfie = option.bind(backup)(tangon);
 385:
            tangon = entity == golfie;
            entity = null;
            if(tangon) { _fun00004_ip = 597; continue _fun00003 }
 397:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[foxtra];
            tangon = option.bind(oscard)(tangon);
            tangon = tangon.PlayerState;
            tangon = tangon.ERRORED;
            if(!(offset === tangon)) { _fun00004_ip = 440; continue _fun00003 }
 430:
            tangon = 'embed_not_allowed';
            if(!(tangon !== report)) { _fun00004_ip = 551; continue _fun00003 }
 440:
            option = _closure1_slot6;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[foxtra];
            report = report.bind(oscard)(tangon);
            tangon = {};
            tangon['ref'] = romeon;
            tangon['style'] = yankee;
            yankee = {};
            romeon = _closure1_slot7;
            romeon = romeon.bind(oscard)(golfie);
            yankee['html'] = romeon;
            tangon['source'] = yankee;
            yankee = 'https://www.youtube.com/embed';
            tangon['baseURL'] = yankee;
            tangon['playerState'] = offset;
            tangon['onDataReceived'] = verify;
            verify = true;
            tangon['javaScriptEnabled'] = verify;
            tangon['javaScriptCanOpenWindowsAutomatically'] = verify;
            sequen = tangon;
            vacuum = michal;
            michal = copyDataProperties(sequen, vacuum);
            michal = golfie.videoId;
            michal = option.bind(oscard)(report, tangon, michal);
            _fun00004_ip = 594; continue _fun00003;
 551:
            report = _closure1_slot6;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = {};
            golfie = golfie.videoId;
            zuuluu['videoId'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 594:
            entity = michal;
 597:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/components/MediaModalYoutube.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();