// app/modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarTabListeners.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var4 = var4.ME;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = function short() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var2 = var5[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var3 = var6.trackTabPressed;
        var2 = _closure1_slot10;
        var2 = var2.GUILDS;
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot1;
        var2 = 10;
        var2 = var5[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.track;
        var1 = _closure1_slot11;
        var2 = var1.REDESIGN_NAV_BAR_CLICKED;
        var1 = {};
        var5 = 'Guilds';
        var1['tab'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = {};
        var2 = function short() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.coerceGuildsRoute;
                var6 = _closure1_slot1;
                var2 = 12;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var3 = var3.bind(var5)(var2);
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 64; continue _fun0001 }
 62:
                return var4;
 64:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var6 = var9[var5];
                var7 = var8.bind(var4)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.IMPACT_MEDIUM;
                var5 = var6.bind(var7)(var5);
                var3 = var3.params;
                var6 = var2 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 136; continue _fun0001 }
 131:
                var5 = var3.guildId;
 136:
                var3 = _closure1_slot12;
                if(!(var5 !== var3)) { _fun0001_ip = 181; continue _fun0001 }
 144:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.transitionToGuild;
                var3 = _closure1_slot12;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 230; continue _fun0001;
 181:
                var5 = _closure1_slot9;
                var3 = var5.getLastSelectedGuildId;
                var3 = var3.bind(var5)();
                if(!(var2 != var3)) { _fun0001_ip = 230; continue _fun0001 }
 199:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.transitionToGuild;
                var1 = var1.bind(var2)(var3);
 230:
                var1 = {};
                var2 = function long() {
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var5 = var4[var3];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var3 = var4[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_HEAVY;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 15;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['long'] = var2;
                return var1;
            }
        };
        var1['short'] = var2;
        return var1;
    };
    var4['short'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = function short() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var5 = var6.track;
            var1 = _closure1_slot11;
            var2 = var1.REDESIGN_NAV_BAR_CLICKED;
            var1 = {};
            var8 = 'Notifications';
            var1['tab'] = var8;
            var1 = var5.bind(var6)(var2, var1);
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var7)(var1);
            var2 = var3.trackTabPressed;
            var1 = _closure1_slot10;
            var1 = var1.NOTIFICATIONS;
            var1 = var2.bind(var3)(var1);
            var1 = _closure1_slot6;
            var1 = var1.initialized;
            if(var1) { _fun0002_ip = 196; continue _fun0002 }
 107:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var3 = var6.bind(var7)(var1);
            var2 = var3.fetchNotificationCenterItems;
            var1 = {};
            var5 = 17;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.PAGE_SIZE_WITH_MENTIONS;
            var1['limit'] = var5;
            var5 = true;
            var1['with_mentions'] = var5;
            var4 = _closure1_slot7;
            var5 = var4.roleFilter;
            var1['roles_filter'] = var5;
            var4 = var4.everyoneFilter;
            var1['everyone_filter'] = var4;
            var1 = var2.bind(var3)(var1);
 196:
            var1 = {};
            var2 = function short() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.getCurrentConfig;
                    var4 = {};
                    var2 = 'NativeNotificationsTapSequencer';
                    var4['location'] = var2;
                    var2 = {};
                    var7 = false;
                    var2['autoTrackExposure'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var2.enabled;
                    if(!var2) { _fun0003_ip = 116; continue _fun0003 }
 66:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 19;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.bind(var1)();
                    if(var4) { _fun0003_ip = 113; continue _fun0003 }
 93:
                    var6 = _closure1_slot8;
                    var5 = var6.getSavedMessageCount;
                    var6 = var5.bind(var6)();
                    var5 = 0;
                    var4 = var6 > var5;
 113:
                    var2 = var4;
 116:
                    if(!var2) { _fun0003_ip = 255; continue _fun0003 }
 122:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 13;
                    var6 = var2[var5];
                    var7 = var4.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var2[var5];
                    var5 = var4.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_MEDIUM;
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var3 = 20;
                    var3 = var2[var3];
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.pushLazy;
                    var3 = 22;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 21;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var11 = var4.bind(var1)(var3, var2);
                    var4 = {};
                    var2 = 'modal';
                    var4['presentation'] = var2;
                    var10 = {};
                    var9 = 'for-later-modal';
                    var12 = var7;
                    var8 = var4;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
 255:
                    return var1;
                }
            };
            var1['short'] = var2;
            return var1;
        }
    };
    var4['short'] = var7;
    var _closure1_slot14 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarTabListeners.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTabBarTabListeners() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 23;
        var6 = var7[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var6);
        var8 = var9.useTapSequencer;
        var6 = _closure1_slot13;
        var6 = var8.bind(var9)(var6);
        var _closure2_slot0 = var6;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useTapSequencer;
        var3 = _closure1_slot14;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = {};
            var2 = {};
            var4 = function tabPress() {
                var2 = _closure2_slot0;
                var1 = var2.handleShortPress;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2['tabPress'] = var4;
            var4 = function tabLongPress() {
                var2 = _closure2_slot0;
                var1 = var2.handleLongPress;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2['tabLongPress'] = var4;
            var1['guilds'] = var2;
            var2 = {};
            var4 = function tabPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.track;
                var3 = _closure1_slot11;
                var4 = var3.REDESIGN_NAV_BAR_CLICKED;
                var3 = {};
                var8 = 'Messages';
                var3['tab'] = var8;
                var3 = var6.bind(var7)(var4, var3);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackTabPressed;
                var2 = _closure1_slot10;
                var2 = var2.MESSAGES;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['tabPress'] = var4;
            var1['messages'] = var2;
            var2 = {};
            var4 = function tabPress() {
                var2 = _closure2_slot1;
                var1 = var2.handleShortPress;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2['tabPress'] = var4;
            var1['notifications'] = var2;
            var2 = {};
            var4 = function tabPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 24;
                    var3 = var5[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.icymiTabBadgeShown;
                    var4 = var3.bind(var4)();
                    var3 = 25;
                    var5 = var5[var3];
                    var5 = var6.bind(var1)(var5);
                    var7 = var5.ICYMIAnalytics;
                    var6 = var7.trackFeedShown;
                    var5 = {};
                    var8 = 'gravity_tab';
                    var5['homeSessionId'] = var8;
                    var8 = 'NoDotShown';
                    if(!var4) { _fun0004_ip = 87; continue _fun0004 }
 81:
                    var8 = 'DotShown';
 87:
                    var5['variant'] = var8;
                    var5 = var6.bind(var7)(var5);
                    if(!var4) { _fun0004_ip = 115; continue _fun0004 }
 99:
                    var6 = _closure1_slot5;
                    var5 = var6.hasOpened;
                    var4 = var5.bind(var6)();
 115:
                    if(!var4) { _fun0004_ip = 192; continue _fun0004 }
 118:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var6 = var3.ICYMIAnalytics;
                    var4 = var6.trackFeedShown;
                    var3 = {'homeSessionId': 'gravity_refresh', 'variant': 'DotShown'};
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var3 = 26;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.reloadICYMITab;
                    var3 = var3.bind(var4)();
 192:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openICYMITab;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var2['tabPress'] = var4;
            var1['icymi'] = var2;
            var2 = {};
            var4 = function tabPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot11;
                var3 = var2.REDESIGN_NAV_BAR_CLICKED;
                var2 = {};
                var6 = 'Happening';
                var2['tab'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['tabPress'] = var4;
            var1['happening'] = var2;
            var2 = {};
            var4 = function tabPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.track;
                var3 = _closure1_slot11;
                var4 = var3.REDESIGN_NAV_BAR_CLICKED;
                var3 = {};
                var8 = 'You';
                var3['tab'] = var8;
                var3 = var6.bind(var7)(var4, var3);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackTabPressed;
                var2 = _closure1_slot10;
                var2 = var2.YOU;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['tabPress'] = var4;
            var6 = _closure1_slot3;
            var5 = undefined;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 128; continue _fun0005 }
 7:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 22;
                        var5 = var2[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = 27;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var5, var2);
                        SaveGenerator(address=54);
 52:
                        return var2;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0005_ip = 125; continue _fun0005 }
 60:
                        var5 = var2.showYouAccountActionSheet;
                        var5 = var5.bind(var2)();
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var5 = var8[var4];
                        var6 = var7.bind(var3)(var5);
                        var5 = var6.triggerHapticFeedback;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.IMPACT_MEDIUM;
                        var4 = var5.bind(var6)(var4);
                        return var3;
 125:
                        return var2;
 128:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var6.bind(var5)(var4);
            var _closure3_slot0 = var4;
            var3 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2['tabLongPress'] = var3;
            var1['you'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();