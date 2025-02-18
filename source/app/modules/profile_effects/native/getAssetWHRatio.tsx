// app/modules/profile_effects/native/getAssetWHRatio.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = function(argFoo, argBar) { // Original name: getPositiveValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 18; continue _fun00001 }
 12:
            zuuluu = 0;
            if(!(entity <= zuuluu)) { _fun00002_ip = 21; continue _fun00001 }
 18:
            entity = michal;
 21:
            return entity;
        }
    };
    var _closure1_slot0 = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/native/getAssetWHRatio.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 0.5113636363636364;
    zuuluu['DEFAULT_PROFILE_EFFECT_WH_RATIO'] = tangon;
    michal = function(argFoo) {
        entity = argFoo;
        report = _closure1_slot0;
        zuuluu = entity.width;
        tangon = undefined;
        michal = 450;
        michal = report.bind(tangon)(zuuluu, michal);
        zuuluu = entity.height;
        entity = 880;
        entity = report.bind(tangon)(zuuluu, entity);
        entity = michal / entity;
        return entity;
    };
    zuuluu['getAssetWHRatio'] = michal;
    return entity;
})();