// app/modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot3 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.D4clKi;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.ADVANCED;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useICYMISettingValue
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = 'hide_icymi_tab';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onICYMISettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 4;
            tangon = tangon[entity];
            entity = undefined;
            golfie = report.bind(entity)(tangon);
            oscard = golfie.track;
            tangon = _closure1_slot3;
            report = tangon.FEED_ITEM_INTERACTED;
            tangon = {};
            option = 'icymi_tab_toggle';
            tangon['home_session_id'] = option;
            option = 'show';
            if(!michal) { _fun00002_ip = 67; continue _fun00001 }
 63:
            option = 'hide';
 67:
            tangon['feed_item_id'] = option;
            tangon = oscard.bind(golfie)(report, tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.toggleLabFeature;
            zuuluu = {};
            zuuluu['enabled'] = michal;
            michal = 'hide_icymi_tab';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: useICYMIPredicate
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.useICYMIExperiment;
        entity = 'settings';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['usePredicate'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();