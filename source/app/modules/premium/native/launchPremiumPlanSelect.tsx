// app/modules/premium/native/launchPremiumPlanSelect.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.UserSettingsSections;
    var _closure1_slot3 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/launchPremiumPlanSelect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: launchPremiumPlanSelect
        _fun66414: for(var _fun66414_ip = 0; ; ) switch(_fun66414_ip) {
 0:
            zulu = argFoo;
            entity = zulu.predicate;
            var _closure2_slot0 = entity;
            oscar = zulu.navigation;
            verify = zulu.showCurrentPlan;
            entity = undefined;
            if(!(verify === entity)) { _fun66414_ip = 35; continue _fun66414 }
 33:
            verify = true;
 35:
            yankee = zulu.analyticsLocation;
            offset = zulu.analyticsLocations;
            options = zulu.planId;
            golf = zulu.applicationId;
            kilo = zulu.onBack;
            romeo = function(argFoo) { // Original name: wrappedPredicate
                _fun66415: for(var _fun66415_ip = 0; ; ) switch(_fun66415_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 1;
                    entity = zulu[entity];
                    report = undefined;
                    mike = mike.bind(report)(entity);
                    entity = mike.shouldAlwaysExcludeFromPlanSelect;
                    entity = entity.bind(mike)(oscar);
                    entity = !entity;
                    if(!entity) { _fun66415_ip = 85; continue _fun66415 }
 45:
                    zulu = _closure2_slot0;
                    mike = null;
                    golf = mike == zulu;
                    zulu = undefined;
                    if(golf) { _fun66415_ip = 72; continue _fun66415 }
 63:
                    tango = _closure2_slot0;
                    zulu = tango.bind(report)(oscar);
 72:
                    mike = mike == zulu;
                    if(mike) { _fun66415_ip = 82; continue _fun66415 }
 79:
                    mike = zulu;
 82:
                    entity = mike;
 85:
                    return entity;
                }
            };
            zulu = _closure1_slot3;
            tango = zulu.PREMIUM_PLAN_SELECT;
            zulu = null;
            if(!(zulu == oscar)) { _fun66414_ip = 199; continue _fun66414 }
 90:
            foxtrot = _closure1_slot1;
            zulu = _closure1_slot2;
            report = 2;
            report = zulu[report];
            backup = foxtrot.bind(entity)(report);
            foxtrot = backup.pushLazy;
            sizing = _closure1_slot0;
            report = 4;
            report = zulu[report];
            sizing = sizing.bind(entity)(report);
            report = 3;
            report = zulu[report];
            zulu = zulu.paths;
            report = sizing.bind(entity)(report, zulu);
            zulu = {};
            zulu['initialRoute'] = tango;
            zulu['analyticsLocation'] = yankee;
            zulu['analyticsLocations'] = offset;
            zulu['predicate'] = romeo;
            zulu['showCurrentPlan'] = verify;
            zulu['planId'] = options;
            zulu['applicationId'] = golf;
            zulu['onBack'] = kilo;
            zulu = foxtrot.bind(backup)(report, zulu);
            _fun66414_ip = 241; continue _fun66414;
 199:
            report = oscar.push;
            zulu = {};
            zulu['predicate'] = romeo;
            zulu['analyticsLocation'] = yankee;
            zulu['analyticsLocations'] = offset;
            zulu['showCurrentPlan'] = verify;
            zulu['planId'] = options;
            zulu['applicationId'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
 241:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.trackPaneViewed;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    zulu['launchPremiumPlanSelect'] = mike;
    return entity;
})();