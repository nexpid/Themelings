// app/modules/voice_panel/native/pip/VoicePanelPIPContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot31;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot31;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: VideoStream
        report = argFoo;
        verify = _closure1_slot4;
        option = verify.useContext;
        michal = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 17;
        golfie = oscard[tangon];
        tangon = undefined;
        golfie = michal.bind(tangon)(golfie);
        golfie = option.bind(verify)(golfie);
        verify = golfie.streamOutputSinkStack;
        offset = report.streamId;
        var _closure2_slot0 = offset;
        option = _closure1_slot0;
        golfie = 18;
        golfie = oscard[golfie];
        option = option.bind(tangon)(golfie);
        golfie = option.useSetHasActiveVideoOutputSink;
        yankee = golfie.bind(option)(verify);
        var _closure2_slot1 = yankee;
        verify = _closure1_slot4;
        option = verify.useEffect;
        golfie = new Array(2);
        golfie[0] = yankee;
        golfie[1] = offset;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal == zuuluu)) { _fun00008_ip = 17; continue _fun00007 }
 13:
                michal = undefined;
                return michal;
 17:
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = true;
                entity = tangon.bind(michal)(zuuluu, entity);
                entity = function() {
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    michal = false;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                return entity;
            }
        };
        zuuluu = option.bind(verify)(zuuluu, golfie);
        zuuluu = _closure1_slot19;
        entity = 19;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        foxtra = entity;
        romeon = report;
        report = copyDataProperties(foxtra, romeon);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: markContentReady
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 20;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.ComponentDispatch;
        zuuluu = tangon.dispatch;
        michal = _closure1_slot14;
        michal = michal.VOICE_PANEL_PIP_CONTENT_READY;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: useTransitionStyles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = argBar;
            option = argBaz;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = option;
            golfie = _closure1_slot4;
            oscard = golfie.useEffect;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = option;
            tangon = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = function() { // Original name: handleVideoReady
                        michal = global;
                        tangon = michal.clearTimeout;
                        zuuluu = _closure3_slot0;
                        entity = undefined;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        tangon = michal.setTimeout;
                        zuuluu = function() {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                zuuluu = _closure2_slot1;
                                entity = null;
                                tangon = entity == zuuluu;
                                zuuluu = undefined;
                                entity = undefined;
                                if(tangon) { _fun00014_ip = 28; continue _fun00013 }
 20:
                                michal = _closure2_slot1;
                                entity = michal.bind(zuuluu)();
 28:
                                return entity;
                            }
                        };
                        michal = 17;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    var _closure3_slot1 = report;
                    tangon = _closure2_slot0;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 21;
                    zuuluu = oscard[zuuluu];
                    oscard = undefined;
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.TransitionStates;
                    zuuluu = zuuluu.YEETED;
                    if(!(tangon !== zuuluu)) { _fun00012_ip = 63; continue _fun00011 }
 61:
                    return oscard;
 63:
                    zuuluu = global;
                    golfie = zuuluu.setTimeout;
                    tangon = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zuuluu = _closure2_slot1;
                            entity = null;
                            tangon = entity == zuuluu;
                            zuuluu = undefined;
                            entity = undefined;
                            if(tangon) { _fun00016_ip = 28; continue _fun00015 }
 20:
                            michal = _closure2_slot1;
                            entity = michal.bind(zuuluu)();
 28:
                            return entity;
                        }
                    };
                    zuuluu = 500;
                    zuuluu = golfie.bind(oscard)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = zuuluu.ComponentDispatch;
                    zuuluu = tangon.subscribe;
                    michal = _closure1_slot14;
                    michal = michal.VOICE_PANEL_PIP_CONTENT_READY;
                    michal = zuuluu.bind(tangon)(michal, report);
                    entity = function() {
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 20;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        oscard = zuuluu.ComponentDispatch;
                        report = oscard.unsubscribe;
                        michal = _closure1_slot14;
                        tangon = michal.VOICE_PANEL_PIP_CONTENT_READY;
                        zuuluu = _closure3_slot1;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        zuuluu = global;
                        zuuluu = zuuluu.clearTimeout;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon, report);
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 21;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.TransitionStates;
            entity = entity.YEETED;
            if(!(zuuluu !== entity)) { _fun00010_ip = 102; continue _fun00009 }
 94:
            entity = michal.onBottom;
            _fun00010_ip = 108; continue _fun00009;
 102:
            entity = michal.onTop;
 108:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: InnerStroke
        entity = argFoo;
        verify = entity.style;
        var _closure2_slot0 = verify;
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 22;
        entity = golfie[entity];
        tangon = undefined;
        michal = michal.bind(tangon)(entity);
        entity = michal.usePIPState;
        entity = entity.bind(michal)();
        romeon = entity.width;
        var _closure2_slot1 = romeon;
        yankee = entity.height;
        var _closure2_slot2 = yankee;
        entity = _closure1_slot21;
        offset = entity.bind(tangon)();
        var _closure2_slot3 = offset;
        zuuluu = _closure1_slot19;
        michal = _closure1_slot1;
        entity = 23;
        entity = golfie[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        option = _closure1_slot4;
        golfie = option.useMemo;
        oscard = new Array(4);
        oscard[0] = romeon;
        oscard[1] = yankee;
        offset = offset.innerStroke;
        oscard[2] = offset;
        oscard[3] = verify;
        report = function() {
            entity = _closure2_slot3;
            zuuluu = entity.innerStroke;
            entity = new Array(3);
            entity[0] = zuuluu;
            zuuluu = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 24;
            report = report[tangon];
            tangon = undefined;
            golfie = oscard.bind(tangon)(report);
            oscard = golfie.getVoicePanelPIPBorderRadius;
            report = _closure2_slot1;
            tangon = _closure2_slot2;
            report = oscard.bind(golfie)(report, tangon);
            tangon = 1;
            tangon = report + tangon;
            zuuluu['borderRadius'] = tangon;
            entity[1] = zuuluu;
            michal = _closure2_slot0;
            entity[2] = michal;
            return entity;
        };
        report = golfie.bind(option)(report, oscard);
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: ActivityInVoice
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            entity = michal.participantId;
            var _closure2_slot0 = entity;
            foxtra = michal.transitionState;
            zuuluu = michal.transitionCleanUp;
            michal = _closure1_slot21;
            oscard = undefined;
            golfie = michal.bind(oscard)();
            michal = _closure1_slot34;
            offset = michal.bind(oscard)(golfie, foxtra, zuuluu);
            report = _closure1_slot4;
            zuuluu = report.useContext;
            verify = _closure1_slot1;
            sizing = _closure1_slot2;
            michal = 17;
            michal = sizing[michal];
            michal = verify.bind(oscard)(michal);
            michal = zuuluu.bind(report)(michal);
            result = michal.channelId;
            var _closure2_slot1 = result;
            backup = michal.layoutManager;
            var _closure2_slot2 = backup;
            romeon = michal.windowDimensions;
            var _closure2_slot3 = romeon;
            kiloes = _closure1_slot0;
            michal = 25;
            zuuluu = sizing[michal];
            yankee = kiloes.bind(oscard)(zuuluu);
            verify = yankee.useStateFromStores;
            zuuluu = _closure1_slot10;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = verify.bind(yankee)(report, zuuluu);
            verify = _closure1_slot4;
            report = verify.useState;
            zuuluu = 21;
            zuuluu = sizing[zuuluu];
            zuuluu = kiloes.bind(oscard)(zuuluu);
            zuuluu = zuuluu.TransitionStates;
            zuuluu = zuuluu.MOUNTED;
            zuuluu = foxtra === zuuluu;
            verify = report.bind(verify)(zuuluu);
            report = _closure1_slot3;
            zuuluu = 2;
            verify = report.bind(oscard)(verify, zuuluu);
            zuuluu = 0;
            zuuluu = verify[zuuluu];
            var _closure2_slot4 = zuuluu;
            report = 1;
            report = verify[report];
            var _closure2_slot5 = report;
            report = sizing[michal];
            output = kiloes.bind(oscard)(report);
            foxtra = output.useStateFromStores;
            report = _closure1_slot6;
            verify = new Array(1);
            verify[0] = report;
            report = new Array(2);
            report[0] = result;
            report[1] = entity;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscard = _closure1_slot6;
                    report = oscard.getParticipant;
                    tangon = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = report.bind(oscard)(tangon, entity);
                    tangon = null;
                    if(!(tangon != entity)) { _fun00020_ip = 62; continue _fun00019 }
 36:
                    tangon = entity.type;
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.ACTIVITY;
                    if(!(tangon === zuuluu)) { _fun00020_ip = 62; continue _fun00019 }
 55:
                    entity = entity.applicationId;
                    _fun00020_ip = 66; continue _fun00019;
 62:
                    entity = _closure2_slot0;
 66:
                    return entity;
                }
            };
            entity = foxtra.bind(output)(verify, entity, report);
            var _closure2_slot6 = entity;
            michal = sizing[michal];
            output = kiloes.bind(oscard)(michal);
            foxtra = output.useStateFromStores;
            michal = _closure1_slot5;
            verify = new Array(1);
            verify[0] = michal;
            report = new Array(1);
            report[0] = entity;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getPipOrientationLockStateForApp;
                entity = _closure2_slot6;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = foxtra.bind(output)(verify, michal, report);
            var _closure2_slot7 = foxtra;
            verify = _closure1_slot4;
            report = verify.useCallback;
            michal = new Array(3);
            michal[0] = backup;
            michal[1] = foxtra;
            michal[2] = entity;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    michal = entity.width;
                    entity = entity.height;
                    option = michal > entity;
                    zuuluu = _closure2_slot7;
                    tangon = _closure1_slot16;
                    tangon = tangon.LANDSCAPE;
                    if(!(tangon !== zuuluu)) { _fun00022_ip = 148; continue _fun00021 }
 41:
                    tangon = _closure1_slot16;
                    tangon = tangon.PORTRAIT;
                    if(!(tangon !== zuuluu)) { _fun00022_ip = 119; continue _fun00021 }
 55:
                    michal = _closure1_slot16;
                    michal = michal.UNLOCKED;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 75; continue _fun00021 }
 69:
                    michal = null;
                    if(!(michal === zuuluu)) { _fun00022_ip = 175; continue _fun00021 }
 75:
                    oscard = _closure2_slot2;
                    report = oscard.setTargetDimensions;
                    tangon = _closure2_slot6;
                    golfie = 9;
                    zuuluu = golfie;
                    if(!option) { _fun00022_ip = 101; continue _fun00021 }
 98:
                    zuuluu = 16;
 101:
                    michal = 16;
                    if(!option) { _fun00022_ip = 110; continue _fun00021 }
 107:
                    michal = golfie;
 110:
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    _fun00022_ip = 175; continue _fun00021;
 119:
                    oscard = _closure2_slot2;
                    report = oscard.setTargetDimensions;
                    tangon = _closure2_slot6;
                    zuuluu = 9;
                    michal = 16;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    _fun00022_ip = 175; continue _fun00021;
 148:
                    report = _closure2_slot2;
                    tangon = report.setTargetDimensions;
                    zuuluu = _closure2_slot6;
                    michal = 16;
                    entity = 9;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 175:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = report.bind(verify)(entity, michal);
            var _closure2_slot8 = foxtra;
            verify = _closure1_slot4;
            report = verify.useLayoutEffect;
            michal = new Array(1);
            michal[0] = foxtra;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 26;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getWindowDimensions;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure2_slot8;
                michal = {};
                golfie = michal;
                oscard = tangon;
                report = copyDataProperties(golfie, oscard);
                report = tangon.width;
                tangon = tangon.height;
                report = report > tangon;
                tangon = 'landscape';
                michal[tangon] = report;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = report.bind(verify)(entity, michal);
            backup = 27;
            entity = sizing[backup];
            verify = kiloes.bind(oscard)(entity);
            report = verify.useAnimatedReaction;
            michal = function() { // Original name: p
                michal = _closure2_slot3;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = {};
            entity['windowDimensions'] = romeon;
            michal['__closure'] = entity;
            entity = 20962628184.0;
            michal['__workletHash'] = entity;
            entity = _closure1_slot22;
            michal['__initData'] = entity;
            entity = function(argFoo, argBar) { // Original name: l
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    entity = argBar;
                    if(!(zuuluu !== entity)) { _fun00024_ip = 57; continue _fun00023 }
 10:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 27;
                    entity = michal[entity];
                    michal = undefined;
                    report = tangon.bind(michal)(entity);
                    tangon = report.runOnJS;
                    entity = _closure2_slot8;
                    entity = tangon.bind(report)(entity);
                    entity = entity.bind(michal)(zuuluu);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = {};
            backup = sizing[backup];
            backup = kiloes.bind(oscard)(backup);
            backup = backup.runOnJS;
            romeon['runOnJS'] = backup;
            romeon['handleTargetAspectRatioParams'] = foxtra;
            entity['__closure'] = romeon;
            romeon = 10001753822389.0;
            entity['__workletHash'] = romeon;
            romeon = _closure1_slot23;
            entity['__initData'] = romeon;
            entity = report.bind(verify)(michal, entity);
            entity = null;
            michal = entity != yankee;
            var _closure2_slot9 = michal;
            romeon = _closure1_slot4;
            verify = romeon.useEffect;
            report = new Array(2);
            report[0] = michal;
            report[1] = zuuluu;
            tangon = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    if(zuuluu) { _fun00026_ip = 34; continue _fun00025 }
 12:
                    zuuluu = _closure2_slot9;
                    if(!zuuluu) { _fun00026_ip = 34; continue _fun00025 }
 19:
                    tangon = _closure1_slot33;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
                    _fun00026_ip = 41; continue _fun00025;
 34:
                    michal = _closure2_slot4;
                    if(michal) { _fun00026_ip = 45; continue _fun00025 }
 41:
                    michal = undefined;
                    return michal;
 45:
                    michal = global;
                    report = michal.setTimeout;
                    tangon = undefined;
                    zuuluu = function() {
                        zuuluu = _closure2_slot5;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        michal = _closure1_slot33;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = 500;
                    michal = report.bind(tangon)(zuuluu, michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            tangon = verify.bind(romeon)(tangon, report);
            if(zuuluu) { _fun00018_ip = 777; continue _fun00017 }
 602:
            if(michal) { _fun00018_ip = 645; continue _fun00017 }
 605:
            tangon = _closure1_slot19;
            zuuluu = _closure1_slot37;
            michal = {};
            verify = _closure1_slot9;
            report = verify.getId;
            report = report.bind(verify)();
            michal['participantId'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00018_ip = 774; continue _fun00017;
 645:
            report = _closure1_slot20;
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            zuuluu = 23;
            zuuluu = romeon[zuuluu];
            tangon = verify.bind(oscard)(zuuluu);
            zuuluu = {};
            foxtra = golfie.activity;
            golfie = new Array(2);
            golfie[0] = foxtra;
            golfie[1] = offset;
            zuuluu['style'] = golfie;
            offset = _closure1_slot19;
            golfie = 28;
            golfie = romeon[golfie];
            verify = verify.bind(oscard)(golfie);
            golfie = {};
            golfie['channel'] = yankee;
            yankee = _closure1_slot15;
            yankee = yankee.PIP;
            golfie['layoutMode'] = yankee;
            verify = offset.bind(oscard)(verify, golfie);
            golfie = new Array(2);
            golfie[0] = verify;
            offset = _closure1_slot19;
            verify = _closure1_slot35;
            option = {};
            option = offset.bind(oscard)(verify, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 774:
            entity = michal;
 777:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: User
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            offset = entity.participantId;
            var _closure2_slot0 = offset;
            report = entity.transitionState;
            zuuluu = entity.transitionCleanUp;
            tangon = undefined;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            entity = _closure1_slot21;
            backup = entity.bind(tangon)();
            var _closure2_slot1 = backup;
            entity = _closure1_slot34;
            yankee = entity.bind(tangon)(backup, report, zuuluu);
            var _closure2_slot2 = yankee;
            oscard = _closure1_slot4;
            report = oscard.useContext;
            option = _closure1_slot1;
            entity = _closure1_slot2;
            zuuluu = 17;
            zuuluu = entity[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = report.bind(oscard)(zuuluu);
            oscard = zuuluu.channelId;
            var _closure2_slot3 = oscard;
            target = zuuluu.guildId;
            update = zuuluu.focused;
            var _closure2_slot4 = update;
            echoed = zuuluu.mode;
            var _closure2_slot5 = echoed;
            zuuluu = zuuluu.layoutManager;
            var _closure2_slot6 = zuuluu;
            option = _closure1_slot0;
            report = 25;
            entity = entity[report];
            romeon = option.bind(tangon)(entity);
            verify = romeon.useStateFromStores;
            entity = _closure1_slot6;
            option = new Array(1);
            option[0] = entity;
            entity = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    report = _closure1_slot6;
                    tangon = report.getParticipant;
                    michal = _closure2_slot3;
                    entity = _closure2_slot0;
                    report = tangon.bind(report)(michal, entity);
                    tangon = null;
                    oscard = tangon != report;
                    michal = undefined;
                    if(!oscard) { _fun00030_ip = 44; continue _fun00029 }
 41:
                    michal = report;
 44:
                    report = tangon == michal;
                    tangon = undefined;
                    if(report) { _fun00030_ip = 58; continue _fun00029 }
 53:
                    tangon = michal.type;
 58:
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.USER;
                    entity = undefined;
                    if(!(tangon === zuuluu)) { _fun00030_ip = 77; continue _fun00029 }
 74:
                    entity = michal;
 77:
                    return entity;
                }
            };
            kiloes = verify.bind(romeon)(option, entity);
            romeon = null;
            entity = romeon == kiloes;
            papara = undefined;
            if(entity) { _fun00028_ip = 215; continue _fun00027 }
 210:
            papara = kiloes.user;
 215:
            if(!(romeon == papara)) { _fun00028_ip = 232; continue _fun00027 }
 219:
            option = _closure1_slot11;
            entity = option.getCurrentUser;
            papara = entity.bind(option)();
 232:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            config = 29;
            entity = entity[config];
            verify = option.bind(tangon)(entity);
            option = verify.useDominantColorFromImage;
            foxtra = romeon == papara;
            entity = undefined;
            if(foxtra) { _fun00028_ip = 285; continue _fun00027 }
 267:
            output = papara.getAvatarURL;
            sizing = 80;
            foxtra = false;
            entity = output.bind(papara)(target, sizing, foxtra);
 285:
            entity = option.bind(verify)(entity);
            _closure2_slot7 = entity;
            foxtra = _closure1_slot4;
            verify = foxtra.useMemo;
            option = new Array(3);
            option[0] = backup;
            option[1] = yankee;
            option[2] = entity;
            entity = function() {
                entity = _closure2_slot1;
                michal = entity.user;
                entity = new Array(3);
                entity[0] = michal;
                michal = _closure2_slot2;
                entity[1] = michal;
                michal = {};
                zuuluu = _closure2_slot7;
                michal['backgroundColor'] = zuuluu;
                entity[2] = michal;
                return entity;
            };
            entity = verify.bind(foxtra)(entity, option);
            verify = _closure1_slot4;
            option = verify.useState;
            cntext = false;
            foxtra = option.bind(verify)(cntext);
            verify = _closure1_slot3;
            option = 2;
            verify = verify.bind(tangon)(foxtra, option);
            option = 0;
            sizing = verify[option];
            option = 1;
            option = verify[option];
            _closure2_slot8 = option;
            foxtra = _closure1_slot4;
            verify = foxtra.useCallback;
            option = new Array(1);
            option[0] = oscard;
            oscard = function(argFoo, argBar) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    golfie = argFoo;
                    michal = null;
                    zuuluu = michal != golfie;
                    entity = undefined;
                    report = undefined;
                    if(!zuuluu) { _fun00032_ip = 42; continue _fun00031 }
 16:
                    oscard = _closure1_slot6;
                    tangon = oscard.getParticipant;
                    zuuluu = _closure2_slot3;
                    report = tangon.bind(oscard)(zuuluu, golfie);
 42:
                    zuuluu = _closure2_slot8;
                    michal = michal != report;
                    if(!michal) { _fun00032_ip = 68; continue _fun00031 }
 56:
                    tangon = _closure1_slot18;
                    michal = tangon.bind(entity)(report);
 68:
                    if(!michal) { _fun00032_ip = 91; continue _fun00031 }
 71:
                    tangon = _closure1_slot12;
                    report = tangon.PANEL;
                    tangon = argBar;
                    michal = tangon === report;
 91:
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            source = verify.bind(foxtra)(oscard, option);
            _closure2_slot9 = source;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            ctrled = 27;
            verify = option[ctrled];
            result = oscard.bind(tangon)(verify);
            output = result.useAnimatedReaction;
            foxtra = function() { // Original name: h
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = _closure2_slot4;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00034_ip = 32; continue _fun00033 }
 27:
                    entity = michal.id;
 32:
                    return entity;
                }
            };
            verify = {};
            verify['focused'] = update;
            foxtra['__closure'] = verify;
            verify = 3980010676581.0;
            foxtra['__workletHash'] = verify;
            verify = _closure1_slot24;
            foxtra['__initData'] = verify;
            verify = function(argFoo, argBar) { // Original name: c
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    tangon = argFoo;
                    entity = argBar;
                    if(!(tangon !== entity)) { _fun00036_ip = 71; continue _fun00035 }
 10:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 27;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    oscard = michal.bind(zuuluu)(entity);
                    report = oscard.runOnJS;
                    michal = _closure2_slot9;
                    michal = report.bind(oscard)(michal);
                    report = _closure2_slot5;
                    entity = report.get;
                    entity = entity.bind(report)();
                    entity = michal.bind(zuuluu)(tangon, entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            vacuum = {};
            sequen = option[ctrled];
            sequen = oscard.bind(tangon)(sequen);
            sequen = sequen.runOnJS;
            vacuum['runOnJS'] = sequen;
            vacuum['updateIsActivityFocused'] = source;
            vacuum['mode'] = echoed;
            verify['__closure'] = vacuum;
            vacuum = 5971237403457.0;
            verify['__workletHash'] = vacuum;
            vacuum = _closure1_slot25;
            verify['__initData'] = vacuum;
            verify = output.bind(result)(foxtra, verify);
            verify = option[ctrled];
            result = oscard.bind(tangon)(verify);
            output = result.useAnimatedReaction;
            foxtra = function() { // Original name: S
                michal = _closure2_slot5;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = {};
            verify['mode'] = echoed;
            foxtra['__closure'] = verify;
            verify = 8288240256860.0;
            foxtra['__workletHash'] = verify;
            verify = _closure1_slot26;
            foxtra['__initData'] = verify;
            verify = function(argFoo, argBar) { // Original name: v
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tangon = argFoo;
                    entity = argBar;
                    if(!(tangon !== entity)) { _fun00038_ip = 87; continue _fun00037 }
 10:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 27;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    oscard = michal.bind(zuuluu)(entity);
                    report = oscard.runOnJS;
                    michal = _closure2_slot9;
                    michal = report.bind(oscard)(michal);
                    report = _closure2_slot4;
                    entity = report.get;
                    report = entity.bind(report)();
                    entity = null;
                    oscard = entity == report;
                    entity = undefined;
                    if(oscard) { _fun00038_ip = 81; continue _fun00037 }
 76:
                    entity = report.id;
 81:
                    entity = michal.bind(zuuluu)(entity, tangon);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            echoed = {};
            ctrled = option[ctrled];
            ctrled = oscard.bind(tangon)(ctrled);
            ctrled = ctrled.runOnJS;
            echoed['runOnJS'] = ctrled;
            echoed['updateIsActivityFocused'] = source;
            echoed['focused'] = update;
            verify['__closure'] = echoed;
            echoed = 12552370107483.0;
            verify['__workletHash'] = echoed;
            echoed = _closure1_slot27;
            verify['__initData'] = echoed;
            verify = output.bind(result)(foxtra, verify);
            report = option[report];
            output = oscard.bind(tangon)(report);
            foxtra = output.useStateFromStoresObject;
            report = _closure1_slot7;
            verify = new Array(1);
            verify[0] = report;
            report = function() {
                entity = {};
                tangon = _closure1_slot7;
                zuuluu = tangon.isReactingToThermalState;
                zuuluu = zuuluu.bind(tangon)();
                entity['isReactingToThermalState'] = zuuluu;
                zuuluu = _closure1_slot7;
                michal = zuuluu.consumedRequestToRespondToSeriousThermalState;
                michal = michal.bind(zuuluu)();
                entity['consumedRequestToRespondToSeriousThermalState'] = michal;
                return entity;
            };
            verify = foxtra.bind(output)(verify, report);
            report = verify.isReactingToThermalState;
            verify = verify.consumedRequestToRespondToSeriousThermalState;
            result = _closure1_slot4;
            output = result.useCallback;
            foxtra = new Array(2);
            foxtra[0] = zuuluu;
            foxtra[1] = offset;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                report = entity.width;
                tangon = entity.height;
                zuuluu = _closure2_slot6;
                michal = zuuluu.setTargetDimensions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity, report, tangon);
                entity = undefined;
                return entity;
            };
            foxtra = output.bind(result)(zuuluu, foxtra);
            zuuluu = 30;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.useCanRenderParticipantVideo;
            oscard = zuuluu.bind(oscard)(kiloes);
            if(!oscard) { _fun00028_ip = 817; continue _fun00027 }
 805:
            zuuluu = sizing;
            if(!zuuluu) { _fun00028_ip = 814; continue _fun00027 }
 811:
            zuuluu = report;
 814:
            oscard = !zuuluu;
 817:
            _closure2_slot10 = oscard;
            option = _closure1_slot4;
            report = option.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot10;
                    if(entity) { _fun00040_ip = 23; continue _fun00039 }
 10:
                    michal = _closure1_slot33;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot20;
            report = _closure1_slot1;
            michal = _closure1_slot2;
            option = 23;
            michal = michal[option];
            michal = report.bind(tangon)(michal);
            report = {};
            if(oscard) { _fun00028_ip = 1254; continue _fun00027 }
 883:
            report['style'] = entity;
            output = _closure1_slot19;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[option];
            oscard = oscard.bind(tangon)(entity);
            entity = {};
            result = backup.avatarWrapper;
            entity['style'] = result;
            echoed = romeon != papara;
            result = null;
            if(!echoed) { _fun00028_ip = 1072; continue _fun00027 }
 932:
            source = _closure1_slot19;
            update = _closure1_slot1;
            ctrled = _closure1_slot2;
            sequen = 31;
            echoed = ctrled[sequen];
            update = update.bind(tangon)(echoed);
            echoed = {};
            vacuum = _closure1_slot0;
            ctrled = ctrled[config];
            config = vacuum.bind(tangon)(ctrled);
            vacuum = config.getCachedSourceFromURI;
            record = papara.getAvatarURL;
            ctrled = 80;
            ctrled = record.bind(papara)(target, ctrled, cntext);
            ctrled = vacuum.bind(config)(ctrled);
            echoed['source'] = ctrled;
            vacuum = _closure1_slot0;
            ctrled = _closure1_slot2;
            ctrled = ctrled[sequen];
            ctrled = vacuum.bind(tangon)(ctrled);
            vacuum = ctrled.AvatarSizes;
            if(sizing) { _fun00028_ip = 1036; continue _fun00027 }
 1028:
            ctrled = vacuum.XLARGE;
            _fun00028_ip = 1042; continue _fun00027;
 1036:
            ctrled = vacuum.LARGE;
 1042:
            echoed['size'] = ctrled;
            vacuum = romeon == kiloes;
            ctrled = undefined;
            if(vacuum) { _fun00028_ip = 1061; continue _fun00027 }
 1055:
            ctrled = kiloes.userAvatarDecoration;
 1061:
            echoed['avatarDecoration'] = ctrled;
            result = source.bind(tangon)(update, echoed);
 1072:
            entity['children'] = result;
            oscard = output.bind(tangon)(oscard, entity);
            entity = new Array(3);
            entity[0] = oscard;
            result = _closure1_slot19;
            output = _closure1_slot35;
            oscard = {};
            echoed = backup.userOpacity;
            oscard['style'] = echoed;
            oscard = result.bind(tangon)(output, oscard);
            entity[1] = oscard;
            oscard = null;
            if(!sizing) { _fun00028_ip = 1238; continue _fun00027 }
 1125:
            oscard = null;
            if(!verify) { _fun00028_ip = 1238; continue _fun00027 }
 1130:
            romeon = _closure1_slot19;
            update = _closure1_slot1;
            source = _closure1_slot2;
            option = source[option];
            verify = update.bind(tangon)(option);
            option = {};
            sizing = backup.thermalAlertIconContainer;
            option['style'] = sizing;
            result = _closure1_slot19;
            sizing = 32;
            sizing = source[sizing];
            output = update.bind(tangon)(sizing);
            sizing = {};
            echoed = backup.thermalAlertIcon;
            sizing['style'] = echoed;
            echoed = 33;
            echoed = source[echoed];
            echoed = update.bind(tangon)(echoed);
            sizing['source'] = echoed;
            echoed = backup.thermalAlertIcon;
            echoed = echoed.color;
            sizing['color'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            option['children'] = sizing;
            oscard = romeon.bind(tangon)(verify, option);
 1238:
            entity[2] = oscard;
            report['children'] = entity;
            entity = report;
            _fun00028_ip = 1408; continue _fun00027;
 1254:
            option = backup.blackBackground;
            oscard = new Array(2);
            oscard[0] = option;
            option = backup.user;
            oscard[1] = option;
            report['style'] = oscard;
            verify = _closure1_slot19;
            option = _closure1_slot38;
            oscard = {};
            oscard['style'] = yankee;
            oscard['participantId'] = offset;
            romeon = _closure1_slot19;
            yankee = _closure1_slot32;
            offset = {};
            kiloes = kiloes.streamId;
            offset['streamId'] = kiloes;
            kiloes = backup.video;
            backup = new Array(2);
            backup[0] = kiloes;
            backup[1] = tangon;
            offset['style'] = backup;
            offset['onSize'] = foxtra;
            foxtra = _closure1_slot33;
            offset['onReady'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            oscard['children'] = offset;
            option = verify.bind(tangon)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot19;
            option = _closure1_slot35;
            golfie = {};
            golfie = verify.bind(tangon)(option, golfie);
            oscard[1] = golfie;
            report['children'] = oscard;
            entity = report;
 1408:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: AnimatedVideoWrapper
        entity = argFoo;
        romeon = entity.participantId;
        option = entity.style;
        report = entity.children;
        offset = _closure1_slot4;
        verify = offset.useContext;
        michal = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 17;
        golfie = oscard[tangon];
        tangon = undefined;
        golfie = michal.bind(tangon)(golfie);
        golfie = verify.bind(offset)(golfie);
        yankee = golfie.layoutManager;
        verify = _closure1_slot0;
        golfie = 34;
        golfie = oscard[golfie];
        offset = verify.bind(tangon)(golfie);
        golfie = offset.useTargetDimensionsSubscription;
        yankee = golfie.bind(offset)(romeon, yankee);
        var _closure2_slot0 = yankee;
        golfie = 27;
        golfie = oscard[golfie];
        verify = verify.bind(tangon)(golfie);
        golfie = verify.useAnimatedStyle;
        zuuluu = function() { // Original name: o
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                michal = _closure2_slot0;
                entity = michal.get;
                entity = entity.bind(michal)();
                report = entity.width;
                tangon = entity.height;
                golfie = tangon < report;
                entity = 'auto';
                oscard = '100%';
                michal = entity;
                zuuluu = oscard;
                if(!golfie) { _fun00042_ip = 55; continue _fun00041 }
 49:
                michal = oscard;
                zuuluu = entity;
 55:
                entity = {};
                oscard = 'absolute';
                entity['position'] = oscard;
                tangon = report / tangon;
                entity['aspectRatio'] = tangon;
                entity['width'] = zuuluu;
                entity['height'] = michal;
                return entity;
            }
        };
        offset = {};
        offset['targetDimensions'] = yankee;
        zuuluu['__closure'] = offset;
        offset = 10377220209728.0;
        zuuluu['__workletHash'] = offset;
        offset = _closure1_slot28;
        zuuluu['__initData'] = offset;
        golfie = golfie.bind(verify)(zuuluu);
        zuuluu = _closure1_slot19;
        entity = 35;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        oscard = new Array(2);
        oscard[0] = option;
        oscard[1] = golfie;
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: Stream
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            option = entity.participantId;
            var _closure2_slot0 = option;
            golfie = entity.transitionState;
            tangon = entity.transitionCleanUp;
            entity = _closure1_slot21;
            report = undefined;
            oscard = entity.bind(report)();
            entity = _closure1_slot34;
            verify = entity.bind(report)(oscard, golfie, tangon);
            golfie = _closure1_slot4;
            tangon = golfie.useContext;
            yankee = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 17;
            entity = offset[entity];
            entity = yankee.bind(report)(entity);
            entity = tangon.bind(golfie)(entity);
            tangon = entity.channelId;
            var _closure2_slot1 = tangon;
            entity = entity.layoutManager;
            var _closure2_slot2 = entity;
            golfie = _closure1_slot0;
            tangon = 25;
            yankee = offset[tangon];
            backup = golfie.bind(report)(yankee);
            foxtra = backup.useStateFromStores;
            yankee = _closure1_slot6;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    report = _closure1_slot6;
                    tangon = report.getParticipant;
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    michal = tangon.bind(report)(michal, entity);
                    entity = null;
                    tangon = entity != michal;
                    entity = undefined;
                    if(!tangon) { _fun00046_ip = 68; continue _fun00045 }
 41:
                    tangon = michal.type;
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.STREAM;
                    entity = undefined;
                    if(!(tangon === zuuluu)) { _fun00046_ip = 68; continue _fun00045 }
 62:
                    entity = michal.streamId;
 68:
                    return entity;
                }
            };
            romeon = foxtra.bind(backup)(romeon, yankee);
            tangon = offset[tangon];
            yankee = golfie.bind(report)(tangon);
            offset = yankee.useStateFromStores;
            tangon = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getActiveStreamForStreamKey;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00048_ip = 41; continue _fun00047 }
 36:
                    entity = michal.state;
 41:
                    return entity;
                }
            };
            tangon = offset.bind(yankee)(golfie, tangon);
            yankee = _closure1_slot4;
            offset = yankee.useCallback;
            golfie = new Array(2);
            golfie[0] = entity;
            golfie[1] = option;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                report = entity.width;
                tangon = entity.height;
                zuuluu = _closure2_slot2;
                michal = zuuluu.setTargetDimensions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity, report, tangon);
                entity = undefined;
                return entity;
            };
            yankee = offset.bind(yankee)(entity, golfie);
            entity = null;
            entity = entity != romeon;
            var _closure2_slot3 = entity;
            foxtra = _closure1_slot4;
            offset = foxtra.useEffect;
            golfie = new Array(1);
            golfie[0] = entity;
            zuuluu = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00050_ip = 23; continue _fun00049 }
 10:
                    michal = _closure1_slot33;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = offset.bind(foxtra)(zuuluu, golfie);
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.ENDED;
            if(!(tangon !== zuuluu)) { _fun00044_ip = 443; continue _fun00043 }
 281:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.FAILED;
            if(!(tangon !== zuuluu)) { _fun00044_ip = 384; continue _fun00043 }
 295:
            golfie = _closure1_slot19;
            if(entity) { _fun00044_ip = 321; continue _fun00043 }
 302:
            zuuluu = _closure1_slot37;
            entity = {};
            entity['participantId'] = option;
            entity = golfie.bind(report)(zuuluu, entity);
            _fun00044_ip = 382; continue _fun00043;
 321:
            tangon = _closure1_slot38;
            zuuluu = {};
            zuuluu['style'] = verify;
            zuuluu['participantId'] = option;
            offset = _closure1_slot19;
            verify = _closure1_slot32;
            option = {};
            option['streamId'] = romeon;
            romeon = oscard.video;
            option['style'] = romeon;
            option['onSize'] = yankee;
            option = offset.bind(report)(verify, option);
            zuuluu['children'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 382:
            _fun00044_ip = 441; continue _fun00043;
 384:
            golfie = _closure1_slot19;
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 37;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.StreamFailed;
            zuuluu = {};
            option = oscard.streamEmptyImage;
            zuuluu['style'] = option;
            option = 'contain';
            zuuluu['resizeMode'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 441:
            _fun00044_ip = 500; continue _fun00043;
 443:
            tangon = _closure1_slot19;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 36;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.StreamEnded;
            michal = {};
            oscard = oscard.streamEmptyImage;
            michal['style'] = oscard;
            oscard = 'contain';
            michal['resizeMode'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 500:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: getFocusedKey
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: renderFocusedParticipant
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            oscard = argBaz;
            entity = argCor;
            tangon = zuuluu.id;
            michal = '--voice-panel-pip-empty';
            if(!(michal !== tangon)) { _fun00052_ip = 205; continue _fun00051 }
 30:
            michal = {};
            tangon = zuuluu.id;
            michal['participantId'] = tangon;
            michal['transitionState'] = oscard;
            michal['transitionCleanUp'] = entity;
            golfie = zuuluu.type;
            tangon = _closure1_slot17;
            tangon = tangon.ACTIVITY;
            if(!(tangon !== golfie)) { _fun00052_ip = 174; continue _fun00051 }
 74:
            tangon = _closure1_slot17;
            tangon = tangon.STREAM;
            if(!(tangon !== golfie)) { _fun00052_ip = 143; continue _fun00051 }
 88:
            tangon = _closure1_slot17;
            tangon = tangon.USER;
            if(!(tangon !== golfie)) { _fun00052_ip = 112; continue _fun00051 }
 102:
            tangon = _closure1_slot17;
            tangon = tangon.HIDDEN_STREAM;
 112:
            verify = _closure1_slot19;
            option = _closure1_slot37;
            golfie = {};
            romeon = golfie;
            yankee = michal;
            tangon = copyDataProperties(romeon, yankee);
            tangon = undefined;
            tangon = verify.bind(tangon)(option, golfie, report);
            return tangon;
 143:
            verify = _closure1_slot19;
            option = _closure1_slot39;
            golfie = {};
            romeon = golfie;
            yankee = michal;
            tangon = copyDataProperties(romeon, yankee);
            tangon = undefined;
            tangon = verify.bind(tangon)(option, golfie, report);
            return tangon;
 174:
            golfie = _closure1_slot19;
            tangon = _closure1_slot36;
            zuuluu = {};
            romeon = zuuluu;
            yankee = michal;
            michal = copyDataProperties(romeon, yankee);
            michal = undefined;
            michal = golfie.bind(michal)(tangon, zuuluu, report);
            return michal;
 205:
            tangon = _closure1_slot19;
            zuuluu = _closure1_slot29;
            michal = {};
            michal['transitionState'] = oscard;
            michal['transitionCleanUp'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal, report);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar) { // Original name: areParticipantsEqual
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            michal = argFoo;
            golfie = argBar;
            zuuluu = michal.length;
            entity = golfie.length;
            if(!(zuuluu === entity)) { _fun00054_ip = 125; continue _fun00053 }
 20:
            entity = michal.length;
            oscard = 0;
            if(!(oscard !== entity)) { _fun00054_ip = 121; continue _fun00053 }
 31:
            entity = _closure1_slot30;
            report = undefined;
            tangon = entity.bind(report)(michal);
            michal = tangon.bind(report)();
            entity = michal.done;
            zuuluu = null;
            oscard = 0;
            if(entity) { _fun00054_ip = 117; continue _fun00053 }
 61:
            entity = michal.value;
            option = entity.id;
            verify = golfie[oscard];
            offset = zuuluu == verify;
            entity = undefined;
            if(offset) { _fun00054_ip = 89; continue _fun00053 }
 84:
            entity = verify.id;
 89:
            if(!(option === entity)) { _fun00054_ip = 113; continue _fun00053 }
 93:
            oscard = oscard + 1;
            option = tangon.bind(report)();
            entity = option.done;
            michal = option;
            if(entity) { _fun00054_ip = 117; continue _fun00053 }
 111:
            _fun00054_ip = 61; continue _fun00053;
 113:
            entity = false;
            return entity;
 117:
            entity = true;
            return entity;
 121:
            entity = true;
            return entity;
 125:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    backup = 0;
    tangon = oscard[backup];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    kiloes = 1;
    golfie = oscard[kiloes];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelModes;
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ApplicationStreamStates;
    var _closure1_slot13 = option;
    tangon = tangon.ComponentActions;
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityLayoutMode;
    var _closure1_slot15 = option;
    tangon = tangon.OrientationLockState;
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ParticipantTypes;
    var _closure1_slot17 = option;
    tangon = tangon.isActivityParticipant;
    var _closure1_slot18 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot19 = option;
    tangon = tangon.jsxs;
    var _closure1_slot20 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%', 'overflow': 'hidden', 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['contentWrapper'] = offset;
    offset = {};
    yankee = 0.1;
    offset['opacity'] = yankee;
    tangon['userOpacity'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    tangon['activity'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['user'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    tangon['stream'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    tangon['video'] = offset;
    offset = {};
    sizing = {};
    yankee = -1;
    sizing['scaleX'] = yankee;
    yankee = new Array(1);
    yankee[0] = sizing;
    offset['transform'] = yankee;
    tangon['flip'] = offset;
    offset = {'position': 'relative', 'width': '56%', 'height': '56%', 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['avatarWrapper'] = offset;
    offset = {'width': 22, 'height': 22, 'backgroundColor': 'rgba(78, 80, 88, 0.48)', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'position': 'absolute', 'top': 6, 'left': 6};
    yankee = 16;
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    offset['borderRadius'] = sizing;
    tangon['thermalAlertIconContainer'] = offset;
    offset = {'width': 14, 'height': 14};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    offset['color'] = sizing;
    tangon['thermalAlertIcon'] = offset;
    offset = {};
    offset['zIndex'] = kiloes;
    tangon['onTop'] = offset;
    offset = {};
    offset['zIndex'] = backup;
    tangon['onBottom'] = offset;
    offset = {};
    backup = '50%';
    offset['width'] = backup;
    tangon['streamEmptyImage'] = offset;
    offset = {};
    result = foxtra.absoluteFillObject;
    echoed = offset;
    foxtra = copyDataProperties(echoed, result);
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    romeon = yankee.BLACK;
    yankee = 'backgroundColor';
    offset[yankee] = romeon;
    tangon['emptyPip'] = offset;
    offset = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295, 'bottom': 4294967295, 'right': 4294967295, 'borderWidth': 2, 'borderColor': 'white', 'zIndex': 1, 'opacity': 0.3};
    tangon['innerStroke'] = offset;
    offset = {};
    yankee = 'black';
    offset['backgroundColor'] = yankee;
    tangon['blackBackground'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}';
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    tangon['code'] = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}';
    tangon['code'] = option;
    var _closure1_slot25 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}';
    tangon['code'] = option;
    var _closure1_slot26 = tangon;
    tangon = {};
    option = 'function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}';
    tangon['code'] = option;
    var _closure1_slot27 = tangon;
    tangon = {};
    option = "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}";
    tangon['code'] = option;
    var _closure1_slot28 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) { // Original name: EmptyPIP
        entity = argFoo;
        verify = entity.transitionState;
        var _closure2_slot0 = verify;
        option = entity.transitionCleanUp;
        var _closure2_slot1 = option;
        zuuluu = _closure1_slot21;
        tangon = undefined;
        report = zuuluu.bind(tangon)();
        golfie = _closure1_slot4;
        oscard = golfie.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        michal = function() {
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                tangon = _closure2_slot0;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu = zuuluu.TransitionStates;
                zuuluu = zuuluu.YEETED;
                if(!(tangon === zuuluu)) { _fun00056_ip = 56; continue _fun00055 }
 48:
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
 56:
                return entity;
            }
        };
        michal = oscard.bind(golfie)(michal, zuuluu);
        zuuluu = _closure1_slot19;
        michal = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 23;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        report = report.emptyPip;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot29 = tangon;
    tangon = golfie.memo;
    michal = function() { // Original name: VoicePanelPIPContent
        oscard = _closure1_slot4;
        report = oscard.useContext;
        michal = _closure1_slot1;
        offset = _closure1_slot2;
        zuuluu = 17;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(zuuluu);
        zuuluu = report.bind(oscard)(zuuluu);
        report = zuuluu.channelId;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        zuuluu = 22;
        zuuluu = offset[zuuluu];
        golfie = oscard.bind(tangon)(zuuluu);
        zuuluu = golfie.usePIPState;
        zuuluu = zuuluu.bind(golfie)();
        sizing = zuuluu.id;
        var _closure2_slot1 = sizing;
        foxtra = zuuluu.width;
        var _closure2_slot2 = foxtra;
        romeon = zuuluu.height;
        var _closure2_slot3 = romeon;
        zuuluu = _closure1_slot21;
        yankee = zuuluu.bind(tangon)();
        var _closure2_slot4 = yankee;
        golfie = _closure1_slot9;
        zuuluu = golfie.getId;
        zuuluu = zuuluu.bind(golfie)();
        var _closure2_slot5 = zuuluu;
        golfie = 25;
        golfie = offset[golfie];
        kiloes = oscard.bind(tangon)(golfie);
        backup = kiloes.useStateFromStores;
        golfie = _closure1_slot6;
        verify = new Array(1);
        verify[0] = golfie;
        golfie = new Array(3);
        golfie[0] = sizing;
        golfie[1] = report;
        golfie[2] = zuuluu;
        output = _closure1_slot42;
        echoed = function() {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                zuuluu = _closure2_slot1;
                report = null;
                if(!(report == zuuluu)) { _fun00058_ip = 28; continue _fun00057 }
 13:
                entity = _closure1_slot17;
                entity = entity.USER;
                _fun00058_ip = 68; continue _fun00057;
 28:
                golfie = _closure1_slot6;
                oscard = golfie.getParticipant;
                michal = _closure2_slot0;
                oscard = oscard.bind(golfie)(michal, zuuluu);
                golfie = report == oscard;
                michal = undefined;
                if(golfie) { _fun00058_ip = 65; continue _fun00057 }
 60:
                michal = oscard.type;
 65:
                entity = michal;
 68:
                if(!(report == entity)) { _fun00058_ip = 85; continue _fun00057 }
 72:
                michal = _closure1_slot17;
                entity = michal.USER;
 85:
                michal = {};
                if(!(report == zuuluu)) { _fun00058_ip = 95; continue _fun00057 }
 91:
                zuuluu = _closure2_slot5;
 95:
                michal['id'] = zuuluu;
                michal['type'] = entity;
                entity = new Array(1);
                entity[0] = michal;
                return entity;
            }
        };
        source = kiloes;
        update = verify;
        result = golfie;
        verify = source[backup](update, echoed, result, output, sizing);
        golfie = _closure1_slot4;
        report = golfie.useMemo;
        zuuluu = new Array(3);
        zuuluu[0] = foxtra;
        zuuluu[1] = romeon;
        yankee = yankee.contentWrapper;
        zuuluu[2] = yankee;
        entity = function() {
            entity = _closure2_slot4;
            entity = entity.contentWrapper;
            michal = new Array(2);
            michal[0] = entity;
            entity = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 24;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.getVoicePanelPIPBorderRadius;
            tangon = _closure2_slot2;
            zuuluu = _closure2_slot3;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            entity['borderRadius'] = zuuluu;
            michal[1] = entity;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        report = report.bind(golfie)(entity, zuuluu);
        zuuluu = _closure1_slot19;
        entity = 23;
        entity = offset[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['style'] = report;
        report = 'none';
        entity['pointerEvents'] = report;
        golfie = _closure1_slot19;
        report = 21;
        report = offset[report];
        report = oscard.bind(tangon)(report);
        oscard = report.TransitionGroup;
        report = {};
        report['items'] = verify;
        verify = _closure1_slot41;
        report['renderItem'] = verify;
        option = _closure1_slot40;
        report['getItemKey'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 38;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/pip/VoicePanelPIPContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();