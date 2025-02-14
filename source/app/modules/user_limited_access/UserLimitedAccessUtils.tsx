// app/modules/user_limited_access/UserLimitedAccessUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    tango = tango.AbortCodes;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_limited_access/UserLimitedAccessUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: isLimitedAccessErrorCode
        _fun72792: for(var _fun72792_ip = 0; ; ) switch(_fun72792_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = 400;
            entity = tango >= entity;
            if(!entity) { _fun72792_ip = 29; continue _fun72792 }
 19:
            mike = 500;
            entity = tango < mike;
 29:
            if(!entity) { _fun72792_ip = 38; continue _fun72792 }
 32:
            mike = null;
            entity = mike != zulu;
 38:
            if(!entity) { _fun72792_ip = 58; continue _fun72792 }
 41:
            mike = _closure1_slot0;
            mike = mike.USER_LIMITED_ACCESS_DEFAULT;
            entity = zulu >= mike;
 58:
            if(!entity) { _fun72792_ip = 78; continue _fun72792 }
 61:
            mike = _closure1_slot0;
            mike = mike.USER_LIMITED_ACCESS_MAX;
            entity = zulu <= mike;
 78:
            return entity;
        }
    };
    zulu['isLimitedAccessErrorCode'] = mike;
    return entity;
})();