// app/actions/UserSettingsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: convertThemeToProto
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot6;
            michal = michal.DARK;
            if(!(michal !== zuuluu)) { _fun00002_ip = 204; continue _fun00001 }
 22:
            michal = _closure1_slot6;
            michal = michal.LIGHT;
            if(!(michal !== zuuluu)) { _fun00002_ip = 169; continue _fun00001 }
 38:
            michal = _closure1_slot6;
            michal = michal.DARKER;
            if(!(michal !== zuuluu)) { _fun00002_ip = 134; continue _fun00001 }
 51:
            michal = _closure1_slot6;
            michal = michal.MIDNIGHT;
            if(!(michal !== zuuluu)) { _fun00002_ip = 99; continue _fun00001 }
 64:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.Theme;
            michal = michal.DARK;
            return michal;
 99:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.Theme;
            michal = michal.MIDNIGHT;
            return michal;
 134:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.Theme;
            michal = michal.DARKER;
            return michal;
 169:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.Theme;
            michal = michal.LIGHT;
            return michal;
 204:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.Theme;
            entity = entity.DARK;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.SystemTheme;
    tangon = tangon.SystemThemeState;
    var _closure1_slot7 = tangon;
    tangon = {};
    report = function(argFoo) { // Original name: overrideLocale
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_LOCALE_OVERRIDE';
        michal['type'] = report;
        report = argFoo;
        michal['locale'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['overrideLocale'] = report;
    report = function(argFoo) { // Original name: updatedUnsyncedSettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UNSYNCED_USER_SETTINGS_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['updatedUnsyncedSettings'] = report;
    report = function(argFoo) { // Original name: setShouldSyncTextSettings
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            michal['type'] = report;
            report = {};
            oscard = {};
            oscard['shouldSync'] = golfie;
            if(golfie) { _fun00004_ip = 283; continue _fun00003 }
 58:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 9;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.InlineAttachmentMedia;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['inlineAttachmentMedia'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.InlineEmbedMedia;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['inlineEmbedMedia'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.RenderEmbeds;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['renderEmbeds'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.RenderReactions;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['renderReactions'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.AnimateEmoji;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['animateEmoji'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(entity)(yankee);
            romeon = yankee.AnimateStickers;
            yankee = romeon.getSetting;
            yankee = yankee.bind(romeon)();
            golfie['animateStickers'] = yankee;
            option = offset[option];
            option = verify.bind(entity)(option);
            verify = option.GifAutoPlay;
            option = verify.getSetting;
            option = option.bind(verify)();
            golfie['gifAutoPlay'] = option;
            _fun00004_ip = 285; continue _fun00003;
 283:
            golfie = {};
 285:
            oscard['settings'] = golfie;
            report['text'] = oscard;
            michal['changes'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    tangon['setShouldSyncTextSettings'] = report;
    report = function(argFoo) { // Original name: setShouldSyncAppearanceSettings
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            michal['type'] = report;
            report = {};
            oscard = {};
            oscard['shouldSync'] = golfie;
            if(golfie) { _fun00006_ip = 153; continue _fun00005 }
 55:
            golfie = {};
            verify = _closure1_slot5;
            verify = verify.theme;
            golfie['theme'] = verify;
            verify = {};
            offset = _closure1_slot3;
            yankee = offset.gradientPreset;
            offset = null;
            romeon = offset == yankee;
            offset = undefined;
            if(romeon) { _fun00006_ip = 100; continue _fun00005 }
 95:
            offset = yankee.id;
 100:
            verify['backgroundGradientPresetId'] = offset;
            golfie['clientThemeSettings'] = verify;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 9;
            option = offset[option];
            option = verify.bind(entity)(option);
            verify = option.DeveloperMode;
            option = verify.getSetting;
            option = option.bind(verify)();
            golfie['developerMode'] = option;
            _fun00006_ip = 155; continue _fun00005;
 153:
            golfie = {};
 155:
            oscard['settings'] = golfie;
            report['appearance'] = oscard;
            michal['changes'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    tangon['setShouldSyncAppearanceSettings'] = report;
    report = function(argFoo) { // Original name: applySettingsOverride
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_OVERRIDE_APPLY';
        michal['type'] = report;
        report = argFoo;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['applySettingsOverride'] = report;
    report = function(argFoo) { // Original name: clearSettingsOverride
        golfie = 0;
        report = copyRestArgs(golfie);
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'USER_SETTINGS_OVERRIDE_CLEAR';
        michal['type'] = oscard;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['clearSettingsOverride'] = report;
    report = function(argFoo) { // Original name: updateLocale
        michal = argFoo;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 5;
        tangon = golfie[michal];
        zuuluu = undefined;
        tangon = oscard.bind(zuuluu)(tangon);
        report = tangon.PreloadedUserSettingsActionCreators;
        tangon = report.updateAsync;
        michal = golfie[michal];
        michal = oscard.bind(zuuluu)(michal);
        michal = michal.UserSettingsDelay;
        zuuluu = michal.INFREQUENT_USER_ACTION;
        michal = 'localization';
        entity = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.StringValue;
            zuuluu = tangon.create;
            michal = {};
            report = _closure2_slot0;
            michal['value'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = argFoo;
            michal['locale'] = zuuluu;
            return entity;
        };
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    tangon['updateLocale'] = report;
    report = function(argFoo) { // Original name: updateTheme
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 8;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.dispatch;
            tangon = {};
            golfie = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            tangon['type'] = golfie;
            golfie = {};
            option = {};
            verify = {};
            verify['theme'] = offset;
            option['settings'] = verify;
            golfie['appearance'] = option;
            tangon['changes'] = golfie;
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot4;
            tangon = report.shouldSync;
            oscard = 'appearance';
            tangon = tangon.bind(report)(oscard);
            if(!tangon) { _fun00008_ip = 167; continue _fun00007 }
 102:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 5;
            tangon = option[zuuluu];
            tangon = golfie.bind(entity)(tangon);
            report = tangon.PreloadedUserSettingsActionCreators;
            tangon = report.updateAsync;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.UserSettingsDelay;
            zuuluu = zuuluu.INFREQUENT_USER_ACTION;
            michal = function(argFoo) {
                zuuluu = _closure1_slot8;
                michal = _closure2_slot0;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = argFoo;
                michal['theme'] = zuuluu;
                return entity;
            };
            michal = tangon.bind(report)(oscard, michal, zuuluu);
 167:
            return entity;
        }
    };
    tangon['updateTheme'] = report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/UserSettingsActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: saveGuildFolders
        michal = argFoo;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 5;
        tangon = golfie[michal];
        zuuluu = undefined;
        tangon = oscard.bind(zuuluu)(tangon);
        report = tangon.PreloadedUserSettingsActionCreators;
        tangon = report.updateAsync;
        michal = golfie[michal];
        michal = oscard.bind(zuuluu)(michal);
        michal = michal.UserSettingsDelay;
        zuuluu = michal.FREQUENT_USER_ACTION;
        michal = 'guildFolders';
        entity = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 6;
                    entity = tangon[entity];
                    golfie = undefined;
                    entity = zuuluu.bind(golfie)(entity);
                    tangon = entity.GuildFolder;
                    zuuluu = tangon.create;
                    entity = {};
                    oscard = report.guildIds;
                    entity['guildIds'] = oscard;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = report.folderId;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00010_ip = 136; continue _fun00009 }
 69:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    option = zuuluu.Int64Value;
                    oscard = option.create;
                    zuuluu = {};
                    verify = global;
                    offset = verify.String;
                    verify = report.folderId;
                    verify = offset.bind(golfie)(verify);
                    zuuluu['value'] = verify;
                    zuuluu = oscard.bind(option)(zuuluu);
                    entity['id'] = zuuluu;
 136:
                    zuuluu = report.folderColor;
                    if(!(tangon != zuuluu)) { _fun00010_ip = 213; continue _fun00009 }
 146:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    option = zuuluu.UInt64Value;
                    oscard = option.create;
                    zuuluu = {};
                    verify = global;
                    offset = verify.String;
                    verify = report.folderColor;
                    verify = offset.bind(golfie)(verify);
                    zuuluu['value'] = verify;
                    zuuluu = oscard.bind(option)(zuuluu);
                    entity['color'] = zuuluu;
 213:
                    zuuluu = report.folderName;
                    zuuluu = tangon != zuuluu;
                    if(!zuuluu) { _fun00010_ip = 240; continue _fun00009 }
 226:
                    oscard = report.folderName;
                    tangon = '';
                    zuuluu = tangon !== oscard;
 240:
                    if(!zuuluu) { _fun00010_ip = 310; continue _fun00009 }
 243:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 7;
                    michal = tangon[michal];
                    michal = zuuluu.bind(golfie)(michal);
                    tangon = michal.StringValue;
                    zuuluu = tangon.create;
                    michal = {};
                    oscard = global;
                    oscard = oscard.String;
                    report = report.folderName;
                    report = oscard.bind(golfie)(report);
                    michal['value'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    entity['name'] = michal;
 310:
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(entity);
            entity = argFoo;
            entity['folders'] = michal;
            entity = undefined;
            return entity;
        };
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    zuuluu['saveGuildFolders'] = tangon;
    michal = function(argFoo) { // Original name: saveClientTheme
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            report = arguments[1];
            kiloes = michal.backgroundGradientPresetId;
            var _closure2_slot0 = kiloes;
            backup = michal.customUserThemeSettings;
            var _closure2_slot1 = backup;
            romeon = michal.theme;
            var _closure2_slot2 = romeon;
            zuuluu = michal.useSystemTheme;
            oscard = undefined;
            if(!(report === oscard)) { _fun00012_ip = 85; continue _fun00011 }
 50:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            michal = tangon.bind(oscard)(michal);
            michal = michal.UserSettingsDelay;
            report = michal.INFREQUENT_USER_ACTION;
 85:
            michal = 'system';
            foxtra = michal === romeon;
            tangon = _closure1_slot7;
            if(foxtra) { _fun00012_ip = 111; continue _fun00011 }
 103:
            sizing = tangon.OFF;
            _fun00012_ip = 117; continue _fun00011;
 111:
            sizing = tangon.ON;
 117:
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00012_ip = 126; continue _fun00011 }
 123:
            sizing = zuuluu;
 126:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 8;
            option = golfie[zuuluu];
            offset = tangon.bind(oscard)(option);
            verify = offset.dispatch;
            option = {};
            yankee = 'UNSYNCED_USER_SETTINGS_UPDATE';
            option['type'] = yankee;
            yankee = {};
            yankee['useSystemTheme'] = sizing;
            option['settings'] = yankee;
            option = verify.bind(offset)(option);
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(oscard)(zuuluu);
            tangon = golfie.dispatch;
            zuuluu = {};
            option = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            zuuluu['type'] = option;
            option = {};
            verify = {};
            offset = {};
            yankee = {};
            yankee['backgroundGradientPresetId'] = kiloes;
            yankee['customUserThemeSettings'] = backup;
            offset['clientThemeSettings'] = yankee;
            yankee = undefined;
            if(foxtra) { _fun00012_ip = 233; continue _fun00011 }
 230:
            yankee = romeon;
 233:
            offset['theme'] = yankee;
            verify['settings'] = offset;
            option['appearance'] = verify;
            zuuluu['changes'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot4;
            zuuluu = golfie.shouldSync;
            tangon = 'appearance';
            zuuluu = zuuluu.bind(golfie)(tangon);
            if(zuuluu) { _fun00012_ip = 282; continue _fun00011 }
 280:
            return oscard;
 282:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = michal.PreloadedUserSettingsActionCreators;
            michal = zuuluu.updateAsync;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot8;
                    tangon = _closure2_slot2;
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    zuuluu['theme'] = tangon;
                    oscard = {};
                    tangon = _closure2_slot0;
                    oscard['backgroundGradientPresetId'] = tangon;
                    michal = _closure2_slot1;
                    oscard['customUserThemeSettings'] = michal;
                    michal = {};
                    tangon = oscard.backgroundGradientPresetId;
                    report = null;
                    option = report != tangon;
                    tangon = undefined;
                    if(!option) { _fun00014_ip = 117; continue _fun00013 }
 69:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 7;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    verify = golfie.UInt32Value;
                    option = verify.create;
                    golfie = {};
                    offset = oscard.backgroundGradientPresetId;
                    golfie['value'] = offset;
                    tangon = option.bind(verify)(golfie);
 117:
                    michal['backgroundGradientPresetId'] = tangon;
                    tangon = oscard.customUserThemeSettings;
                    report = report != tangon;
                    tangon = undefined;
                    if(!report) { _fun00014_ip = 208; continue _fun00013 }
 137:
                    report = {};
                    golfie = oscard.customUserThemeSettings;
                    golfie = golfie.colors;
                    report['colors'] = golfie;
                    golfie = oscard.customUserThemeSettings;
                    golfie = golfie.gradientColorStops;
                    report['gradientColorStops'] = golfie;
                    golfie = oscard.customUserThemeSettings;
                    golfie = golfie.gradientAngle;
                    report['gradientAngle'] = golfie;
                    oscard = oscard.customUserThemeSettings;
                    oscard = oscard.baseMix;
                    report['baseMix'] = oscard;
                    tangon = report;
 208:
                    michal['customUserThemeSettings'] = tangon;
                    zuuluu['clientThemeSettings'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(tangon, entity, report);
            return entity;
        }
    };
    zuuluu['saveClientTheme'] = michal;
    return entity;
})();