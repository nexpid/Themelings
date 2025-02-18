// app/lib/injectMediaEngine.native.tsx
export default (function(argFoo, argBar, _, __, ___, ____, argPlu) {
    zuuluu = argBar;
    tangon = argPlu;
    var _closure1_slot0 = zuuluu;
    var _closure1_slot1 = tangon;
    entity = 0;
    michal = tangon[entity];
    entity = undefined;
    oscard = zuuluu.bind(entity)(michal);
    report = oscard.inject;
    michal = {};
    option = function() { // Original name: supported
        entity = true;
        return entity;
    };
    michal['supported'] = option;
    option = function(argFoo) { // Original name: supportsFeature
        michal = this;
        entity = michal.getVoiceEngine;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.supportsFeature;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['supportsFeature'] = option;
    option = function() { // Original name: setProcessPriority
        entity = undefined;
        return entity;
    };
    michal['setProcessPriority'] = option;
    option = function() { // Original name: getVoiceEngine
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    michal['getVoiceEngine'] = option;
    golfie = function() { // Original name: getVoiceFilters
        entity = {};
        return entity;
    };
    michal['getVoiceFilters'] = golfie;
    michal = report.bind(oscard)(michal);
    michal = 2;
    michal = tangon[michal];
    tangon = zuuluu.bind(entity)(michal);
    zuuluu = tangon.fileFinishedImporting;
    michal = 'lib/injectMediaEngine.native.tsx';
    michal = zuuluu.bind(tangon)(michal);
    return entity;
})();