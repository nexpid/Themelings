// app/modules/game_invite_channels/GameInvitesChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useGameInvitesChannelGame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var3 = var4[var3];
            var4 = undefined;
            var9 = var5.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = new Array(1);
            var5[0] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = null;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot7;
                    var4 = var5.getGuild;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var4.gameApplicationIds;
                    var4 = var2 == var5;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var4 = 0;
                    var3 = var5[var4];
case 4:
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = var3;
case 7:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var7, var3, var5);
            var8 = null;
            var5 = var8 != var6;
            var7 = null;
            if(!var5) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            var5 = _closure1_slot9;
            var7 = var5[var6];
case 9:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useGame;
            if(!(var8 != var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var7;
case 10:
            var5 = var5.bind(var6)(var3);
            var _closure2_slot1 = var5;
            var3 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot1;
                var2 = var2.data;
                var1['game'] = var2;
                var5 = _closure1_slot4;
                var4 = _closure2_slot1;
                var3 = _closure1_slot2;
                var2 = undefined;
                var6 = var5.bind(var2)(var4, var3);
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function getOfficialApplicationId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = _closure1_slot10;
            var4 = var2.id;
            var4 = var5[var4];
            if(!(var1 == var4)) { _fun0003_ip = 14; continue _fun0003 }
case 12:
            var4 = var1 == var2;
            var1 = undefined;
            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = var2.getOfficialApplicationId;
            var1 = var4.bind(var2)();
case 15:
            _fun0003_ip = 17; continue _fun0003;
case 14:
            var3 = _closure1_slot10;
            var2 = var2.id;
            var1 = var3[var2];
case 17:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = ['data'];
    var _closure1_slot2 = var1;
    var1 = ['data'];
    var _closure1_slot3 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.useMemo;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var9 = '1432419613165228174';
    var6['1509696536903417891'] = var9;
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_invite_channels/GameInvitesChannelUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 'No Mic';
    var3['GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME'] = var6;
    var6 = function useIsGameInvitesPost(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var5 = _closure2_slot0;
                var2 = var5.isForumPost;
                var2 = var2.bind(var5)();
                var5 = !var2;
                if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 20:
                var2 = _closure2_slot0;
                var2 = var2.parent_id;
                var5 = var3 == var2;
case 14:
                var2 = !var5;
                if(var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var6 = _closure1_slot6;
                var5 = var6.getChannel;
                var4 = _closure2_slot0;
                var4 = var4.parent_id;
                var6 = var5.bind(var6)(var4);
                var5 = var3 == var6;
                var4 = undefined;
                if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var5 = var6.isGameInvitesChannel;
                var4 = var5.bind(var6)();
case 23:
                var3 = var3 != var4;
                if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var3 = var4;
case 25:
                var2 = var3;
case 21:
                var1 = var2;
case 18:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsGameInvitesPost'] = var6;
    var6 = function useFirstMessage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useFirstForumPostMessage;
        var2 = {};
        var1 = arg2;
        var2['enabled'] = var1;
        var1 = true;
        var2['allowArchived'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useFirstMessage'] = var6;
    var3['useGameInvitesChannelGame'] = var5;
    var3['getOfficialApplicationId'] = var4;
    var4 = function useGameInvitesChannelOfficialApplication(arg1) {
        var5 = _closure1_slot12;
        var6 = _closure1_slot11;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var3);
        var3 = var3.game;
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 8;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useApplication;
        var5 = var3.bind(var5)(var6);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var5 = _closure2_slot0;
            var2 = var5.data;
            var1['application'] = var2;
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = undefined;
            var6 = var4.bind(var2)(var5, var3);
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useGameInvitesChannelOfficialApplication'] = var4;
    var2 = function useGameInvitesChannelUserActivity(arg1, arg2) {
        var7 = arg2;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot11;
        var5 = undefined;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var6 = var3.game;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 5;
        var3 = var8[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var2 = _closure2_slot1;
                if(!(var1 != var2)) { _fun0005_ip = 27; continue _fun0005 }
case 29:
                var7 = _closure1_slot12;
                var6 = _closure2_slot1;
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var _closure3_slot0 = var2;
                var6 = var1 == var2;
                var2 = null;
                if(var6) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var7 = _closure1_slot8;
                var6 = var7.findActivity;
                var11 = _closure2_slot0;
                var10 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = true;
                var12 = var7;
                var9 = null;
                var4 = var12[var6](var11, var10, var9, var8, var7);
                var5 = var1 != var4;
                var3 = null;
                if(!var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var3 = var4;
case 32:
                var2 = var3;
case 30:
                return var2;
case 27:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGameInvitesChannelUserActivity'] = var2;
    return var1;
})();