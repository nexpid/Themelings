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
            var8 = var1.event;
            var _closure2_slot0 = var8;
            var15 = var1.channel;
            var13 = var1.guild;
            var _closure2_slot1 = var13;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useDestinationICYMIExperiment;
            var1 = {};
            var9 = 'ICYMIGuildEventRow';
            var1['location'] = var9;
            var1 = var2.bind(var3)(var1);
            var11 = var1.isNewCardDesign;
            var1 = var1.isNewHeaderAndInteractions;
            var2 = _closure1_slot14;
            var12 = var2.bind(var5)(var11);
            var _closure2_slot2 = var12;
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var14 = null;
            var3 = var2.bind(var5)(var8, var14);
            var2 = _closure1_slot7;
            var20 = var2.bind(var5)(var8);
            var _closure2_slot3 = var20;
            var7 = var14 == var3;
            var2 = undefined;
            if(var7) { _fun0001_ip = 204; continue _fun0001 }
 188:
            var7 = var3.startTime;
            var3 = var7.toISOString;
            var2 = var3.bind(var7)();
 204:
            _closure2_slot4 = var2;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var20;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
 21:
                    var2 = 11;
                    var3 = var8[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.getEventTimeData;
                    var1 = _closure2_slot4;
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
            var2 = var7.bind(var9)(var2, var3);
            var17 = var2.startDateTimeString;
            _closure2_slot5 = var17;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getLocationFromEvent;
            var3 = var2.bind(var3)(var8);
            var7 = var14 == var15;
            var2 = undefined;
            if(var7) { _fun0001_ip = 297; continue _fun0001 }
 292:
            var2 = var15.name;
 297:
            var18 = var3;
            if(!(var14 != var2)) { _fun0001_ip = 307; continue _fun0001 }
 304:
            var18 = var2;
 307:
            _closure2_slot6 = var18;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var9 = var7[var2];
            var16 = var3.bind(var5)(var9);
            var9 = var16.getEventLocationIconSource;
            var10 = true;
            var19 = var9.bind(var16)(var8, var15, var10);
            _closure2_slot7 = var19;
            var2 = var7[var2];
            var9 = var3.bind(var5)(var2);
            var2 = var9.getEventLocationIconComponent;
            var22 = var2.bind(var9)(var8, var15, var10);
            _closure2_slot8 = var22;
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getNextRecurrenceIdInEvent;
            var16 = var2.bind(var3)(var8);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var3 = var4[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var3);
                var8 = var9.itemInteracted;
                var5 = _closure2_slot0;
                var7 = var5.id;
                var6 = 'guild_event';
                var3 = 'press_event';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = _closure1_slot0;
                var2 = 15;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildEventDetails;
                var2 = {};
                var6 = var5.id;
                var2['eventId'] = var6;
                var2['event'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = var7.bind(var9)(var2, var3);
            _closure2_slot9 = var10;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var2 = var13.id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var8.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var8 = var9.itemInteracted;
                var4 = _closure2_slot0;
                var7 = var4.id;
                var6 = 'guild_event';
                var4 = 'press_event';
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure1_slot0;
                var3 = 16;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var7.bind(var9)(var2, var3);
            _closure2_slot10 = var7;
            var2 = var8.description;
            var21 = var14 != var2;
            if(!var21) { _fun0001_ip = 509; continue _fun0001 }
 493:
            var2 = var8.description;
            var3 = var2.length;
            var2 = 0;
            var21 = var3 > var2;
 509:
            _closure2_slot11 = var21;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var9 = var3.bind(var5)(var2);
            var2 = var14 == var8;
            var3 = undefined;
            if(var2) { _fun0001_ip = 547; continue _fun0001 }
 542:
            var3 = var8.guild_id;
 547:
            var23 = var14 == var8;
            var2 = undefined;
            if(var23) { _fun0001_ip = 561; continue _fun0001 }
 556:
            var2 = var8.id;
 561:
            var2 = var9.bind(var5)(var3, var2, var16);
            _closure2_slot12 = var2;
            var16 = _closure1_slot3;
            var9 = var16.useMemo;
            var3 = new Array(11);
            var3[0] = var22;
            var22 = var8.description;
            var3[1] = var22;
            var22 = var8.name;
            var3[2] = var22;
            var22 = var13.id;
            var3[3] = var22;
            var3[4] = var21;
            var3[5] = var20;
            var3[6] = var19;
            var3[7] = var18;
            var3[8] = var17;
            var3[9] = var12;
            var3[10] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var7 = _closure1_slot11;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.timeAndUserPillContainer;
                    var5['style'] = var1;
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var20 = 18;
                    var8 = var1[var20];
                    var1 = undefined;
                    var8 = var9.bind(var1)(var8);
                    var9 = var8.Text;
                    var8 = {};
                    var11 = 'text-sm/semibold';
                    var8['variant'] = var11;
                    var12 = _closure2_slot3;
                    var11 = 'text-brand';
                    if(!var12) { _fun0003_ip = 100; continue _fun0003 }
 94:
                    var11 = 'status-positive';
 100:
                    var8['color'] = var11;
                    var11 = _closure2_slot5;
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var5['children'] = var8;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(5);
                    var5[0] = var6;
                    var9 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var20];
                    var6 = var7.bind(var1)(var6);
                    var8 = var6.Text;
                    var7 = {};
                    var6 = _closure2_slot11;
                    if(!var6) { _fun0003_ip = 180; continue _fun0003 }
 171:
                    var10 = _closure2_slot2;
                    var6 = var10.title;
 180:
                    var7['style'] = var6;
                    var6 = 'text-lg/semibold';
                    var7['variant'] = var6;
                    var6 = _closure2_slot0;
                    var10 = var6.name;
                    var7['children'] = var10;
                    var7 = var9.bind(var1)(var8, var7);
                    var5[1] = var7;
                    var6 = var6.description;
                    var17 = null;
                    var6 = var17 != var6;
                    if(!var6) { _fun0003_ip = 251; continue _fun0003 }
 231:
                    var7 = _closure2_slot0;
                    var7 = var7.description;
                    var8 = var7.length;
                    var7 = 0;
                    var6 = var8 > var7;
 251:
                    if(!var6) { _fun0003_ip = 355; continue _fun0003 }
 254:
                    var9 = _closure1_slot11;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = var12[var20];
                    var7 = var11.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'lineClamp': 5};
                    var10 = 19;
                    var10 = var12[var10];
                    var14 = var11.bind(var1)(var10);
                    var13 = var14.guildEventDetailsParser;
                    var10 = _closure2_slot0;
                    var12 = var10.description;
                    var11 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.id;
                    var11['guildId'] = var10;
                    var10 = true;
                    var10 = var13.bind(var14)(var12, var10, var11);
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 355:
                    var5[2] = var6;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var13 = _closure2_slot2;
                    var9 = var13.separator;
                    var6['style'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[3] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var9 = var13.infoContainer;
                    var6['style'] = var9;
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot5;
                    var9 = {};
                    var12 = var13.locationContainer;
                    var9['style'] = var12;
                    var15 = _closure1_slot11;
                    var23 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var12 = 20;
                    var12 = var26[var12];
                    var12 = var23.bind(var1)(var12);
                    var14 = var12.GroupIcon;
                    var12 = {};
                    var21 = 'xs';
                    var12['size'] = var21;
                    var16 = var13.eventsChannelIcon;
                    var12['style'] = var16;
                    var14 = var15.bind(var1)(var14, var12);
                    var12 = new Array(2);
                    var12[0] = var14;
                    var16 = _closure1_slot11;
                    var14 = var26[var20];
                    var14 = var23.bind(var1)(var14);
                    var15 = var14.Text;
                    var14 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
                    var22 = 10;
                    var24 = var26[var22];
                    var24 = var23.bind(var1)(var24);
                    var25 = var24.intl;
                    var24 = var25.format;
                    var22 = var26[var22];
                    var22 = var23.bind(var1)(var22);
                    var22 = var22.t;
                    var23 = var22.+DLsDw;
                    var22 = {};
                    var26 = _closure2_slot12;
                    var22['count'] = var26;
                    var22 = var24.bind(var25)(var23, var22);
                    var14['children'] = var22;
                    var14 = var16.bind(var1)(var15, var14);
                    var12[1] = var14;
                    var9['children'] = var12;
                    var10 = var11.bind(var1)(var10, var9);
                    var9 = new Array(2);
                    var9[0] = var10;
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot5;
                    var10 = {};
                    var13 = var13.locationContainer;
                    var10['style'] = var13;
                    var13 = _closure2_slot8;
                    if(!(var17 == var13)) { _fun0003_ip = 747; continue _fun0003 }
 648:
                    var13 = _closure2_slot7;
                    var14 = var17 != var13;
                    if(!var14) { _fun0003_ip = 745; continue _fun0003 }
 659:
                    var16 = _closure1_slot11;
                    var23 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var22 = 21;
                    var13 = var24[var22];
                    var15 = var23.bind(var1)(var13);
                    var13 = {};
                    var25 = _closure2_slot7;
                    var13['source'] = var25;
                    var22 = var24[var22];
                    var22 = var23.bind(var1)(var22);
                    var22 = var22.Sizes;
                    var22 = var22.EXTRA_SMALL;
                    var13['size'] = var22;
                    var22 = _closure2_slot2;
                    var22 = var22.eventsChannelIcon;
                    var13['style'] = var22;
                    var22 = true;
                    var13['disableColor'] = var22;
                    var14 = var16.bind(var1)(var15, var13);
 745:
                    _fun0003_ip = 781; continue _fun0003;
 747:
                    var16 = _closure1_slot11;
                    var15 = _closure2_slot8;
                    var13 = {};
                    var13['size'] = var21;
                    var21 = _closure2_slot2;
                    var21 = var21.eventsChannelIcon;
                    var13['style'] = var21;
                    var14 = var16.bind(var1)(var15, var13);
 781:
                    var13 = new Array(2);
                    var13[0] = var14;
                    var16 = _closure1_slot11;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var20];
                    var14 = var15.bind(var1)(var14);
                    var15 = var14.Text;
                    var14 = {'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'text-muted'};
                    var20 = _closure2_slot6;
                    var20 = var17 != var20;
                    var17 = null;
                    if(!var20) { _fun0003_ip = 880; continue _fun0003 }
 842:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 19;
                    var19 = var21[var19];
                    var21 = var20.bind(var1)(var19);
                    var20 = var21.guildEventDetailsParser;
                    var19 = _closure2_slot6;
                    var18 = true;
                    var17 = var20.bind(var21)(var19, var18);
 880:
                    var14['children'] = var17;
                    var14 = var16.bind(var1)(var15, var14);
                    var13[1] = var14;
                    var10['children'] = var13;
                    var10 = var12.bind(var1)(var11, var10);
                    var9[1] = var10;
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[4] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var9 = var9.bind(var16)(var2, var3);
            _closure2_slot13 = var9;
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var10;
            var2 = var12.container;
            var3[2] = var2;
            var2 = function() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Card;
                var1 = {};
                var6 = _closure2_slot9;
                var1['onPress'] = var6;
                var6 = _closure2_slot2;
                var6 = var6.container;
                var1['style'] = var6;
                var5 = _closure2_slot13;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var18 = var16.bind(var17)(var2, var3);
            if(var11) { _fun0001_ip = 834; continue _fun0001 }
 710:
            if(var1) { _fun0001_ip = 834; continue _fun0001 }
 713:
            var3 = _closure1_slot12;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 25;
            var1 = var19[var16];
            var1 = var17.bind(var5)(var1);
            var2 = var1.GuildEventPost;
            var1 = {};
            var1['guild'] = var13;
            var1['channel'] = var15;
            var1['event'] = var8;
            var20 = 'guild_event';
            var1['type'] = var20;
            var4 = function onHeaderPress() {
                var2 = _closure2_slot10;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['onHeaderPress'] = var4;
            var4 = new Array(2);
            var4[0] = var18;
            var18 = _closure1_slot11;
            var16 = var19[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.Separator;
            var16 = {};
            var16 = var18.bind(var5)(var17, var16);
            var4[1] = var16;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1083; continue _fun0001;
 834:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 23;
            var2 = var20[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var19 = _closure1_slot0;
            var16 = 10;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.6pFsLS;
            var16 = var17.bind(var18)(var16);
            var2['actionLabel'] = var16;
            var16 = var8.id;
            var2['id'] = var16;
            var16 = 'guild_event';
            var2['type'] = var16;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 951; continue _fun0001 }
 946:
            var14 = var15.id;
 951:
            var2['channelId'] = var14;
            var13 = var13.id;
            var2['guildId'] = var13;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 24;
            var13 = var15[var13];
            var14 = var14.bind(var5)(var13);
            var13 = var14.extractTimestamp;
            var8 = var8.id;
            var8 = var13.bind(var14)(var8);
            var2['timestamp'] = var8;
            var2['onHeaderPress'] = var7;
            var2['onHeaderLongPress'] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot4;
            var6 = {};
            var6['onPress'] = var10;
            var13 = var12.container;
            var10 = new Array(2);
            var10[0] = var13;
            if(var11) { _fun0001_ip = 1049; continue _fun0001 }
 1045:
            var11 = {};
            _fun0001_ip = 1055; continue _fun0001;
 1049:
            var11 = var12.card;
 1055:
            var10[1] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1083:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var1 = {};
            var2 = {};
            var3 = var5.margin;
            var2['marginHorizontal'] = var3;
            var3 = var5.margin;
            var2['marginBottom'] = var3;
            var4 = var5.margin;
            var6 = arg2;
            var3 = 0;
            if(var6) { _fun0004_ip = 48; continue _fun0004 }
 42:
            var3 = var5.inset;
 48:
            var3 = var4 + var3;
            var2['marginLeft'] = var3;
            var1['container'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['marginTop'] = var7;
            var1['card'] = var2;
            var2 = {};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_4;
            var2['marginBottom'] = var7;
            var1['title'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': null, 'justifyContent': 'space-between'};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['marginBottom'] = var7;
            var1['timeAndUserPillContainer'] = var2;
            var2 = {'height': 1, 'width': '100%'};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.BORDER_SUBTLE;
            var2['backgroundColor'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
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
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIGuildEventRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIGuildEventRowWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var2 = var2.eventId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 26;
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 39; continue _fun0006 }
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 39; continue _fun0007 }
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
            if(var3) { _fun0005_ip = 215; continue _fun0005 }
 163:
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0005_ip = 215; continue _fun0005 }
 172:
            var3 = _closure1_slot6;
            var3 = var3.bind(var5)(var8);
            var1 = null;
            if(var3) { _fun0005_ip = 215; continue _fun0005 }
 186:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
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