// discord_common/js/packages/flux/PersistedStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golf = argBaz;
            var _closure2_slot0 = golf;
            oscar = _closure1_slot4;
            zulu = _closure1_slot9;
            entity = 1;
            tango = 3;
            options = entity & tango;
            entity = report;
            if(!options) { _fun00002_ip = 44; continue _fun00001 }
 39:
            entity = report.prototype;
 44:
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = argBar;
            entity = oscar.bind(report)(zulu, entity, golf);
            var _closure2_slot1 = entity;
            zulu = 2;
            zulu = zulu & tango;
            if(!zulu) { _fun00002_ip = 80; continue _fun00001 }
 75:
            entity = function(argFoo) {
                tango = _closure2_slot1;
                zulu = tango.apply;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
 80:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot9;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot8;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00004_ip = 92; continue _fun00003;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00004_ip = 71; continue _fun00003 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot9;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = ['_state', '_version'];
    var _closure1_slot3 = entity;
    oscar = global;
    offset = oscar.Object;
    report = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(offset)(zulu, entity, tango);
    tango = 0;
    report = options[tango];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = options[report];
    report = golf.bind(entity)(report);
    verify = report.Store;
    var _closure1_slot11 = verify;
    report = {};
    report['_state'] = entity;
    report['_version'] = entity;
    var _closure1_slot12 = report;
    report = null;
    var _closure1_slot13 = report;
    report = function(argFoo) {
        report = function(argFoo, argBar) { // Original name: PersistedStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = this;
                zulu = _closure1_slot6;
                report = _closure2_slot0;
                golf = undefined;
                zulu = zulu.bind(golf)(oscar, report);
                tango = _closure1_slot16;
                zulu = new Array(2);
                options = argFoo;
                zulu[0] = options;
                options = argBar;
                zulu[1] = options;
                tango = tango.bind(golf)(oscar, report, zulu);
                var _closure3_slot0 = tango;
                zulu = tango.getClass;
                zulu = zulu.bind(tango)();
                report = zulu.migrations;
                zulu = null;
                report = zulu == report;
                zulu = 0;
                if(report) { _fun00008_ip = 108; continue _fun00007 }
 87:
                report = tango.getClass;
                report = report.bind(tango)();
                report = report.migrations;
                zulu = report.length;
 108:
                tango['_version'] = zulu;
                zulu = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = mike.getClass;
                    entity = entity.bind(mike)();
                    zulu = entity.persistKey;
                    entity = mike.persist;
                    entity = entity.bind(mike)();
                    entity = _closure2_slot0;
                    tango = entity._writePromises;
                    mike = tango.delete;
                    mike = mike.bind(tango)(zulu);
                    mike = entity._writeResolvers;
                    entity = mike.delete;
                    entity = entity.bind(mike)(zulu);
                    mike = argFoo;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                tango['callback'] = zulu;
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 8;
                mike = report[mike];
                oscar = zulu.bind(golf)(mike);
                mike = tango.getClass;
                mike = mike.bind(tango)();
                report = mike.throttleDelay;
                zulu = {};
                mike = false;
                zulu['leading'] = mike;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.callback;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = oscar.bind(golf)(mike, report, zulu);
                tango['throttledCallback'] = mike;
                mike = tango.getClass;
                mike = mike.bind(tango)();
                mike = mike.persistKey;
                zulu = 'string';
                mike = typeof mike;
                if(!(zulu === mike)) { _fun00008_ip = 410; continue _fun00007 }
 218:
                mike = tango.initialize;
                zulu = 'function';
                mike = typeof mike;
                if(!(zulu === mike)) { _fun00008_ip = 338; continue _fun00007 }
 235:
                mike = tango.getState;
                mike = typeof mike;
                if(!(zulu === mike)) { _fun00008_ip = 266; continue _fun00007 }
 248:
                mike = tango.addChangeListener;
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.asyncPersist;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = mike.bind(tango)(entity);
                return tango;
 266:
                entity = global;
                zulu = entity.Error;
                mike = tango.getClass;
                mike = mike.bind(tango)();
                oscar = mike.name;
                entity = entity.HermesInternal;
                report = entity.concat;
                mike = '';
                entity = ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.';
                yankee = report.bind(mike)(oscar, entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                romeo = mike;
                entity = new romeo[zulu](yankee, offset);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 338:
                entity = global;
                zulu = entity.Error;
                mike = tango.getClass;
                mike = mike.bind(tango)();
                oscar = mike.name;
                entity = entity.HermesInternal;
                report = entity.concat;
                mike = '';
                entity = ' initialized without an `initialize` method. Add one that accepts the initial cached state.';
                yankee = report.bind(mike)(oscar, entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                romeo = mike;
                entity = new romeo[zulu](yankee, offset);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 410:
                entity = global;
                zulu = entity.Error;
                mike = tango.getClass;
                mike = mike.bind(tango)();
                report = mike.name;
                entity = entity.HermesInternal;
                tango = entity.concat;
                mike = '';
                entity = ' initialized without a `persistKey`. Add one so we know where to save your stuff!';
                yankee = tango.bind(mike)(report, entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                romeo = mike;
                entity = new romeo[zulu](yankee, offset);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        var _closure2_slot0 = report;
        zulu = _closure1_slot10;
        tango = undefined;
        mike = argFoo;
        mike = zulu.bind(tango)(report, mike);
        zulu = _closure1_slot7;
        entity = {};
        mike = 'getClass';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.constructor;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'initializeFromState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                zulu = mike.initialize;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                if(!entity) { _fun00010_ip = 30; continue _fun00009 }
 20:
                entity = mike.asyncPersist;
                entity = entity.bind(mike)();
 30:
                entity = mike._isInitialized;
                if(entity) { _fun00010_ip = 88; continue _fun00009 }
 39:
                entity = _closure2_slot0;
                tango = entity.allPersistKeys;
                zulu = tango.add;
                entity = mike.getClass;
                entity = entity.bind(mike)();
                entity = entity.persistKey;
                entity = zulu.bind(tango)(entity);
                entity = true;
                mike['_isInitialized'] = entity;
                _fun00010_ip = 98; continue _fun00009;
 88:
                entity = mike.emitChange;
                entity = entity.bind(mike)();
 98:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'initializeIfNeeded';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = this;
                entity = mike._isInitialized;
                if(entity) { _fun00012_ip = 261; continue _fun00011 }
 15:
                entity = global;
                tango = entity.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                golf = _closure2_slot0;
                oscar = golf.allPersistKeys;
                report = oscar.add;
                tango = mike.getClass;
                tango = tango.bind(mike)();
                tango = tango.persistKey;
                tango = report.bind(oscar)(tango);
                oscar = golf.migrateAndReadStoreState;
                tango = mike.getClass;
                tango = tango.bind(mike)();
                report = tango.persistKey;
                tango = mike.getClass;
                tango = tango.bind(mike)();
                tango = tango.migrations;
                tango = oscar.bind(golf)(report, tango);
                oscar = tango.state;
                tango = tango.requiresPersist;
                report = mike.initialize;
                report = report.bind(mike)(oscar);
                if(!report) { _fun00012_ip = 150; continue _fun00011 }
 140:
                report = mike.asyncPersist;
                report = report.bind(mike)();
 150:
                if(!tango) { _fun00012_ip = 163; continue _fun00011 }
 153:
                tango = mike.asyncPersist;
                tango = tango.bind(mike)();
 163:
                tango = true;
                mike['_isInitialized'] = tango;
                tango = entity.Date;
                entity = tango.now;
                entity = entity.bind(tango)();
                report = entity - zulu;
                entity = 5;
                if(!(report > entity)) { _fun00012_ip = 261; continue _fun00011 }
 197:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
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
 261:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'asyncPersist';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = zulu.getClass;
                zulu = entity.bind(zulu)();
                report = zulu.persistKey;
                var _closure3_slot1 = report;
                entity = zulu.disableWrite;
                zulu = zulu.throttleDelay;
                var _closure3_slot2 = zulu;
                tango = _closure2_slot0;
                tango = tango.disableWrites;
                if(tango) { _fun00014_ip = 149; continue _fun00013 }
 61:
                if(entity) { _fun00014_ip = 149; continue _fun00013 }
 64:
                entity = _closure2_slot0;
                tango = entity._writePromises;
                entity = tango.get;
                entity = entity.bind(tango)(report);
                tango = null;
                if(!(tango == entity)) { _fun00014_ip = 147; continue _fun00013 }
 90:
                tango = global;
                oscar = tango.Promise;
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                options = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        report = _closure3_slot2;
                        tango = 0;
                        if(!(!(report > tango))) { _fun00016_ip = 29; continue _fun00015 }
 22:
                        options = function() {
                            zulu = _closure3_slot0;
                            mike = zulu.callback;
                            entity = _closure4_slot0;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        _fun00016_ip = 34; continue _fun00015;
 29:
                        options = function() {
                            zulu = _closure3_slot0;
                            mike = zulu.throttledCallback;
                            entity = _closure4_slot0;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
 34:
                        zulu = _closure2_slot0;
                        report = zulu._writeResolvers;
                        tango = report.set;
                        zulu = _closure3_slot1;
                        mike = new Array(2);
                        mike[0] = entity;
                        entity = global;
                        golf = entity.requestIdleCallback;
                        oscar = {};
                        entity = 500;
                        oscar['timeout'] = entity;
                        entity = undefined;
                        oscar = golf.bind(entity)(options, oscar);
                        mike[1] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    }
                };
                verify = tango;
                mike = new verify[oscar](options, golf);
                mike = mike instanceof Object ? mike : tango;
                zulu = _closure2_slot0;
                tango = zulu._writePromises;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                entity = mike;
 147:
                return entity;
 149:
                entity = global;
                zulu = entity.Promise;
                mike = zulu.resolve;
                entity = false;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'persist';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.getClass;
            mike = mike.bind(entity)();
            report = mike.persistKey;
            mike = entity.getState;
            golf = mike.bind(entity)();
            oscar = entity._version;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.Storage;
            zulu = tango.set;
            mike = {};
            mike['_state'] = golf;
            mike['_version'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.getClass;
            entity = entity.bind(mike)();
            tango = entity.persistKey;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.Storage;
            mike = zulu.remove;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        oscar = {};
        entity = 'clearAll';
        oscar['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                _closure1_slot13 = zulu;
                zulu = _closure2_slot0;
                tango = zulu._clearAllPromise;
                zulu = null;
                if(!(zulu == tango)) { _fun00018_ip = 78; continue _fun00017 }
 35:
                zulu = _closure2_slot0;
                tango = global;
                report = tango.Promise;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                oscar = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = global;
                    tango = entity.requestIdleCallback;
                    zulu = {};
                    entity = 500;
                    zulu['timeout'] = entity;
                    entity = undefined;
                    mike = function() {
                        mike = _closure2_slot0;
                        tango = mike.clearPersistQueue;
                        zulu = _closure3_slot0;
                        zulu = tango.bind(mike)(zulu);
                        report = mike.allPersistKeys;
                        tango = report.forEach;
                        zulu = function(argFoo) {
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                zulu = argFoo;
                                tango = _closure2_slot0;
                                mike = tango.shouldClear;
                                entity = _closure3_slot0;
                                entity = mike.bind(tango)(entity, zulu);
                                if(!entity) { _fun00020_ip = 74; continue _fun00019 }
 32:
                                tango = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 10;
                                mike = mike[entity];
                                entity = undefined;
                                entity = tango.bind(entity)(mike);
                                mike = entity.Storage;
                                entity = mike.remove;
                                entity = entity.bind(mike)(zulu);
 74:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zulu = tango.bind(report)(zulu);
                        tango = _closure1_slot11;
                        zulu = tango.getAll;
                        tango = zulu.bind(tango)();
                        zulu = tango.forEach;
                        entity = function(argFoo) {
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                mike = argFoo;
                                entity = _closure2_slot0;
                                entity = mike instanceof entity;
                                if(!entity) { _fun00022_ip = 56; continue _fun00021 }
 17:
                                oscar = _closure2_slot0;
                                report = oscar.shouldClear;
                                tango = _closure3_slot0;
                                zulu = mike.getClass;
                                zulu = zulu.bind(mike)();
                                zulu = zulu.persistKey;
                                entity = report.bind(oscar)(tango, zulu);
 56:
                                if(!entity) { _fun00022_ip = 77; continue _fun00021 }
 59:
                                entity = false;
                                mike['_isInitialized'] = entity;
                                entity = mike.initializeIfNeeded;
                                entity = entity.bind(mike)();
 77:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = zulu.bind(tango)(entity);
                        entity = null;
                        mike['_clearAllPromise'] = entity;
                        mike = _closure4_slot0;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    mike = tango.bind(entity)(mike, zulu);
                    return entity;
                };
                golf = tango;
                mike = new golf[report](oscar, report);
                mike = mike instanceof Object ? mike : tango;
                zulu['_clearAllPromise'] = mike;
 78:
                entity = _closure2_slot0;
                entity = entity._clearAllPromise;
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(7);
        entity[0] = oscar;
        oscar = {};
        options = 'shouldClear';
        oscar['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = argFoo;
                oscar = argBar;
                tango = zulu.omit;
                entity = null;
                entity = entity == tango;
                if(entity) { _fun00024_ip = 34; continue _fun00023 }
 21:
                mike = tango.includes;
                mike = mike.bind(tango)(oscar);
                entity = !mike;
 34:
                if(!entity) { _fun00024_ip = 103; continue _fun00023 }
 37:
                tango = zulu.type;
                mike = 'all';
                mike = mike === tango;
                if(mike) { _fun00024_ip = 100; continue _fun00023 }
 53:
                tango = zulu.type;
                zulu = 'user-data-only';
                zulu = zulu === tango;
                if(!zulu) { _fun00024_ip = 97; continue _fun00023 }
 71:
                tango = _closure2_slot0;
                report = tango.userAgnosticPersistKeys;
                tango = report.has;
                tango = tango.bind(report)(oscar);
                zulu = !tango;
 97:
                mike = zulu;
 100:
                entity = mike;
 103:
                return entity;
            }
        };
        oscar['value'] = options;
        entity[1] = oscar;
        oscar = {};
        options = 'clearPersistQueue';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = _closure2_slot0;
            tango = entity._writeResolvers;
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    oscar = argBar;
                    golf = argFoo;
                    mike = golf[Symbol.iterator];
                    golf = mike().next;
                    tango = golf().value;
                    zulu = mike;
                    entity = undefined;
                    report = zulu === entity;
                    zulu = undefined;
                    if(report) { _fun00026_ip = 30; continue _fun00025 }
 27:
                    zulu = tango;
 30:
                    tango = undefined;
                    if(report) { _fun00026_ip = 60; continue _fun00025 }
 35:
                    options = golf().value;
                    golf = mike;
                    golf = golf === entity;
                    tango = undefined;
                    report = golf;
                    if(golf) { _fun00026_ip = 60; continue _fun00025 }
 54:
                    tango = options;
                    report = golf;
 60:
                    if(report) { _fun00026_ip = 66; continue _fun00025 }
 63:
                    mike.return();
 66:
                    options = _closure2_slot0;
                    golf = options.shouldClear;
                    report = _closure3_slot0;
                    report = golf.bind(options)(report, oscar);
                    if(!report) { _fun00026_ip = 151; continue _fun00025 }
 95:
                    mike = _closure2_slot0;
                    golf = mike._writePromises;
                    report = golf.delete;
                    report = report.bind(golf)(oscar);
                    report = mike._writeResolvers;
                    mike = report.delete;
                    mike = mike.bind(report)(oscar);
                    mike = global;
                    mike = mike.cancelIdleCallback;
                    mike = mike.bind(entity)(tango);
                    mike = false;
                    mike = zulu.bind(entity)(mike);
 151:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            zulu = entity._writePromises;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity._writeResolvers;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        entity[2] = oscar;
        oscar = {};
        options = 'getAllStates';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.all;
            report = entity.Array;
            tango = report.from;
            entity = _closure2_slot0;
            oscar = entity._writePromises;
            entity = oscar.values;
            entity = entity.bind(oscar)();
            entity = tango.bind(report)(entity);
            zulu = mike.bind(zulu)(entity);
            mike = zulu.then;
            entity = function() {
                entity = {};
                var _closure4_slot0 = entity;
                zulu = _closure2_slot0;
                tango = zulu.allPersistKeys;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        tango = argFoo;
                        zulu = _closure4_slot0;
                        oscar = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        mike = oscar.bind(entity)(mike);
                        oscar = mike.Storage;
                        mike = oscar.get;
                        mike = mike.bind(oscar)(tango);
                        oscar = null;
                        if(!(oscar == mike)) { _fun00028_ip = 61; continue _fun00027 }
 57:
                        mike = _closure1_slot12;
 61:
                        mike = mike._state;
                        zulu[tango] = mike;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        entity[3] = oscar;
        oscar = {};
        options = 'initializeAll';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure1_slot11;
            mike = zulu.getAll;
            zulu = mike.bind(zulu)();
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot0;
                    entity = zulu instanceof entity;
                    if(!entity) { _fun00030_ip = 77; continue _fun00029 }
 17:
                    entity = zulu.getClass;
                    entity = entity.bind(zulu)();
                    tango = entity.persistKey;
                    report = _closure3_slot0;
                    mike = report.hasOwnProperty;
                    mike = mike.bind(report)(tango);
                    if(mike) { _fun00030_ip = 58; continue _fun00029 }
 54:
                    mike = undefined;
                    return mike;
 58:
                    mike = zulu.initializeFromState;
                    entity = _closure3_slot0;
                    entity = entity[tango];
                    entity = mike.bind(zulu)(entity);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        entity[4] = oscar;
        oscar = {};
        options = 'destroy';
        oscar['key'] = options;
        options = function() { // Original name: value
            mike = null;
            _closure1_slot13 = mike;
            mike = _closure1_slot11;
            entity = mike.destroy;
            entity = entity.bind(mike)();
            entity = _closure2_slot0;
            zulu = entity.clearPersistQueue;
            mike = {};
            tango = 'all';
            mike['type'] = tango;
            mike = zulu.bind(entity)(mike);
            zulu = entity.allPersistKeys;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity.userAgnosticPersistKeys;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        entity[5] = oscar;
        oscar = {};
        options = 'migrateAndReadStoreState';
        oscar['key'] = options;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tango = argFoo;
                options = argBar;
                mike = _closure1_slot13;
                offset = null;
                if(!(offset != mike)) { _fun00032_ip = 48; continue _fun00031 }
 19:
                report = _closure2_slot0;
                zulu = report.shouldClear;
                mike = _closure1_slot13;
                mike = zulu.bind(report)(mike, tango);
                if(mike) { _fun00032_ip = 295; continue _fun00031 }
 48:
                mike = _closure2_slot0;
                mike = mike._clearAllPromise;
                mike = offset != mike;
                oscar = null;
                if(mike) { _fun00032_ip = 108; continue _fun00031 }
 70:
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                mike = report.bind(mike)(zulu);
                zulu = mike.Storage;
                mike = zulu.get;
                oscar = mike.bind(zulu)(tango);
 108:
                if(!(offset == oscar)) { _fun00032_ip = 116; continue _fun00031 }
 112:
                oscar = _closure1_slot12;
 116:
                zulu = oscar._state;
                verify = oscar._version;
                report = _closure1_slot5;
                mike = _closure1_slot3;
                golf = undefined;
                mike = report.bind(golf)(oscar, mike);
                yankee = offset == options;
                oscar = 0;
                report = 0;
                if(yankee) { _fun00032_ip = 160; continue _fun00031 }
 155:
                report = options.length;
 160:
                if(!(oscar !== report)) { _fun00032_ip = 172; continue _fun00031 }
 164:
                if(!(verify !== report)) { _fun00032_ip = 172; continue _fun00031 }
 168:
                if(!(offset == options)) { _fun00032_ip = 232; continue _fun00031 }
 172:
                yankee = global;
                romeo = yankee.Object;
                yankee = romeo.values;
                yankee = yankee.bind(romeo)(mike);
                yankee = yankee.length;
                if(!(!(yankee > oscar))) { _fun00032_ip = 214; continue _fun00031 }
 199:
                yankee = {};
                yankee['state'] = zulu;
                romeo = false;
                yankee['requiresPersist'] = romeo;
                _fun00032_ip = 230; continue _fun00031;
 214:
                romeo = {};
                romeo['state'] = mike;
                foxtrot = true;
                romeo['requiresPersist'] = foxtrot;
                yankee = romeo;
 230:
                return yankee;
 232:
                yankee = offset != verify;
                oscar = 0;
                if(!yankee) { _fun00032_ip = 244; continue _fun00031 }
 241:
                oscar = verify;
 244:
                if(!(offset == verify)) { _fun00032_ip = 251; continue _fun00031 }
 248:
                zulu = mike;
 251:
                mike = zulu;
                zulu = mike;
                if(!(oscar < report)) { _fun00032_ip = 280; continue _fun00031 }
 261:
                verify = options[oscar];
                mike = verify.bind(golf)(mike);
                oscar = oscar + 1;
                zulu = mike;
                if(oscar < report) { _fun00032_ip = 261; continue _fun00031 }
 280:
                mike = {};
                mike['state'] = zulu;
                zulu = true;
                mike['requiresPersist'] = zulu;
                return mike;
 295:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                entity = mike[entity];
                mike = undefined;
                entity = zulu.bind(mike)(entity);
                zulu = entity.Storage;
                entity = zulu.remove;
                entity = entity.bind(zulu)(tango);
                entity = {};
                entity['state'] = mike;
                mike = false;
                entity['requiresPersist'] = mike;
                return entity;
            }
        };
        oscar['value'] = golf;
        entity[6] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    report = report.bind(entity)(verify);
    var _closure1_slot14 = report;
    verify = oscar.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtrot);
    verify = verify instanceof Object ? verify : offset;
    report['allPersistKeys'] = verify;
    verify = oscar.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtrot);
    verify = verify instanceof Object ? verify : offset;
    report['userAgnosticPersistKeys'] = verify;
    verify = oscar.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtrot);
    verify = verify instanceof Object ? verify : offset;
    report['_writePromises'] = verify;
    oscar = oscar.Map;
    verify = oscar.prototype;
    verify = Object.create(verify, {constructor: {value: oscar}});
    backup = verify;
    oscar = new backup[oscar](foxtrot);
    oscar = oscar instanceof Object ? oscar : verify;
    report['_writeResolvers'] = oscar;
    oscar = false;
    report['disableWrites'] = oscar;
    report['disableWrite'] = oscar;
    report['throttleDelay'] = tango;
    tango = function(argFoo) {
        tango = function() { // Original name: UserAgnosticStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot7;
        report = {};
        entity = 'initializeFromState';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            oscar = this;
            mike = _closure1_slot14;
            tango = mike.userAgnosticPersistKeys;
            zulu = tango.add;
            mike = oscar.getClass;
            mike = mike.bind(oscar)();
            mike = mike.persistKey;
            mike = zulu.bind(tango)(mike);
            report = _closure1_slot15;
            offset = _closure2_slot0;
            zulu = undefined;
            verify = 'initializeFromState';
            golf = 3;
            yankee = undefined;
            options = oscar;
            mike = yankee[report](offset, verify, options, golf, oscar);
            entity = new Array(1);
            tango = argFoo;
            entity[0] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'initializeIfNeeded';
        report['key'] = golf;
        golf = function() { // Original name: value
            oscar = this;
            mike = _closure1_slot14;
            tango = mike.userAgnosticPersistKeys;
            zulu = tango.add;
            mike = oscar.getClass;
            mike = mike.bind(oscar)();
            mike = mike.persistKey;
            mike = zulu.bind(tango)(mike);
            report = _closure1_slot15;
            offset = _closure2_slot0;
            zulu = undefined;
            verify = 'initializeIfNeeded';
            golf = 3;
            yankee = undefined;
            options = oscar;
            mike = yankee[report](offset, verify, options, golf, oscar);
            entity = new Array(0);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.getUserAgnosticState;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    oscar = tango.bind(entity)(report);
    tango = function(argFoo) {
        zulu = function() { // Original name: DeviceSettingsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot10;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot7;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango = tango.bind(entity)(oscar);
    mike = function(argFoo) {
        zulu = function() { // Original name: OfflineCacheStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot10;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot7;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(oscar);
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = '../discord_common/js/packages/flux/PersistedStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['PersistedStore'] = report;
    zulu['DeviceSettingsStore'] = tango;
    zulu['OfflineCacheStore'] = mike;
    return entity;
})();