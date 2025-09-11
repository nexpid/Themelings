// app/modules/messages/native/renderer/row_data/ForumPostActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.HelpdeskArticles;
    var _closure1_slot3 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createDefaultReaction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.defaultReactionEmoji;
            var5 = var1.customGuildEmoji;
            var2 = null;
            var6 = var2 != var4;
            var1 = undefined;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 330; continue _fun0001 }
 31:
            var6 = var4.emojiId;
            var7 = var4.emojiName;
            if(!(var2 != var6)) { _fun0001_ip = 54; continue _fun0001 }
 47:
            if(!(var2 == var5)) { _fun0001_ip = 180; continue _fun0001 }
 54:
            var4 = var2 != var7;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 66:
            var4 = {};
            var4['id'] = var1;
            var4['name'] = var7;
            var11 = false;
            var4['animated'] = var11;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = 12;
            var9 = var10[var9];
            var12 = var12.bind(var1)(var9);
            var9 = var12.getURL;
            var9 = var9.bind(var12)(var7);
            var4['src'] = var9;
            var9 = _closure1_slot0;
            var8 = 11;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.getAccessibleEmojiDisplayName;
            var8 = {};
            var8['id'] = var1;
            var8['name'] = var7;
            var8['animated'] = var11;
            var7 = 0;
            var7 = var9.bind(var10)(var11, var7, var8);
            var4['displayName'] = var7;
            var3 = var4;
            _fun0001_ip = 330; continue _fun0001;
 180:
            var4 = {};
            var4['id'] = var6;
            var4['name'] = var1;
            var7 = var5.animated;
            var4['animated'] = var7;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 10;
            var8 = var9[var8];
            var11 = var10.bind(var1)(var8);
            var10 = var11.getEmojiURL;
            var8 = {};
            var8['id'] = var6;
            var12 = var5.animated;
            var8['animated'] = var12;
            var12 = 48;
            var8['size'] = var12;
            var8 = var10.bind(var11)(var8);
            var4['src'] = var8;
            var8 = _closure1_slot0;
            var7 = 11;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getAccessibleEmojiDisplayName;
            var7 = {};
            var7['id'] = var6;
            var6 = var5.name;
            var7['name'] = var6;
            var5 = var5.animated;
            var7['animated'] = var5;
            var6 = false;
            var5 = 0;
            var5 = var8.bind(var9)(var6, var5, var7);
            var4['displayName'] = var5;
            var3 = var4;
 330:
            var2 = var2 != var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 362; continue _fun0001 }
 339:
            var2 = {'emoji': null, 'me': false, 'count': 0};
            var2['emoji'] = var3;
            var1 = var2;
 362:
            return var1;
        }
    };
    var3['createDefaultReaction'] = var4;
    var2 = function createForumPostActions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.isFollowing;
            var2 = var1.hasReactions;
            var4 = var1.defaultReaction;
            var1 = var1.showMediaPostSharePrompt;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 1;
            var3 = var13[var10];
            var9 = undefined;
            var11 = var6.bind(var9)(var3);
            var6 = var11.getAssetUriForEmbed;
            var12 = _closure1_slot1;
            if(var7) { _fun0002_ip = 84; continue _fun0002 }
 65:
            var3 = 3;
            var3 = var13[var3];
            var3 = var12.bind(var9)(var3);
            var8 = var6.bind(var11)(var3);
            _fun0002_ip = 101; continue _fun0002;
 84:
            var3 = 2;
            var3 = var13[var3];
            var3 = var12.bind(var9)(var3);
            var8 = var6.bind(var11)(var3);
 101:
            var11 = null;
            if(!(var11 == var8)) { _fun0002_ip = 198; continue _fun0002 }
 107:
            var13 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var12 = var13.bind(var9)(var3);
            var6 = var12.captureMessage;
            var15 = _closure1_slot2;
            if(var7) { _fun0002_ip = 149; continue _fun0002 }
 140:
            var3 = 3;
            var3 = var15[var3];
            _fun0002_ip = 156; continue _fun0002;
 149:
            var14 = 2;
            var3 = var15[var14];
 156:
            var15 = var13.bind(var9)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var14 = var3.concat;
            var13 = 'Forum follow is null. isFollowing: ';
            var3 = ' icon: ';
            var3 = var14.bind(var13)(var7, var3, var15);
            var3 = var6.bind(var12)(var3);
 198:
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = var14[var10];
            var12 = var6.bind(var9)(var3);
            var6 = var12.getAssetUriForEmbed;
            var13 = _closure1_slot1;
            var3 = 5;
            var3 = var14[var3];
            var3 = var13.bind(var9)(var3);
            var6 = var6.bind(var12)(var3);
            var3 = undefined;
            if(var2) { _fun0002_ip = 327; continue _fun0002 }
 247:
            var12 = var11 == var4;
            var2 = undefined;
            if(var12) { _fun0002_ip = 261; continue _fun0002 }
 256:
            var2 = var4.emoji;
 261:
            var2 = var11 != var2;
            var3 = undefined;
            if(var2) { _fun0002_ip = 327; continue _fun0002 }
 270:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var11 = var14[var2];
            var11 = var13.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var2 = var14[var2];
            var2 = var13.bind(var9)(var2);
            var2 = var2.t;
            var2 = var2.xpOyTE;
            var3 = var11.bind(var12)(var2);
 327:
            var2 = undefined;
            if(!var1) { _fun0002_ip = 628; continue _fun0002 }
 335:
            var1 = {};
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.5uAO7e;
            var13 = var15.bind(var16)(var13);
            var1['title'] = var13;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var18 = var13.intl;
            var17 = var18.formatToParts;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var13 = var13.t;
            var16 = var13.YtCu5u;
            var15 = {};
            var19 = {};
            var13 = _closure1_slot1;
            var20 = 7;
            var20 = var14[var20];
            var22 = var13.bind(var9)(var20);
            var21 = var22.getCreatorSupportArticleURL;
            var20 = _closure1_slot3;
            var20 = var20.MEDIA_CHANNEL;
            var20 = var21.bind(var22)(var20);
            var19['url'] = var20;
            var15['helpArticleUrl'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var1['subtitle'] = var15;
            var15 = var14[var12];
            var15 = var11.bind(var9)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var11.bind(var9)(var12);
            var12 = var12.t;
            var12 = var12.C5UQCw;
            var12 = var15.bind(var16)(var12);
            var1['cta'] = var12;
            var12 = var14[var10];
            var16 = var11.bind(var9)(var12);
            var15 = var16.getAssetUriForEmbed;
            var12 = 8;
            var12 = var14[var12];
            var12 = var13.bind(var9)(var12);
            var12 = var15.bind(var16)(var12);
            var1['icon'] = var12;
            var10 = var14[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.getAssetUriForEmbed;
            var10 = 9;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var11.bind(var12)(var10);
            var1['closeIcon'] = var10;
            var2 = var1;
 628:
            var1 = {};
            var10 = 3;
            var1['numDisplayedReactions'] = var10;
            var1['isFollowing'] = var7;
            var1['followIcon'] = var8;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 6;
            var11 = var8[var10];
            var11 = var13.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var8[var10];
            var8 = var13.bind(var9)(var8);
            var8 = var8.t;
            if(var7) { _fun0002_ip = 712; continue _fun0002 }
 699:
            var7 = var8.0rQinJ;
            var7 = var11.bind(var12)(var7);
            _fun0002_ip = 723; continue _fun0002;
 712:
            var8 = var8.OtF+lJ;
            var7 = var11.bind(var12)(var8);
 723:
            var1['followLabel'] = var7;
            var1['shareIcon'] = var6;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.Ej3B3d;
            var5 = var6.bind(var7)(var5);
            var1['shareLabel'] = var5;
            var1['defaultReaction'] = var4;
            var1['addReactLabel'] = var3;
            var1['sharePrompt'] = var2;
            return var1;
        }
    };
    var3['createForumPostActions'] = var2;
    return var1;
})();