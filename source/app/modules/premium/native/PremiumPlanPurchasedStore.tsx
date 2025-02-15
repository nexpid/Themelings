// app/modules/premium/native/PremiumPlanPurchasedStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot2 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/native/PremiumPlanPurchasedStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['usePremiumPlanPurchasedStore'] = tango;
    tango = function(argFoo) { // Original name: setInitiatedPurchaseFromNewFlow
        entity = argFoo;
        zulu = entity.productId;
        var _closure2_slot0 = zulu;
        zulu = entity.onPaymentSuccess;
        var _closure2_slot1 = zulu;
        entity = entity.onPaymentDismiss;
        var _closure2_slot2 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.setState;
            entity = {};
            report = _closure2_slot0;
            entity['productId'] = report;
            report = true;
            entity['initiatedPurchaseFromNewFlow'] = report;
            report = _closure2_slot1;
            entity['onPaymentSuccess'] = report;
            tango = _closure2_slot2;
            entity['onPaymentDismiss'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setInitiatedPurchaseFromNewFlow'] = tango;
    tango = function() { // Original name: setPaymentSuccess
        _fun65916: for(var _fun65916_ip = 0; ; ) switch(_fun65916_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.initiatedPurchaseFromNewFlow;
            if(!mike) { _fun65916_ip = 105; continue _fun65916 }
 26:
            zulu = _closure1_slot2;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            zulu = mike.productId;
            mike = mike.onPaymentSuccess;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 1;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.batchUpdates;
            tango = function() {
                zulu = _closure1_slot2;
                mike = zulu.setState;
                entity = {};
                tango = true;
                entity['isPaymentSuccess'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = report.bind(oscar)(tango);
            tango = null;
            if(!(tango != mike)) { _fun65916_ip = 105; continue _fun65916 }
 100:
            entity = mike.bind(entity)(zulu);
 105:
            entity = undefined;
            return entity;
        }
    };
    zulu['setPaymentSuccess'] = tango;
    tango = function(argFoo) { // Original name: showOldPaymentFlowSuccess
        _fun65918: for(var _fun65918_ip = 0; ; ) switch(_fun65918_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.initiatedPurchaseFromNewFlow;
            if(mike) { _fun65918_ip = 37; continue _fun65918 }
 26:
            zulu = argFoo;
            mike = undefined;
            mike = zulu.bind(mike)();
            _fun65918_ip = 79; continue _fun65918;
 37:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.batchUpdates;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.setState;
                entity = {};
                tango = true;
                entity['isPaymentSuccess'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 79:
            entity = undefined;
            return entity;
        }
    };
    zulu['showOldPaymentFlowSuccess'] = tango;
    mike = function() { // Original name: reset
        _fun65920: for(var _fun65920_ip = 0; ; ) switch(_fun65920_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.getState;
            zulu = mike.bind(zulu)();
            report = zulu.productId;
            mike = zulu.isPaymentSuccess;
            tango = zulu.onPaymentDismiss;
            zulu = null;
            if(!(zulu != tango)) { _fun65920_ip = 60; continue _fun65920 }
 41:
            zulu = {};
            zulu['productId'] = report;
            zulu['isSuccess'] = mike;
            mike = undefined;
            mike = tango.bind(mike)(zulu);
 60:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                tango = _closure1_slot2;
                zulu = tango.setState;
                mike = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
                entity = undefined;
                mike['onPaymentSuccess'] = entity;
                mike['onPaymentDismiss'] = entity;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['reset'] = mike;
    return entity;
})();