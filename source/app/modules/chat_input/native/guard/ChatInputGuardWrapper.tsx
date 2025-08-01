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
 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var6 = var1.screenIndex;
            var5 = var1.canSendMessages;
            var3 = var1.canCreateThreads;
            var2 = var1.children;
            var17 = var1.isReadonly;
            var1 = var8.getGuildId;
            var11 = var1.bind(var8)();
            var _closure2_slot1 = var11;
            var13 = _closure1_slot0;
            var25 = _closure1_slot2;
            var12 = 12;
            var7 = var25[var12];
            var4 = undefined;
            var15 = var13.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
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
            var7 = var14.bind(var15)(var9, var7);
            var _closure2_slot2 = var7;
            var9 = var25[var12];
            var16 = var13.bind(var4)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCheck;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var15.bind(var16)(var14, var9);
            var22 = var9.notClaimed;
            var _closure2_slot3 = var22;
            var21 = var9.notPhoneVerified;
            var20 = var9.notEmailVerified;
            var19 = var9.newMember;
            var18 = var9.newAccount;
            var15 = var9.memberDeadline;
            var16 = var9.accountDeadline;
            var9 = var25[var12];
            var23 = var13.bind(var4)(var9);
            var14 = var23.useStateFromStoresObject;
            var9 = _closure1_slot9;
            var13 = new Array(2);
            var13[0] = var9;
            var9 = _closure1_slot5;
            var13[1] = var9;
            var9 = new Array(3);
            var9[0] = var11;
            var9[1] = var7;
            var9[2] = var22;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getCurrentUser;
                    var5 = var1.bind(var3)();
                    var3 = null;
                    var1 = var3 != var5;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 68; continue _fun0002 }
 27:
                    var6 = _closure2_slot1;
                    var6 = var3 != var6;
                    var4 = null;
                    if(!var6) { _fun0002_ip = 68; continue _fun0002 }
 43:
                    var8 = _closure1_slot5;
                    var7 = var8.getMember;
                    var6 = _closure2_slot1;
                    var1 = var5.id;
                    var4 = var7.bind(var8)(var6, var1);
 68:
                    var1 = {};
                    var1['user'] = var5;
                    var3 = var3 == var4;
                    var5 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0002_ip = 91; continue _fun0002 }
 85:
                    var6 = var4.isPending;
 91:
                    var3 = true;
                    var3 = var3 === var6;
                    if(var3) { _fun0002_ip = 107; continue _fun0002 }
 100:
                    var3 = _closure2_slot3;
 107:
                    if(!var3) { _fun0002_ip = 117; continue _fun0002 }
 110:
                    var3 = _closure2_slot2;
 117:
                    var1['showMemberVerificationModal'] = var3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var6 = var6.bind(var5)(var3);
                    var3 = var6.isMemberCommunicationDisabled;
                    var6 = var3.bind(var6)(var4);
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 161; continue _fun0002 }
 158:
                    var3 = var4;
 161:
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
            var9 = var14.bind(var23)(var13, var7, var9);
            var13 = var9.user;
            var7 = var9.showMemberVerificationModal;
            var14 = var9.communicationDisabledGuildMember;
            var23 = var9.automodUserProfileQuarantined;
            var24 = _closure1_slot1;
            var9 = 16;
            var9 = var25[var9];
            var9 = var24.bind(var4)(var9);
            var26 = var9.bind(var4)(var13, var8);
            var13 = var8.type;
            var9 = _closure1_slot12;
            var9 = var9.GUILD_ANNOUNCEMENT;
            var9 = var13 === var9;
            if(!var9) { _fun0001_ip = 336; continue _fun0001 }
 333:
            var9 = !var5;
 336:
            var13 = _closure1_slot0;
            var24 = _closure1_slot2;
            var5 = 17;
            var5 = var24[var5];
            var24 = var13.bind(var4)(var5);
            var13 = var24.useIsMessageRequest;
            var5 = var8.id;
            var28 = var13.bind(var24)(var5);
            if(!var28) { _fun0001_ip = 385; continue _fun0001 }
 375:
            var5 = var8.isPrivate;
            var28 = var5.bind(var8)();
 385:
            var13 = _closure1_slot0;
            var24 = _closure1_slot2;
            var5 = 18;
            var5 = var24[var5];
            var24 = var13.bind(var4)(var5);
            var13 = var24.useIsSpamMessageRequest;
            var5 = var8.id;
            var27 = var13.bind(var24)(var5);
            if(!var27) { _fun0001_ip = 434; continue _fun0001 }
 424:
            var5 = var8.isPrivate;
            var27 = var5.bind(var8)();
 434:
            var5 = var8.isForumPost;
            var5 = var5.bind(var8)();
            var13 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = var31[var12];
            var32 = var13.bind(var4)(var24);
            var30 = var32.useStateFromStores;
            var24 = _closure1_slot8;
            var29 = new Array(1);
            var29[0] = var24;
            var25 = new Array(1);
            var25[0] = var8;
            var24 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0003_ip = 52; continue _fun0003 }
 20:
                    var4 = _closure1_slot8;
                    var3 = var4.isBlocked;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 52:
                    return var1;
                }
            };
            var24 = var30.bind(var32)(var29, var24, var25);
            var12 = var31[var12];
            var30 = var13.bind(var4)(var12);
            var29 = var30.useStateFromStores;
            var12 = _closure1_slot3;
            var25 = new Array(1);
            var25[0] = var12;
            var13 = new Array(1);
            var13[0] = var11;
            var12 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 38; continue _fun0004 }
 16:
                    var4 = _closure1_slot3;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var25 = var29.bind(var30)(var25, var12, var13);
            var30 = _closure1_slot1;
            var12 = 19;
            var12 = var31[var12];
            var13 = var30.bind(var4)(var12);
            var12 = var8.linkedLobby;
            var12 = var13.bind(var4)(var12);
            var13 = var12.showLinkedLobbyApplicationLoadingIndicator;
            var12 = var12.requiredLinkedLobbyApplication;
            var29 = 20;
            var29 = var31[var29];
            var30 = var30.bind(var4)(var29);
            var29 = var8.id;
            var29 = var30.bind(var4)(var29);
            if(var28) { _fun0001_ip = 2386; continue _fun0001 }
 615:
            if(var27) { _fun0001_ip = 2348; continue _fun0001 }
 621:
            var27 = var8.isSystemDM;
            var27 = var27.bind(var8)();
            if(var27) { _fun0001_ip = 2166; continue _fun0001 }
 637:
            if(var26) { _fun0001_ip = 2129; continue _fun0001 }
 643:
            if(var25) { _fun0001_ip = 2083; continue _fun0001 }
 649:
            if(var9) { _fun0001_ip = 2083; continue _fun0001 }
 655:
            if(var24) { _fun0001_ip = 1918; continue _fun0001 }
 661:
            if(var7) { _fun0001_ip = 1877; continue _fun0001 }
 667:
            if(var13) { _fun0001_ip = 1830; continue _fun0001 }
 673:
            var7 = null;
            if(!(var7 == var12)) { _fun0001_ip = 1830; continue _fun0001 }
 682:
            if(!(var7 == var14)) { _fun0001_ip = 1788; continue _fun0001 }
 689:
            if(var23) { _fun0001_ip = 1747; continue _fun0001 }
 695:
            if(var22) { _fun0001_ip = 1613; continue _fun0001 }
 701:
            if(var21) { _fun0001_ip = 1446; continue _fun0001 }
 707:
            if(var20) { _fun0001_ip = 1279; continue _fun0001 }
 713:
            if(var19) { _fun0001_ip = 1123; continue _fun0001 }
 719:
            if(var18) { _fun0001_ip = 967; continue _fun0001 }
 725:
            if(!var17) { _fun0001_ip = 965; continue _fun0001 }
 731:
            if(!(var7 != var11)) { _fun0001_ip = 965; continue _fun0001 }
 738:
            if(var5) { _fun0001_ip = 965; continue _fun0001 }
 744:
            var7 = _closure1_slot4;
            var5 = var8.type;
            var5 = var7.bind(var4)(var5);
            if(var5) { _fun0001_ip = 965; continue _fun0001 }
 764:
            var17 = _closure1_slot15;
            var7 = _closure1_slot1;
            var22 = _closure1_slot2;
            if(var3) { _fun0001_ip = 812; continue _fun0001 }
 779:
            var3 = 42;
            var3 = var22[var3];
            var5 = var7.bind(var4)(var3);
            var3 = {};
            var3['guildId'] = var11;
            var3['channel'] = var8;
            var5 = var17.bind(var4)(var5, var3);
            _fun0001_ip = 960; continue _fun0001;
 812:
            var3 = 31;
            var3 = var22[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var18 = 'button-action';
            var3['type'] = var18;
            var21 = _closure1_slot0;
            var18 = 33;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var23 = var19.intl;
            var20 = var23.string;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.Yi2xub;
            var19 = var20.bind(var23)(var19);
            var3['message'] = var19;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.rBIGBA;
            var18 = var19.bind(var20)(var18);
            var3['buttonPrimaryText'] = var18;
            var18 = function buttonPrimaryOnPress() {
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
            var3['buttonPrimaryOnPress'] = var18;
            var5 = var17.bind(var4)(var7, var3);
 960:
            _fun0001_ip = 2422; continue _fun0001;
 965:
            return var2;
 967:
            var7 = _closure1_slot15;
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
            var17 = var7.bind(var4)(var19, var17);
            var2['icon'] = var17;
            var17 = 33;
            var19 = var21[var17];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.2JA2GB;
            var17 = {};
            var21 = _closure1_slot13;
            var21 = var21.ACCOUNT_AGE;
            var17['min'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var2['message'] = var17;
            var2['countdown'] = var16;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1123:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 31;
            var2 = var20[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var16 = 'simple-action';
            var2['type'] = var16;
            var17 = _closure1_slot0;
            var16 = 41;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var18 = var16.CalendarIcon;
            var16 = {};
            var16 = var7.bind(var4)(var18, var16);
            var2['icon'] = var16;
            var16 = 33;
            var18 = var20[var16];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.IH7RMD;
            var16 = {};
            var20 = _closure1_slot13;
            var20 = var20.MEMBER_AGE;
            var16['min'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var2['message'] = var16;
            var2['countdown'] = var15;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1279:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 31;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = 'button-action';
            var2['type'] = var15;
            var18 = _closure1_slot0;
            var15 = 33;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.FkGPS0;
            var16 = var17.bind(var20)(var16);
            var2['message'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.lm1UKi;
            var15 = var16.bind(var17)(var15);
            var2['buttonPrimaryText'] = var15;
            var15 = function buttonPrimaryOnPress() {
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
            var2['buttonPrimaryOnPress'] = var15;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1446:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 31;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = 'button-action';
            var2['type'] = var15;
            var18 = _closure1_slot0;
            var15 = 33;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.2dThMD;
            var16 = var17.bind(var20)(var16);
            var2['message'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.50gfOj;
            var15 = var16.bind(var17)(var15);
            var2['buttonPrimaryText'] = var15;
            var15 = function buttonPrimaryOnPress() {
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
            var2['buttonPrimaryOnPress'] = var15;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1613:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 31;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = 'simple-action';
            var2['type'] = var15;
            var18 = _closure1_slot0;
            var15 = 40;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var16 = var15.ChatXIcon;
            var15 = {};
            var15 = var7.bind(var4)(var16, var15);
            var2['icon'] = var15;
            var15 = 33;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.Eg3/c3;
            var15 = var16.bind(var17)(var15);
            var2['message'] = var15;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1747:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 39;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var11;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1788:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 38;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildMember'] = var14;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1830:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 37;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['showLinkedLobbyApplicationLoadingIndicator'] = var13;
            var2['requiredLinkedLobbyApplication'] = var12;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1877:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 36;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var11;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 1918:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 31;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var11 = 'button-action';
            var2['type'] = var11;
            var14 = _closure1_slot0;
            var11 = 33;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.9T6N5+;
            var12 = var13.bind(var16)(var12);
            var2['message'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.XyHpKC;
            var11 = var12.bind(var13)(var11);
            var2['buttonPrimaryText'] = var11;
            var10 = function buttonPrimaryOnPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0005_ip = 121; continue _fun0005 }
 20:
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
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['buttonPrimaryOnPress'] = var10;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 2083:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 35;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var2['isReadonlyAnnouncementsChannel'] = var9;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 2129:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 34;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 2166:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 31;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var9 = 'simple-action';
            var2['type'] = var9;
            var12 = _closure1_slot0;
            var9 = 32;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var10 = var9.CircleInformationIcon;
            var9 = {};
            var9 = var7.bind(var4)(var10, var9);
            var2['icon'] = var9;
            var9 = 33;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var14 = var10.intl;
            var11 = var14.string;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.Bt2N7O;
            var10 = var11.bind(var14)(var10);
            var2['message'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.n/Vzk5;
            var9 = var10.bind(var11)(var9);
            var2['subtext'] = var9;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 2348:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 30;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2422; continue _fun0001;
 2386:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 29;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var5 = var7.bind(var4)(var3, var2);
 2422:
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 31;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ChatInputGuardContainer;
            var1 = {};
            var1['screenIndex'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();