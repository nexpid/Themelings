// app/modules/push_notifications/native/PushNotificationCacheManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: PushNotificationCacheManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot4;
                entity = _closure1_slot8;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                tangon = function() { // Original name: POST_CONNECTION_OPEN
                    michal = _closure3_slot0;
                    entity = michal.handleUserUpdate;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['POST_CONNECTION_OPEN'] = tangon;
                tangon = function() { // Original name: CURRENT_USER_UPDATE
                    michal = _closure3_slot0;
                    entity = michal.handleUserUpdate;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['CURRENT_USER_UPDATE'] = tangon;
                tangon = function() { // Original name: LOGOUT
                    michal = _closure3_slot0;
                    entity = michal.handleLogout;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['LOGOUT'] = tangon;
                entity['actions'] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure1_slot7;
                        entity = zuuluu.getCurrentUser;
                        entity = entity.bind(zuuluu)();
                        report = null;
                        if(!(report == entity)) { _fun00006_ip = 58; continue _fun00005 }
 22:
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot1;
                        zuuluu = 6;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        tangon = oscard.bind(zuuluu)(tangon);
                        zuuluu = tangon.setCurrentUser;
                        zuuluu = zuuluu.bind(tangon)(report, report);
                        _fun00006_ip = 102; continue _fun00005;
 58:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        michal = 6;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.setCurrentUser;
                        michal = entity.username;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
 102:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleUserUpdate'] = zuuluu;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.clearPushNotificationLogs;
                    michal = michal.bind(zuuluu)();
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleUserUpdate;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                entity['handleLogout'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/push_notifications/native/PushNotificationCacheManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();