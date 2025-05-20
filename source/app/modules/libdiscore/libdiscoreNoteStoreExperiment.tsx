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
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 1;
            entity = entity[report];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isLibdiscoreLoaded;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 84; continue _fun00001 }
 38:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getExperimentCacher;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.isExperimentIdEnabled;
            michal = '2025-05_libdiscore_notestore';
            entity = zuuluu.bind(tangon)(michal);
 84:
            return entity;
        }
    };
    zuuluu['libdiscoreNoteStoreEnabled'] = michal;
    return entity;
})();