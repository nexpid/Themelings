// app/modules/premium/native/PremiumPlanPurchasedStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/native/PremiumPlanPurchasedStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['usePremiumPlanPurchasedStore'] = tangon;
    tangon = function(argFoo) { // Original name: setInitiatedPurchaseFromNewFlow
        entity = argFoo;
        zuuluu = entity.productId;
        var _closure2_slot0 = zuuluu;
        zuuluu = entity.onPaymentSuccess;
        var _closure2_slot1 = zuuluu;
        entity = entity.onPaymentDismiss;
        var _closure2_slot2 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            report = _closure2_slot0;
            entity['productId'] = report;
            report = true;
            entity['initiatedPurchaseFromNewFlow'] = report;
            report = _closure2_slot1;
            entity['onPaymentSuccess'] = report;
            tangon = _closure2_slot2;
            entity['onPaymentDismiss'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setInitiatedPurchaseFromNewFlow'] = tangon;
    tangon = function() { // Original name: setPaymentSuccess
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            michal = michal.initiatedPurchaseFromNewFlow;
            if(!michal) { _fun00002_ip = 103; continue _fun00001 }
 26:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            zuuluu = michal.productId;
            michal = michal.onPaymentSuccess;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.batchUpdates;
            tangon = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.setState;
                entity = {};
                tangon = true;
                entity['isPaymentSuccess'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            tangon = null;
            if(!(tangon != michal)) { _fun00002_ip = 103; continue _fun00001 }
 98:
            entity = michal.bind(entity)(zuuluu);
 103:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setPaymentSuccess'] = tangon;
    tangon = function(argFoo) { // Original name: showOldPaymentFlowSuccess
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            michal = michal.initiatedPurchaseFromNewFlow;
            if(michal) { _fun00004_ip = 37; continue _fun00003 }
 26:
            zuuluu = argFoo;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            _fun00004_ip = 77; continue _fun00003;
 37:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.setState;
                entity = {};
                tangon = true;
                entity['isPaymentSuccess'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 77:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['showOldPaymentFlowSuccess'] = tangon;
    michal = function() { // Original name: reset
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getState;
            zuuluu = michal.bind(zuuluu)();
            report = zuuluu.productId;
            michal = zuuluu.isPaymentSuccess;
            tangon = zuuluu.onPaymentDismiss;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00006_ip = 60; continue _fun00005 }
 41:
            zuuluu = {};
            zuuluu['productId'] = report;
            zuuluu['isSuccess'] = michal;
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
 60:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.setState;
                michal = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
                entity = undefined;
                michal['onPaymentSuccess'] = entity;
                michal['onPaymentDismiss'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['reset'] = michal;
    return entity;
})();