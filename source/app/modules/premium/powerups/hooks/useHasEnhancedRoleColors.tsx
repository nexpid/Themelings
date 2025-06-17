// app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useHasEnhancedRoleColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 2;
            golfie = oscard[zuuluu];
            zuuluu = undefined;
            option = report.bind(zuuluu)(golfie);
            golfie = option.useStateFromStores;
            verify = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = verify;
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
            michal = golfie.bind(option)(tangon, michal);
            tangon = 3;
            tangon = oscard[tangon];
            report = report.bind(zuuluu)(tangon);
            tangon = report.useGuildPowerupsExperimentEnabled;
            oscard = null;
            oscard = oscard != entity;
            if(!oscard) { _fun00002_ip = 92; continue _fun00001 }
 89:
            zuuluu = entity;
 92:
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, entity);
            if(!entity) { _fun00002_ip = 107; continue _fun00001 }
 104:
            entity = michal;
 107:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getHasEnhancedRoleColors
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot2;
            michal = tangon.getGuild;
            golfie = michal.bind(tangon)(entity);
            oscard = null;
            michal = oscard != golfie;
            if(!michal) { _fun00006_ip = 50; continue _fun00005 }
 29:
            report = golfie.hasFeature;
            tangon = _closure1_slot3;
            tangon = tangon.ENHANCED_ROLE_COLORS;
            michal = report.bind(golfie)(tangon);
 50:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getGuildPowerupsExperimentEnabled;
            oscard = oscard != entity;
            if(!oscard) { _fun00006_ip = 88; continue _fun00005 }
 85:
            zuuluu = entity;
 88:
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, entity);
            if(!entity) { _fun00006_ip = 103; continue _fun00005 }
 100:
            entity = michal;
 103:
            return entity;
        }
    };
    zuuluu['getHasEnhancedRoleColors'] = michal;
    return entity;
})();