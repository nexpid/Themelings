// app/modules/lobbies/LobbyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: canUnlinkLobbyChannel
        _fun119887: for(var _fun119887_ip = 0; ; ) switch(_fun119887_ip) {
 0:
            oscar = argFoo;
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun119887_ip = 19; continue _fun119887 }
 12:
            report = _closure1_slot2;
 19:
            zulu = null;
            entity = zulu != oscar;
            if(!entity) { _fun119887_ip = 125; continue _fun119887 }
 28:
            mike = oscar.linkedLobby;
            mike = zulu != mike;
            if(!mike) { _fun119887_ip = 66; continue _fun119887 }
 41:
            tango = report.can;
            zulu = _closure1_slot3;
            zulu = zulu.MANAGE_CHANNELS;
            mike = tango.bind(report)(zulu, oscar);
 66:
            if(!mike) { _fun119887_ip = 94; continue _fun119887 }
 69:
            tango = report.can;
            zulu = _closure1_slot3;
            zulu = zulu.VIEW_CHANNEL;
            mike = tango.bind(report)(zulu, oscar);
 94:
            if(!mike) { _fun119887_ip = 122; continue _fun119887 }
 97:
            tango = report.can;
            zulu = _closure1_slot3;
            zulu = zulu.SEND_MESSAGES;
            mike = tango.bind(report)(zulu, oscar);
 122:
            entity = mike;
 125:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/lobbies/LobbyUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['canUnlinkLobbyChannel'] = tango;
    mike = function(argFoo) { // Original name: useCanUnlinkLobbyChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = _closure2_slot0;
            mike = _closure1_slot2;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanUnlinkLobbyChannel'] = mike;
    return entity;
})();