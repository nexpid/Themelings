// app/modules/guild_sidebar/native/VoiceUser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/VoiceUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceUserConnected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.channel;
            var _closure2_slot0 = var13;
            var24 = var1.user;
            var _closure2_slot1 = var24;
            var9 = var1.sessionId;
            var _closure2_slot2 = var9;
            var25 = var1.member;
            var19 = var1.selfMute;
            var18 = var1.selfDeaf;
            var14 = var1.selfVideo;
            var21 = var1.mute;
            var20 = var1.deaf;
            var22 = var1.suppress;
            var23 = var1.collapsed;
            var8 = var1.isGuest;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var5 = _closure1_slot7;
            var3 = var5.getId;
            var5 = var3.bind(var5)();
            var3 = var24.id;
            var5 = var5 === var3;
            var _closure2_slot3 = var5;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var6 = var7[var3];
            var15 = var10.bind(var4)(var6);
            var12 = var15.useStateFromStoresObject;
            var6 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0002_ip = 59; continue _fun0002 }
 10:
                    var1 = {'localMute': null, 'localDeaf': false, 'localVideo': false};
                    var4 = _closure1_slot8;
                    var3 = var4.isLocalMute;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['localMute'] = var2;
                    _fun0002_ip = 98; continue _fun0002;
 59:
                    var2 = {'localMute': false, 'localDeaf': false};
                    var4 = _closure1_slot8;
                    var3 = var4.isVideoEnabled;
                    var3 = var3.bind(var4)();
                    var2['localVideo'] = var3;
                    var1 = var2;
 98:
                    return var1;
                }
            };
            var6 = var12.bind(var15)(var11, var6);
            var17 = var6.localMute;
            var16 = var6.localVideo;
            var6 = 13;
            var6 = var7[var6];
            var6 = var10.bind(var4)(var6);
            var12 = var6.HangStatusExperiment;
            var11 = var12.useExperiment;
            var6 = {};
            var15 = var13.guild_id;
            var6['guildId'] = var15;
            var15 = 'VoiceUser';
            var6['location'] = var15;
            var6 = var11.bind(var12)(var6);
            var6 = var6.enableHangStatus;
            var _closure2_slot4 = var6;
            var6 = var7[var3];
            var15 = var10.bind(var4)(var6);
            var12 = var15.useStateFromStores;
            var6 = _closure1_slot9;
            var11 = new Array(2);
            var11[0] = var6;
            var6 = _closure1_slot5;
            var11[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 85; continue _fun0003 }
 12:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 19:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0003_ip = 45; continue _fun0003 }
 26:
                    var4 = _closure1_slot5;
                    var2 = var4.getHangStatusActivity;
                    var2 = var2.bind(var4)();
                    _fun0003_ip = 82; continue _fun0003;
 45:
                    var6 = _closure1_slot9;
                    var5 = var6.findActivity;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot12;
                        var1 = var1.HANG_STATUS;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3);
 82:
                    var1 = var2;
 85:
                    return var1;
                }
            };
            var6 = var12.bind(var15)(var11, var6);
            var11 = var7[var3];
            var26 = var10.bind(var4)(var11);
            var15 = var26.useStateFromStores;
            var11 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getStreamForUser;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var5 = _closure2_slot0;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var15.bind(var26)(var12, var11);
            var11 = var7[var3];
            var27 = var10.bind(var4)(var11);
            var26 = var27.useStateFromStores;
            var11 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0004_ip = 64; continue _fun0004 }
 18:
                    var6 = _closure1_slot10;
                    var5 = var6.getSessionById;
                    var3 = _closure2_slot2;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 61; continue _fun0004 }
 49:
                    var3 = var3.clientInfo;
                    var2 = var3.os;
 61:
                    var1 = var2;
 64:
                    return var1;
                }
            };
            var11 = var26.bind(var27)(var12, var11);
            var7 = var7[var3];
            var27 = var10.bind(var4)(var7);
            var26 = var27.useStateFromStores;
            var7 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = var13.id;
            var10 = new Array(2);
            var10[0] = var7;
            var7 = var24.id;
            var10[1] = var7;
            var7 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getVoicePlatformForChannel;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var26.bind(var27)(var12, var7, var10);
            var10 = null;
            var12 = var10 != var9;
            if(!var12) { _fun0001_ip = 445; continue _fun0001 }
 442:
            var12 = var5;
 445:
            if(!var12) { _fun0001_ip = 466; continue _fun0001 }
 448:
            var26 = _closure1_slot7;
            var5 = var26.getSessionId;
            var5 = var5.bind(var26)();
            var12 = var9 !== var5;
 466:
            _closure2_slot5 = var12;
            var5 = _closure1_slot0;
            var26 = _closure1_slot2;
            var9 = var26[var3];
            var30 = var5.bind(var4)(var9);
            var29 = var30.useStateFromStores;
            var9 = _closure1_slot3;
            var28 = new Array(1);
            var28[0] = var9;
            var9 = var24.id;
            var27 = new Array(2);
            var27[0] = var9;
            var9 = var13.id;
            var27[1] = var9;
            var9 = function() {
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
            var9 = var29.bind(var30)(var28, var9, var27);
            var3 = var26[var3];
            var27 = var5.bind(var4)(var3);
            var5 = var27.useStateFromStores;
            var28 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var28;
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
            var5 = var5.bind(var27)(var3, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 14;
            var1 = var26[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var26 = var13.guild_id;
            var1['guildId'] = var26;
            var1['member'] = var25;
            var1['user'] = var24;
            var1['collapsed'] = var23;
            if(var21) { _fun0001_ip = 630; continue _fun0001 }
 627:
            var21 = var22;
 630:
            var1['serverMute'] = var21;
            var1['serverDeaf'] = var20;
            var1['mute'] = var19;
            var1['deaf'] = var18;
            var1['localMute'] = var17;
            if(var14) { _fun0001_ip = 661; continue _fun0001 }
 658:
            var14 = var16;
 661:
            var1['video'] = var14;
            var16 = var10 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 680; continue _fun0001 }
 675:
            var14 = var15.channelId;
 680:
            var13 = var13.id;
            var13 = var14 === var13;
            var1['stream'] = var13;
            var1['platform'] = var11;
            var11 = var10 == var11;
            if(!var11) { _fun0001_ip = 709; continue _fun0001 }
 706:
            var11 = var12;
 709:
            var1['disabled'] = var11;
            var9 = var10 != var9;
            var1['isInEmbeddedActivity'] = var9;
            var1['isGuest'] = var8;
            var1['voicePlatform'] = var7;
            var1['hangStatusActivity'] = var6;
            var1['ringing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();