// app/modules/hangouts/native/LiveActivityState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function fallbackAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var2);
            var6 = var7.parseInteger;
            var2 = var3.discriminator;
            var4 = 0;
            var2 = var6.bind(var7)(var2, var4);
            if(!(!(var2 > var4))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 15;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var3 = var3.id;
            var6 = var4.bind(var5)(var3);
            var4 = var6.shiftRight;
            var3 = 22;
            var6 = var4.bind(var6)(var3);
            var4 = var6.mod;
            var7 = _closure1_slot0;
            var3 = 14;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DEFAULT_AVATAR_COUNT;
            var4 = var4.bind(var6)(var3);
            var3 = var4.toJSNumber;
            var3 = var3.bind(var4)();
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.LEGACY_DEFAULT_AVATAR_COUNT;
            var3 = var2 % var1;
case 4:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'default_avatar_';
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function preloadAssetsForUser(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = null;
            if(!(var5 != var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var6 = undefined;
            var10 = var4.bind(var6)(var3);
            var9 = var10.getUserAvatarURL;
            var8 = {};
            var3 = var1.id;
            var8['id'] = var3;
            var3 = var1.avatar;
            var8['avatar'] = var3;
            var3 = var1.discriminator;
            var8['discriminator'] = var3;
            var13 = false;
            var12 = 32;
            var11 = 'png';
            var15 = var10;
            var14 = var8;
            var4 = var15[var9](var14, var13, var12, var11, var10);
            var7 = 'number';
            var3 = typeof var4;
            if(!(var7 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.preloadAsset;
            var1 = var1.avatar;
            var5 = var5 != var1;
            var7 = 'missing';
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var1;
case 8:
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var5 = '';
            var1 = '.png';
            var1 = var6.bind(var5)(var7, var1);
            var1 = var2.bind(var3)(var4, var1);
case 5:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getVoiceStateForUser(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot12;
            var3 = var6.getVoiceStateForChannel;
            var2 = var5.id;
            var6 = var3.bind(var6)(var8, var2);
            var3 = null;
            if(!(var3 != var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = _closure1_slot3;
            var2 = var7.getEmbeddedActivitiesForChannel;
            var8 = var2.bind(var7)(var8);
            var7 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.userIds;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var8)(var2);
            var8 = _closure1_slot9;
            var7 = var8.findActivity;
            var5 = var5.id;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot14;
                var1 = var1.CUSTOM_STATUS;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var7.bind(var8)(var5, var4);
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var7 = var4.type;
case 12:
            var1 = _closure1_slot14;
            var5 = var1.LISTENING;
            var4 = var6.selfStream;
            var1 = 'screenshare';
            if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var3 != var2;
            var2 = 'activity';
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var6.selfVideo;
            var3 = 'video';
            if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = 'music';
            if(!(var7 !== var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var7 = var6.selfDeaf;
            var5 = 'deafened';
            if(var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var7 = var6.selfMute;
            var6 = 'default';
            if(!var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = 'muted';
case 24:
            var5 = var6;
case 22:
            var4 = var5;
case 20:
            var3 = var4;
case 18:
            var2 = var3;
case 16:
            var1 = var2;
case 14:
            return var1;
case 10:
            var1 = 'default';
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function flattenAndConcatMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var1 = var2.bind(var1)(var5);
            _fun0004_ip = 28; continue _fun0004;
case 26:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var5 = arg2;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var1 = var1.bind(var2)(var5);
                    if(var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var1 = var3 + var5;
                    _fun0005_ip = 31; continue _fun0005;
case 29:
                    var4 = _closure1_slot19;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5);
                    var1 = var3 + var2;
case 31:
                    return var1;
                }
            };
            var2 = '';
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot15 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hangouts/native/LiveActivityState.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 30;
    var3['MAX_MEMBERS'] = var4;
    var2 = function generateLiveActivityState(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var2 = arg4;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var8;
            var4 = _closure1_slot6;
            var1 = var4.getChannel;
            var15 = var1.bind(var4)(var8);
            var4 = _closure1_slot8;
            var1 = var4.getGuild;
            var4 = var1.bind(var4)(var9);
            var6 = _closure1_slot11;
            var1 = var6.getCurrentUser;
            var12 = var1.bind(var6)();
            var _closure2_slot2 = var12;
            var1 = null;
            if(!(var1 != var15)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            if(!(var1 != var4)) { _fun0006_ip = 32; continue _fun0006 }
case 34:
            if(!(var1 != var12)) { _fun0006_ip = 32; continue _fun0006 }
case 35:
            var7 = var15.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var13 = 17;
            var6 = var6[var13];
            var10 = undefined;
            var6 = var11.bind(var10)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_VOICE;
            if(!(var7 === var6)) { _fun0006_ip = 32; continue _fun0006 }
case 36:
            var6 = var1 != var2;
            var11 = null;
            if(!var6) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var14 = _closure1_slot6;
            var7 = var14.getChannel;
            var6 = var2.channel_id;
            var11 = var7.bind(var14)(var6);
case 37:
            var6 = var1 != var2;
            var7 = null;
            if(!var6) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var16 = _closure1_slot11;
            var14 = var16.getUser;
            var17 = var2.author;
            var18 = var1 == var17;
            var6 = undefined;
            if(var18) { _fun0006_ip = 25; continue _fun0006 }
case 41:
            var6 = var17.id;
case 25:
            var7 = var14.bind(var16)(var6);
case 39:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 14;
            var6 = var16[var6];
            var16 = var14.bind(var10)(var6);
            var14 = var16.getGuildIconURL;
            var6 = {};
            var17 = var4.id;
            var6['id'] = var17;
            var17 = var4.icon;
            var6['icon'] = var17;
            var17 = 32;
            var6['size'] = var17;
            var18 = var14.bind(var16)(var6);
            var6 = var1 != var18;
            if(!var6) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var14 = '';
            var6 = var14 !== var18;
case 42:
            if(!var6) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 16;
            var6 = var16[var6];
            var17 = var14.bind(var10)(var6);
            var16 = var17.preloadAsset;
            var14 = var18.replace;
            var6 = '.webp';
            var20 = '.png';
            var14 = var14.bind(var18)(var6, var20);
            var6 = var4.icon;
            var18 = var1 != var6;
            var19 = 'missing';
            if(!var18) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var19 = var6;
case 46:
            var6 = global;
            var6 = var6.HermesInternal;
            var18 = var6.concat;
            var6 = '';
            var6 = var18.bind(var6)(var19, var20);
            var6 = var16.bind(var17)(var14, var6);
case 44:
            var6 = _closure1_slot17;
            var6 = var6.bind(var10)(var12);
            var12 = _closure1_slot7;
            var6 = var12.getMembers;
            var14 = var6.bind(var12)(var9);
            var12 = var14.map;
            var6 = function(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var12.bind(var14)(var6);
            var12 = var16.length;
            var6 = 30;
            if(!(var12 <= var6)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var12 = var16.forEach;
            var6 = _closure1_slot17;
            var6 = var12.bind(var16)(var6);
case 48:
            var6 = new Array(0);
            var _closure2_slot3 = var6;
            var14 = _closure1_slot13;
            var12 = var14.getVoiceStatesForChannel;
            var17 = var12.bind(var14)(var15);
            var14 = var17.forEach;
            var12 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.user;
                    var3 = _closure1_slot17;
                    var2 = var1.user;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure2_slot3;
                    var3 = var4.push;
                    var2 = {};
                    var8 = var6.id;
                    var2['id'] = var8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 18;
                    var8 = var10[var8];
                    var11 = var9.bind(var1)(var8);
                    var10 = var11.getName;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var8 = var10.bind(var11)(var9, var8, var6);
                    var2['name'] = var8;
                    var8 = var6.avatar;
                    var9 = null;
                    var9 = var9 != var8;
                    var11 = 'missing';
                    if(!var9) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var11 = var8;
case 50:
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var10 = var8.concat;
                    var9 = '';
                    var8 = '.png';
                    var8 = var10.bind(var9)(var11, var8);
                    var2['avatar'] = var8;
                    var10 = _closure1_slot10;
                    var9 = var10.isSpeaking;
                    var8 = var6.id;
                    var8 = var9.bind(var10)(var8);
                    var2['speaking'] = var8;
                    var8 = _closure1_slot18;
                    var7 = _closure2_slot1;
                    var7 = var8.bind(var1)(var7, var6);
                    var2['voiceStatus'] = var7;
                    var5 = _closure1_slot16;
                    var5 = var5.bind(var1)(var6);
                    var2['fallbackAvatar'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12 = var14.bind(var17)(var12);
            var14 = var16.filter;
            var12 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0008_ip = 52; continue _fun0008 }
case 6:
                    var2 = var3.bot;
                    var1 = !var2;
case 52:
                    if(!var1) { _fun0008_ip = 53; continue _fun0008 }
case 27:
                    var6 = _closure1_slot9;
                    var5 = var6.getStatus;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure1_slot15;
                    var2 = var2.ONLINE;
                    var1 = var3 === var2;
case 53:
                    return var1;
                }
            };
            var16 = var14.bind(var16)(var12);
            var14 = var16.map;
            var12 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var1 = {};
                    var2 = var4.id;
                    var1['id'] = var2;
                    var2 = var4.avatar;
                    var3 = null;
                    var3 = var3 != var2;
                    var6 = 'missing';
                    if(!var3) { _fun0009_ip = 54; continue _fun0009 }
case 29:
                    var6 = var2;
case 54:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = '';
                    var2 = '.png';
                    var2 = var5.bind(var3)(var6, var2);
                    var1['avatar'] = var2;
                    var3 = _closure1_slot16;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1['fallbackAvatar'] = var2;
                    return var1;
                }
            };
            var16 = var14.bind(var16)(var12);
            var14 = var16.filter;
            var12 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.id;
                    var1 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 == var1;
                    var4 = undefined;
                    if(var1) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                    var1 = _closure2_slot2;
                    var4 = var1.id;
case 55:
                    var1 = false;
                    if(!(var7 !== var4)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var6 = _closure1_slot12;
                    var5 = var6.getVoiceState;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4, var7);
                    var2 = var2 != var4;
                    if(!var2) { _fun0010_ip = 59; continue _fun0010 }
case 28:
                    var4 = var4.channelId;
                    var3 = _closure2_slot1;
                    var2 = var4 === var3;
case 59:
                    var1 = var2;
case 57:
                    var1 = !var1;
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var12);
            var12 = var14.sort;
            var3 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUserAffinity;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var4 = null;
                    var2 = var4 == var1;
                    var6 = undefined;
                    if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var6 = var1.communicationProbability;
case 60:
                    var7 = var4 != var6;
                    var1 = 0;
                    if(!var7) { _fun0011_ip = 62; continue _fun0011 }
case 3:
                    var1 = var6;
case 62:
                    var7 = _closure1_slot5;
                    var6 = var7.getUserAffinity;
                    var5 = arg2;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0011_ip = 63; continue _fun0011 }
case 57:
                    var3 = var5.communicationProbability;
case 63:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                    var2 = var3;
case 64:
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var12 = var12.bind(var14)(var3);
            var14 = var1 != var2;
            if(!var14) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var14 = var1 != var11;
case 66:
            var3 = null;
            if(!var14) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var14 = _closure1_slot19;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 19;
            var16 = var18[var16];
            var17 = var17.bind(var10)(var16);
            var16 = var17.getWidgetMessageRules;
            var18 = var16.bind(var17)();
            var17 = var2.content;
            var16 = {};
            var2 = true;
            var16['noStyleAndInteraction'] = var2;
            var19 = var11.id;
            var16['channelId'] = var19;
            var2 = var18.bind(var10)(var17, var2, var16);
            var3 = var14.bind(var10)(var2);
case 68:
            var2 = {};
            var2['guildId'] = var9;
            var2['channelId'] = var8;
            var14 = var15.name;
            var2['voiceName'] = var14;
            var4 = var4.icon;
            var14 = var1 != var4;
            var17 = 'missing';
            if(!var14) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var17 = var4;
case 70:
            var4 = global;
            var4 = var4.HermesInternal;
            var16 = var4.concat;
            var14 = '';
            var4 = '.png';
            var4 = var16.bind(var14)(var17, var4);
            var2['guildIcon'] = var4;
            var14 = _closure1_slot4;
            var4 = var14.getChannelStatus;
            var14 = var4.bind(var14)(var15);
            var15 = var1 != var14;
            var4 = null;
            if(!var15) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var4 = var14;
case 72:
            var2['status'] = var4;
            var2['voiceUsers'] = var6;
            var4 = arg3;
            var2['selfInVoice'] = var4;
            var15 = var12.slice;
            var4 = 0;
            var14 = 2;
            var15 = var15.bind(var12)(var4, var14);
            var2['availableUsers'] = var15;
            var15 = var12.length;
            var15 = var15 > var14;
            if(!var15) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var12 = var12.length;
            var4 = var12 - var14;
case 74:
            var2['availableOverflow'] = var4;
            var12 = var6.length;
            var4 = 1;
            var12 = var12 > var4;
            var4 = 'Hangout in';
            if(var12) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var12 = var6.length;
            var6 = 4;
            var12 = var12 > var6;
            var6 = "Solo vibin' in";
            if(!var12) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var6 = "It's stacked in";
case 78:
            var4 = var6;
case 76:
            var2['voiceDescriptor'] = var4;
            var4 = 'Join hangout';
            var2['joinCTAText'] = var4;
            var4 = 'Invite friends';
            var2['shareCTAText'] = var4;
            var4 = var1 == var11;
            var12 = undefined;
            if(var4) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var12 = var11.type;
case 80:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var6.bind(var10)(var4);
            var4 = var4.ChannelTypes;
            var6 = var4.GUILD_TEXT;
            var4 = null;
            if(!(var12 === var6)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var12 = var1 == var11;
            var6 = undefined;
            if(var12) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var6 = var11.name;
case 84:
            var11 = var1 != var6;
            var4 = null;
            if(!var11) { _fun0006_ip = 82; continue _fun0006 }
case 86:
            var4 = var6;
case 82:
            var2['messageChannelName'] = var4;
            var6 = var1 != var7;
            var4 = null;
            if(!var6) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var6 = var6.bind(var10)(var5);
            var5 = var6.getName;
            var4 = var5.bind(var6)(var9, var8, var7);
case 87:
            var2['messageAuthorName'] = var4;
            var2['message'] = var3;
            return var2;
case 32:
            return var1;
        }
    };
    var3['generateLiveActivityState'] = var2;
    return var1;
})();