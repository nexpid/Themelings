// app/modules/experiments/ExperimentManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    tango = 0;
    golf = oscar[tango];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot2 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.registerExperiment;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ExperimentTypes;
    var _closure1_slot4 = golf;
    tango = tango.ExposureTypes;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/experiments/ExperimentManager.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: trackExposureToExperiment
        _fun98409: for(var _fun98409_ip = 0; ; ) switch(_fun98409_ip) {
 0:
            oscar = argBaz;
            tango = _closure1_slot2;
            zulu = tango.trackExposure;
            mike = {};
            entity = argFoo;
            mike['experimentId'] = entity;
            entity = argBar;
            mike['descriptor'] = entity;
            report = null;
            options = report == oscar;
            entity = undefined;
            golf = undefined;
            if(options) { _fun98409_ip = 52; continue _fun98409 }
 47:
            golf = oscar.location;
 52:
            mike['location'] = golf;
            options = report == oscar;
            golf = undefined;
            if(options) { _fun98409_ip = 71; continue _fun98409 }
 65:
            golf = oscar.analyticsLocations;
 71:
            mike['location_stack'] = golf;
            options = report == oscar;
            golf = undefined;
            if(options) { _fun98409_ip = 91; continue _fun98409 }
 85:
            golf = oscar.fingerprint;
 91:
            mike['fingerprint'] = golf;
            options = report == oscar;
            golf = undefined;
            if(options) { _fun98409_ip = 111; continue _fun98409 }
 105:
            golf = oscar.excluded;
 111:
            mike['excluded'] = golf;
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun98409_ip = 131; continue _fun98409 }
 125:
            report = oscar.exposureType;
 131:
            mike['exposureType'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['trackExposureToExperiment'] = tango;
    tango = function(argFoo) { // Original name: registerUserExperiment
        entity = argFoo;
        mike = entity.id;
        golf = entity.title;
        oscar = entity.description;
        report = entity.buckets;
        entity = entity.commonTriggerPoint;
        tango = _closure1_slot3;
        zulu = {};
        zulu['experimentId'] = mike;
        options = _closure1_slot4;
        options = options.USER;
        zulu['experimentType'] = options;
        zulu['title'] = golf;
        zulu['description'] = oscar;
        zulu['buckets'] = report;
        zulu['commonTriggerPoint'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu);
        entity = {};
        entity['id'] = mike;
        return entity;
    };
    zulu['registerUserExperiment'] = tango;
    tango = function(argFoo) { // Original name: registerGuildExperiment
        entity = argFoo;
        mike = entity.id;
        golf = entity.title;
        oscar = entity.description;
        report = entity.buckets;
        entity = entity.commonTriggerPoint;
        tango = _closure1_slot3;
        zulu = {};
        zulu['experimentId'] = mike;
        options = _closure1_slot4;
        options = options.GUILD;
        zulu['experimentType'] = options;
        zulu['title'] = golf;
        zulu['description'] = oscar;
        zulu['buckets'] = report;
        zulu['commonTriggerPoint'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu);
        entity = {};
        entity['id'] = mike;
        return entity;
    };
    zulu['registerGuildExperiment'] = tango;
    mike = function(argFoo, argBar) { // Original name: overrideBucket
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EXPERIMENT_OVERRIDE_BUCKET';
        mike['type'] = report;
        report = argFoo;
        mike['experimentId'] = report;
        report = argBar;
        mike['experimentBucket'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['overrideBucket'] = mike;
    return entity;
})();