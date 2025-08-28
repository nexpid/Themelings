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
 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 21; continue _fun0001 }
 18:
            var3 = 7;
 21:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot2;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 145; continue _fun0002 }
 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_PRUNE;
                        var5 = _closure2_slot0;
                        var5 = var7.bind(var8)(var5);
                        var2['url'] = var5;
                        var5 = {};
                        var7 = _closure2_slot1;
                        var5['days'] = var7;
                        var6 = _closure2_slot2;
                        var5['include_roles'] = var6;
                        var2['query'] = var5;
                        var5 = true;
                        var2['oldFormErrors'] = var5;
                        var5 = false;
                        var2['rejectWithError'] = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=120);
 118:
                        return var2;
 120:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 142; continue _fun0002 }
 126:
                        var3 = var2.body;
                        var3 = var3.pruned;
                        return var3;
 142:
                        return var2;
 145:
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
    var4 = function prune(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.GUILD_PRUNE;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var5 = {};
        var4 = arg2;
        var5['days'] = var4;
        var4 = false;
        var5['compute_prune_count'] = var4;
        var6 = arg3;
        var5['include_roles'] = var6;
        var1['body'] = var5;
        var5 = true;
        var1['oldFormErrors'] = var5;
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