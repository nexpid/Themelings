// app/modules/auth/makeAuthenticated.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LoginStates;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/makeAuthenticated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function makeAuthenticated(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arguments[2];
            var _closure2_slot0 = var4;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 37; continue _fun0001 }
 25:
            var3 = {};
            var5 = true;
            var3['passProps'] = var5;
            var2 = var3;
 37:
            var _closure2_slot2 = var2;
            var1 = function Authenticated(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var1 = var4[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.isAuthenticated;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 189; continue _fun0002 }
 44:
                    var3 = _closure1_slot3;
                    var1 = var3.getLoginStatus;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot4;
                    var1 = var1.LOGGING_IN;
                    if(!(var3 !== var1)) { _fun0002_ip = 189; continue _fun0002 }
 72:
                    var3 = _closure1_slot3;
                    var1 = var3.allowLogoutRedirect;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0002_ip = 189; continue _fun0002 }
 89:
                    var4 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0002_ip = 136; continue _fun0002 }
 102:
                    var6 = _closure1_slot5;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 5;
                    var1 = var8[var1];
                    var4 = var4.bind(var5)(var1);
                    var1 = {};
                    var1 = var6.bind(var5)(var4, var1);
                    _fun0002_ip = 187; continue _fun0002;
 136:
                    var6 = _closure1_slot5;
                    var4 = _closure2_slot1;
                    var3 = {};
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 5;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = {};
                    var8 = var6.bind(var5)(var9, var8);
                    var3['renderRedirect'] = var8;
                    var1 = var6.bind(var5)(var4, var3);
 187:
                    _fun0002_ip = 236; continue _fun0002;
 189:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var8 = var6.passProps;
                    var6 = null;
                    if(!var8) { _fun0002_ip = 220; continue _fun0002 }
 217:
                    var6 = var7;
 220:
                    var12 = var2;
                    var11 = var6;
                    var6 = copyDataProperties(var12, var11);
                    var1 = var4.bind(var5)(var3, var2);
 236:
                    return var1;
                }
            };
            var2 = var4.displayName;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 64; continue _fun0001 }
 59:
            var2 = var4.name;
 64:
            var3 = var3 != var2;
            var5 = '<Unknown>';
            if(!var3) { _fun0001_ip = 80; continue _fun0001 }
 77:
            var5 = var2;
 80:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'Authenticated(';
            var2 = ')';
            var2 = var4.bind(var3)(var5, var2);
            var1['displayName'] = var2;
            return var1;
        }
    };
    var3['makeAuthenticated'] = var2;
    return var1;
})();