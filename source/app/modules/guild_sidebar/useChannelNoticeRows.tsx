// app/modules/guild_sidebar/useChannelNoticeRows.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MFALevels;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useChannelNoticeRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelNoticeRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = var2.id;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 10;
            var9 = var8[var4];
            var3 = undefined;
            var12 = var5.bind(var3)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot5;
                var2 = var3.hasProgress;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var10, var9);
            var _closure2_slot2 = var14;
            var10 = _closure1_slot8;
            var9 = var10.getCurrentUser;
            var12 = var9.bind(var10)();
            var _closure2_slot3 = var12;
            var4 = var8[var4];
            var11 = var5.bind(var3)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = new Array(3);
            var4[0] = var12;
            var2 = var2.mfaLevel;
            var4[1] = var2;
            var4[2] = var1;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var4 = var3.mfaLevel;
                    var3 = _closure1_slot10;
                    var3 = var3.ELEVATED;
                    var1 = var4 === var3;
case 2:
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot3;
                    var3 = var3.mfaEnabled;
                    var1 = !var3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot6;
                    var3 = var4.hasElevatedPermissions;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var13 = var10.bind(var11)(var9, var2, var4);
            var _closure2_slot4 = var13;
            var2 = 16;
            var2 = var8[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useGuildHasLiveChannelNotice;
            var12 = var2.bind(var4)(var1);
            var _closure2_slot5 = var12;
            var2 = 17;
            var2 = var8[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useCanShowGameClaimCoachmark;
            var2 = var2.bind(var4)(var1);
            var4 = 14;
            var4 = var8[var4];
            var9 = var5.bind(var3)(var4);
            var8 = var9.useSelectedSingleUseGuildDismissibleContent;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = new Array(0);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.DismissibleContent;
            var4 = var2.GAME_CLAIM_COACHMARK;
            var2 = new Array(1);
            var2[0] = var4;
            var5 = var2;
case 10:
            var2 = _closure1_slot11;
            var16 = var2.CHANNEL_NOTICES;
            var15 = true;
            var19 = var9;
            var18 = var5;
            var17 = var1;
            var5 = var19[var8](var18, var17, var16, var15, var14);
            var4 = _closure1_slot3;
            var2 = 2;
            var5 = var4.bind(var3)(var5, var2);
            var2 = 0;
            var4 = var5[var2];
            var2 = 1;
            var5 = var5[var2];
            var2 = null;
            var11 = var2 != var4;
            var _closure2_slot6 = var11;
            var2 = {};
            var2['guildId'] = var1;
            var1 = function useMobileAccountLinkRow(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var12 = var1.guildId;
                    var _closure3_slot0 = var12;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.useConfig;
                    var3 = {};
                    var7 = 'useMobileAccountLinkRow';
                    var3['location'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.enabled;
                    var3 = _closure1_slot0;
                    var4 = 10;
                    var4 = var6[var4];
                    var9 = var3.bind(var8)(var4);
                    var7 = var9.useStateFromStoresArray;
                    var10 = _closure1_slot7;
                    var4 = new Array(1);
                    var4[0] = var10;
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuild;
                            var1 = _closure3_slot0;
                            var3 = var2.bind(var3)(var1);
                            var2 = null;
                            var4 = var2 == var3;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var1 = var3.gameApplicationIds;
case 11:
                            if(!(var2 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var1 = new Array(0);
case 13:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var9)(var4, var2);
                    var4 = 0;
                    var9 = var2[var4];
                    var2 = 11;
                    var2 = var6[var2];
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.useApplication;
                    var6 = null;
                    var2 = null;
                    if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = var9;
case 15:
                    var2 = var3.bind(var7)(var2);
                    var7 = var2.data;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 12;
                    var2 = var14[var2];
                    var3 = var11.bind(var8)(var2);
                    var2 = var3.useStartAuthorize;
                    var2 = var2.bind(var3)(var7);
                    var10 = var2.fetched;
                    var9 = var2.hasAlreadyLinked;
                    var7 = var2.canStartAuthorization;
                    var13 = var2.startAuthorization;
                    var2 = var2.connectionApp;
                    var3 = 13;
                    var3 = var14[var3];
                    var11 = var11.bind(var8)(var3);
                    var3 = var11.useDefaultAuthorizationNotifiers;
                    var3 = var3.bind(var11)(var13, var9);
                    if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var5 = var10;
case 17:
                    if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var5 = !var9;
case 19:
                    if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var5 = var7;
case 21:
                    if(!var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var5 = var6 != var2;
case 23:
                    if(!var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var7 = var2.applicationAccountLinkBenefitConfig;
                    var5 = var6 != var7;
case 25:
                    if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var7 = var2.applicationAccountLinkBenefitConfig;
                    var7 = var7.reward_name;
                    var5 = var6 != var7;
case 27:
                    if(!var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var7 = var2.applicationAccountLinkBenefitConfig;
                    var7 = var7.reward_image;
                    var5 = var6 != var7;
case 29:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 14;
                    var7 = var10[var7];
                    var11 = var9.bind(var8)(var7);
                    var10 = var11.useSelectedSingleUseGuildDismissibleContent;
                    if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var9 = new Array(0);
                    _fun0003_ip = 33; continue _fun0003;
case 31:
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 15;
                    var5 = var13[var5];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.DismissibleContent;
                    var7 = var5.MOBILE_ACCOUNT_LINKING_BANNER;
                    var5 = new Array(1);
                    var5[0] = var7;
                    var9 = var5;
case 33:
                    var5 = _closure1_slot11;
                    var16 = var5.CHANNEL_NOTICES;
                    var15 = true;
                    var19 = var11;
                    var18 = var9;
                    var17 = var12;
                    var7 = var19[var10](var18, var17, var16, var15, var14);
                    var5 = _closure1_slot3;
                    var1 = 2;
                    var5 = var5.bind(var8)(var7, var1);
                    var1 = {};
                    var4 = var5[var4];
                    var4 = var6 != var4;
                    var1['showApplicationAccountLink'] = var4;
                    var4 = 1;
                    var4 = var5[var4];
                    var1['applicationAccountLinkMarkAsDismissed'] = var4;
                    var1['startApplicationAccountLinkAuthorization'] = var3;
                    var1['accountLinkApplication'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var3)(var2);
            var10 = var1.showApplicationAccountLink;
            var _closure2_slot7 = var10;
            var4 = var1.applicationAccountLinkMarkAsDismissed;
            var3 = var1.startApplicationAccountLinkAuthorization;
            var2 = var1.accountLinkApplication;
            var1 = {};
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(5);
            var7[0] = var14;
            var7[1] = var13;
            var7[2] = var12;
            var7[3] = var11;
            var7[4] = var10;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure1_slot9;
                    var3 = var1.SPACER;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var5 = var1.push;
                    var4 = _closure1_slot9;
                    var4 = var4.GAME_CLAIM;
                    var4 = var5.bind(var1)(var4);
case 34:
                    var4 = _closure2_slot7;
                    if(!var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var5 = var1.push;
                    var4 = _closure1_slot9;
                    var4 = var4.APPLICATION_ACCOUNT_LINK;
                    var4 = var5.bind(var1)(var4);
case 36:
                    var4 = _closure2_slot2;
                    if(var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var4 = _closure2_slot4;
                    if(!var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var5 = var1.push;
                    var4 = _closure1_slot9;
                    var4 = var4.MFA_WARNING;
                    var4 = var5.bind(var1)(var4);
                    _fun0005_ip = 40; continue _fun0005;
case 38:
                    var5 = var1.push;
                    var4 = _closure1_slot9;
                    var4 = var4.GUILD_PROGRESS;
                    var4 = var5.bind(var1)(var4);
case 40:
                    var3 = _closure2_slot5;
                    if(!var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var3 = var1.push;
                    var2 = _closure1_slot9;
                    var2 = var2.LIVE_CHANNEL_NOTICE;
                    var2 = var3.bind(var1)(var2);
case 42:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            var1['rows'] = var6;
            var1['gameClaimMarkAsDismissed'] = var5;
            var1['applicationAccountLinkMarkAsDismissed'] = var4;
            var1['startApplicationAccountLinkAuthorization'] = var3;
            var1['accountLinkApplication'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();