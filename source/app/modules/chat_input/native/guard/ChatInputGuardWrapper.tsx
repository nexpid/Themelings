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
    var7 = var4.JoinGuildSources;
    var _closure1_slot13 = var7;
    var4 = var4.VerificationCriteria;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var4 = 48;
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
            var9 = var1.isReadonly;
            var6 = var1.onJumpToPresent;
            var1 = var7.getGuildId;
            var10 = var1.bind(var7)();
            var _closure2_slot1 = var10;
            var15 = _closure1_slot0;
            var28 = _closure1_slot2;
            var14 = 12;
            var11 = var28[var14];
            var4 = undefined;
            var17 = var15.bind(var4)(var11);
            var16 = var17.useStateFromStores;
            var11 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
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
            var11 = var16.bind(var17)(var12, var11);
            var _closure2_slot2 = var11;
            var12 = var28[var14];
            var18 = var15.bind(var4)(var12);
            var17 = var18.useStateFromStores;
            var12 = _closure1_slot7;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCheck;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var17.bind(var18)(var16, var12);
            var26 = var12.notClaimed;
            var _closure2_slot3 = var26;
            var25 = var12.notPhoneVerified;
            var24 = var12.notEmailVerified;
            var22 = var12.newMember;
            var21 = var12.newAccount;
            var17 = var12.memberDeadline;
            var18 = var12.accountDeadline;
            var20 = var12.missingVerificationRole;
            var23 = var12.verificationRole;
            var _closure2_slot4 = var23;
            var12 = var28[var14];
            var19 = var15.bind(var4)(var12);
            var16 = var19.useStateFromStoresObject;
            var12 = _closure1_slot9;
            var15 = new Array(2);
            var15[0] = var12;
            var12 = _closure1_slot5;
            var15[1] = var12;
            var12 = new Array(3);
            var12[0] = var10;
            var12[1] = var11;
            var12[2] = var26;
            var11 = function() {
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
            var11 = var16.bind(var19)(var15, var11, var12);
            var12 = var11.user;
            var19 = var11.showMemberVerificationModal;
            var16 = var11.communicationDisabledGuildMember;
            var27 = var11.automodUserProfileQuarantined;
            var15 = _closure1_slot1;
            var11 = 16;
            var11 = var28[var11];
            var11 = var15.bind(var4)(var11);
            var30 = var11.bind(var4)(var12, var7);
            var12 = var7.type;
            var11 = _closure1_slot12;
            var11 = var11.GUILD_ANNOUNCEMENT;
            var12 = var12 === var11;
            if(!var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = !var5;
case 13:
            var11 = _closure1_slot1;
            var28 = _closure1_slot2;
            var5 = 17;
            var5 = var28[var5];
            var11 = var11.bind(var4)(var5);
            var5 = {};
            var15 = var7.id;
            var5['channelId'] = var15;
            var11 = var11.bind(var4)(var5);
            var15 = _closure1_slot0;
            var5 = 18;
            var5 = var28[var5];
            var28 = var15.bind(var4)(var5);
            var15 = var28.useIsMessageRequest;
            var5 = var7.id;
            var32 = var15.bind(var28)(var5);
            if(!var32) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var7.isPrivate;
            var32 = var5.bind(var7)();
case 15:
            var15 = _closure1_slot0;
            var28 = _closure1_slot2;
            var5 = 19;
            var5 = var28[var5];
            var28 = var15.bind(var4)(var5);
            var15 = var28.useIsSpamMessageRequest;
            var5 = var7.id;
            var31 = var15.bind(var28)(var5);
            if(!var31) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var7.isPrivate;
            var31 = var5.bind(var7)();
case 17:
            var5 = var7.isForumPost;
            var5 = var5.bind(var7)();
            var15 = _closure1_slot0;
            var37 = _closure1_slot2;
            var28 = var37[var14];
            var35 = var15.bind(var4)(var28);
            var34 = var35.useStateFromStores;
            var28 = _closure1_slot8;
            var33 = new Array(1);
            var33[0] = var28;
            var29 = new Array(1);
            var29[0] = var7;
            var28 = function() {
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
            var28 = var34.bind(var35)(var33, var28, var29);
            var14 = var37[var14];
            var35 = var15.bind(var4)(var14);
            var34 = var35.useStateFromStoresObject;
            var14 = _closure1_slot3;
            var33 = new Array(1);
            var33[0] = var14;
            var29 = new Array(1);
            var29[0] = var10;
            var14 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var7 = _closure1_slot3;
                    var6 = var7.isLurking;
                    var5 = _closure2_slot1;
                    var2 = var6.bind(var7)(var5);
case 21:
                    var1['isLurking'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var6 = _closure1_slot3;
                    var5 = var6.getLurkingSourceForGuild;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var3 = var4.type;
case 25:
                    var2 = var3;
case 23:
                    var1['lurkingSourceType'] = var2;
                    return var1;
                }
            };
            var14 = var34.bind(var35)(var33, var14, var29);
            var29 = var14.isLurking;
            var35 = var14.lurkingSourceType;
            var14 = 20;
            var14 = var37[var14];
            var33 = var15.bind(var4)(var14);
            var15 = var33.useMobileLurkerServerPreview;
            var14 = 'ChatInputGuardWrapper';
            var14 = var15.bind(var33)(var14);
            var33 = var14.enabled;
            var36 = _closure1_slot1;
            var14 = 21;
            var14 = var37[var14];
            var15 = var36.bind(var4)(var14);
            var14 = var7.linkedLobby;
            var14 = var15.bind(var4)(var14);
            var15 = var14.showLinkedLobbyApplicationLoadingIndicator;
            var14 = var14.requiredLinkedLobbyApplication;
            var34 = 22;
            var34 = var37[var34];
            var36 = var36.bind(var4)(var34);
            var34 = var7.id;
            var34 = var36.bind(var4)(var34);
            if(!var29) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var34 = _closure1_slot13;
            var34 = var34.DIRECTORY_ENTRY;
            if(!(var35 !== var34)) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            if(!var33) { _fun0001_ip = 27; continue _fun0001 }
case 30:
            var33 = null;
            if(!(var33 == var10)) { _fun0001_ip = 31; continue _fun0001 }
case 27:
            if(var32) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            if(var31) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var31 = var7.isSystemDM;
            var31 = var31.bind(var7)();
            if(var31) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            if(var30) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            if(!var12) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var30 = null;
            if(!(var30 == var11)) { _fun0001_ip = 42; continue _fun0001 }
case 40:
            if(var29) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            if(var12) { _fun0001_ip = 43; continue _fun0001 }
case 45:
            if(var28) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            if(var19) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(var15) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var19 = null;
            if(!(var19 == var14)) { _fun0001_ip = 50; continue _fun0001 }
case 52:
            if(!(var19 == var16)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            if(var27) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            if(var26) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            if(var25) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            if(var24) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            if(var22) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            if(var21) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            if(!var20) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            if(!(var19 == var23)) { _fun0001_ip = 69; continue _fun0001 }
case 67:
            if(!var9) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            if(!(var19 != var10)) { _fun0001_ip = 70; continue _fun0001 }
case 72:
            if(var5) { _fun0001_ip = 70; continue _fun0001 }
case 73:
            var9 = _closure1_slot4;
            var5 = var7.type;
            var5 = var9.bind(var4)(var5);
            if(var5) { _fun0001_ip = 70; continue _fun0001 }
case 74:
            var20 = _closure1_slot16;
            var9 = _closure1_slot1;
            var26 = _closure1_slot2;
            if(var3) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var3 = 47;
            var3 = var26[var3];
            var5 = var9.bind(var4)(var3);
            var3 = {};
            var3['guildId'] = var10;
            var3['channel'] = var7;
            var5 = var20.bind(var4)(var5, var3);
            _fun0001_ip = 77; continue _fun0001;
case 75:
            var3 = 35;
            var3 = var26[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var21 = 'button-action';
            var3['type'] = var21;
            var25 = _closure1_slot0;
            var21 = 37;
            var22 = var26[var21];
            var22 = var25.bind(var4)(var22);
            var27 = var22.intl;
            var24 = var27.string;
            var22 = var26[var21];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Yi2xuY;
            var22 = var24.bind(var27)(var22);
            var3['message'] = var22;
            var22 = var26[var21];
            var22 = var25.bind(var4)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var21 = var26[var21];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.rBIGBL;
            var21 = var22.bind(var24)(var21);
            var3['buttonPrimaryText'] = var21;
            var21 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'chat input guard';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['buttonPrimaryOnPress'] = var21;
            var5 = var20.bind(var4)(var9, var3);
case 77:
            _fun0001_ip = 78; continue _fun0001;
case 70:
            return var2;
case 69:
            var2 = var23.tags;
            var2 = var2.guild_connections;
            var9 = _closure1_slot0;
            var22 = _closure1_slot2;
            var24 = 37;
            var3 = var22[var24];
            var3 = var9.bind(var4)(var3);
            var21 = var3.intl;
            var20 = var21.format;
            var3 = var22[var24];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var9 = var3.HbivnU;
            var3 = {};
            var26 = var23.name;
            var23 = global;
            var23 = var23.HermesInternal;
            var25 = var23.concat;
            var23 = '@';
            var23 = var25.bind(var23)(var26);
            var3['roleName'] = var23;
            var20 = var20.bind(var21)(var9, var3);
            var9 = _closure1_slot16;
            var21 = _closure1_slot1;
            var3 = 35;
            var3 = var22[var3];
            var3 = var21.bind(var4)(var3);
            if(!(var19 !== var2)) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var2 = {};
            var19 = 'simple-action';
            var2['type'] = var19;
            var2['message'] = var20;
            _fun0001_ip = 81; continue _fun0001;
case 79:
            var19 = {};
            var21 = 'button-action';
            var19['type'] = var21;
            var19['message'] = var20;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20["6Ge2LG"];
            var20 = var21.bind(var22)(var20);
            var19['buttonPrimaryText'] = var20;
            var20 = function buttonPrimaryOnPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 82:
                    if(!var2) { _fun0005_ip = 84; continue _fun0005 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openGuildRoleConnectionsConnectAccountModal;
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['buttonPrimaryOnPress'] = var20;
            var2 = var19;
case 81:
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 65:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var23 = _closure1_slot2;
            var2 = 35;
            var2 = var23[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var19 = 'simple-action';
            var2['type'] = var19;
            var20 = _closure1_slot0;
            var19 = 46;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var21 = var19.CalendarIcon;
            var19 = {};
            var19 = var9.bind(var4)(var21, var19);
            var2['icon'] = var19;
            var19 = 37;
            var21 = var23[var19];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19["2JA2GH"];
            var19 = {};
            var23 = _closure1_slot14;
            var23 = var23.ACCOUNT_AGE;
            var19['min'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var2['message'] = var19;
            var2['countdown'] = var18;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 63:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 35;
            var2 = var22[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var18 = 'simple-action';
            var2['type'] = var18;
            var19 = _closure1_slot0;
            var18 = 46;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var20 = var18.CalendarIcon;
            var18 = {};
            var18 = var9.bind(var4)(var20, var18);
            var2['icon'] = var18;
            var18 = 37;
            var20 = var22[var18];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.IH7RMF;
            var18 = {};
            var22 = _closure1_slot14;
            var22 = var22.MEMBER_AGE;
            var18['min'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var2['message'] = var18;
            var2['countdown'] = var17;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 61:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 35;
            var2 = var21[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var17 = 'button-action';
            var2['type'] = var17;
            var20 = _closure1_slot0;
            var17 = 37;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var22 = var18.intl;
            var19 = var22.string;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.FkGPS5;
            var18 = var19.bind(var22)(var18);
            var2['message'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.lm1UKt;
            var17 = var18.bind(var19)(var17);
            var2['buttonPrimaryText'] = var17;
            var17 = function buttonPrimaryOnPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
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
                var2 = 29;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var17;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 59:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 35;
            var2 = var21[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var17 = 'button-action';
            var2['type'] = var17;
            var20 = _closure1_slot0;
            var17 = 37;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var22 = var18.intl;
            var19 = var22.string;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18["2dThMM"];
            var18 = var19.bind(var22)(var18);
            var2['message'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17["50gfOv"];
            var17 = var18.bind(var19)(var17);
            var2['buttonPrimaryText'] = var17;
            var17 = function buttonPrimaryOnPress() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 23;
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
                var3 = 25;
                var3 = var9[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.pushLazy;
                var8 = _closure1_slot0;
                var3 = 27;
                var3 = var9[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 26;
                var4 = var9[var3];
                var3 = var9.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = 28;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.ChangePhoneReason;
                var7 = var7.GUILD_PHONE_REQUIRED;
                var3['reason'] = var7;
                var2 = _closure1_slot15;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['buttonPrimaryOnPress'] = var17;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 57:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 35;
            var2 = var21[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var17 = 'simple-action';
            var2['type'] = var17;
            var20 = _closure1_slot0;
            var17 = 45;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var18 = var17.ChatXIcon;
            var17 = {};
            var17 = var9.bind(var4)(var18, var17);
            var2['icon'] = var17;
            var17 = 37;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Eg3/c9;
            var17 = var18.bind(var19)(var17);
            var2['message'] = var17;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 55:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 44;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var10;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 53:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 43;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildMember'] = var16;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 50:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 42;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['showLinkedLobbyApplicationLoadingIndicator'] = var15;
            var2['requiredLinkedLobbyApplication'] = var14;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 48:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 41;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var10;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 46:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 35;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var14 = 'button-action';
            var2['type'] = var14;
            var17 = _closure1_slot0;
            var14 = 37;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var19 = var15.intl;
            var16 = var19.string;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15["9T6N5/"];
            var15 = var16.bind(var19)(var15);
            var2['message'] = var15;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.XyHpKH;
            var14 = var15.bind(var16)(var14);
            var2['buttonPrimaryText'] = var14;
            var13 = function buttonPrimaryOnPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0006_ip = 85; continue _fun0006 }
case 20:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 23;
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
                    var2 = 24;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.unblockUser;
                    var4 = _closure2_slot0;
                    var1 = var4.getRecipientId;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['buttonPrimaryOnPress'] = var13;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 43:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 40;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var2['isReadonlyAnnouncementsChannel'] = var12;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 42:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 39;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['pendingGameProfileReturn'] = var11;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 38:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 38;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 36:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 35;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var11 = 'simple-action';
            var2['type'] = var11;
            var14 = _closure1_slot0;
            var11 = 36;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var12 = var11.CircleInformationIcon;
            var11 = {};
            var11 = var9.bind(var4)(var12, var11);
            var2['icon'] = var11;
            var11 = 37;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Bt2N7D;
            var12 = var13.bind(var16)(var12);
            var2['message'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.n/Vzkw;
            var11 = var12.bind(var13)(var11);
            var2['subtext'] = var11;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 34:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 34;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 32:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 33;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var7;
            var5 = var9.bind(var4)(var3, var2);
            _fun0001_ip = 78; continue _fun0001;
case 31:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 32;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guildId'] = var10;
            var5 = var9.bind(var4)(var3, var2);
case 78:
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 35;
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