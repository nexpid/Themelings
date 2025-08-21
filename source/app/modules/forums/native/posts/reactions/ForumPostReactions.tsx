// app/modules/forums/native/posts/reactions/ForumPostReactions.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var9['marginEnd'] = var10;
    var4['reactionButtonContainer'] = var9;
    var9 = {};
    var10 = 4;
    var9['marginEnd'] = var10;
    var4['actionBarReaction'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 'auto';
    var9['marginLeft'] = var10;
    var4['mostCommonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/reactions/ForumPostReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function MaxForumPostReactions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.thread;
            var _closure2_slot0 = var11;
            var4 = var1.parentChannel;
            var9 = var1.firstMessage;
            var15 = var1.containerWidth;
            var14 = var1.containerStyle;
            var12 = var1.reactionContainerStyle;
            var _closure2_slot1 = var12;
            var1 = _closure1_slot6;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var _closure2_slot2 = var10;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var11);
            var7 = var1.disableReactionCreates;
            var13 = 28;
            if(!var7) { _fun0001_ip = 105; continue _fun0001 }
 103:
            var13 = 0;
 105:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useMaxPossibleForumPostReactions;
            var1 = {'containerWidth': null, 'reactionEmojiWidth': 46, 'digitWidth': 7.5};
            var13 = var15 - var13;
            var1['containerWidth'] = var13;
            var1['message'] = var9;
            var1['parentChannel'] = var4;
            var1 = var2.bind(var3)(var1);
            var13 = var1.reactions;
            var15 = var1.additionalReactionCount;
            var1 = var13.length;
            var9 = 0;
            if(!(var9 === var1)) { _fun0001_ip = 200; continue _fun0001 }
 192:
            var1 = null;
            if(var7) { _fun0001_ip = 397; continue _fun0001 }
 200:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var16 = var10.container;
            var10 = new Array(2);
            var10[0] = var16;
            var10[1] = var14;
            var2['style'] = var10;
            var10 = var13.map;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.ForumPostReactionButton;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var8 = var7.reactionButtonContainer;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot1;
                    var7[1] = var8;
                    var2['containerStyle'] = var7;
                    var1 = _closure2_slot0;
                    var2['thread'] = var1;
                    var2['reaction'] = var6;
                    var1 = false;
                    var2['animateCount'] = var1;
                    var1 = var6.emoji;
                    var1 = var1.id;
                    var7 = null;
                    if(!(var7 == var1)) { _fun0002_ip = 123; continue _fun0002 }
 112:
                    var6 = var6.emoji;
                    var1 = var6.name;
 123:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var6);
            var6 = new Array(3);
            var6[0] = var10;
            var9 = var15 > var9;
            if(!var9) { _fun0001_ip = 320; continue _fun0001 }
 263:
            var14 = _closure1_slot4;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 6;
            var10 = var16[var10];
            var10 = var13.bind(var5)(var10);
            var13 = var10.AdditionalReactionCount;
            var10 = {};
            var10['count'] = var15;
            var10['containerStyle'] = var12;
            var15 = var11.id;
            var10['threadId'] = var15;
            var9 = var14.bind(var5)(var13, var10);
 320:
            var6[1] = var9;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 383; continue _fun0001 }
 330:
            var10 = _closure1_slot4;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 6;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.AddReactionButton;
            var8 = {};
            var8['containerStyle'] = var12;
            var11 = var11.id;
            var8['threadId'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 383:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 397:
            return var1;
        }
    };
    var3['MaxForumPostReactions'] = var4;
    var4 = function ForumPostActionBarReactions(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var11 = var1.thread;
            var _closure2_slot0 = var11;
            var4 = var1.parentChannel;
            var9 = var1.firstMessage;
            var15 = var1.containerStyle;
            var13 = var1.reactionContainerStyle;
            var _closure2_slot1 = var13;
            var1 = _closure1_slot6;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var _closure2_slot2 = var12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var11);
            var7 = var1.disableReactionCreates;
            var2 = _closure1_slot0;
            var1 = 5;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useSomeForumPostReactions;
            var1 = {};
            var1['message'] = var9;
            var1['parentChannel'] = var4;
            var4 = false;
            var1['sorted'] = var4;
            var4 = 2;
            if(!var7) { _fun0003_ip = 140; continue _fun0003 }
 137:
            var4 = 3;
 140:
            var1['count'] = var4;
            var1 = var2.bind(var3)(var1);
            var14 = var1.reactions;
            var16 = var1.additionalNonUniqueReactionCount;
            var1 = var14.length;
            var9 = 0;
            if(!(var9 === var1)) { _fun0003_ip = 180; continue _fun0003 }
 172:
            var1 = null;
            if(var7) { _fun0003_ip = 413; continue _fun0003 }
 180:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var17 = var12.container;
            var10 = new Array(2);
            var10[0] = var17;
            var10[1] = var15;
            var2['style'] = var10;
            var10 = var14.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.ForumPostReactionButton;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var8 = var7.actionBarReaction;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot1;
                    var7[1] = var8;
                    var2['containerStyle'] = var7;
                    var1 = _closure2_slot0;
                    var2['thread'] = var1;
                    var2['reaction'] = var6;
                    var1 = false;
                    var2['animateCount'] = var1;
                    var1 = var6.emoji;
                    var1 = var1.id;
                    var7 = null;
                    if(!(var7 == var1)) { _fun0004_ip = 123; continue _fun0004 }
 112:
                    var6 = var6.emoji;
                    var1 = var6.name;
 123:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var10 = var10.bind(var14)(var6);
            var6 = new Array(3);
            var6[0] = var10;
            var9 = var16 > var9;
            if(!var9) { _fun0003_ip = 318; continue _fun0003 }
 243:
            var15 = _closure1_slot4;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 6;
            var10 = var17[var10];
            var10 = var14.bind(var5)(var10);
            var14 = var10.AdditionalReactionCount;
            var10 = {};
            var10['count'] = var16;
            var17 = var12.actionBarReaction;
            var16 = new Array(2);
            var16[0] = var17;
            var16[1] = var13;
            var10['containerStyle'] = var16;
            var16 = var11.id;
            var10['threadId'] = var16;
            var9 = var15.bind(var5)(var14, var10);
 318:
            var6[1] = var9;
            var7 = !var7;
            if(!var7) { _fun0003_ip = 399; continue _fun0003 }
 328:
            var10 = _closure1_slot4;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 6;
            var8 = var14[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.AddReactionButton;
            var8 = {};
            var14 = var12.actionBarReaction;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var8['containerStyle'] = var12;
            var11 = var11.id;
            var8['threadId'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 399:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 413:
            return var1;
        }
    };
    var3['ForumPostActionBarReactions'] = var4;
    var2 = function MostCommonForumPostReaction(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var9 = var1.thread;
            var12 = var1.parentChannel;
            var11 = var1.firstMessage;
            var7 = var1.locationAnalyticsObject;
            var1 = _closure1_slot6;
            var6 = undefined;
            var10 = var1.bind(var6)();
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.bind(var6)(var9);
            var2 = var1.disableReactionCreates;
            var4 = var1.disableReactionUpdates;
            var5 = _closure1_slot0;
            var1 = 5;
            var1 = var8[var1];
            var8 = var5.bind(var6)(var1);
            var5 = var8.useSomeForumPostReactions;
            var1 = {};
            var1['parentChannel'] = var12;
            var1['message'] = var11;
            var1 = var5.bind(var8)(var1);
            var5 = var1.reactions;
            var1 = 0;
            var8 = var5[var1];
            var1 = null;
            if(!(var1 != var8)) { _fun0005_ip = 232; continue _fun0005 }
 133:
            if(var4) { _fun0005_ip = 232; continue _fun0005 }
 136:
            var4 = var8.me;
            if(var4) { _fun0005_ip = 151; continue _fun0005 }
 145:
            var4 = var8.me_burst;
 151:
            if(!var2) { _fun0005_ip = 159; continue _fun0005 }
 154:
            var2 = null;
            if(!var4) { _fun0005_ip = 230; continue _fun0005 }
 159:
            var5 = _closure1_slot4;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 6;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ForumPostReactionButton;
            var3 = {};
            var10 = var10.mostCommonContainer;
            var3['containerStyle'] = var10;
            var3['thread'] = var9;
            var3['reaction'] = var8;
            var3['locationAnalyticsObject'] = var7;
            var7 = false;
            var3['animateCount'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 230:
            return var2;
 232:
            return var1;
        }
    };
    var3['MostCommonForumPostReaction'] = var2;
    return var1;
})();