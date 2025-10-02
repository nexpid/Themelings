// discord_common/js/packages/media-engine/pollConnectionStats.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/pollConnectionStats.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function pollConnectionStats(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var1 = false;
        var _closure2_slot1 = var1;
        var7 = var8.on;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 1;
        var3 = var6[var1];
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = var3.MediaEngineEvent;
        var4 = var3.Destroy;
        var3 = function() {
            var1 = true;
            _closure2_slot1 = var1;
            return var1;
        };
        var3 = var7.bind(var8)(var4, var3);
        var3 = function() {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var2 = undefined;
                        var _closure5_slot0 = var2;
                        var5 = _closure2_slot1;
                        if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                        var8 = new Array(0);
                        _closure5_slot0 = var8;
                        var6 = _closure2_slot0;
                        var5 = var6.eachConnection;
                        var3 = function(arg1) {
                            var5 = arg1;
                            var3 = _closure5_slot0;
                            var2 = var3.push;
                            var1 = {};
                            var1['connection'] = var5;
                            var4 = var5.emitStats;
                            var4 = var4.bind(var5)();
                            var1['stats'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var5.bind(var6)(var3);
                        var10 = new Array(0);
                        var3 = var8.length;
                        var7 = 0;
                        var3 = var7 < var3;
                        var6 = null;
                        if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var11 = var8[var7];
                        var3 = var11.stats;
                        SaveGenerator(address=93);
case 8:
                        return var3;
case 9:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                        if(!(var6 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                        var9 = var10.push;
                        var5 = {};
                        var11 = var11.connection;
                        var5['connection'] = var11;
                        var5['stats'] = var3;
                        var5 = var9.bind(var10)(var5);
case 12:
                        var7 = var7 + 1;
                        var5 = var8.length;
                        if(var7 < var5) { _fun0001_ip = 7; continue _fun0001 }
case 6:
                        var9 = _closure2_slot0;
                        var6 = var9.emit;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 1;
                        var5 = var8[var5];
                        var5 = var7.bind(var2)(var5);
                        var5 = var5.MediaEngineEvent;
                        var5 = var5.ConnectionStats;
                        var5 = var6.bind(var9)(var5, var10);
                        var5 = global;
                        var6 = var5.setTimeout;
                        var5 = _closure2_slot2;
                        var4 = 2;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.STATS_INTERVAL;
                        var4 = var6.bind(var2)(var5, var4);
                        _fun0001_ip = 4; continue _fun0001;
case 10:
                        return var3;
case 4:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var4 = var3.bind(var1)();
        var _closure2_slot2 = var4;
        var2 = global;
        var3 = var2.setTimeout;
        var2 = 2;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.STATS_INTERVAL;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();