// app/modules/contact_sync/ContactSyncExperiments.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2021-03_contact_sync_main', 'label': 'Contact sync base population experiment with holdout'};
    report = {'enableContactSync': false, 'mutualOnly': true};
    tango['defaultConfig'] = report;
    report = {'id': 1, 'label': 'Enable core Contact Sync features (mutual only variant)'};
    offset = {'enableContactSync': true, 'mutualOnly': true};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Enable core Contact Sync features (non mutuals variant)'};
    report = 2;
    romeo = {'enableContactSync': true, 'mutualOnly': false};
    yankee['config'] = romeo;
    offset[1] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot1 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/contact_sync/ContactSyncExperiments.tsx';
    report = oscar.bind(golf)(report);
    zulu['ContactSyncBaseExperiment'] = tango;
    tango = function() { // Original name: shouldOnlySyncMutuals
        tango = _closure1_slot1;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = 'f1c91e_1';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.mutualOnly;
        return entity;
    };
    zulu['shouldOnlySyncMutuals'] = tango;
    mike = function(argFoo, argBar) { // Original name: useEligibleForContactSync
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun94968: for(var _fun94968_ip = 0; ; ) switch(_fun94968_ip) {
 0:
                mike = _closure2_slot0;
                if(!mike) { _fun94968_ip = 45; continue _fun94968 }
 10:
                tango = _closure1_slot1;
                zulu = tango.trackExposure;
                mike = {};
                report = 'f1c91e_2';
                mike['location'] = report;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
 45:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        tango = _closure1_slot1;
        zulu = tango.useExperiment;
        mike = {};
        entity = 'f1c91e_3';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enableContactSync;
        return entity;
    };
    zulu['useEligibleForContactSync'] = mike;
    return entity;
})();