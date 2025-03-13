// app/modules/activities/ActivityPopoutUtils.native.tsx
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
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/ActivityPopoutUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: shouldOpenActivityInPopoutWindow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(michal != entity)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = false;
            return entity;
 13:
            zuuluu = "Cannot destructure 'undefined' or 'null'.";
            tangon = michal;
            entity = throwTypeError(tangon, zuuluu);
            entity = undefined;
            throw entity;
        }
    };
    zuuluu['shouldOpenActivityInPopoutWindow'] = tangon;
    michal = function(argFoo, argBar) { // Original name: wrapPreemptiveActivityPopout
        michal = argBar;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    zuuluu['wrapPreemptiveActivityPopout'] = michal;
    return entity;
})();