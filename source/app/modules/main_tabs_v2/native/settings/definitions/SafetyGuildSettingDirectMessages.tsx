// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    options = mike.getSelectedGuildId;
    var _closure1_slot3 = options;
    mike = mike.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 3;
    mike = oscar[mike];
    options = report.bind(entity)(mike);
    mike = options.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = mike;
    mike = {};
    options = options.RendererType;
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.RAQUSE;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    options = function() { // Original name: useDescription
        _fun99893: for(var _fun99893_ip = 0; ; ) switch(_fun99893_ip) {
 0:
            entity = _closure1_slot4;
            oscar = undefined;
            entity = entity.bind(oscar)();
            zulu = entity.selectedGuildId;
            entity = _closure1_slot6;
            if(!(zulu !== entity)) { _fun99893_ip = 84; continue _fun99893 }
 27:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 7;
            zulu = golf[entity];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.4ckVu7;
            entity = zulu.bind(tango)(entity);
            _fun99893_ip = 139; continue _fun99893;
 84:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.wbYDfX;
            entity = zulu.bind(tango)(mike);
 139:
            return entity;
        }
    };
    mike['useDescription'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useValue
        _fun99894: for(var _fun99894_ip = 0; ; ) switch(_fun99894_ip) {
 0:
            entity = _closure1_slot4;
            oscar = undefined;
            entity = entity.bind(oscar)();
            tango = entity.selectedGuildId;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 4;
            entity = golf[entity];
            mike = report.bind(oscar)(entity);
            entity = mike.useDefaultGuildsRestricted;
            entity = entity.bind(mike)();
            mike = !entity;
            entity = 5;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            report = entity.RestrictedGuildIds;
            entity = report.useSetting;
            report = entity.bind(report)();
            entity = report.includes;
            entity = entity.bind(report)(tango);
            entity = !entity;
            zulu = _closure1_slot6;
            if(!(tango === zulu)) { _fun99894_ip = 104; continue _fun99894 }
 101:
            entity = mike;
 104:
            return entity;
        }
    };
    mike['useValue'] = golf;
    tango = function(argFoo) { // Original name: onAllowDirectMessagesFromServerMembersValueChange
        _fun99895: for(var _fun99895_ip = 0; ; ) switch(_fun99895_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot3;
            entity = undefined;
            report = tango.bind(entity)();
            tango = _closure1_slot6;
            if(!(report !== tango)) { _fun99895_ip = 136; continue _fun99895 }
 24:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 10;
            tango = golf[tango];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.getSanitizedRestrictedGuilds;
            golf = tango.bind(oscar)();
            if(mike) { _fun99895_ip = 69; continue _fun99895 }
 57:
            tango = golf.add;
            tango = tango.bind(golf)(report);
            _fun99895_ip = 79; continue _fun99895;
 69:
            tango = golf.delete;
            tango = tango.bind(golf)(report);
 79:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            report = zulu.RestrictedGuildIds;
            tango = report.updateSetting;
            zulu = global;
            oscar = zulu.Array;
            zulu = oscar.from;
            zulu = zulu.bind(oscar)(golf);
            zulu = tango.bind(report)(zulu);
            _fun99895_ip = 153; continue _fun99895;
 136:
            zulu = !mike;
            mike = function(argFoo) { // Original name: showGuildRestrictionModal
                entity = argFoo;
                var _closure3_slot0 = entity;
                golf = _closure1_slot1;
                options = _closure1_slot2;
                entity = 6;
                mike = options[entity];
                entity = undefined;
                tango = golf.bind(entity)(mike);
                zulu = tango.show;
                mike = {};
                yankee = _closure1_slot0;
                oscar = 7;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                romeo = verify.intl;
                offset = romeo.string;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.Hq4ApK;
                verify = offset.bind(romeo)(verify);
                mike['title'] = verify;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                romeo = verify.intl;
                offset = romeo.string;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.qTCYur;
                verify = offset.bind(romeo)(verify);
                mike['body'] = verify;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                romeo = verify.intl;
                offset = romeo.string;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.p89ACg;
                verify = offset.bind(romeo)(verify);
                mike['confirmText'] = verify;
                verify = options[oscar];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                oscar = options[oscar];
                oscar = yankee.bind(entity)(oscar);
                oscar = oscar.t;
                oscar = oscar.gm1Ven;
                oscar = verify.bind(offset)(oscar);
                mike['cancelText'] = oscar;
                oscar = 8;
                oscar = options[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.Colors;
                oscar = oscar.RED;
                mike['confirmColor'] = oscar;
                oscar = function() { // Original name: onConfirm
                    _fun99897: for(var _fun99897_ip = 0; ; ) switch(_fun99897_ip) {
 0:
                        tango = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 5;
                        mike = oscar[zulu];
                        entity = undefined;
                        mike = tango.bind(entity)(mike);
                        options = mike.DefaultGuildsRestrictedV2;
                        golf = options.updateSetting;
                        mike = _closure3_slot0;
                        golf = golf.bind(options)(mike);
                        zulu = oscar[zulu];
                        zulu = tango.bind(entity)(zulu);
                        tango = zulu.RestrictedGuildIds;
                        zulu = tango.updateSetting;
                        if(mike) { _fun99897_ip = 79; continue _fun99897 }
 73:
                        mike = new Array(0);
                        _fun99897_ip = 123; continue _fun99897;
 79:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 9;
                        oscar = options[oscar];
                        golf = golf.bind(entity)(oscar);
                        oscar = golf.keys;
                        options = _closure1_slot5;
                        report = options.getGuilds;
                        report = report.bind(options)();
                        mike = oscar.bind(golf)(report);
 123:
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                mike['onConfirm'] = oscar;
                report = function() { // Original name: onCancel
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = mike.DefaultGuildsRestrictedV2;
                    zulu = tango.updateSetting;
                    mike = _closure3_slot0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike['onCancel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = mike.bind(entity)(zulu);
 153:
            return entity;
        }
    };
    mike['onValueChange'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();