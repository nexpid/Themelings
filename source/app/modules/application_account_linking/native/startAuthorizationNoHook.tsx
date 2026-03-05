// app/modules/application_account_linking/native/startAuthorizationNoHook.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _startAuthorizationNoHook() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = arg2;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 2;
                    var3 = var10[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.getAuthorizationApp;
                    var3 = var3.bind(var6)(var7);
                    var8 = var3;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = var8;
                    var3 = var6.connectionEntrypointUrl;
case 6:
                    if(!(var5 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 8: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.openURL;
                    var3 = var8;
                    var3 = var3.connectionEntrypointUrl;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=135);
case 9:
                    return var3;
case 10:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.getConfig;
                    var5 = {};
                    var10 = 'useStartAuthorize';
                    var5['location'] = var10;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot4;
                    var5 = var4.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED;
                    var4 = {};
                    var4['location_stack'] = var9;
                    var8 = var8.id;
                    var4['application_id'] = var8;
                    var8 = 'web';
                    var4['flow_type'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
case 13: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 11:
                    return var3;
case 15: // catch_target0
                    CatchBlockStart(arg_register=2);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/startAuthorizationNoHook.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function startAuthorizationNoHook() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startAuthorizationNoHook'] = var2;
    return var1;
})();