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
            if(!(offset !== verify)) { _fun00002_ip = 317; continue _fun00001 }
 149:
            offset = _closure1_slot0;
            option = _closure1_slot2;
            option = option[yankee];
            option = offset.bind(oscard)(option);
            option = option.CollectiblesItemType;
            option = option.VARIANTS_GROUP;
            if(!(option !== verify)) { _fun00002_ip = 204; continue _fun00001 }
 182:
            option = {'isPurchased': null, 'isPartiallyOwnedBundle': false, 'isPartiallyOwnedVariantsGroup': false};
            option['isPurchased'] = michal;
            return option;
 204:
            yankee = golfie.variants;
            verify = report == yankee;
            option = undefined;
            if(verify) { _fun00002_ip = 237; continue _fun00001 }
 219:
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
 237:
            verify = golfie.variants;
            golfie = report == verify;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 270; continue _fun00001 }
 252:
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
 270:
            if(!oscard) { _fun00002_ip = 276; continue _fun00001 }
 273:
            oscard = !option;
 276:
            entity = {};
            golfie = report != option;
            if(!golfie) { _fun00002_ip = 288; continue _fun00001 }
 285:
            golfie = option;
 288:
            entity['isPurchased'] = golfie;
            golfie = false;
            entity['isPartiallyOwnedBundle'] = golfie;
            report = report != oscard;
            if(!report) { _fun00002_ip = 310; continue _fun00001 }
 307:
            report = oscard;
 310:
            entity['isPartiallyOwnedVariantsGroup'] = report;
            return entity;
 317:
            entity = {};
            if(michal) { _fun00002_ip = 353; continue _fun00001 }
 322:
            oscard = zuuluu.length;
            report = 0;
            report = oscard > report;
            if(!report) { _fun00002_ip = 350; continue _fun00001 }
 336:
            golfie = tangon.length;
            oscard = zuuluu.length;
            report = golfie === oscard;
 350:
            michal = report;
 353:
            entity['isPurchased'] = michal;
            report = tangon.length;
            michal = 0;
            michal = report > michal;
            if(!michal) { _fun00002_ip = 386; continue _fun00001 }
 372:
            tangon = tangon.length;
            zuuluu = zuuluu.length;
            michal = tangon < zuuluu;
 386:
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