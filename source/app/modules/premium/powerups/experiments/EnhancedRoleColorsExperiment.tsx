// app/modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    tangon = function(argFoo) { // Original name: getEnhancedRoleColorsExperimentEnabled
        tangon = _closure1_slot2;
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
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    romeon = true;
    report['value'] = romeon;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    oscard = option[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(oscard);
    var _closure1_slot0 = report;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot1 = report;
    report = 2;
    report = option[report];
    report = golfie.bind(entity)(report);
    offset = report.CommonTriggerPoints;
    report = 3;
    report = option[report];
    verify = golfie.bind(entity)(report);
    oscard = verify.createExperiment;
    report = {'kind': 'user', 'id': '2025-03_enhanced_role_colors', 'label': 'Enhanced Role Colors'};
    offset = offset.CONNECTION_OPEN;
    report['commonTriggerPoint'] = offset;
    offset = {};
    yankee = false;
    offset['enabled'] = yankee;
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'enabled'};
    offset = {};
    offset['enabled'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    report['treatments'] = offset;
    report = oscard.bind(verify)(report);
    var _closure1_slot2 = report;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    report = function(argFoo) { // Original name: useEnhancedRoleColorsExperimentEnabled
        tangon = _closure1_slot2;
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
    zuuluu['useEnhancedRoleColorsExperimentEnabled'] = report;
    zuuluu['getEnhancedRoleColorsExperimentEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: canUseEnhancedRoleColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = tangon.getGuild;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            report = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            entity = report.bind(zuuluu)(entity);
            if(!entity) { _fun00002_ip = 43; continue _fun00001 }
 37:
            zuuluu = null;
            entity = zuuluu != tangon;
 43:
            if(!entity) { _fun00002_ip = 67; continue _fun00001 }
 46:
            zuuluu = tangon.hasFeature;
            michal = _closure1_slot1;
            michal = michal.ENHANCED_ROLE_COLORS;
            entity = zuuluu.bind(tangon)(michal);
 67:
            return entity;
        }
    };
    zuuluu['canUseEnhancedRoleColors'] = michal;
    return entity;
})();