// app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getUserGuildMember(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var6 = null;
            var2 = var6 != var4;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var3.getMember;
            var1 = var2.bind(var3)(var4, var5);
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function isCommunicationDisabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 == var4;
            var5 = undefined;
            var1 = undefined;
            if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var4.communicationDisabledUntil;
case 5:
            var3 = var2 != var1;
            var2 = null;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var1;
case 7:
            var1 = new Array(2);
            var1[0] = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isMemberCommunicationDisabled;
            var2 = var2.bind(var3)(var4);
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function useUserCommunicationDisabled(arg1, arg2) {
        var8 = arg1;
        var9 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var9;
        var3 = _closure1_slot5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 2;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot2;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var8;
        var1 = function() {
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var6.bind(var7)(var5, var1, var4);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_communication_disabled/useUserCommunicationDisabled.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function useCurrentUserCommunicationDisabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var3 = _closure1_slot6;
            var2 = null;
            var5 = var2 == var1;
            var2 = undefined;
            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = var1.id;
case 9:
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useCurrentUserCommunicationDisabled'] = var4;
    var2 = function userCommunicationDisabled(arg1, arg2) {
        var3 = _closure1_slot5;
        var6 = _closure1_slot4;
        var5 = _closure1_slot2;
        var2 = undefined;
        var4 = arg1;
        var1 = arg2;
        var1 = var6.bind(var2)(var4, var1, var5);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['userCommunicationDisabled'] = var2;
    return var1;
})();