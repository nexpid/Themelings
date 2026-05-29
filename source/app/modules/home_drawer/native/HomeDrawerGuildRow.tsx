// app/modules/home_drawer/native/HomeDrawerGuildRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildRowWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var _closure2_slot0 = var9;
            var7 = var2.disableSubtitle;
            var _closure2_slot1 = var7;
            var4 = undefined;
            var _closure2_slot15 = var4;
            var2 = _closure1_slot16;
            var8 = var2.bind(var4)();
            var _closure2_slot2 = var8;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 12;
            var5 = var14[var2];
            var12 = var3.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.hasUnread;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var11.bind(var12)(var10, var5);
            var _closure2_slot3 = var23;
            var5 = var14[var2];
            var12 = var3.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot10;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getMuteConfig;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var11.bind(var12)(var10, var5);
            var _closure2_slot4 = var5;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = {};
                    var4 = _closure2_slot4;
                    var4 = var4.end_time;
                    var4 = var3 == var4;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = global;
                    var8 = var5.Date;
                    var6 = _closure2_slot4;
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
                    var2 = _closure2_slot4;
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
            var5 = var11.bind(var12)(var5, var10);
            var _closure2_slot5 = var5;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var10 = new Array(4);
            var10[0] = var9;
            var10[1] = var23;
            var10[2] = var5;
            var8 = var8.guildName;
            var10[3] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = var1.isMuted;
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var7 = _closure1_slot12;
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var1 = _closure2_slot5;
                    var1 = var1.isTemporary;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 16;
                    var2 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.BellSlashIcon;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BellZIcon;
case 12:
                    var7 = var1;
case 9:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.guildName;
                    var2['style'] = var1;
                    var6 = _closure1_slot13;
                    var5 = {};
                    var1 = 'xs';
                    var5['size'] = var1;
                    var1 = undefined;
                    var6 = var6.bind(var1)(var7, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 17;
                    var6 = var11[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
                    var11 = {};
                    var12 = 1;
                    var11['flexShrink'] = var12;
                    var6['style'] = var11;
                    var12 = _closure2_slot3;
                    var11 = 'text-muted';
                    if(!var12) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var11 = 'mobile-text-heading-primary';
case 13:
                    var6['color'] = var11;
                    var10 = _closure2_slot0;
                    var11 = var10.name;
                    var6['children'] = var11;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 18;
                    var6 = var11[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var6['guild'] = var10;
                    var10 = _closure1_slot0;
                    var9 = 19;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.Icon;
                    var9 = var9.Sizes;
                    var9 = var9.REFRESH_SMALL_16;
                    var6['size'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var17 = var11.bind(var12)(var8, var10);
            var8 = var14[var2];
            var13 = var3.bind(var4)(var8);
            var12 = var13.useStateFromStoresObject;
            var8 = _closure1_slot6;
            var11 = new Array(4);
            var11[0] = var8;
            var8 = _closure1_slot9;
            var11[1] = var8;
            var8 = _closure1_slot10;
            var11[2] = var8;
            var8 = _closure1_slot5;
            var11[3] = var8;
            var8 = var9.id;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getSelectableChannelIds;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var5 = arg1;
                            var2 = _closure1_slot5;
                            var1 = var2.getBasicChannel;
                            var6 = var1.bind(var2)(var5);
                            var1 = null;
                            var1 = var1 != var6;
                            if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var4 = _closure1_slot9;
                            var2 = var4.hasUnread;
                            var2 = var2.bind(var4)(var5);
                            if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var5 = _closure1_slot10;
                            var4 = var5.resolveUnreadSetting;
                            var4 = var4.bind(var5)(var6);
                            var3 = _closure1_slot11;
                            var3 = var3.ALL_MESSAGES;
                            var2 = var4 === var3;
case 17:
                            var1 = var2;
case 15:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var3 = var2.length;
                    var5 = 0;
                    var7 = var3 > var5;
                    var3 = undefined;
                    if(!var7) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var7 = _closure1_slot5;
                    var6 = var7.getChannel;
                    var5 = var2[var5];
                    var5 = var6.bind(var7)(var5);
                    var6 = null;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = var5.name;
case 21:
                    var3 = var4;
case 19:
                    var1['unreadChannelName'] = var3;
                    var2 = var2.length;
                    var1['unreadChannelCount'] = var2;
                    return var1;
                }
            };
            var8 = var12.bind(var13)(var11, var8, var10);
            var22 = var8.unreadChannelName;
            var _closure2_slot6 = var22;
            var21 = var8.unreadChannelCount;
            var _closure2_slot7 = var21;
            var2 = var14[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var10 = new Array(2);
            var10[0] = var2;
            var2 = _closure1_slot5;
            var10[1] = var2;
            var2 = var9.id;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getMutableGuildStates;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var2 = var2.mentionCounts;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var1 = _closure3_slot0;
                        var2 = var1.mentionCounts;
                        var1 = arg1;
                        var1 = var2[var1];
                        var2 = var1.count;
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var3 = var2.length;
                    var5 = 0;
                    var8 = var3 > var5;
                    var3 = undefined;
                    if(!var8) { _fun0006_ip = 25; continue _fun0006 }
case 19:
                    var8 = _closure1_slot5;
                    var7 = var8.getChannel;
                    var5 = var2[var5];
                    var5 = var7.bind(var8)(var5);
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var4 = var5.name;
case 26:
                    var3 = var4;
case 25:
                    var1['mentionChannelName'] = var3;
                    var2 = var2.length;
                    var1['mentionChannelCount'] = var2;
                    return var1;
case 23:
                    var1 = {};
                    var2 = undefined;
                    var1['mentionChannelName'] = var2;
                    var2 = 0;
                    var1['mentionChannelCount'] = var2;
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var10, var2, var8);
            var20 = var2.mentionChannelName;
            var _closure2_slot8 = var20;
            var19 = var2.mentionChannelCount;
            var _closure2_slot9 = var19;
            var13 = 20;
            var2 = var14[var13];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useVoiceUsers;
            var2 = var2.bind(var8)(var9);
            var12 = var2.voiceUsers;
            var _closure2_slot10 = var12;
            var10 = var2.streamingUser;
            var _closure2_slot11 = var10;
            var11 = var2.streamingChannelId;
            var2 = 21;
            var2 = var14[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useHomeDrawerGuildTyping;
            var2 = var9.id;
            var2 = var3.bind(var8)(var2);
            var18 = var2.typingChannelId;
            var _closure2_slot12 = var18;
            var15 = var2.typingChannelName;
            var _closure2_slot13 = var15;
            var8 = var2.typingUserIds;
            var3 = _closure1_slot1;
            var2 = 22;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channelId'] = var18;
            var14 = var9.id;
            var2['guildId'] = var14;
            var2['typingUserIds'] = var8;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot14 = var2;
            var3 = var5.isMuted;
            if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = var7;
case 28:
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var14 = var12.length;
            var8 = 0;
            var3 = var8 === var14;
case 30:
            var16 = !var3;
            _closure2_slot15 = var16;
            var14 = _closure1_slot3;
            var8 = var14.useMemo;
            var3 = new Array(10);
            var3[0] = var7;
            var24 = var5.isMuted;
            var3[1] = var24;
            var3[2] = var23;
            var3[3] = var22;
            var3[4] = var21;
            var3[5] = var20;
            var3[6] = var19;
            var3[7] = var18;
            var3[8] = var15;
            var3[9] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var1 = null;
                    if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 8:
                    var2 = _closure2_slot8;
                    if(!(var6 != var2)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var3 = _closure2_slot9;
                    var2 = 1;
                    if(!(var2 !== var3)) { _fun0007_ip = 35; continue _fun0007 }
case 33:
                    var2 = _closure2_slot9;
                    var14 = 1;
                    if(!(var2 > var14)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var2 = _closure2_slot8;
                    if(!(var6 == var2)) { _fun0007_ip = 38; continue _fun0007 }
case 36:
                    var2 = _closure2_slot12;
                    if(!(var6 != var2)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var2 = _closure2_slot14;
                    if(!(var6 != var2)) { _fun0007_ip = 39; continue _fun0007 }
case 41:
                    var2 = _closure2_slot5;
                    var2 = var2.isMuted;
                    if(var2) { _fun0007_ip = 39; continue _fun0007 }
case 21:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var17 = 17;
                    var2 = var2[var17];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-strong', 'lineClamp': 1};
                    var7 = _closure2_slot13;
                    var7 = var6 != var7;
                    var8 = null;
                    if(!var7) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot15;
                    var7 = {};
                    var16 = _closure1_slot13;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var17];
                    var11 = var12.bind(var4)(var11);
                    var12 = var11.Text;
                    var11 = {};
                    var17 = 'text-xs/semibold';
                    var11['variant'] = var17;
                    var19 = _closure2_slot13;
                    var17 = global;
                    var17 = var17.HermesInternal;
                    var18 = var17.concat;
                    var17 = '#';
                    var17 = var18.bind(var17)(var19);
                    var11['children'] = var17;
                    var12 = var16.bind(var4)(var12, var11);
                    var11 = new Array(2);
                    var11[0] = var12;
                    var12 = ' · ';
                    var11[1] = var12;
                    var7['children'] = var11;
                    var8 = var10.bind(var4)(var9, var7);
case 42:
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot14;
                    var7[1] = var8;
                    var2['children'] = var7;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0007_ip = 44; continue _fun0007;
case 39:
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!var4) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var4 = _closure2_slot6;
                    if(!(var6 != var4)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var4 = _closure2_slot7;
                    if(!(var14 !== var4)) { _fun0007_ip = 49; continue _fun0007 }
case 47:
                    var4 = _closure2_slot7;
                    var5 = var4 > var14;
                    var4 = null;
                    if(!var5) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var5 = _closure2_slot6;
                    var5 = var6 != var5;
                    var4 = null;
                    if(!var5) { _fun0007_ip = 50; continue _fun0007 }
case 52:
                    var8 = _closure1_slot13;
                    var10 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 17;
                    var5 = var16[var5];
                    var7 = undefined;
                    var5 = var10.bind(var7)(var5);
                    var6 = var5.Text;
                    var5 = {'variant': 'text-xs/medium', 'color': 'text-strong'};
                    var9 = 23;
                    var11 = var16[var9];
                    var11 = var10.bind(var7)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var16[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.t;
                    var10 = var9.FgLb9n;
                    var9 = {};
                    var16 = _closure2_slot6;
                    var9['channelName'] = var16;
                    var16 = function channelHook(arg1) {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {};
                        var5 = 'text-xs/semibold';
                        var1['variant'] = var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var7 = var5.concat;
                        var6 = '#';
                        var5 = arg1;
                        var5 = var7.bind(var6)(var5);
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var9['channelHook'] = var16;
                    var16 = _closure2_slot7;
                    var16 = var16 - var14;
                    var9['count'] = var16;
                    var9 = var11.bind(var12)(var10, var9);
                    var5['children'] = var9;
                    var4 = var8.bind(var7)(var6, var5);
case 50:
                    _fun0007_ip = 53; continue _fun0007;
case 49:
                    var8 = _closure1_slot13;
                    var10 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 17;
                    var5 = var16[var5];
                    var7 = undefined;
                    var5 = var10.bind(var7)(var5);
                    var6 = var5.Text;
                    var5 = {'variant': 'text-xs/medium', 'color': 'text-strong'};
                    var9 = 23;
                    var11 = var16[var9];
                    var11 = var10.bind(var7)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var16[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.t;
                    var10 = var9.OqlmU6;
                    var9 = {};
                    var16 = _closure2_slot6;
                    var9['channelName'] = var16;
                    var15 = function channelHook(arg1) {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {};
                        var5 = 'text-xs/semibold';
                        var1['variant'] = var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var7 = var5.concat;
                        var6 = '#';
                        var5 = arg1;
                        var5 = var7.bind(var6)(var5);
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var9['channelHook'] = var15;
                    var9 = var11.bind(var12)(var10, var9);
                    var5['children'] = var9;
                    var4 = var8.bind(var7)(var6, var5);
case 53:
                    var3 = var4;
case 45:
                    var2 = var3;
case 44:
                    _fun0007_ip = 54; continue _fun0007;
case 38:
                    var6 = _closure1_slot13;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 17;
                    var3 = var12[var10];
                    var5 = undefined;
                    var3 = var11.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'variant': 'text-xs/medium', 'color': 'text-strong'};
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot15;
                    var7 = {};
                    var15 = _closure1_slot13;
                    var10 = var12[var10];
                    var10 = var11.bind(var5)(var10);
                    var12 = var10.Text;
                    var10 = {};
                    var11 = 'text-xs/semibold';
                    var10['variant'] = var11;
                    var18 = _closure2_slot8;
                    var11 = global;
                    var16 = var11.HermesInternal;
                    var17 = var16.concat;
                    var16 = '#';
                    var16 = var17.bind(var16)(var18);
                    var10['children'] = var16;
                    var12 = var15.bind(var5)(var12, var10);
                    var10 = new Array(2);
                    var10[0] = var12;
                    var12 = _closure2_slot9;
                    var15 = var12 - var14;
                    var11 = var11.HermesInternal;
                    var14 = var11.concat;
                    var12 = ' and ';
                    var11 = ' other mentions';
                    var11 = var14.bind(var12)(var15, var11);
                    var10[1] = var11;
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var3['children'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
case 54:
                    _fun0007_ip = 55; continue _fun0007;
case 35:
                    var6 = _closure1_slot13;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 17;
                    var3 = var14[var10];
                    var5 = undefined;
                    var3 = var11.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'variant': 'text-xs/medium', 'color': 'text-strong'};
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot15;
                    var7 = {};
                    var12 = _closure1_slot13;
                    var10 = var14[var10];
                    var10 = var11.bind(var5)(var10);
                    var11 = var10.Text;
                    var10 = {};
                    var14 = 'text-xs/semibold';
                    var10['variant'] = var14;
                    var15 = _closure2_slot8;
                    var13 = global;
                    var13 = var13.HermesInternal;
                    var14 = var13.concat;
                    var13 = '#';
                    var13 = var14.bind(var13)(var15);
                    var10['children'] = var13;
                    var11 = var12.bind(var5)(var11, var10);
                    var10 = new Array(2);
                    var10[0] = var11;
                    var11 = ' has mentions';
                    var10[1] = var11;
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var3['children'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
case 55:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var2, var3);
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var12;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-feedback-positive'};
                    var7 = _closure2_slot10;
                    var10 = var7.slice;
                    var6 = 0;
                    var9 = 2;
                    var11 = var10.bind(var7)(var6, var9);
                    var10 = var11.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.username;
                        return var1;
                    };
                    var11 = var10.bind(var11)(var6);
                    var10 = var11.join;
                    var6 = ', ';
                    var10 = var10.bind(var11)(var6);
                    var6 = new Array(3);
                    var6[0] = var10;
                    var7 = var7.length;
                    var10 = var7 > var9;
                    var7 = '';
                    if(!var10) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var8 = _closure2_slot10;
                    var8 = var8.length;
                    var9 = var8 - var9;
                    var8 = ' +';
                    var7 = var8 + var9;
case 58:
                    var6[1] = var7;
                    var7 = ' in voice';
                    var6[2] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 56:
                    return var1;
                }
            };
            var14 = var14.bind(var15)(var2, var3);
            var15 = _closure1_slot3;
            var3 = var15.useMemo;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var10;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var8 = null;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-feedback-positive'};
                    var7 = _closure2_slot11;
                    var8 = var8 == var7;
                    var7 = undefined;
                    if(var8) { _fun0009_ip = 41; continue _fun0009 }
case 62:
                    var6 = _closure2_slot11;
                    var7 = var6.username;
case 41:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = ' is streaming';
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 60:
                    return var1;
                }
            };
            var15 = var3.bind(var15)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 24;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var1['title'] = var17;
            if(!var16) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var16 = null;
            if(!(var16 != var10)) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var14 = var15;
case 65:
            var8 = var14;
case 63:
            var1['subtitle'] = var8;
            var8 = var5.isMuted;
            var5 = null;
            if(var8) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var5 = null;
            if(var7) { _fun0001_ip = 67; continue _fun0001 }
case 69:
            var8 = var12.length;
            var7 = 0;
            var5 = null;
            if(!(var7 !== var8)) { _fun0001_ip = 67; continue _fun0001 }
case 70:
            var8 = _closure1_slot13;
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
case 67:
            var1['right'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['guildName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerGuildRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerGuildRow(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var6 = var2.disableSubtitle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 12;
            var7 = var4[var5];
            var5 = undefined;
            var9 = var3.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7, var1);
            var1 = 13;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var8 = var1.MobileHomeDrawerExperiment;
            var3 = var8.useConfig;
            var1 = {};
            var9 = 'guild-row';
            var1['location'] = var9;
            var1 = var3.bind(var8)(var1);
            var8 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 14;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var1 = null;
            if(!var8) { _fun0010_ip = 71; continue _fun0010 }
case 73:
            var1 = null;
            if(var3) { _fun0010_ip = 71; continue _fun0010 }
case 74:
            var4 = _closure1_slot13;
            var3 = _closure1_slot17;
            var2 = {};
            var2['guild'] = var7;
            var2['disableSubtitle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 71:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();