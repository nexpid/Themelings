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
            var4 = _closure1_slot6;
            var2 = {};
            var1 = var3.channel_id;
            var2['channelId'] = var1;
            var1 = var3.id;
            var2['messageId'] = var1;
            var1 = arg2;
            var2['renderOptions'] = var1;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var1 = var3.webhookId;
            var2 = null;
            var5 = var2 != var1;
            var1 = {};
            var9 = var1;
            var8 = var4;
            var6 = copyDataProperties(var9, var8);
            var6 = var5;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.allowLinks;
case 2:
            var4 = 'allowLinks';
            var1[var4] = var6;
            var4 = 'allowEmojiLinks';
            var1[var4] = var5;
            var5 = var3.mentionChannels;
            var4 = 'mentionChannels';
            var1[var4] = var5;
            var3 = var3.soundboardSounds;
            if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = new Array(0);
case 4:
            var2 = 'soundboardSounds';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function getInitialParserState(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.messageId;
        var2 = var1.renderOptions;
        var1 = {};
        var1['channelId'] = var4;
        var1['messageId'] = var3;
        var3 = global;
        var6 = var3.Boolean;
        var4 = var2.allowLinks;
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var1['allowLinks'] = var4;
        var6 = var3.Boolean;
        var4 = var2.allowDevLinks;
        var4 = var6.bind(var5)(var4);
        var1['allowDevLinks'] = var4;
        var6 = var3.Boolean;
        var4 = var2.allowGameMentions;
        var4 = var6.bind(var5)(var4);
        var1['allowGameMentions'] = var4;
        var6 = var3.Boolean;
        var4 = var2.formatInline;
        var4 = var6.bind(var5)(var4);
        var1['formatInline'] = var4;
        var6 = var3.Boolean;
        var4 = var2.noStyleAndInteraction;
        var4 = var6.bind(var5)(var4);
        var1['noStyleAndInteraction'] = var4;
        var6 = var3.Boolean;
        var4 = var2.allowHeading;
        var4 = var6.bind(var5)(var4);
        var1['allowHeading'] = var4;
        var6 = var3.Boolean;
        var4 = var2.allowList;
        var4 = var6.bind(var5)(var4);
        var1['allowList'] = var4;
        var6 = var3.Boolean;
        var4 = var2.previewLinkTarget;
        var4 = var6.bind(var5)(var4);
        var1['previewLinkTarget'] = var4;
        var6 = var3.Boolean;
        var4 = var2.disableAnimatedEmoji;
        var4 = var6.bind(var5)(var4);
        var1['disableAnimatedEmoji'] = var4;
        var6 = var3.Boolean;
        var4 = var2.isInteracting;
        var4 = var6.bind(var5)(var4);
        var1['isInteracting'] = var4;
        var6 = false;
        var1['allowEmojiLinks'] = var6;
        var4 = true;
        var1['disableAutoBlockNewlines'] = var4;
        var7 = new Array(0);
        var1['mentionChannels'] = var7;
        var7 = new Array(0);
        var1['soundboardSounds'] = var7;
        var1['muted'] = var6;
        var1['unknownUserMentionPlaceholder'] = var4;
        var4 = var2.viewingChannelId;
        var1['viewingChannelId'] = var4;
        var4 = var3.Boolean;
        var3 = var2.forceWhite;
        var3 = var4.bind(var5)(var3);
        var1['forceWhite'] = var3;
        var2 = var2.textColor;
        var1['textColor'] = var2;
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = function render(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var4;
            var5 = var2.toAST;
            var7 = undefined;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var5;
case 6:
            var _closure2_slot1 = var1;
            var5 = var2.hideSimpleEmbedContent;
            var1 = var7 === var5;
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var5;
case 8:
            var _closure2_slot2 = var1;
            var5 = var2.formatInline;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var5;
case 10:
            var _closure2_slot3 = var1;
            var1 = var2.postProcessor;
            var _closure2_slot4 = var1;
            var1 = var2.shouldFilterKeywords;
            var6 = var2.contentMessage;
            var _closure2_slot5 = var6;
            var5 = false;
            var _closure2_slot6 = var5;
            var10 = null;
            var5 = var4;
            if(!(var10 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var6;
case 12:
            var9 = var5.content;
            var6 = var9;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var8 = var5.bind(var7)(var1);
            var5 = var8.getKeywordSubstitutedContent;
            var1 = {};
            var11 = true;
            var1['escapeReplacement'] = var11;
            var11 = var4.id;
            var1['messageId'] = var11;
            var11 = var4.channel_id;
            var1['channelId'] = var11;
            var11 = var4.author;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var10 = var11.id;
case 16:
            var1['authorId'] = var10;
            var6 = var5.bind(var8)(var9, var1);
case 14:
            var1 = _closure1_slot5;
            var14 = var1.bind(var7)(var4, var2);
            var4 = arg1;
            var15 = true;
            var13 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var5 = arg2;
                    var7 = global;
                    var4 = var7.Array;
                    var2 = var4.isArray;
                    var2 = var2.bind(var4)(var3);
                    var6 = var3;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 6:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var6 = var2;
case 18:
                    var3 = _closure2_slot2;
                    var8 = var6;
                    if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 3; continue _fun0003 }
case 11:
                    var3 = _closure2_slot0;
                    _fun0003_ip = 21; continue _fun0003;
case 3:
                    var3 = _closure2_slot5;
case 21:
                    var10 = var3.embeds;
                    var4 = var6.length;
                    var9 = 1;
                    var3 = var6;
                    if(!(var9 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var4 = var10.length;
                    var3 = var6;
                    if(!(var9 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                    var9 = 0;
                    var4 = var6[var9];
                    var10 = var10[var9];
                    var11 = var4.type;
                    var9 = 'link';
                    if(!(var9 !== var11)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var9 = var4.type;
                    var4 = 'attachmentLink';
                    var3 = var6;
                    if(!(var4 === var9)) { _fun0003_ip = 22; continue _fun0003 }
case 25:
                    var12 = _closure1_slot3;
                    var11 = var12.has;
                    var9 = var10.type;
                    var9 = var11.bind(var12)(var9);
                    var3 = var6;
                    if(!var9) { _fun0003_ip = 22; continue _fun0003 }
case 27:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var9 = var9[var4];
                    var4 = undefined;
                    var9 = var11.bind(var4)(var9);
                    var4 = var9.isEmbedInline;
                    var4 = var4.bind(var9)(var10);
                    var3 = var6;
                    if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 28:
                    var3 = new Array(0);
case 22:
                    var8 = var3;
case 19:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var3 = 0;
                    var4 = var8[var3];
                    var6 = var4.type;
                    var4 = 'paragraph';
                    var4 = var4 === var6;
                    if(!var4) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var6 = var8[var3];
                    var9 = var6.content;
                    var6 = var7.Array;
                    var4 = var9 instanceof var6;
case 33:
                    if(!var4) { _fun0003_ip = 29; continue _fun0003 }
case 35:
                    var4 = var8[var3];
                    var9 = _closure1_slot9;
                    var3 = var8[var3];
                    var3 = var3.content;
                    var6 = undefined;
                    var6 = var9.bind(var6)(var3);
                    var4['content'] = var3;
                    _fun0003_ip = 29; continue _fun0003;
case 31:
                    var4 = _closure1_slot9;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var8);
case 29:
                    var4 = _closure2_slot1;
                    var3 = var8;
                    if(!var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var6 = function removeBuildOverrideLinks(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'link';
                                var1 = var1 !== var3;
                                if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 5;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.isBuildOverrideLink;
                                var2 = var2.target;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var2;
case 38:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = undefined;
                    var3 = var6.bind(var4)(var8);
case 36:
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
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4.type;
                                var1 = 'link';
                                var1 = var1 === var2;
                                var2 = var4.target;
                                var3 = null;
                                var5 = var3 != var2;
                                var2 = null;
                                if(!var5) { _fun0005_ip = 3; continue _fun0005 }
case 40:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 2;
                                var6 = var6[var5];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var6);
                                var5 = var6.parseQuestsEmbedCode;
                                var4 = var4.target;
                                var2 = var5.bind(var6)(var4);
case 3:
                                if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                                var1 = var3 != var2;
case 41:
                                if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                                var2 = _closure4_slot0;
                                var1 = !var2;
case 43:
                                var1 = !var1;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = undefined;
                    var3 = var1.bind(var4)(var3);
                    var1 = _closure2_slot0;
                    var1 = var1.embeds;
                    var1 = var1.length;
                    var6 = 0;
                    if(!(var1 > var6)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    if(var5) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var1 = var3[var6];
                    var10 = var1.type;
                    var9 = 'paragraph';
                    var1 = false;
                    if(!(var9 === var10)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var9 = var3[var6];
                    var9 = var9.content;
                    var7 = var7.Array;
                    var7 = var9 instanceof var7;
                    var1 = false;
                    if(!var7) { _fun0003_ip = 49; continue _fun0003 }
case 51:
                    var7 = _closure1_slot11;
                    var6 = var3[var6];
                    var6 = var6.content;
                    var1 = var7.bind(var4)(var6);
                    _fun0003_ip = 49; continue _fun0003;
case 47:
                    var6 = _closure1_slot11;
                    var1 = var6.bind(var4)(var3);
case 49:
                    _closure2_slot6 = var1;
case 45:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var4)(var3);
case 52:
                    var7 = _closure2_slot4;
                    var6 = null;
                    var1 = var3;
                    if(!(var6 != var7)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                    var2 = _closure2_slot4;
                    var1 = var2.bind(var4)(var3, var5);
case 54:
                    return var1;
                }
            };
            var17 = undefined;
            var16 = var6;
            var2 = var17[var4](var16, var15, var14, var13, var12);
            var1 = {};
            var3 = _closure2_slot6;
            var1['hasSpoilerEmbeds'] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function renderAutomodMessageMarkupWithParser(arg1, arg2, arg3, arg4) {
        var6 = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': false, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'allowGameMentions': false, 'disableAutoBlockNewlines': true, 'highlightWord': null, 'disableAnimatedEmoji': false};
        var1 = false;
        var2 = new Array(0);
        var6['mentionChannels'] = var2;
        var2 = new Array(0);
        var6['soundboardSounds'] = var2;
        var9 = true;
        var2 = arg3;
        var6['highlightWord'] = var2;
        var2 = arg4;
        var6['channelId'] = var2;
        var6['muted'] = var1;
        var4 = arg1;
        var11 = undefined;
        var10 = arg2;
        var7 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if(var2) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 56:
                return var1;
            }
        };
        var8 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function checkForJumboEmoji(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.some;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = 'emoji';
                    var1 = var1 !== var2;
                    if(!var1) { _fun0008_ip = 6; continue _fun0008 }
case 39:
                    var4 = var3.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var4;
case 6:
                    if(!var1) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var2 = var3.content;
                    var4 = 'string';
                    var2 = typeof var2;
                    var2 = var4 !== var2;
                    if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var4 = var3.content;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var2 = var3 !== var4;
case 60:
                    var1 = var2;
case 58:
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var3 = 0;
            var _closure2_slot0 = var3;
            var4 = var1.forEach;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'emoji';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0009_ip = 6; continue _fun0009 }
case 39:
                    var3 = var2.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var3;
case 6:
                    if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 59:
                    var3 = _closure2_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure2_slot0 = var1;
case 64:
                    var2 = _closure2_slot0;
                    var1 = 30;
                    if(!(!(var2 > var1))) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var1 = undefined;
                    return var1;
case 65:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot0;
            var3 = 30;
            if(!(!(var4 > var3))) { _fun0007_ip = 65; continue _fun0007 }
case 67:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var2 = true;
                var1 = arg1;
                var1['jumboable'] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
case 65:
            return var1;
case 62:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function containsMatchingNode(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var8;
            var4 = global;
            var2 = var4.Array;
            var2 = var3 instanceof var2;
            if(var2) { _fun0010_ip = 5; continue _fun0010 }
case 57:
            var7 = undefined;
            var2 = var8.bind(var7)(var3);
            var5 = null;
            if(!(var5 == var2)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var6 = var3.content;
            var5 = var4.Array;
            var5 = var6 instanceof var5;
            if(var5) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var5 = var3.items;
            var4 = var4.Array;
            var4 = var5 instanceof var4;
            if(!var4) { _fun0010_ip = 72; continue _fun0010 }
case 60:
            var9 = var3.items;
            var6 = var9.some;
            var5 = function(arg1) {
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var4 = var6.bind(var9)(var5);
case 72:
            _fun0010_ip = 73; continue _fun0010;
case 70:
            var6 = _closure1_slot10;
            var5 = var3.content;
            var4 = var6.bind(var7)(var5, var8);
case 73:
            var2 = var4;
case 68:
            return var2;
case 5:
            var2 = var3.some;
            var1 = function(arg1) {
                var4 = _closure1_slot10;
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
    var _closure1_slot10 = var1;
    var1 = function hasAnySpoilerEmbeds(arg1) {
        var4 = _closure1_slot10;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var3 = var5.type;
                var2 = 'spoiler';
                var1 = null;
                if(!(var2 === var3)) { _fun0011_ip = 69; continue _fun0011 }
case 74:
                var4 = _closure1_slot10;
                var3 = undefined;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'link';
                        var1 = var1 === var3;
                        if(var1) { _fun0012_ip = 6; continue _fun0012 }
case 39:
                        var3 = var2.type;
                        var2 = 'attachmentLink';
                        var1 = var2 === var3;
case 6:
                        if(var1) { _fun0012_ip = 75; continue _fun0012 }
case 59:
                        var1 = null;
case 75:
                        return var1;
                    }
                };
                var1 = var4.bind(var3)(var5, var2);
case 69:
                return var1;
            }
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function convertNewlinesInContent(arg1) {
        var1 = arg1;
        var3 = var1.forEach;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var5 = _closure1_slot4;
                var4 = var5.has;
                var3 = var1.type;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var5 = var1.content;
                var4 = null;
                var3 = var4 != var5;
case 76:
                if(!var3) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                var6 = global;
                var5 = var6.Array;
                var4 = var5.isArray;
                var3 = var1.content;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0013_ip = 82; continue _fun0013 }
case 83:
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
                _fun0013_ip = 78; continue _fun0013;
case 82:
                var6 = var1.content;
                var5 = var6.replace;
                var4 = /\n/g;
                var3 = ' ';
                var3 = var5.bind(var6)(var4, var3);
                var1['content'] = var3;
                _fun0013_ip = 78; continue _fun0013;
case 80:
                var3 = _closure1_slot12;
                var2 = var1.content;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 78:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot3 = var9;
    var10 = var6.Set;
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var15 = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    var16 = var9;
    var6 = new var16[var10](var15, var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot4 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/renderMessageMarkup.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function renderMessageMarkup(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0014_ip = 84; continue _fun0014 }
case 85:
            var5 = {};
case 84:
            var3 = _closure1_slot7;
            var2 = var5.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            if(var2) { _fun0014_ip = 86; continue _fun0014 }
case 87:
            var2 = var1.parse;
            _fun0014_ip = 88; continue _fun0014;
case 86:
            var2 = var1.parseInlineReply;
case 88:
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['getInitialParserStateFromMessage'] = var5;
    var3['getInitialParserState'] = var4;
    var4 = function renderMessageMarkupWithParser(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0015_ip = 84; continue _fun0015 }
case 85:
            var5 = {};
case 84:
            var3 = _closure1_slot7;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['renderMessageMarkupWithParser'] = var4;
    var4 = function renderMessageMarkupToAST(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0016_ip = 84; continue _fun0016 }
case 85:
            var1 = {};
case 84:
            var4 = _closure1_slot7;
            var3 = var1.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            if(var3) { _fun0016_ip = 86; continue _fun0016 }
case 87:
            var3 = var2.parseToAST;
            _fun0016_ip = 88; continue _fun0016;
case 86:
            var3 = var2.parseInlineReplyToAST;
case 88:
            var2 = {};
            var10 = var2;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var6 = true;
            var1 = 'toAST';
            var2[var1] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['renderMessageMarkupToAST'] = var4;
    var4 = function renderMessageContentMarkup(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var5 = {};
case 84:
            var3 = function renderMessageContentMarkupWithParser(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg2;
                    var1 = arguments[2];
                    var6 = undefined;
                    if(!(var1 === var6)) { _fun0018_ip = 89; continue _fun0018 }
case 90:
                    var1 = {};
case 89:
                    var8 = var3.content;
                    var7 = var3.guildId;
                    var2 = var3.channelId;
                    var9 = var3.messageId;
                    var3 = null;
                    var5 = var8;
                    if(!(var3 != var1)) { _fun0018_ip = 91; continue _fun0018 }
case 18:
                    var1 = var1.shouldFilterKeywords;
                    var5 = var8;
                    if(!var1) { _fun0018_ip = 91; continue _fun0018 }
case 86:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var1 = var4[var1];
                    var4 = var3.bind(var6)(var1);
                    var3 = var4.getKeywordSubstitutedContent;
                    var1 = {};
                    var10 = true;
                    var1['escapeReplacement'] = var10;
                    var1['channelId'] = var2;
                    var1['messageId'] = var9;
                    var5 = var3.bind(var4)(var8, var1);
case 91:
                    var4 = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'allowGameMentions': false, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': true};
                    var1 = false;
                    var3 = new Array(0);
                    var4['mentionChannels'] = var3;
                    var3 = new Array(0);
                    var4['soundboardSounds'] = var3;
                    var3 = true;
                    var4['guildId'] = var7;
                    var4['channelId'] = var2;
                    var4['muted'] = var1;
                    var4['disablePressableChannelMention'] = var3;
                    var2 = arg1;
                    var11 = function(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var3 = arg1;
                            var1 = global;
                            var2 = var1.Array;
                            var1 = var2.isArray;
                            var2 = var1.bind(var2)(var3);
                            var1 = var3;
                            if(var2) { _fun0019_ip = 56; continue _fun0019 }
case 57:
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
case 56:
                            return var1;
                        }
                    };
                    var15 = undefined;
                    var14 = var5;
                    var13 = true;
                    var12 = var4;
                    var1 = var15[var2](var14, var13, var12, var11, var10);
                    return var1;
                }
            };
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['renderMessageContentMarkup'] = var4;
    var4 = function renderAutomodMessageMarkup(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
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
        var6 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
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