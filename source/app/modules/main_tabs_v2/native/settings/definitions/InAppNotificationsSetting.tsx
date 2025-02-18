// app/modules/main_tabs_v2/native/settings/definitions/InAppNotificationsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot3 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.rqEZdn;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.NOTIFICATIONS;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useInAppNotificationsSettingValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            entity = report[michal];
            zuuluu = undefined;
            entity = tangon.bind(zuuluu)(entity);
            oscard = entity.FocusMode;
            entity = oscard.useSetting;
            entity = entity.bind(oscard)();
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            zuuluu = michal.ShowInAppNotifications;
            michal = zuuluu.useSetting;
            michal = michal.bind(zuuluu)();
            entity = !entity;
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 72:
            entity = michal;
 75:
            return entity;
        }
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: updateInAppNotificationSettings
        oscard = argFoo;
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 3;
        zuuluu = report[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.ShowInAppNotifications;
        zuuluu = tangon.updateSetting;
        zuuluu = zuuluu.bind(tangon)(oscard);
        tangon = _closure1_slot1;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot3;
        zuuluu = michal.LOCAL_SETTINGS_UPDATED;
        michal = {};
        michal['notifications_in_app_enabled'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: useInAppNotificationsDescription
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.useFocusModeEnabled;
            zuuluu = entity.bind(zuuluu)();
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 97; continue _fun00003 }
 40:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.cIRG0t;
            entity = zuuluu.bind(tangon)(michal);
 97:
            return entity;
        }
    };
    michal['useDescription'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useFocusModeEnabled;
    michal['useIsDisabled'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/InAppNotificationsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();