// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _requestPushNotificationPermission
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    tangon = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 218; continue _fun00001 }
 18:
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    var _closure4_slot1 = verify;
                    var _closure4_slot2 = tangon;
                    michal = _closure1_slot5;
                    report = michal.NativePermissionManager;
                    michal = report.getNotificationAuthorizationStatus;
                    michal = michal.bind(report)();
                    SaveGenerator(address=60);
 58:
                    return michal;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 215; continue _fun00001 }
 69:
                    report = _closure1_slot8;
                    report = report.DENIED;
                    if(!(michal !== report)) { _fun00002_ip = 125; continue _fun00001 }
 83:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot1;
                    report = 9;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = golfie.bind(report)(oscard);
                    report = oscard.requestPermission;
                    zuuluu = function(argFoo) {
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.track;
                        michal = _closure1_slot7;
                        tangon = michal.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                        zuuluu = {};
                        golfie = _closure4_slot0;
                        zuuluu['action_type'] = golfie;
                        golfie = _closure4_slot1;
                        zuuluu['action_location'] = golfie;
                        golfie = argFoo;
                        zuuluu['permission_granted'] = golfie;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        michal = _closure4_slot2;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(zuuluu);
                    _fun00002_ip = 210; continue _fun00001;
 125:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 7;
                    report = golfie[zuuluu];
                    zuuluu = undefined;
                    report = oscard.bind(zuuluu)(report);
                    report = report.bind(zuuluu)();
                    report = 8;
                    report = golfie[report];
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.track;
                    report = _closure1_slot7;
                    oscard = report.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                    report = {};
                    offset = _closure1_slot6;
                    offset = offset.TO_SETTINGS;
                    report['action_type'] = offset;
                    report['action_location'] = verify;
                    report = golfie.bind(option)(oscard, report);
                    zuuluu = tangon.bind(zuuluu)();
 210:
                    zuuluu = undefined;
                    return zuuluu;
 215:
                    return michal;
 218:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _enableProvisionalPushNotification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 96; continue _fun00003 }
 7:
                    michal = _closure1_slot5;
                    tangon = michal.NativePermissionManager;
                    michal = tangon.getNotificationAuthorizationStatus;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=34);
 32:
                    return michal;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 93; continue _fun00003 }
 40:
                    tangon = _closure1_slot8;
                    tangon = tangon.UNDETERMINED;
                    if(!(michal === tangon)) { _fun00004_ip = 88; continue _fun00003 }
 54:
                    zuuluu = _closure1_slot5;
                    report = zuuluu.DCDProvisionalNotificationUtils;
                    tangon = report.registerProvisionalNotification;
                    zuuluu = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot1;
                            entity = 8;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            report = tangon.bind(entity)(zuuluu);
                            tangon = report.track;
                            michal = _closure1_slot7;
                            zuuluu = michal.PERMISSIONS_ACKED;
                            michal = {};
                            oscard = 'provisional_notification';
                            michal['type'] = oscard;
                            oscard = 'denied';
                            golfie = argFoo;
                            if(!golfie) { _fun00006_ip = 68; continue _fun00005 }
 64:
                            oscard = 'accepted';
 68:
                            michal['action'] = oscard;
                            michal = tangon.bind(report)(zuuluu, michal);
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
 88:
                    zuuluu = undefined;
                    return zuuluu;
 93:
                    return michal;
 96:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventActionType;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NotificationAuthorizationStatus;
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: requestPushNotificationPermission
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['requestPushNotificationPermission'] = tangon;
    tangon = function() { // Original name: useShowReactivationPrompt
        report = _closure1_slot4;
        tangon = report.useState;
        zuuluu = false;
        oscard = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot2;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(oscard, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot0 = zuuluu;
        tangon = report.useEffect;
        zuuluu = function() {
            michal = function() { // Original name: _shouldShowReactivationPrompts
                tangon = undefined;
                entity = undefined;
                zuuluu = _closure1_slot3;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00008_ip = 78; continue _fun00007 }
 7:
                            michal = _closure1_slot5;
                            tangon = michal.NativePermissionManager;
                            michal = tangon.getNotificationAuthorizationStatus;
                            michal = michal.bind(tangon)();
                            SaveGenerator(address=34);
 32:
                            return michal;
 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00008_ip = 75; continue _fun00007 }
 40:
                            zuuluu = _closure1_slot8;
                            zuuluu = zuuluu.AUTHORIZED;
                            if(!(michal !== zuuluu)) { _fun00008_ip = 70; continue _fun00007 }
 54:
                            report = _closure2_slot0;
                            tangon = undefined;
                            zuuluu = true;
                            zuuluu = report.bind(tangon)(zuuluu);
 70:
                            zuuluu = undefined;
                            return zuuluu;
 75:
                            return michal;
 78:
                            return entity;
                        }
                    };
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                _closure3_slot0 = tangon;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            var _closure3_slot0 = michal;
            michal = function() { // Original name: shouldShowReactivationPrompts
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = undefined;
            michal = michal.bind(entity)();
            michal = !michal;
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['useShowReactivationPrompt'] = tangon;
    michal = function() { // Original name: enableProvisionalPushNotification
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['enableProvisionalPushNotification'] = michal;
    return entity;
})();