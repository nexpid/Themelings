// app/modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DCF_HANDLE_DC_SHOWN';
        michal['type'] = report;
        report = argFoo;
        michal['dismissibleContent'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['handleDCShownToUser'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DCF_HANDLE_DC_DISMISSED';
        michal['type'] = report;
        report = argFoo;
        michal['dismissibleContent'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['handleDCDismissed'] = tangon;
    tangon = function() {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DCF_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetDismissibleContentFrameworkStore'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DCF_DAILY_CAP_OVERRIDE';
        michal['type'] = report;
        report = argFoo;
        michal['value'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['overrideDismissibleContentFramework'] = tangon;
    michal = function(argFoo) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE';
        michal['type'] = report;
        report = argFoo;
        michal['value'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['overrideNewUserMinAgeRequired'] = michal;
    return entity;
})();