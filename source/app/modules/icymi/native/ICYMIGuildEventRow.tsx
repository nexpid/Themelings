// app/modules/icymi/native/ICYMIGuildEventRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ICYMIGuildEventRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.event;
            var _closure2_slot0 = var13;
            var5 = var1.channel;
            var17 = var1.guild;
            var _closure2_slot1 = var17;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot12;
            var25 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var20 = null;
            var2 = var1.bind(var4)(var13, var20);
            var1 = _closure1_slot6;
            var26 = var1.bind(var4)(var13);
            var _closure2_slot2 = var26;
            var3 = var20 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 120; continue _fun0001 }
 104:
            var3 = var2.startTime;
            var2 = var3.toISOString;
            var1 = var2.bind(var3)();
 120:
            _closure2_slot3 = var1;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var26;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
 21:
                    var2 = 11;
                    var3 = var8[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.getEventTimeData;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 111; continue _fun0002;
 52:
                    var2 = {};
                    var3 = 10;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.TxqPQU;
                    var3 = var4.bind(var5)(var3);
                    var2['startDateTimeString'] = var3;
                    var1 = var2;
 111:
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1, var2);
            var16 = var1.startDateTimeString;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getLocationFromEvent;
            var2 = var1.bind(var2)(var13);
            var3 = var20 == var5;
            var1 = undefined;
            if(var3) { _fun0001_ip = 209; continue _fun0001 }
 204:
            var1 = var5.name;
 209:
            var24 = var2;
            if(!(var20 != var1)) { _fun0001_ip = 219; continue _fun0001 }
 216:
            var24 = var1;
 219:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var6 = var3[var1];
            var7 = var2.bind(var4)(var6);
            var6 = var7.getEventLocationIconSource;
            var23 = true;
            var31 = var6.bind(var7)(var13, var5, var23);
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.getEventLocationIconComponent;
            var19 = var1.bind(var6)(var13, var5, var23);
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getNextRecurrenceIdInEvent;
            var6 = var1.bind(var2)(var13);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = function(arg1, arg2) {
                var5 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var7 = var5.id;
                var6 = 'guild_event';
                var2 = 'press_event';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 15;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildEventDetails;
                var2 = {};
                var6 = var5.id;
                var2['eventId'] = var6;
                var2['event'] = var5;
                var5 = arg2;
                var2['recurrenceId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var7)(var2, var1);
            _closure2_slot4 = var1;
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var1 = var17.id;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var13.id;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var3 = _closure2_slot0;
                var7 = var3.id;
                var6 = 'guild_event';
                var3 = 'press_event';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = 16;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var7)(var1, var2);
            _closure2_slot5 = var1;
            var1 = var13.description;
            var12 = var20 != var1;
            if(!var12) { _fun0001_ip = 405; continue _fun0001 }
 389:
            var1 = var13.description;
            var2 = var1.length;
            var1 = 0;
            var12 = var2 > var1;
 405:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var20 == var13;
            var2 = undefined;
            if(var1) { _fun0001_ip = 439; continue _fun0001 }
 434:
            var2 = var13.guild_id;
 439:
            var7 = var20 == var13;
            var1 = undefined;
            if(var7) { _fun0001_ip = 453; continue _fun0001 }
 448:
            var1 = var13.id;
 453:
            var30 = var3.bind(var4)(var2, var1, var6);
            var3 = _closure1_slot10;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var1 = var11[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.GuildEventPost;
            var1 = {};
            var1['guild'] = var17;
            var1['channel'] = var5;
            var1['event'] = var13;
            var5 = 'guild_event';
            var1['type'] = var5;
            var5 = function onHeaderPress() {
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['onHeaderPress'] = var5;
            var7 = _closure1_slot11;
            var5 = 19;
            var5 = var11[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.Card;
            var5 = {};
            var8 = function onPress() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var8;
            var8 = var25.container;
            var5['style'] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot4;
            var8 = {};
            var15 = var25.timeAndUserPillContainer;
            var8['style'] = var15;
            var15 = _closure1_slot10;
            var22 = 20;
            var11 = var11[var22];
            var11 = var14.bind(var4)(var11);
            var14 = var11.Text;
            var11 = {};
            var18 = 'text-sm/semibold';
            var11['variant'] = var18;
            var18 = 'text-brand';
            if(!var26) { _fun0001_ip = 637; continue _fun0001 }
 631:
            var18 = 'status-positive';
 637:
            var11['color'] = var18;
            var11['children'] = var16;
            var11 = var15.bind(var4)(var14, var11);
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(5);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var22];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            if(!var12) { _fun0001_ip = 705; continue _fun0001 }
 700:
            var12 = var25.title;
 705:
            var9['style'] = var12;
            var12 = 'text-lg/semibold';
            var9['variant'] = var12;
            var12 = var13.name;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var9 = var13.description;
            var9 = var20 != var9;
            if(!var9) { _fun0001_ip = 766; continue _fun0001 }
 750:
            var10 = var13.description;
            var11 = var10.length;
            var10 = 0;
            var9 = var11 > var10;
 766:
            if(!var9) { _fun0001_ip = 860; continue _fun0001 }
 769:
            var12 = _closure1_slot10;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var22];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'lineClamp': 5};
            var14 = 21;
            var14 = var16[var14];
            var16 = var15.bind(var4)(var14);
            var15 = var16.guildEventDetailsParser;
            var14 = var13.description;
            var13 = {};
            var17 = var17.id;
            var13['guildId'] = var17;
            var13 = var15.bind(var16)(var14, var23, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 860:
            var8[2] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var25.separator;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var25.infoContainer;
            var9['style'] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var25.locationContainer;
            var12['style'] = var15;
            var27 = _closure1_slot10;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var15 = 22;
            var15 = var16[var15];
            var15 = var17.bind(var4)(var15);
            var18 = var15.GroupIcon;
            var15 = {};
            var26 = 'xs';
            var15['size'] = var26;
            var28 = var25.eventsChannelIcon;
            var15['style'] = var28;
            var18 = var27.bind(var4)(var18, var15);
            var15 = new Array(2);
            var15[0] = var18;
            var18 = _closure1_slot10;
            var16 = var16[var22];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var27 = global;
            var27 = var27.HermesInternal;
            var29 = var27.concat;
            var28 = '';
            var27 = ' people are interested';
            var27 = var29.bind(var28)(var30, var27);
            var16['children'] = var27;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot11;
            var14 = _closure1_slot4;
            var13 = {};
            var16 = var25.locationContainer;
            var13['style'] = var16;
            if(!(var20 == var19)) { _fun0001_ip = 1200; continue _fun0001 }
 1115:
            var17 = var20 != var31;
            if(!var17) { _fun0001_ip = 1198; continue _fun0001 }
 1122:
            var27 = _closure1_slot10;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 23;
            var16 = var30[var28];
            var18 = var29.bind(var4)(var16);
            var16 = {};
            var16['source'] = var31;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.Sizes;
            var28 = var28.EXTRA_SMALL;
            var16['size'] = var28;
            var28 = var25.eventsChannelIcon;
            var16['style'] = var28;
            var16['disableColor'] = var23;
            var17 = var27.bind(var4)(var18, var16);
 1198:
            _fun0001_ip = 1226; continue _fun0001;
 1200:
            var18 = _closure1_slot10;
            var16 = {};
            var16['size'] = var26;
            var25 = var25.eventsChannelIcon;
            var16['style'] = var25;
            var17 = var18.bind(var4)(var19, var16);
 1226:
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot10;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var22 = var20 != var24;
            var20 = null;
            if(!var22) { _fun0001_ip = 1315; continue _fun0001 }
 1283:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 21;
            var21 = var25[var21];
            var22 = var22.bind(var4)(var21);
            var21 = var22.guildEventDetailsParser;
            var20 = var21.bind(var22)(var24, var23);
 1315:
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[4] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var8 = var7.isGuildEventEnded;
    var _closure1_slot5 = var8;
    var7 = var7.isGuildScheduledEventActive;
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.ICYMI_MARGIN;
    var10 = var4.MESSAGE_CONTENT_INSET;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginHorizontal'] = var12;
    var9['marginBottom'] = var12;
    var10 = var10 + var12;
    var9['marginLeft'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['marginBottom'] = var13;
    var4['title'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': null, 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginBottom'] = var13;
    var4['timeAndUserPillContainer'] = var9;
    var9 = {'height': 1, 'width': '100%'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var9['marginVertical'] = var12;
    var4['separator'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var9['tintColor'] = var12;
    var4['eventsChannelIcon'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['infoContainer'] = var9;
    var9 = {'alignItems': 'center', 'flexDirection': 'row'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['locationContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIGuildEventRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIGuildEventRowWrapper(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var2 = var2.eventId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var6 = var7[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var6);
            var _closure2_slot1 = var8;
            var6 = var7[var3];
            var11 = var4.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 39; continue _fun0004 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var9, var6);
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var9 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 39; continue _fun0005 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.channel_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var4 = null;
            var3 = var4 == var8;
            var1 = null;
            if(var3) { _fun0003_ip = 215; continue _fun0003 }
 163:
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 215; continue _fun0003 }
 172:
            var3 = _closure1_slot5;
            var3 = var3.bind(var5)(var8);
            var1 = null;
            if(var3) { _fun0003_ip = 215; continue _fun0003 }
 186:
            var4 = _closure1_slot10;
            var3 = _closure1_slot13;
            var2 = {};
            var2['event'] = var8;
            var2['channel'] = var7;
            var2['guild'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 215:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();