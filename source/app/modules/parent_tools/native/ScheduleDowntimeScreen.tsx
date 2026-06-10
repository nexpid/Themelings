// app/modules/parent_tools/native/ScheduleDowntimeScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function openTimePicker(arg1, arg2, arg3, arg4) {
        var7 = arg3;
        var1 = arg4;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var5 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.openLazy;
        var8 = _closure1_slot0;
        var4 = 9;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 8;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = {};
        var8 = arg2;
        var3['title'] = var8;
        var8 = 'time';
        var3['mode'] = var8;
        var8 = global;
        var13 = var8.Date;
        var17 = var7.hours;
        var16 = var7.minutes;
        var7 = var13.prototype;
        var8 = Object.create(var7, {constructor: {value: var13}});
        var20 = 2025;
        var18 = 1;
        var21 = var8;
        var19 = 0;
        var15 = 0;
        var14 = 0;
        var7 = new var21[var13](var20, var19, var18, var17, var16, var15, var14, var13);
        var7 = var7 instanceof Object ? var7 : var8;
        var3['startDate'] = var7;
        var2 = function onSubmit(arg1) {
            var4 = arg1;
            var3 = _closure2_slot0;
            var2 = {};
            var1 = var4.hours;
            var1 = var1.bind(var4)();
            var2['hours'] = var1;
            var1 = var4.minutes;
            var1 = var1.bind(var4)();
            var2['minutes'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3['onSubmit'] = var2;
        var2 = arg1;
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function OverlappingSchedulesWarning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.conflictingEntries;
            var3 = var15.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 12;
            var2 = var13[var6];
            var4 = undefined;
            var2 = var11.bind(var4)(var2);
            var3 = var2.HelpMessage;
            var2 = {};
            var6 = var13[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.HelpMessageTypes;
            var6 = var6.WARNING;
            var2['messageType'] = var6;
            var20 = _closure1_slot1;
            var6 = 11;
            var6 = var13[var6];
            var6 = var20.bind(var4)(var6);
            var6 = var6.radii;
            var6 = var6.md;
            var2['borderRadius'] = var6;
            var8 = _closure1_slot12;
            var10 = 13;
            var6 = var13[var10];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var9 = 8;
            var6['spacing'] = var9;
            var16 = _closure1_slot11;
            var9 = 14;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var14 = var9.Text;
            var9 = {};
            var17 = 'text-sm/medium';
            var9['variant'] = var17;
            var17 = 15;
            var17 = var13[var17];
            var17 = var11.bind(var4)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = 16;
            var17 = var13[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17["26A0Df"];
            var17 = var18.bind(var19)(var17);
            var9['children'] = var17;
            var14 = var16.bind(var4)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var12 = _closure1_slot11;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Stack;
            var10 = {};
            var13 = 4;
            var10['spacing'] = var13;
            var14 = var15.map;
            var13 = function(arg1) {
                var1 = arg1;
                var5 = var1.dayLabel;
                var9 = var1.timeRange;
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var6 = 'text-sm/medium';
                var1['variant'] = var6;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var7 = '';
                var6 = '  ';
                var6 = var8.bind(var7)(var5, var6, var9);
                var1['children'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var7 = var4.Pressable;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['gap'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['section'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['sectionHeader'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['daysContainer'] = var9;
    var9 = {'flex': 1, 'aspectRatio': 1, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderWidth': 1, 'borderColor': 'transparent'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['dayButton'] = var9;
    var9 = {'backgroundColor': 'rgba(88, 101, 242, 0.16)', 'borderColor': 'rgba(88, 101, 242, 1)'};
    var4['dayButtonSelected'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['marginTop'] = var12;
    var4['overlapWarningContent'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingVertical'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/ScheduleDowntimeScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ScheduleDowntimeScreen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot13;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var _closure2_slot0 = var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useStackNavigation;
            var9 = var1.bind(var4)();
            var _closure2_slot1 = var9;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useSettingNavigationRoute;
            var1 = var1.bind(var2)();
            var3 = var1.params;
            var1 = null;
            var2 = var1 == var3;
            var12 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var12 = var3.rule;
case 4:
            var _closure2_slot2 = var12;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getShortDayLabels;
                var1 = 'narrow';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var6.bind(var7)(var4, var2);
            var _closure2_slot3 = var2;
            var6 = var7.useMemo;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getShortDayLabels;
                var1 = 'short';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var11 = var6.bind(var7)(var4, var2);
            var _closure2_slot4 = var11;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3.teenId;
case 6:
            var _closure2_slot5 = var2;
            var22 = var1 != var12;
            var _closure2_slot6 = var22;
            var6 = _closure1_slot5;
            var4 = var6.useState;
            var3 = var1 == var12;
            var7 = undefined;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var12.enabled;
case 8:
            var3 = var1 == var7;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var7;
case 10:
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot4;
            var16 = 2;
            var3 = var3.bind(var5)(var4, var16);
            var26 = 0;
            var30 = var3[var26];
            var _closure2_slot7 = var30;
            var7 = 1;
            var3 = var3[var7];
            var _closure2_slot8 = var3;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 20;
            var3 = var4[var3];
            var10 = var6.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure1_slot9;
                    var3 = var4.getUser;
                    var1 = _closure2_slot5;
                    var3 = var3.bind(var4)(var1);
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = var3.restrictedSchedule;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                    var1 = var3.rules;
case 14:
                    if(!(var2 == var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var1 = new Array(0);
case 17:
                    _fun0003_ip = 19; continue _fun0003;
case 12:
                    var1 = new Array(0);
case 19:
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var6, var3);
            var _closure2_slot9 = var3;
            var6 = _closure1_slot1;
            var8 = 21;
            var4 = var4[var8];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var14 = var1 == var12;
            var10 = undefined;
            if(var14) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = var12.startTime;
case 20:
            var14 = var1 != var10;
            var10 = null;
            if(!var14) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var14 = {};
            var17 = var12.startTime;
            var17 = var17.hours;
            var14['hours'] = var17;
            var17 = var12.startTime;
            var18 = var17.minutes;
            var20 = var1 != var18;
            var17 = 0;
            if(!var20) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var17 = var18;
case 24:
            var14['minutes'] = var17;
            var14['seconds'] = var26;
            var14['nanos'] = var26;
            var10 = var14;
case 22:
            var4['initial'] = var10;
            var10 = {'hours': 22, 'minutes': 0};
            var4['defaultValue'] = var10;
            var6 = var6.bind(var5)(var4);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var6, var16);
            var47 = var4[var26];
            var _closure2_slot10 = var47;
            var4 = var4[var7];
            var _closure2_slot11 = var4;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var10 = var1 == var12;
            var8 = undefined;
            if(var10) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var8 = var12.endTime;
case 26:
            var10 = var1 != var8;
            var8 = null;
            if(!var10) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var10 = {};
            var14 = var12.endTime;
            var14 = var14.hours;
            var10['hours'] = var14;
            var14 = var12.endTime;
            var17 = var14.minutes;
            var18 = var1 != var17;
            var14 = 0;
            if(!var18) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var14 = var17;
case 30:
            var10['minutes'] = var14;
            var10['seconds'] = var26;
            var10['nanos'] = var26;
            var8 = var10;
case 28:
            var4['initial'] = var8;
            var8 = {'hours': 7, 'minutes': 0};
            var4['defaultValue'] = var8;
            var6 = var6.bind(var5)(var4);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var6, var16);
            var46 = var4[var26];
            var _closure2_slot12 = var46;
            var4 = var4[var7];
            var _closure2_slot13 = var4;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var4 = global;
            var14 = var4.Set;
            var10 = var1 == var12;
            var4 = undefined;
            if(var10) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = var12.days;
case 32:
            var10 = var14.prototype;
            var10 = Object.create(var10, {constructor: {value: var14}});
            var50 = var10;
            var49 = var4;
            var4 = new var50[var14](var49, var48);
            var4 = var4 instanceof Object ? var4 : var10;
            var4 = var6.bind(var8)(var4);
            var14 = _closure1_slot4;
            var4 = var14.bind(var5)(var4, var16);
            var6 = var4[var26];
            var _closure2_slot14 = var6;
            var4 = var4[var7];
            var _closure2_slot15 = var4;
            var8 = _closure1_slot5;
            var4 = var8.useState;
            var10 = false;
            var4 = var4.bind(var8)(var10);
            var4 = var14.bind(var5)(var4, var16);
            var18 = var4[var26];
            var _closure2_slot16 = var18;
            var4 = var4[var7];
            var _closure2_slot17 = var4;
            var7 = var8.useMemo;
            var4 = new Array(3);
            var4[0] = var22;
            var16 = var1 == var12;
            var14 = undefined;
            if(var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var14 = var12.ruleId;
case 34:
            var4[1] = var14;
            var4[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var1 = _closure2_slot2;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 3:
                    var4 = _closure2_slot2;
                    var1 = var4.ruleId;
case 38:
                    if(!(var3 == var1)) { _fun0004_ip = 39; continue _fun0004 }
case 36:
                    var1 = _closure2_slot9;
                    _fun0004_ip = 40; continue _fun0004;
case 39:
                    var4 = _closure2_slot9;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.ruleId;
                        var1 = _closure2_slot2;
                        var1 = var1.ruleId;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var _closure2_slot18 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var4 = new Array(3);
            var4[0] = var11;
            var4[1] = var3;
            var4[2] = var6;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.computeOverlappingInfo;
                var3 = _closure2_slot14;
                var2 = _closure2_slot18;
                var1 = _closure2_slot4;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var33 = var7.bind(var8)(var3, var4);
            var7 = var8.useCallback;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 37:
                        var5 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                        var2 = _closure2_slot5;
                        var8 = null;
                        if(!(var8 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                        var2 = _closure2_slot2;
                        var4 = var8 == var2;
                        var2 = undefined;
                        if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 39:
                        var4 = _closure2_slot2;
                        var2 = var4.ruleId;
case 44:
                        if(!(var8 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 45:
                        var4 = _closure2_slot17;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 17: // try_start_0
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 22;
                        var2 = var10[var2];
                        var11 = var6.bind(var5)(var2);
                        var10 = var11.deleteRestrictedScheduleRule;
                        var6 = _closure2_slot5;
                        var2 = _closure2_slot2;
                        var2 = var2.ruleId;
                        var2 = var10.bind(var11)(var6, var2);
                        SaveGenerator(address=126);
case 46:
                        return var2;
case 47:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                        var11 = _closure1_slot9;
                        var10 = var11.getUser;
                        var6 = _closure2_slot5;
                        var6 = var10.bind(var11)(var6);
                        var9 = var6;
                        var10 = var8 == var6;
                        var6 = undefined;
                        if(var10) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                        var10 = var9;
                        var10 = var10.restrictedSchedule;
                        var9 = var10;
                        var10 = var8 == var10;
                        var6 = undefined;
                        if(var10) { _fun0005_ip = 50; continue _fun0005 }
case 52:
                        var6 = var9.rules;
case 50:
                        var7 = var6;
                        if(!(var8 == var6)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                        var6 = new Array(0);
                        _fun0005_ip = 55; continue _fun0005;
case 53:
                        var6 = var7;
case 55:
                        var7 = var6.length;
                        var6 = 0;
                        if(!(var6 !== var7)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                        var7 = _closure2_slot1;
                        var6 = var7.goBack;
                        var6 = var6.bind(var7)();
                        _fun0005_ip = 58; continue _fun0005;
case 56:
                        var7 = _closure2_slot1;
                        var6 = var7.navigate;
                        var4 = _closure1_slot10;
                        var4 = var4.FAMILY_CENTER;
                        var4 = var6.bind(var7)(var4);
case 58: // try_end0
                        var6 = _closure2_slot17;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 42:
                        return var5;
case 48:
                        var6 = _closure2_slot17;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 59: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot17;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 41:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = new Array(3);
            var3[0] = var2;
            var14 = var1 == var12;
            var11 = undefined;
            if(var14) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var11 = var12.ruleId;
case 60:
            var3[1] = var11;
            var3[2] = var9;
            var3 = var7.bind(var8)(var4, var3);
            var _closure2_slot19 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useLayoutEffect;
            var4 = new Array(4);
            var4[0] = var9;
            var4[1] = var22;
            var4[2] = var3;
            var4[3] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 37:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerRight() {
                        var4 = _closure1_slot11;
                        var3 = _closure1_slot7;
                        var2 = {};
                        var1 = _closure2_slot19;
                        var2['onPress'] = var1;
                        var1 = 'button';
                        var2['accessibilityRole'] = var1;
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 15;
                        var9 = var10[var7];
                        var1 = undefined;
                        var9 = var6.bind(var1)(var9);
                        var11 = var9.intl;
                        var9 = var11.string;
                        var7 = var10[var7];
                        var7 = var6.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.oyYWHE;
                        var7 = var9.bind(var11)(var7);
                        var2['accessibilityLabel'] = var7;
                        var7 = 8;
                        var2['hitSlop'] = var7;
                        var5 = _closure2_slot16;
                        var2['disabled'] = var5;
                        var7 = _closure1_slot11;
                        var5 = 23;
                        var5 = var10[var5];
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.TrashIcon;
                        var5 = {};
                        var9 = _closure1_slot1;
                        var8 = 11;
                        var8 = var10[var8];
                        var8 = var9.bind(var1)(var8);
                        var8 = var8.colors;
                        var8 = var8.ICON_FEEDBACK_CRITICAL;
                        var5['color'] = var8;
                        var8 = 'md';
                        var5['size'] = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var31 = 19;
            var3 = var7[var31];
            var4 = var8.bind(var5)(var3);
            var3 = var4.timeToMinutes;
            var4 = var3.bind(var4)(var47);
            var3 = var7[var31];
            var9 = var8.bind(var5)(var3);
            var3 = var9.timeToMinutes;
            var3 = var3.bind(var9)(var46);
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0007_ip = 63; continue _fun0007 }
case 37:
                            var5 = undefined;
                            var2 = undefined;
                            var4 = _closure2_slot5;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                            var6 = _closure2_slot17;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 62: // try_start_0
                            var6 = {};
                            var4 = '';
                            var6['label'] = var4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 19;
                            var11 = var10[var8];
                            var13 = var9.bind(var5)(var11);
                            var12 = var13.toTimeProto;
                            var11 = _closure2_slot10;
                            var11 = var12.bind(var13)(var11);
                            var6['start_time'] = var11;
                            var8 = var10[var8];
                            var10 = var9.bind(var5)(var8);
                            var9 = var10.toTimeProto;
                            var8 = _closure2_slot12;
                            var8 = var9.bind(var10)(var8);
                            var6['end_time'] = var8;
                            var8 = global;
                            var10 = var8.Array;
                            var9 = var10.from;
                            var8 = _closure2_slot14;
                            var8 = var9.bind(var10)(var8);
                            var6['days'] = var8;
                            var8 = _closure2_slot7;
                            var6['enabled'] = var8;
                            var2 = var6;
                            var6 = _closure2_slot6;
                            if(!var6) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                            var6 = _closure2_slot2;
                            var8 = var7 == var6;
                            var6 = undefined;
                            if(var8) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                            var8 = _closure2_slot2;
                            var6 = var8.ruleId;
case 68:
                            if(!(var7 == var6)) { _fun0007_ip = 70; continue _fun0007 }
case 66:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 22;
                            var6 = var8[var6];
                            var9 = var7.bind(var5)(var6);
                            var8 = var9.addRestrictedScheduleRule;
                            var7 = _closure2_slot5;
                            var6 = var2;
                            var6 = var8.bind(var9)(var7, var6);
                            SaveGenerator(address=238);
case 56:
                            return var6;
case 71:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(!var7) { _fun0007_ip = 72; continue _fun0007 }
case 73: // try_end0
                            var8 = _closure2_slot17;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
                            return var6;
case 70: // try_start_1
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 22;
                            var4 = var7[var4];
                            var8 = var6.bind(var5)(var4);
                            var7 = var8.updateRestrictedScheduleRule;
                            var6 = _closure2_slot5;
                            var4 = _closure2_slot2;
                            var4 = var4.ruleId;
                            var2 = var7.bind(var8)(var6, var4, var2);
                            SaveGenerator(address=309);
case 74:
                            return var2;
case 75:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0007_ip = 76; continue _fun0007 }
case 72:
                            var6 = _closure2_slot1;
                            var4 = var6.goBack;
                            var4 = var4.bind(var6)();
case 2: // try_end1
                            var6 = _closure2_slot17;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
case 64:
                            return var5;
case 76:
                            var6 = _closure2_slot17;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 77: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot17;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 63:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var21 = var9.bind(var5)();
            var11 = {};
            var9 = var7[var31];
            var12 = var8.bind(var5)(var9);
            var9 = var12.formatTime;
            var9 = var9.bind(var12)(var47);
            var11['startTime'] = var9;
            var7 = var7[var31];
            var8 = var8.bind(var5)(var7);
            var7 = var8.formatTime;
            var7 = var7.bind(var8)(var46);
            var11['endTime'] = var7;
            var7 = function timeHook(arg1, arg2) {
                var5 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-default'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var11['timeHook'] = var7;
            if(!(!(var4 > var3))) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.format;
            var12 = _closure1_slot1;
            var7 = 16;
            var7 = var14[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.vX7xid;
            var36 = var8.bind(var9)(var7, var11);
            _fun0002_ip = 80; continue _fun0002;
case 78:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.format;
            var12 = _closure1_slot1;
            var7 = 16;
            var7 = var14[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.R87Y2K;
            var36 = var8.bind(var9)(var7, var11);
case 80:
            var6 = var6.size;
            var17 = var6 > var26;
            if(!var17) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var17 = var4 !== var3;
case 81:
            if(!var17) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var17 = !var18;
case 83:
            var2 = var1 == var2;
            var1 = null;
            if(var2) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var4 = _closure1_slot12;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var13.container;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot8;
            var6 = {};
            var11 = _closure1_slot12;
            var9 = {};
            var12 = var13.scrollContent;
            var9['style'] = var12;
            var16 = _closure1_slot11;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var32 = 14;
            var12 = var20[var32];
            var12 = var25.bind(var5)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var24 = 15;
            var23 = var20[var24];
            var23 = var25.bind(var5)(var23);
            var25 = var23.intl;
            var23 = var25.string;
            var27 = _closure1_slot1;
            var28 = 16;
            var20 = var20[var28];
            var20 = var27.bind(var5)(var20);
            var20 = var20.AcJ4ke;
            var20 = var23.bind(var25)(var20);
            var12['children'] = var20;
            var14 = var16.bind(var5)(var14, var12);
            var12 = new Array(4);
            var12[0] = var14;
            var14 = var22;
            if(!var14) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var23 = _closure1_slot11;
            var37 = _closure1_slot0;
            var34 = _closure1_slot2;
            var16 = 24;
            var16 = var34[var16];
            var16 = var37.bind(var5)(var16);
            var20 = var16.TableRowGroup;
            var16 = {};
            var16['hasIcons'] = var10;
            var29 = _closure1_slot11;
            var25 = 25;
            var25 = var34[var25];
            var25 = var37.bind(var5)(var25);
            var27 = var25.TableSwitchRow;
            var25 = {};
            var35 = var34[var24];
            var35 = var37.bind(var5)(var35);
            var37 = var35.intl;
            var35 = var37.string;
            var38 = _closure1_slot1;
            var34 = var34[var28];
            var34 = var38.bind(var5)(var34);
            var34 = var34["30Owsd"];
            var34 = var35.bind(var37)(var34);
            var25['label'] = var34;
            var25['value'] = var30;
            var30 = function onValueChange() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var25['onValueChange'] = var30;
            var25 = var29.bind(var5)(var27, var25);
            var16['children'] = var25;
            var14 = var23.bind(var5)(var20, var16);
case 87:
            var12[1] = var14;
            var16 = _closure1_slot12;
            var20 = _closure1_slot6;
            var14 = {};
            var23 = var13.section;
            var14['style'] = var23;
            var27 = _closure1_slot11;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var32];
            var23 = var30.bind(var5)(var23);
            var25 = var23.Text;
            var23 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var34 = var29[var24];
            var34 = var30.bind(var5)(var34);
            var37 = var34.intl;
            var35 = var37.string;
            var40 = _closure1_slot1;
            var34 = var29[var28];
            var34 = var40.bind(var5)(var34);
            var34 = var34["37z4a2"];
            var34 = var35.bind(var37)(var34);
            var23['children'] = var34;
            var25 = var27.bind(var5)(var25, var23);
            var23 = new Array(2);
            var23[0] = var25;
            var34 = _closure1_slot12;
            var25 = 24;
            var25 = var29[var25];
            var25 = var30.bind(var5)(var25);
            var27 = var25.TableRowGroup;
            var25 = {};
            var25['hasIcons'] = var10;
            var39 = _closure1_slot11;
            var37 = 26;
            var10 = var29[var37];
            var10 = var30.bind(var5)(var10);
            var38 = var10.TableRow;
            var35 = {};
            var10 = var29[var24];
            var10 = var30.bind(var5)(var10);
            var42 = var10.intl;
            var41 = var42.string;
            var10 = var29[var28];
            var10 = var40.bind(var5)(var10);
            var10 = var10.DsXytO;
            var10 = var41.bind(var42)(var10);
            var35['label'] = var10;
            var42 = _closure1_slot11;
            var10 = var29[var32];
            var10 = var30.bind(var5)(var10);
            var41 = var10.Text;
            var10 = {};
            var44 = 'text-md/normal';
            var10['variant'] = var44;
            var43 = var29[var31];
            var45 = var30.bind(var5)(var43);
            var43 = var45.formatTime;
            var43 = var43.bind(var45)(var47);
            var10['children'] = var43;
            var10 = var42.bind(var5)(var41, var10);
            var35['trailing'] = var10;
            var10 = true;
            var35['arrow'] = var10;
            var41 = function onPress() {
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var5 = _closure1_slot1;
                var2 = 16;
                var2 = var7[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2["8bLRt0"];
                var10 = var3.bind(var4)(var2);
                var9 = _closure2_slot10;
                var11 = 'ScheduleDowntimeStartTimePicker';
                var8 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot11;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.timeToMinutes;
                    var4 = var3.bind(var4)(var5);
                    var3 = 540;
                    var4 = var4 + var3;
                    var3 = 1440;
                    var5 = var4 % var3;
                    var3 = _closure2_slot13;
                    var2 = {};
                    var4 = global;
                    var8 = var4.Math;
                    var7 = var8.floor;
                    var4 = 60;
                    var6 = var5 / var4;
                    var6 = var7.bind(var8)(var6);
                    var2['hours'] = var6;
                    var4 = var5 % var4;
                    var2['minutes'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var12 = undefined;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var35['onPress'] = var41;
            var38 = var39.bind(var5)(var38, var35);
            var35 = new Array(2);
            var35[0] = var38;
            var39 = _closure1_slot11;
            var37 = var29[var37];
            var37 = var30.bind(var5)(var37);
            var38 = var37.TableRow;
            var37 = {};
            var41 = var29[var24];
            var41 = var30.bind(var5)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var29[var28];
            var41 = var40.bind(var5)(var41);
            var41 = var41["5SHDP6"];
            var41 = var42.bind(var43)(var41);
            var37['label'] = var41;
            var43 = _closure1_slot11;
            var41 = var29[var32];
            var41 = var30.bind(var5)(var41);
            var42 = var41.Text;
            var41 = {};
            var41['variant'] = var44;
            var44 = var29[var31];
            var45 = var30.bind(var5)(var44);
            var44 = var45.formatTime;
            var44 = var44.bind(var45)(var46);
            var41['children'] = var44;
            var41 = var43.bind(var5)(var42, var41);
            var37['trailing'] = var41;
            var37['arrow'] = var10;
            var41 = function onPress() {
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var5 = _closure1_slot1;
                var2 = 16;
                var2 = var7[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2["+JkWJV"];
                var10 = var3.bind(var4)(var2);
                var9 = _closure2_slot12;
                var8 = _closure2_slot13;
                var11 = 'ScheduleDowntimeEndTimePicker';
                var12 = undefined;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var37['onPress'] = var41;
            var37 = var39.bind(var5)(var38, var37);
            var35[1] = var37;
            var25['children'] = var35;
            var25 = var34.bind(var5)(var27, var25);
            var23[1] = var25;
            var14['children'] = var23;
            var14 = var16.bind(var5)(var20, var14);
            var12[2] = var14;
            var16 = _closure1_slot12;
            var14 = {};
            var23 = var13.section;
            var14['style'] = var23;
            var25 = _closure1_slot12;
            var23 = {};
            var27 = var13.sectionHeader;
            var23['style'] = var27;
            var35 = _closure1_slot11;
            var27 = var29[var32];
            var27 = var30.bind(var5)(var27);
            var34 = var27.Text;
            var27 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var37 = var29[var24];
            var37 = var30.bind(var5)(var37);
            var39 = var37.intl;
            var38 = var39.string;
            var37 = var29[var28];
            var37 = var40.bind(var5)(var37);
            var37 = var37.HaV0Sg;
            var37 = var38.bind(var39)(var37);
            var27['children'] = var37;
            var34 = var35.bind(var5)(var34, var27);
            var27 = new Array(2);
            var27[0] = var34;
            var35 = _closure1_slot11;
            var32 = var29[var32];
            var32 = var30.bind(var5)(var32);
            var34 = var32.Text;
            var32 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var32['children'] = var36;
            var32 = var35.bind(var5)(var34, var32);
            var27[1] = var32;
            var23['children'] = var27;
            var25 = var25.bind(var5)(var20, var23);
            var23 = new Array(3);
            var23[0] = var25;
            var27 = _closure1_slot11;
            var25 = {};
            var32 = var13.daysContainer;
            var25['style'] = var32;
            var29 = var29[var31];
            var29 = var30.bind(var5)(var29);
            var31 = var29.DAYS_ORDERED;
            var30 = var31.map;
            var29 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var10 = arg2;
                    var _closure3_slot0 = var5;
                    var2 = _closure2_slot14;
                    var1 = var2.has;
                    var12 = var1.bind(var2)(var5);
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.dayButton;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = var12;
                    if(!var8) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var11 = _closure2_slot0;
                    var8 = var11.dayButtonSelected;
case 89:
                    var7[1] = var8;
                    var2['style'] = var7;
                    var6 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure2_slot15;
                            var1 = undefined;
                            var2 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var1 = global;
                                    var3 = var1.Set;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {constructor: {value: var3}});
                                    var5 = arg1;
                                    var6 = var2;
                                    var1 = new var6[var3](var5, var4);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    var4 = var1.has;
                                    var3 = _closure5_slot0;
                                    var3 = var4.bind(var1)(var3);
                                    if(var3) { _fun0009_ip = 91; continue _fun0009 }
case 92:
                                    var4 = var1.add;
                                    var3 = _closure5_slot0;
                                    var3 = var4.bind(var1)(var3);
                                    _fun0009_ip = 93; continue _fun0009;
case 91:
                                    var3 = var1.delete;
                                    var2 = _closure5_slot0;
                                    var2 = var3.bind(var1)(var2);
case 93:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var6 = 'button';
                    var2['accessibilityRole'] = var6;
                    var6 = {};
                    var6['selected'] = var12;
                    var2['accessibilityState'] = var6;
                    var6 = _closure2_slot3;
                    var6 = var6[var10];
                    var2['accessibilityLabel'] = var6;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 14;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var11 = 'text-sm/semibold';
                    var6['variant'] = var11;
                    var11 = 'text-muted';
                    if(!var12) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                    var11 = 'control-secondary-text-default';
case 94:
                    var6['color'] = var11;
                    var9 = _closure2_slot3;
                    var9 = var9[var10];
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var2['children'] = var6;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var29 = var30.bind(var31)(var29);
            var25['children'] = var29;
            var25 = var27.bind(var5)(var20, var25);
            var23[1] = var25;
            var25 = var33.conflictingEntries;
            var25 = var25.length;
            var25 = var25 > var26;
            if(!var25) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            var29 = _closure1_slot11;
            var27 = _closure1_slot6;
            var26 = {};
            var30 = var13.overlapWarningContent;
            var26['style'] = var30;
            var32 = _closure1_slot11;
            var31 = _closure1_slot15;
            var30 = {};
            var33 = var33.conflictingEntries;
            var30['conflictingEntries'] = var33;
            var30 = var32.bind(var5)(var31, var30);
            var26['children'] = var30;
            var25 = var29.bind(var5)(var27, var26);
case 96:
            var23[2] = var25;
            var14['children'] = var23;
            var14 = var16.bind(var5)(var20, var14);
            var12[3] = var14;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var3, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var7 = 27;
            var7 = var23[var7];
            var7 = var25.bind(var5)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {};
            var7['bottom'] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var13.footer;
            var10['style'] = var13;
            var20 = _closure1_slot11;
            var14 = 28;
            var13 = var23[var14];
            var13 = var25.bind(var5)(var13);
            var16 = var13.Button;
            var13 = {};
            var23 = var23[var24];
            var23 = var25.bind(var5)(var23);
            var25 = var23.intl;
            var23 = var25.string;
            var27 = _closure1_slot1;
            var26 = _closure1_slot2;
            var26 = var26[var28];
            var26 = var27.bind(var5)(var26);
            if(var22) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var22 = var26.pvcruO;
            _fun0002_ip = 100; continue _fun0002;
case 98:
            var22 = var26.TDc9mW;
case 100:
            var22 = var23.bind(var25)(var22);
            var13['text'] = var22;
            var13['onPress'] = var21;
            var17 = !var17;
            var13['disabled'] = var17;
            var13['loading'] = var18;
            var17 = 'primary';
            var13['variant'] = var17;
            var17 = 'lg';
            var13['size'] = var17;
            var16 = var20.bind(var5)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var16 = _closure1_slot11;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = var20[var14];
            var14 = var23.bind(var5)(var14);
            var15 = var14.Button;
            var14 = {};
            var21 = var20[var24];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ETE/oC;
            var20 = var21.bind(var22)(var20);
            var14['text'] = var20;
            var19 = function onPress() {
                var2 = _closure2_slot1;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14['onPress'] = var19;
            var14['disabled'] = var18;
            var18 = 'secondary';
            var14['variant'] = var18;
            var14['size'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 85:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();