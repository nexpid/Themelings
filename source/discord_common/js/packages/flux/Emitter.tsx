// discord_common/js/packages/flux/Emitter.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'Flux';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: batchEmitChanges
        mike = argFoo;
        entity = undefined;
        entity = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: Emitter
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = global;
            tango = mike.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['changedStores'] = tango;
            mike = mike.Set;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['reactChangedStores'] = mike;
            mike = 0;
            zulu['changeSentinel'] = mike;
            mike = false;
            zulu['isBatchEmitting'] = mike;
            zulu['isDispatching'] = mike;
            zulu['isPaused'] = mike;
            mike = null;
            zulu['pauseTimer'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'destroy';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            zulu = entity.changedStores;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity.reactChangedStores;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = function(argFoo) { // Original name: batchEmitChanges
                mike = argFoo;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'injectBatchEmitChanges';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'pause';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun6773: for(var _fun6773_ip = 0; ; ) switch(_fun6773_ip) {
 0:
                report = arguments[0];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = undefined;
                if(!(report === entity)) { _fun6773_ip = 20; continue _fun6773 }
 18:
                report = null;
 20:
                tango = true;
                zulu['isPaused'] = tango;
                oscar = zulu.pauseTimer;
                tango = null;
                if(!(tango !== oscar)) { _fun6773_ip = 59; continue _fun6773 }
 40:
                oscar = global;
                golf = oscar.clearTimeout;
                oscar = zulu.pauseTimer;
                oscar = golf.bind(entity)(oscar);
 59:
                if(!(tango !== report)) { _fun6773_ip = 88; continue _fun6773 }
 63:
                tango = global;
                tango = tango.setTimeout;
                mike = function() {
                    mike = _closure3_slot0;
                    entity = null;
                    mike['pauseTimer'] = entity;
                    entity = mike.resume;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(entity)(mike, report);
                zulu['pauseTimer'] = mike;
 88:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'resume';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun6775: for(var _fun6775_ip = 0; ; ) switch(_fun6775_ip) {
 0:
                tango = arguments[0];
                report = this;
                var _closure3_slot0 = report;
                entity = undefined;
                if(!(tango === entity)) { _fun6775_ip = 20; continue _fun6775 }
 18:
                tango = true;
 20:
                zulu = global;
                golf = zulu.clearTimeout;
                oscar = report.pauseTimer;
                oscar = golf.bind(entity)(oscar);
                oscar = null;
                report['pauseTimer'] = oscar;
                oscar = report.isPaused;
                if(!oscar) { _fun6775_ip = 103; continue _fun6775 }
 56:
                oscar = false;
                report['isPaused'] = oscar;
                if(!tango) { _fun6775_ip = 84; continue _fun6775 }
 67:
                report = report.changedStores;
                oscar = report.size;
                report = 0;
                tango = oscar > report;
 84:
                if(!tango) { _fun6775_ip = 103; continue _fun6775 }
 87:
                zulu = zulu.setImmediate;
                mike = function() {
                    mike = _closure3_slot0;
                    entity = mike.emit;
                    entity = entity.bind(mike)();
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
 103:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'batched';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun6777: for(var _fun6777_ip = 0; ; ) switch(_fun6777_ip) {
 0:
                tango = this;
                entity = argFoo;
                mike = tango.isPaused;
                if(mike) { _fun6777_ip = 84; continue _fun6777 }
 15: // try_start_0
                mike = true;
                tango['isPaused'] = mike;
                zulu = entity;
                mike = undefined;
                mike = zulu.bind(mike)();
 32: // try_end0
                report = tango.resume;
                zulu = false;
                zulu = report.bind(tango)(zulu);
                zulu = tango.emit;
                zulu = zulu.bind(tango)();
                return mike;
 57: // catch_target0
                CatchBlockStart(arg_register=1);
                report = tango.resume;
                zulu = false;
                zulu = report.bind(tango)(zulu);
                zulu = tango.emit;
                zulu = zulu.bind(tango)();
                throw mike;
 84:
                mike = entity;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'emit';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun6778: for(var _fun6778_ip = 0; ; ) switch(_fun6778_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                mike = zulu.isBatchEmitting;
                if(mike) { _fun6778_ip = 24; continue _fun6778 }
 18:
                mike = zulu.isPaused;
 24:
                if(mike) { _fun6778_ip = 46; continue _fun6778 }
 27:
                zulu = _closure1_slot5;
                mike = undefined;
                entity = function() {
                    _fun6779: for(var _fun6779_ip = 0; ; ) switch(_fun6779_ip) {
 0:
                        zulu = undefined;
                        golf = undefined;
                        options = undefined;
                        verify = undefined;
 8: // try_start_0
                        tango = _closure3_slot0;
                        entity = true;
                        tango['isBatchEmitting'] = entity;
                        entity = tango.changeSentinel;
                        entity = entity + 1;
                        tango['changeSentinel'] = entity;
                        oscar = 0;
                        golf = 0;
                        entity = global;
                        report = entity.Set;
                        offset = report.prototype;
                        offset = Object.create(offset, {constructor: {value: report}});
                        kilo = offset;
                        report = new kilo[report](backup);
                        options = report instanceof Object ? report : offset;
                        report = entity.Set;
                        offset = report.prototype;
                        offset = Object.create(offset, {constructor: {value: report}});
                        kilo = offset;
                        report = new kilo[report](backup);
                        verify = report instanceof Object ? report : offset;
                        tango = tango.changedStores;
                        tango = tango.size;
                        report = 100;
                        if(!(tango > oscar)) { _fun6779_ip = 167; continue _fun6779 }
 114:
                        tango = golf;
                        tango = tango + 1;
                        golf = tango;
                        if(!(!(tango > report))) { _fun6779_ip = 315; continue _fun6779 }
 130:
                        tango = _closure3_slot0;
                        romeo = tango.emitNonReactOnce;
                        yankee = options;
                        offset = verify;
                        offset = romeo.bind(tango)(yankee, offset);
                        tango = tango.changedStores;
                        tango = tango.size;
                        if(tango > oscar) { _fun6779_ip = 114; continue _fun6779 }
 167:
                        tango = _closure3_slot0;
                        tango = tango.reactChangedStores;
                        tango = tango.size;
                        if(!(tango > oscar)) { _fun6779_ip = 228; continue _fun6779 }
 186:
                        tango = golf;
                        tango = tango + 1;
                        golf = tango;
                        if(!(!(tango > report))) { _fun6779_ip = 242; continue _fun6779 }
 199:
                        tango = _closure3_slot0;
                        options = tango.emitReactOnce;
                        options = options.bind(tango)();
                        tango = tango.reactChangedStores;
                        tango = tango.size;
                        if(tango > oscar) { _fun6779_ip = 186; continue _fun6779 }
 228: // try_end0
                        tango = _closure3_slot0;
                        mike = false;
                        tango['isBatchEmitting'] = mike;
                        return zulu;
 242: // try_start_1
                        oscar = _closure1_slot4;
                        report = oscar.error;
                        tango = _closure1_slot0;
                        golf = _closure1_slot1;
                        mike = 3;
                        mike = golf[mike];
                        tango = tango.bind(zulu)(mike);
                        mike = tango.serialize;
                        tango = mike.bind(tango)();
                        mike = 'LastFewActions';
                        mike = report.bind(oscar)(mike, tango);
                        tango = entity.Error;
                        mike = 'react change emit loop detected, aborting';
                        mike = tango.bind(zulu)(mike);
                        throw mike;
 315:
                        oscar = _closure1_slot4;
                        report = oscar.error;
                        tango = _closure1_slot0;
                        golf = _closure1_slot1;
                        mike = 3;
                        mike = golf[mike];
                        tango = tango.bind(zulu)(mike);
                        mike = tango.serialize;
                        tango = mike.bind(tango)();
                        mike = 'LastFewActions';
                        mike = report.bind(oscar)(mike, tango);
                        mike = entity.Error;
                        entity = 'change emit loop detected, aborting';
                        entity = mike.bind(zulu)(entity);
                        throw entity;
 388: // try_end1 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=0);
                        zulu = _closure3_slot0;
                        mike = false;
                        zulu['isBatchEmitting'] = mike;
                        throw entity;
                    }
                };
                entity = zulu.bind(mike)(entity);
 46:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getChangeSentinel';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.changeSentinel;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getIsPaused';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.isPaused;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'markChanged';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun6782: for(var _fun6782_ip = 0; ; ) switch(_fun6782_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = tango._changeCallbacks;
                entity = zulu.hasAny;
                entity = entity.bind(zulu)();
                if(entity) { _fun6782_ip = 42; continue _fun6782 }
 25:
                zulu = tango._syncWiths;
                report = zulu.length;
                zulu = 0;
                entity = report > zulu;
 42:
                if(!entity) { _fun6782_ip = 61; continue _fun6782 }
 45:
                zulu = mike.changedStores;
                entity = zulu.add;
                entity = entity.bind(zulu)(tango);
 61:
                zulu = tango._reactChangeCallbacks;
                entity = zulu.hasAny;
                entity = entity.bind(zulu)();
                if(!entity) { _fun6782_ip = 96; continue _fun6782 }
 80:
                zulu = mike.reactChangedStores;
                entity = zulu.add;
                entity = entity.bind(zulu)(tango);
 96:
                entity = mike.isBatchEmitting;
                if(entity) { _fun6782_ip = 111; continue _fun6782 }
 105:
                entity = mike.isDispatching;
 111:
                if(entity) { _fun6782_ip = 120; continue _fun6782 }
 114:
                entity = mike.isPaused;
 120:
                if(entity) { _fun6782_ip = 133; continue _fun6782 }
 123:
                entity = mike.emit;
                entity = entity.bind(mike)();
 133:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'emitNonReactOnce';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun6783: for(var _fun6783_ip = 0; ; ) switch(_fun6783_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                mike = argFoo;
                var _closure3_slot1 = mike;
                mike = argBar;
                var _closure3_slot2 = mike;
                mike = global;
                tango = mike.Date;
                zulu = tango.now;
                oscar = zulu.bind(tango)();
                tango = report.changedStores;
                zulu = mike.Set;
                golf = zulu.prototype;
                golf = Object.create(golf, {constructor: {value: zulu}});
                offset = golf;
                zulu = new offset[zulu](verify);
                zulu = zulu instanceof Object ? zulu : golf;
                report['changedStores'] = zulu;
                report = tango.forEach;
                zulu = function(argFoo) {
                    zulu = argFoo;
                    tango = _closure3_slot2;
                    mike = tango.add;
                    mike = mike.bind(tango)(zulu);
                    tango = zulu._changeCallbacks;
                    mike = tango.invokeAll;
                    mike = mike.bind(tango)();
                    entity = _closure3_slot0;
                    mike = entity.changedStores;
                    entity = mike.delete;
                    entity = entity.bind(mike)(zulu);
                    entity = undefined;
                    return entity;
                };
                zulu = report.bind(tango)(zulu);
                zulu = tango.forEach;
                entity = function(argFoo) {
                    entity = argFoo;
                    zulu = entity._syncWiths;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun6786: for(var _fun6786_ip = 0; ; ) switch(_fun6786_ip) {
 0:
                            entity = argFoo;
                            tango = entity.func;
                            zulu = entity.store;
                            report = _closure3_slot1;
                            mike = report.has;
                            mike = mike.bind(report)(tango);
                            if(mike) { _fun6786_ip = 107; continue _fun6786 }
 35:
                            report = _closure3_slot1;
                            mike = report.add;
                            mike = mike.bind(report)(tango);
                            mike = undefined;
                            tango = tango.bind(mike)();
                            mike = false;
                            if(!(mike !== tango)) { _fun6786_ip = 107; continue _fun6786 }
 61:
                            tango = _closure3_slot2;
                            mike = tango.has;
                            mike = mike.bind(tango)(zulu);
                            if(mike) { _fun6786_ip = 107; continue _fun6786 }
 78:
                            tango = _closure3_slot2;
                            mike = tango.add;
                            mike = mike.bind(tango)(zulu);
                            mike = _closure3_slot0;
                            entity = mike.markChanged;
                            entity = entity.bind(mike)(zulu);
 107:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                zulu = mike.Date;
                entity = zulu.now;
                report = entity.bind(zulu)();
                zulu = report - oscar;
                entity = 100;
                if(!(zulu > entity)) { _fun6783_ip = 218; continue _fun6783 }
 134:
                tango = _closure1_slot4;
                zulu = tango.verbose;
                golf = report - oscar;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = 'Slow batch emitChanges took ';
                mike = 'ms recentActions:';
                mike = oscar.bind(report)(golf, mike);
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                entity = report.serialize;
                entity = entity.bind(report)();
                entity = zulu.bind(tango)(mike, entity);
 218:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'emitReactOnce';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun6787: for(var _fun6787_ip = 0; ; ) switch(_fun6787_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                mike = global;
                tango = mike.Date;
                zulu = tango.now;
                oscar = zulu.bind(tango)();
                tango = report.reactChangedStores;
                zulu = mike.Set;
                golf = zulu.prototype;
                golf = Object.create(golf, {constructor: {value: zulu}});
                offset = golf;
                zulu = new offset[zulu](verify);
                zulu = zulu instanceof Object ? zulu : golf;
                report['reactChangedStores'] = zulu;
                zulu = tango.forEach;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu._reactChangeCallbacks;
                    entity = mike.invokeAll;
                    entity = entity.bind(mike)();
                    entity = _closure3_slot0;
                    mike = entity.reactChangedStores;
                    entity = mike.delete;
                    entity = entity.bind(mike)(zulu);
                    entity = undefined;
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                zulu = mike.Date;
                entity = zulu.now;
                report = entity.bind(zulu)();
                zulu = report - oscar;
                entity = 100;
                if(!(zulu > entity)) { _fun6787_ip = 189; continue _fun6787 }
 105:
                tango = _closure1_slot4;
                zulu = tango.verbose;
                golf = report - oscar;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = 'Slow batch emitReactChanges took ';
                mike = 'ms recentActions:';
                mike = oscar.bind(report)(golf, mike);
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                entity = report.serialize;
                entity = entity.bind(report)();
                entity = zulu.bind(tango)(mike, entity);
 189:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/Emitter.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();