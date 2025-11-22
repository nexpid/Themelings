// app/modules/application_account_linking/hooks/useStartAuthorize.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'rpc';
    var4['RPC'] = var5;
    var5 = 'web';
    var4['WEB'] = var5;
    var _closure1_slot4 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_account_linking/hooks/useStartAuthorize.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AuthorizeFlow'] = var4;
    var2 = function useStartAuthorize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[1];
            var9 = undefined;
            if(!(var1 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var9;
            var8 = var1.allowedFlows;
            if(!(var9 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var5 = var3.RPC;
            var2 = new Array(2);
            var2[0] = var5;
            var3 = var3.WEB;
            var2[1] = var3;
            var8 = var2;
case 4:
            var1 = var1.debug;
            var3 = var9 !== var1;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1;
case 6:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var10 = var2.bind(var9)(var1);
            var6 = var10.useSlayerApp;
            var1 = arg1;
            var10 = var6.bind(var10)(var1);
            _closure2_slot0 = var10;
            var1 = 2;
            var1 = var5[var1];
            var11 = var2.bind(var9)(var1);
            var6 = var11.useIsSubscribed;
            var5 = null;
            var1 = var5 == var10;
            var2 = undefined;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var10.id;
case 8:
            var1 = 'AUTHORIZE_REQUEST';
            var12 = var6.bind(var11)(var2, var1);
            var2 = var8.includes;
            var1 = _closure1_slot4;
            var1 = var1.RPC;
            var6 = var2.bind(var8)(var1);
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var12;
case 10:
            _closure2_slot1 = var6;
            var2 = var8.includes;
            var1 = _closure1_slot4;
            var1 = var1.WEB;
            var8 = var2.bind(var8)(var1);
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var5 == var10;
            var1 = undefined;
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var10.connectionEntrypointUrl;
case 14:
            var8 = var5 != var1;
case 12:
            _closure2_slot2 = var8;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = null;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = _closure1_slot4;
            var2 = var1.WEB;
case 18:
            _fun0001_ip = 20; continue _fun0001;
case 16:
            var1 = _closure1_slot4;
            var2 = var1.RPC;
case 20:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 3;
            var1 = var13[var1];
            var13 = var11.bind(var9)(var1);
            var11 = var13.useAuthorizedAppsToken;
            var14 = var5 == var10;
            var1 = undefined;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var10.parentId;
case 21:
            if(!(var5 == var1)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var15 = var5 == var10;
            var14 = undefined;
            if(var15) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = var10.id;
case 25:
            var1 = var14;
case 23:
            var1 = var11.bind(var13)(var1);
            var11 = var1.token;
            var14 = var1.fetched;
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var13 = new Array(3);
            var13[0] = var6;
            var13[1] = var8;
            var13[2] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arguments[0];
                    var7 = undefined;
                    if(!(var4 === var7)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = {};
case 2:
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var5 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0002_ip = 27; continue _fun0002 }
case 5:
                    var5 = _closure2_slot1;
                    if(var5) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var5 = _closure2_slot2;
                    if(var5) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    return var1;
case 30:
                    var2 = _closure2_slot0;
                    var9 = var2.connectionEntrypointUrl;
                    _closure3_slot1 = var9;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var5 = var8[var5];
                    var8 = var6.bind(var7)(var5);
                    var6 = var8.handleClick;
                    var5 = {};
                    var5['href'] = var9;
                    var9 = function onConfirm() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = _closure3_slot1;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure3_slot0;
                            var4 = var3.onConfirm;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0003_ip = 32; continue _fun0003 }
case 30:
                            var3 = _closure3_slot0;
                            var2 = var3.onConfirm;
                            var2 = var2.bind(var3)();
case 32:
                            return var1;
                        }
                    };
                    var5['onConfirm'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var2 = _closure1_slot4;
                    var2 = var2.WEB;
                    return var2;
case 28:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var5 = var8[var5];
                    var8 = var6.bind(var7)(var5);
                    var7 = var8.dispatchToSubscriptions;
                    var6 = 'AUTHORIZE_REQUEST';
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = {};
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = var4.onConfirm;
                    if(!(var1 != var3)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var3 = var4.onConfirm;
                    var3 = var3.bind(var4)();
case 33:
                    var2 = _closure1_slot4;
                    var2 = var2.RPC;
                    return var2;
case 27:
                    return var1;
                }
            };
            var13 = var15.bind(var16)(var1, var13);
            var1 = {};
            var1['fetched'] = var14;
            if(!var14) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var14 = var5 != var11;
case 35:
            var1['hasAlreadyLinked'] = var14;
            var14 = var6;
            if(var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var14 = var8;
case 37:
            var1['canStartAuthorization'] = var14;
            var1['startAuthorization'] = var13;
            var1['connectionApp'] = var10;
            var1['preferredFlow'] = var2;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = {};
            var3['isSubscribedToAuthorizeRequest'] = var12;
            var3['oauth2Token'] = var11;
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var9 = var10.connectionEntrypointUrl;
case 41:
            var9 = var5 != var9;
            var3['hasConnectionEntrypointUrl'] = var9;
            var9 = null;
            if(!var6) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var6 = _closure1_slot4;
            var9 = var6.RPC;
case 43:
            var6 = new Array(2);
            var6[0] = var9;
            var5 = null;
            if(!var8) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var7 = _closure1_slot4;
            var5 = var7.WEB;
case 45:
            var6[1] = var5;
            var5 = var6.filter;
            var4 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var3['validFlows'] = var4;
            var2 = var3;
case 39:
            var1['debug'] = var2;
            return var1;
        }
    };
    var3['useStartAuthorize'] = var2;
    return var1;
})();