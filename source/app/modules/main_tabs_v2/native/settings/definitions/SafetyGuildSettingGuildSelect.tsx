// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = golf;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    verify = true;
    mike['value'] = verify;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    options = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(options);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.useSelectedSearchResult;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.getSelectedGuildId;
    var _closure1_slot5 = options;
    options = mike.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = options;
    options = mike.setSelectedGuildId;
    var _closure1_slot7 = options;
    mike = mike.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot8 = mike;
    mike = 3;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 4;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.MobileSetting;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    offset = mike.RendererType;
    tango = options.GUILD_SETTING_ACTIVITY_STATUS;
    mike = new Array(2);
    mike[0] = tango;
    tango = options.GUILD_SETTING_ACTIVITY_JOINING;
    mike[1] = tango;
    var _closure1_slot10 = mike;
    tango = {};
    offset = offset.GUILD_SELECTOR;
    tango['type'] = offset;
    tango['unsearchable'] = verify;
    verify = function() { // Original name: useSelectedGuildId
        tango = _closure1_slot4;
        mike = undefined;
        golf = tango.bind(mike)();
        var _closure2_slot0 = golf;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = new Array(1);
        tango[0] = golf;
        zulu = function() {
            _fun99866: for(var _fun99866_ip = 0; ; ) switch(_fun99866_ip) {
 0:
                zulu = _closure1_slot9;
                mike = zulu.getFlattenedGuildIds;
                zulu = mike.bind(zulu)();
                mike = 0;
                zulu = zulu[mike];
                report = _closure1_slot10;
                tango = report.includes;
                mike = _closure2_slot0;
                mike = tango.bind(report)(mike);
                if(!mike) { _fun99866_ip = 53; continue _fun99866 }
 47:
                tango = null;
                mike = tango != zulu;
 53:
                if(!mike) { _fun99866_ip = 74; continue _fun99866 }
 56:
                report = _closure1_slot5;
                tango = undefined;
                report = report.bind(tango)();
                tango = _closure1_slot6;
                mike = report === tango;
 74:
                if(!mike) { _fun99866_ip = 88; continue _fun99866 }
 77:
                mike = _closure1_slot7;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 88:
                entity = undefined;
                return entity;
            }
        };
        zulu = report.bind(oscar)(zulu, tango);
        entity = _closure1_slot8;
        entity = entity.bind(mike)();
        entity = entity.selectedGuildId;
        return entity;
    };
    tango['useSelectedGuildId'] = verify;
    options = options.CONTENT_AND_SOCIAL;
    tango['parent'] = options;
    report = function() { // Original name: onGuildSelectPress
        report = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        tango = mike[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = report.openLazy;
        oscar = _closure1_slot0;
        zulu = 8;
        zulu = mike[zulu];
        oscar = oscar.bind(entity)(zulu);
        zulu = 7;
        zulu = mike[zulu];
        mike = mike.paths;
        zulu = oscar.bind(entity)(zulu, mike);
        mike = 'SettingsPrivacyAndSafetyGuildSelectActionSheet';
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    tango['onPress'] = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['GUILD_SPECIFIC_SETTINGS'] = mike;
    return entity;
})();