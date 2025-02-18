// app/utils/web/WindowInteractingUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = null;
    var _closure1_slot0 = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/web/WindowInteractingUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'];
    zuuluu['INTERACTION_EVENTS'] = tangon;
    tangon = function() { // Original name: getCurrentlyInteractingWindowId
        entity = _closure1_slot0;
        return entity;
    };
    zuuluu['getCurrentlyInteractingWindowId'] = tangon;
    tangon = function(argFoo) { // Original name: setCurrentlyInteractingWindowId
        entity = argFoo;
        _closure1_slot0 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setCurrentlyInteractingWindowId'] = tangon;
    michal = function(argFoo) { // Original name: clearCurrentlyInteractingWindowId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = argFoo;
            if(!(zuuluu === entity)) { _fun00002_ip = 20; continue _fun00001 }
 14:
            entity = null;
            _closure1_slot0 = entity;
 20:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['clearCurrentlyInteractingWindowId'] = michal;
    return entity;
})();