// app/modules/collectibles/utils/mappers.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    michal = function(argFoo) { // Original name: parseServerNameplate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00002_ip = 70; continue _fun00001 }
 12:
            michal = {};
            tangon = zuuluu.asset;
            michal['asset'] = tangon;
            tangon = zuuluu.sku_id;
            michal['skuId'] = tangon;
            tangon = zuuluu.expires_at;
            michal['expiresAt'] = tangon;
            tangon = zuuluu.label;
            michal['label'] = tangon;
            zuuluu = zuuluu.palette;
            michal['palette'] = zuuluu;
            entity = michal;
 70:
            return entity;
        }
    };
    var _closure1_slot0 = michal;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/utils/mappers.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: parseServerUserCollectibles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00004_ip = 42; continue _fun00003 }
 12:
            michal = {};
            report = _closure1_slot0;
            tangon = zuuluu.nameplate;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            michal['nameplate'] = zuuluu;
            entity = michal;
 42:
            return entity;
        }
    };
    zuuluu['parseServerUserCollectibles'] = tangon;
    zuuluu['parseServerNameplate'] = michal;
    return entity;
})();