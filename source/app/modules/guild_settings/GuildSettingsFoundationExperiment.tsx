// app/modules/guild_settings/GuildSettingsFoundationExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    report = golf.defineProperty;
    tango = {};
    offset = true;
    tango['value'] = offset;
    entity = '__esModule';
    entity = report.bind(golf)(zulu, entity, tango);
    entity = 0;
    report = oscar[entity];
    tango = argBaz;
    entity = undefined;
    golf = tango.bind(entity)(report);
    tango = {'kind': 'guild', 'id': '2025-01_guild_settings_foundation', 'label': 'Guild Settings Foundation Revamp'};
    report = {};
    options = false;
    report['enabled'] = options;
    tango['defaultConfig'] = report;
    verify = {'id': 1, 'label': 'Guild Settings Foundation Revamp'};
    report = 1;
    options = {};
    options['enabled'] = offset;
    verify['config'] = options;
    options = new Array(1);
    options[0] = verify;
    tango['treatments'] = options;
    tango = golf.bind(entity)(tango);
    var _closure1_slot0 = tango;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/GuildSettingsFoundationExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['GuildSettingsFoundationExperiment'] = tango;
    tango = function(argFoo) { // Original name: getIsGuildSettingsFoundationExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = mike.guildId;
            entity = mike.location;
            report = mike.autoTrackExposure;
            mike = undefined;
            if(!(report === mike)) { _fun00002_ip = 27; continue _fun00001 }
 25:
            report = true;
 27:
            tango = _closure1_slot0;
            zulu = tango.getCurrentConfig;
            mike = {};
            mike['guildId'] = oscar;
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['getIsGuildSettingsFoundationExperimentEnabled'] = tango;
    mike = function(argFoo) { // Original name: useIsGuildSettingsFoundationExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            oscar = mike.guildId;
            entity = mike.location;
            report = mike.autoTrackExposure;
            mike = undefined;
            if(!(report === mike)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            report = true;
 27:
            tango = _closure1_slot0;
            zulu = tango.useExperiment;
            mike = {};
            mike['guildId'] = oscar;
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['useIsGuildSettingsFoundationExperimentEnabled'] = mike;
    return entity;
})();