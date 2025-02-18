// app/modules/profile_effects/native/ProfileEffectUtils.tsx
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
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/native/ProfileEffectUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            michal = entity.start;
            if(!(!(tangon >= michal))) { _fun00002_ip = 19; continue _fun00001 }
 15:
            michal = false;
            return michal;
 19:
            michal = entity.loop;
            if(michal) { _fun00002_ip = 50; continue _fun00001 }
 28:
            zuuluu = entity.duration;
            michal = entity.start;
            michal = zuuluu + michal;
            if(!(tangon > michal)) { _fun00002_ip = 50; continue _fun00001 }
 46:
            michal = false;
            return michal;
 50:
            michal = entity.loop;
            if(!michal) { _fun00002_ip = 131; continue _fun00001 }
 59:
            michal = entity.loopDelay;
            zuuluu = undefined;
            if(!(zuuluu !== michal)) { _fun00002_ip = 131; continue _fun00001 }
 71:
            report = entity.loopDelay;
            michal = 0;
            if(!(report > michal)) { _fun00002_ip = 131; continue _fun00001 }
 83:
            michal = entity.duration;
            report = null;
            report = report == entity;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 105; continue _fun00001 }
 99:
            zuuluu = entity.loopDelay;
 105:
            zuuluu = michal + zuuluu;
            michal = entity.start;
            michal = tangon - michal;
            michal = michal % zuuluu;
            entity = entity.duration;
            if(!(!(michal > entity))) { _fun00002_ip = 135; continue _fun00001 }
 131:
            entity = true;
            return entity;
 135:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldAnimate'] = tangon;
    michal = function(argFoo, argBar) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getAssetWHRatio;
        entity = argFoo;
        michal = michal.bind(zuuluu)(entity);
        entity = argBar;
        entity = entity / michal;
        return entity;
    };
    zuuluu['calculateProfileEffectHeight'] = michal;
    return entity;
})();