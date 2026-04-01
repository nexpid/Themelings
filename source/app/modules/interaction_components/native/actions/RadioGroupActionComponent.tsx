// app/modules/interaction_components/native/actions/RadioGroupActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var8 = var4.Fragment;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 'function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}';
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = var7.type;
            var _closure2_slot0 = var1;
            var16 = var7.options;
            var _closure2_slot1 = var16;
            var6 = var7.required;
            var _closure2_slot2 = var6;
            var5 = _closure1_slot3;
            var2 = var5.useRef;
            var17 = null;
            var9 = var2.bind(var5)(var17);
            var _closure2_slot3 = var9;
            var4 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var16;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.default;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.value;
case 2:
                    return var1;
                }
            };
            var11 = var4.bind(var5)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var3 = var5.useComponentState;
            var8 = var17 != var11;
            var2 = undefined;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = {};
            var8['type'] = var1;
            var8['value'] = var11;
            var2 = var8;
case 4:
            var2 = var3.bind(var5)(var7, var2);
            var7 = var2.state;
            var _closure2_slot4 = var7;
            var2 = var2.executeStateUpdate;
            var _closure2_slot5 = var2;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot4;
                    var4 = var3.type;
case 6:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure2_slot4;
                    var1 = var2.value;
case 8:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var1, var2);
            var _closure2_slot6 = var18;
            var12 = var17 != var18;
            var _closure2_slot7 = var12;
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 3;
            var1 = var19[var14];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function p() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 4;
                    var3 = var3[var9];
                    var7 = undefined;
                    var13 = var4.bind(var7)(var3);
                    var12 = var13.withSpring;
                    var3 = _closure2_slot7;
                    var11 = 0;
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var11 = 60;
case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 5;
                    var10 = var3[var8];
                    var10 = var4.bind(var7)(var10);
                    var10 = var10.SUBTLE_SPRING;
                    var10 = var12.bind(var13)(var11, var10);
                    var1['maxHeight'] = var10;
                    var3 = var3[var9];
                    var13 = var4.bind(var7)(var3);
                    var12 = var13.withSpring;
                    var3 = _closure2_slot7;
                    var11 = 0;
                    if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = 8;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = var3[var8];
                    var10 = var4.bind(var7)(var10);
                    var10 = var10.SUBTLE_SPRING;
                    var10 = var12.bind(var13)(var11, var10);
                    var1['marginTop'] = var10;
                    var3 = var3[var9];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withSpring;
                    var6 = _closure2_slot7;
                    var5 = 0;
                    if(!var6) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = 1;
case 14:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var8 = 4;
            var8 = var19[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.withSpring;
            var5['withSpring'] = var8;
            var5['hasValue'] = var12;
            var8 = 5;
            var8 = var19[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.SUBTLE_SPRING;
            var5['SUBTLE_SPRING'] = var8;
            var1['__closure'] = var5;
            var5 = 1287549755250.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot7;
            var1['__initData'] = var5;
            var11 = var2.bind(var3)(var1);
            var15 = function onChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var3 = '';
                    if(!(var3 !== var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = _closure2_slot6;
                    if(!(var4 === var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0005_ip = 18; continue _fun0005 }
case 20:
                    var5 = _closure2_slot5;
                    var4 = {};
                    var6 = _closure2_slot0;
                    var4['type'] = var6;
                    var4['value'] = var2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    _fun0005_ip = 16; continue _fun0005;
case 18:
                    var6 = _closure2_slot5;
                    var5 = {};
                    var4 = _closure2_slot0;
                    var5['type'] = var4;
                    var5['value'] = var1;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 22:
                    var1 = var2.setValue;
                    var1 = var1.bind(var2)(var3);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot8 = var15;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = _closure1_slot4;
            var5 = 6;
            var5 = var19[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.TableRadioGroup;
            var5 = {};
            var19 = false;
            var5['hasIcons'] = var19;
            var19 = var17 != var18;
            var17 = '';
            if(!var19) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = var18;
case 23:
            var5['defaultValue'] = var17;
            var5['onChange'] = var15;
            var5['groupRef'] = var9;
            var15 = var16.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot4;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var6 = var1.label;
                var2['label'] = var6;
                var6 = var1.description;
                var2['subLabel'] = var6;
                var6 = var1.value;
                var2['value'] = var6;
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var15.bind(var16)(var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var14];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var11;
            var11 = !var12;
            var7['accessibilityElementsHidden'] = var11;
            var11 = 'no-hide-descendants';
            if(!var12) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var11 = 'auto';
case 27:
            var7['importantForAccessibility'] = var11;
            var12 = _closure1_slot4;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 8;
            var10 = var18[var14];
            var10 = var17.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.TableRow;
            var15 = var14.Icon;
            var14 = {};
            var16 = 9;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.XSmallIcon;
            var14['IconComponent'] = var16;
            var14 = var12.bind(var4)(var15, var14);
            var10['icon'] = var14;
            var14 = 10;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["5uAtZN"];
            var14 = var15.bind(var16)(var14);
            var10['label'] = var14;
            var13 = function onPress() {
                var3 = _closure2_slot8;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var10['onPress'] = var13;
            var13 = true;
            var10['start'] = var13;
            var10['end'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 25:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/RadioGroupActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();