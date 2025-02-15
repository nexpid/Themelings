// app/modules/external_pip/useExternalPipParticipant.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
            verify = _closure1_slot11;
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
            golf = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: useSelectedParticipant
        entity = argFoo;
        offset = entity.channelId;
        var _closure2_slot0 = offset;
        verify = entity.focusedParticipantStreamId;
        var _closure2_slot1 = verify;
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        tango = 7;
        entity = golf[tango];
        report = undefined;
        romeo = oscar.bind(report)(entity);
        yankee = romeo.useStateFromStores;
        entity = _closure1_slot5;
        options = new Array(1);
        options[0] = entity;
        entity = function() {
            mike = _closure1_slot5;
            entity = mike.getId;
            entity = entity.bind(mike)();
            return entity;
        };
        options = yankee.bind(romeo)(options, entity);
        var _closure2_slot2 = options;
        romeo = _closure1_slot3;
        yankee = romeo.useState;
        entity = 0;
        foxtrot = yankee.bind(romeo)(entity);
        romeo = _closure1_slot2;
        yankee = 2;
        romeo = romeo.bind(report)(foxtrot, yankee);
        entity = romeo[entity];
        yankee = 1;
        yankee = romeo[yankee];
        var _closure2_slot3 = yankee;
        tango = golf[tango];
        golf = oscar.bind(report)(tango);
        oscar = golf.useStateFromStoresObject;
        tango = _closure1_slot4;
        report = new Array(1);
        report[0] = tango;
        tango = new Array(4);
        tango[0] = offset;
        tango[1] = verify;
        tango[2] = options;
        tango[3] = entity;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot0;
                report = null;
                if(!(report != entity)) { _fun00008_ip = 870; continue _fun00007 }
 16:
                entity = _closure2_slot1;
                if(!(report == entity)) { _fun00008_ip = 870; continue _fun00007 }
 27:
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                echo = entity.bind(mike)();
                zulu = _closure1_slot4;
                mike = zulu.getParticipants;
                entity = _closure2_slot0;
                mike = mike.bind(zulu)(entity);
                offset = _closure2_slot2;
                zulu = mike.length;
                entity = 3;
                entity = entity < zulu;
                output = false;
                if(entity) { _fun00008_ip = 186; continue _fun00007 }
 87:
                entity = _closure1_slot10;
                options = undefined;
                golf = entity.bind(options)(mike);
                zulu = golf.bind(options)();
                entity = zulu.done;
                tango = zulu;
                zulu = undefined;
                output = true;
                if(entity) { _fun00008_ip = 186; continue _fun00007 }
 117:
                entity = tango.value;
                romeo = entity.type;
                yankee = _closure1_slot8;
                yankee = yankee.ACTIVITY;
                if(!(romeo !== yankee)) { _fun00008_ip = 169; continue _fun00007 }
 141:
                yankee = entity.user;
                romeo = report == yankee;
                entity = undefined;
                if(romeo) { _fun00008_ip = 160; continue _fun00007 }
 155:
                entity = yankee.id;
 160:
                zulu = yankee;
                output = false;
                if(!(entity === offset)) { _fun00008_ip = 186; continue _fun00007 }
 169:
                yankee = golf.bind(options)();
                entity = yankee.done;
                tango = yankee;
                output = true;
                if(!entity) { _fun00008_ip = 117; continue _fun00007 }
 186:
                entity = _closure1_slot10;
                zulu = undefined;
                sizing = entity.bind(zulu)(mike);
                mike = sizing.bind(zulu)();
                entity = mike.done;
                kilo = undefined;
                backup = undefined;
                foxtrot = mike;
                romeo = undefined;
                yankee = undefined;
                offset = undefined;
                options = undefined;
                oscar = undefined;
                tango = undefined;
                mike = undefined;
                golf = undefined;
                verify = undefined;
                if(entity) { _fun00008_ip = 673; continue _fun00007 }
 237:
                config = foxtrot.value;
                entity = oscar;
                if(output) { _fun00008_ip = 324; continue _fun00007 }
 248:
                control = config.type;
                source = _closure1_slot8;
                source = source.USER;
                entity = oscar;
                if(!(control === source)) { _fun00008_ip = 324; continue _fun00007 }
 270:
                status = config.user;
                source = report == status;
                target = undefined;
                if(source) { _fun00008_ip = 289; continue _fun00007 }
 284:
                target = status.id;
 289:
                papa = _closure2_slot2;
                entity = status;
                context = kilo;
                record = backup;
                sequence = romeo;
                vacuum = yankee;
                control = offset;
                source = options;
                oscar = entity;
                if(!(target !== papa)) { _fun00008_ip = 625; continue _fun00007 }
 324:
                target = config.type;
                papa = _closure1_slot8;
                papa = papa.USER;
                if(!(papa !== target)) { _fun00008_ip = 451; continue _fun00007 }
 343:
                papa = _closure1_slot8;
                papa = papa.STREAM;
                context = kilo;
                record = backup;
                sequence = romeo;
                vacuum = yankee;
                control = offset;
                source = options;
                oscar = entity;
                if(!(papa === target)) { _fun00008_ip = 625; continue _fun00007 }
 381:
                papa = report == offset;
                if(!papa) { _fun00008_ip = 398; continue _fun00007 }
 388:
                target = config.streamId;
                papa = report != target;
 398:
                context = kilo;
                record = backup;
                sequence = romeo;
                vacuum = yankee;
                control = offset;
                source = options;
                oscar = entity;
                if(!papa) { _fun00008_ip = 625; continue _fun00007 }
 425:
                context = kilo;
                record = backup;
                sequence = romeo;
                vacuum = yankee;
                control = config;
                source = options;
                oscar = entity;
                _fun00008_ip = 625; continue _fun00007;
 451:
                papa = config.speaking;
                if(papa) { _fun00008_ip = 478; continue _fun00007 }
 460:
                target = config.lastSpoke;
                status = echo - target;
                target = _closure1_slot9;
                papa = status < target;
 478:
                if(!papa) { _fun00008_ip = 485; continue _fun00007 }
 481:
                papa = report == romeo;
 485:
                if(!papa) { _fun00008_ip = 491; continue _fun00007 }
 488:
                romeo = config;
 491:
                papa = config.voiceState;
                status = report == papa;
                target = undefined;
                if(status) { _fun00008_ip = 512; continue _fun00007 }
 506:
                target = papa.selfVideo;
 512:
                status = report != target;
                if(!status) { _fun00008_ip = 522; continue _fun00007 }
 519:
                status = target;
 522:
                if(!status) { _fun00008_ip = 551; continue _fun00007 }
 525:
                sierra = report == yankee;
                if(sierra) { _fun00008_ip = 548; continue _fun00007 }
 532:
                whiskey = yankee.lastSpoke;
                lima = config.lastSpoke;
                sierra = whiskey < lima;
 548:
                status = sierra;
 551:
                if(!status) { _fun00008_ip = 557; continue _fun00007 }
 554:
                yankee = config;
 557:
                status = report == options;
                if(status) { _fun00008_ip = 580; continue _fun00007 }
 564:
                lima = options.lastSpoke;
                sierra = config.lastSpoke;
                status = lima < sierra;
 580:
                context = target;
                record = papa;
                sequence = romeo;
                vacuum = yankee;
                control = offset;
                source = options;
                oscar = entity;
                if(!status) { _fun00008_ip = 625; continue _fun00007 }
 604:
                context = target;
                record = papa;
                sequence = romeo;
                vacuum = yankee;
                control = offset;
                source = config;
                oscar = entity;
 625:
                config = sizing.bind(zulu)();
                entity = config.done;
                kilo = context;
                backup = record;
                romeo = sequence;
                yankee = vacuum;
                offset = control;
                options = source;
                foxtrot = config;
                tango = romeo;
                mike = yankee;
                golf = offset;
                verify = options;
                if(!entity) { _fun00008_ip = 237; continue _fun00007 }
 673:
                entity = {};
                oscar = report != tango;
                entity['selectedParticipantSpeaking'] = oscar;
                options = report == tango;
                oscar = undefined;
                if(options) { _fun00008_ip = 712; continue _fun00007 }
 693:
                options = tango.user;
                offset = report == options;
                oscar = undefined;
                if(offset) { _fun00008_ip = 712; continue _fun00007 }
 707:
                oscar = options.id;
 712:
                if(!(report == oscar)) { _fun00008_ip = 747; continue _fun00007 }
 716:
                offset = report == mike;
                options = undefined;
                if(offset) { _fun00008_ip = 744; continue _fun00007 }
 725:
                offset = mike.user;
                yankee = report == offset;
                options = undefined;
                if(yankee) { _fun00008_ip = 744; continue _fun00007 }
 739:
                options = offset.id;
 744:
                oscar = options;
 747:
                if(!(report == oscar)) { _fun00008_ip = 782; continue _fun00007 }
 751:
                offset = report == verify;
                options = undefined;
                if(offset) { _fun00008_ip = 779; continue _fun00007 }
 760:
                verify = verify.user;
                offset = report == verify;
                options = undefined;
                if(offset) { _fun00008_ip = 779; continue _fun00007 }
 774:
                options = verify.id;
 779:
                oscar = options;
 782:
                entity['selectedParticipantUserId'] = oscar;
                if(!(report == tango)) { _fun00008_ip = 842; continue _fun00007 }
 791:
                options = report == mike;
                oscar = undefined;
                if(options) { _fun00008_ip = 806; continue _fun00007 }
 800:
                oscar = mike.streamId;
 806:
                if(!(report == oscar)) { _fun00008_ip = 828; continue _fun00007 }
 810:
                options = report == golf;
                mike = undefined;
                if(options) { _fun00008_ip = 825; continue _fun00007 }
 819:
                mike = golf.streamId;
 825:
                oscar = mike;
 828:
                golf = report != oscar;
                mike = undefined;
                if(!golf) { _fun00008_ip = 840; continue _fun00007 }
 837:
                mike = oscar;
 840:
                _fun00008_ip = 863; continue _fun00007;
 842:
                tango = tango.streamId;
                report = report != tango;
                zulu = undefined;
                if(!report) { _fun00008_ip = 860; continue _fun00007 }
 857:
                zulu = tango;
 860:
                mike = zulu;
 863:
                entity['selectedStreamId'] = mike;
                return entity;
 870:
                entity = {};
                mike = false;
                entity['selectedParticipantSpeaking'] = mike;
                mike = undefined;
                entity['selectedParticipantUserId'] = mike;
                entity['selectedStreamId'] = mike;
                return entity;
            }
        };
        entity = oscar.bind(golf)(report, entity, tango);
        var _closure2_slot4 = entity;
        report = _closure1_slot3;
        tango = report.useEffect;
        oscar = entity.selectedParticipantSpeaking;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure2_slot4;
                mike = mike.selectedParticipantSpeaking;
                report = undefined;
                if(mike) { _fun00010_ip = 22; continue _fun00009 }
 20:
                return report;
 22:
                mike = global;
                tango = mike.setTimeout;
                zulu = function() {
                    zulu = _closure2_slot3;
                    entity = undefined;
                    mike = function(argFoo) {
                        mike = argFoo;
                        entity = 1;
                        entity = mike + entity;
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = 3000;
                mike = tango.bind(report)(zulu, mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    mike = _closure3_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ParticipantTypes;
    var _closure1_slot8 = tango;
    tango = 1000;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/external_pip/useExternalPipParticipant.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useExternalPipParticipant
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 7;
            mike = report[mike];
            options = undefined;
            oscar = tango.bind(options)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot7;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                mike = _closure1_slot7;
                entity = mike.getChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            report = null;
            tango = report != mike;
            oscar = undefined;
            if(!tango) { _fun00012_ip = 71; continue _fun00011 }
 68:
            oscar = mike;
 71:
            tango = {};
            tango['channelId'] = oscar;
            mike = function(argFoo) { // Original name: useFocusedParticipant
                mike = argFoo;
                mike = mike.channelId;
                var _closure3_slot0 = mike;
                tango = _closure1_slot3;
                zulu = tango.useRef;
                report = undefined;
                zulu = zulu.bind(tango)(report);
                var _closure3_slot1 = zulu;
                tango = _closure1_slot3;
                zulu = tango.useRef;
                zulu = zulu.bind(tango)(report);
                var _closure3_slot2 = zulu;
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 7;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.useStateFromStoresObject;
                report = _closure1_slot4;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = _closure3_slot0;
                        mike = null;
                        entity = mike != entity;
                        golf = null;
                        if(!entity) { _fun00014_ip = 40; continue _fun00013 }
 18:
                        report = _closure1_slot4;
                        tango = report.getSelectedParticipantId;
                        entity = _closure3_slot0;
                        golf = tango.bind(report)(entity);
 40:
                        entity = mike != golf;
                        oscar = null;
                        if(!entity) { _fun00014_ip = 97; continue _fun00013 }
 49:
                        entity = _closure3_slot0;
                        entity = mike != entity;
                        oscar = null;
                        if(!entity) { _fun00014_ip = 97; continue _fun00013 }
 62:
                        report = _closure1_slot4;
                        tango = report.getParticipant;
                        entity = _closure3_slot0;
                        entity = tango.bind(report)(entity, golf);
                        tango = mike != entity;
                        oscar = null;
                        if(!tango) { _fun00014_ip = 97; continue _fun00013 }
 94:
                        oscar = entity;
 97:
                        entity = _closure3_slot1;
                        entity = entity.current;
                        tango = undefined;
                        if(!(tango === entity)) { _fun00014_ip = 160; continue _fun00013 }
 112:
                        report = _closure3_slot1;
                        golf = mike == oscar;
                        entity = undefined;
                        if(golf) { _fun00014_ip = 130; continue _fun00013 }
 125:
                        entity = oscar.id;
 130:
                        report['current'] = entity;
                        report = _closure3_slot2;
                        golf = mike == oscar;
                        entity = undefined;
                        if(golf) { _fun00014_ip = 154; continue _fun00013 }
 149:
                        entity = oscar.type;
 154:
                        report['current'] = entity;
 160:
                        entity = _closure3_slot1;
                        report = entity.current;
                        golf = mike == oscar;
                        entity = undefined;
                        if(golf) { _fun00014_ip = 183; continue _fun00013 }
 178:
                        entity = oscar.id;
 183:
                        if(!(report === entity)) { _fun00014_ip = 320; continue _fun00013 }
 190:
                        entity = {};
                        report = mike == oscar;
                        verify = undefined;
                        if(report) { _fun00014_ip = 206; continue _fun00013 }
 201:
                        verify = oscar.type;
 206:
                        report = _closure1_slot8;
                        options = report.ACTIVITY;
                        report = undefined;
                        if(!(verify !== options)) { _fun00014_ip = 282; continue _fun00013 }
 225:
                        verify = mike == oscar;
                        options = undefined;
                        if(verify) { _fun00014_ip = 239; continue _fun00013 }
 234:
                        options = oscar.type;
 239:
                        golf = _closure1_slot8;
                        golf = golf.PRESENCE_EMBEDDED_ACTIVITY;
                        report = undefined;
                        if(!(options !== golf)) { _fun00014_ip = 282; continue _fun00013 }
 255:
                        options = mike == oscar;
                        golf = undefined;
                        if(options) { _fun00014_ip = 270; continue _fun00013 }
 264:
                        golf = oscar.streamId;
 270:
                        options = mike != golf;
                        report = undefined;
                        if(!options) { _fun00014_ip = 282; continue _fun00013 }
 279:
                        report = golf;
 282:
                        entity['focusedParticipantStreamId'] = report;
                        golf = mike == oscar;
                        report = undefined;
                        if(golf) { _fun00014_ip = 301; continue _fun00013 }
 296:
                        report = oscar.type;
 301:
                        oscar = mike != report;
                        mike = undefined;
                        if(!oscar) { _fun00014_ip = 313; continue _fun00013 }
 310:
                        mike = report;
 313:
                        entity['focusedParticipantType'] = mike;
                        _fun00014_ip = 344; continue _fun00013;
 320:
                        mike = {};
                        mike['focusedParticipantStreamId'] = tango;
                        zulu = _closure3_slot2;
                        zulu = zulu.current;
                        mike['focusedParticipantType'] = zulu;
                        entity = mike;
 344:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = mike.bind(options)(tango);
            verify = mike.focusedParticipantStreamId;
            mike = mike.focusedParticipantType;
            tango = _closure1_slot12;
            zulu = {};
            zulu['channelId'] = oscar;
            zulu['focusedParticipantStreamId'] = verify;
            zulu = tango.bind(options)(zulu);
            golf = zulu.selectedStreamId;
            tango = zulu.selectedParticipantUserId;
            zulu = zulu.selectedParticipantSpeaking;
            if(!(report != verify)) { _fun00012_ip = 146; continue _fun00011 }
 143:
            golf = verify;
 146:
            verify = report != golf;
            report = undefined;
            if(!verify) { _fun00012_ip = 158; continue _fun00011 }
 155:
            report = golf;
 158:
            golf = {};
            golf['selectedParticipantStreamId'] = report;
            entity = function(argFoo) { // Original name: useSetHasActiveVideoOutputSink
                mike = argFoo;
                report = mike.selectedParticipantStreamId;
                var _closure3_slot0 = report;
                tango = _closure1_slot3;
                zulu = tango.useEffect;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zulu = _closure3_slot0;
                        var _closure4_slot0 = zulu;
                        mike = null;
                        if(!(mike == zulu)) { _fun00016_ip = 23; continue _fun00015 }
 19:
                        mike = undefined;
                        return mike;
 23:
                        mike = 'useExternalPipParticipant';
                        var _closure4_slot1 = mike;
                        zulu = _closure1_slot6;
                        mike = zulu.getMediaEngine;
                        tango = mike.bind(zulu)();
                        zulu = tango.eachConnection;
                        mike = function(argFoo) {
                            report = argFoo;
                            tango = report.setHasActiveVideoOutputSink;
                            zulu = _closure4_slot0;
                            mike = _closure4_slot1;
                            entity = true;
                            entity = tango.bind(report)(zulu, entity, mike);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        entity = function() {
                            mike = _closure1_slot6;
                            entity = mike.getMediaEngine;
                            zulu = entity.bind(mike)();
                            mike = zulu.eachConnection;
                            entity = function(argFoo) {
                                report = argFoo;
                                tango = report.setHasActiveVideoOutputSink;
                                zulu = _closure4_slot0;
                                mike = _closure4_slot1;
                                entity = false;
                                entity = tango.bind(report)(zulu, entity, mike);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            entity = entity.bind(options)(golf);
            entity = {};
            entity['channelId'] = oscar;
            entity['selectedParticipantStreamId'] = report;
            entity['selectedParticipantUserId'] = tango;
            entity['selectedParticipantSpeaking'] = zulu;
            entity['focusedParticipantType'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();