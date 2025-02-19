// app/modules/voice_filters/VoiceFilterExperiment.tsx
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
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-10_flamingo', 'label': 'Flamingo'};
    report = {};
    offset = false;
    report['enabled'] = offset;
    tangon['defaultConfig'] = report;
    report = {'id': 1, 'label': 'Enabled - Treatment 1'};
    offset = {};
    offset['enabled'] = foxtra;
    report['config'] = offset;
    offset = new Array(3);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Enabled - Treatment 2'};
    report = 2;
    romeon = {};
    romeon['enabled'] = foxtra;
    yankee['config'] = romeon;
    offset[1] = yankee;
    yankee = {'id': 3, 'label': 'Enabled - Treatment 3'};
    romeon = {};
    romeon['enabled'] = foxtra;
    yankee['config'] = romeon;
    offset[2] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot2 = tangon;
    option = function() { // Original name: platformSupportsVoiceFilters
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 1;
            entity = entity[report];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isWindows;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 65; continue _fun00001 }
 38:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isMac;
            entity = michal.bind(zuuluu)();
 65:
            return entity;
        }
    };
    var _closure1_slot3 = option;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_filters/VoiceFilterExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VoiceFilterExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: isVoiceFiltersEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = _closure1_slot2;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.enabled;
            if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 54:
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = zuuluu.bind(michal)();
 64:
            return entity;
        }
    };
    zuuluu['isVoiceFiltersEnabled'] = tangon;
    michal = function(argFoo) { // Original name: useAreVoiceFiltersEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = _closure1_slot2;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.enabled;
            if(!entity) { _fun00006_ip = 64; continue _fun00005 }
 54:
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = zuuluu.bind(michal)();
 64:
            return entity;
        }
    };
    zuuluu['useAreVoiceFiltersEnabled'] = michal;
    return entity;
})();