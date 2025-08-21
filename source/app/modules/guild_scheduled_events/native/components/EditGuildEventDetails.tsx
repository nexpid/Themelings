// app/modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var9['paddingVertical'] = var10;
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildEventDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildEvent;
            var _closure2_slot0 = var2;
            var14 = var1.initialGuildEvent;
            var1 = var1.onChange;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot11;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var26 = var2.name;
            var11 = var2.description;
            var8 = var2.entityType;
            var1 = var2.scheduledStartTime;
            var _closure2_slot2 = var1;
            var5 = var2.scheduledEndTime;
            var _closure2_slot3 = var5;
            var15 = var2.recurrenceRule;
            var _closure2_slot4 = var15;
            var13 = _closure1_slot5;
            var7 = var13.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var7.bind(var13)(var2, var3);
            var _closure2_slot5 = var16;
            var3 = var13.useMemo;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 67; continue _fun0002 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 7;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = _closure2_slot2;
                    var5 = var3.bind(var4)(var1);
                    var4 = var5.add;
                    var3 = 1;
                    var1 = 'hour';
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0002_ip = 101; continue _fun0002;
 67:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 7;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 101:
                    return var1;
                }
            };
            var22 = var3.bind(var13)(var1, var2);
            var _closure2_slot6 = var22;
            var2 = var13.useState;
            var1 = function() {
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 8;
                var2 = var5[var2];
                var6 = undefined;
                var4 = var3.bind(var6)(var2);
                var3 = var4.recurrenceRuleToOption;
                var2 = _closure1_slot1;
                var1 = 7;
                var1 = var5[var1];
                var5 = var2.bind(var6)(var1);
                var2 = _closure2_slot2;
                var2 = var5.bind(var6)(var2);
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var13)(var1);
            var12 = _closure1_slot4;
            var7 = 2;
            var1 = var12.bind(var4)(var1, var7);
            var3 = 0;
            var2 = var1[var3];
            var _closure2_slot7 = var2;
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot8 = var1;
            var10 = var13.useMemo;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var23 = var10.bind(var13)(var5, var1);
            var10 = var13.useMemo;
            var5 = function() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 7;
                var2 = var6[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var4 = var2.bind(var5)();
                var3 = var4.add;
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.MAX_DAYS_AHEAD_AN_EVENT_CAN_START;
                var1 = 'days';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = new Array(0);
            var20 = var10.bind(var13)(var5, var1);
            var10 = var13.useMemo;
            var5 = new Array(1);
            var5[0] = var16;
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot5;
                var4 = var2.bind(var3)(var1);
                var3 = var4.add;
                var2 = 15;
                var1 = 'minutes';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var10.bind(var13)(var1, var5);
            var10 = var13.useMemo;
            var5 = function() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 7;
                var2 = var6[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var4 = var2.bind(var5)();
                var3 = var4.add;
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.MAX_DAYS_AHEAD_AN_EVENT_CAN_END;
                var1 = 'days';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = new Array(0);
            var18 = var10.bind(var13)(var5, var1);
            var1 = var13.useRef;
            var10 = null;
            var5 = var1.bind(var13)(var10);
            var _closure2_slot9 = var5;
            var1 = _closure1_slot6;
            var25 = var1.bind(var4)(var14);
            var _closure2_slot10 = var25;
            var1 = var13.useState;
            var1 = var1.bind(var13)(var10);
            var1 = var12.bind(var4)(var1, var7);
            var27 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot11 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot12 = var1;
            var1 = function handleChangeEvent(arg1) {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot1;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot13 = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = var10 != var27;
            var12 = null;
            if(!var7) { _fun0001_ip = 470; continue _fun0001 }
 406:
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var21 = _closure1_slot3;
            var7 = 10;
            var7 = var21[var7];
            var7 = var13.bind(var4)(var7);
            var13 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-danger'};
            var17 = var17.error;
            var7['style'] = var17;
            var7['children'] = var27;
            var12 = var14.bind(var4)(var13, var7);
 470:
            var7 = new Array(2);
            var7[0] = var12;
            var14 = _closure1_slot8;
            var24 = _closure1_slot0;
            var17 = _closure1_slot3;
            var12 = 11;
            var12 = var17[var12];
            var12 = var24.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var21 = 6;
            var28 = var17[var21];
            var28 = var24.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var17[var21];
            var28 = var24.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.PDTjLC;
            var28 = var29.bind(var30)(var28);
            var12['text'] = var28;
            var28 = 'primary';
            var12['variant'] = var28;
            var28 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.dismissGlobalKeyboard;
                    var2 = var2.bind(var4)();
 35: // try_start_0
                    var5 = _closure2_slot11;
                    var4 = null;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot0;
                    var4 = var4.name;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0003_ip = 121; continue _fun0003 }
 69:
                    var5 = _closure2_slot12;
                    var4 = var5.navigate;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 13;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.EditGuildEventScreens;
                    var2 = var2.PREVIEW;
                    var2 = var4.bind(var5)(var2);
 116: // try_end0
                    _fun0003_ip = 269; continue _fun0003;
 121: // try_start_1
                    var2 = global;
                    var5 = var2.Error;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 6;
                    var4 = var8[var2];
                    var4 = var7.bind(var1)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.GoV0ub;
                    var9 = var4.bind(var6)(var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var10 = var4;
                    var2 = new var10[var5](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
 208: // try_end1 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    var5 = _closure2_slot11;
                    var4 = var2.message;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 14;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = var2.message;
                    var2 = var3.bind(var4)(var2);
 269:
                    return var1;
                }
            };
            var12['onPress'] = var28;
            var27 = var10 != var27;
            var12['disabled'] = var27;
            var12 = var14.bind(var4)(var13, var12);
            var7[1] = var12;
            var1['children'] = var7;
            var12 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var7 = _closure1_slot1;
            var1 = 15;
            var1 = var17[var1];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var1['action'] = var12;
            var1['ref'] = var5;
            var5 = 16;
            var5 = var17[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var12 = var17[var21];
            var12 = var24.bind(var4)(var12);
            var27 = var12.intl;
            var13 = var27.string;
            var12 = var17[var21];
            var12 = var24.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.GG6vbm;
            var12 = var13.bind(var27)(var12);
            var5['title'] = var12;
            var12 = var17[var21];
            var12 = var24.bind(var4)(var12);
            var27 = var12.intl;
            var13 = var27.string;
            var12 = var17[var21];
            var12 = var24.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.q5lgwc;
            var12 = var13.bind(var27)(var12);
            var5['subtitle'] = var12;
            var7 = var14.bind(var4)(var7, var5);
            var5 = new Array(6);
            var5[0] = var7;
            var12 = 17;
            var7 = var17[var12];
            var7 = var24.bind(var4)(var7);
            var13 = var7.GuildEventTopic;
            var7 = {};
            var7['topic'] = var26;
            var26 = function onChange(arg1) {
                var3 = _closure2_slot13;
                var2 = {};
                var1 = arg1;
                var2['name'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onChange'] = var26;
            var7 = var14.bind(var4)(var13, var7);
            var5[1] = var7;
            var7 = var17[var12];
            var7 = var24.bind(var4)(var7);
            var13 = var7.GuildEventDatetime;
            var7 = {};
            var7['date'] = var16;
            var26 = function onChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var2 = _closure2_slot10;
                    if(var2) { _fun0004_ip = 206; continue _fun0004 }
 16:
                    var4 = {};
                    var2 = var6.toISOString;
                    var2 = var2.bind(var6)();
                    var4['scheduledStartTime'] = var2;
                    var2 = _closure2_slot3;
                    var5 = null;
                    var2 = var5 != var2;
                    if(!var2) { _fun0004_ip = 61; continue _fun0004 }
 46:
                    var7 = _closure2_slot6;
                    var3 = var7.isBefore;
                    var2 = var3.bind(var7)(var6);
 61:
                    if(!var2) { _fun0004_ip = 128; continue _fun0004 }
 64:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var8 = var2.bind(var3)(var6);
                    var7 = var8.add;
                    var3 = 1;
                    var2 = 'hour';
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = var3.toISOString;
                    var2 = var2.bind(var3)();
                    var4['scheduledEndTime'] = var2;
 128:
                    var2 = var5 != var6;
                    if(!var2) { _fun0004_ip = 143; continue _fun0004 }
 135:
                    var3 = _closure2_slot7;
                    var2 = var5 != var3;
 143:
                    if(!var2) { _fun0004_ip = 193; continue _fun0004 }
 146:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.recurrenceOptionToRecurrenceRule;
                    var2 = _closure2_slot7;
                    var2 = var3.bind(var5)(var2, var6);
                    var4['recurrenceRule'] = var2;
 193:
                    var3 = _closure2_slot13;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    return var2;
 206:
                    var3 = _closure2_slot11;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 6;
                    var4 = var7[var1];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.t;
                    var1 = var1.nKIaRE;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var7['onChange'] = var26;
            var7['disabled'] = var25;
            var7['minimumDate'] = var23;
            var7['maximumDate'] = var20;
            var20 = var17[var21];
            var20 = var24.bind(var4)(var20);
            var25 = var20.intl;
            var23 = var25.string;
            var20 = var17[var21];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.kKOIwM;
            var20 = var23.bind(var25)(var20);
            var7['dateLabel'] = var20;
            var20 = var17[var21];
            var20 = var24.bind(var4)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var17 = var17[var21];
            var17 = var24.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.6dGmCA;
            var17 = var20.bind(var23)(var17);
            var7['timeLabel'] = var17;
            var7 = var14.bind(var4)(var13, var7);
            var5[2] = var7;
            var7 = _closure1_slot7;
            var7 = var7.EXTERNAL;
            var7 = var8 === var7;
            if(!var7) { _fun0001_ip = 1142; continue _fun0001 }
 984:
            var14 = _closure1_slot8;
            var20 = _closure1_slot0;
            var17 = _closure1_slot3;
            var8 = var17[var12];
            var8 = var20.bind(var4)(var8);
            var13 = var8.GuildEventDatetime;
            var8 = {};
            var8['date'] = var22;
            var22 = function onChange(arg1) {
                var4 = arg1;
                var3 = _closure2_slot13;
                var2 = {};
                var1 = var4.toISOString;
                var1 = var1.bind(var4)();
                var2['scheduledEndTime'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onChange'] = var22;
            var8['minimumDate'] = var19;
            var8['maximumDate'] = var18;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var22 = var18.intl;
            var19 = var22.string;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.CTLgZG;
            var18 = var19.bind(var22)(var18);
            var8['dateLabel'] = var18;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.j2RuXF;
            var17 = var18.bind(var19)(var17);
            var8['timeLabel'] = var17;
            var7 = var14.bind(var4)(var13, var8);
 1142:
            var5[3] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var13 = var6[var12];
            var13 = var7.bind(var4)(var13);
            var14 = var13.GuildEventRecurrence;
            var13 = {};
            var13['startDate'] = var16;
            var13['recurrenceRule'] = var15;
            var15 = function onRecurrenceChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 82; continue _fun0005 }
 16:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 8;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.recurrenceOptionToRecurrenceRule;
                    var4 = _closure2_slot5;
                    var6 = var5.bind(var6)(var3, var4);
                    var5 = _closure2_slot1;
                    var4 = {};
                    var4['recurrenceRule'] = var6;
                    var4 = var5.bind(var2)(var4);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var2)(var3);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onRecurrenceChange'] = var15;
            var13 = var8.bind(var4)(var14, var13);
            var5[4] = var13;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GuildEventDescription;
            var6 = {};
            var12 = var10 != var11;
            var10 = '';
            if(!var12) { _fun0001_ip = 1236; continue _fun0001 }
 1233:
            var10 = var11;
 1236:
            var6['description'] = var10;
            var10 = function onChange(arg1) {
                var3 = _closure2_slot13;
                var2 = {};
                var1 = arg1;
                var2['description'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onChange'] = var10;
            var9 = function onFocus() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot9;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 37; continue _fun0006 }
 18:
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = var2.scrollToEnd;
                        var1 = var1.bind(var2)();
 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onFocus'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();