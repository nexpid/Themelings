// app/modules/main_tabs_v2/native/settings/definitions/AndroidNotificationVibrationsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    golfie = michal.useAndroidNotificationVibrationsEnabled;
    var _closure1_slot2 = golfie;
    golfie = michal.setAndroidNotificationVibrationsEnabled;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = {};
    verify = 2;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.TOGGLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.lFg/Oz;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.NOTIFICATIONS;
    michal['parent'] = option;
    option = function() { // Original name: useAndroidNotificationVibrationsSettingValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            entity = undefined;
            michal = michal.bind(entity)();
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 25; continue _fun00001 }
 22:
            entity = michal;
 25:
            return entity;
        }
    };
    michal['useValue'] = option;
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: useHasAndroidNotificationVibrationsSetting
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot2;
            report = undefined;
            zuuluu = entity.bind(report)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.isIOS;
            entity = entity.bind(tangon)();
            entity = !entity;
            if(!entity) { _fun00004_ip = 82; continue _fun00003 }
 49:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 4;
            michal = oscard[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.hasAndroidNotificationChannels;
            michal = michal.bind(tangon)();
            entity = !michal;
 82:
            if(!entity) { _fun00004_ip = 91; continue _fun00003 }
 85:
            michal = null;
            entity = michal != zuuluu;
 91:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AndroidNotificationVibrationsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();