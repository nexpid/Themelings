// app/modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            verify = _closure1_slot20;
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
            golfie = _closure1_slot20;
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
    var _closure1_slot19 = entity;
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
    var _closure1_slot20 = entity;
    entity = ['ref'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.setVoiceUpsellDismissed;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    verify = oscard[tangon];
    verify = option.bind(entity)(verify);
    var _closure1_slot9 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RouteTypes;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot14 = option;
    option = tangon.Fragment;
    var _closure1_slot15 = option;
    tangon = tangon.jsxs;
    var _closure1_slot16 = tangon;
    tangon = new Array(0);
    var _closure1_slot17 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        entity = argFoo;
        tangon = entity.targetRef;
        zuuluu = entity.canShowTooltip;
        report = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 10;
        entity = michal[entity];
        michal = undefined;
        entity = report.bind(michal)(entity);
        entity = entity.bind(michal)(tangon, zuuluu);
        entity = null;
        return entity;
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot18 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: VoicePanelHeaderSpeaker
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            backup = entity.isConnectedToVoiceChannel;
            var _closure2_slot0 = backup;
            romeon = entity.channelId;
            var _closure2_slot1 = romeon;
            entity = entity.style;
            var _closure2_slot2 = entity;
            zuuluu = undefined;
            var _closure2_slot5 = zuuluu;
            var _closure2_slot6 = zuuluu;
            var _closure2_slot9 = zuuluu;
            var _closure2_slot11 = zuuluu;
            var _closure2_slot13 = zuuluu;
            var _closure2_slot14 = zuuluu;
            var _closure2_slot15 = zuuluu;
            var _closure2_slot16 = zuuluu;
            michal = function(argFoo) { // Original name: renderButton
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    backup = null;
                    if(!(backup == zuuluu)) { _fun00010_ip = 31; continue _fun00009 }
 9:
                    entity = {};
                    michal = _closure2_slot14;
                    entity['onPress'] = michal;
                    michal = undefined;
                    entity['ref'] = michal;
                    zuuluu = entity;
 31:
                    kiloes = zuuluu.ref;
                    michal = _closure1_slot4;
                    entity = _closure1_slot3;
                    tangon = undefined;
                    foxtra = michal.bind(tangon)(zuuluu, entity);
                    zuuluu = _closure1_slot16;
                    michal = _closure1_slot15;
                    entity = {};
                    golfie = _closure1_slot14;
                    oscard = _closure1_slot18;
                    report = {};
                    option = _closure2_slot16;
                    report['targetRef'] = option;
                    option = _closure2_slot13;
                    if(!option) { _fun00010_ip = 98; continue _fun00009 }
 94:
                    option = _closure2_slot0;
 98:
                    report['canShowTooltip'] = option;
                    oscard = golfie.bind(tangon)(oscard, report);
                    report = new Array(2);
                    report[0] = oscard;
                    option = _closure1_slot14;
                    offset = _closure1_slot1;
                    sizing = _closure1_slot2;
                    oscard = 28;
                    oscard = sizing[oscard];
                    golfie = offset.bind(tangon)(oscard);
                    oscard = {};
                    verify = _closure2_slot2;
                    oscard['style'] = verify;
                    verify = _closure2_slot16;
                    oscard['ref'] = verify;
                    verify = 29;
                    verify = sizing[verify];
                    offset = offset.bind(tangon)(verify);
                    verify = {};
                    verify['ref'] = kiloes;
                    result = verify;
                    output = foxtra;
                    foxtra = copyDataProperties(result, output);
                    foxtra = _closure2_slot0;
                    kiloes = undefined;
                    if(!foxtra) { _fun00010_ip = 211; continue _fun00009 }
 196:
                    foxtra = _closure2_slot6;
                    kiloes = undefined;
                    if(!foxtra) { _fun00010_ip = 211; continue _fun00009 }
 205:
                    kiloes = 'primary-overlay';
 211:
                    foxtra = 'overrideVariant';
                    verify[foxtra] = kiloes;
                    foxtra = _closure2_slot9;
                    kiloes = backup != foxtra;
                    foxtra = 'loading';
                    verify[foxtra] = kiloes;
                    foxtra = _closure2_slot11;
                    if(!(backup == foxtra)) { _fun00010_ip = 251; continue _fun00009 }
 245:
                    foxtra = _closure2_slot5;
                    _fun00010_ip = 255; continue _fun00009;
 251:
                    foxtra = _closure2_slot11;
 255:
                    romeon = 'icon';
                    verify[romeon] = foxtra;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    yankee = 21;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(tangon)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(tangon)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.dnI0AA;
                    romeon = romeon.bind(foxtra)(yankee);
                    yankee = 'accessibilityLabel';
                    verify[yankee] = romeon;
                    verify = option.bind(tangon)(offset, verify);
                    oscard['children'] = verify;
                    oscard = option.bind(tangon)(golfie, oscard);
                    report[1] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            entity = 11;
            entity = foxtra[entity];
            entity = verify.bind(zuuluu)(entity);
            offset = entity.bind(zuuluu)();
            var _closure2_slot3 = offset;
            option = _closure1_slot0;
            entity = 12;
            entity = foxtra[entity];
            tangon = option.bind(zuuluu)(entity);
            entity = tangon.useMaskedSpeakerStates;
            entity = entity.bind(tangon)();
            oscard = entity.toggleAudio;
            var _closure2_slot4 = oscard;
            tangon = entity.routeSource;
            _closure2_slot5 = tangon;
            entity = entity.isAudioRouteEnabled;
            _closure2_slot6 = entity;
            entity = 13;
            entity = foxtra[entity];
            entity = verify.bind(zuuluu)(entity);
            tangon = entity.bind(zuuluu)();
            var _closure2_slot7 = tangon;
            entity = 14;
            entity = foxtra[entity];
            entity = verify.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)();
            var _closure2_slot8 = entity;
            yankee = 15;
            entity = foxtra[yankee];
            output = option.bind(zuuluu)(entity);
            sizing = output.useStateFromStores;
            entity = _closure1_slot8;
            kiloes = new Array(1);
            kiloes[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getAwaitingRemoteSessionInfo;
                entity = entity.bind(michal)();
                return entity;
            };
            output = sizing.bind(output)(kiloes, entity);
            _closure2_slot9 = output;
            entity = foxtra[yankee];
            sizing = option.bind(zuuluu)(entity);
            kiloes = sizing.useStateFromStores;
            entity = _closure1_slot12;
            option = new Array(1);
            option[0] = entity;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getSessionById;
                    tangon = _closure2_slot8;
                    entity = null;
                    oscard = entity == tangon;
                    tangon = undefined;
                    if(oscard) { _fun00012_ip = 41; continue _fun00011 }
 31:
                    report = _closure2_slot8;
                    tangon = report.sessionId;
 41:
                    report = entity != tangon;
                    entity = '';
                    if(!report) { _fun00012_ip = 55; continue _fun00011 }
 52:
                    entity = tangon;
 55:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            entity = kiloes.bind(sizing)(option, entity);
            var _closure2_slot10 = entity;
            sizing = _closure1_slot5;
            kiloes = sizing.useMemo;
            option = new Array(2);
            option[0] = output;
            option[1] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot9;
                    entity = null;
                    michal = entity == michal;
                    tangon = undefined;
                    zuuluu = undefined;
                    if(michal) { _fun00014_ip = 29; continue _fun00013 }
 20:
                    michal = _closure2_slot9;
                    zuuluu = michal.type;
 29:
                    if(!(entity == zuuluu)) { _fun00014_ip = 74; continue _fun00013 }
 33:
                    michal = _closure2_slot10;
                    oscard = entity == michal;
                    michal = undefined;
                    if(oscard) { _fun00014_ip = 71; continue _fun00013 }
 46:
                    report = _closure2_slot10;
                    report = report.clientInfo;
                    oscard = entity == report;
                    michal = undefined;
                    if(oscard) { _fun00014_ip = 71; continue _fun00013 }
 65:
                    michal = report.os;
 71:
                    zuuluu = michal;
 74:
                    michal = entity != zuuluu;
                    entity = null;
                    if(!michal) { _fun00014_ip = 111; continue _fun00013 }
 83:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 16;
                    michal = oscard[michal];
                    michal = report.bind(tangon)(michal);
                    entity = michal.bind(tangon)(zuuluu);
 111:
                    return entity;
                }
            };
            entity = kiloes.bind(sizing)(entity, option);
            _closure2_slot11 = entity;
            entity = 17;
            entity = foxtra[entity];
            entity = verify.bind(zuuluu)(entity);
            kiloes = entity.bind(zuuluu)();
            var _closure2_slot12 = kiloes;
            option = kiloes.length;
            entity = 0;
            entity = option > entity;
            option = 18;
            option = foxtra[option];
            option = verify.bind(zuuluu)(option);
            option = option.bind(zuuluu)(romeon);
            foxtra = option.canConnect;
            option = option.isAtMaxCapacity;
            if(!foxtra) { _fun00008_ip = 394; continue _fun00007 }
 391:
            foxtra = !option;
 394:
            if(!foxtra) { _fun00008_ip = 409; continue _fun00007 }
 397:
            option = backup;
            if(backup) { _fun00008_ip = 406; continue _fun00007 }
 403:
            option = entity;
 406:
            foxtra = option;
 409:
            _closure2_slot13 = foxtra;
            option = _closure1_slot5;
            sizing = option.useCallback;
            verify = new Array(3);
            verify[0] = romeon;
            verify[1] = backup;
            verify[2] = oscard;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 19;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00016_ip = 60; continue _fun00015 }
 37:
                    report = _closure2_slot4;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    _fun00016_ip = 103; continue _fun00015;
 60:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 20;
                    michal = tangon[michal];
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.showAudioOutputSelector;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(zuuluu, michal);
 103:
                    return entity;
                }
            };
            oscard = sizing.bind(option)(oscard, verify);
            _closure2_slot14 = oscard;
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[yankee];
            sizing = verify.bind(zuuluu)(oscard);
            yankee = sizing.useStateFromStores;
            oscard = _closure1_slot9;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                michal = _closure1_slot9;
                entity = michal.getCurrentRouteType;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = yankee.bind(sizing)(verify, oscard);
            _closure2_slot15 = yankee;
            verify = option.useMemo;
            oscard = new Array(5);
            oscard[0] = kiloes;
            oscard[1] = romeon;
            oscard[2] = backup;
            oscard[3] = yankee;
            oscard[4] = tangon;
            tangon = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 19;
                    michal = report[michal];
                    golfie = undefined;
                    zuuluu = zuuluu.bind(golfie)(michal);
                    michal = zuuluu.isAndroid;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00018_ip = 520; continue _fun00017 }
 42:
                    michal = _closure2_slot12;
                    report = michal.length;
                    michal = 0;
                    if(!(michal !== report)) { _fun00018_ip = 520; continue _fun00017 }
 63:
                    michal = new Array(0);
                    var _closure3_slot0 = michal;
                    report = _closure2_slot7;
                    if(report) { _fun00018_ip = 96; continue _fun00017 }
 78:
                    option = _closure2_slot15;
                    oscard = _closure1_slot10;
                    oscard = oscard.SPEAKER;
                    report = option !== oscard;
 96:
                    if(report) { _fun00018_ip = 211; continue _fun00017 }
 99:
                    oscard = michal.push;
                    report = {};
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 21;
                    verify = offset[option];
                    verify = romeon.bind(golfie)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    option = offset[option];
                    option = romeon.bind(golfie)(option);
                    option = option.t;
                    option = option.gvQIz8;
                    option = verify.bind(yankee)(option);
                    report['label'] = option;
                    verify = _closure1_slot1;
                    option = 22;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    report['iconSource'] = option;
                    option = false;
                    report['showIconFirst'] = option;
                    option = function() { // Original name: action
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = _closure1_slot6;
                            tangon = entity.AudioRoutePicker;
                            entity = null;
                            michal = entity == tangon;
                            entity = undefined;
                            if(michal) { _fun00020_ip = 37; continue _fun00019 }
 24:
                            zuuluu = tangon.toggleSpeaker;
                            michal = false;
                            entity = zuuluu.bind(tangon)(michal);
 37:
                            return entity;
                        }
                    };
                    report['action'] = option;
                    report = oscard.bind(michal)(report);
 211:
                    report = _closure2_slot7;
                    if(report) { _fun00018_ip = 236; continue _fun00017 }
 218:
                    option = _closure2_slot15;
                    oscard = _closure1_slot10;
                    oscard = oscard.RECEIVER;
                    report = option !== oscard;
 236:
                    if(report) { _fun00018_ip = 351; continue _fun00017 }
 239:
                    oscard = michal.push;
                    report = {};
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 21;
                    verify = offset[option];
                    verify = romeon.bind(golfie)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    option = offset[option];
                    option = romeon.bind(golfie)(option);
                    option = option.t;
                    option = option.wwTN1t;
                    option = verify.bind(yankee)(option);
                    report['label'] = option;
                    verify = _closure1_slot1;
                    option = 23;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    report['iconSource'] = option;
                    option = false;
                    report['showIconFirst'] = option;
                    option = function() { // Original name: action
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = _closure1_slot6;
                            tangon = entity.AudioRoutePicker;
                            entity = null;
                            michal = entity == tangon;
                            entity = undefined;
                            if(michal) { _fun00022_ip = 37; continue _fun00021 }
 24:
                            zuuluu = tangon.toggleSpeaker;
                            michal = true;
                            entity = zuuluu.bind(tangon)(michal);
 37:
                            return entity;
                        }
                    };
                    report['action'] = option;
                    report = oscard.bind(michal)(report);
 351:
                    oscard = michal.push;
                    report = {};
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 21;
                    verify = offset[option];
                    verify = romeon.bind(golfie)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    option = offset[option];
                    option = romeon.bind(golfie)(option);
                    option = option.t;
                    option = option.dnI0AA;
                    option = verify.bind(yankee)(option);
                    report['label'] = option;
                    verify = _closure1_slot1;
                    option = 24;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    report['iconSource'] = option;
                    option = false;
                    report['showIconFirst'] = option;
                    option = function() { // Original name: action
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 20;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.showAudioOutputSelector;
                        zuuluu = _closure2_slot1;
                        michal = _closure2_slot0;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    report['action'] = option;
                    report = oscard.bind(michal)(report);
                    oscard = function(argFoo) { // Original name: _loop
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            report = argFoo;
                            var _closure4_slot0 = report;
                            michal = report.type;
                            entity = _closure1_slot13;
                            entity = entity.XBOX;
                            if(!(michal === entity)) { _fun00024_ip = 163; continue _fun00023 }
 34:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            entity = {};
                            romeon = _closure1_slot0;
                            offset = _closure1_slot2;
                            golfie = 21;
                            option = offset[golfie];
                            verify = undefined;
                            option = romeon.bind(verify)(option);
                            yankee = option.intl;
                            option = yankee.string;
                            golfie = offset[golfie];
                            golfie = romeon.bind(verify)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.qVE/VF;
                            golfie = option.bind(yankee)(golfie);
                            entity['label'] = golfie;
                            option = _closure1_slot1;
                            golfie = 16;
                            golfie = offset[golfie];
                            option = option.bind(verify)(golfie);
                            golfie = report.type;
                            golfie = option.bind(verify)(golfie);
                            entity['iconSource'] = golfie;
                            golfie = false;
                            entity['showIconFirst'] = golfie;
                            golfie = function() { // Original name: action
                                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                    tangon = _closure1_slot11;
                                    zuuluu = tangon.getChannel;
                                    michal = _closure2_slot1;
                                    tangon = zuuluu.bind(tangon)(michal);
                                    michal = null;
                                    if(!(michal != tangon)) { _fun00026_ip = 71; continue _fun00025 }
 30:
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 25;
                                    michal = michal[entity];
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)(michal);
                                    michal = zuuluu.onConnectToConsole;
                                    entity = _closure4_slot0;
                                    entity = michal.bind(zuuluu)(tangon, entity);
 71:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['action'] = golfie;
                            entity = michal.bind(zuuluu)(entity);
 163:
                            michal = report.type;
                            entity = _closure1_slot13;
                            entity = entity.PLAYSTATION;
                            if(!(michal === entity)) { _fun00024_ip = 314; continue _fun00023 }
 185:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            entity = {};
                            romeon = _closure1_slot0;
                            verify = _closure1_slot2;
                            option = 21;
                            offset = verify[option];
                            golfie = undefined;
                            offset = romeon.bind(golfie)(offset);
                            yankee = offset.intl;
                            offset = yankee.string;
                            option = verify[option];
                            option = romeon.bind(golfie)(option);
                            option = option.t;
                            option = option.vzfxmZ;
                            option = offset.bind(yankee)(option);
                            entity['label'] = option;
                            option = _closure1_slot1;
                            oscard = 16;
                            oscard = verify[oscard];
                            oscard = option.bind(golfie)(oscard);
                            report = report.type;
                            report = oscard.bind(golfie)(report);
                            entity['iconSource'] = report;
                            report = false;
                            entity['showIconFirst'] = report;
                            tangon = function() { // Original name: action
                                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                    tangon = _closure1_slot11;
                                    zuuluu = tangon.getChannel;
                                    michal = _closure2_slot1;
                                    tangon = zuuluu.bind(tangon)(michal);
                                    michal = null;
                                    if(!(michal != tangon)) { _fun00028_ip = 71; continue _fun00027 }
 30:
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 25;
                                    michal = michal[entity];
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)(michal);
                                    michal = zuuluu.onConnectToConsole;
                                    entity = _closure4_slot0;
                                    entity = michal.bind(zuuluu)(tangon, entity);
 71:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['action'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 314:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon = _closure1_slot19;
                    zuuluu = _closure2_slot12;
                    report = tangon.bind(golfie)(zuuluu);
                    tangon = report.bind(golfie)();
                    zuuluu = tangon.done;
                    if(zuuluu) { _fun00018_ip = 518; continue _fun00017 }
 493:
                    zuuluu = tangon.value;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    option = report.bind(golfie)();
                    zuuluu = option.done;
                    tangon = option;
                    if(!zuuluu) { _fun00018_ip = 493; continue _fun00017 }
 518:
                    return michal;
 520:
                    entity = _closure1_slot17;
                    return entity;
                }
            };
            romeon = verify.bind(option)(tangon, oscard);
            verify = option.useCallback;
            oscard = new Array(1);
            oscard[0] = offset;
            tangon = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 26;
                zuuluu = golfie[entity];
                entity = undefined;
                report = oscard.bind(entity)(zuuluu);
                tangon = report.markDismissibleContentAsDismissed;
                zuuluu = 27;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(entity)(zuuluu);
                zuuluu = zuuluu.DismissibleContent;
                zuuluu = zuuluu.DONUT_MOBILE_NUX;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = _closure1_slot7;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure2_slot3;
                michal = zuuluu.lock;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            yankee = verify.bind(option)(tangon, oscard);
            oscard = option.useRef;
            tangon = null;
            kiloes = oscard.bind(option)(tangon);
            _closure2_slot16 = kiloes;
            if(foxtra) { _fun00008_ip = 595; continue _fun00007 }
 593:
            return tangon;
 595:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 19;
            tangon = oscard[tangon];
            report = report.bind(zuuluu)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            if(tangon) { _fun00008_ip = 778; continue _fun00007 }
 630:
            if(!entity) { _fun00008_ip = 778; continue _fun00007 }
 636:
            report = _closure1_slot16;
            tangon = _closure1_slot15;
            entity = {};
            verify = _closure1_slot14;
            option = _closure1_slot18;
            oscard = {};
            oscard['targetRef'] = kiloes;
            if(!foxtra) { _fun00008_ip = 667; continue _fun00007 }
 664:
            foxtra = backup;
 667:
            oscard['canShowTooltip'] = foxtra;
            option = verify.bind(zuuluu)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot14;
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 30;
            golfie = foxtra[golfie];
            golfie = option.bind(zuuluu)(golfie);
            option = golfie.MenuPopout;
            golfie = {'menuItems': null, 'position': 'bottom', 'align': 'end'};
            golfie['menuItems'] = romeon;
            golfie['onRequestOpen'] = yankee;
            offset = offset.unlock;
            golfie['onRequestClose'] = offset;
            golfie['children'] = michal;
            golfie = verify.bind(zuuluu)(option, golfie);
            oscard[1] = golfie;
            entity['children'] = oscard;
            entity = report.bind(zuuluu)(tangon, entity);
            _fun00008_ip = 782; continue _fun00007;
 778:
            entity = michal.bind(zuuluu)();
 782:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();