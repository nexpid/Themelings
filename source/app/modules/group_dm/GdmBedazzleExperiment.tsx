// app/modules/group_dm/GdmBedazzleExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var4 = function useGdmBedazzleExperiment(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = arg1;
        var2['location'] = var1;
        var1 = arg2;
        var2['guildId'] = var1;
        var1 = arg3;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var10 = var6.bind(var1)(var5);
    var9 = var10.createExperiment;
    var8 = {'kind': 'guild', 'id': '2025-04_gdm_bedazzling', 'label': 'GDM Bedazzling'};
    var5 = {'enabled': false, 'unifiedEditing': false};
    var8['defaultConfig'] = var5;
    var12 = {'id': 1, 'label': 'Enabled - T1 - Unified editing'};
    var5 = 1;
    var11 = {'enabled': true, 'unifiedEditing': true};
    var12['config'] = var11;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = {'id': 2, 'label': 'Enabled - T2 - Retain Change Icon'};
    var13 = {'enabled': true, 'unifiedEditing': false};
    var12['config'] = var13;
    var11[1] = var12;
    var8['treatments'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot0 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/group_dm/GdmBedazzleExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isGdmBedazzleExperimentEnabled(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = arg1;
        var2['location'] = var1;
        var1 = arg2;
        var2['guildId'] = var1;
        var1 = arg3;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['isGdmBedazzleExperimentEnabled'] = var5;
    var3['useGdmBedazzleExperiment'] = var4;
    var4 = function useIsGdmBedazzleExperimentEnabled(arg1, arg2, arg3) {
        var5 = _closure1_slot1;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var4)(var3, var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useIsGdmBedazzleExperimentEnabled'] = var4;
    var2 = function useIsGdmIconChangeItemEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot1;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var2 = var4.bind(var3)(var2, var1);
            var1 = var2.enabled;
            var2 = var2.unifiedEditing;
            var1 = !var1;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
 38:
            var1 = !var2;
 41:
            return var1;
        }
    };
    var3['useIsGdmIconChangeItemEnabled'] = var2;
    return var1;
})();