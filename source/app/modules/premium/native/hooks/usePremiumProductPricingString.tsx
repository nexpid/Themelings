// app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/hooks/usePremiumProductPricingString.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: usePremiumProductPricingString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 1;
            tangon = oscard[michal];
            michal = undefined;
            verify = report.bind(michal)(tangon);
            option = verify.getPlanIdForPremiumType;
            golfie = argFoo;
            tangon = argBar;
            option = option.bind(verify)(golfie, tangon);
            tangon = 2;
            tangon = oscard[tangon];
            golfie = report.bind(michal)(tangon);
            tangon = golfie.getProductIdForGift;
            tangon = tangon.bind(golfie)(option);
            var _closure2_slot0 = tangon;
            tangon = 3;
            tangon = oscard[tangon];
            report = report.bind(michal)(tangon);
            tangon = report.useStateFromStores;
            oscard = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getProduct;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = null;
            tangon = entity == zuuluu;
            if(tangon) { _fun00002_ip = 129; continue _fun00001 }
 123:
            michal = zuuluu.priceString;
 129:
            zuuluu = entity != michal;
            entity = '$...';
            if(!zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 142:
            entity = michal;
 145:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();