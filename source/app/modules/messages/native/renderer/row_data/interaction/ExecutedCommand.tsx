// app/modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMemberOrUserAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.user;
            var9 = var1.guildMemberAvatar;
            var8 = var1.guildId;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var2 = var3.ensureAvatarSource;
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 60; continue _fun0001 }
 56:
            if(!(var1 == var8)) { _fun0001_ip = 73; continue _fun0001 }
 60:
            var1 = var7.getAvatarSource;
            var1 = var1.bind(var7)(var6);
            _fun0001_ip = 125; continue _fun0001;
 73:
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.getGuildMemberAvatarSource;
            var4 = {};
            var10 = var7.id;
            var4['userId'] = var10;
            var4['guildMemberAvatar'] = var9;
            var4['guildId'] = var8;
            var1 = var5.bind(var6)(var4, var7);
 125:
            var1 = var2.bind(var3)(var1);
            var1 = var1.uri;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
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
    var4 = var4.MessageTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'executedCommand';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ExecutedCommand(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.message;
            var _closure2_slot0 = var2;
            var13 = var3.interaction;
            var _closure2_slot1 = var13;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 21;
            var5 = var3[var14];
            var10 = var6.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var11 = var9.bind(var10)(var7, var5);
            var5 = 22;
            var5 = var3[var5];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useMessageRendererTheme;
            var5 = var5.bind(var7)();
            var _closure2_slot2 = var5;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.defaultUsernameColor;
                return var1;
            };
            var5 = var9.bind(var10)(var5, var7);
            var7 = var2.getChannelId;
            var21 = var7.bind(var2)();
            var _closure2_slot3 = var21;
            var7 = var3[var14];
            var12 = var6.bind(var4)(var7);
            var10 = var12.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var10.bind(var12)(var9, var7);
            var3 = var3[var14];
            var9 = var6.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var1.user;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var7.bind(var9)(var6, var3);
            var10 = null;
            if(!(var10 == var12)) { _fun0002_ip = 282; continue _fun0002 }
 277:
            var12 = var13.user;
 282:
            var6 = _closure1_slot0;
            var17 = _closure1_slot2;
            var16 = 11;
            var3 = var17[var16];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useNullableUserAuthor;
            var3 = var3.bind(var7)(var12, var15);
            var22 = var3.nick;
            _closure2_slot4 = var22;
            var9 = var3.colorString;
            var7 = var3.guildMemberAvatar;
            var3 = 14;
            var3 = var17[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getInitialInteractionMetadata;
            var3 = var3.bind(var6)(var2);
            var6 = var10 == var3;
            var17 = undefined;
            if(var6) { _fun0002_ip = 373; continue _fun0002 }
 368:
            var17 = var3.type;
 373:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 15;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.InteractionTypes;
            var6 = var6.APPLICATION_COMMAND;
            var18 = undefined;
            if(!(var17 === var6)) { _fun0002_ip = 417; continue _fun0002 }
 411:
            var18 = var3.target_user;
 417:
            _closure2_slot5 = var18;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var17 = var6.bind(var4)(var3);
            var14 = var17.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var14 = var14.bind(var17)(var6, var3);
            if(!(var10 == var14)) { _fun0002_ip = 511; continue _fun0002 }
 472:
            var6 = var10 != var18;
            var3 = null;
            if(!var6) { _fun0002_ip = 508; continue _fun0002 }
 481:
            var6 = _closure1_slot6;
            var17 = var6.prototype;
            var17 = Object.create(var17, {constructor: {value: var6}});
            var26 = var17;
            var25 = var18;
            var6 = new var26[var6](var25, var24);
            var3 = var6 instanceof Object ? var6 : var17;
 508:
            var14 = var3;
 511:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var16];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useNullableUserAuthor;
            var3 = var3.bind(var6)(var14, var15);
            var17 = var3.colorString;
            var6 = _closure1_slot13;
            var3 = {};
            var3['user'] = var12;
            var3['guildMemberAvatar'] = var7;
            var12 = var10 == var15;
            var7 = undefined;
            if(var12) { _fun0002_ip = 580; continue _fun0002 }
 570:
            var12 = var15.getGuildId;
            var7 = var12.bind(var15)();
 580:
            var3['guildId'] = var7;
            var7 = var6.bind(var4)(var3);
            var6 = var2.type;
            var3 = _closure1_slot9;
            var3 = var3.CHAT_INPUT_COMMAND;
            var19 = var6 === var3;
            if(var19) { _fun0002_ip = 630; continue _fun0002 }
 611:
            var6 = var2.type;
            var3 = _closure1_slot9;
            var3 = var3.INTERACTION_PREMIUM_UPSELL;
            var19 = var6 === var3;
 630:
            _closure2_slot6 = var19;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isPrimaryEntryPointCommandMessage;
            var14 = var3.bind(var6)(var2);
            _closure2_slot7 = var14;
            var3 = var2.activityInstance;
            var20 = var10 != var3;
            if(!var20) { _fun0002_ip = 692; continue _fun0002 }
 682:
            var3 = var2.activityInstance;
            var20 = var4 !== var3;
 692:
            _closure2_slot8 = var20;
            var18 = var13.displayName;
            _closure2_slot9 = var18;
            var3 = 'username';
            var3 = var3 === var11;
            var6 = var5;
            if(!var3) { _fun0002_ip = 750; continue _fun0002 }
 719:
            var16 = _closure1_slot4;
            var23 = var10 != var17;
            var12 = undefined;
            if(!var23) { _fun0002_ip = 735; continue _fun0002 }
 732:
            var12 = var17;
 735:
            var12 = var16.bind(var4)(var12);
            var6 = var5;
            if(!(var10 != var12)) { _fun0002_ip = 750; continue _fun0002 }
 747:
            var6 = var12;
 750:
            var12 = var5;
            if(!var3) { _fun0002_ip = 787; continue _fun0002 }
 756:
            var16 = _closure1_slot4;
            var17 = var10 != var9;
            var3 = undefined;
            if(!var17) { _fun0002_ip = 772; continue _fun0002 }
 769:
            var3 = var9;
 772:
            var3 = var16.bind(var4)(var3);
            var12 = var5;
            if(!(var10 != var3)) { _fun0002_ip = 787; continue _fun0002 }
 784:
            var12 = var3;
 787:
            _closure2_slot10 = var12;
            var3 = var10 != var15;
            if(!var3) { _fun0002_ip = 810; continue _fun0002 }
 798:
            var5 = var19;
            if(var5) { _fun0002_ip = 807; continue _fun0002 }
 804:
            var5 = var14;
 807:
            var3 = var5;
 810:
            _closure2_slot11 = var3;
            var5 = _closure1_slot3;
            var17 = var5.useMemo;
            var16 = new Array(4);
            var16[0] = var21;
            var23 = var13.user;
            var23 = var23.id;
            var16[1] = var23;
            var16[2] = var3;
            var16[3] = var2;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
 10:
                    var1 = {};
                    _fun0004_ip = 95; continue _fun0004;
 14:
                    var2 = {};
                    var4 = 'bindTapCommandName';
                    var2['action'] = var4;
                    var4 = _closure2_slot1;
                    var4 = var4.user;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var2['messageId'] = var5;
                    var5 = var4.author;
                    var5 = var5.id;
                    var2['applicationUserId'] = var5;
                    var4 = var4.type;
                    var2['messageType'] = var4;
                    var3 = _closure2_slot3;
                    var2['messageChannelId'] = var3;
                    var1 = var2;
 95:
                    return var1;
                }
            };
            var17 = var17.bind(var5)(var3, var16);
            _closure2_slot12 = var17;
            var16 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var20;
            var23 = var2.author;
            var23 = var23.id;
            var3[1] = var23;
            var2 = var2.channel_id;
            var3[2] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0005_ip = 14; continue _fun0005 }
 10:
                    var1 = {};
                    _fun0005_ip = 59; continue _fun0005;
 14:
                    var2 = {};
                    var4 = 'bindTapActivityText';
                    var2['action'] = var4;
                    var3 = _closure2_slot0;
                    var4 = var3.author;
                    var4 = var4.id;
                    var2['applicationUserId'] = var4;
                    var3 = var3.channel_id;
                    var2['messageChannelId'] = var3;
                    var1 = var2;
 59:
                    return var1;
                }
            };
            var16 = var16.bind(var5)(var2, var3);
            _closure2_slot13 = var16;
            var3 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 16;
            var2 = var23[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isActivitiesInTextEnabled;
            var15 = var2.bind(var3)(var15);
            _closure2_slot14 = var15;
            var3 = var5.useMemo;
            var2 = new Array(11);
            var2[0] = var22;
            var22 = var13.user;
            var22 = var22.id;
            var2[1] = var22;
            var2[2] = var21;
            var2[3] = var20;
            var2[4] = var19;
            var2[5] = var18;
            var2[6] = var17;
            var2[7] = var16;
            var2[8] = var15;
            var2[9] = var14;
            var2[10] = var12;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = {};
                    var1 = _closure2_slot4;
                    var6['username'] = var1;
                    var1 = {'name': 'usernameOnClick', 'action': 'bindUserMenu'};
                    var2 = _closure2_slot1;
                    var2 = var2.user;
                    var2 = var2.id;
                    var1['userId'] = var2;
                    var2 = _closure2_slot3;
                    var1['messageChannelId'] = var2;
                    var2 = _closure2_slot10;
                    var1['linkColor'] = var2;
                    var6['usernameOnClick'] = var1;
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0006_ip = 212; continue _fun0006 }
 78:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0006_ip = 212; continue _fun0006 }
 88:
                    var1 = _closure2_slot14;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 17;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var7 = var4.intl;
                    var4 = var7.formatToParts;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0006_ip = 171; continue _fun0006 }
 145:
                    var3 = var2.k964Wl;
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var4.bind(var7)(var3, var1);
                    _fun0006_ip = 210; continue _fun0006;
 171:
                    var3 = var2.R/mrBg;
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var9 = _closure2_slot13;
                    var8 = 'activityTextOnClick';
                    var2[var8] = var9;
                    var1 = var4.bind(var7)(var3, var2);
 210:
                    return var1;
 212:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0006_ip = 268; continue _fun0006 }
 219:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 232; continue _fun0006 }
 226:
                    var7 = _closure2_slot9;
                    _fun0006_ip = 266; continue _fun0006;
 232:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot9;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var7 = var2.bind(var1)(var4, var3);
 266:
                    _fun0006_ip = 308; continue _fun0006;
 268:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.formatPrimaryEntryPointCommandName;
                    var1 = _closure2_slot9;
                    var7 = var2.bind(var3)(var1);
 308:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 17;
                    var3 = var9[var1];
                    var2 = undefined;
                    var3 = var8.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.SSrolp;
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var6 = 'commandName';
                    var1[var6] = var7;
                    var6 = _closure2_slot12;
                    var5 = 'commandNameOnClick';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var13 = var13.user;
            var13 = var13.id;
            var1['userId'] = var13;
            var1['usernameColor'] = var12;
            var12 = _closure1_slot4;
            var13 = var10 != var9;
            var8 = undefined;
            if(!var13) { _fun0002_ip = 1080; continue _fun0002 }
 1077:
            var8 = var9;
 1080:
            var8 = var12.bind(var4)(var8);
            var1['roleColor'] = var8;
            var8 = 'dot';
            var8 = var8 === var11;
            if(!var8) { _fun0002_ip = 1105; continue _fun0002 }
 1101:
            var8 = var10 != var9;
 1105:
            var1['shouldShowRoleDot'] = var8;
            var1['avatarURL'] = var7;
            var1['targetUsernameColor'] = var6;
            var1['content'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createExecutedCommand(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var14 = arg1;
            var19 = arg2;
            var13 = arg3;
            var4 = arg5;
            var1 = var14.activityInstance;
            var12 = null;
            var1 = var12 != var1;
            if(!var1) { _fun0007_ip = 39; continue _fun0007 }
 27:
            var3 = var14.activityInstance;
            var2 = undefined;
            var1 = var2 !== var3;
 39:
            var2 = var14.interaction;
            if(!(var12 != var2)) { _fun0007_ip = 71; continue _fun0007 }
 49:
            var2 = var14.interaction;
            var3 = var2.displayName;
            var2 = '';
            if(!(var2 === var3)) { _fun0007_ip = 75; continue _fun0007 }
 68:
            if(var1) { _fun0007_ip = 75; continue _fun0007 }
 71:
            var2 = undefined;
            return var2;
 75:
            var2 = var14.interaction;
            var3 = var12 == var2;
            var7 = undefined;
            var8 = undefined;
            if(var3) { _fun0007_ip = 97; continue _fun0007 }
 92:
            var8 = var2.user;
 97:
            var6 = _closure1_slot8;
            var3 = var6.getUser;
            var9 = var12 == var8;
            var2 = undefined;
            if(var9) { _fun0007_ip = 124; continue _fun0007 }
 119:
            var2 = var8.id;
 124:
            var11 = var3.bind(var6)(var2);
            var2 = var12 != var11;
            var9 = undefined;
            if(!var2) { _fun0007_ip = 250; continue _fun0007 }
 138:
            var10 = var19;
            if(!(var12 == var10)) { _fun0007_ip = 169; continue _fun0007 }
 145:
            var6 = _closure1_slot7;
            var3 = var6.getChannel;
            var2 = var14.getChannelId;
            var2 = var2.bind(var14)();
            var10 = var3.bind(var6)(var2);
 169:
            var3 = _closure1_slot13;
            var2 = {};
            var2['user'] = var11;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 11;
            var6 = var15[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.getUserAuthor;
            var6 = var6.bind(var8)(var11, var10);
            var6 = var6.guildMemberAvatar;
            var2['guildMemberAvatar'] = var6;
            var8 = var12 == var19;
            var6 = undefined;
            if(var8) { _fun0007_ip = 241; continue _fun0007 }
 231:
            var8 = var19.getGuildId;
            var6 = var8.bind(var19)();
 241:
            var2['guildId'] = var6;
            var9 = var3.bind(var7)(var2);
 250:
            var3 = var14.type;
            var2 = _closure1_slot9;
            var2 = var2.CHAT_INPUT_COMMAND;
            var23 = var3 === var2;
            if(var23) { _fun0007_ip = 291; continue _fun0007 }
 272:
            var3 = var14.type;
            var2 = _closure1_slot9;
            var2 = var2.INTERACTION_PREMIUM_UPSELL;
            var23 = var3 === var2;
 291:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var16 = 12;
            var2 = var10[var16];
            var3 = var8.bind(var7)(var2);
            var2 = var3.isPrimaryEntryPointCommandMessage;
            var18 = var2.bind(var3)(var14);
            var21 = 11;
            var2 = var10[var21];
            var6 = var8.bind(var7)(var2);
            var3 = var6.getUserAuthor;
            var2 = var14.interaction;
            var2 = var2.user;
            var2 = var3.bind(var6)(var2, var19);
            var11 = var2.colorString;
            var2 = var14.interaction;
            var3 = var2.displayName;
            var6 = _closure1_slot1;
            var2 = 13;
            var15 = var10[var2];
            var15 = var6.bind(var7)(var15);
            var17 = var15.internal;
            var15 = var17.resolveSemanticColor;
            var2 = var10[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.colors;
            var6 = var2.MENTION_BACKGROUND;
            var2 = arg4;
            var6 = var15.bind(var17)(var2, var6);
            var2 = 14;
            var2 = var10[var2];
            var8 = var8.bind(var7)(var2);
            var2 = var8.getInitialInteractionMetadata;
            var2 = var2.bind(var8)(var14);
            var8 = var12 == var2;
            var15 = undefined;
            if(var8) { _fun0007_ip = 468; continue _fun0007 }
 463:
            var15 = var2.type;
 468:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 15;
            var8 = var17[var8];
            var8 = var10.bind(var7)(var8);
            var8 = var8.InteractionTypes;
            var10 = var8.APPLICATION_COMMAND;
            var8 = null;
            if(!(var15 === var10)) { _fun0007_ip = 551; continue _fun0007 }
 506:
            var10 = var2.target_user;
            var10 = var12 != var10;
            var8 = null;
            if(!var10) { _fun0007_ip = 551; continue _fun0007 }
 521:
            var15 = _closure1_slot6;
            var28 = var2.target_user;
            var10 = var15.prototype;
            var10 = Object.create(var10, {constructor: {value: var15}});
            var29 = var10;
            var2 = new var29[var15](var28, var27);
            var8 = var2 instanceof Object ? var2 : var10;
 551:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var21];
            var10 = var10.bind(var7)(var2);
            var2 = var10.getUserAuthor;
            var2 = var2.bind(var10)(var8, var19);
            var17 = var2.colorString;
            var2 = 'username';
            var2 = var2 === var13;
            var20 = var8;
            var8 = var4;
            if(!var2) { _fun0007_ip = 634; continue _fun0007 }
 603:
            var15 = _closure1_slot4;
            var22 = var12 != var17;
            var10 = undefined;
            if(!var22) { _fun0007_ip = 619; continue _fun0007 }
 616:
            var10 = var17;
 619:
            var10 = var15.bind(var7)(var10);
            var8 = var4;
            if(!(var12 != var10)) { _fun0007_ip = 634; continue _fun0007 }
 631:
            var8 = var10;
 634:
            var10 = var4;
            if(!var2) { _fun0007_ip = 671; continue _fun0007 }
 640:
            var15 = _closure1_slot4;
            var17 = var12 != var11;
            var2 = undefined;
            if(!var17) { _fun0007_ip = 656; continue _fun0007 }
 653:
            var2 = var11;
 656:
            var2 = var15.bind(var7)(var2);
            var10 = var4;
            if(!(var12 != var2)) { _fun0007_ip = 671; continue _fun0007 }
 668:
            var10 = var2;
 671:
            var25 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var21];
            var15 = var4.bind(var7)(var2);
            var4 = var15.getUserAuthor;
            var2 = var14.interaction;
            var2 = var2.user;
            var2 = var4.bind(var15)(var2, var19);
            var2 = var2.nick;
            var25['username'] = var2;
            var2 = {'name': 'usernameOnClick', 'action': 'bindUserMenu'};
            var4 = var14.interaction;
            var4 = var4.user;
            var4 = var4.id;
            var2['userId'] = var4;
            var4 = var14.channel_id;
            var2['messageChannelId'] = var4;
            var2['linkColor'] = var10;
            var25['usernameOnClick'] = var2;
            if(!var1) { _fun0007_ip = 972; continue _fun0007 }
 783:
            if(var18) { _fun0007_ip = 972; continue _fun0007 }
 789:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.isActivitiesInTextEnabled;
            var2 = var1.bind(var2)(var19);
            var4 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 17;
            var15 = var22[var1];
            var15 = var4.bind(var7)(var15);
            var17 = var15.intl;
            var15 = var17.formatToParts;
            var1 = var22[var1];
            var1 = var4.bind(var7)(var1);
            var1 = var1.t;
            if(var2) { _fun0007_ip = 894; continue _fun0007 }
 868:
            var4 = var1.k964Wl;
            var2 = {};
            var28 = var2;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var4 = var15.bind(var17)(var4, var2);
            _fun0007_ip = 967; continue _fun0007;
 894:
            var2 = var1.R/mrBg;
            var1 = {};
            var28 = var1;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var24 = {};
            var22 = 'bindTapActivityText';
            var24['action'] = var22;
            var22 = var14.author;
            var22 = var22.id;
            var24['applicationUserId'] = var22;
            var22 = var14.channel_id;
            var24['messageChannelId'] = var22;
            var22 = 'activityTextOnClick';
            var1[var22] = var24;
            var4 = var15.bind(var17)(var2, var1);
 967:
            _fun0007_ip = 1377; continue _fun0007;
 972:
            var24 = var3;
            if(!var18) { _fun0007_ip = 1009; continue _fun0007 }
 978:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 18;
            var1 = var15[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.formatPrimaryEntryPointCommandName;
            var24 = var1.bind(var2)(var3);
 1009:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var15 = var2[var1];
            var15 = var3.bind(var7)(var15);
            var17 = var15.intl;
            var15 = var17.formatToParts;
            var2 = var2[var1];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.SSrolp;
            var2 = {};
            var28 = var2;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var22 = 'commandName';
            var2[var22] = var24;
            if(!(var12 != var19)) { _fun0007_ip = 1091; continue _fun0007 }
 1085:
            if(var23) { _fun0007_ip = 1095; continue _fun0007 }
 1088:
            if(var18) { _fun0007_ip = 1095; continue _fun0007 }
 1091:
            var18 = {};
            _fun0007_ip = 1177; continue _fun0007;
 1095:
            var23 = {'name': 'commandNameOnClick', 'action': 'bindTapCommandName'};
            var26 = var14.interaction;
            var26 = var26.user;
            var26 = var26.id;
            var23['userId'] = var26;
            var26 = var14.id;
            var23['messageId'] = var26;
            var26 = var14.author;
            var26 = var26.id;
            var23['applicationUserId'] = var26;
            var26 = var14.type;
            var23['messageType'] = var26;
            var26 = var14.channel_id;
            var23['messageChannelId'] = var26;
            var18 = var23;
 1177:
            var23 = 'commandNameOnClick';
            var2[var23] = var18;
            var4 = var15.bind(var17)(var3, var2);
            if(!(var12 != var20)) { _fun0007_ip = 1377; continue _fun0007 }
 1201:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var1];
            var2 = var18.bind(var7)(var2);
            var15 = var2.intl;
            var3 = var15.formatToParts;
            var1 = var17[var1];
            var1 = var18.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.mqKdCA;
            var1 = {};
            var28 = var1;
            var27 = var25;
            var25 = copyDataProperties(var28, var27);
            var1[var22] = var24;
            var22 = {};
            var1[var23] = var22;
            var17 = var17[var21];
            var18 = var18.bind(var7)(var17);
            var17 = var18.getUserAuthor;
            var17 = var17.bind(var18)(var20, var19);
            var18 = var17.nick;
            var17 = 'targetUsername';
            var1[var17] = var18;
            var18 = {'name': 'targetUsernameOnClick', 'action': 'bindUserMenu'};
            var17 = 'targetUsernameOnClick';
            var21 = var12 == var20;
            var19 = undefined;
            if(var21) { _fun0007_ip = 1347; continue _fun0007 }
 1342:
            var19 = var20.id;
 1347:
            var18['userId'] = var19;
            var19 = var14.channel_id;
            var18['messageChannelId'] = var19;
            var18['linkColor'] = var8;
            var1[var17] = var18;
            var4 = var3.bind(var15)(var2, var1);
 1377:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var7)(var1);
            var17 = var1.ActivitiesControllerIconMobileExperiment;
            var15 = var17.getCurrentConfig;
            var2 = {};
            var1 = 'ExecutedCommandNative';
            var2['location'] = var1;
            var1 = {};
            var3 = true;
            var1['autoTrackExposure'] = var3;
            var1 = var15.bind(var17)(var2, var1);
            var2 = var1.enabled;
            if(!var2) { _fun0007_ip = 1472; continue _fun0007 }
 1444:
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var15 = var15.bind(var7)(var1);
            var1 = var15.isPrimaryEntryPointCommandMessage;
            var2 = var1.bind(var15)(var14);
 1472:
            var1 = {};
            var14 = var14.interaction;
            var14 = var14.user;
            var14 = var14.id;
            var1['userId'] = var14;
            var1['usernameColor'] = var10;
            var14 = _closure1_slot4;
            var15 = var12 != var11;
            var10 = undefined;
            if(!var15) { _fun0007_ip = 1515; continue _fun0007 }
 1512:
            var10 = var11;
 1515:
            var14 = var14.bind(var7)(var10);
            var15 = var12 != var14;
            var10 = null;
            if(!var15) { _fun0007_ip = 1532; continue _fun0007 }
 1529:
            var10 = var14;
 1532:
            var1['roleColor'] = var10;
            var10 = 'dot';
            var10 = var10 === var13;
            if(!var10) { _fun0007_ip = 1552; continue _fun0007 }
 1548:
            var10 = var12 != var11;
 1552:
            var1['shouldShowRoleDot'] = var10;
            var1['avatarURL'] = var9;
            var1['targetUsernameColor'] = var8;
            var1['content'] = var4;
            var4 = {'color': null, 'borderRadius': 4, 'spaceAround': true};
            var5 = _closure1_slot4;
            var5 = var5.bind(var7)(var6);
            var4['color'] = var5;
            var1['commandNameBackgroundStyles'] = var4;
            var1['showAppsIcon'] = var3;
            var1['showControllerIcon'] = var2;
            return var1;
        }
    };
    var3['createExecutedCommand'] = var2;
    return var1;
})();