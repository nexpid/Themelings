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
 0:
            var4 = arg1;
            var1 = var4.message;
            var1 = var1.author;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var5 = var10[var3];
            var3 = undefined;
            var7 = var9.bind(var3)(var5);
            var6 = var7.getMessageAuthorWithProcessedColor;
            var5 = var4.message;
            var6 = var6.bind(var7)(var5);
            var11 = var6.nick;
            var5 = var6.colorString;
            var8 = var6.colorStrings;
            var7 = var6.guildId;
            var6 = 5;
            var6 = var10[var6];
            var12 = var9.bind(var3)(var6);
            var10 = var12.isNativeMessageEligibleForEnhancedRoleColors;
            var9 = var1.id;
            var6 = var4.roleStyle;
            var9 = var10.bind(var12)(var7, var9, var6);
            var10 = {};
            var6 = 'bindUserMenu';
            var10['action'] = var6;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var4.message;
            var1 = var1.channel_id;
            var10['messageChannelId'] = var1;
            var1 = true;
            var10['medium'] = var1;
            var10['colorString'] = var5;
            var13 = var4.roleStyle;
            var6 = null;
            var12 = 'username';
            var1 = null;
            if(!(var12 === var13)) { _fun0001_ip = 183; continue _fun0001 }
 180:
            var1 = var5;
 183:
            var10['linkColor'] = var1;
            var10['roleColor'] = var5;
            var1 = null;
            if(!var9) { _fun0001_ip = 201; continue _fun0001 }
 198:
            var1 = var8;
 201:
            var10['roleColors'] = var1;
            var8 = var4.roleStyle;
            var1 = 'dot';
            var1 = var1 === var8;
            if(!var1) { _fun0001_ip = 227; continue _fun0001 }
 223:
            var1 = var6 != var5;
 227:
            var10['shouldShowRoleDot'] = var1;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var8 = var5.bind(var3)(var1);
            var5 = var8.getSystemMessageEmoji;
            var1 = var4.message;
            var1 = var1.content;
            var9 = var5.bind(var8)(var1);
            if(!(var6 != var9)) { _fun0001_ip = 878; continue _fun0001 }
 280:
            var5 = _closure1_slot3;
            var1 = var5.getDisambiguatedEmojiContext;
            var8 = var1.bind(var5)(var7);
            var5 = var6 == var8;
            var1 = undefined;
            if(var5) { _fun0001_ip = 320; continue _fun0001 }
 304:
            var7 = var8.getById;
            var5 = var9.id;
            var1 = var7.bind(var8)(var5);
 320:
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 9;
            var8 = var15[var5];
            var13 = var7.bind(var3)(var8);
            var12 = var13.getEmojiURL;
            var8 = {};
            var14 = var9.id;
            var8['id'] = var14;
            var14 = var9.animated;
            var8['animated'] = var14;
            var14 = 48;
            var8['size'] = var14;
            var12 = var12.bind(var13)(var8);
            var5 = var15[var5];
            var13 = var7.bind(var3)(var5);
            var8 = var13.getEmojiURL;
            var5 = {'id': null, 'animated': false, 'size': 48};
            var7 = var9.id;
            var5['id'] = var7;
            var7 = false;
            var5 = var8.bind(var13)(var5);
            var13 = {};
            var14 = _closure1_slot0;
            var8 = 10;
            var8 = var15[var8];
            var8 = var14.bind(var3)(var8);
            var8 = var8.AST_KEY;
            var8 = var8.CUSTOM_EMOJI;
            var13['type'] = var8;
            var13['jumboable'] = var7;
            var13['src'] = var12;
            var13['frozenSrc'] = var5;
            var5 = var9.name;
            var13['alt'] = var5;
            var5 = var9.id;
            var13['id'] = var5;
            var5 = var9.animated;
            var13['animateEmoji'] = var5;
            var14 = {'action': 'bindInsertText', 'text': null, 'addSpace': true};
            var5 = var6 == var1;
            var7 = undefined;
            if(var5) { _fun0001_ip = 530; continue _fun0001 }
 525:
            var7 = var1.name;
 530:
            if(!(var6 == var7)) { _fun0001_ip = 539; continue _fun0001 }
 534:
            var7 = var9.name;
 539:
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = ':';
            var1 = var5.bind(var1)(var7, var1);
            var14['text'] = var1;
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 7;
            var7 = var15[var1];
            var7 = var5.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var1 = var15[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.t;
            var5 = var1.SYlkPj;
            var1 = {};
            var1['username'] = var11;
            var1['usernameOnClick'] = var10;
            var15 = var9.originalName;
            if(!(var6 == var15)) { _fun0001_ip = 647; continue _fun0001 }
 642:
            var15 = var9.name;
 647:
            var1['emojiName'] = var15;
            var1['emojiOnClick'] = var14;
            var1['emojiPreview'] = var13;
            var7 = var7.bind(var8)(var5, var1);
            var8 = _closure1_slot4;
            var5 = var8.getChannel;
            var1 = var4.message;
            var1 = var1.channel_id;
            var13 = var5.bind(var8)(var1);
            var8 = _closure1_slot5;
            var5 = var8.can;
            var1 = _closure1_slot6;
            var1 = var1.ADD_REACTIONS;
            var1 = var5.bind(var8)(var1, var13);
            var5 = undefined;
            if(!var1) { _fun0001_ip = 792; continue _fun0001 }
 725:
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
 792:
            var1 = {};
            var1['content'] = var7;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var18 = var7.bind(var3)(var4);
            var19 = var1;
            var7 = copyDataProperties(var19, var18);
            var7 = var4.reactions;
            var8 = var7.length;
            var7 = 0;
            if(!(!(var8 > var7))) { _fun0001_ip = 861; continue _fun0001 }
 847:
            if(!(var6 != var5)) { _fun0001_ip = 861; continue _fun0001 }
 851:
            var6 = new Array(1);
            var6[0] = var5;
            _fun0001_ip = 867; continue _fun0001;
 861:
            var6 = var4.reactions;
 867:
            var5 = 'reactions';
            var1[var5] = var6;
            return var1;
 878:
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
            var7 = var5.7NBgIS;
            var5 = {};
            var5['username'] = var11;
            var5['usernameOnClick'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var18 = var2.bind(var3)(var4);
            var19 = var1;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createEmojiAddedSystemMessage'] = var2;
    return var1;
})();