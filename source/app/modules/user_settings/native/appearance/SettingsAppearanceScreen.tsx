// app/modules/user_settings/native/appearance/SettingsAppearanceScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DEFAULT_FONT_SCALE_STORE_STATE;
    var _closure1_slot5 = var8;
    var4 = var4.useFontScaleStore;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MobileSetting;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var10 = var3.ClientThemeColorPickerExperiment;
            var8 = var10.useExperiment;
            var5 = {};
            var9 = 'SettingsAppearanceScreen';
            var5['location'] = var9;
            var3 = {};
            var11 = false;
            var3['autoTrackExposure'] = var11;
            var3 = var8.bind(var10)(var5, var3);
            var8 = var3.enabled;
            var3 = var3.mobileRenderingEnabled;
            var5 = 15;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var7 = var5.SavedCustomThemesExperiment;
            var6 = var7.useConfig;
            var5 = {};
            var5['location'] = var9;
            var5 = var6.bind(var7)(var5);
            var5 = var5.enabled;
            var _closure2_slot0 = var5;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = !var3;
case 2:
            var _closure2_slot1 = var8;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot4;
                    var3 = var4.shouldSync;
                    var2 = 'appearance';
                    var1 = var3.bind(var4)(var2);
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchUserCustomThemes;
                    var1 = var1.bind(var2)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var4)(var3);
            var3 = function useFontScalingData() {
                var3 = _closure1_slot6;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var _closure3_slot0 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 6;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.useNativeStackNavigation;
                var7 = var5.bind(var6)();
                var _closure3_slot1 = var7;
                var5 = _closure1_slot3;
                var6 = var5.useEffect;
                var4 = new Array(5);
                var4[0] = var7;
                var7 = var3.fontScale;
                var4[1] = var7;
                var7 = var3.isClassicChatFontScaleEnabled;
                var4[2] = var7;
                var7 = var3.persistedFontScale;
                var4[3] = var7;
                var3 = var3.persistedIsClassicChatFontScaleEnabled;
                var4[4] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var3 = _closure3_slot0;
                        var4 = var3.persistedFontScale;
                        var3 = var3.fontScale;
                        if(!(var4 === var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var3 = _closure3_slot0;
                        var4 = var3.persistedIsClassicChatFontScaleEnabled;
                        var3 = var3.isClassicChatFontScaleEnabled;
                        if(!(var4 === var3)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                        var6 = _closure3_slot1;
                        var4 = var6.setOptions;
                        var3 = {};
                        var3['headerRight'] = var1;
                        var3 = var4.bind(var6)(var3);
                        _fun0003_ip = 8; continue _fun0003;
case 10:
                        var4 = _closure3_slot1;
                        var3 = var4.setOptions;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 8;
                        var5 = var11[var5];
                        var8 = var10.bind(var1)(var5);
                        var7 = var8.getRenderHeaderTextButton;
                        var5 = 9;
                        var6 = var11[var5];
                        var6 = var10.bind(var1)(var6);
                        var9 = var6.intl;
                        var6 = var9.string;
                        var5 = var11[var5];
                        var5 = var10.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var6 = var6.bind(var9)(var5);
                        var5 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.setCustomFontScale;
                            var1 = _closure3_slot0;
                            var2 = var1.fontScale;
                            var1 = var1.isClassicChatFontScaleEnabled;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var5 = var7.bind(var8)(var6, var5);
                        var2['headerRight'] = var5;
                        var2 = var3.bind(var4)(var2);
case 8:
                        return var1;
                    }
                };
                var3 = var6.bind(var5)(var3, var4);
                var4 = var5.useEffect;
                var3 = function() {
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            var3 = _closure1_slot6;
                            var2 = var3.setState;
                            var1 = _closure1_slot5;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = new Array(0);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var3.bind(var4)();
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 9;
                    var5 = var4[var9];
                    var8 = undefined;
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var4[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.Ksh3io;
                    var4 = var5.bind(var6)(var4);
                    var2['label'] = var4;
                    var5 = _closure1_slot7;
                    var6 = var5.APPEARANCE_THEME_PICKER;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = var5.SYNC_THEME;
                    var4[1] = var5;
                    var2['settings'] = var4;
                    if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = var12[var9];
                    var4 = var5.bind(var8)(var4);
                    var7 = var4.intl;
                    var6 = var7.format;
                    var11 = _closure1_slot1;
                    var4 = 12;
                    var4 = var12[var4];
                    var4 = var11.bind(var8)(var4);
                    var5 = var4.v15Ipq;
                    var4 = {};
                    var10 = 13;
                    var10 = var12[var10];
                    var12 = var11.bind(var8)(var10);
                    var11 = var12.getArticleURL;
                    var10 = _closure1_slot8;
                    var10 = var10.CUSTOM_THEMES;
                    var10 = var11.bind(var12)(var10);
                    var4['helpdeskArticle'] = var10;
                    var1 = var6.bind(var7)(var5, var4);
case 13:
                    var2['subLabel'] = var1;
                    var1 = new Array(6);
                    var1[0] = var2;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.i19n5O;
                    var5 = var6.bind(var10)(var5);
                    var2['label'] = var5;
                    var3 = _closure1_slot7;
                    var6 = var3.ANDROID_FONT_SCALE;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var3.ANDROID_CLASSIC_CHAT_FONT_SCALE;
                    var5[1] = var6;
                    var2['settings'] = var5;
                    var1[1] = var2;
                    var2 = {};
                    var6 = var3.DMS_MESSAGE_PREVIEWS;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['settings'] = var5;
                    var1[2] = var2;
                    var2 = {};
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.lEde7u;
                    var5 = var6.bind(var10)(var5);
                    var2['label'] = var5;
                    var6 = var3.DMS_HAPPENING_NOW_CARDS;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['settings'] = var5;
                    var1[3] = var2;
                    var2 = {};
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var4[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.5h0QOD;
                    var4 = var5.bind(var6)(var4);
                    var2['label'] = var4;
                    var5 = var3.EXACT_SEARCH_RESULT_COUNTS;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var2['settings'] = var4;
                    var1[4] = var2;
                    var2 = {};
                    var4 = var3.TIMESTAMP_HOUR_CYCLE;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['settings'] = var3;
                    var1[5] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var1 = 18;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SettingsList;
            var1 = {};
            var1['sections'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/appearance/SettingsAppearanceScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();