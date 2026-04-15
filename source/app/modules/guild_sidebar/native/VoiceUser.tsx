// app/modules/guild_sidebar/native/VoiceUser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/VoiceUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceUserConnected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var23 = var1.user;
            var _closure2_slot1 = var23;
            var8 = var1.sessionId;
            var _closure2_slot2 = var8;
            var24 = var1.member;
            var18 = var1.selfMute;
            var17 = var1.selfDeaf;
            var13 = var1.selfVideo;
            var20 = var1.mute;
            var19 = var1.deaf;
            var21 = var1.suppress;
            var22 = var1.collapsed;
            var7 = var1.isGuest;
            var4 = _closure1_slot6;
            var3 = var4.getId;
            var4 = var3.bind(var4)();
            var3 = var23.id;
            var5 = var4 === var3;
            var _closure2_slot3 = var5;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var10 = var6[var3];
            var4 = undefined;
            var15 = var9.bind(var4)(var10);
            var14 = var15.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = {'localMute': null, 'localDeaf': false, 'localVideo': false};
                    var4 = _closure1_slot7;
                    var3 = var4.isLocalMute;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['localMute'] = var2;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = {'localMute': false, 'localDeaf': false};
                    var4 = _closure1_slot7;
                    var3 = var4.isVideoEnabled;
                    var3 = var3.bind(var4)();
                    var2['localVideo'] = var3;
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var10 = var14.bind(var15)(var11, var10);
            var16 = var10.localMute;
            var15 = var10.localVideo;
            var10 = var6[var3];
            var25 = var9.bind(var4)(var10);
            var14 = var25.useStateFromStores;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getStreamForUser;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var5 = _closure2_slot0;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var14.bind(var25)(var11, var10);
            var10 = var6[var3];
            var26 = var9.bind(var4)(var10);
            var25 = var26.useStateFromStores;
            var10 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var6 = _closure1_slot8;
                    var5 = var6.getSessionById;
                    var3 = _closure2_slot2;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var3 = var3.clientInfo;
                    var2 = var3.os;
case 7:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var10 = var25.bind(var26)(var11, var10);
            var6 = var6[var3];
            var26 = var9.bind(var4)(var6);
            var25 = var26.useStateFromStores;
            var6 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = var12.id;
            var9 = new Array(2);
            var9[0] = var6;
            var6 = var23.id;
            var9[1] = var6;
            var6 = function() {
                var4 = _closure1_slot9;
                var3 = var4.getVoicePlatformForChannel;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var25.bind(var26)(var11, var6, var9);
            var9 = null;
            var11 = var9 != var8;
            if(!var11) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = var5;
case 9:
            if(!var11) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var25 = _closure1_slot6;
            var5 = var25.getSessionId;
            var5 = var5.bind(var25)();
            var11 = var8 !== var5;
case 11:
            var5 = _closure1_slot0;
            var25 = _closure1_slot2;
            var8 = var25[var3];
            var29 = var5.bind(var4)(var8);
            var28 = var29.useStateFromStores;
            var8 = _closure1_slot3;
            var27 = new Array(1);
            var27[0] = var8;
            var8 = var23.id;
            var26 = new Array(2);
            var26[0] = var8;
            var8 = var12.id;
            var26[1] = var8;
            var8 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getEmbeddedActivitiesForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var28.bind(var29)(var27, var8, var26);
            var3 = var25[var3];
            var26 = var5.bind(var4)(var3);
            var5 = var26.useStateFromStores;
            var27 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var27;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = var4.getGuildRingingUsers;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = var3.has;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var26)(var3, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var25[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var25 = var12.guild_id;
            var1['guildId'] = var25;
            var1['member'] = var24;
            var1['user'] = var23;
            var1['collapsed'] = var22;
            if(var20) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var20 = var21;
case 13:
            var1['serverMute'] = var20;
            var1['serverDeaf'] = var19;
            var1['mute'] = var18;
            var1['deaf'] = var17;
            var1['localMute'] = var16;
            if(var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = var15;
case 15:
            var1['video'] = var13;
            var15 = var9 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var14.channelId;
case 17:
            var12 = var12.id;
            var12 = var13 === var12;
            var1['stream'] = var12;
            var1['platform'] = var10;
            var10 = var9 == var10;
            if(!var10) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = var11;
case 19:
            var1['disabled'] = var10;
            var8 = var9 != var8;
            var1['isInEmbeddedActivity'] = var8;
            var1['isGuest'] = var7;
            var1['voicePlatform'] = var6;
            var1['ringing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();