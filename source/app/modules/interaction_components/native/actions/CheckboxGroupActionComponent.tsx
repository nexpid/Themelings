// app/modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var2 = var9.type;
            var _closure2_slot0 = var2;
            var7 = var9.options;
            var _closure2_slot1 = var7;
            var1 = var9.maxValues;
            var _closure2_slot2 = var1;
            var8 = _closure1_slot2;
            var6 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.default;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.value;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var6.bind(var8)(var3, var4);
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var6 = var8.useComponentState;
            var10 = var11.length;
            var3 = 0;
            var10 = var10 > var3;
            var3 = undefined;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = {};
            var10['type'] = var2;
            var10['values'] = var11;
            var3 = var10;
case 2:
            var3 = var6.bind(var8)(var9, var3);
            var9 = var3.state;
            var _closure2_slot3 = var9;
            var3 = var3.executeStateUpdate;
            var _closure2_slot4 = var3;
            var8 = _closure1_slot2;
            var6 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 == var3;
                    var3 = undefined;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot3;
                    var3 = var1.type;
case 4:
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = new Array(0);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = _closure2_slot3;
                    var1 = var2.values;
case 8:
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var2, var3);
            var _closure2_slot5 = var2;
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var6 = false;
            var1['hasIcons'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure2_slot5;
                    var3 = var4.includes;
                    var2 = var1.value;
                    var7 = var3.bind(var4)(var2);
                    var5 = _closure1_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.TableCheckboxRow;
                    var2 = {};
                    var9 = var1.label;
                    var2['label'] = var9;
                    var9 = var1.description;
                    var2['subLabel'] = var9;
                    var2['checked'] = var7;
                    var9 = var1.value;
                    var _closure3_slot0 = var9;
                    var8 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure2_slot5;
                            var1 = arg1;
                            if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                            var2 = var5.filter;
                            var1 = function(arg1) {
                                var2 = _closure3_slot0;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var1 = var2.bind(var5)(var1);
                            _fun0004_ip = 11; continue _fun0004;
case 9:
                            var2 = new Array(1);
                            var6 = 0;
                            var8 = var2;
                            var7 = var5;
                            var5 = arraySpread(var8, var7, var6);
                            var3 = _closure3_slot0;
                            var2[4] = var3;
                            var3 = 1;
                            var3 = var5 + var3;
                            var1 = var2;
case 11:
                            var3 = _closure2_slot4;
                            var2 = {};
                            var4 = _closure2_slot0;
                            var2['type'] = var4;
                            var2['values'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2['onPress'] = var8;
                    var8 = _closure2_slot5;
                    var8 = var8.length;
                    var6 = _closure2_slot2;
                    var6 = var8 >= var6;
                    if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = !var7;
case 12:
                    var2['disabled'] = var6;
                    var1 = var1.value;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();