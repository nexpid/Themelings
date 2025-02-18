// app/modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: hasAndroidNotificationChannels
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 0;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 90; continue _fun00001 }
 36:
            zuuluu = global;
            tangon = zuuluu.parseInt;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 1;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getSystemVersion;
            zuuluu = michal.bind(zuuluu)();
            michal = 10;
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = 26;
            entity = zuuluu >= michal;
 90:
            return entity;
        }
    };
    zuuluu['hasAndroidNotificationChannels'] = michal;
    return entity;
})();