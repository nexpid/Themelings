// app/modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    oscard = function(argFoo) { // Original name: useEnhancedRoleColorsExperimentEnabled
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
    var _closure1_slot5 = oscard;
    report = function(argFoo) { // Original name: getEnhancedRoleColorsExperimentEnabled
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
    var _closure1_slot6 = report;
    tangon = function(argFoo, argBar) { // Original name: canUseEnhancedRoleColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getGuild;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            report = _closure1_slot6;
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
            michal = _closure1_slot3;
            michal = michal.ENHANCED_ROLE_COLORS;
            entity = zuuluu.bind(tangon)(michal);
 67:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    golfie = {};
    backup = true;
    golfie['value'] = backup;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    option = offset[entity];
    golfie = argBaz;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.GuildFeatures;
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    romeon = golfie.CommonTriggerPoints;
    golfie = 3;
    golfie = offset[golfie];
    yankee = verify.bind(entity)(golfie);
    option = yankee.createExperiment;
    golfie = {'kind': 'user', 'id': '2025-03_enhanced_role_colors', 'label': 'Enhanced Role Colors'};
    romeon = romeon.CONNECTION_OPEN;
    golfie['commonTriggerPoint'] = romeon;
    romeon = {};
    foxtra = false;
    romeon['enabled'] = foxtra;
    golfie['defaultConfig'] = romeon;
    foxtra = {'id': 1, 'label': 'enabled'};
    romeon = {};
    romeon['enabled'] = backup;
    foxtra['config'] = romeon;
    romeon = new Array(1);
    romeon[0] = foxtra;
    golfie['treatments'] = romeon;
    golfie = option.bind(yankee)(golfie);
    var _closure1_slot4 = golfie;
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/premium/powerups/experiments/EnhancedRoleColorsExperiment.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    zuuluu['useEnhancedRoleColorsExperimentEnabled'] = oscard;
    zuuluu['getEnhancedRoleColorsExperimentEnabled'] = report;
    report = function(argFoo, argBar) { // Original name: useCanUseEnhancedRoleColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.getGuild;
                    entity = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(entity);
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00006_ip = 54; continue _fun00005 }
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
            if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 77:
            entity = michal;
 80:
            return entity;
        }
    };
    zuuluu['useCanUseEnhancedRoleColors'] = report;
    zuuluu['canUseEnhancedRoleColors'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isNativeMessageEligibleForEnhancedRoleColors
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot7;
            zuuluu = undefined;
            michal = argFoo;
            entity = 'isNativeMessageEligibleForEnhancedRoleColors';
            entity = tangon.bind(zuuluu)(michal, entity);
            if(!entity) { _fun00008_ip = 36; continue _fun00007 }
 25:
            zuuluu = 'hidden';
            michal = argBar;
            entity = zuuluu !== michal;
 36:
            return entity;
        }
    };
    zuuluu['isNativeMessageEligibleForEnhancedRoleColors'] = michal;
    return entity;
})();