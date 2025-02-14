// app/modules/app_database/modules/ReadStates.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun59096: for(var _fun59096_ip = 0; ; ) switch(_fun59096_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun59096_ip = 46; continue _fun59096 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun59096_ip = 55; continue _fun59096 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun59096_ip = 343; continue _fun59096 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun59096_ip = 323; continue _fun59096 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun59096_ip = 283; continue _fun59096 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun59096_ip = 270; continue _fun59096 }
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
            if(!golf) { _fun59096_ip = 163; continue _fun59096 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun59096_ip = 179; continue _fun59096 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun59096_ip = 249; continue _fun59096 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun59096_ip = 249; continue _fun59096 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun59096_ip = 234; continue _fun59096 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun59096_ip = 247; continue _fun59096 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun59096_ip = 265; continue _fun59096;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun59096_ip = 283; continue _fun59096;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun59096_ip = 323; continue _fun59096 }
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
            if(!tango) { _fun59096_ip = 330; continue _fun59096 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun59097: for(var _fun59097_ip = 0; ; ) switch(_fun59097_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun59097_ip = 56; continue _fun59097 }
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
                    _fun59097_ip = 67; continue _fun59097;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun59098: for(var _fun59098_ip = 0; ; ) switch(_fun59098_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun59098_ip = 23; continue _fun59098 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun59098_ip = 33; continue _fun59098 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun59098_ip = 70; continue _fun59098 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun59098_ip = 55; continue _fun59098 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'ReadStates';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: ReadStates
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot3;
            mike = _closure2_slot1;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = null;
            zulu['readStateVersion'] = mike;
            mike = {};
            report = function(argFoo) { // Original name: CONNECTION_OPEN
                zulu = _closure3_slot0;
                mike = zulu.handleConnectionOpen;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['CONNECTION_OPEN'] = report;
            report = function(argFoo) { // Original name: CHANNEL_PINS_ACK
                zulu = _closure3_slot0;
                mike = zulu.handleReadStateAction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['CHANNEL_PINS_ACK'] = report;
            report = function(argFoo) { // Original name: MESSAGE_ACK
                zulu = _closure3_slot0;
                mike = zulu.handleReadStateAction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['MESSAGE_ACK'] = report;
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC_FINISHED
                _fun59104: for(var _fun59104_ip = 0; ; ) switch(_fun59104_ip) {
 0:
                    entity = argFoo;
                    entity = entity.messagesOnly;
                    if(entity) { _fun59104_ip = 36; continue _fun59104 }
 12:
                    tango = _closure3_slot0;
                    zulu = tango.handleWriteCaches;
                    mike = argBar;
                    entity = false;
                    entity = zulu.bind(tango)(mike, entity);
 36:
                    entity = undefined;
                    return entity;
                }
            };
            mike['BACKGROUND_SYNC_FINISHED'] = report;
            tango = function(argFoo, argBar) { // Original name: WRITE_CACHES
                tango = _closure3_slot0;
                zulu = tango.handleWriteCaches;
                mike = argBar;
                entity = true;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['WRITE_CACHES'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'getAll';
        report['key'] = mike;
        golf = _closure1_slot2;
        mike = undefined;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun59107: for(var _fun59107_ip = 0; ; ) switch(_fun59107_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun59107_ip = 162; continue _fun59107 }
 10:
                    zulu = global;
                    tango = zulu.performance;
                    mike = tango.now;
                    golf = mike.bind(tango)();
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    mike = 6;
                    report = report[mike];
                    mike = undefined;
                    oscar = oscar.bind(mike)(report);
                    report = oscar.readStates;
                    mike = argFoo;
                    report = report.bind(oscar)(mike);
                    mike = report.getMany;
                    mike = mike.bind(report)();
                    SaveGenerator(address=80);
 78:
                    return mike;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun59107_ip = 159; continue _fun59107 }
 86:
                    oscar = zulu.performance;
                    report = oscar.now;
                    oscar = report.bind(oscar)();
                    report = _closure1_slot7;
                    tango = report.log;
                    backup = oscar - golf;
                    romeo = mike.length;
                    zulu = zulu.HermesInternal;
                    options = zulu.concat;
                    kilo = 'asynchronously loaded in ';
                    foxtrot = 'ms (readStates: ';
                    yankee = ')';
                    zulu = kilo[options](backup, foxtrot, romeo, yankee, offset);
                    zulu = tango.bind(report)(zulu);
                    return mike;
 159:
                    return mike;
 162:
                    return entity;
                }
            };
            return entity;
        };
        entity = golf.bind(mike)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getAll
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = null;
            entity = this;
            entity['readStateVersion'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            entity = entity.readState;
            mike = entity.version;
            entity = this;
            entity['readStateVersion'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleReadStateAction';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun59111: for(var _fun59111_ip = 0; ; ) switch(_fun59111_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.readStateVersion;
                tango = null;
                if(!(tango != zulu)) { _fun59111_ip = 67; continue _fun59111 }
 18:
                zulu = entity.version;
                if(!(tango == zulu)) { _fun59111_ip = 55; continue _fun59111 }
 28:
                report = _closure1_slot7;
                tango = report.log;
                zulu = 'Received null read states version';
                zulu = tango.bind(report)(zulu, entity);
                _fun59111_ip = 67; continue _fun59111;
 55:
                entity = entity.version;
                mike['readStateVersion'] = entity;
 67:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleWriteCaches';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun59112: for(var _fun59112_ip = 0; ; ) switch(_fun59112_ip) {
 0:
                oscar = argFoo;
                verify = this;
                report = _closure1_slot6;
                tango = report.getAllReadStates;
                zulu = false;
                tango = tango.bind(report)(zulu);
                zulu = argBar;
                if(!zulu) { _fun59112_ip = 540; continue _fun59112 }
 39:
                zulu = verify.readStateVersion;
                output = null;
                if(!(output != zulu)) { _fun59112_ip = 603; continue _fun59112 }
 54:
                zulu = global;
                options = zulu.Object;
                golf = options.keys;
                offset = _closure1_slot5;
                report = offset.getMutablePrivateChannels;
                report = report.bind(offset)();
                golf = golf.bind(options)(report);
                zulu = zulu.Set;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                context = report;
                record = golf;
                zulu = new context[zulu](record, config);
                sizing = zulu instanceof Object ? zulu : report;
                offset = _closure1_slot0;
                zulu = _closure1_slot1;
                report = 7;
                report = zulu[report];
                options = undefined;
                report = offset.bind(options)(report);
                golf = report.bind(options)(golf);
                report = golf.sort;
                kilo = 8;
                zulu = zulu[kilo];
                zulu = offset.bind(options)(zulu);
                zulu = zulu.compare;
                report = report.bind(golf)(zulu);
                zulu = report.reverse;
                report = zulu.bind(report)();
                zulu = report.value;
                report = zulu.bind(report)();
                zulu = 0;
                report = report[zulu];
                golf = output != report;
                zulu = '0';
                offset = zulu;
                if(!golf) { _fun59112_ip = 215; continue _fun59112 }
 212:
                offset = report;
 215:
                report = _closure1_slot8;
                backup = report.bind(options)(tango);
                golf = backup.bind(options)();
                report = golf.done;
                foxtrot = 1;
                yankee = offset;
                romeo = zulu;
                zulu = romeo;
                offset = yankee;
                if(report) { _fun59112_ip = 431; continue _fun59112 }
 254:
                source = golf.value;
                report = source._lastMessageId;
                echo = romeo;
                result = yankee;
                if(!(output != report)) { _fun59112_ip = 401; continue _fun59112 }
 278:
                update = _closure1_slot0;
                report = _closure1_slot1;
                report = report[kilo];
                control = update.bind(options)(report);
                update = control.compare;
                report = source._lastMessageId;
                report = update.bind(control)(report, romeo);
                update = romeo;
                if(!(foxtrot === report)) { _fun59112_ip = 326; continue _fun59112 }
 320:
                update = source._lastMessageId;
 326:
                control = sizing.has;
                report = source.channelId;
                control = control.bind(sizing)(report);
                if(!control) { _fun59112_ip = 383; continue _fun59112 }
 344:
                vacuum = _closure1_slot0;
                report = _closure1_slot1;
                report = report[kilo];
                sequence = vacuum.bind(options)(report);
                vacuum = sequence.compare;
                report = source._lastMessageId;
                report = vacuum.bind(sequence)(report, yankee);
                control = foxtrot === report;
 383:
                report = yankee;
                if(!control) { _fun59112_ip = 395; continue _fun59112 }
 389:
                report = source._lastMessageId;
 395:
                result = report;
                echo = update;
 401:
                update = backup.bind(options)();
                report = update.done;
                romeo = echo;
                yankee = result;
                golf = update;
                zulu = romeo;
                offset = yankee;
                if(!report) { _fun59112_ip = 254; continue _fun59112 }
 431:
                golf = _closure1_slot0;
                yankee = _closure1_slot1;
                report = 6;
                report = yankee[report];
                golf = golf.bind(options)(report);
                report = golf.nonGuildVersionsTransaction;
                golf = report.bind(golf)(oscar);
                report = golf.putAll;
                options = {};
                yankee = 'highest_last_message_id';
                options['id'] = yankee;
                options['versionString'] = zulu;
                zulu = new Array(3);
                zulu[0] = options;
                options = {};
                yankee = 'private_channels_version';
                options['id'] = yankee;
                options['versionString'] = offset;
                zulu[1] = options;
                options = {};
                offset = 'read_state_version';
                options['id'] = offset;
                verify = verify.readStateVersion;
                options['version'] = verify;
                zulu[2] = options;
                zulu = report.bind(golf)(zulu);
 540:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.readStatesTransaction;
                report = zulu.bind(report)(oscar);
                var _closure3_slot0 = report;
                zulu = report.delete;
                zulu = zulu.bind(report)();
                zulu = tango.forEach;
                mike = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure3_slot0;
                    mike = zulu.put;
                    options = tango.type;
                    golf = tango.channelId;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    report = '';
                    entity = '-';
                    entity = oscar.bind(report)(options, entity, golf);
                    entity = mike.bind(zulu)(entity, tango);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
 603:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/ReadStates.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();