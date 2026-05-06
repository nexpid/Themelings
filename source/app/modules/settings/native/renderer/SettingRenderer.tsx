// app/modules/settings/native/renderer/SettingRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function formatSettingsRowTrailing(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var3 = 'string';
            var2 = typeof var6;
            var1 = var6;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.TableRow;
            var3 = var2.TrailingText;
            var2 = {};
            var2['text'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function SettingSearchResultBreadcrumbs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.breadcrumbs;
            var3 = var8.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 31;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var7 = var8.join;
            var6 = ' → ';
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function SettingSearchResultIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.IconComponent;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 37;
            var1 = var8[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useToken;
            var7 = _closure1_slot1;
            var1 = 10;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_ICON_SIZE;
            var7 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.TableRow;
            var3 = var1.Icon;
            var1 = {};
            var1['IconComponent'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var4 = _closure1_slot14;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = {};
            var6['width'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function RouteSettingSearchResult(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.settingData;
            var12 = var3.IconComponent;
            var9 = var3.title;
            var _closure2_slot0 = var9;
            var10 = var3.breadcrumbs;
            var11 = var3.setting;
            var _closure2_slot1 = var11;
            var6 = var3.index;
            var _closure2_slot2 = var6;
            var7 = var3.total;
            var _closure2_slot3 = var7;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 13;
            var3 = var13[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useStackNavigation;
            var14 = var3.bind(var8)();
            var _closure2_slot4 = var14;
            var13 = var2.screen;
            var _closure2_slot5 = var13;
            var2 = var2.usePreNavigationAction;
            var3 = null;
            var3 = var3 == var2;
            var15 = undefined;
            if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var15 = var2.bind(var4)();
case 11:
            _closure2_slot6 = var15;
            var8 = _closure1_slot7;
            var3 = var8.useCallback;
            var2 = new Array(7);
            var2[0] = var15;
            var2[1] = var6;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var11;
            var2[5] = var9;
            var2[6] = var7;
            var1 = function() {
                var4 = _closure1_slot10;
                var3 = var4.setState;
                var2 = {};
                var6 = _closure2_slot1;
                var2['selected'] = var6;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 38;
                var2 = var4[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.trackSettingSearchResultPress;
                var2 = {};
                var2['setting'] = var6;
                var6 = _closure2_slot0;
                var2['title'] = var6;
                var6 = _closure2_slot5;
                var9 = var6.route;
                var2['route'] = var9;
                var9 = _closure2_slot2;
                var2['searchResultPosition'] = var9;
                var9 = _closure2_slot3;
                var2['numSearchResults'] = var9;
                var2 = var7.bind(var8)(var2);
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.onRouteSettingOnPress;
                var2 = {};
                var7 = _closure2_slot4;
                var2['navigation'] = var7;
                var2['screen'] = var6;
                var5 = _closure2_slot6;
                var2['preNavigationAction'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var9;
            var1['onPress'] = var8;
            var8 = true;
            var1['arrow'] = var8;
            var11 = _closure1_slot14;
            var9 = _closure1_slot29;
            var8 = {};
            var8['IconComponent'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var9 = _closure1_slot14;
            var8 = _closure1_slot28;
            var5 = {};
            var5['breadcrumbs'] = var10;
            var5 = var9.bind(var4)(var8, var5);
            var1['subLabel'] = var5;
            var5 = 0;
            var5 = var5 === var6;
            var1['start'] = var5;
            var5 = 1;
            var5 = var7 - var5;
            var5 = var6 === var5;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function PressableSettingSearchResult(arg1) {
        var3 = arg1;
        var2 = var3.settingData;
        var13 = var3.IconComponent;
        var10 = var3.title;
        var _closure2_slot0 = var10;
        var11 = var3.breadcrumbs;
        var12 = var3.setting;
        var _closure2_slot1 = var12;
        var7 = var3.index;
        var _closure2_slot2 = var7;
        var8 = var3.total;
        var _closure2_slot3 = var8;
        var9 = var2.onPress;
        var _closure2_slot4 = var9;
        var5 = var2.withArrow;
        var4 = _closure1_slot7;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var12;
        var2[1] = var10;
        var2[2] = var7;
        var2[3] = var8;
        var2[4] = var9;
        var1 = function() {
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 38;
            var2 = var5[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var6 = var7.trackSettingSearchResultPress;
            var3 = {};
            var8 = _closure2_slot1;
            var3['setting'] = var8;
            var8 = _closure2_slot0;
            var3['title'] = var8;
            var8 = _closure2_slot2;
            var3['searchResultPosition'] = var8;
            var8 = _closure2_slot3;
            var3['numSearchResults'] = var8;
            var3 = var6.bind(var7)(var3);
            var3 = 39;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var2 = _closure2_slot4;
            var2 = var2.bind(var1)();
            return var1;
        };
        var9 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot14;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 12;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['label'] = var10;
        var1['onPress'] = var9;
        var12 = _closure1_slot14;
        var10 = _closure1_slot29;
        var9 = {};
        var9['IconComponent'] = var13;
        var9 = var12.bind(var3)(var10, var9);
        var1['icon'] = var9;
        var10 = _closure1_slot14;
        var9 = _closure1_slot28;
        var6 = {};
        var6['breadcrumbs'] = var11;
        var6 = var10.bind(var3)(var9, var6);
        var1['subLabel'] = var6;
        var6 = 0;
        var6 = var6 === var7;
        var1['start'] = var6;
        var6 = 1;
        var6 = var8 - var6;
        var6 = var7 === var6;
        var1['end'] = var6;
        var1['arrow'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function StaticSettingSearchResult(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = var3.settingData;
            var15 = var3.IconComponent;
            var9 = var3.title;
            var _closure2_slot0 = var9;
            var14 = var3.breadcrumbs;
            var12 = var3.setting;
            var _closure2_slot1 = var12;
            var6 = var3.index;
            var _closure2_slot2 = var6;
            var7 = var3.total;
            var _closure2_slot3 = var7;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = var2.useTrailing;
            var5 = null;
            var3 = var5 == var2;
            var11 = undefined;
            if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var11 = var2.bind(var4)();
case 13:
            _closure2_slot4 = var11;
            var10 = _closure1_slot7;
            var3 = var10.useCallback;
            var2 = new Array(5);
            var2[0] = var6;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var9;
            var2[4] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 38;
                    var5 = var4[var2];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var5);
                    var6 = var7.trackSettingSearchResultPress;
                    var5 = {};
                    var8 = _closure2_slot1;
                    var5['setting'] = var8;
                    var8 = _closure2_slot0;
                    var5['title'] = var8;
                    var8 = _closure2_slot2;
                    var5['searchResultPosition'] = var8;
                    var8 = _closure2_slot3;
                    var5['numSearchResults'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var5 = 24;
                    var5 = var4[var5];
                    var6 = var3.bind(var2)(var5);
                    var5 = var6.copy;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var6)(var1);
                    var1 = 25;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var10)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 12;
            var1 = var1[var12];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var9;
            var13 = var5 != var11;
            var9 = undefined;
            if(!var13) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var9 = var10;
case 17:
            var1['onPress'] = var9;
            var13 = _closure1_slot14;
            var10 = _closure1_slot29;
            var9 = {};
            var9['IconComponent'] = var15;
            var9 = var13.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var13 = _closure1_slot14;
            var10 = _closure1_slot28;
            var9 = {};
            var9['breadcrumbs'] = var14;
            var9 = var13.bind(var4)(var10, var9);
            var1['subLabel'] = var9;
            var9 = var5 != var11;
            var5 = null;
            if(!var9) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var10 = _closure1_slot14;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var8 = var8.TableRow;
            var9 = var8.TrailingText;
            var8 = {};
            var8['text'] = var11;
            var5 = var10.bind(var4)(var9, var8);
case 19:
            var1['trailing'] = var5;
            var5 = 0;
            var5 = var5 === var6;
            var1['start'] = var5;
            var5 = 1;
            var5 = var7 - var5;
            var5 = var6 === var5;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function SettingSearchResultPlaceholder(arg1) {
        var1 = arg1;
        var7 = var1.start;
        var6 = var1.end;
        var1 = _closure1_slot17;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = var3.useState;
        var1 = function() {
            var1 = {};
            var2 = global;
            var3 = var2.Math;
            var2 = var3.random;
            var3 = var2.bind(var3)();
            var2 = 80;
            var3 = var2 * var3;
            var2 = 10;
            var2 = var2 + var3;
            var3 = var2 | 0;
            var2 = '%';
            var2 = var3 + var2;
            var1['width'] = var2;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot5;
        var1 = 1;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var11 = var2[var1];
        var3 = _closure1_slot14;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['start'] = var7;
        var1['end'] = var6;
        var9 = _closure1_slot14;
        var7 = _closure1_slot8;
        var6 = {};
        var12 = var8.placeholderUsername;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var6['style'] = var10;
        var6 = var9.bind(var4)(var7, var6);
        var1['label'] = var6;
        var7 = _closure1_slot14;
        var6 = _closure1_slot8;
        var5 = {};
        var8 = var8.placeholderAvatar;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = ['onSlidingComplete', 'step', 'startIcon', 'endIcon', 'minimumValue', 'maximumValue', 'valueLabel', 'defaultValue', 'onValueChange'];
    var _closure1_slot3 = var1;
    var1 = ['settingData'];
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var9 = var4.bind(var1)(var5);
    var _closure1_slot7 = var9;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot12 = var5;
    var4 = var4.NodeType;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot14 = var5;
    var5 = var4.Fragment;
    var _closure1_slot15 = var5;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var10 = {};
    var11 = 10;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginTop'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginBottom'] = var13;
    var4['slider'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['sliderTitle'] = var10;
    var10 = {};
    var13 = 26;
    var10['top'] = var13;
    var4['radioSettingHighlight'] = var10;
    var10 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var4['defaultIcon'] = var10;
    var10 = {};
    var13 = 11;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var15 = var14.AVATAR_SIZE_MAP;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AvatarSizes;
    var14 = var14.REFRESH_MEDIUM_32;
    var14 = var15[var14];
    var10['width'] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AVATAR_SIZE_MAP;
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.AvatarSizes;
    var13 = var13.REFRESH_MEDIUM_32;
    var13 = var14[var13];
    var10['height'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var10['borderRadius'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var13;
    var4['placeholderAvatar'] = var10;
    var10 = {};
    var13 = 20;
    var10['height'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var11;
    var4['placeholderUsername'] = var10;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var5 = var9.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var8 = var4.useTitle;
            var2 = var4.useTrailing;
            var10 = var4.usePreNavigationAction;
            var17 = var4.screen;
            var _closure2_slot0 = var17;
            var7 = var4.useDescription;
            var3 = var4.useIsDisabled;
            var11 = var4.variant;
            var6 = var4.start;
            var5 = var4.end;
            var15 = var4.IconComponent;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 13;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.useStackNavigation;
            var18 = var12.bind(var13)();
            var _closure2_slot1 = var18;
            var14 = var8.bind(var4)();
            var8 = null;
            var12 = var8 == var10;
            var16 = undefined;
            if(var12) { _fun0007_ip = 21; continue _fun0007 }
case 22:
            var16 = var10.bind(var4)();
case 21:
            _closure2_slot2 = var16;
            var10 = var8 == var7;
            var13 = undefined;
            if(var10) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var13 = var7.bind(var4)();
case 23:
            var7 = var8 == var3;
            var12 = undefined;
            if(var7) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var12 = var3.bind(var4)();
case 25:
            var3 = var8 == var2;
            var10 = undefined;
            if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var10 = var2.bind(var4)();
case 27:
            var7 = _closure1_slot7;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var17;
            var2[2] = var16;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.onRouteSettingOnPress;
                var2 = {};
                var6 = _closure2_slot1;
                var2['navigation'] = var6;
                var6 = _closure2_slot0;
                var2['screen'] = var6;
                var5 = _closure2_slot2;
                var2['preNavigationAction'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 12;
            var1 = var1[var16];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var14;
            var1['subLabel'] = var13;
            var1['disabled'] = var12;
            var12 = true;
            var1['arrow'] = var12;
            var1['variant'] = var11;
            var12 = var8 != var15;
            var11 = null;
            if(!var12) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var14 = _closure1_slot14;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var16];
            var12 = var13.bind(var4)(var12);
            var12 = var12.TableRow;
            var13 = var12.Icon;
            var12 = {};
            var12['IconComponent'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 29:
            var1['icon'] = var11;
            var11 = var8 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var9 = _closure1_slot27;
            var8 = var9.bind(var4)(var10);
case 31:
            var1['trailing'] = var8;
            var1['onPress'] = var7;
            var1['start'] = var6;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = function GuildSelectDefaultIcon(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var8 = var1.size;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var8 = 'sm';
case 33:
            var1 = _closure1_slot17;
            var7 = var1.bind(var4)();
            var9 = 32;
            var1 = 'xs';
            if(!(var1 === var8)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var9 = 24;
case 35:
            var3 = _closure1_slot14;
            var2 = _closure1_slot8;
            var1 = {};
            var6 = {};
            var10 = var7.defaultIcon;
            var11 = var6;
            var7 = copyDataProperties(var11, var10);
            var7 = 'width';
            var6[6] = var9;
            var7 = 'height';
            var6[6] = var9;
            var7 = 3;
            var9 = var9 / var7;
            var7 = 'borderRadius';
            var6[6] = var9;
            var1['style'] = var6;
            var7 = _closure1_slot14;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 17;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ClydeIcon;
            var5 = {};
            var9 = 'white';
            var5['color'] = var9;
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var8 = var9.memo;
    var5 = function(arg1) {
        var5 = arg1;
        var2 = var5.useSelectedGuildId;
        var3 = null;
        var4 = Object.create(var3);
        var3 = 0;
        var4['useSelectedGuildId'] = var3;
        var12 = {};
        var11 = var5;
        var10 = var4;
        var8 = copyDataProperties(var12, var11, var10);
        var4 = undefined;
        var3 = var2.bind(var4)();
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var9 = var6.bind(var4)(var2);
        var7 = var9.useStateFromStores;
        var2 = _closure1_slot11;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var7.bind(var9)(var6, var2);
        var _closure2_slot1 = var2;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 15;
                var4 = var6[var4];
                var6 = undefined;
                var7 = var5.bind(var6)(var4);
                var5 = var7.useStateFromStores;
                var8 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var8;
                var1 = function() {
                    var3 = _closure1_slot11;
                    var2 = var3.getGuild;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var7)(var4, var1);
                var1 = _closure1_slot12;
                if(!(var3 !== var1)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 39; continue _fun0009 }
case 14:
                var1 = var4.name;
case 39:
                if(!(var3 == var1)) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.XBwns+;
                var1 = var4.bind(var5)(var3);
case 40:
                _fun0009_ip = 42; continue _fun0009;
case 37:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.OMVg25;
                var1 = var3.bind(var4)(var2);
case 42:
                return var1;
            }
        };
        var9 = var2.bind(var4)(var3);
        var _closure2_slot2 = var9;
        var6 = _closure1_slot7;
        var3 = var6.memo;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 43; continue _fun0010 }
case 2:
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 18;
                var1 = var8[var6];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.GuildIconSizes;
                var6 = var6.SMALL_32;
                var1['size'] = var6;
                var5 = _closure2_slot1;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                _fun0010_ip = 44; continue _fun0010;
case 43:
                var5 = _closure1_slot14;
                var4 = _closure1_slot19;
                var3 = undefined;
                var2 = {};
                var1 = var5.bind(var3)(var4, var2);
case 44:
                return var1;
            }
        };
        var6 = var3.bind(var6)(var2);
        var7 = _closure1_slot7;
        var3 = var7.useCallback;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() {
            var1 = _closure2_slot2;
            return var1;
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot21;
        var1 = {};
        var12 = var1;
        var11 = var8;
        var8 = copyDataProperties(var12, var11);
        var5 = _closure1_slot13;
        var8 = var5.PRESSABLE;
        var5 = 'type';
        var1[4] = var8;
        var5 = 'useTitle';
        var1[4] = var7;
        var7 = true;
        var5 = 'withArrow';
        var1[4] = var7;
        var5 = 'IconComponent';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot20 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var9 = var4.setting;
            var14 = var4.onPress;
            var5 = var4.useTitle;
            var3 = var4.useDescription;
            var2 = var4.useIsDisabled;
            var1 = var4.useTrailing;
            var19 = var4.variant;
            var16 = var4.withArrow;
            var11 = var4.start;
            var10 = var4.end;
            var20 = var4.IconComponent;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var6 = var6[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var6);
            var6 = var8.useHighlightSettingItem;
            var6 = var6.bind(var8)(var9);
            var18 = var5.bind(var4)();
            var15 = null;
            var5 = var15 == var3;
            var17 = undefined;
            if(var5) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var17 = var3.bind(var4)();
case 45:
            var3 = var15 == var2;
            var12 = undefined;
            if(var3) { _fun0011_ip = 47; continue _fun0011 }
case 48:
            var12 = var2.bind(var4)();
case 47:
            var2 = var15 == var1;
            var13 = undefined;
            if(var2) { _fun0011_ip = 49; continue _fun0011 }
case 50:
            var13 = var1.bind(var4)();
case 49:
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = 12;
            var5 = var5[var21];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableRow;
            var5 = {};
            var5['label'] = var18;
            var5['subLabel'] = var17;
            var5['arrow'] = var16;
            var5['variant'] = var19;
            var16 = var15 != var20;
            var15 = null;
            if(!var16) { _fun0011_ip = 51; continue _fun0011 }
case 52:
            var18 = _closure1_slot14;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var21];
            var16 = var17.bind(var4)(var16);
            var16 = var16.TableRow;
            var17 = var16.Icon;
            var16 = {};
            var16['IconComponent'] = var20;
            var16['variant'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 51:
            var5['icon'] = var15;
            var5['onPress'] = var14;
            var5['disabled'] = var12;
            var12 = _closure1_slot27;
            var12 = var12.bind(var4)(var13);
            var5['trailing'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0011_ip = 53; continue _fun0011 }
case 54:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 53:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot21 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var9 = var4.setting;
            var12 = var4.onValueChange;
            var5 = var4.useTitle;
            var2 = var4.useDescription;
            var1 = var4.useIsDisabled;
            var3 = var4.useValue;
            var14 = var4.variant;
            var11 = var4.start;
            var10 = var4.end;
            var20 = var4.IconComponent;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var6 = var6[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var6);
            var6 = var8.useHighlightSettingItem;
            var6 = var6.bind(var8)(var9);
            var18 = var5.bind(var4)();
            var15 = var3.bind(var4)();
            var16 = null;
            var3 = var16 == var2;
            var17 = undefined;
            if(var3) { _fun0012_ip = 55; continue _fun0012 }
case 56:
            var17 = var2.bind(var4)();
case 55:
            var2 = var16 == var1;
            var13 = undefined;
            if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 21:
            var13 = var1.bind(var4)();
case 57:
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 21;
            var5 = var19[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableSwitchRow;
            var5 = {};
            var5['label'] = var18;
            var5['subLabel'] = var17;
            var17 = var16 != var20;
            var16 = null;
            if(!var17) { _fun0012_ip = 58; continue _fun0012 }
case 59:
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 12;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.TableRow;
            var18 = var17.Icon;
            var17 = {};
            var17['IconComponent'] = var20;
            var17['variant'] = var14;
            var16 = var19.bind(var4)(var18, var17);
case 58:
            var5['icon'] = var16;
            var5['value'] = var15;
            var5['variant'] = var14;
            var5['disabled'] = var13;
            var5['onValueChange'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0012_ip = 60; continue _fun0012 }
case 61:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 60:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot22 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var8 = var4.setting;
            var3 = var4.useTitle;
            var2 = var4.useValue;
            var1 = var4.useOptions;
            var12 = var4.onValueChange;
            var5 = _closure1_slot17;
            var4 = undefined;
            var10 = var5.bind(var4)();
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 19;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useHighlightSettingItem;
            var6 = var5.bind(var6)(var8);
            var13 = var3.bind(var4)();
            var3 = var2.bind(var4)();
            var14 = var1.bind(var4)();
            var2 = 'number';
            var1 = typeof var3;
            var11 = var3;
            if(!(var2 === var1)) { _fun0013_ip = 62; continue _fun0013 }
case 63:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var11 = var2.bind(var1)(var3);
case 62:
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 22;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableRadioGroup;
            var5 = {};
            var5['title'] = var13;
            var5['defaultValue'] = var11;
            var5['onChange'] = var12;
            var12 = false;
            var5['hasIcons'] = var12;
            var13 = var14.map;
            var12 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.value;
                    var3 = 'number';
                    var2 = typeof var2;
                    if(!(var3 !== var2)) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                    var6 = var1.value;
                    _fun0014_ip = 66; continue _fun0014;
case 64:
                    var4 = var1.value;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var6 = var3.bind(var2)(var4);
case 66:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.TableRadioRow;
                    var2 = {};
                    var2['value'] = var6;
                    var6 = var1.label;
                    var2['label'] = var6;
                    var6 = var1.subLabel;
                    var2['subLabel'] = var6;
                    var6 = var1.disabled;
                    var2['disabled'] = var6;
                    var1 = var1.value;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12);
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5, var11);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 20;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {'start': true, 'end': true};
            var10 = var10.radioSettingHighlight;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 67:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot23 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var12 = var4.setting;
            var8 = var4.useTitle;
            var19 = var4.variant;
            var5 = var4.useTrailing;
            var2 = var4.useIsDisabled;
            var3 = var4.useDescription;
            var11 = var4.start;
            var10 = var4.end;
            var20 = var4.IconComponent;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 19;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.useHighlightSettingItem;
            var6 = var6.bind(var9)(var12);
            var18 = var8.bind(var4)();
            var12 = null;
            var8 = var12 == var5;
            var16 = undefined;
            if(var8) { _fun0015_ip = 56; continue _fun0015 }
case 44:
            var16 = var5.bind(var4)();
case 56:
            _closure2_slot0 = var16;
            var5 = var12 == var3;
            var14 = undefined;
            if(var5) { _fun0015_ip = 57; continue _fun0015 }
case 21:
            var14 = var3.bind(var4)();
case 57:
            var3 = var12 == var2;
            var13 = undefined;
            if(var3) { _fun0015_ip = 23; continue _fun0015 }
case 24:
            var13 = var2.bind(var4)();
case 23:
            var5 = _closure1_slot7;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 69; continue _fun0016 }
case 2:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var5 = var4[var2];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var5);
                    var5 = var6.copy;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var1);
                    var1 = 25;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var17 = 12;
            var5 = var5[var17];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableRow;
            var5 = {};
            var5['label'] = var18;
            var5['subLabel'] = var14;
            var18 = var12 != var16;
            var14 = null;
            if(!var18) { _fun0015_ip = 70; continue _fun0015 }
case 71:
            var14 = var15;
case 70:
            var5['onPress'] = var14;
            var5['variant'] = var19;
            var5['disabled'] = var13;
            var14 = var12 != var20;
            var13 = null;
            if(!var14) { _fun0015_ip = 72; continue _fun0015 }
case 73:
            var18 = _closure1_slot14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var14 = var14.TableRow;
            var15 = var14.Icon;
            var14 = {};
            var14['IconComponent'] = var20;
            var14['variant'] = var19;
            var13 = var18.bind(var4)(var15, var14);
case 72:
            var5['icon'] = var13;
            var13 = var12 != var16;
            var12 = null;
            if(!var13) { _fun0015_ip = 74; continue _fun0015 }
case 75:
            var15 = _closure1_slot14;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var13 = var13.TableRow;
            var14 = var13.TrailingText;
            var13 = {};
            var13['text'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 74:
            var5['trailing'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 76:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot24 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var6 = var3.setting;
            var2 = var3.useTitle;
            var1 = var3.useValue;
            var18 = var3.onValueChange;
            var19 = var3.maximum;
            var11 = var3.start;
            var10 = var3.end;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 19;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.useHighlightSettingItem;
            var6 = var3.bind(var5)(var6);
            var3 = _closure1_slot17;
            var15 = var3.bind(var4)();
            var12 = var2.bind(var4)();
            var2 = null;
            var2 = var2 == var1;
            var20 = undefined;
            if(var2) { _fun0017_ip = 78; continue _fun0017 }
case 79:
            var20 = var1.bind(var4)();
case 78:
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 12;
            var5 = var21[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableRow;
            var5 = {};
            var5['label'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var14 = _closure1_slot14;
            var13 = _closure1_slot8;
            var12 = {};
            var15 = var15.slider;
            var12['style'] = var15;
            var17 = _closure1_slot14;
            var16 = _closure1_slot1;
            var15 = 26;
            var15 = var21[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['value'] = var20;
            var15['maxVolume'] = var19;
            var15['onValueChange'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5['subLabel'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 80:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot25 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var7 = var1.useTitle;
            var6 = var1.start;
            var5 = var1.end;
            var3 = var1.useProps;
            var1 = var1.useTrailing;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var34 = var7.bind(var4)();
            var12 = var3.bind(var4)();
            var3 = var12.onSlidingComplete;
            var _closure2_slot0 = var3;
            var7 = var12.step;
            var33 = 0.1;
            if(!(var4 !== var7)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
            var33 = var7;
case 82:
            _closure2_slot1 = var33;
            var29 = var12.startIcon;
            var25 = var12.endIcon;
            var7 = var12.minimumValue;
            var10 = 0;
            var31 = 0;
            if(!(var4 !== var7)) { _fun0018_ip = 26; continue _fun0018 }
case 84:
            var31 = var7;
case 26:
            _closure2_slot2 = var31;
            var7 = var12.maximumValue;
            var9 = 1;
            var28 = var9;
            if(!(var4 !== var7)) { _fun0018_ip = 85; continue _fun0018 }
case 86:
            var28 = var7;
case 85:
            _closure2_slot3 = var28;
            var21 = var12.valueLabel;
            var7 = var12.defaultValue;
            var16 = var9;
            if(!(var4 !== var7)) { _fun0018_ip = 87; continue _fun0018 }
case 88:
            var16 = var7;
case 87:
            _closure2_slot4 = var16;
            var7 = var12.onValueChange;
            _closure2_slot5 = var7;
            var11 = _closure1_slot6;
            var8 = _closure1_slot3;
            var22 = var11.bind(var4)(var12, var8);
            _closure2_slot6 = var22;
            var8 = _closure1_slot17;
            var17 = var8.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var8 = var12[var8];
            var14 = var11.bind(var4)(var8);
            var12 = var14.useStateFromStores;
            var8 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var37 = var12.bind(var14)(var11, var8);
            var12 = _closure1_slot7;
            var11 = var12.useState;
            var8 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = var1.value;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0019_ip = 7; continue _fun0019 }
case 33:
                    var1 = _closure2_slot4;
case 7:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var8);
            var8 = _closure1_slot5;
            var12 = 2;
            var8 = var8.bind(var4)(var11, var12);
            var15 = var8[var10];
            _closure2_slot7 = var15;
            var8 = var8[var9];
            _closure2_slot8 = var8;
            var11 = _closure1_slot7;
            var8 = var11.useState;
            var27 = false;
            var11 = var8.bind(var11)(var27);
            var8 = _closure1_slot5;
            var8 = var8.bind(var4)(var11, var12);
            var14 = var8[var10];
            var8 = var8[var9];
            _closure2_slot9 = var8;
            var11 = _closure1_slot7;
            var10 = var11.useCallback;
            var9 = function() {
                var3 = _closure2_slot9;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = new Array(0);
            var24 = var10.bind(var11)(var9, var8);
            var10 = _closure1_slot7;
            var9 = var10.useCallback;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot5;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0020_ip = 89; continue _fun0020 }
case 5:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var3);
case 89:
                    return var1;
                }
            };
            var32 = var9.bind(var10)(var7, var8);
            _closure2_slot10 = var32;
            var10 = _closure1_slot7;
            var9 = var10.useCallback;
            var8 = new Array(1);
            var8[0] = var3;
            var7 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure2_slot9;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0021_ip = 90; continue _fun0021 }
case 64:
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
case 90:
                    return var1;
                }
            };
            var23 = var9.bind(var10)(var7, var8);
            var9 = _closure1_slot7;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var32;
            var7[1] = var3;
            var3 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0022_ip = 89; continue _fun0022 }
case 5:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
case 89:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3, var7);
            _closure2_slot11 = var9;
            var10 = _closure1_slot7;
            var8 = var10.useCallback;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var9;
            var3 = function() {
                var3 = _closure2_slot11;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var8.bind(var10)(var3, var7);
            var10 = _closure1_slot7;
            var8 = var10.useCallback;
            var7 = new Array(4);
            var7[0] = var9;
            var7[1] = var28;
            var7[2] = var33;
            var7[3] = var15;
            var3 = function() {
                var3 = _closure2_slot11;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var2 = _closure2_slot3;
                var6 = _closure2_slot7;
                var1 = _closure2_slot1;
                var1 = var6 + var1;
                var2 = var4.bind(var5)(var2, var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 27;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 28;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_LIGHT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var8.bind(var10)(var3, var7);
            var8 = _closure1_slot7;
            var7 = var8.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var31;
            var3[2] = var33;
            var3[3] = var15;
            var2 = function() {
                var3 = _closure2_slot11;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var2 = _closure2_slot2;
                var6 = _closure2_slot7;
                var1 = _closure2_slot1;
                var1 = var6 - var1;
                var2 = var4.bind(var5)(var2, var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 27;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 28;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_LIGHT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var30 = var7.bind(var8)(var2, var3);
            var35 = null;
            var2 = var35 == var1;
            var19 = undefined;
            if(var2) { _fun0018_ip = 91; continue _fun0018 }
case 92:
            var19 = var1.bind(var4)();
case 91:
            var3 = _closure1_slot14;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 29;
            var1 = var18[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var1['start'] = var6;
            var1['end'] = var5;
            var5 = 'none';
            var1['shadow'] = var5;
            var1['border'] = var5;
            var7 = _closure1_slot16;
            var8 = 30;
            var5 = var18[var8];
            var5 = var20.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var18[var8];
            var8 = var20.bind(var4)(var8);
            var9 = var8.Stack;
            var8 = {'direction': 'horizontal', 'justify': 'space-between'};
            var11 = _closure1_slot8;
            var10 = {};
            var36 = var17.sliderTitle;
            var10['style'] = var36;
            var38 = _closure1_slot14;
            var36 = 31;
            var18 = var18[var36];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {};
            var39 = 'text-md/semibold';
            var18['variant'] = var39;
            var18['children'] = var34;
            var20 = var38.bind(var4)(var20, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var10['children'] = var18;
            var11 = var7.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var35 != var15;
            if(!var11) { _fun0018_ip = 93; continue _fun0018 }
case 94:
            var20 = _closure1_slot14;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var36];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            if(!(var35 == var21)) { _fun0018_ip = 95; continue _fun0018 }
case 96:
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var35 = 32;
            var35 = var38[var35];
            var36 = var36.bind(var4)(var35);
            var35 = var36.formatPercent;
            var21 = var35.bind(var36)(var37, var15);
case 95:
            var18['children'] = var21;
            var11 = var20.bind(var4)(var19, var18);
case 93:
            var10[1] = var11;
            var8['children'] = var10;
            var9 = var7.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var18 = _closure1_slot14;
            var11 = _closure1_slot8;
            var9 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 33;
            var10 = var20[var10];
            var19 = var19.bind(var4)(var10);
            var10 = var19.isAndroid;
            var19 = var10.bind(var19)();
            var10 = undefined;
            if(!var19) { _fun0018_ip = 97; continue _fun0018 }
case 98:
            var10 = var17.slider;
case 97:
            var9['style'] = var10;
            var21 = _closure1_slot14;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 34;
            var19 = var17[var19];
            var19 = var10.bind(var4)(var19);
            var20 = var19.Slider;
            var19 = {};
            var41 = var19;
            var40 = var22;
            var22 = copyDataProperties(var41, var40);
            var22 = 'accessibilityLabel';
            var19[21] = var34;
            var22 = 'step';
            var19[21] = var33;
            var22 = 'onValueChange';
            var19[21] = var32;
            var22 = 'value';
            var19[21] = var15;
            var22 = 'minimumValue';
            var19[21] = var31;
            var22 = 'maximumValue';
            var19[21] = var28;
            var22 = 'onSlidingStart';
            var19[21] = var24;
            var22 = 'onSlidingComplete';
            var19[21] = var23;
            var28 = _closure1_slot14;
            var22 = 35;
            var23 = var17[var22];
            var23 = var10.bind(var4)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var23['accessible'] = var27;
            var23['onPress'] = var30;
            var23['children'] = var29;
            var24 = var28.bind(var4)(var24, var23);
            var23 = 'startIcon';
            var19[22] = var24;
            var24 = _closure1_slot14;
            var22 = var17[var22];
            var22 = var10.bind(var4)(var22);
            var23 = var22.PressableOpacity;
            var22 = {};
            var22['accessible'] = var27;
            var22['onPress'] = var26;
            var22['children'] = var25;
            var23 = var24.bind(var4)(var23, var22);
            var22 = 'endIcon';
            var19[21] = var23;
            var19 = var21.bind(var4)(var20, var19);
            var9['children'] = var19;
            var9 = var18.bind(var4)(var11, var9);
            var8[1] = var9;
            var11 = _closure1_slot14;
            var9 = 36;
            var9 = var17[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var14 = !var14;
            if(!var14) { _fun0018_ip = 99; continue _fun0018 }
case 100:
            var14 = var15 === var16;
case 99:
            var9['disabled'] = var14;
            var14 = 'secondary';
            var9['variant'] = var14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 16;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["3b//lO"];
            var13 = var14.bind(var15)(var13);
            var9['text'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot26 = var5;
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/native/renderer/SettingRenderer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildSelectDefaultIcon'] = var4;
    var4 = function renderSettingItem(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var7 = var2.setting;
            var1 = var2.settingData;
            var6 = var2.start;
            var5 = var2.end;
            var4 = var1.type;
            var3 = _closure1_slot13;
            var3 = var3.GUILD_SELECTOR;
            if(!(var3 !== var4)) { _fun0023_ip = 101; continue _fun0023 }
case 102:
            var3 = _closure1_slot13;
            var3 = var3.ROUTE;
            if(!(var3 !== var4)) { _fun0023_ip = 103; continue _fun0023 }
case 104:
            var3 = _closure1_slot13;
            var3 = var3.PRESSABLE;
            if(!(var3 !== var4)) { _fun0023_ip = 76; continue _fun0023 }
case 9:
            var3 = _closure1_slot13;
            var3 = var3.TOGGLE;
            if(!(var3 !== var4)) { _fun0023_ip = 105; continue _fun0023 }
case 106:
            var3 = _closure1_slot13;
            var3 = var3.STATIC;
            if(!(var3 !== var4)) { _fun0023_ip = 107; continue _fun0023 }
case 55:
            var3 = _closure1_slot13;
            var3 = var3.VOLUME_SLIDER;
            if(!(var3 !== var4)) { _fun0023_ip = 108; continue _fun0023 }
case 109:
            var3 = _closure1_slot13;
            var3 = var3.RADIO;
            if(!(var3 !== var4)) { _fun0023_ip = 110; continue _fun0023 }
case 40:
            var3 = _closure1_slot13;
            var3 = var3.SLIDER;
            if(!(var3 !== var4)) { _fun0023_ip = 111; continue _fun0023 }
case 112:
            var3 = undefined;
            return var3;
case 111:
            var9 = _closure1_slot14;
            var8 = _closure1_slot26;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 110:
            var9 = _closure1_slot14;
            var8 = _closure1_slot23;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 108:
            var9 = _closure1_slot14;
            var8 = _closure1_slot25;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 107:
            var9 = _closure1_slot14;
            var8 = _closure1_slot24;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 105:
            var9 = _closure1_slot14;
            var8 = _closure1_slot22;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 76:
            var9 = _closure1_slot14;
            var8 = _closure1_slot21;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = 'setting';
            var4[2] = var7;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 103:
            var9 = _closure1_slot14;
            var8 = _closure1_slot18;
            var4 = {};
            var11 = var4;
            var10 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = 'start';
            var4[2] = var6;
            var3 = 'end';
            var4[2] = var5;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var4);
            return var3;
case 101:
            var4 = _closure1_slot14;
            var3 = _closure1_slot20;
            var2 = {};
            var11 = var2;
            var10 = var1;
            var1 = copyDataProperties(var11, var10);
            var1 = 'setting';
            var2[0] = var7;
            var1 = 'start';
            var2[0] = var6;
            var1 = 'end';
            var2[0] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['renderSettingItem'] = var4;
    var4 = function renderSettingSearchResultItem(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = arg1;
            var6 = var3.settingData;
            var5 = _closure1_slot6;
            var2 = _closure1_slot4;
            var4 = undefined;
            var5 = var5.bind(var4)(var3, var2);
            var7 = var6.type;
            var2 = _closure1_slot13;
            var2 = var2.ROUTE;
            if(!(var2 !== var7)) { _fun0024_ip = 87; continue _fun0024 }
case 102:
            var2 = _closure1_slot13;
            var2 = var2.PRESSABLE;
            if(!(var2 !== var7)) { _fun0024_ip = 113; continue _fun0024 }
case 114:
            var2 = _closure1_slot13;
            var2 = var2.STATIC;
            if(!(var2 !== var7)) { _fun0024_ip = 115; continue _fun0024 }
case 116:
            var2 = global;
            var7 = var2.Error;
            var8 = var3.setting;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[SettingRenderer] Found unsupported renderer type for setting: ';
            var10 = var3.bind(var2)(var8);
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var11 = var3;
            var2 = new var11[var7](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 115:
            var7 = _closure1_slot14;
            var3 = _closure1_slot32;
            var2 = {};
            var2['settingData'] = var6;
            var10 = var2;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 113:
            var7 = _closure1_slot14;
            var3 = _closure1_slot31;
            var2 = {};
            var2['settingData'] = var6;
            var10 = var2;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 87:
            var3 = _closure1_slot14;
            var2 = _closure1_slot30;
            var1 = {};
            var1['settingData'] = var6;
            var10 = var1;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderSettingSearchResultItem'] = var4;
    var2 = function renderSettingSearchResultPlaceholderItem(arg1) {
        var1 = arg1;
        var4 = _closure1_slot14;
        var3 = _closure1_slot33;
        var2 = {};
        var5 = var1.start;
        var2['start'] = var5;
        var1 = var1.end;
        var2['end'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderSettingSearchResultPlaceholderItem'] = var2;
    return var1;
})();