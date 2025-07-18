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
            var7 = var1.channel;
            var _closure2_slot0 = var7;
            var5 = var1.canSendMessages;
            var3 = var1.canCreateThreads;
            var2 = var1.children;
            var14 = var1.isReadonly;
            var1 = var7.getGuildId;
            var10 = var1.bind(var7)();
            var _closure2_slot1 = var10;
            var11 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 12;
            var6 = var24[var22];
            var4 = undefined;
            var13 = var11.bind(var4)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
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
            var6 = var12.bind(var13)(var8, var6);
            var _closure2_slot2 = var6;
            var8 = var24[var22];
            var15 = var11.bind(var4)(var8);
            var13 = var15.useStateFromStores;
            var8 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCheck;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var13.bind(var15)(var12, var8);
            var19 = var8.notClaimed;
            var _closure2_slot3 = var19;
            var18 = var8.notPhoneVerified;
            var17 = var8.notEmailVerified;
            var16 = var8.newMember;
            var15 = var8.newAccount;
            var12 = var8.memberDeadline;
            var13 = var8.accountDeadline;
            var8 = var24[var22];
            var21 = var11.bind(var4)(var8);
            var20 = var21.useStateFromStoresObject;
            var8 = _closure1_slot9;
            var11 = new Array(2);
            var11[0] = var8;
            var8 = _closure1_slot5;
            var11[1] = var8;
            var8 = new Array(3);
            var8[0] = var10;
            var8[1] = var6;
            var8[2] = var19;
            var6 = function() {
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
            var8 = var20.bind(var21)(var11, var6, var8);
            var21 = var8.user;
            var6 = var8.showMemberVerificationModal;
            var11 = var8.communicationDisabledGuildMember;
            var20 = var8.automodUserProfileQuarantined;
            var23 = _closure1_slot1;
            var8 = 16;
            var8 = var24[var8];
            var8 = var23.bind(var4)(var8);
            var23 = var8.bind(var4)(var21, var7);
            var21 = var7.type;
            var8 = _closure1_slot12;
            var8 = var8.GUILD_ANNOUNCEMENT;
            var8 = var21 === var8;
            if(!var8) { _fun0001_ip = 330; continue _fun0001 }
 327:
            var8 = !var5;
 330:
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var5 = 17;
            var5 = var24[var5];
            var24 = var21.bind(var4)(var5);
            var21 = var24.useIsMessageRequest;
            var5 = var7.id;
            var25 = var21.bind(var24)(var5);
            if(!var25) { _fun0001_ip = 379; continue _fun0001 }
 369:
            var5 = var7.isPrivate;
            var25 = var5.bind(var7)();
 379:
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var5 = 18;
            var5 = var24[var5];
            var24 = var21.bind(var4)(var5);
            var21 = var24.useIsSpamMessageRequest;
            var5 = var7.id;
            var24 = var21.bind(var24)(var5);
            if(!var24) { _fun0001_ip = 428; continue _fun0001 }
 418:
            var5 = var7.isPrivate;
            var24 = var5.bind(var7)();
 428:
            var5 = var7.isForumPost;
            var5 = var5.bind(var7)();
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = var28[var22];
            var31 = var26.bind(var4)(var21);
            var30 = var31.useStateFromStores;
            var21 = _closure1_slot8;
            var29 = new Array(1);
            var29[0] = var21;
            var27 = new Array(1);
            var27[0] = var7;
            var21 = function() {
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
            var21 = var30.bind(var31)(var29, var21, var27);
            var22 = var28[var22];
            var30 = var26.bind(var4)(var22);
            var29 = var30.useStateFromStores;
            var22 = _closure1_slot3;
            var27 = new Array(1);
            var27[0] = var22;
            var26 = new Array(1);
            var26[0] = var10;
            var22 = function() {
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
            var22 = var29.bind(var30)(var27, var22, var26);
            var27 = _closure1_slot1;
            var26 = 19;
            var26 = var28[var26];
            var27 = var27.bind(var4)(var26);
            var26 = var7.id;
            var26 = var27.bind(var4)(var26);
            if(var25) { _fun0001_ip = 2285; continue _fun0001 }
 574:
            if(var24) { _fun0001_ip = 2247; continue _fun0001 }
 580:
            var24 = var7.isSystemDM;
            var24 = var24.bind(var7)();
            if(var24) { _fun0001_ip = 2065; continue _fun0001 }
 596:
            if(var23) { _fun0001_ip = 2028; continue _fun0001 }
 602:
            if(var22) { _fun0001_ip = 1982; continue _fun0001 }
 608:
            if(var8) { _fun0001_ip = 1982; continue _fun0001 }
 614:
            if(var21) { _fun0001_ip = 1817; continue _fun0001 }
 620:
            if(var6) { _fun0001_ip = 1776; continue _fun0001 }
 626:
            var6 = null;
            if(!(var6 == var11)) { _fun0001_ip = 1734; continue _fun0001 }
 635:
            if(var20) { _fun0001_ip = 1693; continue _fun0001 }
 641:
            if(var19) { _fun0001_ip = 1559; continue _fun0001 }
 647:
            if(var18) { _fun0001_ip = 1392; continue _fun0001 }
 653:
            if(var17) { _fun0001_ip = 1225; continue _fun0001 }
 659:
            if(var16) { _fun0001_ip = 1069; continue _fun0001 }
 665:
            if(var15) { _fun0001_ip = 913; continue _fun0001 }
 671:
            if(!var14) { _fun0001_ip = 911; continue _fun0001 }
 677:
            if(!(var6 != var10)) { _fun0001_ip = 911; continue _fun0001 }
 684:
            if(var5) { _fun0001_ip = 911; continue _fun0001 }
 690:
            var6 = _closure1_slot4;
            var5 = var7.type;
            var5 = var6.bind(var4)(var5);
            if(var5) { _fun0001_ip = 911; continue _fun0001 }
 710:
            var14 = _closure1_slot15;
            var6 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var3) { _fun0001_ip = 758; continue _fun0001 }
 725:
            var3 = 40;
            var3 = var19[var3];
            var5 = var6.bind(var4)(var3);
            var3 = {};
            var3['guildId'] = var10;
            var3['channel'] = var7;
            var5 = var14.bind(var4)(var5, var3);
            _fun0001_ip = 906; continue _fun0001;
 758:
            var3 = 30;
            var3 = var19[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var15 = 'button-action';
            var3['type'] = var15;
            var18 = _closure1_slot0;
            var15 = 32;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Yi2xub;
            var16 = var17.bind(var20)(var16);
            var3['message'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBA;
            var15 = var16.bind(var17)(var15);
            var3['buttonPrimaryText'] = var15;
            var15 = function buttonPrimaryOnPress() {
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
            var3['buttonPrimaryOnPress'] = var15;
            var5 = var14.bind(var4)(var6, var3);
 906:
            _fun0001_ip = 2321; continue _fun0001;
 911:
            return var2;
 913:
            var6 = _closure1_slot15;
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
            var14 = var6.bind(var4)(var16, var14);
            var2['icon'] = var14;
            var14 = 32;
            var16 = var18[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.2JA2GB;
            var14 = {};
            var18 = _closure1_slot13;
            var18 = var18.ACCOUNT_AGE;
            var14['min'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var2['message'] = var14;
            var2['countdown'] = var13;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1069:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 30;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var13 = 'simple-action';
            var2['type'] = var13;
            var14 = _closure1_slot0;
            var13 = 39;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var15 = var13.CalendarIcon;
            var13 = {};
            var13 = var6.bind(var4)(var15, var13);
            var2['icon'] = var13;
            var13 = 32;
            var15 = var17[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.IH7RMD;
            var13 = {};
            var17 = _closure1_slot13;
            var17 = var17.MEMBER_AGE;
            var13['min'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var2['message'] = var13;
            var2['countdown'] = var12;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1225:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 30;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = 'button-action';
            var2['type'] = var12;
            var15 = _closure1_slot0;
            var12 = 32;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.FkGPS0;
            var13 = var14.bind(var17)(var13);
            var2['message'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.lm1UKi;
            var12 = var13.bind(var14)(var12);
            var2['buttonPrimaryText'] = var12;
            var12 = function buttonPrimaryOnPress() {
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
            var2['buttonPrimaryOnPress'] = var12;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1392:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 30;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = 'button-action';
            var2['type'] = var12;
            var15 = _closure1_slot0;
            var12 = 32;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.2dThMD;
            var13 = var14.bind(var17)(var13);
            var2['message'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.50gfOj;
            var12 = var13.bind(var14)(var12);
            var2['buttonPrimaryText'] = var12;
            var12 = function buttonPrimaryOnPress() {
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
            var2['buttonPrimaryOnPress'] = var12;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1559:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 30;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = 'simple-action';
            var2['type'] = var12;
            var15 = _closure1_slot0;
            var12 = 38;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var13 = var12.ChatXIcon;
            var12 = {};
            var12 = var6.bind(var4)(var13, var12);
            var2['icon'] = var12;
            var12 = 32;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Eg3/c3;
            var12 = var13.bind(var14)(var12);
            var2['message'] = var12;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1693:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 37;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var10;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1734:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 36;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildMember'] = var11;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1776:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 35;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var10;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1817:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 30;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var10 = 'button-action';
            var2['type'] = var10;
            var13 = _closure1_slot0;
            var10 = 32;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.9T6N5+;
            var11 = var12.bind(var15)(var11);
            var2['message'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.XyHpKC;
            var10 = var11.bind(var12)(var10);
            var2['buttonPrimaryText'] = var10;
            var9 = function buttonPrimaryOnPress() {
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
            var2['buttonPrimaryOnPress'] = var9;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 1982:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 34;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var2['isReadonlyAnnouncementsChannel'] = var8;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 2028:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 33;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 2065:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 30;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = 'simple-action';
            var2['type'] = var8;
            var11 = _closure1_slot0;
            var8 = 31;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var9 = var8.CircleInformationIcon;
            var8 = {};
            var8 = var6.bind(var4)(var9, var8);
            var2['icon'] = var8;
            var8 = 32;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Bt2N7O;
            var9 = var10.bind(var13)(var9);
            var2['message'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.n/Vzk5;
            var8 = var9.bind(var10)(var8);
            var2['subtext'] = var8;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 2247:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 29;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var6.bind(var4)(var3, var2);
            _fun0001_ip = 2321; continue _fun0001;
 2285:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 28;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var6.bind(var4)(var3, var2);
 2321:
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 30;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ChatInputGuardContainer;
            var1 = {};
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();