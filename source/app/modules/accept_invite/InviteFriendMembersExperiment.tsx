// app/modules/accept_invite/InviteFriendMembersExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function isGuildEligibleForFriendsInServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.features;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var1.Set;
            var2 = var4 instanceof var1;
            var1 = !var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.has;
            var2 = _closure1_slot7;
            var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var3 = var4.includes;
            var2 = _closure1_slot7;
            var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 8:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = ['guild'];
    var _closure1_slot2 = var1;
    var1 = ['guild'];
    var _closure1_slot3 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-11_invite_friend_members', 'label': 'Show Friends in Server on Invite Modal'};
    var10 = {'showFriendsInServer': false, 'showInviter': false};
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Show Friends in Server'};
    var10 = {'showFriendsInServer': true, 'showInviter': false};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Show Friends in Server and Inviter'};
    var12 = {'showFriendsInServer': true, 'showInviter': true};
    var11['config'] = var12;
    var10[1] = var11;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var6 = {'showFriendsInServer': false, 'showInviter': false};
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/accept_invite/InviteFriendMembersExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['InviteFriendMembersExperiment'] = var5;
    var5 = function(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useAccessExperiment;
        var2 = _closure1_slot8;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useInviteFriendMembersExperiment'] = var5;
    var5 = function(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.getAccessExperiment;
        var2 = _closure1_slot8;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getInviteFriendMembersExperiment'] = var5;
    var3['isGuildEligibleForFriendsInServer'] = var4;
    var4 = function useEligibleInviteFriendMembersExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var6 = var7.guild;
            var4 = _closure1_slot4;
            var3 = _closure1_slot2;
            var5 = undefined;
            var7 = var4.bind(var5)(var7, var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 6;
            var3 = var9[var4];
            var12 = var8.bind(var5)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var12)(var10, var3);
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var10;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getFriendCount;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var4 = var8.bind(var9)(var4, var1);
            var1 = _closure1_slot10;
            var1 = var1.bind(var5)(var6);
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var4;
case 9:
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var1;
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var5 = var6.useAccessExperiment;
            var4 = _closure1_slot8;
            var1 = {};
            var14 = var1;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var8 = !var3;
            var7 = 'disable';
            var1[var7] = var8;
            var1 = var5.bind(var6)(var4, var1);
            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = _closure1_slot9;
case 13:
            return var1;
        }
    };
    var3['useEligibleInviteFriendMembersExperiment'] = var4;
    var2 = function getEligibleInviteFriendMembersExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = var5.guild;
            var4 = _closure1_slot4;
            var1 = _closure1_slot3;
            var6 = undefined;
            var5 = var4.bind(var6)(var5, var1);
            var4 = _closure1_slot5;
            var1 = var4.isAuthenticated;
            var4 = var1.bind(var4)();
            var7 = _closure1_slot6;
            var1 = var7.getFriendCount;
            var7 = var1.bind(var7)();
            var1 = 0;
            var1 = var7 > var1;
            if(!var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var1 = _closure1_slot10;
            var1 = var1.bind(var6)(var3);
            if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 15:
            var1 = _closure1_slot9;
            _fun0003_ip = 19; continue _fun0003;
case 18:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getAccessExperiment;
            var2 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var5);
case 19:
            return var1;
        }
    };
    var3['getEligibleInviteFriendMembersExperiment'] = var2;
    return var1;
})();