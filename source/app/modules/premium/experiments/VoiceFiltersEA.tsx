// app/modules/premium/experiments/VoiceFiltersEA.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    romeon = true;
    michal['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    verify = michal.CommonTriggerPoints;
    michal = 1;
    michal = golfie[michal];
    option = oscard.bind(entity)(michal);
    report = option.createExperiment;
    michal = {'kind': 'user', 'id': '2025-06_voice_filters_ea', 'label': 'Voice Filters EA'};
    offset = {};
    yankee = null;
    offset['enabled'] = yankee;
    michal['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN;
    michal['commonTriggerPoint'] = verify;
    offset = {'id': 0, 'label': "User don't see voice filters EA"};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'User sees voice filters EA'};
    yankee = {};
    yankee['enabled'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    michal['treatments'] = verify;
    michal = report.bind(option)(michal);
    var _closure1_slot2 = michal;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/experiments/VoiceFiltersEA.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useVoiceFiltersEA
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.location;
            report = _closure1_slot2;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = entity;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.enabled;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useAreVoiceFiltersEnabled;
            michal = {'location': 'VoiceFiltersEarlyAccess', 'autoTrackExposure': true};
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 97:
            entity = michal;
 100:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['VoiceFiltersEA'] = michal;
    return entity;
})();