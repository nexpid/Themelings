// app/modules/libdiscore/libdiscoreNoteStoreExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-05_libdiscore_notestore', 'label': 'libdiscore NoteStore Migration'};
    verify = {};
    yankee = false;
    verify['enabled'] = yankee;
    tangon['defaultConfig'] = verify;
    offset = {'id': 0, 'label': 'Control'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'Use libdiscore NoteStore'};
    yankee = {};
    yankee['enabled'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/libdiscore/libdiscoreNoteStoreExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['LibDiscordNoteStoreExperiment'] = tangon;
    michal = function() { // Original name: libdiscoreNoteStoreEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            option = undefined;
            if(!(option === michal)) { _fun00002_ip = 95; continue _fun00001 }
 13:
            report = _closure1_slot3;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            michal = 'default';
            zuuluu['location'] = michal;
            michal = {};
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 1;
            oscard = verify[oscard];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.isLibdiscoreLoaded;
            oscard = oscard.bind(golfie)();
            oscard = !oscard;
            michal['disable'] = oscard;
            oscard = true;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enabled;
            var _closure1_slot2 = michal;
 95:
            entity = _closure1_slot2;
            return entity;
        }
    };
    zuuluu['libdiscoreNoteStoreEnabled'] = michal;
    return entity;
})();