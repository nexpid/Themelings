// app/utils/ComponentDispatchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ComponentActionsKeyed;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: ComponentDispatcher
            mike = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(mike, tango);
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.EventEmitter;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            options = tango;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : tango;
            mike['emitter'] = zulu;
            zulu = {};
            mike['_savedDispatches'] = zulu;
            tango = mike.emitter;
            zulu = tango.setMaxListeners;
            mike = 100;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'safeDispatch';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun13697: for(var _fun13697_ip = 0; ; ) switch(_fun13697_ip) {
 0:
                oscar = argFoo;
                zulu = this;
                report = 1;
                yankee = report;
                tango = copyRestArgs(yankee);
                entity = zulu.hasSubscribers;
                entity = entity.bind(zulu)(oscar);
                if(entity) { _fun13697_ip = 78; continue _fun13697 }
 30:
                entity = 0;
                golf = tango[entity];
                entity = zulu._savedDispatches;
                mike = zulu._savedDispatches;
                mike = mike[oscar];
                options = null;
                if(!(options == mike)) { _fun13697_ip = 62; continue _fun13697 }
 58:
                mike = new Array(0);
 62:
                entity[oscar] = mike;
                entity = mike.push;
                entity = entity.bind(mike)(golf);
                return zulu;
 78:
                mike = zulu.dispatch;
                entity = new Array(1);
                entity[0] = oscar;
                yankee = entity;
                offset = tango;
                verify = report;
                tango = arraySpread(yankee, offset, verify);
                yankee = mike;
                offset = entity;
                verify = zulu;
                entity = apply(yankee, offset, verify);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(13);
        mike[0] = entity;
        entity = {};
        oscar = 'dispatch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun13698: for(var _fun13698_ip = 0; ; ) switch(_fun13698_ip) {
 0:
                entity = this;
                zulu = argFoo;
                mike = argBar;
                tango = global;
                report = tango.Date;
                tango = report.now;
                tango = tango.bind(report)();
 26: // try_start_0
                report = entity.emitter;
                tango = report.emit;
                mike = tango.bind(report)(zulu, mike);
 44: // try_end0
                return entity;
 46: // catch_target0
                CatchBlockStart(arg_register=0);
                throw entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'dispatchToLastSubscribed';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun13699: for(var _fun13699_ip = 0; ; ) switch(_fun13699_ip) {
 0:
                entity = this;
                tango = argFoo;
                mike = argBar;
                zulu = undefined;
                report = global;
                oscar = report.Date;
                report = oscar.now;
                report = report.bind(oscar)();
 28: // try_start_0
                oscar = entity.emitter;
                report = oscar.listeners;
                tango = report.bind(oscar)(tango);
                zulu = tango;
                report = tango.length;
                tango = 0;
                if(!(report > tango)) { _fun13699_ip = 83; continue _fun13699 }
 59:
                tango = zulu;
                report = tango.length;
                zulu = 1;
                zulu = report - zulu;
                zulu = tango[zulu];
                mike = zulu.bind(tango)(mike);
 83: // try_end0
                return entity;
 85: // catch_target0
                CatchBlockStart(arg_register=0);
                throw entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'hasSubscribers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.emitter;
            mike = zulu.listenerCount;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_checkSavedDispatches';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun13701: for(var _fun13701_ip = 0; ; ) switch(_fun13701_ip) {
 0:
                zulu = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = zulu;
                tango = entity._savedDispatches;
                report = tango[zulu];
                tango = null;
                if(!(tango != report)) { _fun13701_ip = 59; continue _fun13701 }
 32:
                tango = report.forEach;
                mike = function(argFoo) {
                    tango = _closure3_slot0;
                    zulu = tango.dispatch;
                    mike = _closure3_slot1;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                mike = entity._savedDispatches;
                entity = undefined;
                mike[zulu] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun13703: for(var _fun13703_ip = 0; ; ) switch(_fun13703_ip) {
 0:
                report = argFoo;
                tango = argBar;
                entity = this;
                zulu = entity.emitter;
                mike = zulu.listeners;
                zulu = mike.bind(zulu)(report);
                mike = zulu.indexOf;
                zulu = mike.bind(zulu)(tango);
                mike = 0;
                if(!(!(zulu >= mike))) { _fun13703_ip = 73; continue _fun13703 }
 42:
                zulu = entity.emitter;
                mike = zulu.on;
                mike = mike.bind(zulu)(report, tango);
                mike = entity._checkSavedDispatches;
                mike = mike.bind(entity)(report);
                _fun13703_ip = 141; continue _fun13703;
 73:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                golf = 'ComponentDispatchUtils';
                options = zulu;
                mike = new options[tango](golf, oscar);
                tango = mike instanceof Object ? mike : zulu;
                zulu = tango.warn;
                mike = 'ComponentDispatch.subscribe: Attempting to add a duplicate listener';
                mike = zulu.bind(tango)(mike, report);
 141:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'subscribeOnce';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = argFoo;
            entity = this;
            report = entity.emitter;
            tango = report.once;
            mike = argBar;
            mike = tango.bind(report)(zulu, mike);
            mike = entity._checkSavedDispatches;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'resubscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun13705: for(var _fun13705_ip = 0; ; ) switch(_fun13705_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                entity = this;
                report = entity.emitter;
                mike = report.listeners;
                report = mike.bind(report)(tango);
                mike = report.includes;
                mike = mike.bind(report)(zulu);
                if(mike) { _fun13705_ip = 109; continue _fun13705 }
 39:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                mike = 4;
                report = report[mike];
                mike = undefined;
                oscar = oscar.bind(mike)(report);
                mike = oscar.prototype;
                report = Object.create(mike, {constructor: {value: oscar}});
                options = 'ComponentDispatchUtils';
                verify = report;
                mike = new verify[oscar](options, golf);
                oscar = mike instanceof Object ? mike : report;
                report = oscar.warn;
                mike = 'ComponentDispatch.resubscribe: Resubscribe without existing subscription';
                mike = report.bind(oscar)(mike, tango);
                return entity;
 109:
                report = entity.emitter;
                mike = report.off;
                mike = mike.bind(report)(tango, zulu);
                mike = entity.emitter;
                entity = mike.on;
                entity = entity.bind(mike)(tango, zulu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.emitter;
            tango = report.removeListener;
            zulu = argFoo;
            mike = argBar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.emitter;
            mike = zulu.removeAllListeners;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'dispatchKeyed';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            zulu = this;
            yankee = 2;
            report = copyRestArgs(yankee);
            mike = zulu.dispatch;
            entity = global;
            entity = entity.HermesInternal;
            options = entity.concat;
            golf = '';
            oscar = argFoo;
            tango = '_';
            entity = argBar;
            tango = options.bind(golf)(oscar, tango, entity);
            entity = new Array(1);
            entity[0] = tango;
            verify = 1;
            yankee = entity;
            offset = report;
            tango = arraySpread(yankee, offset, verify);
            yankee = mike;
            offset = entity;
            verify = zulu;
            entity = apply(yankee, offset, verify);
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'subscribeKeyed';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            tango = this;
            zulu = tango.subscribe;
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            oscar = '';
            report = argFoo;
            mike = '_';
            entity = argBar;
            mike = golf.bind(oscar)(report, mike, entity);
            entity = argBaz;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'unsubscribeKeyed';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            tango = this;
            zulu = tango.unsubscribe;
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            oscar = '';
            report = argFoo;
            mike = '_';
            entity = argBar;
            mike = golf.bind(oscar)(report, mike, entity);
            entity = argBaz;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = report;
        mike[12] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = tango.prototype;
    report = Object.create(mike, {constructor: {value: tango}});
    foxtrot = report;
    mike = new foxtrot[tango](romeo);
    mike = mike instanceof Object ? mike : report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/ComponentDispatchUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['ComponentDispatcher'] = tango;
    zulu['ComponentDispatch'] = mike;
    return entity;
})();