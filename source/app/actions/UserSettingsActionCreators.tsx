// app/actions/UserSettingsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: convertThemeToProto
        _fun78205: for(var _fun78205_ip = 0; ; ) switch(_fun78205_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot6;
            mike = mike.DARK;
            if(!(mike !== zulu)) { _fun78205_ip = 212; continue _fun78205 }
 23:
            mike = _closure1_slot6;
            mike = mike.LIGHT;
            if(!(mike !== zulu)) { _fun78205_ip = 176; continue _fun78205 }
 40:
            mike = _closure1_slot6;
            mike = mike.DARKER;
            if(!(mike !== zulu)) { _fun78205_ip = 140; continue _fun78205 }
 54:
            mike = _closure1_slot6;
            mike = mike.MIDNIGHT;
            if(!(mike !== zulu)) { _fun78205_ip = 104; continue _fun78205 }
 68:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.Theme;
            mike = mike.DARK;
            return mike;
 104:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.Theme;
            mike = mike.MIDNIGHT;
            return mike;
 140:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.Theme;
            mike = mike.DARKER;
            return mike;
 176:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.Theme;
            mike = mike.LIGHT;
            return mike;
 212:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.Theme;
            entity = entity.DARK;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.SystemThemeState;
    var _closure1_slot7 = tango;
    tango = {};
    report = function(argFoo) { // Original name: overrideLocale
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_LOCALE_OVERRIDE';
        mike['type'] = report;
        report = argFoo;
        mike['locale'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['overrideLocale'] = report;
    report = function(argFoo) { // Original name: updatedUnsyncedSettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UNSYNCED_USER_SETTINGS_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['updatedUnsyncedSettings'] = report;
    report = function(argFoo) { // Original name: setShouldSyncTextSettings
        _fun78208: for(var _fun78208_ip = 0; ; ) switch(_fun78208_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            mike['type'] = report;
            report = {};
            oscar = {};
            oscar['shouldSync'] = golf;
            if(golf) { _fun78208_ip = 283; continue _fun78208 }
 58:
            golf = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 9;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.InlineAttachmentMedia;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['inlineAttachmentMedia'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.InlineEmbedMedia;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['inlineEmbedMedia'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.RenderEmbeds;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['renderEmbeds'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.RenderReactions;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['renderReactions'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.AnimateEmoji;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['animateEmoji'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(entity)(yankee);
            romeo = yankee.AnimateStickers;
            yankee = romeo.getSetting;
            yankee = yankee.bind(romeo)();
            golf['animateStickers'] = yankee;
            options = offset[options];
            options = verify.bind(entity)(options);
            verify = options.GifAutoPlay;
            options = verify.getSetting;
            options = options.bind(verify)();
            golf['gifAutoPlay'] = options;
            _fun78208_ip = 285; continue _fun78208;
 283:
            golf = {};
 285:
            oscar['settings'] = golf;
            report['text'] = oscar;
            mike['changes'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    tango['setShouldSyncTextSettings'] = report;
    report = function(argFoo) { // Original name: setShouldSyncAppearanceSettings
        _fun78209: for(var _fun78209_ip = 0; ; ) switch(_fun78209_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            mike['type'] = report;
            report = {};
            oscar = {};
            oscar['shouldSync'] = golf;
            if(golf) { _fun78209_ip = 153; continue _fun78209 }
 55:
            golf = {};
            verify = _closure1_slot5;
            verify = verify.theme;
            golf['theme'] = verify;
            verify = {};
            offset = _closure1_slot3;
            yankee = offset.gradientPreset;
            offset = null;
            romeo = offset == yankee;
            offset = undefined;
            if(romeo) { _fun78209_ip = 100; continue _fun78209 }
 95:
            offset = yankee.id;
 100:
            verify['backgroundGradientPresetId'] = offset;
            golf['clientThemeSettings'] = verify;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 9;
            options = offset[options];
            options = verify.bind(entity)(options);
            verify = options.DeveloperMode;
            options = verify.getSetting;
            options = options.bind(verify)();
            golf['developerMode'] = options;
            _fun78209_ip = 155; continue _fun78209;
 153:
            golf = {};
 155:
            oscar['settings'] = golf;
            report['appearance'] = oscar;
            mike['changes'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    tango['setShouldSyncAppearanceSettings'] = report;
    report = function(argFoo) { // Original name: applySettingsOverride
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_OVERRIDE_APPLY';
        mike['type'] = report;
        report = argFoo;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['applySettingsOverride'] = report;
    report = function(argFoo) { // Original name: clearSettingsOverride
        golf = 0;
        report = copyRestArgs(golf);
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'USER_SETTINGS_OVERRIDE_CLEAR';
        mike['type'] = oscar;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['clearSettingsOverride'] = report;
    report = function(argFoo) { // Original name: updateLocale
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 5;
        tango = golf[mike];
        zulu = undefined;
        tango = oscar.bind(zulu)(tango);
        report = tango.PreloadedUserSettingsActionCreators;
        tango = report.updateAsync;
        mike = golf[mike];
        mike = oscar.bind(zulu)(mike);
        mike = mike.UserSettingsDelay;
        zulu = mike.INFREQUENT_USER_ACTION;
        mike = 'localization';
        entity = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.StringValue;
            zulu = tango.create;
            mike = {};
            report = _closure2_slot0;
            mike['value'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = argFoo;
            mike['locale'] = zulu;
            return entity;
        };
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    tango['updateLocale'] = report;
    report = function(argFoo) { // Original name: updateTheme
        _fun78214: for(var _fun78214_ip = 0; ; ) switch(_fun78214_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 8;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.dispatch;
            tango = {};
            golf = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            tango['type'] = golf;
            golf = {};
            options = {};
            verify = {};
            verify['theme'] = offset;
            options['settings'] = verify;
            golf['appearance'] = options;
            tango['changes'] = golf;
            tango = report.bind(oscar)(tango);
            report = _closure1_slot4;
            tango = report.shouldSync;
            oscar = 'appearance';
            tango = tango.bind(report)(oscar);
            if(!tango) { _fun78214_ip = 169; continue _fun78214 }
 102:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 5;
            tango = options[zulu];
            tango = golf.bind(entity)(tango);
            report = tango.PreloadedUserSettingsActionCreators;
            tango = report.updateAsync;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.UserSettingsDelay;
            zulu = zulu.INFREQUENT_USER_ACTION;
            mike = function(argFoo) {
                zulu = _closure1_slot8;
                mike = _closure2_slot0;
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = argFoo;
                mike['theme'] = zulu;
                return entity;
            };
            mike = tango.bind(report)(oscar, mike, zulu);
 169:
            return entity;
        }
    };
    tango['updateTheme'] = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/UserSettingsActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: saveGuildFolders
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 5;
        tango = golf[mike];
        zulu = undefined;
        tango = oscar.bind(zulu)(tango);
        report = tango.PreloadedUserSettingsActionCreators;
        tango = report.updateAsync;
        mike = golf[mike];
        mike = oscar.bind(zulu)(mike);
        mike = mike.UserSettingsDelay;
        zulu = mike.FREQUENT_USER_ACTION;
        mike = 'guildFolders';
        entity = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                _fun78218: for(var _fun78218_ip = 0; ; ) switch(_fun78218_ip) {
 0:
                    report = argFoo;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 6;
                    entity = tango[entity];
                    golf = undefined;
                    entity = zulu.bind(golf)(entity);
                    tango = entity.GuildFolder;
                    zulu = tango.create;
                    entity = {};
                    oscar = report.guildIds;
                    entity['guildIds'] = oscar;
                    entity = zulu.bind(tango)(entity);
                    zulu = report.folderId;
                    tango = null;
                    if(!(tango != zulu)) { _fun78218_ip = 136; continue _fun78218 }
 69:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    options = zulu.Int64Value;
                    oscar = options.create;
                    zulu = {};
                    verify = global;
                    offset = verify.String;
                    verify = report.folderId;
                    verify = offset.bind(golf)(verify);
                    zulu['value'] = verify;
                    zulu = oscar.bind(options)(zulu);
                    entity['id'] = zulu;
 136:
                    zulu = report.folderColor;
                    if(!(tango != zulu)) { _fun78218_ip = 213; continue _fun78218 }
 146:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    options = zulu.UInt64Value;
                    oscar = options.create;
                    zulu = {};
                    verify = global;
                    offset = verify.String;
                    verify = report.folderColor;
                    verify = offset.bind(golf)(verify);
                    zulu['value'] = verify;
                    zulu = oscar.bind(options)(zulu);
                    entity['color'] = zulu;
 213:
                    zulu = report.folderName;
                    zulu = tango != zulu;
                    if(!zulu) { _fun78218_ip = 240; continue _fun78218 }
 226:
                    oscar = report.folderName;
                    tango = '';
                    zulu = tango !== oscar;
 240:
                    if(!zulu) { _fun78218_ip = 310; continue _fun78218 }
 243:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    mike = tango[mike];
                    mike = zulu.bind(golf)(mike);
                    tango = mike.StringValue;
                    zulu = tango.create;
                    mike = {};
                    oscar = global;
                    oscar = oscar.String;
                    report = report.folderName;
                    report = oscar.bind(golf)(report);
                    mike['value'] = report;
                    mike = zulu.bind(tango)(mike);
                    entity['name'] = mike;
 310:
                    return entity;
                }
            };
            mike = mike.bind(zulu)(entity);
            entity = argFoo;
            entity['folders'] = mike;
            entity = undefined;
            return entity;
        };
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    zulu['saveGuildFolders'] = tango;
    mike = function(argFoo) { // Original name: saveClientTheme
        _fun78219: for(var _fun78219_ip = 0; ; ) switch(_fun78219_ip) {
 0:
            mike = argFoo;
            report = arguments[1];
            backup = mike.backgroundGradientPresetId;
            var _closure2_slot0 = backup;
            romeo = mike.theme;
            var _closure2_slot1 = romeo;
            zulu = mike.useSystemTheme;
            oscar = undefined;
            if(!(report === oscar)) { _fun78219_ip = 75; continue _fun78219 }
 40:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            mike = tango.bind(oscar)(mike);
            mike = mike.UserSettingsDelay;
            report = mike.INFREQUENT_USER_ACTION;
 75:
            mike = 'system';
            foxtrot = mike === romeo;
            tango = _closure1_slot7;
            if(foxtrot) { _fun78219_ip = 101; continue _fun78219 }
 93:
            kilo = tango.OFF;
            _fun78219_ip = 107; continue _fun78219;
 101:
            kilo = tango.ON;
 107:
            tango = null;
            if(!(tango != zulu)) { _fun78219_ip = 116; continue _fun78219 }
 113:
            kilo = zulu;
 116:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 8;
            options = golf[zulu];
            offset = tango.bind(oscar)(options);
            verify = offset.dispatch;
            options = {};
            yankee = 'UNSYNCED_USER_SETTINGS_UPDATE';
            options['type'] = yankee;
            yankee = {};
            yankee['useSystemTheme'] = kilo;
            options['settings'] = yankee;
            options = verify.bind(offset)(options);
            zulu = golf[zulu];
            golf = tango.bind(oscar)(zulu);
            tango = golf.dispatch;
            zulu = {};
            options = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            zulu['type'] = options;
            options = {};
            verify = {};
            offset = {};
            yankee = {};
            yankee['backgroundGradientPresetId'] = backup;
            offset['clientThemeSettings'] = yankee;
            yankee = undefined;
            if(foxtrot) { _fun78219_ip = 218; continue _fun78219 }
 215:
            yankee = romeo;
 218:
            offset['theme'] = yankee;
            verify['settings'] = offset;
            options['appearance'] = verify;
            zulu['changes'] = options;
            zulu = tango.bind(golf)(zulu);
            golf = _closure1_slot4;
            zulu = golf.shouldSync;
            tango = 'appearance';
            zulu = zulu.bind(golf)(tango);
            if(zulu) { _fun78219_ip = 267; continue _fun78219 }
 265:
            return oscar;
 267:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            zulu = mike.PreloadedUserSettingsActionCreators;
            mike = zulu.updateAsync;
            entity = function(argFoo) {
                _fun78220: for(var _fun78220_ip = 0; ; ) switch(_fun78220_ip) {
 0:
                    zulu = argFoo;
                    oscar = _closure1_slot8;
                    tango = _closure2_slot1;
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    zulu['theme'] = tango;
                    options = {};
                    mike = _closure2_slot0;
                    options['backgroundGradientPresetId'] = mike;
                    mike = {};
                    oscar = options.backgroundGradientPresetId;
                    tango = null;
                    oscar = tango != oscar;
                    tango = undefined;
                    if(!oscar) { _fun78220_ip = 108; continue _fun78220 }
 60:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 7;
                    report = golf[report];
                    report = oscar.bind(entity)(report);
                    golf = report.UInt32Value;
                    oscar = golf.create;
                    report = {};
                    options = options.backgroundGradientPresetId;
                    report['value'] = options;
                    tango = oscar.bind(golf)(report);
 108:
                    mike['backgroundGradientPresetId'] = tango;
                    zulu['clientThemeSettings'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(tango, entity, report);
            return entity;
        }
    };
    zulu['saveClientTheme'] = mike;
    return entity;
})();