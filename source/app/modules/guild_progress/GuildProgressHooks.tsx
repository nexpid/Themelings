// app/modules/guild_progress/GuildProgressHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function useGuildChannelCreated(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = function hasNewChannel(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 12;
                        var3 = var7[var4];
                        var5 = undefined;
                        var9 = var6.bind(var5)(var3);
                        var8 = var9.extractTimestamp;
                        var3 = arg1;
                        var3 = var3.channel;
                        var3 = var3.id;
                        var3 = var8.bind(var9)(var3);
                        var4 = var7[var4];
                        var5 = var6.bind(var5)(var4);
                        var4 = var5.extractTimestamp;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
                        var3 = var3 - var2;
                        var2 = 500;
                        var1 = var3 > var2;
case 2:
                        return var1;
                    }
                };
                var5 = _closure1_slot8;
                var3 = var5.getChannels;
                var7 = _closure2_slot0;
                var2 = null;
                var7 = var2 == var7;
                var2 = undefined;
                if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = _closure2_slot0;
                var2 = var6.id;
case 4:
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot7;
                var3 = var2[var3];
                var1 = _closure1_slot6;
                var2 = var2[var1];
                var1 = var2.some;
                var1 = var1.bind(var2)(var4);
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var3.some;
                var1 = var2.bind(var3)(var4);
case 6:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot16 = var8;
    var7 = function useGuildPopulated(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 10;
        var6 = var8[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var5 = _closure2_slot0;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0003_ip = 5; continue _fun0003 }
case 8:
                var4 = _closure2_slot0;
                var1 = var4.systemChannelId;
case 5:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6 = var10.bind(var11)(var9, var6);
        var _closure2_slot1 = var6;
        var6 = var8[var3];
        var11 = var5.bind(var4)(var6);
        var10 = var11.useStateFromStoresArray;
        var6 = _closure1_slot12;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var1 = new Array(0);
                _fun0004_ip = 11; continue _fun0004;
case 9:
                var4 = _closure1_slot12;
                var3 = var4.getMessages;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toArray;
                var1 = var2.bind(var3)();
case 11:
                return var1;
            }
        };
        var6 = var10.bind(var11)(var9, var6);
        var _closure2_slot2 = var6;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = _closure1_slot9;
                var4 = var5.getMemberCount;
                var2 = _closure2_slot0;
                var3 = null;
                var6 = var3 == var2;
                var2 = undefined;
                if(var6) { _fun0005_ip = 5; continue _fun0005 }
case 12:
                var6 = _closure2_slot0;
                var2 = var6.id;
case 5:
                var2 = var4.bind(var5)(var2);
                var4 = var3 != var2;
                var3 = 0;
                if(!var4) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var3 = var2;
case 13:
                var4 = _closure2_slot2;
                var2 = var4.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot15;
                    var1 = var1.USER_JOIN;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var1 = 1;
                var1 = var3 > var1;
                if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot17 = var7;
    var6 = function useGuildPersonalized(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 10;
            var2 = var7[var5];
            var1 = undefined;
            var10 = var6.bind(var1)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.hasLayers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var10)(var8, var2);
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 17; continue _fun0007 }
case 8:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
case 17:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var1 = var4.icon;
case 18:
            var1 = var3 != var1;
            if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var1 = !var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function useChannelsMessaged(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 10;
        var7 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
        var _closure2_slot1 = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.some;
            var2 = _closure2_slot0;
            var1 = function(arg1) {
                var4 = _closure1_slot12;
                var3 = var4.getMessages;
                var2 = arg1;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toArray;
                var4 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4.author;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        if(!var1) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 22:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var5;
    var4 = function useGuildMessaged(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0009_ip = 24; continue _fun0009 }
case 3:
                var4 = _closure1_slot5;
                var3 = var4.getMutableBasicGuildChannelsForGuild;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 24:
                return var1;
            }
        };
        var7 = var6.bind(var7)(var5, var2);
        var _closure2_slot1 = var7;
        var2 = _closure1_slot19;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var7;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 14; continue _fun0010 }
case 10:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.values;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                _fun0010_ip = 25; continue _fun0010;
case 14:
                var1 = new Array(0);
case 25:
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var13 = var11[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var13);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var13 = var11[var9];
    var13 = var10.bind(var1)(var13);
    var14 = var13.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var14;
    var13 = var13.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var13;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 8;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 9;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.Permissions;
    var _closure1_slot14 = var12;
    var9 = var9.MessageTypes;
    var _closure1_slot15 = var9;
    var9 = 15;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_progress/GuildProgressHooks.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function usePermissions(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot13;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = {};
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var8 = var5.bind(var2)(var3);
                var7 = var8.canViewInviteModal;
                var6 = _closure1_slot13;
                var2 = _closure2_slot1;
                var5 = _closure2_slot0;
                var5 = var7.bind(var8)(var6, var2, var5);
                var1['canInvite'] = var5;
                var5 = null;
                var2 = var5 != var2;
                if(!var2) { _fun0011_ip = 26; continue _fun0011 }
case 27:
                var9 = _closure1_slot13;
                var8 = var9.can;
                var6 = _closure1_slot14;
                var7 = var6.MANAGE_GUILD;
                var6 = _closure2_slot1;
                var2 = var8.bind(var9)(var7, var6);
case 26:
                var1['canManageGuild'] = var2;
                var2 = _closure2_slot0;
                var2 = var5 != var2;
                if(!var2) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                var9 = _closure1_slot13;
                var8 = var9.can;
                var6 = _closure1_slot14;
                var7 = var6.SEND_MESSAGES;
                var6 = _closure2_slot0;
                var2 = var8.bind(var9)(var7, var6);
case 28:
                var1['canMessage'] = var2;
                var2 = _closure2_slot1;
                var2 = var5 != var2;
                if(!var2) { _fun0011_ip = 30; continue _fun0011 }
case 31:
                var6 = _closure1_slot13;
                var5 = var6.can;
                var4 = _closure1_slot14;
                var4 = var4.MANAGE_CHANNELS;
                var3 = _closure2_slot1;
                var2 = var5.bind(var6)(var4, var3);
case 30:
                var1['canCreateChannel'] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['usePermissions'] = var9;
    var3['useGuildChannelCreated'] = var8;
    var3['useGuildPopulated'] = var7;
    var3['useGuildPersonalized'] = var6;
    var3['useChannelsMessaged'] = var5;
    var3['useGuildMessaged'] = var4;
    var2 = function useCompletedStates(arg1) {
        var4 = arg1;
        var1 = {};
        var5 = _closure1_slot17;
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var1['guildPopulated'] = var5;
        var5 = _closure1_slot20;
        var5 = var5.bind(var3)(var4);
        var1['guildMessaged'] = var5;
        var5 = _closure1_slot18;
        var5 = var5.bind(var3)(var4);
        var1['guildPersonalized'] = var5;
        var2 = _closure1_slot16;
        var2 = var2.bind(var3)(var4);
        var1['guildChannelCreated'] = var2;
        return var1;
    };
    var3['useCompletedStates'] = var2;
    return var1;
})();