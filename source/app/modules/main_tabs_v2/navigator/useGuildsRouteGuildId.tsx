// app/modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useGuildsRouteGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 0;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.useRoute;
            mike = mike.bind(zulu)();
            mike = mike.params;
            zulu = null;
            zulu = zulu == mike;
            if(zulu) { _fun00002_ip = 54; continue _fun00001 }
 49:
            entity = mike.guildId;
 54:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function() { // Original name: useGuildsRouteGuildAndChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 0;
            entity = zulu[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.useRoute;
            zulu = entity.bind(mike)();
            tango = null;
            entity = tango == zulu;
            mike = undefined;
            if(entity) { _fun00004_ip = 65; continue _fun00003 }
 45:
            entity = zulu.params;
            oscar = tango == entity;
            mike = undefined;
            if(oscar) { _fun00004_ip = 65; continue _fun00003 }
 60:
            mike = entity.guildId;
 65:
            entity = new Array(2);
            entity[0] = mike;
            oscar = tango == zulu;
            mike = undefined;
            if(oscar) { _fun00004_ip = 102; continue _fun00003 }
 82:
            zulu = zulu.params;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00004_ip = 102; continue _fun00003 }
 97:
            mike = zulu.channelId;
 102:
            entity[1] = mike;
            return entity;
        }
    };
    zulu['useGuildsRouteGuildAndChannelId'] = mike;
    return entity;
})();