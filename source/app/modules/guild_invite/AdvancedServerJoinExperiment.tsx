// app/modules/guild_invite/AdvancedServerJoinExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2025-01_advanced_server_join', 'label': 'Advanced Server Join Experiment'};
    report = {'enabled': false, 'allowServerMute': false};
    tango['defaultConfig'] = report;
    yankee = {'id': 1, 'label': 'Enable Advanced Server Join w/ Server Mute'};
    report = 1;
    offset = {'enabled': true, 'allowServerMute': true};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Enable Advanced Server Join w/o Server Mute'};
    romeo = {'enabled': true, 'allowServerMute': false};
    yankee['config'] = romeo;
    offset[1] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot0 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_invite/AdvancedServerJoinExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['AdvancedServerJoinExperiment'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForAdvancedServerJoin
        entity = argFoo;
        entity = entity.location;
        tango = _closure1_slot0;
        zulu = tango.getCurrentConfig;
        mike = {};
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['isEligibleForAdvancedServerJoin'] = tango;
    tango = function(argFoo) { // Original name: useIsAdvancedServerJoinEnabled
        entity = argFoo;
        entity = entity.location;
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useIsAdvancedServerJoinEnabled'] = tango;
    mike = function(argFoo) { // Original name: allowMuteOnJoin
        entity = argFoo;
        entity = entity.location;
        tango = _closure1_slot0;
        zulu = tango.getCurrentConfig;
        mike = {};
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.allowServerMute;
        return entity;
    };
    zulu['allowMuteOnJoin'] = mike;
    return entity;
})();