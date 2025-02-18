// app/modules/native_permissions/NativePermissionBaseUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.NativePermissionTypes;
    var _closure1_slot7 = golfie;
    golfie = tangon.NativePermissionStates;
    var _closure1_slot8 = golfie;
    tangon = tangon.NativePermissionStatus;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot10 = tangon;
    michal = function() {
        report = function() { // Original name: NativePermissionBaseUtils
            zuuluu = this;
            report = _closure1_slot4;
            tangon = _closure2_slot1;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = _closure1_slot6;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['storage'] = michal;
            return entity;
        };
        var _closure2_slot1 = report;
        tangon = _closure1_slot5;
        oscard = {};
        zuuluu = 'requestAuthorization';
        oscard['key'] = zuuluu;
        golfie = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    michal = argBar;
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 277; continue _fun00001 }
 19:
                    tangon = 'function';
                    zuuluu = typeof michal;
                    if(!(tangon === zuuluu)) { _fun00002_ip = 220; continue _fun00001 }
 33:
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = option[zuuluu];
                    verify = undefined;
                    offset = golfie.bind(verify)(zuuluu);
                    option = offset.track;
                    zuuluu = _closure1_slot10;
                    golfie = zuuluu.PERMISSIONS_REQUESTED;
                    zuuluu = {};
                    zuuluu['type'] = oscard;
                    zuuluu = option.bind(offset)(golfie, zuuluu);
                    michal = michal.bind(verify)();
                    SaveGenerator(address=93);
 91:
                    return michal;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 217; continue _fun00001 }
 99:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.AUTHORIZED;
                    zuuluu = michal === zuuluu;
                    if(zuuluu) { _fun00002_ip = 130; continue _fun00001 }
 116:
                    golfie = _closure1_slot9;
                    golfie = golfie.LIMITED;
                    zuuluu = michal === golfie;
 130:
                    golfie = _closure1_slot8;
                    if(zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 137:
                    option = golfie.DENIED;
                    _fun00002_ip = 151; continue _fun00001;
 145:
                    option = golfie.ACCEPTED;
 151:
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 7;
                    tangon = offset[tangon];
                    golfie = golfie.bind(verify)(tangon);
                    tangon = golfie.setPermission;
                    tangon = tangon.bind(golfie)(oscard, option);
                    tangon = !zuuluu;
                    if(zuuluu) { _fun00002_ip = 200; continue _fun00001 }
 191:
                    golfie = argBaz;
                    tangon = golfie.showAuthorizationError;
 200:
                    if(!tangon) { _fun00002_ip = 214; continue _fun00001 }
 203:
                    tangon = report.showAlert;
                    tangon = tangon.bind(report)(oscard);
 214:
                    return zuuluu;
 217:
                    return michal;
 220:
                    michal = global;
                    tangon = michal.Error;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    zuuluu = 'requestAuthorization: Was provided with not a function for ';
                    michal = '.';
                    foxtra = report.bind(zuuluu)(oscard, michal);
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    backup = zuuluu;
                    michal = new backup[tangon](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 277:
                    return entity;
                }
            };
            return entity;
        };
        michal = golfie.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        michal = function() { // Original name: requestAuthorization
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        golfie = 'requestPermission';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = this;
            zuuluu = _closure2_slot1;
            michal = zuuluu.defaultNativePermissionsRequestOptions;
            entity = argBar;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = tangon.requestPermissionCore;
            entity = argFoo;
            entity = michal.bind(tangon)(entity, zuuluu);
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'hasPermission';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = this;
            zuuluu = _closure2_slot1;
            michal = zuuluu.defaultNativePermissionsRequestOptions;
            entity = argBar;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = tangon.hasPermissionCore;
            entity = argFoo;
            entity = michal.bind(tangon)(entity, zuuluu);
            return entity;
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'showAlert';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                tangon = this;
                var _closure3_slot0 = tangon;
                var _closure3_slot1 = zuuluu;
                michal = {};
                option = _closure1_slot7;
                backup = option.CAMERA;
                sizing = _closure1_slot0;
                offset = _closure1_slot2;
                verify = 8;
                golfie = offset[verify];
                entity = undefined;
                golfie = sizing.bind(entity)(golfie);
                romeon = golfie.intl;
                yankee = romeon.string;
                golfie = offset[verify];
                golfie = sizing.bind(entity)(golfie);
                golfie = golfie.t;
                golfie = golfie.68G7fH;
                output = yankee.bind(romeon)(golfie);
                golfie = offset[verify];
                golfie = sizing.bind(entity)(golfie);
                romeon = golfie.intl;
                yankee = romeon.string;
                golfie = offset[verify];
                golfie = sizing.bind(entity)(golfie);
                golfie = golfie.t;
                golfie = golfie.5Jvu1d;
                kiloes = yankee.bind(romeon)(golfie);
                golfie = global;
                yankee = golfie.HermesInternal;
                yankee = yankee.concat;
                foxtra = '';
                romeon = '. ';
                yankee = yankee.bind(foxtra)(output, romeon, kiloes);
                michal[backup] = yankee;
                backup = option.AUDIO;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                output = yankee.intl;
                kiloes = output.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.xisTfX;
                output = kiloes.bind(output)(yankee);
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                result = yankee.intl;
                kiloes = result.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.5Jvu1d;
                kiloes = kiloes.bind(result)(yankee);
                yankee = golfie.HermesInternal;
                yankee = yankee.concat;
                yankee = yankee.bind(foxtra)(output, romeon, kiloes);
                michal[backup] = yankee;
                backup = option.PHOTOS;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                output = yankee.intl;
                kiloes = output.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.jQHU4O;
                output = kiloes.bind(output)(yankee);
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                result = yankee.intl;
                kiloes = result.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.5Jvu1d;
                kiloes = kiloes.bind(result)(yankee);
                yankee = golfie.HermesInternal;
                yankee = yankee.concat;
                yankee = yankee.bind(foxtra)(output, romeon, kiloes);
                michal[backup] = yankee;
                backup = option.INPUT_MONITORING;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                output = yankee.intl;
                kiloes = output.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.UIBqsb;
                output = kiloes.bind(output)(yankee);
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                result = yankee.intl;
                kiloes = result.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.5Jvu1d;
                kiloes = kiloes.bind(result)(yankee);
                yankee = golfie.HermesInternal;
                yankee = yankee.concat;
                yankee = yankee.bind(foxtra)(output, romeon, kiloes);
                michal[backup] = yankee;
                option = option.CONTACTS;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                kiloes = yankee.intl;
                backup = kiloes.string;
                yankee = offset[verify];
                yankee = sizing.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.kTtf7u;
                yankee = backup.bind(kiloes)(yankee);
                backup = offset[verify];
                backup = sizing.bind(entity)(backup);
                kiloes = backup.intl;
                backup = kiloes.string;
                offset = offset[verify];
                offset = sizing.bind(entity)(offset);
                offset = offset.t;
                offset = offset.5Jvu1d;
                offset = backup.bind(kiloes)(offset);
                golfie = golfie.HermesInternal;
                golfie = golfie.concat;
                golfie = golfie.bind(foxtra)(yankee, romeon, offset);
                michal[option] = golfie;
                golfie = michal[zuuluu];
                michal = null;
                if(!(michal != golfie)) { _fun00004_ip = 845; continue _fun00003 }
 658:
                zuuluu = tangon.openAlertModal;
                michal = {};
                option = _closure1_slot0;
                report = _closure1_slot2;
                offset = report[verify];
                offset = option.bind(entity)(offset);
                romeon = offset.intl;
                yankee = romeon.string;
                offset = report[verify];
                offset = option.bind(entity)(offset);
                offset = offset.t;
                offset = offset.u1Gxpq;
                offset = yankee.bind(romeon)(offset);
                michal['title'] = offset;
                michal['body'] = golfie;
                oscard = function() { // Original name: onConfirm
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.openSettings;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['onConfirm'] = oscard;
                oscard = report[verify];
                oscard = option.bind(entity)(oscard);
                offset = oscard.intl;
                golfie = offset.string;
                oscard = report[verify];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.t;
                oscard = oscard.ETE/oK;
                oscard = golfie.bind(offset)(oscard);
                michal['cancelText'] = oscard;
                oscard = report[verify];
                oscard = option.bind(entity)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                report = report[verify];
                report = option.bind(entity)(report);
                report = report.t;
                report = report.XgZk+v;
                report = oscard.bind(golfie)(report);
                michal['confirmText'] = report;
                michal = zuuluu.bind(tangon)(michal);
 845:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'defaultNativePermissionsRequestOptions';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                tangon = {};
                entity = true;
                tangon['showAuthorizationError'] = entity;
                michal = null;
                entity = tangon;
                if(!(michal != zuuluu)) { _fun00006_ip = 46; continue _fun00005 }
 21:
                michal = {};
                oscard = michal;
                report = tangon;
                tangon = copyDataProperties(oscard, report);
                oscard = michal;
                report = zuuluu;
                zuuluu = copyDataProperties(oscard, report);
                entity = michal;
 46:
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = tangon.bind(zuuluu)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/native_permissions/NativePermissionBaseUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['NativePermissionBaseUtils'] = michal;
    return entity;
})();