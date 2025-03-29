// app/modules/device/native/DeviceState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _getDeviceState
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 147; continue _fun00001 }
 10:
                    michal = argFoo;
                    michal = michal.fallback;
                    oscard = undefined;
                    if(!(michal === oscard)) { _fun00002_ip = 27; continue _fun00001 }
 25:
                    michal = true;
 27:
                    report = michal;
                    SaveGenerator(address=34);
 32:
                    return oscard;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 144; continue _fun00001 }
 40: // try_start_0
                    tangon = _closure1_slot3;
                    golfie = tangon.MediaManager;
                    tangon = golfie.getDeviceStateInfo;
                    tangon = tangon.bind(golfie)();
                    SaveGenerator(address=69);
 67:
                    return tangon;
 69:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 78; continue _fun00001 }
 75: // try_end0
                    return tangon;
 78:
                    return tangon;
 81: // catch_target0
                    CatchBlockStart(arg_register=9);
                    zuuluu = offset;
                    verify = _closure1_slot4;
                    option = verify.warn;
                    golfie = 'Failed to get device state:';
                    golfie = option.bind(verify)(golfie, offset);
                    if(report) { _fun00002_ip = 115; continue _fun00001 }
 113:
                    _fun00002_ip = 141; continue _fun00001;
 115:
                    report = _closure1_slot0;
                    golfie = _closure1_slot1;
                    tangon = 3;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = tangon.DEFAULT_DEVICE_STATE;
 141:
                    return zuuluu;
 144:
                    return michal;
 147:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    yankee = 'native/DeviceState.tsx';
    romeon = report;
    tangon = new romeon[option](yankee, offset);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot4 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/device/native/DeviceState.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['logger'] = tangon;
    michal = function() { // Original name: getDeviceState
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getDeviceState'] = michal;
    return entity;
})();