// app/modules/guild_settings/GuildContentLevelSettingExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
    tangon = {'kind': 'guild', 'id': '2025-06_server_content_level_setting', 'label': 'Guild content level setting'};
    offset = {};
    romeon = false;
    offset['enabled'] = romeon;
    tangon['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = verify;
    offset = {'id': 1, 'label': 'Guild content level setting'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/GuildContentLevelSettingExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildContentLevelSettingExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForGuildContentLevelSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            entity = entity.location;
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['guildId'] = tangon;
            zuuluu['location'] = entity;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.enabled;
            if(entity) { _fun00002_ip = 92; continue _fun00001 }
 59:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForSettingsDefaultsAggregate;
            entity = michal.bind(zuuluu)(tangon);
 92:
            return entity;
        }
    };
    zuuluu['isEligibleForGuildContentLevelSetting'] = tangon;
    michal = function(argFoo) { // Original name: useIsGuildContentLevelSettingEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            entity = entity.location;
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['guildId'] = tangon;
            zuuluu['location'] = entity;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(zuuluu, entity);
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.useIsEligibleForSettingsDefaultsAggregate;
            michal = michal.bind(zuuluu)(tangon);
            entity = entity.enabled;
            if(entity) { _fun00004_ip = 95; continue _fun00003 }
 92:
            entity = michal;
 95:
            return entity;
        }
    };
    zuuluu['useIsGuildContentLevelSettingEnabled'] = michal;
    return entity;
})();