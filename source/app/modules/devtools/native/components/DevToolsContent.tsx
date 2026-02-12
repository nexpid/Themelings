// app/modules/devtools/native/components/DevToolsContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function DevToolsContentSortButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.screenKey;
            var _closure2_slot0 = var2;
            var10 = var1.start;
            var12 = var1.end;
            var1 = _closure1_slot12;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var13.sortingIcons;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var14 = 15;
            var5 = var5[var14];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var8 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
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
            var5['onPress'] = var8;
            var5['disabled'] = var10;
            var15 = var13.button;
            var8 = new Array(2);
            var8[0] = var15;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var13.disabledButton;
case 2:
            var8[1] = var10;
            var5['style'] = var8;
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var8 = 'Shift up';
            var5['accessibilityLabel'] = var8;
            var8 = _closure1_slot14;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var11 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
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
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var13.disabledButton;
case 4:
            var11[1] = var12;
            var6['style'] = var11;
            var6['accessibilityRole'] = var10;
            var10 = 'Shift down';
            var6['accessibilityLabel'] = var10;
            var9 = _closure1_slot15;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var2 = var13.bind(var1)(var2);
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
    var2 = var13.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.jsx;
    var _closure1_slot10 = var10;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var11 = {};
    var12 = 8;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['padding'] = var14;
    var2['devToolsContainer'] = var11;
    var11 = {};
    var14 = 'row';
    var11['flexDirection'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['gap'] = var14;
    var2['sortingIcons'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var11['backgroundColor'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var11['width'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var11['height'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var11['borderRadius'] = var12;
    var12 = 'center';
    var11['justifyContent'] = var12;
    var11['alignItems'] = var12;
    var2['button'] = var11;
    var11 = {};
    var12 = 0.5;
    var11['opacity'] = var12;
    var2['disabledButton'] = var11;
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
        var1 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
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
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ArrowSmallUpIcon;
    var5 = {};
    var5 = var10.bind(var1)(var9, var5);
    var _closure1_slot14 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ArrowSmallDownIcon;
    var5 = {};
    var5 = var10.bind(var1)(var9, var5);
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var4 = function DevToolsContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var4 = var5[var3];
                var6 = undefined;
                var10 = var8.bind(var6)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot7;
                        var1 = var3.getCurrentBuildOverride;
                        var1 = var1.bind(var3)();
                        var5 = var1.overrides;
                        var3 = null;
                        var6 = var3 == var5;
                        var4 = undefined;
                        var1 = undefined;
                        if(var6) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.DEVICE_FIELD;
                        var2 = var5[var2];
                        var3 = var3 == var2;
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                        var1 = var2.id;
case 6:
                        return var1;
                    }
                };
                var7 = var9.bind(var10)(var7, var4);
                var _closure3_slot0 = var7;
                var4 = var5[var3];
                var11 = var8.bind(var6)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() {
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
                var4 = var10.bind(var11)(var9, var4);
                var3 = var5[var3];
                var10 = var8.bind(var6)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
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
                var3 = var9.bind(var10)(var8, var3);
                var3 = var4 + var3;
                var _closure3_slot1 = var3;
                var4 = _closure1_slot1;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var6)(var3);
                var3 = var3.bind(var6)();
                var5 = _closure1_slot10;
                var4 = _closure1_slot13;
                var2 = {};
                var8 = 'Build override: ';
                var2['label'] = var8;
                var2['value'] = var7;
                var2 = var5.bind(var6)(var4, var2);
                var _closure3_slot2 = var2;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var5 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var4 = var3 === var1;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                        var3 = var5;
case 9:
                        if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2.return();
case 11:
                        var2 = 'buildOverride';
                        if(!(var2 !== var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var2 = 'experiments';
                        if(!(var2 !== var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        return var1;
case 15:
                        var3 = _closure3_slot1;
                        var2 = 0;
                        var3 = var3 > var2;
                        var2 = undefined;
                        if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var5 = _closure1_slot10;
                        var4 = _closure1_slot13;
                        var3 = {};
                        var7 = 'Experiments overridden: ';
                        var3['label'] = var7;
                        var7 = _closure3_slot1;
                        var6 = var7.toString;
                        var6 = var6.bind(var7)();
                        var3['value'] = var6;
                        var2 = var5.bind(var1)(var4, var3);
case 17:
                        return var2;
case 13:
                        var4 = _closure3_slot0;
                        var3 = null;
                        var3 = var3 != var4;
                        var1 = undefined;
                        if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var1 = _closure3_slot2;
case 19:
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
case 0:
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
                    if(var11) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var5 = var7;
case 21:
                    var7 = var5;
                    var4 = var7;
                    var _closure3_slot0 = var7;
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0005_ip = 8; continue _fun0005 }
case 23:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0005_ip = 8; continue _fun0005 }
case 24:
                    var5 = var6;
case 8: // try_start_0
                    var12 = var5.headerTitle;
                    var10 = var5.Icon;
case 25: // try_end0
                    var5 = var3;
                    if(var5) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var2.return();
case 26:
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
                    if(!var12) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var13 = _closure1_slot10;
                    var12 = _closure1_slot16;
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
case 28:
                    var5['trailing'] = var10;
                    var10 = function onLongPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                            if(!var8) { _fun0006_ip = 23; continue _fun0006 }
case 16:
                            var7 = 'sorting-disabled';
case 23:
                            var4['key'] = var7;
                            var8 = _closure2_slot2;
                            var7 = 'Sorting enabled';
                            if(!var8) { _fun0006_ip = 30; continue _fun0006 }
case 24:
                            var7 = 'Sorting disabled';
case 30:
                            var4['content'] = var7;
                            var4 = var5.bind(var6)(var4);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 16;
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
case 0:
                            var2 = _closure2_slot2;
                            if(var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                            var2 = _closure2_slot0;
                            var3 = var2.push;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
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
                            _fun0007_ip = 31; continue _fun0007;
case 33:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
case 31:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5['onPress'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var4;
case 35: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0005_ip = 36; continue _fun0005;
case 37:
                    CatchBlockStart(arg_register=0);
case 36:
                    if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2.return();
case 38:
                    throw var1;
                }
            };
            var6 = var10.bind(var11)(var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = var6;
            if(var2) { _fun0002_ip = 40; continue _fun0002 }
case 41:
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
case 40:
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