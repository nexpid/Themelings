// app/modules/guild_scheduled_events/useSelectStage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useSelectStage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectStage() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 5;
        var4 = var4[var2];
        var2 = undefined;
        var8 = var5.bind(var2)(var4);
        var7 = var8.useStateFromStores;
        var4 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var4;
        var5 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getVoiceChannelId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = new Array(0);
        var4 = var7.bind(var8)(var6, var5, var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var6 = var5.useState;
        var7 = var6.bind(var5)(var4);
        var6 = _closure1_slot3;
        var3 = 2;
        var7 = var6.bind(var2)(var7, var3);
        var3 = 0;
        var3 = var7[var3];
        var _closure2_slot1 = var3;
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot2 = var6;
        var7 = var5.useEffect;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            var2 = global;
            var5 = var2.setTimeout;
            var4 = undefined;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 500;
            var2 = var5.bind(var4)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var4 = var7.bind(var5)(var4, var6);
        var4 = var5.useCallback;
        var1 = function() {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var5 = arg1;
                        var7 = arg2;
                        var2 = undefined;
                        var3 = undefined;
case 4: // try_start_0
                        var8 = _closure2_slot1;
                        var4 = var7;
                        if(!(var8 === var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                        var10 = _closure1_slot5;
                        var9 = var10.getChannel;
                        var8 = var7;
                        var9 = var9.bind(var10)(var8);
                        var3 = var9;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
                        var6 = _closure2_slot2;
                        var8 = var7;
                        var6 = var6.bind(var2)(var8);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 6;
                        var6 = var9[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.connectOrLurkStage;
                        var5 = var6.bind(var7)(var5, var8);
                        SaveGenerator(address=114);
case 8:
                        return var5;
case 9:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_end0
                        _fun0001_ip = 12; continue _fun0001;
case 10:
                        return var5;
case 7: // try_start_1
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 6;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.navigateToStage;
                        var3 = var4.bind(var5)(var3);
case 13: // try_end1
                        var3 = undefined;
                        return var3;
case 14: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        var4 = _closure2_slot2;
                        var3 = null;
                        var3 = var4.bind(var2)(var3);
case 12:
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
        var2 = var1.bind(var2)();
        var1 = new Array(1);
        var1[0] = var3;
        var2 = var4.bind(var5)(var2, var1);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();