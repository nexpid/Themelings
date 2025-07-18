// app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getUserGuildMember(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var6 = null;
            var2 = var6 != var4;
            var1 = null;
            if(!var2) { _fun0001_ip = 41; continue _fun0001 }
 20:
            var2 = var6 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 41; continue _fun0001 }
 29:
            var2 = var3.getMember;
            var1 = var2.bind(var3)(var4, var5);
 41:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function isCommunicationDisabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 == var4;
            var5 = undefined;
            var1 = undefined;
            if(var3) { _fun0002_ip = 22; continue _fun0002 }
 16:
            var1 = var4.communicationDisabledUntil;
 22:
            var3 = var2 != var1;
            var2 = null;
            if(!var3) { _fun0002_ip = 34; continue _fun0002 }
 31:
            var2 = var1;
 34:
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
 0:
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
            if(var5) { _fun0003_ip = 75; continue _fun0003 }
 70:
            var2 = var1.id;
 75:
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