// app/uikit-native/refresh/form/FormSwitchRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function FormSwitchRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var9 = var5.onValueChange;
            var _closure2_slot0 = var9;
            var10 = var5.value;
            var _closure2_slot1 = var10;
            var11 = var5.disabled;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 37; continue _fun0001 }
 35:
            var11 = false;
 37:
            var24 = var5.label;
            var16 = var5.subLabel;
            var7 = var5.accessibilityHint;
            var21 = var5.trailing;
            var25 = var5.numberOfLines;
            var8 = var5.switchProps;
            if(!(var8 === var4)) { _fun0001_ip = 78; continue _fun0001 }
 76:
            var8 = {};
 78:
            var3 = {'onValueChange': 0, 'value': 0, 'disabled': 0, 'label': 0, 'subLabel': 0, 'accessibilityHint': 0, 'trailing': 0, 'numberOfLines': 0, 'switchProps': 0};
            var20 = null;
            var29 = var3;
            var28 = null;
            var1 = silentSetPrototypeOf(var29, var28);
            var1 = 0;
            var29 = {};
            var28 = var5;
            var27 = var3;
            var15 = copyDataProperties(var29, var28, var27);
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var14 = var2.bind(var3)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var6 = var2.bind(var3)(var10);
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3.bind(var4)(var6, var2);
            var6 = var2[var1];
            _closure2_slot2 = var6;
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot3 = var1;
            var13 = _closure1_slot4;
            var3 = var13.useEffect;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure2_slot3;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var13)(var1, var2);
            var13 = 'string';
            var1 = typeof var24;
            var2 = undefined;
            if(!(var13 === var1)) { _fun0001_ip = 247; continue _fun0001 }
 244:
            var2 = var24;
 247:
            var1 = var20 != var2;
            if(!var1) { _fun0001_ip = 261; continue _fun0001 }
 254:
            var3 = typeof var16;
            var1 = var13 === var3;
 261:
            var13 = var2;
            if(!var1) { _fun0001_ip = 293; continue _fun0001 }
 267:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ' ';
            var1 = var3.bind(var1)(var16);
            var13 = var2 + var1;
 293:
            var3 = _closure1_slot6;
            var22 = _closure1_slot1;
            var26 = _closure1_slot2;
            var1 = 5;
            var1 = var26[var1];
            var2 = var22.bind(var4)(var1);
            var1 = {};
            var29 = var1;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            var18 = _closure1_slot7;
            var17 = _closure1_slot5;
            var15 = {};
            var19 = _closure1_slot8;
            var19 = var19.trailing;
            var15['style'] = var19;
            var23 = _closure1_slot6;
            var19 = 6;
            var19 = var26[var19];
            var22 = var22.bind(var4)(var19);
            var19 = {};
            var19['numberOfLines'] = var25;
            var19['text'] = var24;
            var22 = var23.bind(var4)(var22, var19);
            var19 = new Array(2);
            var19[0] = var22;
            var20 = var20 != var21;
            if(!var20) { _fun0001_ip = 404; continue _fun0001 }
 401:
            var20 = var21;
 404:
            var19[1] = var20;
            var15['children'] = var19;
            var17 = var18.bind(var4)(var17, var15);
            var15 = 'label';
            var1[var15] = var17;
            var15 = 'subLabel';
            var1[var15] = var16;
            var15 = 'disabled';
            var1[var15] = var11;
            var15 = undefined;
            if(!var14) { _fun0001_ip = 455; continue _fun0001 }
 450:
            var15 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 24; continue _fun0002 }
 16:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 27:
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
 455:
            var14 = 'onPress';
            var1[var14] = var15;
            var15 = true;
            var14 = 'accessible';
            var1[var14] = var15;
            var14 = function onAccessibilityTap() {
                var3 = _closure2_slot3;
                var1 = _closure2_slot2;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 31; continue _fun0003 }
 13:
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot2;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = 'onAccessibilityTap';
            var1[var12] = var14;
            var14 = 'switch';
            var12 = 'accessibilityRole';
            var1[var12] = var14;
            var12 = 'accessibilityLabel';
            var1[var12] = var13;
            var12 = {};
            var12['disabled'] = var11;
            var12['checked'] = var6;
            var6 = 'accessibilityState';
            var1[var6] = var12;
            var6 = 'accessibilityHint';
            var1[var6] = var7;
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 7;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['disabled'] = var11;
            var5['value'] = var10;
            var5['onValueChange'] = var9;
            var29 = var5;
            var28 = var8;
            var8 = copyDataProperties(var29, var28);
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'trailing';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var8 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'row', 'width': '100%', 'alignItems': 'center'};
    var4['trailing'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormSwitchRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSwitchRowContainer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot4;
            var2 = var3.useContext;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot6;
            if(var1) { _fun0004_ip = 80; continue _fun0004 }
 56:
            var2 = _closure1_slot9;
            var1 = {};
            var12 = var1;
            var11 = var9;
            var3 = copyDataProperties(var12, var11);
            var1 = var4.bind(var5)(var2, var1);
            _fun0004_ip = 174; continue _fun0004;
 80:
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var9.DEPRECATED_style;
            var2['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TableSwitchRow;
            var6 = {};
            var10 = var9.value;
            var6['value'] = var10;
            var10 = var9.onValueChange;
            var6['onValueChange'] = var10;
            var12 = var6;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 174:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();