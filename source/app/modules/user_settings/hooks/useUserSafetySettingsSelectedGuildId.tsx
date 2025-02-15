// app/modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot3 = report;
    tango = tango.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot5 = tango;
    tango = function() { // Original name: useUserSafetySettingsSelectedGuildId
        mike = _closure1_slot4;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = entity.selectedGuildId;
        return entity;
    };
    var _closure1_slot6 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx';
    report = oscar.bind(golf)(report);
    zulu['useUserSafetySettingsSelectedGuildId'] = tango;
    tango = function() {
        zulu = _closure1_slot4;
        mike = undefined;
        mike = zulu.bind(mike)();
        mike = mike.selectedGuildId;
        entity = _closure1_slot3;
        entity = mike === entity;
        return entity;
    };
    zulu['useAllServersOptionSelected'] = tango;
    mike = function() {
        _fun99892: for(var _fun99892_ip = 0; ; ) switch(_fun99892_ip) {
 0:
            tango = _closure1_slot6;
            mike = undefined;
            tango = tango.bind(mike)();
            var _closure2_slot0 = tango;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 3;
            tango = oscar[tango];
            oscar = report.bind(mike)(tango);
            report = oscar.useStateFromStores;
            golf = _closure1_slot2;
            tango = new Array(1);
            tango[0] = golf;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(oscar)(tango, entity);
            entity = null;
            tango = entity == report;
            if(tango) { _fun99892_ip = 99; continue _fun99892 }
 78:
            tango = report.hasFeature;
            zulu = _closure1_slot5;
            zulu = zulu.HUB;
            mike = tango.bind(report)(zulu);
 99:
            entity = entity != mike;
            if(!entity) { _fun99892_ip = 109; continue _fun99892 }
 106:
            entity = mike;
 109:
            return entity;
        }
    };
    zulu['useIsSelectedGuildAHub'] = mike;
    return entity;
})();