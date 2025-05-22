// app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        michal = argFoo;
        report = michal.categories;
        var _closure2_slot0 = report;
        oscard = michal.products;
        var _closure2_slot1 = oscard;
        golfie = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        verify = golfie.bind(tangon)(zuuluu);
        option = verify.useStateFromStores;
        zuuluu = _closure1_slot4;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.initialProductSkuId;
            return entity;
        };
        option = option.bind(verify)(golfie, zuuluu);
        var _closure2_slot2 = option;
        golfie = _closure1_slot3;
        zuuluu = golfie.getCategoryForProduct;
        golfie = zuuluu.bind(golfie)(option);
        var _closure2_slot3 = golfie;
        zuuluu = _closure1_slot2;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot2;
                oscard = null;
                if(!(oscard != entity)) { _fun00002_ip = 181; continue _fun00001 }
 18:
                entity = _closure2_slot3;
                if(!(oscard != entity)) { _fun00002_ip = 181; continue _fun00001 }
 29:
                entity = {};
                michal = _closure2_slot2;
                entity['initialProductSkuId'] = michal;
                michal = _closure2_slot3;
                michal = michal.skuId;
                entity['initialCategorySkuId'] = michal;
                michal = _closure2_slot1;
                golfie = oscard != michal;
                report = undefined;
                if(!golfie) { _fun00002_ip = 113; continue _fun00001 }
 70:
                golfie = global;
                offset = golfie.Math;
                verify = offset.max;
                yankee = _closure2_slot1;
                option = yankee.findIndex;
                golfie = function(argFoo) {
                    entity = argFoo;
                    michal = entity.skuId;
                    entity = _closure2_slot2;
                    entity = michal === entity;
                    return entity;
                };
                option = option.bind(yankee)(golfie);
                golfie = 0;
                report = verify.bind(offset)(golfie, option);
 113:
                entity['productIndex'] = report;
                report = _closure2_slot0;
                report = oscard != report;
                michal = undefined;
                if(!report) { _fun00002_ip = 174; continue _fun00001 }
 131:
                report = global;
                oscard = report.Math;
                report = oscard.max;
                golfie = _closure2_slot0;
                tangon = golfie.findIndex;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.skuId;
                    entity = _closure2_slot3;
                    entity = entity.skuId;
                    entity = michal === entity;
                    return entity;
                };
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = 0;
                michal = report.bind(oscard)(zuuluu, tangon);
 174:
                entity['categoryIndex'] = michal;
                _fun00002_ip = 183; continue _fun00001;
 181:
                entity = {};
 183:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useCollectiblesShopDeepLinkProps'] = michal;
    return entity;
})();