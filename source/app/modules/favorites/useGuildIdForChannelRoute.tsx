// app/modules/favorites/useGuildIdForChannelRoute.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FAVORITES;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/favorites/useGuildIdForChannelRoute.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGuildIdForChannelRoute
        _fun53306: for(var _fun53306_ip = 0; ; ) switch(_fun53306_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = report.useStateFromStores;
            entity = _closure1_slot2;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getGuildId;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = tango.bind(report)(mike, entity);
            mike = null;
            if(!(mike == entity)) { _fun53306_ip = 74; continue _fun53306 }
 64:
            mike = zulu.getGuildId;
            entity = mike.bind(zulu)();
 74:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getGuildIdForGenericRedirect
        _fun53308: for(var _fun53308_ip = 0; ; ) switch(_fun53308_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot2;
            entity = tango.getGuildId;
            tango = entity.bind(tango)();
            entity = _closure1_slot4;
            if(!(tango === entity)) { _fun53308_ip = 106; continue _fun53308 }
 28:
            report = _closure1_slot3;
            tango = report.isFavorite;
            entity = zulu.id;
            entity = tango.bind(report)(entity);
            if(entity) { _fun53308_ip = 100; continue _fun53308 }
 51:
            entity = zulu.isThread;
            entity = entity.bind(zulu)();
            if(!entity) { _fun53308_ip = 88; continue _fun53308 }
 64:
            report = _closure1_slot3;
            tango = report.isFavorite;
            entity = zulu.parent_id;
            entity = tango.bind(report)(entity);
            if(entity) { _fun53308_ip = 100; continue _fun53308 }
 88:
            entity = zulu.getGuildId;
            entity = entity.bind(zulu)();
            _fun53308_ip = 104; continue _fun53308;
 100:
            entity = _closure1_slot4;
 104:
            _fun53308_ip = 116; continue _fun53308;
 106:
            mike = zulu.getGuildId;
            entity = mike.bind(zulu)();
 116:
            return entity;
        }
    };
    zulu['getGuildIdForGenericRedirect'] = mike;
    return entity;
})();