// app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useMaybeFetchTieredTenureBadgeData
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 2;
        tango = report[entity];
        entity = undefined;
        verify = oscar.bind(entity)(tango);
        options = verify.useStateFromStores;
        tango = _closure1_slot3;
        golf = new Array(1);
        golf[0] = tango;
        tango = function() {
            mike = _closure1_slot3;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            return entity;
        };
        tango = options.bind(verify)(golf, tango);
        var _closure2_slot0 = tango;
        tango = 3;
        tango = report[tango];
        options = oscar.bind(entity)(tango);
        golf = options.useIsPremiumSubscriber;
        tango = _closure1_slot4;
        tango = tango.TIER_2;
        tango = golf.bind(options)(tango);
        var _closure2_slot1 = tango;
        tango = 4;
        tango = report[tango];
        oscar = oscar.bind(entity)(tango);
        tango = oscar.useTieredTenureBadgesExperiment;
        tango = tango.bind(oscar)();
        tango = tango.enabled;
        var _closure2_slot2 = tango;
        tango = _closure1_slot1;
        zulu = 5;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        mike = function() {
            _fun105074: for(var _fun105074_ip = 0; ; ) switch(_fun105074_ip) {
 0:
                entity = _closure2_slot0;
                tango = null;
                report = tango == entity;
                entity = undefined;
                zulu = undefined;
                if(report) { _fun105074_ip = 29; continue _fun105074 }
 20:
                report = _closure2_slot0;
                zulu = report.id;
 29:
                zulu = tango != zulu;
                if(!zulu) { _fun105074_ip = 40; continue _fun105074 }
 36:
                zulu = _closure2_slot1;
 40:
                if(!zulu) { _fun105074_ip = 47; continue _fun105074 }
 43:
                zulu = _closure2_slot2;
 47:
                if(!zulu) { _fun105074_ip = 93; continue _fun105074 }
 50:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 6;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.fetchProfile;
                mike = _closure2_slot0;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
 93:
                return entity;
            }
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useMaybeFetchTieredTenureBadgeData'] = mike;
    return entity;
})();