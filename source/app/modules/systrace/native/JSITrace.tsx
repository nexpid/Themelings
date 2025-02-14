// app/modules/systrace/native/JSITrace.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argFoo;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/systrace/native/JSITrace.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: isJSITraceEnabled
        _fun98691: for(var _fun98691_ip = 0; ; ) switch(_fun98691_ip) {
 0:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            entity = zulu.isAndroid;
            entity = entity.bind(zulu)();
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun98691_ip = 63; continue _fun98691 }
 43:
            mike = _closure1_slot3;
            zulu = mike.JSITrace;
            mike = zulu.isEnabled;
            entity = mike.bind(zulu)();
 63:
            return entity;
        }
    };
    zulu['isJSITraceEnabled'] = tango;
    tango = function(argFoo) { // Original name: setJSITraceEnabled
        _fun98692: for(var _fun98692_ip = 0; ; ) switch(_fun98692_ip) {
 0:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun98692_ip = 61; continue _fun98692 }
 37:
            mike = _closure1_slot3;
            tango = mike.JSITrace;
            zulu = tango.setEnabled;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
 61:
            return entity;
        }
    };
    zulu['setJSITraceEnabled'] = tango;
    tango = function() { // Original name: installJSITrace
        _fun98693: for(var _fun98693_ip = 0; ; ) switch(_fun98693_ip) {
 0:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            entity = mike[entity];
            mike = undefined;
            tango = tango.bind(mike)(entity);
            entity = tango.isAndroid;
            entity = entity.bind(tango)();
            tango = !entity;
            entity = !tango;
            if(tango) { _fun98693_ip = 77; continue _fun98693 }
 43:
            zulu = _closure1_slot3;
            tango = zulu.JSITrace;
            zulu = null;
            zulu = zulu == tango;
            mike = undefined;
            if(zulu) { _fun98693_ip = 74; continue _fun98693 }
 64:
            zulu = tango.install;
            mike = zulu.bind(tango)();
 74:
            entity = mike;
 77:
            return entity;
        }
    };
    zulu['installJSITrace'] = tango;
    tango = function(argFoo) { // Original name: beginSection
        zulu = _closure1_slot0;
        mike = zulu.jsitrace_beginSection;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['beginSection'] = tango;
    tango = function(argFoo, argBar) { // Original name: beginAyncSection
        tango = _closure1_slot0;
        zulu = tango.jsitrace_beginAsyncSection;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['beginAyncSection'] = tango;
    tango = function(argFoo) { // Original name: endSection
        _fun98696: for(var _fun98696_ip = 0; ; ) switch(_fun98696_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity == zulu)) { _fun98696_ip = 28; continue _fun98696 }
 9:
            mike = _closure1_slot0;
            entity = mike.jsitrace_endSection;
            entity = entity.bind(mike)();
            _fun98696_ip = 46; continue _fun98696;
 28:
            mike = _closure1_slot0;
            entity = mike.jsitrace_endSection;
            entity = entity.bind(mike)(zulu);
 46:
            entity = undefined;
            return entity;
        }
    };
    zulu['endSection'] = tango;
    tango = function(argFoo, argBar) { // Original name: endAsyncSection
        tango = _closure1_slot0;
        zulu = tango.jsitrace_endAsyncSection;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['endAsyncSection'] = tango;
    mike = function(argFoo) { // Original name: setCounter
        zulu = _closure1_slot0;
        mike = zulu.jsitrace_setCounter;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['setCounter'] = mike;
    return entity;
})();