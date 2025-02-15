// discord_common/js/packages/flux/Store.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = new Array(0);
    var _closure1_slot6 = golf;
    golf = false;
    var _closure1_slot7 = golf;
    options = tango.Promise;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    foxtrot = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function() { // Original name: t
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)();
            mike = null;
            _closure1_slot3 = mike;
            return entity;
        };
        var _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    backup = golf;
    tango = new backup[options](foxtrot, romeo);
    tango = tango instanceof Object ? tango : golf;
    mike = function() {
        report = _closure1_slot5;
        tango = function(argFoo, argBar, argBaz) { // Original name: Store
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscar = argBar;
                zulu = this;
                report = _closure1_slot4;
                tango = _closure2_slot0;
                entity = undefined;
                tango = report.bind(entity)(zulu, tango);
                report = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 2;
                options = golf[tango];
                options = report.bind(entity)(options);
                options = options.ChangeListeners;
                verify = options.prototype;
                verify = Object.create(verify, {constructor: {value: options}});
                romeo = verify;
                options = new romeo[options](yankee);
                options = options instanceof Object ? options : verify;
                zulu['_changeCallbacks'] = options;
                tango = golf[tango];
                tango = report.bind(entity)(tango);
                tango = tango.ChangeListeners;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                romeo = report;
                tango = new romeo[tango](yankee);
                tango = tango instanceof Object ? tango : report;
                zulu['_reactChangeCallbacks'] = tango;
                tango = new Array(0);
                zulu['_syncWiths'] = tango;
                tango = false;
                zulu['_isInitialized'] = tango;
                tango = zulu._changeCallbacks;
                tango = tango.add;
                zulu['addChangeListener'] = tango;
                tango = zulu._changeCallbacks;
                tango = tango.addConditional;
                zulu['addConditionalChangeListener'] = tango;
                tango = zulu._changeCallbacks;
                tango = tango.remove;
                zulu['removeChangeListener'] = tango;
                tango = zulu._reactChangeCallbacks;
                tango = tango.add;
                zulu['addReactChangeListener'] = tango;
                tango = zulu._reactChangeCallbacks;
                tango = tango.remove;
                zulu['removeReactChangeListener'] = tango;
                tango = argFoo;
                zulu['_dispatcher'] = tango;
                report = zulu._dispatcher;
                tango = report.createToken;
                tango = tango.bind(report)();
                zulu['_dispatchToken'] = tango;
                report = zulu.registerActionHandlers;
                tango = null;
                if(!(tango == oscar)) { _fun00002_ip = 272; continue _fun00001 }
 270:
                oscar = {};
 272:
                tango = argBaz;
                tango = report.bind(zulu)(oscar, tango);
                report = _closure1_slot6;
                tango = report.push;
                tango = tango.bind(report)(zulu);
                mike = _closure1_slot7;
                if(!mike) { _fun00002_ip = 312; continue _fun00001 }
 302:
                mike = zulu.initializeIfNeeded;
                mike = mike.bind(zulu)();
 312:
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        entity = {};
        mike = 'registerActionHandlers';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            golf = mike._dispatcher;
            oscar = golf.register;
            zulu = mike.getName;
            romeo = zulu.bind(mike)();
            options = mike._dispatchToken;
            yankee = argFoo;
            offset = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = entity._changeCallbacks;
                    entity = mike.hasAny;
                    entity = entity.bind(mike)();
                    if(entity) { _fun00004_ip = 46; continue _fun00003 }
 26:
                    mike = _closure3_slot0;
                    zulu = mike._reactChangeCallbacks;
                    mike = zulu.hasAny;
                    entity = mike.bind(zulu)();
 46:
                    if(entity) { _fun00004_ip = 70; continue _fun00003 }
 49:
                    mike = _closure3_slot0;
                    mike = mike._syncWiths;
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 70:
                    if(!entity) { _fun00004_ip = 208; continue _fun00003 }
 76:
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    tango = 3;
                    golf = mike[tango];
                    zulu = undefined;
                    verify = oscar.bind(zulu)(golf);
                    options = verify.markChanged;
                    golf = _closure3_slot0;
                    golf = options.bind(verify)(golf);
                    mike = mike[tango];
                    oscar = oscar.bind(zulu)(mike);
                    mike = oscar.getIsPaused;
                    mike = mike.bind(oscar)();
                    if(!mike) { _fun00004_ip = 154; continue _fun00003 }
 138:
                    oscar = _closure3_slot0;
                    golf = oscar._mustEmitChanges;
                    oscar = null;
                    mike = oscar != golf;
 154:
                    if(!mike) { _fun00004_ip = 175; continue _fun00003 }
 157:
                    golf = _closure3_slot0;
                    oscar = golf._mustEmitChanges;
                    report = argFoo;
                    mike = oscar.bind(golf)(report);
 175:
                    if(!mike) { _fun00004_ip = 208; continue _fun00003 }
 178:
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    entity = entity[tango];
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.resume;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 208:
                    entity = undefined;
                    return entity;
                }
            };
            verify = argBar;
            foxtrot = golf;
            entity = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        zulu = new Array(9);
        zulu[0] = entity;
        entity = {};
        mike = 'getName';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                entity = mike.constructor;
                entity = entity.displayName;
                zulu = null;
                if(!(zulu == entity)) { _fun00006_ip = 29; continue _fun00005 }
 19:
                mike = mike.constructor;
                entity = mike.name;
 29:
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[1] = entity;
        entity = {};
        mike = 'initializeIfNeeded';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                entity = mike._isInitialized;
                if(entity) { _fun00008_ip = 140; continue _fun00007 }
 15:
                entity = global;
                tango = entity.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                tango = mike.initialize;
                tango = tango.bind(mike)();
                tango = true;
                mike['_isInitialized'] = tango;
                tango = entity.Date;
                entity = tango.now;
                entity = entity.bind(tango)();
                report = entity - zulu;
                entity = 5;
                if(!(report > entity)) { _fun00008_ip = 140; continue _fun00007 }
 76:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.mark;
                entity = mike.getName;
                mike = entity.bind(mike)();
                entity = '.initialize()';
                mike = mike + entity;
                entity = '🦥';
                entity = zulu.bind(tango)(entity, mike, report);
 140:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[2] = entity;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = golf;
        zulu[3] = entity;
        entity = {};
        golf = 'syncWith';
        entity['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                mike = argBaz;
                golf = this;
                var _closure3_slot0 = golf;
                tango = argBar;
                var _closure3_slot1 = tango;
                oscar = golf.waitFor;
                tango = new Array(0);
                report = 0;
                yankee = tango;
                offset = zulu;
                verify = 0;
                options = arraySpread(yankee, offset, verify);
                yankee = oscar;
                offset = tango;
                verify = golf;
                tango = apply(yankee, offset, verify);
                tango = null;
                if(!(tango == mike)) { _fun00010_ip = 82; continue _fun00009 }
 65:
                golf = zulu.forEach;
                oscar = function(argFoo) {
                    entity = argFoo;
                    zulu = entity._syncWiths;
                    mike = zulu.push;
                    entity = {};
                    report = _closure3_slot1;
                    entity['func'] = report;
                    tango = _closure3_slot0;
                    entity['store'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = golf.bind(zulu)(oscar);
                _fun00010_ip = 139; continue _fun00009;
 82:
                var _closure3_slot2 = report;
                oscar = function() { // Original name: wrapper
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        oscar = _closure3_slot2;
                        golf = _closure1_slot1;
                        entity = _closure1_slot2;
                        report = 3;
                        tango = entity[report];
                        entity = undefined;
                        golf = golf.bind(entity)(tango);
                        tango = golf.getChangeSentinel;
                        tango = tango.bind(golf)();
                        if(!(oscar !== tango)) { _fun00012_ip = 105; continue _fun00011 }
 46:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[report];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.getChangeSentinel;
                        zulu = zulu.bind(tango)();
                        _closure3_slot2 = zulu;
                        zulu = _closure3_slot1;
                        tango = zulu.bind(entity)();
                        zulu = false;
                        if(!(zulu !== tango)) { _fun00012_ip = 105; continue _fun00011 }
 91:
                        zulu = _closure3_slot0;
                        mike = zulu.emitChange;
                        mike = mike.bind(zulu)();
 105:
                        return entity;
                    }
                };
                var _closure3_slot3 = oscar;
                tango = tango != mike;
                report = 0;
                if(!tango) { _fun00010_ip = 107; continue _fun00009 }
 104:
                report = mike;
 107:
                tango = function(argFoo, argBar) { // Original name: debounce
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zulu = argFoo;
                        var _closure4_slot0 = zulu;
                        entity = argBar;
                        var _closure4_slot1 = entity;
                        entity = null;
                        var _closure4_slot2 = entity;
                        entity = 0;
                        if(!(entity !== zulu)) { _fun00014_ip = 35; continue _fun00013 }
 28:
                        entity = function() {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                zulu = _closure4_slot2;
                                entity = null;
                                if(!(entity == zulu)) { _fun00016_ip = 44; continue _fun00015 }
 13:
                                entity = global;
                                report = entity.setTimeout;
                                tango = _closure4_slot0;
                                zulu = undefined;
                                entity = function() {
                                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0: // try_start_0
                                        mike = _closure4_slot1;
                                        entity = undefined;
                                        mike = mike.bind(entity)();
 13: // try_end0
                                        mike = null;
                                        _closure4_slot2 = mike;
                                        return entity;
 21: // catch_target0
                                        CatchBlockStart(arg_register=0);
                                        mike = null;
                                        _closure4_slot2 = mike;
                                        throw entity;
                                    }
                                };
                                entity = report.bind(zulu)(entity, tango);
                                _closure4_slot2 = entity;
 44:
                                entity = undefined;
                                return entity;
                            }
                        };
                        _fun00014_ip = 40; continue _fun00013;
 35:
                        entity = function() {
                            mike = global;
                            report = mike.clearImmediate;
                            tango = _closure4_slot2;
                            entity = undefined;
                            tango = report.bind(entity)(tango);
                            tango = mike.setImmediate;
                            mike = _closure4_slot1;
                            mike = tango.bind(entity)(mike);
                            _closure4_slot2 = mike;
                            return entity;
                        };
 40:
                        return entity;
                    }
                };
                mike = undefined;
                mike = tango.bind(mike)(report, oscar);
                _closure3_slot3 = mike;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.addChangeListener;
                    entity = _closure3_slot3;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[4] = entity;
        entity = {};
        golf = 'waitFor';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            options = 0;
            tango = copyRestArgs(options);
            zulu = tango.map;
            mike = function(argFoo, argBar) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    golf = 5;
                    entity = entity[golf];
                    oscar = undefined;
                    verify = mike.bind(oscar)(entity);
                    entity = null;
                    options = entity != zulu;
                    offset = _closure3_slot0;
                    report = offset.getName;
                    foxtrot = report.bind(offset)();
                    report = global;
                    report = report.HermesInternal;
                    romeo = report.concat;
                    yankee = 'Store.waitFor(...) called with null Store at index ';
                    offset = argBar;
                    report = ' for store ';
                    report = romeo.bind(yankee)(offset, report, foxtrot);
                    report = verify.bind(oscar)(options, report);
                    report = zulu._dispatcher;
                    report = entity != report;
                    if(!report) { _fun00020_ip = 164; continue _fun00019 }
 105:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    report = report.bind(oscar)(tango);
                    tango = zulu._dispatcher;
                    mike = _closure3_slot0;
                    mike = mike._dispatcher;
                    tango = tango === mike;
                    mike = 'Stores belong to two separate dispatchers.';
                    mike = report.bind(oscar)(tango, mike);
                    mike = zulu.getDispatchToken;
                    entity = mike.bind(zulu)();
 164:
                    return entity;
                }
            };
            oscar = zulu.bind(tango)(mike);
            tango = report._dispatcher;
            zulu = tango.addDependencies;
            mike = report.getDispatchToken;
            mike = mike.bind(report)();
            report = oscar.filter;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = report.bind(oscar)(entity);
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = golf;
        zulu[5] = entity;
        entity = {};
        golf = 'emitChange';
        entity['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.markChanged;
            mike = this;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = golf;
        zulu[6] = entity;
        entity = {};
        golf = 'getDispatchToken';
        entity['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity._dispatchToken;
            return entity;
        };
        entity['value'] = golf;
        zulu[7] = entity;
        entity = {};
        golf = 'mustEmitChanges';
        entity['key'] = golf;
        golf = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = arguments[0];
                entity = undefined;
                if(!(zulu === entity)) { _fun00022_ip = 16; continue _fun00021 }
 9:
                zulu = function() { // Original name: t
                    entity = true;
                    return entity;
                };
 16:
                mike = this;
                mike['_mustEmitChanges'] = zulu;
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[8] = entity;
        entity = {};
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = true;
                _closure1_slot7 = mike;
                tango = _closure1_slot6;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = mike.initializeIfNeeded;
                    entity = entity.bind(mike)();
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                zulu = _closure1_slot3;
                mike = null;
                if(!(mike != zulu)) { _fun00024_ip = 50; continue _fun00023 }
 40:
                mike = _closure1_slot3;
                entity = undefined;
                entity = mike.bind(entity)();
 50:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        golf = 'destroy';
        entity['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot6;
            mike = 0;
            zulu['length'] = mike;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.destroy;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity['value'] = golf;
        mike[1] = entity;
        entity = {};
        golf = 'getAll';
        entity['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = undefined;
        entity = report.bind(entity)(tango, zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    mike['initialized'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/Store.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Store'] = mike;
    return entity;
})();