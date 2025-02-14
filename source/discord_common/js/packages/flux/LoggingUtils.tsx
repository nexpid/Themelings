// discord_common/js/packages/flux/LoggingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    entity = argFoo;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun7059: for(var _fun7059_ip = 0; ; ) switch(_fun7059_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun7059_ip = 46; continue _fun7059 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun7059_ip = 55; continue _fun7059 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun7059_ip = 343; continue _fun7059 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun7059_ip = 323; continue _fun7059 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun7059_ip = 283; continue _fun7059 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun7059_ip = 270; continue _fun7059 }
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
            if(!golf) { _fun7059_ip = 163; continue _fun7059 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun7059_ip = 179; continue _fun7059 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun7059_ip = 249; continue _fun7059 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun7059_ip = 249; continue _fun7059 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun7059_ip = 234; continue _fun7059 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun7059_ip = 247; continue _fun7059 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun7059_ip = 265; continue _fun7059;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun7059_ip = 283; continue _fun7059;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun7059_ip = 323; continue _fun7059 }
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
            if(!tango) { _fun7059_ip = 330; continue _fun7059 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun7060: for(var _fun7060_ip = 0; ; ) switch(_fun7060_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun7060_ip = 56; continue _fun7060 }
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
                    _fun7060_ip = 67; continue _fun7060;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun7061: for(var _fun7061_ip = 0; ; ) switch(_fun7061_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun7061_ip = 23; continue _fun7061 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun7061_ip = 33; continue _fun7061 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun7061_ip = 70; continue _fun7061 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun7061_ip = 55; continue _fun7061 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun7062: for(var _fun7062_ip = 0; ; ) switch(_fun7062_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun7062_ip = 48; continue _fun7062 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun7062_ip = 86; continue _fun7062;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun7063: for(var _fun7063_ip = 0; ; ) switch(_fun7063_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun7063_ip = 74; continue _fun7063;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    mike = 0;
    tango = golf[mike];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.Logger;
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'Flux';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.EventEmitter;
    tango = function(argFoo) {
        tango = function() { // Original name: ActionLogger
            _fun7067: for(var _fun7067_ip = 0; ; ) switch(_fun7067_ip) {
 0:
                entity = arguments[0];
                report = this;
                tango = undefined;
                if(!(entity === tango)) { _fun7067_ip = 14; continue _fun7067 }
 12:
                entity = {};
 14:
                mike = entity.persist;
                if(!(mike === tango)) { _fun7067_ip = 26; continue _fun7067 }
 24:
                mike = false;
 26:
                oscar = _closure1_slot3;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                entity = _closure1_slot13;
                entity = entity.bind(tango)(report, zulu);
                zulu = new Array(0);
                entity['logs'] = zulu;
                entity['persist'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'log';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            _fun7068: for(var _fun7068_ip = 0; ; ) switch(_fun7068_ip) {
 0:
                offset = argFoo;
                report = this;
                var _closure3_slot0 = report;
                mike = offset;
                var _closure3_slot1 = offset;
                oscar = argBar;
                options = undefined;
                zulu = undefined;
                golf = _closure1_slot10;
                verify = golf.prototype;
                verify = Object.create(verify, {constructor: {value: golf}});
                backup = verify;
                foxtrot = offset;
                golf = new backup[golf](foxtrot, romeo);
                offset = golf instanceof Object ? golf : verify;
                zulu = offset;
                var _closure3_slot2 = offset;
                yankee = _closure1_slot1;
                golf = _closure1_slot2;
                verify = 6;
                golf = golf[verify];
                golf = yankee.bind(options)(golf);
                yankee = golf.performance;
                golf = yankee.now;
                golf = golf.bind(yankee)();
                offset['startTime'] = golf;
 104: // try_start_0 // try_start_1
                entity = function(argFoo, argBar) {
                    _fun7069: for(var _fun7069_ip = 0; ; ) switch(_fun7069_ip) {
 0:
                        golf = argFoo;
                        zulu = golf;
                        report = argBar;
                        options = undefined;
                        entity = undefined;
                        mike = undefined;
                        tango = undefined;
                        oscar = {};
                        oscar['name'] = golf;
                        golf = -1;
                        oscar['time'] = golf;
                        mike = oscar;
                        offset = _closure1_slot1;
                        golf = _closure1_slot2;
                        verify = 6;
                        golf = golf[verify];
                        golf = offset.bind(options)(golf);
                        offset = golf.performance;
                        golf = offset.now;
                        tango = golf.bind(offset)();
 75: // try_start_0
                        entity = report.bind(options)();
 79: // try_end0
                        golf = mike;
                        offset = _closure1_slot1;
                        report = _closure1_slot2;
                        report = report[verify];
                        report = offset.bind(options)(report);
                        offset = report.performance;
                        report = offset.now;
                        offset = report.bind(offset)();
                        report = tango;
                        report = offset - report;
                        golf['time'] = report;
                        golf = _closure3_slot0;
                        golf = golf.persist;
                        if(!golf) { _fun7069_ip = 166; continue _fun7069 }
 143:
                        golf = _closure3_slot2;
                        yankee = golf.traces;
                        offset = yankee.push;
                        golf = mike;
                        golf = offset.bind(yankee)(golf);
 166:
                        foxtrot = _closure3_slot0;
                        romeo = foxtrot.emit;
                        report = _closure3_slot1;
                        sizing = report.type;
                        kilo = zulu;
                        report = mike;
                        backup = report.time;
                        output = 'trace';
                        result = foxtrot;
                        report = result[romeo](output, sizing, kilo, backup, foxtrot);
                        return entity;
 210: // catch_target0
                        CatchBlockStart(arg_register=0);
                        report = mike;
                        golf = _closure1_slot1;
                        oscar = _closure1_slot2;
                        oscar = oscar[verify];
                        oscar = golf.bind(options)(oscar);
                        golf = oscar.performance;
                        oscar = golf.now;
                        oscar = oscar.bind(golf)();
                        tango = oscar - tango;
                        report['time'] = tango;
                        report = _closure3_slot0;
                        report = report.persist;
                        if(!report) { _fun7069_ip = 296; continue _fun7069 }
 273:
                        report = _closure3_slot2;
                        golf = report.traces;
                        oscar = golf.push;
                        report = mike;
                        report = oscar.bind(golf)(report);
 296:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure3_slot1;
                        sizing = tango.type;
                        kilo = zulu;
                        backup = mike.time;
                        output = 'trace';
                        result = golf;
                        mike = result[oscar](output, sizing, kilo, backup, foxtrot);
                        throw entity;
                    }
                };
                entity = oscar.bind(options)(entity);
 114: // try_end0 // try_end1
                oscar = zulu;
                golf = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[verify];
                entity = golf.bind(options)(entity);
                golf = entity.performance;
                entity = golf.now;
                golf = entity.bind(golf)();
                entity = oscar.startTime;
                entity = golf - entity;
                oscar['totalTime'] = entity;
                oscar = report.persist;
                entity = oscar;
                if(!oscar) { _fun7068_ip = 192; continue _fun7068 }
 177:
                oscar = zulu;
                golf = oscar.totalTime;
                oscar = 0;
                entity = golf > oscar;
 192:
                if(!entity) { _fun7068_ip = 214; continue _fun7068 }
 195:
                golf = report.logs;
                oscar = golf.push;
                entity = zulu;
                entity = oscar.bind(golf)(entity);
 214:
                entity = report.logs;
                oscar = entity.length;
                entity = 1000;
                if(!(oscar > entity)) { _fun7068_ip = 251; continue _fun7068 }
 235:
                oscar = report.logs;
                entity = oscar.shift;
                entity = entity.bind(oscar)();
 251:
                golf = report.emit;
                oscar = mike;
                entity = 'log';
                entity = golf.bind(report)(entity, oscar);
                entity = zulu;
                return entity;
 275: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=0);
                oscar = zulu;
                oscar['error'] = entity;
                throw entity;
 288: // try_end2 // catch_target1 // catch_target2
                CatchBlockStart(arg_register=0);
                oscar = zulu;
                golf = _closure1_slot1;
                tango = _closure1_slot2;
                tango = tango[verify];
                tango = golf.bind(options)(tango);
                golf = tango.performance;
                tango = golf.now;
                golf = tango.bind(golf)();
                tango = oscar.startTime;
                tango = golf - tango;
                oscar['totalTime'] = tango;
                oscar = report.persist;
                tango = oscar;
                if(!oscar) { _fun7068_ip = 368; continue _fun7068 }
 353:
                oscar = zulu;
                golf = oscar.totalTime;
                oscar = 0;
                tango = golf > oscar;
 368:
                if(!tango) { _fun7068_ip = 387; continue _fun7068 }
 371:
                oscar = report.logs;
                tango = oscar.push;
                zulu = tango.bind(oscar)(zulu);
 387:
                zulu = report.logs;
                tango = zulu.length;
                zulu = 1000;
                if(!(tango > zulu)) { _fun7068_ip = 424; continue _fun7068 }
 408:
                tango = report.logs;
                zulu = tango.shift;
                zulu = zulu.bind(tango)();
 424:
                tango = report.emit;
                zulu = mike;
                mike = 'log';
                mike = tango.bind(report)(mike, zulu);
                throw entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getSlowestActions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun7070: for(var _fun7070_ip = 0; ; ) switch(_fun7070_ip) {
 0:
                foxtrot = argFoo;
                tango = arguments[1];
                var _closure3_slot0 = foxtrot;
                verify = undefined;
                if(!(tango === verify)) { _fun7070_ip = 21; continue _fun7070 }
 18:
                tango = 20;
 21:
                var _closure3_slot1 = verify;
                var _closure3_slot2 = verify;
                entity = new Array(0);
                oscar = _closure1_slot11;
                mike = this;
                mike = mike.logs;
                yankee = oscar.bind(verify)(mike);
                golf = yankee.bind(verify)();
                oscar = golf.done;
                mike = null;
                offset = golf;
                options = undefined;
                golf = undefined;
                if(oscar) { _fun7070_ip = 218; continue _fun7070 }
 78:
                kilo = offset.value;
                if(!(mike != foxtrot)) { _fun7070_ip = 96; continue _fun7070 }
 87:
                oscar = kilo.name;
                if(!(oscar === foxtrot)) { _fun7070_ip = 200; continue _fun7070 }
 96:
                romeo = _closure1_slot11;
                oscar = kilo.traces;
                backup = romeo.bind(verify)(oscar);
                sizing = backup.bind(verify)();
                oscar = sizing.done;
                romeo = sizing;
                options = romeo;
                golf = backup;
                if(oscar) { _fun7070_ip = 200; continue _fun7070 }
 132:
                output = romeo.value;
                sizing = entity.push;
                result = output.name;
                oscar = new Array(3);
                oscar[0] = result;
                result = kilo.name;
                oscar[1] = result;
                output = output.time;
                oscar[2] = output;
                oscar = sizing.bind(entity)(oscar);
                sizing = backup.bind(verify)();
                oscar = sizing.done;
                romeo = sizing;
                options = romeo;
                golf = backup;
                if(!oscar) { _fun7070_ip = 132; continue _fun7070 }
 200:
                romeo = yankee.bind(verify)();
                oscar = romeo.done;
                offset = romeo;
                if(!oscar) { _fun7070_ip = 78; continue _fun7070 }
 218:
                golf = entity.sort;
                oscar = function(argFoo, argBar) {
                    entity = argBar;
                    zulu = 2;
                    mike = entity[zulu];
                    entity = argFoo;
                    entity = entity[zulu];
                    entity = mike - entity;
                    return entity;
                };
                oscar = golf.bind(entity)(oscar);
                oscar = entity.length;
                if(!(oscar > tango)) { _fun7070_ip = 249; continue _fun7070 }
 243:
                entity['length'] = tango;
 249:
                oscar = 0;
                _closure3_slot1 = oscar;
                _closure3_slot2 = oscar;
                golf = entity.map;
                tango = function(argFoo) {
                    _fun7072: for(var _fun7072_ip = 0; ; ) switch(_fun7072_ip) {
 0:
                        tango = argFoo;
                        entity = tango[Symbol.iterator];
                        tango = entity().next;
                        mike = tango().value;
                        zulu = entity;
                        golf = undefined;
                        zulu = zulu === golf;
                        report = undefined;
                        if(zulu) { _fun7072_ip = 27; continue _fun7072 }
 24:
                        report = mike;
 27:
                        verify = undefined;
                        if(zulu) { _fun7072_ip = 57; continue _fun7072 }
 32:
                        oscar = tango().value;
                        mike = entity;
                        mike = mike === golf;
                        verify = undefined;
                        zulu = mike;
                        if(mike) { _fun7072_ip = 57; continue _fun7072 }
 51:
                        verify = oscar;
                        zulu = mike;
 57:
                        mike = undefined;
                        if(zulu) { _fun7072_ip = 87; continue _fun7072 }
 62:
                        oscar = tango().value;
                        tango = entity;
                        tango = tango === golf;
                        mike = undefined;
                        zulu = tango;
                        if(tango) { _fun7072_ip = 87; continue _fun7072 }
 81:
                        mike = oscar;
                        zulu = tango;
 87:
                        if(zulu) { _fun7072_ip = 93; continue _fun7072 }
 90:
                        entity.return();
 93:
                        entity = global;
                        zulu = entity.HermesInternal;
                        tango = zulu.concat;
                        zulu = '';
                        oscar = tango.bind(zulu)(report);
                        golf = _closure3_slot0;
                        report = null;
                        zulu = oscar;
                        if(!(report == golf)) { _fun7072_ip = 160; continue _fun7072 }
 131:
                        report = entity.HermesInternal;
                        options = report.concat;
                        golf = '<';
                        report = '>';
                        report = options.bind(golf)(verify, report);
                        zulu = oscar + report;
 160:
                        golf = entity.Math;
                        oscar = golf.max;
                        report = zulu.length;
                        entity = _closure3_slot1;
                        entity = oscar.bind(golf)(report, entity);
                        _closure3_slot1 = entity;
                        entity = new Array(2);
                        entity[0] = zulu;
                        entity[1] = mike;
                        return entity;
                    }
                };
                options = golf.bind(entity)(tango);
                golf = options.map;
                tango = function(argFoo) {
                    _fun7073: for(var _fun7073_ip = 0; ; ) switch(_fun7073_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        report = zulu().value;
                        mike = entity;
                        golf = undefined;
                        mike = mike === golf;
                        tango = undefined;
                        if(mike) { _fun7073_ip = 27; continue _fun7073 }
 24:
                        tango = report;
 27:
                        oscar = undefined;
                        if(mike) { _fun7073_ip = 57; continue _fun7073 }
 32:
                        report = zulu().value;
                        zulu = entity;
                        zulu = zulu === golf;
                        oscar = undefined;
                        mike = zulu;
                        if(zulu) { _fun7073_ip = 57; continue _fun7073 }
 51:
                        oscar = report;
                        mike = zulu;
 57:
                        if(mike) { _fun7073_ip = 63; continue _fun7073 }
 60:
                        entity.return();
 63:
                        mike = _closure3_slot2;
                        mike = mike + oscar;
                        _closure3_slot2 = mike;
                        zulu = tango.padEnd;
                        mike = _closure3_slot1;
                        entity = 1;
                        mike = mike + entity;
                        entity = ' ';
                        yankee = zulu.bind(tango)(mike, entity);
                        entity = global;
                        entity = entity.HermesInternal;
                        tango = entity.concat;
                        romeo = '';
                        offset = ' - ';
                        options = 'ms';
                        verify = oscar;
                        entity = romeo[tango](yankee, offset, verify, options, golf);
                        return entity;
                    }
                };
                golf = golf.bind(options)(tango);
                tango = golf.join;
                yankee = '\n';
                offset = tango.bind(golf)(yankee);
                tango = entity.length;
                tango = oscar === tango;
                if(tango) { _fun7070_ip = 333; continue _fun7070 }
 315:
                golf = entity[oscar];
                oscar = 2;
                golf = golf[oscar];
                oscar = 10;
                tango = golf < oscar;
 333:
                if(tango) { _fun7070_ip = 347; continue _fun7070 }
 336:
                golf = _closure3_slot2;
                oscar = 20;
                tango = golf < oscar;
 347:
                if(tango) { _fun7070_ip = 538; continue _fun7070 }
 353:
                options = _closure1_slot8;
                golf = options.log;
                oscar = _closure1_slot0;
                romeo = mike == oscar;
                tango = undefined;
                if(romeo) { _fun7070_ip = 381; continue _fun7070 }
 376:
                tango = oscar.HermesInternal;
 381:
                oscar = 'Using Hermes:';
                tango = verify === tango;
                tango = !tango;
                tango = golf.bind(options)(oscar, tango);
                golf = _closure1_slot8;
                oscar = golf.log;
                mike = mike != foxtrot;
                verify = '';
                options = verify;
                if(!mike) { _fun7070_ip = 455; continue _fun7070 }
 424:
                mike = global;
                mike = mike.HermesInternal;
                romeo = mike.concat;
                tango = '\n\n=== ';
                mike = ' ===';
                options = romeo.bind(tango)(foxtrot, mike);
 455:
                mike = global;
                tango = mike.HermesInternal;
                tango = tango.concat;
                vacuum = verify;
                control = options;
                source = yankee;
                update = offset;
                echo = yankee;
                tango = vacuum[tango](control, source, update, echo, result);
                tango = oscar.bind(golf)(tango);
                tango = _closure1_slot8;
                zulu = tango.log;
                golf = _closure3_slot2;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = 'Total Time: ';
                mike = 'ms';
                mike = oscar.bind(report)(golf, mike);
                mike = zulu.bind(tango)(mike);
 538:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getLastActionMetrics';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun7074: for(var _fun7074_ip = 0; ; ) switch(_fun7074_ip) {
 0:
                tango = arguments[1];
                verify = undefined;
                if(!(tango === verify)) { _fun7074_ip = 14; continue _fun7074 }
 11:
                tango = 20;
 14:
                var _closure3_slot0 = verify;
                var _closure3_slot1 = verify;
                oscar = {};
                mike = _closure1_slot11;
                entity = this;
                entity = entity.logs;
                report = mike.bind(verify)(entity);
                mike = report.bind(verify)();
                entity = mike.done;
                if(entity) { _fun7074_ip = 165; continue _fun7074 }
 57:
                yankee = mike.value;
                options = _closure1_slot11;
                entity = yankee.traces;
                offset = options.bind(verify)(entity);
                options = offset.bind(verify)();
                entity = options.done;
                if(entity) { _fun7074_ip = 150; continue _fun7074 }
 89:
                foxtrot = options.value;
                romeo = foxtrot.name;
                backup = foxtrot.name;
                entity = new Array(3);
                entity[0] = backup;
                backup = yankee.name;
                entity[1] = backup;
                foxtrot = foxtrot.time;
                entity[2] = foxtrot;
                oscar[romeo] = entity;
                romeo = offset.bind(verify)();
                entity = romeo.done;
                options = romeo;
                if(!entity) { _fun7074_ip = 89; continue _fun7074 }
 150:
                options = report.bind(verify)();
                entity = options.done;
                mike = options;
                if(!entity) { _fun7074_ip = 57; continue _fun7074 }
 165:
                mike = global;
                report = mike.Object;
                entity = report.values;
                entity = entity.bind(report)(oscar);
                oscar = entity.sort;
                report = function(argFoo, argBar) {
                    entity = argBar;
                    zulu = 2;
                    mike = entity[zulu];
                    entity = argFoo;
                    entity = entity[zulu];
                    entity = mike - entity;
                    return entity;
                };
                report = oscar.bind(entity)(report);
                report = entity.length;
                if(!(report > tango)) { _fun7074_ip = 214; continue _fun7074 }
 208:
                entity['length'] = tango;
 214:
                report = 0;
                _closure3_slot0 = report;
                _closure3_slot1 = report;
                oscar = entity.map;
                tango = function(argFoo) {
                    _fun7076: for(var _fun7076_ip = 0; ; ) switch(_fun7076_ip) {
 0:
                        report = argFoo;
                        entity = report[Symbol.iterator];
                        report = entity().next;
                        mike = report().value;
                        zulu = entity;
                        golf = undefined;
                        tango = zulu === golf;
                        zulu = undefined;
                        if(tango) { _fun7076_ip = 27; continue _fun7076 }
 24:
                        zulu = mike;
 27:
                        if(tango) { _fun7076_ip = 41; continue _fun7076 }
 30:
                        mike = report().value;
                        mike = entity;
                        tango = mike === golf;
 41:
                        mike = undefined;
                        if(tango) { _fun7076_ip = 71; continue _fun7076 }
 46:
                        oscar = report().value;
                        report = entity;
                        report = report === golf;
                        mike = undefined;
                        tango = report;
                        if(report) { _fun7076_ip = 71; continue _fun7076 }
 65:
                        mike = oscar;
                        tango = report;
 71:
                        if(tango) { _fun7076_ip = 77; continue _fun7076 }
 74:
                        entity.return();
 77:
                        entity = global;
                        golf = entity.Math;
                        oscar = golf.max;
                        report = zulu.length;
                        entity = _closure3_slot0;
                        entity = oscar.bind(golf)(report, entity);
                        _closure3_slot0 = entity;
                        entity = new Array(2);
                        entity[0] = zulu;
                        entity[1] = mike;
                        return entity;
                    }
                };
                options = oscar.bind(entity)(tango);
                oscar = options.map;
                tango = function(argFoo) {
                    _fun7077: for(var _fun7077_ip = 0; ; ) switch(_fun7077_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        report = zulu().value;
                        mike = entity;
                        golf = undefined;
                        mike = mike === golf;
                        tango = undefined;
                        if(mike) { _fun7077_ip = 27; continue _fun7077 }
 24:
                        tango = report;
 27:
                        oscar = undefined;
                        if(mike) { _fun7077_ip = 57; continue _fun7077 }
 32:
                        report = zulu().value;
                        zulu = entity;
                        zulu = zulu === golf;
                        oscar = undefined;
                        mike = zulu;
                        if(zulu) { _fun7077_ip = 57; continue _fun7077 }
 51:
                        oscar = report;
                        mike = zulu;
 57:
                        if(mike) { _fun7077_ip = 63; continue _fun7077 }
 60:
                        entity.return();
 63:
                        mike = _closure3_slot1;
                        mike = mike + oscar;
                        _closure3_slot1 = mike;
                        zulu = tango.padEnd;
                        mike = _closure3_slot0;
                        entity = 1;
                        mike = mike + entity;
                        entity = ' ';
                        yankee = zulu.bind(tango)(mike, entity);
                        entity = global;
                        entity = entity.HermesInternal;
                        tango = entity.concat;
                        romeo = '';
                        offset = ' - ';
                        options = 'ms';
                        verify = oscar;
                        entity = romeo[tango](yankee, offset, verify, options, golf);
                        return entity;
                    }
                };
                options = oscar.bind(options)(tango);
                oscar = options.join;
                tango = '\n';
                yankee = oscar.bind(options)(tango);
                tango = entity.length;
                tango = report === tango;
                if(tango) { _fun7074_ip = 291; continue _fun7074 }
 280:
                oscar = _closure3_slot1;
                report = 8;
                tango = oscar < report;
 291:
                if(tango) { _fun7074_ip = 429; continue _fun7074 }
 297:
                oscar = _closure1_slot8;
                report = oscar.log;
                tango = _closure1_slot0;
                zulu = null;
                options = zulu == tango;
                zulu = undefined;
                if(options) { _fun7074_ip = 327; continue _fun7074 }
 322:
                zulu = tango.HermesInternal;
 327:
                tango = mike.HermesInternal;
                options = tango.concat;
                tango = '\nUsing Hermes: ';
                zulu = verify === zulu;
                zulu = !zulu;
                tango = options.bind(tango)(zulu);
                zulu = mike.HermesInternal;
                offset = zulu.concat;
                verify = '\n\n=== ';
                options = argFoo;
                zulu = ' ===\n';
                zulu = offset.bind(verify)(options, zulu, yankee);
                verify = _closure3_slot1;
                mike = mike.HermesInternal;
                options = mike.concat;
                golf = '\nTotal Time: ';
                mike = 'ms\n\n';
                mike = options.bind(golf)(verify, mike);
                mike = report.bind(oscar)(tango, zulu, mike);
 429:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(options);
    var _closure1_slot9 = mike;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: ActionLog
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 0;
            zulu['startTime'] = mike;
            zulu['totalTime'] = mike;
            mike = new Array(0);
            zulu['traces'] = mike;
            mike = _closure1_slot9;
            mike = parseFloat(mike);
            tango = mike + 1;
            _closure1_slot9 = tango;
            zulu['id'] = mike;
            mike = argFoo;
            zulu['action'] = mike;
            mike = global;
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['createdAt'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'name';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity.action;
            entity = entity.type;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'toJSON';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun7081: for(var _fun7081_ip = 0; ; ) switch(_fun7081_ip) {
 0:
                mike = this;
                zulu = mike.createdAt;
                entity = null;
                if(!(entity != zulu)) { _fun7081_ip = 67; continue _fun7081 }
 15:
                entity = {};
                zulu = mike.action;
                zulu = zulu.type;
                entity['actionType'] = zulu;
                zulu = mike.createdAt;
                entity['created_at'] = zulu;
                zulu = mike.totalTime;
                entity['totalTime'] = zulu;
                mike = mike.traces;
                entity['traces'] = mike;
                return entity;
 67:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                tango = 'ActionLog.toJSON: You must complete your logging before calling toJSON';
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot10 = mike;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/flux/LoggingUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['ActionLogger'] = tango;
    zulu['ActionLog'] = mike;
    return entity;
})();