// app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
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
            if(var2) { _fun0001_ip = 102; continue _fun0001 }
 97:
            var1 = var15.guild_id;
 102:
            var2 = function useIsNewUser() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(var5) { _fun0002_ip = 74; continue _fun0002 }
 68:
                    var1 = var4.createdAt;
 74:
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 146; continue _fun0002 }
 81:
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
 146:
                    return var1;
                }
            };
            var5 = var2.bind(var20)();
            var2 = {};
            var2['guildId'] = var1;
            var1 = function useIsInSmallContext(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!var1) { _fun0003_ip = 85; continue _fun0003 }
 78:
                    var2 = 200;
                    var1 = var3 < var2;
 85:
                    return var1;
                }
            };
            var9 = var1.bind(var20)(var2);
            var2 = {};
            var2['currentTimeMs'] = var17;
            var1 = function useIsInCooldown(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!var1) { _fun0004_ip = 87; continue _fun0004 }
 75:
                    var2 = _closure1_slot13;
                    var2 = var4 + var2;
                    var1 = var3 < var2;
 87:
                    return var1;
                }
            };
            var8 = var1.bind(var20)(var2);
            var1 = {};
            var1['isInCooldown'] = var8;
            var1 = var1.isInCooldown;
            var6 = new Array(0);
            if(var1) { _fun0001_ip = 212; continue _fun0001 }
 170:
            var2 = var6.push;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var1 = var4.bind(var20)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            var1 = var2.bind(var6)(var1);
 212:
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
            if(!var10) { _fun0001_ip = 452; continue _fun0001 }
 434:
            var13 = var7.timeMs;
            var4 = _closure1_slot10;
            var4 = var13 + var4;
            var10 = var12 < var4;
 452:
            if(!var10) { _fun0001_ip = 473; continue _fun0001 }
 455:
            var12 = var11 == var7;
            var4 = undefined;
            if(var12) { _fun0001_ip = 469; continue _fun0001 }
 464:
            var4 = var7.channelId;
 469:
            var10 = var4 === var6;
 473:
            var4 = {};
            var4['currentTimeMs'] = var17;
            var4['recentApplicationCommandMetadata'] = var1;
            var4['channelId'] = var19;
            var12 = var4.currentTimeMs;
            var7 = var4.recentApplicationCommandMetadata;
            var6 = var4.channelId;
            var14 = var11 != var7;
            if(!var14) { _fun0001_ip = 531; continue _fun0001 }
 513:
            var13 = var7.timeMs;
            var4 = _closure1_slot11;
            var4 = var13 + var4;
            var14 = var12 < var4;
 531:
            if(!var14) { _fun0001_ip = 552; continue _fun0001 }
 534:
            var12 = var11 == var7;
            var4 = undefined;
            if(var12) { _fun0001_ip = 548; continue _fun0001 }
 543:
            var4 = var7.channelId;
 548:
            var14 = var4 === var6;
 552:
            var6 = var11 == var1;
            var4 = undefined;
            if(var6) { _fun0001_ip = 566; continue _fun0001 }
 561:
            var4 = var1.applicationId;
 566:
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
            if(!var4) { _fun0001_ip = 744; continue _fun0001 }
 735:
            var18 = var3.channelId;
            var4 = var18 === var19;
 744:
            if(!var4) { _fun0001_ip = 765; continue _fun0001 }
 747:
            var18 = var3.timeMs;
            var16 = _closure1_slot14;
            var16 = var18 + var16;
            var4 = var16 > var17;
 765:
            if(!(var11 != var15)) { _fun0001_ip = 942; continue _fun0001 }
 772:
            var11 = !var14;
            if(!var14) { _fun0001_ip = 781; continue _fun0001 }
 778:
            var11 = var13;
 781:
            if(var11) { _fun0001_ip = 787; continue _fun0001 }
 784:
            var11 = var12;
 787:
            if(var11) { _fun0001_ip = 793; continue _fun0001 }
 790:
            var11 = var8;
 793:
            if(var11) { _fun0001_ip = 810; continue _fun0001 }
 796:
            var11 = true;
            var1['canShowOnboarding'] = var11;
            var1['canShowBotsBanner'] = var11;
 810:
            if(var5) { _fun0001_ip = 816; continue _fun0001 }
 813:
            var5 = !var10;
 816:
            if(var5) { _fun0001_ip = 822; continue _fun0001 }
 819:
            var5 = !var9;
 822:
            if(var5) { _fun0001_ip = 828; continue _fun0001 }
 825:
            var5 = var8;
 828:
            if(var5) { _fun0001_ip = 840; continue _fun0001 }
 831:
            if(!var6) { _fun0001_ip = 837; continue _fun0001 }
 834:
            var6 = var7;
 837:
            var5 = var6;
 840:
            if(var5) { _fun0001_ip = 857; continue _fun0001 }
 843:
            var5 = true;
            var1['canShowOnboarding'] = var5;
            var1['canShowAppsOrActivitiesBanner'] = var5;
 857:
            if(!var2) { _fun0001_ip = 874; continue _fun0001 }
 860:
            var2 = true;
            var1['willShowGlobalSearchOnboarding'] = var2;
            var1['canShowOnboarding'] = var2;
 874:
            var2 = var1.canShowOnboarding;
            var2 = !var2;
            if(!var2) { _fun0001_ip = 889; continue _fun0001 }
 886:
            var2 = var4;
 889:
            if(!var2) { _fun0001_ip = 942; continue _fun0001 }
 892:
            var2 = true;
            var1['canShowOnboarding'] = var2;
            var4 = var3.canShowBotsBanner;
            var1['canShowBotsBanner'] = var4;
            var4 = var3.canShowAppsOrActivitiesBanner;
            var1['canShowAppsOrActivitiesBanner'] = var4;
            var3 = var3.willShowGlobalSearchOnboarding;
            var1['willShowGlobalSearchOnboarding'] = var3;
            var1['fromTriggeredOnboarding'] = var2;
 942:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['RECENT_MESSAGE_MS'] = var2;
    return var1;
})();