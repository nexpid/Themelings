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
            var15 = var1.initialGuildEvent;
            var3 = var1.onChange;
            var _closure2_slot1 = var3;
            var9 = var1.editBroadcastInfoData;
            var1 = _closure1_slot11;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var27 = var2.name;
            var14 = var2.description;
            var8 = var2.entityType;
            var1 = var2.scheduledStartTime;
            var _closure2_slot2 = var1;
            var5 = var2.scheduledEndTime;
            var _closure2_slot3 = var5;
            var17 = var2.recurrenceRule;
            var _closure2_slot4 = var17;
            var11 = _closure1_slot5;
            var7 = var11.useMemo;
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
            var18 = var7.bind(var11)(var2, var3);
            var _closure2_slot5 = var18;
            var3 = var11.useMemo;
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
            var23 = var3.bind(var11)(var1, var2);
            var _closure2_slot6 = var23;
            var2 = var11.useState;
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
            var1 = var2.bind(var11)(var1);
            var10 = _closure1_slot4;
            var7 = 2;
            var1 = var10.bind(var4)(var1, var7);
            var3 = 0;
            var2 = var1[var3];
            var _closure2_slot7 = var2;
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot8 = var1;
            var13 = var11.useMemo;
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
            var24 = var13.bind(var11)(var5, var1);
            var13 = var11.useMemo;
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
            var21 = var13.bind(var11)(var5, var1);
            var13 = var11.useMemo;
            var5 = new Array(1);
            var5[0] = var18;
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
            var20 = var13.bind(var11)(var1, var5);
            var13 = var11.useMemo;
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
            var19 = var13.bind(var11)(var5, var1);
            var1 = var11.useRef;
            var13 = null;
            var5 = var1.bind(var11)(var13);
            var _closure2_slot9 = var5;
            var1 = _closure1_slot6;
            var26 = var1.bind(var4)(var15);
            var _closure2_slot10 = var26;
            var1 = var11.useState;
            var1 = var1.bind(var11)(var13);
            var1 = var10.bind(var4)(var1, var7);
            var28 = var1[var3];
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
            var7 = var13 != var28;
            var10 = null;
            if(!var7) { _fun0001_ip = 476; continue _fun0001 }
 412:
            var15 = _closure1_slot8;
            var11 = _closure1_slot0;
            var22 = _closure1_slot3;
            var7 = 10;
            var7 = var22[var7];
            var7 = var11.bind(var4)(var7);
            var11 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-danger'};
            var16 = var16.error;
            var7['style'] = var16;
            var7['children'] = var28;
            var10 = var15.bind(var4)(var11, var7);
 476:
            var7 = new Array(2);
            var7[0] = var10;
            var15 = _closure1_slot8;
            var25 = _closure1_slot0;
            var16 = _closure1_slot3;
            var10 = 11;
            var10 = var16[var10];
            var10 = var25.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var22 = 6;
            var29 = var16[var22];
            var29 = var25.bind(var4)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = var16[var22];
            var29 = var25.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.PDTjLC;
            var29 = var30.bind(var31)(var29);
            var10['text'] = var29;
            var29 = 'primary';
            var10['variant'] = var29;
            var29 = function onPress() {
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
            var10['onPress'] = var29;
            var28 = var13 != var28;
            var10['disabled'] = var28;
            var10 = var15.bind(var4)(var11, var10);
            var7[1] = var10;
            var1['children'] = var7;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var7 = _closure1_slot1;
            var1 = 15;
            var1 = var16[var1];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var1['action'] = var10;
            var1['ref'] = var5;
            var5 = 16;
            var5 = var16[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var10 = var16[var22];
            var10 = var25.bind(var4)(var10);
            var28 = var10.intl;
            var11 = var28.string;
            var10 = var16[var22];
            var10 = var25.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.GG6vbm;
            var10 = var11.bind(var28)(var10);
            var5['title'] = var10;
            var10 = var16[var22];
            var10 = var25.bind(var4)(var10);
            var28 = var10.intl;
            var11 = var28.string;
            var10 = var16[var22];
            var10 = var25.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.q5lgwc;
            var10 = var11.bind(var28)(var10);
            var5['subtitle'] = var10;
            var7 = var15.bind(var4)(var7, var5);
            var5 = new Array(7);
            var5[0] = var7;
            var10 = 17;
            var7 = var16[var10];
            var7 = var25.bind(var4)(var7);
            var11 = var7.GuildEventTopic;
            var7 = {};
            var7['topic'] = var27;
            var27 = function onChange(arg1) {
                var3 = _closure2_slot13;
                var2 = {};
                var1 = arg1;
                var2['name'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onChange'] = var27;
            var7 = var15.bind(var4)(var11, var7);
            var5[1] = var7;
            var7 = var16[var10];
            var7 = var25.bind(var4)(var7);
            var11 = var7.GuildEventDatetime;
            var7 = {};
            var7['date'] = var18;
            var27 = function onChange(arg1) {
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
            var7['onChange'] = var27;
            var7['disabled'] = var26;
            var7['minimumDate'] = var24;
            var7['maximumDate'] = var21;
            var21 = var16[var22];
            var21 = var25.bind(var4)(var21);
            var26 = var21.intl;
            var24 = var26.string;
            var21 = var16[var22];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.kKOIwM;
            var21 = var24.bind(var26)(var21);
            var7['dateLabel'] = var21;
            var21 = var16[var22];
            var21 = var25.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var16 = var16[var22];
            var16 = var25.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.6dGmCA;
            var16 = var21.bind(var24)(var16);
            var7['timeLabel'] = var16;
            var7 = var15.bind(var4)(var11, var7);
            var5[2] = var7;
            var7 = _closure1_slot7;
            var7 = var7.EXTERNAL;
            var7 = var8 === var7;
            if(!var7) { _fun0001_ip = 1148; continue _fun0001 }
 990:
            var15 = _closure1_slot8;
            var21 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = var16[var10];
            var8 = var21.bind(var4)(var8);
            var11 = var8.GuildEventDatetime;
            var8 = {};
            var8['date'] = var23;
            var23 = function onChange(arg1) {
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
            var8['onChange'] = var23;
            var8['minimumDate'] = var20;
            var8['maximumDate'] = var19;
            var19 = var16[var22];
            var19 = var21.bind(var4)(var19);
            var23 = var19.intl;
            var20 = var23.string;
            var19 = var16[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.CTLgZG;
            var19 = var20.bind(var23)(var19);
            var8['dateLabel'] = var19;
            var19 = var16[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var16 = var16[var22];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.j2RuXF;
            var16 = var19.bind(var20)(var16);
            var8['timeLabel'] = var16;
            var7 = var15.bind(var4)(var11, var8);
 1148:
            var5[3] = var7;
            var11 = _closure1_slot8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var15 = var7[var10];
            var15 = var8.bind(var4)(var15);
            var16 = var15.GuildEventRecurrence;
            var15 = {};
            var15['startDate'] = var18;
            var15['recurrenceRule'] = var17;
            var17 = function onRecurrenceChange(arg1) {
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
            var15['onRecurrenceChange'] = var17;
            var15 = var11.bind(var4)(var16, var15);
            var5[4] = var15;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GuildEventDescription;
            var7 = {};
            var15 = var13 != var14;
            var13 = '';
            if(!var15) { _fun0001_ip = 1242; continue _fun0001 }
 1239:
            var13 = var14;
 1242:
            var7['description'] = var13;
            var13 = function onChange(arg1) {
                var3 = _closure2_slot13;
                var2 = {};
                var1 = arg1;
                var2['description'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onChange'] = var13;
            var12 = function onFocus() {
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
            var7['onFocus'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[5] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GuildEventBroadcastInfoSettings;
            var6 = {};
            var6['editBroadcastInfoData'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();