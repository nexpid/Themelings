// app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function fuzzySearchToggle(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var10 = arg2;
            var7 = arg3;
            var2 = var4.length;
            var1 = 0;
            var1 = var1 === var2;
            if(var1) { _fun0001_ip = 123; continue _fun0001 }
 23:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = 6;
            var2 = var2[var8];
            var6 = undefined;
            var9 = var5.bind(var6)(var2);
            var2 = var4.toLowerCase;
            var5 = var2.bind(var4)();
            var2 = var10.toLowerCase;
            var2 = var2.bind(var10)();
            var2 = var9.bind(var6)(var5, var2);
            if(var2) { _fun0001_ip = 120; continue _fun0001 }
 77:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var5 = var5.bind(var6)(var3);
            var3 = var4.toLowerCase;
            var4 = var3.bind(var4)();
            var3 = var7.toLowerCase;
            var3 = var3.bind(var7)();
            var2 = var5.bind(var6)(var4, var3);
 120:
            var1 = var2;
 123:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function ToggleTableRow(arg1) {
        var1 = arg1;
        var5 = var1.toggleName;
        var _closure2_slot0 = var5;
        var12 = var1.description;
        var _closure2_slot1 = var12;
        var10 = var1.value;
        var9 = var1.onValueChange;
        var4 = _closure1_slot9;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 9;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['label'] = var12;
        var12 = 1;
        var1['labelLineClamp'] = var12;
        var1['subLabel'] = var5;
        var1['subLabelLineClamp'] = var12;
        var8 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = _closure2_slot1;
            var2['content'] = var6;
            var5 = _closure2_slot0;
            var2['key'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var8;
        var8 = _closure1_slot9;
        var6 = 11;
        var6 = var11[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.FormSwitch;
        var6 = {};
        var6['value'] = var10;
        var6['onValueChange'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var1['trailing'] = var6;
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function DevTogglesForCategory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.category;
            var7 = var1.title;
            var2 = var1.query;
            var1 = function useFilteredDevTogglesForCategory(arg1, arg2) {
                var10 = arg1;
                var11 = arg2;
                var _closure3_slot0 = var10;
                var _closure3_slot1 = var11;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var4 = var9[var2];
                var7 = undefined;
                var6 = var8.bind(var7)(var4);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var10;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var12 = var2.statesWillNeverBeEqual;
                var14 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.allByCategory;
                    var1 = _closure3_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var7 = arg1;
                            var2 = var7[Symbol.iterator];
                            var7 = var2().next;
                            var8 = undefined;
                            var3 = undefined;
                            var6 = undefined;
                            var9 = var7().value;
                            var10 = var2;
                            var10 = var10 === var8;
                            var3 = var10;
                            if(var10) { _fun0003_ip = 32; continue _fun0003 }
 29:
                            var6 = var9;
 32:
                            var5 = var6;
                            var6 = undefined;
                            var9 = var3;
                            if(var9) { _fun0003_ip = 63; continue _fun0003 }
 43:
                            var9 = var7().value;
                            var10 = var2;
                            var10 = var10 === var8;
                            var3 = var10;
                            if(var10) { _fun0003_ip = 63; continue _fun0003 }
 60:
                            var6 = var9;
 63:
                            var6 = undefined;
                            var9 = var3;
                            if(var9) { _fun0003_ip = 91; continue _fun0003 }
 71:
                            var7 = var7().value;
                            var9 = var2;
                            var9 = var9 === var8;
                            var3 = var9;
                            if(var9) { _fun0003_ip = 91; continue _fun0003 }
 88:
                            var6 = var7;
 91: // try_start_0
                            var4 = var6.label;
 96: // try_end0
                            var6 = var3;
                            if(var6) { _fun0003_ip = 105; continue _fun0003 }
 102:
                            var2.return();
 105:
                            var7 = _closure1_slot12;
                            var6 = _closure3_slot1;
                            var4 = var7.bind(var8)(var6, var5, var4);
                            return var4;
 128: // catch_target0
                            CatchBlockStart(arg_register=0);
                            _fun0003_ip = 134; continue _fun0003;
 132:
                            CatchBlockStart(arg_register=0);
 134:
                            if(var3) { _fun0003_ip = 140; continue _fun0003 }
 137:
                            var2.return();
 140:
                            throw var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var16 = var6;
                var15 = var4;
                var13 = var3;
                var1 = var16[var5](var15, var14, var13, var12, var11);
                return var1;
            };
            var5 = undefined;
            var8 = var1.bind(var5)(var3, var2);
            var3 = var8.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 116; continue _fun0002 }
 50:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {};
            var2['title'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var7 = var6().value;
                    var12 = var2;
                    var12 = var12 === var8;
                    var3 = var12;
                    if(var12) { _fun0004_ip = 34; continue _fun0004 }
 31:
                    var5 = var7;
 34:
                    var7 = var5;
                    var4 = var7;
                    var _closure3_slot0 = var7;
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0004_ip = 72; continue _fun0004 }
 52:
                    var7 = var6().value;
                    var12 = var2;
                    var12 = var12 === var8;
                    var3 = var12;
                    if(var12) { _fun0004_ip = 72; continue _fun0004 }
 69:
                    var5 = var7;
 72:
                    var10 = var5;
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0004_ip = 103; continue _fun0004 }
 83:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0004_ip = 103; continue _fun0004 }
 100:
                    var5 = var6;
 103: // try_start_0
                    var11 = var5.label;
 108: // try_end0
                    var5 = var3;
                    if(var5) { _fun0004_ip = 117; continue _fun0004 }
 114:
                    var2.return();
 117:
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot13;
                    var5 = {};
                    var5['toggleName'] = var4;
                    var5['description'] = var11;
                    var5['value'] = var10;
                    var9 = function onValueChange(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.toggle;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var5['onValueChange'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var4;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0004_ip = 170; continue _fun0004;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(var3) { _fun0004_ip = 176; continue _fun0004 }
 173:
                    var2.return();
 176:
                    throw var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 116:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CATEGORY_LABELS;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['wrap'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingVertical'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DevToolsTogglesScreen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = _closure1_slot11;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var11 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 15;
            var1 = var23[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var3 = true;
            var1['includeKeyboardHeight'] = var3;
            var1 = var2.bind(var4)(var1);
            var7 = var1.insets;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = '';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var12 = 0;
            var2 = var3[var12];
            var _closure2_slot0 = var2;
            var1 = 1;
            var22 = var3[var1];
            var20 = _closure1_slot0;
            var1 = 12;
            var3 = var23[var1];
            var13 = var20.bind(var4)(var3);
            var8 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = var23[var1];
            var1 = var20.bind(var4)(var1);
            var24 = var1.statesWillNeverBeEqual;
            var26 = function() {
                var2 = _closure1_slot6;
                var1 = var2.allWithDescriptions;
                var3 = var1.bind(var2)();
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var5 = undefined;
                        var2 = var2 === var5;
                        var4 = undefined;
                        if(var2) { _fun0006_ip = 27; continue _fun0006 }
 24:
                        var4 = var3;
 27:
                        if(var2) { _fun0006_ip = 41; continue _fun0006 }
 30:
                        var3 = var6().value;
                        var3 = var1;
                        var2 = var3 === var5;
 41:
                        var3 = undefined;
                        if(var2) { _fun0006_ip = 71; continue _fun0006 }
 46:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var5;
                        var3 = undefined;
                        var2 = var6;
                        if(var6) { _fun0006_ip = 71; continue _fun0006 }
 65:
                        var3 = var7;
                        var2 = var6;
 71:
                        if(var2) { _fun0006_ip = 77; continue _fun0006 }
 74:
                        var1.return();
 77:
                        var2 = _closure1_slot12;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var5)(var1, var4, var3);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var13;
            var27 = var6;
            var25 = var3;
            var17 = var28[var8](var27, var26, var25, var24, var23);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var5.wrap;
            var1['style'] = var6;
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var8 = 8;
            var8 = var23[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var7 = var7.bottom;
            var7 = var8 + var7;
            var6['paddingBottom'] = var7;
            var5[1] = var6;
            var1['contentContainerStyle'] = var5;
            var7 = _closure1_slot10;
            var8 = 16;
            var5 = var23[var8];
            var5 = var20.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var5['spacing'] = var8;
            var15 = 13;
            var8 = var23[var15];
            var8 = var20.bind(var4)(var8);
            var11 = var8.TableRowGroup;
            var8 = {};
            var13 = 'Actions';
            var8['title'] = var13;
            var18 = _closure1_slot9;
            var14 = 9;
            var13 = var23[var14];
            var13 = var20.bind(var4)(var13);
            var16 = var13.TableRow;
            var13 = {'label': 'Clear All', 'variant': 'danger', 'onPress': null, 'arrow': true};
            var19 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.clearAll;
                var2 = var2.bind(var5)();
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearAll;
                var2 = var2.bind(var3)();
                return var1;
            };
            var13['onPress'] = var19;
            var16 = var18.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var18 = _closure1_slot9;
            var14 = var23[var14];
            var14 = var20.bind(var4)(var14);
            var16 = var14.TableRow;
            var14 = {};
            var21 = _closure1_slot9;
            var19 = 18;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.SearchField;
            var19 = {'size': 'md', 'placeholder': 'Search design toggles'};
            var19['onChange'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var14['label'] = var19;
            var14 = var18.bind(var4)(var16, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var11 = var7.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var17.length;
            var12 = var11 > var12;
            var11 = null;
            if(!var12) { _fun0005_ip = 560; continue _fun0005 }
 494:
            var14 = _closure1_slot9;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var13.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var15 = 'Design Toggles';
            var12['title'] = var15;
            var16 = var17.map;
            var15 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var7 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0007_ip = 29; continue _fun0007 }
 26:
                    var4 = var7;
 29:
                    var _closure3_slot0 = var4;
                    var7 = undefined;
                    if(var2) { _fun0007_ip = 63; continue _fun0007 }
 38:
                    var9 = var3().value;
                    var8 = var1;
                    var8 = var8 === var5;
                    var7 = undefined;
                    var2 = var8;
                    if(var8) { _fun0007_ip = 63; continue _fun0007 }
 57:
                    var7 = var9;
                    var2 = var8;
 63:
                    var8 = undefined;
                    if(var2) { _fun0007_ip = 93; continue _fun0007 }
 68:
                    var9 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var8 = undefined;
                    var2 = var3;
                    if(var3) { _fun0007_ip = 93; continue _fun0007 }
 87:
                    var8 = var9;
                    var2 = var3;
 93:
                    if(var2) { _fun0007_ip = 99; continue _fun0007 }
 96:
                    var1.return();
 99:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var1['toggleName'] = var4;
                    var1['description'] = var8;
                    var1['value'] = var7;
                    var6 = function onValueChange(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.toggle;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onValueChange'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var15 = var16.bind(var17)(var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 560:
            var8[1] = var11;
            var11 = global;
            var12 = var11.Object;
            var11 = var12.entries;
            var10 = _closure1_slot8;
            var11 = var11.bind(var12)(var10);
            var10 = var11.map;
            var9 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var6 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 27; continue _fun0008 }
 24:
                    var4 = var6;
 27:
                    var6 = undefined;
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
 32:
                    var7 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var6 = undefined;
                    var2 = var3;
                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
 51:
                    var6 = var7;
                    var2 = var3;
 57:
                    if(var2) { _fun0008_ip = 63; continue _fun0008 }
 60:
                    var1.return();
 63:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var7 = global;
                    var7 = var7.parseInt;
                    var7 = var7.bind(var5)(var4);
                    var1['category'] = var7;
                    var1['title'] = var6;
                    var6 = _closure2_slot0;
                    var1['query'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();