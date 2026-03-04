// app/modules/chat_input/native/guard/ChatInputGuardWrapper.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isThread;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TextAreaCta;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot12 = var7;
    var4 = var4.VerificationCriteria;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatInputGuardWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channel;
            var _closure2_slot0 = var7;
            var8 = var1.screenIndex;
            var5 = var1.canSendMessages;
            var3 = var1.canCreateThreads;
            var2 = var1.children;
            var18 = var1.isReadonly;
            var6 = var1.onJumpToPresent;
            var1 = var7.getGuildId;
            var12 = var1.bind(var7)();
            var _closure2_slot1 = var12;
            var14 = _closure1_slot0;
            var26 = _closure1_slot2;
            var13 = 12;
            var9 = var26[var13];
            var4 = undefined;
            var16 = var14.bind(var4)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.guildHasVerificationGate;
                var5 = _closure1_slot6;
                var4 = var5.getGuild;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var15.bind(var16)(var10, var9);
            var _closure2_slot2 = var9;
            var10 = var26[var13];
            var17 = var14.bind(var4)(var10);
            var16 = var17.useStateFromStores;
            var10 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var10;
            var10 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCheck;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var16.bind(var17)(var15, var10);
            var23 = var10.notClaimed;
            var _closure2_slot3 = var23;
            var22 = var10.notPhoneVerified;
            var21 = var10.notEmailVerified;
            var20 = var10.newMember;
            var19 = var10.newAccount;
            var16 = var10.memberDeadline;
            var17 = var10.accountDeadline;
            var10 = var26[var13];
            var24 = var14.bind(var4)(var10);
            var15 = var24.useStateFromStoresObject;
            var10 = _closure1_slot9;
            var14 = new Array(2);
            var14[0] = var10;
            var10 = _closure1_slot5;
            var14[1] = var10;
            var10 = new Array(3);
            var10[0] = var12;
            var10[1] = var9;
            var10[2] = var23;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getCurrentUser;
                    var5 = var1.bind(var3)();
                    var3 = null;
                    var1 = var3 != var5;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot1;
                    var6 = var3 != var6;
                    var4 = null;
                    if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var8 = _closure1_slot5;
                    var7 = var8.getMember;
                    var6 = _closure2_slot1;
                    var1 = var5.id;
                    var4 = var7.bind(var8)(var6, var1);
case 2:
                    var1 = {};
                    var1['user'] = var5;
                    var3 = var3 == var4;
                    var5 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = var4.isPending;
case 5:
                    var3 = true;
                    var3 = var3 === var6;
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = _closure2_slot3;
case 7:
                    if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure2_slot2;
case 9:
                    var1['showMemberVerificationModal'] = var3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var6 = var6.bind(var5)(var3);
                    var3 = var6.isMemberCommunicationDisabled;
                    var6 = var3.bind(var6)(var4);
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = var4;
case 11:
                    var1['communicationDisabledGuildMember'] = var3;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.hasAutomodQuarantinedProfile;
                    var2 = var2.bind(var3)(var4);
                    var1['automodUserProfileQuarantined'] = var2;
                    return var1;
                }
            };
            var10 = var15.bind(var24)(var14, var9, var10);
            var14 = var10.user;
            var9 = var10.showMemberVerificationModal;
            var15 = var10.communicationDisabledGuildMember;
            var24 = var10.automodUserProfileQuarantined;
            var25 = _closure1_slot1;
            var10 = 16;
            var10 = var26[var10];
            var10 = var25.bind(var4)(var10);
            var27 = var10.bind(var4)(var14, var7);
            var14 = var7.type;
            var10 = _closure1_slot12;
            var10 = var10.GUILD_ANNOUNCEMENT;
            var10 = var14 === var10;
            if(!var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = !var5;
case 13:
            var14 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 17;
            var5 = var25[var5];
            var25 = var14.bind(var4)(var5);
            var14 = var25.useIsMessageRequest;
            var5 = var7.id;
            var29 = var14.bind(var25)(var5);
            if(!var29) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var7.isPrivate;
            var29 = var5.bind(var7)();
case 15:
            var14 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 18;
            var5 = var25[var5];
            var25 = var14.bind(var4)(var5);
            var14 = var25.useIsSpamMessageRequest;
            var5 = var7.id;
            var28 = var14.bind(var25)(var5);
            if(!var28) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var7.isPrivate;
            var28 = var5.bind(var7)();
case 17:
            var5 = var7.isForumPost;
            var5 = var5.bind(var7)();
            var14 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = var32[var13];
            var33 = var14.bind(var4)(var25);
            var31 = var33.useStateFromStores;
            var25 = _closure1_slot8;
            var30 = new Array(1);
            var30[0] = var25;
            var26 = new Array(1);
            var26[0] = var7;
            var25 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure1_slot8;
                    var3 = var4.isBlocked;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var25 = var31.bind(var33)(var30, var25, var26);
            var13 = var32[var13];
            var31 = var14.bind(var4)(var13);
            var30 = var31.useStateFromStores;
            var13 = _closure1_slot3;
            var26 = new Array(1);
            var26[0] = var13;
            var14 = new Array(1);
            var14[0] = var12;
            var13 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = _closure1_slot3;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 21:
                    return var1;
                }
            };
            var26 = var30.bind(var31)(var26, var13, var14);
            var31 = _closure1_slot1;
            var13 = 19;
            var13 = var32[var13];
            var14 = var31.bind(var4)(var13);
            var13 = var7.linkedLobby;
            var13 = var14.bind(var4)(var13);
            var14 = var13.showLinkedLobbyApplicationLoadingIndicator;
            var13 = var13.requiredLinkedLobbyApplication;
            var30 = 20;
            var30 = var32[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var7.id;
            var30 = var31.bind(var4)(var30);
            if(var29) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(var28) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var28 = var7.isSystemDM;
            var28 = var28.bind(var7)();
            if(var28) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var27) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            if(var26) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(var10) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            if(var25) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            if(var9) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            if(var14) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = null;
            if(!(var9 == var13)) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            if(!(var9 == var15)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            if(var24) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            if(var23) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(var22) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            if(var21) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            if(var20) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            if(var19) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            if(!var18) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            if(!(var9 != var12)) { _fun0001_ip = 55; continue _fun0001 }
case 57:
            if(var5) { _fun0001_ip = 55; continue _fun0001 }
case 58:
            var9 = _closure1_slot4;
            var5 = var7.type;
            var5 = var9.bind(var4)(var5);
            if(var5) { _fun0001_ip = 55; continue _fun0001 }
case 59:
            var18 = _closure1_slot15;
            var9 = _closure1_slot1;
            var23 = _closure1_slot2;
            if(var3) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var3 = 42;
            var3 = var23[var3];
            var5 = var9.bind(var4)(var3);
            var3 = {};
            var3['guildId'] = var12;
            var3['channel'] = var7;
            var5 = var18.bind(var4)(var5, var3);
            _fun0001_ip = 62; continue _fun0001;
case 60:
            var3 = 31;
            var3 = var23[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var19 = 'button-action';
            var3['type'] = var19;
            var22 = _closure1_slot0;
            var19 = 33;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var24 = var20.intl;
            var21 = var24.string;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.Yi2xuY;
            var20 = var21.bind(var24)(var20);
            var3['message'] = var20;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.rBIGBL;
            var19 = var20.bind(var21)(var19);
            var3['buttonPrimaryText'] = var19;
            var19 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'chat input guard';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['buttonPrimaryOnPress'] = var19;
            var5 = var18.bind(var4)(var9, var3);
case 62:
            _fun0001_ip = 63; continue _fun0001;
case 55:
            return var2;
case 53:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 31;
            var2 = var22[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var18 = 'simple-action';
            var2['type'] = var18;
            var19 = _closure1_slot0;
            var18 = 41;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var20 = var18.CalendarIcon;
            var18 = {};
            var18 = var9.bind(var4)(var20, var18);
            var2['icon'] = var18;
            var18 = 33;
            var20 = var22[var18];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.2JA2GH;
            var18 = {};
            var22 = _closure1_slot13;
            var22 = var22.ACCOUNT_AGE;
            var18['min'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var2['message'] = var18;
            var2['countdown'] = var17;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 51:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 31;
            var2 = var21[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var17 = 'simple-action';
            var2['type'] = var17;
            var18 = _closure1_slot0;
            var17 = 41;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var19 = var17.CalendarIcon;
            var17 = {};
            var17 = var9.bind(var4)(var19, var17);
            var2['icon'] = var17;
            var17 = 33;
            var19 = var21[var17];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.IH7RMF;
            var17 = {};
            var21 = _closure1_slot13;
            var21 = var21.MEMBER_AGE;
            var17['min'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var2['message'] = var17;
            var2['countdown'] = var16;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 49:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 31;
            var2 = var20[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var16 = 'button-action';
            var2['type'] = var16;
            var19 = _closure1_slot0;
            var16 = 33;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var21 = var17.intl;
            var18 = var21.string;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.FkGPS5;
            var17 = var18.bind(var21)(var17);
            var2['message'] = var17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.lm1UKt;
            var16 = var17.bind(var18)(var16);
            var2['buttonPrimaryText'] = var16;
            var16 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.trackWithMetadata;
                var2 = _closure1_slot11;
                var5 = var2.TEXT_AREA_CTA_CLICKED;
                var2 = {};
                var8 = _closure1_slot10;
                var8 = var8.VERIFY_EMAIL;
                var2['cta_type'] = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 27;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var16;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 47:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 31;
            var2 = var20[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var16 = 'button-action';
            var2['type'] = var16;
            var19 = _closure1_slot0;
            var16 = 33;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var21 = var17.intl;
            var18 = var21.string;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.2dThMM;
            var17 = var18.bind(var21)(var17);
            var2['message'] = var17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.50gfOv;
            var16 = var17.bind(var18)(var16);
            var2['buttonPrimaryText'] = var16;
            var16 = function buttonPrimaryOnPress() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 21;
                var3 = var9[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.trackWithMetadata;
                var3 = _closure1_slot11;
                var5 = var3.TEXT_AREA_CTA_CLICKED;
                var3 = {};
                var8 = _closure1_slot10;
                var8 = var8.VERIFY_PHONE;
                var3['cta_type'] = var8;
                var3 = var6.bind(var7)(var5, var3);
                var3 = 23;
                var3 = var9[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.pushLazy;
                var8 = _closure1_slot0;
                var3 = 25;
                var3 = var9[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 24;
                var4 = var9[var3];
                var3 = var9.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = 26;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.ChangePhoneReason;
                var7 = var7.GUILD_PHONE_REQUIRED;
                var3['reason'] = var7;
                var2 = _closure1_slot14;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var16;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 45:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 31;
            var2 = var20[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var16 = 'simple-action';
            var2['type'] = var16;
            var19 = _closure1_slot0;
            var16 = 40;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var17 = var16.ChatXIcon;
            var16 = {};
            var16 = var9.bind(var4)(var17, var16);
            var2['icon'] = var16;
            var16 = 33;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Eg3/c9;
            var16 = var17.bind(var18)(var16);
            var2['message'] = var16;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 43:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 39;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var12;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 41:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 38;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildMember'] = var15;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 38:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 37;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['showLinkedLobbyApplicationLoadingIndicator'] = var14;
            var2['requiredLinkedLobbyApplication'] = var13;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 36:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 36;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var12;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 34:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 31;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = 'button-action';
            var2['type'] = var12;
            var15 = _closure1_slot0;
            var12 = 33;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.9T6N5/;
            var13 = var14.bind(var17)(var13);
            var2['message'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.XyHpKH;
            var12 = var13.bind(var14)(var12);
            var2['buttonPrimaryText'] = var12;
            var11 = function buttonPrimaryOnPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0005_ip = 64; continue _fun0005 }
case 20:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 21;
                    var2 = var5[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.trackWithMetadata;
                    var2 = _closure1_slot11;
                    var6 = var2.TEXT_AREA_CTA_CLICKED;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.UNBLOCK;
                    var2['cta_type'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 22;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.unblockUser;
                    var4 = _closure2_slot0;
                    var1 = var4.getRecipientId;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['buttonPrimaryOnPress'] = var11;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 31:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 35;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var2['isReadonlyAnnouncementsChannel'] = var10;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 29:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 34;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 27:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 31;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var10 = 'simple-action';
            var2['type'] = var10;
            var13 = _closure1_slot0;
            var10 = 32;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var10.CircleInformationIcon;
            var10 = {};
            var10 = var9.bind(var4)(var11, var10);
            var2['icon'] = var10;
            var10 = 33;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Bt2N7D;
            var11 = var12.bind(var15)(var11);
            var2['message'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.n/Vzkw;
            var10 = var11.bind(var12)(var10);
            var2['subtext'] = var10;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 25:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 30;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 63; continue _fun0001;
case 23:
            var9 = _closure1_slot15;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 29;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var9.bind(var4)(var3, var2);
case 63:
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 31;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ChatInputGuardContainer;
            var1 = {};
            var1['screenIndex'] = var8;
            var7 = var7.id;
            var1['channelId'] = var7;
            var1['onJumpToPresent'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();