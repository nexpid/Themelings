// app/modules/messages/native/renderer/row_data/ForumPostActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function getForumPostFollowIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var6 = undefined;
            var5 = var3.bind(var6)(var1);
            var4 = var5.getAssetUriForEmbed;
            var7 = _closure1_slot1;
            if(var8) { _fun0001_ip = 60; continue _fun0001 }
 41:
            var1 = 9;
            var1 = var9[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var4.bind(var5)(var1);
            _fun0001_ip = 77; continue _fun0001;
 60:
            var3 = 8;
            var3 = var9[var3];
            var3 = var7.bind(var6)(var3);
            var1 = var4.bind(var5)(var3);
 77:
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 174; continue _fun0001 }
 83:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 10;
            var3 = var4[var3];
            var4 = var5.bind(var6)(var3);
            var3 = var4.captureMessage;
            var9 = _closure1_slot2;
            if(var8) { _fun0001_ip = 125; continue _fun0001 }
 116:
            var2 = 9;
            var2 = var9[var2];
            _fun0001_ip = 132; continue _fun0001;
 125:
            var7 = 8;
            var2 = var9[var7];
 132:
            var7 = var5.bind(var6)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = 'Forum follow is null. isFollowing: ';
            var2 = ' icon: ';
            var2 = var6.bind(var5)(var8, var2, var7);
            var2 = var3.bind(var4)(var2);
 174:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getShareIcon() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = var3.getAssetUriForEmbed;
        var4 = _closure1_slot1;
        var1 = 11;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function createMediaPostSharePrompt() {
        var1 = {};
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 12;
        var4 = var7[var2];
        var6 = undefined;
        var4 = var3.bind(var6)(var4);
        var8 = var4.intl;
        var5 = var8.string;
        var4 = var7[var2];
        var4 = var3.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.5uAO7e;
        var4 = var5.bind(var8)(var4);
        var1['title'] = var4;
        var4 = var7[var2];
        var4 = var3.bind(var6)(var4);
        var10 = var4.intl;
        var9 = var10.formatToParts;
        var4 = var7[var2];
        var4 = var3.bind(var6)(var4);
        var4 = var4.t;
        var8 = var4.YtCu5u;
        var4 = {};
        var11 = {};
        var5 = _closure1_slot1;
        var13 = 13;
        var13 = var7[var13];
        var14 = var5.bind(var6)(var13);
        var13 = var14.getCreatorSupportArticleURL;
        var12 = _closure1_slot8;
        var12 = var12.MEDIA_CHANNEL;
        var12 = var13.bind(var14)(var12);
        var11['url'] = var12;
        var4['helpArticleUrl'] = var11;
        var4 = var9.bind(var10)(var8, var4);
        var1['subtitle'] = var4;
        var4 = var7[var2];
        var4 = var3.bind(var6)(var4);
        var8 = var4.intl;
        var4 = var8.string;
        var2 = var7[var2];
        var2 = var3.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.C5UQCw;
        var2 = var4.bind(var8)(var2);
        var1['cta'] = var2;
        var2 = 7;
        var4 = var7[var2];
        var9 = var3.bind(var6)(var4);
        var8 = var9.getAssetUriForEmbed;
        var4 = 14;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var8.bind(var9)(var4);
        var1['icon'] = var4;
        var2 = var7[var2];
        var4 = var3.bind(var6)(var2);
        var3 = var4.getAssetUriForEmbed;
        var2 = 15;
        var2 = var7[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        var1['closeIcon'] = var2;
        return var1;
    };
    var _closure1_slot13 = var1;
    var4 = function createDefaultReaction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.defaultReactionEmoji;
            var5 = var1.customGuildEmoji;
            var2 = null;
            var6 = var2 != var4;
            var1 = undefined;
            var3 = undefined;
            if(!var6) { _fun0002_ip = 330; continue _fun0002 }
 31:
            var6 = var4.emojiId;
            var7 = var4.emojiName;
            if(!(var2 != var6)) { _fun0002_ip = 54; continue _fun0002 }
 47:
            if(!(var2 == var5)) { _fun0002_ip = 180; continue _fun0002 }
 54:
            var4 = var2 != var7;
            var3 = undefined;
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 66:
            var4 = {};
            var4['id'] = var1;
            var4['name'] = var7;
            var11 = false;
            var4['animated'] = var11;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = 18;
            var9 = var10[var9];
            var12 = var12.bind(var1)(var9);
            var9 = var12.getURL;
            var9 = var9.bind(var12)(var7);
            var4['src'] = var9;
            var9 = _closure1_slot0;
            var8 = 17;
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
            _fun0002_ip = 330; continue _fun0002;
 180:
            var4 = {};
            var4['id'] = var6;
            var4['name'] = var1;
            var7 = var5.animated;
            var4['animated'] = var7;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 16;
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
            var7 = 17;
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
            if(!var2) { _fun0002_ip = 362; continue _fun0002 }
 339:
            var2 = {'emoji': null, 'me': false, 'count': 0};
            var2['emoji'] = var3;
            var1 = var2;
 362:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function ForumPostActionsData(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var8 = var2.hasReactions;
            var10 = var2.defaultReaction;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var9 = var5[var2];
            var4 = undefined;
            var13 = var3.bind(var4)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var9;
            var6 = var6.id;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.hasJoined;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var12.bind(var13)(var11, var6, var9);
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var5.bind(var9)(var3, var2);
            var _closure2_slot1 = var9;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0004_ip = 25; continue _fun0004 }
 14:
                    var2 = _closure1_slot13;
                    var1 = var2.bind(var3)();
 25:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var9 = 3;
            var1['numDisplayedReactions'] = var9;
            var1['isFollowing'] = var6;
            var9 = _closure1_slot11;
            var9 = var9.bind(var4)(var6);
            var1['followIcon'] = var9;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = 12;
            var12 = var9[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var9[var11];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            if(var6) { _fun0003_ip = 265; continue _fun0003 }
 252:
            var6 = var9.0rQinJ;
            var6 = var12.bind(var13)(var6);
            _fun0003_ip = 276; continue _fun0003;
 265:
            var9 = var9.OtF+lJ;
            var6 = var12.bind(var13)(var9);
 276:
            var1['followLabel'] = var6;
            var6 = _closure1_slot12;
            var6 = var6.bind(var4)();
            var1['shareIcon'] = var6;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var11];
            var9 = var13.bind(var4)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var6 = var6[var11];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.Ej3B3d;
            var6 = var9.bind(var12)(var6);
            var1['shareLabel'] = var6;
            var1['defaultReaction'] = var10;
            var6 = undefined;
            if(var8) { _fun0003_ip = 439; continue _fun0003 }
 361:
            var9 = null;
            var12 = var9 == var10;
            var8 = undefined;
            if(var12) { _fun0003_ip = 378; continue _fun0003 }
 372:
            var8 = var10.emoji;
 378:
            var8 = var9 != var8;
            var6 = undefined;
            if(var8) { _fun0003_ip = 439; continue _fun0003 }
 387:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var11];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.xpOyTE;
            var6 = var8.bind(var9)(var7);
 439:
            var1['addReactLabel'] = var6;
            var1['sharePrompt'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function ForumPostActionsWithDefaultReaction(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = var1.channel;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = var6.parent_id;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 20;
            var5 = var5[var8];
            var10 = var7.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 41; continue _fun0006 }
 35:
                    var1 = var2.defaultReactionEmoji;
 41:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var7, var3, var5);
            var _closure2_slot1 = var9;
            var3 = null;
            var5 = var3 == var9;
            var3 = undefined;
            if(var5) { _fun0005_ip = 113; continue _fun0005 }
 107:
            var3 = var9.emojiId;
 113:
            _closure2_slot2 = var3;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var10 = var7.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 38; continue _fun0007 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var8 = var8.bind(var10)(var7, var3, var5);
            _closure2_slot3 = var8;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var2 = function() {
                var3 = _closure1_slot14;
                var2 = {};
                var4 = _closure2_slot1;
                var2['defaultReactionEmoji'] = var4;
                var1 = _closure2_slot3;
                var2['customGuildEmoji'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot15;
            var1 = {};
            var7 = false;
            var1['hasReactions'] = var7;
            var1['channel'] = var6;
            var1['defaultReaction'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.HelpdeskArticles;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot9 = var5;
    var5 = 19;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.makeKeyedDataComponent;
    var5 = 'postActions';
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function ForumPostActions(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var2 = var2.message;
            var3 = var2.getChannelId;
            var9 = var3.bind(var2)();
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 20;
            var4 = var6[var4];
            var6 = undefined;
            var8 = var5.bind(var6)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var5, var1, var4);
            var5 = null;
            var4 = var5 != var7;
            var1 = null;
            if(!var4) { _fun0008_ip = 183; continue _fun0008 }
 99:
            var4 = var7.isForumPost;
            var4 = var4.bind(var7)();
            var1 = null;
            if(!var4) { _fun0008_ip = 183; continue _fun0008 }
 114:
            var2 = var2.reactions;
            var4 = var2.length;
            var2 = 0;
            if(!(var2 === var4)) { _fun0008_ip = 153; continue _fun0008 }
 131:
            var5 = _closure1_slot9;
            var4 = _closure1_slot16;
            var2 = {};
            var2['channel'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0008_ip = 180; continue _fun0008;
 153:
            var5 = _closure1_slot9;
            var4 = _closure1_slot15;
            var3 = {};
            var8 = true;
            var3['hasReactions'] = var8;
            var3['channel'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 180:
            var1 = var2;
 183:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['createDefaultReaction'] = var4;
    var2 = function createForumPostActions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var7 = var1.isFollowing;
            var2 = var1.hasReactions;
            var4 = var1.defaultReaction;
            var1 = var1.showMediaPostSharePrompt;
            var3 = _closure1_slot11;
            var9 = undefined;
            var8 = var3.bind(var9)(var7);
            var3 = _closure1_slot12;
            var6 = var3.bind(var9)();
            var3 = undefined;
            if(var2) { _fun0009_ip = 135; continue _fun0009 }
 54:
            var10 = null;
            var11 = var10 == var4;
            var2 = undefined;
            if(var11) { _fun0009_ip = 71; continue _fun0009 }
 65:
            var2 = var4.emoji;
 71:
            var2 = var10 != var2;
            var3 = undefined;
            if(var2) { _fun0009_ip = 135; continue _fun0009 }
 80:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 12;
            var10 = var13[var2];
            var10 = var12.bind(var9)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var13[var2];
            var2 = var12.bind(var9)(var2);
            var2 = var2.t;
            var2 = var2.xpOyTE;
            var3 = var10.bind(var11)(var2);
 135:
            var2 = undefined;
            if(!var1) { _fun0009_ip = 148; continue _fun0009 }
 140:
            var1 = _closure1_slot13;
            var2 = var1.bind(var9)();
 148:
            var1 = {};
            var10 = 3;
            var1['numDisplayedReactions'] = var10;
            var1['isFollowing'] = var7;
            var1['followIcon'] = var8;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 12;
            var11 = var8[var10];
            var11 = var13.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var8[var10];
            var8 = var13.bind(var9)(var8);
            var8 = var8.t;
            if(var7) { _fun0009_ip = 228; continue _fun0009 }
 215:
            var7 = var8.0rQinJ;
            var7 = var11.bind(var12)(var7);
            _fun0009_ip = 239; continue _fun0009;
 228:
            var8 = var8.OtF+lJ;
            var7 = var11.bind(var12)(var8);
 239:
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