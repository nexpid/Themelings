// app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function RemoveSelfSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var6 = var3.row;
            var1 = var3.channel;
            var9 = var3.formatProps;
            var _closure2_slot0 = var9;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var3 = null;
            var8 = var3 != var1;
            if(!var8) { _fun0001_ip = 63; continue _fun0001 }
 41:
            var5 = _closure1_slot5;
            var3 = var5.has;
            var1 = var1.type;
            var8 = var3.bind(var5)(var1);
 63:
            _closure2_slot1 = var8;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToParts;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    if(var1) { _fun0002_ip = 78; continue _fun0002 }
 60:
                    var6 = var3.Qn5+LS;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var6, var1);
                    _fun0002_ip = 94; continue _fun0002;
 78:
                    var3 = var3.uHmblp;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 94:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var6;
            var1['content'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function RemoveOtherSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var11 = var1.channel;
            var14 = var1.formatProps;
            var _closure2_slot0 = var14;
            var10 = var1.otherUserId;
            var _closure2_slot1 = var10;
            var9 = var1.roleStyle;
            var _closure2_slot2 = var9;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = var6.message;
            var15 = var1.channel_id;
            var _closure2_slot3 = var15;
            var1 = null;
            var13 = var1 != var11;
            if(!var13) { _fun0003_ip = 105; continue _fun0003 }
 83:
            var5 = _closure1_slot5;
            var3 = var5.has;
            var1 = var11.type;
            var13 = var3.bind(var5)(var1);
 105:
            _closure2_slot4 = var13;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var17 = var5.bind(var4)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var3;
            var8 = new Array(1);
            var8[0] = var10;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var16.bind(var17)(var12, var3, var8);
            var3 = 6;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useUserAuthorWithProcessedColor;
            var3 = var3.bind(var5)(var8, var11);
            var11 = var3.nick;
            _closure2_slot5 = var11;
            var12 = var3.colorString;
            _closure2_slot6 = var12;
            var8 = _closure1_slot3;
            var5 = var8.useMemo;
            var3 = new Array(7);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var13;
            var3[3] = var12;
            var3[4] = var11;
            var3[5] = var10;
            var3[6] = var9;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = {};
                    var9 = _closure2_slot0;
                    var10 = var5;
                    var2 = copyDataProperties(var10, var9);
                    var3 = _closure2_slot5;
                    var2 = 'otherUsername';
                    var5[var2] = var3;
                    var3 = {};
                    var2 = 'bindUserMenu';
                    var3['action'] = var2;
                    var2 = _closure2_slot1;
                    var3['userId'] = var2;
                    var2 = _closure2_slot6;
                    var3['otherColorString'] = var2;
                    var7 = _closure2_slot2;
                    var6 = null;
                    var4 = 'username';
                    var2 = null;
                    if(!(var4 === var7)) { _fun0004_ip = 78; continue _fun0004 }
 74:
                    var2 = _closure2_slot6;
 78:
                    var3['linkColor'] = var2;
                    var2 = _closure2_slot6;
                    var3['roleColor'] = var2;
                    var4 = _closure2_slot2;
                    var2 = 'dot';
                    var2 = var2 === var4;
                    if(!var2) { _fun0004_ip = 115; continue _fun0004 }
 107:
                    var4 = _closure2_slot6;
                    var2 = var6 != var4;
 115:
                    var3['shouldShowRoleDot'] = var2;
                    var2 = _closure2_slot3;
                    var3['messageChannelId'] = var2;
                    var2 = 'otherUsernameOnClick';
                    var5[var2] = var3;
                    var1 = _closure2_slot4;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0004_ip = 209; continue _fun0004 }
 195:
                    var1 = var2.QtZ0RE;
                    var1 = var3.bind(var4)(var1, var5);
                    _fun0004_ip = 221; continue _fun0004;
 209:
                    var2 = var2.KBrM5u;
                    var1 = var3.bind(var4)(var2, var5);
 221:
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var6;
            var1['content'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RemoveRecipientSystemMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var8 = var1.row;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 11;
            var1 = var11[var4];
            var5 = undefined;
            var12 = var6.bind(var5)(var1);
            var10 = var12.useStateFromStores;
            var1 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var1;
            var7 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var1 = new Array(0);
            var9 = var10.bind(var12)(var9, var7, var1);
            var _closure2_slot0 = var9;
            var1 = var8.message;
            var12 = var1.author;
            var _closure2_slot1 = var12;
            var10 = var1.mentions;
            var7 = 0;
            var10 = var10[var7];
            var15 = var1.channel_id;
            var _closure2_slot2 = var15;
            var4 = var11[var4];
            var16 = var6.bind(var5)(var4);
            var14 = var16.useStateFromStores;
            var4 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var4;
            var7 = new Array(1);
            var7[0] = var15;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var14.bind(var16)(var13, var4, var7);
            var4 = 6;
            var4 = var11[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useMessageAuthorWithProcessedColor;
            var4 = var4.bind(var6)(var1);
            var13 = var4.nick;
            var _closure2_slot3 = var13;
            var14 = var4.colorString;
            var _closure2_slot4 = var14;
            var11 = _closure1_slot3;
            var6 = var11.useMemo;
            var4 = new Array(5);
            var4[0] = var15;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var9;
            var12 = var12.id;
            var4[4] = var12;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var1['username'] = var2;
                    var2 = {};
                    var4 = 'bindUserMenu';
                    var2['action'] = var4;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var4 = _closure2_slot4;
                    var2['colorString'] = var4;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var5 = 'username';
                    var4 = null;
                    if(!(var5 === var7)) { _fun0006_ip = 67; continue _fun0006 }
 63:
                    var4 = _closure2_slot4;
 67:
                    var2['linkColor'] = var4;
                    var4 = _closure2_slot4;
                    var2['roleColor'] = var4;
                    var5 = _closure2_slot0;
                    var4 = 'dot';
                    var4 = var4 === var5;
                    if(!var4) { _fun0006_ip = 104; continue _fun0006 }
 96:
                    var5 = _closure2_slot4;
                    var4 = var6 != var5;
 104:
                    var2['shouldShowRoleDot'] = var4;
                    var3 = _closure2_slot2;
                    var2['messageChannelId'] = var3;
                    var3 = true;
                    var2['medium'] = var3;
                    var1['usernameOnClick'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var11)(var3, var4);
            var1 = var1.author;
            var1 = var1.id;
            if(!(var1 !== var10)) { _fun0005_ip = 310; continue _fun0005 }
 268:
            var4 = _closure1_slot8;
            var3 = _closure1_slot10;
            var1 = {};
            var1['row'] = var8;
            var1['channel'] = var7;
            var1['formatProps'] = var6;
            var1['otherUserId'] = var10;
            var1['roleStyle'] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 340; continue _fun0005;
 310:
            var4 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = {};
            var2['row'] = var8;
            var2['channel'] = var7;
            var2['formatProps'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 340:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createRemoveRecipientSystemMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = var4.message;
            var11 = var4.roleStyle;
            var6 = var1.author;
            var3 = var1.mentions;
            var2 = 0;
            var12 = var3[var2];
            var7 = _closure1_slot6;
            var5 = var7.getChannel;
            var3 = var1.channel_id;
            var13 = var5.bind(var7)(var3);
            var10 = null;
            var5 = var10 != var13;
            if(!var5) { _fun0007_ip = 82; continue _fun0007 }
 63:
            var8 = _closure1_slot5;
            var7 = var8.has;
            var3 = var13.type;
            var5 = var7.bind(var8)(var3);
 82:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = 6;
            var7 = var14[var17];
            var3 = undefined;
            var8 = var9.bind(var3)(var7);
            var7 = var8.getMessageAuthorWithProcessedColor;
            var8 = var7.bind(var8)(var1);
            var7 = var8.nick;
            var18 = var8.colorString;
            var19 = var8.colorStrings;
            var15 = var8.guildId;
            var8 = 7;
            var8 = var14[var8];
            var14 = var9.bind(var3)(var8);
            var9 = var14.isNativeMessageEligibleForEnhancedRoleColors;
            var8 = var6.id;
            var14 = var9.bind(var14)(var15, var8, var11);
            var9 = {};
            var9['username'] = var7;
            var8 = {};
            var16 = 'bindUserMenu';
            var8['action'] = var16;
            var7 = var6.id;
            var8['userId'] = var7;
            var8['colorString'] = var18;
            var7 = 'username';
            var15 = var7 === var11;
            var7 = null;
            if(!var15) { _fun0007_ip = 216; continue _fun0007 }
 213:
            var7 = var18;
 216:
            var8['linkColor'] = var7;
            var8['roleColor'] = var18;
            var7 = null;
            if(!var14) { _fun0007_ip = 234; continue _fun0007 }
 231:
            var7 = var19;
 234:
            var8['roleColors'] = var7;
            var7 = 'dot';
            var7 = var7 === var11;
            var11 = var7;
            if(!var7) { _fun0007_ip = 257; continue _fun0007 }
 253:
            var11 = var10 != var18;
 257:
            var8['shouldShowRoleDot'] = var11;
            var11 = var1.channel_id;
            var8['messageChannelId'] = var11;
            var11 = true;
            var8['medium'] = var11;
            var9['usernameOnClick'] = var8;
            var6 = var6.id;
            if(!(var6 !== var12)) { _fun0007_ip = 570; continue _fun0007 }
 296:
            var8 = _closure1_slot7;
            var6 = var8.getUser;
            var11 = var6.bind(var8)(var12);
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var17];
            var8 = var8.bind(var3)(var6);
            var6 = var8.getUserAuthorWithProcessedColor;
            var6 = var6.bind(var8)(var11, var13);
            var17 = var6.nick;
            var8 = var6.colorString;
            var13 = var6.colorStrings;
            var11 = {};
            var23 = var11;
            var22 = var9;
            var6 = copyDataProperties(var23, var22);
            var6 = 'otherUsername';
            var11[var6] = var17;
            var6 = {};
            var6['action'] = var16;
            var6['userId'] = var12;
            var6['otherColorString'] = var8;
            var12 = null;
            if(!var15) { _fun0007_ip = 402; continue _fun0007 }
 399:
            var12 = var8;
 402:
            var6['linkColor'] = var12;
            var6['roleColor'] = var8;
            var12 = null;
            if(!var14) { _fun0007_ip = 420; continue _fun0007 }
 417:
            var12 = var13;
 420:
            var6['roleColors'] = var12;
            if(!var7) { _fun0007_ip = 432; continue _fun0007 }
 428:
            var7 = var10 != var8;
 432:
            var6['shouldShowRoleDot'] = var7;
            var1 = var1.channel_id;
            var6['messageChannelId'] = var1;
            var1 = 'otherUsernameOnClick';
            var11[var1] = var6;
            var1 = {};
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 8;
            var8 = var12[var6];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.formatToParts;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.t;
            if(var5) { _fun0007_ip = 520; continue _fun0007 }
 506:
            var6 = var7.QtZ0RE;
            var6 = var8.bind(var10)(var6, var11);
            _fun0007_ip = 532; continue _fun0007;
 520:
            var7 = var7.KBrM5u;
            var6 = var8.bind(var10)(var7, var11);
 532:
            var1['content'] = var6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 9;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var22 = var6.bind(var3)(var4);
            var23 = var1;
            var6 = copyDataProperties(var23, var22);
            return var1;
 570:
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 8;
            var7 = var11[var6];
            var7 = var10.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var6 = var11[var6];
            var6 = var10.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0007_ip = 634; continue _fun0007 }
 620:
            var5 = var6.Qn5+LS;
            var5 = var7.bind(var8)(var5, var9);
            _fun0007_ip = 646; continue _fun0007;
 634:
            var6 = var6.uHmblp;
            var5 = var7.bind(var8)(var6, var9);
 646:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createRemoveRecipientSystemMessage'] = var2;
    return var1;
})();