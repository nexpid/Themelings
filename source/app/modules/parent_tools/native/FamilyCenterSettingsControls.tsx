// app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FamilyCenterSubPages;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['teenControlsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['controlledSettingsHeader'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['parentalControlsContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['marginTop'] = var10;
    var4['controlsGroup'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = function FamilyCenterSettingsTeenControls() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot8;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useActiveLinkUserIds;
            var14 = var1.bind(var2)();
            var _closure2_slot0 = var14;
            var1 = 7;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useSelectedTeenUser;
            var2 = var1.bind(var2)();
            var1 = 8;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useIsFamilyCenterV3Enabled;
            var1 = {};
            var8 = 'FamilyCenterSettingsControls';
            var1['location'] = var8;
            var6 = var6.bind(var7)(var1);
            var1 = 9;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot1 = var1;
            var1 = null;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.restrictedSchedule;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = var2.rules;
case 2:
            if(!(var1 == var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = new Array(0);
case 5:
            var1 = function handleOpenSettings() {
                var3 = _closure2_slot1;
                var2 = var3.navigate;
                var1 = _closure1_slot5;
                var1 = var1.CONTENT_AND_SOCIAL;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot2 = var1;
            var22 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 10;
            var1 = var19[var1];
            var1 = var22.bind(var4)(var1);
            var1 = var1.bind(var4)(var7);
            var21 = var1.subLabel;
            var20 = var1.trailing;
            var3 = _closure1_slot7;
            var24 = _closure1_slot0;
            var5 = 11;
            var1 = var19[var5];
            var1 = var24.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var8 = var13.teenControlsContainer;
            var1['style'] = var8;
            var5 = var19[var5];
            var5 = var24.bind(var4)(var5);
            var8 = var5.Stack;
            var5 = {};
            var10 = var13.controlledSettingsHeader;
            var5['style'] = var10;
            var18 = _closure1_slot6;
            var16 = 12;
            var10 = var19[var16];
            var10 = var24.bind(var4)(var10);
            var17 = var10.Text;
            var10 = {};
            var12 = 'text-sm/semibold';
            var10['variant'] = var12;
            var12 = 13;
            var15 = var19[var12];
            var15 = var24.bind(var4)(var15);
            var26 = var15.intl;
            var25 = var26.string;
            var15 = 14;
            var23 = var19[var15];
            var23 = var22.bind(var4)(var23);
            var23 = var23.ahKIJO;
            var23 = var25.bind(var26)(var23);
            var10['children'] = var23;
            var17 = var18.bind(var4)(var17, var10);
            var10 = new Array(2);
            var10[0] = var17;
            var16 = var19[var16];
            var16 = var24.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var23 = var19[var12];
            var23 = var24.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var19 = var19[var15];
            var19 = var22.bind(var4)(var19);
            var22 = var19.X9rW0j;
            var19 = {};
            var25 = function openSettingsHook(arg1, arg2) {
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
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
            var19['openSettingsHook'] = var25;
            var19 = var23.bind(var24)(var22, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var10[1] = var16;
            var5['children'] = var10;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var19 = var7;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var13 = var13.controlsGroup;
            var7['style'] = var13;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 15;
            var13 = var22[var13];
            var13 = var24.bind(var4)(var13);
            var16 = var13.TableRowGroup;
            var13 = {};
            var17 = 16;
            var17 = var22[var17];
            var17 = var24.bind(var4)(var17);
            var18 = var17.TableRow;
            var17 = {};
            var23 = var22[var12];
            var23 = var24.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var25 = _closure1_slot1;
            var22 = var22[var15];
            var22 = var25.bind(var4)(var22);
            var22 = var22["1Op+NP"];
            var22 = var23.bind(var24)(var22);
            var17['label'] = var22;
            var17['subLabel'] = var21;
            var17['trailing'] = var20;
            var21 = var19.length;
            var20 = 0;
            var22 = var21 > var20;
            var21 = undefined;
            if(!var22) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var21 = function() {
                var4 = _closure2_slot1;
                var3 = var4.navigate;
                var1 = _closure1_slot5;
                var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                var1 = {};
                var5 = _closure1_slot4;
                var5 = var5.SCREEN_TIME_CONTROLS;
                var1['selectedSubPage'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
case 9:
            var17['onPress'] = var21;
            var19 = var19.length;
            var19 = var19 > var20;
            var17['arrow'] = var19;
            var17 = var10.bind(var4)(var18, var17);
            var13['children'] = var17;
            var13 = var10.bind(var4)(var16, var13);
            var7['children'] = var13;
            var6 = var10.bind(var4)(var8, var7);
case 7:
            var5[1] = var6;
            var8 = _closure1_slot6;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
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
                var1 = 18;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.popLayer;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 19;
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
    var _closure1_slot9 = var4;
    var4 = function FamilyCenterSettingsParentalControls() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSelectedTeenUser;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var1 = 8;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useIsFamilyCenterV3Enabled;
            var1 = {};
            var8 = 'FamilyCenterSettingsControls';
            var1['location'] = var8;
            var12 = var6.bind(var7)(var1);
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var1 = null;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var3.restrictedSchedule;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var2 = var3.rules;
case 11:
            if(!(var1 == var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = new Array(0);
case 14:
            var _closure2_slot2 = var2;
            var1 = function handleSettingsClick(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.navigate;
                var1 = _closure1_slot5;
                var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                var1 = {};
                var5 = arg1;
                var1['selectedSubPage'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot3 = var1;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 10;
            var1 = var20[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var19 = var1.subLabel;
            var18 = var1.trailing;
            var3 = _closure1_slot7;
            var26 = _closure1_slot0;
            var1 = 11;
            var1 = var20[var1];
            var1 = var26.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var5 = var9.parentalControlsContainer;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var6 = 12;
            var5 = var20[var6];
            var5 = var26.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var10 = 'text-sm/semibold';
            var5['variant'] = var10;
            var21 = 13;
            var10 = var20[var21];
            var10 = var26.bind(var4)(var10);
            var13 = var10.intl;
            var11 = var13.string;
            var24 = 14;
            var10 = var20[var24];
            var10 = var14.bind(var4)(var10);
            var10 = var10.ahKIJO;
            var10 = var11.bind(var13)(var10);
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var6 = var20[var6];
            var6 = var26.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var10 = var20[var21];
            var10 = var26.bind(var4)(var10);
            var13 = var10.intl;
            var11 = var13.string;
            var10 = var20[var24];
            var10 = var14.bind(var4)(var10);
            var10 = var10.Sv236e;
            var10 = var11.bind(var13)(var10);
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.controlsGroup;
            var6['style'] = var9;
            var9 = 15;
            var9 = var20[var9];
            var9 = var26.bind(var4)(var9);
            var10 = var9.TableRowGroup;
            var9 = {};
            var13 = 16;
            var11 = var20[var13];
            var11 = var26.bind(var4)(var11);
            var14 = var11.TableRow;
            var11 = {};
            var15 = var20[var21];
            var15 = var26.bind(var4)(var15);
            var22 = var15.intl;
            var16 = var22.string;
            var15 = var20[var21];
            var15 = var26.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15["+o1pDZ"];
            var15 = var16.bind(var22)(var15);
            var11['label'] = var15;
            var15 = function onPress() {
                var3 = _closure2_slot3;
                var1 = _closure1_slot4;
                var2 = var1.CONTENT_AND_SOCIAL;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var15;
            var16 = true;
            var11['arrow'] = var16;
            var14 = var8.bind(var4)(var14, var11);
            var11 = new Array(3);
            var11[0] = var14;
            var14 = var20[var13];
            var14 = var26.bind(var4)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var22 = var20[var21];
            var22 = var26.bind(var4)(var22);
            var25 = var22.intl;
            var22 = var25.string;
            var20 = var20[var21];
            var20 = var26.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.OAuOHD;
            var20 = var22.bind(var25)(var20);
            var14['label'] = var20;
            var20 = function onPress() {
                var3 = _closure2_slot3;
                var1 = _closure1_slot4;
                var2 = var1.DATA_AND_PRIVACY;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var14['onPress'] = var20;
            var14['arrow'] = var16;
            var14 = var8.bind(var4)(var15, var14);
            var11[1] = var14;
            if(!var12) { _fun0002_ip = 16; continue _fun0002 }
case 10:
            var15 = _closure1_slot6;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = var20[var13];
            var13 = var22.bind(var4)(var13);
            var14 = var13.TableRow;
            var13 = {};
            var21 = var20[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var23 = _closure1_slot1;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20["1Op+NP"];
            var20 = var21.bind(var22)(var20);
            var13['label'] = var20;
            var13['subLabel'] = var19;
            var13['trailing'] = var18;
            var17 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = var4.navigate;
                    var1 = _closure1_slot5;
                    var2 = var1.FAMILY_CENTER_PARENTAL_CONTROLS;
                    var1 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.SCREEN_TIME_CONTROLS;
                    var1['selectedSubPage'] = var5;
                    var5 = _closure2_slot2;
                    var6 = var5.length;
                    var5 = 0;
                    var5 = var5 === var6;
                    if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var6 = _closure2_slot0;
                    var7 = null;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var8 = _closure2_slot0;
                    var6 = var8.id;
case 19:
                    var5 = var7 != var6;
case 17:
                    var1['autoOpenCreate'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onPress'] = var17;
            var13['arrow'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 16:
            var11[2] = var12;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterSettingsControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterSettingsControls() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useActiveLinkUserIds;
            var1 = var1.bind(var2)();
            var3 = var1.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            if(var7) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var7 = _closure1_slot10;
            _fun0004_ip = 25; continue _fun0004;
case 23:
            var7 = _closure1_slot9;
case 25:
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();