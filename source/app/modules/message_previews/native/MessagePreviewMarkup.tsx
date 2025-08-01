// app/modules/message_previews/native/MessagePreviewMarkup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var1 = function getRules(arg1) {
        var1 = arg1;
        var8 = var1.layout;
        var13 = var1.color;
        var12 = var1.fontScale;
        var11 = var1.maxFontSizeMultiplier;
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 0;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var9.bind(var3)(var1);
        var1 = 1;
        var1 = var10[var1];
        var1 = var9.bind(var3)(var1);
        var4 = var1.RULES;
        var1 = new Array(2);
        var1[0] = var4;
        var4 = 2;
        var4 = var10[var4];
        var4 = var9.bind(var3)(var4);
        var15 = undefined;
        var14 = var8;
        var4 = var15[var4](var14, var13, var12, var11, var10);
        var1[1] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var7 = function renderASTToReact(arg1) {
        var1 = arg1;
        var4 = var1.tree;
        var3 = var1.initialParserState;
        var9 = var1.layout;
        var8 = var1.color;
        var7 = var1.fontScale;
        var2 = var1.maxFontSizeMultiplier;
        var6 = _closure1_slot4;
        var5 = {};
        var5['layout'] = var9;
        var5['color'] = var8;
        var5['fontScale'] = var7;
        var5['maxFontSizeMultiplier'] = var2;
        var2 = undefined;
        var9 = var6.bind(var2)(var5);
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 3;
        var5 = var8[var1];
        var6 = var7.bind(var2)(var5);
        var5 = var6.reactFor;
        var1 = var8[var1];
        var8 = var7.bind(var2)(var1);
        var7 = var8.ruleOutput;
        var1 = 'react';
        var1 = var7.bind(var8)(var9, var1);
        var1 = var5.bind(var6)(var1);
        var1 = var1.bind(var2)(var4, var3);
        return var1;
    };
    var _closure1_slot5 = var7;
    var6 = function getMessagePreviewASTParser(arg1) {
        var1 = arg1;
        var7 = var1.layout;
        var6 = var1.color;
        var5 = var1.fontScale;
        var4 = var1.maxFontSizeMultiplier;
        var3 = _closure1_slot4;
        var2 = {};
        var2['layout'] = var7;
        var2['color'] = var6;
        var2['fontScale'] = var5;
        var2['maxFontSizeMultiplier'] = var4;
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 4;
        var1 = var5[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.astParserFor;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot6 = var6;
    var2 = function getOrParseMessagePreviewMarkupAST(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.content;
            var11 = var1.layout;
            var10 = var1.color;
            var9 = var1.initialParserState;
            var8 = var1.postProcessor;
            var7 = var1.fontScale;
            var6 = var1.maxFontSizeMultiplier;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 202; continue _fun0001 }
 69:
            var4 = _closure1_slot6;
            var2 = {};
            var2['layout'] = var11;
            var2['color'] = var10;
            var2['fontScale'] = var7;
            var2['maxFontSizeMultiplier'] = var6;
            var7 = undefined;
            var6 = var4.bind(var7)(var2);
            var4 = var5.startsWith;
            var2 = '```';
            var2 = var4.bind(var5)(var2);
            var4 = undefined;
            if(var2) { _fun0001_ip = 162; continue _fun0001 }
 123:
            var11 = var5.split;
            var10 = '\n';
            var11 = var11.bind(var5)(var10);
            var10 = 0;
            var10 = var11[var10];
            var12 = var10.includes;
            var11 = '||';
            var2 = var12.bind(var10)(var11);
            var4 = var10;
 162:
            if(!var2) { _fun0001_ip = 168; continue _fun0001 }
 165:
            var4 = var5;
 168:
            var15 = true;
            var17 = undefined;
            var16 = var4;
            var14 = var9;
            var13 = var8;
            var2 = var17[var6](var16, var15, var14, var13, var12);
            var4 = _closure1_slot3;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
 202:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var4);
    var1 = 7;
    var4 = var10[var1];
    var1 = undefined;
    var11 = var8.bind(var1)(var4);
    var4 = {};
    var8 = 2000;
    var4['max'] = var8;
    var8 = var11.prototype;
    var8 = Object.create(var8, {constructor: {value: var11}});
    var16 = var8;
    var15 = var4;
    var4 = new var16[var11](var15, var14);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot3 = var4;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/message_previews/native/MessagePreviewMarkup.tsx';
    var8 = var9.bind(var10)(var8);
    var3['renderASTToReact'] = var7;
    var3['getMessagePreviewASTParser'] = var6;
    var5 = function renderMessagePreviewMarkup(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var12 = var4.content;
            var2 = var4.muted;
            var10 = var4.guildId;
            var1 = var4.channelId;
            var7 = var4.layout;
            var3 = undefined;
            if(!(var7 === var3)) { _fun0002_ip = 71; continue _fun0002 }
 36:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.ChannelListLayoutTypes;
            var7 = var5.COMPACT;
 71:
            var6 = var4.color;
            var11 = var4.postProcessor;
            var14 = var4.disableAnimatedEmoji;
            if(!(var14 === var3)) { _fun0002_ip = 94; continue _fun0002 }
 92:
            var14 = true;
 94:
            var5 = var4.fontScale;
            if(!(var5 === var3)) { _fun0002_ip = 107; continue _fun0002 }
 104:
            var5 = 1;
 107:
            var4 = var4.maxFontSizeMultiplier;
            var8 = '';
            if(!(var8 !== var12)) { _fun0002_ip = 344; continue _fun0002 }
 124:
            var8 = {'allowLinks': true, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': true, 'allowHeading': true, 'allowList': true, 'allowGameMentions': null, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false};
            var13 = true;
            var9 = new Array(0);
            var8['mentionChannels'] = var9;
            var9 = new Array(0);
            var8['soundboardSounds'] = var9;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 6;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            var17 = var15.GameMentionsUserExperiment;
            var16 = var17.getCurrentConfig;
            var15 = {};
            var18 = 'message preview';
            var15['location'] = var18;
            var15 = var16.bind(var17)(var15);
            var15 = var15.enabled;
            var8['allowGameMentions'] = var15;
            var8['disableAnimatedEmoji'] = var14;
            var8['unknownUserMentionPlaceholder'] = var13;
            var8['guildId'] = var10;
            var8['channelId'] = var1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 253; continue _fun0002 }
 250:
            var1 = var2;
 253:
            var8['muted'] = var1;
            var2 = _closure1_slot5;
            var1 = {};
            var10 = _closure1_slot7;
            var9 = {};
            var9['content'] = var12;
            var9['layout'] = var7;
            var9['color'] = var6;
            var9['initialParserState'] = var8;
            var9['fontScale'] = var5;
            var9['maxFontSizeMultiplier'] = var4;
            var9['postProcessor'] = var11;
            var9 = var10.bind(var3)(var9);
            var1['tree'] = var9;
            var1['initialParserState'] = var8;
            var1['layout'] = var7;
            var1['color'] = var6;
            var1['fontScale'] = var5;
            var1['maxFontSizeMultiplier'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
 344:
            var1 = null;
            return var1;
        }
    };
    var3['renderMessagePreviewMarkup'] = var5;
    var3['messagePreviewASTCache'] = var4;
    var3['getOrParseMessagePreviewMarkupAST'] = var2;
    return var1;
})();