// app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GPlayBillingResult;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            golf = mike.product;
            var _closure2_slot0 = golf;
            offset = mike.analyticsLocations;
            var _closure2_slot1 = offset;
            yankee = mike.analyticsLoadId;
            var _closure2_slot2 = yankee;
            oscar = mike.onPurchaseComplete;
            var _closure2_slot3 = oscar;
            report = mike.onPurchaseError;
            var _closure2_slot4 = report;
            verify = mike.freePurchaseCallback;
            var _closure2_slot5 = verify;
            zulu = mike.onPurchasePending;
            var _closure2_slot6 = zulu;
            kilo = undefined;
            var _closure2_slot8 = kilo;
            var _closure2_slot9 = kilo;
            var _closure2_slot10 = kilo;
            var _closure2_slot11 = kilo;
            var _closure2_slot12 = kilo;
            var _closure2_slot13 = kilo;
            options = _closure1_slot4;
            tango = options.getCurrentUser;
            sizing = tango.bind(options)();
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = 5;
            tango = romeo[tango];
            options = options.bind(kilo)(tango);
            tango = options.useHandlePremiumPurchase;
            romeo = tango.bind(options)();
            var _closure2_slot7 = romeo;
            options = kilo !== sizing;
            if(!options) { _fun00002_ip = 170; continue _fun00001 }
 160:
            tango = sizing.isStaff;
            options = tango.bind(sizing)();
 170:
            _closure2_slot8 = options;
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            tango = 6;
            tango = backup[tango];
            foxtrot = foxtrot.bind(kilo)(tango);
            tango = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getNewAnalyticsLoadId;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = foxtrot.bind(kilo)(tango);
            foxtrot = null;
            if(!(foxtrot == yankee)) { _fun00002_ip = 219; continue _fun00001 }
 212:
            _closure2_slot2 = tango;
            yankee = tango;
 219:
            foxtrot = golf.skuId;
            _closure2_slot9 = foxtrot;
            backup = _closure1_slot0;
            output = _closure1_slot2;
            tango = 8;
            tango = output[tango];
            kilo = backup.bind(kilo)(tango);
            backup = kilo.isPremium;
            tango = _closure1_slot7;
            tango = tango.TIER_2;
            backup = backup.bind(kilo)(sizing, tango);
            kilo = golf.googleSkuIds;
            tango = _closure1_slot5;
            if(backup) { _fun00002_ip = 296; continue _fun00001 }
 284:
            backup = tango.MOBILE;
            backup = kilo[backup];
            _fun00002_ip = 306; continue _fun00001;
 296:
            tango = tango.MOBILE_PREMIUM_TIER_2;
            backup = kilo[tango];
 306:
            _closure2_slot10 = backup;
            tango = _closure1_slot3;
            sizing = tango.useCallback;
            kilo = new Array(1);
            kilo[0] = oscar;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.unsubscribe;
                tango = _closure2_slot11;
                zulu = 'GPLAY_PURCHASE_VERIFIED';
                zulu = report.bind(oscar)(zulu, tango);
                mike = _closure2_slot3;
                mike = mike.bind(entity)();
                return entity;
            };
            sizing = sizing.bind(tango)(mike, kilo);
            _closure2_slot11 = sizing;
            output = tango.useCallback;
            kilo = new Array(2);
            kilo[0] = report;
            kilo[1] = sizing;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.unsubscribe;
                tango = _closure2_slot11;
                zulu = 'GPLAY_PURCHASE_VERIFIED';
                zulu = report.bind(oscar)(zulu, tango);
                mike = _closure2_slot4;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = output.bind(tango)(mike, kilo);
            _closure2_slot12 = mike;
            output = tango.useCallback;
            kilo = new Array(3);
            kilo[0] = sizing;
            kilo[1] = report;
            kilo[2] = zulu;
            zulu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.billingResult;
                    mike = _closure1_slot6;
                    mike = mike.OK;
                    if(!(zulu !== mike)) { _fun00004_ip = 81; continue _fun00003 }
 26:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 9;
                    entity = mike[entity];
                    mike = undefined;
                    oscar = zulu.bind(mike)(entity);
                    report = oscar.unsubscribe;
                    tango = _closure2_slot11;
                    zulu = 'GPLAY_PURCHASE_VERIFIED';
                    zulu = report.bind(oscar)(zulu, tango);
                    entity = _closure2_slot4;
                    entity = entity.bind(mike)();
 81:
                    mike = _closure2_slot6;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            output = output.bind(tango)(zulu, kilo);
            _closure2_slot13 = output;
            kilo = tango.useEffect;
            zulu = new Array(3);
            zulu[0] = output;
            zulu[1] = sizing;
            zulu[2] = mike;
            mike = function() {
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 9;
                entity = report[mike];
                zulu = undefined;
                verify = tango.bind(zulu)(entity);
                options = verify.subscribe;
                golf = _closure2_slot13;
                oscar = 'GPLAY_UPDATE_PURCHASE_STATE';
                oscar = options.bind(verify)(oscar, golf);
                oscar = report[mike];
                verify = tango.bind(zulu)(oscar);
                options = verify.subscribe;
                golf = _closure2_slot11;
                oscar = 'GPLAY_PURCHASE_VERIFIED';
                oscar = options.bind(verify)(oscar, golf);
                mike = report[mike];
                tango = tango.bind(zulu)(mike);
                zulu = tango.subscribe;
                mike = _closure2_slot12;
                entity = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                entity = zulu.bind(tango)(entity, mike);
                entity = function() {
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 9;
                    mike = report[zulu];
                    entity = undefined;
                    verify = tango.bind(entity)(mike);
                    options = verify.unsubscribe;
                    golf = _closure2_slot13;
                    oscar = 'GPLAY_UPDATE_PURCHASE_STATE';
                    oscar = options.bind(verify)(oscar, golf);
                    oscar = report[zulu];
                    verify = tango.bind(entity)(oscar);
                    options = verify.unsubscribe;
                    golf = _closure2_slot11;
                    oscar = 'GPLAY_PURCHASE_VERIFIED';
                    oscar = options.bind(verify)(oscar, golf);
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.unsubscribe;
                    zulu = _closure2_slot12;
                    mike = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                };
                return entity;
            };
            mike = kilo.bind(tango)(mike, zulu);
            zulu = tango.useCallback;
            mike = new Array(10);
            mike[0] = backup;
            mike[1] = foxtrot;
            mike[2] = romeo;
            mike[3] = yankee;
            mike[4] = offset;
            mike[5] = verify;
            mike[6] = options;
            golf = golf.skuId;
            mike[7] = golf;
            mike[8] = oscar;
            mike[9] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot8;
                    if(entity) { _fun00006_ip = 70; continue _fun00005 }
 12:
                    report = _closure2_slot7;
                    tango = {};
                    entity = _closure2_slot10;
                    tango['productId'] = entity;
                    entity = _closure2_slot9;
                    tango['skuId'] = entity;
                    entity = true;
                    tango['isOneTimePurchase'] = entity;
                    entity = _closure2_slot2;
                    tango['analyticsLoadId'] = entity;
                    entity = _closure2_slot1;
                    tango['analyticsLocations'] = entity;
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    _fun00006_ip = 186; continue _fun00005;
 70:
                    report = _closure2_slot5;
                    tango = null;
                    if(!(tango == report)) { _fun00006_ip = 113; continue _fun00005 }
 80:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 10;
                    report = report[tango];
                    tango = undefined;
                    tango = oscar.bind(tango)(report);
                    golf = tango.purchaseSKU;
                    _fun00006_ip = 117; continue _fun00005;
 113:
                    golf = _closure2_slot5;
 117:
                    zulu = _closure2_slot0;
                    oscar = zulu.skuId;
                    report = {};
                    zulu = 0;
                    report['expectedAmount'] = zulu;
                    tango = undefined;
                    zulu = 'collectibles';
                    report = golf.bind(tango)(zulu, oscar, report);
                    tango = report.then;
                    zulu = function() {
                        mike = _closure2_slot3;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function() {
                        mike = _closure2_slot4;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 186:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();