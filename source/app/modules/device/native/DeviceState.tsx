// app/modules/device/native/DeviceState.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _getDeviceState
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 154; continue _fun00001 }
 13:
                    oscard = undefined;
                    if(!(michal === oscard)) { _fun00002_ip = 31; continue _fun00001 }
 19:
                    golfie = {};
                    option = true;
                    golfie['fallback'] = option;
                    michal = golfie;
 31:
                    report = michal.fallback;
                    SaveGenerator(address=41);
 39:
                    return oscard;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 151; continue _fun00001 }
 47: // try_start_0
                    tangon = _closure1_slot3;
                    golfie = tangon.MediaManager;
                    tangon = golfie.getDeviceStateInfo;
                    tangon = tangon.bind(golfie)();
                    SaveGenerator(address=76);
 74:
                    return tangon;
 76:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 85; continue _fun00001 }
 82: // try_end0
                    return tangon;
 85:
                    return tangon;
 88: // catch_target0
                    CatchBlockStart(arg_register=9);
                    zuuluu = offset;
                    verify = _closure1_slot4;
                    option = verify.warn;
                    golfie = 'Failed to get device state:';
                    golfie = option.bind(verify)(golfie, offset);
                    if(report) { _fun00002_ip = 122; continue _fun00001 }
 120:
                    _fun00002_ip = 148; continue _fun00001;
 122:
                    report = _closure1_slot0;
                    golfie = _closure1_slot1;
                    tangon = 3;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = tangon.DEFAULT_DEVICE_STATE;
 148:
                    return zuuluu;
 151:
                    return michal;
 154:
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
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    option = report.bind(entity)(tangon);
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    romeon = 'native/DeviceState.tsx';
    foxtra = report;
    tangon = new foxtra[option](romeon, yankee);
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