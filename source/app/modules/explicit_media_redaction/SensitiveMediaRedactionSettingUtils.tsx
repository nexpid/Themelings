// app/modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = 'modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getShouldObscureForSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 0;
            entity = entity[oscard];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.BLUR;
            entity = zuuluu === entity;
            if(entity) { _fun00002_ip = 79; continue _fun00001 }
 46:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.ExplicitContentRedaction;
            michal = michal.BLOCK;
            entity = zuuluu === michal;
 79:
            return entity;
        }
    };
    zuuluu['getShouldObscureForSetting'] = tangon;
    michal = function(argFoo, argBar) { // Original name: areSettingsEqual
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.isEqual;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['areSettingsEqual'] = michal;
    return entity;
})();