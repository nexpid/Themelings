// app/modules/systrace/native/JSITrace.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argFoo;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/systrace/native/JSITrace.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: isJSITraceEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00002_ip = 63; continue _fun00001 }
 43:
            michal = _closure1_slot3;
            zuuluu = michal.JSITrace;
            michal = zuuluu.isEnabled;
            entity = michal.bind(zuuluu)();
 63:
            return entity;
        }
    };
    zuuluu['isJSITraceEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: setJSITraceEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00004_ip = 61; continue _fun00003 }
 37:
            michal = _closure1_slot3;
            tangon = michal.JSITrace;
            zuuluu = tangon.setEnabled;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
 61:
            return entity;
        }
    };
    zuuluu['setJSITraceEnabled'] = tangon;
    tangon = function() { // Original name: installJSITrace
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            entity = michal[entity];
            michal = undefined;
            tangon = tangon.bind(michal)(entity);
            entity = tangon.isAndroid;
            entity = entity.bind(tangon)();
            tangon = !entity;
            entity = !tangon;
            if(tangon) { _fun00006_ip = 77; continue _fun00005 }
 43:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.JSITrace;
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 74; continue _fun00005 }
 64:
            zuuluu = tangon.install;
            michal = zuuluu.bind(tangon)();
 74:
            entity = michal;
 77:
            return entity;
        }
    };
    zuuluu['installJSITrace'] = tangon;
    tangon = function(argFoo) { // Original name: beginSection
        zuuluu = _closure1_slot0;
        michal = zuuluu.jsitrace_beginSection;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['beginSection'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: beginAyncSection
        tangon = _closure1_slot0;
        zuuluu = tangon.jsitrace_beginAsyncSection;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['beginAyncSection'] = tangon;
    tangon = function(argFoo) { // Original name: endSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00008_ip = 28; continue _fun00007 }
 9:
            michal = _closure1_slot0;
            entity = michal.jsitrace_endSection;
            entity = entity.bind(michal)();
            _fun00008_ip = 46; continue _fun00007;
 28:
            michal = _closure1_slot0;
            entity = michal.jsitrace_endSection;
            entity = entity.bind(michal)(zuuluu);
 46:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['endSection'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: endAsyncSection
        tangon = _closure1_slot0;
        zuuluu = tangon.jsitrace_endAsyncSection;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['endAsyncSection'] = tangon;
    michal = function(argFoo) { // Original name: setCounter
        zuuluu = _closure1_slot0;
        michal = zuuluu.jsitrace_setCounter;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['setCounter'] = michal;
    return entity;
})();