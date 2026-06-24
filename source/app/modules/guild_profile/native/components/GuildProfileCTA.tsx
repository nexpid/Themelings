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
    var7 = var4.AnalyticsObjects;
    var _closure1_slot4 = var7;
    var4 = var4.JoinGuildSources;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProfileCustomizationScrollPositions;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GuildProfileCTA.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileCTA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.profile;
            var _closure2_slot0 = var13;
            var6 = var1.context;
            var3 = var1.inviteKey;
            var2 = var1.isLurkerServerPreview;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var15 = 4;
            var1 = var11[var15];
            var1 = var10.bind(var4)(var1);
            var1 = var1.bind(var4)(var13, var6, var3);
            var6 = var1.guildId;
            _closure2_slot1 = var6;
            var7 = var1.validInviteKey;
            _closure2_slot2 = var7;
            var3 = var1.ctaType;
            var1 = 5;
            var1 = var11[var1];
            var8 = var10.bind(var4)(var1);
            var1 = {};
            var12 = _closure1_slot6;
            var12 = var12.GUILD_TAG;
            var1['scrollPosition'] = var12;
            var1 = var8.bind(var4)(var1);
            _closure2_slot3 = var1;
            var16 = _closure1_slot3;
            var12 = var16.useCallback;
            var8 = new Array(1);
            var8[0] = var6;
            var1 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.hideActionSheet;
                var9 = _closure2_slot1;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = 'GuildProfileActionSheet:';
                var4 = var8.bind(var4)(var9);
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var3 = 7;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var12.bind(var16)(var1, var8);
            var14 = var16.useCallback;
            var12 = new Array(2);
            var12[0] = var6;
            var12[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
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
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var1, var12);
            _closure2_slot4 = var14;
            var1 = 9;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var17 = var1.bind(var4)(var6);
            _closure2_slot5 = var17;
            var12 = var16.useCallback;
            var11 = new Array(2);
            var11[0] = var6;
            var1 = null;
            var18 = var1 == var17;
            var10 = undefined;
            if(var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var17.applicationStatus;
case 6:
            var11[1] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot5;
                    var5 = var3.applicationStatus;
case 8:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 10;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.SUBMITTED;
                    if(!(var4 !== var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.REJECTED;
                    if(!(var4 !== var5)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.STARTED;
                    if(!(var4 === var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openMemberVerificationIncompleteAlert;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 14; continue _fun0003;
case 12:
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
                    _fun0003_ip = 14; continue _fun0003;
case 10:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationPendingAlert;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var11 = var12.bind(var16)(var10, var11);
            var17 = _closure1_slot3;
            var12 = var17.useCallback;
            var10 = new Array(4);
            var10[0] = var6;
            var10[1] = var14;
            var13 = var13.visibility;
            var10[2] = var13;
            var10[3] = var7;
            var7 = function() {
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
                    if(!(var5 !== var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var5 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0004_ip = 18; continue _fun0004 }
case 16:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openMemberVerificationModal;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 19; continue _fun0004;
case 18:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 19:
                    return var1;
                }
            };
            var12 = var12.bind(var17)(var7, var10);
            var13 = var17.useCallback;
            var10 = new Array(1);
            var10[0] = var6;
            var7 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var4 = var7.hideActionSheet;
                var9 = _closure2_slot1;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var3 = 'GuildProfileActionSheet:';
                var3 = var8.bind(var3)(var9);
                var3 = var4.bind(var7)(var3);
                var4 = _closure1_slot0;
                var3 = 14;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.startLurking;
                var3 = _closure2_slot1;
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.GUILD_PROFILE;
                var2['object'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var13.bind(var17)(var7, var10);
            var16 = var17.useMemo;
            var10 = function() {
                var1 = {'grow': true, 'size': 'lg', 'variant': 'active'};
                return var1;
            };
            var7 = new Array(0);
            var7 = var16.bind(var17)(var10, var7);
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.IS_MEMBER;
            if(!(var2 !== var3)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.ADOPT_TAG;
            if(!(var2 !== var3)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.HAS_APPLICATION;
            if(!(var2 !== var3)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.APPLY_TO_JOIN;
            if(!(var2 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.LURK_DISCOVERABLE;
            if(!(var2 !== var3)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.JOIN_VIA_INVITE;
            if(!(var2 !== var3)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CTATypes;
            var2 = var2.ACCEPT_ROLES;
            if(!(var2 !== var3)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            return var1;
case 34:
            var3 = _closure1_slot7;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 16;
            var1 = var18[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onPress';
            var1[9] = var14;
            var10 = 17;
            var15 = var18[var10];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.MMlhsr;
            var15 = var15.bind(var16)(var10);
            var10 = 'text';
            var1[9] = var15;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 32:
            var3 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 16;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onPress';
            var1[9] = var14;
            var10 = 17;
            var14 = var17[var10];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.XpeFYr;
            var14 = var14.bind(var15)(var10);
            var10 = 'text';
            var1[9] = var14;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 30:
            var3 = _closure1_slot7;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 16;
            var1 = var16[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onPress';
            var1[9] = var13;
            var10 = 17;
            var13 = var16[var10];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.XpeFYr;
            var13 = var13.bind(var14)(var10);
            var10 = 'text';
            var1[9] = var13;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 28:
            var3 = _closure1_slot7;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 16;
            var1 = var15[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onPress';
            var1[9] = var12;
            var10 = 17;
            var12 = var15[var10];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["7XdMW2"];
            var12 = var12.bind(var13)(var10);
            var10 = 'text';
            var1[9] = var12;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 26:
            var3 = _closure1_slot7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 16;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onPress';
            var1[9] = var11;
            var10 = 17;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["4yfIDk"];
            var11 = var11.bind(var12)(var10);
            var10 = 'text';
            var1[9] = var11;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 24:
            var3 = _closure1_slot7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 16;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var10 = copyDataProperties(var21, var20);
            var10 = function handleGoToTagSettings() {
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
            var9 = 'onPress';
            var1[8] = var10;
            var9 = 17;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.cQDYRu;
            var10 = var10.bind(var11)(var9);
            var9 = 'text';
            var1[8] = var10;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 22:
            var3 = _closure1_slot7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 16;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var21 = var1;
            var20 = var7;
            var7 = copyDataProperties(var21, var20);
            var7 = 'onPress';
            var1[6] = var8;
            var7 = 17;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.KLOhbO;
            var8 = var8.bind(var9)(var7);
            var7 = 'text';
            var1[6] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 20:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guildId'] = var6;
            var5 = _closure1_slot5;
            var5 = var5.GUILD_PROFILE_LURKER;
            var1['joinSource'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();