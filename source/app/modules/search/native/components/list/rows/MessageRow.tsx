// app/modules/search/native/components/list/rows/MessageRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function GuildChannelMessageRowHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var9 = var2.muted;
            var6 = var2.isFavorite;
            var2 = _closure1_slot13;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 11;
            var2 = var16[var2];
            var5 = var11.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var10 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 46; continue _fun0002 }
 40:
                    var1 = var2.rulesChannelId;
 46:
                    return var1;
                }
            };
            var10 = var3.bind(var5)(var2, var1);
            var1 = 12;
            var1 = var16[var1];
            var3 = var11.bind(var4)(var1);
            var2 = var3.getChannelIcon;
            var1 = {};
            var5 = var8.id;
            var5 = var10 === var5;
            var1['isRulesChannel'] = var5;
            var17 = var2.bind(var3)(var8, var1);
            var18 = _closure1_slot1;
            var1 = 13;
            var1 = var16[var1];
            var1 = var18.bind(var4)(var1);
            var14 = var1.bind(var4)(var8);
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.header;
            var1['style'] = var5;
            var13 = _closure1_slot11;
            var15 = 14;
            var5 = var16[var15];
            var10 = var18.bind(var4)(var5);
            var5 = {};
            var5['source'] = var17;
            var17 = var16[var15];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var5['size'] = var17;
            var17 = var12.channelIcon;
            var5['style'] = var17;
            var10 = var13.bind(var4)(var10, var5);
            var5 = new Array(5);
            var5[0] = var10;
            var13 = _closure1_slot11;
            var10 = 15;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
            var16 = var12.channelName;
            var10['style'] = var16;
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5[1] = var10;
            if(!var9) { _fun0001_ip = 382; continue _fun0001 }
 302:
            var13 = _closure1_slot11;
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = var14[var15];
            var11 = var16.bind(var4)(var10);
            var10 = {};
            var17 = 16;
            var17 = var14[var17];
            var17 = var16.bind(var4)(var17);
            var10['source'] = var17;
            var14 = var14[var15];
            var14 = var16.bind(var4)(var14);
            var14 = var14.Sizes;
            var14 = var14.EXTRA_SMALL;
            var10['size'] = var14;
            var14 = var12.channelStatus;
            var10['style'] = var14;
            var9 = var13.bind(var4)(var11, var10);
 382:
            var5[2] = var9;
            if(!var6) { _fun0001_ip = 469; continue _fun0001 }
 389:
            var11 = _closure1_slot11;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = var13[var15];
            var10 = var14.bind(var4)(var9);
            var9 = {};
            var16 = 17;
            var16 = var13[var16];
            var16 = var14.bind(var4)(var16);
            var9['source'] = var16;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Sizes;
            var13 = var13.EXTRA_SMALL;
            var9['size'] = var13;
            var12 = var12.channelStatus;
            var9['style'] = var12;
            var6 = var11.bind(var4)(var10, var9);
 469:
            var5[3] = var6;
            var6 = var8.isSystemDM;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0001_ip = 550; continue _fun0001 }
 486:
            var9 = _closure1_slot11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 18;
            var7 = var12[var10];
            var8 = var11.bind(var4)(var7);
            var7 = {};
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Types;
            var10 = var10.SYSTEM_DM;
            var7['type'] = var10;
            var10 = true;
            var7['verified'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 550:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function MessageRowIcon(arg1) {
        var1 = arg1;
        var5 = var1.message;
        var9 = var1.channel;
        var4 = _closure1_slot11;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var6 = 19;
        var1 = var8[var6];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var10 = var5.author;
        var1['user'] = var10;
        var9 = var9.guild_id;
        var1['guildId'] = var9;
        var7 = _closure1_slot0;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.AvatarSizes;
        var6 = var6.LARGE_48;
        var1['size'] = var6;
        var5 = var5.author;
        var5 = var5.avatarDecoration;
        var1['avatarDecoration'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function PrivateChannelMessageRowLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var18 = var2.channel;
            var _closure2_slot1 = var18;
            var13 = var2.muted;
            var2 = _closure1_slot13;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var2 = var9.author;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getName;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var5.bind(var6)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0004_ip = 34; continue _fun0004 }
 20:
                    var4 = _closure2_slot1;
                    var3 = var4.isGroupDM;
                    var2 = var3.bind(var4)();
 34:
                    if(!var2) { _fun0004_ip = 66; continue _fun0004 }
 37:
                    var1 = _closure2_slot1;
                    var3 = var1.recipients;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getUser;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.labelContainer;
            var1['style'] = var5;
            var11 = _closure1_slot12;
            var8 = _closure1_slot4;
            var5 = {};
            var6 = var10.channelName;
            var5['style'] = var6;
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 15;
            var12 = var12[var6];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var17 = var10.channelName;
            var12['style'] = var17;
            var12['children'] = var16;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            if(!var13) { _fun0003_ip = 305; continue _fun0003 }
 222:
            var16 = _closure1_slot11;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 14;
            var14 = var20[var17];
            var15 = var19.bind(var4)(var14);
            var14 = {};
            var21 = 16;
            var21 = var20[var21];
            var21 = var19.bind(var4)(var21);
            var14['source'] = var21;
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.Sizes;
            var17 = var17.EXTRA_SMALL;
            var14['size'] = var17;
            var17 = var10.channelStatus;
            var14['style'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 305:
            var12[1] = var13;
            var13 = var18.isSystemDM;
            var13 = var13.bind(var18)();
            if(!var13) { _fun0003_ip = 386; continue _fun0003 }
 322:
            var16 = _closure1_slot11;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 18;
            var14 = var20[var17];
            var15 = var19.bind(var4)(var14);
            var14 = {};
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.Types;
            var17 = var17.SYSTEM_DM;
            var14['type'] = var17;
            var17 = true;
            var14['verified'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 386:
            var12[2] = var13;
            var5['children'] = var12;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var12 = _closure1_slot11;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = var16[var6];
            var6 = var13.bind(var4)(var6);
            var11 = var6.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'interactive-active', 'lineClamp': 1};
            var6 = var10.timestamp;
            var8['style'] = var6;
            var6 = 22;
            var6 = var16[var6];
            var15 = var13.bind(var4)(var6);
            var14 = var15.getRelativeTimestamp;
            var13 = _closure1_slot1;
            var6 = 23;
            var6 = var16[var6];
            var17 = var13.bind(var4)(var6);
            var16 = var17.extractTimestamp;
            var13 = var9.id;
            var6 = null;
            if(!(var6 == var13)) { _fun0003_ip = 514; continue _fun0003 }
 509:
            var13 = var18.id;
 514:
            var13 = var16.bind(var17)(var13);
            var13 = var14.bind(var15)(var13);
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var5[1] = var8;
            var11 = var9.hasFlag;
            var8 = _closure1_slot10;
            var8 = var8.SUPPRESS_NOTIFICATIONS;
            var11 = var11.bind(var9)(var8);
            var8 = null;
            if(!var11) { _fun0003_ip = 620; continue _fun0003 }
 564:
            var13 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 24;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BellZIcon;
            var11 = {};
            var14 = 'xs';
            var11['size'] = var14;
            var14 = var10.suppressNotificationsIcon;
            var11['style'] = var14;
            var8 = var13.bind(var4)(var12, var11);
 620:
            var5[2] = var8;
            var8 = var9.isPoll;
            var8 = var8.bind(var9)();
            var6 = null;
            if(!var8) { _fun0003_ip = 681; continue _fun0003 }
 639:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 25;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.pollBadge;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 681:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function GuildChannelMessageRowLabel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var9 = var1.message;
            var18 = var1.channel;
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var12 = var5.bind(var6)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 26;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var9);
            var16 = var1.nick;
            var21 = var1.colorString;
            var15 = var1.colorStrings;
            var1 = 'username';
            if(!(var1 === var12)) { _fun0005_ip = 131; continue _fun0005 }
 125:
            var1 = null;
            if(!(var1 == var21)) { _fun0005_ip = 135; continue _fun0005 }
 131:
            var17 = {};
            _fun0005_ip = 144; continue _fun0005;
 135:
            var1 = {};
            var1['color'] = var21;
            var17 = var1;
 144:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 27;
            var5 = var3[var1];
            var6 = var2.bind(var4)(var5);
            var5 = var6.useProcessColorStringsArray;
            var19 = var5.bind(var6)(var15);
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useIsRoleStyleAndRoleColorsEligibleForERC;
            var26 = var18.guild_id;
            var1 = var9.author;
            var25 = var1.id;
            var27 = var5;
            var24 = var12;
            var23 = var19;
            var20 = var27[var3](var26, var25, var24, var23, var22);
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.labelContainer;
            var1['style'] = var5;
            var11 = _closure1_slot12;
            var8 = _closure1_slot4;
            var5 = {};
            var6 = var10.channelName;
            var5['style'] = var6;
            var6 = 'dot';
            var6 = var6 === var12;
            if(!var6) { _fun0005_ip = 276; continue _fun0005 }
 270:
            var12 = null;
            var6 = var12 != var21;
 276:
            if(!var6) { _fun0005_ip = 333; continue _fun0005 }
 279:
            var14 = _closure1_slot11;
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 28;
            var12 = var22[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.RoleDot;
            var12 = {};
            var22 = 'small';
            var12['size'] = var22;
            var12['color'] = var21;
            var12['colors'] = var15;
            var6 = var14.bind(var4)(var13, var12);
 333:
            var12 = new Array(2);
            var12[0] = var6;
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 15;
            var13 = var13[var6];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'lineClamp': 1};
            var13['style'] = var17;
            var17 = undefined;
            if(!var20) { _fun0005_ip = 396; continue _fun0005 }
 393:
            var17 = var19;
 396:
            var13['gradientColors'] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var5['children'] = var12;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var12 = _closure1_slot11;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = var16[var6];
            var6 = var13.bind(var4)(var6);
            var11 = var6.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
            var6 = var10.timestamp;
            var8['style'] = var6;
            var6 = 22;
            var6 = var16[var6];
            var15 = var13.bind(var4)(var6);
            var14 = var15.getRelativeTimestamp;
            var13 = _closure1_slot1;
            var6 = 23;
            var6 = var16[var6];
            var17 = var13.bind(var4)(var6);
            var16 = var17.extractTimestamp;
            var13 = var9.id;
            var6 = null;
            if(!(var6 == var13)) { _fun0005_ip = 535; continue _fun0005 }
 530:
            var13 = var18.id;
 535:
            var13 = var16.bind(var17)(var13);
            var13 = var14.bind(var15)(var13);
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var5[1] = var8;
            var11 = var9.hasFlag;
            var8 = _closure1_slot10;
            var8 = var8.SUPPRESS_NOTIFICATIONS;
            var11 = var11.bind(var9)(var8);
            var8 = null;
            if(!var11) { _fun0005_ip = 641; continue _fun0005 }
 585:
            var13 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 24;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BellZIcon;
            var11 = {};
            var14 = 'xs';
            var11['size'] = var14;
            var14 = var10.suppressNotificationsIcon;
            var11['style'] = var14;
            var8 = var13.bind(var4)(var12, var11);
 641:
            var5[2] = var8;
            var8 = var9.isPoll;
            var8 = var8.bind(var9)();
            var6 = null;
            if(!var8) { _fun0005_ip = 702; continue _fun0005 }
 660:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 25;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.pollBadge;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 702:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot10 = var4;
    var12 = 8;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'marginRight': 5, 'alignSelf': 'center'};
    var4['channelIcon'] = var10;
    var10 = {'marginLeft': 5, 'alignSelf': 'center'};
    var13 = 10;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var10['tintColor'] = var13;
    var4['channelStatus'] = var10;
    var13 = 'row';
    var10 = {'flexDirection': 'row', 'width': '100%', 'marginBottom': 2, 'alignItems': 'center'};
    var4['labelContainer'] = var10;
    var10 = {};
    var10['flexDirection'] = var13;
    var4['channelName'] = var10;
    var10 = {};
    var10['marginLeft'] = var12;
    var4['timestamp'] = var10;
    var10 = {'marginLeft': 8, 'opacity': 0.8};
    var4['timestampMuted'] = var10;
    var10 = {'flexDirection': 'row', 'marginRight': 16, 'marginBottom': 12};
    var4['header'] = var10;
    var10 = {};
    var13 = 'flex-start';
    var10['alignItems'] = var13;
    var4['body'] = var10;
    var10 = {};
    var10['marginLeft'] = var12;
    var4['pollBadge'] = var10;
    var10 = {};
    var10['marginLeft'] = var11;
    var4['suppressNotificationsIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function MessageRow(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var16 = var1.message;
            var _closure2_slot0 = var16;
            var3 = var1.onPress;
            var _closure2_slot1 = var3;
            var12 = var1.lineClamp;
            var11 = var1.messageSizeCacheRef;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot13;
            var6 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 11;
            var1 = var1[var9];
            var10 = var4.bind(var5)(var1);
            var7 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var7.bind(var10)(var4, var1);
            var _closure2_slot2 = var13;
            var1 = null;
            var7 = var1 == var13;
            var4 = undefined;
            if(var7) { _fun0006_ip = 130; continue _fun0006 }
 125:
            var4 = var13.guild_id;
 130:
            _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = var4[var9];
            var17 = var7.bind(var5)(var10);
            var15 = var17.useStateFromStores;
            var10 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 43; continue _fun0007 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.isFavorite;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var10 = var15.bind(var17)(var14, var10);
            _closure2_slot4 = var10;
            var4 = var4[var9];
            var14 = var7.bind(var5)(var4);
            var9 = var14.useStateFromStores;
            var4 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var4 = _closure1_slot9;
                var3 = var4.isChannelMuted;
                var2 = _closure2_slot3;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var9.bind(var14)(var7, var4);
            _closure2_slot5 = var18;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var14 = var16.channel_id;
            var4 = new Array(3);
            var4[0] = var14;
            var14 = var16.id;
            var4[1] = var14;
            var4[2] = var3;
            var3 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = _closure2_slot0;
                var4 = var1.channel_id;
                var2['channelId'] = var4;
                var1 = var1.id;
                var2['messageId'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var7.bind(var9)(var3, var4);
            var14 = _closure1_slot3;
            var9 = var14.useMemo;
            var4 = var1 == var13;
            var3 = undefined;
            if(var4) { _fun0006_ip = 299; continue _fun0006 }
 294:
            var3 = var13.guild_id;
 299:
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 27; continue _fun0008 }
 18:
                    var3 = _closure2_slot2;
                    var1 = var3.guild_id;
 27:
                    if(!(var2 != var1)) { _fun0008_ip = 40; continue _fun0008 }
 31:
                    var1 = _closure1_slot17;
                    _fun0008_ip = 47; continue _fun0008;
 40:
                    var1 = _closure1_slot16;
 47:
                    return var1;
                }
            };
            var17 = var9.bind(var14)(var3, var4);
            var9 = _closure1_slot3;
            var4 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var10;
            var3[2] = var18;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var2;
                    var5 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0009_ip = 29; continue _fun0009 }
 20:
                    var3 = _closure2_slot2;
                    var2 = var3.guild_id;
 29:
                    var2 = var1 != var2;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 83; continue _fun0009 }
 38:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['channel'] = var7;
                    var7 = _closure2_slot5;
                    var2['muted'] = var7;
                    var6 = _closure2_slot4;
                    var2['isFavorite'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 83:
                    return var1;
                }
            };
            var9 = var4.bind(var9)(var2, var3);
            var2 = var1 == var13;
            var1 = null;
            if(var2) { _fun0006_ip = 582; continue _fun0006 }
 370:
            var4 = _closure1_slot11;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 29;
            var2 = var15[var2];
            var2 = var14.bind(var5)(var2);
            var3 = var2.SearchListRow;
            var2 = {};
            var2['header'] = var9;
            var19 = _closure1_slot11;
            var10 = _closure1_slot15;
            var9 = {};
            var9['message'] = var16;
            var9['channel'] = var13;
            var9 = var19.bind(var5)(var10, var9);
            var2['icon'] = var9;
            var10 = _closure1_slot11;
            var9 = {};
            var9['message'] = var16;
            var9['channel'] = var13;
            var9['muted'] = var18;
            var9 = var10.bind(var5)(var17, var9);
            var2['label'] = var9;
            var10 = _closure1_slot11;
            var8 = 30;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.SearchChannelRowPreview;
            var8 = {};
            var8['message'] = var16;
            var8['channel'] = var13;
            var13 = false;
            var8['muted'] = var13;
            var13 = 31;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.ChannelListLayoutTypes;
            var13 = var13.COZY;
            var8['layout'] = var13;
            var13 = 'interactive-normal';
            var8['color'] = var13;
            var8['lineClamp'] = var12;
            var8['messageSizeCacheRef'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var2['subLabel'] = var8;
            var2['onPress'] = var7;
            var6 = var6.body;
            var2['bodyStyle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 582:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/MessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();