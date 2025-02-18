// app/modules/main_tabs_v2/native/settings/definitions/CreateBugReportSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = {};
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.RendererType;
    golfie = golfie.TOGGLE;
    michal['type'] = golfie;
    golfie = 5;
    option = oscard[golfie];
    option = report.bind(entity)(option);
    verify = option.intl;
    option = verify.string;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.t;
    golfie = golfie.aIkGJC;
    golfie = option.bind(verify)(golfie);
    michal['title'] = golfie;
    golfie = null;
    michal['parent'] = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.WrenchIcon;
    michal['IconComponent'] = golfie;
    golfie = function(argFoo) { // Original name: handleCreateBugReportSettingToggle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 2;
            zuuluu = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.setDeveloperOptionSettings;
            zuuluu = {};
            golfie = argFoo;
            if(golfie) { _fun00002_ip = 82; continue _fun00001 }
 39:
            golfie = false;
            zuuluu['bugReporterEnabled'] = golfie;
            golfie = report.bind(oscard)(zuuluu);
            option = _closure1_slot1;
            golfie = 3;
            golfie = tangon[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.terminate;
            golfie = true;
            golfie = option.bind(verify)(golfie);
            _fun00002_ip = 120; continue _fun00001;
 82:
            golfie = true;
            zuuluu['bugReporterEnabled'] = golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 3;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.initialize;
            michal = michal.bind(zuuluu)();
 120:
            return entity;
        }
    };
    michal['onValueChange'] = golfie;
    golfie = function() { // Original name: useCreateBugReportSettingToggleValue
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            entity = _closure1_slot3;
            entity = entity.isBugReporterEnabled;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function() { // Original name: useCreateBugReportSettingDescription
        entity = 'Photo permission is required';
        return entity;
    };
    michal['useDescription'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useBugReporterExperimentSettingPredicate;
    michal['usePredicate'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/CreateBugReportSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();