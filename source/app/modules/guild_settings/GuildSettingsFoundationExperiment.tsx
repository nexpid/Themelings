// app/modules/guild_settings/GuildSettingsFoundationExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    report = golfie.defineProperty;
    tangon = {};
    offset = true;
    tangon['value'] = offset;
    entity = '__esModule';
    entity = report.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    report = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    golfie = tangon.bind(entity)(report);
    tangon = {'kind': 'guild', 'id': '2025-01_guild_settings_foundation', 'label': 'Guild Settings Foundation Revamp'};
    report = {};
    option = false;
    report['enabled'] = option;
    tangon['defaultConfig'] = report;
    verify = {'id': 1, 'label': 'Guild Settings Foundation Revamp'};
    report = 1;
    option = {};
    option['enabled'] = offset;
    verify['config'] = option;
    option = new Array(1);
    option[0] = verify;
    tangon['treatments'] = option;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/GuildSettingsFoundationExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildSettingsFoundationExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: getIsGuildSettingsFoundationExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.guildId;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 27; continue _fun00001 }
 25:
            report = true;
 27:
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['guildId'] = oscard;
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['getIsGuildSettingsFoundationExperimentEnabled'] = tangon;
    michal = function(argFoo) { // Original name: useIsGuildSettingsFoundationExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.guildId;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            report = true;
 27:
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['guildId'] = oscard;
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsGuildSettingsFoundationExperimentEnabled'] = michal;
    return entity;
})();