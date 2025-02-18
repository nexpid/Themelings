// app/modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function() { // Original name: useAndroidMessageNotificationsSettingValue
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
    michal = function() { // Original name: useHasAndroidMessageNotificationsSetting
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot2;
            tangon = undefined;
            zuuluu = michal.bind(tangon)();
            michal = _closure1_slot0;
            report = _closure1_slot1;
            entity = 3;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 45:
            michal = null;
            entity = michal != zuuluu;
 51:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    oscard = report.useAndroidMessageNotificationsEnabled;
    var _closure1_slot2 = oscard;
    oscard = report.setAndroidMessageNotificationsEnabled;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    verify = report.MobileSetting;
    report = {};
    yankee = 2;
    yankee = option[yankee];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.RendererType;
    yankee = yankee.TOGGLE;
    report['type'] = yankee;
    offset = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 4;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.zViLy8;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    report['title'] = offset;
    verify = verify.NOTIFICATIONS;
    report['parent'] = verify;
    report['useValue'] = tangon;
    report['onValueChange'] = oscard;
    report['usePredicate'] = michal;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['useAndroidMessageNotificationsSettingValue'] = tangon;
    zuuluu['useHasAndroidMessageNotificationsSetting'] = michal;
    return entity;
})();