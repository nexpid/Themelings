// app/modules/main_tabs_v2/native/settings/definitions/CustomStatusNotificationSettings.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: onChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.CustomStatusPushNotifications;
            zuuluu = tangon.updateSetting;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            michal = report.bind(entity)(michal);
            report = michal.CustomStatusPushNotificationType;
            michal = argFoo;
            if(michal) { _fun00002_ip = 77; continue _fun00001 }
 69:
            michal = report.STATUS_PUSH_DISABLED;
            _fun00002_ip = 83; continue _fun00001;
 77:
            michal = report.STATUS_PUSH_ENABLED;
 83:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
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
    tangon = oscard.bind(entity)(tangon);
    option = tangon.MobileSetting;
    tangon = {};
    verify = 1;
    verify = golfie[verify];
    verify = oscard.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.TOGGLE;
    tangon['type'] = verify;
    verify = function() { // Original name: title
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
        entity = entity.PTtxi4;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['title'] = verify;
    option = option.NOTIFICATIONS;
    tangon['parent'] = option;
    report = function() { // Original name: useValue
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        entity = 2;
        entity = report[entity];
        zuuluu = undefined;
        entity = tangon.bind(zuuluu)(entity);
        michal = entity.CustomStatusPushNotifications;
        entity = michal.useSetting;
        michal = entity.bind(michal)();
        entity = 3;
        entity = report[entity];
        entity = tangon.bind(zuuluu)(entity);
        entity = entity.CustomStatusPushNotificationType;
        entity = entity.STATUS_PUSH_DISABLED;
        entity = michal !== entity;
        return entity;
    };
    tangon['useValue'] = report;
    tangon['onValueChange'] = michal;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useCustomStatusPushExperiment;
    tangon['usePredicate'] = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/CustomStatusNotificationSettings.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['onChange'] = michal;
    return entity;
})();