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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        michal = argFoo;
        zuuluu = michal.categories;
        var _closure2_slot0 = zuuluu;
        michal = michal.products;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        oscard = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot2;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot3;
                michal = michal.initialProductSkuId;
                var _closure3_slot0 = michal;
                tangon = _closure1_slot2;
                entity = tangon.getCategoryForProduct;
                entity = entity.bind(tangon)(michal);
                var _closure3_slot1 = entity;
                oscard = null;
                if(!(oscard != michal)) { _fun00002_ip = 183; continue _fun00001 }
 47:
                if(!(oscard != entity)) { _fun00002_ip = 183; continue _fun00001 }
 54:
                entity = {};
                michal = _closure2_slot1;
                golfie = oscard != michal;
                report = undefined;
                if(!golfie) { _fun00002_ip = 115; continue _fun00001 }
 72:
                golfie = global;
                offset = golfie.Math;
                verify = offset.max;
                yankee = _closure2_slot1;
                option = yankee.findIndex;
                golfie = function(argFoo) {
                    entity = argFoo;
                    michal = entity.skuId;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                option = option.bind(yankee)(golfie);
                golfie = 0;
                report = verify.bind(offset)(golfie, option);
 115:
                entity['productIndex'] = report;
                report = _closure2_slot0;
                report = oscard != report;
                michal = undefined;
                if(!report) { _fun00002_ip = 176; continue _fun00001 }
 133:
                report = global;
                oscard = report.Math;
                report = oscard.max;
                golfie = _closure2_slot0;
                tangon = golfie.findIndex;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.skuId;
                    entity = _closure3_slot1;
                    entity = entity.skuId;
                    entity = michal === entity;
                    return entity;
                };
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = 0;
                michal = report.bind(oscard)(zuuluu, tangon);
 176:
                entity['categoryIndex'] = michal;
                _fun00002_ip = 185; continue _fun00001;
 183:
                entity = {};
 185:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCollectiblesShopDeepLinkProps'] = michal;
    return entity;
})();