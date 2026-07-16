// app/actions/PruneGuildModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function updateEstimate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 7;
case 2:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot2;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 2;
                        var2 = var8[var5];
                        var6 = undefined;
                        var2 = var7.bind(var6)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var12 = _closure1_slot3;
                        var11 = var12.GUILD_PRUNE;
                        var9 = _closure2_slot0;
                        var9 = var11.bind(var12)(var9);
                        var2['url'] = var9;
                        var9 = {};
                        var11 = _closure2_slot1;
                        var9['days'] = var11;
                        var10 = _closure2_slot2;
                        var9['include_roles'] = var10;
                        var2['query'] = var9;
                        var9 = true;
                        var2['oldFormErrors'] = var9;
                        var5 = var8[var5];
                        var6 = var7.bind(var6)(var5);
                        var5 = var6.rejectWithMigratedError;
                        var5 = var5.bind(var6)();
                        var2['rejectWithError'] = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=137);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = var2.body;
                        var3 = var3.pruned;
                        return var3;
case 8:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['updateEstimate'] = var7;
    var7 = function updateEstimateV2(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = 7;
case 2:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot2;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 5:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var6 = 2;
                        var2 = var8[var6];
                        var3 = undefined;
                        var2 = var7.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var12 = _closure1_slot3;
                        var11 = var12.GUILD_PRUNE_V2;
                        var9 = _closure2_slot0;
                        var9 = var11.bind(var12)(var9);
                        var2['url'] = var9;
                        var9 = {};
                        var11 = _closure2_slot1;
                        var9['days'] = var11;
                        var10 = _closure2_slot2;
                        var9['include_roles'] = var10;
                        var2['query'] = var9;
                        var9 = true;
                        var2['oldFormErrors'] = var9;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.rejectWithMigratedError;
                        var6 = var6.bind(var7)();
                        var2['rejectWithError'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=137);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 9:
                        return var3;
case 11:
                        return var2;
case 10:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['updateEstimateV2'] = var7;
    var4 = function prune(arg1, arg2, arg3) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 2;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot3;
        var9 = var10.GUILD_PRUNE;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var8 = {};
        var9 = arg2;
        var8['days'] = var9;
        var9 = false;
        var8['compute_prune_count'] = var9;
        var9 = arg3;
        var8['include_roles'] = var9;
        var1['body'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['prune'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/PruneGuildModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();