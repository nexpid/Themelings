// app/modules/media_viewer/native/components/MediaModalTiktok.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: getReadablePlayerError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = '1';
            if(!(entity !== michal)) { _fun00002_ip = 73; continue _fun00001 }
 13:
            entity = '2';
            if(!(entity !== michal)) { _fun00002_ip = 65; continue _fun00001 }
 23:
            entity = '3';
            if(!(entity !== michal)) { _fun00002_ip = 57; continue _fun00001 }
 33:
            entity = '4';
            if(!(entity !== michal)) { _fun00002_ip = 49; continue _fun00001 }
 43:
            entity = 'UNKNOWN';
            return entity;
 49:
            entity = 'MEDIA_ERR_SRC_NOT_SUPPORTED';
            return entity;
 57:
            entity = 'MEDIA_ERR_DECODE';
            return entity;
 65:
            entity = 'MEDIA_ERR_NETWORK';
            return entity;
 73:
            entity = 'MEDIA_ERR_ABORTED';
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: postMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = global;
            tangon = entity.JSON;
            zuuluu = tangon.stringify;
            michal = {};
            report = true;
            michal['x-tiktok-player'] = report;
            golfie = argBar;
            option = michal;
            report = copyDataProperties(option, golfie);
            oscard = zuuluu.bind(tangon)(michal);
            michal = argFoo;
            zuuluu = michal.current;
            michal = null;
            if(!(michal != zuuluu)) { _fun00004_ip = 94; continue _fun00003 }
 54:
            michal = zuuluu.injectJavaScript;
            entity = entity.HermesInternal;
            report = entity.concat;
            tangon = '\n    window.postMessage(';
            entity = ", '*')\n  ";
            entity = report.bind(tangon)(oscard, entity);
            entity = michal.bind(zuuluu)(entity);
 94:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argCor;
    option = tangon.bind(entity)(report);
    var _closure1_slot4 = option;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = {'controls': 0, 'enable_music_info': 0, 'enable_timestamp': 0, 'utm_source': 'discord.gg'};
    var _closure1_slot7 = tangon;
    tangon = {};
    report = 4;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.UNSTARTED;
    tangon['-1'] = verify;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.ENDED;
    tangon[0] = verify;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.PLAYING;
    tangon[1] = verify;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.PAUSED;
    tangon[2] = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.PlayerState;
    report = report.BUFFERING;
    tangon[3] = report;
    var _closure1_slot8 = tangon;
    report = option.memo;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            result = report.visible;
            var _closure2_slot0 = result;
            option = report.style;
            verify = report.source;
            var _closure2_slot1 = verify;
            golfie = report.controls;
            var _closure2_slot2 = golfie;
            tangon = {'visible': 0, 'style': 0, 'source': 0, 'controls': 0};
            entity = null;
            ctrled = tangon;
            source = null;
            michal = silentSetPrototypeOf(ctrled, source);
            oscard = 0;
            ctrled = {};
            source = report;
            update = tangon;
            report = copyDataProperties(ctrled, source, update);
            tangon = undefined;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            backup = _closure1_slot4;
            yankee = backup.useState;
            kiloes = _closure1_slot0;
            foxtra = _closure1_slot2;
            romeon = 4;
            offset = foxtra[romeon];
            offset = kiloes.bind(tangon)(offset);
            offset = offset.PlayerState;
            offset = offset.UNREADY;
            backup = yankee.bind(backup)(offset);
            yankee = _closure1_slot3;
            offset = 2;
            yankee = yankee.bind(tangon)(backup, offset);
            oscard = yankee[oscard];
            var _closure2_slot3 = oscard;
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot4 = offset;
            yankee = _closure1_slot1;
            offset = 5;
            backup = foxtra[offset];
            backup = yankee.bind(tangon)(backup);
            sizing = backup.bind(tangon)(oscard);
            var _closure2_slot5 = sizing;
            offset = foxtra[offset];
            offset = yankee.bind(tangon)(offset);
            output = offset.bind(tangon)(result);
            var _closure2_slot6 = output;
            offset = entity == golfie;
            yankee = undefined;
            if(offset) { _fun00006_ip = 240; continue _fun00005 }
 221:
            offset = golfie.props;
            foxtra = entity == offset;
            yankee = undefined;
            if(foxtra) { _fun00006_ip = 240; continue _fun00005 }
 235:
            yankee = offset.ref;
 240:
            _closure2_slot7 = yankee;
            foxtra = _closure1_slot4;
            offset = foxtra.useCallback;
            backup = entity == golfie;
            entity = undefined;
            if(backup) { _fun00006_ip = 267; continue _fun00005 }
 262:
            entity = golfie.props;
 267:
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = global;
                    zuuluu = entity.JSON;
                    michal = zuuluu.parse;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = entity.type;
                    michal = 'onPlayerReady';
                    if(!(michal !== zuuluu)) { _fun00008_ip = 483; continue _fun00007 }
 40:
                    michal = 'onStateChange';
                    if(!(michal !== zuuluu)) { _fun00008_ip = 402; continue _fun00007 }
 51:
                    michal = 'onError';
                    if(!(michal !== zuuluu)) { _fun00008_ip = 277; continue _fun00007 }
 62:
                    michal = 'onCurrentTime';
                    if(!(michal !== zuuluu)) { _fun00008_ip = 131; continue _fun00007 }
 72:
                    michal = 'onMute';
                    if(!(michal === zuuluu)) { _fun00008_ip = 532; continue _fun00007 }
 85:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.setMuted;
                    michal = entity.value;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00008_ip = 532; continue _fun00007;
 131:
                    michal = _closure2_slot2;
                    report = null;
                    michal = report == michal;
                    golfie = undefined;
                    if(michal) { _fun00008_ip = 165; continue _fun00007 }
 149:
                    oscard = _closure2_slot2;
                    oscard = oscard.props;
                    michal = report == oscard;
                    golfie = oscard;
 165:
                    if(michal) { _fun00008_ip = 178; continue _fun00007 }
 168:
                    oscard = golfie.onCurrentSecond;
                    michal = report == oscard;
 178:
                    if(michal) { _fun00008_ip = 203; continue _fun00007 }
 181:
                    oscard = golfie.onCurrentSecond;
                    michal = entity.value;
                    michal = michal.currentTime;
                    michal = oscard.bind(golfie)(michal);
 203:
                    michal = _closure2_slot2;
                    michal = report == michal;
                    tangon = undefined;
                    if(michal) { _fun00008_ip = 232; continue _fun00007 }
 216:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.props;
                    michal = report == zuuluu;
                    tangon = zuuluu;
 232:
                    if(michal) { _fun00008_ip = 245; continue _fun00007 }
 235:
                    zuuluu = tangon.onDuration;
                    michal = report == zuuluu;
 245:
                    if(michal) { _fun00008_ip = 532; continue _fun00007 }
 251:
                    zuuluu = tangon.onDuration;
                    michal = entity.value;
                    michal = michal.duration;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00008_ip = 532; continue _fun00007;
 277:
                    zuuluu = _closure2_slot4;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 4;
                    michal = tangon[michal];
                    option = undefined;
                    michal = report.bind(option)(michal);
                    michal = michal.PlayerState;
                    michal = michal.ERRORED;
                    michal = zuuluu.bind(option)(michal);
                    zuuluu = _closure1_slot1;
                    michal = 6;
                    michal = tangon[michal];
                    report = zuuluu.bind(option)(michal);
                    tangon = report.track;
                    michal = _closure1_slot5;
                    zuuluu = michal.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    michal = {'platform': 'tiktok', 'error': null, 'action': 'errored'};
                    golfie = _closure1_slot9;
                    oscard = entity.value;
                    oscard = golfie.bind(option)(oscard);
                    michal['error'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00008_ip = 532; continue _fun00007;
 402:
                    michal = _closure1_slot8;
                    entity = entity.value;
                    zuuluu = michal[entity];
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00008_ip = 532; continue _fun00007 }
 424:
                    michal = _closure2_slot2;
                    tangon = golfie == michal;
                    michal = undefined;
                    report = undefined;
                    if(tangon) { _fun00008_ip = 458; continue _fun00007 }
 442:
                    oscard = _closure2_slot2;
                    oscard = oscard.props;
                    tangon = golfie == oscard;
                    report = oscard;
 458:
                    if(tangon) { _fun00008_ip = 472; continue _fun00007 }
 461:
                    tangon = report.onPlayerStateChange;
                    tangon = tangon.bind(report)(zuuluu);
 472:
                    entity = _closure2_slot4;
                    entity = entity.bind(michal)(zuuluu);
                    _fun00008_ip = 532; continue _fun00007;
 483:
                    zuuluu = _closure2_slot4;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 4;
                    entity = michal[entity];
                    michal = undefined;
                    entity = tangon.bind(michal)(entity);
                    entity = entity.PlayerState;
                    entity = entity.READY;
                    entity = zuuluu.bind(michal)(entity);
 532:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = offset.bind(foxtra)(entity, golfie);
            foxtra = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 8;
            offset = entity[offset];
            backup = foxtra.bind(tangon)(offset);
            foxtra = backup.useMediaPlayerMutedStore;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.isMuted;
                return entity;
            };
            offset = foxtra.bind(backup)(offset);
            _closure2_slot8 = offset;
            backup = _closure1_slot4;
            kiloes = backup.useEffect;
            foxtra = new Array(6);
            foxtra[0] = yankee;
            foxtra[1] = result;
            foxtra[2] = output;
            foxtra[3] = sizing;
            foxtra[4] = oscard;
            foxtra[5] = offset;
            offset = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot7;
                    zuuluu = null;
                    tangon = zuuluu == entity;
                    entity = undefined;
                    michal = undefined;
                    if(tangon) { _fun00010_ip = 29; continue _fun00009 }
 20:
                    tangon = _closure2_slot7;
                    michal = tangon.current;
 29:
                    michal = zuuluu != michal;
                    if(!michal) { _fun00010_ip = 79; continue _fun00009 }
 36:
                    tangon = _closure2_slot3;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.UNREADY;
                    michal = tangon !== zuuluu;
 79:
                    if(!michal) { _fun00010_ip = 427; continue _fun00009 }
 85:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00010_ip = 135; continue _fun00009 }
 92:
                    tangon = _closure2_slot5;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.UNREADY;
                    michal = tangon === zuuluu;
 135:
                    if(!michal) { _fun00010_ip = 181; continue _fun00009 }
 138:
                    tangon = _closure2_slot3;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.READY;
                    michal = tangon === zuuluu;
 181:
                    if(!michal) { _fun00010_ip = 211; continue _fun00009 }
 184:
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot7;
                    michal = {};
                    oscard = 'play';
                    michal['type'] = oscard;
                    michal = tangon.bind(entity)(zuuluu, michal);
 211:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00010_ip = 225; continue _fun00009 }
 218:
                    zuuluu = _closure2_slot6;
                    michal = !zuuluu;
 225:
                    if(!michal) { _fun00010_ip = 255; continue _fun00009 }
 228:
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot7;
                    michal = {};
                    oscard = 'play';
                    michal['type'] = oscard;
                    michal = tangon.bind(entity)(zuuluu, michal);
 255:
                    michal = _closure2_slot0;
                    michal = !michal;
                    if(!michal) { _fun00010_ip = 269; continue _fun00009 }
 265:
                    michal = _closure2_slot6;
 269:
                    if(!michal) { _fun00010_ip = 299; continue _fun00009 }
 272:
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot7;
                    michal = {};
                    oscard = 'pause';
                    michal['type'] = oscard;
                    michal = tangon.bind(entity)(zuuluu, michal);
 299:
                    tangon = _closure2_slot3;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.PlayerState;
                    zuuluu = zuuluu.ENDED;
                    if(!(tangon === zuuluu)) { _fun00010_ip = 390; continue _fun00009 }
 342:
                    oscard = _closure1_slot10;
                    tangon = _closure2_slot7;
                    zuuluu = {'type': 'seekTo', 'value': 0};
                    zuuluu = oscard.bind(entity)(tangon, zuuluu);
                    tangon = _closure2_slot7;
                    zuuluu = {};
                    golfie = 'play';
                    zuuluu['type'] = golfie;
                    zuuluu = oscard.bind(entity)(tangon, zuuluu);
 390:
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot7;
                    michal = {};
                    oscard = _closure2_slot8;
                    report = 'unMute';
                    if(!oscard) { _fun00010_ip = 417; continue _fun00009 }
 413:
                    report = 'mute';
 417:
                    michal['type'] = report;
                    michal = tangon.bind(entity)(zuuluu, michal);
 427:
                    return entity;
                }
            };
            offset = kiloes.bind(backup)(offset, foxtra);
            kiloes = backup.useEffect;
            foxtra = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot5;
                zuuluu = michal.MESSAGE_EMBEDS_ACTION_COMPLETED;
                michal = {'platform': 'tiktok', 'action': 'attempted'};
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            offset = new Array(0);
            offset = kiloes.bind(backup)(foxtra, offset);
            foxtra = backup.useMemo;
            kiloes = verify.uri;
            offset = new Array(1);
            offset[0] = kiloes;
            zuuluu = function() {
                zuuluu = global;
                report = zuuluu.URL;
                michal = _closure2_slot1;
                oscard = michal.uri;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                golfie = tangon;
                michal = new golfie[report](oscard, report);
                michal = michal instanceof Object ? michal : tangon;
                var _closure3_slot0 = michal;
                report = zuuluu.Object;
                tangon = report.entries;
                zuuluu = _closure1_slot7;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        oscard = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        report = undefined;
                        if(zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                        report = oscard;
 27:
                        oscard = undefined;
                        if(zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                        golfie = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        oscard = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00012_ip = 57; continue _fun00011 }
 51:
                        oscard = golfie;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                        michal.return();
 63:
                        michal = _closure3_slot0;
                        tangon = michal.searchParams;
                        zuuluu = tangon.append;
                        michal = oscard.toString;
                        michal = michal.bind(oscard)();
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = michal.toString;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = foxtra.bind(backup)(zuuluu, offset);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            entity = entity[romeon];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['ref'] = yankee;
            entity['style'] = option;
            option = {};
            ctrled = option;
            source = verify;
            verify = copyDataProperties(ctrled, source);
            verify = 'uri';
            option[verify] = offset;
            entity['source'] = option;
            option = 'https://www.tiktok.com/player/v1/';
            entity['baseURL'] = option;
            option = '\n  window.addEventListener(\'message\', function(event) {\n    if (!event.data["x-tiktok-player"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n';
            entity['injectedJavaScript'] = option;
            entity['onDataReceived'] = golfie;
            entity['playerState'] = oscard;
            ctrled = entity;
            source = report;
            report = copyDataProperties(ctrled, source);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/components/MediaModalTiktok.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function() { // Original name: createTiktokVideoControls
        michal = _closure1_slot4;
        entity = michal.createRef;
        tangon = entity.bind(michal)();
        var _closure2_slot2 = tangon;
        entity = 0;
        var _closure2_slot3 = entity;
        var _closure2_slot4 = entity;
        entity = false;
        var _closure2_slot5 = entity;
        entity = {};
        michal = function(argFoo) { // Original name: seek
            tangon = _closure1_slot10;
            zuuluu = _closure2_slot2;
            michal = {};
            entity = 'seekTo';
            michal['type'] = entity;
            entity = argFoo;
            michal['value'] = entity;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity['seek'] = michal;
        michal = function(argFoo) { // Original name: pause
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                michal = _closure2_slot5;
                if(!(michal !== report)) { _fun00014_ip = 54; continue _fun00013 }
 14:
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot2;
                michal = {};
                _closure2_slot5 = report;
                entity = 'play';
                if(!report) { _fun00014_ip = 42; continue _fun00013 }
 38:
                entity = 'pause';
 42:
                michal['type'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['pause'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: useSubscribe
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            tangon = _closure1_slot4;
            zuuluu = tangon.useLayoutEffect;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00016_ip = 33; continue _fun00015 }
 13:
                    oscard = _closure2_slot0;
                    report = _closure2_slot3;
                    tangon = _closure2_slot4;
                    michal = undefined;
                    michal = oscard.bind(michal)(report, tangon);
 33:
                    michal = _closure2_slot1;
                    if(!(zuuluu != michal)) { _fun00016_ip = 56; continue _fun00015 }
 41:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 56:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        entity['useSubscribe'] = michal;
        michal = {};
        michal['ref'] = tangon;
        tangon = function(argFoo) { // Original name: onPlayerStateChange
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00018_ip = 102; continue _fun00017 }
 16:
                zuuluu = _closure2_slot1;
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 4;
                entity = entity[golfie];
                michal = undefined;
                entity = oscard.bind(michal)(entity);
                entity = entity.PlayerState;
                entity = entity.PAUSED;
                entity = report === entity;
                if(entity) { _fun00018_ip = 97; continue _fun00017 }
 64:
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                tangon = oscard.bind(michal)(tangon);
                tangon = tangon.PlayerState;
                tangon = tangon.ENDED;
                entity = report === tangon;
 97:
                entity = zuuluu.bind(michal)(entity);
 102:
                entity = undefined;
                return entity;
            }
        };
        michal['onPlayerStateChange'] = tangon;
        tangon = function(argFoo) { // Original name: onCurrentSecond
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = argFoo;
                _closure2_slot3 = michal;
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00020_ip = 40; continue _fun00019 }
 20:
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot3;
                michal = _closure2_slot4;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
 40:
                entity = undefined;
                return entity;
            }
        };
        michal['onCurrentSecond'] = tangon;
        zuuluu = function(argFoo) { // Original name: onDuration
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = argFoo;
                _closure2_slot4 = michal;
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00022_ip = 40; continue _fun00021 }
 20:
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot3;
                michal = _closure2_slot4;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
 40:
                entity = undefined;
                return entity;
            }
        };
        michal['onDuration'] = zuuluu;
        entity['props'] = michal;
        return entity;
    };
    zuuluu['createTiktokVideoControls'] = michal;
    return entity;
})();