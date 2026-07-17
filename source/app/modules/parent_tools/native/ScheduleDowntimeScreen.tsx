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
            var1 = function _handleSubmit() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var5 = undefined;
                            var2 = undefined;
                            var4 = _closure2_slot5;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var6 = _closure2_slot17;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 8: // try_start_0
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
                            if(!var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var6 = _closure2_slot2;
                            var8 = var7 == var6;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var8 = _closure2_slot2;
                            var6 = var8.ruleId;
case 11:
                            if(!(var7 == var6)) { _fun0003_ip = 13; continue _fun0003 }
case 9:
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
case 14:
                            return var6;
case 15:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(!var7) { _fun0003_ip = 16; continue _fun0003 }
case 17: // try_end0
                            var8 = _closure2_slot17;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
                            return var6;
case 13: // try_start_1
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
case 18:
                            return var2;
case 19:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 20; continue _fun0003 }
case 16:
                            var6 = _closure2_slot1;
                            var4 = var6.goBack;
                            var4 = var4.bind(var6)();
case 21: // try_end1
                            var6 = _closure2_slot17;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
case 6:
                            return var5;
case 20:
                            var6 = _closure2_slot17;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 22: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot17;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot20 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot20 = var1;
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
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var12 = var3.rule;
case 23:
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
            if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = var3.teenId;
case 25:
            var _closure2_slot5 = var2;
            var21 = var1 != var12;
            var _closure2_slot6 = var21;
            var6 = _closure1_slot5;
            var4 = var6.useState;
            var3 = var1 == var12;
            var7 = undefined;
            if(var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = var12.enabled;
case 27:
            var3 = var1 == var7;
            if(var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = var7;
case 29:
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot4;
            var16 = 2;
            var3 = var3.bind(var5)(var4, var16);
            var25 = 0;
            var29 = var3[var25];
            var _closure2_slot7 = var29;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var4 = _closure1_slot9;
                    var3 = var4.getUser;
                    var1 = _closure2_slot5;
                    var3 = var3.bind(var4)(var1);
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = var3.restrictedSchedule;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 35:
                    var1 = var3.rules;
case 33:
                    if(!(var2 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var1 = new Array(0);
case 36:
                    _fun0004_ip = 38; continue _fun0004;
case 31:
                    var1 = new Array(0);
case 38:
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
            if(var14) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var10 = var12.startTime;
case 39:
            var14 = var1 != var10;
            var10 = null;
            if(!var14) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var14 = {};
            var17 = var12.startTime;
            var17 = var17.hours;
            var14['hours'] = var17;
            var17 = var12.startTime;
            var18 = var17.minutes;
            var20 = var1 != var18;
            var17 = 0;
            if(!var20) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var17 = var18;
case 43:
            var14['minutes'] = var17;
            var14['seconds'] = var25;
            var14['nanos'] = var25;
            var10 = var14;
case 41:
            var4['initial'] = var10;
            var10 = {'hours': 22, 'minutes': 0};
            var4['defaultValue'] = var10;
            var6 = var6.bind(var5)(var4);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var6, var16);
            var46 = var4[var25];
            var _closure2_slot10 = var46;
            var4 = var4[var7];
            var _closure2_slot11 = var4;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var10 = var1 == var12;
            var8 = undefined;
            if(var10) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var8 = var12.endTime;
case 45:
            var10 = var1 != var8;
            var8 = null;
            if(!var10) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var10 = {};
            var14 = var12.endTime;
            var14 = var14.hours;
            var10['hours'] = var14;
            var14 = var12.endTime;
            var17 = var14.minutes;
            var18 = var1 != var17;
            var14 = 0;
            if(!var18) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var14 = var17;
case 49:
            var10['minutes'] = var14;
            var10['seconds'] = var25;
            var10['nanos'] = var25;
            var8 = var10;
case 47:
            var4['initial'] = var8;
            var8 = {'hours': 7, 'minutes': 0};
            var4['defaultValue'] = var8;
            var6 = var6.bind(var5)(var4);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var6, var16);
            var45 = var4[var25];
            var _closure2_slot12 = var45;
            var4 = var4[var7];
            var _closure2_slot13 = var4;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var4 = global;
            var14 = var4.Set;
            var10 = var1 == var12;
            var4 = undefined;
            if(var10) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var4 = var12.days;
case 51:
            var10 = var14.prototype;
            var10 = Object.create(var10, {constructor: {value: var14}});
            var49 = var10;
            var48 = var4;
            var4 = new var49[var14](var48, var47);
            var4 = var4 instanceof Object ? var4 : var10;
            var4 = var6.bind(var8)(var4);
            var14 = _closure1_slot4;
            var4 = var14.bind(var5)(var4, var16);
            var6 = var4[var25];
            var _closure2_slot14 = var6;
            var4 = var4[var7];
            var _closure2_slot15 = var4;
            var8 = _closure1_slot5;
            var4 = var8.useState;
            var10 = false;
            var4 = var4.bind(var8)(var10);
            var4 = var14.bind(var5)(var4, var16);
            var18 = var4[var25];
            var _closure2_slot16 = var18;
            var4 = var4[var7];
            var _closure2_slot17 = var4;
            var7 = var8.useMemo;
            var4 = new Array(3);
            var4[0] = var21;
            var16 = var1 == var12;
            var14 = undefined;
            if(var16) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var14 = var12.ruleId;
case 53:
            var4[1] = var14;
            var4[2] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0005_ip = 55; continue _fun0005 }
case 5:
                    var1 = _closure2_slot2;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 56; continue _fun0005 }
case 3:
                    var4 = _closure2_slot2;
                    var1 = var4.ruleId;
case 56:
                    if(!(var3 == var1)) { _fun0005_ip = 57; continue _fun0005 }
case 55:
                    var1 = _closure2_slot9;
                    _fun0005_ip = 58; continue _fun0005;
case 57:
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
case 58:
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
            var32 = var7.bind(var8)(var3, var4);
            var7 = var8.useCallback;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 59; continue _fun0006 }
case 5:
                        var5 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                        var2 = _closure2_slot5;
                        var8 = null;
                        if(!(var8 != var2)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                        var2 = _closure2_slot2;
                        var4 = var8 == var2;
                        var2 = undefined;
                        if(var4) { _fun0006_ip = 62; continue _fun0006 }
case 57:
                        var4 = _closure2_slot2;
                        var2 = var4.ruleId;
case 62:
                        if(!(var8 != var2)) { _fun0006_ip = 60; continue _fun0006 }
case 63:
                        var4 = _closure2_slot17;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 36: // try_start_0
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
case 64:
                        return var2;
case 65:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                        var11 = _closure1_slot9;
                        var10 = var11.getUser;
                        var6 = _closure2_slot5;
                        var6 = var10.bind(var11)(var6);
                        var9 = var6;
                        var10 = var8 == var6;
                        var6 = undefined;
                        if(var10) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                        var10 = var9;
                        var10 = var10.restrictedSchedule;
                        var9 = var10;
                        var10 = var8 == var10;
                        var6 = undefined;
                        if(var10) { _fun0006_ip = 68; continue _fun0006 }
case 70:
                        var6 = var9.rules;
case 68:
                        var7 = var6;
                        if(!(var8 == var6)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                        var6 = new Array(0);
                        _fun0006_ip = 73; continue _fun0006;
case 71:
                        var6 = var7;
case 73:
                        var7 = var6.length;
                        var6 = 0;
                        if(!(var6 !== var7)) { _fun0006_ip = 14; continue _fun0006 }
case 74:
                        var7 = _closure2_slot1;
                        var6 = var7.goBack;
                        var6 = var6.bind(var7)();
                        _fun0006_ip = 75; continue _fun0006;
case 14:
                        var7 = _closure2_slot1;
                        var6 = var7.navigate;
                        var4 = _closure1_slot10;
                        var4 = var4.FAMILY_CENTER;
                        var4 = var6.bind(var7)(var4);
case 75: // try_end0
                        var6 = _closure2_slot17;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 60:
                        return var5;
case 66:
                        var6 = _closure2_slot17;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 76: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot17;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 59:
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
            if(var14) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var11 = var12.ruleId;
case 77:
            var3[1] = var11;
            var3[2] = var9;
            var3 = var7.bind(var8)(var4, var3);
            var _closure2_slot19 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useLayoutEffect;
            var4 = new Array(4);
            var4[0] = var9;
            var4[1] = var21;
            var4[2] = var3;
            var4[3] = var18;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0007_ip = 8; continue _fun0007 }
case 5:
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
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var30 = 19;
            var3 = var7[var30];
            var4 = var8.bind(var5)(var3);
            var3 = var4.timeToMinutes;
            var4 = var3.bind(var4)(var46);
            var3 = var7[var30];
            var9 = var8.bind(var5)(var3);
            var3 = var9.timeToMinutes;
            var3 = var3.bind(var9)(var45);
            var11 = {};
            var9 = var7[var30];
            var12 = var8.bind(var5)(var9);
            var9 = var12.formatTime;
            var9 = var9.bind(var12)(var46);
            var11['startTime'] = var9;
            var7 = var7[var30];
            var8 = var8.bind(var5)(var7);
            var7 = var8.formatTime;
            var7 = var7.bind(var8)(var45);
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
            if(!(!(var4 > var3))) { _fun0002_ip = 79; continue _fun0002 }
case 80:
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
            var35 = var8.bind(var9)(var7, var11);
            _fun0002_ip = 81; continue _fun0002;
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
            var7 = var7.R87Y2K;
            var35 = var8.bind(var9)(var7, var11);
case 81:
            var6 = var6.size;
            var17 = var6 > var25;
            if(!var17) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var17 = var4 !== var3;
case 82:
            if(!var17) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var17 = !var18;
case 84:
            var2 = var1 == var2;
            var1 = null;
            if(var2) { _fun0002_ip = 86; continue _fun0002 }
case 87:
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
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var31 = 14;
            var12 = var20[var31];
            var12 = var23.bind(var5)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var24 = 15;
            var22 = var20[var24];
            var22 = var23.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var26 = _closure1_slot1;
            var27 = 16;
            var20 = var20[var27];
            var20 = var26.bind(var5)(var20);
            var20 = var20.AcJ4ke;
            var20 = var22.bind(var23)(var20);
            var12['children'] = var20;
            var14 = var16.bind(var5)(var14, var12);
            var12 = new Array(4);
            var12[0] = var14;
            var14 = var21;
            if(!var14) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var22 = _closure1_slot11;
            var36 = _closure1_slot0;
            var33 = _closure1_slot2;
            var16 = 24;
            var16 = var33[var16];
            var16 = var36.bind(var5)(var16);
            var20 = var16.TableRowGroup;
            var16 = {};
            var16['hasIcons'] = var10;
            var28 = _closure1_slot11;
            var23 = 25;
            var23 = var33[var23];
            var23 = var36.bind(var5)(var23);
            var26 = var23.TableSwitchRow;
            var23 = {};
            var34 = var33[var24];
            var34 = var36.bind(var5)(var34);
            var36 = var34.intl;
            var34 = var36.string;
            var37 = _closure1_slot1;
            var33 = var33[var27];
            var33 = var37.bind(var5)(var33);
            var33 = var33["30Owsd"];
            var33 = var34.bind(var36)(var33);
            var23['label'] = var33;
            var23['value'] = var29;
            var29 = function handleEnabledChange() {
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
            var23['onValueChange'] = var29;
            var23 = var28.bind(var5)(var26, var23);
            var16['children'] = var23;
            var14 = var22.bind(var5)(var20, var16);
case 88:
            var12[1] = var14;
            var16 = _closure1_slot12;
            var20 = _closure1_slot6;
            var14 = {};
            var22 = var13.section;
            var14['style'] = var22;
            var26 = _closure1_slot11;
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = var28[var31];
            var22 = var29.bind(var5)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var33 = var28[var24];
            var33 = var29.bind(var5)(var33);
            var36 = var33.intl;
            var34 = var36.string;
            var39 = _closure1_slot1;
            var33 = var28[var27];
            var33 = var39.bind(var5)(var33);
            var33 = var33["37z4a2"];
            var33 = var34.bind(var36)(var33);
            var22['children'] = var33;
            var23 = var26.bind(var5)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var33 = _closure1_slot12;
            var23 = 24;
            var23 = var28[var23];
            var23 = var29.bind(var5)(var23);
            var26 = var23.TableRowGroup;
            var23 = {};
            var23['hasIcons'] = var10;
            var38 = _closure1_slot11;
            var36 = 26;
            var10 = var28[var36];
            var10 = var29.bind(var5)(var10);
            var37 = var10.TableRow;
            var34 = {};
            var10 = var28[var24];
            var10 = var29.bind(var5)(var10);
            var41 = var10.intl;
            var40 = var41.string;
            var10 = var28[var27];
            var10 = var39.bind(var5)(var10);
            var10 = var10.DsXytO;
            var10 = var40.bind(var41)(var10);
            var34['label'] = var10;
            var41 = _closure1_slot11;
            var10 = var28[var31];
            var10 = var29.bind(var5)(var10);
            var40 = var10.Text;
            var10 = {};
            var43 = 'text-md/normal';
            var10['variant'] = var43;
            var42 = var28[var30];
            var44 = var29.bind(var5)(var42);
            var42 = var44.formatTime;
            var42 = var42.bind(var44)(var46);
            var10['children'] = var42;
            var10 = var41.bind(var5)(var40, var10);
            var34['trailing'] = var10;
            var10 = true;
            var34['arrow'] = var10;
            var40 = function handleStartTimePress() {
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
            var34['onPress'] = var40;
            var37 = var38.bind(var5)(var37, var34);
            var34 = new Array(2);
            var34[0] = var37;
            var38 = _closure1_slot11;
            var36 = var28[var36];
            var36 = var29.bind(var5)(var36);
            var37 = var36.TableRow;
            var36 = {};
            var40 = var28[var24];
            var40 = var29.bind(var5)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var28[var27];
            var40 = var39.bind(var5)(var40);
            var40 = var40["5SHDP6"];
            var40 = var41.bind(var42)(var40);
            var36['label'] = var40;
            var42 = _closure1_slot11;
            var40 = var28[var31];
            var40 = var29.bind(var5)(var40);
            var41 = var40.Text;
            var40 = {};
            var40['variant'] = var43;
            var43 = var28[var30];
            var44 = var29.bind(var5)(var43);
            var43 = var44.formatTime;
            var43 = var43.bind(var44)(var45);
            var40['children'] = var43;
            var40 = var42.bind(var5)(var41, var40);
            var36['trailing'] = var40;
            var36['arrow'] = var10;
            var40 = function handleEndTimePress() {
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
            var36['onPress'] = var40;
            var36 = var38.bind(var5)(var37, var36);
            var34[1] = var36;
            var23['children'] = var34;
            var23 = var33.bind(var5)(var26, var23);
            var22[1] = var23;
            var14['children'] = var22;
            var14 = var16.bind(var5)(var20, var14);
            var12[2] = var14;
            var16 = _closure1_slot12;
            var14 = {};
            var22 = var13.section;
            var14['style'] = var22;
            var23 = _closure1_slot12;
            var22 = {};
            var26 = var13.sectionHeader;
            var22['style'] = var26;
            var34 = _closure1_slot11;
            var26 = var28[var31];
            var26 = var29.bind(var5)(var26);
            var33 = var26.Text;
            var26 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var36 = var28[var24];
            var36 = var29.bind(var5)(var36);
            var38 = var36.intl;
            var37 = var38.string;
            var36 = var28[var27];
            var36 = var39.bind(var5)(var36);
            var36 = var36.HaV0Sg;
            var36 = var37.bind(var38)(var36);
            var26['children'] = var36;
            var33 = var34.bind(var5)(var33, var26);
            var26 = new Array(2);
            var26[0] = var33;
            var34 = _closure1_slot11;
            var31 = var28[var31];
            var31 = var29.bind(var5)(var31);
            var33 = var31.Text;
            var31 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var31['children'] = var35;
            var31 = var34.bind(var5)(var33, var31);
            var26[1] = var31;
            var22['children'] = var26;
            var23 = var23.bind(var5)(var20, var22);
            var22 = new Array(3);
            var22[0] = var23;
            var26 = _closure1_slot11;
            var23 = {};
            var31 = var13.daysContainer;
            var23['style'] = var31;
            var28 = var28[var30];
            var28 = var29.bind(var5)(var28);
            var30 = var28.DAYS_ORDERED;
            var29 = var30.map;
            var28 = function(arg1, arg2) {
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
                    if(!var8) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var11 = _closure2_slot0;
                    var8 = var11.dayButtonSelected;
case 90:
                    var7[1] = var8;
                    var2['style'] = var7;
                    var6 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function handleDayToggle(arg1) {
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
                                    if(var3) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                                    var4 = var1.add;
                                    var3 = _closure5_slot0;
                                    var3 = var4.bind(var1)(var3);
                                    _fun0009_ip = 94; continue _fun0009;
case 92:
                                    var3 = var1.delete;
                                    var2 = _closure5_slot0;
                                    var2 = var3.bind(var1)(var2);
case 94:
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
                    if(!var12) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                    var11 = 'control-secondary-text-default';
case 95:
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
            var28 = var29.bind(var30)(var28);
            var23['children'] = var28;
            var23 = var26.bind(var5)(var20, var23);
            var22[1] = var23;
            var23 = var32.conflictingEntries;
            var23 = var23.length;
            var23 = var23 > var25;
            if(!var23) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var28 = _closure1_slot11;
            var26 = _closure1_slot6;
            var25 = {};
            var29 = var13.overlapWarningContent;
            var25['style'] = var29;
            var31 = _closure1_slot11;
            var30 = _closure1_slot15;
            var29 = {};
            var32 = var32.conflictingEntries;
            var29['conflictingEntries'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var25['children'] = var29;
            var23 = var28.bind(var5)(var26, var25);
case 97:
            var22[2] = var23;
            var14['children'] = var22;
            var14 = var16.bind(var5)(var20, var14);
            var12[3] = var14;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var3, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 27;
            var7 = var22[var7];
            var7 = var23.bind(var5)(var7);
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
            var13 = var22[var14];
            var13 = var23.bind(var5)(var13);
            var16 = var13.Button;
            var13 = {};
            var22 = var22[var24];
            var22 = var23.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var26 = _closure1_slot1;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var26.bind(var5)(var25);
            if(var21) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var21 = var25.pvcruO;
            _fun0002_ip = 101; continue _fun0002;
case 99:
            var21 = var25.TDc9mW;
case 101:
            var21 = var22.bind(var23)(var21);
            var13['text'] = var21;
            var21 = function handleSubmit() {
                var1 = undefined;
                var4 = _closure2_slot20;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
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
case 86:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();