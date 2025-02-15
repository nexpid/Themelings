// discord_common/js/packages/media-engine/native/inject.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function() { // Original name: assertInjected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot0;
            entity = null;
            if(!(entity != mike)) { _fun00002_ip = 17; continue _fun00001 }
 13:
            entity = undefined;
            return entity;
 17:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'Native dependencies have not been injected.';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/inject.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: inject
        entity = argFoo;
        var _closure1_slot0 = entity;
        entity = undefined;
        return entity;
    };
    zulu['inject'] = tango;
    tango = function() { // Original name: supported
        zulu = _closure1_slot3;
        mike = undefined;
        mike = zulu.bind(mike)();
        mike = _closure1_slot0;
        entity = mike.supported;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['supported'] = tango;
    tango = function(argFoo) { // Original name: supportsFeature
        zulu = _closure1_slot3;
        mike = undefined;
        mike = zulu.bind(mike)();
        zulu = _closure1_slot0;
        mike = zulu.supportsFeature;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['supportsFeature'] = tango;
    tango = function(argFoo) { // Original name: setProcessPriority
        zulu = _closure1_slot3;
        entity = undefined;
        zulu = zulu.bind(entity)();
        tango = _closure1_slot0;
        zulu = tango.setProcessPriority;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setProcessPriority'] = tango;
    tango = function() { // Original name: getVoiceEngine
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = _closure1_slot3;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = _closure1_slot1;
            mike = null;
            if(!(mike == entity)) { _fun00004_ip = 44; continue _fun00003 }
 23:
            tango = _closure1_slot0;
            mike = tango.getVoiceEngine;
            mike = mike.bind(tango)();
            var _closure1_slot1 = mike;
            entity = mike;
 44:
            return entity;
        }
    };
    zulu['getVoiceEngine'] = tango;
    mike = function() { // Original name: getVoiceFilters
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot3;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = _closure1_slot2;
            mike = null;
            if(!(mike == entity)) { _fun00006_ip = 44; continue _fun00005 }
 23:
            tango = _closure1_slot0;
            mike = tango.getVoiceFilters;
            mike = mike.bind(tango)();
            var _closure1_slot2 = mike;
            entity = mike;
 44:
            return entity;
        }
    };
    zulu['getVoiceFilters'] = mike;
    return entity;
})();