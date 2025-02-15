// app/modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot22;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot22;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getOrCreateRow
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argBaz;
            entity = argFoo;
            entity = tango[entity];
            mike = null;
            if(!(mike == entity)) { _fun00008_ip = 73; continue _fun00007 }
 16:
            mike = global;
            report = mike.Array;
            mike = report.prototype;
            zulu = Object.create(mike, {constructor: {value: report}});
            oscar = argBar;
            golf = zulu;
            mike = new golf[report](oscar, report);
            report = mike instanceof Object ? mike : zulu;
            zulu = report.fill;
            mike = 0;
            mike = zulu.bind(report)(mike);
            zulu = tango.push;
            zulu = zulu.bind(tango)(mike);
            entity = mike;
 73:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: getTargetAspectRatio
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            mike = entity.width;
            entity = entity.height;
            tango = mike / entity;
            entity = 'landscape';
            mike = 1.3;
            if(!(!(tango >= mike))) { _fun00010_ip = 62; continue _fun00009 }
 35:
            mike = 'square';
            zulu = 0.8;
            if(!(tango <= zulu)) { _fun00010_ip = 59; continue _fun00009 }
 53:
            mike = 'portrait';
 59:
            entity = mike;
 62:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getGridDimensionsFromAspectRatio
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            mike = argBar;
            entity = argBaz;
            zulu = argCorge;
            tango = 'portrait';
            if(!(tango !== report)) { _fun00012_ip = 162; continue _fun00011 }
 25:
            tango = 'landscape';
            if(!(tango !== report)) { _fun00012_ip = 82; continue _fun00011 }
 33:
            tango = 'square';
            if(!(tango !== report)) { _fun00012_ip = 45; continue _fun00011 }
 41:
            tango = undefined;
            return tango;
 45:
            tango = entity.enlargeSquare;
            if(tango) { _fun00012_ip = 66; continue _fun00011 }
 54:
            tango = {'width': 1, 'height': 1};
            _fun00012_ip = 80; continue _fun00011;
 66:
            tango = {'width': 2, 'height': 2};
 80:
            return tango;
 82:
            tango = entity.fillAspectRatio;
            if(tango) { _fun00012_ip = 107; continue _fun00011 }
 91:
            tango = {'width': 2, 'height': 1};
            _fun00012_ip = 160; continue _fun00011;
 107:
            if(mike) { _fun00012_ip = 126; continue _fun00011 }
 110:
            report = {'width': 2, 'height': 2};
            _fun00012_ip = 157; continue _fun00011;
 126:
            oscar = {};
            options = 0;
            if(!zulu) { _fun00012_ip = 136; continue _fun00011 }
 133:
            options = 1;
 136:
            golf = 3;
            golf = golf + options;
            oscar['width'] = golf;
            golf = 2;
            oscar['height'] = golf;
            report = oscar;
 157:
            tango = report;
 160:
            return tango;
 162:
            entity = entity.fillAspectRatio;
            if(entity) { _fun00012_ip = 183; continue _fun00011 }
 171:
            entity = {'width': 1, 'height': 2};
            _fun00012_ip = 233; continue _fun00011;
 183:
            if(mike) { _fun00012_ip = 216; continue _fun00011 }
 186:
            mike = {};
            tango = 2;
            mike['width'] = tango;
            tango = 0;
            if(!zulu) { _fun00012_ip = 203; continue _fun00011 }
 200:
            tango = 1;
 203:
            zulu = 3;
            zulu = zulu + tango;
            mike['height'] = zulu;
            _fun00012_ip = 230; continue _fun00011;
 216:
            mike = {'width': 2, 'height': 2};
 230:
            entity = mike;
 233:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: getTargetCardSize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            options = mike.windowWidth;
            entity = mike.windowHeight;
            oscar = mike.safeAreaLeft;
            golf = mike.safeAreaRight;
            entity = options > entity;
            report = 3;
            if(!entity) { _fun00014_ip = 40; continue _fun00013 }
 37:
            report = 4;
 40:
            entity = global;
            tango = entity.Math;
            zulu = tango.max;
            mike = _closure1_slot10;
            oscar = options - oscar;
            oscar = oscar - golf;
            golf = _closure1_slot15;
            entity = 1;
            entity = report - entity;
            entity = golf * entity;
            entity = oscar - entity;
            entity = entity / report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    options = global;
    yankee = options.Object;
    offset = yankee.defineProperty;
    report = {};
    tango = true;
    report['value'] = tango;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    offset = golf[report];
    report = argCorge;
    report = report.bind(entity)(offset);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.PixelRatio;
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
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
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.EDGE_GUTTER;
    var _closure1_slot14 = offset;
    report = report.CALL_TILE_GUTTER;
    var _closure1_slot15 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ParticipantTypes;
    var _closure1_slot16 = report;
    report = {'id': 'invalid', 'type': null, 'x': 0, 'y': 0, 'width': 0, 'height': 0, 'zIndex': 0};
    verify = verify.PARTICIPANT;
    report['type'] = verify;
    var _closure1_slot17 = report;
    report = options.Set;
    verify = report.prototype;
    verify = Object.create(verify, {constructor: {value: report}});
    kilo = verify;
    report = new kilo[report](backup);
    report = report instanceof Object ? report : verify;
    var _closure1_slot18 = report;
    report = {'enlargeSquare': false, 'fillAspectRatio': false};
    var _closure1_slot19 = report;
    report = {};
    yankee = options.Set;
    verify = yankee.prototype;
    offset = Object.create(verify, {constructor: {value: yankee}});
    backup = ['1,camera', '2,camera', '2,camera,camera'];
    kilo = offset;
    verify = new kilo[yankee](backup, foxtrot);
    verify = verify instanceof Object ? verify : offset;
    report['match'] = verify;
    verify = new Array(1);
    offset = {'enlargeSquare': true, 'fillAspectRatio': false};
    verify[0] = offset;
    report['layouts'] = verify;
    report['global'] = tango;
    tango = new Array(2);
    tango[0] = report;
    report = {};
    offset = options.Set;
    options = offset.prototype;
    verify = Object.create(options, {constructor: {value: offset}});
    backup = ['1,stream', '2,stream', '3,stream', '2,stream,camera', '3,stream,camera', '3,stream,camera,camera', '3,camera', '3,camera,stream'];
    kilo = verify;
    options = new kilo[offset](backup, foxtrot);
    options = options instanceof Object ? options : verify;
    report['match'] = options;
    options = new Array(3);
    verify = {'enlargeSquare': true, 'fillAspectRatio': true};
    options[0] = verify;
    verify = {'enlargeSquare': false, 'fillAspectRatio': false};
    options[1] = verify;
    verify = {'enlargeSquare': false, 'fillAspectRatio': false};
    options[2] = verify;
    report['layouts'] = options;
    tango[1] = report;
    var _closure1_slot20 = tango;
    tango = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: VoicePanelCardLayoutManager
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            tango = true;
            zulu['dirty'] = tango;
            report = global;
            mike = report.Map;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            offset = oscar;
            mike = new offset[mike](verify);
            mike = mike instanceof Object ? mike : oscar;
            zulu['targetDimensions'] = mike;
            mike = report.Map;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            offset = oscar;
            mike = new offset[mike](verify);
            mike = mike instanceof Object ? mike : oscar;
            zulu['cardCoords'] = mike;
            mike = report.Map;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            offset = oscar;
            mike = new offset[mike](verify);
            mike = mike instanceof Object ? mike : oscar;
            zulu['chunkedCoords'] = mike;
            mike = 0;
            oscar = {'width': 0, 'height': 0};
            zulu['contentDimensions'] = oscar;
            oscar = report.Set;
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            offset = golf;
            oscar = new offset[oscar](verify);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['layoutCallbacks'] = oscar;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            offset = oscar;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscar;
            zulu['managerSubscriptions'] = report;
            report = new Array(0);
            zulu['items'] = report;
            zulu['emitItemChanges'] = tango;
            tango = false;
            zulu['mounted'] = tango;
            zulu['layoutKey'] = mike;
            mike = -1;
            zulu['lastEmittedLayoutKey'] = mike;
            zulu['emitTimeout'] = mike;
            mike = {'windowWidth': 0, 'windowHeight': 0, 'chunkSize': 0, 'safeAreaLeft': 0, 'safeAreaRight': 0, 'safeAreaTop': 0, 'safeAreaBottom': 0, 'gutter': 0, 'controlBarSize': 0};
            zulu['props'] = mike;
            mike = {'width': 0, 'height': 0};
            zulu['defaultTargetCoords'] = mike;
            mike = argFoo;
            zulu['channelId'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'setDirty';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                mike = this;
                if(!entity) { _fun00016_ip = 18; continue _fun00015 }
 9:
                zulu = mike.dirty;
                entity = !zulu;
 18:
                if(!entity) { _fun00016_ip = 35; continue _fun00015 }
 21:
                entity = true;
                mike['dirty'] = entity;
                mike['emitItemChanges'] = entity;
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(20);
        mike[0] = entity;
        entity = {};
        oscar = 'requiresEmit';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = this;
                zulu = entity.lastEmittedLayoutKey;
                mike = entity.layoutKey;
                mike = zulu !== mike;
                zulu = entity.layoutKey;
                entity['lastEmittedLayoutKey'] = zulu;
                entity = entity.emitItemChanges;
                if(entity) { _fun00018_ip = 43; continue _fun00017 }
 40:
                entity = mike;
 43:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleLayoutEffect';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = true;
            mike['mounted'] = entity;
            entity = mike.emitLayoutChanges;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'cleanUp';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = false;
            entity = this;
            entity['mounted'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'updateState';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                mike = this;
                entity = tango.windowWidth;
                options = tango.windowHeight;
                foxtrot = tango.safeAreaLeft;
                romeo = tango.safeAreaRight;
                oscar = tango.safeAreaTop;
                offset = tango.safeAreaBottom;
                report = tango.controlBarSize;
                tango = {};
                tango['windowHeight'] = options;
                tango['windowWidth'] = entity;
                golf = _closure1_slot13;
                golf = options / golf;
                tango['chunkSize'] = golf;
                golf = global;
                yankee = golf.Math;
                options = yankee.max;
                verify = _closure1_slot14;
                options = options.bind(yankee)(foxtrot, verify);
                tango['safeAreaLeft'] = options;
                yankee = golf.Math;
                options = yankee.max;
                options = options.bind(yankee)(romeo, verify);
                tango['safeAreaRight'] = options;
                options = golf.Math;
                golf = options.max;
                golf = golf.bind(options)(offset, verify);
                tango['safeAreaBottom'] = golf;
                tango['safeAreaTop'] = oscar;
                oscar = _closure1_slot15;
                tango['gutter'] = oscar;
                tango['controlBarSize'] = report;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                entity = 11;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = mike.props;
                report = oscar.bind(entity)(tango, report);
                if(report) { _fun00020_ip = 225; continue _fun00019 }
 206:
                mike['props'] = tango;
                report = mike.setDirty;
                tango = true;
                tango = report.bind(mike)(tango);
 225:
                report = mike.setDirty;
                oscar = mike.items;
                tango = function(argFoo, argBar) { // Original name: areArraysShallowEqual
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tango = argFoo;
                        entity = argBar;
                        var _closure4_slot0 = entity;
                        zulu = tango.length;
                        entity = entity.length;
                        entity = zulu === entity;
                        if(!entity) { _fun00022_ip = 50; continue _fun00021 }
 29:
                        zulu = tango.some;
                        mike = function(argFoo, argBar) {
                            mike = _closure4_slot0;
                            entity = argBar;
                            mike = mike[entity];
                            entity = argFoo;
                            entity = mike !== entity;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        entity = !mike;
 50:
                        return entity;
                    }
                };
                tango = tango.bind(entity)(zulu, oscar);
                tango = !tango;
                tango = report.bind(mike)(tango);
                mike['items'] = zulu;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getLayoutKey';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.layoutKey;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getChunk';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = this;
                zulu = entity.chunkedCoords;
                mike = zulu.get;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                mike = null;
                if(!(mike == entity)) { _fun00024_ip = 35; continue _fun00023 }
 28:
                entity = _closure1_slot18;
 35:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getContentDimensions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.computeCardsLayout;
            mike = mike.bind(entity)();
            entity = entity.contentDimensions;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getCardCoords';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.computeCardsLayout;
            mike = mike.bind(entity)();
            zulu = entity.cardCoords;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getCardCoordsMap';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.computeCardsLayout;
            mike = mike.bind(entity)();
            entity = entity.cardCoords;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getDefaultTargetDimensions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.defaultTargetCoords;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'getTargetDimensions';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = argFoo;
                mike = this;
                report = null;
                if(!(report != tango)) { _fun00026_ip = 70; continue _fun00025 }
 12:
                oscar = _closure1_slot11;
                entity = oscar.has;
                entity = entity.bind(oscar)(tango);
                if(entity) { _fun00026_ip = 60; continue _fun00025 }
 32:
                oscar = mike.targetDimensions;
                entity = oscar.get;
                entity = entity.bind(oscar)(tango);
                if(!(report == entity)) { _fun00026_ip = 58; continue _fun00025 }
 52:
                entity = mike.defaultTargetCoords;
 58:
                _fun00026_ip = 68; continue _fun00025;
 60:
                zulu = _closure1_slot12;
                entity = zulu[tango];
 68:
                _fun00026_ip = 76; continue _fun00025;
 70:
                entity = mike.defaultTargetCoords;
 76:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'setTargetDimensions';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = argFoo;
                golf = argBar;
                oscar = argBaz;
                mike = this;
                entity = mike.getTargetDimensions;
                zulu = entity.bind(mike)(report);
                entity = zulu.width;
                entity = entity === golf;
                if(!entity) { _fun00028_ip = 44; continue _fun00027 }
 35:
                zulu = zulu.height;
                entity = zulu === oscar;
 44:
                if(entity) { _fun00028_ip = 97; continue _fun00027 }
 47:
                tango = mike.targetDimensions;
                zulu = tango.set;
                entity = {};
                entity['width'] = golf;
                entity['height'] = oscar;
                entity = zulu.bind(tango)(report, entity);
                zulu = mike.setDirty;
                entity = true;
                entity = zulu.bind(mike)(entity);
                entity = mike.deferredLayoutChange;
                entity = entity.bind(mike)();
 97:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'resetTargetDimensions';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = mike.targetDimensions;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(!entity) { _fun00030_ip = 64; continue _fun00029 }
 25:
                zulu = mike.targetDimensions;
                entity = zulu.delete;
                entity = entity.bind(zulu)(tango);
                zulu = mike.setDirty;
                entity = true;
                entity = zulu.bind(mike)(entity);
                entity = mike.deferredLayoutChange;
                entity = entity.bind(mike)();
 64:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'setTargetAspectRatio';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                mike = this;
                entity = 'portrait';
                if(!(entity !== zulu)) { _fun00032_ip = 65; continue _fun00031 }
 19:
                entity = 'landscape';
                if(!(entity !== zulu)) { _fun00032_ip = 49; continue _fun00031 }
 27:
                entity = 'square';
                tango = undefined;
                if(!(entity === zulu)) { _fun00032_ip = 75; continue _fun00031 }
 37:
                tango = {'width': 1, 'height': 1};
                _fun00032_ip = 75; continue _fun00031;
 49:
                tango = {'width': 2, 'height': 1};
                _fun00032_ip = 75; continue _fun00031;
 65:
                tango = {'width': 1, 'height': 2};
 75:
                entity = mike.getTargetDimensions;
                zulu = entity.bind(mike)(report);
                oscar = zulu.width;
                entity = tango.width;
                entity = oscar === entity;
                if(!entity) { _fun00032_ip = 117; continue _fun00031 }
 103:
                oscar = zulu.height;
                zulu = tango.height;
                entity = oscar === zulu;
 117:
                if(entity) { _fun00032_ip = 160; continue _fun00031 }
 120:
                zulu = mike.targetDimensions;
                entity = zulu.set;
                entity = entity.bind(zulu)(report, tango);
                zulu = mike.setDirty;
                entity = true;
                entity = zulu.bind(mike)(entity);
                entity = mike.deferredLayoutChange;
                entity = entity.bind(mike)();
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'computeCardsLayout';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = zulu;
                mike = zulu.dirty;
                entity = undefined;
                if(!mike) { _fun00034_ip = 1939; continue _fun00033 }
 27:
                oscar = global;
                mike = oscar.Map;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                status = report;
                mike = new status[mike](target);
                mike = mike instanceof Object ? mike : report;
                zulu['cardCoords'] = mike;
                mike = oscar.Map;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                status = report;
                mike = new status[mike](target);
                mike = mike instanceof Object ? mike : report;
                zulu['chunkedCoords'] = mike;
                mike = zulu.props;
                kilo = mike.windowWidth;
                var _closure3_slot2 = kilo;
                result = mike.windowHeight;
                var _closure3_slot3 = result;
                sequence = mike.safeAreaLeft;
                config = mike.safeAreaRight;
                source = mike.safeAreaTop;
                foxtrot = mike.safeAreaBottom;
                golf = mike.gutter;
                echo = mike.controlBarSize;
                mike = oscar.Set;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                status = report;
                mike = new status[mike](target);
                output = mike instanceof Object ? mike : report;
                var _closure3_slot4 = output;
                mike = oscar.Set;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                status = report;
                mike = new status[mike](target);
                sizing = mike instanceof Object ? mike : report;
                var _closure3_slot5 = sizing;
                mike = oscar.Set;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                status = report;
                mike = new status[mike](target);
                backup = mike instanceof Object ? mike : report;
                var _closure3_slot6 = backup;
                options = oscar.Set;
                target = zulu.items;
                report = options.prototype;
                report = Object.create(report, {constructor: {value: options}});
                status = report;
                mike = new status[options](target, papa);
                romeo = mike instanceof Object ? mike : report;
                var _closure3_slot7 = romeo;
                mike = zulu.items;
                options = mike.length;
                mike = oscar.HermesInternal;
                report = mike.concat;
                mike = '';
                mike = report.bind(mike)(options);
                var _closure3_slot8 = mike;
                yankee = 0;
                var _closure3_slot9 = yankee;
                offset = function(argFoo) { // Original name: _loop
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zulu = argFoo;
                        golf = _closure1_slot8;
                        oscar = golf.getParticipant;
                        tango = _closure3_slot1;
                        report = tango.channelId;
                        tango = zulu.id;
                        oscar = oscar.bind(golf)(report, tango);
                        report = zulu.type;
                        tango = _closure1_slot9;
                        tango = tango.CTA;
                        if(!(report !== tango)) { _fun00036_ip = 176; continue _fun00035 }
 58:
                        tango = null;
                        tango = tango == oscar;
                        golf = undefined;
                        report = undefined;
                        if(tango) { _fun00036_ip = 174; continue _fun00035 }
 71:
                        options = oscar.type;
                        tango = _closure1_slot16;
                        tango = tango.USER;
                        if(!(options === tango)) { _fun00036_ip = 120; continue _fun00035 }
 90:
                        options = _closure1_slot1;
                        verify = _closure1_slot2;
                        tango = 12;
                        tango = verify[tango];
                        tango = options.bind(golf)(tango);
                        tango = tango.bind(golf)(oscar);
                        report = undefined;
                        if(!tango) { _fun00036_ip = 174; continue _fun00035 }
 120:
                        golf = oscar.type;
                        tango = _closure1_slot16;
                        tango = tango.USER;
                        if(!(golf !== tango)) { _fun00036_ip = 161; continue _fun00035 }
 139:
                        options = _closure3_slot1;
                        golf = options.getTargetDimensions;
                        tango = zulu.id;
                        tango = golf.bind(options)(tango);
                        _fun00036_ip = 171; continue _fun00035;
 161:
                        golf = _closure3_slot1;
                        tango = golf.defaultTargetCoords;
 171:
                        report = tango;
 174:
                        _fun00036_ip = 196; continue _fun00035;
 176:
                        options = _closure3_slot1;
                        golf = options.getTargetDimensions;
                        tango = zulu.id;
                        report = golf.bind(options)(tango);
 196:
                        tango = null;
                        if(!(tango != report)) { _fun00036_ip = 430; continue _fun00035 }
 205:
                        if(!(tango != oscar)) { _fun00036_ip = 430; continue _fun00035 }
 212:
                        golf = {};
                        tango = 'custom';
                        golf['type'] = tango;
                        golf['item'] = zulu;
                        options = oscar.type;
                        tango = _closure1_slot16;
                        report = tango.USER;
                        report = options === report;
                        golf['forceSquare'] = report;
                        report = oscar.type;
                        tango = tango.ACTIVITY;
                        if(!(tango !== report)) { _fun00036_ip = 325; continue _fun00035 }
 265:
                        tango = _closure1_slot16;
                        tango = tango.STREAM;
                        if(!(tango !== report)) { _fun00036_ip = 309; continue _fun00035 }
 279:
                        tango = _closure1_slot16;
                        tango = tango.USER;
                        if(!(tango === report)) { _fun00036_ip = 339; continue _fun00035 }
 293:
                        report = _closure3_slot6;
                        tango = report.add;
                        tango = tango.bind(report)(golf);
                        _fun00036_ip = 339; continue _fun00035;
 309:
                        report = _closure3_slot5;
                        tango = report.add;
                        tango = tango.bind(report)(golf);
                        _fun00036_ip = 339; continue _fun00035;
 325:
                        report = _closure3_slot4;
                        tango = report.add;
                        tango = tango.bind(report)(golf);
 339:
                        tango = _closure3_slot8;
                        options = oscar.type;
                        report = _closure1_slot16;
                        golf = report.STREAM;
                        report = 'stream';
                        if(!(options !== golf)) { _fun00036_ip = 396; continue _fun00035 }
 366:
                        golf = oscar.type;
                        mike = _closure1_slot16;
                        oscar = mike.USER;
                        mike = 'activity';
                        if(!(golf === oscar)) { _fun00036_ip = 393; continue _fun00035 }
 389:
                        mike = 'camera';
 393:
                        report = mike;
 396:
                        mike = ',';
                        mike = mike + report;
                        mike = tango + mike;
                        _closure3_slot8 = mike;
                        mike = _closure3_slot7;
                        entity = mike.delete;
                        entity = entity.bind(mike)(zulu);
                        entity = undefined;
                        return entity;
 430:
                        entity = 1;
                        return entity;
                    }
                };
                report = _closure1_slot21;
                verify = report.bind(entity)(romeo);
                options = verify.bind(entity)();
                report = options.done;
                if(report) { _fun00034_ip = 380; continue _fun00033 }
 352:
                report = options.value;
                report = offset.bind(entity)(report);
                if(report) { _fun00034_ip = 380; continue _fun00033 }
 365:
                update = verify.bind(entity)();
                report = update.done;
                options = update;
                if(!report) { _fun00034_ip = 352; continue _fun00033 }
 380:
                report = output.size;
                offset = null;
                vacuum = null;
                if(!(yankee === report)) { _fun00034_ip = 414; continue _fun00033 }
 393:
                verify = _closure1_slot20;
                options = verify.find;
                report = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.match;
                    mike = zulu.has;
                    entity = _closure3_slot8;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                vacuum = options.bind(verify)(report);
 414:
                var _closure3_slot11 = vacuum;
                verify = oscar.Math;
                options = verify.max;
                update = _closure1_slot1;
                control = _closure1_slot2;
                report = 13;
                report = control[report];
                update = update.bind(entity)(report);
                report = {};
                report['top'] = source;
                report['left'] = sequence;
                report['right'] = config;
                report['bottom'] = foxtrot;
                report['imeInsetsBottom'] = yankee;
                report = update.bind(entity)(report);
                report = report.height;
                update = result - report;
                report = _closure1_slot14;
                report = update - report;
                report = report - echo;
                report = report - foxtrot;
                foxtrot = 120;
                echo = options.bind(verify)(foxtrot, report);
                verify = oscar.Math;
                options = verify.max;
                report = kilo - sequence;
                report = report - config;
                foxtrot = options.bind(verify)(foxtrot, report);
                if(!(offset == vacuum)) { _fun00034_ip = 798; continue _fun00033 }
 543:
                report = output.size;
                if(!(!(report > yankee))) { _fun00034_ip = 798; continue _fun00033 }
 555:
                options = _closure1_slot26;
                report = {};
                report['windowWidth'] = kilo;
                report['windowHeight'] = result;
                report['safeAreaLeft'] = sequence;
                report['safeAreaRight'] = config;
                verify = options.bind(entity)(report);
                report = zulu.items;
                options = report.length;
                report = 7;
                if(!(!(options >= report))) { _fun00034_ip = 704; continue _fun00033 }
 604:
                report = zulu.items;
                report = report.length;
                if(!(yankee !== report)) { _fun00034_ip = 704; continue _fun00033 }
 619:
                options = _closure1_slot1;
                update = _closure1_slot2;
                report = 14;
                report = update[report];
                options = options.bind(entity)(report);
                report = {};
                update = zulu.items;
                update = update.length;
                report['cardCount'] = update;
                report['gutterSize'] = golf;
                report['availableWidth'] = foxtrot;
                report['availableHeight'] = echo;
                report = options.bind(entity)(report);
                options = report.columns;
                _closure3_slot9 = options;
                control = report.cardSize;
                report = options;
                foxtrot = report;
                _fun00034_ip = 934; continue _fun00033;
 704:
                source = oscar.Math;
                update = source.max;
                options = kilo - sequence;
                options = options - config;
                options = options / verify;
                options = options >> yankee;
                verify = 1;
                options = update.bind(source)(options, verify);
                _closure3_slot9 = options;
                source = _closure1_slot7;
                update = source.roundToNearestPixel;
                record = kilo - sequence;
                record = record - config;
                context = _closure1_slot15;
                verify = options - verify;
                verify = context * verify;
                verify = record - verify;
                verify = verify / options;
                control = update.bind(source)(verify);
                report = options;
                foxtrot = report;
                _fun00034_ip = 934; continue _fun00033;
 798:
                verify = _closure1_slot26;
                options = {};
                options['windowWidth'] = kilo;
                options['windowHeight'] = result;
                options['safeAreaLeft'] = sequence;
                options['safeAreaRight'] = config;
                verify = verify.bind(entity)(options);
                update = oscar.Math;
                result = update.max;
                record = oscar.Math;
                source = record.min;
                options = kilo - sequence;
                options = options - config;
                options = options / verify;
                verify = options >> yankee;
                options = 4;
                options = source.bind(record)(verify, options);
                verify = 1;
                options = result.bind(update)(options, verify);
                _closure3_slot9 = options;
                update = _closure1_slot7;
                result = update.roundToNearestPixel;
                source = kilo - sequence;
                source = source - config;
                verify = options - verify;
                verify = golf * verify;
                verify = source - verify;
                verify = verify / options;
                control = result.bind(update)(verify);
                report = options;
                foxtrot = report;
 934:
                verify = offset == vacuum;
                options = undefined;
                if(verify) { _fun00034_ip = 949; continue _fun00033 }
 943:
                options = vacuum.global;
 949:
                source = true;
                if(!(source === options)) { _fun00034_ip = 969; continue _fun00033 }
 955:
                options = vacuum.layouts;
                options = options[yankee];
                var _closure3_slot10 = options;
 969:
                result = oscar.Math;
                verify = result.floor;
                options = zulu.items;
                options = options.length;
                options = options / foxtrot;
                result = verify.bind(result)(options);
                options = zulu.items;
                options = options.length;
                update = options % foxtrot;
                options = 1;
                verify = options;
                if(!(update == yankee)) { _fun00034_ip = 1028; continue _fun00033 }
 1026:
                verify = 0;
 1028:
                update = result + verify;
                verify = {};
                result = control;
                if(!(offset == vacuum)) { _fun00034_ip = 1075; continue _fun00033 }
 1041:
                result = control;
                if(!(options === foxtrot)) { _fun00034_ip = 1075; continue _fun00033 }
 1048:
                result = control;
                if(!(update > options)) { _fun00034_ip = 1075; continue _fun00033 }
 1055:
                record = output.size;
                result = control;
                if(!(yankee === record)) { _fun00034_ip = 1075; continue _fun00033 }
 1067:
                sequence = kilo - sequence;
                result = sequence - config;
 1075:
                verify['width'] = result;
                result = control;
                if(!(offset == vacuum)) { _fun00034_ip = 1115; continue _fun00033 }
 1086:
                result = control;
                if(!(options === update)) { _fun00034_ip = 1115; continue _fun00033 }
 1093:
                result = control;
                if(!(foxtrot > options)) { _fun00034_ip = 1115; continue _fun00033 }
 1100:
                update = output.size;
                result = control;
                if(!(yankee === update)) { _fun00034_ip = 1115; continue _fun00033 }
 1112:
                result = echo;
 1115:
                verify['height'] = result;
                echo = _closure1_slot1;
                update = _closure1_slot2;
                result = 11;
                result = update[result];
                echo = echo.bind(entity)(result);
                result = zulu.defaultTargetCoords;
                result = echo.bind(entity)(verify, result);
                if(result) { _fun00034_ip = 1160; continue _fun00033 }
 1154:
                zulu['defaultTargetCoords'] = verify;
 1160:
                verify = {};
                result = zulu.defaultTargetCoords;
                result = result.width;
                verify['cardWidth'] = result;
                result = zulu.defaultTargetCoords;
                result = result.height;
                verify['cardHeight'] = result;
                verify['gutter'] = golf;
                result = zulu.items;
                result = result.length;
                verify['totalItems'] = result;
                verify['windowWidth'] = kilo;
                var _closure3_slot12 = verify;
                oscar = oscar.Array;
                verify = oscar.prototype;
                verify = Object.create(verify, {constructor: {value: oscar}});
                status = verify;
                target = foxtrot;
                oscar = new status[oscar](target, papa);
                verify = oscar instanceof Object ? oscar : verify;
                oscar = verify.fill;
                oscar = oscar.bind(verify)(yankee);
                verify = new Array(1);
                verify[0] = oscar;
                var _closure3_slot13 = verify;
                oscar = -1;
                var _closure3_slot14 = oscar;
                var _closure3_slot15 = oscar;
                var _closure3_slot16 = oscar;
                var _closure3_slot17 = yankee;
                oscar = new Array(0);
                var _closure3_slot18 = oscar;
                kilo = function(argFoo, argBar, argBaz, argCorge) { // Original name: placeItem
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        tango = argFoo;
                        zulu = {};
                        entity = _closure3_slot13;
                        zulu['grid'] = entity;
                        entity = _closure3_slot14;
                        zulu['lastFullyFilledRow'] = entity;
                        entity = argBaz;
                        zulu['width'] = entity;
                        entity = argCorge;
                        zulu['height'] = entity;
                        entity = _closure3_slot9;
                        zulu['columns'] = entity;
                        source = zulu.grid;
                        entity = zulu.lastFullyFilledRow;
                        golf = zulu.width;
                        update = zulu.height;
                        echo = zulu.columns;
                        oscar = global;
                        report = oscar.Math;
                        zulu = report.min;
                        result = zulu.bind(report)(golf, echo);
                        golf = 1;
                        if(!(golf === echo)) { _fun00038_ip = 106; continue _fun00037 }
 103:
                        update = golf;
 106:
                        output = entity + golf;
                        entity = undefined;
                        foxtrot = -1;
                        romeo = null;
                        report = 0;
                        kilo = undefined;
                        backup = foxtrot;
                        yankee = backup;
                        offset = undefined;
                        verify = undefined;
                        options = undefined;
 139:
                        zulu = _closure1_slot23;
                        vacuum = zulu.bind(entity)(output, echo, source);
                        zulu = vacuum.length;
                        zulu = report < zulu;
                        context = output;
                        control = 0;
                        sequence = backup;
                        config = yankee;
                        if(!zulu) { _fun00038_ip = 222; continue _fun00037 }
 173:
                        zulu = vacuum[control];
                        if(!(golf !== zulu)) { _fun00038_ip = 204; continue _fun00037 }
 181:
                        zulu = result - golf;
                        record = control + zulu;
                        zulu = vacuum.length;
                        sequence = context;
                        config = control;
                        if(!(record >= zulu)) { _fun00038_ip = 222; continue _fun00037 }
 204:
                        control = control + 1;
                        zulu = vacuum.length;
                        sequence = backup;
                        config = yankee;
                        if(control < zulu) { _fun00038_ip = 173; continue _fun00037 }
 222:
                        if(!(foxtrot !== sequence)) { _fun00038_ip = 230; continue _fun00037 }
 226:
                        if(!(foxtrot === config)) { _fun00038_ip = 253; continue _fun00037 }
 230:
                        output = context + 1;
                        zulu = kilo;
                        backup = foxtrot;
                        yankee = backup;
                        vacuum = verify;
                        control = options;
                        _fun00038_ip = 514; continue _fun00037;
 253:
                        record = update - golf;
                        papa = sequence + record;
                        sierra = sequence;
                        status = config;
                        target = sierra;
                        record = target;
                        config = status;
                        sequence = record;
                        if(!(sequence <= papa)) { _fun00038_ip = 442; continue _fun00037 }
 286:
                        papa = _closure1_slot23;
                        equality = papa.bind(entity)(target, echo, source);
                        papa = result - golf;
                        lima = status + papa;
                        papa = target;
                        variable37 = status;
                        variable36 = sierra;
                        quebec = variable37;
                        whiskey = quebec;
                        if(!(whiskey <= lima)) { _fun00038_ip = 365; continue _fun00037 }
 324:
                        lima = equality[variable37];
                        variable36 = foxtrot;
                        quebec = variable36;
                        whiskey = variable37;
                        if(!(report === lima)) { _fun00038_ip = 365; continue _fun00037 }
 341:
                        variable37 = variable37 + 1;
                        lima = result - golf;
                        lima = status + lima;
                        variable36 = sierra;
                        quebec = status;
                        whiskey = variable37;
                        if(whiskey <= lima) { _fun00038_ip = 324; continue _fun00037 }
 365:
                        record = variable36;
                        config = quebec;
                        sequence = papa;
                        verify = equality;
                        options = whiskey;
                        if(!(foxtrot !== quebec)) { _fun00038_ip = 442; continue _fun00037 }
 384:
                        config = quebec;
                        sequence = papa;
                        verify = equality;
                        options = whiskey;
                        record = variable36;
                        if(!(foxtrot !== record)) { _fun00038_ip = 442; continue _fun00037 }
 403:
                        target = papa + 1;
                        papa = update - golf;
                        papa = variable36 + papa;
                        sierra = variable36;
                        status = quebec;
                        record = sierra;
                        config = status;
                        verify = equality;
                        options = whiskey;
                        sequence = target;
                        if(sequence <= papa) { _fun00038_ip = 286; continue _fun00037 }
 442:
                        if(!(foxtrot !== record)) { _fun00038_ip = 450; continue _fun00037 }
 446:
                        if(!(foxtrot === config)) { _fun00038_ip = 473; continue _fun00037 }
 450:
                        output = context + 1;
                        zulu = kilo;
                        backup = record;
                        yankee = config;
                        offset = sequence;
                        vacuum = verify;
                        control = options;
                        _fun00038_ip = 514; continue _fun00037;
 473:
                        papa = {};
                        papa['startRow'] = record;
                        papa['startCol'] = config;
                        papa['width'] = result;
                        papa['height'] = update;
                        zulu = papa;
                        output = context;
                        backup = record;
                        yankee = config;
                        offset = sequence;
                        vacuum = verify;
                        control = options;
 514:
                        verify = vacuum;
                        options = control;
                        kilo = zulu;
                        if(romeo == kilo) { _fun00038_ip = 139; continue _fun00037 }
 530:
                        yankee = _closure3_slot13;
                        offset = _closure3_slot14;
                        output = zulu.startRow;
                        sizing = zulu.startCol;
                        kilo = zulu.width;
                        backup = zulu.height;
                        options = output + backup;
                        verify = output;
                        if(!(verify < options)) { _fun00038_ip = 612; continue _fun00037 }
 571:
                        options = sizing + kilo;
                        result = sizing;
                        if(!(result < options)) { _fun00038_ip = 601; continue _fun00037 }
 582:
                        options = yankee[verify];
                        options[result] = golf;
                        result = result + 1;
                        options = sizing + kilo;
                        if(result < options) { _fun00038_ip = 582; continue _fun00037 }
 601:
                        verify = verify + 1;
                        options = output + backup;
                        if(verify < options) { _fun00038_ip = 571; continue _fun00037 }
 612:
                        verify = offset + golf;
 616:
                        kilo = yankee[verify];
                        options = offset;
                        if(!(romeo != kilo)) { _fun00038_ip = 652; continue _fun00037 }
 627:
                        backup = kilo.indexOf;
                        backup = backup.bind(kilo)(report);
                        if(!(foxtrot === backup)) { _fun00038_ip = 652; continue _fun00037 }
 641:
                        backup = verify + 1;
                        offset = verify;
                        verify = backup;
                        _fun00038_ip = 616; continue _fun00037;
 652:
                        _closure3_slot14 = options;
                        yankee = oscar.Math;
                        offset = yankee.min;
                        backup = oscar.Math;
                        foxtrot = backup.max;
                        verify = _closure3_slot16;
                        kilo = zulu.startCol;
                        options = zulu.width;
                        options = options - golf;
                        options = kilo + options;
                        verify = foxtrot.bind(backup)(verify, options);
                        options = _closure3_slot9;
                        options = offset.bind(yankee)(verify, options);
                        _closure3_slot16 = options;
                        options = _closure3_slot12;
                        verify = _closure3_slot17;
                        offset = {};
                        offset['id'] = tango;
                        yankee = argBar;
                        offset['type'] = yankee;
                        foxtrot = zulu.startCol;
                        backup = options.gutter;
                        yankee = options.cardWidth;
                        yankee = backup + yankee;
                        yankee = foxtrot * yankee;
                        offset['x'] = yankee;
                        foxtrot = zulu.startRow;
                        backup = options.gutter;
                        yankee = options.cardHeight;
                        yankee = backup + yankee;
                        yankee = foxtrot * yankee;
                        offset['y'] = yankee;
                        foxtrot = options.cardWidth;
                        yankee = zulu.width;
                        foxtrot = foxtrot * yankee;
                        yankee = zulu.width;
                        backup = yankee - golf;
                        yankee = options.gutter;
                        yankee = backup * yankee;
                        yankee = foxtrot + yankee;
                        offset['width'] = yankee;
                        foxtrot = options.cardHeight;
                        yankee = zulu.height;
                        foxtrot = foxtrot * yankee;
                        yankee = zulu.height;
                        backup = yankee - golf;
                        yankee = options.gutter;
                        yankee = backup * yankee;
                        yankee = foxtrot + yankee;
                        offset['height'] = yankee;
                        options = options.totalItems;
                        options = options - verify;
                        offset['zIndex'] = options;
                        foxtrot = offset.y;
                        options = offset.height;
                        verify = _closure3_slot0;
                        verify = verify.props;
                        verify = verify.chunkSize;
                        yankee = foxtrot / verify;
                        backup = yankee >> report;
                        yankee = new Array(2);
                        yankee[0] = backup;
                        options = foxtrot + options;
                        options = options / verify;
                        options = options >> report;
                        yankee[1] = options;
                        verify = yankee[report];
                        options = yankee[golf];
                        if(!(verify <= options)) { _fun00038_ip = 1068; continue _fun00037 }
 970:
                        options = _closure3_slot0;
                        foxtrot = options.chunkedCoords;
                        options = foxtrot.get;
                        backup = options.bind(foxtrot)(verify);
                        options = verify;
                        if(!(romeo == backup)) { _fun00038_ip = 1047; continue _fun00037 }
 997:
                        foxtrot = oscar.Set;
                        kilo = foxtrot.prototype;
                        kilo = Object.create(kilo, {constructor: {value: foxtrot}});
                        variable42 = kilo;
                        foxtrot = new variable42[foxtrot](variable41);
                        foxtrot = foxtrot instanceof Object ? foxtrot : kilo;
                        kilo = _closure3_slot0;
                        sizing = kilo.chunkedCoords;
                        kilo = sizing.set;
                        kilo = kilo.bind(sizing)(options, foxtrot);
                        backup = foxtrot;
 1047:
                        foxtrot = backup.add;
                        foxtrot = foxtrot.bind(backup)(offset);
                        verify = options + 1;
                        options = yankee[golf];
                        if(verify <= options) { _fun00038_ip = 970; continue _fun00037 }
 1068:
                        options = _closure3_slot0;
                        verify = options.cardCoords;
                        options = verify.set;
                        options = options.bind(verify)(tango, offset);
                        offset = oscar.Math;
                        verify = offset.max;
                        options = _closure3_slot15;
                        yankee = zulu.startRow;
                        oscar = zulu.height;
                        oscar = yankee + oscar;
                        oscar = oscar - golf;
                        options = verify.bind(offset)(options, oscar);
                        _closure3_slot15 = options;
                        oscar = _closure3_slot14;
                        if(!(options !== oscar)) { _fun00038_ip = 1164; continue _fun00037 }
 1141:
                        oscar = zulu.height;
                        if(!(golf === oscar)) { _fun00038_ip = 1164; continue _fun00037 }
 1150:
                        oscar = zulu.startRow;
                        zulu = _closure3_slot15;
                        if(!(oscar !== zulu)) { _fun00038_ip = 1176; continue _fun00037 }
 1164:
                        zulu = _closure3_slot18;
                        zulu['length'] = report;
                        _fun00038_ip = 1190; continue _fun00037;
 1176:
                        zulu = _closure3_slot18;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 1190:
                        return entity;
                    }
                };
                var _closure3_slot19 = kilo;
                kilo = zulu.items;
                kilo = kilo.length;
                kilo = options === kilo;
                var _closure3_slot20 = kilo;
                kilo = new Array(4);
                kilo[0] = output;
                kilo[1] = sizing;
                kilo[2] = backup;
                kilo[3] = romeo;
                romeo = kilo.length;
                romeo = yankee < romeo;
                backup = 0;
                if(!romeo) { _fun00034_ip = 1439; continue _fun00033 }
 1370:
                result = function(argFoo) { // Original name: _loop2
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        tango = argFoo;
                        mike = tango.type;
                        entity = 'custom';
                        if(!(entity !== mike)) { _fun00040_ip = 88; continue _fun00039 }
 16:
                        mike = {};
                        mike['item'] = tango;
                        options = _closure1_slot25;
                        oscar = _closure3_slot2;
                        report = _closure3_slot3;
                        golf = oscar > report;
                        oscar = _closure3_slot10;
                        report = null;
                        if(!(report == oscar)) { _fun00040_ip = 58; continue _fun00039 }
 54:
                        oscar = _closure1_slot19;
 58:
                        offset = _closure3_slot20;
                        backup = undefined;
                        foxtrot = 'square';
                        romeo = golf;
                        yankee = oscar;
                        entity = backup[options](foxtrot, romeo, yankee, offset, verify);
                        mike['dimensions'] = entity;
                        _fun00040_ip = 252; continue _fun00039;
 88:
                        options = _closure3_slot10;
                        entity = null;
                        if(!(entity == options)) { _fun00040_ip = 135; continue _fun00039 }
 101:
                        report = _closure3_slot11;
                        oscar = entity == report;
                        report = undefined;
                        if(oscar) { _fun00040_ip = 132; continue _fun00039 }
 114:
                        oscar = _closure3_slot11;
                        golf = oscar.layouts;
                        oscar = _closure3_slot17;
                        report = golf[oscar];
 132:
                        options = report;
 135:
                        if(!(entity == options)) { _fun00040_ip = 146; continue _fun00039 }
 139:
                        options = _closure1_slot19;
 146:
                        entity = tango.forceSquare;
                        golf = 'square';
                        if(entity) { _fun00040_ip = 198; continue _fun00039 }
 159:
                        oscar = _closure1_slot24;
                        verify = _closure3_slot1;
                        report = verify.getTargetDimensions;
                        entity = tango.item;
                        entity = entity.id;
                        report = report.bind(verify)(entity);
                        entity = undefined;
                        golf = oscar.bind(entity)(report);
 198:
                        entity = {};
                        tango = tango.item;
                        entity['item'] = tango;
                        oscar = _closure1_slot25;
                        report = _closure3_slot2;
                        tango = _closure3_slot3;
                        romeo = report > tango;
                        offset = _closure3_slot20;
                        backup = undefined;
                        foxtrot = golf;
                        yankee = options;
                        zulu = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                        entity['dimensions'] = zulu;
                        mike = entity;
 252:
                        entity = mike.item;
                        mike = mike.dimensions;
                        yankee = mike.width;
                        offset = mike.height;
                        foxtrot = entity.id;
                        tango = _closure3_slot19;
                        romeo = entity.type;
                        entity = undefined;
                        backup = undefined;
                        mike = backup[tango](foxtrot, romeo, yankee, offset, verify);
                        mike = _closure3_slot17;
                        mike = mike + 1;
                        _closure3_slot17 = mike;
                        return entity;
                    }
                };
                sizing = _closure1_slot21;
                romeo = kilo[backup];
                output = sizing.bind(entity)(romeo);
                sizing = output.bind(entity)();
                romeo = sizing.done;
                if(romeo) { _fun00034_ip = 1427; continue _fun00033 }
 1402:
                romeo = sizing.value;
                romeo = result.bind(entity)(romeo);
                echo = output.bind(entity)();
                romeo = echo.done;
                sizing = echo;
                if(!romeo) { _fun00034_ip = 1402; continue _fun00033 }
 1427:
                backup = backup + 1;
                romeo = kilo.length;
                if(backup < romeo) { _fun00034_ip = 1370; continue _fun00033 }
 1439:
                backup = _closure3_slot14;
                romeo = _closure3_slot15;
                if(!(backup !== romeo)) { _fun00034_ip = 1709; continue _fun00033 }
 1454:
                romeo = _closure3_slot15;
                kilo = verify[romeo];
                romeo = kilo[yankee];
                output = yankee === romeo;
                backup = _closure1_slot21;
                update = backup.bind(entity)(kilo);
                backup = update.bind(entity)();
                kilo = backup.done;
                result = backup;
                echo = false;
                sizing = 0;
                backup = output;
                romeo = 0;
                if(kilo) { _fun00034_ip = 1578; continue _fun00033 }
 1503:
                kilo = result.value;
                control = sizing + kilo;
                sequence = echo;
                vacuum = output;
                if(vacuum) { _fun00034_ip = 1548; continue _fun00033 }
 1521:
                config = options === kilo;
                if(!config) { _fun00034_ip = 1531; continue _fun00033 }
 1528:
                config = echo;
 1531:
                if(!config) { _fun00034_ip = 1536; continue _fun00033 }
 1534:
                output = true;
 1536:
                if(!(yankee === kilo)) { _fun00034_ip = 1542; continue _fun00033 }
 1540:
                echo = true;
 1542:
                sequence = echo;
                vacuum = output;
 1548:
                config = update.bind(entity)();
                kilo = config.done;
                output = vacuum;
                echo = sequence;
                result = config;
                sizing = control;
                backup = output;
                romeo = sizing;
                if(!kilo) { _fun00034_ip = 1503; continue _fun00033 }
 1578:
                if(backup) { _fun00034_ip = 1709; continue _fun00033 }
 1584:
                romeo = foxtrot - romeo;
                backup = _closure1_slot7;
                foxtrot = backup.roundToNearestPixel;
                kilo = zulu.defaultTargetCoords;
                kilo = kilo.width;
                kilo = romeo * kilo;
                romeo = romeo * golf;
                kilo = kilo + romeo;
                romeo = 2;
                romeo = kilo / romeo;
                foxtrot = foxtrot.bind(backup)(romeo);
                mike = _closure1_slot21;
                romeo = mike.bind(entity)(oscar);
                oscar = romeo.bind(entity)();
                mike = oscar.done;
                if(mike) { _fun00034_ip = 1709; continue _fun00033 }
 1654:
                kilo = oscar.value;
                backup = zulu.cardCoords;
                mike = backup.get;
                backup = mike.bind(backup)(kilo);
                if(!(offset != backup)) { _fun00034_ip = 1694; continue _fun00033 }
 1679:
                mike = backup.x;
                mike = mike + foxtrot;
                backup['x'] = mike;
 1694:
                backup = romeo.bind(entity)();
                mike = backup.done;
                oscar = backup;
                if(!mike) { _fun00034_ip = 1654; continue _fun00033 }
 1709:
                mike = {};
                oscar = zulu.items;
                oscar = oscar.length;
                if(!(yankee !== oscar)) { _fun00034_ip = 1774; continue _fun00033 }
 1726:
                oscar = _closure3_slot16;
                oscar = oscar + 1;
                _closure3_slot16 = oscar;
                oscar = zulu.defaultTargetCoords;
                romeo = oscar.width;
                oscar = _closure3_slot16;
                oscar = romeo * oscar;
                tango = _closure3_slot16;
                tango = tango - options;
                tango = tango * golf;
                tango = oscar + tango;
                _fun00034_ip = 1801; continue _fun00033;
 1774:
                oscar = zulu.defaultTargetCoords;
                oscar = oscar.width;
                oscar = oscar * report;
                report = report - options;
                report = report * golf;
                tango = oscar + report;
 1801:
                mike['width'] = tango;
                tango = zulu.items;
                report = tango.length;
                tango = 0;
                if(!(tango !== report)) { _fun00034_ip = 1906; continue _fun00033 }
 1822:
                report = verify.length;
                oscar = report - options;
                report = oscar;
                if(!(report >= yankee)) { _fun00034_ip = 1876; continue _fun00033 }
 1838:
                foxtrot = verify[oscar];
                report = oscar;
                if(!(offset != foxtrot)) { _fun00034_ip = 1876; continue _fun00033 }
 1849:
                romeo = foxtrot.indexOf;
                romeo = romeo.bind(foxtrot)(options);
                report = oscar;
                if(!(!(romeo >= yankee))) { _fun00034_ip = 1876; continue _fun00033 }
 1866:
                oscar = oscar - 1;
                report = oscar;
                if(report >= yankee) { _fun00034_ip = 1838; continue _fun00033 }
 1876:
                report = report + 1;
                oscar = zulu.defaultTargetCoords;
                oscar = oscar.height;
                oscar = report * oscar;
                report = report - options;
                report = golf * report;
                tango = oscar + report;
 1906:
                mike['height'] = tango;
                zulu['contentDimensions'] = mike;
                mike = false;
                zulu['dirty'] = mike;
                mike = zulu.layoutKey;
                mike = mike + 1;
                zulu['layoutKey'] = mike;
 1939:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'subscribeFromItem';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: subscribeFromItem
            tango = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            var _closure3_slot1 = tango;
            zulu = mike.layoutCallbacks;
            mike = zulu.add;
            mike = mike.bind(zulu)(tango);
            entity = function() {
                mike = _closure3_slot0;
                zulu = mike.layoutCallbacks;
                mike = zulu.delete;
                entity = _closure3_slot1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'subscribeToManager';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: subscribeToManager
            tango = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            var _closure3_slot1 = tango;
            zulu = mike.managerSubscriptions;
            mike = zulu.add;
            mike = mike.bind(zulu)(tango);
            entity = function() {
                mike = _closure3_slot0;
                zulu = mike.managerSubscriptions;
                mike = zulu.delete;
                entity = _closure3_slot1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = 'emitLayoutChanges';
        entity['key'] = oscar;
        oscar = function() { // Original name: emitLayoutChanges
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                mike = zulu.emitItemChanges;
                if(!mike) { _fun00042_ip = 24; continue _fun00041 }
 18:
                mike = zulu.mounted;
 24:
                if(!mike) { _fun00042_ip = 78; continue _fun00041 }
 27:
                mike = false;
                zulu['emitItemChanges'] = mike;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 15;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.batchUpdates;
                entity = function() {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        report = _closure1_slot21;
                        entity = _closure3_slot0;
                        tango = entity.managerSubscriptions;
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        report = oscar.bind(entity)();
                        tango = report.done;
                        if(tango) { _fun00044_ip = 63; continue _fun00043 }
 39:
                        tango = report.value;
                        tango = tango.bind(entity)();
                        golf = oscar.bind(entity)();
                        tango = golf.done;
                        report = golf;
                        if(!tango) { _fun00044_ip = 39; continue _fun00043 }
 63:
                        zulu = _closure1_slot21;
                        mike = _closure3_slot0;
                        mike = mike.layoutCallbacks;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.bind(entity)();
                        mike = zulu.done;
                        if(mike) { _fun00044_ip = 118; continue _fun00043 }
 94:
                        mike = zulu.value;
                        mike = mike.bind(entity)();
                        report = tango.bind(entity)();
                        mike = report.done;
                        zulu = report;
                        if(!mike) { _fun00044_ip = 94; continue _fun00043 }
 118:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[18] = entity;
        entity = {};
        oscar = 'deferredLayoutChange';
        entity['key'] = oscar;
        report = function() { // Original name: deferredLayoutChange
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike.emitItemChanges;
                if(!zulu) { _fun00046_ip = 24; continue _fun00045 }
 18:
                zulu = mike.mounted;
 24:
                if(!zulu) { _fun00046_ip = 59; continue _fun00045 }
 27:
                zulu = global;
                report = zulu.setTimeout;
                tango = undefined;
                zulu = function() {
                    entity = global;
                    tango = entity.clearTimeout;
                    zulu = _closure3_slot0;
                    mike = zulu.emitTimeout;
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = -1;
                    zulu['emitTimeout'] = mike;
                    mike = zulu.emitLayoutChanges;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                entity = 1;
                entity = report.bind(tango)(zulu, entity);
                mike['emitTimeout'] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[19] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo, argBar) { // Original name: useCardLayoutCoordsSubscription
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            var _closure2_slot0 = golf;
            var _closure2_slot1 = oscar;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.useSharedValue;
            entity = {};
            options = oscar.getCardCoords;
            options = options.bind(oscar)(golf);
            verify = null;
            if(!(verify == options)) { _fun00048_ip = 69; continue _fun00047 }
 65:
            options = _closure1_slot17;
 69:
            yankee = entity;
            offset = options;
            options = copyDataProperties(yankee, offset);
            entity = tango.bind(report)(entity);
            var _closure2_slot2 = entity;
            report = _closure1_slot6;
            tango = report.useLayoutEffect;
            zulu = new Array(3);
            zulu[0] = golf;
            zulu[1] = oscar;
            zulu[2] = entity;
            mike = function() {
                zulu = function() { // Original name: updateSharedValues
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        tango = _closure2_slot1;
                        zulu = tango.getCardCoords;
                        mike = _closure2_slot0;
                        tango = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike != tango)) { _fun00050_ip = 63; continue _fun00049 }
 28:
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 10;
                        mike = zulu[mike];
                        zulu = undefined;
                        mike = report.bind(zulu)(mike);
                        entity = _closure2_slot2;
                        entity = mike.bind(zulu)(entity, tango);
 63:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = undefined;
                entity = zulu.bind(entity)();
                mike = _closure2_slot1;
                entity = mike.subscribeFromItem;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useCardLayoutCoordsSubscription'] = tango;
    tango = function(argFoo, argBar) { // Original name: useTargetDimensionsSubscription
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 9;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = report.useSharedValue;
        entity = {};
        options = oscar.getTargetDimensions;
        verify = options.bind(oscar)(golf);
        offset = entity;
        options = copyDataProperties(offset, verify);
        entity = tango.bind(report)(entity);
        var _closure2_slot2 = entity;
        report = _closure1_slot6;
        tango = report.useLayoutEffect;
        zulu = new Array(3);
        zulu[0] = golf;
        zulu[1] = oscar;
        zulu[2] = entity;
        mike = function() {
            zulu = function() { // Original name: updateSharedValues
                tango = _closure2_slot1;
                zulu = tango.getTargetDimensions;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                zulu = report.bind(entity)(zulu);
                mike = _closure2_slot2;
                mike = zulu.bind(entity)(mike, tango);
                return entity;
            };
            entity = undefined;
            entity = zulu.bind(entity)();
            mike = _closure2_slot1;
            entity = mike.subscribeFromItem;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useTargetDimensionsSubscription'] = tango;
    mike = function(argFoo) { // Original name: useManagerSubscription
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        tango = _closure1_slot6;
        report = tango.useState;
        zulu = oscar.getLayoutKey;
        zulu = zulu.bind(oscar)();
        oscar = report.bind(tango)(zulu);
        report = _closure1_slot5;
        zulu = undefined;
        entity = 2;
        report = report.bind(zulu)(oscar, entity);
        entity = 0;
        entity = report[entity];
        zulu = 1;
        zulu = report[zulu];
        var _closure2_slot1 = zulu;
        zulu = tango.useLayoutEffect;
        mike = function() {
            zulu = _closure2_slot0;
            mike = zulu.subscribeToManager;
            entity = function() {
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                entity = mike.getLayoutKey;
                mike = entity.bind(mike)();
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['useManagerSubscription'] = mike;
    return entity;
})();