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
case 0:
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
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.rulesChannelId;
case 2:
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
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
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
case 4:
            var5[2] = var9;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
case 6:
            var5[3] = var6;
            var6 = var8.isSystemDM;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
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
case 8:
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
case 0:
            var2 = arg1;
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var16 = var2.channel;
            var _closure2_slot1 = var16;
            var15 = var2.muted;
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
            var19 = var5.bind(var6)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var4 = _closure2_slot1;
                    var3 = var4.isGroupDM;
                    var2 = var3.bind(var4)();
case 10:
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
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
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 22;
            var1 = var11[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.useSearchMessageTimestamp;
            var1 = var1.bind(var2)(var9, var16);
            var12 = var1.timestamp;
            var13 = var1.timestampAccessibilityLabel;
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.labelContainer;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var6 = _closure1_slot4;
            var5 = {};
            var14 = var10.channelName;
            var5['style'] = var14;
            var18 = _closure1_slot11;
            var14 = 15;
            var11 = var11[var14];
            var11 = var17.bind(var4)(var11);
            var17 = var11.Text;
            var11 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var20 = var10.channelName;
            var11['style'] = var20;
            var11['children'] = var19;
            var17 = var18.bind(var4)(var17, var11);
            var11 = new Array(3);
            var11[0] = var17;
            if(!var15) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var19 = _closure1_slot11;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 14;
            var17 = var22[var20];
            var18 = var21.bind(var4)(var17);
            var17 = {};
            var23 = 16;
            var23 = var22[var23];
            var23 = var21.bind(var4)(var23);
            var17['source'] = var23;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.Sizes;
            var20 = var20.EXTRA_SMALL;
            var17['size'] = var20;
            var20 = var10.channelStatus;
            var17['style'] = var20;
            var15 = var19.bind(var4)(var18, var17);
case 14:
            var11[1] = var15;
            var15 = var16.isSystemDM;
            var15 = var15.bind(var16)();
            if(!var15) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var18 = _closure1_slot11;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 18;
            var16 = var21[var19];
            var17 = var20.bind(var4)(var16);
            var16 = {};
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.Types;
            var19 = var19.SYSTEM_DM;
            var16['type'] = var19;
            var19 = true;
            var16['verified'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 16:
            var11[2] = var15;
            var5['children'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var11 = _closure1_slot11;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'interactive-active', 'lineClamp': 1};
            var14 = var10.timestamp;
            var6['style'] = var14;
            var6['accessibilityLabel'] = var13;
            var6['children'] = var12;
            var6 = var11.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = var9.hasFlag;
            var6 = _closure1_slot10;
            var6 = var6.SUPPRESS_NOTIFICATIONS;
            var11 = var8.bind(var9)(var6);
            var8 = null;
            if(!var11) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var13 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 23;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BellZIcon;
            var11 = {};
            var14 = 'xs';
            var11['size'] = var14;
            var14 = var10.suppressNotificationsIcon;
            var11['style'] = var14;
            var8 = var13.bind(var4)(var12, var11);
case 18:
            var5[2] = var8;
            var8 = var9.isPoll;
            var8 = var8.bind(var9)();
            var6 = null;
            if(!var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 24;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.pollBadge;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 20:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function GuildChannelMessageRowLabel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var9 = var1.message;
            var3 = var1.channel;
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var8 = var2.bind(var4)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var14 = var6.bind(var8)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 25;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var9);
            var18 = var1.nick;
            var22 = var1.colorString;
            var17 = var1.colorStrings;
            var1 = 'username';
            if(!(var1 === var14)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1 = null;
            if(!(var1 == var22)) { _fun0005_ip = 24; continue _fun0005 }
case 22:
            var19 = {};
            _fun0005_ip = 25; continue _fun0005;
case 24:
            var1 = {};
            var1['color'] = var22;
            var19 = var1;
case 25:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var6 = var5[var1];
            var8 = var2.bind(var4)(var6);
            var6 = var8.useProcessColorStringsArray;
            var20 = var6.bind(var8)(var17);
            var1 = var5[var1];
            var11 = var2.bind(var4)(var1);
            var8 = var11.useIsRoleStyleAndRoleColorsEligibleForERC;
            var27 = var3.guild_id;
            var1 = var9.author;
            var26 = var1.id;
            var28 = var11;
            var25 = var14;
            var24 = var20;
            var21 = var28[var8](var27, var26, var25, var24, var23);
            var1 = 22;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSearchMessageTimestamp;
            var1 = var1.bind(var2)(var9, var3);
            var12 = var1.timestamp;
            var13 = var1.timestampAccessibilityLabel;
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.labelContainer;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var6 = _closure1_slot4;
            var5 = {};
            var11 = var10.channelName;
            var5['style'] = var11;
            var11 = 'dot';
            var14 = var11 === var14;
            if(!var14) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var11 = null;
            var14 = var11 != var22;
case 26:
            if(!var14) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var16 = _closure1_slot11;
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var11 = 27;
            var11 = var23[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.RoleDot;
            var11 = {};
            var23 = 'small';
            var11['size'] = var23;
            var11['color'] = var22;
            var11['colors'] = var17;
            var14 = var16.bind(var4)(var15, var11);
case 28:
            var11 = new Array(2);
            var11[0] = var14;
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = 15;
            var15 = var15[var14];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'lineClamp': 1};
            var15['style'] = var19;
            var19 = undefined;
            if(!var21) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var19 = var20;
case 30:
            var15['gradientColors'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var11[1] = var15;
            var5['children'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var11 = _closure1_slot11;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
            var14 = var10.timestamp;
            var6['style'] = var14;
            var6['accessibilityLabel'] = var13;
            var6['children'] = var12;
            var6 = var11.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = var9.hasFlag;
            var6 = _closure1_slot10;
            var6 = var6.SUPPRESS_NOTIFICATIONS;
            var11 = var8.bind(var9)(var6);
            var8 = null;
            if(!var11) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var13 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 23;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BellZIcon;
            var11 = {};
            var14 = 'xs';
            var11['size'] = var14;
            var14 = var10.suppressNotificationsIcon;
            var11['style'] = var14;
            var8 = var13.bind(var4)(var12, var11);
case 32:
            var5[2] = var8;
            var8 = var9.isPoll;
            var8 = var8.bind(var9)();
            var6 = null;
            if(!var8) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 24;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.pollBadge;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 34:
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
case 0:
            var1 = arg1;
            var17 = var1.message;
            var _closure2_slot0 = var17;
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
            var7 = _closure1_slot2;
            var9 = 11;
            var1 = var7[var9];
            var13 = var4.bind(var5)(var1);
            var10 = var13.useStateFromStores;
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
            var16 = var10.bind(var13)(var4, var1);
            var _closure2_slot2 = var16;
            var4 = _closure1_slot1;
            var1 = 25;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var17);
            var13 = var1.nick;
            var1 = null;
            var7 = var1 == var16;
            var4 = undefined;
            if(var7) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var4 = var16.guild_id;
case 36:
            _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = var4[var9];
            var18 = var7.bind(var5)(var10);
            var15 = var18.useStateFromStores;
            var10 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var4 = _closure1_slot6;
                    var3 = var4.isFavorite;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var1 = var3.bind(var4)(var2);
case 38:
                    return var1;
                }
            };
            var10 = var15.bind(var18)(var14, var10);
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
            var19 = var9.bind(var14)(var7, var4);
            _closure2_slot5 = var19;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var14 = var17.channel_id;
            var4 = new Array(3);
            var4[0] = var14;
            var14 = var17.id;
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
            var4 = var1 == var16;
            var3 = undefined;
            if(var4) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var3 = var16.guild_id;
case 40:
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var3 = _closure2_slot2;
                    var1 = var3.guild_id;
case 42:
                    if(!(var2 != var1)) { _fun0008_ip = 3; continue _fun0008 }
case 44:
                    var1 = _closure1_slot17;
                    _fun0008_ip = 45; continue _fun0008;
case 3:
                    var1 = _closure1_slot16;
case 45:
                    return var1;
                }
            };
            var18 = var9.bind(var14)(var3, var4);
            var9 = _closure1_slot3;
            var4 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var16;
            var3[1] = var10;
            var3[2] = var19;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var2;
                    var5 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0009_ip = 46; continue _fun0009 }
case 11:
                    var3 = _closure2_slot2;
                    var2 = var3.guild_id;
case 46:
                    var2 = var1 != var2;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 47; continue _fun0009 }
case 48:
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
case 47:
                    return var1;
                }
            };
            var9 = var4.bind(var9)(var2, var3);
            var2 = var1 == var16;
            var1 = null;
            if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 49:
            var4 = _closure1_slot11;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 28;
            var2 = var15[var2];
            var2 = var14.bind(var5)(var2);
            var3 = var2.SearchListRow;
            var2 = {};
            var2['header'] = var9;
            var20 = _closure1_slot11;
            var10 = _closure1_slot15;
            var9 = {};
            var9['message'] = var17;
            var9['channel'] = var16;
            var9 = var20.bind(var5)(var10, var9);
            var2['icon'] = var9;
            var10 = _closure1_slot11;
            var9 = {};
            var9['message'] = var17;
            var9['channel'] = var16;
            var9['muted'] = var19;
            var9 = var10.bind(var5)(var18, var9);
            var2['label'] = var9;
            var10 = _closure1_slot11;
            var8 = 29;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.SearchChannelRowPreview;
            var8 = {};
            var8['message'] = var17;
            var8['channel'] = var16;
            var8['username'] = var13;
            var13 = false;
            var8['muted'] = var13;
            var13 = 30;
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
case 21:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/MessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();