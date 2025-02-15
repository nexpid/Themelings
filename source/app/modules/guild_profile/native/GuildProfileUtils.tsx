// app/modules/guild_profile/native/GuildProfileUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/native/GuildProfileUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun00002_ip = 142; continue _fun00001 }
 16:
                entity = {};
                golf = _closure1_slot2;
                tango = golf.canAccessGuildSettings;
                oscar = _closure2_slot0;
                tango = tango.bind(golf)(oscar);
                entity['canAccessSettings'] = tango;
                report = golf.can;
                tango = _closure1_slot3;
                tango = tango.CHANGE_NICKNAME;
                tango = report.bind(golf)(tango, oscar);
                if(tango) { _fun00002_ip = 100; continue _fun00001 }
 70:
                options = _closure1_slot2;
                golf = options.can;
                report = _closure1_slot3;
                oscar = report.MANAGE_NICKNAMES;
                report = _closure2_slot0;
                tango = golf.bind(options)(oscar, report);
 100:
                entity['canEditNickname'] = tango;
                report = _closure1_slot2;
                tango = report.can;
                zulu = _closure1_slot3;
                zulu = zulu.MANAGE_CHANNELS;
                mike = _closure2_slot0;
                mike = tango.bind(report)(zulu, mike);
                entity['canManageChannels'] = mike;
                _fun00002_ip = 156; continue _fun00001;
 142:
                entity = {'canAccessSettings': false, 'canEditNickname': false, 'canManageChannels': false};
 156:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGuildProfilePermissions'] = mike;
    return entity;
})();