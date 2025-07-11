// app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/client_override_hooks/useExperimentAssignments.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useExperimentAssignment
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                report = entity.system;
                oscard = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                entity = michal[entity];
                michal = undefined;
                entity = oscard.bind(michal)(entity);
                entity = entity.ExperimentSystem;
                entity = entity.LEGACY;
                if(!(report !== entity)) { _fun00002_ip = 110; continue _fun00001 }
 54:
                option = _closure1_slot3;
                golfie = option.getAssignment;
                entity = _closure2_slot0;
                oscard = entity.kind;
                report = _closure2_slot1;
                entity = entity.name;
                report = golfie.bind(option)(oscard, report, entity);
                entity = null;
                oscard = entity == report;
                entity = undefined;
                if(oscard) { _fun00002_ip = 108; continue _fun00001 }
 102:
                entity = report.variantId;
 108:
                _fun00002_ip = 154; continue _fun00001;
 110:
                report = _closure1_slot2;
                tangon = report.getUserExperimentDescriptor;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.name;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = null;
                tangon = tangon == zuuluu;
                michal = undefined;
                if(tangon) { _fun00002_ip = 151; continue _fun00001 }
 145:
                michal = zuuluu.bucket;
 151:
                entity = michal;
 154:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useExperimentAssignment'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useExperimentServerAssignment
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                michal = entity == michal;
                if(michal) { _fun00004_ip = 133; continue _fun00003 }
 16:
                michal = _closure2_slot0;
                report = michal.system;
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 3;
                oscard = oscard[michal];
                michal = undefined;
                michal = golfie.bind(michal)(oscard);
                michal = michal.ExperimentSystem;
                michal = michal.LEGACY;
                if(!(report !== michal)) { _fun00004_ip = 104; continue _fun00003 }
 67:
                option = _closure1_slot3;
                golfie = option.getServerAssignment;
                michal = _closure2_slot0;
                oscard = michal.kind;
                report = _closure2_slot1;
                michal = michal.name;
                michal = golfie.bind(option)(oscard, report, michal);
                _fun00004_ip = 130; continue _fun00003;
 104:
                report = _closure1_slot2;
                tangon = report.getLoadedUserExperiment;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.name;
                michal = tangon.bind(report)(zuuluu);
 130:
                entity = michal;
 133:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useExperimentServerAssignment'] = michal;
    return entity;
})();