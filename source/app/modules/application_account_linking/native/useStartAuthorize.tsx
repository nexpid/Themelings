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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/useStartAuthorize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartAuthorize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var4.bind(var3)(var2);
            var4 = var5.useAuthorizationApp;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var _closure2_slot0 = var2;
            var7 = null;
            var5 = var7 == var2;
            var4 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.connectionEntrypointUrl;
case 2:
            var4 = var7 != var4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var9 = var6.bind(var3)(var5);
            var6 = var9.useAuthorizedAppsToken;
            var10 = var7 == var2;
            var5 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2.parentId;
case 4:
            if(!(var7 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var7 == var2;
            var10 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var2.id;
case 8:
            var5 = var10;
case 6:
            var5 = var6.bind(var9)(var5);
            var6 = var5.token;
            var5 = var5.fetched;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var8 = arg1;
                            var2 = _closure2_slot0;
                            var5 = null;
                            var3 = var5 == var2;
                            var6 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var3 = _closure2_slot0;
                            var2 = var3.connectionEntrypointUrl;
case 12:
                            if(!(var5 != var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15: // try_start_0
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 5;
                            var2 = var9[var2];
                            var9 = var4.bind(var6)(var2);
                            var4 = var9.openURL;
                            var2 = _closure2_slot0;
                            var2 = var2.connectionEntrypointUrl;
                            var2 = var4.bind(var9)(var2);
                            SaveGenerator(address=98);
case 16:
                            return var2;
case 17:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 4:
                            var4 = var8;
                            var4 = var4.onConfirm;
                            if(!(var5 != var4)) { _fun0002_ip = 19; continue _fun0002 }
case 9:
                            var5 = var8;
                            var4 = var5.onConfirm;
                            var4 = var4.bind(var5)();
case 19:
                            var5 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 6;
                            var4 = var9[var4];
                            var9 = var5.bind(var6)(var4);
                            var5 = var9.getConfig;
                            var4 = {};
                            var10 = 'useStartAuthorize';
                            var4['location'] = var10;
                            var4 = var5.bind(var9)(var4);
                            var4 = var4.enabled;
                            if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                            var5 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 7;
                            var4 = var9[var4];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.track;
                            var3 = _closure1_slot5;
                            var4 = var3.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED;
                            var3 = {};
                            var8 = var8.analyticsLocations;
                            var3['location_stack'] = var8;
                            var7 = _closure2_slot0;
                            var7 = var7.id;
                            var3['application_id'] = var7;
                            var7 = 'web';
                            var3['flow_type'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
case 20: // try_end0
                            var3 = true;
                            return var3;
case 18:
                            return var2;
case 22: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var2 = false;
                            return var2;
case 14:
                            var2 = false;
                            return var2;
case 10:
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
            var1[0] = var2;
            var3 = var8.bind(var9)(var3, var1);
            var1 = {};
            var1['fetched'] = var5;
            if(!var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var7 != var6;
case 23:
            var1['hasAlreadyLinked'] = var5;
            var1['canStartAuthorization'] = var4;
            var1['startAuthorization'] = var3;
            var1['connectionApp'] = var2;
            return var1;
        }
    };
    var3['useStartAuthorize'] = var2;
    return var1;
})();