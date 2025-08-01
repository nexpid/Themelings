// app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot4 = var7;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/canReviewGuildMemberApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canReviewGuildMemberApplications(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot2;
            var2 = var4.getGuild;
            var1 = arg1;
            var6 = var2.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 87; continue _fun0001 }
 29:
            var5 = var6.features;
            var4 = var5.has;
            var2 = _closure1_slot4;
            var2 = var2.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0001_ip = 84; continue _fun0001 }
 58:
            var5 = _closure1_slot3;
            var4 = var5.can;
            var3 = _closure1_slot5;
            var3 = var3.KICK_MEMBERS;
            var2 = var4.bind(var5)(var3, var6);
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var3['canReviewGuildMemberApplications'] = var4;
    var2 = function useCanReviewGuildMemberApplications(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var6)(var3, var1);
            var6 = _closure1_slot3;
            var3 = var6.can;
            var1 = _closure1_slot5;
            var1 = var1.KICK_MEMBERS;
            var3 = var3.bind(var6)(var1, var4);
            if(var3) { _fun0002_ip = 117; continue _fun0002 }
 91:
            var7 = _closure1_slot3;
            var6 = var7.can;
            var1 = _closure1_slot5;
            var1 = var1.MANAGE_GUILD;
            var3 = var6.bind(var7)(var1, var4);
 117:
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 152; continue _fun0002 }
 126:
            var8 = var4.features;
            var7 = var8.has;
            var6 = _closure1_slot4;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var1 = var7.bind(var8)(var6);
 152:
            if(!var1) { _fun0002_ip = 158; continue _fun0002 }
 155:
            var1 = var3;
 158:
            if(!var1) { _fun0002_ip = 192; continue _fun0002 }
 161:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.guildHasVerificationGate;
            var1 = var2.bind(var3)(var4);
 192:
            return var1;
        }
    };
    var3['useCanReviewGuildMemberApplications'] = var2;
    return var1;
})();