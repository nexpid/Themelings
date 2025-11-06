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
            var10 = undefined;
            if(!(var2 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var7 = var2.allowedFlows;
            if(!(var7 === var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var4 = var3.RPC;
            var2 = new Array(2);
            var2[0] = var4;
            var3 = var3.WEB;
            var2[1] = var3;
            var7 = var2;
case 4:
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var8 = var5.bind(var10)(var2);
            var4 = var8.useSlayerApp;
            var2 = arg1;
            var2 = var4.bind(var8)(var2);
            _closure2_slot0 = var2;
            var4 = 2;
            var4 = var6[var4];
            var9 = var5.bind(var10)(var4);
            var6 = var9.useIsSubscribed;
            var8 = null;
            var4 = var8 == var2;
            var5 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var2.id;
case 6:
            var4 = 'AUTHORIZE_REQUEST';
            var5 = var6.bind(var9)(var5, var4);
            var6 = var7.includes;
            var4 = _closure1_slot4;
            var4 = var4.RPC;
            var4 = var6.bind(var7)(var4);
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5;
case 8:
            _closure2_slot1 = var4;
            var6 = var7.includes;
            var5 = _closure1_slot4;
            var5 = var5.WEB;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var8 == var2;
            var6 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var2.connectionEntrypointUrl;
case 12:
            var5 = var8 != var6;
case 10:
            _closure2_slot2 = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 3;
            var6 = var9[var6];
            var9 = var7.bind(var10)(var6);
            var7 = var9.useAuthorizedAppsToken;
            var11 = var8 == var2;
            var6 = undefined;
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var2.parentId;
case 14:
            if(!(var8 == var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var8 == var2;
            var10 = undefined;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var2.id;
case 18:
            var6 = var10;
case 16:
            var6 = var7.bind(var9)(var6);
            var7 = var6.token;
            var6 = var6.fetched;
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var3 = new Array(3);
            var3[0] = var4;
            var3[1] = var5;
            var3[2] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!var3) { _fun0002_ip = 24; continue _fun0002 }
case 25:
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
case 24:
                    _fun0002_ip = 26; continue _fun0002;
case 22:
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
case 26:
                    var1 = var2;
case 20:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var1, var3);
            var1 = {};
            var1['fetched'] = var6;
            if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var8 != var7;
case 27:
            var1['hasAlreadyLinked'] = var6;
            if(var4) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var4 = var5;
case 29:
            var1['canStartAuthorization'] = var4;
            var1['startAuthorization'] = var3;
            var1['connectionApp'] = var2;
            return var1;
        }
    };
    var3['useStartAuthorize'] = var2;
    return var1;
})();