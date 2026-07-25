// app/design/components/Icon/native/CutoutBackgroundContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function useCutoutBackgroundColor() {
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var1 = _closure1_slot5;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = var8.createContext;
    var5 = var5.bind(var8)(var1);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Icon/native/CutoutBackgroundContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useCutoutBackgroundColor'] = var4;
    var2 = function CutoutBackgroundProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.backgroundColor;
            var5 = var1.children;
            var2 = _closure1_slot6;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var6 = var2.internal;
            var2 = var6.isSemanticColor;
            var2 = var2.bind(var6)(var3);
            var7 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var3;
case 2:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useToken;
            var10 = var2.bind(var6)(var7);
            var2 = null;
            var7 = null;
            if(!(var7 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 'string';
            var6 = typeof var3;
            var7 = var10;
            if(!(var9 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = var3;
case 4:
            if(!(var2 == var7)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var4 === var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var8;
            if(!(var2 == var6)) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            var3 = var2 == var7;
            var6 = undefined;
            _fun0001_ip = 11; continue _fun0001;
case 7:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 2;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var9 = var3.bind(var4)(var7);
            var3 = var9.alpha;
            var9 = var3.bind(var9)();
            var3 = 1;
            var6 = var7;
            if(!(var3 !== var9)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var2 != var8;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 3;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.flattenColorOverOpaqueBackground;
            var6 = var2.bind(var3)(var7, var8);
case 11:
            var3 = _closure1_slot4;
            var1 = _closure1_slot5;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CutoutBackgroundProvider'] = var2;
    return var1;
})();