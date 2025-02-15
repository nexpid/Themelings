// app/modules/media_uploads/native/DeviceState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = function() { // Original name: _getDeviceState
        report = undefined;
        entity = undefined;
        tango = _closure1_slot0;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun56903: for(var _fun56903_ip = 0; ; ) switch(_fun56903_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun56903_ip = 81; continue _fun56903 }
 7: // try_start_0
                    mike = _closure1_slot1;
                    zulu = mike.MediaManager;
                    mike = zulu.getDeviceStateInfo;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=36);
 34:
                    return mike;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun56903_ip = 45; continue _fun56903 }
 42: // try_end0
                    return mike;
 45:
                    return mike;
 48: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot3;
                    tango = report.warn;
                    zulu = 'Failed to get device state:';
                    zulu = tango.bind(report)(zulu, oscar);
                    mike = _closure1_slot2;
                    return mike;
 81:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    report = options[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot1 = tango;
    report = {'NOMINAL': 'NOMINAL', 'FAIR': 'FAIR', 'SERIOUS': 'SERIOUS', 'CRITICAL': 'CRITICAL', 'UNKNOWN': 'UNKNOWN'};
    tango = {'thermalState': null, 'batteryLevel': 1, 'isLowPowerMode': false};
    oscar = report.UNKNOWN;
    tango['thermalState'] = oscar;
    var _closure1_slot2 = tango;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    offset = oscar.Logger;
    oscar = offset.prototype;
    verify = Object.create(oscar, {constructor: {value: offset}});
    foxtrot = 'DeviceState.tsx';
    backup = verify;
    oscar = new backup[offset](foxtrot, romeo);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot3 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/media_uploads/native/DeviceState.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ThermalState'] = report;
    zulu['DEFAULT_DEVICE_STATE'] = tango;
    tango = function() { // Original name: getDeviceState
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getDeviceState'] = tango;
    mike = function(argFoo) { // Original name: logDeviceState
        _fun56905: for(var _fun56905_ip = 0; ; ) switch(_fun56905_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike === entity)) { _fun56905_ip = 38; continue _fun56905 }
 9:
            tango = _closure1_slot3;
            zulu = tango.info;
            mike = 'Device state not available';
            mike = zulu.bind(tango)(mike);
            _fun56905_ip = 204; continue _fun56905;
 38:
            report = _closure1_slot3;
            tango = report.info;
            zulu = 'Device State Information:';
            zulu = tango.bind(report)(zulu);
            oscar = _closure1_slot3;
            report = oscar.info;
            options = entity.thermalState;
            zulu = global;
            tango = zulu.HermesInternal;
            golf = tango.concat;
            tango = '- Thermal State: ';
            tango = golf.bind(tango)(options);
            tango = report.bind(oscar)(tango);
            report = _closure1_slot3;
            tango = report.info;
            golf = entity.batteryLevel;
            oscar = 100;
            options = oscar * golf;
            zulu = zulu.HermesInternal;
            golf = zulu.concat;
            oscar = '- Battery Level: ';
            zulu = '%';
            zulu = golf.bind(oscar)(options, zulu);
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot3;
            mike = zulu.info;
            entity = entity.isLowPowerMode;
            tango = 'Disabled';
            if(!entity) { _fun56905_ip = 189; continue _fun56905 }
 185:
            tango = 'Enabled';
 189:
            entity = '- Low Power Mode: ';
            entity = entity + tango;
            entity = mike.bind(zulu)(entity);
 204:
            entity = undefined;
            return entity;
        }
    };
    zulu['logDeviceState'] = mike;
    return entity;
})();