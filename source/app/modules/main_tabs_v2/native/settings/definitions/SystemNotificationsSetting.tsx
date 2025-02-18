// app/modules/main_tabs_v2/native/settings/definitions/SystemNotificationsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _handleEnableSystemNotification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 224; continue _fun00001 }
 10:
                    michal = _closure1_slot4;
                    tangon = michal.NativePermissionManager;
                    michal = tangon.getNotificationAuthorizationStatus;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=37);
 35:
                    return michal;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 221; continue _fun00001 }
 46:
                    tangon = _closure1_slot6;
                    tangon = tangon.UNDETERMINED;
                    if(!(michal !== tangon)) { _fun00002_ip = 174; continue _fun00001 }
 60:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    oscard = undefined;
                    option = report.bind(oscard)(tangon);
                    golfie = option.track;
                    tangon = _closure1_slot5;
                    report = tangon.NOTIFICATION_SETTINGS_CLICKED;
                    tangon = {};
                    verify = 'os';
                    tangon['setting_type'] = verify;
                    verify = _closure1_slot6;
                    offset = verify.AUTHORIZED;
                    verify = 0;
                    if(!(michal === offset)) { _fun00002_ip = 129; continue _fun00001 }
 126:
                    verify = 1;
 129:
                    tangon['current_status'] = verify;
                    tangon = golfie.bind(option)(report, tangon);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = report.openNotificationSettings;
                    tangon = tangon.bind(report)();
                    _fun00002_ip = 216; continue _fun00001;
 174:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.requestPermission;
                    zuuluu = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            zuuluu = argFoo;
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            entity = 8;
                            tangon = tangon[entity];
                            entity = undefined;
                            golfie = report.bind(entity)(tangon);
                            oscard = golfie.track;
                            tangon = _closure1_slot5;
                            report = tangon.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                            tangon = {};
                            option = _closure1_slot7;
                            option = option.ALLOW_TO_REQUEST;
                            tangon['action_type'] = option;
                            option = _closure1_slot8;
                            option = option.NOTIFICATION_SETTING;
                            tangon['action_location'] = option;
                            tangon['permission_granted'] = zuuluu;
                            tangon = oscard.bind(golfie)(report, tangon);
                            if(zuuluu) { _fun00004_ip = 119; continue _fun00003 }
 89:
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 9;
                            michal = tangon[michal];
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.openNotificationSettings;
                            michal = michal.bind(zuuluu)();
 119:
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
 216:
                    zuuluu = undefined;
                    return zuuluu;
 221:
                    return michal;
 224:
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
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    tangon = true;
    michal['value'] = tangon;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.NativeModules;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot5 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.NotificationAuthorizationStatus;
    var _closure1_slot6 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    offset = michal.EventActionType;
    var _closure1_slot7 = offset;
    michal = michal.EventActionLocation;
    var _closure1_slot8 = michal;
    michal = {};
    verify = verify.PRESSABLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 10;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.nl2Dq6;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.NOTIFICATIONS;
    michal['parent'] = option;
    golfie = function() { // Original name: handleEnableSystemNotification
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['onPress'] = golfie;
    michal['withArrow'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SystemNotificationsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();