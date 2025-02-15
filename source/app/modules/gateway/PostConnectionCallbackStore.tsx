// app/modules/gateway/PostConnectionCallbackStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function() { // Original name: shouldWaitForBlockingModals
        mike = _closure1_slot0;
        entity = mike.getType;
        mike = entity.bind(mike)();
        entity = null;
        entity = entity != mike;
        return entity;
    };
    var _closure1_slot3 = entity;
    options = function() { // Original name: processCallbacks
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot3;
            entity = undefined;
            mike = mike.bind(entity)();
            if(mike) { _fun00002_ip = 45; continue _fun00001 }
 16:
            report = _closure1_slot2;
            tango = report.forEach;
            mike = function(argFoo) {
                zulu = _closure1_slot4;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(mike);
            mike = new Array(0);
            _closure1_slot2 = mike;
 45:
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: handleCallback
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        zulu = entity.setImmediate;
        entity = undefined;
        mike = function() {
            mike = _closure2_slot0;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = new Array(0);
    var _closure1_slot2 = tango;
    tango = 2;
    golf = report[tango];
    offset = oscar.bind(entity)(golf);
    verify = offset.subscribe;
    golf = 'CONNECTION_OPEN';
    golf = verify.bind(offset)(golf, options);
    golf = report[tango];
    offset = oscar.bind(entity)(golf);
    verify = offset.subscribe;
    golf = 'CONNECTION_RESUMED';
    golf = verify.bind(offset)(golf, options);
    tango = report[tango];
    golf = oscar.bind(entity)(tango);
    oscar = golf.subscribe;
    tango = 'NUF_COMPLETE';
    tango = oscar.bind(golf)(tango, options);
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/PostConnectionCallbackStore.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: addPostConnectionCallback
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot1;
            mike = tango.isConnectedOrOverlay;
            mike = mike.bind(tango)();
            if(!mike) { _fun00004_ip = 47; continue _fun00003 }
 23:
            mike = _closure1_slot3;
            tango = undefined;
            mike = mike.bind(tango)();
            if(mike) { _fun00004_ip = 47; continue _fun00003 }
 36:
            mike = _closure1_slot4;
            mike = mike.bind(tango)(zulu);
            _fun00004_ip = 61; continue _fun00003;
 47:
            mike = _closure1_slot2;
            entity = mike.push;
            entity = entity.bind(mike)(zulu);
 61:
            entity = undefined;
            return entity;
        }
    };
    zulu['addPostConnectionCallback'] = mike;
    return entity;
})();