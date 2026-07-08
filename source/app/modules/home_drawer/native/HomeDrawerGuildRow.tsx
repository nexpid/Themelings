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
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var2 = _closure1_slot18;
            var2 = var2.bind(var4)();
            var _closure2_slot2 = var2;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 14;
            var5 = var14[var3];
            var12 = var8.bind(var4)(var5);
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
            var28 = var11.bind(var12)(var10, var5);
            var _closure2_slot3 = var28;
            var5 = var14[var3];
            var12 = var8.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot11;
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
            var13 = _closure1_slot3;
            var12 = var13.useMemo;
            var11 = new Array(3);
            var11[0] = var9;
            var11[1] = var5;
            var10 = var2.guildName;
            var11[2] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = var1.isMuted;
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var8 = _closure1_slot14;
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var1 = _closure2_slot5;
                    var1 = var1.isTemporary;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 18;
                    var2 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.BellSlashIcon;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BellZIcon;
case 12:
                    var8 = var1;
case 9:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.guildName;
                    var2['style'] = var1;
                    var9 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 19;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'variant': 'text-md/medium', 'style': null, 'lineClamp': 1};
                    var11 = {};
                    var12 = 1;
                    var11['flexShrink'] = var12;
                    var5['style'] = var11;
                    var11 = _closure2_slot5;
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
                    var7 = _closure1_slot16;
                    var6 = {'size': 'xs', 'color': 'icon-muted'};
                    var6 = var7.bind(var1)(var8, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var18 = var12.bind(var13)(var10, var11);
            var10 = var14[var3];
            var15 = var8.bind(var4)(var10);
            var13 = var15.useStateFromStoresObject;
            var10 = _closure1_slot6;
            var12 = new Array(6);
            var12[0] = var10;
            var10 = _closure1_slot9;
            var12[1] = var10;
            var10 = _closure1_slot11;
            var12[2] = var10;
            var10 = _closure1_slot5;
            var12[3] = var10;
            var10 = _closure1_slot12;
            var12[4] = var10;
            var10 = _closure1_slot10;
            var12[5] = var10;
            var10 = var9.id;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
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
                            var5 = _closure1_slot11;
                            var4 = var5.resolveUnreadSetting;
                            var4 = var4.bind(var5)(var6);
                            var3 = _closure1_slot15;
                            var3 = var3.ALL_MESSAGES;
                            var2 = var4 === var3;
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
                    if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var5 = _closure1_slot5;
                    var3 = var5.getChannel;
                    var1 = var2[var1];
                    var8 = var3.bind(var5)(var1);
case 19:
                    var1 = {};
                    var1['unreadChannel'] = var8;
                    var3 = null;
                    var5 = var3 != var8;
                    var3 = undefined;
                    if(!var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.computeChannelName;
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot10;
                    var3 = var6.bind(var7)(var8, var5, var4);
case 21:
                    var1['unreadChannelName'] = var3;
                    var2 = var2.length;
                    var1['unreadChannelCount'] = var2;
                    return var1;
                }
            };
            var10 = var13.bind(var15)(var12, var10, var11);
            var27 = var10.unreadChannel;
            var _closure2_slot6 = var27;
            var26 = var10.unreadChannelName;
            var _closure2_slot7 = var26;
            var25 = var10.unreadChannelCount;
            var _closure2_slot8 = var25;
            var10 = var14[var3];
            var15 = var8.bind(var4)(var10);
            var13 = var15.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var12 = new Array(4);
            var12[0] = var10;
            var10 = _closure1_slot5;
            var12[1] = var10;
            var10 = _closure1_slot12;
            var12[2] = var10;
            var10 = _closure1_slot10;
            var12[3] = var10;
            var10 = var9.id;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getMutableGuildStates;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0006_ip = 23; continue _fun0006 }
case 18:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 21;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.keys;
                    var2 = var2.mentionCounts;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.filter;
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
                    var2 = var2.bind(var5)(var1);
                    var5 = var2.length;
                    var1 = 0;
                    var5 = var5 > var1;
                    var8 = undefined;
                    if(!var5) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var1 = var2[var1];
                    var8 = var5.bind(var6)(var1);
case 24:
                    var1 = {};
                    var1['mentionChannel'] = var8;
                    var5 = var3 != var8;
                    var3 = undefined;
                    if(!var5) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.computeChannelName;
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot10;
                    var3 = var6.bind(var7)(var8, var5, var4);
case 26:
                    var1['mentionChannelName'] = var3;
                    var2 = var2.length;
                    var1['mentionChannelCount'] = var2;
                    return var1;
case 23:
                    var1 = {};
                    var2 = undefined;
                    var1['mentionChannel'] = var2;
                    var1['mentionChannelName'] = var2;
                    var2 = 0;
                    var1['mentionChannelCount'] = var2;
                    return var1;
                }
            };
            var10 = var13.bind(var15)(var12, var10, var11);
            var24 = var10.mentionChannel;
            var _closure2_slot9 = var24;
            var23 = var10.mentionChannelName;
            var _closure2_slot10 = var23;
            var22 = var10.mentionChannelCount;
            var _closure2_slot11 = var22;
            var13 = 22;
            var10 = var14[var13];
            var11 = var8.bind(var4)(var10);
            var10 = var11.useVoiceUsers;
            var11 = var10.bind(var11)(var9);
            var12 = var11.voiceUsers;
            var _closure2_slot12 = var12;
            var10 = var11.streamingUser;
            var _closure2_slot13 = var10;
            var11 = var11.streamingChannelId;
            var15 = 23;
            var15 = var14[var15];
            var17 = var8.bind(var4)(var15);
            var16 = var17.useHomeDrawerGuildTyping;
            var15 = var9.id;
            var15 = var16.bind(var17)(var15);
            var20 = var15.typingChannelId;
            var _closure2_slot14 = var20;
            var19 = var15.typingChannelName;
            var _closure2_slot15 = var19;
            var15 = var15.typingUserIds;
            var3 = var14[var3];
            var21 = var8.bind(var4)(var3);
            var17 = var21.useStateFromStores;
            var3 = _closure1_slot5;
            var16 = new Array(1);
            var16[0] = var3;
            var8 = new Array(1);
            var8[0] = var20;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot14;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var17.bind(var21)(var16, var3, var8);
            var _closure2_slot16 = var21;
            var8 = _closure1_slot1;
            var3 = 24;
            var3 = var14[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var14 = null;
            var16 = var20;
            if(!(var14 == var16)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var16 = _closure1_slot13;
case 28:
            var3['channelId'] = var16;
            var16 = var9.id;
            var3['guildId'] = var16;
            var3['typingUserIds'] = var15;
            var16 = var8.bind(var4)(var3);
            _closure2_slot17 = var16;
            var3 = var5.isMuted;
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var7;
case 30:
            if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var12.length;
            var8 = 0;
            var3 = var8 === var15;
case 32:
            var17 = !var3;
            _closure2_slot18 = var17;
            var15 = _closure1_slot3;
            var8 = var15.useMemo;
            var3 = new Array(15);
            var3[0] = var9;
            var3[1] = var7;
            var29 = var5.isMuted;
            var3[2] = var29;
            var3[3] = var28;
            var3[4] = var27;
            var3[5] = var26;
            var3[6] = var25;
            var3[7] = var24;
            var3[8] = var23;
            var3[9] = var22;
            var3[10] = var21;
            var3[11] = var20;
            var3[12] = var19;
            var3[13] = var16;
            var3[14] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var2 = _closure2_slot10;
                    if(!(var1 != var2)) { _fun0007_ip = 36; continue _fun0007 }
case 7:
                    var3 = _closure2_slot11;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0007_ip = 37; continue _fun0007 }
case 36:
                    var2 = _closure2_slot14;
                    if(!(var1 != var2)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var2 = _closure2_slot17;
                    if(!(var1 != var2)) { _fun0007_ip = 38; continue _fun0007 }
case 40:
                    var2 = _closure2_slot5;
                    var2 = var2.isMuted;
                    if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 41:
                    var2 = _closure2_slot16;
                    var2 = var1 != var2;
                    var5 = undefined;
                    var9 = undefined;
                    if(!var2) { _fun0007_ip = 42; continue _fun0007 }
case 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var6 = var3.bind(var5)(var2);
                    var4 = var6.getChannelIconComponentWithGuild;
                    var3 = _closure2_slot16;
                    var2 = _closure2_slot0;
                    var9 = var4.bind(var6)(var3, var2);
case 42:
                    if(!(var1 == var9)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var2 = var3.bind(var5)(var2);
                    var9 = var2.TextIcon;
case 43:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.subtitleRow;
                    var2['style'] = var6;
                    var6 = _closure2_slot15;
                    var6 = var1 != var6;
                    var7 = null;
                    if(!var6) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var8 = _closure1_slot16;
                    var6 = {'size': 'xxs', 'color': 'icon-muted'};
                    var11 = _closure2_slot2;
                    var11 = var11.channelIcon;
                    var6['style'] = var11;
                    var7 = var8.bind(var5)(var9, var6);
case 45:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot17;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var17 = 19;
                    var7 = var7[var17];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
                    var16 = 'text-xs/medium';
                    var11 = _closure2_slot2;
                    var11 = var11.subtitleText;
                    var7['style'] = var11;
                    var11 = _closure2_slot15;
                    var12 = var1 != var11;
                    var11 = null;
                    if(!var12) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var13 = _closure1_slot17;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var17];
                    var10 = var12.bind(var5)(var10);
                    var12 = var10.Text;
                    var10 = {};
                    var10['variant'] = var16;
                    var17 = _closure2_slot15;
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = '  ·  ';
                    var16[1] = var17;
                    var10['children'] = var16;
                    var11 = var13.bind(var5)(var12, var10);
case 47:
                    var10 = new Array(2);
                    var10[0] = var11;
                    var11 = _closure2_slot17;
                    var10[1] = var11;
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 38:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    return var1;
case 49:
                    var2 = _closure2_slot7;
                    if(!(var1 != var2)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var3 = _closure2_slot8;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0007_ip = 53; continue _fun0007 }
case 51:
                    return var1;
case 53:
                    var2 = _closure2_slot6;
                    var3 = var1 != var2;
                    var5 = undefined;
                    var2 = undefined;
                    if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 25;
                    var3 = var6[var3];
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.getChannelIconComponentWithGuild;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot0;
                    var2 = var6.bind(var7)(var4, var3);
case 54:
                    if(!(var1 == var2)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 26;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var2 = var3.TextIcon;
case 56:
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var7 = var7.subtitleRow;
                    var2['style'] = var7;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 27;
                    var8 = var10[var6];
                    var8 = var7.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.format;
                    var6 = var10[var6];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.t;
                    var7 = var6.OqlmU6;
                    var6 = {};
                    var10 = _closure2_slot7;
                    var6['channelName'] = var10;
                    var11 = _closure2_slot8;
                    var10 = 1;
                    var10 = var11 - var10;
                    var6['count'] = var10;
                    var10 = function labelHook(arg1, arg2) {
                        var5 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
                        var1 = arg1;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var6['labelHook'] = var10;
                    var10 = function iconHook(arg1, arg2) {
                        var5 = _closure1_slot16;
                        var4 = _closure3_slot0;
                        var3 = {'size': 'xxs', 'color': 'icon-muted'};
                        var1 = _closure2_slot2;
                        var1 = var1.unreadChannelIcon;
                        var3['style'] = var1;
                        var2 = undefined;
                        var1 = arg2;
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    };
                    var6['iconHook'] = var10;
                    var10 = function channelHook(arg1, arg2) {
                        var5 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
                        var1 = _closure2_slot2;
                        var1 = var1.subtitleText;
                        var2['style'] = var1;
                        var1 = arg1;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var6['channelHook'] = var10;
                    var10 = function overflowHook(arg1, arg2) {
                        var5 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
                        var1 = arg1;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var6['overflowHook'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 37:
                    var2 = _closure2_slot9;
                    var2 = var1 != var2;
                    var5 = undefined;
                    var9 = undefined;
                    if(!var2) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var6 = var3.bind(var5)(var2);
                    var4 = var6.getChannelIconComponentWithGuild;
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot0;
                    var9 = var4.bind(var6)(var3, var2);
case 58:
                    if(!(var1 == var9)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var2 = var3.bind(var5)(var2);
                    var9 = var2.TextIcon;
case 60:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var10 = _closure2_slot2;
                    var6 = var10.subtitleRow;
                    var2['style'] = var6;
                    var8 = _closure1_slot16;
                    var6 = {'size': 'xxs', 'color': 'icon-muted'};
                    var11 = var10.channelIcon;
                    var6['style'] = var11;
                    var8 = var8.bind(var5)(var9, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot16;
                    var11 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var7 = 19;
                    var7 = var17[var7];
                    var7 = var11.bind(var5)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
                    var16 = 1;
                    var10 = var10.subtitleText;
                    var7['style'] = var10;
                    var10 = 27;
                    var12 = var17[var10];
                    var12 = var11.bind(var5)(var12);
                    var13 = var12.intl;
                    var12 = var13.format;
                    var10 = var17[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.t;
                    var11 = var10.L9YdGH;
                    var10 = {};
                    var17 = _closure2_slot10;
                    var10['channelName'] = var17;
                    var15 = _closure2_slot11;
                    var15 = var15 - var16;
                    var10['count'] = var15;
                    var14 = function channelHook(arg1, arg2) {
                        var5 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {};
                        var1 = 'text-xs/medium';
                        var2['variant'] = var1;
                        var1 = arg1;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var10['channelHook'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 34:
                    return var1;
                }
            };
            var8 = var8.bind(var15)(var2, var3);
            var16 = _closure1_slot3;
            var15 = var16.useMemo;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var12;
            var2 = var9.id;
            var3[2] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot18;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var5 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 19;
                    var2 = var11[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-voice-connected', 'lineClamp': 1};
                    var6 = 27;
                    var8 = var11[var6];
                    var8 = var7.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.format;
                    var6 = var11[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.t;
                    var7 = var6.r1Vkoc;
                    var6 = {};
                    var10 = _closure2_slot12;
                    var11 = var10.slice;
                    var13 = 0;
                    var14 = 2;
                    var15 = var11.bind(var10)(var13, var14);
                    var12 = var15.map;
                    var11 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.getName;
                        var1 = _closure2_slot0;
                        var3 = var1.id;
                        var2 = null;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var15 = var12.bind(var15)(var11);
                    var12 = var15.join;
                    var11 = ', ';
                    var11 = var12.bind(var15)(var11);
                    var6['users'] = var11;
                    var11 = global;
                    var12 = var11.Math;
                    var11 = var12.max;
                    var10 = var10.length;
                    var10 = var10 - var14;
                    var10 = var11.bind(var12)(var10, var13);
                    var6['overflowCount'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 62:
                    return var1;
                }
            };
            var15 = var15.bind(var16)(var2, var3);
            var16 = _closure1_slot3;
            var3 = var16.useMemo;
            var2 = new Array(3);
            var2[0] = var17;
            var2[1] = var10;
            var19 = var9.id;
            var2[2] = var19;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot18;
                    var14 = null;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 64; continue _fun0009 }
case 35:
                    var5 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 19;
                    var2 = var13[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-voice-connected', 'lineClamp': 1};
                    var6 = 27;
                    var8 = var13[var6];
                    var8 = var7.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.format;
                    var6 = var13[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.t;
                    var7 = var6.k5IKep;
                    var6 = {};
                    var12 = _closure1_slot1;
                    var11 = 28;
                    var11 = var13[var11];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.getName;
                    var11 = _closure2_slot0;
                    var11 = var11.id;
                    var10 = _closure2_slot13;
                    var10 = var12.bind(var13)(var11, var14, var10);
                    var6['username'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 64:
                    return var1;
                }
            };
            var16 = var3.bind(var16)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 29;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var1['title'] = var18;
            if(!var17) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            if(!(var14 != var10)) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var15 = var16;
case 67:
            var8 = var15;
case 65:
            var1['subtitle'] = var8;
            var8 = var5.isMuted;
            var5 = null;
            if(var8) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var5 = null;
            if(var7) { _fun0001_ip = 69; continue _fun0001 }
case 71:
            var8 = var12.length;
            var7 = 0;
            var5 = null;
            if(!(var7 !== var8)) { _fun0001_ip = 69; continue _fun0001 }
case 72:
            var8 = _closure1_slot16;
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
case 69:
            var1['right'] = var5;
            var1 = var3.bind(var4)(var2, var1);
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var7;
    var4 = var4.NOOP;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['guildName'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['subtitleRow'] = var9;
    var9 = {};
    var9['flexShrink'] = var11;
    var4['subtitleText'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['channelIcon'] = var9;
    var9 = {'marginLeft': 2, 'marginRight': 2};
    var4['unreadChannelIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 30;
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
            var5 = 14;
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
            var1 = 15;
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
            var1 = 16;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0010_ip = 26; continue _fun0010 }
case 73:
            var1 = null;
            if(!var8) { _fun0010_ip = 26; continue _fun0010 }
case 74:
            var1 = null;
            if(var3) { _fun0010_ip = 26; continue _fun0010 }
case 75:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['guild'] = var7;
            var2['disableSubtitle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 26:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();