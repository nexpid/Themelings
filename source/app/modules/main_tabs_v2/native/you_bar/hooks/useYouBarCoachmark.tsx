// app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useYouBarCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.isQuestRendered;
            var _closure2_slot0 = var12;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 6;
            var2 = var6[var2];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.useAnimatedRef;
            var4 = var2.bind(var3)();
            var2 = 7;
            var2 = var6[var2];
            var9 = var8.bind(var7)(var2);
            var3 = var9.useIsInPrivateProfilesExperiment;
            var2 = 'PrivateProfileCoachmark';
            var13 = var3.bind(var9)(var2);
            var _closure2_slot1 = var13;
            var2 = 8;
            var2 = var6[var2];
            var3 = var8.bind(var7)(var2);
            var2 = var3.useIsFocused;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var3 = 9;
            var3 = var6[var3];
            var11 = var8.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 10;
                    var2 = var9[var3];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var2);
                    var4 = var5.getFirstInstallTimeElapsed;
                    var2 = {};
                    var6 = 'authed';
                    var2['from'] = var6;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.TimeUnits;
                    var6 = var6.DAYS;
                    var2['unit'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2 >= var3;
                    var3 = _closure1_slot4;
                    var1 = var3.getGuildId;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var9, var3);
            var _closure2_slot3 = var11;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var1 = new Array(0);
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var4 = var1.push;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 5;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.DismissibleContent;
                    var3 = var3.YOU_BAR_DM_SWIPE_COACHMARK;
                    var3 = var4.bind(var1)(var3);
case 7:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = var1.push;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.DismissibleContent;
                    var2 = var2.PRIVATE_PROFILE_COACHMARK;
                    var2 = var3.bind(var1)(var2);
case 9:
                    return var1;
case 4:
                    var1 = _closure1_slot6;
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var2, var3);
            var2 = 12;
            var2 = var6[var2];
            var3 = var8.bind(var7)(var2);
            var2 = var3.useSelectedDismissibleContent;
            var9 = var2.bind(var3)(var9);
            var3 = _closure1_slot2;
            var2 = 2;
            var9 = var3.bind(var7)(var9, var2);
            var2 = 0;
            var3 = var9[var2];
            var2 = 1;
            var2 = var9[var2];
            var9 = {};
            var9['visibleContent'] = var3;
            var9['markAsDismissed'] = var2;
            var5 = function useSwipeCoachmarkProps(arg1) {
                var2 = arg1;
                var5 = var2.visibleContent;
                var _closure3_slot0 = var5;
                var6 = var2.markAsDismissed;
                var _closure3_slot1 = var6;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var3 = var6[var2];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var8 = var3.intl;
                    var7 = var8.string;
                    var3 = var6[var2];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.gMFchc;
                    var3 = var7.bind(var8)(var3);
                    var1['title'] = var3;
                    var3 = var6[var2];
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.intl;
                    var3 = var7.string;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.V3j11+;
                    var2 = var3.bind(var7)(var2);
                    var1['description'] = var2;
                    var2 = 'top';
                    var1['position'] = var2;
                    var3 = _closure3_slot0;
                    var2 = 5;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.YOU_BAR_DM_SWIPE_COACHMARK;
                    var2 = var3 === var2;
                    var1['visible'] = var2;
                    var2 = function onDismiss() {
                        var3 = _closure3_slot1;
                        var1 = _closure1_slot5;
                        var2 = var1.USER_DISMISS;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onDismiss'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = var5.bind(var7)(var9);
            var9 = 13;
            var9 = var6[var9];
            var11 = var8.bind(var7)(var9);
            var10 = var11.usePrivateProfileCoachmarkProps;
            var9 = {};
            var9['visibleContent'] = var3;
            var9['markAsDismissed'] = var2;
            var9 = var10.bind(var11)(var9);
            var11 = 5;
            var6 = var6[var11];
            var6 = var8.bind(var7)(var6);
            var6 = var6.DismissibleContent;
            var8 = var6.YOU_BAR_DM_SWIPE_COACHMARK;
            var6 = var5;
            if(!(var8 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var11];
            var8 = var10.bind(var7)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.PRIVATE_PROFILE_COACHMARK;
            var6 = var9;
            if(!(var8 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var6 = var5;
case 11:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 14;
            var1 = var8[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.useCoachmark;
            var1 = var1.bind(var5)(var4, var6);
            var1 = {};
            var1['animatedRef'] = var4;
            var1['visibleContent'] = var3;
            var1['markAsDismissed'] = var2;
            return var1;
        }
    };
    var3['useYouBarCoachmark'] = var2;
    return var1;
})();