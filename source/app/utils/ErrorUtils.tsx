// app/utils/ErrorUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo) { // Original name: getUnderlyingIOSExceptionRecursively
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.userInfo;
            entity = entity.NSUnderlyingError;
            zulu = null;
            if(!(zulu != entity)) { _fun00002_ip = 51; continue _fun00001 }
 21:
            report = _closure1_slot0;
            entity = mike.userInfo;
            tango = entity.NSUnderlyingError;
            entity = undefined;
            entity = report.bind(entity)(tango);
            if(!(zulu == entity)) { _fun00002_ip = 67; continue _fun00001 }
 51:
            mike = mike.userInfo;
            mike = mike.NSLocalizedDescription;
            return mike;
 67:
            return entity;
        }
    };
    var _closure1_slot0 = entity;
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
    tango = 'utils/ErrorUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getUnderlyingIOSError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tango = undefined;
            mike = undefined;
 7: // try_start_0
            zulu = _closure1_slot0;
            zulu = zulu.bind(tango)(entity);
            mike = zulu;
            entity = null;
            zulu = entity != zulu;
            if(!zulu) { _fun00004_ip = 34; continue _fun00003 }
 31:
            entity = mike;
 34: // try_end0
            return entity;
 36: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zulu['getUnderlyingIOSError'] = mike;
    return entity;
})();