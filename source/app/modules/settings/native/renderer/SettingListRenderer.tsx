// app/modules/settings/native/renderer/SettingListRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function SearchListSectionLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.label;
            var1 = _closure1_slot10;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.spacer;
            var1['style'] = var5;
            var8 = 'string';
            var7 = typeof var9;
            var5 = var9;
            if(!(var8 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRowGroupTitle;
            var6 = {};
            var6['title'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 2:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function SearchListSectionSubLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.subLabel;
            var1 = _closure1_slot10;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.subLabel;
            var1['style'] = var5;
            var7 = 'string';
            var5 = typeof var9;
            if(!(var7 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = global;
            var7 = var5.Array;
            var5 = var7.isArray;
            var7 = var5.bind(var7)(var9);
            var5 = var9;
            if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 6:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getItemType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot7;
            var4 = var4.SECTION_HEADER;
            if(!(var4 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var4 = _closure1_slot7;
            var4 = var4.SECTION_FOOTER;
            if(!(var4 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
            var4 = _closure1_slot7;
            var4 = var4.SECTION_ROW;
            if(!(var4 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 5:
            var4 = _closure1_slot7;
            var4 = var4.SETTING_SEARCH_RESULT;
            if(!(var4 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.SECTION_ROW_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = undefined;
            return var2;
case 12:
            var2 = var1.type;
            return var2;
case 10:
            var6 = var1.type;
            var5 = var1.setting;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 7:
            var1 = var1.type;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function renderItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.item;
            var4 = var1.type;
            var3 = _closure1_slot7;
            var3 = var3.SECTION_HEADER;
            if(!(var3 !== var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot7;
            var3 = var3.SECTION_FOOTER;
            if(!(var3 !== var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = _closure1_slot7;
            var3 = var3.SETTING_SEARCH_RESULT;
            if(!(var3 !== var4)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = _closure1_slot7;
            var3 = var3.SECTION_ROW;
            if(!(var3 !== var4)) { _fun0004_ip = 6; continue _fun0004 }
case 20:
            var3 = _closure1_slot7;
            var3 = var3.SECTION_ROW_PLACEHOLDER;
            if(!(var3 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 10:
            var3 = undefined;
            return var3;
case 21:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.renderSettingSearchResultPlaceholderItem;
            var3 = var3.bind(var4)(var1);
            return var3;
case 6:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.renderSettingItem;
            var3 = var3.bind(var4)(var1);
            return var3;
case 18:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.renderSettingSearchResultItem;
            var3 = var3.bind(var4)(var1);
            return var3;
case 16:
            var6 = _closure1_slot9;
            var5 = _closure1_slot12;
            var4 = {};
            var3 = var1.label;
            var4['subLabel'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
            return var3;
case 14:
            var4 = _closure1_slot9;
            var3 = _closure1_slot11;
            var2 = {};
            var1 = var1.label;
            var2['label'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function keyExtractor(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = var1.type;
            var5 = _closure1_slot7;
            var5 = var5.SECTION_HEADER;
            if(!(var5 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var5 = _closure1_slot7;
            var5 = var5.SECTION_FOOTER;
            if(!(var5 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 24:
            var5 = _closure1_slot7;
            var5 = var5.SECTION_ROW;
            if(!(var5 !== var3)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var5 = _closure1_slot7;
            var5 = var5.SETTING_SEARCH_RESULT;
            if(!(var5 !== var3)) { _fun0005_ip = 25; continue _fun0005 }
case 27:
            var2 = _closure1_slot7;
            var2 = var2.SECTION_ROW_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var2 = undefined;
            return var2;
case 28:
            var6 = var1.type;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var5.bind(var3)(var6, var2, var4);
            return var2;
case 25:
            var7 = var1.type;
            var6 = var1.setting;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var5.bind(var3)(var7, var2, var6);
            return var2;
case 22:
            var5 = var1.type;
            var2 = var1.label;
            var3 = 'string';
            var2 = typeof var2;
            if(!(var3 === var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var4 = var1.label;
case 30:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var11 = 1;
    var4 = var7[var11];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ListItemType;
    var _closure1_slot7 = var5;
    var4 = var4.getSettingsListItemEstimatedSize;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 7;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var12;
    var10['flexGrow'] = var11;
    var4['container'] = var10;
    var10 = {};
    var11 = 16;
    var10['paddingHorizontal'] = var11;
    var4['contentContainer'] = var10;
    var10 = {};
    var11 = 24;
    var10['paddingBottom'] = var11;
    var4['searchResultsHeader'] = var10;
    var10 = {};
    var10['paddingTop'] = var11;
    var4['spacer'] = var10;
    var10 = {};
    var11 = 8;
    var10['marginTop'] = var11;
    var4['subLabel'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var10 = var2.node;
        var _closure2_slot0 = var10;
        var2 = _closure1_slot10;
        var4 = undefined;
        var11 = var2.bind(var4)();
        var13 = _closure1_slot1;
        var14 = _closure1_slot2;
        var2 = 11;
        var2 = var14[var2];
        var2 = var13.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var2 = 12;
        var2 = var14[var2];
        var3 = var13.bind(var4)(var2);
        var2 = 'SettingsList';
        var15 = var3.bind(var4)(var2);
        var5 = _closure1_slot6;
        var3 = var5.useField;
        var2 = 'blocklist';
        var6 = var3.bind(var5)(var2);
        var _closure2_slot1 = var6;
        var3 = _closure1_slot3;
        var5 = var3.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var10;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.toSettingListItems;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var9 = var5.bind(var3)(var1, var2);
        var2 = var3.useRef;
        var1 = null;
        var16 = var2.bind(var3)(var1);
        var6 = _closure1_slot0;
        var1 = 14;
        var1 = var14[var1];
        var3 = var6.bind(var4)(var1);
        var2 = var3.useAutoScrollToSearchResultSetting;
        var1 = var10.scrollTarget;
        var1 = var2.bind(var3)(var16, var9, var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var11.container;
        var1['style'] = var5;
        var7 = _closure1_slot9;
        var5 = 15;
        var5 = var14[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.FlashList;
        var5 = {};
        var5['ref'] = var16;
        var10 = var10.ListHeaderComponent;
        var5['ListHeaderComponent'] = var10;
        var10 = _closure1_slot8;
        var10 = var10.bind(var4)(var15);
        var5['estimatedItemSize'] = var10;
        var10 = {};
        var18 = var11.contentContainer;
        var19 = var10;
        var11 = copyDataProperties(var19, var18);
        var11 = 7;
        var11 = var14[var11];
        var11 = var13.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_16;
        var12 = var12 + var11;
        var11 = 'paddingBottom';
        var10[10] = var12;
        var5['contentContainerStyle'] = var10;
        var10 = {};
        var11 = 0.01;
        var10['right'] = var11;
        var5['scrollIndicatorInsets'] = var10;
        var10 = _closure1_slot15;
        var5['keyExtractor'] = var10;
        var10 = _closure1_slot14;
        var5['renderItem'] = var10;
        var5['data'] = var9;
        var8 = _closure1_slot13;
        var5['getItemType'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = var8.memo;
    var2 = function(arg1) {
        var2 = arg1;
        var3 = var2.node;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot10;
        var4 = undefined;
        var14 = var2.bind(var4)();
        var _closure2_slot1 = var14;
        var11 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 11;
        var2 = var9[var2];
        var2 = var11.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var15 = var2.bottom;
        var2 = 12;
        var2 = var9[var2];
        var6 = var11.bind(var4)(var2);
        var2 = 'SearchableSettingsList';
        var12 = var6.bind(var4)(var2);
        var8 = _closure1_slot0;
        var2 = 16;
        var2 = var9[var2];
        var6 = var8.bind(var4)(var2);
        var2 = var6.useSettingSearchResults;
        var2 = var2.bind(var6)();
        var17 = var2.settings;
        var _closure2_slot2 = var17;
        var13 = var2.isLoading;
        var _closure2_slot3 = var13;
        var2 = var2.placeholderCount;
        var _closure2_slot4 = var2;
        var10 = _closure1_slot5;
        var7 = var10.useState;
        var6 = function(arg1) {
            var1 = arg1;
            var2 = var1.query;
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = '';
            var1 = var1 === var2;
            return var1;
        };
        var16 = var7.bind(var10)(var6);
        var _closure2_slot5 = var16;
        var10 = _closure1_slot6;
        var7 = var10.useField;
        var6 = 'blocklist';
        var18 = var7.bind(var10)(var6);
        var _closure2_slot6 = var18;
        var7 = _closure1_slot3;
        var10 = var7.useMemo;
        var6 = new Array(2);
        var6[0] = var18;
        var6[1] = var3;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.toSettingListItems;
            var2 = _closure2_slot0;
            var1 = _closure2_slot6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var10 = var10.bind(var7)(var3, var6);
        var _closure2_slot7 = var10;
        var6 = var7.useMemo;
        var3 = new Array(3);
        var3[0] = var17;
        var3[1] = var13;
        var3[2] = var2;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.getScoredSettingListSearchResultItems;
            var3 = _closure2_slot2;
            var2 = _closure2_slot3;
            var1 = _closure2_slot4;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var2 = var6.bind(var7)(var2, var3);
        var _closure2_slot8 = var2;
        var6 = var7.useMemo;
        var3 = new Array(3);
        var3[0] = var10;
        var3[1] = var2;
        var3[2] = var16;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure2_slot5;
                if(var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var1 = _closure2_slot8;
                _fun0006_ip = 34; continue _fun0006;
case 32:
                var1 = _closure2_slot7;
case 34:
                return var1;
            }
        };
        var6 = var6.bind(var7)(var2, var3);
        var _closure2_slot9 = var6;
        var10 = var7.useMemo;
        var2 = var14.searchResultsHeader;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var16;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot5;
                if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 33:
                var1 = _closure2_slot1;
                var1 = var1.searchResultsHeader;
                _fun0007_ip = 36; continue _fun0007;
case 35:
                var1 = {};
case 36:
                return var1;
            }
        };
        var10 = var10.bind(var7)(var2, var3);
        var3 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var16;
        var2[1] = var13;
        var13 = var6.length;
        var2[2] = var13;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot5;
                var1 = null;
                if(var3) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var3 = _closure2_slot3;
                var1 = null;
                if(var3) { _fun0008_ip = 37; continue _fun0008 }
case 39:
                var2 = _closure2_slot9;
                var3 = var2.length;
                var2 = 0;
                var1 = null;
                if(!(var2 === var3)) { _fun0008_ip = 37; continue _fun0008 }
case 40:
                var5 = _closure1_slot9;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var1 = var5.bind(var4)(var3, var2);
case 37:
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot9;
        var1 = 15;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.FlashList;
        var1 = {};
        var13 = 'always';
        var1['keyboardShouldPersistTaps'] = var13;
        var13 = {};
        var19 = var14.contentContainer;
        var20 = var13;
        var14 = copyDataProperties(var20, var19);
        var14 = 7;
        var14 = var9[var14];
        var14 = var11.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var15 = var15 + var14;
        var14 = 'paddingBottom';
        var13[13] = var15;
        var1['contentContainerStyle'] = var13;
        var1['ListHeaderComponentStyle'] = var10;
        var10 = _closure1_slot8;
        var10 = var10.bind(var4)(var12);
        var1['estimatedItemSize'] = var10;
        var10 = 18;
        var10 = var9[var10];
        var10 = var11.bind(var4)(var10);
        var1['ListHeaderComponent'] = var10;
        var1['ListEmptyComponent'] = var7;
        var7 = 19;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.dismissGlobalKeyboard;
        var1['onScroll'] = var7;
        var7 = {};
        var8 = 0.01;
        var7['right'] = var8;
        var1['scrollIndicatorInsets'] = var7;
        var7 = _closure1_slot15;
        var1['keyExtractor'] = var7;
        var7 = _closure1_slot14;
        var1['renderItem'] = var7;
        var1['data'] = var6;
        var5 = _closure1_slot13;
        var1['getItemType'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/native/renderer/SettingListRenderer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SettingsList'] = var4;
    var3['SearchableSettingsList'] = var2;
    return var1;
})();