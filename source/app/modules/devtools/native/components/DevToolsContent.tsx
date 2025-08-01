// app/modules/devtools/native/components/DevToolsContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function DevToolsContentSortButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.screenKey;
            var _closure2_slot0 = var2;
            var7 = var1.start;
            var12 = var1.end;
            var1 = _closure1_slot12;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var13.sortingIcons;
            var1['style'] = var5;
            var15 = _closure1_slot10;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var14 = 13;
            var5 = var5[var14];
            var5 = var6.bind(var4)(var5);
            var8 = var5.PressableOpacity;
            var5 = {};
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var5.bind(var6)(var2);
                var2 = 11;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateSortOrder;
                var3 = _closure2_slot0;
                var2 = 'up';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5['onPress'] = var6;
            var5['disabled'] = var7;
            var10 = var13.button;
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0001_ip = 128; continue _fun0001 }
 122:
            var7 = var13.disabledButton;
 128:
            var6[1] = var7;
            var5['style'] = var6;
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var6 = 'Shift up';
            var5['accessibilityLabel'] = var6;
            var18 = _closure1_slot10;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 15;
            var16 = var6[var16];
            var16 = var7.bind(var4)(var16);
            var17 = var16.ArrowSmallUpIcon;
            var16 = {};
            var16 = var18.bind(var4)(var17, var16);
            var5['children'] = var16;
            var8 = var15.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot10;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var11 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var5.bind(var6)(var2);
                var2 = 11;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateSortOrder;
                var3 = _closure2_slot0;
                var2 = 'down';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6['onPress'] = var11;
            var6['disabled'] = var12;
            var14 = var13.button;
            var11 = new Array(2);
            var11[0] = var14;
            if(!var12) { _fun0001_ip = 269; continue _fun0001 }
 263:
            var12 = var13.disabledButton;
 269:
            var11[1] = var12;
            var6['style'] = var11;
            var6['accessibilityRole'] = var10;
            var10 = 'Shift down';
            var6['accessibilityLabel'] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 16;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ArrowSmallDownIcon;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot5 = var5;
    var2 = var2.ScrollView;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var11 = 8;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['padding'] = var13;
    var2['devToolsContainer'] = var10;
    var10 = {};
    var13 = 'row';
    var10['flexDirection'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['gap'] = var13;
    var2['sortingIcons'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
    var10['backgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var10['width'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var10['height'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var11 = 'center';
    var10['justifyContent'] = var11;
    var10['alignItems'] = var11;
    var2['button'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var2['disabledButton'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot12 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        var1 = arg1;
        var11 = var1.label;
        var9 = var1.value;
        var4 = _closure1_slot11;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 12;
        var1 = var10[var6];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot10;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {};
        var10 = 'text-xs/semibold';
        var6['variant'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot13 = var2;
    var5 = var8.memo;
    var4 = function DevToolsContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.title;
            var2 = var1.embedded;
            var1 = _closure1_slot12;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 17;
            var1 = var12[var1];
            var4 = var3.bind(var5)(var1);
            var1 = var4.useNavigation;
            var1 = var1.bind(var4)();
            var _closure2_slot0 = var1;
            var4 = _closure1_slot1;
            var1 = 18;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var9 = var1.bind(var5)();
            var1 = function useDevToolsContentSublabels() {
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var6 = var5[var4];
                var3 = undefined;
                var10 = var7.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot7;
                        var1 = var3.getCurrentBuildOverride;
                        var1 = var1.bind(var3)();
                        var5 = var1.overrides;
                        var3 = null;
                        var6 = var3 == var5;
                        var4 = undefined;
                        var1 = undefined;
                        if(var6) { _fun0003_ip = 80; continue _fun0003 }
 36:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.DEVICE_FIELD;
                        var2 = var5[var2];
                        var3 = var3 == var2;
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 80; continue _fun0003 }
 75:
                        var1 = var2.id;
 80:
                        return var1;
                    }
                };
                var6 = var9.bind(var10)(var8, var6);
                var _closure3_slot0 = var6;
                var6 = var5[var4];
                var10 = var7.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var4 = _closure1_slot8;
                    var1 = var4.getAllExperimentOverrideDescriptors;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.length;
                    return var1;
                };
                var6 = var9.bind(var10)(var8, var6);
                var4 = var5[var4];
                var9 = var7.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var4 = _closure1_slot9;
                    var1 = var4.getClientOverrides;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.length;
                    return var1;
                };
                var4 = var8.bind(var9)(var7, var4);
                var4 = var6 + var4;
                var _closure3_slot1 = var4;
                var4 = _closure1_slot1;
                var2 = 11;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var3 = var2.bind(var3)();
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg1;
                        var1 = var2[Symbol.iterator];
                        var2 = var1().next;
                        var4 = var2().value;
                        var2 = var1;
                        var5 = undefined;
                        var3 = var2 === var5;
                        var2 = undefined;
                        if(var3) { _fun0004_ip = 27; continue _fun0004 }
 24:
                        var2 = var4;
 27:
                        if(var3) { _fun0004_ip = 33; continue _fun0004 }
 30:
                        var1.return();
 33:
                        var1 = 'buildOverride';
                        if(!(var1 !== var2)) { _fun0004_ip = 117; continue _fun0004 }
 41:
                        var1 = 'experiments';
                        if(!(var1 !== var2)) { _fun0004_ip = 51; continue _fun0004 }
 49:
                        return var5;
 51:
                        var2 = _closure3_slot1;
                        var1 = 0;
                        var2 = var2 > var1;
                        var1 = undefined;
                        if(!var2) { _fun0004_ip = 115; continue _fun0004 }
 69:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot13;
                        var2 = {};
                        var7 = 'Experiments overridden: ';
                        var2['label'] = var7;
                        var7 = _closure3_slot1;
                        var6 = var7.toString;
                        var6 = var6.bind(var7)();
                        var2['value'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 115:
                        return var1;
 117:
                        var2 = _closure3_slot0;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = undefined;
                        if(!var2) { _fun0004_ip = 172; continue _fun0004 }
 135:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot13;
                        var2 = {};
                        var7 = 'Build override: ';
                        var2['label'] = var7;
                        var6 = _closure3_slot0;
                        var2['value'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 172:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var13 = _closure1_slot4;
            var11 = var13.useState;
            var1 = false;
            var13 = var11.bind(var13)(var1);
            var11 = _closure1_slot3;
            var1 = 2;
            var11 = var11.bind(var5)(var13, var1);
            var1 = 0;
            var1 = var11[var1];
            var _closure2_slot2 = var1;
            var1 = 1;
            var1 = var11[var1];
            var _closure2_slot3 = var1;
            var1 = 11;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var11 = var1.bind(var5)();
            var _closure2_slot4 = var11;
            var4 = _closure1_slot10;
            var1 = 19;
            var1 = var12[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TableRowGroup;
            var1 = {};
            var1['title'] = var10;
            var10 = var11.map;
            var6 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var13 = arg2;
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var7 = var6().value;
                    var11 = var2;
                    var11 = var11 === var8;
                    var3 = var11;
                    if(var11) { _fun0005_ip = 37; continue _fun0005 }
 34:
                    var5 = var7;
 37:
                    var7 = var5;
                    var4 = var7;
                    var _closure3_slot0 = var7;
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0005_ip = 75; continue _fun0005 }
 55:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0005_ip = 75; continue _fun0005 }
 72:
                    var5 = var6;
 75: // try_start_0
                    var12 = var5.headerTitle;
                    var10 = var5.Icon;
 87: // try_end0
                    var5 = var3;
                    if(var5) { _fun0005_ip = 96; continue _fun0005 }
 93:
                    var2.return();
 96:
                    var15 = var13;
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 20;
                    var5 = var14[var5];
                    var5 = var6.bind(var8)(var5);
                    var6 = var5.TableRow;
                    var5 = {};
                    var5['label'] = var12;
                    var12 = _closure2_slot1;
                    var12 = var12[var13];
                    var5['subLabel'] = var12;
                    var13 = _closure1_slot10;
                    var12 = var10;
                    var10 = {};
                    var10 = var13.bind(var8)(var12, var10);
                    var5['icon'] = var10;
                    var12 = _closure2_slot2;
                    var10 = !var12;
                    var5['arrow'] = var10;
                    var10 = undefined;
                    if(!var12) { _fun0005_ip = 248; continue _fun0005 }
 190:
                    var13 = _closure1_slot10;
                    var12 = _closure1_slot14;
                    var11 = {};
                    var16 = var4;
                    var11['screenKey'] = var16;
                    var16 = 0;
                    var16 = var16 === var15;
                    var11['start'] = var16;
                    var14 = _closure2_slot4;
                    var16 = var14.length;
                    var14 = 1;
                    var14 = var16 - var14;
                    var14 = var15 === var14;
                    var11['end'] = var14;
                    var10 = var13.bind(var8)(var12, var11);
 248:
                    var5['trailing'] = var10;
                    var10 = function onLongPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var2);
                            var5 = var6.open;
                            var4 = {};
                            var8 = _closure2_slot2;
                            var7 = 'sorting-enabled';
                            if(!var8) { _fun0006_ip = 55; continue _fun0006 }
 49:
                            var7 = 'sorting-disabled';
 55:
                            var4['key'] = var7;
                            var8 = _closure2_slot2;
                            var7 = 'Sorting enabled';
                            if(!var8) { _fun0006_ip = 78; continue _fun0006 }
 72:
                            var7 = 'Sorting disabled';
 78:
                            var4['content'] = var7;
                            var4 = var5.bind(var6)(var4);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 14;
                            var4 = var7[var3];
                            var5 = var6.bind(var1)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.HapticFeedbackTypes;
                            var3 = var3.IMPACT_MEDIUM;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot3;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var1 = !var1;
                                return var1;
                            };
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var5['onLongPress'] = var10;
                    var9 = function onPress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = _closure2_slot2;
                            if(var2) { _fun0007_ip = 98; continue _fun0007 }
 10:
                            var2 = _closure2_slot0;
                            var3 = var2.push;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0007_ip = 77; continue _fun0007 }
 25:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.navigateToDevTools;
                            var2 = {};
                            var5 = _closure3_slot0;
                            var2['screenKey'] = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun0007_ip = 98; continue _fun0007;
 77:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
 98:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5['onPress'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var4;
 285: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0005_ip = 291; continue _fun0005;
 289:
                    CatchBlockStart(arg_register=0);
 291:
                    if(var3) { _fun0005_ip = 297; continue _fun0005 }
 294:
                    var2.return();
 297:
                    throw var1;
                }
            };
            var6 = var10.bind(var11)(var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = var6;
            if(var2) { _fun0002_ip = 310; continue _fun0002 }
 229:
            var4 = _closure1_slot10;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.devToolsContainer;
            var2['style'] = var7;
            var7 = {};
            var9 = var9.bottom;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 8;
            var8 = var11[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var8 = var9 + var8;
            var7['paddingBottom'] = var8;
            var2['contentContainerStyle'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 310:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/devtools/native/components/DevToolsContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DevToolsContentSubLabel'] = var2;
    return var1;
})();