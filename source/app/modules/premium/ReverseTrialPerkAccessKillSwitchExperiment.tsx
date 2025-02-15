// app/modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
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
    tango = tango.PurchasedFlags;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'user', 'id': '2025-02_reverse_trial_perk_access_kill_switch', 'label': 'Reverse Trial Perk Access Kill Switch'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tango['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Prevent perk access for users with reverse trials'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot3 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argBar;
            entity = null;
            mike = entity == zulu;
            if(mike) { _fun00002_ip = 68; continue _fun00001 }
 12:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 2;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.hasFlag;
            zulu = zulu.purchasedFlags;
            entity = _closure1_slot2;
            entity = entity.ON_REVERSE_TRIAL;
            entity = tango.bind(report)(zulu, entity);
            mike = !entity;
 68:
            entity = !mike;
            if(mike) { _fun00002_ip = 116; continue _fun00001 }
 74:
            report = _closure1_slot3;
            tango = report.getCurrentConfig;
            zulu = {};
            mike = argFoo;
            zulu['location'] = mike;
            mike = {};
            oscar = false;
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = mike.enabled;
 116:
            return entity;
        }
    };
    zulu['preventReverseTrialPerkAccess'] = mike;
    return entity;
})();