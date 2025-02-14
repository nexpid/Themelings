// app/stores/SnapshotStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun13023: for(var _fun13023_ip = 0; ; ) switch(_fun13023_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun13023_ip = 51; continue _fun13023 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun13023_ip = 92; continue _fun13023;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun13023_ip = 71; continue _fun13023 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun13024: for(var _fun13024_ip = 0; ; ) switch(_fun13024_ip) {
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
            _fun13024_ip = 74; continue _fun13024;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Store;
    mike = function(argFoo) {
        report = function(argFoo, argBar) { // Original name: SnapshotStore
            tango = argFoo;
            yankee = this;
            zulu = _closure1_slot3;
            mike = _closure2_slot0;
            oscar = undefined;
            zulu = zulu.bind(oscar)(yankee, mike);
            offset = _closure1_slot8;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 5;
            entity = options[entity];
            zulu = golf.bind(oscar)(entity);
            entity = new Array(3);
            entity[0] = zulu;
            romeo = {};
            sizing = romeo;
            kilo = tango;
            zulu = copyDataProperties(sizing, kilo);
            zulu = function() { // Original name: CLEAR_CACHES
                mike = _closure3_slot0;
                entity = mike.clear;
                entity = entity.bind(mike)();
                entity = false;
                return entity;
            };
            verify = 'CLEAR_CACHES';
            romeo[verify] = zulu;
            foxtrot = function() { // Original name: WRITE_CACHES
                mike = _closure3_slot0;
                entity = mike.save;
                entity = entity.bind(mike)();
                entity = false;
                return entity;
            };
            zulu = 'WRITE_CACHES';
            romeo[zulu] = foxtrot;
            entity[1] = romeo;
            romeo = argBar;
            entity[2] = romeo;
            entity = offset.bind(oscar)(yankee, mike, entity);
            var _closure3_slot0 = entity;
            report = 6;
            offset = options[report];
            romeo = golf.bind(oscar)(offset);
            offset = entity.getClass;
            offset = offset.bind(entity)();
            yankee = offset.displayName;
            offset = null;
            yankee = offset != yankee;
            offset = 'Snapshot stores need a display name';
            offset = romeo.bind(oscar)(yankee, offset);
            offset = options[report];
            yankee = golf.bind(oscar)(offset);
            verify = verify in tango;
            offset = !verify;
            verify = "SnapshotStores cannot use the 'CLEAR_CACHES' action";
            verify = yankee.bind(oscar)(offset, verify);
            report = options[report];
            report = golf.bind(oscar)(report);
            zulu = zulu in tango;
            tango = !zulu;
            zulu = "SnapshotStores cannot use the 'WRITE_CACHES' action";
            zulu = report.bind(oscar)(tango, zulu);
            zulu = mike.allStores;
            mike = zulu.push;
            mike = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot7;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot4;
        oscar = {};
        mike = 'persistKey';
        oscar['key'] = mike;
        mike = function() { // Original name: get
            mike = this;
            entity = mike.getClass;
            entity = entity.bind(mike)();
            tango = entity.displayName;
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = '-snapshot';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
        };
        oscar['get'] = mike;
        mike = new Array(5);
        mike[0] = oscar;
        oscar = {};
        golf = 'clear';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.Storage;
            zulu = tango.remove;
            mike = this;
            mike = mike.persistKey;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'save';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            oscar = this;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            report = mike.Storage;
            tango = report.set;
            zulu = oscar.persistKey;
            mike = oscar.takeSnapshot;
            mike = mike.bind(oscar)();
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'readSnapshot';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun13034: for(var _fun13034_ip = 0; ; ) switch(_fun13034_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.Storage;
                mike = zulu.get;
                entity = this;
                entity = entity.persistKey;
                mike = mike.bind(zulu)(entity);
                report = null;
                zulu = report == mike;
                entity = null;
                if(zulu) { _fun13034_ip = 81; continue _fun13034 }
 61:
                tango = mike.version;
                zulu = argFoo;
                entity = null;
                if(!(tango === zulu)) { _fun13034_ip = 81; continue _fun13034 }
 76:
                entity = mike.data;
 81:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'getClass';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.constructor;
            return entity;
        };
        oscar['value'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'clearAll';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            entity = _closure2_slot0;
            zulu = entity.allStores;
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = argFoo;
                entity = mike.clear;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = new Array(0);
    mike['allStores'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SnapshotStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();