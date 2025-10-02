// app/modules/user_profile/hooks/useDisplayProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function useDisplayProfile(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot5;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot8;
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var7 = _closure1_slot4;
                var3 = new Array(2);
                var3[0] = var7;
                var2 = _closure1_slot5;
                var3[1] = var2;
                var2 = undefined;
                var1 = var6.bind(var2)(var5, var4, var3);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var5;
    var2 = function getDisplayProfile(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var2 = arguments[2];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot5;
            var1[1] = var3;
            var2 = var1;
case 4:
            var4 = var2;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var5 = var4().value;
            var2 = var1;
            var2 = var2 === var6;
            var3 = undefined;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 2:
            var3 = var5;
case 6:
            var7 = undefined;
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = var4().value;
            var4 = var1;
            var4 = var4 === var6;
            var7 = undefined;
            var2 = var4;
            if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var7 = var5;
            var2 = var4;
case 7:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1.return();
case 10:
            var1 = null;
            if(!(var1 !== var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var3.getUser;
            var2 = var2.bind(var3)(var8);
            var3 = var7.getUserProfile;
            var5 = var3.bind(var7)(var8);
            var4 = var7.getGuildMemberProfile;
            var3 = arg2;
            var4 = var4.bind(var7)(var8, var3);
            var3 = var1 == var2;
            var2 = null;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var3 = _closure1_slot6;
            var2 = var3.bind(var6)(var5, var4);
case 14:
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.cachedFunction;
    var6 = function(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var6 = arg1;
        var5 = arg2;
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/hooks/useDisplayProfile.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function useDisplayProfileWithFetchEffect(arg1, arg2) {
        var4 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var3;
        var7 = _closure1_slot3;
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var3;
        var5[1] = var4;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = _closure2_slot0;
                var2 = {};
                var7 = _closure2_slot1;
                var5 = null;
                var7 = var5 != var7;
                var5 = undefined;
                if(!var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var5 = _closure2_slot1;
case 17:
                var2['guildId'] = var5;
                var2 = var4.bind(var1)(var3, var1, var2);
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2, var5);
        var2 = _closure1_slot7;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var3['useDisplayProfileWithFetchEffect'] = var4;
    var3['getDisplayProfile'] = var2;
    return var1;
})();