// app/actions/UserSettingsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function convertThemeToProto(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.DARK;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot6;
            var2 = var2.LIGHT;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot6;
            var2 = var2.DARKER;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot6;
            var2 = var2.MIDNIGHT;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Theme;
            var2 = var2.DARK;
            return var2;
case 8:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Theme;
            var2 = var2.MIDNIGHT;
            return var2;
case 6:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Theme;
            var2 = var2.DARKER;
            return var2;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Theme;
            var2 = var2.LIGHT;
            return var2;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.Theme;
            var1 = var1.DARK;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.SystemTheme;
    var4 = var4.SystemThemeState;
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = function overrideLocale(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_LOCALE_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['locale'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['overrideLocale'] = var5;
    var5 = function updatedUnsyncedSettings(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UNSYNCED_USER_SETTINGS_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['updatedUnsyncedSettings'] = var5;
    var5 = function setShouldSyncTextSettings(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            var2['type'] = var5;
            var5 = {};
            var6 = {};
            var6['shouldSync'] = var7;
            if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 9;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.InlineAttachmentMedia;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['inlineAttachmentMedia'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.InlineEmbedMedia;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['inlineEmbedMedia'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.RenderEmbeds;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['renderEmbeds'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.RenderReactions;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['renderReactions'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.AnimateEmoji;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['animateEmoji'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var1)(var11);
            var12 = var11.AnimateStickers;
            var11 = var12.getSetting;
            var11 = var11.bind(var12)();
            var7['animateStickers'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var8.GifAutoPlay;
            var8 = var9.getSetting;
            var8 = var8.bind(var9)();
            var7['gifAutoPlay'] = var8;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var7 = {};
case 12:
            var6['settings'] = var7;
            var5['text'] = var6;
            var2['changes'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var4['setShouldSyncTextSettings'] = var5;
    var5 = function setShouldSyncAppearanceSettings(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            var2['type'] = var5;
            var5 = {};
            var6 = {};
            var6['shouldSync'] = var7;
            if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = {};
            var9 = _closure1_slot5;
            var9 = var9.theme;
            var7['theme'] = var9;
            var9 = {};
            var10 = _closure1_slot3;
            var11 = var10.gradientPreset;
            var10 = null;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var10 = var11.id;
case 15:
            var9['backgroundGradientPresetId'] = var10;
            var7['clientThemeSettings'] = var9;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 9;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var8.DeveloperMode;
            var8 = var9.getSetting;
            var8 = var8.bind(var9)();
            var7['developerMode'] = var8;
            _fun0003_ip = 17; continue _fun0003;
case 13:
            var7 = {};
case 17:
            var6['settings'] = var7;
            var5['appearance'] = var6;
            var2['changes'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var4['setShouldSyncAppearanceSettings'] = var5;
    var5 = function applySettingsOverride(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_OVERRIDE_APPLY';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['applySettingsOverride'] = var5;
    var5 = function clearSettingsOverride(arg1) {
        var7 = 0;
        var5 = copyRestArgs(var7);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'USER_SETTINGS_OVERRIDE_CLEAR';
        var2['type'] = var6;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['clearSettingsOverride'] = var5;
    var5 = function updateLocale(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var4 = var7[var2];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var5 = var4.PreloadedUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.UserSettingsDelay;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'localization';
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.StringValue;
            var3 = var4.create;
            var2 = {};
            var5 = _closure2_slot0;
            var2['value'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = arg1;
            var2['locale'] = var3;
            return var1;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var4['updateLocale'] = var5;
    var5 = function updateTheme(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            var4['type'] = var7;
            var7 = {};
            var8 = {};
            var9 = {};
            var9['theme'] = var10;
            var8['settings'] = var9;
            var7['appearance'] = var8;
            var4['changes'] = var7;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot4;
            var4 = var5.shouldSync;
            var6 = 'appearance';
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var4 = var8[var3];
            var4 = var7.bind(var1)(var4);
            var5 = var4.PreloadedUserSettingsActionCreators;
            var4 = var5.updateAsync;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.UserSettingsDelay;
            var3 = var3.INFREQUENT_USER_ACTION;
            var2 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = arg1;
                var2['theme'] = var3;
                return var1;
            };
            var2 = var4.bind(var5)(var6, var2, var3);
case 18:
            return var1;
        }
    };
    var4['updateTheme'] = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/UserSettingsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function saveGuildFolders(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var4 = var7[var2];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var5 = var4.PreloadedUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.UserSettingsDelay;
        var3 = var2.FREQUENT_USER_ACTION;
        var2 = 'guildFolders';
        var1 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var4 = var1.GuildFolder;
                    var3 = var4.create;
                    var1 = {};
                    var6 = var5.guildIds;
                    var1['guildIds'] = var6;
                    var1 = var3.bind(var4)(var1);
                    var3 = var5.folderId;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var8 = var3.Int64Value;
                    var6 = var8.create;
                    var3 = {};
                    var9 = global;
                    var10 = var9.String;
                    var9 = var5.folderId;
                    var9 = var10.bind(var7)(var9);
                    var3['value'] = var9;
                    var3 = var6.bind(var8)(var3);
                    var1['id'] = var3;
case 20:
                    var3 = var5.folderColor;
                    if(!(var4 != var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var8 = var3.UInt64Value;
                    var6 = var8.create;
                    var3 = {};
                    var9 = global;
                    var10 = var9.String;
                    var9 = var5.folderColor;
                    var9 = var10.bind(var7)(var9);
                    var3['value'] = var9;
                    var3 = var6.bind(var8)(var3);
                    var1['color'] = var3;
case 22:
                    var3 = var5.folderName;
                    var3 = var4 != var3;
                    if(!var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var6 = var5.folderName;
                    var4 = '';
                    var3 = var4 !== var6;
case 24:
                    if(!var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var2 = var3.bind(var7)(var2);
                    var4 = var2.StringValue;
                    var3 = var4.create;
                    var2 = {};
                    var6 = global;
                    var6 = var6.String;
                    var5 = var5.folderName;
                    var5 = var6.bind(var7)(var5);
                    var2['value'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1['name'] = var2;
case 26:
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = arg1;
            var1['folders'] = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['saveGuildFolders'] = var4;
    var2 = function saveClientTheme(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = arguments[1];
            var15 = var2.backgroundGradientPresetId;
            var _closure2_slot0 = var15;
            var14 = var2.customUserThemeSettings;
            var _closure2_slot1 = var14;
            var12 = var2.theme;
            var _closure2_slot2 = var12;
            var3 = var2.useSystemTheme;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.UserSettingsDelay;
            var5 = var2.INFREQUENT_USER_ACTION;
case 28:
            var2 = 'system';
            var13 = var2 === var12;
            var4 = _closure1_slot7;
            if(var13) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var16 = var4.OFF;
            _fun0006_ip = 32; continue _fun0006;
case 30:
            var16 = var4.ON;
case 32:
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var16 = var3;
case 33:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var8 = var7[var3];
            var10 = var4.bind(var6)(var8);
            var9 = var10.dispatch;
            var8 = {};
            var11 = 'UNSYNCED_USER_SETTINGS_UPDATE';
            var8['type'] = var11;
            var11 = {};
            var11['useSystemTheme'] = var16;
            var8['settings'] = var11;
            var8 = var9.bind(var10)(var8);
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.dispatch;
            var3 = {};
            var8 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
            var3['type'] = var8;
            var8 = {};
            var9 = {};
            var10 = {};
            var11 = {};
            var11['backgroundGradientPresetId'] = var15;
            var11['customUserThemeSettings'] = var14;
            var10['clientThemeSettings'] = var11;
            var11 = undefined;
            if(var13) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var11 = var12;
case 35:
            var10['theme'] = var11;
            var9['settings'] = var10;
            var8['appearance'] = var9;
            var3['changes'] = var8;
            var3 = var4.bind(var7)(var3);
            var7 = _closure1_slot4;
            var3 = var7.shouldSync;
            var4 = 'appearance';
            var3 = var3.bind(var7)(var4);
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            return var6;
case 37:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.PreloadedUserSettingsActionCreators;
            var2 = var3.updateAsync;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var3['theme'] = var4;
                    var6 = {};
                    var4 = _closure2_slot0;
                    var6['backgroundGradientPresetId'] = var4;
                    var2 = _closure2_slot1;
                    var6['customUserThemeSettings'] = var2;
                    var2 = {};
                    var4 = var6.backgroundGradientPresetId;
                    var5 = null;
                    var8 = var5 != var4;
                    var4 = undefined;
                    if(!var8) { _fun0007_ip = 32; continue _fun0007 }
case 21:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var9 = var7.UInt32Value;
                    var8 = var9.create;
                    var7 = {};
                    var10 = var6.backgroundGradientPresetId;
                    var7['value'] = var10;
                    var4 = var8.bind(var9)(var7);
case 32:
                    var2['backgroundGradientPresetId'] = var4;
                    var4 = var6.customUserThemeSettings;
                    var5 = var5 != var4;
                    var4 = undefined;
                    if(!var5) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var5 = {};
                    var7 = var6.customUserThemeSettings;
                    var7 = var7.colors;
                    var5['colors'] = var7;
                    var7 = var6.customUserThemeSettings;
                    var7 = var7.gradientColorStops;
                    var5['gradientColorStops'] = var7;
                    var7 = var6.customUserThemeSettings;
                    var7 = var7.gradientAngle;
                    var5['gradientAngle'] = var7;
                    var6 = var6.customUserThemeSettings;
                    var6 = var6.baseMix;
                    var5['baseMix'] = var6;
                    var4 = var5;
case 39:
                    var2['customUserThemeSettings'] = var4;
                    var3['clientThemeSettings'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var4, var1, var5);
            return var1;
        }
    };
    var3['saveClientTheme'] = var2;
    return var1;
})();