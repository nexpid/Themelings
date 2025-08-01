// app/modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function FlashListWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = var4.scrollable;
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['scrollable'] = var2;
            var10 = {};
            var9 = var4;
            var8 = var3;
            var6 = copyDataProperties(var10, var9, var8);
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            if(var1) { _fun0001_ip = 98; continue _fun0001 }
 65:
            var3 = var2.FlashList;
            var1 = {};
            var7 = false;
            var1['scrollEnabled'] = var7;
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var1 = var5.bind(var4)(var3, var1);
            _fun0001_ip = 129; continue _fun0001;
 98:
            var3 = var2.BottomSheetFlashList;
            var2 = {};
            var7 = true;
            var2['preserveScrollMomentum'] = var7;
            var10 = var2;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var1 = var5.bind(var4)(var3, var2);
 129:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TABLE_ROW_CONTENT_HEIGHT;
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TABLE_ROW_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['listItemContainer'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var12;
    var4['listItem'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderTopLeftRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderTopRightRadius'] = var12;
    var4['firstItem'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderBottomLeftRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderBottomRightRadius'] = var12;
    var4['lastItem'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['backgroundColor'] = var10;
    var10 = 16;
    var9['marginLeft'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherChoicesActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.option;
            var _closure2_slot0 = var9;
            var20 = var1.initChoiceIndex;
            var18 = var1.onChoiceSelect;
            var _closure2_slot1 = var18;
            var5 = var1.onDismiss;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot11;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 10;
            var2 = var10[var3];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.bottom;
            var8 = _closure1_slot0;
            var2 = 11;
            var2 = var10[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isIOS;
            var2 = var2.bind(var8)();
            var17 = var6;
            if(var2) { _fun0002_ip = 139; continue _fun0002 }
 131:
            var2 = _closure1_slot8;
            var17 = var6 + var2;
 139:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 12;
            var8 = var6[var8];
            var8 = var2.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var11 = var8.width;
            var16 = _closure1_slot4;
            var10 = var16.useState;
            var8 = function() {
                var1 = _closure2_slot0;
                var3 = var1.choices;
                var2 = function toChoicesWithIndex(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0003_ip = 13; continue _fun0003 }
 9:
                        var3 = new Array(0);
 13:
                        var2 = var3.map;
                        var1 = function(arg1, arg2) {
                            var1 = {};
                            var2 = arg1;
                            var1['choice'] = var2;
                            var2 = arg2;
                            var1['originalIndex'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var8 = var10.bind(var16)(var8);
            var19 = _closure1_slot3;
            var13 = 2;
            var10 = var19.bind(var4)(var8, var13);
            var8 = 0;
            var12 = var10[var8];
            _closure2_slot3 = var12;
            var14 = 1;
            var10 = var10[var14];
            _closure2_slot4 = var10;
            var10 = var16.useState;
            var10 = var10.bind(var16)(var20);
            var13 = var19.bind(var4)(var10, var13);
            var10 = var13[var8];
            _closure2_slot5 = var10;
            var13 = var13[var14];
            _closure2_slot6 = var13;
            var19 = var16.useCallback;
            var13 = var9.choices;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.queryChoice;
                    var3 = {};
                    var2 = arg1;
                    var3['query'] = var2;
                    var6 = _closure2_slot0;
                    var7 = var6.choices;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0004_ip = 63; continue _fun0004 }
 59:
                    var7 = new Array(0);
 63:
                    var3['choices'] = var7;
                    var3['limit'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var20 = var19.bind(var16)(var13, var14);
            var14 = var16.useCallback;
            var13 = new Array(4);
            var13[0] = var18;
            var13[1] = var10;
            var13[2] = var1;
            var13[3] = var12;
            var10 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var11 = var1.item;
                    var _closure3_slot0 = var11;
                    var13 = var1.index;
                    var2 = _closure2_slot3;
                    var1 = null;
                    var6 = var1 != var2;
                    if(!var6) { _fun0005_ip = 55; continue _fun0005 }
 35:
                    var1 = _closure2_slot3;
                    var2 = var1.length;
                    var1 = 1;
                    var1 = var2 - var1;
                    var6 = var13 === var1;
 55:
                    var10 = _closure2_slot5;
                    var9 = var11.originalIndex;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var7 = var5.listItemContainer;
                    var5 = new Array(3);
                    var5[0] = var7;
                    var7 = 0;
                    var7 = var7 === var13;
                    if(!var7) { _fun0005_ip = 115; continue _fun0005 }
 105:
                    var13 = _closure2_slot2;
                    var7 = var13.firstItem;
 115:
                    var5[1] = var7;
                    if(!var6) { _fun0005_ip = 132; continue _fun0005 }
 122:
                    var7 = _closure2_slot2;
                    var6 = var7.lastItem;
 132:
                    var5[2] = var6;
                    var2['style'] = var5;
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.FormRadioRow;
                    var5 = {};
                    var12 = _closure2_slot2;
                    var13 = var12.listItem;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var5['style'] = var12;
                    var11 = var11.choice;
                    var11 = var11.displayName;
                    var5['label'] = var11;
                    var11 = 'right';
                    var5['align'] = var11;
                    var9 = var10 === var9;
                    var5['selected'] = var9;
                    var8 = function onPress() {
                        var5 = _closure2_slot6;
                        var2 = _closure3_slot0;
                        var4 = var2.originalIndex;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure2_slot1;
                        var3 = var2.choice;
                        var2 = var2.originalIndex;
                        var2 = var4.bind(var1)(var3, var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var5['onPress'] = var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var10, var13);
            var13 = var16.useCallback;
            var1 = var1.divider;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormDivider;
                var1 = {};
                var5 = _closure2_slot2;
                var5 = var5.divider;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10 = var13.bind(var16)(var1, var10);
            var1 = 16;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)();
            var1 = var9.choices;
            var2 = null;
            var16 = var2 != var1;
            if(!var16) { _fun0002_ip = 421; continue _fun0002 }
 388:
            var1 = var9.choices;
            var13 = var2 == var1;
            var2 = undefined;
            if(var13) { _fun0002_ip = 408; continue _fun0002 }
 403:
            var2 = var1.length;
 408:
            var1 = 5;
            if(!var6) { _fun0002_ip = 417; continue _fun0002 }
 414:
            var1 = var3;
 417:
            var16 = var2 >= var1;
 421:
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 8;
            var1 = var18[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useFontScale;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot7;
            var6 = global;
            var13 = var6.Math;
            var6 = var13.max;
            var19 = _closure1_slot6;
            var1 = var1 * var19;
            var1 = var1 - var19;
            var1 = var6.bind(var13)(var1, var8);
            var13 = var3 + var1;
            var6 = var12.length;
            var3 = _closure1_slot10;
            var1 = 17;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AppLauncherCommandOptionActionSheet;
            var1 = {};
            var1['option'] = var9;
            var1['startExpanded'] = var16;
            var1['onDismiss'] = var5;
            var1['scrollable'] = var16;
            var9 = var16;
            if(!var9) { _fun0002_ip = 588; continue _fun0002 }
 545:
            var19 = _closure1_slot9;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 18;
            var5 = var21[var5];
            var5 = var18.bind(var4)(var5);
            var18 = var5.AppLauncherListSearchBar;
            var5 = {};
            var5['onChange'] = var20;
            var9 = var19.bind(var4)(var18, var5);
 588:
            var5 = new Array(2);
            var5[0] = var9;
            if(!(var8 !== var6)) { _fun0002_ip = 711; continue _fun0002 }
 600:
            var9 = _closure1_slot9;
            var8 = _closure1_slot12;
            var6 = {};
            var6['scrollable'] = var16;
            var16 = {};
            var16['paddingBottom'] = var17;
            var6['contentContainerStyle'] = var16;
            var16 = {};
            var16['bottom'] = var17;
            var6['scrollIndicatorInsets'] = var16;
            var15 = function keyExtractor(arg1) {
                var1 = arg1;
                var2 = var1.choice;
                var5 = var2.name;
                var4 = var1.originalIndex;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '_';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            };
            var6['keyExtractor'] = var15;
            var6['data'] = var12;
            var6['renderItem'] = var14;
            var6['ItemSeparatorComponent'] = var10;
            var10 = 'radiogroup';
            var6['accessibilityRole'] = var10;
            var6['estimatedItemSize'] = var13;
            var10 = {};
            var12 = var12.length;
            var12 = var13 * var12;
            var10['height'] = var12;
            var10['width'] = var11;
            var6['estimatedListSize'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            _fun0002_ip = 749; continue _fun0002;
 711:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 18;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.AppLauncherListEmptyState;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 749:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();