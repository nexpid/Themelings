// app/modules/collectibles/utils/mappers.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: parseServerNameplate
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
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/utils/mappers.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: parseServerUserCollectibles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00004_ip = 42; continue _fun00003 }
 12:
            michal = {};
            report = _closure1_slot2;
            tangon = zuuluu.nameplate;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            michal['nameplate'] = zuuluu;
            entity = michal;
 42:
            return entity;
        }
    };
    zuuluu['parseServerUserCollectibles'] = report;
    zuuluu['parseServerNameplate'] = tangon;
    michal = function(argFoo) { // Original name: getNameplateDataFromRecord
        michal = argFoo;
        entity = {};
        zuuluu = michal.asset;
        entity['src'] = zuuluu;
        zuuluu = michal.label;
        entity['imgAlt'] = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 0;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.getNameplatePalette;
        michal = michal.palette;
        michal = zuuluu.bind(tangon)(michal);
        entity['palette'] = michal;
        return entity;
    };
    zuuluu['getNameplateDataFromRecord'] = michal;
    return entity;
})();