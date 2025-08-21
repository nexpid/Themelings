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
            var2 = arg2;
            var4 = _closure1_slot5;
            var1 = var2.toString;
            var3 = var1.bind(var2)();
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = function renderComponent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var5 = arg2;
            var2 = var7.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 2;
            var1 = var1[var8];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.ACTION_ROW;
            if(!(var1 !== var2)) { _fun0001_ip = 498; continue _fun0001 }
 55:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.STRING_SELECT;
            if(!(var1 !== var2)) { _fun0001_ip = 453; continue _fun0001 }
 91:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.TEXT_INPUT;
            if(!(var1 !== var2)) { _fun0001_ip = 408; continue _fun0001 }
 127:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.USER_SELECT;
            if(!(var1 !== var2)) { _fun0001_ip = 363; continue _fun0001 }
 163:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.ROLE_SELECT;
            if(!(var1 !== var2)) { _fun0001_ip = 363; continue _fun0001 }
 199:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.MENTIONABLE_SELECT;
            if(!(var1 !== var2)) { _fun0001_ip = 363; continue _fun0001 }
 235:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.CHANNEL_SELECT;
            if(!(var1 !== var2)) { _fun0001_ip = 363; continue _fun0001 }
 268:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.LABEL;
            if(!(var1 !== var2)) { _fun0001_ip = 303; continue _fun0001 }
 301:
            return var4;
 303:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var7;
            var8 = copyDataProperties(var12, var11);
            var9 = _closure1_slot5;
            var8 = 'renderComponent';
            var1[var8] = var9;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
 363:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var7;
            var8 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
 408:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var7;
            var8 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
 453:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var7;
            var8 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
 498:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var7 = _closure1_slot4;
            var6 = 'renderComponents';
            var1[var6] = var7;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/renderComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var3['renderComponents'] = var2;
    return var1;
})();