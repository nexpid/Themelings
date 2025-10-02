// app/modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchHighlightedCreatorGuildDetails(arg1) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot4;
        var4 = var7.useState;
        var2 = true;
        var2 = var4.bind(var7)(var2);
        var11 = _closure1_slot3;
        var6 = undefined;
        var10 = 2;
        var3 = var11.bind(var6)(var2, var10);
        var2 = 0;
        var4 = var3[var2];
        var8 = 1;
        var3 = var3[var8];
        var _closure2_slot1 = var3;
        var3 = var7.useState;
        var3 = var3.bind(var7)();
        var5 = var11.bind(var6)(var3, var10);
        var3 = var5[var2];
        var5 = var5[var8];
        var _closure2_slot2 = var5;
        var5 = var7.useState;
        var5 = var5.bind(var7)();
        var5 = var11.bind(var6)(var5, var10);
        var2 = var5[var2];
        var5 = var5[var8];
        var _closure2_slot3 = var5;
        var8 = var7.useCallback;
        var5 = function() {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var2 = arg1;
                        var6 = _closure2_slot1;
                        var5 = undefined;
                        var4 = true;
                        var4 = var6.bind(var5)(var4);
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)(var5);
case 4: // try_start_0 // try_start_1
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 3;
                        var4 = var7[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.fetchHighlightedCreatorGuildDetails;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=76);
case 5:
                        return var2;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                        var4 = _closure2_slot3;
                        var4 = var4.bind(var5)(var2);
case 9: // try_end0
                        _fun0001_ip = 10; continue _fun0001;
case 7: // try_end1
                        var6 = _closure2_slot1;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 11: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var5)(var4);
case 10: // try_end2
                        var4 = _closure2_slot1;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 12: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
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
        var6 = var5.bind(var6)();
        var5 = new Array(0);
        var8 = var8.bind(var7)(var6, var5);
        var _closure2_slot4 = var8;
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var8;
        var1 = function() {
            var3 = _closure2_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['isLoading'] = var4;
        var1['error'] = var3;
        var1['highlightedCreatorDetails'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();