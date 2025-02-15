// app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: useIsPlanEligibleForGiftingPromotion
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            oscar = null;
            zulu = oscar == entity;
            tango = undefined;
            if(zulu) { _fun00002_ip = 49; continue _fun00001 }
 43:
            tango = entity.eligiblePlanIds;
 49:
            zulu = oscar == tango;
            entity = undefined;
            if(zulu) { _fun00002_ip = 82; continue _fun00001 }
 58:
            zulu = tango.includes;
            oscar = oscar == report;
            mike = undefined;
            if(oscar) { _fun00002_ip = 77; continue _fun00001 }
 72:
            mike = report.id;
 77:
            entity = zulu.bind(tango)(mike);
 82:
            return entity;
        }
    };
    var _closure1_slot5 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: useClaimableGiftingPromotionRewards
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = _closure1_slot4;
            entity = mike.useState;
            zulu = entity.bind(mike)();
            mike = _closure1_slot3;
            entity = undefined;
            golf = 2;
            oscar = mike.bind(entity)(zulu, golf);
            mike = 0;
            mike = oscar[mike];
            zulu = 1;
            zulu = oscar[zulu];
            var _closure2_slot0 = zulu;
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = oscar.bind(entity)(zulu);
            oscar = zulu.bind(entity)();
            zulu = null;
            golf = zulu == oscar;
            yankee = undefined;
            if(golf) { _fun00004_ip = 88; continue _fun00003 }
 82:
            yankee = oscar.rewards;
 88:
            var _closure2_slot1 = yankee;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 3;
            oscar = options[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.useFetchPurchases;
            oscar = oscar.bind(golf)();
            offset = oscar.purchases;
            var _closure2_slot2 = offset;
            verify = oscar.hasPreviouslyFetched;
            var _closure2_slot3 = verify;
            options = oscar.fetchPurchasesError;
            var _closure2_slot4 = options;
            golf = _closure1_slot4;
            oscar = golf.useRef;
            report = false;
            report = oscar.bind(golf)(report);
            var _closure2_slot5 = report;
            oscar = golf.useEffect;
            report = new Array(4);
            report[0] = yankee;
            report[1] = offset;
            report[2] = verify;
            report[3] = options;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun00006_ip = 90; continue _fun00005 }
 10:
                    mike = _closure2_slot5;
                    mike = mike.current;
                    if(mike) { _fun00006_ip = 90; continue _fun00005 }
 22:
                    mike = _closure2_slot1;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00006_ip = 90; continue _fun00005 }
 32:
                    mike = _closure2_slot4;
                    if(!(zulu != mike)) { _fun00006_ip = 46; continue _fun00005 }
 40:
                    tango = new Array(0);
                    _fun00006_ip = 67; continue _fun00005;
 46:
                    report = _closure2_slot1;
                    zulu = report.filter;
                    mike = function(argFoo) {
                        zulu = _closure2_slot2;
                        mike = zulu.get;
                        entity = argFoo;
                        entity = entity.skuId;
                        mike = mike.bind(zulu)(entity);
                        entity = null;
                        entity = entity == mike;
                        return entity;
                    };
                    tango = zulu.bind(report)(mike);
 67:
                    zulu = _closure2_slot0;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    mike = _closure2_slot5;
                    entity = true;
                    mike['current'] = entity;
 90:
                    entity = undefined;
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango, report);
            zulu = zulu != mike;
            entity = undefined;
            if(!zulu) { _fun00004_ip = 220; continue _fun00003 }
 217:
            entity = mike;
 220:
            return entity;
        }
    };
    zulu['useClaimableGiftingPromotionRewards'] = report;
    report = function(argFoo) { // Original name: useGiftingPromotionRewardCollectiblePurchase
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.useFetchPurchases;
            entity = entity.bind(mike)();
            zulu = entity.purchases;
            entity = null;
            mike = entity != tango;
            if(!mike) { _fun00008_ip = 63; continue _fun00007 }
 53:
            mike = zulu.get;
            entity = mike.bind(zulu)(tango);
 63:
            return entity;
        }
    };
    zulu['useGiftingPromotionRewardCollectiblePurchase'] = report;
    report = function(argFoo) { // Original name: getRewardAssetIdMap
        tango = argFoo;
        entity = global;
        entity = entity.Map;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        oscar = zulu;
        entity = new oscar[entity](report);
        entity = entity instanceof Object ? entity : zulu;
        var _closure2_slot0 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            entity = argFoo;
            tango = _closure2_slot0;
            zulu = tango.set;
            mike = entity.skuId;
            entity = entity.assetId;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getRewardAssetIdMap'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: useShouldShowSelectFreeSkuStep
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argBar;
            tango = argBaz;
            report = _closure1_slot5;
            zulu = undefined;
            mike = argFoo;
            zulu = report.bind(zulu)(mike);
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun00010_ip = 44; continue _fun00009 }
 32:
            report = tango.length;
            tango = 1;
            mike = report > tango;
 44:
            if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 47:
            entity = zulu;
 50:
            if(!entity) { _fun00010_ip = 56; continue _fun00009 }
 53:
            entity = mike;
 56:
            return entity;
        }
    };
    zulu['useShouldShowSelectFreeSkuStep'] = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: useShouldAutoSelectGiftingPromotionReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argBar;
            tango = argBaz;
            report = _closure1_slot5;
            zulu = undefined;
            entity = argFoo;
            zulu = report.bind(zulu)(entity);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00012_ip = 44; continue _fun00011 }
 32:
            report = tango.length;
            tango = 1;
            entity = tango === report;
 44:
            if(!entity) { _fun00012_ip = 50; continue _fun00011 }
 47:
            entity = zulu;
 50:
            if(!entity) { _fun00012_ip = 56; continue _fun00011 }
 53:
            entity = mike;
 56:
            return entity;
        }
    };
    zulu['useShouldAutoSelectGiftingPromotionReward'] = tango;
    zulu['useIsPlanEligibleForGiftingPromotion'] = mike;
    return entity;
})();