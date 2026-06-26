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
    var4 = 9;
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
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var3 = arg1;
                            var4 = _closure2_slot0;
                            var5 = null;
                            var7 = var5 == var4;
                            var9 = undefined;
                            var4 = undefined;
                            if(var7) { _fun0002_ip = 18; continue _fun0002 }
case 4:
                            var7 = _closure2_slot0;
                            var4 = var7.connectionEntrypointUrl;
case 18:
                            if(!(var5 != var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20: // try_start_0
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var4 = 6;
                            var4 = var10[var4];
                            var10 = var8.bind(var9)(var4);
                            var8 = var10.openURL;
                            var4 = _closure2_slot0;
                            var4 = var4.connectionEntrypointUrl;
                            var4 = var8.bind(var10)(var4);
                            SaveGenerator(address=98);
case 21:
                            return var4;
case 22:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                            if(var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                            var8 = var3;
                            var8 = var8.onConfirm;
                            if(!(var5 != var8)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                            var10 = var3;
                            var8 = var10.onConfirm;
                            var8 = var8.bind(var10)();
case 25:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var8 = 7;
                            var8 = var11[var8];
                            var14 = var10.bind(var9)(var8);
                            var13 = var14.track;
                            var8 = _closure1_slot6;
                            var12 = var8.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED;
                            var8 = {};
                            var10 = var3;
                            var15 = var10.analyticsLocations;
                            var8['location_stack'] = var15;
                            var15 = _closure2_slot0;
                            var15 = var15.id;
                            var8['application_id'] = var15;
                            var15 = _closure1_slot5;
                            var15 = var15.WEB;
                            var8['flow_type'] = var15;
                            var8 = var13.bind(var14)(var12, var8);
                            var8 = _closure1_slot0;
                            var7 = 8;
                            var7 = var11[var7];
                            var9 = var8.bind(var9)(var7);
                            var8 = var9.accountLinkAuthorizationStarted;
                            var6 = _closure2_slot0;
                            var7 = var6.id;
                            var6 = {};
                            var11 = var10.onSuccess;
                            var6['onSuccess'] = var11;
                            var10 = var10.onError;
                            var6['onError'] = var10;
                            var6 = var8.bind(var9)(var7, var6);
case 27: // try_end0
                            var6 = true;
                            return var6;
case 23:
                            return var4;
case 28: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = var3;
                            var4 = var4.onError;
                            if(!(var5 != var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                            var4 = var3;
                            var3 = var4.onError;
                            var2 = var3.bind(var4)(var2);
case 29:
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
            if(!var11) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var11 = var7 != var9;
case 31:
            var1['hasAlreadyLinked'] = var11;
            var1['canStartAuthorization'] = var4;
            var1['startAuthorization'] = var10;
            var1['connectionApp'] = var8;
            var1['chosenFlow'] = var2;
            var1['token'] = var9;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = {};
            var10 = false;
            var3['isSubscribedToAuthorizeRequest'] = var10;
            var3['oauth2Token'] = var9;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 30; continue _fun0001 }
case 35:
            var6 = var8.connectionEntrypointUrl;
case 30:
            var6 = var7 != var6;
            var3['hasConnectionEntrypointUrl'] = var6;
            if(var4) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var4 = new Array(0);
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var5 = _closure1_slot5;
            var6 = var5.WEB;
            var5 = new Array(1);
            var5[0] = var6;
            var4 = var5;
case 38:
            var3['validFlows'] = var4;
            var2 = var3;
case 33:
            var1['debug'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();