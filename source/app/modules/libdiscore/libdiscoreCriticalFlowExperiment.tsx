// app/modules/libdiscore/libdiscoreCriticalFlowExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var9 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-04_libdiscore_critical_flow', 'label': 'Require libdiscore to use the app'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var4['defaultConfig'] = var10;
    var9 = var9.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var9;
    var10 = {'id': 0, 'label': 'Control'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'Require libdiscore to use the app'};
    var11 = {};
    var11['enabled'] = var12;
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/libdiscore/libdiscoreCriticalFlowExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['LibDiscordCriticalFlowExperiment'] = var4;
    var2 = function useShouldBlockBrowser() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var1 = {};
            var5 = 'default';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 68; continue _fun0001 }
 36:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isUnsupportedBrowser;
            var1 = var2.bind(var3)();
 68:
            if(!var1) { _fun0001_ip = 73; continue _fun0001 }
 71:
            var1 = true;
 73:
            return var1;
        }
    };
    var3['useShouldBlockBrowser'] = var2;
    return var1;
})();