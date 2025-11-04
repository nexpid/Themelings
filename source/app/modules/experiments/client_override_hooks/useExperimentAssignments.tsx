// app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getExperimentServerAssignment(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arguments[2];
            var7 = undefined;
            if(!(var5 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var1 = new Array(2);
            var1[0] = var4;
            var2 = _closure1_slot4;
            var1[1] = var2;
            var5 = var1;
case 2:
            var4 = _closure1_slot2;
            var1 = 2;
            var4 = var4.bind(var7)(var5, var1);
            var1 = 0;
            var5 = var4[var1];
            var1 = 1;
            var8 = var4[var1];
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.system;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 4;
            var2 = var9[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ExperimentSystem;
            var2 = var2.LEGACY;
            if(!(var4 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.getServerAssignment;
            var6 = var3.kind;
            var4 = var3.name;
            var2 = arg2;
            var2 = var7.bind(var8)(var6, var2, var4);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = var5.getLoadedUserExperiment;
            var3 = var3.name;
            var2 = var4.bind(var5)(var3);
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/client_override_hooks/useExperimentAssignments.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useExperimentAssignment(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = var1.system;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var1 = var1.ExperimentSystem;
                var1 = var1.LEGACY;
                if(!(var5 !== var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = _closure1_slot4;
                var7 = var8.getAssignment;
                var1 = _closure2_slot0;
                var6 = var1.kind;
                var5 = _closure2_slot1;
                var1 = var1.name;
                var5 = var7.bind(var8)(var6, var5, var1);
                var1 = null;
                var6 = var1 == var5;
                var1 = undefined;
                if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var1 = var5.variantId;
case 11:
                _fun0002_ip = 13; continue _fun0002;
case 9:
                var5 = _closure1_slot3;
                var4 = var5.getUserExperimentDescriptor;
                var3 = _closure2_slot0;
                var3 = var3.name;
                var3 = var4.bind(var5)(var3);
                var4 = null;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var2 = var3.bucket;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExperimentAssignment'] = var5;
    var3['getExperimentServerAssignment'] = var4;
    var2 = function useExperimentServerAssignment(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var6 = _closure1_slot3;
            var2 = new Array(2);
            var2[0] = var6;
            var1 = _closure1_slot4;
            var2[1] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExperimentServerAssignment'] = var2;
    return var1;
})();