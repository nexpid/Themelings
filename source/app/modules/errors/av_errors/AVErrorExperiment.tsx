// app/modules/errors/av_errors/AVErrorExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-02_av_error_codes', 'label': 'AV error new UI'};
    verify = {};
    offset = false;
    verify['avErrorUIEnabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Show new AV error UI'};
    verify = {};
    verify['avErrorUIEnabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/AVErrorExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useAVErrorExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            golfie = zuuluu.AVHoldoutExperimentH12025;
            oscard = golfie.useExperiment;
            tangon = {};
            tangon['location'] = entity;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = report;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            oscard = zuuluu.isInHoldout;
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['disable'] = oscard;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useAVErrorExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: getAVErrorExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            oscard = undefined;
            if(!(report === oscard)) { _fun00004_ip = 22; continue _fun00003 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            golfie = zuuluu.AVHoldoutExperimentH12025;
            oscard = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = entity;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = report;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            oscard = zuuluu.isInHoldout;
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['disable'] = oscard;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.avErrorUIEnabled;
            return entity;
        }
    };
    zuuluu['getAVErrorExperimentEnabled'] = tangon;
    michal = function(argFoo) { // Original name: trackAVErrorExposure
        zuuluu = _closure1_slot2;
        michal = zuuluu.trackExposure;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['trackAVErrorExposure'] = michal;
    return entity;
})();