// app/modules/device/ThermalUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        options = mike.NativeEventEmitter;
        mike = mike.NativeModules;
        var _closure1_slot3 = mike;
        golf = 1;
        golf = oscar[golf];
        offset = report.bind(entity)(golf);
        golf = offset.isAndroid;
        golf = golf.bind(offset)();
        if(golf) { _fun00002_ip = 119; continue _fun00001 }
 111:
        mike = mike.DCDDeviceThermalStateManager;
        _fun00002_ip = 131; continue _fun00001;
 119:
        golf = 2;
        golf = oscar[golf];
        mike = verify.bind(entity)(golf);
 131:
        golf = options.prototype;
        golf = Object.create(golf, {constructor: {value: options}});
        backup = golf;
        foxtrot = mike;
        mike = new backup[options](foxtrot, romeo);
        mike = mike instanceof Object ? mike : golf;
        var _closure1_slot4 = mike;
        mike = 4;
        mike = oscar[mike];
        options = report.bind(entity)(mike);
        golf = options.create;
        mike = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = argFoo;
                var _closure2_slot0 = mike;
                oscar = function(argFoo) { // Original name: updateThermalState
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 5;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        zulu = _closure2_slot0;
                        mike = undefined;
                        entity = function(argFoo) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                entity = argFoo;
                                tango = entity.rawThermalState;
                                mike = _closure3_slot0;
                                if(!(tango !== mike)) { _fun00006_ip = 34; continue _fun00005 }
 20:
                                mike = {};
                                zulu = _closure3_slot0;
                                mike['rawThermalState'] = zulu;
                                entity = mike;
 34:
                                return entity;
                            }
                        };
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                var _closure2_slot1 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 1;
                tango = tango[mike];
                mike = undefined;
                report = report.bind(mike)(tango);
                tango = report.isAndroid;
                tango = tango.bind(report)();
                if(tango) { _fun00004_ip = 77; continue _fun00003 }
 55:
                tango = _closure1_slot3;
                report = tango.DCDDeviceThermalStateManager;
                tango = report.getThermalState;
                report = tango.bind(report)();
                _fun00004_ip = 196; continue _fun00003;
 77:
                golf = global;
                options = golf.parseInt;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                tango = 3;
                tango = offset[tango];
                verify = verify.bind(mike)(tango);
                tango = verify.getSystemVersion;
                tango = tango.bind(verify)();
                options = options.bind(mike)(tango);
                tango = 29;
                if(!(!(options >= tango))) { _fun00004_ip = 146; continue _fun00003 }
 127:
                options = golf.Promise;
                tango = options.resolve;
                tango = tango.bind(options)(mike);
                _fun00004_ip = 193; continue _fun00003;
 146:
                verify = golf.Promise;
                options = verify.resolve;
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                golf = 2;
                golf = yankee[golf];
                offset = offset.bind(mike)(golf);
                golf = offset.getThermalState;
                golf = golf.bind(offset)();
                tango = options.bind(verify)(golf);
 193:
                report = tango;
 196:
                tango = report.then;
                tango = tango.bind(report)(oscar);
                report = _closure1_slot4;
                tango = report.addListener;
                zulu = 'DeviceThermalStateDidChange';
                entity = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.state;
                    mike = _closure2_slot1;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                entity = tango.bind(report)(zulu, entity);
                entity = {};
                entity['rawThermalState'] = mike;
                return entity;
            }
        };
        mike = golf.bind(options)(mike);
        var _closure1_slot5 = mike;
        mike = {};
        golf = function() { // Original name: getRawThermalState
            mike = _closure1_slot5;
            entity = mike.getState;
            entity = entity.bind(mike)();
            entity = entity.rawThermalState;
            return entity;
        };
        mike['getRawThermalState'] = golf;
        golf = function() { // Original name: useRawThermalState
            zulu = _closure1_slot5;
            mike = undefined;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawThermalState;
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        mike['useRawThermalState'] = golf;
        tango = function(argFoo) { // Original name: addListener
            entity = {};
            tango = _closure1_slot5;
            zulu = tango.subscribe;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            entity['remove'] = mike;
            return entity;
        };
        mike['addListener'] = tango;
        tango = 6;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/device/ThermalUtils.native.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();