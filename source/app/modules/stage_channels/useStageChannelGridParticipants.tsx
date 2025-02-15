// app/modules/stage_channels/useStageChannelGridParticipants.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
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
            verify = _closure1_slot8;
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
            golf = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot8 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: useStageChannelParticipantsList
        report = argFoo;
        options = argBar;
        oscar = argBaz;
        var _closure2_slot0 = report;
        var _closure2_slot1 = options;
        var _closure2_slot2 = oscar;
        golf = _closure1_slot0;
        offset = _closure1_slot1;
        zulu = 4;
        verify = offset[zulu];
        tango = undefined;
        kilo = golf.bind(tango)(verify);
        backup = kilo.useStateFromStores;
        verify = _closure1_slot5;
        foxtrot = new Array(1);
        foxtrot[0] = verify;
        romeo = new Array(1);
        romeo[0] = report;
        verify = 5;
        verify = offset[verify];
        verify = golf.bind(tango)(verify);
        sizing = verify.isVersionEqual;
        result = function() {
            tango = _closure2_slot0;
            entity = new Array(2);
            entity[0] = tango;
            zulu = _closure1_slot5;
            mike = zulu.getParticipantsVersion;
            mike = mike.bind(zulu)(tango);
            entity[1] = mike;
            return entity;
        };
        update = kilo;
        echo = foxtrot;
        output = romeo;
        verify = update[backup](echo, result, output, sizing, kilo);
        var _closure2_slot3 = verify;
        zulu = offset[zulu];
        yankee = golf.bind(tango)(zulu);
        offset = yankee.useStateFromStores;
        zulu = _closure1_slot4;
        golf = new Array(1);
        golf[0] = zulu;
        tango = new Array(1);
        tango[0] = report;
        zulu = function() {
            zulu = _closure1_slot4;
            mike = zulu.getSelectedParticipantId;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = offset.bind(yankee)(golf, zulu, tango);
        var _closure2_slot4 = golf;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(5);
        mike[0] = verify;
        mike[1] = options;
        mike[2] = golf;
        mike[3] = oscar;
        mike[4] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = new Array(0);
                var _closure3_slot0 = zulu;
                mike = new Array(0);
                var _closure3_slot1 = mike;
                romeo = -1;
                var _closure3_slot2 = romeo;
                golf = new Array(0);
                tango = _closure2_slot2;
                if(!tango) { _fun00008_ip = 211; continue _fun00007 }
 45:
                report = _closure1_slot7;
                backup = _closure1_slot5;
                foxtrot = backup.getMutableParticipants;
                oscar = _closure2_slot0;
                kilo = _closure1_slot0;
                tango = _closure1_slot1;
                offset = 6;
                tango = tango[offset];
                verify = undefined;
                tango = kilo.bind(verify)(tango);
                tango = tango.StageChannelParticipantNamedIndex;
                tango = tango.SPEAKER;
                tango = foxtrot.bind(backup)(oscar, tango);
                oscar = report.bind(verify)(tango);
                report = oscar.bind(verify)();
                tango = report.done;
                if(tango) { _fun00008_ip = 211; continue _fun00007 }
 123:
                foxtrot = report.value;
                backup = foxtrot.type;
                kilo = _closure1_slot0;
                tango = _closure1_slot1;
                tango = tango[offset];
                tango = kilo.bind(verify)(tango);
                tango = tango.StageChannelParticipantTypes;
                tango = tango.STREAM;
                if(!(backup === tango)) { _fun00008_ip = 211; continue _fun00007 }
 166:
                backup = foxtrot.id;
                tango = _closure2_slot4;
                if(!(backup !== tango)) { _fun00008_ip = 189; continue _fun00007 }
 179:
                tango = golf.push;
                tango = tango.bind(golf)(foxtrot);
 189:
                romeo = romeo + 1;
                _closure3_slot2 = romeo;
                foxtrot = oscar.bind(verify)();
                tango = foxtrot.done;
                report = foxtrot;
                if(!tango) { _fun00008_ip = 123; continue _fun00007 }
 211:
                oscar = function(argFoo, argBar, argBaz) { // Original name: pushSection
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = argFoo;
                        entity = argBaz;
                        report = zulu;
                        if(!entity) { _fun00010_ip = 31; continue _fun00009 }
 12:
                        mike = zulu.filter;
                        entity = function(argFoo, argBar) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure2_slot4;
                                entity = mike !== entity;
                                if(!entity) { _fun00012_ip = 36; continue _fun00011 }
 22:
                                zulu = _closure3_slot2;
                                mike = argBar;
                                entity = mike > zulu;
 36:
                                return entity;
                            }
                        };
                        report = mike.bind(zulu)(entity);
 31:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 7;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.chunk;
                        mike = argBar;
                        mike = zulu.bind(tango)(report, mike);
                        report = _closure3_slot1;
                        tango = report.push;
                        tango = tango.bind(report)(mike);
                        tango = _closure3_slot0;
                        zulu = tango.push;
                        mike = mike.length;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                var _closure3_slot3 = oscar;
                tango = _closure2_slot4;
                report = null;
                verify = report != tango;
                tango = null;
                if(!verify) { _fun00008_ip = 264; continue _fun00007 }
 237:
                yankee = _closure1_slot5;
                offset = yankee.getParticipant;
                verify = _closure2_slot0;
                options = _closure2_slot4;
                tango = offset.bind(yankee)(verify, options);
 264:
                if(!(report != tango)) { _fun00008_ip = 277; continue _fun00007 }
 268:
                report = tango.speaker;
                if(report) { _fun00008_ip = 297; continue _fun00007 }
 277:
                offset = undefined;
                verify = new Array(0);
                options = 1;
                report = false;
                report = oscar.bind(offset)(verify, options, report);
                _fun00008_ip = 319; continue _fun00007;
 297:
                verify = new Array(1);
                verify[0] = tango;
                options = undefined;
                report = 1;
                tango = false;
                tango = oscar.bind(options)(verify, report, tango);
 319:
                verify = _closure1_slot0;
                offset = _closure1_slot1;
                tango = 6;
                options = offset[tango];
                report = undefined;
                options = verify.bind(report)(options);
                options = options.StageChannelParticipantNamedIndex;
                yankee = options.SPEAKER;
                options = new Array(2);
                options[0] = yankee;
                tango = offset[tango];
                tango = verify.bind(report)(tango);
                tango = tango.StageChannelParticipantNamedIndex;
                tango = tango.AUDIENCE;
                options[1] = tango;
                tango = options.forEach;
                entity = function(argFoo) {
                    oscar = argFoo;
                    report = _closure3_slot3;
                    golf = _closure1_slot5;
                    tango = golf.getMutableParticipants;
                    options = _closure2_slot3;
                    zulu = 0;
                    zulu = options[zulu];
                    tango = tango.bind(golf)(zulu, oscar);
                    mike = _closure2_slot1;
                    zulu = mike[oscar];
                    golf = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    mike = golf.bind(entity)(mike);
                    mike = mike.StageChannelParticipantNamedIndex;
                    mike = mike.SPEAKER;
                    mike = oscar === mike;
                    mike = report.bind(entity)(tango, zulu, mike);
                    return entity;
                };
                entity = tango.bind(options)(entity);
                tango = 1;
                entity = false;
                entity = oscar.bind(report)(golf, tango, entity);
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    romeo = 0;
    report = golf[romeo];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    yankee = 1;
    verify = golf[yankee];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    offset = 2;
    report = golf[offset];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    verify = 3;
    report = golf[verify];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = {};
    report['SELECTED'] = romeo;
    options = 'SELECTED';
    report[romeo] = options;
    report['SPEAKER'] = yankee;
    options = 'SPEAKER';
    report[yankee] = options;
    report['AUDIENCE'] = offset;
    options = 'AUDIENCE';
    report[offset] = options;
    report['MEDIA'] = verify;
    options = 'MEDIA';
    report[verify] = options;
    var _closure1_slot6 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stage_channels/useStageChannelGridParticipants.tsx';
    report = oscar.bind(golf)(report);
    zulu['useStageChannelParticipantsList'] = tango;
    tango = function(argFoo) { // Original name: useThrottleDurationForChannel
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = _closure1_slot0;
            options = _closure1_slot1;
            entity = 8;
            entity = options[entity];
            oscar = undefined;
            golf = mike.bind(oscar)(entity);
            report = golf.useStageParticipantsCount;
            entity = 6;
            entity = options[entity];
            entity = mike.bind(oscar)(entity);
            entity = entity.StageChannelParticipantNamedIndex;
            mike = entity.AUDIENCE;
            entity = argFoo;
            golf = report.bind(golf)(entity, mike);
            var _closure2_slot0 = golf;
            report = _closure1_slot3;
            mike = report.useState;
            entity = false;
            report = mike.bind(report)(entity);
            mike = _closure1_slot2;
            entity = 2;
            oscar = mike.bind(oscar)(report, entity);
            entity = 0;
            mike = oscar[entity];
            report = 1;
            report = oscar[report];
            var _closure2_slot1 = report;
            oscar = _closure1_slot3;
            report = oscar.useEffect;
            tango = new Array(1);
            tango[0] = golf;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = 100;
                    if(!(!(zulu > mike))) { _fun00016_ip = 40; continue _fun00015 }
 14:
                    zulu = _closure2_slot0;
                    mike = 75;
                    if(!(zulu < mike)) { _fun00016_ip = 53; continue _fun00015 }
 25:
                    tango = _closure2_slot1;
                    zulu = undefined;
                    mike = false;
                    mike = tango.bind(zulu)(mike);
                    _fun00016_ip = 53; continue _fun00015;
 40:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = report.bind(oscar)(zulu, tango);
            if(!mike) { _fun00014_ip = 155; continue _fun00013 }
 149:
            entity = 5000;
 155:
            return entity;
        }
    };
    zulu['useThrottleDurationForChannel'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: useStageChannelParticipantsListThrottled
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            yankee = argBar;
            entity = arguments[3];
            offset = undefined;
            if(!(entity === offset)) { _fun00018_ip = 14; continue _fun00017 }
 12:
            entity = false;
 14:
            tango = _closure1_slot9;
            mike = argFoo;
            backup = tango.bind(offset)(mike, yankee, entity);
            options = _closure1_slot2;
            golf = 2;
            mike = options.bind(offset)(backup, golf);
            report = 0;
            verify = mike[report];
            tango = 1;
            oscar = mike[tango];
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            mike = 9;
            mike = sizing[mike];
            foxtrot = kilo.bind(offset)(mike);
            romeo = foxtrot.useThrottledState;
            mike = 6;
            mike = sizing[mike];
            mike = kilo.bind(offset)(mike);
            mike = mike.StageChannelParticipantNamedIndex;
            mike = mike.AUDIENCE;
            mike = yankee[mike];
            yankee = new Array(1);
            yankee[0] = mike;
            mike = argBaz;
            mike = romeo.bind(foxtrot)(backup, mike, yankee);
            mike = options.bind(offset)(mike, golf);
            golf = mike[report];
            tango = mike[tango];
            report = _closure1_slot6;
            mike = entity;
            if(mike) { _fun00018_ip = 161; continue _fun00017 }
 153:
            entity = report.SELECTED;
            _fun00018_ip = 167; continue _fun00017;
 161:
            entity = report.MEDIA;
 167:
            entity = verify[entity];
            report = new Array(3);
            report[0] = entity;
            entity = _closure1_slot6;
            options = entity.SPEAKER;
            options = verify[options];
            report[1] = options;
            entity = entity.AUDIENCE;
            entity = golf[entity];
            report[2] = entity;
            entity = new Array(2);
            entity[0] = report;
            report = _closure1_slot6;
            if(mike) { _fun00018_ip = 234; continue _fun00017 }
 226:
            mike = report.SELECTED;
            _fun00018_ip = 240; continue _fun00017;
 234:
            mike = report.MEDIA;
 240:
            report = oscar[mike];
            mike = new Array(3);
            mike[0] = report;
            zulu = _closure1_slot6;
            report = zulu.SPEAKER;
            report = oscar[report];
            mike[1] = report;
            zulu = zulu.AUDIENCE;
            zulu = tango[zulu];
            mike[2] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    zulu['useStageChannelParticipantsListThrottled'] = mike;
    return entity;
})();