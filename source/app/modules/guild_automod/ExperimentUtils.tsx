// app/modules/guild_automod/ExperimentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/ExperimentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isInMentionRaidExperiment(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.AutomodMentionRaidLimit;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var4 = arg1;
        var1['guildId'] = var4;
        var4 = '988d4e_3';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['isInMentionRaidExperiment'] = var4;
    var2 = function useIsMentionRaidExperimentEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[1];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var5 = true;
 11:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.AutomodMentionRaidLimit;
            var3 = var4.useExperiment;
            var2 = {};
            var1 = arg1;
            var2['guildId'] = var1;
            var1 = '988d4e_4';
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useIsMentionRaidExperimentEnabled'] = var2;
    return var1;
})();