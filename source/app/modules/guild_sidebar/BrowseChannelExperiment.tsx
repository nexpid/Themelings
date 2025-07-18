// app/modules/guild_sidebar/BrowseChannelExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var10 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2024-09_browsechannelbuttonoptin', 'label': "Don't show guild Browse Channels when all channels are already visible"};
    var5 = '2024-09_browsechannelbuttonoptin';
    var11 = {};
    var11['alwaysShowDirectory'] = var12;
    var4['defaultConfig'] = var11;
    var10 = var10.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var10;
    var11 = {'id': 1, 'label': 'Hide Browse Channels when all channels are visible'};
    var10 = {};
    var12 = false;
    var10['alwaysShowDirectory'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_sidebar/BrowseChannelExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['BROWSE_CHANNEL_EXPERIMENT_ID'] = var5;
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