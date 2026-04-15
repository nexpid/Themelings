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
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['gap'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['section'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['sectionHeader'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
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
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.OPACITY_BLURPLE_16;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_FOCUS;
    var9['borderColor'] = var12;
    var4['dayButtonSelected'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingVertical'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/ScheduleDowntimeScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ScheduleDowntimeScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot13;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var _closure2_slot0 = var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useStackNavigation;
            var10 = var1.bind(var4)();
            var _closure2_slot1 = var10;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useSettingNavigationRoute;
            var1 = var1.bind(var2)();
            var3 = var1.params;
            var1 = null;
            var2 = var1 == var3;
            var12 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var3.rule;
case 2:
            var _closure2_slot2 = var12;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
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
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.teenId;
case 4:
            var _closure2_slot4 = var2;
            var21 = var1 != var12;
            var _closure2_slot5 = var21;
            var6 = _closure1_slot5;
            var4 = var6.useState;
            var3 = var1 == var12;
            var7 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var12.enabled;
case 6:
            var3 = var1 == var7;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7;
case 8:
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot4;
            var11 = 2;
            var3 = var3.bind(var5)(var4, var11);
            var7 = 0;
            var25 = var3[var7];
            var _closure2_slot6 = var25;
            var4 = 1;
            var3 = var3[var4];
            var _closure2_slot7 = var3;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 15;
            var3 = var3[var8];
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var14 = var1 == var12;
            var9 = undefined;
            if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var12.startTime;
case 10:
            var14 = var1 != var9;
            var9 = null;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = {};
            var16 = var12.startTime;
            var16 = var16.hours;
            var14['hours'] = var16;
            var16 = var12.startTime;
            var17 = var16.minutes;
            var18 = var1 != var17;
            var16 = 0;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = var17;
case 14:
            var14['minutes'] = var16;
            var14['seconds'] = var7;
            var14['nanos'] = var7;
            var9 = var14;
case 12:
            var3['initial'] = var9;
            var22 = 22;
            var9 = {'hours': 22, 'minutes': 0};
            var3['defaultValue'] = var9;
            var6 = var6.bind(var5)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6, var11);
            var42 = var3[var7];
            var _closure2_slot8 = var42;
            var3 = var3[var4];
            var _closure2_slot9 = var3;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var9 = var1 == var12;
            var8 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var12.endTime;
case 16:
            var9 = var1 != var8;
            var8 = null;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = {};
            var14 = var12.endTime;
            var14 = var14.hours;
            var9['hours'] = var14;
            var14 = var12.endTime;
            var16 = var14.minutes;
            var17 = var1 != var16;
            var14 = 0;
            if(!var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var14 = var16;
case 20:
            var9['minutes'] = var14;
            var9['seconds'] = var7;
            var9['nanos'] = var7;
            var8 = var9;
case 18:
            var3['initial'] = var8;
            var8 = {'hours': 7, 'minutes': 0};
            var3['defaultValue'] = var8;
            var6 = var6.bind(var5)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6, var11);
            var41 = var3[var7];
            var _closure2_slot10 = var41;
            var3 = var3[var4];
            var _closure2_slot11 = var3;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var3 = global;
            var14 = var3.Set;
            var9 = var1 == var12;
            var3 = undefined;
            if(var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var12.days;
case 22:
            var9 = var14.prototype;
            var9 = Object.create(var9, {constructor: {value: var14}});
            var45 = var9;
            var44 = var3;
            var3 = new var45[var14](var44, var43);
            var3 = var3 instanceof Object ? var3 : var9;
            var3 = var6.bind(var8)(var3);
            var8 = _closure1_slot4;
            var3 = var8.bind(var5)(var3, var11);
            var6 = var3[var7];
            var _closure2_slot12 = var6;
            var3 = var3[var4];
            var _closure2_slot13 = var3;
            var9 = _closure1_slot5;
            var14 = var9.useState;
            var3 = false;
            var3 = var14.bind(var9)(var3);
            var3 = var8.bind(var5)(var3, var11);
            var18 = var3[var7];
            var _closure2_slot14 = var18;
            var3 = var3[var4];
            var _closure2_slot15 = var3;
            var8 = var9.useCallback;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var5 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                        var2 = _closure2_slot4;
                        var8 = null;
                        if(!(var8 != var2)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var2 = _closure2_slot2;
                        var4 = var8 == var2;
                        var2 = undefined;
                        if(var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                        var4 = _closure2_slot2;
                        var2 = var4.ruleId;
case 28:
                        if(!(var8 != var2)) { _fun0002_ip = 26; continue _fun0002 }
case 30:
                        var4 = _closure2_slot15;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 31: // try_start_0
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 16;
                        var2 = var10[var2];
                        var11 = var6.bind(var5)(var2);
                        var10 = var11.deleteRestrictedScheduleRule;
                        var6 = _closure2_slot4;
                        var2 = _closure2_slot2;
                        var2 = var2.ruleId;
                        var2 = var10.bind(var11)(var6, var2);
                        SaveGenerator(address=126);
case 32:
                        return var2;
case 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                        var11 = _closure1_slot9;
                        var10 = var11.getUser;
                        var6 = _closure2_slot4;
                        var6 = var10.bind(var11)(var6);
                        var9 = var6;
                        var10 = var8 == var6;
                        var6 = undefined;
                        if(var10) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                        var10 = var9;
                        var10 = var10.restrictedSchedule;
                        var9 = var10;
                        var10 = var8 == var10;
                        var6 = undefined;
                        if(var10) { _fun0002_ip = 36; continue _fun0002 }
case 38:
                        var6 = var9.rules;
case 36:
                        var7 = var6;
                        if(!(var8 == var6)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                        var6 = new Array(0);
                        _fun0002_ip = 41; continue _fun0002;
case 39:
                        var6 = var7;
case 41:
                        var7 = var6.length;
                        var6 = 0;
                        if(!(var6 !== var7)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                        var7 = _closure2_slot1;
                        var6 = var7.goBack;
                        var6 = var6.bind(var7)();
                        _fun0002_ip = 44; continue _fun0002;
case 42:
                        var7 = _closure2_slot1;
                        var6 = var7.navigate;
                        var4 = _closure1_slot10;
                        var4 = var4.FAMILY_CENTER;
                        var4 = var6.bind(var7)(var4);
case 44: // try_end0
                        var6 = _closure2_slot15;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 26:
                        return var5;
case 34:
                        var6 = _closure2_slot15;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 45: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot15;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 24:
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
            if(var14) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var11 = var12.ruleId;
case 46:
            var3[1] = var11;
            var3[2] = var10;
            var3 = var8.bind(var9)(var4, var3);
            var _closure2_slot16 = var3;
            var9 = _closure1_slot5;
            var8 = var9.useLayoutEffect;
            var4 = new Array(4);
            var4[0] = var10;
            var4[1] = var21;
            var4[2] = var3;
            var4[3] = var18;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 48; continue _fun0003 }
case 25:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerRight() {
                        var4 = _closure1_slot11;
                        var3 = _closure1_slot7;
                        var2 = {};
                        var1 = _closure2_slot16;
                        var2['onPress'] = var1;
                        var1 = 'button';
                        var2['accessibilityRole'] = var1;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var8 = 17;
                        var10 = var9[var8];
                        var1 = undefined;
                        var10 = var6.bind(var1)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var8 = var9[var8];
                        var8 = var6.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.oyYWHE;
                        var8 = var10.bind(var11)(var8);
                        var2['accessibilityLabel'] = var8;
                        var8 = 8;
                        var2['hitSlop'] = var8;
                        var5 = _closure2_slot14;
                        var2['disabled'] = var5;
                        var5 = 18;
                        var5 = var9[var5];
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.TrashIcon;
                        var5 = {};
                        var8 = _closure1_slot1;
                        var7 = 11;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.colors;
                        var7 = var7.ICON_FEEDBACK_CRITICAL;
                        var5['color'] = var7;
                        var7 = 'md';
                        var5['size'] = var7;
                        var5 = var4.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var4);
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var29 = 14;
            var3 = var8[var29];
            var4 = var9.bind(var5)(var3);
            var3 = var4.timeToMinutes;
            var4 = var3.bind(var4)(var42);
            var3 = var8[var29];
            var10 = var9.bind(var5)(var3);
            var3 = var10.timeToMinutes;
            var3 = var3.bind(var10)(var41);
            var10 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 49; continue _fun0004 }
case 25:
                            var5 = undefined;
                            var2 = undefined;
                            var4 = _closure2_slot4;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                            var6 = _closure2_slot15;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 48: // try_start_0
                            var6 = {};
                            var4 = '';
                            var6['label'] = var4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 14;
                            var11 = var10[var8];
                            var13 = var9.bind(var5)(var11);
                            var12 = var13.toTimeProto;
                            var11 = _closure2_slot8;
                            var11 = var12.bind(var13)(var11);
                            var6['start_time'] = var11;
                            var8 = var10[var8];
                            var10 = var9.bind(var5)(var8);
                            var9 = var10.toTimeProto;
                            var8 = _closure2_slot10;
                            var8 = var9.bind(var10)(var8);
                            var6['end_time'] = var8;
                            var8 = global;
                            var10 = var8.Array;
                            var9 = var10.from;
                            var8 = _closure2_slot12;
                            var8 = var9.bind(var10)(var8);
                            var6['days'] = var8;
                            var8 = _closure2_slot6;
                            var6['enabled'] = var8;
                            var2 = var6;
                            var6 = _closure2_slot5;
                            if(!var6) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                            var6 = _closure2_slot2;
                            var8 = var7 == var6;
                            var6 = undefined;
                            if(var8) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                            var8 = _closure2_slot2;
                            var6 = var8.ruleId;
case 54:
                            if(!(var7 == var6)) { _fun0004_ip = 56; continue _fun0004 }
case 52:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var6 = var8[var6];
                            var9 = var7.bind(var5)(var6);
                            var8 = var9.addRestrictedScheduleRule;
                            var7 = _closure2_slot4;
                            var6 = var2;
                            var6 = var8.bind(var9)(var7, var6);
                            SaveGenerator(address=238);
case 42:
                            return var6;
case 57:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(!var7) { _fun0004_ip = 58; continue _fun0004 }
case 59: // try_end0
                            var8 = _closure2_slot15;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
                            return var6;
case 56: // try_start_1
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var8 = var6.bind(var5)(var4);
                            var7 = var8.updateRestrictedScheduleRule;
                            var6 = _closure2_slot4;
                            var4 = _closure2_slot2;
                            var4 = var4.ruleId;
                            var2 = var7.bind(var8)(var6, var4, var2);
                            SaveGenerator(address=309);
case 60:
                            return var2;
case 61:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0004_ip = 62; continue _fun0004 }
case 58:
                            var6 = _closure2_slot1;
                            var4 = var6.goBack;
                            var4 = var4.bind(var6)();
case 63: // try_end1
                            var6 = _closure2_slot15;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
case 50:
                            return var5;
case 62:
                            var6 = _closure2_slot15;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 64: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot15;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 49:
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
            var20 = var10.bind(var5)();
            var11 = {};
            var10 = var8[var29];
            var12 = var9.bind(var5)(var10);
            var10 = var12.formatTime;
            var10 = var10.bind(var12)(var42);
            var11['startTime'] = var10;
            var8 = var8[var29];
            var9 = var9.bind(var5)(var8);
            var8 = var9.formatTime;
            var8 = var8.bind(var9)(var41);
            var11['endTime'] = var8;
            var8 = function timeHook(arg1, arg2) {
                var5 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
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
            var11['timeHook'] = var8;
            if(!(!(var4 > var3))) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 17;
            var8 = var14[var8];
            var8 = var9.bind(var5)(var8);
            var10 = var8.intl;
            var9 = var10.format;
            var12 = _closure1_slot1;
            var8 = 20;
            var8 = var14[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.vX7xid;
            var32 = var9.bind(var10)(var8, var11);
            _fun0001_ip = 67; continue _fun0001;
case 65:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 17;
            var8 = var14[var8];
            var8 = var9.bind(var5)(var8);
            var10 = var8.intl;
            var9 = var10.format;
            var12 = _closure1_slot1;
            var8 = 20;
            var8 = var14[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.R87Y2K;
            var32 = var9.bind(var10)(var8, var11);
case 67:
            var6 = var6.size;
            var17 = var6 > var7;
            if(!var17) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var17 = var4 !== var3;
case 68:
            if(!var17) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var17 = !var18;
case 70:
            var2 = var1 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var4 = _closure1_slot12;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var13.container;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot8;
            var6 = {};
            var14 = {};
            var9 = var13.scrollContent;
            var14['style'] = var9;
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var30 = 19;
            var9 = var11[var30];
            var9 = var16.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var24 = 17;
            var12 = var11[var24];
            var12 = var16.bind(var5)(var12);
            var16 = var12.intl;
            var12 = var16.string;
            var23 = _closure1_slot1;
            var27 = 20;
            var11 = var11[var27];
            var11 = var23.bind(var5)(var11);
            var11 = var11.AcJ4ke;
            var11 = var12.bind(var16)(var11);
            var9['children'] = var11;
            var9 = var8.bind(var5)(var10, var9);
            var16 = new Array(4);
            var16[0] = var9;
            var9 = var21;
            if(!var9) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var12 = _closure1_slot11;
            var31 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = 21;
            var10 = var26[var10];
            var10 = var31.bind(var5)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var22 = var26[var22];
            var22 = var31.bind(var5)(var22);
            var23 = var22.TableSwitchRow;
            var22 = {};
            var28 = var26[var24];
            var28 = var31.bind(var5)(var28);
            var31 = var28.intl;
            var28 = var31.string;
            var33 = _closure1_slot1;
            var26 = var26[var27];
            var26 = var33.bind(var5)(var26);
            var26 = var26["30Owsd"];
            var26 = var28.bind(var31)(var26);
            var22['label'] = var26;
            var22['value'] = var25;
            var25 = function onValueChange() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22['onValueChange'] = var25;
            var22 = var12.bind(var5)(var23, var22);
            var10['children'] = var22;
            var9 = var12.bind(var5)(var11, var10);
case 74:
            var16[1] = var9;
            var12 = _closure1_slot12;
            var11 = _closure1_slot6;
            var25 = {};
            var9 = var13.section;
            var25['style'] = var9;
            var9 = _closure1_slot11;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = var22[var30];
            var10 = var23.bind(var5)(var10);
            var26 = var10.Text;
            var10 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var28 = var22[var24];
            var28 = var23.bind(var5)(var28);
            var33 = var28.intl;
            var31 = var33.string;
            var36 = _closure1_slot1;
            var28 = var22[var27];
            var28 = var36.bind(var5)(var28);
            var28 = var28["37z4a2"];
            var28 = var31.bind(var33)(var28);
            var10['children'] = var28;
            var10 = var9.bind(var5)(var26, var10);
            var26 = new Array(2);
            var26[0] = var10;
            var10 = 21;
            var10 = var22[var10];
            var10 = var23.bind(var5)(var10);
            var31 = var10.TableRowGroup;
            var28 = {};
            var34 = 23;
            var10 = var22[var34];
            var10 = var23.bind(var5)(var10);
            var35 = var10.TableRow;
            var33 = {};
            var10 = var22[var24];
            var10 = var23.bind(var5)(var10);
            var38 = var10.intl;
            var37 = var38.string;
            var10 = var22[var27];
            var10 = var36.bind(var5)(var10);
            var10 = var10.DsXytO;
            var10 = var37.bind(var38)(var10);
            var33['label'] = var10;
            var10 = var22[var30];
            var10 = var23.bind(var5)(var10);
            var37 = var10.Text;
            var10 = {};
            var39 = 'text-md/normal';
            var10['variant'] = var39;
            var38 = var22[var29];
            var40 = var23.bind(var5)(var38);
            var38 = var40.formatTime;
            var38 = var38.bind(var40)(var42);
            var10['children'] = var38;
            var10 = var9.bind(var5)(var37, var10);
            var33['trailing'] = var10;
            var10 = true;
            var33['arrow'] = var10;
            var37 = function onPress() {
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var3 = var7[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var5 = _closure1_slot1;
                var2 = 20;
                var2 = var7[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2["8bLRt0"];
                var10 = var3.bind(var4)(var2);
                var9 = _closure2_slot8;
                var11 = 'ScheduleDowntimeStartTimePicker';
                var8 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot9;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.timeToMinutes;
                    var4 = var3.bind(var4)(var5);
                    var3 = 540;
                    var4 = var4 + var3;
                    var3 = 1440;
                    var5 = var4 % var3;
                    var3 = _closure2_slot11;
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
            var33['onPress'] = var37;
            var35 = var9.bind(var5)(var35, var33);
            var33 = new Array(2);
            var33[0] = var35;
            var34 = var22[var34];
            var34 = var23.bind(var5)(var34);
            var35 = var34.TableRow;
            var34 = {};
            var37 = var22[var24];
            var37 = var23.bind(var5)(var37);
            var40 = var37.intl;
            var38 = var40.string;
            var37 = var22[var27];
            var37 = var36.bind(var5)(var37);
            var37 = var37["5SHDP6"];
            var37 = var38.bind(var40)(var37);
            var34['label'] = var37;
            var37 = var22[var30];
            var37 = var23.bind(var5)(var37);
            var38 = var37.Text;
            var37 = {};
            var37['variant'] = var39;
            var39 = var22[var29];
            var40 = var23.bind(var5)(var39);
            var39 = var40.formatTime;
            var39 = var39.bind(var40)(var41);
            var37['children'] = var39;
            var37 = var9.bind(var5)(var38, var37);
            var34['trailing'] = var37;
            var34['arrow'] = var10;
            var37 = function onPress() {
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var3 = var7[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var5 = _closure1_slot1;
                var2 = 20;
                var2 = var7[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2["+JkWJV"];
                var10 = var3.bind(var4)(var2);
                var9 = _closure2_slot10;
                var8 = _closure2_slot11;
                var11 = 'ScheduleDowntimeEndTimePicker';
                var12 = undefined;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var34['onPress'] = var37;
            var34 = var9.bind(var5)(var35, var34);
            var33[1] = var34;
            var28['children'] = var33;
            var28 = var12.bind(var5)(var31, var28);
            var26[1] = var28;
            var25['children'] = var26;
            var25 = var12.bind(var5)(var11, var25);
            var16[2] = var25;
            var25 = {};
            var26 = var13.section;
            var25['style'] = var26;
            var26 = {};
            var28 = var13.sectionHeader;
            var26['style'] = var28;
            var28 = var22[var30];
            var28 = var23.bind(var5)(var28);
            var31 = var28.Text;
            var28 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var33 = var22[var24];
            var33 = var23.bind(var5)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var22[var27];
            var33 = var36.bind(var5)(var33);
            var33 = var33.HaV0Sg;
            var33 = var34.bind(var35)(var33);
            var28['children'] = var33;
            var31 = var9.bind(var5)(var31, var28);
            var28 = new Array(2);
            var28[0] = var31;
            var30 = var22[var30];
            var30 = var23.bind(var5)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var30['children'] = var32;
            var30 = var9.bind(var5)(var31, var30);
            var28[1] = var30;
            var26['children'] = var28;
            var28 = var12.bind(var5)(var11, var26);
            var26 = new Array(2);
            var26[0] = var28;
            var28 = {};
            var30 = var13.daysContainer;
            var28['style'] = var30;
            var29 = var22[var29];
            var29 = var23.bind(var5)(var29);
            var31 = var29.DAYS_ORDERED;
            var30 = var31.map;
            var29 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var10 = arg2;
                    var _closure3_slot0 = var5;
                    var2 = _closure2_slot12;
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
                    if(!var8) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                    var11 = _closure2_slot0;
                    var8 = var11.dayButtonSelected;
case 76:
                    var7[1] = var8;
                    var2['style'] = var7;
                    var6 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure2_slot13;
                            var1 = undefined;
                            var2 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                                    if(var3) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                                    var4 = var1.add;
                                    var3 = _closure5_slot0;
                                    var3 = var4.bind(var1)(var3);
                                    _fun0006_ip = 80; continue _fun0006;
case 78:
                                    var3 = var1.delete;
                                    var2 = _closure5_slot0;
                                    var2 = var3.bind(var1)(var2);
case 80:
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
                    var1 = 19;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var11 = 'text-sm/semibold';
                    var6['variant'] = var11;
                    var11 = 'text-muted';
                    if(!var12) { _fun0005_ip = 81; continue _fun0005 }
case 7:
                    var11 = 'control-secondary-text-default';
case 81:
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
            var28['children'] = var29;
            var28 = var9.bind(var5)(var11, var28);
            var26[1] = var28;
            var25['children'] = var26;
            var25 = var12.bind(var5)(var11, var25);
            var16[3] = var25;
            var14['children'] = var16;
            var14 = var4.bind(var5)(var3, var14);
            var6['children'] = var14;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 24;
            var7 = var22[var7];
            var7 = var23.bind(var5)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {};
            var7['bottom'] = var10;
            var10 = {};
            var13 = var13.footer;
            var10['style'] = var13;
            var14 = 25;
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
            if(var21) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var21 = var25.pvcruO;
            _fun0001_ip = 84; continue _fun0001;
case 82:
            var21 = var25.TDc9mW;
case 84:
            var21 = var22.bind(var23)(var21);
            var13['text'] = var21;
            var13['onPress'] = var20;
            var17 = !var17;
            var13['disabled'] = var17;
            var13['loading'] = var18;
            var17 = 'primary';
            var13['variant'] = var17;
            var17 = 'lg';
            var13['size'] = var17;
            var16 = var9.bind(var5)(var16, var13);
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
case 72:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();