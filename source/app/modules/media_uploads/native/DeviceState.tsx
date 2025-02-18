// app/modules/media_uploads/native/DeviceState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = function() { // Original name: _getDeviceState
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot0;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 81; continue _fun00001 }
 7: // try_start_0
                    michal = _closure1_slot1;
                    zuuluu = michal.MediaManager;
                    michal = zuuluu.getDeviceStateInfo;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=36);
 34:
                    return michal;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 45; continue _fun00001 }
 42: // try_end0
                    return michal;
 45:
                    return michal;
 48: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot3;
                    tangon = report.warn;
                    zuuluu = 'Failed to get device state:';
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
                    michal = _closure1_slot2;
                    return michal;
 81:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    report = option[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot1 = tangon;
    report = {'NOMINAL': 'NOMINAL', 'FAIR': 'FAIR', 'SERIOUS': 'SERIOUS', 'CRITICAL': 'CRITICAL', 'UNKNOWN': 'UNKNOWN'};
    tangon = {'thermalState': null, 'batteryLevel': 1, 'isLowPowerMode': false};
    oscard = report.UNKNOWN;
    tangon['thermalState'] = oscard;
    var _closure1_slot2 = tangon;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.Logger;
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    foxtra = 'DeviceState.tsx';
    backup = verify;
    oscard = new backup[offset](foxtra, romeon);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot3 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/media_uploads/native/DeviceState.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ThermalState'] = report;
    zuuluu['DEFAULT_DEVICE_STATE'] = tangon;
    tangon = function() { // Original name: getDeviceState
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getDeviceState'] = tangon;
    michal = function(argFoo) { // Original name: logDeviceState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal === entity)) { _fun00004_ip = 38; continue _fun00003 }
 9:
            tangon = _closure1_slot3;
            zuuluu = tangon.info;
            michal = 'Device state not available';
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 204; continue _fun00003;
 38:
            report = _closure1_slot3;
            tangon = report.info;
            zuuluu = 'Device State Information:';
            zuuluu = tangon.bind(report)(zuuluu);
            oscard = _closure1_slot3;
            report = oscard.info;
            option = entity.thermalState;
            zuuluu = global;
            tangon = zuuluu.HermesInternal;
            golfie = tangon.concat;
            tangon = '- Thermal State: ';
            tangon = golfie.bind(tangon)(option);
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot3;
            tangon = report.info;
            golfie = entity.batteryLevel;
            oscard = 100;
            option = oscard * golfie;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            oscard = '- Battery Level: ';
            zuuluu = '%';
            zuuluu = golfie.bind(oscard)(option, zuuluu);
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot3;
            michal = zuuluu.info;
            entity = entity.isLowPowerMode;
            tangon = 'Disabled';
            if(!entity) { _fun00004_ip = 189; continue _fun00003 }
 185:
            tangon = 'Enabled';
 189:
            entity = '- Low Power Mode: ';
            entity = entity + tangon;
            entity = michal.bind(zuuluu)(entity);
 204:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['logDeviceState'] = michal;
    return entity;
})();