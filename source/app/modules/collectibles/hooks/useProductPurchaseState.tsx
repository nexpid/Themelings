// app/modules/collectibles/hooks/useProductPurchaseState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getProductPurchaseState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            golfie = argBar;
            var _closure2_slot0 = tangon;
            zuuluu = tangon.getPurchase;
            michal = golfie.skuId;
            michal = zuuluu.bind(tangon)(michal);
            report = null;
            michal = report != michal;
            zuuluu = golfie.items;
            if(!(report == zuuluu)) { _fun00002_ip = 49; continue _fun00001 }
 45:
            zuuluu = new Array(0);
 49:
            verify = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 1;
            tangon = oscard[tangon];
            oscard = undefined;
            verify = verify.bind(oscard)(tangon);
            offset = zuuluu.map;
            tangon = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = offset.bind(zuuluu)(tangon);
            tangon = verify.bind(oscard)(tangon);
            offset = report == golfie;
            verify = undefined;
            if(offset) { _fun00002_ip = 110; continue _fun00001 }
 105:
            verify = golfie.type;
 110:
            romeon = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = 2;
            offset = offset[yankee];
            offset = romeon.bind(oscard)(offset);
            offset = offset.CollectiblesItemType;
            offset = offset.BUNDLE;
            if(!(offset !== verify)) { _fun00002_ip = 313; continue _fun00001 }
 149:
            offset = _closure1_slot0;
            option = _closure1_slot2;
            option = option[yankee];
            option = offset.bind(oscard)(option);
            option = option.CollectiblesItemType;
            option = option.VARIANTS_GROUP;
            if(!(option !== verify)) { _fun00002_ip = 200; continue _fun00001 }
 182:
            option = {'isPurchased': null, 'isPartiallyOwnedBundle': false, 'isPartiallyOwnedVariantsGroup': false};
            option['isPurchased'] = michal;
            return option;
 200:
            yankee = golfie.variants;
            verify = report == yankee;
            option = undefined;
            if(verify) { _fun00002_ip = 233; continue _fun00001 }
 215:
            offset = yankee.every;
            verify = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            option = offset.bind(yankee)(verify);
 233:
            verify = golfie.variants;
            golfie = report == verify;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 266; continue _fun00001 }
 248:
            golfie = verify.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            oscard = golfie.bind(verify)(entity);
 266:
            if(!oscard) { _fun00002_ip = 272; continue _fun00001 }
 269:
            oscard = !option;
 272:
            entity = {};
            golfie = report != option;
            if(!golfie) { _fun00002_ip = 284; continue _fun00001 }
 281:
            golfie = option;
 284:
            entity['isPurchased'] = golfie;
            golfie = false;
            entity['isPartiallyOwnedBundle'] = golfie;
            report = report != oscard;
            if(!report) { _fun00002_ip = 306; continue _fun00001 }
 303:
            report = oscard;
 306:
            entity['isPartiallyOwnedVariantsGroup'] = report;
            return entity;
 313:
            entity = {};
            if(michal) { _fun00002_ip = 349; continue _fun00001 }
 318:
            oscard = zuuluu.length;
            report = 0;
            report = oscard > report;
            if(!report) { _fun00002_ip = 346; continue _fun00001 }
 332:
            golfie = tangon.length;
            oscard = zuuluu.length;
            report = golfie === oscard;
 346:
            michal = report;
 349:
            entity['isPurchased'] = michal;
            report = tangon.length;
            michal = 0;
            michal = report > michal;
            if(!michal) { _fun00002_ip = 382; continue _fun00001 }
 368:
            tangon = tangon.length;
            zuuluu = zuuluu.length;
            michal = tangon < zuuluu;
 382:
            entity['isPartiallyOwnedBundle'] = michal;
            michal = false;
            entity['isPartiallyOwnedVariantsGroup'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/hooks/useProductPurchaseState.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getProductPurchaseState'] = tangon;
    michal = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useProductPurchaseState'] = michal;
    return entity;
})();