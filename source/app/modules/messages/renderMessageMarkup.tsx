// app/modules/messages/renderMessageMarkup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var5 = function getInitialParserStateFromMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot4;
            var4 = {};
            var1 = var3.channel_id;
            var4['channelId'] = var1;
            var1 = var3.id;
            var4['messageId'] = var1;
            var7 = var3.author;
            var2 = null;
            var8 = var2 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7.id;
case 2:
            var4['authorId'] = var6;
            var6 = arg2;
            var4['renderOptions'] = var6;
            var4 = var5.bind(var1)(var4);
            var1 = var3.webhookId;
            var5 = var2 != var1;
            var1 = {};
            var10 = var1;
            var9 = var4;
            var6 = copyDataProperties(var10, var9);
            var6 = var5;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.allowLinks;
case 4:
            var4 = 'allowLinks';
            var1[3] = var6;
            var4 = 'allowEmojiLinks';
            var1[3] = var5;
            var5 = var3.mentionChannels;
            var4 = 'mentionChannels';
            var1[3] = var5;
            var5 = var3.mentionGames;
            if(!(var2 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = global;
            var4 = var4.Map;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var11 = var6;
            var4 = new var11[var4](var10);
            var5 = var4 instanceof Object ? var4 : var6;
case 6:
            var4 = 'mentionGames';
            var1[3] = var5;
            var3 = var3.soundboardSounds;
            if(!(var2 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = new Array(0);
case 8:
            var2 = 'soundboardSounds';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function getInitialParserState(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var4 = var1.messageId;
        var3 = var1.authorId;
        var2 = var1.renderOptions;
        var1 = {};
        var1['channelId'] = var5;
        var1['messageId'] = var4;
        var1['authorId'] = var3;
        var3 = global;
        var6 = var3.Boolean;
        var5 = var2.allowLinks;
        var4 = undefined;
        var5 = var6.bind(var4)(var5);
        var1['allowLinks'] = var5;
        var6 = var3.Boolean;
        var5 = var2.allowDevLinks;
        var5 = var6.bind(var4)(var5);
        var1['allowDevLinks'] = var5;
        var6 = var3.Boolean;
        var5 = var2.allowGameMentions;
        var5 = var6.bind(var4)(var5);
        var1['allowGameMentions'] = var5;
        var6 = var3.Boolean;
        var5 = var2.allowTimeMentionInput;
        var5 = var6.bind(var4)(var5);
        var1['allowTimeMentionInput'] = var5;
        var6 = var3.Boolean;
        var5 = var2.formatInline;
        var5 = var6.bind(var4)(var5);
        var1['formatInline'] = var5;
        var6 = var3.Boolean;
        var5 = var2.noStyleAndInteraction;
        var5 = var6.bind(var4)(var5);
        var1['noStyleAndInteraction'] = var5;
        var6 = var3.Boolean;
        var5 = var2.allowHeading;
        var5 = var6.bind(var4)(var5);
        var1['allowHeading'] = var5;
        var6 = var3.Boolean;
        var5 = var2.allowList;
        var5 = var6.bind(var4)(var5);
        var1['allowList'] = var5;
        var6 = var3.Boolean;
        var5 = var2.previewLinkTarget;
        var5 = var6.bind(var4)(var5);
        var1['previewLinkTarget'] = var5;
        var6 = var3.Boolean;
        var5 = var2.disableAnimatedEmoji;
        var5 = var6.bind(var4)(var5);
        var1['disableAnimatedEmoji'] = var5;
        var6 = false;
        var1['allowEmojiLinks'] = var6;
        var5 = true;
        var1['disableAutoBlockNewlines'] = var5;
        var7 = new Array(0);
        var1['mentionChannels'] = var7;
        var7 = var3.Map;
        var8 = var7.prototype;
        var8 = Object.create(var8, {constructor: {value: var7}});
        var10 = var8;
        var7 = new var10[var7](var9);
        var7 = var7 instanceof Object ? var7 : var8;
        var1['mentionGames'] = var7;
        var7 = new Array(0);
        var1['soundboardSounds'] = var7;
        var1['muted'] = var6;
        var1['unknownUserMentionPlaceholder'] = var5;
        var5 = var2.viewingChannelId;
        var1['viewingChannelId'] = var5;
        var6 = var3.Boolean;
        var5 = var2.forceWhite;
        var5 = var6.bind(var4)(var5);
        var1['forceWhite'] = var5;
        var5 = var2.textColor;
        var1['textColor'] = var5;
        var3 = var3.Boolean;
        var2 = var2.disablePressableChannelMention;
        var2 = var3.bind(var4)(var2);
        var1['disablePressableChannelMention'] = var2;
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = function render(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var4;
            var5 = var2.toAST;
            var7 = undefined;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var5;
case 10:
            var _closure2_slot1 = var1;
            var5 = var2.hideSimpleEmbedContent;
            var1 = var7 === var5;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var5;
case 12:
            var _closure2_slot2 = var1;
            var5 = var2.formatInline;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var5;
case 14:
            var _closure2_slot3 = var1;
            var1 = var2.postProcessor;
            var _closure2_slot4 = var1;
            var5 = var2.contentMessage;
            var _closure2_slot5 = var5;
            var1 = false;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var6 = null;
            var1 = var4;
            if(!(var6 != var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var5;
case 16:
            var6 = var1.content;
            var _closure2_slot8 = var6;
            var1 = _closure1_slot3;
            var9 = var1.bind(var7)(var4, var2);
            var4 = arg1;
            var10 = true;
            var8 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg2;
                    var2 = arg3;
                    var7 = null;
                    var1 = var7 != var2;
                    if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var1 = var2;
case 18:
                    _closure2_slot7 = var1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 0;
                    var1 = var4[var1];
                    var4 = undefined;
                    var6 = var3.bind(var4)(var1);
                    var3 = var6.runMessageMarkupPostProcessors;
                    var1 = {};
                    var8 = arg1;
                    var1['ast'] = var8;
                    var1['inline'] = var5;
                    var8 = _closure2_slot7;
                    var1['hasBailedAst'] = var8;
                    var8 = _closure2_slot0;
                    var1['message'] = var8;
                    var8 = _closure2_slot5;
                    var1['contentMessage'] = var8;
                    var8 = _closure2_slot8;
                    var1['messageContent'] = var8;
                    var8 = _closure2_slot2;
                    var1['hideSimpleEmbedContent'] = var8;
                    var8 = _closure2_slot3;
                    var1['formatInline'] = var8;
                    var8 = _closure2_slot1;
                    var1['toAST'] = var8;
                    var1 = var3.bind(var6)(var1);
                    var3 = var1.ast;
                    var1 = var1.hasSpoilerEmbeds;
                    _closure2_slot6 = var1;
                    var6 = _closure2_slot4;
                    var1 = var3;
                    if(!(var7 != var6)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2 = _closure2_slot4;
                    var1 = var2.bind(var4)(var3, var5);
case 20:
                    return var1;
                }
            };
            var12 = undefined;
            var11 = var6;
            var2 = var12[var4](var11, var10, var9, var8, var7);
            var1 = {};
            var4 = _closure2_slot6;
            var1['hasSpoilerEmbeds'] = var4;
            var3 = _closure2_slot7;
            var1['hasBailedAst'] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function renderAutomodMessageMarkupWithParser(arg1, arg2, arg3, arg4) {
        var6 = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'allowGameMentions': false, 'mentionChannels': null, 'mentionGames': null, 'soundboardSounds': null, 'formatInline': false, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true};
        var1 = false;
        var2 = new Array(0);
        var6['mentionChannels'] = var2;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var11 = var3;
        var2 = new var11[var2](var10);
        var2 = var2 instanceof Object ? var2 : var3;
        var6['mentionGames'] = var2;
        var2 = new Array(0);
        var6['soundboardSounds'] = var2;
        var9 = true;
        var2 = arg3;
        var6['highlightWord'] = var2;
        var6['disableAnimatedEmoji'] = var1;
        var2 = arg4;
        var6['channelId'] = var2;
        var6['muted'] = var1;
        var4 = arg1;
        var11 = undefined;
        var10 = arg2;
        var7 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 11:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 22:
                return var1;
            }
        };
        var8 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 2;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/renderMessageMarkup.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function renderMessageMarkup(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var5 = {};
case 23:
            var3 = _closure1_slot5;
            var2 = var5.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 13:
            var2 = var1.parse;
            _fun0005_ip = 26; continue _fun0005;
case 25:
            var2 = var1.parseInlineReply;
case 26:
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['getInitialParserStateFromMessage'] = var5;
    var3['getInitialParserState'] = var4;
    var4 = function renderMessageMarkupWithParser(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var5 = {};
case 23:
            var3 = _closure1_slot5;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['renderMessageMarkupWithParser'] = var4;
    var4 = function renderMessageMarkupToAST(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var1 = {};
case 23:
            var4 = _closure1_slot5;
            var3 = var1.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            if(var3) { _fun0007_ip = 25; continue _fun0007 }
case 13:
            var3 = var2.parseToAST;
            _fun0007_ip = 26; continue _fun0007;
case 25:
            var3 = var2.parseInlineReplyToAST;
case 26:
            var2 = {};
            var10 = var2;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var6 = true;
            var1 = 'toAST';
            var2[0] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['renderMessageMarkupToAST'] = var4;
    var4 = function renderMessageContentMarkup(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var5 = {};
case 23:
            var3 = function renderMessageContentMarkupWithParser(arg1, arg2) {
                var1 = arg2;
                var13 = var1.content;
                var8 = var1.guildId;
                var7 = var1.channelId;
                var3 = var1.messageId;
                var2 = var1.authorId;
                var5 = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'allowGameMentions': false, 'mentionChannels': null, 'mentionGames': null, 'soundboardSounds': null, 'formatInline': true, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': true};
                var1 = false;
                var4 = new Array(0);
                var5['mentionChannels'] = var4;
                var4 = global;
                var4 = var4.Map;
                var9 = var4.prototype;
                var9 = Object.create(var9, {constructor: {value: var4}});
                var14 = var9;
                var4 = new var14[var4](var13);
                var4 = var4 instanceof Object ? var4 : var9;
                var5['mentionGames'] = var4;
                var4 = new Array(0);
                var5['soundboardSounds'] = var4;
                var4 = true;
                var5['guildId'] = var8;
                var5['channelId'] = var7;
                var5['messageId'] = var3;
                var5['authorId'] = var2;
                var5['muted'] = var1;
                var5['disablePressableChannelMention'] = var4;
                var3 = arg1;
                var14 = undefined;
                var10 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = arg1;
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var2 = var1.bind(var2)(var3);
                        var1 = var3;
                        if(var2) { _fun0009_ip = 22; continue _fun0009 }
case 11:
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 22:
                        return var1;
                    }
                };
                var12 = true;
                var11 = var5;
                var1 = var14[var3](var13, var12, var11, var10, var9);
                return var1;
            };
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['renderMessageContentMarkup'] = var4;
    var4 = function renderAutomodMessageMarkup(arg1, arg2, arg3) {
        var6 = _closure1_slot6;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var10 = var1.parseAutoModerationSystemMessage;
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['renderAutomodMessageMarkup'] = var4;
    var2 = function renderAutomodMessageMarkupToAST(arg1, arg2, arg3) {
        var6 = _closure1_slot6;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var10 = var1.parseAutoModerationSystemMessageToAST;
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['renderAutomodMessageMarkupToAST'] = var2;
    return var1;
})();