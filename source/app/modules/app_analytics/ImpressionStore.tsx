// app/modules/app_analytics/ImpressionStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    tangon = true;
    report['value'] = tangon;
    tangon = '__esModule';
    tangon = option.bind(verify)(zuuluu, tangon, report);
    report = entity.Object;
    tangon = report.freeze;
    entity = {};
    option = null;
    entity['debugTrackedData'] = option;
    option = new Array(0);
    entity['impressions'] = option;
    entity = tangon.bind(report)(entity);
    var _closure1_slot2 = entity;
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.createWithEqualityFn;
    tangon = function() {
        entity = _closure1_slot2;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_analytics/ImpressionStore.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = argFoo;
                oscard = michal.impressions;
                michal = new Array(1);
                report = 0;
                golfie = michal;
                tangon = arraySpread(golfie, oscard, report);
                zuuluu = _closure2_slot0;
                michal[tangon] = zuuluu;
                zuuluu = 1;
                zuuluu = tangon + zuuluu;
                entity['impressions'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setCurrentImpression'] = report;
    report = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = argFoo;
                tangon = michal.impressions;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.sequenceId;
                    entity = _closure2_slot0;
                    entity = entity.sequenceId;
                    entity = michal !== entity;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                entity['impressions'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['cleanupImpression'] = report;
    report = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = function() {
                entity = {};
                michal = {};
                tangon = _closure2_slot0;
                michal['name'] = tangon;
                report = _closure2_slot1;
                oscard = michal;
                zuuluu = copyDataProperties(oscard, report);
                entity['debugTrackedData'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setDebugTrackedData'] = report;
    zuuluu['useImpressionStore'] = tangon;
    tangon = function() { // Original name: getLocation
        entity = {};
        var _closure2_slot0 = entity;
        tangon = _closure1_slot3;
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        tangon = zuuluu.impressions;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                tangon = michal.type;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 2;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu = zuuluu.ImpressionTypes;
                zuuluu = zuuluu.PAGE;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 69; continue _fun00001 }
 49:
                tangon = _closure2_slot0;
                zuuluu = michal.name;
                tangon['section'] = zuuluu;
                _fun00002_ip = 87; continue _fun00001;
 69:
                zuuluu = _closure2_slot0;
                michal = michal.name;
                zuuluu['page'] = michal;
 87:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getLocation'] = tangon;
    michal = function() { // Original name: getImpressionStack
        michal = _closure1_slot3;
        entity = michal.getState;
        entity = entity.bind(michal)();
        entity = entity.impressions;
        return entity;
    };
    zuuluu['getImpressionStack'] = michal;
    return entity;
})();