// app/modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChatInputActionType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChatInputActionButtonApps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.active;
            var13 = var1.disabled;
            var8 = var1.style;
            var15 = var1.styleButton;
            var12 = var1.styleActiveIcon;
            var14 = var1.channel;
            var _closure2_slot0 = var14;
            var1 = var1.onPress;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot3;
            var1 = var2.useRef;
            var5 = null;
            var6 = var1.bind(var2)(var5);
            var _closure2_slot2 = var6;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var3 = var14.id;
            var1['channelId'] = var3;
            var1 = var2.bind(var4)(var1);
            var7 = var1.canShowOnboarding;
            var17 = var1.canShowBotsBanner;
            var _closure2_slot3 = var17;
            var18 = var1.canShowAppsOrActivitiesBanner;
            var _closure2_slot4 = var18;
            var2 = var1.fromTriggeredOnboarding;
            var1 = var1.willShowGlobalSearchOnboarding;
            var _closure2_slot5 = var1;
            if(!var7) { _fun0001_ip = 168; continue _fun0001 }
 165:
            var7 = !var2;
 168:
            _closure2_slot6 = var7;
            var16 = _closure1_slot3;
            var3 = var16.useRef;
            var2 = -1;
            var2 = var3.bind(var16)(var2);
            _closure2_slot7 = var2;
            var3 = var16.useEffect;
            var2 = new Array(6);
            var2[0] = var7;
            var2[1] = var18;
            var2[2] = var17;
            var18 = var5 == var14;
            var17 = undefined;
            if(var18) { _fun0001_ip = 231; continue _fun0001 }
 226:
            var17 = var14.guild_id;
 231:
            var2[3] = var17;
            var17 = var14.id;
            var2[4] = var17;
            var2[5] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0002_ip = 462; continue _fun0002 }
 13:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 153; continue _fun0002 }
 23:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 271; continue _fun0002 }
 33:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.setTriggeredOnboardingContentMetadata;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var6 = var7.id;
                    var2['channelId'] = var6;
                    var6 = global;
                    var8 = var6.Date;
                    var6 = var8.now;
                    var6 = var6.bind(var8)();
                    var2['timeMs'] = var6;
                    var6 = null;
                    var6 = var6 == var7;
                    if(var6) { _fun0002_ip = 119; continue _fun0002 }
 110:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
 119:
                    var2['guildId'] = var5;
                    var5 = false;
                    var2['canShowBotsBanner'] = var5;
                    var5 = true;
                    var2['canShowAppsOrActivitiesBanner'] = var5;
                    var5 = _closure2_slot5;
                    var2['willShowGlobalSearchOnboarding'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 271; continue _fun0002;
 153:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.setTriggeredOnboardingContentMetadata;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var6 = var7.id;
                    var2['channelId'] = var6;
                    var6 = global;
                    var8 = var6.Date;
                    var6 = var8.now;
                    var6 = var6.bind(var8)();
                    var2['timeMs'] = var6;
                    var6 = null;
                    var6 = var6 == var7;
                    if(var6) { _fun0002_ip = 239; continue _fun0002 }
 230:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
 239:
                    var2['guildId'] = var5;
                    var5 = true;
                    var2['canShowBotsBanner'] = var5;
                    var5 = false;
                    var2['canShowAppsOrActivitiesBanner'] = var5;
                    var5 = _closure2_slot5;
                    var2['willShowGlobalSearchOnboarding'] = var5;
                    var2 = var3.bind(var4)(var2);
 271:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 398; continue _fun0002 }
 278:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.setTriggeredOnboardingContentMetadata;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var6 = var7.id;
                    var2['channelId'] = var6;
                    var6 = global;
                    var8 = var6.Date;
                    var6 = var8.now;
                    var6 = var6.bind(var8)();
                    var2['timeMs'] = var6;
                    var6 = null;
                    var6 = var6 == var7;
                    if(var6) { _fun0002_ip = 364; continue _fun0002 }
 355:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
 364:
                    var2['guildId'] = var5;
                    var5 = _closure2_slot4;
                    var2['canShowAppsOrActivitiesBanner'] = var5;
                    var5 = _closure2_slot3;
                    var2['canShowBotsBanner'] = var5;
                    var5 = true;
                    var2['willShowGlobalSearchOnboarding'] = var5;
                    var2 = var3.bind(var4)(var2);
 398:
                    var2 = _closure2_slot7;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setLastSeenTimeMs;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var1 = var5.bind(var4)(var1, var3);
                    var2['current'] = var1;
 462:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var16)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var8;
            var1['ref'] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 336; continue _fun0001 }
 284:
            var6 = null;
            if(var10) { _fun0001_ip = 336; continue _fun0001 }
 289:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 6;
            var5 = var16[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.AppLauncherOnboardingChatInputButtonAnimation;
            var5 = {};
            var14 = var14.id;
            var5['channelId'] = var14;
            var6 = var8.bind(var4)(var7, var5);
 336:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 7;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['style'] = var15;
            var6['disabled'] = var13;
            var6['active'] = var10;
            var6['activeIconStyle'] = var12;
            var11 = function onPress(arg1) {
                var1 = global;
                var3 = var1.clearTimeout;
                var1 = _closure2_slot7;
                var2 = var1.current;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var6 = _closure2_slot1;
                var3 = _closure1_slot5;
                var4 = var3.APPS;
                var3 = arg1;
                var3 = var6.bind(var1)(var3, var4);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setAccessibilityFocus;
                var2 = {};
                var5 = _closure2_slot2;
                var2['ref'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var11;
            var13 = _closure1_slot0;
            var9 = 9;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.AppLauncherButtonIcon;
            var6['IconComponent'] = var9;
            var9 = 10;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.rugBPj;
            var9 = var11.bind(var12)(var9);
            var6['accessibilityLabel'] = var9;
            var9 = {};
            var9['expanded'] = var10;
            var6['accessibilityState'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();