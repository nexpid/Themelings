// app/modules/interaction_components/native/actions/StringSelectActionComponent.tsx
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/StringSelectActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StringSelectActionComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var11 = var7.type;
            var _closure2_slot1 = var11;
            var12 = var7.options;
            var _closure2_slot2 = var12;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var4 = _closure2_slot2;
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
            var9 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useComponentStateContext;
            var2 = var2.bind(var3)();
            var _closure2_slot3 = var2;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = null;
            var10 = var6 == var2;
            var3 = undefined;
            if(var10) { _fun0001_ip = 129; continue _fun0001 }
 123:
            var3 = var2.modal;
 129:
            var6 = var6 != var3;
            var3 = 'StringSelectActionComponent must be rendered inside a modal ComponentStateContext';
            var3 = var8.bind(var4)(var6, var3);
            var6 = var2.useComponentState;
            var8 = var9.length;
            var3 = 0;
            var8 = var8 > var3;
            var3 = undefined;
            if(!var8) { _fun0001_ip = 180; continue _fun0001 }
 167:
            var8 = {};
            var8['type'] = var11;
            var8['values'] = var9;
            var3 = var8;
 180:
            var6 = var6.bind(var2)(var7, var3);
            var3 = var6.state;
            var _closure2_slot4 = var3;
            var9 = var6.visualState;
            var6 = var6.executeStateUpdate;
            var _closure2_slot5 = var6;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var3 = var3 == var4;
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var3 = _closure2_slot4;
                    var4 = var3.type;
 29:
                    var3 = _closure2_slot1;
                    if(!(var4 !== var3)) { _fun0002_ip = 43; continue _fun0002 }
 37:
                    var4 = new Array(0);
                    _fun0002_ip = 52; continue _fun0002;
 43:
                    var2 = _closure2_slot4;
                    var4 = var2.values;
 52:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure2_slot2;
                        var2 = var3.findIndex;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.value;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var2 = -1;
                        var1 = arg1;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var8.bind(var10)(var3, var6);
            var2 = var2.modal;
            var2 = var2.customId;
            var _closure2_slot6 = var2;
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var14 = var6;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var7 = 'state';
            var6[var7] = var9;
            var7 = 'selectedOptions';
            var6[var7] = var8;
            var1['model'] = var6;
            var5 = function onTap() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 7;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 6;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var8 = _closure2_slot6;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'StringSelectComponentActionSheet:';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var8 = _closure2_slot0;
                var2['selectionActionComponent'] = var8;
                var8 = _closure2_slot3;
                var8 = var8.channelId;
                var2['channelId'] = var8;
                var8 = _closure2_slot6;
                var2['containerId'] = var8;
                var7 = _closure2_slot5;
                var2['onSubmit'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1['onTap'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();