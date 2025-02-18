// app/modules/settings/UserSettingsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = false;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: UserSettingsManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            michal = _closure1_slot2;
            report = _closure2_slot0;
            tangon = undefined;
            michal = michal.bind(tangon)(oscard, report);
            michal = _closure1_slot8;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            michal = {};
            zuuluu = function() { // Original name: POST_CONNECTION_OPEN
                michal = _closure3_slot0;
                entity = michal.setVerifyTimezone;
                entity = entity.bind(michal)();
                entity = michal.maybeShowChangeLanguageToast;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            michal['POST_CONNECTION_OPEN'] = zuuluu;
            zuuluu = entity.setVerifyTimezone;
            michal['OVERLAY_INITIALIZE'] = zuuluu;
            zuuluu = entity.ensureTimezoneUpdated;
            michal['USER_SETTINGS_PROTO_UPDATE'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'maybeShowChangeLanguageToast';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.maybeShowChangeLanguageToast;
            michal = michal.bind(entity)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'setVerifyTimezone';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = true;
            _closure1_slot7 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'ensureTimezoneUpdated';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot7;
                if(!michal) { _fun00006_ip = 120; continue _fun00005 }
 12:
                michal = false;
                _closure1_slot7 = michal;
                michal = global;
                tangon = michal.Date;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                option = report;
                tangon = new option[tangon](golfie);
                report = tangon instanceof Object ? tangon : report;
                tangon = report.getTimezoneOffset;
                report = tangon.bind(report)();
                var _closure3_slot0 = report;
                oscard = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 6;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = oscard.bind(zuuluu)(tangon);
                oscard = tangon.TimezoneOffset;
                tangon = oscard.getSetting;
                tangon = tangon.bind(oscard)();
                if(!(tangon !== report)) { _fun00006_ip = 120; continue _fun00005 }
 102:
                michal = michal.setImmediate;
                entity = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    zuuluu = entity.TimezoneOffset;
                    michal = zuuluu.updateSetting;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 120:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    report = Object.create(tangon, {constructor: {value: michal}});
    foxtra = report;
    tangon = new foxtra[michal](romeon);
    tangon = tangon instanceof Object ? tangon : report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/settings/UserSettingsManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['UserSettingsManager'] = michal;
    return entity;
})();