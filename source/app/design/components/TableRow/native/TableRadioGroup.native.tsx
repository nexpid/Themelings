// app/design/components/TableRow/native/TableRadioGroup.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.NOOP;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var5 = var8.createContext;
    var4 = {};
    var10 = null;
    var4['selectedValue'] = var10;
    var4['onSelect'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TableRow/native/TableRadioGroup.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TableRadioGroupContext'] = var4;
    var2 = function TableRadioGroup(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.children;
            var5 = var1.value;
            var17 = var1.defaultValue;
            var2 = var1.onChange;
            var _closure2_slot0 = var2;
            var12 = var1.title;
            var11 = var1.description;
            var9 = var1.hasIcons;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = true;
case 2:
            var13 = var1.groupRef;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var15 = var4 !== var5;
            var _closure2_slot1 = var15;
            var8 = _closure1_slot3;
            var6 = var8.useState;
            var14 = null;
            var3 = null;
            if(var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = var14 != var17;
            var16 = null;
            if(!var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var17;
case 6:
            var3 = var16;
case 4:
            var8 = var6.bind(var8)(var3);
            var6 = _closure1_slot2;
            var3 = 2;
            var8 = var6.bind(var4)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var6 = 1;
            var6 = var8[var6];
            _closure2_slot2 = var6;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5;
case 8:
            var5 = var14 != var3;
            var14 = null;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var3;
case 10:
            _closure2_slot3 = var14;
            var8 = _closure1_slot3;
            var6 = var8.useImperativeHandle;
            var5 = new Array(3);
            var5[0] = var15;
            var5[1] = var2;
            var5[2] = var14;
            var3 = function() {
                var1 = {};
                var3 = function setValue(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure2_slot1;
                        if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = _closure2_slot2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 12:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['setValue'] = var3;
                var2 = function getValue() {
                    var1 = _closure2_slot3;
                    return var1;
                };
                var1['getValue'] = var2;
                return var1;
            };
            var3 = var6.bind(var8)(var13, var3, var5);
            var5 = var8.useContext;
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 4;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RedesignCompatContext;
            var3 = var5.bind(var8)(var3);
            _closure2_slot4 = var3;
            var5 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 12:
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            _closure2_slot5 = var2;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var1['selectedValue'] = var3;
                var2 = _closure2_slot5;
                var1['onSelect'] = var2;
                return var1;
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot4;
            var1 = _closure1_slot5;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = 5;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var13 = 'radiogroup';
            var5['accessibilityRole'] = var13;
            var5['title'] = var12;
            var5['description'] = var11;
            var5['hasIcons'] = var9;
            var9 = var8.Children;
            var8 = var9.map;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot3;
                    var3 = var4.isValidElement;
                    var3 = var3.bind(var4)(var2);
                    if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 12:
                    var3 = var2.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.TableRadioRow;
                    if(!(var3 !== var1)) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 17:
                    var1 = var2;
case 18:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var10, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TableRadioGroup'] = var2;
    return var1;
})();