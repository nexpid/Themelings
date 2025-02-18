// app/modules/auth/native/LoginRequiredActionManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot14;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.LoginRequiredActions;
    var _closure1_slot10 = option;
    option = tangon.Routes;
    var _closure1_slot11 = option;
    tangon = tangon.UserSettingsSections;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: LoginRequiredActionManager
            report = this;
            offset = 0;
            oscard = copyRestArgs(offset);
            michal = _closure1_slot3;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot13;
            entity = new Array(0);
            offset = entity;
            verify = oscard;
            option = 0;
            oscard = arraySpread(offset, verify, option);
            entity = michal.bind(zuuluu)(report, tangon, entity);
            michal = {};
            zuuluu = entity.handleConnectionOpen;
            michal['POST_CONNECTION_OPEN'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = 'handleConnectionOpen';
        report['key'] = oscard;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                var _closure3_slot0 = entity;
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 204; continue _fun00005 }
 31:
                golfie = _closure1_slot9;
                zuuluu = golfie.wasLoginAttemptedInSession;
                michal = entity.id;
                michal = zuuluu.bind(golfie)(michal);
                oscard = golfie.requiredActionsIncludes;
                zuuluu = entity.id;
                entity = _closure1_slot10;
                option = entity.UPDATE_PASSWORD;
                entity = new Array(1);
                entity[0] = option;
                entity = oscard.bind(golfie)(zuuluu, entity);
                if(!michal) { _fun00006_ip = 94; continue _fun00005 }
 91:
                if(entity) { _fun00006_ip = 142; continue _fun00005 }
 94:
                if(!entity) { _fun00006_ip = 204; continue _fun00005 }
 97:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.logout;
                entity = _closure1_slot11;
                entity = entity.LOGIN;
                entity = michal.bind(zuuluu)(entity);
                _fun00006_ip = 204; continue _fun00005;
 142:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openUserSettings;
                entity = {};
                report = _closure1_slot12;
                report = report.ACCOUNT_CHANGE_PASSWORD;
                entity['screen'] = report;
                tangon = function() { // Original name: onClose
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = _closure1_slot9;
                        tangon = report.requiredActionsIncludes;
                        michal = _closure3_slot0;
                        zuuluu = michal.id;
                        michal = _closure1_slot10;
                        oscard = michal.UPDATE_PASSWORD;
                        michal = new Array(1);
                        michal[0] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        if(!michal) { _fun00008_ip = 95; continue _fun00007 }
 52:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 9;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = tangon.bind(michal)(zuuluu);
                        michal = zuuluu.logout;
                        entity = _closure1_slot11;
                        entity = entity.LOGIN;
                        entity = michal.bind(zuuluu)(entity);
 95:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onClose'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 204:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/LoginRequiredActionManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();