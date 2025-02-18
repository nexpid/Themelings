// discord_common/js/packages/media-engine/native/inject.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function() { // Original name: assertInjected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot0;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 17; continue _fun00001 }
 13:
            entity = undefined;
            return entity;
 17:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'Native dependencies have not been injected.';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/native/inject.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: inject
        entity = argFoo;
        var _closure1_slot0 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['inject'] = tangon;
    tangon = function() { // Original name: supported
        zuuluu = _closure1_slot3;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        michal = _closure1_slot0;
        entity = michal.supported;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['supported'] = tangon;
    tangon = function(argFoo) { // Original name: supportsFeature
        zuuluu = _closure1_slot3;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        zuuluu = _closure1_slot0;
        michal = zuuluu.supportsFeature;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['supportsFeature'] = tangon;
    tangon = function(argFoo) { // Original name: setProcessPriority
        zuuluu = _closure1_slot3;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        tangon = _closure1_slot0;
        zuuluu = tangon.setProcessPriority;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setProcessPriority'] = tangon;
    tangon = function() { // Original name: getVoiceEngine
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot3;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = _closure1_slot1;
            michal = null;
            if(!(michal == entity)) { _fun00004_ip = 44; continue _fun00003 }
 23:
            tangon = _closure1_slot0;
            michal = tangon.getVoiceEngine;
            michal = michal.bind(tangon)();
            var _closure1_slot1 = michal;
            entity = michal;
 44:
            return entity;
        }
    };
    zuuluu['getVoiceEngine'] = tangon;
    michal = function() { // Original name: getVoiceFilters
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot3;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = _closure1_slot2;
            michal = null;
            if(!(michal == entity)) { _fun00006_ip = 44; continue _fun00005 }
 23:
            tangon = _closure1_slot0;
            michal = tangon.getVoiceFilters;
            michal = michal.bind(tangon)();
            var _closure1_slot2 = michal;
            entity = michal;
 44:
            return entity;
        }
    };
    zuuluu['getVoiceFilters'] = michal;
    return entity;
})();