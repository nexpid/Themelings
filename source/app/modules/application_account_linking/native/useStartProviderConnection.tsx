// app/modules/application_account_linking/native/useStartProviderConnection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/useStartProviderConnection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartProviderConnection(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var4 = var5.useProviderConnection;
        var2 = arg1;
        var2 = var4.bind(var5)(var2);
        var6 = var2.loading;
        var5 = var2.hasConnection;
        var4 = var2.canConnect;
        var9 = var2.startConnection;
        var _closure2_slot0 = var9;
        var2 = var2.account;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var6 = undefined;
                        var3 = undefined;
                        var4 = _closure2_slot0;
                        var2 = arg1;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=33);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var3 = var2;
                        var4 = var2.success;
                        if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var4 = var3;
                        var5 = var4.url;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
                        var4 = {};
                        var5 = false;
                        var4['success'] = var5;
                        return var4;
case 10: // try_start_0
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 3;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.openURL;
                        var3 = var3.url;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=120);
case 11:
                        return var3;
case 12:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                        var4 = {};
                        var5 = true;
                        var4['success'] = var5;
case 15: // try_end0
                        return var4;
case 13:
                        return var3;
case 16: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var3 = {};
                        var4 = false;
                        var3['success'] = var4;
                        return var3;
case 6:
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
        var3 = var1.bind(var3)();
        var1 = new Array(1);
        var1[0] = var9;
        var3 = var7.bind(var8)(var3, var1);
        var1 = {};
        var1['loading'] = var6;
        var1['hasConnection'] = var5;
        var1['canConnect'] = var4;
        var1['startConnection'] = var3;
        var1['account'] = var2;
        return var1;
    };
    var3['useStartProviderConnection'] = var2;
    return var1;
})();