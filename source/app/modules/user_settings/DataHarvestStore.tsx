// app/modules/user_settings/DataHarvestStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun107121: for(var _fun107121_ip = 0; ; ) switch(_fun107121_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun107121_ip = 51; continue _fun107121 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun107121_ip = 92; continue _fun107121;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun107121_ip = 71; continue _fun107121 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun107122: for(var _fun107122_ip = 0; ; ) switch(_fun107122_ip) {
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
            _fun107122_ip = 76; continue _fun107122;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = false;
    var _closure1_slot5 = mike;
    var _closure1_slot6 = entity;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: DataHarvestStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'harvestType';
        report['key'] = entity;
        entity = function() { // Original name: get
            entity = _closure1_slot6;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'requestingHarvest';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot5;
            return entity;
        };
        report['get'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'DataHarvestStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleConnectionOpen
        entity = undefined;
        _closure1_slot6 = entity;
        return entity;
    };
    mike['CONNECTION_OPEN'] = options;
    options = function(argFoo) { // Original name: handleUpdateHarvestType
        entity = argFoo;
        mike = entity.harvestType;
        zulu = false;
        _closure1_slot5 = zulu;
        _closure1_slot6 = mike;
        entity = undefined;
        return entity;
    };
    mike['UPDATE_DATA_HARVEST_TYPE'] = options;
    options = function() { // Original name: handleRequestingHarvest
        entity = true;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_DATA_HARVEST_TYPE_START'] = options;
    options = function() { // Original name: handleRequestingHarvestFailure
        entity = false;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_DATA_HARVEST_TYPE_FAILURE'] = options;
    tango = function() { // Original name: handleLogout
        entity = false;
        _closure1_slot5 = entity;
        entity = null;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/DataHarvestStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();