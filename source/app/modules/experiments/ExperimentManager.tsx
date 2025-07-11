// app/modules/experiments/ExperimentManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    report = golfie[tangon];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.registerExperiment;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.ExperimentTypes;
    var _closure1_slot4 = report;
    tangon = tangon.ExposureTypes;
    tangon = {};
    report = 'legacy';
    tangon['LEGACY'] = report;
    report = 'apex';
    tangon['APEX'] = report;
    var _closure1_slot5 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/experiments/ExperimentManager.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: trackExposureToExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBaz;
            tangon = _closure1_slot2;
            zuuluu = tangon.trackExposure;
            michal = {};
            entity = argFoo;
            michal['experimentId'] = entity;
            entity = argBar;
            michal['descriptor'] = entity;
            report = null;
            option = report == oscard;
            entity = undefined;
            golfie = undefined;
            if(option) { _fun00002_ip = 52; continue _fun00001 }
 47:
            golfie = oscard.location;
 52:
            michal['location'] = golfie;
            option = report == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 71; continue _fun00001 }
 65:
            golfie = oscard.analyticsLocations;
 71:
            michal['location_stack'] = golfie;
            option = report == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 91; continue _fun00001 }
 85:
            golfie = oscard.fingerprint;
 91:
            michal['fingerprint'] = golfie;
            option = report == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 111; continue _fun00001 }
 105:
            golfie = oscard.excluded;
 111:
            michal['excluded'] = golfie;
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 131; continue _fun00001 }
 125:
            report = oscard.exposureType;
 131:
            michal['exposureType'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['trackExposureToExperiment'] = report;
    report = function(argFoo) { // Original name: registerUserExperiment
        entity = argFoo;
        michal = entity.id;
        golfie = entity.title;
        oscard = entity.description;
        report = entity.buckets;
        entity = entity.commonTriggerPoint;
        tangon = _closure1_slot3;
        zuuluu = {};
        zuuluu['experimentId'] = michal;
        option = _closure1_slot4;
        option = option.USER;
        zuuluu['experimentType'] = option;
        zuuluu['title'] = golfie;
        zuuluu['description'] = oscard;
        zuuluu['buckets'] = report;
        zuuluu['commonTriggerPoint'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu);
        entity = {};
        entity['id'] = michal;
        return entity;
    };
    zuuluu['registerUserExperiment'] = report;
    report = function(argFoo) { // Original name: registerGuildExperiment
        entity = argFoo;
        michal = entity.id;
        golfie = entity.title;
        oscard = entity.description;
        report = entity.buckets;
        entity = entity.commonTriggerPoint;
        tangon = _closure1_slot3;
        zuuluu = {};
        zuuluu['experimentId'] = michal;
        option = _closure1_slot4;
        option = option.GUILD;
        zuuluu['experimentType'] = option;
        zuuluu['title'] = golfie;
        zuuluu['description'] = oscard;
        zuuluu['buckets'] = report;
        zuuluu['commonTriggerPoint'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu);
        entity = {};
        entity['id'] = michal;
        return entity;
    };
    zuuluu['registerGuildExperiment'] = report;
    zuuluu['ExperimentSystem'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: overrideBucket
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            report = argBaz;
            michal = _closure1_slot5;
            michal = michal.LEGACY;
            if(!(zuuluu !== michal)) { _fun00004_ip = 159; continue _fun00003 }
 29:
            michal = _closure1_slot5;
            michal = michal.APEX;
            if(!(zuuluu === michal)) { _fun00004_ip = 223; continue _fun00003 }
 46:
            michal = null;
            if(!(michal != report)) { _fun00004_ip = 108; continue _fun00003 }
 52:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = oscard.bind(michal)(zuuluu);
            zuuluu = oscard.dispatch;
            michal = {};
            golfie = 'APEX_EXPERIMENT_OVERRIDE_CREATE';
            michal['type'] = golfie;
            michal['experimentName'] = tangon;
            michal['variantId'] = report;
            michal = zuuluu.bind(oscard)(michal);
            _fun00004_ip = 223; continue _fun00003;
 108:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = oscard.bind(michal)(zuuluu);
            zuuluu = oscard.dispatch;
            michal = {};
            golfie = 'APEX_EXPERIMENT_OVERRIDE_DELETE';
            michal['type'] = golfie;
            michal['experimentName'] = tangon;
            michal = zuuluu.bind(oscard)(michal);
            _fun00004_ip = 223; continue _fun00003;
 159:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            oscard = 'EXPERIMENT_OVERRIDE_BUCKET';
            entity['type'] = oscard;
            entity['experimentId'] = tangon;
            tangon = null;
            oscard = tangon != report;
            if(!oscard) { _fun00004_ip = 213; continue _fun00003 }
 210:
            tangon = report;
 213:
            entity['experimentBucket'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 223:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['overrideBucket'] = michal;
    return entity;
})();