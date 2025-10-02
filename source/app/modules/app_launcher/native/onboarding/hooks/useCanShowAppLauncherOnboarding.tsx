// app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var10 = 5;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.BuiltInSectionId;
    var _closure1_slot9 = var2;
    var5 = 7;
    var2 = var7[var5];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var10 * var2;
    var _closure1_slot10 = var2;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var10 * var9;
    var _closure1_slot11 = var9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.DAY;
    var9 = 14;
    var9 = var9 * var10;
    var _closure1_slot12 = var9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.HOUR;
    var _closure1_slot13 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.DAY;
    var _closure1_slot14 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useCanShowAppLauncherOnboarding(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var19 = var1.channelId;
            var _closure2_slot0 = var19;
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var17 = var1.bind(var2)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 8;
            var1 = var1[var10];
            var20 = undefined;
            var5 = var2.bind(var20)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var4.bind(var5)(var2, var1);
            var11 = null;
            var2 = var11 == var15;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var15.guild_id;
case 2:
            var2 = function useIsNewUser() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var7 = undefined;
                    var5 = var3.bind(var7)(var1);
                    var4 = var5.useStateFromStores;
                    var1 = _closure1_slot6;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var1 = function() {
                        var2 = _closure1_slot6;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3, var1);
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var4.createdAt;
case 4:
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.extractTimestamp;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure1_slot12;
                    var2 = var4 + var2;
                    var1 = var3 < var2;
case 6:
                    return var1;
                }
            };
            var5 = var2.bind(var20)();
            var2 = {};
            var2['guildId'] = var1;
            var1 = function useIsInSmallContext(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var2 = var2.guildId;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.useStateFromStores;
                    var5 = _closure1_slot5;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = function() {
                        var3 = _closure1_slot5;
                        var2 = var3.getMemberCount;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = 200;
                    var1 = var3 < var2;
case 8:
                    return var1;
                }
            };
            var9 = var1.bind(var20)(var2);
            var2 = {};
            var2['currentTimeMs'] = var17;
            var1 = function useIsInCooldown(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.currentTimeMs;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.useStateFromStores;
                    var1 = _closure1_slot7;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var1 = function() {
                        var2 = _closure1_slot7;
                        var1 = var2.getLastSeenTimeMs;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4, var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure1_slot13;
                    var2 = var4 + var2;
                    var1 = var3 < var2;
case 10:
                    return var1;
                }
            };
            var8 = var1.bind(var20)(var2);
            var1 = {};
            var1['isInCooldown'] = var8;
            var1 = var1.isInCooldown;
            var6 = new Array(0);
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var6.push;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var1 = var4.bind(var20)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            var1 = var2.bind(var6)(var1);
case 12:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var2 = var7.bind(var20)(var1);
            var1 = var2.useSelectedDismissibleContent;
            var12 = var1.bind(var2)(var6);
            var1 = {};
            var6 = _closure1_slot3;
            var2 = 1;
            var6 = var6.bind(var20)(var12, var2);
            var2 = 0;
            var6 = var6[var2];
            var21 = 10;
            var2 = var4[var21];
            var2 = var7.bind(var20)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            var2 = var6 === var2;
            var1['willShowGlobalSearchOnboarding'] = var2;
            var2 = var1.willShowGlobalSearchOnboarding;
            var1 = var4[var10];
            var13 = var7.bind(var20)(var1);
            var12 = var13.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot8;
                var2 = var3.getRecentMessageMetadata;
                var2 = var2.bind(var3)();
                var1['recentMessageMetadata'] = var2;
                var2 = var3.getRecentApplicationCommandMetadata;
                var2 = var2.bind(var3)();
                var1['recentApplicationCommandMetadata'] = var2;
                return var1;
            };
            var1 = var12.bind(var13)(var6, var1);
            var6 = var1.recentMessageMetadata;
            var1 = var1.recentApplicationCommandMetadata;
            var4 = var4[var10];
            var10 = var7.bind(var20)(var4);
            var7 = var10.useStateFromStores;
            var12 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getTriggeredOnboardingContentMetadata;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var10)(var4, var3);
            var4 = {};
            var4['currentTimeMs'] = var17;
            var4['recentMessageMetadata'] = var6;
            var4['channelId'] = var19;
            var12 = var4.currentTimeMs;
            var7 = var4.recentMessageMetadata;
            var6 = var4.channelId;
            var10 = var11 != var7;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = var7.timeMs;
            var4 = _closure1_slot10;
            var4 = var13 + var4;
            var10 = var12 < var4;
case 14:
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var11 == var7;
            var4 = undefined;
            if(var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var7.channelId;
case 18:
            var10 = var4 === var6;
case 16:
            var4 = {};
            var4['currentTimeMs'] = var17;
            var4['recentApplicationCommandMetadata'] = var1;
            var4['channelId'] = var19;
            var12 = var4.currentTimeMs;
            var7 = var4.recentApplicationCommandMetadata;
            var6 = var4.channelId;
            var14 = var11 != var7;
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var7.timeMs;
            var4 = _closure1_slot11;
            var4 = var13 + var4;
            var14 = var12 < var4;
case 20:
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = var11 == var7;
            var4 = undefined;
            if(var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var7.channelId;
case 24:
            var14 = var4 === var6;
case 22:
            var6 = var11 == var1;
            var4 = undefined;
            if(var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4 = var1.applicationId;
case 26:
            var1 = _closure1_slot9;
            var1 = var1.BUILT_IN;
            var13 = var4 === var1;
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 12;
            var6 = var1[var4];
            var12 = var18.bind(var20)(var6);
            var7 = var12.UNSAFE_useIsDismissibleContentDismissed;
            var6 = var1[var21];
            var6 = var18.bind(var20)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            var12 = var7.bind(var12)(var6);
            var6 = var1[var4];
            var22 = var18.bind(var20)(var6);
            var7 = var22.UNSAFE_useIsDismissibleContentDismissed;
            var6 = var1[var21];
            var6 = var18.bind(var20)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            var6 = var7.bind(var22)(var6);
            var4 = var1[var4];
            var7 = var18.bind(var20)(var4);
            var4 = var7.UNSAFE_useIsDismissibleContentDismissed;
            var1 = var1[var21];
            var1 = var18.bind(var20)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            var7 = var4.bind(var7)(var1);
            var1 = {'canShowOnboarding': false, 'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'fromTriggeredOnboarding': false};
            var4 = var11 != var3;
            if(!var4) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var18 = var3.channelId;
            var4 = var18 === var19;
case 28:
            if(!var4) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var18 = var3.timeMs;
            var16 = _closure1_slot14;
            var16 = var18 + var16;
            var4 = var16 > var17;
case 30:
            if(!(var11 != var15)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var11 = !var14;
            if(!var14) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var11 = var13;
case 34:
            if(var11) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = var12;
case 36:
            if(var11) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var11 = var8;
case 38:
            if(var11) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var11 = true;
            var1['canShowOnboarding'] = var11;
            var1['canShowBotsBanner'] = var11;
case 40:
            if(var5) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var5 = !var10;
case 42:
            if(var5) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var5 = !var9;
case 44:
            if(var5) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var5 = var8;
case 46:
            if(var5) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(!var6) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var6 = var7;
case 50:
            var5 = var6;
case 48:
            if(var5) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var5 = true;
            var1['canShowOnboarding'] = var5;
            var1['canShowAppsOrActivitiesBanner'] = var5;
case 52:
            if(!var2) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var2 = true;
            var1['willShowGlobalSearchOnboarding'] = var2;
            var1['canShowOnboarding'] = var2;
case 54:
            var2 = var1.canShowOnboarding;
            var2 = !var2;
            if(!var2) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var2 = var4;
case 56:
            if(!var2) { _fun0001_ip = 32; continue _fun0001 }
case 58:
            var2 = true;
            var1['canShowOnboarding'] = var2;
            var4 = var3.canShowBotsBanner;
            var1['canShowBotsBanner'] = var4;
            var4 = var3.canShowAppsOrActivitiesBanner;
            var1['canShowAppsOrActivitiesBanner'] = var4;
            var3 = var3.willShowGlobalSearchOnboarding;
            var1['willShowGlobalSearchOnboarding'] = var3;
            var1['fromTriggeredOnboarding'] = var2;
case 32:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['RECENT_MESSAGE_MS'] = var2;
    return var1;
})();