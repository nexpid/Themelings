// app/modules/chat_input/native/guard/ChatInputGuardWrapper.tsx
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
    var8 = var6[var1];
    var4 = native4;
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
    var4 = 41;
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
            var15 = var1.isReadonly;
            var1 = var8.getGuildId;
            var11 = var1.bind(var8)();
            var _closure2_slot1 = var11;
            var12 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 12;
            var7 = var25[var23];
            var4 = undefined;
            var14 = var12.bind(var4)(var7);
            var13 = var14.useStateFromStores;
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
            var7 = var13.bind(var14)(var9, var7);
            var _closure2_slot2 = var7;
            var9 = var25[var23];
            var16 = var12.bind(var4)(var9);
            var14 = var16.useStateFromStores;
            var9 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCheck;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var16)(var13, var9);
            var20 = var9.notClaimed;
            var _closure2_slot3 = var20;
            var19 = var9.notPhoneVerified;
            var18 = var9.notEmailVerified;
            var17 = var9.newMember;
            var16 = var9.newAccount;
            var13 = var9.memberDeadline;
            var14 = var9.accountDeadline;
            var9 = var25[var23];
            var22 = var12.bind(var4)(var9);
            var21 = var22.useStateFromStoresObject;
            var9 = _closure1_slot9;
            var12 = new Array(2);
            var12[0] = var9;
            var9 = _closure1_slot5;
            var12[1] = var9;
            var9 = new Array(3);
            var9[0] = var11;
            var9[1] = var7;
            var9[2] = var20;
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
            var9 = var21.bind(var22)(var12, var7, var9);
            var22 = var9.user;
            var7 = var9.showMemberVerificationModal;
            var12 = var9.communicationDisabledGuildMember;
            var21 = var9.automodUserProfileQuarantined;
            var24 = _closure1_slot1;
            var9 = 16;
            var9 = var25[var9];
            var9 = var24.bind(var4)(var9);
            var24 = var9.bind(var4)(var22, var8);
            var22 = var8.type;
            var9 = _closure1_slot12;
            var9 = var9.GUILD_ANNOUNCEMENT;
            var9 = var22 === var9;
            if(!var9) { _fun0001_ip = 336; continue _fun0001 }
 333:
            var9 = !var5;
 336:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 17;
            var5 = var25[var5];
            var25 = var22.bind(var4)(var5);
            var22 = var25.useIsMessageRequest;
            var5 = var8.id;
            var26 = var22.bind(var25)(var5);
            if(!var26) { _fun0001_ip = 385; continue _fun0001 }
 375:
            var5 = var8.isPrivate;
            var26 = var5.bind(var8)();
 385:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 18;
            var5 = var25[var5];
            var25 = var22.bind(var4)(var5);
            var22 = var25.useIsSpamMessageRequest;
            var5 = var8.id;
            var25 = var22.bind(var25)(var5);
            if(!var25) { _fun0001_ip = 434; continue _fun0001 }
 424:
            var5 = var8.isPrivate;
            var25 = var5.bind(var8)();
 434:
            var5 = var8.isForumPost;
            var5 = var5.bind(var8)();
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = var29[var23];
            var32 = var27.bind(var4)(var22);
            var31 = var32.useStateFromStores;
            var22 = _closure1_slot8;
            var30 = new Array(1);
            var30[0] = var22;
            var28 = new Array(1);
            var28[0] = var8;
            var22 = function() {
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
            var22 = var31.bind(var32)(var30, var22, var28);
            var23 = var29[var23];
            var31 = var27.bind(var4)(var23);
            var30 = var31.useStateFromStores;
            var23 = _closure1_slot3;
            var28 = new Array(1);
            var28[0] = var23;
            var27 = new Array(1);
            var27[0] = var11;
            var23 = function() {
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
            var23 = var30.bind(var31)(var28, var23, var27);
            var28 = _closure1_slot1;
            var27 = 19;
            var27 = var29[var27];
            var28 = var28.bind(var4)(var27);
            var27 = var8.id;
            var27 = var28.bind(var4)(var27);
            if(var26) { _fun0001_ip = 2291; continue _fun0001 }
 580:
            if(var25) { _fun0001_ip = 2253; continue _fun0001 }
 586:
            var25 = var8.isSystemDM;
            var25 = var25.bind(var8)();
            if(var25) { _fun0001_ip = 2071; continue _fun0001 }
 602:
            if(var24) { _fun0001_ip = 2034; continue _fun0001 }
 608:
            if(var23) { _fun0001_ip = 1988; continue _fun0001 }
 614:
            if(var9) { _fun0001_ip = 1988; continue _fun0001 }
 620:
            if(var22) { _fun0001_ip = 1823; continue _fun0001 }
 626:
            if(var7) { _fun0001_ip = 1782; continue _fun0001 }
 632:
            var7 = null;
            if(!(var7 == var12)) { _fun0001_ip = 1740; continue _fun0001 }
 641:
            if(var21) { _fun0001_ip = 1699; continue _fun0001 }
 647:
            if(var20) { _fun0001_ip = 1565; continue _fun0001 }
 653:
            if(var19) { _fun0001_ip = 1398; continue _fun0001 }
 659:
            if(var18) { _fun0001_ip = 1231; continue _fun0001 }
 665:
            if(var17) { _fun0001_ip = 1075; continue _fun0001 }
 671:
            if(var16) { _fun0001_ip = 919; continue _fun0001 }
 677:
            if(!var15) { _fun0001_ip = 917; continue _fun0001 }
 683:
            if(!(var7 != var11)) { _fun0001_ip = 917; continue _fun0001 }
 690:
            if(var5) { _fun0001_ip = 917; continue _fun0001 }
 696:
            var7 = _closure1_slot4;
            var5 = var8.type;
            var5 = var7.bind(var4)(var5);
            if(var5) { _fun0001_ip = 917; continue _fun0001 }
 716:
            var15 = _closure1_slot15;
            var7 = _closure1_slot1;
            var20 = _closure1_slot2;
            if(var3) { _fun0001_ip = 764; continue _fun0001 }
 731:
            var3 = 40;
            var3 = var20[var3];
            var5 = var7.bind(var4)(var3);
            var3 = {};
            var3['guildId'] = var11;
            var3['channel'] = var8;
            var5 = var15.bind(var4)(var5, var3);
            _fun0001_ip = 912; continue _fun0001;
 764:
            var3 = 30;
            var3 = var20[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var16 = 'button-action';
            var3['type'] = var16;
            var19 = _closure1_slot0;
            var16 = 32;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var21 = var17.intl;
            var18 = var21.string;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Yi2xub;
            var17 = var18.bind(var21)(var17);
            var3['message'] = var17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.rBIGBA;
            var16 = var17.bind(var18)(var16);
            var3['buttonPrimaryText'] = var16;
            var16 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'chat input guard';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['buttonPrimaryOnPress'] = var16;
            var5 = var15.bind(var4)(var7, var3);
 912:
            _fun0001_ip = 2327; continue _fun0001;
 917:
            return var2;
 919:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 30;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = 'simple-action';
            var2['type'] = var15;
            var16 = _closure1_slot0;
            var15 = 39;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var17 = var15.CalendarIcon;
            var15 = {};
            var15 = var7.bind(var4)(var17, var15);
            var2['icon'] = var15;
            var15 = 32;
            var17 = var19[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.2JA2GB;
            var15 = {};
            var19 = _closure1_slot13;
            var19 = var19.ACCOUNT_AGE;
            var15['min'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var2['message'] = var15;
            var2['countdown'] = var14;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1075:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 30;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var14 = 'simple-action';
            var2['type'] = var14;
            var15 = _closure1_slot0;
            var14 = 39;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var16 = var14.CalendarIcon;
            var14 = {};
            var14 = var7.bind(var4)(var16, var14);
            var2['icon'] = var14;
            var14 = 32;
            var16 = var18[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.IH7RMD;
            var14 = {};
            var18 = _closure1_slot13;
            var18 = var18.MEMBER_AGE;
            var14['min'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var2['message'] = var14;
            var2['countdown'] = var13;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1231:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 30;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var13 = 'button-action';
            var2['type'] = var13;
            var16 = _closure1_slot0;
            var13 = 32;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.FkGPS0;
            var14 = var15.bind(var18)(var14);
            var2['message'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.lm1UKi;
            var13 = var14.bind(var15)(var13);
            var2['buttonPrimaryText'] = var13;
            var13 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 20;
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
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var13;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1398:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 30;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var13 = 'button-action';
            var2['type'] = var13;
            var16 = _closure1_slot0;
            var13 = 32;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.2dThMD;
            var14 = var15.bind(var18)(var14);
            var2['message'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.50gfOj;
            var13 = var14.bind(var15)(var13);
            var2['buttonPrimaryText'] = var13;
            var13 = function buttonPrimaryOnPress() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
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
                var3 = 22;
                var3 = var9[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.pushLazy;
                var8 = _closure1_slot0;
                var3 = 24;
                var3 = var9[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 23;
                var4 = var9[var3];
                var3 = var9.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = 25;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.ChangePhoneReason;
                var7 = var7.GUILD_PHONE_REQUIRED;
                var3['reason'] = var7;
                var2 = _closure1_slot14;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var13;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1565:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 30;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var13 = 'simple-action';
            var2['type'] = var13;
            var16 = _closure1_slot0;
            var13 = 38;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var14 = var13.ChatXIcon;
            var13 = {};
            var13 = var7.bind(var4)(var14, var13);
            var2['icon'] = var13;
            var13 = 32;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.Eg3/c3;
            var13 = var14.bind(var15)(var13);
            var2['message'] = var13;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1699:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 37;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var11;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1740:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 36;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildMember'] = var12;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1782:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 35;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var11;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 1823:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 30;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var11 = 'button-action';
            var2['type'] = var11;
            var14 = _closure1_slot0;
            var11 = 32;
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
                    var2 = 20;
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
                    var2 = 21;
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
            _fun0001_ip = 2327; continue _fun0001;
 1988:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 34;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var2['isReadonlyAnnouncementsChannel'] = var9;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 2034:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 33;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 2071:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 30;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var9 = 'simple-action';
            var2['type'] = var9;
            var12 = _closure1_slot0;
            var9 = 31;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var10 = var9.CircleInformationIcon;
            var9 = {};
            var9 = var7.bind(var4)(var10, var9);
            var2['icon'] = var9;
            var9 = 32;
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
            _fun0001_ip = 2327; continue _fun0001;
 2253:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 29;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var5 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 2327; continue _fun0001;
 2291:
            var7 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 28;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var5 = var7.bind(var4)(var3, var2);
 2327:
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 30;
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