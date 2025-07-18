// discord_common/js/packages/kv-storage/js/raw/Host.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var2 = function() {
        var5 = _closure1_slot4;
        var4 = function Host() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot1 = var4;
        var1 = {};
        var3 = 'open';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Runtime;
            var3 = var4.executeAsync;
            var2 = 'database_open';
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var4 = var1.KV_RAW;
                    var3 = var4.databaseOpen;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['database'] = var1;
                    var7 = _closure3_slot1;
                    var1 = null;
                    var7 = var1 == var7;
                    if(var7) { _fun0001_ip = 74; continue _fun0001 }
 64:
                    var6 = _closure3_slot1;
                    var5 = var6.invalidateDisabledHandles;
 74:
                    var1 = var1 != var5;
                    if(!var1) { _fun0001_ip = 84; continue _fun0001 }
 81:
                    var1 = var5;
 84:
                    var2['invalidateDisabledHandles'] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(6);
        var3[0] = var1;
        var1 = {};
        var7 = 'openSyncUnsafe';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var5 = var2.KV_RAW;
                var4 = var5.databaseOpen;
                var3 = {};
                var2 = arg1;
                var3['database'] = var2;
                var2 = null;
                var7 = var2 == var1;
                if(var7) { _fun0002_ip = 65; continue _fun0002 }
 59:
                var6 = var1.invalidateDisabledHandles;
 65:
                var1 = var2 != var6;
                if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 72:
                var1 = var6;
 75:
                var3['invalidateDisabledHandles'] = var1;
                var1 = {};
                var6 = true;
                var1['synchronous'] = var6;
                var1 = var4.bind(var5)(var2, var3, var1);
                return var1;
            }
        };
        var1['value'] = var7;
        var3[1] = var1;
        var1 = {};
        var7 = 'delete';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Runtime;
            var3 = var4.executeAsync;
            var2 = 'database_delete';
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.KV_RAW;
                var3 = var4.databaseDelete;
                var2 = {};
                var1 = _closure3_slot0;
                var2['database'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[2] = var1;
        var1 = {};
        var7 = 'list';
        var1['key'] = var7;
        var8 = _closure1_slot2;
        var2 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 94; continue _fun0003 }
 9:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 3;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var6 = var2.Runtime;
                    var5 = var6.executeAsync;
                    var4 = 'database_list';
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.KV_RAW;
                        var2 = var3.databaseList;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=67);
 65:
                    return var2;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 91; continue _fun0003 }
 73:
                    var4 = var2.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.data;
                        return var1;
                    };
                    var3 = var4.bind(var2)(var3);
                    return var3;
 91:
                    return var2;
 94:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function list() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var7;
        var3[3] = var1;
        var1 = {};
        var7 = 'optimize';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Runtime;
            var3 = var4.executeAsync;
            var2 = 'database_optimize';
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.KV_RAW;
                var3 = var4.databaseOptimize;
                var2 = {};
                var1 = _closure3_slot0;
                var2['aggressive'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[4] = var1;
        var1 = {};
        var7 = 'raise';
        var1['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.KV_RAW;
            var3 = var4.raise;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/raw/Host.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Host'] = var2;
    return var1;
})();