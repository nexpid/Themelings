// app/modules/premium/native/PremiumBundledPlansUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    golf = function(argFoo) { // Original name: getPremiumBundleWithPredicate
        entity = global;
        zulu = entity.Object;
        mike = zulu.values;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 1;
        tango = tango[entity];
        entity = undefined;
        entity = report.bind(entity)(tango);
        entity = entity.AppStorePremiumProductIdsToPremiumBundledItems;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.find;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = golf;
    oscar = function(argFoo) { // Original name: getPremiumBundledItemsFromProductId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            report = 1;
            zulu = zulu[report];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.AppStorePremiumProductIdsToPremiumBundledItems;
            zulu = mike in zulu;
            if(zulu) { _fun00002_ip = 93; continue _fun00001 }
 41:
            zulu = global;
            golf = zulu.Error;
            zulu = zulu.HermesInternal;
            oscar = zulu.concat;
            zulu = 'Invalid bundled product ID ';
            options = oscar.bind(zulu)(mike);
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            verify = oscar;
            zulu = new verify[golf](options, golf);
            zulu = zulu instanceof Object ? zulu : oscar;
            throw zulu;
 93:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.AppStorePremiumProductIdsToPremiumBundledItems;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot5 = oscar;
    report = function(argFoo) { // Original name: getToggledIntervalProduct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = _closure1_slot5;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity);
            var _closure2_slot0 = entity;
            golf = entity.premiumTier;
            entity = _closure1_slot2;
            oscar = entity.TIER_1;
            tango = null;
            entity = null;
            if(!(golf !== oscar)) { _fun00004_ip = 79; continue _fun00003 }
 47:
            report = _closure1_slot4;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    tango = mike.numPremiumGuild;
                    entity = _closure2_slot0;
                    entity = entity.numPremiumGuild;
                    entity = tango === entity;
                    if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 29:
                    report = mike.premiumTier;
                    tango = _closure2_slot0;
                    tango = tango.premiumTier;
                    entity = report === tango;
 49:
                    if(!entity) { _fun00006_ip = 72; continue _fun00005 }
 52:
                    tango = mike.interval;
                    zulu = _closure2_slot0;
                    zulu = zulu.interval;
                    entity = tango !== zulu;
 72:
                    if(!entity) { _fun00006_ip = 84; continue _fun00005 }
 75:
                    mike = mike.isDeprecated;
                    entity = !mike;
 84:
                    return entity;
                }
            };
            zulu = report.bind(mike)(zulu);
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00004_ip = 76; continue _fun00003 }
 70:
            mike = zulu.productId;
 76:
            entity = mike;
 79:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tango = function(argFoo) { // Original name: isValidBundleProductId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00008_ip = 47; continue _fun00007 }
 12:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.AppStorePremiumProductIdsToPremiumBundledItems;
            entity = zulu in mike;
 47:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    yankee = options.PremiumTypes;
    var _closure1_slot2 = yankee;
    options = options.SubscriptionIntervalTypes;
    var _closure1_slot3 = options;
    options = 2;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/premium/native/PremiumBundledPlansUtils.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo) { // Original name: getPremiumBundlesWithPredicate
        entity = global;
        zulu = entity.Object;
        mike = zulu.values;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 1;
        tango = tango[entity];
        entity = undefined;
        entity = report.bind(entity)(tango);
        entity = entity.AppStorePremiumProductIdsToPremiumBundledItems;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.filter;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getPremiumBundlesWithPredicate'] = options;
    zulu['getPremiumBundleWithPredicate'] = golf;
    zulu['getPremiumBundledItemsFromProductId'] = oscar;
    zulu['getToggledIntervalProduct'] = report;
    report = function(argFoo) { // Original name: getProductIdsForBothIntervals
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot5;
            mike = undefined;
            oscar = entity.bind(mike)(tango);
            entity = _closure1_slot6;
            mike = entity.bind(mike)(tango);
            zulu = null;
            if(!(zulu != mike)) { _fun00010_ip = 95; continue _fun00009 }
 32:
            entity = {};
            verify = oscar.interval;
            golf = _closure1_slot3;
            options = golf.MONTH;
            golf = mike;
            if(!(verify === options)) { _fun00010_ip = 60; continue _fun00009 }
 57:
            golf = tango;
 60:
            entity['monthly'] = golf;
            oscar = oscar.interval;
            report = _closure1_slot3;
            report = report.YEAR;
            if(!(oscar === report)) { _fun00010_ip = 88; continue _fun00009 }
 85:
            mike = tango;
 88:
            entity['yearly'] = mike;
            _fun00010_ip = 110; continue _fun00009;
 95:
            mike = {};
            mike['monthly'] = tango;
            mike['yearly'] = zulu;
            entity = mike;
 110:
            return entity;
        }
    };
    zulu['getProductIdsForBothIntervals'] = report;
    report = function(argFoo, argBar) { // Original name: productsHaveSamePerks
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            report = _closure1_slot7;
            tango = undefined;
            report = report.bind(tango)(mike);
            if(!report) { _fun00012_ip = 35; continue _fun00011 }
 23:
            report = _closure1_slot7;
            report = report.bind(tango)(entity);
            if(report) { _fun00012_ip = 41; continue _fun00011 }
 35:
            report = mike === entity;
            return report;
 41:
            report = null;
            if(!(report != mike)) { _fun00012_ip = 110; continue _fun00011 }
 47:
            if(!(report != entity)) { _fun00012_ip = 110; continue _fun00011 }
 51:
            if(!(mike !== entity)) { _fun00012_ip = 106; continue _fun00011 }
 55:
            zulu = _closure1_slot5;
            report = zulu.bind(tango)(mike);
            tango = zulu.bind(tango)(entity);
            oscar = report.numPremiumGuild;
            zulu = tango.numPremiumGuild;
            zulu = oscar === zulu;
            if(!zulu) { _fun00012_ip = 104; continue _fun00011 }
 88:
            report = report.premiumTier;
            tango = tango.premiumTier;
            zulu = report === tango;
 104:
            return zulu;
 106:
            zulu = true;
            return zulu;
 110:
            entity = mike === entity;
            return entity;
        }
    };
    zulu['productsHaveSamePerks'] = report;
    zulu['isValidBundleProductId'] = tango;
    tango = function(argFoo) { // Original name: shouldAlwaysExcludeFromPlanSelect
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            entity = mike.isDeprecated;
            if(entity) { _fun00014_ip = 35; continue _fun00013 }
 12:
            zulu = mike.interval;
            mike = _closure1_slot3;
            mike = mike.YEAR;
            entity = zulu === mike;
 35:
            return entity;
        }
    };
    zulu['shouldAlwaysExcludeFromPlanSelect'] = tango;
    mike = function(argFoo) { // Original name: makeExternalPaymentGatewayPlanIdOrThrow
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun00016_ip = 104; continue _fun00015 }
 9:
            mike = _closure1_slot7;
            tango = undefined;
            mike = mike.bind(tango)(entity);
            if(mike) { _fun00016_ip = 102; continue _fun00015 }
 26:
            mike = '.1';
            mike = entity + mike;
            zulu = _closure1_slot7;
            zulu = zulu.bind(tango)(mike);
            if(zulu) { _fun00016_ip = 100; continue _fun00015 }
 48:
            zulu = global;
            report = zulu.Error;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'Invalid plan ID ';
            oscar = tango.bind(zulu)(entity);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            zulu = new golf[report](oscar, report);
            zulu = zulu instanceof Object ? zulu : tango;
            throw zulu;
 100:
            return mike;
 102:
            return entity;
 104:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            oscar = 'Invalid null plan ID';
            golf = mike;
            entity = new golf[zulu](oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['makeExternalPaymentGatewayPlanIdOrThrow'] = mike;
    return entity;
})();