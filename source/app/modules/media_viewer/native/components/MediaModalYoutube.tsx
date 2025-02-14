// app/modules/media_viewer/native/components/MediaModalYoutube.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = function(argFoo) { // Original name: HTML
        zulu = _closure1_slot8;
        mike = undefined;
        entity = argFoo;
        tango = zulu.bind(mike)(entity);
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>';
        entity = '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: getJavascriptFromVideoID
        _fun102417: for(var _fun102417_ip = 0; ; ) switch(_fun102417_ip) {
 0:
            entity = argFoo;
            mike = entity.start;
            zulu = null;
            mike = zulu == mike;
            verify = '';
            options = verify;
            if(mike) { _fun102417_ip = 58; continue _fun102417 }
 24:
            oscar = entity.start;
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            tango = "'start': ";
            mike = ',';
            options = report.bind(tango)(oscar, mike);
 58:
            mike = entity.clip;
            mike = zulu == mike;
            golf = verify;
            if(mike) { _fun102417_ip = 111; continue _fun102417 }
 74:
            oscar = entity.clip;
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            tango = "'clip': '";
            mike = "',";
            golf = report.bind(tango)(oscar, mike);
 111:
            mike = entity.clipt;
            mike = zulu == mike;
            if(mike) { _fun102417_ip = 161; continue _fun102417 }
 124:
            report = entity.clipt;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = "'clipt': '";
            mike = "',";
            verify = tango.bind(zulu)(report, mike);
 161:
            output = entity.videoId;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            result = '\nconst tag = document.createElement(\'script\');\ntag.setAttribute(\'src\', "https://www.youtube.com/iframe_api");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player(\'player\', {\n    height:     \'100%\',\n    width:      \'100%\',\n    videoId:    \'';
            sizing = "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      ";
            mike = '\n      ';
            offset = "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
            kilo = verify;
            backup = mike;
            foxtrot = golf;
            romeo = mike;
            yankee = options;
            entity = result[report](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun102418: for(var _fun102418_ip = 0; ; ) switch(_fun102418_ip) {
 0:
            oscar = argFoo;
            update = oscar.visible;
            var _closure2_slot0 = update;
            yankee = oscar.style;
            tango = oscar.source;
            zulu = {'visible': 0, 'style': 0, 'source': 0};
            entity = null;
            sequence = zulu;
            vacuum = null;
            mike = silentSetPrototypeOf(sequence, vacuum);
            report = 0;
            sequence = {};
            vacuum = oscar;
            control = zulu;
            mike = copyDataProperties(sequence, vacuum, control);
            output = _closure1_slot4;
            offset = output.useState;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            foxtrot = 4;
            verify = golf[foxtrot];
            oscar = undefined;
            verify = options.bind(oscar)(verify);
            verify = verify.PlayerState;
            verify = verify.UNREADY;
            verify = offset.bind(output)(verify);
            sizing = _closure1_slot3;
            kilo = 2;
            verify = sizing.bind(oscar)(verify, kilo);
            offset = verify[report];
            var _closure2_slot1 = offset;
            romeo = 1;
            verify = verify[romeo];
            var _closure2_slot2 = verify;
            verify = output.useState;
            verify = verify.bind(output)(oscar);
            verify = sizing.bind(oscar)(verify, kilo);
            report = verify[report];
            verify = verify[romeo];
            var _closure2_slot3 = verify;
            romeo = _closure1_slot1;
            verify = 5;
            kilo = golf[verify];
            kilo = romeo.bind(oscar)(kilo);
            result = kilo.bind(oscar)(offset);
            var _closure2_slot4 = result;
            verify = golf[verify];
            verify = romeo.bind(oscar)(verify);
            echo = verify.bind(oscar)(update);
            var _closure2_slot5 = echo;
            verify = output.useRef;
            romeo = verify.bind(output)(entity);
            var _closure2_slot6 = romeo;
            sizing = output.useEffect;
            kilo = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot5;
                zulu = mike.MESSAGE_EMBEDS_ACTION_COMPLETED;
                mike = {'platform': 'youtube', 'action': 'attempted'};
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            verify = new Array(0);
            verify = sizing.bind(output)(kilo, verify);
            sizing = output.useCallback;
            kilo = function(argFoo) {
                _fun102420: for(var _fun102420_ip = 0; ; ) switch(_fun102420_ip) {
 0:
                    entity = global;
                    zulu = entity.JSON;
                    mike = zulu.parse;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    zulu = entity.type;
                    mike = entity.value;
                    entity = 'onReady';
                    if(!(entity !== zulu)) { _fun102420_ip = 527; continue _fun102420 }
 43:
                    entity = 'onError';
                    if(!(entity !== zulu)) { _fun102420_ip = 297; continue _fun102420 }
 54:
                    entity = 'onStateChange';
                    if(!(entity === zulu)) { _fun102420_ip = 625; continue _fun102420 }
 65:
                    entity = {};
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    golf = 4;
                    options = zulu[golf];
                    tango = undefined;
                    options = oscar.bind(tango)(options);
                    options = options.PlayerState;
                    options = options.UNSTARTED;
                    entity['-1'] = options;
                    options = zulu[golf];
                    options = oscar.bind(tango)(options);
                    options = options.PlayerState;
                    options = options.ENDED;
                    entity[0] = options;
                    options = zulu[golf];
                    options = oscar.bind(tango)(options);
                    options = options.PlayerState;
                    options = options.PLAYING;
                    entity[1] = options;
                    options = zulu[golf];
                    options = oscar.bind(tango)(options);
                    options = options.PlayerState;
                    options = options.PAUSED;
                    entity[2] = options;
                    options = zulu[golf];
                    options = oscar.bind(tango)(options);
                    options = options.PlayerState;
                    options = options.BUFFERING;
                    entity[3] = options;
                    zulu = zulu[golf];
                    zulu = oscar.bind(tango)(zulu);
                    zulu = zulu.PlayerState;
                    zulu = zulu.VIDEO_CUED;
                    entity[5] = zulu;
                    zulu = entity[mike];
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun102420_ip = 274; continue _fun102420 }
 247:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golf];
                    report = oscar.bind(tango)(report);
                    report = report.PlayerState;
                    entity = zulu in report;
 274:
                    if(!entity) { _fun102420_ip = 625; continue _fun102420 }
 280:
                    entity = _closure2_slot2;
                    entity = entity.bind(tango)(zulu);
                    _fun102420_ip = 625; continue _fun102420;
 297:
                    tango = 'number';
                    entity = typeof mike;
                    zulu = mike;
                    if(!(tango === entity)) { _fun102420_ip = 320; continue _fun102420 }
 311:
                    entity = mike.toString;
                    zulu = entity.bind(mike)();
 320:
                    entity = '2';
                    if(!(entity !== zulu)) { _fun102420_ip = 404; continue _fun102420 }
 330:
                    entity = '5';
                    if(!(entity !== zulu)) { _fun102420_ip = 396; continue _fun102420 }
 340:
                    entity = '100';
                    if(!(entity !== zulu)) { _fun102420_ip = 388; continue _fun102420 }
 350:
                    tango = 'embed_not_allowed';
                    entity = '101';
                    oscar = tango;
                    if(!(entity !== zulu)) { _fun102420_ip = 410; continue _fun102420 }
 369:
                    entity = '150';
                    oscar = tango;
                    if(!(entity !== zulu)) { _fun102420_ip = 410; continue _fun102420 }
 382:
                    oscar = 'unknown';
                    _fun102420_ip = 410; continue _fun102420;
 388:
                    oscar = 'video_not_found';
                    _fun102420_ip = 410; continue _fun102420;
 396:
                    oscar = 'html5_error';
                    _fun102420_ip = 410; continue _fun102420;
 404:
                    oscar = 'invalid_parameter';
 410:
                    options = _closure2_slot2;
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 4;
                    tango = golf[tango];
                    report = undefined;
                    tango = verify.bind(report)(tango);
                    tango = tango.PlayerState;
                    tango = tango.ERRORED;
                    tango = options.bind(report)(tango);
                    zulu = _closure2_slot3;
                    zulu = zulu.bind(report)(oscar);
                    tango = _closure1_slot1;
                    zulu = 6;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.track;
                    entity = _closure1_slot5;
                    zulu = entity.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    entity = {'platform': 'youtube', 'error': null, 'action': 'errored'};
                    entity['error'] = oscar;
                    entity = tango.bind(report)(zulu, entity);
                    _fun102420_ip = 625; continue _fun102420;
 527:
                    zulu = _closure2_slot2;
                    entity = '-1';
                    if(!(entity !== mike)) { _fun102420_ip = 581; continue _fun102420 }
 542:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 4;
                    mike = mike[entity];
                    entity = undefined;
                    entity = tango.bind(entity)(mike);
                    entity = entity.PlayerState;
                    mike = entity.READY;
                    _fun102420_ip = 618; continue _fun102420;
 581:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 4;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.PlayerState;
                    mike = entity.ERRORED;
 618:
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 625:
                    entity = undefined;
                    return entity;
                }
            };
            verify = new Array(0);
            verify = sizing.bind(output)(kilo, verify);
            sizing = output.useEffect;
            kilo = new Array(5);
            kilo[0] = romeo;
            kilo[1] = update;
            kilo[2] = echo;
            kilo[3] = result;
            kilo[4] = offset;
            backup = function() {
                _fun102421: for(var _fun102421_ip = 0; ; ) switch(_fun102421_ip) {
 0:
                    mike = _closure2_slot6;
                    zulu = mike.current;
                    mike = null;
                    mike = mike != zulu;
                    if(!mike) { _fun102421_ip = 66; continue _fun102421 }
 21:
                    tango = _closure2_slot1;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    report = report[zulu];
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report);
                    zulu = zulu.PlayerState;
                    zulu = zulu.UNREADY;
                    mike = tango !== zulu;
 66:
                    if(!mike) { _fun102421_ip = 287; continue _fun102421 }
 72:
                    mike = _closure2_slot0;
                    if(!mike) { _fun102421_ip = 124; continue _fun102421 }
 79:
                    tango = _closure2_slot4;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    report = report[zulu];
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report);
                    zulu = zulu.PlayerState;
                    zulu = zulu.UNREADY;
                    mike = tango === zulu;
 124:
                    if(!mike) { _fun102421_ip = 172; continue _fun102421 }
 127:
                    tango = _closure2_slot1;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    report = report[zulu];
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report);
                    zulu = zulu.PlayerState;
                    zulu = zulu.READY;
                    mike = tango === zulu;
 172:
                    if(!mike) { _fun102421_ip = 201; continue _fun102421 }
 175:
                    mike = _closure2_slot6;
                    tango = mike.current;
                    zulu = tango.injectJavaScript;
                    mike = 'window.player.playVideo();  true;';
                    mike = zulu.bind(tango)(mike);
 201:
                    mike = _closure2_slot0;
                    if(!mike) { _fun102421_ip = 215; continue _fun102421 }
 208:
                    zulu = _closure2_slot5;
                    mike = !zulu;
 215:
                    if(!mike) { _fun102421_ip = 244; continue _fun102421 }
 218:
                    mike = _closure2_slot6;
                    tango = mike.current;
                    zulu = tango.injectJavaScript;
                    mike = 'window.player.playVideo();  true;';
                    mike = zulu.bind(tango)(mike);
 244:
                    mike = _closure2_slot0;
                    mike = !mike;
                    if(!mike) { _fun102421_ip = 258; continue _fun102421 }
 254:
                    mike = _closure2_slot5;
 258:
                    if(!mike) { _fun102421_ip = 287; continue _fun102421 }
 261:
                    entity = _closure2_slot6;
                    zulu = entity.current;
                    mike = zulu.injectJavaScript;
                    entity = 'window.player.pauseVideo(); true;';
                    entity = mike.bind(zulu)(entity);
 287:
                    entity = undefined;
                    return entity;
                }
            };
            backup = sizing.bind(output)(backup, kilo);
            kilo = 7;
            golf = golf[kilo];
            backup = options.bind(oscar)(golf);
            options = backup.getYoutubeVideoIdFromURI;
            golf = tango.uri;
            golf = options.bind(backup)(golf);
            if(!(entity == golf)) { _fun102418_ip = 379; continue _fun102418 }
 346:
            backup = _closure1_slot0;
            options = _closure1_slot2;
            options = options[kilo];
            backup = backup.bind(oscar)(options);
            options = backup.getYoutubeClipVideoIdFromURI;
            tango = tango.uri;
            golf = options.bind(backup)(tango);
 379:
            tango = entity == golf;
            entity = null;
            if(tango) { _fun102418_ip = 591; continue _fun102418 }
 391:
            options = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[foxtrot];
            tango = options.bind(oscar)(tango);
            tango = tango.PlayerState;
            tango = tango.ERRORED;
            if(!(offset === tango)) { _fun102418_ip = 434; continue _fun102418 }
 424:
            tango = 'embed_not_allowed';
            if(!(tango !== report)) { _fun102418_ip = 545; continue _fun102418 }
 434:
            options = _closure1_slot6;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[foxtrot];
            report = report.bind(oscar)(tango);
            tango = {};
            tango['ref'] = romeo;
            tango['style'] = yankee;
            yankee = {};
            romeo = _closure1_slot7;
            romeo = romeo.bind(oscar)(golf);
            yankee['html'] = romeo;
            tango['source'] = yankee;
            yankee = 'https://www.youtube.com/embed';
            tango['baseURL'] = yankee;
            tango['playerState'] = offset;
            tango['onDataReceived'] = verify;
            verify = true;
            tango['javaScriptEnabled'] = verify;
            tango['javaScriptCanOpenWindowsAutomatically'] = verify;
            sequence = tango;
            vacuum = mike;
            mike = copyDataProperties(sequence, vacuum);
            mike = golf.videoId;
            mike = options.bind(oscar)(report, tango, mike);
            _fun102418_ip = 588; continue _fun102418;
 545:
            report = _closure1_slot6;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 8;
            zulu = options[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = {};
            golf = golf.videoId;
            zulu['videoId'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 588:
            entity = mike;
 591:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_viewer/native/components/MediaModalYoutube.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();