// app/modules/app_database/modules/LowDiskTrim.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: LowDiskTrim
            report = this;
            var _closure3_slot0 = report;
            oscar = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = oscar.bind(entity)(report, tango);
            tango = false;
            report['isLowDisk'] = tango;
            tango = {};
            oscar = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handlePostConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            tango['POST_CONNECTION_OPEN'] = oscar;
            report['actions'] = tango;
            tango = _closure1_slot4;
            zulu = tango.addChangeListener;
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.handleFileSystemStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'handlePostConnectionOpen';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = false;
            mike['isLowDisk'] = entity;
            entity = mike.handleFileSystemStoreChanged;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'handleFileSystemStoreChanged';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun60979: for(var _fun60979_ip = 0; ; ) switch(_fun60979_ip) {
 0:
                mike = this;
                entity = _closure1_slot4;
                entity = entity.isLowDisk;
                tango = entity;
                if(!tango) { _fun60979_ip = 32; continue _fun60979 }
 22:
                report = mike.isLowDisk;
                tango = report !== entity;
 32:
                if(!tango) { _fun60979_ip = 83; continue _fun60979 }
 35:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 3;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.database;
                tango = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != tango)) { _fun60979_ip = 83; continue _fun60979 }
 73:
                zulu = tango.incrementalVacuum;
                zulu = zulu.bind(tango)();
 83:
                mike['isLowDisk'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'resetInMemoryState';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/LowDiskTrim.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();