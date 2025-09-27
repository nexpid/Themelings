// app/modules/main_tabs_v2/native/settings/screens/quest_preview/MobileSearchableSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var2 = function MobileSearchableSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = var5.options;
            var _closure2_slot0 = var1;
            var16 = var5.value;
            var _closure2_slot1 = var16;
            var2 = var5.onChange;
            var _closure2_slot2 = var2;
            var23 = var5.placeholder;
            var4 = undefined;
            if(!(var23 === var4)) { _fun0001_ip = 103; continue _fun0001 }
 45:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var6 = var9[var3];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.XqMe3N;
            var23 = var6.bind(var7)(var3);
 103:
            var3 = var5.allowCustomValue;
            if(!(var3 === var4)) { _fun0001_ip = 115; continue _fun0001 }
 113:
            var3 = false;
 115:
            var _closure2_slot3 = var3;
            var12 = var5.isDisabled;
            if(!(var12 === var4)) { _fun0001_ip = 131; continue _fun0001 }
 129:
            var12 = false;
 131:
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var5 = _closure1_slot9;
            var11 = var5.bind(var4)();
            _closure2_slot5 = var11;
            var7 = _closure1_slot3;
            var6 = var7.useState;
            var5 = null;
            var8 = var5 != var16;
            var5 = '';
            if(!var8) { _fun0001_ip = 207; continue _fun0001 }
 204:
            var5 = var16;
 207:
            var6 = var6.bind(var7)(var5);
            var5 = _closure1_slot2;
            var15 = 2;
            var5 = var5.bind(var4)(var6, var15);
            var8 = 0;
            var22 = var5[var8];
            _closure2_slot6 = var22;
            var9 = 1;
            var5 = var5[var9];
            _closure2_slot7 = var5;
            var6 = _closure1_slot3;
            var5 = var6.useState;
            var14 = false;
            var6 = var5.bind(var6)(var14);
            var5 = _closure1_slot2;
            var5 = var5.bind(var4)(var6, var15);
            var6 = var5[var8];
            var5 = var5[var9];
            _closure2_slot8 = var5;
            var7 = _closure1_slot3;
            var5 = var7.useState;
            var7 = var5.bind(var7)(var14);
            var5 = _closure1_slot2;
            var7 = var5.bind(var4)(var7, var15);
            var5 = var7[var8];
            _closure2_slot9 = var5;
            var7 = var7[var9];
            _closure2_slot10 = var7;
            var15 = _closure1_slot3;
            var9 = var15.useEffect;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var22;
            var7[2] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0002_ip = 28; continue _fun0002 }
 16:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot6;
                    var2 = var4 === var3;
 28:
                    if(var2) { _fun0002_ip = 35; continue _fun0002 }
 31:
                    var2 = _closure2_slot9;
 35:
                    if(var2) { _fun0002_ip = 53; continue _fun0002 }
 38:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var9.bind(var15)(var5, var7);
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var5 = new Array(3);
            var5[0] = var1;
            var5[1] = var22;
            var5[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot6;
                    var3 = function(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var4 = arg2;
                            var3 = var4.trim;
                            var5 = var3.bind(var4)();
                            var3 = '';
                            if(!(var3 !== var5)) { _fun0004_ip = 59; continue _fun0004 }
 26:
                            var3 = var4.toLowerCase;
                            var3 = var3.bind(var4)();
                            var _closure4_slot0 = var3;
                            var3 = var1.filter;
                            var2 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var3 = arg1;
                                    var2 = var3.label;
                                    var1 = var2.toLowerCase;
                                    var5 = var1.bind(var2)();
                                    var4 = var5.includes;
                                    var1 = _closure4_slot0;
                                    var1 = var4.bind(var5)(var1);
                                    if(var1) { _fun0005_ip = 67; continue _fun0005 }
 38:
                                    var4 = var3.value;
                                    var3 = var4.toLowerCase;
                                    var4 = var3.bind(var4)();
                                    var3 = var4.includes;
                                    var2 = _closure4_slot0;
                                    var1 = var3.bind(var4)(var2);
 67:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var1)(var2);
                            return var2;
 59:
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var5 = var3.bind(var1)(var5, var4);
                    var3 = _closure2_slot3;
                    var1 = var5;
                    if(!var3) { _fun0003_ip = 126; continue _fun0003 }
 38:
                    var4 = var5.length;
                    var3 = 0;
                    var1 = var5;
                    if(!(var3 === var4)) { _fun0003_ip = 126; continue _fun0003 }
 52:
                    var4 = _closure2_slot6;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var1 = var5;
                    if(!(var3 !== var4)) { _fun0003_ip = 126; continue _fun0003 }
 77:
                    var3 = {};
                    var5 = _closure2_slot6;
                    var4 = var5.trim;
                    var4 = var4.bind(var5)();
                    var3['label'] = var4;
                    var4 = _closure2_slot6;
                    var2 = var4.trim;
                    var2 = var2.bind(var4)();
                    var3['value'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 126:
                    return var1;
                }
            };
            var15 = var7.bind(var9)(var3, var5);
            _closure2_slot11 = var15;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var3 = var1.length;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure2_slot10;
                    var1 = undefined;
                    var3 = true;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var1)(var2);
                    var3 = _closure2_slot8;
                    var2 = var2.length;
                    var5 = 0;
                    var2 = var2 > var5;
                    if(var2) { _fun0006_ip = 59; continue _fun0006 }
 46:
                    var4 = _closure2_slot0;
                    var4 = var4.length;
                    var2 = var4 > var5;
 59:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var21 = var7.bind(var9)(var3, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var5 = new Array(2);
            var5[0] = var22;
            var5[1] = var2;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = var3.trim;
                    var3 = var2.bind(var3)();
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 60; continue _fun0007 }
 25:
                    var4 = _closure2_slot2;
                    var2 = _closure2_slot6;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot10;
                    var2 = false;
                    var4 = var4.bind(var3)(var2);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var3)(var2);
 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var7.bind(var9)(var3, var5);
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot2;
                var3 = var3.bind(var1)(var4);
                var4 = _closure2_slot10;
                var3 = false;
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot8;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var5.bind(var7)(var2, var3);
            _closure2_slot12 = var2;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var7 = var22.length;
            var2 = new Array(2);
            var2[0] = var7;
            var1 = var1.length;
            var2[1] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot6;
                    var2 = var2.length;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
 25:
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var2 = var1 > var4;
 38:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = function() {
                var4 = _closure2_slot8;
                var1 = undefined;
                var3 = false;
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot10;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var16 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = {'position': 'relative', 'zIndex': 100, 'overflow': 'visible'};
            var1['style'] = var5;
            var9 = _closure1_slot7;
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var5 = 7;
            var5 = var18[var5];
            var5 = var17.bind(var4)(var5);
            var7 = var5.TextField;
            var5 = {};
            var5['placeholder'] = var23;
            var5['value'] = var22;
            var5['onChange'] = var21;
            var5['onSubmitEditing'] = var20;
            var5['onFocus'] = var19;
            var5['onBlur'] = var16;
            var16 = 8;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.MagnifyingGlassIcon;
            var5['leadingIcon'] = var16;
            var16 = true;
            var5['isClearable'] = var16;
            var16 = 'search';
            var5['returnKeyType'] = var16;
            var5['accessibilityRole'] = var16;
            var5['autoCorrect'] = var14;
            var14 = 'none';
            var5['autoCapitalize'] = var14;
            var5['isDisabled'] = var12;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 754; continue _fun0001 }
 745:
            var7 = var15.length;
            var6 = var7 > var8;
 754:
            if(!var6) { _fun0001_ip = 836; continue _fun0001 }
 757:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.dropdownContainer;
            var7['style'] = var11;
            var12 = _closure1_slot7;
            var11 = _closure1_slot5;
            var10 = {'nestedScrollEnabled': true, 'showsVerticalScrollIndicator': false};
            var14 = var15.map;
            var13 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var9 = arg2;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var7 = _closure2_slot5;
                    var8 = var7.dropdownItem;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot11;
                    var11 = var8.length;
                    var8 = 1;
                    var8 = var11 - var8;
                    var8 = var9 === var8;
                    if(!var8) { _fun0009_ip = 79; continue _fun0009 }
 69:
                    var11 = _closure2_slot5;
                    var8 = var11.dropdownItemLast;
 79:
                    var7[1] = var8;
                    var3['style'] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot12;
                        var1 = _closure3_slot0;
                        var2 = var1.value;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var6;
                    var6 = _closure2_slot4;
                    var3['disabled'] = var6;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 9;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'text-normal'};
                    var10 = _closure2_slot5;
                    var10 = var10.dropdownItemText;
                    var6['style'] = var10;
                    var10 = var1.label;
                    var6['children'] = var10;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var8 = var1.value;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'option-';
                    var1 = '-';
                    var1 = var7.bind(var6)(var8, var1, var9);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 836:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var14 = 1;
    var8 = var6[var14];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var8 = var4.ScrollView;
    var _closure1_slot5 = var8;
    var4 = var4.TouchableOpacity;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var14;
    var4['searchField'] = var10;
    var10 = {};
    var12 = 5;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var10['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10['marginTop'] = var15;
    var10['borderWidth'] = var14;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var10['borderColor'] = var15;
    var15 = 'absolute';
    var10['position'] = var15;
    var15 = '100%';
    var10['top'] = var15;
    var10['left'] = var11;
    var10['right'] = var11;
    var15 = 999999;
    var10['zIndex'] = var15;
    var15 = 30;
    var10['elevation'] = var15;
    var15 = '#000';
    var10['shadowColor'] = var15;
    var15 = {'width': 0, 'height': 6};
    var10['shadowOffset'] = var15;
    var15 = 0.4;
    var10['shadowOpacity'] = var15;
    var15 = 8;
    var10['shadowRadius'] = var15;
    var15 = 250;
    var10['maxHeight'] = var15;
    var4['dropdownContainer'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var10['padding'] = var15;
    var10['borderBottomWidth'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_FAINT;
    var10['borderBottomColor'] = var12;
    var4['dropdownItem'] = var10;
    var10 = {};
    var10['borderBottomWidth'] = var11;
    var4['dropdownItemLast'] = var10;
    var10 = {};
    var11 = 14;
    var10['fontSize'] = var11;
    var4['dropdownItemText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/quest_preview/MobileSearchableSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['MobileSearchableSelect'] = var2;
    return var1;
})();