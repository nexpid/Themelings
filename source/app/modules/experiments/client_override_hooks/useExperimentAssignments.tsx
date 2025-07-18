// app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/client_override_hooks/useExperimentAssignments.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useExperimentAssignment(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var5 = var1.system;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var1 = var1.ExperimentSystem;
                var1 = var1.LEGACY;
                if(!(var5 !== var1)) { _fun0001_ip = 110; continue _fun0001 }
 54:
                var8 = _closure1_slot3;
                var7 = var8.getAssignment;
                var1 = _closure2_slot0;
                var6 = var1.kind;
                var5 = _closure2_slot1;
                var1 = var1.name;
                var5 = var7.bind(var8)(var6, var5, var1);
                var1 = null;
                var6 = var1 == var5;
                var1 = undefined;
                if(var6) { _fun0001_ip = 108; continue _fun0001 }
 102:
                var1 = var5.variantId;
 108:
                _fun0001_ip = 154; continue _fun0001;
 110:
                var5 = _closure1_slot2;
                var4 = var5.getUserExperimentDescriptor;
                var3 = _closure2_slot0;
                var3 = var3.name;
                var3 = var4.bind(var5)(var3);
                var4 = null;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 151; continue _fun0001 }
 145:
                var2 = var3.bucket;
 151:
                var1 = var2;
 154:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExperimentAssignment'] = var4;
    var2 = function useExperimentServerAssignment(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0002_ip = 133; continue _fun0002 }
 16:
                var2 = _closure2_slot0;
                var5 = var2.system;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.ExperimentSystem;
                var2 = var2.LEGACY;
                if(!(var5 !== var2)) { _fun0002_ip = 104; continue _fun0002 }
 67:
                var8 = _closure1_slot3;
                var7 = var8.getServerAssignment;
                var2 = _closure2_slot0;
                var6 = var2.kind;
                var5 = _closure2_slot1;
                var2 = var2.name;
                var2 = var7.bind(var8)(var6, var5, var2);
                _fun0002_ip = 130; continue _fun0002;
 104:
                var5 = _closure1_slot2;
                var4 = var5.getLoadedUserExperiment;
                var3 = _closure2_slot0;
                var3 = var3.name;
                var2 = var4.bind(var5)(var3);
 130:
                var1 = var2;
 133:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExperimentServerAssignment'] = var2;
    return var1;
})();