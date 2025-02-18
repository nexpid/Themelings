// app/modules/main_tabs_v2/native/settings/definitions/ExperimentOverrideActiveSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: useExperimentOverrideActiveCount
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.keys;
            tangon = _closure1_slot2;
            entity = tangon.getAllExperimentOverrideDescriptors;
            entity = entity.bind(tangon)();
            entity = michal.bind(zuuluu)(entity);
            entity = entity.length;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    tangon = true;
    michal['value'] = tangon;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot3 = michal;
    michal = {'type': null, 'title': 'Experiments Overrides Active', 'parent': null};
    option = option.PRESSABLE;
    michal['type'] = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.BeakerIcon;
    michal['IconComponent'] = option;
    option = function() { // Original name: useExperimentOverrideActiveDescription
        michal = _closure1_slot4;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot3;
        michal = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        entity = report[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.DevToolsContentSubLabel;
        entity = {};
        report = 'Experiments overriden: ';
        entity['label'] = report;
        report = oscard.toString;
        report = report.bind(oscard)();
        entity['value'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useDescription'] = option;
    option = function() { // Original name: useHasExperimentOverrideActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            michal = zuuluu[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.useStaffOrDevEnvSettingPredicate;
            michal = michal.bind(tangon)();
            entity = _closure1_slot4;
            zuuluu = entity.bind(zuuluu)();
            entity = 0;
            entity = zuuluu > entity;
            if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    michal['usePredicate'] = option;
    golfie = function() { // Original name: handleExperimentOverrideActivePress
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.navigateToDevTools;
        michal = {};
        report = 'experiments';
        michal['screenKey'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onPress'] = golfie;
    michal['withArrow'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/ExperimentOverrideActiveSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();