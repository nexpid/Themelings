// app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function isActionedApplicationStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.APPROVED;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 79; continue _fun0001 }
 46:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildJoinRequestApplicationStatuses;
            var2 = var2.REJECTED;
            var1 = var3 === var2;
 79:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/GuildJoinRequestUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isActionedApplicationStatus'] = var4;
    var4 = function isSubmittedApplicationStatus(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.GuildJoinRequestApplicationStatuses;
        var2 = var1.SUBMITTED;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var3['isSubmittedApplicationStatus'] = var4;
    var4 = function isApprovedAndAcked(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.applicationStatus;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.APPROVED;
            var1 = var3 === var1;
            if(!var1) { _fun0002_ip = 64; continue _fun0002 }
 52:
            var3 = var2.lastSeen;
            var2 = null;
            var1 = var2 != var3;
 64:
            return var1;
        }
    };
    var3['isApprovedAndAcked'] = var4;
    var2 = function isActionedAndNotAcked(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot2;
            var3 = var2.applicationStatus;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            if(!var1) { _fun0003_ip = 38; continue _fun0003 }
 26:
            var3 = var2.lastSeen;
            var2 = null;
            var1 = var2 == var3;
 38:
            return var1;
        }
    };
    var3['isActionedAndNotAcked'] = var2;
    return var1;
})();