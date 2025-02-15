// discord_common/js/packages/kv-storage/js/raw/Runtime.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun37921: for(var _fun37921_ip = 0; ; ) switch(_fun37921_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun37921_ip = 46; continue _fun37921 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun37921_ip = 55; continue _fun37921 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun37921_ip = 343; continue _fun37921 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun37921_ip = 323; continue _fun37921 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun37921_ip = 283; continue _fun37921 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun37921_ip = 270; continue _fun37921 }
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
            if(!golf) { _fun37921_ip = 163; continue _fun37921 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun37921_ip = 179; continue _fun37921 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun37921_ip = 249; continue _fun37921 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun37921_ip = 249; continue _fun37921 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun37921_ip = 234; continue _fun37921 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun37921_ip = 247; continue _fun37921 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun37921_ip = 265; continue _fun37921;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun37921_ip = 283; continue _fun37921;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun37921_ip = 323; continue _fun37921 }
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
            if(!tango) { _fun37921_ip = 330; continue _fun37921 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun37922: for(var _fun37922_ip = 0; ; ) switch(_fun37922_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun37922_ip = 56; continue _fun37922 }
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
                    _fun37922_ip = 67; continue _fun37922;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun37923: for(var _fun37923_ip = 0; ; ) switch(_fun37923_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun37923_ip = 23; continue _fun37923 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun37923_ip = 33; continue _fun37923 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun37923_ip = 70; continue _fun37923 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun37923_ip = 55; continue _fun37923 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tango = global;
    offset = tango.Object;
    options = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, golf);
    golf = 0;
    options = oscar[golf];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = tango.process;
    options = options.env;
    verify = options.KV_STORAGE_LOGGING;
    options = '1';
    options = options === verify;
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.Logger;
    options = offset.prototype;
    verify = Object.create(options, {constructor: {value: offset}});
    foxtrot = 'Runtime';
    backup = verify;
    options = new backup[offset](foxtrot, romeo);
    options = options instanceof Object ? options : verify;
    var _closure1_slot5 = options;
    mike = function() {
        report = _closure1_slot3;
        tango = function() { // Original name: Runtime
            tango = _closure1_slot2;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = tango;
        entity = {};
        zulu = 'nextId';
        entity['key'] = zulu;
        zulu = function() { // Original name: value
            mike = this;
            entity = mike.counter;
            entity = entity + 1;
            mike['counter'] = entity;
            return entity;
        };
        entity['value'] = zulu;
        zulu = new Array(11);
        zulu[0] = entity;
        entity = {};
        oscar = 'executeAsync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            mike = argFoo;
            var _closure3_slot1 = mike;
            mike = argBar;
            var _closure3_slot2 = mike;
            mike = zulu.initialize;
            mike = mike.bind(zulu)();
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                mike = _closure3_slot0;
                entity = mike.nextId;
                report = entity.bind(mike)();
                zulu = _closure3_slot2;
                entity = undefined;
                zulu = zulu.bind(entity)(report);
                tango = mike.pending;
                zulu = tango.set;
                mike = {};
                mike['id'] = report;
                oscar = _closure3_slot1;
                mike['tag'] = oscar;
                oscar = global;
                golf = oscar.performance;
                oscar = golf.now;
                oscar = oscar.bind(golf)();
                mike['started'] = oscar;
                oscar = argFoo;
                mike['resolve'] = oscar;
                oscar = argBar;
                mike['reject'] = oscar;
                mike = zulu.bind(tango)(report, mike);
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'addCompletionCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            mike = this;
            zulu = mike.completionCallbacks;
            mike = zulu.push;
            mike = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'addDatabaseStateCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            mike = this;
            zulu = mike.dbStateCallbacks;
            mike = zulu.push;
            mike = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'removeCompletionCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            zulu = argFoo;
            var _closure3_slot0 = zulu;
            tango = mike.completionCallbacks;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['completionCallbacks'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'removeDatabaseStateCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            zulu = argFoo;
            var _closure3_slot0 = zulu;
            tango = mike.dbStateCallbacks;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['dbStateCallbacks'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'onResponse';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun37935: for(var _fun37935_ip = 0; ; ) switch(_fun37935_ip) {
 0:
                tango = argFoo;
                golf = argBar;
                zulu = this;
                entity = global;
                mike = entity.performance;
                entity = mike.now;
                report = entity.bind(mike)();
                oscar = zulu.pending;
                mike = oscar.get;
                entity = tango.id;
                mike = mike.bind(oscar)(entity);
                entity = null;
                if(!(entity != mike)) { _fun37935_ip = 127; continue _fun37935 }
 53:
                verify = zulu.pending;
                options = verify.delete;
                oscar = tango.id;
                oscar = options.bind(verify)(oscar);
                oscar = tango.timings;
                options = entity != golf;
                entity = 0;
                if(!options) { _fun37935_ip = 92; continue _fun37935 }
 89:
                entity = golf;
 92:
                oscar['materializationTimeNanoseconds'] = entity;
                entity = zulu.completeOperation;
                entity = entity.bind(zulu)(mike, tango, report);
                entity = zulu.resolveOperation;
                entity = entity.bind(zulu)(mike, tango);
 127:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[6] = entity;
        entity = {};
        oscar = 'onStatus';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun37936: for(var _fun37936_ip = 0; ; ) switch(_fun37936_ip) {
 0:
                report = argFoo;
                zulu = _closure1_slot6;
                entity = this;
                mike = entity.dbStateCallbacks;
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun37936_ip = 75; continue _fun37936 }
 38:
                golf = zulu.value;
                oscar = report.handle;
                mike = report.state;
                mike = golf.bind(entity)(oscar, mike);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun37936_ip = 38; continue _fun37936 }
 75:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[7] = entity;
        entity = {};
        oscar = 'resolveOperation';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun37937: for(var _fun37937_ip = 0; ; ) switch(_fun37937_ip) {
 0:
                zulu = argFoo;
                entity = argBar;
                mike = entity.ok;
                if(mike) { _fun37937_ip = 84; continue _fun37937 }
 15:
                tango = zulu.reject;
                mike = entity.data;
                report = 'string';
                mike = typeof mike;
                if(!(report !== mike)) { _fun37937_ip = 44; continue _fun37937 }
 37:
                mike = entity.data;
                _fun37937_ip = 77; continue _fun37937;
 44:
                report = global;
                golf = report.Error;
                options = entity.data;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                verify = oscar;
                report = new verify[golf](options, golf);
                mike = report instanceof Object ? report : oscar;
 77:
                mike = tango.bind(zulu)(mike);
                _fun37937_ip = 100; continue _fun37937;
 84:
                mike = zulu.resolve;
                entity = entity.data;
                entity = mike.bind(zulu)(entity);
 100:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[8] = entity;
        entity = {};
        oscar = 'completeOperation';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun37938: for(var _fun37938_ip = 0; ; ) switch(_fun37938_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                entity = this;
                mike = entity.completionCallbacks;
                report = mike.length;
                mike = 0;
                if(!(report > mike)) { _fun37938_ip = 247; continue _fun37938 }
 29:
                report = {};
                mike = zulu.id;
                report['id'] = mike;
                mike = zulu.tag;
                report['tag'] = mike;
                mike = tango.ok;
                report['ok'] = mike;
                mike = tango.data;
                report['value'] = mike;
                mike = {};
                oscar = tango.timings;
                golf = oscar.queueTimeNanoseconds;
                oscar = 1000000;
                golf = golf / oscar;
                mike['queue'] = golf;
                golf = tango.timings;
                golf = golf.executionTimeNanoseconds;
                golf = golf / oscar;
                mike['execution'] = golf;
                golf = tango.timings;
                golf = golf.materializationTimeNanoseconds;
                golf = golf / oscar;
                mike['materialization'] = golf;
                tango = tango.timings;
                tango = tango.totalTimeNanoseconds;
                tango = tango / oscar;
                mike['ccTotal'] = tango;
                tango = zulu.started;
                zulu = argBaz;
                zulu = zulu - tango;
                mike['jsTotal'] = zulu;
                report['timings'] = mike;
                mike = _closure1_slot6;
                entity = entity.completionCallbacks;
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = zulu.bind(tango)();
                entity = mike.done;
                if(entity) { _fun37938_ip = 247; continue _fun37938 }
 222:
                entity = mike.value;
                entity = entity.bind(tango)(report);
                oscar = zulu.bind(tango)();
                entity = oscar.done;
                mike = oscar;
                if(!entity) { _fun37938_ip = 222; continue _fun37938 }
 247:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[9] = entity;
        entity = {};
        oscar = 'initialize';
        entity['key'] = oscar;
        mike = function() { // Original name: value
            _fun37939: for(var _fun37939_ip = 0; ; ) switch(_fun37939_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike.initialized;
                if(zulu) { _fun37939_ip = 132; continue _fun37939 }
 18:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 3;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                oscar = tango.KV_RAW;
                report = oscar.setCallbacks;
                tango = {};
                golf = function(argFoo) { // Original name: status
                    zulu = _closure3_slot0;
                    mike = zulu.onStatus;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango['status'] = golf;
                golf = function(argFoo, argBar) { // Original name: response
                    tango = _closure3_slot0;
                    zulu = tango.onResponse;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                tango['response'] = golf;
                tango = report.bind(oscar)(tango);
                zulu = _closure1_slot4;
                if(!zulu) { _fun37939_ip = 124; continue _fun37939 }
 90:
                tango = mike.addCompletionCallback;
                zulu = function(argFoo) {
                    _fun37942: for(var _fun37942_ip = 0; ; ) switch(_fun37942_ip) {
 0:
                        tango = argFoo;
                        entity = tango.ok;
                        backup = 'failed';
                        if(!entity) { _fun37942_ip = 22; continue _fun37942 }
 18:
                        backup = 'completed';
 22:
                        entity = tango.timings;
                        mike = entity.execution;
                        entity = mike.toFixed;
                        oscar = 3;
                        report = entity.bind(mike)(oscar);
                        entity = global;
                        mike = entity.HermesInternal;
                        zulu = mike.concat;
                        foxtrot = '';
                        mike = 'ms execution';
                        mike = zulu.bind(foxtrot)(report, mike);
                        report = new Array(4);
                        report[0] = mike;
                        mike = tango.timings;
                        zulu = mike.materialization;
                        mike = zulu.toFixed;
                        golf = mike.bind(zulu)(oscar);
                        mike = entity.HermesInternal;
                        zulu = mike.concat;
                        mike = 'ms js materialization';
                        mike = zulu.bind(foxtrot)(golf, mike);
                        report[1] = mike;
                        mike = tango.timings;
                        zulu = mike.ccTotal;
                        mike = zulu.toFixed;
                        golf = mike.bind(zulu)(oscar);
                        mike = entity.HermesInternal;
                        zulu = mike.concat;
                        mike = 'ms cc completion';
                        mike = zulu.bind(foxtrot)(golf, mike);
                        report[2] = mike;
                        mike = tango.timings;
                        zulu = mike.jsTotal;
                        mike = zulu.toFixed;
                        golf = mike.bind(zulu)(oscar);
                        mike = entity.HermesInternal;
                        zulu = mike.concat;
                        mike = 'ms js reception';
                        mike = zulu.bind(foxtrot)(golf, mike);
                        report[3] = mike;
                        zulu = report.join;
                        mike = ', ';
                        sizing = zulu.bind(report)(mike);
                        zulu = _closure1_slot5;
                        mike = zulu.info;
                        yankee = tango.tag;
                        control = tango.id;
                        tango = tango.timings;
                        report = tango.ccTotal;
                        tango = report.toFixed;
                        result = tango.bind(report)(oscar);
                        entity = entity.HermesInternal;
                        options = entity.concat;
                        vacuum = ' (#';
                        source = ') ';
                        echo = ' in ';
                        output = 'ms (';
                        kilo = ').';
                        config = foxtrot;
                        sequence = yankee;
                        update = backup;
                        entity = config[options](sequence, vacuum, control, source, update, echo, result, output, sizing, kilo, backup);
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = tango.bind(mike)(zulu);
                zulu = mike.addDatabaseStateCallback;
                entity = function(argFoo, argBar) {
                    zulu = _closure1_slot5;
                    mike = zulu.info;
                    entity = global;
                    entity = entity.HermesInternal;
                    options = entity.concat;
                    foxtrot = '';
                    romeo = argFoo;
                    yankee = ' (state: ';
                    offset = argBar;
                    verify = ')';
                    entity = foxtrot[options](romeo, yankee, offset, verify, options);
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
 124:
                entity = true;
                mike['initialized'] = entity;
 132:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[10] = entity;
        mike = undefined;
        entity = null;
        entity = report.bind(mike)(tango, entity, zulu);
        return entity;
    };
    mike = mike.bind(entity)();
    mike['counter'] = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    mike['pending'] = tango;
    tango = false;
    mike['initialized'] = tango;
    tango = new Array(0);
    mike['dbStateCallbacks'] = tango;
    tango = new Array(0);
    mike['completionCallbacks'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Runtime'] = mike;
    return entity;
})();