// app/modules/interaction_components/native/renderComponents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function renderComponents(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var8 = arg1;
                var2 = arg2;
                var1 = var2.toString;
                var6 = var1.bind(var2)();
                var3 = var8.type;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 2;
                var1 = var1[var4];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var1.ComponentType;
                var1 = var1.ACTION_ROW;
                if(!(var1 !== var3)) { _fun0001_ip = 141; continue _fun0001 }
 61:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var5)(var1);
                var1 = var1.ComponentType;
                var2 = var1.TEXT_INPUT;
                var1 = undefined;
                if(!(var2 === var3)) { _fun0001_ip = 197; continue _fun0001 }
 96:
                var4 = _closure1_slot3;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var12 = var2;
                var11 = var8;
                var9 = copyDataProperties(var12, var11);
                var1 = var4.bind(var5)(var3, var2, var6);
                _fun0001_ip = 197; continue _fun0001;
 141:
                var4 = _closure1_slot3;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 3;
                var2 = var9[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var12 = var2;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var8 = _closure1_slot4;
                var7 = 'renderComponents';
                var2[var7] = var8;
                var1 = var4.bind(var5)(var3, var2, var6);
 197:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/renderComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var3['renderComponents'] = var2;
    return var1;
})();