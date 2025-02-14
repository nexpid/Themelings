// app/utils/web/WindowInteractingUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = null;
    var _closure1_slot0 = entity;
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/web/WindowInteractingUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'];
    zulu['INTERACTION_EVENTS'] = tango;
    tango = function() { // Original name: getCurrentlyInteractingWindowId
        entity = _closure1_slot0;
        return entity;
    };
    zulu['getCurrentlyInteractingWindowId'] = tango;
    tango = function(argFoo) { // Original name: setCurrentlyInteractingWindowId
        entity = argFoo;
        _closure1_slot0 = entity;
        entity = undefined;
        return entity;
    };
    zulu['setCurrentlyInteractingWindowId'] = tango;
    mike = function(argFoo) { // Original name: clearCurrentlyInteractingWindowId
        _fun62097: for(var _fun62097_ip = 0; ; ) switch(_fun62097_ip) {
 0:
            zulu = _closure1_slot0;
            entity = argFoo;
            if(!(zulu === entity)) { _fun62097_ip = 20; continue _fun62097 }
 14:
            entity = null;
            _closure1_slot0 = entity;
 20:
            entity = undefined;
            return entity;
        }
    };
    zulu['clearCurrentlyInteractingWindowId'] = mike;
    return entity;
})();