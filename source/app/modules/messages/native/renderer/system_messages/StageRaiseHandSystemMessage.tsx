// app/modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createRequestToSpeakEphemeralIndication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var2 = var12.hasFlag;
            var1 = _closure1_slot7;
            var1 = var1.EPHEMERAL;
            var1 = var2.bind(var12)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var12.type;
            var1 = _closure1_slot8;
            var1 = var1.STAGE_RAISE_HAND;
            if(!(var2 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 4:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var4 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var10 = var4.intl;
            var9 = var10.formatToParts;
            var4 = var7[var2];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var8 = var4.qDAX+/;
            var4 = {};
            var11 = {};
            var13 = 'bindDismissMessage';
            var11['action'] = var13;
            var11['message'] = var12;
            var4['handleDelete'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            var1['content'] = var4;
            var8 = _closure1_slot1;
            var4 = 5;
            var4 = var7[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.getArticleURL;
            var3 = _closure1_slot6;
            var3 = var3.EPHEMERAL_MESSAGES;
            var3 = var4.bind(var8)(var3);
            var1['helpArticleLink'] = var3;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.htHOrq;
            var2 = var3.bind(var4)(var2);
            var1['helpButtonAccessibilityLabel'] = var2;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot6 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot7 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot8 = var7;
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createStageRaiseHandSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var7 = var4.message;
            var19 = var4.roleStyle;
            var16 = var7.author;
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 6;
            var1 = var13[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var7);
            var12 = var1.nick;
            var17 = var1.colorString;
            var14 = var1.colorStrings;
            var11 = var1.guildId;
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var1 = var7.channel_id;
            var8 = var5.bind(var6)(var1);
            var6 = _closure1_slot5;
            var5 = var6.can;
            var1 = _closure1_slot9;
            var1 = var1.MUTE_MEMBERS;
            var6 = var5.bind(var6)(var1, var8);
            var9 = _closure1_slot3;
            var8 = var9.getParticipant;
            var5 = var7.channel_id;
            var1 = var7.author;
            var1 = var1.id;
            var5 = var8.bind(var9)(var5, var1);
            var1 = global;
            var10 = var1.Date;
            var9 = _closure1_slot1;
            var8 = 7;
            var8 = var13[var8];
            var13 = var9.bind(var3)(var8);
            var9 = var13.extractTimestamp;
            var8 = var7.id;
            var22 = var9.bind(var13)(var8);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var23 = var9;
            var8 = new var23[var10](var22, var21);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.toISOString;
            var8 = var8.bind(var9)();
            var10 = var1.Date;
            var13 = null;
            var1 = var13 == var5;
            var9 = undefined;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var5.voiceState;
            var15 = var13 == var1;
            var9 = undefined;
            if(var15) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var9 = var1.requestToSpeakTimestamp;
case 5:
            var15 = var13 != var9;
            var1 = 0;
            if(!var15) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var9;
case 8:
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var23 = var9;
            var22 = var1;
            var1 = new var23[var10](var22, var21);
            var9 = var1 instanceof Object ? var1 : var9;
            var1 = var9.toISOString;
            var1 = var1.bind(var9)();
            var1 = var8 === var1;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var13 == var5;
            var8 = undefined;
            if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var5.rtsState;
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.RequestToSpeakStates;
            var5 = var5.REQUESTED_TO_SPEAK;
            var6 = var8 === var5;
case 10:
            if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var1;
case 14:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var10 = var9.bind(var3)(var1);
            var5 = var10.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var16.id;
            var15 = var5.bind(var10)(var11, var1, var19);
            var1 = {};
            var5 = 4;
            var10 = var8[var5];
            var10 = var9.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.formatToParts;
            var8 = var8[var5];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var9 = var8.M87x7e;
            var8 = {};
            var8['username'] = var12;
            var12 = {};
            var18 = 'bindUserMenu';
            var12['action'] = var18;
            var16 = var16.id;
            var12['userId'] = var16;
            var18 = 'username';
            var16 = null;
            if(!(var18 === var19)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = var17;
case 16:
            var12['linkColor'] = var16;
            var13 = null;
            if(!var15) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var13 = var14;
case 18:
            var12['roleColors'] = var13;
            var13 = var7.channel_id;
            var12['messageChannelId'] = var13;
            var13 = true;
            var12['medium'] = var13;
            var8['usernameOnClick'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var1['content'] = var8;
            var1['showInviteToSpeakButton'] = var6;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = var6[var5];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var5 = var6[var5];
            var5 = var10.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.f0T7hI;
            var5 = var8.bind(var9)(var5);
            var1['buttonLabel'] = var5;
            var5 = _closure1_slot10;
            var5 = var5.bind(var3)(var7);
            var1['ephemeralIndication'] = var5;
            var5 = _closure1_slot1;
            var2 = 10;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var21 = var2.bind(var3)(var4);
            var22 = var1;
            var2 = copyDataProperties(var22, var21);
            return var1;
        }
    };
    var3['createStageRaiseHandSystemMessage'] = var2;
    return var1;
})();