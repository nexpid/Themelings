// app/modules/contact_sync/ContactSyncExperiments.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2021-03_contact_sync_main', 'label': 'Contact sync base population experiment with holdout'};
    report = {'enableContactSync': false, 'mutualOnly': true};
    tangon['defaultConfig'] = report;
    report = {'id': 1, 'label': 'Enable core Contact Sync features (mutual only variant)'};
    offset = {'enableContactSync': true, 'mutualOnly': true};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Enable core Contact Sync features (non mutuals variant)'};
    report = 2;
    romeon = {'enableContactSync': true, 'mutualOnly': false};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot1 = tangon;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/contact_sync/ContactSyncExperiments.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ContactSyncBaseExperiment'] = tangon;
    tangon = function() { // Original name: shouldOnlySyncMutuals
        tangon = _closure1_slot1;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = 'f1c91e_1';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.mutualOnly;
        return entity;
    };
    zuuluu['shouldOnlySyncMutuals'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useEligibleForContactSync
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 10:
                tangon = _closure1_slot1;
                zuuluu = tangon.trackExposure;
                michal = {};
                report = 'f1c91e_2';
                michal['location'] = report;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
 45:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        tangon = _closure1_slot1;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = 'f1c91e_3';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enableContactSync;
        return entity;
    };
    zuuluu['useEligibleForContactSync'] = michal;
    return entity;
})();