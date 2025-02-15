// app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/directory_channels/useCanManageGuildDirectoryEntry.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCanManageGuildDirectoryEntry
        _fun78764: for(var _fun78764_ip = 0; ; ) switch(_fun78764_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 4;
            oscar = golf[zulu];
            tango = undefined;
            offset = report.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot3;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot3;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guildId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = verify.bind(offset)(options, oscar);
            var _closure2_slot1 = oscar;
            oscar = golf[zulu];
            offset = report.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot2;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot2;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = verify.bind(offset)(options, oscar);
            var _closure2_slot2 = oscar;
            oscar = golf[zulu];
            offset = report.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot4;
            options = new Array(1);
            options[0] = oscar;
            mike = function() {
                tango = _closure1_slot4;
                zulu = tango.can;
                entity = _closure1_slot5;
                mike = entity.ADMINISTRATOR;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = verify.bind(offset)(options, mike);
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            tango = report.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                tango = _closure1_slot4;
                zulu = tango.can;
                entity = _closure1_slot5;
                mike = entity.MANAGE_MESSAGES;
                entity = _closure2_slot2;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu = tango.bind(report)(zulu, entity);
            entity = {};
            entity['isEntryAdmin'] = mike;
            tango = mike;
            if(mike) { _fun78764_ip = 201; continue _fun78764 }
 198:
            tango = zulu;
 201:
            entity['canEdit'] = tango;
            if(mike) { _fun78764_ip = 212; continue _fun78764 }
 209:
            mike = zulu;
 212:
            entity['canRemove'] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useCanCreateOrAddGuildInDirectory
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = tango.can;
            entity = _closure1_slot5;
            mike = entity.SEND_MESSAGES;
            entity = _closure2_slot0;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanCreateOrAddGuildInDirectory'] = mike;
    return entity;
})();