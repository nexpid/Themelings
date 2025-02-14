// app/modules/game_console/hooks/useIsRemote.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/hooks/useIsRemote.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useIsRemote
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun71402: for(var _fun71402_ip = 0; ; ) switch(_fun71402_ip) {
 0:
                zulu = _closure1_slot2;
                entity = zulu.getRemoteSessionId;
                entity = entity.bind(zulu)();
                zulu = null;
                entity = zulu != entity;
                if(entity) { _fun71402_ip = 44; continue _fun71402 }
 26:
                tango = _closure1_slot2;
                mike = tango.getAwaitingRemoteSessionInfo;
                mike = mike.bind(tango)();
                entity = zulu != mike;
 44:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();