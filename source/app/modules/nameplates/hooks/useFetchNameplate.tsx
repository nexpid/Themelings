// app/modules/nameplates/hooks/useFetchNameplate.tsx
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
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nameplates/hooks/useFetchNameplate.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFetchNameplate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot0;
            entity = _closure1_slot1;
            option = 0;
            entity = entity[option];
            golfie = undefined;
            zuuluu = michal.bind(golfie)(entity);
            michal = zuuluu.useFetchCollectiblesProduct;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            report = entity.product;
            michal = entity.isFetching;
            zuuluu = null;
            entity = zuuluu == report;
            verify = undefined;
            if(entity) { _fun00002_ip = 76; continue _fun00001 }
 61:
            entity = report.items;
            entity = entity[option];
            verify = entity.type;
 76:
            oscard = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 1;
            entity = offset[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.CollectiblesItemType;
            entity = entity.NAMEPLATE;
            oscard = undefined;
            if(!(verify === entity)) { _fun00002_ip = 124; continue _fun00001 }
 114:
            entity = report.items;
            oscard = entity[option];
 124:
            entity = {};
            entity['nameplateProduct'] = report;
            entity['nameplateRecord'] = oscard;
            report = zuuluu != oscard;
            zuuluu = undefined;
            if(!report) { _fun00002_ip = 176; continue _fun00001 }
 145:
            report = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 2;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.getNameplateDataFromRecord;
            zuuluu = tangon.bind(report)(oscard);
 176:
            entity['nameplateData'] = zuuluu;
            entity['isFetching'] = michal;
            return entity;
        }
    };
    zuuluu['useFetchNameplate'] = michal;
    return entity;
})();