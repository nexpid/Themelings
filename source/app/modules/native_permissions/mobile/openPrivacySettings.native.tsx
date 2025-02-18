// app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/native_permissions/mobile/openPrivacySettings.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: openPrivacySettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 61; continue _fun00001 }
 37:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.DeviceSettingsManager;
            zuuluu = tangon.openPrivacySettings;
            zuuluu = zuuluu.bind(tangon)();
            _fun00002_ip = 91; continue _fun00001;
 61:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.openPrivacySettings;
            michal = michal.bind(zuuluu)();
 91:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();