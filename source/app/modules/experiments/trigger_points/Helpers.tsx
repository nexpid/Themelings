// app/modules/experiments/trigger_points/Helpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CommonTriggerPoints;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: CommonTriggerPointConfiguration
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['experiments'] = michal;
            michal = argBar;
            zuuluu['triggerPoint'] = michal;
            michal = argBaz;
            zuuluu['params'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'registeredExperimentIds';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            zuuluu = entity.experiments;
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.definition;
                entity = entity.id;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'trigger';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = arguments[0];
                report = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
                michal = {};
 14:
                zuuluu = report.triggerPoint;
                tangon = report.experiments;
                zuuluu = {};
                golfie = report.params;
                option = zuuluu;
                report = copyDataProperties(option, golfie);
                option = zuuluu;
                golfie = michal;
                michal = copyDataProperties(option, golfie);
                michal = function(argFoo, argBar, argBaz) { // Original name: triggerCommonExperiments
                    zuuluu = argBar;
                    michal = argBaz;
                    var _closure4_slot0 = michal;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.trackExposure;
                        entity = _closure4_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = michal.bind(entity)(entity, tangon, zuuluu);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getExperiments';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            entity = entity.experiments;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/trigger_points/Helpers.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['CommonTriggerPointConfiguration'] = michal;
    return entity;
})();