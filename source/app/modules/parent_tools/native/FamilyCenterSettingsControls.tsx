// app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function SpendingLimitRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.cap;
            var2 = var1.teenId;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 13;
            var1 = var13[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.useSpendingLimitDisplayState;
            var3 = var1.bind(var3)(var6);
            var1 = function getSpendingLimitRowProps(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = arg2;
                    var4 = function renderTrailing(arg1) {
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                        var5 = arg1;
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var7 = function renderSubLabel(arg1, arg2) {
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {};
                        var5 = 'text-sm/normal';
                        var1['variant'] = var5;
                        var5 = arg2;
                        var1['style'] = var5;
                        var5 = arg1;
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var5 = var2.kind;
                    var1 = 'off';
                    if(!(var1 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = 'on';
                    if(!(var1 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = 'close-to-limit';
                    if(!(var1 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = 'spent';
                    if(!(var1 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = 'blocked';
                    if(!(var1 !== var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = undefined;
                    return var1;
case 10:
                    var1 = {};
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var10 = var11[var6];
                    var8 = undefined;
                    var10 = var9.bind(var8)(var10);
                    var14 = var10.intl;
                    var13 = var14.string;
                    var10 = _closure1_slot1;
                    var5 = 9;
                    var12 = var11[var5];
                    var12 = var10.bind(var8)(var12);
                    var12 = var12.kGFuGn;
                    var12 = var13.bind(var14)(var12);
                    var12 = var4.bind(var8)(var12);
                    var1['trailing'] = var12;
                    var6 = var11[var6];
                    var6 = var9.bind(var8)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var5 = var11[var5];
                    var5 = var10.bind(var8)(var5);
                    var5 = var5.FUu2b0;
                    var6 = var6.bind(var9)(var5);
                    var5 = var3.subLabelCritical;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['subLabel'] = var5;
                    return var1;
case 8:
                    var1 = {};
                    var5 = var2.monthlyText;
                    var8 = undefined;
                    var5 = var4.bind(var8)(var5);
                    var1['trailing'] = var5;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var6 = var11[var6];
                    var6 = var9.bind(var8)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var10 = _closure1_slot1;
                    var5 = 9;
                    var5 = var11[var5];
                    var5 = var10.bind(var8)(var5);
                    var5 = var5.Q2msVQ;
                    var6 = var6.bind(var9)(var5);
                    var5 = var3.subLabelCritical;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['subLabel'] = var5;
                    return var1;
case 6:
                    var1 = {};
                    var5 = var2.monthlyText;
                    var6 = undefined;
                    var5 = var4.bind(var6)(var5);
                    var1['trailing'] = var5;
                    var5 = var2.remainingText;
                    var3 = var3.subLabelWarning;
                    var3 = var7.bind(var6)(var5, var3);
                    var1['subLabel'] = var3;
                    return var1;
case 4:
                    var1 = {};
                    var3 = var2.monthlyText;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1['trailing'] = var2;
                    return var1;
case 2:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var5 = var8[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var7 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.YEnpaj;
                    var2 = var5.bind(var6)(var2);
                    var2 = var4.bind(var3)(var2);
                    var1['trailing'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var3, var5);
            var8 = var1.trailing;
            var6 = var1.subLabel;
            var1 = null;
            var5 = var1 == var2;
            var3 = _closure1_slot7;
            var1 = 14;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var10 = 8;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var12 = _closure1_slot1;
            var9 = 9;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.gMeekL;
            var9 = var10.bind(var11)(var9);
            var1['label'] = var9;
            var1['trailing'] = var8;
            var1['subLabel'] = var6;
            var6 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = function() {
                var2 = _closure2_slot0;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var5 = var3[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.pushLazy;
                var7 = _closure1_slot0;
                var4 = 12;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 11;
                var4 = var3[var4];
                var3 = var3.paths;
                var11 = var7.bind(var1)(var4, var3);
                var3 = {};
                var3['teenId'] = var2;
                var2 = {};
                var7 = 'slide_from_right';
                var2['animation'] = var7;
                var12 = var6;
                var10 = var3;
                var9 = undefined;
                var8 = var2;
                var2 = var12[var5](var11, var10, var9, var8, var7);
                return var1;
            };
case 12:
            var1['onPress'] = var6;
            var6 = !var5;
            var1['arrow'] = var6;
            var1['disabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function FamilyCenterSettingsTeenControls() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = function handleOpenSettings() {
                var3 = _closure2_slot1;
                var2 = var3.navigate;
                var1 = _closure1_slot6;
                var1 = var1.CONTENT_AND_SOCIAL;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot2 = var1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useActiveLinkUserIds;
            var14 = var1.bind(var2)();
            var _closure2_slot0 = var14;
            var1 = 16;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useSelectedTeenUser;
            var2 = var1.bind(var2)();
            var1 = 17;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useIsFamilyCenterV3Enabled;
            var1 = {};
            var8 = 'FamilyCenterSettingsControls';
            var1['location'] = var8;
            var6 = var6.bind(var7)(var1);
            var1 = 18;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot1 = var1;
            var1 = null;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var2.restrictedSchedule;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 16:
            var7 = var2.rules;
case 14:
            if(!(var1 == var7)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = new Array(0);
case 17:
            var26 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 13;
            var1 = var20[var1];
            var2 = var26.bind(var4)(var1);
            var1 = var2.useSpendingLimitFromUserSettings;
            var21 = var1.bind(var2)();
            var22 = _closure1_slot1;
            var1 = 19;
            var1 = var20[var1];
            var1 = var22.bind(var4)(var1);
            var1 = var1.bind(var4)(var7);
            var24 = var1.subLabel;
            var23 = var1.trailing;
            var3 = _closure1_slot8;
            var5 = 20;
            var1 = var20[var5];
            var1 = var26.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var8 = var13.teenControlsContainer;
            var1['style'] = var8;
            var10 = _closure1_slot8;
            var5 = var20[var5];
            var5 = var26.bind(var4)(var5);
            var8 = var5.Stack;
            var5 = {};
            var12 = var13.controlledSettingsHeader;
            var5['style'] = var12;
            var19 = _closure1_slot7;
            var17 = 7;
            var12 = var20[var17];
            var12 = var26.bind(var4)(var12);
            var18 = var12.Text;
            var16 = {};
            var12 = 'text-sm/semibold';
            var16['variant'] = var12;
            var12 = 8;
            var15 = var20[var12];
            var15 = var26.bind(var4)(var15);
            var28 = var15.intl;
            var27 = var28.string;
            var15 = 9;
            var25 = var20[var15];
            var25 = var22.bind(var4)(var25);
            var25 = var25.ahKIJO;
            var25 = var27.bind(var28)(var25);
            var16['children'] = var25;
            var18 = var19.bind(var4)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var19 = _closure1_slot7;
            var17 = var20[var17];
            var17 = var26.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var25 = var20[var12];
            var25 = var26.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var20 = var20[var15];
            var20 = var22.bind(var4)(var20);
            var22 = var20.X9rW0j;
            var20 = {};
            var27 = function openSettingsHook(arg1, arg2) {
                var5 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-link'};
                var1 = _closure2_slot2;
                var2['onPress'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var20['openSettingsHook'] = var27;
            var20 = var25.bind(var26)(var22, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var5['children'] = var16;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var22 = var7;
            if(!var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var10 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var13 = var13.controlsGroup;
            var7['style'] = var13;
            var17 = _closure1_slot8;
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 21;
            var13 = var25[var13];
            var13 = var27.bind(var4)(var13);
            var16 = var13.TableRowGroup;
            var13 = {};
            var18 = false;
            var13['hasIcons'] = var18;
            var20 = _closure1_slot7;
            var19 = _closure1_slot10;
            var18 = {};
            var18['cap'] = var21;
            var19 = var20.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var21 = _closure1_slot7;
            var19 = 14;
            var19 = var25[var19];
            var19 = var27.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {};
            var26 = var25[var12];
            var26 = var27.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var28 = _closure1_slot1;
            var25 = var25[var15];
            var25 = var28.bind(var4)(var25);
            var25 = var25["1Op+NP"];
            var25 = var26.bind(var27)(var25);
            var19['label'] = var25;
            var19['subLabel'] = var24;
            var19['trailing'] = var23;
            var24 = var22.length;
            var23 = 0;
            var25 = var24 > var23;
            var24 = undefined;
            if(!var25) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var24 = function() {
                var4 = _closure2_slot1;
                var3 = var4.navigate;
                var1 = _closure1_slot6;
                var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                var1 = {};
                var5 = _closure1_slot5;
                var5 = var5.SCREEN_TIME_CONTROLS;
                var1['selectedSubPage'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
case 21:
            var19['onPress'] = var24;
            var22 = var22.length;
            var22 = var22 > var23;
            var19['arrow'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var13['children'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var7['children'] = var13;
            var6 = var10.bind(var4)(var8, var7);
case 19:
            var5[1] = var6;
            var8 = _closure1_slot7;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 22;
            var6 = var10[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {'text': null, 'onPress': null, 'shrink': true, 'grow': false, 'variant': 'secondary', 'size': 'sm'};
            var12 = var10[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var11 = _closure1_slot1;
            var10 = var10[var15];
            var10 = var11.bind(var4)(var10);
            var11 = var10.w0JA3P;
            var10 = {};
            var14 = var14.length;
            var10['count'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var6['text'] = var10;
            var9 = function onPress() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.popLayer;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 24;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openPrivateChannel;
                var2 = {};
                var5 = _closure2_slot0;
                var2['recipientIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function FamilyCenterSettingsParentalControls() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = function handleSettingsClick(arg1) {
                var4 = _closure2_slot2;
                var3 = var4.navigate;
                var1 = _closure1_slot6;
                var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                var1 = {};
                var5 = arg1;
                var1['selectedSubPage'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot4 = var1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var2 = var5[var1];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useSelectedTeenUser;
            var21 = var2.bind(var6)();
            var _closure2_slot0 = var21;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useShouldLoadSettingsForSelectedTeenUser;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var2 = 17;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useIsFamilyCenterV3Enabled;
            var2 = {};
            var8 = 'FamilyCenterSettingsControls';
            var2['location'] = var8;
            var13 = var6.bind(var7)(var2);
            var2 = 18;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var16 = null;
            var3 = var16 == var21;
            var2 = undefined;
            if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = var21.restrictedSchedule;
            var5 = var16 == var3;
            var2 = undefined;
            if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 25:
            var2 = var3.rules;
case 23:
            if(!(var16 == var2)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var2 = new Array(0);
case 26:
            var _closure2_slot3 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 25;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var6 = var3.ParentalControlledSpendingLimit;
            var5 = var6.useControlledSetting;
            var7 = var16 == var21;
            var3 = undefined;
            if(var7) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = var21.id;
case 28:
            var28 = var5.bind(var6)(var3);
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var3 = var16 == var21;
            var7 = undefined;
            if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var7 = var21.id;
case 30:
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
case 32:
                    var3 = var4 != var3;
                    if(!var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = _closure2_slot1;
case 34:
                    if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 26;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchTeenSettingsAndConsents;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var3);
            var14 = _closure1_slot1;
            var27 = _closure1_slot2;
            var1 = 19;
            var1 = var27[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var20 = var1.subLabel;
            var19 = var1.trailing;
            var3 = _closure1_slot8;
            var31 = _closure1_slot0;
            var1 = 20;
            var1 = var27[var1];
            var1 = var31.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var5 = var9.parentalControlsContainer;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var6 = 7;
            var5 = var27[var6];
            var5 = var31.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var10 = 'text-sm/semibold';
            var5['variant'] = var10;
            var22 = 8;
            var10 = var27[var22];
            var10 = var31.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var25 = 9;
            var10 = var27[var25];
            var10 = var14.bind(var4)(var10);
            var10 = var10.ahKIJO;
            var10 = var11.bind(var12)(var10);
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var6 = var27[var6];
            var6 = var31.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var10 = var27[var22];
            var10 = var31.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var27[var25];
            var10 = var14.bind(var4)(var10);
            var10 = var10.Sv236e;
            var10 = var11.bind(var12)(var10);
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.controlsGroup;
            var6['style'] = var9;
            var11 = _closure1_slot8;
            var9 = 21;
            var9 = var27[var9];
            var9 = var31.bind(var4)(var9);
            var10 = var9.TableRowGroup;
            var9 = {};
            var12 = false;
            var9['hasIcons'] = var12;
            var23 = _closure1_slot7;
            var14 = 14;
            var12 = var27[var14];
            var12 = var31.bind(var4)(var12);
            var15 = var12.TableRow;
            var12 = {};
            var17 = var27[var22];
            var17 = var31.bind(var4)(var17);
            var29 = var17.intl;
            var26 = var29.string;
            var17 = var27[var22];
            var17 = var31.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17["+o1pDZ"];
            var17 = var26.bind(var29)(var17);
            var12['label'] = var17;
            var17 = function onPress() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot5;
                var2 = var1.CONTENT_AND_SOCIAL;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var17;
            var17 = true;
            var12['arrow'] = var17;
            var15 = var23.bind(var4)(var15, var12);
            var12 = new Array(4);
            var12[0] = var15;
            var26 = _closure1_slot7;
            var15 = var27[var14];
            var15 = var31.bind(var4)(var15);
            var23 = var15.TableRow;
            var15 = {};
            var29 = var27[var22];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var27 = var27[var22];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.OAuOHD;
            var27 = var29.bind(var30)(var27);
            var15['label'] = var27;
            var27 = function onPress() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot5;
                var2 = var1.DATA_AND_PRIVACY;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onPress'] = var27;
            var15['arrow'] = var17;
            var15 = var26.bind(var4)(var23, var15);
            var12[1] = var15;
            var15 = var13;
            if(!var13) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var26 = var16 == var21;
            var23 = undefined;
            if(var26) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var23 = var21.id;
case 40:
            var15 = var16 != var23;
case 38:
            if(!var15) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var27 = _closure1_slot7;
            var26 = _closure1_slot10;
            var23 = {};
            var23['cap'] = var28;
            var28 = var21.id;
            var23['teenId'] = var28;
            var15 = var27.bind(var4)(var26, var23);
case 42:
            var12[2] = var15;
            if(!var13) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var23 = var16 == var21;
            var15 = undefined;
            if(var23) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var15 = var21.id;
case 46:
            var13 = var16 != var15;
case 44:
            if(!var13) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var16 = _closure1_slot7;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = var21[var14];
            var14 = var23.bind(var4)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var22 = var21[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var24 = _closure1_slot1;
            var21 = var21[var25];
            var21 = var24.bind(var4)(var21);
            var21 = var21["1Op+NP"];
            var21 = var22.bind(var23)(var21);
            var14['label'] = var21;
            var14['subLabel'] = var20;
            var14['trailing'] = var19;
            var18 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.navigate;
                    var1 = _closure1_slot6;
                    var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                    var1 = {};
                    var5 = _closure1_slot5;
                    var5 = var5.SCREEN_TIME_CONTROLS;
                    var1['selectedSubPage'] = var5;
                    var5 = _closure2_slot3;
                    var6 = var5.length;
                    var5 = 0;
                    var5 = var5 === var6;
                    if(!var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var6 = _closure2_slot0;
                    var7 = null;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0006_ip = 10; continue _fun0006 }
case 52:
                    var8 = _closure2_slot0;
                    var6 = var8.id;
case 10:
                    var5 = var7 != var6;
case 50:
                    var1['autoOpenCreate'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var14['onPress'] = var18;
            var14['arrow'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 48:
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FamilyCenterSubPages;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['teenControlsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['controlledSettingsHeader'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['parentalControlsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var4['controlsGroup'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_FEEDBACK_WARNING;
    var9['color'] = var12;
    var4['subLabelWarning'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_CRITICAL;
    var9['color'] = var10;
    var4['subLabelCritical'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterSettingsControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterSettingsControls() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useActiveLinkUserIds;
            var1 = var1.bind(var2)();
            var3 = var1.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            if(var7) { _fun0007_ip = 55; continue _fun0007 }
case 11:
            var7 = _closure1_slot12;
            _fun0007_ip = 56; continue _fun0007;
case 55:
            var7 = _closure1_slot11;
case 56:
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 53:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();