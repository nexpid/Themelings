// app/modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: useBuildOverrideActive
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
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot2;
                entity = zuuluu.getCurrentBuildOverride;
                entity = entity.bind(zuuluu)();
                report = entity.overrides;
                zuuluu = null;
                oscard = zuuluu == report;
                tangon = undefined;
                entity = undefined;
                if(oscard) { _fun00002_ip = 80; continue _fun00001 }
 36:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 5;
                michal = golfie[michal];
                michal = oscard.bind(tangon)(michal);
                michal = michal.DEVICE_FIELD;
                michal = report[michal];
                zuuluu = zuuluu == michal;
                entity = undefined;
                if(zuuluu) { _fun00002_ip = 80; continue _fun00001 }
 75:
                entity = michal.id;
 80:
                return entity;
            }
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
    michal = {'type': null, 'title': 'Build Override Active', 'parent': null};
    option = option.PRESSABLE;
    michal['type'] = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RefreshIcon;
    michal['IconComponent'] = option;
    option = function() { // Original name: useBuildOverrideActiveDescription
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot4;
            report = undefined;
            oscard = entity.bind(report)();
            entity = null;
            zuuluu = entity != oscard;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 76; continue _fun00003 }
 24:
            tangon = _closure1_slot3;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 7;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.DevToolsContentSubLabel;
            michal = {};
            golfie = 'Build override: ';
            michal['label'] = golfie;
            michal['value'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 76:
            return entity;
        }
    };
    michal['useDescription'] = option;
    option = function() { // Original name: useHasBuildOverrideActive
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00006_ip = 55; continue _fun00005 }
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    michal['usePredicate'] = option;
    golfie = function() { // Original name: handleBuildOverrideActivePress
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.navigateToDevTools;
        michal = {};
        report = 'buildOverride';
        michal['screenKey'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onPress'] = golfie;
    michal['withArrow'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();