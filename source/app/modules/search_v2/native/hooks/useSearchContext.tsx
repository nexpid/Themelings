// app/modules/search_v2/native/hooks/useSearchContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchTypes;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/hooks/useSearchContext.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGuildSearchContext
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = {};
            mike = _closure1_slot5;
            mike = mike.GUILD;
            entity['type'] = mike;
            mike = _closure2_slot0;
            entity['guildId'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useGuildSearchContext'] = tango;
    tango = function(argFoo, argBar) { // Original name: useGuildChannelSearchContext
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            entity = {};
            mike = _closure1_slot5;
            mike = mike.GUILD_CHANNEL;
            entity['type'] = mike;
            zulu = _closure2_slot0;
            entity['guildId'] = zulu;
            mike = _closure2_slot1;
            entity['channelId'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useGuildChannelSearchContext'] = tango;
    mike = function(argFoo, argBar) { // Original name: useChannelDetailsSearchContext
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        options = report.bind(zulu)(tango);
        report = options.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            _fun112652: for(var _fun112652_ip = 0; ; ) switch(_fun112652_ip) {
 0:
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun112652_ip = 45; continue _fun112652 }
 35:
                mike = zulu.isThread;
                entity = mike.bind(zulu)();
 45:
                return entity;
            }
        };
        report = report.bind(options)(tango, zulu);
        var _closure2_slot2 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun112653: for(var _fun112653_ip = 0; ; ) switch(_fun112653_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun112653_ip = 89; continue _fun112653 }
 10:
                mike = _closure2_slot1;
                entity = null;
                if(!(entity != mike)) { _fun112653_ip = 57; continue _fun112653 }
 20:
                entity = {};
                mike = _closure1_slot5;
                mike = mike.GUILD_CHANNEL;
                entity['type'] = mike;
                mike = _closure2_slot1;
                entity['guildId'] = mike;
                mike = _closure2_slot0;
                entity['channelId'] = mike;
                _fun112653_ip = 87; continue _fun112653;
 57:
                mike = {};
                tango = _closure1_slot5;
                tango = tango.CHANNEL;
                mike['type'] = tango;
                tango = _closure2_slot0;
                mike['channelId'] = tango;
                entity = mike;
 87:
                _fun112653_ip = 167; continue _fun112653;
 89:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 4;
                mike = oscar[mike];
                options = undefined;
                golf = tango.bind(options)(mike);
                tango = _closure2_slot1;
                mike = null;
                oscar = mike != tango;
                mike = '[useChannelDetailsSearchContext] Thread must have a guild id';
                mike = golf.bind(options)(oscar, mike);
                mike = {};
                report = _closure1_slot5;
                report = report.THREAD;
                mike['type'] = report;
                mike['guildId'] = tango;
                zulu = _closure2_slot0;
                mike['channelId'] = zulu;
                entity = mike;
 167:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useChannelDetailsSearchContext'] = mike;
    return entity;
})();