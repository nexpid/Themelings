// app/modules/guilds_bar/native/GuildItemSpacingExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var10 = function trackLiveExposure() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot4;
            var2 = var2.shouldTrackExposure;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'live';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var10;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var7 = var8.bind(var1)(var2);
    var2 = {'kind': 'user', 'name': '2026-03-guild-item-spacing'};
    var5 = 4;
    var9 = {'guildItemMargin': 4, 'shouldTrackExposure': false};
    var2['defaultConfig'] = var9;
    var9 = {};
    var11 = {'guildItemMargin': 4, 'shouldTrackExposure': true};
    var9[0] = var11;
    var11 = {'guildItemMargin': 6, 'shouldTrackExposure': true};
    var9[1] = var11;
    var2['variations'] = var9;
    var9 = var7.bind(var1)(var2);
    var _closure1_slot3 = var9;
    var7 = var9.getConfig;
    var2 = {};
    var11 = 'default';
    var2['location'] = var11;
    var2 = var7.bind(var9)(var2);
    var _closure1_slot4 = var2;
    var7 = 2;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.subscribe;
    var7 = 'POST_CONNECTION_OPEN';
    var7 = var8.bind(var9)(var7, var10);
    var2 = var2.guildItemMargin;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildItemSpacingExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useTrackGuildItemSpacingExperimentExposure() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot2;
                var2 = var3.isConnected;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure1_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useTrackGuildItemSpacingExperimentExposure'] = var4;
    var3['GUILD_ITEM_MARGIN_EXPERIMENT_VALUE'] = var2;
    return var1;
})();