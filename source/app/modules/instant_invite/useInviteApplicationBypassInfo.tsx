// app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot3 = var7;
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/useInviteApplicationBypassInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInviteApplicationBypassInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                var4 = _closure1_slot2;
                var3 = var4.can;
                var1 = _closure1_slot4;
                var2 = var1.KICK_MEMBERS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var6.bind(var7)(var5, var3, var4);
            var3 = null;
            var5 = var3 == var2;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var2.features;
            var7 = var8.has;
            var6 = _closure1_slot3;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var7.bind(var8)(var6);
            var5 = !var6;
case 2:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3 == var2;
case 4:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.features;
            var2 = var3.has;
            var1 = _closure1_slot3;
            var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
            var1 = var2.bind(var3)(var1);
            var5 = !var1;
case 6:
            var2 = !var5;
            var1 = {};
            var3 = var2;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4;
case 8:
            var1['canCreateApplicationBypassInvites'] = var3;
            var1['isManualApprovalGuild'] = var2;
            return var1;
        }
    };
    var3['useInviteApplicationBypassInfo'] = var2;
    return var1;
})();