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
 0:
            var1 = arg1;
            var10 = var1.children;
            var5 = var1.defaultValue;
            var2 = var1.onChange;
            var _closure2_slot0 = var2;
            var11 = var1.title;
            var9 = var1.hasIcons;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 45; continue _fun0001 }
 43:
            var9 = true;
 45:
            var12 = var1.groupRef;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var8 = _closure1_slot3;
            var3 = var8.useState;
            var6 = var3.bind(var8)(var5);
            var5 = _closure1_slot2;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var13 = var5[var3];
            _closure2_slot1 = var13;
            var3 = 1;
            var3 = var5[var3];
            _closure2_slot2 = var3;
            var6 = var8.useImperativeHandle;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var13;
            var3 = function() {
                var1 = {};
                var3 = function setValue(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure2_slot2;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var5 = _closure2_slot0;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0002_ip = 36; continue _fun0002 }
 27:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)(var3);
 36:
                        return var1;
                    }
                };
                var1['setValue'] = var3;
                var2 = function getValue() {
                    var1 = _closure2_slot1;
                    return var1;
                };
                var1['getValue'] = var2;
                return var1;
            };
            var3 = var6.bind(var8)(var12, var3, var5);
            var5 = var8.useContext;
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RedesignCompatContext;
            var3 = var5.bind(var8)(var3);
            _closure2_slot3 = var3;
            var5 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 36; continue _fun0003 }
 27:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            _closure2_slot4 = var2;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['selectedValue'] = var3;
                var2 = _closure2_slot4;
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
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var12 = 'radiogroup';
            var5['accessibilityRole'] = var12;
            var5['title'] = var11;
            var5['hasIcons'] = var9;
            var9 = var8.Children;
            var8 = var9.map;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot3;
                    var3 = var4.isValidElement;
                    var3 = var3.bind(var4)(var2);
                    if(!var3) { _fun0004_ip = 61; continue _fun0004 }
 24:
                    var3 = var2.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.TableRadioRow;
                    if(!(var3 !== var1)) { _fun0004_ip = 73; continue _fun0004 }
 61:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 76; continue _fun0004 }
 73:
                    var1 = var2;
 76:
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