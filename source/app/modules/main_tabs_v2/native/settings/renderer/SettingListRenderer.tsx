// app/modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx
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
 0:
            var1 = arg1;
            var9 = var1.label;
            var1 = _closure1_slot11;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.spacer;
            var1['style'] = var5;
            var8 = 'string';
            var7 = typeof var9;
            var5 = var9;
            if(!(var8 === var7)) { _fun0001_ip = 97; continue _fun0001 }
 55:
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRowGroupTitle;
            var6 = {};
            var6['title'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 97:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function SearchListSectionSubLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.subLabel;
            var1 = _closure1_slot11;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.subLabel;
            var1['style'] = var5;
            var7 = 'string';
            var5 = typeof var9;
            if(!(var7 !== var5)) { _fun0002_ip = 77; continue _fun0002 }
 53:
            var5 = global;
            var7 = var5.Array;
            var5 = var7.isArray;
            var7 = var5.bind(var7)(var9);
            var5 = var9;
            if(!var7) { _fun0002_ip = 131; continue _fun0002 }
 77:
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 131:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getItemType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot8;
            var4 = var4.SECTION_LABEL;
            if(!(var4 !== var3)) { _fun0003_ip = 112; continue _fun0003 }
 25:
            var4 = _closure1_slot8;
            var4 = var4.SECTION_SUBLABEL;
            if(!(var4 !== var3)) { _fun0003_ip = 112; continue _fun0003 }
 39:
            var4 = _closure1_slot8;
            var4 = var4.SETTING;
            if(!(var4 !== var3)) { _fun0003_ip = 71; continue _fun0003 }
 53:
            var2 = _closure1_slot8;
            var2 = var2.SETTING_SEARCH_RESULT;
            if(!(var2 !== var3)) { _fun0003_ip = 71; continue _fun0003 }
 67:
            var2 = undefined;
            return var2;
 71:
            var6 = var1.type;
            var5 = var1.setting;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 112:
            var1 = var1.type;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function renderItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.item;
            var4 = var1.type;
            var3 = _closure1_slot8;
            var3 = var3.SECTION_LABEL;
            if(!(var3 !== var4)) { _fun0004_ip = 180; continue _fun0004 }
 33:
            var3 = _closure1_slot8;
            var3 = var3.SECTION_SUBLABEL;
            if(!(var3 !== var4)) { _fun0004_ip = 149; continue _fun0004 }
 47:
            var3 = _closure1_slot8;
            var3 = var3.SETTING_SEARCH_RESULT;
            if(!(var3 !== var4)) { _fun0004_ip = 114; continue _fun0004 }
 61:
            var3 = _closure1_slot8;
            var3 = var3.SETTING;
            if(!(var3 !== var4)) { _fun0004_ip = 79; continue _fun0004 }
 75:
            var3 = undefined;
            return var3;
 79:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.renderSettingItem;
            var3 = var3.bind(var4)(var1);
            return var3;
 114:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.renderSettingSearchResultItem;
            var3 = var3.bind(var4)(var1);
            return var3;
 149:
            var6 = _closure1_slot10;
            var5 = _closure1_slot13;
            var4 = {};
            var3 = var1.subLabel;
            var4['subLabel'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
            return var3;
 180:
            var4 = _closure1_slot10;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = var1.label;
            var2['label'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function keyExtractor(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var1.type;
            var4 = _closure1_slot8;
            var4 = var4.SECTION_LABEL;
            if(!(var4 !== var3)) { _fun0005_ip = 179; continue _fun0005 }
 31:
            var4 = _closure1_slot8;
            var4 = var4.SECTION_SUBLABEL;
            if(!(var4 !== var3)) { _fun0005_ip = 118; continue _fun0005 }
 45:
            var4 = _closure1_slot8;
            var4 = var4.SETTING;
            if(!(var4 !== var3)) { _fun0005_ip = 77; continue _fun0005 }
 59:
            var2 = _closure1_slot8;
            var2 = var2.SETTING_SEARCH_RESULT;
            if(!(var2 !== var3)) { _fun0005_ip = 77; continue _fun0005 }
 73:
            var2 = undefined;
            return var2;
 77:
            var7 = var1.type;
            var6 = var1.setting;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var7, var2, var6);
            return var2;
 118:
            var7 = var1.type;
            var2 = var1.subLabel;
            var3 = 'string';
            var2 = typeof var2;
            var6 = var5;
            if(!(var3 === var2)) { _fun0005_ip = 149; continue _fun0005 }
 143:
            var6 = var1.subLabel;
 149:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var7, var2, var6);
            return var2;
 179:
            var4 = var1.type;
            var2 = var1.label;
            var3 = 'string';
            var2 = typeof var2;
            if(!(var3 === var2)) { _fun0005_ip = 205; continue _fun0005 }
 200:
            var5 = var1.label;
 205:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-';
            var1 = var3.bind(var2)(var4, var1, var5);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = var6.bind(var1)(var4);
    var5 = var4.useIsSettingSearchQueryEmpty;
    var _closure1_slot5 = var5;
    var4 = var4.useSettingSearchQuery;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ListRendererType;
    var _closure1_slot8 = var5;
    var4 = var4.SETTINGS_LIST_ITEM_ESTIMATED_SIZE;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
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
    var12 = var12.BG_BASE_SECONDARY;
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
    var _closure1_slot11 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var9 = var2.sections;
        var _closure2_slot0 = var9;
        var15 = var2.ListHeaderComponent;
        var10 = var2.ListFooterComponent;
        var7 = var2.containerStyle;
        var3 = var2.initialSetting;
        var2 = _closure1_slot11;
        var4 = undefined;
        var11 = var2.bind(var4)();
        var13 = _closure1_slot1;
        var14 = _closure1_slot2;
        var2 = 11;
        var2 = var14[var2];
        var2 = var13.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var6 = _closure1_slot7;
        var5 = var6.useField;
        var2 = 'blocklist';
        var16 = var5.bind(var6)(var2);
        var _closure2_slot1 = var16;
        var5 = _closure1_slot3;
        var6 = var5.useMemo;
        var2 = new Array(2);
        var2[0] = var16;
        var2[1] = var9;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSettingListItems;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var9 = var6.bind(var5)(var1, var2);
        var2 = var5.useRef;
        var1 = null;
        var16 = var2.bind(var5)(var1);
        var6 = _closure1_slot0;
        var1 = 13;
        var1 = var14[var1];
        var2 = var6.bind(var4)(var1);
        var1 = var2.useAutoScrollToSearchResultSetting;
        var1 = var1.bind(var2)(var16, var9, var3);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var17 = var11.container;
        var5 = new Array(2);
        var5[0] = var17;
        var5[1] = var7;
        var1['style'] = var5;
        var7 = _closure1_slot10;
        var5 = 14;
        var5 = var14[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.FlashList;
        var5 = {};
        var5['ref'] = var16;
        var5['ListHeaderComponent'] = var15;
        var5['ListFooterComponent'] = var10;
        var10 = _closure1_slot9;
        var5['estimatedItemSize'] = var10;
        var10 = {};
        var19 = var11.contentContainer;
        var20 = var10;
        var11 = copyDataProperties(var20, var19);
        var11 = 7;
        var11 = var14[var11];
        var11 = var13.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_16;
        var12 = var12 + var11;
        var11 = 'paddingBottom';
        var10[var11] = var12;
        var5['contentContainerStyle'] = var10;
        var10 = {};
        var11 = 0.01;
        var10['right'] = var11;
        var5['scrollIndicatorInsets'] = var10;
        var10 = _closure1_slot16;
        var5['keyExtractor'] = var10;
        var10 = _closure1_slot15;
        var5['renderItem'] = var10;
        var5['data'] = var9;
        var8 = _closure1_slot14;
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
        var3 = var2.sections;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot11;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var _closure2_slot1 = var12;
        var10 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 11;
        var2 = var9[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var13 = var2.bottom;
        var7 = _closure1_slot3;
        var6 = var7.useRef;
        var2 = null;
        var11 = var6.bind(var7)(var2);
        var2 = _closure1_slot6;
        var6 = var2.bind(var4)();
        var2 = var7.useDeferredValue;
        var14 = var2.bind(var7)(var6);
        var8 = _closure1_slot0;
        var2 = 15;
        var2 = var9[var2];
        var6 = var8.bind(var4)(var2);
        var2 = var6.useSettingSearchResults;
        var2 = var2.bind(var6)(var14);
        var _closure2_slot2 = var2;
        var6 = _closure1_slot5;
        var14 = var6.bind(var4)();
        var _closure2_slot3 = var14;
        var16 = _closure1_slot7;
        var15 = var16.useField;
        var6 = 'blocklist';
        var16 = var15.bind(var16)(var6);
        var _closure2_slot4 = var16;
        var15 = var7.useMemo;
        var6 = new Array(2);
        var6[0] = var16;
        var6[1] = var3;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSettingListItems;
            var2 = _closure2_slot0;
            var1 = _closure2_slot4;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var15 = var15.bind(var7)(var3, var6);
        var _closure2_slot5 = var15;
        var6 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSettingListSearchResultItems;
            var1 = _closure2_slot2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var6.bind(var7)(var2, var3);
        var _closure2_slot6 = var2;
        var6 = var7.useMemo;
        var3 = new Array(3);
        var3[0] = var15;
        var3[1] = var2;
        var3[2] = var14;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure2_slot3;
                if(var1) { _fun0006_ip = 16; continue _fun0006 }
 10:
                var1 = _closure2_slot6;
                _fun0006_ip = 20; continue _fun0006;
 16:
                var1 = _closure2_slot5;
 20:
                return var1;
            }
        };
        var6 = var6.bind(var7)(var2, var3);
        var3 = var7.useMemo;
        var15 = var12.searchResultsHeader;
        var2 = new Array(2);
        var2[0] = var15;
        var2[1] = var14;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure2_slot3;
                if(var2) { _fun0007_ip = 22; continue _fun0007 }
 10:
                var1 = _closure2_slot1;
                var1 = var1.searchResultsHeader;
                _fun0007_ip = 24; continue _fun0007;
 22:
                var1 = {};
 24:
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot10;
        var1 = 14;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.AnimatedFlashList;
        var1 = {};
        var1['ref'] = var11;
        var11 = 'always';
        var1['keyboardShouldPersistTaps'] = var11;
        var11 = var12.container;
        var1['style'] = var11;
        var11 = {};
        var17 = var12.contentContainer;
        var18 = var11;
        var12 = copyDataProperties(var18, var17);
        var12 = 7;
        var12 = var9[var12];
        var12 = var10.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var13 = var13 + var12;
        var12 = 'paddingBottom';
        var11[var12] = var13;
        var1['contentContainerStyle'] = var11;
        var1['ListHeaderComponentStyle'] = var7;
        var7 = _closure1_slot9;
        var1['estimatedItemSize'] = var7;
        var11 = _closure1_slot10;
        var7 = 16;
        var7 = var9[var7];
        var10 = var10.bind(var4)(var7);
        var7 = {};
        var7 = var11.bind(var4)(var10, var7);
        var1['ListHeaderComponent'] = var7;
        var7 = 17;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.dismissGlobalKeyboard;
        var1['onScroll'] = var7;
        var7 = {};
        var8 = 0.01;
        var7['right'] = var8;
        var1['scrollIndicatorInsets'] = var7;
        var7 = _closure1_slot16;
        var1['keyExtractor'] = var7;
        var7 = _closure1_slot15;
        var1['renderItem'] = var7;
        var1['data'] = var6;
        var5 = _closure1_slot14;
        var1['getItemType'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SettingsList'] = var4;
    var3['SearchableSettingsList'] = var2;
    return var1;
})();