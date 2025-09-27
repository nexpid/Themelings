// app/modules/icymi/native/ICYMIContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var5 = var4.createContext;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = {'width': 0, 'margin': 0, 'inset': 0};
    var5 = var5.bind(var1)(var4);
    var _closure1_slot4 = var5;
    var4 = function useICYMIContextConstructor() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var6 = undefined;
            var4 = var3.bind(var6)(var2);
            var3 = var4.useDestinationICYMIExperiment;
            var2 = {};
            var5 = 'ICYMI';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.isNewCardDesign;
            var4 = var2.isNewHeaderAndInteractions;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var8 = var2.width;
            var2 = global;
            var7 = var2.Math;
            var5 = var7.min;
            var2 = 480;
            var2 = var5.bind(var7)(var8, var2);
            if(var3) { _fun0001_ip = 147; continue _fun0001 }
 111:
            if(var4) { _fun0001_ip = 147; continue _fun0001 }
 114:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_12;
            _fun0001_ip = 177; continue _fun0001;
 147:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.spacing;
            var4 = var1.PX_16;
 177:
            var1 = {};
            var1['width'] = var2;
            var1['margin'] = var4;
            var2 = 0;
            if(var3) { _fun0001_ip = 200; continue _fun0001 }
 193:
            var3 = 38;
            var2 = var4 + var3;
 200:
            var1['inset'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/native/ICYMIContext.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ICYMIContext'] = var5;
    var3['useICYMIContextConstructor'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot5;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var9 = var2.width;
        var8 = var2.margin;
        var7 = var2.inset;
        var3 = _closure1_slot3;
        var1 = _closure1_slot4;
        var2 = var1.Provider;
        var1 = {};
        var6 = {};
        var6['width'] = var9;
        var6['margin'] = var8;
        var6['inset'] = var7;
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ICYMIContextProvider'] = var2;
    return var1;
})();