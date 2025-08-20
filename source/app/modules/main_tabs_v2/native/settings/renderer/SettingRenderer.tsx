// app/modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx
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
 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var1 = undefined;
            return var1;
 13:
            var3 = 'string';
            var2 = typeof var6;
            var1 = var6;
            if(!(var3 === var2)) { _fun0001_ip = 80; continue _fun0001 }
 27:
            var5 = _closure1_slot16;
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
 80:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function SettingSearchResultBreadcrumbs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.breadcrumbs;
            var3 = var8.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 92; continue _fun0002 }
 22:
            var5 = _closure1_slot16;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 33;
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
 92:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function SettingSearchResultIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.IconComponent;
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 69; continue _fun0003 }
 14:
            var4 = _closure1_slot16;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var1 = var1.TableRow;
            var2 = var1.Icon;
            var1 = {};
            var1['IconComponent'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            _fun0003_ip = 104; continue _fun0003;
 69:
            var5 = _closure1_slot16;
            var4 = _closure1_slot8;
            var3 = {};
            var2 = {};
            var6 = _closure1_slot15;
            var2['width'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 104:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function RouteSettingSearchResult(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = var3.searchResultData;
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
            if(var3) { _fun0004_ip = 134; continue _fun0004 }
 130:
            var15 = var2.bind(var4)();
 134:
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
                var2 = _closure1_slot11;
                var6 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 39;
                var2 = var4[var2];
                var8 = var3.bind(var1)(var2);
                var7 = var8.trackSettingSearchResultPress;
                var2 = {};
                var2['setting'] = var6;
                var6 = _closure2_slot0;
                var2['title'] = var6;
                var6 = _closure2_slot5;
                var10 = var6.route;
                var2['route'] = var10;
                var9 = _closure1_slot10;
                var9 = var9.bind(var1)();
                var2['searchTerm'] = var9;
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
            var3 = _closure1_slot16;
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
            var11 = _closure1_slot16;
            var9 = _closure1_slot32;
            var8 = {};
            var8['IconComponent'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var9 = _closure1_slot16;
            var8 = _closure1_slot31;
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
    var _closure1_slot33 = var1;
    var1 = function PressableSettingSearchResult(arg1) {
        var3 = arg1;
        var2 = var3.searchResultData;
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
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 39;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackSettingSearchResultPress;
            var3 = {};
            var7 = _closure2_slot1;
            var3['setting'] = var7;
            var7 = _closure2_slot0;
            var3['title'] = var7;
            var6 = _closure1_slot10;
            var6 = var6.bind(var1)();
            var3['searchTerm'] = var6;
            var6 = _closure2_slot2;
            var3['searchResultPosition'] = var6;
            var6 = _closure2_slot3;
            var3['numSearchResults'] = var6;
            var3 = var4.bind(var5)(var3);
            var2 = _closure2_slot4;
            var2 = var2.bind(var1)();
            return var1;
        };
        var9 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot16;
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
        var12 = _closure1_slot16;
        var10 = _closure1_slot32;
        var9 = {};
        var9['IconComponent'] = var13;
        var9 = var12.bind(var3)(var10, var9);
        var1['icon'] = var9;
        var10 = _closure1_slot16;
        var9 = _closure1_slot31;
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
    var _closure1_slot34 = var1;
    var1 = function StaticSettingSearchResult(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3.searchResultData;
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
            if(var3) { _fun0005_ip = 87; continue _fun0005 }
 83:
            var11 = var2.bind(var4)();
 87:
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
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 151; continue _fun0006 }
 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var5 = var4[var2];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var5);
                    var6 = var7.trackSettingSearchResultPress;
                    var5 = {};
                    var9 = _closure2_slot1;
                    var5['setting'] = var9;
                    var9 = _closure2_slot0;
                    var5['title'] = var9;
                    var8 = _closure1_slot10;
                    var8 = var8.bind(var2)();
                    var5['searchTerm'] = var8;
                    var8 = _closure2_slot2;
                    var5['searchResultPosition'] = var8;
                    var8 = _closure2_slot3;
                    var5['numSearchResults'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var5 = 26;
                    var5 = var4[var5];
                    var6 = var3.bind(var2)(var5);
                    var5 = var6.copy;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var6)(var1);
                    var1 = 27;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
 151:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var10)(var1, var2);
            var3 = _closure1_slot16;
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
            if(!var13) { _fun0005_ip = 188; continue _fun0005 }
 185:
            var9 = var10;
 188:
            var1['onPress'] = var9;
            var13 = _closure1_slot16;
            var10 = _closure1_slot32;
            var9 = {};
            var9['IconComponent'] = var15;
            var9 = var13.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var13 = _closure1_slot16;
            var10 = _closure1_slot31;
            var9 = {};
            var9['breadcrumbs'] = var14;
            var9 = var13.bind(var4)(var10, var9);
            var1['subLabel'] = var9;
            var9 = var5 != var11;
            var5 = null;
            if(!var9) { _fun0005_ip = 296; continue _fun0005 }
 251:
            var10 = _closure1_slot16;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var8 = var8.TableRow;
            var9 = var8.TrailingText;
            var8 = {};
            var8['text'] = var11;
            var5 = var10.bind(var4)(var9, var8);
 296:
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
    var _closure1_slot35 = var1;
    var1 = ['onSlidingComplete', 'step', 'startIcon', 'endIcon', 'minimumValue', 'maximumValue', 'valueLabel', 'defaultValue', 'onValueChange'];
    var _closure1_slot3 = var1;
    var1 = ['searchResultData'];
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
    var4 = var6.bind(var1)(var4);
    var5 = var4.getSettingSearchQuery;
    var _closure1_slot10 = var5;
    var4 = var4.setSelectedSearchResult;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot13 = var5;
    var4 = var4.RendererType;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.TABLE_ROW_ICON_SIZE;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot16 = var5;
    var5 = var4.Fragment;
    var _closure1_slot17 = var5;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var10 = {};
    var11 = 11;
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
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BRAND;
    var10['backgroundColor'] = var11;
    var4['defaultIcon'] = var10;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var5 = var9.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var2 = var4.useTrailing;
            var10 = var4.usePreNavigationAction;
            var17 = var4.screen;
            var _closure2_slot0 = var17;
            var14 = var4.title;
            var7 = var4.useDescription;
            var3 = var4.useIsDisabled;
            var11 = var4.variant;
            var6 = var4.start;
            var5 = var4.end;
            var15 = var4.IconComponent;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 13;
            var8 = var13[var8];
            var12 = var12.bind(var4)(var8);
            var8 = var12.useStackNavigation;
            var18 = var8.bind(var12)();
            var _closure2_slot1 = var18;
            var8 = null;
            var12 = var8 == var10;
            var16 = undefined;
            if(var12) { _fun0007_ip = 122; continue _fun0007 }
 118:
            var16 = var10.bind(var4)();
 122:
            _closure2_slot2 = var16;
            var10 = var8 == var7;
            var13 = undefined;
            if(var10) { _fun0007_ip = 139; continue _fun0007 }
 135:
            var13 = var7.bind(var4)();
 139:
            var7 = var8 == var3;
            var12 = undefined;
            if(var7) { _fun0007_ip = 152; continue _fun0007 }
 148:
            var12 = var3.bind(var4)();
 152:
            var3 = var8 == var2;
            var10 = undefined;
            if(var3) { _fun0007_ip = 165; continue _fun0007 }
 161:
            var10 = var2.bind(var4)();
 165:
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
            var3 = _closure1_slot16;
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
            if(!var12) { _fun0007_ip = 313; continue _fun0007 }
 268:
            var14 = _closure1_slot16;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var16];
            var12 = var13.bind(var4)(var12);
            var12 = var12.TableRow;
            var13 = var12.Icon;
            var12 = {};
            var12['IconComponent'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 313:
            var1['icon'] = var11;
            var11 = var8 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 335; continue _fun0007 }
 326:
            var9 = _closure1_slot30;
            var8 = var9.bind(var4)(var10);
 335:
            var1['trailing'] = var8;
            var1['onPress'] = var7;
            var1['start'] = var6;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = function GuildSelectDefaultIcon(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var8 = var1.size;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0008_ip = 18; continue _fun0008 }
 14:
            var8 = 'sm';
 18:
            var1 = _closure1_slot19;
            var7 = var1.bind(var4)();
            var9 = 32;
            var1 = 'xs';
            if(!(var1 === var8)) { _fun0008_ip = 43; continue _fun0008 }
 40:
            var9 = 24;
 43:
            var3 = _closure1_slot16;
            var2 = _closure1_slot8;
            var1 = {};
            var6 = {};
            var10 = var7.defaultIcon;
            var11 = var6;
            var7 = copyDataProperties(var11, var10);
            var7 = 'width';
            var6[var7] = var9;
            var7 = 'height';
            var6[var7] = var9;
            var7 = 3;
            var9 = var9 / var7;
            var7 = 'borderRadius';
            var6[var7] = var9;
            var1['style'] = var6;
            var7 = _closure1_slot16;
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
    var _closure1_slot21 = var4;
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
        var2 = _closure1_slot12;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var3 = _closure1_slot12;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var7.bind(var9)(var6, var2);
        var _closure2_slot1 = var2;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 15;
                var4 = var6[var4];
                var6 = undefined;
                var7 = var5.bind(var6)(var4);
                var5 = var7.useStateFromStores;
                var8 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var8;
                var1 = function() {
                    var3 = _closure1_slot12;
                    var2 = var3.getGuild;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var7)(var4, var1);
                var1 = _closure1_slot13;
                if(!(var3 !== var1)) { _fun0009_ip = 151; continue _fun0009 }
 72:
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 88; continue _fun0009 }
 83:
                var1 = var4.name;
 88:
                if(!(var3 == var1)) { _fun0009_ip = 149; continue _fun0009 }
 92:
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
                var3 = var3.XBwns7;
                var1 = var4.bind(var5)(var3);
 149:
                _fun0009_ip = 208; continue _fun0009;
 151:
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
                var2 = var2.OMVg29;
                var1 = var3.bind(var4)(var2);
 208:
                return var1;
            }
        };
        var7 = var2.bind(var4)(var3);
        var3 = _closure1_slot7;
        var2 = var3.memo;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 89; continue _fun0010 }
 13:
                var4 = _closure1_slot16;
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
                _fun0010_ip = 110; continue _fun0010;
 89:
                var5 = _closure1_slot16;
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = {};
                var1 = var5.bind(var3)(var4, var2);
 110:
                return var1;
            }
        };
        var6 = var2.bind(var3)(var1);
        var3 = _closure1_slot16;
        var2 = _closure1_slot23;
        var1 = {};
        var12 = var1;
        var11 = var8;
        var8 = copyDataProperties(var12, var11);
        var5 = _closure1_slot14;
        var8 = var5.PRESSABLE;
        var5 = 'type';
        var1[var5] = var8;
        var5 = 'title';
        var1[var5] = var7;
        var7 = true;
        var5 = 'withArrow';
        var1[var5] = var7;
        var5 = 'IconComponent';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot22 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var8 = var4.setting;
            var14 = var4.onPress;
            var18 = var4.title;
            var3 = var4.useDescription;
            var2 = var4.useIsDisabled;
            var1 = var4.useTrailing;
            var19 = var4.variant;
            var16 = var4.withArrow;
            var11 = var4.start;
            var10 = var4.end;
            var20 = var4.IconComponent;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 19;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.useHighlightSettingItem;
            var6 = var5.bind(var6)(var8);
            var15 = null;
            var5 = var15 == var3;
            var17 = undefined;
            if(var5) { _fun0011_ip = 114; continue _fun0011 }
 110:
            var17 = var3.bind(var4)();
 114:
            var3 = var15 == var2;
            var12 = undefined;
            if(var3) { _fun0011_ip = 127; continue _fun0011 }
 123:
            var12 = var2.bind(var4)();
 127:
            var2 = var15 == var1;
            var13 = undefined;
            if(var2) { _fun0011_ip = 140; continue _fun0011 }
 136:
            var13 = var1.bind(var4)();
 140:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
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
            if(!var16) { _fun0011_ip = 258; continue _fun0011 }
 209:
            var18 = _closure1_slot16;
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
 258:
            var5['icon'] = var15;
            var5['onPress'] = var14;
            var5['disabled'] = var12;
            var12 = _closure1_slot30;
            var12 = var12.bind(var4)(var13);
            var5['trailing'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0011_ip = 349; continue _fun0011 }
 309:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 349:
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var9 = var1.setting;
            var12 = var1.onValueChange;
            var18 = var1.title;
            var3 = var1.useDescription;
            var2 = var1.useIsDisabled;
            var5 = var1.useValue;
            var14 = var1.variant;
            var11 = var1.start;
            var10 = var1.end;
            var20 = var1.IconComponent;
            var1 = var1.useTitle;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var6 = var6[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var6);
            var6 = var8.useHighlightSettingItem;
            var6 = var6.bind(var8)(var9);
            var15 = var5.bind(var4)();
            var16 = null;
            var5 = var16 == var3;
            var17 = undefined;
            if(var5) { _fun0012_ip = 119; continue _fun0012 }
 115:
            var17 = var3.bind(var4)();
 119:
            var3 = var16 == var2;
            var13 = undefined;
            if(var3) { _fun0012_ip = 132; continue _fun0012 }
 128:
            var13 = var2.bind(var4)();
 132:
            var2 = var16 == var1;
            var19 = undefined;
            if(var2) { _fun0012_ip = 145; continue _fun0012 }
 141:
            var19 = var1.bind(var4)();
 145:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 21;
            var5 = var21[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TableSwitchRow;
            var5 = {};
            if(!(var16 != var19)) { _fun0012_ip = 194; continue _fun0012 }
 191:
            var18 = var19;
 194:
            var5['label'] = var18;
            var5['subLabel'] = var17;
            var17 = var16 != var20;
            var16 = null;
            if(!var17) { _fun0012_ip = 264; continue _fun0012 }
 212:
            var19 = _closure1_slot16;
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
 264:
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
            if(!var6) { _fun0012_ip = 350; continue _fun0012 }
 310:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 350:
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
        var1 = arg1;
        var6 = var1.title;
        var10 = var1.setting;
        var3 = var1.useOptions;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 19;
        var7 = var8[var4];
        var4 = undefined;
        var9 = var2.bind(var4)(var7);
        var7 = var9.useHighlightSettingItem;
        var7 = var7.bind(var9)(var10);
        var _closure2_slot0 = var7;
        var7 = var3.bind(var4)();
        var _closure2_slot1 = var7;
        var3 = _closure1_slot16;
        var1 = 22;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableRowGroup;
        var1 = {};
        var1['title'] = var6;
        var6 = false;
        var1['hasIcons'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var12 = arg2;
                var5 = _closure1_slot18;
                var4 = _closure1_slot8;
                var3 = {};
                var10 = _closure1_slot16;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 23;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var9 = var6.TableCheckboxRow;
                var7 = {};
                var6 = var1.label;
                var7['label'] = var6;
                var6 = var1.label;
                var7['accessibilityLabel'] = var6;
                var6 = var1.subLabel;
                var7['subLabel'] = var6;
                var6 = var1.checked;
                var7['checked'] = var6;
                var6 = var1.onPress;
                var7['onPress'] = var6;
                var6 = 0;
                var14 = var6 === var12;
                var7['start'] = var14;
                var6 = _closure2_slot1;
                var6 = var6.length;
                var13 = 1;
                var6 = var6 - var13;
                var6 = var12 === var6;
                var7['end'] = var6;
                var6 = var1.label;
                var7 = var10.bind(var2)(var9, var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = _closure2_slot0;
                if(!var7) { _fun0013_ip = 223; continue _fun0013 }
 166:
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 20;
                var8 = var15[var8];
                var9 = var9.bind(var2)(var8);
                var8 = {};
                var8['start'] = var14;
                var11 = _closure2_slot1;
                var11 = var11.length;
                var11 = var11 - var13;
                var11 = var12 === var11;
                var8['end'] = var11;
                var7 = var10.bind(var2)(var9, var8);
 223:
                var6[1] = var7;
                var3['children'] = var6;
                var1 = var1.label;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot25 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var6 = var3.setting;
            var13 = var3.title;
            var2 = var3.useValue;
            var1 = var3.useOptions;
            var12 = var3.onValueChange;
            var3 = _closure1_slot19;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useHighlightSettingItem;
            var6 = var3.bind(var5)(var6);
            var3 = var2.bind(var4)();
            var14 = var1.bind(var4)();
            var2 = 'number';
            var1 = typeof var3;
            var11 = var3;
            if(!(var2 === var1)) { _fun0014_ip = 120; continue _fun0014 }
 98:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var11 = var2.bind(var1)(var3);
 120:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 24;
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
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.value;
                    var3 = 'number';
                    var2 = typeof var2;
                    if(!(var3 !== var2)) { _fun0015_ip = 26; continue _fun0015 }
 19:
                    var6 = var1.value;
                    _fun0015_ip = 53; continue _fun0015;
 26:
                    var4 = var1.value;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var6 = var3.bind(var2)(var4);
 53:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
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
            if(!var6) { _fun0014_ip = 274; continue _fun0014 }
 224:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 20;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {'start': true, 'end': true};
            var10 = var10.radioSettingHighlight;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 274:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot26 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var9 = var4.setting;
            var18 = var4.title;
            var19 = var4.variant;
            var5 = var4.useTrailing;
            var2 = var4.useIsDisabled;
            var3 = var4.useDescription;
            var11 = var4.start;
            var10 = var4.end;
            var20 = var4.IconComponent;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 19;
            var6 = var12[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.useHighlightSettingItem;
            var6 = var6.bind(var8)(var9);
            var12 = null;
            var8 = var12 == var5;
            var16 = undefined;
            if(var8) { _fun0016_ip = 109; continue _fun0016 }
 105:
            var16 = var5.bind(var4)();
 109:
            _closure2_slot0 = var16;
            var5 = var12 == var3;
            var14 = undefined;
            if(var5) { _fun0016_ip = 126; continue _fun0016 }
 122:
            var14 = var3.bind(var4)();
 126:
            var3 = var12 == var2;
            var13 = undefined;
            if(var3) { _fun0016_ip = 139; continue _fun0016 }
 135:
            var13 = var2.bind(var4)();
 139:
            var5 = _closure1_slot7;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0017_ip = 75; continue _fun0017 }
 13:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var5 = var4[var2];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var5);
                    var5 = var6.copy;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var1);
                    var1 = 27;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
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
            if(!var18) { _fun0016_ip = 232; continue _fun0016 }
 229:
            var14 = var15;
 232:
            var5['onPress'] = var14;
            var5['variant'] = var19;
            var5['disabled'] = var13;
            var14 = var12 != var20;
            var13 = null;
            if(!var14) { _fun0016_ip = 302; continue _fun0016 }
 253:
            var18 = _closure1_slot16;
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
 302:
            var5['icon'] = var13;
            var13 = var12 != var16;
            var12 = null;
            if(!var13) { _fun0016_ip = 360; continue _fun0016 }
 315:
            var15 = _closure1_slot16;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var13 = var13.TableRow;
            var14 = var13.TrailingText;
            var13 = {};
            var13['text'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 360:
            var5['trailing'] = var12;
            var5['start'] = var11;
            var5['end'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0016_ip = 430; continue _fun0016 }
 390:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 430:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot27 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var5 = var2.setting;
            var12 = var2.title;
            var1 = var2.useValue;
            var18 = var2.onValueChange;
            var19 = var2.maximum;
            var11 = var2.start;
            var10 = var2.end;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useHighlightSettingItem;
            var6 = var2.bind(var3)(var5);
            var2 = _closure1_slot19;
            var15 = var2.bind(var4)();
            var2 = null;
            var2 = var2 == var1;
            var20 = undefined;
            if(var2) { _fun0018_ip = 101; continue _fun0018 }
 97:
            var20 = var1.bind(var4)();
 101:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
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
            var14 = _closure1_slot16;
            var13 = _closure1_slot8;
            var12 = {};
            var15 = var15.slider;
            var12['style'] = var15;
            var17 = _closure1_slot16;
            var16 = _closure1_slot1;
            var15 = 28;
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
            if(!var6) { _fun0018_ip = 289; continue _fun0018 }
 249:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['start'] = var11;
            var7['end'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 289:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot28 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var34 = var1.title;
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
            var12 = var3.bind(var4)();
            var7 = var12.onSlidingComplete;
            var _closure2_slot0 = var7;
            var3 = var12.step;
            var33 = 0.1;
            if(!(var4 !== var3)) { _fun0019_ip = 115; continue _fun0019 }
 112:
            var33 = var3;
 115:
            _closure2_slot1 = var33;
            var29 = var12.startIcon;
            var25 = var12.endIcon;
            var3 = var12.minimumValue;
            var10 = 0;
            var31 = 0;
            if(!(var4 !== var3)) { _fun0019_ip = 148; continue _fun0019 }
 145:
            var31 = var3;
 148:
            _closure2_slot2 = var31;
            var3 = var12.maximumValue;
            var16 = 1;
            var28 = var16;
            if(!(var4 !== var3)) { _fun0019_ip = 171; continue _fun0019 }
 168:
            var28 = var3;
 171:
            _closure2_slot3 = var28;
            var21 = var12.valueLabel;
            var8 = var12.defaultValue;
            var3 = var16;
            if(!(var4 !== var8)) { _fun0019_ip = 197; continue _fun0019 }
 194:
            var3 = var8;
 197:
            _closure2_slot4 = var3;
            var8 = var12.onValueChange;
            _closure2_slot5 = var8;
            var11 = _closure1_slot6;
            var9 = _closure1_slot3;
            var22 = var11.bind(var4)(var12, var9);
            _closure2_slot6 = var22;
            var9 = _closure1_slot19;
            var17 = var9.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 15;
            var9 = var12[var9];
            var14 = var11.bind(var4)(var9);
            var12 = var14.useStateFromStores;
            var9 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var37 = var12.bind(var14)(var11, var9);
            var12 = _closure1_slot7;
            var11 = var12.useState;
            var9 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = var1.value;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 1;
                    if(!var3) { _fun0020_ip = 27; continue _fun0020 }
 24:
                    var1 = var2;
 27:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9);
            var12 = _closure1_slot5;
            var11 = 2;
            var9 = var12.bind(var4)(var9, var11);
            var15 = var9[var10];
            _closure2_slot7 = var15;
            var9 = var9[var16];
            _closure2_slot8 = var9;
            var14 = _closure1_slot7;
            var9 = var14.useState;
            var27 = false;
            var9 = var9.bind(var14)(var27);
            var9 = var12.bind(var4)(var9, var11);
            var14 = var9[var10];
            var9 = var9[var16];
            _closure2_slot9 = var9;
            var12 = _closure1_slot7;
            var11 = var12.useCallback;
            var10 = function() {
                var3 = _closure2_slot9;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var24 = var11.bind(var12)(var10, var9);
            var11 = _closure1_slot7;
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot5;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0021_ip = 36; continue _fun0021 }
 27:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var32 = var10.bind(var11)(var8, var9);
            _closure2_slot10 = var32;
            var11 = _closure1_slot7;
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var7;
            var8 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var4 = _closure2_slot9;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0022_ip = 38; continue _fun0022 }
 26:
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
 38:
                    return var1;
                }
            };
            var23 = var10.bind(var11)(var8, var9);
            var10 = _closure1_slot7;
            var9 = var10.useCallback;
            var8 = new Array(2);
            var8[0] = var32;
            var8[1] = var7;
            var7 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0023_ip = 36; continue _fun0023 }
 27:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var7, var8);
            _closure2_slot11 = var9;
            var10 = _closure1_slot7;
            var8 = var10.useCallback;
            var7 = new Array(2);
            var7[0] = var3;
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
                var3 = 29;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 30;
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
                var3 = 29;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 30;
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
            if(var2) { _fun0019_ip = 635; continue _fun0019 }
 631:
            var19 = var1.bind(var4)();
 635:
            var3 = _closure1_slot16;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 31;
            var1 = var18[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var1['start'] = var6;
            var1['end'] = var5;
            var5 = 'none';
            var1['shadow'] = var5;
            var1['border'] = var5;
            var7 = _closure1_slot18;
            var8 = 32;
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
            var38 = _closure1_slot16;
            var36 = 33;
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
            if(!var11) { _fun0019_ip = 922; continue _fun0019 }
 836:
            var20 = _closure1_slot16;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var36];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            if(!(var35 == var21)) { _fun0019_ip = 912; continue _fun0019 }
 880:
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var35 = 34;
            var35 = var38[var35];
            var36 = var36.bind(var4)(var35);
            var35 = var36.formatPercent;
            var21 = var35.bind(var36)(var37, var15);
 912:
            var18['children'] = var21;
            var11 = var20.bind(var4)(var19, var18);
 922:
            var10[1] = var11;
            var8['children'] = var10;
            var9 = var7.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var18 = _closure1_slot16;
            var11 = _closure1_slot8;
            var9 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 35;
            var10 = var20[var10];
            var19 = var19.bind(var4)(var10);
            var10 = var19.isAndroid;
            var19 = var10.bind(var19)();
            var10 = undefined;
            if(!var19) { _fun0019_ip = 994; continue _fun0019 }
 988:
            var10 = var17.slider;
 994:
            var9['style'] = var10;
            var21 = _closure1_slot16;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 36;
            var19 = var17[var19];
            var19 = var10.bind(var4)(var19);
            var20 = var19.Slider;
            var19 = {};
            var41 = var19;
            var40 = var22;
            var22 = copyDataProperties(var41, var40);
            var22 = 'accessibilityLabel';
            var19[var22] = var34;
            var22 = 'step';
            var19[var22] = var33;
            var22 = 'onValueChange';
            var19[var22] = var32;
            var22 = 'value';
            var19[var22] = var15;
            var22 = 'minimumValue';
            var19[var22] = var31;
            var22 = 'maximumValue';
            var19[var22] = var28;
            var22 = 'onSlidingStart';
            var19[var22] = var24;
            var22 = 'onSlidingComplete';
            var19[var22] = var23;
            var28 = _closure1_slot16;
            var22 = 37;
            var23 = var17[var22];
            var23 = var10.bind(var4)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var23['accessible'] = var27;
            var23['onPress'] = var30;
            var23['children'] = var29;
            var24 = var28.bind(var4)(var24, var23);
            var23 = 'startIcon';
            var19[var23] = var24;
            var24 = _closure1_slot16;
            var22 = var17[var22];
            var22 = var10.bind(var4)(var22);
            var23 = var22.PressableOpacity;
            var22 = {};
            var22['accessible'] = var27;
            var22['onPress'] = var26;
            var22['children'] = var25;
            var23 = var24.bind(var4)(var23, var22);
            var22 = 'endIcon';
            var19[var22] = var23;
            var19 = var21.bind(var4)(var20, var19);
            var9['children'] = var19;
            var9 = var18.bind(var4)(var11, var9);
            var8[1] = var9;
            var11 = _closure1_slot16;
            var9 = 38;
            var9 = var17[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var14 = !var14;
            if(!var14) { _fun0019_ip = 1267; continue _fun0019 }
 1263:
            var14 = var16 === var15;
 1267:
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
            var13 = var13.3b//lJ;
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
    var _closure1_slot29 = var5;
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildSelectDefaultIcon'] = var4;
    var4 = function renderSettingItem(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = arg1;
            var7 = var2.setting;
            var1 = var2.settingData;
            var6 = var2.start;
            var5 = var2.end;
            var4 = var1.type;
            var3 = _closure1_slot14;
            var3 = var3.GUILD_SELECTOR;
            if(!(var4 !== var3)) { _fun0024_ip = 692; continue _fun0024 }
 50:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var9 = undefined;
            var8 = var4.bind(var9)(var3);
            var4 = var8.transformSettingTitle;
            var3 = var1.title;
            var11 = var4.bind(var8)(var3);
            var4 = var1.type;
            var3 = _closure1_slot14;
            var3 = var3.ROUTE;
            if(!(var3 !== var4)) { _fun0024_ip = 637; continue _fun0024 }
 110:
            var3 = _closure1_slot14;
            var3 = var3.PRESSABLE;
            if(!(var3 !== var4)) { _fun0024_ip = 573; continue _fun0024 }
 127:
            var3 = _closure1_slot14;
            var3 = var3.TOGGLE;
            if(!(var3 !== var4)) { _fun0024_ip = 509; continue _fun0024 }
 144:
            var3 = _closure1_slot14;
            var3 = var3.STATIC;
            if(!(var3 !== var4)) { _fun0024_ip = 445; continue _fun0024 }
 161:
            var3 = _closure1_slot14;
            var3 = var3.VOLUME_SLIDER;
            if(!(var3 !== var4)) { _fun0024_ip = 381; continue _fun0024 }
 178:
            var3 = _closure1_slot14;
            var3 = var3.RADIO;
            if(!(var3 !== var4)) { _fun0024_ip = 335; continue _fun0024 }
 195:
            var3 = _closure1_slot14;
            var3 = var3.CHECKBOX;
            if(!(var3 !== var4)) { _fun0024_ip = 289; continue _fun0024 }
 209:
            var3 = _closure1_slot14;
            var3 = var3.SLIDER;
            if(!(var3 !== var4)) { _fun0024_ip = 225; continue _fun0024 }
 223:
            return var9;
 225:
            var8 = _closure1_slot16;
            var4 = _closure1_slot29;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 289:
            var8 = _closure1_slot16;
            var4 = _closure1_slot25;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 335:
            var8 = _closure1_slot16;
            var4 = _closure1_slot26;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 381:
            var8 = _closure1_slot16;
            var4 = _closure1_slot28;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 445:
            var8 = _closure1_slot16;
            var4 = _closure1_slot27;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 509:
            var8 = _closure1_slot16;
            var4 = _closure1_slot24;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 573:
            var8 = _closure1_slot16;
            var4 = _closure1_slot23;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var10 = 'setting';
            var3[var10] = var7;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 637:
            var8 = _closure1_slot16;
            var4 = _closure1_slot20;
            var3 = {};
            var13 = var3;
            var12 = var1;
            var10 = copyDataProperties(var13, var12);
            var10 = 'title';
            var3[var10] = var11;
            var10 = 'start';
            var3[var10] = var6;
            var10 = 'end';
            var3[var10] = var5;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
 692:
            var4 = _closure1_slot16;
            var3 = _closure1_slot22;
            var2 = {};
            var13 = var2;
            var12 = var1;
            var1 = copyDataProperties(var13, var12);
            var1 = 'setting';
            var2[var1] = var7;
            var1 = 'start';
            var2[var1] = var6;
            var1 = 'end';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['renderSettingItem'] = var4;
    var2 = function renderSettingSearchResultItem(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var3 = arg1;
            var6 = var3.searchResultData;
            var5 = _closure1_slot6;
            var2 = _closure1_slot4;
            var4 = undefined;
            var5 = var5.bind(var4)(var3, var2);
            var7 = var6.type;
            var2 = _closure1_slot14;
            var2 = var2.ROUTE;
            if(!(var2 !== var7)) { _fun0025_ip = 202; continue _fun0025 }
 50:
            var2 = _closure1_slot14;
            var2 = var2.PRESSABLE;
            if(!(var2 !== var7)) { _fun0025_ip = 169; continue _fun0025 }
 64:
            var2 = _closure1_slot14;
            var2 = var2.STATIC;
            if(!(var2 !== var7)) { _fun0025_ip = 136; continue _fun0025 }
 78:
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
 136:
            var7 = _closure1_slot16;
            var3 = _closure1_slot35;
            var2 = {};
            var2['searchResultData'] = var6;
            var10 = var2;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 169:
            var7 = _closure1_slot16;
            var3 = _closure1_slot34;
            var2 = {};
            var2['searchResultData'] = var6;
            var10 = var2;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 202:
            var3 = _closure1_slot16;
            var2 = _closure1_slot33;
            var1 = {};
            var1['searchResultData'] = var6;
            var10 = var1;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderSettingSearchResultItem'] = var2;
    return var1;
})();