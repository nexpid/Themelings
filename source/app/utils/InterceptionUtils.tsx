// app/utils/InterceptionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    report = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golf)(zulu, entity, mike);
    mike = function(argFoo) { // Original name: resolveThunk
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = 'function';
            mike = typeof zulu;
            entity = zulu;
            if(!(tango === mike)) { _fun00002_ip = 23; continue _fun00001 }
 17:
            mike = undefined;
            entity = zulu.bind(mike)();
 23:
            return entity;
        }
    };
    var _closure1_slot0 = mike;
    entity = 0;
    golf = oscar[entity];
    report = argBaz;
    entity = undefined;
    golf = report.bind(entity)(golf);
    report = golf.curry;
    tango = function(argFoo, argBar, argBaz) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argBaz;
            mike = _closure1_slot0;
            zulu = undefined;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun00004_ip = 32; continue _fun00003 }
 23:
            entity = {};
            entity = tango.bind(zulu)(entity);
            _fun00004_ip = 40; continue _fun00003;
 32:
            mike = argFoo;
            entity = mike.bind(zulu)(tango);
 40:
            return entity;
        }
    };
    tango = report.bind(golf)(tango);
    report = 1;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'utils/InterceptionUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['resolveThunk'] = mike;
    return entity;
})();