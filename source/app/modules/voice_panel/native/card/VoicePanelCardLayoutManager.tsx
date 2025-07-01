// app/modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
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
            verify = _closure1_slot22;
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
            golfie = _closure1_slot22;
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
    var _closure1_slot21 = entity;
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
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getOrCreateRow
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argBaz;
            entity = argFoo;
            entity = tangon[entity];
            michal = null;
            if(!(michal == entity)) { _fun00008_ip = 73; continue _fun00007 }
 16:
            michal = global;
            report = michal.Array;
            michal = report.prototype;
            zuuluu = Object.create(michal, {constructor: {value: report}});
            oscard = argBar;
            golfie = zuuluu;
            michal = new golfie[report](oscard, report);
            report = michal instanceof Object ? michal : zuuluu;
            zuuluu = report.fill;
            michal = 0;
            michal = zuuluu.bind(report)(michal);
            zuuluu = tangon.push;
            zuuluu = zuuluu.bind(tangon)(michal);
            entity = michal;
 73:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: getTargetAspectRatio
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.width;
            entity = entity.height;
            tangon = michal / entity;
            entity = 'landscape';
            michal = 1.3;
            if(!(!(tangon >= michal))) { _fun00010_ip = 62; continue _fun00009 }
 35:
            michal = 'square';
            zuuluu = 0.8;
            if(!(tangon <= zuuluu)) { _fun00010_ip = 59; continue _fun00009 }
 53:
            michal = 'portrait';
 59:
            entity = michal;
 62:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getGridDimensionsFromAspectRatio
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            michal = argBar;
            entity = argBaz;
            zuuluu = argCor;
            tangon = 'portrait';
            if(!(tangon !== report)) { _fun00012_ip = 162; continue _fun00011 }
 25:
            tangon = 'landscape';
            if(!(tangon !== report)) { _fun00012_ip = 82; continue _fun00011 }
 33:
            tangon = 'square';
            if(!(tangon !== report)) { _fun00012_ip = 45; continue _fun00011 }
 41:
            tangon = undefined;
            return tangon;
 45:
            tangon = entity.enlargeSquare;
            if(tangon) { _fun00012_ip = 66; continue _fun00011 }
 54:
            tangon = {'width': 1, 'height': 1};
            _fun00012_ip = 80; continue _fun00011;
 66:
            tangon = {'width': 2, 'height': 2};
 80:
            return tangon;
 82:
            tangon = entity.fillAspectRatio;
            if(tangon) { _fun00012_ip = 107; continue _fun00011 }
 91:
            tangon = {'width': 2, 'height': 1};
            _fun00012_ip = 160; continue _fun00011;
 107:
            if(michal) { _fun00012_ip = 126; continue _fun00011 }
 110:
            report = {'width': 2, 'height': 2};
            _fun00012_ip = 157; continue _fun00011;
 126:
            oscard = {};
            option = 0;
            if(!zuuluu) { _fun00012_ip = 136; continue _fun00011 }
 133:
            option = 1;
 136:
            golfie = 3;
            golfie = golfie + option;
            oscard['width'] = golfie;
            golfie = 2;
            oscard['height'] = golfie;
            report = oscard;
 157:
            tangon = report;
 160:
            return tangon;
 162:
            entity = entity.fillAspectRatio;
            if(entity) { _fun00012_ip = 183; continue _fun00011 }
 171:
            entity = {'width': 1, 'height': 2};
            _fun00012_ip = 233; continue _fun00011;
 183:
            if(michal) { _fun00012_ip = 216; continue _fun00011 }
 186:
            michal = {};
            tangon = 2;
            michal['width'] = tangon;
            tangon = 0;
            if(!zuuluu) { _fun00012_ip = 203; continue _fun00011 }
 200:
            tangon = 1;
 203:
            zuuluu = 3;
            zuuluu = zuuluu + tangon;
            michal['height'] = zuuluu;
            _fun00012_ip = 230; continue _fun00011;
 216:
            michal = {'width': 2, 'height': 2};
 230:
            entity = michal;
 233:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: getTargetCardSize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            option = michal.windowWidth;
            entity = michal.windowHeight;
            oscard = michal.safeAreaLeft;
            golfie = michal.safeAreaRight;
            entity = option > entity;
            report = 3;
            if(!entity) { _fun00014_ip = 40; continue _fun00013 }
 37:
            report = 4;
 40:
            entity = global;
            tangon = entity.Math;
            zuuluu = tangon.max;
            michal = _closure1_slot10;
            oscard = option - oscard;
            oscard = oscard - golfie;
            golfie = _closure1_slot15;
            entity = 1;
            entity = report - entity;
            entity = golfie * entity;
            entity = oscard - entity;
            entity = entity / report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    option = global;
    yankee = option.Object;
    offset = yankee.defineProperty;
    report = {};
    tangon = true;
    report['value'] = tangon;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    offset = golfie[report];
    report = argCor;
    report = report.bind(entity)(offset);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.PixelRatio;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.VoicePanelCardItemType;
    var _closure1_slot9 = verify;
    offset = report.BASE_TARGET_CARD_SIZE;
    var _closure1_slot10 = offset;
    offset = report.VoicePanelCTACardDimensionKeys;
    var _closure1_slot11 = offset;
    offset = report.VoicePanelCTACardDimensions;
    var _closure1_slot12 = offset;
    report = report.VOICE_PANEL_CHUNK_DIVISOR;
    var _closure1_slot13 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.EDGE_GUTTER;
    var _closure1_slot14 = offset;
    report = report.CALL_TILE_GUTTER;
    var _closure1_slot15 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ParticipantTypes;
    var _closure1_slot16 = report;
    report = {'id': 'invalid', 'type': null, 'x': 0, 'y': 0, 'width': 0, 'height': 0, 'zIndex': 0};
    verify = verify.PARTICIPANT;
    report['type'] = verify;
    var _closure1_slot17 = report;
    report = option.Set;
    verify = report.prototype;
    verify = Object.create(verify, {constructor: {value: report}});
    kiloes = verify;
    report = new kiloes[report](backup);
    report = report instanceof Object ? report : verify;
    var _closure1_slot18 = report;
    report = {'enlargeSquare': false, 'fillAspectRatio': false};
    var _closure1_slot19 = report;
    report = {};
    yankee = option.Set;
    verify = yankee.prototype;
    offset = Object.create(verify, {constructor: {value: yankee}});
    backup = ['1,camera', '2,camera', '2,camera,camera'];
    kiloes = offset;
    verify = new kiloes[yankee](backup, foxtra);
    verify = verify instanceof Object ? verify : offset;
    report['match'] = verify;
    verify = new Array(1);
    offset = {'enlargeSquare': true, 'fillAspectRatio': false};
    verify[0] = offset;
    report['layouts'] = verify;
    report['global'] = tangon;
    tangon = new Array(2);
    tangon[0] = report;
    report = {};
    offset = option.Set;
    option = offset.prototype;
    verify = Object.create(option, {constructor: {value: offset}});
    backup = ['1,stream', '2,stream', '3,stream', '2,stream,camera', '3,stream,camera', '3,stream,camera,camera', '3,camera', '3,camera,stream'];
    kiloes = verify;
    option = new kiloes[offset](backup, foxtra);
    option = option instanceof Object ? option : verify;
    report['match'] = option;
    option = new Array(3);
    verify = {'enlargeSquare': true, 'fillAspectRatio': true};
    option[0] = verify;
    verify = {'enlargeSquare': false, 'fillAspectRatio': false};
    option[1] = verify;
    verify = {'enlargeSquare': false, 'fillAspectRatio': false};
    option[2] = verify;
    report['layouts'] = option;
    tangon[1] = report;
    var _closure1_slot20 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: VoicePanelCardLayoutManager
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            tangon = true;
            zuuluu['dirty'] = tangon;
            report = global;
            michal = report.Map;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            offset = oscard;
            michal = new offset[michal](verify);
            michal = michal instanceof Object ? michal : oscard;
            zuuluu['targetDimensions'] = michal;
            michal = report.Map;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            offset = oscard;
            michal = new offset[michal](verify);
            michal = michal instanceof Object ? michal : oscard;
            zuuluu['cardCoords'] = michal;
            michal = report.Map;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            offset = oscard;
            michal = new offset[michal](verify);
            michal = michal instanceof Object ? michal : oscard;
            zuuluu['chunkedCoords'] = michal;
            michal = 0;
            oscard = {'width': 0, 'height': 0};
            zuuluu['contentDimensions'] = oscard;
            oscard = report.Set;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            offset = golfie;
            oscard = new offset[oscard](verify);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['layoutCallbacks'] = oscard;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            offset = oscard;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscard;
            zuuluu['managerSubscriptions'] = report;
            report = new Array(0);
            zuuluu['items'] = report;
            zuuluu['emitItemChanges'] = tangon;
            tangon = false;
            zuuluu['mounted'] = tangon;
            zuuluu['layoutKey'] = michal;
            michal = -1;
            zuuluu['lastEmittedLayoutKey'] = michal;
            zuuluu['emitTimeout'] = michal;
            michal = {'windowWidth': 0, 'windowHeight': 0, 'chunkSize': 0, 'safeAreaLeft': 0, 'safeAreaRight': 0, 'safeAreaTop': 0, 'safeAreaBottom': 0, 'gutter': 0, 'controlBarSize': 0};
            zuuluu['props'] = michal;
            michal = {'width': 0, 'height': 0};
            zuuluu['defaultTargetCoords'] = michal;
            michal = argFoo;
            zuuluu['channelId'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'setDirty';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                michal = this;
                if(!entity) { _fun00016_ip = 18; continue _fun00015 }
 9:
                zuuluu = michal.dirty;
                entity = !zuuluu;
 18:
                if(!entity) { _fun00016_ip = 35; continue _fun00015 }
 21:
                entity = true;
                michal['dirty'] = entity;
                michal['emitItemChanges'] = entity;
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(20);
        michal[0] = entity;
        entity = {};
        oscard = 'requiresEmit';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = this;
                zuuluu = entity.lastEmittedLayoutKey;
                michal = entity.layoutKey;
                michal = zuuluu !== michal;
                zuuluu = entity.layoutKey;
                entity['lastEmittedLayoutKey'] = zuuluu;
                entity = entity.emitItemChanges;
                if(entity) { _fun00018_ip = 43; continue _fun00017 }
 40:
                entity = michal;
 43:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleLayoutEffect';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = true;
            michal['mounted'] = entity;
            entity = michal.emitLayoutChanges;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'cleanUp';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = false;
            entity = this;
            entity['mounted'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'updateState';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                tangon = argBar;
                michal = this;
                entity = tangon.windowWidth;
                option = tangon.windowHeight;
                foxtra = tangon.safeAreaLeft;
                romeon = tangon.safeAreaRight;
                oscard = tangon.safeAreaTop;
                offset = tangon.safeAreaBottom;
                report = tangon.controlBarSize;
                tangon = {};
                tangon['windowHeight'] = option;
                tangon['windowWidth'] = entity;
                golfie = _closure1_slot13;
                golfie = option / golfie;
                tangon['chunkSize'] = golfie;
                golfie = global;
                yankee = golfie.Math;
                option = yankee.max;
                verify = _closure1_slot14;
                option = option.bind(yankee)(foxtra, verify);
                tangon['safeAreaLeft'] = option;
                yankee = golfie.Math;
                option = yankee.max;
                option = option.bind(yankee)(romeon, verify);
                tangon['safeAreaRight'] = option;
                option = golfie.Math;
                golfie = option.max;
                golfie = golfie.bind(option)(offset, verify);
                tangon['safeAreaBottom'] = golfie;
                tangon['safeAreaTop'] = oscard;
                oscard = _closure1_slot15;
                tangon['gutter'] = oscard;
                tangon['controlBarSize'] = report;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                entity = 11;
                report = report[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = michal.props;
                report = oscard.bind(entity)(tangon, report);
                if(report) { _fun00020_ip = 225; continue _fun00019 }
 206:
                michal['props'] = tangon;
                report = michal.setDirty;
                tangon = true;
                tangon = report.bind(michal)(tangon);
 225:
                report = michal.setDirty;
                oscard = michal.items;
                tangon = function(argFoo, argBar) { // Original name: areArraysShallowEqual
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tangon = argFoo;
                        entity = argBar;
                        var _closure4_slot0 = entity;
                        zuuluu = tangon.length;
                        entity = entity.length;
                        entity = zuuluu === entity;
                        if(!entity) { _fun00022_ip = 50; continue _fun00021 }
 29:
                        zuuluu = tangon.some;
                        michal = function(argFoo, argBar) {
                            michal = _closure4_slot0;
                            entity = argBar;
                            michal = michal[entity];
                            entity = argFoo;
                            entity = michal !== entity;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        entity = !michal;
 50:
                        return entity;
                    }
                };
                tangon = tangon.bind(entity)(zuuluu, oscard);
                tangon = !tangon;
                tangon = report.bind(michal)(tangon);
                michal['items'] = zuuluu;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getLayoutKey';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.layoutKey;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getChunk';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = this;
                zuuluu = entity.chunkedCoords;
                michal = zuuluu.get;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                michal = null;
                if(!(michal == entity)) { _fun00024_ip = 35; continue _fun00023 }
 28:
                entity = _closure1_slot18;
 35:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getContentDimensions';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.computeCardsLayout;
            michal = michal.bind(entity)();
            entity = entity.contentDimensions;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getCardCoords';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.computeCardsLayout;
            michal = michal.bind(entity)();
            zuuluu = entity.cardCoords;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'getCardCoordsMap';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.computeCardsLayout;
            michal = michal.bind(entity)();
            entity = entity.cardCoords;
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getDefaultTargetDimensions';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.defaultTargetCoords;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'getTargetDimensions';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                michal = this;
                report = null;
                if(!(report != tangon)) { _fun00026_ip = 70; continue _fun00025 }
 12:
                oscard = _closure1_slot11;
                entity = oscard.has;
                entity = entity.bind(oscard)(tangon);
                if(entity) { _fun00026_ip = 60; continue _fun00025 }
 32:
                oscard = michal.targetDimensions;
                entity = oscard.get;
                entity = entity.bind(oscard)(tangon);
                if(!(report == entity)) { _fun00026_ip = 58; continue _fun00025 }
 52:
                entity = michal.defaultTargetCoords;
 58:
                _fun00026_ip = 68; continue _fun00025;
 60:
                zuuluu = _closure1_slot12;
                entity = zuuluu[tangon];
 68:
                _fun00026_ip = 76; continue _fun00025;
 70:
                entity = michal.defaultTargetCoords;
 76:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'setTargetDimensions';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = argFoo;
                golfie = argBar;
                oscard = argBaz;
                michal = this;
                entity = michal.getTargetDimensions;
                zuuluu = entity.bind(michal)(report);
                entity = zuuluu.width;
                entity = entity === golfie;
                if(!entity) { _fun00028_ip = 44; continue _fun00027 }
 35:
                zuuluu = zuuluu.height;
                entity = zuuluu === oscard;
 44:
                if(entity) { _fun00028_ip = 97; continue _fun00027 }
 47:
                tangon = michal.targetDimensions;
                zuuluu = tangon.set;
                entity = {};
                entity['width'] = golfie;
                entity['height'] = oscard;
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = michal.setDirty;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                entity = michal.deferredLayoutChange;
                entity = entity.bind(michal)();
 97:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'resetTargetDimensions';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = argFoo;
                michal = this;
                zuuluu = michal.targetDimensions;
                entity = zuuluu.has;
                entity = entity.bind(zuuluu)(tangon);
                if(!entity) { _fun00030_ip = 64; continue _fun00029 }
 25:
                zuuluu = michal.targetDimensions;
                entity = zuuluu.delete;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = michal.setDirty;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                entity = michal.deferredLayoutChange;
                entity = entity.bind(michal)();
 64:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'setTargetAspectRatio';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                michal = this;
                entity = 'portrait';
                if(!(entity !== zuuluu)) { _fun00032_ip = 65; continue _fun00031 }
 19:
                entity = 'landscape';
                if(!(entity !== zuuluu)) { _fun00032_ip = 49; continue _fun00031 }
 27:
                entity = 'square';
                tangon = undefined;
                if(!(entity === zuuluu)) { _fun00032_ip = 75; continue _fun00031 }
 37:
                tangon = {'width': 1, 'height': 1};
                _fun00032_ip = 75; continue _fun00031;
 49:
                tangon = {'width': 2, 'height': 1};
                _fun00032_ip = 75; continue _fun00031;
 65:
                tangon = {'width': 1, 'height': 2};
 75:
                entity = michal.getTargetDimensions;
                zuuluu = entity.bind(michal)(report);
                oscard = zuuluu.width;
                entity = tangon.width;
                entity = oscard === entity;
                if(!entity) { _fun00032_ip = 117; continue _fun00031 }
 103:
                oscard = zuuluu.height;
                zuuluu = tangon.height;
                entity = oscard === zuuluu;
 117:
                if(entity) { _fun00032_ip = 160; continue _fun00031 }
 120:
                zuuluu = michal.targetDimensions;
                entity = zuuluu.set;
                entity = entity.bind(zuuluu)(report, tangon);
                zuuluu = michal.setDirty;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                entity = michal.deferredLayoutChange;
                entity = entity.bind(michal)();
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'computeCardsLayout';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = zuuluu;
                michal = zuuluu.dirty;
                entity = undefined;
                if(!michal) { _fun00034_ip = 1932; continue _fun00033 }
 27:
                oscard = global;
                michal = oscard.Map;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                status = report;
                michal = new status[michal](target);
                michal = michal instanceof Object ? michal : report;
                zuuluu['cardCoords'] = michal;
                michal = oscard.Map;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                status = report;
                michal = new status[michal](target);
                michal = michal instanceof Object ? michal : report;
                zuuluu['chunkedCoords'] = michal;
                michal = zuuluu.props;
                kiloes = michal.windowWidth;
                var _closure3_slot2 = kiloes;
                result = michal.windowHeight;
                var _closure3_slot3 = result;
                sequen = michal.safeAreaLeft;
                config = michal.safeAreaRight;
                source = michal.safeAreaTop;
                foxtra = michal.safeAreaBottom;
                golfie = michal.gutter;
                echoed = michal.controlBarSize;
                michal = oscard.Set;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                status = report;
                michal = new status[michal](target);
                output = michal instanceof Object ? michal : report;
                var _closure3_slot4 = output;
                michal = oscard.Set;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                status = report;
                michal = new status[michal](target);
                sizing = michal instanceof Object ? michal : report;
                var _closure3_slot5 = sizing;
                michal = oscard.Set;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                status = report;
                michal = new status[michal](target);
                backup = michal instanceof Object ? michal : report;
                var _closure3_slot6 = backup;
                option = oscard.Set;
                target = zuuluu.items;
                report = option.prototype;
                report = Object.create(report, {constructor: {value: option}});
                status = report;
                michal = new status[option](target, papara);
                romeon = michal instanceof Object ? michal : report;
                var _closure3_slot7 = romeon;
                michal = zuuluu.items;
                option = michal.length;
                michal = oscard.HermesInternal;
                report = michal.concat;
                michal = '';
                michal = report.bind(michal)(option);
                var _closure3_slot8 = michal;
                yankee = 0;
                var _closure3_slot9 = yankee;
                offset = function(argFoo) { // Original name: _loop
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zuuluu = argFoo;
                        golfie = _closure1_slot8;
                        oscard = golfie.getParticipant;
                        tangon = _closure3_slot1;
                        report = tangon.channelId;
                        tangon = zuuluu.id;
                        oscard = oscard.bind(golfie)(report, tangon);
                        report = zuuluu.type;
                        tangon = _closure1_slot9;
                        tangon = tangon.CTA;
                        if(!(report !== tangon)) { _fun00036_ip = 176; continue _fun00035 }
 58:
                        tangon = null;
                        tangon = tangon == oscard;
                        golfie = undefined;
                        report = undefined;
                        if(tangon) { _fun00036_ip = 174; continue _fun00035 }
 71:
                        option = oscard.type;
                        tangon = _closure1_slot16;
                        tangon = tangon.USER;
                        if(!(option === tangon)) { _fun00036_ip = 120; continue _fun00035 }
 90:
                        option = _closure1_slot1;
                        verify = _closure1_slot2;
                        tangon = 12;
                        tangon = verify[tangon];
                        tangon = option.bind(golfie)(tangon);
                        tangon = tangon.bind(golfie)(oscard);
                        report = undefined;
                        if(!tangon) { _fun00036_ip = 174; continue _fun00035 }
 120:
                        golfie = oscard.type;
                        tangon = _closure1_slot16;
                        tangon = tangon.USER;
                        if(!(golfie !== tangon)) { _fun00036_ip = 161; continue _fun00035 }
 139:
                        option = _closure3_slot1;
                        golfie = option.getTargetDimensions;
                        tangon = zuuluu.id;
                        tangon = golfie.bind(option)(tangon);
                        _fun00036_ip = 171; continue _fun00035;
 161:
                        golfie = _closure3_slot1;
                        tangon = golfie.defaultTargetCoords;
 171:
                        report = tangon;
 174:
                        _fun00036_ip = 196; continue _fun00035;
 176:
                        option = _closure3_slot1;
                        golfie = option.getTargetDimensions;
                        tangon = zuuluu.id;
                        report = golfie.bind(option)(tangon);
 196:
                        tangon = null;
                        if(!(tangon != report)) { _fun00036_ip = 430; continue _fun00035 }
 205:
                        if(!(tangon != oscard)) { _fun00036_ip = 430; continue _fun00035 }
 212:
                        golfie = {};
                        tangon = 'custom';
                        golfie['type'] = tangon;
                        golfie['item'] = zuuluu;
                        option = oscard.type;
                        tangon = _closure1_slot16;
                        report = tangon.USER;
                        report = option === report;
                        golfie['forceSquare'] = report;
                        report = oscard.type;
                        tangon = tangon.ACTIVITY;
                        if(!(tangon !== report)) { _fun00036_ip = 325; continue _fun00035 }
 265:
                        tangon = _closure1_slot16;
                        tangon = tangon.STREAM;
                        if(!(tangon !== report)) { _fun00036_ip = 309; continue _fun00035 }
 279:
                        tangon = _closure1_slot16;
                        tangon = tangon.USER;
                        if(!(tangon === report)) { _fun00036_ip = 339; continue _fun00035 }
 293:
                        report = _closure3_slot6;
                        tangon = report.add;
                        tangon = tangon.bind(report)(golfie);
                        _fun00036_ip = 339; continue _fun00035;
 309:
                        report = _closure3_slot5;
                        tangon = report.add;
                        tangon = tangon.bind(report)(golfie);
                        _fun00036_ip = 339; continue _fun00035;
 325:
                        report = _closure3_slot4;
                        tangon = report.add;
                        tangon = tangon.bind(report)(golfie);
 339:
                        tangon = _closure3_slot8;
                        option = oscard.type;
                        report = _closure1_slot16;
                        golfie = report.STREAM;
                        report = 'stream';
                        if(!(option !== golfie)) { _fun00036_ip = 396; continue _fun00035 }
 366:
                        golfie = oscard.type;
                        michal = _closure1_slot16;
                        oscard = michal.USER;
                        michal = 'activity';
                        if(!(golfie === oscard)) { _fun00036_ip = 393; continue _fun00035 }
 389:
                        michal = 'camera';
 393:
                        report = michal;
 396:
                        michal = ',';
                        michal = michal + report;
                        michal = tangon + michal;
                        _closure3_slot8 = michal;
                        michal = _closure3_slot7;
                        entity = michal.delete;
                        entity = entity.bind(michal)(zuuluu);
                        entity = undefined;
                        return entity;
 430:
                        entity = 1;
                        return entity;
                    }
                };
                report = _closure1_slot21;
                verify = report.bind(entity)(romeon);
                option = verify.bind(entity)();
                report = option.done;
                if(report) { _fun00034_ip = 380; continue _fun00033 }
 352:
                report = option.value;
                report = offset.bind(entity)(report);
                if(report) { _fun00034_ip = 380; continue _fun00033 }
 365:
                update = verify.bind(entity)();
                report = update.done;
                option = update;
                if(!report) { _fun00034_ip = 352; continue _fun00033 }
 380:
                report = output.size;
                offset = null;
                vacuum = null;
                if(!(yankee === report)) { _fun00034_ip = 414; continue _fun00033 }
 393:
                verify = _closure1_slot20;
                option = verify.find;
                report = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.match;
                    michal = zuuluu.has;
                    entity = _closure3_slot8;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                vacuum = option.bind(verify)(report);
 414:
                var _closure3_slot11 = vacuum;
                verify = oscard.Math;
                option = verify.max;
                update = _closure1_slot1;
                ctrled = _closure1_slot2;
                report = 13;
                report = ctrled[report];
                update = update.bind(entity)(report);
                report = {};
                report['top'] = source;
                report['left'] = sequen;
                report['right'] = config;
                report['bottom'] = foxtra;
                report = update.bind(entity)(report);
                report = report.height;
                update = result - report;
                report = _closure1_slot14;
                report = update - report;
                report = report - echoed;
                report = report - foxtra;
                foxtra = 120;
                echoed = option.bind(verify)(foxtra, report);
                verify = oscard.Math;
                option = verify.max;
                report = kiloes - sequen;
                report = report - config;
                foxtra = option.bind(verify)(foxtra, report);
                if(!(offset == vacuum)) { _fun00034_ip = 792; continue _fun00033 }
 538:
                report = output.size;
                if(!(!(report > yankee))) { _fun00034_ip = 792; continue _fun00033 }
 550:
                option = _closure1_slot26;
                report = {};
                report['windowWidth'] = kiloes;
                report['windowHeight'] = result;
                report['safeAreaLeft'] = sequen;
                report['safeAreaRight'] = config;
                verify = option.bind(entity)(report);
                report = zuuluu.items;
                option = report.length;
                report = 7;
                if(!(!(option >= report))) { _fun00034_ip = 699; continue _fun00033 }
 599:
                report = zuuluu.items;
                report = report.length;
                if(!(yankee !== report)) { _fun00034_ip = 699; continue _fun00033 }
 614:
                option = _closure1_slot1;
                update = _closure1_slot2;
                report = 14;
                report = update[report];
                option = option.bind(entity)(report);
                report = {};
                update = zuuluu.items;
                update = update.length;
                report['cardCount'] = update;
                report['gutterSize'] = golfie;
                report['availableWidth'] = foxtra;
                report['availableHeight'] = echoed;
                report = option.bind(entity)(report);
                option = report.columns;
                _closure3_slot9 = option;
                ctrled = report.cardSize;
                report = option;
                foxtra = report;
                _fun00034_ip = 927; continue _fun00033;
 699:
                source = oscard.Math;
                update = source.max;
                option = kiloes - sequen;
                option = option - config;
                option = option / verify;
                option = option | 0;
                verify = 1;
                option = update.bind(source)(option, verify);
                _closure3_slot9 = option;
                source = _closure1_slot7;
                update = source.roundToNearestPixel;
                record = kiloes - sequen;
                record = record - config;
                cntext = _closure1_slot15;
                verify = option - verify;
                verify = cntext * verify;
                verify = record - verify;
                verify = verify / option;
                ctrled = update.bind(source)(verify);
                report = option;
                foxtra = report;
                _fun00034_ip = 927; continue _fun00033;
 792:
                verify = _closure1_slot26;
                option = {};
                option['windowWidth'] = kiloes;
                option['windowHeight'] = result;
                option['safeAreaLeft'] = sequen;
                option['safeAreaRight'] = config;
                verify = verify.bind(entity)(option);
                update = oscard.Math;
                result = update.max;
                record = oscard.Math;
                source = record.min;
                option = kiloes - sequen;
                option = option - config;
                option = option / verify;
                verify = option | 0;
                option = 4;
                option = source.bind(record)(verify, option);
                verify = 1;
                option = result.bind(update)(option, verify);
                _closure3_slot9 = option;
                update = _closure1_slot7;
                result = update.roundToNearestPixel;
                source = kiloes - sequen;
                source = source - config;
                verify = option - verify;
                verify = golfie * verify;
                verify = source - verify;
                verify = verify / option;
                ctrled = result.bind(update)(verify);
                report = option;
                foxtra = report;
 927:
                verify = offset == vacuum;
                option = undefined;
                if(verify) { _fun00034_ip = 942; continue _fun00033 }
 936:
                option = vacuum.global;
 942:
                source = true;
                if(!(source === option)) { _fun00034_ip = 962; continue _fun00033 }
 948:
                option = vacuum.layouts;
                option = option[yankee];
                var _closure3_slot10 = option;
 962:
                result = oscard.Math;
                verify = result.floor;
                option = zuuluu.items;
                option = option.length;
                option = option / foxtra;
                result = verify.bind(result)(option);
                option = zuuluu.items;
                option = option.length;
                update = option % foxtra;
                option = 1;
                verify = option;
                if(!(update == yankee)) { _fun00034_ip = 1021; continue _fun00033 }
 1019:
                verify = 0;
 1021:
                update = result + verify;
                verify = {};
                result = ctrled;
                if(!(offset == vacuum)) { _fun00034_ip = 1068; continue _fun00033 }
 1034:
                result = ctrled;
                if(!(option === foxtra)) { _fun00034_ip = 1068; continue _fun00033 }
 1041:
                result = ctrled;
                if(!(update > option)) { _fun00034_ip = 1068; continue _fun00033 }
 1048:
                record = output.size;
                result = ctrled;
                if(!(yankee === record)) { _fun00034_ip = 1068; continue _fun00033 }
 1060:
                sequen = kiloes - sequen;
                result = sequen - config;
 1068:
                verify['width'] = result;
                result = ctrled;
                if(!(offset == vacuum)) { _fun00034_ip = 1108; continue _fun00033 }
 1079:
                result = ctrled;
                if(!(option === update)) { _fun00034_ip = 1108; continue _fun00033 }
 1086:
                result = ctrled;
                if(!(foxtra > option)) { _fun00034_ip = 1108; continue _fun00033 }
 1093:
                update = output.size;
                result = ctrled;
                if(!(yankee === update)) { _fun00034_ip = 1108; continue _fun00033 }
 1105:
                result = echoed;
 1108:
                verify['height'] = result;
                echoed = _closure1_slot1;
                update = _closure1_slot2;
                result = 11;
                result = update[result];
                echoed = echoed.bind(entity)(result);
                result = zuuluu.defaultTargetCoords;
                result = echoed.bind(entity)(verify, result);
                if(result) { _fun00034_ip = 1153; continue _fun00033 }
 1147:
                zuuluu['defaultTargetCoords'] = verify;
 1153:
                verify = {};
                result = zuuluu.defaultTargetCoords;
                result = result.width;
                verify['cardWidth'] = result;
                result = zuuluu.defaultTargetCoords;
                result = result.height;
                verify['cardHeight'] = result;
                verify['gutter'] = golfie;
                result = zuuluu.items;
                result = result.length;
                verify['totalItems'] = result;
                verify['windowWidth'] = kiloes;
                var _closure3_slot12 = verify;
                oscard = oscard.Array;
                verify = oscard.prototype;
                verify = Object.create(verify, {constructor: {value: oscard}});
                status = verify;
                target = foxtra;
                oscard = new status[oscard](target, papara);
                verify = oscard instanceof Object ? oscard : verify;
                oscard = verify.fill;
                oscard = oscard.bind(verify)(yankee);
                verify = new Array(1);
                verify[0] = oscard;
                var _closure3_slot13 = verify;
                oscard = -1;
                var _closure3_slot14 = oscard;
                var _closure3_slot15 = oscard;
                var _closure3_slot16 = oscard;
                var _closure3_slot17 = yankee;
                oscard = new Array(0);
                var _closure3_slot18 = oscard;
                kiloes = function(argFoo, argBar, argBaz, argCor) { // Original name: placeItem
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = {};
                        entity = _closure3_slot13;
                        zuuluu['grid'] = entity;
                        entity = _closure3_slot14;
                        zuuluu['lastFullyFilledRow'] = entity;
                        entity = argBaz;
                        zuuluu['width'] = entity;
                        entity = argCor;
                        zuuluu['height'] = entity;
                        entity = _closure3_slot9;
                        zuuluu['columns'] = entity;
                        source = zuuluu.grid;
                        entity = zuuluu.lastFullyFilledRow;
                        golfie = zuuluu.width;
                        update = zuuluu.height;
                        echoed = zuuluu.columns;
                        oscard = global;
                        report = oscard.Math;
                        zuuluu = report.min;
                        result = zuuluu.bind(report)(golfie, echoed);
                        golfie = 1;
                        if(!(golfie === echoed)) { _fun00038_ip = 106; continue _fun00037 }
 103:
                        update = golfie;
 106:
                        output = entity + golfie;
                        entity = undefined;
                        foxtra = -1;
                        romeon = null;
                        report = 0;
                        kiloes = undefined;
                        backup = foxtra;
                        yankee = backup;
                        offset = undefined;
                        verify = undefined;
                        option = undefined;
 139:
                        zuuluu = _closure1_slot23;
                        vacuum = zuuluu.bind(entity)(output, echoed, source);
                        zuuluu = vacuum.length;
                        zuuluu = report < zuuluu;
                        cntext = output;
                        ctrled = 0;
                        sequen = backup;
                        config = yankee;
                        if(!zuuluu) { _fun00038_ip = 222; continue _fun00037 }
 173:
                        zuuluu = vacuum[ctrled];
                        if(!(golfie !== zuuluu)) { _fun00038_ip = 204; continue _fun00037 }
 181:
                        zuuluu = result - golfie;
                        record = ctrled + zuuluu;
                        zuuluu = vacuum.length;
                        sequen = cntext;
                        config = ctrled;
                        if(!(record >= zuuluu)) { _fun00038_ip = 222; continue _fun00037 }
 204:
                        ctrled = ctrled + 1;
                        zuuluu = vacuum.length;
                        sequen = backup;
                        config = yankee;
                        if(ctrled < zuuluu) { _fun00038_ip = 173; continue _fun00037 }
 222:
                        if(!(foxtra !== sequen)) { _fun00038_ip = 230; continue _fun00037 }
 226:
                        if(!(foxtra === config)) { _fun00038_ip = 253; continue _fun00037 }
 230:
                        output = cntext + 1;
                        zuuluu = kiloes;
                        backup = foxtra;
                        yankee = backup;
                        vacuum = verify;
                        ctrled = option;
                        _fun00038_ip = 514; continue _fun00037;
 253:
                        record = update - golfie;
                        papara = sequen + record;
                        sierra = sequen;
                        status = config;
                        target = sierra;
                        record = target;
                        config = status;
                        sequen = record;
                        if(!(sequen <= papara)) { _fun00038_ip = 442; continue _fun00037 }
 286:
                        papara = _closure1_slot23;
                        equals = papara.bind(entity)(target, echoed, source);
                        papara = result - golfie;
                        limora = status + papara;
                        papara = target;
                        variable37 = status;
                        variable36 = sierra;
                        quebec = variable37;
                        whisks = quebec;
                        if(!(whisks <= limora)) { _fun00038_ip = 365; continue _fun00037 }
 324:
                        limora = equals[variable37];
                        variable36 = foxtra;
                        quebec = variable36;
                        whisks = variable37;
                        if(!(report === limora)) { _fun00038_ip = 365; continue _fun00037 }
 341:
                        variable37 = variable37 + 1;
                        limora = result - golfie;
                        limora = status + limora;
                        variable36 = sierra;
                        quebec = status;
                        whisks = variable37;
                        if(whisks <= limora) { _fun00038_ip = 324; continue _fun00037 }
 365:
                        record = variable36;
                        config = quebec;
                        sequen = papara;
                        verify = equals;
                        option = whisks;
                        if(!(foxtra !== quebec)) { _fun00038_ip = 442; continue _fun00037 }
 384:
                        config = quebec;
                        sequen = papara;
                        verify = equals;
                        option = whisks;
                        record = variable36;
                        if(!(foxtra !== record)) { _fun00038_ip = 442; continue _fun00037 }
 403:
                        target = papara + 1;
                        papara = update - golfie;
                        papara = variable36 + papara;
                        sierra = variable36;
                        status = quebec;
                        record = sierra;
                        config = status;
                        verify = equals;
                        option = whisks;
                        sequen = target;
                        if(sequen <= papara) { _fun00038_ip = 286; continue _fun00037 }
 442:
                        if(!(foxtra !== record)) { _fun00038_ip = 450; continue _fun00037 }
 446:
                        if(!(foxtra === config)) { _fun00038_ip = 473; continue _fun00037 }
 450:
                        output = cntext + 1;
                        zuuluu = kiloes;
                        backup = record;
                        yankee = config;
                        offset = sequen;
                        vacuum = verify;
                        ctrled = option;
                        _fun00038_ip = 514; continue _fun00037;
 473:
                        papara = {};
                        papara['startRow'] = record;
                        papara['startCol'] = config;
                        papara['width'] = result;
                        papara['height'] = update;
                        zuuluu = papara;
                        output = cntext;
                        backup = record;
                        yankee = config;
                        offset = sequen;
                        vacuum = verify;
                        ctrled = option;
 514:
                        verify = vacuum;
                        option = ctrled;
                        kiloes = zuuluu;
                        if(romeon == kiloes) { _fun00038_ip = 139; continue _fun00037 }
 530:
                        yankee = _closure3_slot13;
                        offset = _closure3_slot14;
                        output = zuuluu.startRow;
                        sizing = zuuluu.startCol;
                        kiloes = zuuluu.width;
                        backup = zuuluu.height;
                        option = output + backup;
                        verify = output;
                        if(!(verify < option)) { _fun00038_ip = 612; continue _fun00037 }
 571:
                        option = sizing + kiloes;
                        result = sizing;
                        if(!(result < option)) { _fun00038_ip = 601; continue _fun00037 }
 582:
                        option = yankee[verify];
                        option[result] = golfie;
                        result = result + 1;
                        option = sizing + kiloes;
                        if(result < option) { _fun00038_ip = 582; continue _fun00037 }
 601:
                        verify = verify + 1;
                        option = output + backup;
                        if(verify < option) { _fun00038_ip = 571; continue _fun00037 }
 612:
                        verify = offset + golfie;
 616:
                        kiloes = yankee[verify];
                        option = offset;
                        if(!(romeon != kiloes)) { _fun00038_ip = 652; continue _fun00037 }
 627:
                        backup = kiloes.indexOf;
                        backup = backup.bind(kiloes)(report);
                        if(!(foxtra === backup)) { _fun00038_ip = 652; continue _fun00037 }
 641:
                        backup = verify + 1;
                        offset = verify;
                        verify = backup;
                        _fun00038_ip = 616; continue _fun00037;
 652:
                        _closure3_slot14 = option;
                        yankee = oscard.Math;
                        offset = yankee.min;
                        backup = oscard.Math;
                        foxtra = backup.max;
                        verify = _closure3_slot16;
                        kiloes = zuuluu.startCol;
                        option = zuuluu.width;
                        option = option - golfie;
                        option = kiloes + option;
                        verify = foxtra.bind(backup)(verify, option);
                        option = _closure3_slot9;
                        option = offset.bind(yankee)(verify, option);
                        _closure3_slot16 = option;
                        option = _closure3_slot12;
                        verify = _closure3_slot17;
                        offset = {};
                        offset['id'] = tangon;
                        yankee = argBar;
                        offset['type'] = yankee;
                        foxtra = zuuluu.startCol;
                        backup = option.gutter;
                        yankee = option.cardWidth;
                        yankee = backup + yankee;
                        yankee = foxtra * yankee;
                        offset['x'] = yankee;
                        foxtra = zuuluu.startRow;
                        backup = option.gutter;
                        yankee = option.cardHeight;
                        yankee = backup + yankee;
                        yankee = foxtra * yankee;
                        offset['y'] = yankee;
                        foxtra = option.cardWidth;
                        yankee = zuuluu.width;
                        foxtra = foxtra * yankee;
                        yankee = zuuluu.width;
                        backup = yankee - golfie;
                        yankee = option.gutter;
                        yankee = backup * yankee;
                        yankee = foxtra + yankee;
                        offset['width'] = yankee;
                        foxtra = option.cardHeight;
                        yankee = zuuluu.height;
                        foxtra = foxtra * yankee;
                        yankee = zuuluu.height;
                        backup = yankee - golfie;
                        yankee = option.gutter;
                        yankee = backup * yankee;
                        yankee = foxtra + yankee;
                        offset['height'] = yankee;
                        option = option.totalItems;
                        option = option - verify;
                        offset['zIndex'] = option;
                        foxtra = offset.y;
                        option = offset.height;
                        verify = _closure3_slot0;
                        verify = verify.props;
                        verify = verify.chunkSize;
                        yankee = foxtra / verify;
                        backup = yankee | 0;
                        yankee = new Array(2);
                        yankee[0] = backup;
                        option = foxtra + option;
                        option = option / verify;
                        option = option | 0;
                        yankee[1] = option;
                        verify = yankee[report];
                        option = yankee[golfie];
                        if(!(verify <= option)) { _fun00038_ip = 1066; continue _fun00037 }
 968:
                        option = _closure3_slot0;
                        foxtra = option.chunkedCoords;
                        option = foxtra.get;
                        backup = option.bind(foxtra)(verify);
                        option = verify;
                        if(!(romeon == backup)) { _fun00038_ip = 1045; continue _fun00037 }
 995:
                        foxtra = oscard.Set;
                        kiloes = foxtra.prototype;
                        kiloes = Object.create(kiloes, {constructor: {value: foxtra}});
                        variable42 = kiloes;
                        foxtra = new variable42[foxtra](variable41);
                        foxtra = foxtra instanceof Object ? foxtra : kiloes;
                        kiloes = _closure3_slot0;
                        sizing = kiloes.chunkedCoords;
                        kiloes = sizing.set;
                        kiloes = kiloes.bind(sizing)(option, foxtra);
                        backup = foxtra;
 1045:
                        foxtra = backup.add;
                        foxtra = foxtra.bind(backup)(offset);
                        verify = option + 1;
                        option = yankee[golfie];
                        if(verify <= option) { _fun00038_ip = 968; continue _fun00037 }
 1066:
                        option = _closure3_slot0;
                        verify = option.cardCoords;
                        option = verify.set;
                        option = option.bind(verify)(tangon, offset);
                        offset = oscard.Math;
                        verify = offset.max;
                        option = _closure3_slot15;
                        yankee = zuuluu.startRow;
                        oscard = zuuluu.height;
                        oscard = yankee + oscard;
                        oscard = oscard - golfie;
                        option = verify.bind(offset)(option, oscard);
                        _closure3_slot15 = option;
                        oscard = _closure3_slot14;
                        if(!(option !== oscard)) { _fun00038_ip = 1162; continue _fun00037 }
 1139:
                        oscard = zuuluu.height;
                        if(!(golfie === oscard)) { _fun00038_ip = 1162; continue _fun00037 }
 1148:
                        oscard = zuuluu.startRow;
                        zuuluu = _closure3_slot15;
                        if(!(oscard !== zuuluu)) { _fun00038_ip = 1174; continue _fun00037 }
 1162:
                        zuuluu = _closure3_slot18;
                        zuuluu['length'] = report;
                        _fun00038_ip = 1188; continue _fun00037;
 1174:
                        zuuluu = _closure3_slot18;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 1188:
                        return entity;
                    }
                };
                var _closure3_slot19 = kiloes;
                kiloes = zuuluu.items;
                kiloes = kiloes.length;
                kiloes = option === kiloes;
                var _closure3_slot20 = kiloes;
                kiloes = new Array(4);
                kiloes[0] = output;
                kiloes[1] = sizing;
                kiloes[2] = backup;
                kiloes[3] = romeon;
                romeon = kiloes.length;
                romeon = yankee < romeon;
                backup = 0;
                if(!romeon) { _fun00034_ip = 1432; continue _fun00033 }
 1363:
                result = function(argFoo) { // Original name: _loop2
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon.type;
                        entity = 'custom';
                        if(!(entity !== michal)) { _fun00040_ip = 94; continue _fun00039 }
 16:
                        michal = {};
                        michal['item'] = tangon;
                        option = _closure1_slot25;
                        oscard = _closure3_slot2;
                        report = _closure3_slot3;
                        golfie = oscard > report;
                        oscard = _closure3_slot10;
                        report = null;
                        if(!(report == oscard)) { _fun00040_ip = 60; continue _fun00039 }
 54:
                        oscard = _closure1_slot19;
                        _fun00040_ip = 64; continue _fun00039;
 60:
                        oscard = _closure3_slot10;
 64:
                        offset = _closure3_slot20;
                        backup = undefined;
                        foxtra = 'square';
                        romeon = golfie;
                        yankee = oscard;
                        entity = backup[option](foxtra, romeon, yankee, offset, verify);
                        michal['dimensions'] = entity;
                        _fun00040_ip = 261; continue _fun00039;
 94:
                        report = _closure3_slot10;
                        entity = null;
                        if(!(entity == report)) { _fun00040_ip = 140; continue _fun00039 }
 107:
                        report = _closure3_slot11;
                        report = entity == report;
                        option = undefined;
                        if(report) { _fun00040_ip = 138; continue _fun00039 }
 120:
                        report = _closure3_slot11;
                        oscard = report.layouts;
                        report = _closure3_slot17;
                        option = oscard[report];
 138:
                        _fun00040_ip = 144; continue _fun00039;
 140:
                        option = _closure3_slot10;
 144:
                        if(!(entity == option)) { _fun00040_ip = 155; continue _fun00039 }
 148:
                        option = _closure1_slot19;
 155:
                        entity = tangon.forceSquare;
                        golfie = 'square';
                        if(entity) { _fun00040_ip = 207; continue _fun00039 }
 168:
                        oscard = _closure1_slot24;
                        verify = _closure3_slot1;
                        report = verify.getTargetDimensions;
                        entity = tangon.item;
                        entity = entity.id;
                        report = report.bind(verify)(entity);
                        entity = undefined;
                        golfie = oscard.bind(entity)(report);
 207:
                        entity = {};
                        tangon = tangon.item;
                        entity['item'] = tangon;
                        oscard = _closure1_slot25;
                        report = _closure3_slot2;
                        tangon = _closure3_slot3;
                        romeon = report > tangon;
                        offset = _closure3_slot20;
                        backup = undefined;
                        foxtra = golfie;
                        yankee = option;
                        zuuluu = backup[oscard](foxtra, romeon, yankee, offset, verify);
                        entity['dimensions'] = zuuluu;
                        michal = entity;
 261:
                        entity = michal.item;
                        michal = michal.dimensions;
                        yankee = michal.width;
                        offset = michal.height;
                        foxtra = entity.id;
                        tangon = _closure3_slot19;
                        romeon = entity.type;
                        entity = undefined;
                        backup = undefined;
                        michal = backup[tangon](foxtra, romeon, yankee, offset, verify);
                        michal = _closure3_slot17;
                        michal = michal + 1;
                        _closure3_slot17 = michal;
                        return entity;
                    }
                };
                sizing = _closure1_slot21;
                romeon = kiloes[backup];
                output = sizing.bind(entity)(romeon);
                sizing = output.bind(entity)();
                romeon = sizing.done;
                if(romeon) { _fun00034_ip = 1420; continue _fun00033 }
 1395:
                romeon = sizing.value;
                romeon = result.bind(entity)(romeon);
                echoed = output.bind(entity)();
                romeon = echoed.done;
                sizing = echoed;
                if(!romeon) { _fun00034_ip = 1395; continue _fun00033 }
 1420:
                backup = backup + 1;
                romeon = kiloes.length;
                if(backup < romeon) { _fun00034_ip = 1363; continue _fun00033 }
 1432:
                backup = _closure3_slot14;
                romeon = _closure3_slot15;
                if(!(backup !== romeon)) { _fun00034_ip = 1702; continue _fun00033 }
 1447:
                romeon = _closure3_slot15;
                kiloes = verify[romeon];
                romeon = kiloes[yankee];
                output = yankee === romeon;
                backup = _closure1_slot21;
                update = backup.bind(entity)(kiloes);
                backup = update.bind(entity)();
                kiloes = backup.done;
                result = backup;
                echoed = false;
                sizing = 0;
                backup = output;
                romeon = 0;
                if(kiloes) { _fun00034_ip = 1571; continue _fun00033 }
 1496:
                kiloes = result.value;
                ctrled = sizing + kiloes;
                sequen = echoed;
                vacuum = output;
                if(vacuum) { _fun00034_ip = 1541; continue _fun00033 }
 1514:
                config = option === kiloes;
                if(!config) { _fun00034_ip = 1524; continue _fun00033 }
 1521:
                config = echoed;
 1524:
                if(!config) { _fun00034_ip = 1529; continue _fun00033 }
 1527:
                output = true;
 1529:
                if(!(yankee === kiloes)) { _fun00034_ip = 1535; continue _fun00033 }
 1533:
                echoed = true;
 1535:
                sequen = echoed;
                vacuum = output;
 1541:
                config = update.bind(entity)();
                kiloes = config.done;
                output = vacuum;
                echoed = sequen;
                result = config;
                sizing = ctrled;
                backup = output;
                romeon = sizing;
                if(!kiloes) { _fun00034_ip = 1496; continue _fun00033 }
 1571:
                if(backup) { _fun00034_ip = 1702; continue _fun00033 }
 1577:
                romeon = foxtra - romeon;
                backup = _closure1_slot7;
                foxtra = backup.roundToNearestPixel;
                kiloes = zuuluu.defaultTargetCoords;
                kiloes = kiloes.width;
                kiloes = romeon * kiloes;
                romeon = romeon * golfie;
                kiloes = kiloes + romeon;
                romeon = 2;
                romeon = kiloes / romeon;
                foxtra = foxtra.bind(backup)(romeon);
                michal = _closure1_slot21;
                romeon = michal.bind(entity)(oscard);
                oscard = romeon.bind(entity)();
                michal = oscard.done;
                if(michal) { _fun00034_ip = 1702; continue _fun00033 }
 1647:
                kiloes = oscard.value;
                backup = zuuluu.cardCoords;
                michal = backup.get;
                backup = michal.bind(backup)(kiloes);
                if(!(offset != backup)) { _fun00034_ip = 1687; continue _fun00033 }
 1672:
                michal = backup.x;
                michal = michal + foxtra;
                backup['x'] = michal;
 1687:
                backup = romeon.bind(entity)();
                michal = backup.done;
                oscard = backup;
                if(!michal) { _fun00034_ip = 1647; continue _fun00033 }
 1702:
                michal = {};
                oscard = zuuluu.items;
                oscard = oscard.length;
                if(!(yankee !== oscard)) { _fun00034_ip = 1767; continue _fun00033 }
 1719:
                oscard = _closure3_slot16;
                oscard = oscard + 1;
                _closure3_slot16 = oscard;
                oscard = zuuluu.defaultTargetCoords;
                romeon = oscard.width;
                oscard = _closure3_slot16;
                oscard = romeon * oscard;
                tangon = _closure3_slot16;
                tangon = tangon - option;
                tangon = tangon * golfie;
                tangon = oscard + tangon;
                _fun00034_ip = 1794; continue _fun00033;
 1767:
                oscard = zuuluu.defaultTargetCoords;
                oscard = oscard.width;
                oscard = oscard * report;
                report = report - option;
                report = report * golfie;
                tangon = oscard + report;
 1794:
                michal['width'] = tangon;
                tangon = zuuluu.items;
                report = tangon.length;
                tangon = 0;
                if(!(tangon !== report)) { _fun00034_ip = 1899; continue _fun00033 }
 1815:
                report = verify.length;
                oscard = report - option;
                report = oscard;
                if(!(report >= yankee)) { _fun00034_ip = 1869; continue _fun00033 }
 1831:
                foxtra = verify[oscard];
                report = oscard;
                if(!(offset != foxtra)) { _fun00034_ip = 1869; continue _fun00033 }
 1842:
                romeon = foxtra.indexOf;
                romeon = romeon.bind(foxtra)(option);
                report = oscard;
                if(!(!(romeon >= yankee))) { _fun00034_ip = 1869; continue _fun00033 }
 1859:
                oscard = oscard - 1;
                report = oscard;
                if(report >= yankee) { _fun00034_ip = 1831; continue _fun00033 }
 1869:
                report = report + 1;
                oscard = zuuluu.defaultTargetCoords;
                oscard = oscard.height;
                oscard = report * oscard;
                report = report - option;
                report = golfie * report;
                tangon = oscard + report;
 1899:
                michal['height'] = tangon;
                zuuluu['contentDimensions'] = michal;
                michal = false;
                zuuluu['dirty'] = michal;
                michal = zuuluu.layoutKey;
                michal = michal + 1;
                zuuluu['layoutKey'] = michal;
 1932:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'subscribeFromItem';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: subscribeFromItem
            tangon = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            var _closure3_slot1 = tangon;
            zuuluu = michal.layoutCallbacks;
            michal = zuuluu.add;
            michal = michal.bind(zuuluu)(tangon);
            entity = function() {
                michal = _closure3_slot0;
                zuuluu = michal.layoutCallbacks;
                michal = zuuluu.delete;
                entity = _closure3_slot1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity['value'] = oscard;
        michal[16] = entity;
        entity = {};
        oscard = 'subscribeToManager';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: subscribeToManager
            tangon = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            var _closure3_slot1 = tangon;
            zuuluu = michal.managerSubscriptions;
            michal = zuuluu.add;
            michal = michal.bind(zuuluu)(tangon);
            entity = function() {
                michal = _closure3_slot0;
                zuuluu = michal.managerSubscriptions;
                michal = zuuluu.delete;
                entity = _closure3_slot1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity['value'] = oscard;
        michal[17] = entity;
        entity = {};
        oscard = 'emitLayoutChanges';
        entity['key'] = oscard;
        oscard = function() { // Original name: emitLayoutChanges
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                michal = zuuluu.emitItemChanges;
                if(!michal) { _fun00042_ip = 24; continue _fun00041 }
 18:
                michal = zuuluu.mounted;
 24:
                if(!michal) { _fun00042_ip = 78; continue _fun00041 }
 27:
                michal = false;
                zuuluu['emitItemChanges'] = michal;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 15;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.batchUpdates;
                entity = function() {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        report = _closure1_slot21;
                        entity = _closure3_slot0;
                        tangon = entity.managerSubscriptions;
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        report = oscard.bind(entity)();
                        tangon = report.done;
                        if(tangon) { _fun00044_ip = 63; continue _fun00043 }
 39:
                        tangon = report.value;
                        tangon = tangon.bind(entity)();
                        golfie = oscard.bind(entity)();
                        tangon = golfie.done;
                        report = golfie;
                        if(!tangon) { _fun00044_ip = 39; continue _fun00043 }
 63:
                        zuuluu = _closure1_slot21;
                        michal = _closure3_slot0;
                        michal = michal.layoutCallbacks;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.bind(entity)();
                        michal = zuuluu.done;
                        if(michal) { _fun00044_ip = 118; continue _fun00043 }
 94:
                        michal = zuuluu.value;
                        michal = michal.bind(entity)();
                        report = tangon.bind(entity)();
                        michal = report.done;
                        zuuluu = report;
                        if(!michal) { _fun00044_ip = 94; continue _fun00043 }
 118:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[18] = entity;
        entity = {};
        oscard = 'deferredLayoutChange';
        entity['key'] = oscard;
        report = function() { // Original name: deferredLayoutChange
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal.emitItemChanges;
                if(!zuuluu) { _fun00046_ip = 24; continue _fun00045 }
 18:
                zuuluu = michal.mounted;
 24:
                if(!zuuluu) { _fun00046_ip = 59; continue _fun00045 }
 27:
                zuuluu = global;
                report = zuuluu.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    entity = global;
                    tangon = entity.clearTimeout;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.emitTimeout;
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = -1;
                    zuuluu['emitTimeout'] = michal;
                    michal = zuuluu.emitLayoutChanges;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                entity = 1;
                entity = report.bind(tangon)(zuuluu, entity);
                michal['emitTimeout'] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[19] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useCardLayoutCoordsSubscription
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            var _closure2_slot0 = golfie;
            var _closure2_slot1 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.useSharedValue;
            entity = {};
            option = oscard.getCardCoords;
            option = option.bind(oscard)(golfie);
            verify = null;
            if(!(verify == option)) { _fun00048_ip = 69; continue _fun00047 }
 65:
            option = _closure1_slot17;
 69:
            yankee = entity;
            offset = option;
            option = copyDataProperties(yankee, offset);
            entity = tangon.bind(report)(entity);
            var _closure2_slot2 = entity;
            report = _closure1_slot6;
            tangon = report.useLayoutEffect;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            zuuluu[2] = entity;
            michal = function() {
                zuuluu = function() { // Original name: updateSharedValues
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.getCardCoords;
                        michal = _closure2_slot0;
                        tangon = zuuluu.bind(tangon)(michal);
                        michal = null;
                        if(!(michal != tangon)) { _fun00050_ip = 63; continue _fun00049 }
 28:
                        report = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 10;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        michal = report.bind(zuuluu)(michal);
                        entity = _closure2_slot2;
                        entity = michal.bind(zuuluu)(entity, tangon);
 63:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = undefined;
                entity = zuuluu.bind(entity)();
                michal = _closure2_slot1;
                entity = michal.subscribeFromItem;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useCardLayoutCoordsSubscription'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useTargetDimensionsSubscription
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 9;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = report.useSharedValue;
        entity = {};
        option = oscard.getTargetDimensions;
        verify = option.bind(oscard)(golfie);
        offset = entity;
        option = copyDataProperties(offset, verify);
        entity = tangon.bind(report)(entity);
        var _closure2_slot2 = entity;
        report = _closure1_slot6;
        tangon = report.useLayoutEffect;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        zuuluu[2] = entity;
        michal = function() {
            zuuluu = function() { // Original name: updateSharedValues
                tangon = _closure2_slot1;
                zuuluu = tangon.getTargetDimensions;
                entity = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(entity);
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                michal = _closure2_slot2;
                michal = zuuluu.bind(entity)(michal, tangon);
                return entity;
            };
            entity = undefined;
            entity = zuuluu.bind(entity)();
            michal = _closure2_slot1;
            entity = michal.subscribeFromItem;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useTargetDimensionsSubscription'] = tangon;
    michal = function(argFoo) { // Original name: useManagerSubscription
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot6;
        report = tangon.useState;
        zuuluu = oscard.getLayoutKey;
        zuuluu = zuuluu.bind(oscard)();
        oscard = report.bind(tangon)(zuuluu);
        report = _closure1_slot5;
        zuuluu = undefined;
        entity = 2;
        report = report.bind(zuuluu)(oscard, entity);
        entity = 0;
        entity = report[entity];
        zuuluu = 1;
        zuuluu = report[zuuluu];
        var _closure2_slot1 = zuuluu;
        zuuluu = tangon.useLayoutEffect;
        michal = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.subscribeToManager;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                entity = michal.getLayoutKey;
                michal = entity.bind(michal)();
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['useManagerSubscription'] = michal;
    return entity;
})();