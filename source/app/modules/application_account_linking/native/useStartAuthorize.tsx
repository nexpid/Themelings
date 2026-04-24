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
    var4 = var4.AuthorizeFlow;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/useStartAuthorize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartAuthorize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var _closure2_slot0 = var6;
            var2 = var2.debug;
            var3 = var6 !== var2;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var7 = var4.bind(var6)(var2);
            var4 = var7.useAuthorizationApp;
            var2 = arg1;
            var8 = var4.bind(var7)(var2);
            _closure2_slot0 = var8;
            var7 = null;
            var4 = var7 == var8;
            var2 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var8.connectionEntrypointUrl;
case 6:
            var4 = var7 != var2;
            var2 = null;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot5;
            var2 = var9.WEB;
case 8:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 5;
            var9 = var11[var9];
            var11 = var10.bind(var6)(var9);
            var10 = var11.useAuthorizedAppsToken;
            var12 = var7 == var8;
            var9 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var8.parentId;
case 10:
            if(!(var7 == var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var7 == var8;
            var12 = undefined;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var8.id;
case 14:
            var9 = var12;
case 12:
            var10 = var10.bind(var11)(var9);
            var9 = var10.token;
            var11 = var10.fetched;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var9 = arg1;
                            var2 = _closure2_slot0;
                            var4 = null;
                            var3 = var4 == var2;
                            var5 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 4:
                            var3 = _closure2_slot0;
                            var2 = var3.connectionEntrypointUrl;
case 18:
                            if(!(var4 != var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20: // try_start_0
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 6;
                            var2 = var6[var2];
                            var6 = var3.bind(var5)(var2);
                            var3 = var6.openURL;
                            var2 = _closure2_slot0;
                            var2 = var2.connectionEntrypointUrl;
                            var2 = var3.bind(var6)(var2);
                            SaveGenerator(address=98);
case 21:
                            return var2;
case 22:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                            var3 = var9;
                            var3 = var3.onConfirm;
                            if(!(var4 != var3)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                            var4 = var9;
                            var3 = var4.onConfirm;
                            var3 = var3.bind(var4)();
case 25:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 7;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot6;
                            var4 = var3.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED;
                            var3 = {};
                            var9 = var9.analyticsLocations;
                            var3['location_stack'] = var9;
                            var8 = _closure2_slot0;
                            var8 = var8.id;
                            var3['application_id'] = var8;
                            var7 = _closure1_slot5;
                            var7 = var7.WEB;
                            var3['flow_type'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
case 27: // try_end0
                            var3 = true;
                            return var3;
case 23:
                            return var2;
case 28: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var2 = false;
                            return var2;
case 19:
                            var2 = false;
                            return var2;
case 16:
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
            var10 = var1.bind(var6)();
            var1 = new Array(1);
            var1[0] = var8;
            var10 = var12.bind(var13)(var10, var1);
            var1 = {};
            var1['fetched'] = var11;
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var11 = var7 != var9;
case 29:
            var1['hasAlreadyLinked'] = var11;
            var1['canStartAuthorization'] = var4;
            var1['startAuthorization'] = var10;
            var1['connectionApp'] = var8;
            var1['chosenFlow'] = var2;
            var1['token'] = var9;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = {};
            var10 = false;
            var3['isSubscribedToAuthorizeRequest'] = var10;
            var3['oauth2Token'] = var9;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var8.connectionEntrypointUrl;
case 33:
            var6 = var7 != var6;
            var3['hasConnectionEntrypointUrl'] = var6;
            if(var4) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var4 = new Array(0);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var5 = _closure1_slot5;
            var6 = var5.WEB;
            var5 = new Array(1);
            var5[0] = var6;
            var4 = var5;
case 37:
            var3['validFlows'] = var4;
            var2 = var3;
case 31:
            var1['debug'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();