// app/modules/premium/powerups/experiments/GuildPowerupsExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.CommonTriggerPoints;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'guild', 'id': '2025-02_skill_trees', 'label': 'Skill Trees'};
    verify = verify.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = verify;
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'enabled'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot0 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/powerups/experiments/GuildPowerupsExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useGuildPowerupsExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            entity = null;
            oscard = entity == report;
            entity = undefined;
            if(oscard) { _fun00002_ip = 34; continue _fun00001 }
 29:
            entity = report.id;
 34:
            michal['guildId'] = entity;
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useGuildPowerupsExperimentEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getGuildPowerupsExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            entity = null;
            oscard = entity == report;
            entity = undefined;
            if(oscard) { _fun00004_ip = 34; continue _fun00003 }
 29:
            entity = report.id;
 34:
            michal['guildId'] = entity;
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['getGuildPowerupsExperimentEnabled'] = michal;
    return entity;
})();