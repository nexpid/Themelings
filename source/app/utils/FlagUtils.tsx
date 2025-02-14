// app/utils/FlagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    oscar = function(argFoo, argBar) { // Original name: hasFlag
        mike = argBar;
        entity = argFoo;
        entity = entity & mike;
        entity = entity === mike;
        return entity;
    };
    var _closure1_slot0 = oscar;
    report = function(argFoo, argBar) { // Original name: addFlag
        mike = argFoo;
        entity = argBar;
        entity = mike | entity;
        return entity;
    };
    var _closure1_slot1 = report;
    tango = function(argFoo, argBar) { // Original name: removeFlag
        entity = argBar;
        mike = ~entity;
        entity = argFoo;
        entity = entity & mike;
        return entity;
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    golf = argPlugh;
    entity = 0;
    options = golf[entity];
    golf = argBar;
    entity = undefined;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'utils/FlagUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['hasFlag'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: hasAnyFlag
        mike = argFoo;
        entity = argBar;
        mike = mike & entity;
        entity = 0;
        entity = entity != mike;
        return entity;
    };
    zulu['hasAnyFlag'] = oscar;
    zulu['addFlag'] = report;
    zulu['removeFlag'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeFlags
        oscar = 1;
        tango = copyRestArgs(oscar);
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        entity = argFoo;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['removeFlags'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: setFlag
        _fun37049: for(var _fun37049_ip = 0; ; ) switch(_fun37049_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = argBaz;
            if(entity) { _fun37049_ip = 29; continue _fun37049 }
 15:
            zulu = _closure1_slot2;
            entity = undefined;
            entity = zulu.bind(entity)(report, tango);
            _fun37049_ip = 41; continue _fun37049;
 29:
            zulu = _closure1_slot1;
            mike = undefined;
            entity = zulu.bind(mike)(report, tango);
 41:
            return entity;
        }
    };
    zulu['setFlag'] = tango;
    mike = function(argFoo, argBar) { // Original name: toggleFlag
        _fun37050: for(var _fun37050_ip = 0; ; ) switch(_fun37050_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = _closure1_slot0;
            zulu = undefined;
            entity = entity.bind(zulu)(report, tango);
            if(entity) { _fun37050_ip = 36; continue _fun37050 }
 24:
            entity = _closure1_slot1;
            entity = entity.bind(zulu)(report, tango);
            _fun37050_ip = 46; continue _fun37050;
 36:
            mike = _closure1_slot2;
            entity = mike.bind(zulu)(report, tango);
 46:
            return entity;
        }
    };
    zulu['toggleFlag'] = mike;
    return entity;
})();