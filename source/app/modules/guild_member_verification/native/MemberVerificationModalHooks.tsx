// app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function useUserVerificationState() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var6 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 4;
                var2 = var2[var7];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var2 = var2.UserVerificationFieldPlatforms;
                var8 = var2.EMAIL;
                var2 = null;
                var5 = var2 == var6;
                var9 = undefined;
                if(var5) { _fun0001_ip = 69; continue _fun0001 }
 63:
                var9 = var6.verified;
 69:
                var5 = var2 != var9;
                if(!var5) { _fun0001_ip = 79; continue _fun0001 }
 76:
                var5 = var9;
 79:
                var1[var8] = var5;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var4)(var3);
                var3 = var3.UserVerificationFieldPlatforms;
                var3 = var3.PHONE;
                var5 = var2 == var6;
                var4 = undefined;
                if(var5) { _fun0001_ip = 132; continue _fun0001 }
 122:
                var5 = var6.isPhoneVerified;
                var4 = var5.bind(var6)();
 132:
                var2 = var2 != var4;
                if(!var2) { _fun0001_ip = 142; continue _fun0001 }
 139:
                var2 = var4;
 142:
                var1[var3] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var2 = function useInitialVerification(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getInitialVerificationState;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var9 = var8[var6];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.setInitialVerification;
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_member_verification/native/MemberVerificationModalHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useSetInitialVerificationEffect(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var1 = {};
        var4 = _closure1_slot7;
        var5 = undefined;
        var4 = var4.bind(var5)(var6);
        var1['initial'] = var4;
        var4 = _closure1_slot6;
        var4 = var4.bind(var5)();
        var1['current'] = var4;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot2;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var1);
        var _closure2_slot2 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot2;
                var2 = var2.current;
                var4 = var2.current;
                var3 = var2.initial;
                var2 = null;
                if(!(var2 == var3)) { _fun0002_ip = 48; continue _fun0002 }
 29:
                var3 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2, var4);
 48:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1 = var1.initial;
        return var1;
    };
    var3['useSetInitialVerificationEffect'] = var5;
    var3['useUserVerificationState'] = var4;
    var3['useInitialVerification'] = var2;
    return var1;
})();