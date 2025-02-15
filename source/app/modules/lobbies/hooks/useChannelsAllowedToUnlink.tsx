// app/modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: getChannelsAllowedToUnlink
        _fun124949: for(var _fun124949_ip = 0; ; ) switch(_fun124949_ip) {
 0:
            tango = argFoo;
            zulu = arguments[1];
            mike = arguments[2];
            report = undefined;
            if(!(zulu === report)) { _fun124949_ip = 24; continue _fun124949 }
 17:
            zulu = _closure1_slot2;
 24:
            if(!(mike === report)) { _fun124949_ip = 35; continue _fun124949 }
 28:
            mike = _closure1_slot4;
 35:
            var _closure2_slot0 = mike;
            mike = null;
            if(!(mike != tango)) { _fun124949_ip = 103; continue _fun124949 }
 45:
            mike = zulu.getChannels;
            zulu = mike.bind(zulu)(tango);
            mike = _closure1_slot3;
            tango = zulu[mike];
            zulu = tango.filter;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.canUnlinkLobbyChannel;
                entity = argFoo;
                mike = entity.channel;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun124949_ip = 107; continue _fun124949;
 103:
            entity = new Array(0);
 107:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    report = 0;
    verify = golf[report];
    entity = undefined;
    verify = options.bind(entity)(verify);
    var _closure1_slot2 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx';
    report = oscar.bind(golf)(report);
    zulu['getChannelsAllowedToUnlink'] = tango;
    mike = function(argFoo) { // Original name: useChannelsAllowedToUnlink
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresArray;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot2;
        mike[1] = report;
        entity = function() {
            report = _closure1_slot5;
            tango = _closure2_slot0;
            zulu = _closure1_slot2;
            mike = _closure1_slot4;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useChannelsAllowedToUnlink'] = mike;
    return entity;
})();