// app/modules/application_account_linking/native/useStartAuthorize.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/useStartAuthorize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartAuthorize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var2.bind(var7)(var1);
            var2 = var5.useSlayerApp;
            var1 = arg1;
            var2 = var2.bind(var5)(var1);
            var _closure2_slot0 = var2;
            var9 = null;
            var5 = var9 == var2;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.connectionEntrypointUrl;
case 2:
            var5 = var9 != var1;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var8 = var6.bind(var7)(var1);
            var6 = var8.useAuthorizedAppsToken;
            var10 = var9 == var2;
            var1 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.id;
case 4:
            var1 = var6.bind(var8)(var1);
            var8 = var1.token;
            var6 = var1.fetched;
            var1 = {};
            var1['fetched'] = var6;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var9 != var8;
case 6:
            var1['hasAlreadyLinked'] = var6;
            var1['canStartAuthorization'] = var5;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = _closure2_slot0;
                        var4 = null;
                        var6 = var4 == var3;
                        var5 = undefined;
                        var3 = undefined;
                        if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var6 = _closure2_slot0;
                        var3 = var6.connectionEntrypointUrl;
case 10:
                        if(!(var4 != var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13: // try_start_0
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openURL;
                        var2 = _closure2_slot0;
                        var2 = var2.connectionEntrypointUrl;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=89);
case 14:
                        return var2;
case 15:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17: // try_end0
                        var3 = true;
                        return var3;
case 16:
                        return var2;
case 18: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var2 = false;
                        return var2;
case 12:
                        var2 = false;
                        return var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var7)(var3);
            var3 = new Array(1);
            var3[0] = var2;
            var3 = var5.bind(var6)(var4, var3);
            var1['startAuthorization'] = var3;
            var1['connectionApp'] = var2;
            return var1;
        }
    };
    var3['useStartAuthorize'] = var2;
    return var1;
})();