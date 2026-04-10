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
case 0:
            var2 = arg1;
            var13 = var2.event;
            var _closure2_slot0 = var13;
            var7 = var2.channel;
            var17 = var2.guild;
            var _closure2_slot1 = var17;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot13;
            var25 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var20 = null;
            var3 = var2.bind(var4)(var13, var20);
            var2 = _closure1_slot7;
            var26 = var2.bind(var4)(var13);
            var _closure2_slot2 = var26;
            var5 = var20 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.startTime;
            var3 = var5.toISOString;
            var2 = var3.bind(var5)();
case 2:
            _closure2_slot3 = var2;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var26;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = 10;
                    var3 = var8[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.getEventTimeData;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = {};
                    var3 = 9;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.TxqPQR;
                    var3 = var4.bind(var5)(var3);
                    var2['startDateTimeString'] = var3;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var3);
            var16 = var2.startDateTimeString;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var7);
            var5 = _closure1_slot0;
            var3 = 12;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getLocationFromEvent;
            var24 = var3.bind(var5)(var13);
            if(!(var20 != var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var24 = var2;
case 7:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var6 = var5[var2];
            var8 = var3.bind(var4)(var6);
            var6 = var8.getEventLocationIconSource;
            var23 = true;
            var31 = var6.bind(var8)(var13, var7, var23);
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.getEventLocationIconComponent;
            var19 = var2.bind(var6)(var13, var7, var23);
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getNextRecurrenceIdInEvent;
            var6 = var2.bind(var3)(var13);
            var8 = _closure1_slot3;
            var5 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 14;
                var5 = var4[var3];
                var1 = undefined;
                var11 = var6.bind(var1)(var5);
                var10 = var11.itemInteracted;
                var5 = _closure2_slot0;
                var9 = var5.id;
                var8 = 'guild_event';
                var7 = 'press_event';
                var7 = var10.bind(var11)(var9, var8, var7);
                var3 = var4[var3];
                var7 = var6.bind(var1)(var3);
                var6 = var7.feedItemActioned;
                var3 = {};
                var9 = var5.id;
                var3['itemId'] = var9;
                var3['itemType'] = var8;
                var8 = {'actionGestureType': 'press', 'actionTargetElement': 'item_body', 'actionIntentType': 'navigate', 'actionDestinationType': 'event'};
                var3['actionParameters'] = var8;
                var3 = var6.bind(var7)(var3);
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
            var8 = var5.bind(var8)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var9 = var17.id;
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var13.id;
            var2[1] = var9;
            var1 = function() {
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 14;
                var2 = var5[var4];
                var1 = undefined;
                var12 = var6.bind(var1)(var2);
                var11 = var12.itemInteracted;
                var9 = _closure2_slot0;
                var10 = var9.id;
                var8 = 'guild_event';
                var7 = 'press_event';
                var7 = var11.bind(var12)(var10, var8, var7);
                var4 = var5[var4];
                var7 = var6.bind(var1)(var4);
                var6 = var7.feedItemActioned;
                var4 = {};
                var9 = var9.id;
                var4['itemId'] = var9;
                var4['itemType'] = var8;
                var8 = {'actionGestureType': 'press', 'actionTargetElement': 'item_header', 'actionIntentType': 'navigate', 'actionDestinationType': 'guild'};
                var4['actionParameters'] = var8;
                var4 = var6.bind(var7)(var4);
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
            var5 = var3.bind(var5)(var1, var2);
            var1 = var13.description;
            var12 = var20 != var1;
            if(!var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var13.description;
            var2 = var1.length;
            var1 = 0;
            var12 = var2 > var1;
case 9:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var20 == var13;
            var2 = undefined;
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var13.guild_id;
case 11:
            var9 = var20 == var13;
            var1 = undefined;
            if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var13.id;
case 13:
            var32 = var3.bind(var4)(var2, var1, var6);
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = _closure1_slot0;
            var33 = 9;
            var9 = var6[var33];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var6[var33];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6["6pFsLQ"];
            var6 = var9.bind(var10)(var6);
            var1['actionLabel'] = var6;
            var6 = var13.id;
            var1['id'] = var6;
            var6 = 'guild_event';
            var1['interactionType'] = var6;
            var9 = var20 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var7.id;
case 15:
            var1['channelId'] = var6;
            var6 = var17.id;
            var1['guildId'] = var6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 19;
            var6 = var11[var6];
            var9 = var7.bind(var4)(var6);
            var7 = var9.extractTimestamp;
            var6 = var13.id;
            var6 = var7.bind(var9)(var6);
            var1['timestamp'] = var6;
            var1['onHeaderPress'] = var5;
            var1['onHeaderLongPress'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot4;
            var5 = {};
            var5['onPress'] = var8;
            var8 = var25.container;
            var5['style'] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var14 = var25.timeAndUserPillContainer;
            var8['style'] = var14;
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var22 = 20;
            var11 = var11[var22];
            var11 = var14.bind(var4)(var11);
            var14 = var11.Text;
            var11 = {};
            var18 = 'text-sm/semibold';
            var11['variant'] = var18;
            var18 = 'text-brand';
            if(!var26) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var18 = 'status-positive';
case 17:
            var11['color'] = var18;
            var11['children'] = var16;
            var11 = var15.bind(var4)(var14, var11);
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(5);
            var8[0] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var22];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = var25.title;
case 19:
            var9['style'] = var12;
            var12 = 'text-lg/semibold';
            var9['variant'] = var12;
            var12 = var13.name;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var9 = var13.description;
            var9 = var20 != var9;
            if(!var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = var13.description;
            var11 = var10.length;
            var10 = 0;
            var9 = var11 > var10;
case 21:
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = _closure1_slot11;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var22];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/normal', 'color': 'text-subtle', 'lineClamp': 5};
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
case 23:
            var8[2] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var25.separator;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var25.infoContainer;
            var9['style'] = var12;
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = var25.locationContainer;
            var12['style'] = var15;
            var17 = _closure1_slot11;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 22;
            var15 = var27[var15];
            var15 = var28.bind(var4)(var15);
            var16 = var15.GroupIcon;
            var15 = {};
            var26 = 'xs';
            var15['size'] = var26;
            var18 = var25.eventsChannelIcon;
            var15['style'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot11;
            var16 = var27[var22];
            var16 = var28.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var29 = var27[var33];
            var29 = var28.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.format;
            var27 = var27[var33];
            var27 = var28.bind(var4)(var27);
            var27 = var27.t;
            var28 = var27["+DLsD8"];
            var27 = {};
            var27['count'] = var32;
            var27 = var29.bind(var30)(var28, var27);
            var16['children'] = var27;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot12;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var25.locationContainer;
            var13['style'] = var16;
            if(!(var20 == var19)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var20 != var31;
            if(!var17) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var27 = _closure1_slot11;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 23;
            var16 = var30[var28];
            var16 = var29.bind(var4)(var16);
            var18 = var16.Icon;
            var16 = {};
            var16['source'] = var31;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.Icon;
            var28 = var28.Sizes;
            var28 = var28.EXTRA_SMALL;
            var16['size'] = var28;
            var28 = var25.eventsChannelIcon;
            var16['style'] = var28;
            var16['disableColor'] = var23;
            var17 = var27.bind(var4)(var18, var16);
case 27:
            _fun0001_ip = 29; continue _fun0001;
case 25:
            var18 = _closure1_slot11;
            var16 = {};
            var16['size'] = var26;
            var25 = var25.eventsChannelIcon;
            var16['style'] = var25;
            var17 = var18.bind(var4)(var19, var16);
case 29:
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot11;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var22 = var20 != var24;
            var20 = null;
            if(!var22) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 21;
            var21 = var25[var21];
            var22 = var22.bind(var4)(var21);
            var21 = var22.guildEventDetailsParser;
            var20 = var21.bind(var22)(var24, var23);
case 30:
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
    var _closure1_slot14 = var1;
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
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var4 = var3.margin;
        var2['marginHorizontal'] = var4;
        var4 = var3.margin;
        var2['marginBottom'] = var4;
        var4 = var3.margin;
        var3 = var3.inset;
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
        var7 = var7.INTERACTIVE_TEXT_DEFAULT;
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
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIGuildEventRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIGuildEventRowWrapper(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
case 32:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var4 = _closure2_slot1;
                    var1 = var4.channel_id;
case 32:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var4 = null;
            var3 = var4 == var8;
            var1 = null;
            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 34:
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 35:
            var3 = _closure1_slot6;
            var3 = var3.bind(var5)(var8);
            var1 = null;
            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 36:
            var4 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var2['event'] = var8;
            var2['channel'] = var7;
            var2['guild'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();