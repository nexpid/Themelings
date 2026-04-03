// app/modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function castHook(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = _closure2_slot0;
            return var1;
        };
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createPollResultSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var6.message;
            var1 = var1.embeds;
            var4 = 0;
            var1 = var1[var4];
            var7 = var2.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.message;
            var2 = var2.messageReference;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var6.message;
            var11 = var6.roleStyle;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 1;
            var2 = var13[var2];
            var9 = var9.bind(var5)(var2);
            var2 = var9.getMessageAuthorWithProcessedColor;
            var12 = var2.bind(var9)(var8);
            var10 = {};
            var2 = var12.nick;
            var10['username'] = var2;
            var9 = _closure1_slot1;
            var2 = 2;
            var2 = var13[var2];
            var9 = var9.bind(var5)(var2);
            var2 = {};
            var2['message'] = var8;
            var2['author'] = var12;
            var2['roleStyle'] = var11;
            var2 = var9.bind(var5)(var2);
            var10['usernameOnClick'] = var2;
            var2 = var7.questionText;
            var10['title'] = var2;
            var2 = {};
            var9 = 'bindJumpToMessage';
            var2['action'] = var9;
            var9 = var8.messageReference;
            var9 = var9.channel_id;
            var2['targetChannelId'] = var9;
            var8 = var8.messageReference;
            var8 = var8.message_id;
            var2['targetMessageId'] = var8;
            var8 = true;
            var2['medium'] = var8;
            var10['titleOnClick'] = var2;
            var2 = var7.totalVotes;
            if(!(var4 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = global;
            var9 = var2.Math;
            var8 = var9.round;
            var11 = var7.victorAnswerVotes;
            var4 = var7.totalVotes;
            var11 = var11 / var4;
            var4 = 100;
            var4 = var11 * var4;
            var9 = var8.bind(var9)(var4);
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var4 = '';
            var2 = '%';
            var12 = var8.bind(var4)(var9, var2);
            var2 = var7.victorAnswerId;
            if(!(var1 != var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = new Array(0);
            var15 = var7.victorEmoji;
            if(!(var1 != var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var15.id;
            if(!(var1 == var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var13.push;
            var2 = {};
            var8 = 'emoji';
            var2['type'] = var8;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var14 = var9.bind(var5)(var8);
            var11 = var14.convertSurrogateToName;
            var9 = var15.name;
            var8 = false;
            var8 = var11.bind(var14)(var9, var8);
            var2['content'] = var8;
            var8 = var15.name;
            var2['surrogate'] = var8;
            var2 = var4.bind(var13)(var2);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var4 = var13.push;
            var2 = {};
            var8 = var15.id;
            var2['id'] = var8;
            var8 = 'customEmoji';
            var2['type'] = var8;
            var8 = var15.name;
            var2['alt'] = var8;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 4;
            var14 = var11[var8];
            var18 = var9.bind(var5)(var14);
            var17 = var18.getEmojiURL;
            var16 = {};
            var14 = var15.id;
            var16['id'] = var14;
            var14 = var15.animated;
            var16['animated'] = var14;
            var14 = _closure1_slot3;
            var16['size'] = var14;
            var16 = var17.bind(var18)(var16);
            var2['src'] = var16;
            var8 = var11[var8];
            var11 = var9.bind(var5)(var8);
            var9 = var11.getEmojiURL;
            var8 = {};
            var15 = var15.id;
            var8['id'] = var15;
            var15 = false;
            var8['animated'] = var15;
            var8['size'] = var14;
            var8 = var9.bind(var11)(var8);
            var2['frozenSrc'] = var8;
            var2 = var4.bind(var13)(var2);
case 14:
            var4 = var13.push;
            var2 = {'type': 'text', 'content': ' '};
            var2 = var4.bind(var13)(var2);
case 10:
            var4 = var13.push;
            var2 = {};
            var8 = 'text';
            var2['type'] = var8;
            var7 = var7.victorAnswerText;
            var2['content'] = var7;
            var2 = var4.bind(var13)(var2);
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 3;
            var7 = var9[var2];
            var7 = var4.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var2 = var9[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.zFwIxC;
            var2 = {};
            var21 = var2;
            var20 = var10;
            var9 = copyDataProperties(var21, var20);
            var11 = _closure1_slot4;
            var9 = {};
            var14 = 'strong';
            var9['type'] = var14;
            var9['content'] = var13;
            var11 = var11.bind(var5)(var9);
            var9 = 'answerHook';
            var2[8] = var11;
            var9 = 'percentage';
            var2[8] = var12;
            var4 = var7.bind(var8)(var4, var2);
            _fun0001_ip = 15; continue _fun0001;
case 8:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 3;
            var8 = var11[var2];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var7 = var2.dqftZ2;
            var2 = {};
            var21 = var2;
            var20 = var10;
            var11 = copyDataProperties(var21, var20);
            var11 = 'percentage';
            var2[10] = var12;
            var4 = var8.bind(var9)(var7, var2);
            _fun0001_ip = 15; continue _fun0001;
case 6:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 3;
            var8 = var11[var2];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var7 = var2["9dPxsm"];
            var2 = {};
            var21 = var2;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var11 = _closure1_slot4;
            var10 = {'type': 'emoji', 'content': 'frowning', 'surrogate': '😦'};
            var11 = var11.bind(var5)(var10);
            var10 = 'sadEmojiHook';
            var2[9] = var11;
            var4 = var8.bind(var9)(var7, var2);
case 15:
            var2 = {};
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var20 = var3.bind(var5)(var6);
            var21 = var2;
            var3 = copyDataProperties(var21, var20);
            var3 = 'content';
            var2[2] = var4;
            return var2;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createPollResultSystemMessage'] = var2;
    return var1;
})();