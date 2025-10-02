// app/modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function closeGuildEventInfoActionSheet() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.hideActionSheet;
        var2 = _closure1_slot10;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot15 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var13 = var5.Fonts;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot11 = var8;
    var8 = var5.jsxs;
    var _closure1_slot12 = var8;
    var5 = var5.Fragment;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 11;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['paddingHorizontal'] = var14;
    var5['eventContainer'] = var10;
    var10 = {};
    var14 = 19;
    var10['paddingTop'] = var14;
    var5['eventHeader'] = var10;
    var10 = {};
    var14 = 12;
    var15 = var7[var14];
    var18 = var12.bind(var1)(var15);
    var17 = var13.DISPLAY_EXTRABOLD;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var16 = var15.HEADER_PRIMARY;
    var15 = 20;
    var20 = var18.bind(var1)(var17, var16, var15);
    var21 = var10;
    var15 = copyDataProperties(var21, var20);
    var5['eventTitle'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['paddingTop'] = var15;
    var5['controlsContainer'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['paddingTop'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingBottom'] = var15;
    var5['eventTitleContainer'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['paddingTop'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10['paddingBottom'] = var15;
    var5['eventDescriptionContainer'] = var10;
    var10 = {};
    var14 = var7[var14];
    var16 = var12.bind(var1)(var14);
    var15 = var13.PRIMARY_MEDIUM;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var14 = var13.HEADER_SECONDARY;
    var13 = 14;
    var20 = var16.bind(var1)(var15, var14, var13);
    var21 = var10;
    var13 = copyDataProperties(var21, var20);
    var5['guildTextStyle'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingTop'] = var13;
    var13 = 'row';
    var10['flexDirection'] = var13;
    var5['interestedContainer'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['marginRight'] = var11;
    var5['interestedIcon'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EventDetailInfoSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildEvent;
            var _closure2_slot0 = var12;
            var14 = var1.safeBottomPadding;
            var5 = var1.onLayout;
            var2 = var1.onCloseActionSheet;
            var _closure2_slot1 = var2;
            var10 = var1.recurrenceId;
            var1 = var1.onRecurrencePress;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot14;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var22 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 14;
            var2 = var16[var1];
            var8 = var22.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var2 = var6.bind(var8)(var3, var2);
            var _closure2_slot3 = var2;
            var2 = var16[var1];
            var9 = var22.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = var12.channel_id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var1 = var3.isConnected;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannelId;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var20 = var8.bind(var9)(var6, var2, var3);
            var2 = 15;
            var2 = var16[var2];
            var6 = var22.bind(var4)(var2);
            var3 = var6.recurrenceRuleFromServer;
            var2 = var12.recurrence_rule;
            var13 = var3.bind(var6)(var2);
            var8 = _closure1_slot3;
            var6 = var8.useEffect;
            var2 = var12.guild_id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var12.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 16;
                var2 = var5[var3];
                var1 = undefined;
                var10 = var4.bind(var1)(var2);
                var9 = var10.getGuildEventUserCounts;
                var2 = _closure2_slot0;
                var8 = var2.guild_id;
                var7 = var2.id;
                var6 = new Array(0);
                var6 = var9.bind(var10)(var8, var7, var6);
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getGuildEventsForCurrentUser;
                var2 = var2.guild_id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot1;
            var2 = 17;
            var2 = var16[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var12.guild_id;
            var2 = var12.id;
            var26 = var6.bind(var4)(var3, var2, var10);
            var2 = var16[var1];
            var8 = var22.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var17 = var6.bind(var8)(var3, var2);
            var1 = var16[var1];
            var8 = var22.bind(var4)(var1);
            var6 = var8.useStateFromStoresObject;
            var1 = _closure1_slot9;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = _closure1_slot6;
            var3[1] = var1;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.creator_id;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = {'creator': null, 'creatorMember': null};
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var2 = {};
                    var7 = _closure1_slot9;
                    var6 = var7.getUser;
                    var3 = _closure2_slot0;
                    var5 = var3.creator_id;
                    var5 = var6.bind(var7)(var5);
                    var2['creator'] = var5;
                    var6 = _closure1_slot6;
                    var5 = var6.getMember;
                    var4 = var3.guild_id;
                    var3 = var3.creator_id;
                    var3 = var5.bind(var6)(var4, var3);
                    var2['creatorMember'] = var3;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var1 = var6.bind(var8)(var3, var1, var2);
            var25 = var1.creator;
            var _closure2_slot4 = var25;
            var1 = var1.creatorMember;
            var _closure2_slot5 = var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var21.eventContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var9 = 16;
            var9 = var14 + var9;
            var8['paddingBottom'] = var9;
            var6[1] = var8;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var15 = _closure1_slot11;
            var19 = 18;
            var5 = var16[var19];
            var5 = var22.bind(var4)(var5);
            var6 = var5.GuildEventCardHeader;
            var5 = {'event': null, 'style': null, 'showUserCount': false, 'showEndDate': true, 'showCreator': false};
            var5['event'] = var12;
            var8 = var21.eventHeader;
            var5['style'] = var8;
            var5['recurrenceId'] = var10;
            var6 = var15.bind(var4)(var6, var5);
            var5 = new Array(9);
            var5[0] = var6;
            var6 = var16[var19];
            var6 = var22.bind(var4)(var6);
            var8 = var6.GuildEventCardTitle;
            var6 = {};
            var6['event'] = var12;
            var9 = var21.eventTitle;
            var6['textStyle'] = var9;
            var9 = var21.eventTitleContainer;
            var6['style'] = var9;
            var6 = var15.bind(var4)(var8, var6);
            var5[1] = var6;
            var6 = var16[var19];
            var6 = var22.bind(var4)(var6);
            var8 = var6.GuildEventCardSimpleGuildInfo;
            var6 = {};
            var6['event'] = var12;
            var9 = var21.guildTextStyle;
            var6['textStyle'] = var9;
            var6 = var15.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = var16[var19];
            var6 = var22.bind(var4)(var6);
            var8 = var6.GuildEventSimpleLocation;
            var6 = {};
            var6['event'] = var12;
            var6 = var15.bind(var4)(var8, var6);
            var5[3] = var6;
            var6 = {};
            var8 = var21.interestedContainer;
            var6['style'] = var8;
            var8 = 19;
            var8 = var16[var8];
            var8 = var22.bind(var4)(var8);
            var9 = var8.BellIcon;
            var8 = {};
            var14 = 'sm';
            var8['size'] = var14;
            var14 = var21.interestedIcon;
            var8['style'] = var14;
            var9 = var15.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var18 = 20;
            var9 = var16[var18];
            var9 = var22.bind(var4)(var9);
            var14 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var28 = 21;
            var23 = var16[var28];
            var23 = var22.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var16 = var16[var28];
            var16 = var22.bind(var4)(var16);
            var16 = var16.t;
            var22 = var16.+DLsDw;
            var16 = {};
            var16['count'] = var26;
            var16 = var23.bind(var24)(var22, var16);
            var9['children'] = var16;
            var9 = var15.bind(var4)(var14, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var2, var6);
            var5[4] = var6;
            var6 = null;
            var8 = var6 != var25;
            if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var17;
case 7:
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = _closure1_slot12;
            var14 = _closure1_slot4;
            var9 = {};
            var16 = var21.interestedContainer;
            var9['style'] = var16;
            var23 = _closure1_slot11;
            var22 = _closure1_slot1;
            var24 = _closure1_slot2;
            var26 = 22;
            var16 = var24[var26];
            var22 = var22.bind(var4)(var16);
            var16 = {};
            var16['user'] = var25;
            var25 = var12.guild_id;
            var16['guildId'] = var25;
            var25 = _closure1_slot0;
            var26 = var24[var26];
            var26 = var25.bind(var4)(var26);
            var26 = var26.AvatarSizes;
            var26 = var26.XSMALL_20;
            var16['size'] = var26;
            var26 = var21.interestedIcon;
            var16['style'] = var26;
            var22 = var23.bind(var4)(var22, var16);
            var16 = new Array(2);
            var16[0] = var22;
            var18 = var24[var18];
            var18 = var25.bind(var4)(var18);
            var22 = var18.Text;
            var18 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var26 = var24[var28];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var24 = var24[var28];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var25 = var24.66DLFh;
            var24 = {};
            var28 = function usernameHook() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var1 = 'dot';
                    var1 = var1 === var5;
                    if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var5 = _closure2_slot5;
                    var6 = null;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var7 = _closure2_slot5;
                    var5 = var7.colorString;
case 13:
                    var1 = var6 != var5;
case 11:
                    if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var8 = _closure1_slot11;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 23;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.RoleDot;
                    var5 = {};
                    var9 = 'small';
                    var5['size'] = var9;
                    var9 = _closure2_slot5;
                    var12 = var9.colorString;
                    var5['color'] = var12;
                    var9 = var9.colorStrings;
                    var5['colors'] = var9;
                    var1 = var8.bind(var7)(var6, var5);
case 15:
                    var5 = new Array(2);
                    var5[0] = var1;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.LegacyText;
                    var6 = {};
                    var9 = _closure2_slot5;
                    var12 = null;
                    var13 = var12 != var9;
                    var9 = undefined;
                    if(!var13) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var14 = _closure2_slot3;
                    var13 = 'username';
                    var9 = undefined;
                    if(!(var13 === var14)) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                    var13 = _closure2_slot5;
                    var13 = var13.colorString;
                    var13 = var12 != var13;
                    var9 = undefined;
                    if(!var13) { _fun0004_ip = 17; continue _fun0004 }
case 20:
                    var13 = {};
                    var14 = _closure2_slot5;
                    var14 = var14.colorString;
                    var13['color'] = var14;
                    var9 = var13;
case 17:
                    var6['style'] = var9;
                    var9 = _closure2_slot5;
                    var13 = var12 == var9;
                    var9 = undefined;
                    if(var13) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var13 = _closure2_slot5;
                    var9 = var13.nick;
case 21:
                    if(!(var12 == var9)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 25;
                    var11 = var13[var11];
                    var12 = var12.bind(var1)(var11);
                    var11 = var12.getName;
                    var10 = _closure2_slot4;
                    var9 = var11.bind(var12)(var10);
case 23:
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var24['usernameHook'] = var28;
            var24 = var26.bind(var27)(var25, var24);
            var18['children'] = var24;
            var18 = var23.bind(var4)(var22, var18);
            var16[1] = var18;
            var9['children'] = var16;
            var8 = var15.bind(var4)(var14, var9);
case 9:
            var5[5] = var8;
            var18 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = var15[var19];
            var8 = var16.bind(var4)(var8);
            var9 = var8.GuildEventCardDescription;
            var8 = {};
            var8['event'] = var12;
            var14 = var21.eventDescriptionContainer;
            var8['style'] = var14;
            var8 = var18.bind(var4)(var9, var8);
            var5[6] = var8;
            var14 = _closure1_slot12;
            var8 = 26;
            var8 = var15[var8];
            var8 = var16.bind(var4)(var8);
            var9 = var8.ButtonGroup;
            var8 = {};
            var22 = 'horizontal';
            var8['direction'] = var22;
            var21 = var21.controlsContainer;
            var8['style'] = var21;
            var15 = var15[var19];
            var15 = var16.bind(var4)(var15);
            var16 = var15.GuildEventCardPrimaryAction;
            var15 = {};
            var15['event'] = var12;
            var21 = function onCloseAction() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 25:
                    return var1;
                }
            };
            var15['onCloseAction'] = var21;
            var15['isConnected'] = var20;
            var15['recurrenceId'] = var10;
            var16 = var18.bind(var4)(var16, var15);
            var15 = new Array(3);
            var15[0] = var16;
            var16 = null;
            if(!var17) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var20 = _closure1_slot11;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var17 = var18.bind(var4)(var17);
            var18 = var17.GuildEventShareAction;
            var17 = {};
            var17['event'] = var12;
            var16 = var20.bind(var4)(var18, var17);
case 27:
            var15[1] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var16 = var17.bind(var4)(var16);
            var17 = var16.GuildEventModeratorAction;
            var16 = {};
            var16['event'] = var12;
            var16['recurrenceId'] = var10;
            var16 = var18.bind(var4)(var17, var16);
            var15[2] = var16;
            var8['children'] = var15;
            var8 = var14.bind(var4)(var9, var8);
            var5[7] = var8;
            var6 = var6 != var13;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 27;
            var7 = var14[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var14 = var12.guild_id;
            var7['guildId'] = var14;
            var7['recurrenceRule'] = var13;
            var12 = var12.id;
            var7['guildEventId'] = var12;
            var11 = function onRecurrencePress(arg1) {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7['onRecurrencePress'] = var11;
            var7['activeRecurrenceId'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 29:
            var5[8] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['closeGuildEventInfoActionSheet'] = var2;
    return var1;
})();