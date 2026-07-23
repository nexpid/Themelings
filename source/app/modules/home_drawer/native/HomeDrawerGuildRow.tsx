// app/modules/home_drawer/native/HomeDrawerGuildRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function GuildRowWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var _closure2_slot0 = var9;
            var7 = var2.disableSubtitle;
            var _closure2_slot1 = var7;
            var2 = var2.onActiveHookChange;
            var _closure2_slot2 = var2;
            var4 = undefined;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var3 = _closure1_slot21;
            var10 = var3.bind(var4)();
            var _closure2_slot3 = var10;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 16;
            var3 = var19[var8];
            var12 = var14.bind(var4)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.hasUnread;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var11.bind(var12)(var5, var3);
            var _closure2_slot4 = var3;
            var5 = var19[var8];
            var13 = var14.bind(var4)(var5);
            var12 = var13.useStateFromStores;
            var5 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getMuteConfig;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var12.bind(var13)(var11, var5);
            var _closure2_slot5 = var5;
            var13 = _closure1_slot3;
            var12 = var13.useMemo;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var4 = var4.end_time;
                    var4 = var3 == var4;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = global;
                    var8 = var5.Date;
                    var6 = _closure2_slot5;
                    var9 = var6.end_time;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var5 = var5.Date;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {constructor: {value: var5}});
                    var10 = var7;
                    var5 = new var10[var5](var9);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var4 = var6 > var5;
case 4:
                    var1['isMuted'] = var4;
                    var2 = _closure2_slot5;
                    var2 = var2.end_time;
                    var2 = var3 != var2;
                    var1['isTemporary'] = var2;
                    _fun0002_ip = 6; continue _fun0002;
case 2:
                    var1 = {'isMuted': false, 'isTemporary': false};
case 6:
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var5, var11);
            var _closure2_slot6 = var5;
            var13 = _closure1_slot3;
            var12 = var13.useMemo;
            var11 = new Array(4);
            var11[0] = var9;
            var11[1] = var5;
            var15 = var10.guildName;
            var11[2] = var15;
            var10 = var10.guildNameText;
            var11[3] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = var1.isMuted;
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var8 = _closure1_slot16;
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var1 = _closure2_slot6;
                    var1 = var1.isTemporary;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 20;
                    var2 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.BellSlashIcon;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BellZIcon;
case 12:
                    var8 = var1;
case 9:
                    var4 = _closure1_slot19;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var1 = var11.guildName;
                    var2['style'] = var1;
                    var9 = _closure1_slot18;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 21;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'variant': 'text-md/medium', 'style': null, 'lineClamp': 1};
                    var11 = var11.guildNameText;
                    var5['style'] = var11;
                    var11 = _closure2_slot6;
                    var12 = var11.isMuted;
                    var11 = 'text-default';
                    if(!var12) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var11 = 'text-muted';
case 13:
                    var5['color'] = var11;
                    var10 = _closure2_slot0;
                    var10 = var10.name;
                    var5['children'] = var10;
                    var7 = var9.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var7 = _closure1_slot18;
                    var6 = {'size': 'xs', 'color': 'icon-muted'};
                    var6 = var7.bind(var1)(var8, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15 = var12.bind(var13)(var10, var11);
            var10 = 22;
            var10 = var19[var10];
            var11 = var14.bind(var4)(var10);
            var10 = var11.useIsHomeDrawerChannelMuted;
            var11 = var10.bind(var11)();
            var _closure2_slot7 = var11;
            var10 = 23;
            var10 = var19[var10];
            var12 = var14.bind(var4)(var10);
            var10 = var12.useIsHomeDrawerChannelInChannelList;
            var10 = var10.bind(var12)();
            var _closure2_slot8 = var10;
            var12 = var19[var8];
            var17 = var14.bind(var4)(var12);
            var16 = var17.useStateFromStoresObject;
            var12 = _closure1_slot8;
            var13 = new Array(7);
            var13[0] = var12;
            var12 = _closure1_slot7;
            var13[1] = var12;
            var12 = _closure1_slot14;
            var13[2] = var12;
            var12 = _closure1_slot12;
            var13[3] = var12;
            var12 = _closure1_slot11;
            var13[4] = var12;
            var12 = _closure1_slot13;
            var13[5] = var12;
            var12 = _closure1_slot5;
            var13[6] = var12;
            var18 = var9.id;
            var12 = new Array(3);
            var12[0] = var18;
            var12[1] = var11;
            var12[2] = var10;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getSelectableChannelIds;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var8 = arg1;
                            var2 = _closure1_slot7;
                            var1 = var2.getBasicChannel;
                            var9 = var1.bind(var2)(var8);
                            var1 = null;
                            var1 = var1 != var9;
                            if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var2 = _closure2_slot7;
                            var5 = undefined;
                            var2 = var2.bind(var5)(var9);
                            var2 = !var2;
                            if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var7 = _closure1_slot6;
                            var3 = var9.type;
                            var3 = var7.bind(var5)(var3);
                            if(!var3) { _fun0005_ip = 12; continue _fun0005 }
case 19:
                            var10 = _closure1_slot5;
                            var7 = var10.hasJoined;
                            var7 = var7.bind(var10)(var8);
                            var3 = !var7;
case 12:
                            var3 = !var3;
                            if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var4 = _closure2_slot8;
                            var4 = var4.bind(var5)(var9);
                            var5 = !var4;
                            var4 = !var5;
                            if(var5) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var7 = _closure1_slot11;
                            var5 = var7.hasUnread;
                            var5 = var5.bind(var7)(var8);
                            if(!var5) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var8 = _closure1_slot13;
                            var7 = var8.resolveUnreadSetting;
                            var7 = var7.bind(var8)(var9);
                            var6 = _closure1_slot17;
                            var6 = var6.ALL_MESSAGES;
                            var5 = var7 === var6;
case 24:
                            var4 = var5;
case 22:
                            var3 = var4;
case 20:
                            var2 = var3;
case 17:
                            var1 = var2;
case 15:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var3 = var2.length;
                    var1 = 0;
                    var3 = var3 > var1;
                    var7 = undefined;
                    var8 = undefined;
                    if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var5 = _closure1_slot7;
                    var3 = var5.getChannel;
                    var1 = var2[var1];
                    var8 = var3.bind(var5)(var1);
case 26:
                    var1 = {};
                    var1['unreadChannel'] = var8;
                    var3 = null;
                    var5 = var3 != var8;
                    var3 = undefined;
                    if(!var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 24;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.computeChannelName;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot12;
                    var3 = var6.bind(var7)(var8, var5, var4);
case 28:
                    var1['unreadChannelName'] = var3;
                    var2 = var2.length;
                    var1['unreadChannelCount'] = var2;
                    return var1;
                }
            };
            var11 = var16.bind(var17)(var13, var11, var12);
            var18 = var11.unreadChannel;
            var _closure2_slot9 = var18;
            var17 = var11.unreadChannelName;
            var _closure2_slot10 = var17;
            var16 = var11.unreadChannelCount;
            var _closure2_slot11 = var16;
            var11 = var19[var8];
            var20 = var14.bind(var4)(var11);
            var13 = var20.useStateFromStoresObject;
            var11 = _closure1_slot9;
            var12 = new Array(5);
            var12[0] = var11;
            var11 = _closure1_slot7;
            var12[1] = var11;
            var11 = _closure1_slot14;
            var12[2] = var11;
            var11 = _closure1_slot12;
            var12[3] = var11;
            var11 = _closure1_slot5;
            var12[4] = var11;
            var21 = var9.id;
            var11 = new Array(2);
            var11[0] = var21;
            var11[1] = var10;
            var10 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getMutableGuildStates;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 25;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.keys;
                    var2 = var2.mentionCounts;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.filter;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var7 = arg1;
                            var1 = _closure3_slot0;
                            var1 = var1.mentionCounts;
                            var1 = var1[var7];
                            var2 = var1.count;
                            var1 = 0;
                            if(!(!(var2 <= var1))) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                            var2 = _closure1_slot7;
                            var1 = var2.getBasicChannel;
                            var5 = var1.bind(var2)(var7);
                            var1 = null;
                            var1 = var1 != var5;
                            if(!var1) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                            var6 = _closure1_slot6;
                            var2 = var5.type;
                            var4 = undefined;
                            var2 = var6.bind(var4)(var2);
                            if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var6 = _closure1_slot5;
                            var3 = var6.hasJoined;
                            var3 = var3.bind(var6)(var7);
                            var2 = !var3;
case 36:
                            var2 = !var2;
                            if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                            var3 = _closure2_slot8;
                            var2 = var3.bind(var4)(var5);
case 38:
                            var1 = var2;
case 34:
                            return var1;
case 32:
                            var1 = false;
                            return var1;
                        }
                    };
                    var2 = var2.bind(var5)(var1);
                    var5 = var2.length;
                    var1 = 0;
                    var5 = var5 > var1;
                    var8 = undefined;
                    if(!var5) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var6 = _closure1_slot7;
                    var5 = var6.getChannel;
                    var1 = var2[var1];
                    var8 = var5.bind(var6)(var1);
case 40:
                    var1 = {};
                    var1['mentionChannel'] = var8;
                    var5 = var3 != var8;
                    var3 = undefined;
                    if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 24;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.computeChannelName;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot12;
                    var3 = var6.bind(var7)(var8, var5, var4);
case 42:
                    var1['mentionChannelName'] = var3;
                    var2 = var2.length;
                    var1['mentionChannelCount'] = var2;
                    return var1;
case 30:
                    var1 = {};
                    var2 = undefined;
                    var1['mentionChannel'] = var2;
                    var1['mentionChannelName'] = var2;
                    var2 = 0;
                    var1['mentionChannelCount'] = var2;
                    return var1;
                }
            };
            var10 = var13.bind(var20)(var12, var10, var11);
            var24 = var10.mentionChannel;
            var _closure2_slot12 = var24;
            var23 = var10.mentionChannelName;
            var _closure2_slot13 = var23;
            var22 = var10.mentionChannelCount;
            var _closure2_slot14 = var22;
            var13 = 26;
            var10 = var19[var13];
            var11 = var14.bind(var4)(var10);
            var10 = var11.useVoiceUsers;
            var11 = var10.bind(var11)(var9);
            var12 = var11.voiceUsers;
            var _closure2_slot15 = var12;
            var10 = var11.streamingUser;
            var _closure2_slot16 = var10;
            var11 = var11.streamingChannelId;
            var20 = 27;
            var20 = var19[var20];
            var25 = var14.bind(var4)(var20);
            var21 = var25.useHomeDrawerGuildTyping;
            var20 = var9.id;
            var21 = var21.bind(var25)(var20);
            var27 = var21.typingChannelId;
            var _closure2_slot17 = var27;
            var20 = var21.typingChannelName;
            var _closure2_slot18 = var20;
            var25 = var21.typingUserIds;
            var8 = var19[var8];
            var28 = var14.bind(var4)(var8);
            var26 = var28.useStateFromStores;
            var8 = _closure1_slot7;
            var21 = new Array(1);
            var21[0] = var8;
            var14 = new Array(1);
            var14[0] = var27;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot17;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var26.bind(var28)(var21, var8, var14);
            var _closure2_slot19 = var21;
            var14 = _closure1_slot1;
            var8 = 28;
            var8 = var19[var8];
            var19 = var14.bind(var4)(var8);
            var8 = {};
            var14 = null;
            var26 = var27;
            if(!(var14 == var26)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var26 = _closure1_slot15;
case 44:
            var8['channelId'] = var26;
            var26 = var9.id;
            var8['guildId'] = var26;
            var8['typingUserIds'] = var25;
            var19 = var19.bind(var4)(var8);
            _closure2_slot20 = var19;
            var8 = var5.isMuted;
            if(var8) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var8 = var7;
case 46:
            if(var8) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var26 = var12.length;
            var25 = 0;
            var8 = var25 === var26;
case 48:
            var28 = !var8;
            _closure2_slot21 = var28;
            var26 = _closure1_slot3;
            var25 = var26.useMemo;
            var8 = new Array(11);
            var8[0] = var28;
            var8[1] = var10;
            var8[2] = var7;
            var8[3] = var23;
            var8[4] = var22;
            var8[5] = var27;
            var8[6] = var19;
            var27 = var5.isMuted;
            var8[7] = var27;
            var8[8] = var3;
            var8[9] = var17;
            var8[10] = var16;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 3:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var1 = _closure2_slot13;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0008_ip = 53; continue _fun0008 }
case 16:
                    var3 = _closure2_slot14;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0008_ip = 54; continue _fun0008 }
case 53:
                    var1 = _closure2_slot17;
                    if(!(var4 != var1)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var1 = _closure2_slot20;
                    if(!(var4 != var1)) { _fun0008_ip = 55; continue _fun0008 }
case 57:
                    var1 = _closure2_slot6;
                    var1 = var1.isMuted;
                    if(var1) { _fun0008_ip = 55; continue _fun0008 }
case 58:
                    var1 = _closure1_slot20;
                    var1 = var1.TYPING;
                    _fun0008_ip = 59; continue _fun0008;
case 55:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0008_ip = 23; continue _fun0008 }
case 21:
                    var3 = _closure2_slot10;
                    if(!(var4 != var3)) { _fun0008_ip = 23; continue _fun0008 }
case 60:
                    var4 = _closure2_slot11;
                    var3 = 0;
                    if(!(!(var4 > var3))) { _fun0008_ip = 61; continue _fun0008 }
case 23:
                    var3 = _closure1_slot20;
                    var3 = var3.NONE;
                    _fun0008_ip = 6; continue _fun0008;
case 61:
                    var4 = _closure1_slot20;
                    var3 = var4.UNREAD;
case 6:
                    var1 = var3;
case 59:
                    _fun0008_ip = 62; continue _fun0008;
case 54:
                    var3 = _closure1_slot20;
                    var1 = var3.MENTION;
case 62:
                    _fun0008_ip = 63; continue _fun0008;
case 51:
                    var3 = _closure1_slot20;
                    var1 = var3.NONE;
case 63:
                    _fun0008_ip = 64; continue _fun0008;
case 50:
                    var3 = _closure2_slot16;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var2 = _closure1_slot20;
                    var2 = var2.VOICE;
                    _fun0008_ip = 67; continue _fun0008;
case 65:
                    var3 = _closure1_slot20;
                    var2 = var3.STREAMING;
case 67:
                    var1 = var2;
case 64:
                    return var1;
                }
            };
            var25 = var25.bind(var26)(var3, var8);
            _closure2_slot22 = var25;
            var26 = _closure1_slot3;
            var8 = var26.useEffect;
            var3 = new Array(2);
            var3[0] = var25;
            var3[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 68; continue _fun0009 }
case 3:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot22;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var26)(var2, var3);
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(13);
            var2[0] = var25;
            var2[1] = var9;
            var2[2] = var10;
            var2[3] = var12;
            var2[4] = var24;
            var2[5] = var23;
            var2[6] = var22;
            var2[7] = var21;
            var2[8] = var20;
            var2[9] = var19;
            var2[10] = var18;
            var2[11] = var17;
            var2[12] = var16;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot22;
                    var2 = _closure1_slot20;
                    var2 = var2.STREAMING;
                    if(!(var2 !== var3)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var2 = _closure1_slot20;
                    var2 = var2.VOICE;
                    if(!(var2 !== var3)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var2 = _closure1_slot20;
                    var2 = var2.MENTION;
                    if(!(var2 !== var3)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var2 = _closure1_slot20;
                    var2 = var2.TYPING;
                    if(!(var2 !== var3)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var2 = _closure1_slot20;
                    var2 = var2.UNREAD;
                    if(!(var2 !== var3)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var2 = _closure1_slot20;
                    var2 = var2.NONE;
                    if(!(var2 !== var3)) { _fun0010_ip = 79; continue _fun0010 }
case 29:
                    var2 = undefined;
                    return var2;
case 79:
                    var2 = null;
                    return var2;
case 77:
                    var3 = _closure2_slot10;
                    var2 = null;
                    var3 = var2 == var3;
                    if(var3) { _fun0010_ip = 14; continue _fun0010 }
case 80:
                    var7 = _closure1_slot18;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 33;
                    var3 = var6[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['guild'] = var8;
                    var8 = _closure2_slot9;
                    var3['channel'] = var8;
                    var8 = _closure2_slot10;
                    var3['channelName'] = var8;
                    var8 = _closure2_slot11;
                    var3['count'] = var8;
                    var2 = var7.bind(var6)(var4, var3);
case 14:
                    return var2;
case 75:
                    var6 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 32;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['guild'] = var7;
                    var7 = _closure2_slot19;
                    var2['channel'] = var7;
                    var7 = _closure2_slot18;
                    var2['channelName'] = var7;
                    var7 = _closure2_slot20;
                    var2['text'] = var7;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 73:
                    var3 = _closure2_slot13;
                    var2 = null;
                    var3 = var2 == var3;
                    if(var3) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                    var7 = _closure1_slot18;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 31;
                    var3 = var6[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['guild'] = var8;
                    var8 = _closure2_slot12;
                    var3['channel'] = var8;
                    var8 = _closure2_slot13;
                    var3['channelName'] = var8;
                    var8 = _closure2_slot14;
                    var3['count'] = var8;
                    var2 = var7.bind(var6)(var4, var3);
case 81:
                    return var2;
case 71:
                    var6 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot15;
                    var2['voiceUsers'] = var7;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 69:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1['guildId'] = var6;
                    var5 = _closure2_slot16;
                    var1['streamingUser'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 34;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var1['title'] = var15;
            var1['subtitle'] = var8;
            var8 = var5.isMuted;
            var5 = null;
            if(var8) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var5 = null;
            if(var7) { _fun0001_ip = 83; continue _fun0001 }
case 85:
            var8 = var12.length;
            var7 = 0;
            var5 = null;
            if(!(var7 !== var8)) { _fun0001_ip = 83; continue _fun0001 }
case 86:
            var8 = _closure1_slot18;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GuildVoiceState;
            var6 = {};
            var6['voiceUsers'] = var12;
            var6['streamingChannelId'] = var11;
            var6['streamingUser'] = var10;
            var9 = var9.id;
            var6['guildId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 83:
            var1['right'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isThread;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot15 = var5;
    var2 = var2.NOOP;
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UnreadSetting;
    var _closure1_slot17 = var2;
    var2 = 14;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot18 = var5;
    var2 = var2.jsxs;
    var _closure1_slot19 = var2;
    var2 = {};
    var5 = 'streaming';
    var2['STREAMING'] = var5;
    var5 = 'voice';
    var2['VOICE'] = var5;
    var5 = 'mention';
    var2['MENTION'] = var5;
    var5 = 'typing';
    var2['TYPING'] = var5;
    var5 = 'unread';
    var2['UNREAD'] = var5;
    var5 = 'none';
    var2['NONE'] = var5;
    var _closure1_slot20 = var2;
    var5 = 15;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var5['guildName'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['guildNameText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot21 = var5;
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/home_drawer/native/HomeDrawerGuildRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function HomeDrawerGuildRow(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var7 = var2.disableSubtitle;
            var6 = var2.onActiveHookChange;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 16;
            var8 = var4[var5];
            var5 = undefined;
            var10 = var3.bind(var5)(var8);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var11;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var1);
            var1 = 17;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var9 = var1.MobileHomeDrawerExperiment;
            var3 = var9.useConfig;
            var1 = {};
            var10 = 'guild-row';
            var1['location'] = var10;
            var1 = var3.bind(var9)(var1);
            var9 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 18;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var10 = var4 == var8;
            var1 = null;
            if(var10) { _fun0011_ip = 87; continue _fun0011 }
case 20:
            var1 = null;
            if(!var9) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var1 = null;
            if(var3) { _fun0011_ip = 87; continue _fun0011 }
case 50:
            var4 = _closure1_slot18;
            var3 = _closure1_slot22;
            var2 = {};
            var2['guild'] = var8;
            var2['disableSubtitle'] = var7;
            var2['onActiveHookChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 87:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['HomeDrawerActiveHook'] = var2;
    return var1;
})();