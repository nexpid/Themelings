// app/modules/messages/native/renderer/system_messages/EmojiAddedSystemMessage.tsx
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
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/EmojiAddedSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createEmojiAddedSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = var4.message;
            var9 = var4.roleStyle;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var5 = var7[var3];
            var3 = undefined;
            var8 = var6.bind(var3)(var5);
            var5 = var8.getMessageAuthorWithProcessedColor;
            var11 = var5.bind(var8)(var1);
            var8 = _closure1_slot1;
            var5 = 5;
            var5 = var7[var5];
            var8 = var8.bind(var3)(var5);
            var5 = {};
            var5['message'] = var1;
            var5['author'] = var11;
            var5['roleStyle'] = var9;
            var10 = var8.bind(var3)(var5);
            var5 = 6;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.getSystemMessageEmoji;
            var5 = var1.content;
            var9 = var6.bind(var7)(var5);
            var6 = null;
            if(!(var6 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot3;
            var7 = var8.getDisambiguatedEmojiContext;
            var5 = var11.guildId;
            var12 = var7.bind(var8)(var5);
            var7 = var6 == var12;
            var5 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var12.getById;
            var7 = var9.id;
            var5 = var8.bind(var12)(var7);
case 4:
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 9;
            var12 = var16[var7];
            var14 = var8.bind(var3)(var12);
            var13 = var14.getEmojiURL;
            var12 = {};
            var15 = var9.id;
            var12['id'] = var15;
            var15 = var9.animated;
            var12['animated'] = var15;
            var15 = 48;
            var12['size'] = var15;
            var12 = var13.bind(var14)(var12);
            var7 = var16[var7];
            var14 = var8.bind(var3)(var7);
            var13 = var14.getEmojiURL;
            var7 = {'id': null, 'animated': false, 'size': 48};
            var8 = var9.id;
            var7['id'] = var8;
            var8 = false;
            var7 = var13.bind(var14)(var7);
            var14 = {};
            var15 = _closure1_slot0;
            var13 = 10;
            var13 = var16[var13];
            var13 = var15.bind(var3)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.CUSTOM_EMOJI;
            var14['type'] = var13;
            var14['jumboable'] = var8;
            var14['src'] = var12;
            var14['frozenSrc'] = var7;
            var7 = var9.name;
            var14['alt'] = var7;
            var7 = var9.id;
            var14['id'] = var7;
            var7 = var9.animated;
            var14['animateEmoji'] = var7;
            var15 = {'action': 'bindInsertText', 'text': null, 'addSpace': true};
            var7 = var6 == var5;
            var8 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var5.name;
case 6:
            if(!(var6 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var9.name;
case 8:
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var5 = ':';
            var5 = var7.bind(var5)(var8, var5);
            var15['text'] = var5;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 7;
            var8 = var16[var5];
            var8 = var7.bind(var3)(var8);
            var13 = var8.intl;
            var8 = var13.formatToParts;
            var5 = var16[var5];
            var5 = var7.bind(var3)(var5);
            var5 = var5.t;
            var7 = var5.SYlkPk;
            var5 = {};
            var16 = var11.nick;
            var5['username'] = var16;
            var5['usernameOnClick'] = var10;
            var16 = var9.name;
            var5['emojiName'] = var16;
            var5['emojiOnClick'] = var15;
            var5['emojiPreview'] = var14;
            var7 = var8.bind(var13)(var7, var5);
            var8 = _closure1_slot4;
            var5 = var8.getChannel;
            var1 = var1.channel_id;
            var13 = var5.bind(var8)(var1);
            var8 = _closure1_slot5;
            var5 = var8.can;
            var1 = _closure1_slot6;
            var1 = var1.ADD_REACTIONS;
            var1 = var5.bind(var8)(var1, var13);
            var5 = undefined;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = {'count': 0, 'burst_count': 0, 'me': false, 'me_burst': false};
            var8 = {};
            var13 = var9.id;
            var8['id'] = var13;
            var13 = var9.name;
            var8['name'] = var13;
            var13 = var9.animated;
            var8['animated'] = var13;
            var8['src'] = var12;
            var9 = var9.name;
            var8['displayName'] = var9;
            var1['emoji'] = var8;
            var5 = var1;
case 10:
            var1 = {};
            var1['content'] = var7;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var17 = var7.bind(var3)(var4);
            var18 = var1;
            var7 = copyDataProperties(var18, var17);
            var7 = var4.reactions;
            var8 = var7.length;
            var7 = 0;
            if(!(!(var8 > var7))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var6 != var5)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var6 = new Array(1);
            var6[0] = var5;
            _fun0001_ip = 15; continue _fun0001;
case 12:
            var6 = var4.reactions;
case 15:
            var5 = 'reactions';
            var1[4] = var6;
            return var1;
case 2:
            var1 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 7;
            var8 = var6[var5];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var5 = var6[var5];
            var5 = var7.bind(var3)(var5);
            var5 = var5.t;
            var7 = var5["7NBgIX"];
            var5 = {};
            var11 = var11.nick;
            var5['username'] = var11;
            var5['usernameOnClick'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var17 = var2.bind(var3)(var4);
            var18 = var1;
            var2 = copyDataProperties(var18, var17);
            return var1;
        }
    };
    var3['createEmojiAddedSystemMessage'] = var2;
    return var1;
})();