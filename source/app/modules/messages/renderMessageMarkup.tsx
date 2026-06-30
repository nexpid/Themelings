// app/modules/messages/renderMessageMarkup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function getInitialParserStateFromMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot7;
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
    var _closure1_slot6 = var5;
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
    var _closure1_slot7 = var4;
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
case 3:
            var1 = var5;
case 12:
            var _closure2_slot2 = var1;
            var5 = var2.formatInline;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = var5;
case 13:
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
            if(!(var6 != var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var5;
case 15:
            var6 = var1.content;
            var _closure2_slot8 = var6;
            var1 = _closure1_slot6;
            var9 = var1.bind(var7)(var4, var2);
            var4 = arg1;
            var10 = true;
            var8 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var5 = arg2;
                    var2 = arg3;
                    var7 = null;
                    var3 = var7 != var2;
                    if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = var2;
case 17:
                    _closure2_slot7 = var3;
                    var8 = global;
                    var6 = var8.Array;
                    var3 = var6.isArray;
                    var3 = var3.bind(var6)(var4);
                    var9 = var4;
                    if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 2:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var9 = var3;
case 19:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 13:
                    var4 = {};
                    var3 = 'text';
                    var4['type'] = var3;
                    var3 = _closure2_slot8;
                    var4['content'] = var3;
                    var3 = {};
                    var6 = 0;
                    var3['index'] = var6;
                    var6 = _closure2_slot8;
                    var3[0] = var6;
                    var4['originalMatch'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var9 = var3;
case 20:
                    var3 = _closure2_slot2;
                    var6 = var9;
                    if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = _closure2_slot5;
                    if(!(var7 == var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure2_slot0;
                    _fun0003_ip = 25; continue _fun0003;
case 23:
                    var3 = _closure2_slot5;
case 25:
                    var11 = var3.embeds;
                    var4 = var9.length;
                    var10 = 1;
                    var3 = var9;
                    if(!(var10 === var4)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var4 = var11.length;
                    var3 = var9;
                    if(!(var10 === var4)) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                    var10 = 0;
                    var4 = var9[var10];
                    var11 = var11[var10];
                    var12 = var4.type;
                    var10 = 'link';
                    if(!(var10 !== var12)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var10 = var4.type;
                    var4 = 'attachmentLink';
                    var3 = var9;
                    if(!(var4 === var10)) { _fun0003_ip = 26; continue _fun0003 }
case 29:
                    var13 = _closure1_slot4;
                    var12 = var13.has;
                    var10 = var11.type;
                    var10 = var12.bind(var13)(var10);
                    var3 = var9;
                    if(!var10) { _fun0003_ip = 26; continue _fun0003 }
case 31:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 3;
                    var10 = var10[var4];
                    var4 = undefined;
                    var10 = var12.bind(var4)(var10);
                    var4 = var10.isEmbedInline;
                    var4 = var4.bind(var10)(var11);
                    var3 = var9;
                    if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 32:
                    var3 = new Array(0);
case 26:
                    var6 = var3;
case 21:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var4 = _closure2_slot0;
                    var9 = var4.type;
                    var4 = _closure1_slot3;
                    var4 = var4.MEDIA_MENTION_MESSAGE;
                    var3 = var9 === var4;
case 33:
                    if(var3) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    if(var5) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var3 = 0;
                    var4 = var6[var3];
                    var9 = var4.type;
                    var4 = 'paragraph';
                    var4 = var4 === var9;
                    if(!var4) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var9 = var6[var3];
                    var10 = var9.content;
                    var9 = var8.Array;
                    var4 = var10 instanceof var9;
case 39:
                    if(!var4) { _fun0003_ip = 35; continue _fun0003 }
case 41:
                    var4 = var6[var3];
                    var10 = _closure1_slot10;
                    var3 = var6[var3];
                    var3 = var3.content;
                    var9 = undefined;
                    var9 = var10.bind(var9)(var3);
                    var4['content'] = var3;
                    _fun0003_ip = 35; continue _fun0003;
case 37:
                    var4 = _closure1_slot10;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var6);
case 35:
                    var4 = _closure2_slot1;
                    var3 = var6;
                    if(!var4) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var4 = function removeBuildOverrideLinks(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'link';
                                var1 = var1 !== var3;
                                if(var1) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 4;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.isBuildOverrideLink;
                                var2 = var2.target;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var2;
case 44:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = undefined;
                    var6 = var4.bind(var9)(var6);
                    var4 = function removeExperimentLinks(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'link';
                                var1 = var1 !== var3;
                                if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 5;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.isExperimentEmbedURL;
                                var2 = var2.target;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var2;
case 44:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var9)(var6);
case 42:
                    var1 = function removeQuestsEmbedLinks(arg1) {
                        var3 = arg1;
                        var4 = var3.some;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = 'link';
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4.type;
                                var1 = 'link';
                                var1 = var1 === var2;
                                var2 = var4.target;
                                var3 = null;
                                var5 = var3 != var2;
                                var2 = null;
                                if(!var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 1;
                                var6 = var6[var5];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var6);
                                var5 = var6.parseQuestsEmbedCode;
                                var4 = var4.target;
                                var2 = var5.bind(var6)(var4);
case 46:
                                if(!var1) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                                var1 = var3 != var2;
case 48:
                                if(!var1) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                                var2 = _closure4_slot0;
                                var1 = !var2;
case 50:
                                var1 = !var1;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = undefined;
                    var3 = var1.bind(var4)(var3);
                    var1 = _closure2_slot5;
                    if(!(var7 == var1)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var1 = _closure2_slot0;
                    _fun0003_ip = 54; continue _fun0003;
case 52:
                    var1 = _closure2_slot5;
case 54:
                    var1 = var1.embeds;
                    var1 = var1.length;
                    var6 = 0;
                    if(!(var1 > var6)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    if(var5) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var1 = var3[var6];
                    var11 = var1.type;
                    var10 = 'paragraph';
                    var1 = false;
                    if(!(var10 === var11)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var10 = var3[var6];
                    var10 = var10.content;
                    var8 = var8.Array;
                    var8 = var10 instanceof var8;
                    var1 = false;
                    if(!var8) { _fun0003_ip = 59; continue _fun0003 }
case 61:
                    var8 = _closure1_slot12;
                    var6 = var3[var6];
                    var6 = var6.content;
                    var1 = var8.bind(var4)(var6);
                    _fun0003_ip = 59; continue _fun0003;
case 57:
                    var6 = _closure1_slot12;
                    var1 = var6.bind(var4)(var3);
case 59:
                    _closure2_slot6 = var1;
case 55:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var4)(var3);
case 62:
                    var6 = _closure2_slot4;
                    var1 = var3;
                    if(!(var7 != var6)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var2 = _closure2_slot4;
                    var1 = var2.bind(var4)(var3, var5);
case 64:
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
    var _closure1_slot8 = var1;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if(var2) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 66:
                return var1;
            }
        };
        var8 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function checkForJumboEmoji(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.some;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = 'emoji';
                    var1 = var1 !== var2;
                    if(!var1) { _fun0009_ip = 10; continue _fun0009 }
case 45:
                    var4 = var3.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var4;
case 10:
                    if(!var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var2 = var3.content;
                    var4 = 'string';
                    var2 = typeof var2;
                    var2 = var4 !== var2;
                    if(var2) { _fun0009_ip = 70; continue _fun0009 }
case 2:
                    var4 = var3.content;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var2 = var3 !== var4;
case 70:
                    var1 = var2;
case 68:
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var3 = 0;
            var _closure2_slot0 = var3;
            var4 = var1.forEach;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'emoji';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0010_ip = 10; continue _fun0010 }
case 45:
                    var3 = var2.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var3;
case 10:
                    if(var1) { _fun0010_ip = 73; continue _fun0010 }
case 69:
                    var3 = _closure2_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure2_slot0 = var1;
case 73:
                    var2 = _closure2_slot0;
                    var1 = 30;
                    if(!(!(var2 > var1))) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var1 = undefined;
                    return var1;
case 74:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot0;
            var3 = 30;
            if(!(!(var4 > var3))) { _fun0008_ip = 74; continue _fun0008 }
case 76:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var2 = true;
                var1 = arg1;
                var1['jumboable'] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
case 74:
            return var1;
case 71:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function containsMatchingNode(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var8;
            var4 = global;
            var2 = var4.Array;
            var2 = var3 instanceof var2;
            if(var2) { _fun0011_ip = 20; continue _fun0011 }
case 67:
            var7 = undefined;
            var2 = var8.bind(var7)(var3);
            var5 = null;
            if(!(var5 == var2)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
            var6 = var3.content;
            var5 = var4.Array;
            var5 = var6 instanceof var5;
            if(var5) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var5 = var3.items;
            var4 = var4.Array;
            var4 = var5 instanceof var4;
            if(!var4) { _fun0011_ip = 81; continue _fun0011 }
case 70:
            var9 = var3.items;
            var6 = var9.some;
            var5 = function(arg1) {
                var4 = _closure1_slot11;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var4 = var6.bind(var9)(var5);
case 81:
            _fun0011_ip = 82; continue _fun0011;
case 79:
            var6 = _closure1_slot11;
            var5 = var3.content;
            var4 = var6.bind(var7)(var5, var8);
case 82:
            var2 = var4;
case 77:
            return var2;
case 20:
            var2 = var3.some;
            var1 = function(arg1) {
                var4 = _closure1_slot11;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function hasAnySpoilerEmbeds(arg1) {
        var4 = _closure1_slot11;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var3 = var5.type;
                var2 = 'spoiler';
                var1 = null;
                if(!(var2 === var3)) { _fun0012_ip = 78; continue _fun0012 }
case 83:
                var4 = _closure1_slot11;
                var3 = undefined;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'link';
                        var1 = var1 === var3;
                        if(var1) { _fun0013_ip = 10; continue _fun0013 }
case 45:
                        var3 = var2.type;
                        var2 = 'attachmentLink';
                        var1 = var2 === var3;
case 10:
                        if(var1) { _fun0013_ip = 84; continue _fun0013 }
case 69:
                        var1 = null;
case 84:
                        return var1;
                    }
                };
                var1 = var4.bind(var3)(var5, var2);
case 78:
                return var1;
            }
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function convertNewlinesInContent(arg1) {
        var1 = arg1;
        var3 = var1.forEach;
        var2 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = var5.has;
                var3 = var1.type;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                var5 = var1.content;
                var4 = null;
                var3 = var4 != var5;
case 85:
                if(!var3) { _fun0014_ip = 87; continue _fun0014 }
case 88:
                var6 = global;
                var5 = var6.Array;
                var4 = var5.isArray;
                var3 = var1.content;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.captureMessage;
                var11 = var1.type;
                var3 = var1.content;
                var8 = var6.Object;
                var7 = var8.keys;
                var12 = var7.bind(var8)(var1);
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var17 = 'AST node type:';
                var15 = ' with content typeof ';
                var14 = typeof var3;
                var13 = '. Keys ';
                var16 = var11;
                var3 = var17[var9](var16, var15, var14, var13, var12, var11);
                var3 = var4.bind(var5)(var3);
                _fun0014_ip = 87; continue _fun0014;
case 91:
                var6 = var1.content;
                var5 = var6.replace;
                var4 = /\n/g;
                var3 = ' ';
                var3 = var5.bind(var6)(var4, var3);
                var1['content'] = var3;
                _fun0014_ip = 87; continue _fun0014;
case 89:
                var3 = _closure1_slot13;
                var2 = var1.content;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 87:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var10 = var9.MessageEmbedTypes;
    var9 = var9.MessageTypes;
    var _closure1_slot3 = var9;
    var11 = var6.Set;
    var12 = var10.IMAGE;
    var9 = new Array(2);
    var9[0] = var12;
    var10 = var10.GIFV;
    var9[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var16 = var10;
    var15 = var9;
    var9 = new var16[var11](var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot4 = var9;
    var10 = var6.Set;
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var15 = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    var16 = var9;
    var6 = new var16[var10](var15, var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot5 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/renderMessageMarkup.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function renderMessageMarkup(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0015_ip = 93; continue _fun0015 }
case 94:
            var5 = {};
case 93:
            var3 = _closure1_slot8;
            var2 = var5.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            if(var2) { _fun0015_ip = 95; continue _fun0015 }
case 96:
            var2 = var1.parse;
            _fun0015_ip = 97; continue _fun0015;
case 95:
            var2 = var1.parseInlineReply;
case 97:
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['getInitialParserStateFromMessage'] = var5;
    var3['getInitialParserState'] = var4;
    var4 = function renderMessageMarkupWithParser(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0016_ip = 93; continue _fun0016 }
case 94:
            var5 = {};
case 93:
            var3 = _closure1_slot8;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['renderMessageMarkupWithParser'] = var4;
    var4 = function renderMessageMarkupToAST(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0017_ip = 93; continue _fun0017 }
case 94:
            var1 = {};
case 93:
            var4 = _closure1_slot8;
            var3 = var1.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            if(var3) { _fun0017_ip = 95; continue _fun0017 }
case 96:
            var3 = var2.parseToAST;
            _fun0017_ip = 97; continue _fun0017;
case 95:
            var3 = var2.parseInlineReplyToAST;
case 97:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0018_ip = 93; continue _fun0018 }
case 94:
            var5 = {};
case 93:
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
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = arg1;
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var2 = var1.bind(var2)(var3);
                        var1 = var3;
                        if(var2) { _fun0019_ip = 66; continue _fun0019 }
case 67:
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 66:
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
        var6 = _closure1_slot9;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
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
        var6 = _closure1_slot9;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
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