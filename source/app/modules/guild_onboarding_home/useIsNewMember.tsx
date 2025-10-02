// app/modules/guild_onboarding_home/useIsNewMember.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getIsNewMember(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var2 = arg3;
            var1 = var2.isFullServerPreview;
            var1 = var1.bind(var2)(var5);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.getSelfMember;
            var2 = var1.bind(var3)(var5);
            var4 = null;
            if(!(var4 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.getSelfMemberJoinedAt;
            var7 = var1.bind(var3)(var5);
            var1 = var4 != var7;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 3;
            var5 = var6[var5];
            var6 = undefined;
            var8 = var8.bind(var6)(var5);
            var5 = var8.hasFlag;
            var2 = var2.flags;
            var9 = var4 != var2;
            var4 = 0;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var2;
case 8:
            var2 = _closure1_slot5;
            var2 = var2.COMPLETED_HOME_ACTIONS;
            var2 = var5.bind(var8)(var4, var2);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var4 = var7.getTime;
            var4 = var4.bind(var7)();
            var4 = var5 - var4;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.Millis;
            var3 = var3.WEEK;
            var2 = var4 < var3;
case 10:
            var1 = var2;
case 6:
            return var1;
case 4:
            var1 = false;
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/useIsNewMember.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsNewMember(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getIsNewMember(arg1) {
        var5 = _closure1_slot6;
        var4 = _closure1_slot4;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var1, var4, var3);
        return var1;
    };
    var3['getIsNewMember'] = var2;
    return var1;
})();