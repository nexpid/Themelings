// app/modules/icymi/native/ICYMIGuildEventRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ICYMIGuildEventRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.event;
            var _closure2_slot0 = var14;
            var8 = var1.channel;
            var18 = var1.guild;
            var _closure2_slot1 = var18;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useICYMIUXRefreshExperiment;
            var1 = 'ICYMIGuildEventRow';
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot15;
            var26 = var2.bind(var5)(var1);
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var21 = null;
            var3 = var2.bind(var5)(var14, var21);
            var2 = _closure1_slot7;
            var27 = var2.bind(var5)(var14);
            var _closure2_slot2 = var27;
            var4 = var21 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 154; continue _fun0001 }
 138:
            var4 = var3.startTime;
            var3 = var4.toISOString;
            var2 = var3.bind(var4)();
 154:
            _closure2_slot3 = var2;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var27;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
 21:
                    var2 = 12;
                    var3 = var8[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.getEventTimeData;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 111; continue _fun0002;
 52:
                    var2 = {};
                    var3 = 11;
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
            var2 = var4.bind(var6)(var2, var3);
            var17 = var2.startDateTimeString;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getLocationFromEvent;
            var3 = var2.bind(var3)(var14);
            var4 = var21 == var8;
            var2 = undefined;
            if(var4) { _fun0001_ip = 243; continue _fun0001 }
 238:
            var2 = var8.name;
 243:
            var25 = var3;
            if(!(var21 != var2)) { _fun0001_ip = 253; continue _fun0001 }
 250:
            var25 = var2;
 253:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var6 = var4[var2];
            var7 = var3.bind(var5)(var6);
            var6 = var7.getEventLocationIconSource;
            var24 = true;
            var32 = var6.bind(var7)(var14, var8, var24);
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.getEventLocationIconComponent;
            var20 = var2.bind(var6)(var14, var8, var24);
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getNextRecurrenceIdInEvent;
            var7 = var2.bind(var3)(var14);
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = function(arg1, arg2) {
                var5 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var7 = var5.id;
                var6 = 'guild_event';
                var2 = 'press_event';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 16;
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
            var2 = new Array(0);
            var2 = var4.bind(var6)(var3, var2);
            _closure2_slot4 = var2;
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var2 = var18.id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var14.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
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
                var3 = 17;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            _closure2_slot5 = var6;
            var2 = var14.description;
            var13 = var21 != var2;
            if(!var13) { _fun0001_ip = 439; continue _fun0001 }
 423:
            var2 = var14.description;
            var3 = var2.length;
            var2 = 0;
            var13 = var3 > var2;
 439:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var21 == var14;
            var3 = undefined;
            if(var2) { _fun0001_ip = 473; continue _fun0001 }
 468:
            var3 = var14.guild_id;
 473:
            var10 = var21 == var14;
            var2 = undefined;
            if(var10) { _fun0001_ip = 487; continue _fun0001 }
 482:
            var2 = var14.id;
 487:
            var31 = var4.bind(var5)(var3, var2, var7);
            var4 = _closure1_slot13;
            if(var1) { _fun0001_ip = 1425; continue _fun0001 }
 504:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 25;
            var1 = var16[var1];
            var1 = var19.bind(var5)(var1);
            var2 = var1.GuildEventPost;
            var1 = {};
            var1['guild'] = var18;
            var1['channel'] = var8;
            var1['event'] = var14;
            var3 = 'guild_event';
            var1['type'] = var3;
            var3 = function onHeaderPress() {
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['onHeaderPress'] = var3;
            var10 = _closure1_slot14;
            var3 = 26;
            var3 = var16[var3];
            var3 = var19.bind(var5)(var3);
            var7 = var3.Card;
            var3 = {};
            var11 = function onPress() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var11;
            var11 = var26.container;
            var3['style'] = var11;
            var15 = _closure1_slot13;
            var12 = _closure1_slot5;
            var11 = {};
            var23 = var26.timeAndUserPillContainer;
            var11['style'] = var23;
            var23 = _closure1_slot13;
            var36 = 21;
            var16 = var16[var36];
            var16 = var19.bind(var5)(var16);
            var19 = var16.Text;
            var16 = {};
            var28 = 'text-sm/semibold';
            var16['variant'] = var28;
            var28 = 'text-brand';
            if(!var27) { _fun0001_ip = 677; continue _fun0001 }
 671:
            var28 = 'status-positive';
 677:
            var16['color'] = var28;
            var16['children'] = var17;
            var16 = var23.bind(var5)(var19, var16);
            var11['children'] = var16;
            var12 = var15.bind(var5)(var12, var11);
            var11 = new Array(5);
            var11[0] = var12;
            var16 = _closure1_slot13;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var36];
            var12 = var15.bind(var5)(var12);
            var15 = var12.Text;
            var12 = {};
            var19 = var13;
            if(!var13) { _fun0001_ip = 748; continue _fun0001 }
 743:
            var19 = var26.title;
 748:
            var12['style'] = var19;
            var19 = 'text-lg/semibold';
            var12['variant'] = var19;
            var19 = var14.name;
            var12['children'] = var19;
            var12 = var16.bind(var5)(var15, var12);
            var11[1] = var12;
            var12 = var14.description;
            var12 = var21 != var12;
            if(!var12) { _fun0001_ip = 809; continue _fun0001 }
 793:
            var15 = var14.description;
            var16 = var15.length;
            var15 = 0;
            var12 = var16 > var15;
 809:
            if(!var12) { _fun0001_ip = 903; continue _fun0001 }
 812:
            var19 = _closure1_slot13;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var15 = var29[var36];
            var15 = var28.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'lineClamp': 5};
            var23 = 22;
            var23 = var29[var23];
            var30 = var28.bind(var5)(var23);
            var29 = var30.guildEventDetailsParser;
            var28 = var14.description;
            var23 = {};
            var33 = var18.id;
            var23['guildId'] = var33;
            var23 = var29.bind(var30)(var28, var24, var23);
            var15['children'] = var23;
            var12 = var19.bind(var5)(var16, var15);
 903:
            var11[2] = var12;
            var16 = _closure1_slot13;
            var15 = _closure1_slot5;
            var12 = {};
            var19 = var26.separator;
            var12['style'] = var19;
            var12 = var16.bind(var5)(var15, var12);
            var11[3] = var12;
            var16 = _closure1_slot14;
            var15 = _closure1_slot5;
            var12 = {};
            var19 = var26.infoContainer;
            var12['style'] = var19;
            var28 = _closure1_slot14;
            var23 = _closure1_slot5;
            var19 = {};
            var29 = var26.locationContainer;
            var19['style'] = var29;
            var37 = _closure1_slot13;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var29 = 23;
            var29 = var30[var29];
            var29 = var33.bind(var5)(var29);
            var34 = var29.GroupIcon;
            var29 = {};
            var35 = 'xs';
            var29['size'] = var35;
            var38 = var26.eventsChannelIcon;
            var29['style'] = var38;
            var34 = var37.bind(var5)(var34, var29);
            var29 = new Array(2);
            var29[0] = var34;
            var34 = _closure1_slot13;
            var30 = var30[var36];
            var30 = var33.bind(var5)(var30);
            var33 = var30.Text;
            var30 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var37 = global;
            var37 = var37.HermesInternal;
            var39 = var37.concat;
            var38 = '';
            var37 = ' people are interested';
            var37 = var39.bind(var38)(var31, var37);
            var30['children'] = var37;
            var30 = var34.bind(var5)(var33, var30);
            var29[1] = var30;
            var19['children'] = var29;
            var23 = var28.bind(var5)(var23, var19);
            var19 = new Array(2);
            var19[0] = var23;
            var29 = _closure1_slot14;
            var28 = _closure1_slot5;
            var23 = {};
            var30 = var26.locationContainer;
            var23['style'] = var30;
            if(!(var21 == var20)) { _fun0001_ip = 1243; continue _fun0001 }
 1158:
            var33 = var21 != var32;
            if(!var33) { _fun0001_ip = 1241; continue _fun0001 }
 1165:
            var37 = _closure1_slot13;
            var39 = _closure1_slot1;
            var40 = _closure1_slot2;
            var38 = 24;
            var30 = var40[var38];
            var34 = var39.bind(var5)(var30);
            var30 = {};
            var30['source'] = var32;
            var38 = var40[var38];
            var38 = var39.bind(var5)(var38);
            var38 = var38.Sizes;
            var38 = var38.EXTRA_SMALL;
            var30['size'] = var38;
            var38 = var26.eventsChannelIcon;
            var30['style'] = var38;
            var30['disableColor'] = var24;
            var33 = var37.bind(var5)(var34, var30);
 1241:
            _fun0001_ip = 1269; continue _fun0001;
 1243:
            var34 = _closure1_slot13;
            var30 = {};
            var30['size'] = var35;
            var35 = var26.eventsChannelIcon;
            var30['style'] = var35;
            var33 = var34.bind(var5)(var20, var30);
 1269:
            var30 = new Array(2);
            var30[0] = var33;
            var35 = _closure1_slot13;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var36];
            var33 = var34.bind(var5)(var33);
            var34 = var33.Text;
            var33 = {'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var37 = var21 != var25;
            var36 = null;
            if(!var37) { _fun0001_ip = 1358; continue _fun0001 }
 1326:
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var37 = 22;
            var37 = var39[var37];
            var38 = var38.bind(var5)(var37);
            var37 = var38.guildEventDetailsParser;
            var36 = var37.bind(var38)(var25, var24);
 1358:
            var33['children'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            var30[1] = var33;
            var23['children'] = var30;
            var23 = var29.bind(var5)(var28, var23);
            var19[1] = var23;
            var12['children'] = var19;
            var12 = var16.bind(var5)(var15, var12);
            var11[4] = var12;
            var3['children'] = var11;
            var3 = var10.bind(var5)(var7, var3);
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 2532; continue _fun0001;
 1425:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 19;
            var2 = var15[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 11;
            var10 = var15[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var15[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.6pFsLS;
            var7 = var10.bind(var11)(var7);
            var2['actionLabel'] = var7;
            var7 = var14.id;
            var2['id'] = var7;
            var7 = 'guild_event';
            var2['type'] = var7;
            var10 = var21 == var8;
            var7 = undefined;
            if(var10) { _fun0001_ip = 1538; continue _fun0001 }
 1533:
            var7 = var8.id;
 1538:
            var2['channelId'] = var7;
            var7 = var18.id;
            var2['guildId'] = var7;
            var15 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var10 = var15.bind(var5)(var7);
            var8 = var10.extractTimestamp;
            var7 = var14.id;
            var7 = var8.bind(var10)(var7);
            var2['timestamp'] = var7;
            var2['onHeaderPress'] = var6;
            var2['onHeaderLongPress'] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = function onPress() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onPress'] = var9;
            var10 = var26.container;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = 8;
            var16 = var12[var11];
            var16 = var15.bind(var5)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_8;
            var10['paddingHorizontal'] = var16;
            var16 = var12[var11];
            var16 = var15.bind(var5)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_16;
            var10['paddingTop'] = var16;
            var11 = var12[var11];
            var11 = var15.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var10['paddingBottom'] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot5;
            var9 = {};
            var15 = var26.timeAndUserPillContainer;
            var9['style'] = var15;
            var16 = _closure1_slot13;
            var15 = _closure1_slot0;
            var23 = 21;
            var12 = var12[var23];
            var12 = var15.bind(var5)(var12);
            var15 = var12.Text;
            var12 = {};
            var19 = 'text-sm/semibold';
            var12['variant'] = var19;
            var19 = 'text-brand';
            if(!var27) { _fun0001_ip = 1792; continue _fun0001 }
 1786:
            var19 = 'status-positive';
 1792:
            var12['color'] = var19;
            var12['children'] = var17;
            var12 = var16.bind(var5)(var15, var12);
            var9['children'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(5);
            var9[0] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var23];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {};
            if(!var13) { _fun0001_ip = 1860; continue _fun0001 }
 1855:
            var13 = var26.title;
 1860:
            var10['style'] = var13;
            var13 = 'text-lg/semibold';
            var10['variant'] = var13;
            var13 = var14.name;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var10 = var14.description;
            var10 = var21 != var10;
            if(!var10) { _fun0001_ip = 1921; continue _fun0001 }
 1905:
            var11 = var14.description;
            var12 = var11.length;
            var11 = 0;
            var10 = var12 > var11;
 1921:
            if(!var10) { _fun0001_ip = 2015; continue _fun0001 }
 1924:
            var13 = _closure1_slot13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = var17[var23];
            var11 = var16.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'lineClamp': 5};
            var15 = 22;
            var15 = var17[var15];
            var17 = var16.bind(var5)(var15);
            var16 = var17.guildEventDetailsParser;
            var15 = var14.description;
            var14 = {};
            var18 = var18.id;
            var14['guildId'] = var18;
            var14 = var16.bind(var17)(var15, var24, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 2015:
            var9[2] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var26.separator;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[3] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var26.infoContainer;
            var10['style'] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var26.locationContainer;
            var13['style'] = var16;
            var28 = _closure1_slot13;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var16 = 23;
            var16 = var17[var16];
            var16 = var18.bind(var5)(var16);
            var19 = var16.GroupIcon;
            var16 = {};
            var27 = 'xs';
            var16['size'] = var27;
            var29 = var26.eventsChannelIcon;
            var16['style'] = var29;
            var19 = var28.bind(var5)(var19, var16);
            var16 = new Array(2);
            var16[0] = var19;
            var19 = _closure1_slot13;
            var17 = var17[var23];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var28 = global;
            var28 = var28.HermesInternal;
            var30 = var28.concat;
            var29 = '';
            var28 = ' people are interested';
            var28 = var30.bind(var29)(var31, var28);
            var17['children'] = var28;
            var17 = var19.bind(var5)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot14;
            var15 = _closure1_slot5;
            var14 = {};
            var17 = var26.locationContainer;
            var14['style'] = var17;
            if(!(var21 == var20)) { _fun0001_ip = 2355; continue _fun0001 }
 2270:
            var18 = var21 != var32;
            if(!var18) { _fun0001_ip = 2353; continue _fun0001 }
 2277:
            var28 = _closure1_slot13;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var29 = 24;
            var17 = var31[var29];
            var19 = var30.bind(var5)(var17);
            var17 = {};
            var17['source'] = var32;
            var29 = var31[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.Sizes;
            var29 = var29.EXTRA_SMALL;
            var17['size'] = var29;
            var29 = var26.eventsChannelIcon;
            var17['style'] = var29;
            var17['disableColor'] = var24;
            var18 = var28.bind(var5)(var19, var17);
 2353:
            _fun0001_ip = 2381; continue _fun0001;
 2355:
            var19 = _closure1_slot13;
            var17 = {};
            var17['size'] = var27;
            var26 = var26.eventsChannelIcon;
            var17['style'] = var26;
            var18 = var19.bind(var5)(var20, var17);
 2381:
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var23];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var23 = var21 != var25;
            var21 = null;
            if(!var23) { _fun0001_ip = 2470; continue _fun0001 }
 2438:
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 22;
            var22 = var26[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.guildEventDetailsParser;
            var21 = var22.bind(var23)(var25, var24);
 2470:
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[4] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 2532:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = var4.Pressable;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var9 = var8.isGuildEventEnded;
    var _closure1_slot6 = var9;
    var8 = var8.isGuildScheduledEventActive;
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ICYMI_MARGIN;
    var _closure1_slot11 = var7;
    var4 = var4.MESSAGE_CONTENT_INSET;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = {};
            var2 = {};
            var4 = _closure1_slot11;
            var2['marginHorizontal'] = var4;
            var2['marginBottom'] = var4;
            var5 = arg1;
            var3 = 0;
            if(var5) { _fun0003_ip = 32; continue _fun0003 }
 28:
            var3 = _closure1_slot12;
 32:
            var3 = var4 + var3;
            var2['marginLeft'] = var3;
            var1['container'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var8 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['marginBottom'] = var8;
            var1['title'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': null, 'justifyContent': 'space-between'};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['marginBottom'] = var8;
            var1['timeAndUserPillContainer'] = var2;
            var2 = {'height': 1, 'width': '100%'};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_SUBTLE;
            var2['backgroundColor'] = var8;
            var7 = _closure1_slot11;
            var2['marginVertical'] = var7;
            var1['separator'] = var2;
            var2 = {};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_NORMAL;
            var2['tintColor'] = var7;
            var1['eventsChannelIcon'] = var2;
            var2 = {};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_4;
            var2['gap'] = var7;
            var1['infoContainer'] = var2;
            var2 = {'alignItems': 'center', 'flexDirection': 'row'};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['gap'] = var3;
            var1['locationContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIGuildEventRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIGuildEventRowWrapper(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var2 = var2.eventId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 27;
            var6 = var7[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
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
            var6 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 39; continue _fun0005 }
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
            var9 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 39; continue _fun0006 }
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
            if(var3) { _fun0004_ip = 215; continue _fun0004 }
 163:
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0004_ip = 215; continue _fun0004 }
 172:
            var3 = _closure1_slot6;
            var3 = var3.bind(var5)(var8);
            var1 = null;
            if(var3) { _fun0004_ip = 215; continue _fun0004 }
 186:
            var4 = _closure1_slot13;
            var3 = _closure1_slot16;
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