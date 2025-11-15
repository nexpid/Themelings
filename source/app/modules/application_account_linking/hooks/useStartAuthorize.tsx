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
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_account_linking/hooks/useStartAuthorize.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AuthorizeFlow'] = var4;
    var2 = function useStartAuthorize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var11 = undefined;
            if(!(var2 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var7 = var2.allowedFlows;
            if(!(var7 === var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var4 = var3.RPC;
            var2 = new Array(2);
            var2[0] = var4;
            var3 = var3.WEB;
            var2[1] = var3;
            var7 = var2;
case 4:
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var11;
            var _closure2_slot2 = var11;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var8 = var5.bind(var11)(var2);
            var3 = var8.useSlayerApp;
            var2 = arg1;
            var3 = var3.bind(var8)(var2);
            _closure2_slot0 = var3;
            var2 = 2;
            var2 = var6[var2];
            var8 = var5.bind(var11)(var2);
            var6 = var8.useIsSubscribed;
            var9 = null;
            var2 = var9 == var3;
            var5 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.id;
case 6:
            var2 = 'AUTHORIZE_REQUEST';
            var2 = var6.bind(var8)(var5, var2);
            var6 = var7.includes;
            var5 = _closure1_slot4;
            var5 = var5.RPC;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var2;
case 8:
            _closure2_slot1 = var5;
            var6 = var7.includes;
            var2 = _closure1_slot4;
            var2 = var2.WEB;
            var6 = var6.bind(var7)(var2);
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var9 == var3;
            var2 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3.connectionEntrypointUrl;
case 12:
            var6 = var9 != var2;
case 10:
            _closure2_slot2 = var6;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = null;
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = _closure1_slot4;
            var2 = var7.WEB;
case 16:
            _fun0001_ip = 18; continue _fun0001;
case 14:
            var7 = _closure1_slot4;
            var2 = var7.RPC;
case 18:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 3;
            var7 = var10[var7];
            var10 = var8.bind(var11)(var7);
            var8 = var10.useAuthorizedAppsToken;
            var12 = var9 == var3;
            var7 = undefined;
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = var3.parentId;
case 19:
            if(!(var9 == var7)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var9 == var3;
            var11 = undefined;
            if(var12) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var3.id;
case 23:
            var7 = var11;
case 21:
            var7 = var8.bind(var10)(var7);
            var8 = var7.token;
            var7 = var7.fetched;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var4 = new Array(3);
            var4[0] = var5;
            var4[1] = var6;
            var4[2] = var3;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.handleClick;
                    var4 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.connectionEntrypointUrl;
                    var4['href'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure1_slot4;
                    var2 = var3.WEB;
case 29:
                    _fun0002_ip = 31; continue _fun0002;
case 27:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 4;
                    var5 = var5[var4];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5);
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
                    var4 = {};
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var3 = _closure1_slot4;
                    var2 = var3.RPC;
case 31:
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var1, var4);
            var1 = {};
            var1['fetched'] = var7;
            if(!var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = var9 != var8;
case 32:
            var1['hasAlreadyLinked'] = var7;
            if(var5) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var5 = var6;
case 34:
            var1['canStartAuthorization'] = var5;
            var1['startAuthorization'] = var4;
            var1['connectionApp'] = var3;
            var1['preferredFlow'] = var2;
            return var1;
        }
    };
    var3['useStartAuthorize'] = var2;
    return var1;
})();