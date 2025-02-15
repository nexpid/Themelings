// app/modules/game_profile/experiments/GameProfileExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    yankee = true;
    tango['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    verify = tango.CommonTriggerPoints;
    tango = 1;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'user', 'id': '2024-06_game_profile_experiment', 'label': 'Enables the Game Profile'};
    offset = {};
    romeo = false;
    offset['enabled'] = romeo;
    tango['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN;
    tango['commonTriggerPoint'] = verify;
    offset = {'id': 1, 'label': 'Enabled'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot0 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/game_profile/experiments/GameProfileExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['GameProfileRolloutExperiment'] = tango;
    tango = function(argFoo) { // Original name: canSeeGameProfile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            report = true;
 11:
            tango = _closure1_slot0;
            zulu = tango.getCurrentConfig;
            mike = {};
            entity = argFoo;
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['canSeeGameProfile'] = tango;
    mike = function(argFoo) { // Original name: useCanSeeGameProfile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            report = true;
 11:
            tango = _closure1_slot0;
            zulu = tango.useExperiment;
            mike = {};
            entity = argFoo;
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['useCanSeeGameProfile'] = mike;
    return entity;
})();