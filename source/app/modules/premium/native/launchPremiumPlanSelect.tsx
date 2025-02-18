// app/modules/premium/native/launchPremiumPlanSelect.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/launchPremiumPlanSelect.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: launchPremiumPlanSelect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.predicate;
            var _closure2_slot0 = entity;
            oscard = zuuluu.navigation;
            verify = zuuluu.showCurrentPlan;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            verify = true;
 35:
            yankee = zuuluu.analyticsLocation;
            offset = zuuluu.analyticsLocations;
            option = zuuluu.planId;
            golfie = zuuluu.applicationId;
            kiloes = zuuluu.onBack;
            romeon = function(argFoo) { // Original name: wrappedPredicate
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 1;
                    entity = zuuluu[entity];
                    report = undefined;
                    michal = michal.bind(report)(entity);
                    entity = michal.shouldAlwaysExcludeFromPlanSelect;
                    entity = entity.bind(michal)(oscard);
                    entity = !entity;
                    if(!entity) { _fun00004_ip = 85; continue _fun00003 }
 45:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    golfie = michal == zuuluu;
                    zuuluu = undefined;
                    if(golfie) { _fun00004_ip = 72; continue _fun00003 }
 63:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.bind(report)(oscard);
 72:
                    michal = michal == zuuluu;
                    if(michal) { _fun00004_ip = 82; continue _fun00003 }
 79:
                    michal = zuuluu;
 82:
                    entity = michal;
 85:
                    return entity;
                }
            };
            zuuluu = _closure1_slot3;
            tangon = zuuluu.PREMIUM_PLAN_SELECT;
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00002_ip = 197; continue _fun00001 }
 88:
            foxtra = _closure1_slot1;
            zuuluu = _closure1_slot2;
            report = 2;
            report = zuuluu[report];
            backup = foxtra.bind(entity)(report);
            foxtra = backup.pushLazy;
            sizing = _closure1_slot0;
            report = 4;
            report = zuuluu[report];
            sizing = sizing.bind(entity)(report);
            report = 3;
            report = zuuluu[report];
            zuuluu = zuuluu.paths;
            report = sizing.bind(entity)(report, zuuluu);
            zuuluu = {};
            zuuluu['initialRoute'] = tangon;
            zuuluu['analyticsLocation'] = yankee;
            zuuluu['analyticsLocations'] = offset;
            zuuluu['predicate'] = romeon;
            zuuluu['showCurrentPlan'] = verify;
            zuuluu['planId'] = option;
            zuuluu['applicationId'] = golfie;
            zuuluu['onBack'] = kiloes;
            zuuluu = foxtra.bind(backup)(report, zuuluu);
            _fun00002_ip = 239; continue _fun00001;
 197:
            report = oscard.push;
            zuuluu = {};
            zuuluu['predicate'] = romeon;
            zuuluu['analyticsLocation'] = yankee;
            zuuluu['analyticsLocations'] = offset;
            zuuluu['showCurrentPlan'] = verify;
            zuuluu['planId'] = option;
            zuuluu['applicationId'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
 239:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.trackPaneViewed;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    zuuluu['launchPremiumPlanSelect'] = michal;
    return entity;
})();