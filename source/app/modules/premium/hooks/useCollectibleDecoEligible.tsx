// app/modules/premium/hooks/useCollectibleDecoEligible.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot8 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/hooks/useCollectibleDecoEligible.tsx';
    tango = report.bind(oscar)(tango);
    tango = 10;
    zulu['REACTIVATION_COOLDOWN_DAYS'] = tango;
    mike = function(argFoo) { // Original name: useCollectibleDecoEligible
        entity = argFoo;
        options = entity.location;
        report = _closure1_slot4;
        zulu = report.useState;
        entity = null;
        oscar = zulu.bind(report)(entity);
        zulu = _closure1_slot3;
        yankee = undefined;
        entity = 2;
        oscar = zulu.bind(yankee)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        zulu = 1;
        zulu = oscar[zulu];
        var _closure2_slot0 = zulu;
        offset = _closure1_slot0;
        romeo = _closure1_slot2;
        zulu = 7;
        zulu = romeo[zulu];
        zulu = offset.bind(yankee)(zulu);
        golf = zulu.CollectibleDecoMarketingMomentExperiment;
        oscar = golf.useExperiment;
        zulu = {};
        zulu['location'] = options;
        zulu = oscar.bind(golf)(zulu);
        var _closure2_slot1 = zulu;
        oscar = 8;
        golf = romeo[oscar];
        backup = offset.bind(yankee)(golf);
        foxtrot = backup.useStateFromStores;
        verify = _closure1_slot6;
        options = new Array(1);
        options[0] = verify;
        golf = function() {
            mike = _closure1_slot6;
            entity = mike.getMostRecentPremiumTypeSubscription;
            entity = entity.bind(mike)();
            return entity;
        };
        options = foxtrot.bind(backup)(options, golf);
        var _closure2_slot2 = options;
        golf = romeo[oscar];
        kilo = offset.bind(yankee)(golf);
        backup = kilo.useStateFromStores;
        golf = _closure1_slot7;
        foxtrot = new Array(1);
        foxtrot[0] = golf;
        golf = function() {
            mike = _closure1_slot7;
            entity = mike.shouldFetchOffer;
            entity = entity.bind(mike)();
            entity = !entity;
            return entity;
        };
        golf = backup.bind(kilo)(foxtrot, golf);
        var _closure2_slot3 = golf;
        foxtrot = romeo[oscar];
        kilo = offset.bind(yankee)(foxtrot);
        backup = kilo.useStateFromStores;
        foxtrot = new Array(1);
        foxtrot[0] = verify;
        verify = function() {
            mike = _closure1_slot6;
            entity = mike.hasFetchedMostRecentPremiumTypeSubscription;
            entity = entity.bind(mike)();
            return entity;
        };
        verify = backup.bind(kilo)(foxtrot, verify);
        var _closure2_slot4 = verify;
        oscar = romeo[oscar];
        kilo = offset.bind(yankee)(oscar);
        backup = kilo.useStateFromStores;
        oscar = _closure1_slot5;
        foxtrot = new Array(1);
        foxtrot[0] = oscar;
        oscar = function() {
            mike = _closure1_slot5;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            return entity;
        };
        foxtrot = backup.bind(kilo)(foxtrot, oscar);
        oscar = 9;
        oscar = romeo[oscar];
        offset = offset.bind(yankee)(oscar);
        oscar = offset.isPremium;
        oscar = oscar.bind(offset)(foxtrot);
        var _closure2_slot5 = oscar;
        offset = _closure1_slot1;
        tango = 10;
        tango = romeo[tango];
        offset = offset.bind(yankee)(tango);
        tango = function() {
            _fun105092: for(var _fun105092_ip = 0; ; ) switch(_fun105092_ip) {
 0:
                entity = _closure2_slot4;
                if(entity) { _fun105092_ip = 45; continue _fun105092 }
 10:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.fetchMostRecentSubscription;
                entity = entity.bind(mike)();
 45:
                zulu = _closure1_slot7;
                mike = zulu.shouldFetchOffer;
                mike = mike.bind(zulu)();
                if(!mike) { _fun105092_ip = 104; continue _fun105092 }
 65:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchUserOffer;
                entity = 'useCollectibleDecoIsEligible';
                entity = mike.bind(zulu)(entity);
 104:
                entity = undefined;
                return entity;
            }
        };
        tango = offset.bind(yankee)(tango);
        tango = report.useEffect;
        offset = zulu.enabled;
        zulu = new Array(5);
        zulu[0] = offset;
        zulu[1] = verify;
        zulu[2] = options;
        zulu[3] = golf;
        zulu[4] = oscar;
        mike = function() {
            _fun105093: for(var _fun105093_ip = 0; ; ) switch(_fun105093_ip) {
 0:
                mike = _closure2_slot1;
                mike = mike.enabled;
                tango = false;
                if(!(tango === mike)) { _fun105093_ip = 34; continue _fun105093 }
 18:
                zulu = _closure2_slot0;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                _fun105093_ip = 418; continue _fun105093;
 34:
                mike = _closure2_slot4;
                if(!mike) { _fun105093_ip = 418; continue _fun105093 }
 44:
                mike = _closure2_slot3;
                if(!mike) { _fun105093_ip = 418; continue _fun105093 }
 54:
                mike = _closure2_slot2;
                oscar = null;
                if(!(oscar === mike)) { _fun105093_ip = 87; continue _fun105093 }
 64:
                report = _closure2_slot0;
                mike = _closure2_slot5;
                zulu = !mike;
                mike = undefined;
                mike = report.bind(mike)(zulu);
                _fun105093_ip = 418; continue _fun105093;
 87:
                mike = _closure2_slot2;
                mike = mike.isPaused;
                if(mike) { _fun105093_ip = 405; continue _fun105093 }
 103:
                mike = _closure2_slot2;
                mike = mike.isEnded;
                if(mike) { _fun105093_ip = 268; continue _fun105093 }
 121:
                mike = _closure2_slot2;
                mike = mike.isActive;
                if(mike) { _fun105093_ip = 150; continue _fun105093 }
 134:
                zulu = _closure2_slot0;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                _fun105093_ip = 418; continue _fun105093;
 150:
                options = _closure2_slot2;
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                verify = 6;
                zulu = zulu[verify];
                report = undefined;
                golf = golf.bind(report)(zulu);
                zulu = golf.getPremiumPlanItem;
                zulu = zulu.bind(golf)(options);
                oscar = oscar == zulu;
                options = undefined;
                if(oscar) { _fun105093_ip = 205; continue _fun105093 }
 199:
                options = zulu.planId;
 205:
                zulu = report === options;
                if(zulu) { _fun105093_ip = 254; continue _fun105093 }
 212:
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                oscar = oscar[verify];
                golf = golf.bind(report)(oscar);
                oscar = golf.getPremiumType;
                oscar = oscar.bind(golf)(options);
                mike = _closure1_slot8;
                mike = mike.TIER_2;
                zulu = oscar !== mike;
 254:
                mike = _closure2_slot0;
                mike = mike.bind(report)(zulu);
                _fun105093_ip = 418; continue _fun105093;
 268:
                report = _closure1_slot7;
                zulu = report.hasAnyUnexpiredOffer;
                zulu = zulu.bind(report)();
                if(zulu) { _fun105093_ip = 392; continue _fun105093 }
 288:
                zulu = _closure1_slot7;
                mike = zulu.hasAnyUnexpiredDiscountOffer;
                mike = mike.bind(zulu)();
                if(mike) { _fun105093_ip = 392; continue _fun105093 }
 307:
                mike = _closure2_slot2;
                zulu = global;
                zulu = zulu.Date;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                yankee = report;
                zulu = new yankee[zulu](offset);
                zulu = zulu instanceof Object ? zulu : report;
                oscar = zulu.setDate;
                report = zulu.getDate;
                golf = report.bind(zulu)();
                report = 10;
                report = golf - report;
                report = oscar.bind(zulu)(report);
                mike = mike.currentPeriodEnd;
                if(!(!(mike >= zulu))) { _fun105093_ip = 392; continue _fun105093 }
 377:
                report = _closure2_slot0;
                zulu = undefined;
                mike = true;
                mike = report.bind(zulu)(mike);
                _fun105093_ip = 418; continue _fun105093;
 392:
                zulu = _closure2_slot0;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                _fun105093_ip = 418; continue _fun105093;
 405:
                zulu = _closure2_slot0;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(entity);
 418:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useCollectibleDecoEligible'] = mike;
    return entity;
})();