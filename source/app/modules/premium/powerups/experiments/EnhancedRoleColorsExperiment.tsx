// app/modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    report = function(argFoo) { // Original name: useEnhancedRoleColorsExperimentEnabled
        tangon = _closure1_slot4;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: getEnhancedRoleColorsExperimentEnabled
        tangon = _closure1_slot4;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    oscard = {};
    foxtra = true;
    oscard['value'] = foxtra;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    golfie = verify[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(golfie);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.GuildFeatures;
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    yankee = oscard.CommonTriggerPoints;
    oscard = 3;
    oscard = verify[oscard];
    offset = option.bind(entity)(oscard);
    golfie = offset.createExperiment;
    oscard = {'kind': 'user', 'id': '2025-03_enhanced_role_colors', 'label': 'Enhanced Role Colors'};
    yankee = yankee.CONNECTION_OPEN;
    oscard['commonTriggerPoint'] = yankee;
    yankee = {};
    romeon = false;
    yankee['enabled'] = romeon;
    oscard['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'enabled'};
    yankee = {};
    yankee['enabled'] = foxtra;
    romeon['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeon;
    oscard['treatments'] = yankee;
    oscard = golfie.bind(offset)(oscard);
    var _closure1_slot4 = oscard;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['useEnhancedRoleColorsExperimentEnabled'] = report;
    zuuluu['getEnhancedRoleColorsExperimentEnabled'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useCanUseEnhancedRoleColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot5;
            oscard = undefined;
            entity = argBar;
            entity = tangon.bind(oscard)(entity);
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 4;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.useStateFromStores;
            oscard = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.getGuild;
                    entity = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(entity);
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00004_ip = 54; continue _fun00003 }
 33:
                    zuuluu = tangon.hasFeature;
                    michal = _closure1_slot3;
                    michal = michal.ENHANCED_ROLE_COLORS;
                    entity = zuuluu.bind(tangon)(michal);
 54:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            if(!entity) { _fun00002_ip = 80; continue _fun00001 }
 77:
            entity = michal;
 80:
            return entity;
        }
    };
    zuuluu['useCanUseEnhancedRoleColors'] = tangon;
    michal = function(argFoo, argBar) { // Original name: canUseEnhancedRoleColors
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getGuild;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            report = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            entity = report.bind(zuuluu)(entity);
            if(!entity) { _fun00006_ip = 43; continue _fun00005 }
 37:
            zuuluu = null;
            entity = zuuluu != tangon;
 43:
            if(!entity) { _fun00006_ip = 67; continue _fun00005 }
 46:
            zuuluu = tangon.hasFeature;
            michal = _closure1_slot3;
            michal = michal.ENHANCED_ROLE_COLORS;
            entity = zuuluu.bind(tangon)(michal);
 67:
            return entity;
        }
    };
    zuuluu['canUseEnhancedRoleColors'] = michal;
    return entity;
})();