// discord_common/js/packages/flux/Dispatcher.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot10;
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
            golf = _closure1_slot10;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: setDisplayName
        mike = argBar;
        entity = argFoo;
        entity['displayName'] = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot11 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    options = mike.Set;
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    foxtrot = ['APP_STATE_UPDATE', 'CLEAR_CACHES', 'CONNECTION_CLOSED', 'CONNECTION_OPEN', 'CONNECTION_RESUMED', 'LOGIN_SUCCESS', 'LOGIN', 'LOGOUT', 'MESSAGE_SEND_FAILED', 'PUSH_NOTIFICATION_CLICK', 'RESET_SOCKET', 'SESSION_START', 'UPLOAD_FAIL', 'WRITE_CACHES'];
    backup = tango;
    mike = new backup[options](foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    var _closure1_slot6 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.Logger;
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    foxtrot = 'Flux';
    backup = tango;
    mike = new backup[options](foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    var _closure1_slot7 = mike;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: Dispatcher
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = arguments[0];
                zulu = arguments[1];
                mike = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun00008_ip = 17; continue _fun00007 }
 15:
                oscar = 0;
 17:
                golf = _closure1_slot4;
                report = _closure2_slot0;
                report = golf.bind(entity)(mike, report);
                report = new Array(0);
                mike['_interceptors'] = report;
                report = {};
                mike['_subscriptions'] = report;
                report = new Array(0);
                mike['_waitQueue'] = report;
                report = false;
                mike['_processingWaitQueue'] = report;
                report = null;
                mike['_currentDispatchActionType'] = report;
                golf = _closure1_slot8;
                options = golf.prototype;
                options = Object.create(options, {constructor: {value: golf}});
                yankee = options;
                golf = new yankee[golf](offset);
                golf = golf instanceof Object ? golf : options;
                mike['_actionHandlers'] = golf;
                mike['_sentryUtils'] = entity;
                golf = {};
                mike['functionCache'] = golf;
                mike['_defaultBand'] = oscar;
                oscar = arguments[2];
                mike['_sentryUtils'] = oscar;
                if(!(report == zulu)) { _fun00008_ip = 190; continue _fun00007 }
 144:
                report = _closure1_slot0;
                oscar = _closure1_slot3;
                tango = 3;
                tango = oscar[tango];
                tango = report.bind(entity)(tango);
                tango = tango.ActionLogger;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                yankee = report;
                tango = new yankee[tango](offset);
                zulu = tango instanceof Object ? tango : report;
 190:
                mike['actionLogger'] = zulu;
                report = mike.actionLogger;
                tango = report.on;
                zulu = 'trace';
                mike = function(argFoo, argBar, argBaz) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscar = argBaz;
                        report = _closure1_slot1;
                        entity = _closure1_slot3;
                        tango = 4;
                        zulu = entity[tango];
                        entity = undefined;
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.isTracing;
                        if(!zulu) { _fun00010_ip = 44; continue _fun00009 }
 37:
                        report = 10;
                        zulu = oscar >= report;
 44:
                        if(!zulu) { _fun00010_ip = 86; continue _fun00009 }
 47:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        mike = mike[tango];
                        report = zulu.bind(entity)(mike);
                        tango = report.mark;
                        zulu = '🦥';
                        mike = argBar;
                        mike = tango.bind(report)(zulu, mike, oscar);
 86:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'isDispatching';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            mike = entity._currentDispatchActionType;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(13);
        mike[0] = entity;
        entity = {};
        oscar = 'dispatch';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = argFoo;
            var _closure3_slot1 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = argBar;
                var _closure4_slot1 = mike;
                mike = _closure3_slot0;
                tango = mike._waitQueue;
                zulu = tango.push;
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0: // try_start_0
                        mike = _closure3_slot0;
                        zulu = mike.functionCache;
                        mike = _closure3_slot1;
                        mike = mike.type;
                        zulu = zulu[mike];
                        mike = null;
                        if(!(mike == zulu)) { _fun00012_ip = 107; continue _fun00011 }
 32:
                        zulu = _closure3_slot0;
                        oscar = zulu.functionCache;
                        mike = _closure3_slot1;
                        report = mike.type;
                        tango = function(argFoo) {
                            zulu = _closure3_slot0;
                            mike = zulu._dispatchWithDevtools;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        oscar[report] = tango;
                        report = _closure1_slot11;
                        tango = zulu.functionCache;
                        zulu = mike.type;
                        tango = tango[zulu];
                        zulu = mike.type;
                        mike = 'dispatch_';
                        zulu = mike + zulu;
                        mike = undefined;
                        mike = report.bind(mike)(tango, zulu);
 107:
                        mike = _closure3_slot0;
                        zulu = mike.functionCache;
                        mike = _closure3_slot1;
                        entity = mike.type;
                        entity = zulu[entity];
                        entity = entity.bind(zulu)(mike);
                        mike = _closure4_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)();
 148: // try_end0
                        _fun00012_ip = 166; continue _fun00011;
 150: // catch_target0
                        CatchBlockStart(arg_register=2);
                        mike = _closure4_slot1;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 166:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                entity = mike.flushWaitQueue;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'flushWaitQueue';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = this;
                entity = undefined;
                offset = undefined;
                mike = undefined;
                golf = undefined;
                tango = zulu._processingWaitQueue;
                if(tango) { _fun00014_ip = 394; continue _fun00013 }
 23: // try_start_0
                oscar = true;
                zulu['_processingWaitQueue'] = oscar;
                options = _closure1_slot1;
                report = _closure1_slot3;
                verify = 5;
                report = report[verify];
                report = options.bind(entity)(report);
                report['isDispatching'] = oscar;
                options = 0;
                offset = 0;
                report = zulu._waitQueue;
                report = report.length;
                oscar = 100;
                if(!(report > options)) { _fun00014_ip = 190; continue _fun00013 }
 82:
                report = offset;
                report = report + 1;
                offset = report;
                if(!(!(report > oscar))) { _fun00014_ip = 226; continue _fun00013 }
 98:
                report = zulu._waitQueue;
                report = report.length;
                if(!(report > options)) { _fun00014_ip = 148; continue _fun00013 }
 113:
                yankee = zulu._waitQueue;
                report = yankee.shift;
                report = report.bind(yankee)();
                report = report.bind(entity)();
                report = zulu._waitQueue;
                report = report.length;
                if(report > options) { _fun00014_ip = 113; continue _fun00013 }
 148:
                yankee = _closure1_slot1;
                report = _closure1_slot3;
                report = report[verify];
                yankee = yankee.bind(entity)(report);
                report = yankee.emit;
                report = report.bind(yankee)();
                report = zulu._waitQueue;
                report = report.length;
                if(report > options) { _fun00014_ip = 82; continue _fun00013 }
 190: // try_end0
                oscar = false;
                zulu['_processingWaitQueue'] = oscar;
                options = _closure1_slot1;
                report = _closure1_slot3;
                report = report[verify];
                report = options.bind(entity)(report);
                report['isDispatching'] = oscar;
                _fun00014_ip = 394; continue _fun00013;
 226: // try_start_1
                oscar = _closure1_slot2;
                options = _closure1_slot3;
                report = 6;
                report = options[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.serialize;
                options = report.bind(oscar)();
                golf = options;
                oscar = _closure1_slot7;
                report = oscar.error;
                tango = 'LastFewActions';
                tango = report.bind(oscar)(tango, options);
                report = zulu._sentryUtils;
                mike = report;
                tango = null;
                if(!(tango != report)) { _fun00014_ip = 332; continue _fun00013 }
 295:
                report = mike;
                tango = report.addBreadcrumb;
                mike = {};
                oscar = 'Dispatcher: Dispatch loop detected';
                mike['message'] = oscar;
                oscar = {};
                oscar['lastFewActions'] = golf;
                mike['data'] = oscar;
                mike = tango.bind(report)(mike);
 332:
                mike = global;
                tango = mike.Error;
                mike = 'Dispatch loop detected, aborting';
                mike = tango.bind(entity)(mike);
                throw mike;
 353: // try_end1 // catch_target0 // catch_target1
                CatchBlockStart(arg_register=1);
                tango = false;
                zulu['_processingWaitQueue'] = tango;
                report = _closure1_slot1;
                oscar = _closure1_slot3;
                zulu = 5;
                zulu = oscar[zulu];
                zulu = report.bind(entity)(zulu);
                zulu['isDispatching'] = tango;
                throw mike;
 394:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_dispatchWithDevtools';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu._dispatchWithLogging;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_dispatchWithLogging';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argFoo;
                golf = this;
                var _closure3_slot0 = golf;
                mike = oscar;
                var _closure3_slot1 = oscar;
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                options = 7;
                zulu = offset[options];
                entity = undefined;
                foxtrot = verify.bind(entity)(zulu);
                yankee = golf._currentDispatchActionType;
                zulu = null;
                romeo = zulu == yankee;
                output = oscar.type;
                sizing = golf._currentDispatchActionType;
                zulu = global;
                yankee = zulu.HermesInternal;
                kilo = yankee.concat;
                backup = 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ';
                yankee = ' Already dispatching: ';
                yankee = kilo.bind(backup)(output, yankee, sizing);
                yankee = foxtrot.bind(entity)(romeo, yankee);
                options = offset[options];
                offset = verify.bind(entity)(options);
                verify = oscar.type;
                options = 'Dispatch.dispatch(...) called without an action type';
                options = offset.bind(entity)(verify, options);
                verify = _closure1_slot6;
                options = verify.has;
                oscar = oscar.type;
                oscar = options.bind(verify)(oscar);
                if(!oscar) { _fun00016_ip = 198; continue _fun00015 }
 153:
                verify = _closure1_slot7;
                options = verify.log;
                oscar = mike;
                yankee = oscar.type;
                oscar = zulu.HermesInternal;
                offset = oscar.concat;
                oscar = 'Dispatching ';
                oscar = offset.bind(oscar)(yankee);
                oscar = options.bind(verify)(oscar);
 198:
                verify = _closure1_slot0;
                yankee = _closure1_slot3;
                oscar = 8;
                options = yankee[oscar];
                romeo = verify.bind(entity)(options);
                offset = romeo.mark;
                verify = mike;
                options = verify.type;
                options = offset.bind(romeo)(options);
                offset = _closure1_slot2;
                options = 6;
                options = yankee[options];
                yankee = offset.bind(entity)(options);
                offset = yankee.add;
                options = verify.type;
                options = offset.bind(yankee)(options);
                options = golf.actionLogger;
                golf = options.log;
                report = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        mike = argFoo;
 3: // try_start_0
                        report = _closure3_slot0;
                        tango = _closure3_slot1;
                        zulu = tango.type;
                        report['_currentDispatchActionType'] = zulu;
                        zulu = report._dispatch;
                        mike = zulu.bind(report)(tango, mike);
 37: // try_end0
                        mike = _closure3_slot0;
                        entity = null;
                        mike['_currentDispatchActionType'] = entity;
                        entity = undefined;
                        return entity;
 53: // catch_target0
                        CatchBlockStart(arg_register=0);
                        zulu = _closure3_slot0;
                        mike = null;
                        zulu['_currentDispatchActionType'] = mike;
                        throw entity;
                    }
                };
                report = golf.bind(options)(verify, report);
                options = report.totalTime;
                golf = 100;
                if(!(options > golf)) { _fun00016_ip = 364; continue _fun00015 }
 304:
                options = _closure1_slot7;
                golf = options.verbose;
                verify = mike;
                source = verify.type;
                echo = report.totalTime;
                report = zulu.HermesInternal;
                yankee = report.concat;
                control = 'Slow dispatch on ';
                update = ': ';
                result = 'ms';
                report = control[yankee](source, update, echo, result, output);
                report = golf.bind(options)(report);
 364: // try_start_0
                report = _closure1_slot0;
                tango = _closure1_slot3;
                tango = tango[oscar];
                report = report.bind(entity)(tango);
                tango = report.measure;
                options = mike.type;
                zulu = zulu.HermesInternal;
                golf = zulu.concat;
                oscar = 'DISPATCH[';
                zulu = ']';
                zulu = golf.bind(oscar)(options, zulu);
                mike = mike.type;
                mike = tango.bind(report)(zulu, mike);
 430: // try_end0
                _fun00016_ip = 434; continue _fun00015;
 432: // catch_target0
                CatchBlockStart(arg_register=1);
 434:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = '_dispatch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                report = this;
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = tango;
                golf = _closure1_slot9;
                oscar = report._interceptors;
                entity = undefined;
                options = golf.bind(entity)(oscar);
                golf = options.bind(entity)();
                oscar = golf.done;
                if(oscar) { _fun00020_ip = 85; continue _fun00019 }
 51:
                oscar = golf.value;
                oscar = oscar.bind(entity)(zulu);
                if(oscar) { _fun00020_ip = 81; continue _fun00019 }
 64:
                verify = options.bind(entity)();
                oscar = verify.done;
                golf = verify;
                if(oscar) { _fun00020_ip = 85; continue _fun00019 }
 79:
                _fun00020_ip = 51; continue _fun00019;
 81:
                oscar = false;
                return oscar;
 85:
                golf = report._actionHandlers;
                oscar = golf.getOrderedActionHandlers;
                oscar = oscar.bind(golf)(zulu);
                var _closure3_slot2 = oscar;
                options = function() { // Original name: _loop
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zulu = _closure3_slot2;
                        entity = _closure3_slot3;
                        entity = zulu[entity];
                        oscar = entity.name;
                        zulu = entity.actionHandler;
                        var _closure4_slot0 = zulu;
                        zulu = entity.storeDidChange;
                        report = _closure3_slot1;
                        entity = undefined;
                        tango = function() {
                            zulu = _closure4_slot0;
                            mike = _closure3_slot0;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        };
                        report = report.bind(entity)(oscar, tango);
                        tango = false;
                        if(!(tango !== report)) { _fun00022_ip = 70; continue _fun00021 }
 61:
                        mike = _closure3_slot0;
                        mike = zulu.bind(entity)(mike);
 70:
                        return entity;
                    }
                };
                golf = 0;
                var _closure3_slot3 = golf;
                oscar = oscar.length;
                verify = golf < oscar;
                if(!verify) { _fun00020_ip = 144; continue _fun00019 }
 129:
                verify = options.bind(entity)();
                golf = golf + 1;
                _closure3_slot3 = golf;
                if(golf < oscar) { _fun00020_ip = 129; continue _fun00019 }
 144:
                report = report._subscriptions;
                zulu = zulu.type;
                report = report[zulu];
                var _closure3_slot4 = report;
                zulu = null;
                if(!(zulu != report)) { _fun00020_ip = 186; continue _fun00019 }
 169:
                zulu = '__subscriptions';
                mike = function() {
                    zulu = _closure3_slot4;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = argFoo;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(entity)(zulu, mike);
 186:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'addInterceptor';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: addInterceptor
            entity = this;
            zulu = entity._interceptors;
            mike = zulu.push;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'wait';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: wait
            mike = this;
            tango = mike._waitQueue;
            zulu = tango.push;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            entity = mike.flushWaitQueue;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: subscribe
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tango = argFoo;
                entity = this;
                mike = entity._subscriptions;
                zulu = mike[tango];
                mike = null;
                if(!(mike == zulu)) { _fun00024_ip = 63; continue _fun00023 }
 22:
                mike = entity._subscriptions;
                entity = global;
                entity = entity.Set;
                report = entity.prototype;
                report = Object.create(report, {constructor: {value: entity}});
                golf = report;
                entity = new golf[entity](oscar);
                entity = entity instanceof Object ? entity : report;
                mike[tango] = entity;
                zulu = entity;
 63:
                mike = zulu.add;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: unsubscribe
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity._subscriptions;
                zulu = zulu[mike];
                tango = null;
                if(!(tango != zulu)) { _fun00026_ip = 56; continue _fun00025 }
 22:
                report = zulu.delete;
                tango = argBar;
                tango = report.bind(zulu)(tango);
                tango = zulu.size;
                zulu = 0;
                if(!(zulu === tango)) { _fun00026_ip = 56; continue _fun00025 }
 46:
                entity = entity._subscriptions;
                entity = delete entity[mike];
 56:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'register';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: register
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                golf = argCorge;
                entity = this;
                oscar = entity._actionHandlers;
                report = oscar.register;
                mike = null;
                if(!(mike == golf)) { _fun00028_ip = 30; continue _fun00027 }
 24:
                golf = entity._defaultBand;
 30:
                romeo = argFoo;
                yankee = argBar;
                offset = argBaz;
                options = argGrault;
                foxtrot = oscar;
                verify = golf;
                entity = foxtrot[report](romeo, yankee, offset, verify, options, golf);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'createToken';
        entity['key'] = oscar;
        oscar = function() { // Original name: createToken
            entity = this;
            mike = entity._actionHandlers;
            entity = mike.createToken;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'addDependencies';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: addDependencies
            entity = this;
            tango = entity._actionHandlers;
            zulu = tango.addDependencies;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[12] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: ActionHandlersGraph
            zulu = this;
            report = _closure1_slot4;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = {};
            zulu['_orderedActionHandlers'] = tango;
            tango = null;
            zulu['_orderedCallbackTokens'] = tango;
            tango = 1;
            zulu['_lastID'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.DepGraph;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['_dependencyGraph'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getOrderedActionHandlers';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: getOrderedActionHandlers
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = argFoo;
                tango = this;
                zulu = tango._orderedActionHandlers;
                entity = mike.type;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun00030_ip = 43; continue _fun00029 }
 27:
                zulu = tango._computeOrderedActionHandlers;
                mike = mike.type;
                entity = zulu.bind(tango)(mike);
 43:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(10);
        mike[0] = entity;
        entity = {};
        oscar = 'register';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: register
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                options = argFoo;
                mike = argBar;
                tango = argCorge;
                entity = arguments[4];
                zulu = this;
                var _closure3_slot0 = options;
                var _closure3_slot1 = mike;
                romeo = undefined;
                if(!(entity === romeo)) { _fun00032_ip = 41; continue _fun00031 }
 31:
                report = zulu.createToken;
                entity = report.bind(zulu)();
 41:
                var _closure3_slot2 = romeo;
                var _closure3_slot3 = romeo;
                oscar = _closure1_slot1;
                golf = _closure1_slot3;
                report = 7;
                report = golf[report];
                golf = oscar.bind(romeo)(report);
                report = 0;
                oscar = tango >= report;
                if(!oscar) { _fun00032_ip = 100; continue _fun00031 }
 81:
                report = global;
                verify = report.Number;
                report = verify.isInteger;
                oscar = report.bind(verify)(tango);
 100:
                report = 'band must be a non-negative integer.';
                report = golf.bind(romeo)(oscar, report);
                golf = {};
                _closure3_slot2 = golf;
                yankee = function() { // Original name: _loop2
                    tango = _closure3_slot1;
                    zulu = _closure3_slot3;
                    zulu = tango[zulu];
                    var _closure4_slot0 = zulu;
                    tango = function(argFoo) { // Original name: wrapper
                        zulu = _closure4_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    report = _closure1_slot11;
                    options = _closure3_slot0;
                    golf = _closure3_slot3;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    zulu = '';
                    entity = '_';
                    zulu = oscar.bind(zulu)(options, entity, golf);
                    entity = undefined;
                    zulu = report.bind(entity)(tango, zulu);
                    zulu = _closure3_slot2;
                    mike = _closure3_slot3;
                    zulu[mike] = tango;
                    return entity;
                };
                verify = mike;
                for(mike in verify)
 134:
                {
 143:
                    backup = mike;
                    _closure3_slot3 = backup;
                    backup = yankee.bind(romeo)();
                    _fun00032_ip = 134; continue _fun00031;
                }
 156:
                oscar = zulu._dependencyGraph;
                report = oscar.addNode;
                mike = {};
                mike['name'] = options;
                mike['band'] = tango;
                mike['actionHandler'] = golf;
                golf = argBaz;
                mike['storeDidChange'] = golf;
                mike = report.bind(oscar)(entity, mike);
                mike = zulu._addToBand;
                mike = mike.bind(zulu)(entity, tango);
                mike = zulu._invalidateCaches;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'createToken';
        entity['key'] = oscar;
        oscar = function() { // Original name: createToken
            zulu = this;
            entity = zulu._lastID;
            mike = parseFloat(entity);
            entity = mike + 1;
            zulu['_lastID'] = entity;
            entity = 'ID_';
            entity = entity + mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'addDependencies';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: addDependencies
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscar = argFoo;
                tango = argBar;
                zulu = this;
                entity = zulu._validateDependencies;
                entity = entity.bind(zulu)(oscar, tango);
                mike = _closure1_slot9;
                entity = undefined;
                report = mike.bind(entity)(tango);
                tango = report.bind(entity)();
                mike = tango.done;
                if(mike) { _fun00034_ip = 85; continue _fun00033 }
 47:
                options = tango.value;
                golf = zulu._dependencyGraph;
                mike = golf.addDependency;
                mike = mike.bind(golf)(oscar, options);
                golf = report.bind(entity)();
                mike = golf.done;
                tango = golf;
                if(!mike) { _fun00034_ip = 47; continue _fun00033 }
 85:
                mike = zulu._invalidateCaches;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_validateDependencies';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: _validateDependencies
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = '_invalidateCaches';
        entity['key'] = oscar;
        oscar = function() { // Original name: _invalidateCaches
            mike = this;
            entity = null;
            mike['_orderedCallbackTokens'] = entity;
            entity = {};
            mike['_orderedActionHandlers'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = '_bandToken';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: _bandToken
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                golf = argFoo;
                oscar = this;
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'band.';
                entity = mike.bind(entity)(golf);
                zulu = oscar._dependencyGraph;
                mike = zulu.hasNode;
                mike = mike.bind(zulu)(entity);
                if(mike) { _fun00036_ip = 140; continue _fun00035 }
 50:
                tango = oscar._dependencyGraph;
                zulu = tango.addNode;
                mike = {};
                mike['name'] = entity;
                mike['band'] = golf;
                report = {};
                mike['actionHandler'] = report;
                report = function() { // Original name: storeDidChange
                    entity = undefined;
                    return entity;
                };
                mike['storeDidChange'] = report;
                mike = zulu.bind(tango)(entity, mike);
                mike = 0;
                if(!(golf > mike)) { _fun00036_ip = 140; continue _fun00035 }
 104:
                tango = oscar._dependencyGraph;
                zulu = tango.addDependency;
                report = oscar._bandToken;
                mike = 1;
                mike = golf - mike;
                mike = report.bind(oscar)(mike);
                mike = zulu.bind(tango)(entity, mike);
 140:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = '_addToBand';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: _addToBand
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tango = argFoo;
                golf = argBar;
                oscar = this;
                zulu = oscar._dependencyGraph;
                mike = zulu.addDependency;
                entity = oscar._bandToken;
                entity = entity.bind(oscar)(golf);
                entity = mike.bind(zulu)(entity, tango);
                entity = 0;
                if(!(golf > entity)) { _fun00038_ip = 80; continue _fun00037 }
 44:
                zulu = oscar._dependencyGraph;
                mike = zulu.addDependency;
                report = oscar._bandToken;
                entity = 1;
                entity = golf - entity;
                entity = report.bind(oscar)(entity);
                entity = mike.bind(zulu)(tango, entity);
 80:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = '_computeOrderedActionHandlers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: _computeOrderedActionHandlers
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = argFoo;
                mike = this;
                golf = mike._orderedCallbackTokens;
                oscar = null;
                if(!(oscar == golf)) { _fun00040_ip = 28; continue _fun00039 }
 18:
                entity = mike._computeOrderedCallbackTokens;
                golf = entity.bind(mike)();
 28:
                entity = new Array(0);
                report = golf.length;
                tango = 0;
                options = tango < report;
                if(!options) { _fun00040_ip = 125; continue _fun00039 }
 46:
                offset = mike._dependencyGraph;
                verify = offset.getNodeData;
                options = golf[tango];
                verify = verify.bind(offset)(options);
                romeo = verify.name;
                options = verify.actionHandler;
                offset = verify.storeDidChange;
                yankee = options[zulu];
                if(!(oscar != yankee)) { _fun00040_ip = 118; continue _fun00039 }
 92:
                verify = entity.push;
                options = {};
                options['name'] = romeo;
                options['actionHandler'] = yankee;
                options['storeDidChange'] = offset;
                options = verify.bind(entity)(options);
 118:
                tango = tango + 1;
                if(tango < report) { _fun00040_ip = 46; continue _fun00039 }
 125:
                mike = mike._orderedActionHandlers;
                mike[zulu] = entity;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = '_computeOrderedCallbackTokens';
        entity['key'] = oscar;
        report = function() { // Original name: _computeOrderedCallbackTokens
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
 9: // try_start_0
                report = tango._dependencyGraph;
                zulu = report.overallOrder;
                zulu = zulu.bind(report)();
                tango['_orderedCallbackTokens'] = zulu;
 31: // try_end0
                return zulu;
 33: // catch_target0
                CatchBlockStart(arg_register=2);
                mike = zulu;
                tango = zulu.cyclePath;
                zulu = null;
                if(!(zulu == tango)) { _fun00042_ip = 55; continue _fun00041 }
 50:
                zulu = mike;
                throw zulu;
 55:
                zulu = mike.cyclePath;
                mike = zulu.map;
                entity = function(argFoo) {
                    oscar = argFoo;
                    entity = _closure3_slot0;
                    mike = entity._dependencyGraph;
                    entity = mike.getNodeData;
                    entity = entity.bind(mike)(oscar);
                    offset = entity.name;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    yankee = '';
                    verify = '(';
                    golf = ')';
                    options = oscar;
                    entity = yankee[tango](offset, verify, options, golf, oscar);
                    return entity;
                };
                report = mike.bind(zulu)(entity);
                entity = global;
                zulu = entity.Error;
                tango = report.join;
                mike = ' -> ';
                tango = tango.bind(report)(mike);
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'Dependency Cycle Found: ';
                oscar = mike.bind(entity)(tango);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                golf = mike;
                entity = new golf[zulu](oscar, report);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = report;
        mike[9] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/Dispatcher.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Dispatcher'] = mike;
    return entity;
})();