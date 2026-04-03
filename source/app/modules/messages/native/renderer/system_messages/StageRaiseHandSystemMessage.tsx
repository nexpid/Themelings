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
            var8 = var4.qDAX++;
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
            var2 = var2.htHOrp;
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
            var17 = var4.roleStyle;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var18 = var1.bind(var5)(var7);
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var1 = var7.channel_id;
            var8 = var5.bind(var6)(var1);
            var6 = _closure1_slot5;
            var5 = var6.can;
            var1 = _closure1_slot9;
            var1 = var1.MUTE_MEMBERS;
            var8 = var5.bind(var6)(var1, var8);
            var9 = _closure1_slot3;
            var6 = var9.getParticipant;
            var5 = var7.channel_id;
            var1 = var7.author;
            var1 = var1.id;
            var5 = var6.bind(var9)(var5, var1);
            var1 = global;
            var10 = var1.Date;
            var9 = _closure1_slot1;
            var6 = 7;
            var6 = var11[var6];
            var11 = var9.bind(var3)(var6);
            var9 = var11.extractTimestamp;
            var6 = var7.id;
            var21 = var9.bind(var11)(var6);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var22 = var9;
            var6 = new var22[var10](var21, var20);
            var9 = var6 instanceof Object ? var6 : var9;
            var6 = var9.toISOString;
            var9 = var6.bind(var9)();
            var11 = var1.Date;
            var6 = null;
            var1 = var6 == var5;
            var10 = undefined;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var5.voiceState;
            var12 = var6 == var1;
            var10 = undefined;
            if(var12) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var10 = var1.requestToSpeakTimestamp;
case 5:
            var12 = var6 != var10;
            var1 = 0;
            if(!var12) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var10;
case 8:
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var22 = var10;
            var21 = var1;
            var1 = new var22[var11](var21, var20);
            var10 = var1 instanceof Object ? var1 : var10;
            var1 = var10.toISOString;
            var1 = var1.bind(var10)();
            var1 = var9 === var1;
            var9 = var8;
            if(!var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = var6 == var5;
            var6 = undefined;
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var5.rtsState;
case 12:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.RequestToSpeakStates;
            var5 = var5.REQUESTED_TO_SPEAK;
            var9 = var6 === var5;
case 10:
            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = var1;
case 14:
            var1 = {};
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 4;
            var5 = var6[var8];
            var5 = var11.bind(var3)(var5);
            var14 = var5.intl;
            var13 = var14.formatToParts;
            var5 = var6[var8];
            var5 = var11.bind(var3)(var5);
            var5 = var5.t;
            var12 = var5.M87x7Y;
            var10 = {};
            var5 = var18.nick;
            var10['username'] = var5;
            var5 = _closure1_slot1;
            var15 = 9;
            var15 = var6[var15];
            var16 = var5.bind(var3)(var15);
            var15 = {};
            var15['message'] = var7;
            var15['author'] = var18;
            var15['roleStyle'] = var17;
            var15 = var16.bind(var3)(var15);
            var10['usernameOnClick'] = var15;
            var10 = var13.bind(var14)(var12, var10);
            var1['content'] = var10;
            var1['showInviteToSpeakButton'] = var9;
            var9 = var6[var8];
            var9 = var11.bind(var3)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var6[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.f0T7hI;
            var8 = var9.bind(var10)(var8);
            var1['buttonLabel'] = var8;
            var2 = _closure1_slot10;
            var2 = var2.bind(var3)(var7);
            var1['ephemeralIndication'] = var2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var20 = var2.bind(var3)(var4);
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createStageRaiseHandSystemMessage'] = var2;
    return var1;
})();