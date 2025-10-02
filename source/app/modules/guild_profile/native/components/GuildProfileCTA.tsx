// app/modules/guild_profile/native/components/GuildProfileCTA.tsx
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsObjects;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProfileCustomizationScrollPositions;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GuildProfileCTA.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileCTA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.profile;
            var _closure2_slot0 = var12;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var14 = 4;
            var2 = var10[var14];
            var4 = undefined;
            var2 = var9.bind(var4)(var2);
            var2 = var2.bind(var4)(var12);
            var3 = var2.guildId;
            var _closure2_slot1 = var3;
            var5 = var2.validInviteKey;
            var _closure2_slot2 = var5;
            var7 = var2.ctaType;
            var2 = 5;
            var2 = var10[var2];
            var6 = var9.bind(var4)(var2);
            var2 = {};
            var11 = _closure1_slot5;
            var11 = var11.GUILD_TAG;
            var2['scrollPosition'] = var11;
            var2 = var6.bind(var4)(var2);
            var _closure2_slot3 = var2;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.hideActionSheet;
                var4 = _closure2_slot1;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var3 = 'GuildProfileActionSheet:';
                var3 = var8.bind(var3)(var4);
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = 7;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.transitionToGuild;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var6 = var11.bind(var15)(var2, var6);
            var13 = var15.useCallback;
            var11 = new Array(2);
            var11[0] = var3;
            var11[1] = var5;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 6;
                    var1 = var5[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var1);
                    var6 = var7.hideActionSheet;
                    var9 = _closure2_slot1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var1 = 'GuildProfileActionSheet:';
                    var1 = var8.bind(var1)(var9);
                    var1 = var6.bind(var7)(var1);
                    var1 = 8;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.acceptInviteAndTransitionToInviteChannel;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1['inviteKey'] = var4;
                    var4 = {};
                    var5 = 'guild_profile';
                    var4['location'] = var5;
                    var1['context'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var13.bind(var15)(var2, var11);
            var _closure2_slot4 = var13;
            var2 = 9;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var16 = var2.bind(var4)(var3);
            var _closure2_slot5 = var16;
            var11 = var15.useCallback;
            var10 = new Array(2);
            var10[0] = var3;
            var2 = null;
            var17 = var2 == var16;
            var9 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var16.applicationStatus;
case 4:
            var10[1] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot5;
                    var5 = var3.applicationStatus;
case 6:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 10;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.SUBMITTED;
                    if(!(var4 !== var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.REJECTED;
                    if(!(var4 !== var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.STARTED;
                    if(!(var4 === var5)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openMemberVerificationIncompleteAlert;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openMemberVerificationRejectedAlert;
                    var4 = {};
                    var7 = _closure2_slot1;
                    var4['guildId'] = var7;
                    var7 = true;
                    var4['canWithdraw'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 12; continue _fun0003;
case 8:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationPendingAlert;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var10 = var11.bind(var15)(var9, var10);
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var9 = new Array(4);
            var9[0] = var3;
            var9[1] = var13;
            var12 = var12.visibility;
            var9[2] = var12;
            var9[3] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 6;
                    var2 = var7[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.hideActionSheet;
                    var9 = _closure2_slot1;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'GuildProfileActionSheet:';
                    var4 = var8.bind(var4)(var9);
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var5 = var4.visibility;
                    var6 = _closure1_slot0;
                    var4 = 12;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildProfileVisibility;
                    var4 = var4.PUBLIC_WITH_RECRUITMENT;
                    if(!(var5 !== var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0004_ip = 16; continue _fun0004 }
case 14:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openMemberVerificationModal;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 17; continue _fun0004;
case 16:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 17:
                    return var1;
                }
            };
            var11 = var11.bind(var15)(var5, var9);
            var9 = var15.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var3 = var7.hideActionSheet;
                var5 = _closure2_slot1;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = 'GuildProfileActionSheet:';
                var2 = var8.bind(var2)(var5);
                var2 = var3.bind(var7)(var2);
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.startLurking;
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.GUILD_PROFILE;
                var2['object'] = var6;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
            var12 = var9.bind(var15)(var3, var5);
            var9 = var15.useMemo;
            var5 = function() {
                var1 = {'grow': true, 'size': 'lg', 'variant': 'active'};
                return var1;
            };
            var3 = new Array(0);
            var5 = var9.bind(var15)(var5, var3);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.IS_MEMBER;
            if(!(var3 !== var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.ADOPT_TAG;
            if(!(var3 !== var7)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.HAS_APPLICATION;
            if(!(var3 !== var7)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.APPLY_TO_JOIN;
            if(!(var3 !== var7)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.LURK_DISCOVERABLE;
            if(!(var3 !== var7)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CTATypes;
            var3 = var3.JOIN_VIA_INVITE;
            if(!(var3 !== var7)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            return var2;
case 28:
            var7 = _closure1_slot6;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 15;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var9 = copyDataProperties(var19, var18);
            var9 = 'onPress';
            var2[var9] = var13;
            var9 = 16;
            var13 = var16[var9];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.XpeFYm;
            var13 = var13.bind(var14)(var9);
            var9 = 'text';
            var2[var9] = var13;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 26:
            var7 = _closure1_slot6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var9 = copyDataProperties(var19, var18);
            var9 = 'onPress';
            var2[var9] = var12;
            var9 = 16;
            var12 = var15[var9];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.XpeFYm;
            var12 = var12.bind(var13)(var9);
            var9 = 'text';
            var2[var9] = var12;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 24:
            var7 = _closure1_slot6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 15;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var9 = copyDataProperties(var19, var18);
            var9 = 'onPress';
            var2[var9] = var11;
            var9 = 16;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.7XdMW1;
            var11 = var11.bind(var12)(var9);
            var9 = 'text';
            var2[var9] = var11;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 22:
            var7 = _closure1_slot6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var2 = var13[var2];
            var2 = var12.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var9 = copyDataProperties(var19, var18);
            var9 = 'onPress';
            var2[var9] = var10;
            var9 = 16;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.4yfIDg;
            var10 = var10.bind(var11)(var9);
            var9 = 'text';
            var2[var9] = var10;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 20:
            var7 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 15;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var9 = copyDataProperties(var19, var18);
            var9 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.hideActionSheet;
                var7 = _closure2_slot1;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var3 = 'GuildProfileActionSheet:';
                var3 = var6.bind(var3)(var7);
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = 'onPress';
            var2[var8] = var9;
            var8 = 16;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.cQDYRk;
            var9 = var9.bind(var10)(var8);
            var8 = 'text';
            var2[var8] = var9;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 18:
            var3 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var19 = var1;
            var18 = var5;
            var5 = copyDataProperties(var19, var18);
            var5 = 'onPress';
            var1[var5] = var6;
            var5 = 16;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.KLOhbG;
            var6 = var6.bind(var7)(var5);
            var5 = 'text';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();