// app/modules/guild_sidebar/BrowseChannelExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
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
    var4 = {'kind': 'user', 'id': '2024-09_browsechannelbuttonoptin', 'label': "Don't show guild Browse Channels when all channels are already visible"};
    var10 = {};
    var10['alwaysShowDirectory'] = var11;
    var4['defaultConfig'] = var10;
    var9 = var9.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var9;
    var10 = {'id': 1, 'label': 'Hide Browse Channels when all channels are visible'};
    var9 = {};
    var11 = false;
    var9['alwaysShowDirectory'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/BrowseChannelExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BrowseChannelExperiment'] = var4;
    var2 = function useShowBrowseChannelsExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = var3.useExperiment;
            var1 = {};
            var4 = 'useShowBrowseChannelsExperiment';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.alwaysShowDirectory;
            if(var1) { _fun0001_ip = 43; continue _fun0001 }
 37:
            var2 = arg1;
            var1 = !var2;
 43:
            return var1;
        }
    };
    var3['useShowBrowseChannelsExperiment'] = var2;
    return var1;
})();