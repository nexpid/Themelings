// app/modules/game_invite_channels/GameInvitesChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
                if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var5 = _closure2_slot0;
                var2 = var5.isForumPost;
                var2 = var2.bind(var5)();
                var5 = !var2;
                if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var2 = _closure2_slot0;
                var2 = var2.parent_id;
                var5 = var3 == var2;
case 38:
                var2 = !var5;
                if(var5) { _fun0004_ip = 40; continue _fun0004 }
case 28:
                var6 = _closure1_slot6;
                var5 = var6.getChannel;
                var4 = _closure2_slot0;
                var4 = var4.parent_id;
                var6 = var5.bind(var6)(var4);
                var5 = var3 == var6;
                var4 = undefined;
                if(var5) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var5 = var6.isGameInvitesChannel;
                var4 = var5.bind(var6)();
case 41:
                var3 = var3 != var4;
                if(!var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var3 = var4;
case 43:
                var2 = var3;
case 40:
                var1 = var2;
case 36:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var6;
    var5 = function useGameInvitesChannelGame(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = null;
                    if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var5 = _closure1_slot7;
                    var4 = var5.getGuild;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 5:
                    var5 = var4.gameApplicationIds;
                    var4 = var2 == var5;
                    var3 = undefined;
                    if(var4) { _fun0006_ip = 35; continue _fun0006 }
case 47:
                    var4 = 0;
                    var3 = var5[var4];
case 35:
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var2 = var3;
case 48:
                    var1 = var2;
case 45:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var7, var3, var5);
            var8 = null;
            var5 = var8 != var6;
            var7 = null;
            if(!var5) { _fun0005_ip = 50; continue _fun0005 }
case 48:
            var5 = _closure1_slot9;
            var7 = var5[var6];
case 50:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useGame;
            if(!(var8 != var7)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var3 = var7;
case 51:
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
    var _closure1_slot14 = var5;
    var4 = function getOfficialApplicationId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var5 = _closure1_slot10;
            var4 = var2.id;
            var4 = var5[var4];
            if(!(var1 == var4)) { _fun0007_ip = 38; continue _fun0007 }
case 53:
            var4 = var1 == var2;
            var1 = undefined;
            if(var4) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var4 = var2.getOfficialApplicationId;
            var1 = var4.bind(var2)();
case 55:
            _fun0007_ip = 57; continue _fun0007;
case 38:
            var3 = _closure1_slot10;
            var2 = var2.id;
            var1 = var3[var2];
case 57:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = ['data'];
    var _closure1_slot2 = var1;
    var1 = ['data'];
    var _closure1_slot3 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.useMemo;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var10 = '1432419613165228174';
    var7['1509696536903417891'] = var10;
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/game_invite_channels/GameInvitesChannelUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 'No Mic';
    var3['GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME'] = var7;
    var3['useIsGameInvitesPost'] = var6;
    var6 = function useIsGameInvitePostVoiceEnabled(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.useAppliedTags;
            var4 = var4.bind(var5)(var3);
            var1 = _closure1_slot13;
            var1 = var1.bind(var2)(var3);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = 'No Mic';
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 58:
            return var1;
        }
    };
    var3['useIsGameInvitePostVoiceEnabled'] = var6;
    var6 = function useFirstMessage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
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
        var5 = _closure1_slot15;
        var6 = _closure1_slot14;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var3);
        var3 = var3.game;
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 9;
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
    var4 = function useSubscribeToGameInvitePostAuthors(arg1, arg2) {
        var8 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var6;
        var1 = var8.isGameInvitesChannel;
        var7 = var1.bind(var8)();
        var _closure2_slot2 = var7;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 5;
        var9 = var4[var1];
        var1 = undefined;
        var12 = var3.bind(var1)(var9);
        var11 = var12.useStateFromStoresArray;
        var9 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var9;
        var9 = new Array(2);
        var9[0] = var7;
        var9[1] = var6;
        var6 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0009_ip = 37; continue _fun0009 }
case 60:
                var1 = new Array(0);
                return var1;
case 37:
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var12 = var3;
                var1 = new var12[var1](var11);
                var8 = var1 instanceof Object ? var1 : var3;
                var1 = new Array(0);
                var3 = _closure1_slot11;
                var2 = _closure2_slot1;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0009_ip = 17; continue _fun0009 }
case 61:
                var10 = var3.value;
                var9 = _closure1_slot6;
                var2 = var9.getChannel;
                var2 = var2.bind(var9)(var10);
                var10 = var4 == var2;
                var9 = undefined;
                if(var10) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var9 = var2.ownerId;
case 62:
                var2 = var4 == var9;
                if(var2) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var10 = var8.has;
                var2 = var10.bind(var8)(var9);
case 64:
                if(var2) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                var2 = var8.add;
                var2 = var2.bind(var8)(var9);
                var2 = var1.push;
                var2 = var2.bind(var1)(var9);
case 66:
                var9 = var5.bind(var6)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0009_ip = 61; continue _fun0009 }
case 17:
                return var1;
            }
        };
        var9 = var11.bind(var12)(var10, var6, var9);
        var _closure2_slot3 = var9;
        var6 = _closure1_slot5;
        var5 = new Array(3);
        var5[0] = var9;
        var8 = var8.guild_id;
        var5[1] = var8;
        var5[2] = var7;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0010_ip = 32; continue _fun0010 }
case 60:
                var1 = {};
                _fun0010_ip = 68; continue _fun0010;
case 32:
                var2 = {};
                var4 = _closure2_slot0;
                var4 = var4.guild_id;
                var3 = _closure2_slot3;
                var2[3] = var3;
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5 = var6.bind(var1)(var2, var5);
        var2 = 10;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.useSubscribeGuildMembers;
        var2 = 'GameInvitesChannelPostAuthors';
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var3['useSubscribeToGameInvitePostAuthors'] = var4;
    var2 = function useGameInvitesChannelUserActivity(arg1, arg2) {
        var7 = arg2;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot14;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                var2 = _closure2_slot1;
                if(!(var1 != var2)) { _fun0011_ip = 69; continue _fun0011 }
case 31:
                var7 = _closure1_slot15;
                var6 = _closure2_slot1;
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var _closure3_slot0 = var2;
                var6 = var1 == var2;
                var2 = null;
                if(var6) { _fun0011_ip = 71; continue _fun0011 }
case 72:
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
                if(!var5) { _fun0011_ip = 11; continue _fun0011 }
case 73:
                var3 = var4;
case 11:
                var2 = var3;
case 71:
                return var2;
case 69:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGameInvitesChannelUserActivity'] = var2;
    return var1;
})();