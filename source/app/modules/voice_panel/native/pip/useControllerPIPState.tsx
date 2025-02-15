// app/modules/voice_panel/native/pip/useControllerPIPState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot12;
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
            golf = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelModes;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot10 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/pip/useControllerPIPState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useControllerPIPState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscar = entity.channelId;
            var _closure2_slot0 = oscar;
            output = entity.connected;
            report = entity.focusedId;
            var _closure2_slot1 = report;
            tango = entity.layoutManager;
            var _closure2_slot2 = tango;
            sizing = entity.mode;
            control = _closure1_slot4;
            options = control.useRef;
            entity = {'id': null, 'mode': null, 'width': 0, 'height': 0, 'containerHeight': 0, 'showSecondaryPIP': false};
            zulu = undefined;
            entity['id'] = zulu;
            entity['mode'] = zulu;
            romeo = 0;
            yankee = options.bind(control)(entity);
            entity = control.useState;
            entity = entity.bind(control)(zulu);
            update = _closure1_slot3;
            echo = 2;
            entity = update.bind(zulu)(entity, echo);
            foxtrot = entity[romeo];
            var _closure2_slot3 = foxtrot;
            result = 1;
            entity = entity[result];
            var _closure2_slot4 = entity;
            entity = control.useRef;
            entity = entity.bind(control)(foxtrot);
            var _closure2_slot5 = entity;
            options = control.useInsertionEffect;
            entity = function() {
                mike = _closure2_slot5;
                entity = _closure2_slot3;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            entity = options.bind(control)(entity);
            options = {};
            options['channelId'] = oscar;
            options['mode'] = sizing;
            entity = function(argFoo) { // Original name: useShowSecondaryPIP
                mike = argFoo;
                golf = mike.channelId;
                var _closure3_slot0 = golf;
                oscar = mike.mode;
                var _closure3_slot1 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useStateFromStores;
                options = _closure1_slot5;
                zulu = new Array(2);
                zulu[0] = options;
                mike = _closure1_slot7;
                zulu[1] = mike;
                mike = new Array(2);
                mike[0] = golf;
                mike[1] = oscar;
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = zulu.getConnectedActivityChannelId;
                        report = entity.bind(zulu)();
                        tango = _closure1_slot7;
                        entity = tango.getChannel;
                        golf = entity.bind(tango)(report);
                        entity = zulu.getActivityPanelMode;
                        tango = entity.bind(zulu)();
                        entity = null;
                        entity = entity != golf;
                        if(!entity) { _fun00010_ip = 83; continue _fun00009 }
 50:
                        options = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 9;
                        oscar = oscar[zulu];
                        zulu = undefined;
                        oscar = options.bind(zulu)(oscar);
                        zulu = oscar.isActivityInTextSupportedForChannel;
                        entity = zulu.bind(oscar)(golf);
 83:
                        if(!entity) { _fun00010_ip = 97; continue _fun00009 }
 86:
                        zulu = _closure3_slot0;
                        entity = report !== zulu;
 97:
                        if(!entity) { _fun00010_ip = 114; continue _fun00009 }
 100:
                        zulu = _closure1_slot10;
                        zulu = zulu.PIP;
                        entity = tango === zulu;
 114:
                        if(!entity) { _fun00010_ip = 138; continue _fun00009 }
 117:
                        zulu = _closure3_slot1;
                        mike = _closure1_slot9;
                        mike = mike.PIP;
                        entity = zulu === mike;
 138:
                        return entity;
                    }
                };
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            options = entity.bind(zulu)(options);
            offset = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 11;
            entity = backup[entity];
            entity = offset.bind(zulu)(entity);
            kilo = entity.bind(zulu)(oscar);
            verify = control.useState;
            entity = function() {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                entity = zulu[entity];
                report = undefined;
                tango = mike.bind(report)(entity);
                zulu = {};
                entity = true;
                zulu['leading'] = entity;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
                };
                entity = 1000;
                entity = tango.bind(report)(mike, entity, zulu);
                return entity;
            };
            entity = verify.bind(control)(entity);
            entity = update.bind(zulu)(entity, result);
            verify = entity[romeo];
            var _closure2_slot6 = verify;
            vacuum = control.useLayoutEffect;
            source = new Array(1);
            source[0] = verify;
            entity = function() {
                entity = function() {
                    mike = _closure2_slot6;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            entity = vacuum.bind(control)(entity, source);
            source = control.useState;
            entity = function() {
                zulu = _closure2_slot2;
                mike = zulu.getTargetDimensions;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = source.bind(control)(entity);
            entity = update.bind(zulu)(entity, echo);
            romeo = entity[romeo];
            entity = entity[result];
            var _closure2_slot7 = entity;
            entity = 13;
            entity = backup[entity];
            offset = offset.bind(zulu)(entity);
            entity = {};
            entity['connected'] = output;
            entity['mode'] = sizing;
            entity['focusedId'] = report;
            entity['participantTargetDimensions'] = romeo;
            entity['selfHasVideo'] = kilo;
            entity['showSecondaryPIP'] = options;
            target = undefined;
            papa = oscar;
            context = tango;
            record = report;
            config = foxtrot;
            sequence = entity;
            offset = target[offset](papa, context, record, config, sequence, vacuum);
            entity = offset.participant;
            foxtrot = offset.dimensions;
            offset = {};
            context = yankee.current;
            papa = offset;
            backup = copyDataProperties(papa, context);
            papa = offset;
            context = foxtrot;
            foxtrot = copyDataProperties(papa, context);
            foxtrot = null;
            backup = foxtrot == entity;
            foxtrot = undefined;
            if(backup) { _fun00008_ip = 424; continue _fun00007 }
 419:
            foxtrot = entity.id;
 424:
            entity = 'id';
            offset[entity] = foxtrot;
            entity = 'showSecondaryPIP';
            offset[entity] = options;
            foxtrot = _closure1_slot0;
            options = _closure1_slot2;
            entity = 14;
            entity = options[entity];
            backup = foxtrot.bind(zulu)(entity);
            foxtrot = backup.getPIPMode;
            entity = {};
            entity['channelId'] = oscar;
            entity['connected'] = output;
            entity['manuallyFocusedId'] = report;
            entity['mode'] = sizing;
            entity['selfHasVideo'] = kilo;
            foxtrot = foxtrot.bind(backup)(entity);
            entity = 'mode';
            offset[entity] = foxtrot;
            entity = function(argFoo, argBar) { // Original name: useCachedPipState
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    var _closure3_slot0 = entity;
                    var _closure3_slot1 = mike;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 10;
                    oscar = oscar[zulu];
                    zulu = undefined;
                    golf = golf.bind(zulu)(oscar);
                    oscar = golf.cheapWorkletShallowEqual;
                    zulu = mike.current;
                    zulu = oscar.bind(golf)(entity, zulu);
                    zulu = !zulu;
                    var _closure3_slot2 = zulu;
                    oscar = _closure1_slot4;
                    report = oscar.useEffect;
                    tango = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            mike = _closure3_slot2;
                            if(!mike) { _fun00014_ip = 24; continue _fun00013 }
 10:
                            mike = _closure3_slot1;
                            entity = _closure3_slot0;
                            mike['current'] = entity;
 24:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango = report.bind(oscar)(tango);
                    if(zulu) { _fun00012_ip = 94; continue _fun00011 }
 89:
                    entity = mike.current;
 94:
                    return entity;
                }
            };
            entity = entity.bind(zulu)(offset, yankee);
            yankee = _closure1_slot4;
            foxtrot = yankee.useEffect;
            offset = new Array(2);
            offset[0] = oscar;
            offset[1] = verify;
            verify = function() {
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                report = zulu.BatchedStoreListener;
                zulu = _closure1_slot8;
                tango = new Array(2);
                tango[0] = zulu;
                mike = _closure1_slot6;
                tango[1] = mike;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                golf = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zulu = _closure1_slot11;
                        mike = _closure1_slot8;
                        entity = mike.getSpeakers;
                        mike = entity.bind(mike)();
                        entity = undefined;
                        options = zulu.bind(entity)(mike);
                        zulu = options.bind(entity)();
                        report = zulu.done;
                        oscar = null;
                        golf = zulu;
                        zulu = undefined;
                        if(report) { _fun00016_ip = 101; continue _fun00015 }
 52:
                        offset = golf.value;
                        romeo = _closure1_slot6;
                        yankee = romeo.getParticipant;
                        report = _closure2_slot0;
                        report = yankee.bind(romeo)(report, offset);
                        zulu = offset;
                        if(!(oscar == report)) { _fun00016_ip = 101; continue _fun00015 }
 84:
                        offset = options.bind(entity)();
                        report = offset.done;
                        golf = offset;
                        zulu = undefined;
                        if(!report) { _fun00016_ip = 52; continue _fun00015 }
 101:
                        var _closure4_slot0 = zulu;
                        report = _closure2_slot5;
                        report = report.current;
                        report = zulu !== report;
                        if(!report) { _fun00016_ip = 125; continue _fun00015 }
 121:
                        report = oscar != zulu;
 125:
                        if(!report) { _fun00016_ip = 168; continue _fun00015 }
 128:
                        report = _closure2_slot5;
                        report = report.current;
                        if(!(oscar != report)) { _fun00016_ip = 159; continue _fun00015 }
 141:
                        report = _closure2_slot6;
                        tango = function() {
                            zulu = _closure2_slot4;
                            mike = _closure4_slot0;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        };
                        tango = report.bind(entity)(tango);
                        _fun00016_ip = 168; continue _fun00015;
 159:
                        mike = _closure2_slot4;
                        mike = mike.bind(entity)(zulu);
 168:
                        return entity;
                    }
                };
                verify = zulu;
                options = tango;
                mike = new verify[report](options, golf, oscar);
                tango = mike instanceof Object ? mike : zulu;
                var _closure3_slot0 = tango;
                zulu = tango.attach;
                oscar = _closure2_slot0;
                mike = global;
                mike = mike.HermesInternal;
                report = mike.concat;
                mike = 'pipstate-change-listeners-';
                mike = report.bind(mike)(oscar);
                mike = zulu.bind(tango)(mike);
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.detach;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            verify = foxtrot.bind(yankee)(verify, offset);
            offset = yankee.useEffect;
            verify = new Array(3);
            verify[0] = report;
            verify[1] = tango;
            verify[2] = romeo;
            golf = function() {
                zulu = function() { // Original name: updateParticipantDimensions
                    zulu = _closure2_slot7;
                    entity = undefined;
                    mike = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            mike = argFoo;
                            tango = _closure2_slot2;
                            zulu = tango.getTargetDimensions;
                            entity = _closure2_slot1;
                            entity = zulu.bind(tango)(entity);
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 10;
                            tango = tango[zulu];
                            zulu = undefined;
                            tango = report.bind(zulu)(tango);
                            zulu = tango.cheapWorkletShallowEqual;
                            zulu = zulu.bind(tango)(mike, entity);
                            if(!zulu) { _fun00018_ip = 68; continue _fun00017 }
 65:
                            entity = mike;
 68:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = undefined;
                entity = zulu.bind(entity)();
                mike = _closure2_slot2;
                entity = mike.subscribeFromItem;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            golf = offset.bind(yankee)(golf, verify);
            golf = _closure1_slot1;
            mike = 15;
            mike = options[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.bind(zulu)(oscar, tango, report);
            return entity;
        }
    };
    zulu['useControllerPIPState'] = mike;
    return entity;
})();