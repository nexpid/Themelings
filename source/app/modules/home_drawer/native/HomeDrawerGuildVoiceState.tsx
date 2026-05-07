// app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function VoiceUsers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.voiceUsers;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var1 = var10.length;
            var3 = 3;
            var11 = var10;
            if(!(var1 > var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var10.slice;
            var1 = 0;
            var11 = var2.bind(var10)(var1, var3);
case 2:
            var3 = var10.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot10;
            var4 = _closure1_slot4;
            var3 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var3['style'] = var6;
            var8 = _closure1_slot10;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 8;
            var6 = var14[var2];
            var2 = undefined;
            var6 = var13.bind(var2)(var6);
            var7 = var6.AvatarPile;
            var6 = {};
            var12 = 9;
            var12 = var14[var12];
            var12 = var13.bind(var2)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.XSMALL;
            var6['size'] = var12;
            var13 = var11.map;
            var12 = function(arg1) {
                var1 = arg1;
                var1 = var1.username;
                return var1;
            };
            var12 = var13.bind(var11)(var12);
            var6['names'] = var12;
            var10 = var10.length;
            var6['totalCount'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 9;
                var2 = var8[var6];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Avatar;
                var2 = {};
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XSMALL;
                var2['size'] = var6;
                var2['user'] = var1;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = false;
                var2['animate'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var2)(var7, var6);
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
case 4:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingRight': 8, 'height': 40, 'gap': 4, 'justifyContent': 'center'};
    var4['voiceContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildVoiceState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var11 = var2.voiceUsers;
            var1 = var2.streamingChannelId;
            var12 = var2.streamingUser;
            var10 = var2.guildId;
            var2 = _closure1_slot11;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var3 = var11.length;
            var2 = 0;
            var2 = var3 > var2;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var6 = null;
            var9 = var6 != var1;
            var3 = undefined;
            if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1;
case 6:
            var9 = var6 == var12;
            var1 = undefined;
            if(var9) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var12.id;
case 8:
            var1 = var4.bind(var5)(var10, var3, var1);
            var13 = var1.previewUrl;
            var1 = null;
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var8.voiceContainer;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var14 = var6 != var12;
            var12 = 32;
            if(!var14) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = 48;
case 12:
            var9['height'] = var12;
            var8[1] = var9;
            var2['style'] = var8;
            if(!(var6 != var13)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = _closure1_slot10;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 11;
            var6 = var16[var6];
            var8 = var15.bind(var5)(var6);
            var6 = {};
            var12 = {'width': 72, 'height': 44};
            var14 = 12;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.radii;
            var14 = var14.sm;
            var12['borderRadius'] = var14;
            var6['style'] = var12;
            var12 = {};
            var12['uri'] = var13;
            var6['source'] = var12;
            var6 = var9.bind(var5)(var8, var6);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var9 = _closure1_slot10;
            var8 = _closure1_slot12;
            var7 = {};
            var7['voiceUsers'] = var11;
            var7['guildId'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 16:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['GuildVoiceState'] = var4;
    var2 = function useVoiceUsers(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var8 = var7.id;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 13;
        var6 = var9[var2];
        var4 = undefined;
        var13 = var5.bind(var4)(var6);
        var12 = var13.useStateFromStoresArray;
        var6 = _closure1_slot5;
        var11 = new Array(1);
        var11[0] = var6;
        var10 = new Array(1);
        var10[0] = var8;
        var6 = function() {
            var5 = _closure1_slot5;
            var4 = var5.getChannels;
            var3 = _closure2_slot1;
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot6;
            var4 = var3[var2];
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var2 = var1.type;
                var1 = _closure1_slot9;
                var1 = var1.GUILD_VOICE;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var12.bind(var13)(var11, var6, var10);
        var _closure2_slot2 = var6;
        var10 = var9[var2];
        var13 = var5.bind(var4)(var10);
        var12 = var13.useStateFromStores;
        var10 = _closure1_slot8;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getVoiceStates;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var12.bind(var13)(var11, var8, var10);
        var _closure2_slot3 = var8;
        var2 = var9[var2];
        var9 = var5.bind(var4)(var2);
        var5 = var9.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getBlockedOrIgnoredIDs;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var5.bind(var9)(var4, var2);
        var _closure2_slot4 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(4);
        var3[0] = var6;
        var3[1] = var8;
        var9 = var7.afkChannelId;
        var3[2] = var9;
        var3[3] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.flatMap;
            var2 = _closure2_slot2;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2.afkChannelId;
                    if(!(var3 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = _closure2_slot3;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = new Array(0);
case 19:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.filterOutBlockedOrIgnoredUsers;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
case 17:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var8;
        var7 = var7.afkChannelId;
        var2[1] = var7;
        var2[2] = var6;
        var1 = function() {
            var1 = null;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var1;
            var1 = global;
            var4 = var1.Object;
            var3 = var4.keys;
            var1 = _closure2_slot3;
            var4 = var3.bind(var4)(var1);
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure2_slot0;
                    var3 = var3.afkChannelId;
                    if(!(var2 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 18:
                    var4 = _closure2_slot2;
                    var3 = var4.includes;
                    var3 = var3.bind(var4)(var2);
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var1 = _closure2_slot3;
                    var4 = var1[var2];
                    var5 = null;
                    if(!(var5 == var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var4 = new Array(0);
case 23:
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = var5 != var1;
                    if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 7:
                    var4 = _closure3_slot0;
                    var3 = var5 == var4;
case 25:
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 26:
                    var3 = var1.user;
                    _closure3_slot0 = var3;
                    _closure3_slot1 = var2;
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var3 = _closure3_slot0;
            var1['streamingUser'] = var3;
            var2 = _closure3_slot1;
            var1['streamingChannelId'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['voiceUsers'] = var3;
        var3 = var2.streamingUser;
        var1['streamingUser'] = var3;
        var2 = var2.streamingChannelId;
        var1['streamingChannelId'] = var2;
        return var1;
    };
    var3['useVoiceUsers'] = var2;
    return var1;
})();