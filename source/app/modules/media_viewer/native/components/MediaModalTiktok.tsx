// app/modules/media_viewer/native/components/MediaModalTiktok.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: getReadablePlayerError
        _fun85592: for(var _fun85592_ip = 0; ; ) switch(_fun85592_ip) {
 0:
            mike = argFoo;
            entity = '1';
            if(!(entity !== mike)) { _fun85592_ip = 73; continue _fun85592 }
 13:
            entity = '2';
            if(!(entity !== mike)) { _fun85592_ip = 65; continue _fun85592 }
 23:
            entity = '3';
            if(!(entity !== mike)) { _fun85592_ip = 57; continue _fun85592 }
 33:
            entity = '4';
            if(!(entity !== mike)) { _fun85592_ip = 49; continue _fun85592 }
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
        _fun85593: for(var _fun85593_ip = 0; ; ) switch(_fun85593_ip) {
 0:
            entity = global;
            tango = entity.JSON;
            zulu = tango.stringify;
            mike = {};
            report = true;
            mike['x-tiktok-player'] = report;
            golf = argBar;
            options = mike;
            report = copyDataProperties(options, golf);
            oscar = zulu.bind(tango)(mike);
            mike = argFoo;
            zulu = mike.current;
            mike = null;
            if(!(mike != zulu)) { _fun85593_ip = 94; continue _fun85593 }
 54:
            mike = zulu.injectJavaScript;
            entity = entity.HermesInternal;
            report = entity.concat;
            tango = '\n    window.postMessage(';
            entity = ", '*')\n  ";
            entity = report.bind(tango)(oscar, entity);
            entity = mike.bind(zulu)(entity);
 94:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    report = golf[tango];
    tango = argCorge;
    options = tango.bind(entity)(report);
    var _closure1_slot4 = options;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = {'controls': 0, 'enable_music_info': 0, 'enable_timestamp': 0, 'utm_source': 'discord.gg'};
    var _closure1_slot7 = tango;
    tango = {};
    report = 4;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.UNSTARTED;
    tango['-1'] = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.ENDED;
    tango[0] = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.PLAYING;
    tango[1] = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.PlayerState;
    verify = verify.PAUSED;
    tango[2] = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.PlayerState;
    report = report.BUFFERING;
    tango[3] = report;
    var _closure1_slot8 = tango;
    report = options.memo;
    tango = function(argFoo) {
        _fun85594: for(var _fun85594_ip = 0; ; ) switch(_fun85594_ip) {
 0:
            report = argFoo;
            result = report.visible;
            var _closure2_slot0 = result;
            options = report.style;
            verify = report.source;
            var _closure2_slot1 = verify;
            golf = report.controls;
            var _closure2_slot2 = golf;
            tango = {'visible': 0, 'style': 0, 'source': 0, 'controls': 0};
            entity = null;
            control = tango;
            source = null;
            mike = silentSetPrototypeOf(control, source);
            oscar = 0;
            control = {};
            source = report;
            update = tango;
            report = copyDataProperties(control, source, update);
            tango = undefined;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            backup = _closure1_slot4;
            yankee = backup.useState;
            kilo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            romeo = 4;
            offset = foxtrot[romeo];
            offset = kilo.bind(tango)(offset);
            offset = offset.PlayerState;
            offset = offset.UNREADY;
            backup = yankee.bind(backup)(offset);
            yankee = _closure1_slot3;
            offset = 2;
            yankee = yankee.bind(tango)(backup, offset);
            oscar = yankee[oscar];
            var _closure2_slot3 = oscar;
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot4 = offset;
            yankee = _closure1_slot1;
            offset = 5;
            backup = foxtrot[offset];
            backup = yankee.bind(tango)(backup);
            sizing = backup.bind(tango)(oscar);
            var _closure2_slot5 = sizing;
            offset = foxtrot[offset];
            offset = yankee.bind(tango)(offset);
            output = offset.bind(tango)(result);
            var _closure2_slot6 = output;
            offset = entity == golf;
            yankee = undefined;
            if(offset) { _fun85594_ip = 236; continue _fun85594 }
 217:
            offset = golf.props;
            foxtrot = entity == offset;
            yankee = undefined;
            if(foxtrot) { _fun85594_ip = 236; continue _fun85594 }
 231:
            yankee = offset.ref;
 236:
            _closure2_slot7 = yankee;
            foxtrot = _closure1_slot4;
            offset = foxtrot.useCallback;
            backup = entity == golf;
            entity = undefined;
            if(backup) { _fun85594_ip = 263; continue _fun85594 }
 258:
            entity = golf.props;
 263:
            golf = new Array(1);
            golf[0] = entity;
            entity = function(argFoo) {
                _fun85595: for(var _fun85595_ip = 0; ; ) switch(_fun85595_ip) {
 0:
                    entity = global;
                    zulu = entity.JSON;
                    mike = zulu.parse;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    zulu = entity.type;
                    mike = 'onPlayerReady';
                    if(!(mike !== zulu)) { _fun85595_ip = 483; continue _fun85595 }
 40:
                    mike = 'onStateChange';
                    if(!(mike !== zulu)) { _fun85595_ip = 402; continue _fun85595 }
 51:
                    mike = 'onError';
                    if(!(mike !== zulu)) { _fun85595_ip = 277; continue _fun85595 }
 62:
                    mike = 'onCurrentTime';
                    if(!(mike !== zulu)) { _fun85595_ip = 131; continue _fun85595 }
 72:
                    mike = 'onMute';
                    if(!(mike === zulu)) { _fun85595_ip = 532; continue _fun85595 }
 85:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.setMuted;
                    mike = entity.value;
                    mike = zulu.bind(tango)(mike);
                    _fun85595_ip = 532; continue _fun85595;
 131:
                    mike = _closure2_slot2;
                    report = null;
                    mike = report == mike;
                    golf = undefined;
                    if(mike) { _fun85595_ip = 165; continue _fun85595 }
 149:
                    oscar = _closure2_slot2;
                    oscar = oscar.props;
                    mike = report == oscar;
                    golf = oscar;
 165:
                    if(mike) { _fun85595_ip = 178; continue _fun85595 }
 168:
                    oscar = golf.onCurrentSecond;
                    mike = report == oscar;
 178:
                    if(mike) { _fun85595_ip = 203; continue _fun85595 }
 181:
                    oscar = golf.onCurrentSecond;
                    mike = entity.value;
                    mike = mike.currentTime;
                    mike = oscar.bind(golf)(mike);
 203:
                    mike = _closure2_slot2;
                    mike = report == mike;
                    tango = undefined;
                    if(mike) { _fun85595_ip = 232; continue _fun85595 }
 216:
                    zulu = _closure2_slot2;
                    zulu = zulu.props;
                    mike = report == zulu;
                    tango = zulu;
 232:
                    if(mike) { _fun85595_ip = 245; continue _fun85595 }
 235:
                    zulu = tango.onDuration;
                    mike = report == zulu;
 245:
                    if(mike) { _fun85595_ip = 532; continue _fun85595 }
 251:
                    zulu = tango.onDuration;
                    mike = entity.value;
                    mike = mike.duration;
                    mike = zulu.bind(tango)(mike);
                    _fun85595_ip = 532; continue _fun85595;
 277:
                    zulu = _closure2_slot4;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 4;
                    mike = tango[mike];
                    options = undefined;
                    mike = report.bind(options)(mike);
                    mike = mike.PlayerState;
                    mike = mike.ERRORED;
                    mike = zulu.bind(options)(mike);
                    zulu = _closure1_slot1;
                    mike = 6;
                    mike = tango[mike];
                    report = zulu.bind(options)(mike);
                    tango = report.track;
                    mike = _closure1_slot5;
                    zulu = mike.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    mike = {'platform': 'tiktok', 'error': null, 'action': 'errored'};
                    golf = _closure1_slot9;
                    oscar = entity.value;
                    oscar = golf.bind(options)(oscar);
                    mike['error'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    _fun85595_ip = 532; continue _fun85595;
 402:
                    mike = _closure1_slot8;
                    entity = entity.value;
                    zulu = mike[entity];
                    golf = null;
                    if(!(golf != zulu)) { _fun85595_ip = 532; continue _fun85595 }
 424:
                    mike = _closure2_slot2;
                    tango = golf == mike;
                    mike = undefined;
                    report = undefined;
                    if(tango) { _fun85595_ip = 458; continue _fun85595 }
 442:
                    oscar = _closure2_slot2;
                    oscar = oscar.props;
                    tango = golf == oscar;
                    report = oscar;
 458:
                    if(tango) { _fun85595_ip = 472; continue _fun85595 }
 461:
                    tango = report.onPlayerStateChange;
                    tango = tango.bind(report)(zulu);
 472:
                    entity = _closure2_slot4;
                    entity = entity.bind(mike)(zulu);
                    _fun85595_ip = 532; continue _fun85595;
 483:
                    zulu = _closure2_slot4;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 4;
                    entity = mike[entity];
                    mike = undefined;
                    entity = tango.bind(mike)(entity);
                    entity = entity.PlayerState;
                    entity = entity.READY;
                    entity = zulu.bind(mike)(entity);
 532:
                    entity = undefined;
                    return entity;
                }
            };
            golf = offset.bind(foxtrot)(entity, golf);
            foxtrot = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 8;
            offset = entity[offset];
            backup = foxtrot.bind(tango)(offset);
            foxtrot = backup.useMediaPlayerMutedStore;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.isMuted;
                return entity;
            };
            offset = foxtrot.bind(backup)(offset);
            _closure2_slot8 = offset;
            backup = _closure1_slot4;
            kilo = backup.useEffect;
            foxtrot = new Array(6);
            foxtrot[0] = yankee;
            foxtrot[1] = result;
            foxtrot[2] = output;
            foxtrot[3] = sizing;
            foxtrot[4] = oscar;
            foxtrot[5] = offset;
            offset = function() {
                _fun85597: for(var _fun85597_ip = 0; ; ) switch(_fun85597_ip) {
 0:
                    entity = _closure2_slot7;
                    zulu = null;
                    tango = zulu == entity;
                    entity = undefined;
                    mike = undefined;
                    if(tango) { _fun85597_ip = 29; continue _fun85597 }
 20:
                    tango = _closure2_slot7;
                    mike = tango.current;
 29:
                    mike = zulu != mike;
                    if(!mike) { _fun85597_ip = 79; continue _fun85597 }
 36:
                    tango = _closure2_slot3;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.PlayerState;
                    zulu = zulu.UNREADY;
                    mike = tango !== zulu;
 79:
                    if(!mike) { _fun85597_ip = 427; continue _fun85597 }
 85:
                    mike = _closure2_slot0;
                    if(!mike) { _fun85597_ip = 135; continue _fun85597 }
 92:
                    tango = _closure2_slot5;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.PlayerState;
                    zulu = zulu.UNREADY;
                    mike = tango === zulu;
 135:
                    if(!mike) { _fun85597_ip = 181; continue _fun85597 }
 138:
                    tango = _closure2_slot3;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.PlayerState;
                    zulu = zulu.READY;
                    mike = tango === zulu;
 181:
                    if(!mike) { _fun85597_ip = 211; continue _fun85597 }
 184:
                    tango = _closure1_slot10;
                    zulu = _closure2_slot7;
                    mike = {};
                    oscar = 'play';
                    mike['type'] = oscar;
                    mike = tango.bind(entity)(zulu, mike);
 211:
                    mike = _closure2_slot0;
                    if(!mike) { _fun85597_ip = 225; continue _fun85597 }
 218:
                    zulu = _closure2_slot6;
                    mike = !zulu;
 225:
                    if(!mike) { _fun85597_ip = 255; continue _fun85597 }
 228:
                    tango = _closure1_slot10;
                    zulu = _closure2_slot7;
                    mike = {};
                    oscar = 'play';
                    mike['type'] = oscar;
                    mike = tango.bind(entity)(zulu, mike);
 255:
                    mike = _closure2_slot0;
                    mike = !mike;
                    if(!mike) { _fun85597_ip = 269; continue _fun85597 }
 265:
                    mike = _closure2_slot6;
 269:
                    if(!mike) { _fun85597_ip = 299; continue _fun85597 }
 272:
                    tango = _closure1_slot10;
                    zulu = _closure2_slot7;
                    mike = {};
                    oscar = 'pause';
                    mike['type'] = oscar;
                    mike = tango.bind(entity)(zulu, mike);
 299:
                    tango = _closure2_slot3;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.PlayerState;
                    zulu = zulu.ENDED;
                    if(!(tango === zulu)) { _fun85597_ip = 390; continue _fun85597 }
 342:
                    oscar = _closure1_slot10;
                    tango = _closure2_slot7;
                    zulu = {'type': 'seekTo', 'value': 0};
                    zulu = oscar.bind(entity)(tango, zulu);
                    tango = _closure2_slot7;
                    zulu = {};
                    golf = 'play';
                    zulu['type'] = golf;
                    zulu = oscar.bind(entity)(tango, zulu);
 390:
                    tango = _closure1_slot10;
                    zulu = _closure2_slot7;
                    mike = {};
                    oscar = _closure2_slot8;
                    report = 'unMute';
                    if(!oscar) { _fun85597_ip = 417; continue _fun85597 }
 413:
                    report = 'mute';
 417:
                    mike['type'] = report;
                    mike = tango.bind(entity)(zulu, mike);
 427:
                    return entity;
                }
            };
            offset = kilo.bind(backup)(offset, foxtrot);
            kilo = backup.useEffect;
            foxtrot = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot5;
                zulu = mike.MESSAGE_EMBEDS_ACTION_COMPLETED;
                mike = {'platform': 'tiktok', 'action': 'attempted'};
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            offset = new Array(0);
            offset = kilo.bind(backup)(foxtrot, offset);
            foxtrot = backup.useMemo;
            kilo = verify.uri;
            offset = new Array(1);
            offset[0] = kilo;
            zulu = function() {
                zulu = global;
                report = zulu.URL;
                mike = _closure2_slot1;
                oscar = mike.uri;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                golf = tango;
                mike = new golf[report](oscar, report);
                mike = mike instanceof Object ? mike : tango;
                var _closure3_slot0 = mike;
                report = zulu.Object;
                tango = report.entries;
                zulu = _closure1_slot7;
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                entity = function(argFoo) {
                    _fun85600: for(var _fun85600_ip = 0; ; ) switch(_fun85600_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        oscar = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        report = undefined;
                        if(zulu) { _fun85600_ip = 27; continue _fun85600 }
 24:
                        report = oscar;
 27:
                        oscar = undefined;
                        if(zulu) { _fun85600_ip = 57; continue _fun85600 }
 32:
                        golf = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        oscar = undefined;
                        zulu = tango;
                        if(tango) { _fun85600_ip = 57; continue _fun85600 }
 51:
                        oscar = golf;
                        zulu = tango;
 57:
                        if(zulu) { _fun85600_ip = 63; continue _fun85600 }
 60:
                        mike.return();
 63:
                        mike = _closure3_slot0;
                        tango = mike.searchParams;
                        zulu = tango.append;
                        mike = oscar.toString;
                        mike = mike.bind(oscar)();
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                entity = mike.toString;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = foxtrot.bind(backup)(zulu, offset);
            zulu = _closure1_slot6;
            mike = _closure1_slot1;
            entity = entity[romeo];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['ref'] = yankee;
            entity['style'] = options;
            options = {};
            control = options;
            source = verify;
            verify = copyDataProperties(control, source);
            verify = 'uri';
            options[verify] = offset;
            entity['source'] = options;
            options = 'https://www.tiktok.com/player/v1/';
            entity['baseURL'] = options;
            options = '\n  window.addEventListener(\'message\', function(event) {\n    if (!event.data["x-tiktok-player"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n';
            entity['injectedJavaScript'] = options;
            entity['onDataReceived'] = golf;
            entity['playerState'] = oscar;
            control = entity;
            source = report;
            report = copyDataProperties(control, source);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/media_viewer/native/components/MediaModalTiktok.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function() { // Original name: createTiktokVideoControls
        mike = _closure1_slot4;
        entity = mike.createRef;
        tango = entity.bind(mike)();
        var _closure2_slot2 = tango;
        entity = 0;
        var _closure2_slot3 = entity;
        var _closure2_slot4 = entity;
        entity = false;
        var _closure2_slot5 = entity;
        entity = {};
        mike = function(argFoo) { // Original name: seek
            tango = _closure1_slot10;
            zulu = _closure2_slot2;
            mike = {};
            entity = 'seekTo';
            mike['type'] = entity;
            entity = argFoo;
            mike['value'] = entity;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity['seek'] = mike;
        mike = function(argFoo) { // Original name: pause
            _fun85603: for(var _fun85603_ip = 0; ; ) switch(_fun85603_ip) {
 0:
                report = argFoo;
                mike = _closure2_slot5;
                if(!(mike !== report)) { _fun85603_ip = 54; continue _fun85603 }
 14:
                tango = _closure1_slot10;
                zulu = _closure2_slot2;
                mike = {};
                _closure2_slot5 = report;
                entity = 'play';
                if(!report) { _fun85603_ip = 42; continue _fun85603 }
 38:
                entity = 'pause';
 42:
                mike['type'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['pause'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: useSubscribe
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            tango = _closure1_slot4;
            zulu = tango.useLayoutEffect;
            mike = function() {
                _fun85605: for(var _fun85605_ip = 0; ; ) switch(_fun85605_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != mike)) { _fun85605_ip = 33; continue _fun85605 }
 13:
                    oscar = _closure2_slot0;
                    report = _closure2_slot3;
                    tango = _closure2_slot4;
                    mike = undefined;
                    mike = oscar.bind(mike)(report, tango);
 33:
                    mike = _closure2_slot1;
                    if(!(zulu != mike)) { _fun85605_ip = 56; continue _fun85605 }
 41:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot5;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 56:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['useSubscribe'] = mike;
        mike = {};
        mike['ref'] = tango;
        tango = function(argFoo) { // Original name: onPlayerStateChange
            _fun85606: for(var _fun85606_ip = 0; ; ) switch(_fun85606_ip) {
 0:
                report = argFoo;
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun85606_ip = 102; continue _fun85606 }
 16:
                zulu = _closure2_slot1;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 4;
                entity = entity[golf];
                mike = undefined;
                entity = oscar.bind(mike)(entity);
                entity = entity.PlayerState;
                entity = entity.PAUSED;
                entity = report === entity;
                if(entity) { _fun85606_ip = 97; continue _fun85606 }
 64:
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[golf];
                tango = oscar.bind(mike)(tango);
                tango = tango.PlayerState;
                tango = tango.ENDED;
                entity = report === tango;
 97:
                entity = zulu.bind(mike)(entity);
 102:
                entity = undefined;
                return entity;
            }
        };
        mike['onPlayerStateChange'] = tango;
        tango = function(argFoo) { // Original name: onCurrentSecond
            _fun85607: for(var _fun85607_ip = 0; ; ) switch(_fun85607_ip) {
 0:
                mike = argFoo;
                _closure2_slot3 = mike;
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun85607_ip = 40; continue _fun85607 }
 20:
                tango = _closure2_slot0;
                zulu = _closure2_slot3;
                mike = _closure2_slot4;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
 40:
                entity = undefined;
                return entity;
            }
        };
        mike['onCurrentSecond'] = tango;
        zulu = function(argFoo) { // Original name: onDuration
            _fun85608: for(var _fun85608_ip = 0; ; ) switch(_fun85608_ip) {
 0:
                mike = argFoo;
                _closure2_slot4 = mike;
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun85608_ip = 40; continue _fun85608 }
 20:
                tango = _closure2_slot0;
                zulu = _closure2_slot3;
                mike = _closure2_slot4;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
 40:
                entity = undefined;
                return entity;
            }
        };
        mike['onDuration'] = zulu;
        entity['props'] = mike;
        return entity;
    };
    zulu['createTiktokVideoControls'] = mike;
    return entity;
})();