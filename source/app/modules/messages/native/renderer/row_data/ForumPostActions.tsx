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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createDefaultReaction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.defaultReactionEmoji;
            var6 = var1.customGuildEmoji;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldSkipAccessibilityLabels;
            var9 = var2.bind(var3)();
            var2 = null;
            var5 = var2 != var4;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var4.emojiId;
            var12 = var4.emojiName;
            if(!(var2 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var2 == var6)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var4 = var2 != var12;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = var2 != var12;
            var7 = '';
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var12;
case 8:
            var4 = {};
            var4['id'] = var1;
            var4['name'] = var12;
            var14 = false;
            var4['animated'] = var14;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 13;
            var5 = var13[var5];
            var10 = var10.bind(var1)(var5);
            var5 = var10.getURL;
            var5 = var5.bind(var10)(var12);
            var4['src'] = var5;
            var5 = var7;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 12;
            var10 = var13[var10];
            var13 = var12.bind(var1)(var10);
            var12 = var13.getAccessibleEmojiDisplayName;
            var10 = {};
            var10['id'] = var1;
            var10['name'] = var7;
            var10['animated'] = var14;
            var7 = 0;
            var5 = var12.bind(var13)(var14, var7, var10);
case 10:
            var4['displayName'] = var5;
            var3 = var4;
            _fun0001_ip = 2; continue _fun0001;
case 6:
            var4 = var6.name;
            var5 = var2 != var4;
            var7 = '';
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var4;
case 12:
            var4 = {};
            var4['id'] = var11;
            var4['name'] = var1;
            var5 = var6.animated;
            var4['animated'] = var5;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 11;
            var5 = var12[var5];
            var12 = var10.bind(var1)(var5);
            var10 = var12.getEmojiURL;
            var5 = {};
            var5['id'] = var11;
            var13 = var6.animated;
            var5['animated'] = var13;
            var13 = 48;
            var5['size'] = var13;
            var5 = var10.bind(var12)(var5);
            var4['src'] = var5;
            var5 = var7;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 12;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.getAccessibleEmojiDisplayName;
            var8 = {};
            var8['id'] = var11;
            var8['name'] = var7;
            var6 = var6.animated;
            var8['animated'] = var6;
            var7 = false;
            var6 = 0;
            var5 = var9.bind(var10)(var7, var6, var8);
case 14:
            var4['displayName'] = var5;
            var3 = var4;
case 2:
            var2 = var2 != var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = {'emoji': null, 'me': false, 'count': 0};
            var2['emoji'] = var3;
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['createDefaultReaction'] = var4;
    var2 = function createForumPostActions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = 3;
            var3 = var13[var3];
            var3 = var12.bind(var9)(var3);
            var8 = var6.bind(var11)(var3);
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var3 = 2;
            var3 = var13[var3];
            var3 = var12.bind(var9)(var3);
            var8 = var6.bind(var11)(var3);
case 20:
            var11 = null;
            if(!(var11 == var8)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var13 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var12 = var13.bind(var9)(var3);
            var6 = var12.captureMessage;
            var15 = _closure1_slot2;
            if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = 3;
            var3 = var15[var3];
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var14 = 2;
            var3 = var15[var14];
case 25:
            var15 = var13.bind(var9)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var14 = var3.concat;
            var13 = 'Forum follow is null. isFollowing: ';
            var3 = ' icon: ';
            var3 = var14.bind(var13)(var7, var3, var15);
            var3 = var6.bind(var12)(var3);
case 21:
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
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var12 = var11 == var4;
            var2 = undefined;
            if(var12) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var2 = var4.emoji;
case 28:
            var2 = var11 != var2;
            var3 = undefined;
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 30:
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
            var2 = var2.xpOyTO;
            var3 = var11.bind(var12)(var2);
case 26:
            var2 = undefined;
            if(!var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
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
            var13 = var13["5uAO7d"];
            var13 = var15.bind(var16)(var13);
            var1['title'] = var13;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var18 = var13.intl;
            var17 = var18.formatToParts;
            var13 = var14[var12];
            var13 = var11.bind(var9)(var13);
            var13 = var13.t;
            var16 = var13.YtCu5p;
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
            var12 = var12.C5UQC9;
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
case 31:
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
            if(var7) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var7 = var8["0rQinA"];
            var7 = var11.bind(var12)(var7);
            _fun0002_ip = 35; continue _fun0002;
case 33:
            var8 = var8.OtF+lC;
            var7 = var11.bind(var12)(var8);
case 35:
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
            var5 = var5.Ej3B3Y;
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