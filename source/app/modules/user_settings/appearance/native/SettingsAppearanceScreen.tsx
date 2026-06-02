// app/modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DEFAULT_FONT_SCALE_STORE_STATE;
    var _closure1_slot7 = var8;
    var4 = var4.useFontScaleStore;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MobileSetting;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 13;
        var4 = var6[var4];
        var5 = undefined;
        var7 = var3.bind(var5)(var4);
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.shouldSync;
                var2 = 'appearance';
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchUserCustomThemes;
                var1 = var1.bind(var2)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var7.bind(var5)(var4);
        var7 = _closure1_slot0;
        var4 = 15;
        var4 = var6[var4];
        var9 = var7.bind(var5)(var4);
        var8 = var9.useStateFromStoresObject;
        var4 = _closure1_slot6;
        var7 = new Array(2);
        var7[0] = var4;
        var4 = _closure1_slot4;
        var7[1] = var4;
        var4 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var3 = _closure1_slot6;
                var3 = var3.theme;
                var1['theme'] = var3;
                var2 = _closure1_slot4;
                var4 = var2.gradientPreset;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = var4.id;
case 4:
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                var2 = var3;
case 6:
                var1['gradientPresetId'] = var2;
                return var1;
            }
        };
        var4 = var8.bind(var9)(var7, var4);
        var9 = var4.theme;
        var8 = var4.gradientPresetId;
        var4 = function useFontScalingData() {
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var _closure3_slot0 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
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
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 5:
                    var3 = _closure3_slot0;
                    var4 = var3.persistedFontScale;
                    var3 = var3.fontScale;
                    if(!(var4 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure3_slot0;
                    var4 = var3.persistedIsClassicChatFontScaleEnabled;
                    var3 = var3.isClassicChatFontScaleEnabled;
                    if(!(var4 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                    var6 = _closure3_slot1;
                    var4 = var6.setOptions;
                    var3 = {};
                    var3['headerRight'] = var1;
                    var3 = var4.bind(var6)(var3);
                    _fun0003_ip = 7; continue _fun0003;
case 8:
                    var4 = _closure3_slot1;
                    var3 = var4.setOptions;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 9;
                    var5 = var11[var5];
                    var8 = var10.bind(var1)(var5);
                    var7 = var8.getRenderHeaderTextButton;
                    var5 = 10;
                    var6 = var11[var5];
                    var6 = var10.bind(var1)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var5 = var11[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPH+;
                    var6 = var6.bind(var9)(var5);
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
case 7:
                    return var1;
                }
            };
            var3 = var6.bind(var5)(var3, var4);
            var4 = var5.useEffect;
            var3 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var3 = _closure1_slot8;
                        var2 = var3.setState;
                        var1 = _closure1_slot7;
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
        var4 = var4.bind(var5)();
        var10 = _closure1_slot3;
        var7 = var10.useMemo;
        var4 = function() {
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var10 = undefined;
            var3 = var11.bind(var10)(var1);
            var2 = var3.createList;
            var1 = {};
            var5 = {};
            var6 = _closure1_slot9;
            var7 = var6.MOBILE_VISUAL_REFRESH;
            var4 = new Array(1);
            var4[0] = var7;
            var5['settings'] = var4;
            var4 = new Array(8);
            var4[0] = var5;
            var5 = {};
            var7 = 10;
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var8 = var8.t;
            var8 = var8.Ksh3ik;
            var8 = var9.bind(var13)(var8);
            var5['label'] = var8;
            var9 = var6.APPEARANCE_THEME_PICKER;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var6.SYNC_THEME;
            var8[1] = var9;
            var5['settings'] = var8;
            var4[1] = var5;
            var5 = {};
            var9 = var6.DEFAULT_GUILD_THEME_PREFERENCE;
            var8 = new Array(1);
            var8[0] = var9;
            var5['settings'] = var8;
            var4[2] = var5;
            var5 = {};
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var8 = var8.t;
            var8 = var8.i19n5L;
            var8 = var9.bind(var13)(var8);
            var5['label'] = var8;
            var9 = var6.ANDROID_FONT_SCALE;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var6.ANDROID_CLASSIC_CHAT_FONT_SCALE;
            var8[1] = var9;
            var5['settings'] = var8;
            var4[3] = var5;
            var5 = {};
            var9 = var6.DMS_MESSAGE_PREVIEWS;
            var8 = new Array(1);
            var8[0] = var9;
            var5['settings'] = var8;
            var4[4] = var5;
            var5 = {};
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var8 = var8.t;
            var8 = var8.lEde7i;
            var8 = var9.bind(var13)(var8);
            var5['label'] = var8;
            var9 = var6.DMS_HAPPENING_NOW_CARDS;
            var8 = new Array(1);
            var8[0] = var9;
            var5['settings'] = var8;
            var4[5] = var5;
            var5 = {};
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.t;
            var7 = var7["5h0QOP"];
            var7 = var8.bind(var9)(var7);
            var5['label'] = var7;
            var8 = var6.EXACT_SEARCH_RESULT_COUNTS;
            var7 = new Array(1);
            var7[0] = var8;
            var5['settings'] = var7;
            var4[6] = var5;
            var5 = {};
            var7 = var6.TIMESTAMP_HOUR_CYCLE;
            var6 = new Array(1);
            var6[0] = var7;
            var5['settings'] = var6;
            var4[7] = var5;
            var1['sections'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var7.bind(var10)(var4, var1);
        var4 = _closure1_slot10;
        var2 = 17;
        var2 = var6[var2];
        var3 = var3.bind(var5)(var2);
        var2 = {};
        var2['node'] = var1;
        var1 = global;
        var1 = var1.HermesInternal;
        var7 = var1.concat;
        var6 = '';
        var1 = '-';
        var1 = var7.bind(var6)(var9, var1, var8);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();