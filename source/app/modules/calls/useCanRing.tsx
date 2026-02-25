// app/modules/calls/useCanRing.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useCanRingToGuildVoiceChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arguments[1];
            var7 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 'useCanRingToGuildVoiceChannel';
case 2:
            var _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var3 = var8[var2];
            var12 = var4.bind(var6)(var3);
            var10 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot8;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var3 = var10.bind(var12)(var9, var3);
            var2 = var8[var2];
            var9 = var4.bind(var6)(var2);
            var4 = var9.useStateFromStores;
            var10 = _closure1_slot6;
            var2 = new Array(2);
            var2[0] = var10;
            var10 = _closure1_slot7;
            var2[1] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    if(var2) { _fun0003_ip = 2; continue _fun0003 }
case 6:
                    var2 = _closure2_slot1;
                    var4 = var2.guild_id;
case 2:
                    if(!(var3 != var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var6 = _closure1_slot6;
                    var5 = var6.getMember;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var3 != var1;
                    var3 = _closure1_slot7;
                    var2 = var3.getCheck;
                    var2 = var2.bind(var3)(var4);
                    var2 = var2.canChat;
                    if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = var2;
case 9:
                    return var1;
case 7:
                    var1 = false;
                    return var1;
                }
            };
            var4 = var4.bind(var9)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 12;
            var1 = var8[var1];
            var2 = var2.bind(var6)(var1);
            var8 = null;
            var9 = var8 == var7;
            var1 = undefined;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var7.id;
case 11:
            var1 = var2.bind(var6)(var1);
            var2 = var1.needSubscriptionToAccess;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var10 = var9.bind(var6)(var1);
            var9 = var10.useExperiment;
            var1 = {};
            var13 = var8 == var7;
            var12 = undefined;
            if(var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = var7.guild_id;
case 13:
            var1['guildId'] = var12;
            var1['location'] = var11;
            var1 = var9.bind(var10)(var1);
            var1 = var1.enabled;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var7.type;
case 15:
            var5 = _closure1_slot11;
            var5 = var5.GUILD_VOICE;
            var5 = var6 === var5;
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var5;
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = var4;
case 19:
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var3;
case 21:
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = !var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot11 = var8;
    var5 = var5.ChannelTypesSets;
    var _closure1_slot12 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/useCanRing.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useCanRing(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var8 = arguments[1];
            var _closure2_slot0 = var4;
            var7 = undefined;
            if(!(var8 === var7)) { _fun0004_ip = 25; continue _fun0004 }
case 6:
            var8 = 'useCanRing';
case 25:
            var2 = arguments[2];
            var _closure2_slot1 = var2;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var5 = var10[var3];
            var12 = var9.bind(var7)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var11.bind(var12)(var6, var5);
            var5 = var10[var3];
            var13 = var9.bind(var7)(var5);
            var12 = var13.useStateFromStores;
            var5 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var12.bind(var13)(var11, var5);
            var3 = var10[var3];
            var10 = var9.bind(var7)(var3);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.isFriend;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var10)(var3, var1);
            var3 = null;
            var9 = var3 == var6;
            var11 = undefined;
            if(var9) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var11 = var6.type;
case 26:
            var3 = var3 != var11;
            if(!var3) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var9 = _closure1_slot12;
            var10 = var9.CALLABLE;
            var9 = var10.has;
            var3 = var9.bind(var10)(var11);
case 28:
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var4, var8, var6);
            if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var1 = !var5;
case 30:
            if(!var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var5 = var4.bot;
            var1 = !var5;
case 32:
            if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var5 = var4.system;
            var1 = !var5;
case 34:
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var4.isProvisional;
            var1 = !var4;
case 36:
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = var3;
case 40:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var3['useCanRing'] = var5;
    var4 = function canRingUsersInChannel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot12;
            var5 = var1.CALLABLE;
            var4 = var5.has;
            var1 = var2.type;
            var5 = var4.bind(var5)(var1);
            var4 = var2.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_VOICE;
            if(var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            if(!(var4 !== var1)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = false;
            return var1;
case 44:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getCurrentConfig;
            var1 = {};
            var6 = var2.guild_id;
            var1['guildId'] = var6;
            var6 = 'ring';
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            var1 = var1.enabled;
            var7 = _closure1_slot10;
            var6 = var7.getVoiceState;
            var5 = var2.guild_id;
            var8 = _closure1_slot3;
            var4 = var8.getId;
            var4 = var4.bind(var8)();
            var4 = var6.bind(var7)(var5, var4);
            if(!var1) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var5 = null;
            var1 = var5 != var4;
case 46:
            if(!var1) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var5 = var4.channelId;
            var4 = var2.id;
            var1 = var5 === var4;
case 48:
            return var1;
case 42:
            var5 = _closure1_slot4;
            var4 = var5.getCall;
            var1 = var2.id;
            var4 = var4.bind(var5)(var1);
            var5 = null;
            var1 = var5 != var4;
            if(!var1) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var4 = var4.messageId;
            var1 = var5 != var4;
case 50:
            if(!var1) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var4 = _closure1_slot4;
            var3 = var4.isCallUnavailable;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 52:
            return var1;
        }
    };
    var3['canRingUsersInChannel'] = var4;
    var3['useCanRingToGuildVoiceChannel'] = var2;
    return var1;
})();