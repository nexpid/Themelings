// app/modules/content_inventory/ContentInventoryOutboxStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: resetOutboxes
        entity = global;
        mike = entity.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        zulu = mike instanceof Object ? mike : zulu;
        _closure1_slot7 = zulu;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        tango = zulu;
        entity = new tango[entity](zulu);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot8 = entity;
        entity = null;
        _closure1_slot9 = entity;
        entity = false;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot14 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = mike.Map;
    verify = options.prototype;
    verify = Object.create(verify, {constructor: {value: options}});
    backup = verify;
    options = new backup[options](foxtrot);
    options = options instanceof Object ? options : verify;
    var _closure1_slot7 = options;
    mike = mike.Set;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot8 = mike;
    mike = null;
    var _closure1_slot9 = mike;
    mike = false;
    var _closure1_slot10 = mike;
    var _closure1_slot11 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ContentInventoryOutboxStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'getMatchingOutboxEntry';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tango = entity.activity;
                report = entity.userId;
                zulu = _closure1_slot7;
                entity = zulu.get;
                entity = entity.bind(zulu)(report);
                zulu = null;
                if(!(zulu != entity)) { _fun00006_ip = 41; continue _fun00005 }
 37:
                if(!(zulu == tango)) { _fun00006_ip = 45; continue _fun00005 }
 41:
                zulu = undefined;
                return zulu;
 45:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.findMatchingEntry;
                entity = entity.entries;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getUserOutbox';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot7;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isFetchingUserOutbox';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot8;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'deleteOutboxEntryError';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot9;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isDeletingEntryHistory';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot10;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'hasInitialized';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ContentInventoryOutboxStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot14;
        entity = undefined;
        mike = mike.bind(entity)();
        mike = true;
        _closure1_slot11 = mike;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: handleLogOut
        mike = _closure1_slot14;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleFetchOutboxStart
        entity = argFoo;
        zulu = entity.userId;
        mike = _closure1_slot8;
        entity = mike.add;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_FETCH_OUTBOX_START'] = verify;
    verify = function(argFoo) { // Original name: handleFetchOutboxSuccess
        entity = argFoo;
        options = entity.outbox;
        zulu = entity.userId;
        report = _closure1_slot7;
        tango = report.set;
        mike = {};
        verify = mike;
        oscar = copyDataProperties(verify, options);
        oscar = global;
        golf = oscar.Date;
        oscar = golf.now;
        golf = oscar.bind(golf)();
        oscar = 'lastFetched';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        mike = _closure1_slot8;
        entity = mike.delete;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFetchOutboxFailure
        entity = argFoo;
        zulu = entity.userId;
        mike = _closure1_slot8;
        entity = mike.delete;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE'] = verify;
    verify = function() { // Original name: handleDeleteOutboxEntryStart
        entity = null;
        _closure1_slot9 = entity;
        entity = true;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START'] = verify;
    verify = function(argFoo) { // Original name: handleDeleteOutboxEntrySuccess
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = mike.entry;
            var _closure2_slot0 = zulu;
            report = mike.userId;
            zulu = null;
            _closure1_slot9 = zulu;
            oscar = _closure1_slot7;
            tango = oscar.get;
            oscar = tango.bind(oscar)(report);
            if(!(zulu != oscar)) { _fun00008_ip = 116; continue _fun00007 }
 47:
            tango = oscar.entries;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike !== entity;
                return entity;
            };
            golf = zulu.bind(tango)(entity);
            tango = _closure1_slot7;
            zulu = tango.set;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            oscar = 'entries';
            entity[oscar] = golf;
            entity = zulu.bind(tango)(report, entity);
            entity = false;
            _closure1_slot10 = entity;
            entity = undefined;
            return entity;
 116:
            entity = false;
            return entity;
        }
    };
    mike['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleDeleteOutboxEntryFailure
        entity = argFoo;
        entity = entity.error;
        _closure1_slot9 = entity;
        entity = false;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE'] = verify;
    tango = function() { // Original name: handleClearError
        entity = null;
        _closure1_slot9 = entity;
        entity = false;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/ContentInventoryOutboxStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();