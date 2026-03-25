// app/modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDefaultAuthorizationNotifiers(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var3 = arguments[2];
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var9;
            var8 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var7 = var3.showToastOnSuccess;
            if(!(var7 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = true;
case 4:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var8;
            var11 = _closure1_slot3;
            var5 = var11.useRef;
            var4 = false;
            var4 = var5.bind(var11)(var4);
            _closure2_slot3 = var4;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 3;
            var4 = var10[var4];
            var13 = var6.bind(var8)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot5;
                var1 = var1.ACTIVE;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var12.bind(var13)(var5, var4);
            var4 = 4;
            var4 = var10[var4];
            var6 = var6.bind(var8)(var4);
            var4 = var6.useIsInAppBrowserOpen;
            var4 = var4.bind(var6)();
            var10 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function(arg1) {
                var3 = _closure2_slot3;
                var2 = true;
                var3['current'] = var2;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var1, var6);
            var6 = var5;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = !var4;
case 6:
            _closure2_slot4 = var6;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 5;
            var4 = var10[var4];
            var8 = var5.bind(var8)(var4);
            var5 = var8.usePreviousWhen;
            var4 = {};
            var4['value'] = var9;
            var4['shouldUpdate'] = var6;
            var8 = var5.bind(var8)(var4);
            _closure2_slot5 = var8;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot5;
                    var3 = false;
                    if(!(var3 === var2)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var4 = _closure2_slot1;
                    var2 = true;
                    if(!(var2 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 12:
                    var2 = _closure2_slot3;
                    var2['current'] = var3;
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1 = undefined;
                    return var1;
case 13:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 6;
                    var1 = var9[var1];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 7;
                    var4 = var9[var4];
                    var4 = var5.bind(var7)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var4 = 8;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.uG6teD;
                    var4 = var5.bind(var6)(var4);
                    var1['content'] = var4;
                    var4 = 'account-linked-toast';
                    var1['key'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useDefaultAuthorizationNotifiers'] = var2;
    return var1;
})();