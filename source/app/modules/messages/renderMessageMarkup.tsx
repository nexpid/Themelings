// app/modules/messages/renderMessageMarkup.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function getInitialParserStateFromMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var6) { _fun0001_ip = 81; continue _fun0001 }
 75:
            var6 = var4.allowLinks;
 81:
            var4 = 'allowLinks';
            var1[var4] = var6;
            var4 = 'allowEmojiLinks';
            var1[var4] = var5;
            var5 = var3.mentionChannels;
            var4 = 'mentionChannels';
            var1[var4] = var5;
            var3 = var3.soundboardSounds;
            if(!(var2 == var3)) { _fun0001_ip = 128; continue _fun0001 }
 124:
            var3 = new Array(0);
 128:
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
        var6 = var3.Boolean;
        var5 = var2.isInteracting;
        var5 = var6.bind(var4)(var5);
        var1['isInteracting'] = var5;
        var6 = false;
        var1['allowEmojiLinks'] = var6;
        var5 = true;
        var1['disableAutoBlockNewlines'] = var5;
        var7 = new Array(0);
        var1['mentionChannels'] = var7;
        var7 = new Array(0);
        var1['soundboardSounds'] = var7;
        var1['muted'] = var6;
        var1['unknownUserMentionPlaceholder'] = var5;
        var5 = var2.viewingChannelId;
        var1['viewingChannelId'] = var5;
        var3 = var3.Boolean;
        var2 = var2.forceWhite;
        var2 = var3.bind(var4)(var2);
        var1['forceWhite'] = var2;
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = function render(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var4;
            var5 = var2.toAST;
            var7 = undefined;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 32; continue _fun0002 }
 29:
            var1 = var5;
 32:
            var _closure2_slot1 = var1;
            var5 = var2.hideSimpleEmbedContent;
            var1 = var7 === var5;
            if(var1) { _fun0002_ip = 52; continue _fun0002 }
 49:
            var1 = var5;
 52:
            var _closure2_slot2 = var1;
            var5 = var2.formatInline;
            var1 = var7 !== var5;
            if(!var1) { _fun0002_ip = 72; continue _fun0002 }
 69:
            var1 = var5;
 72:
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
            if(!(var10 != var6)) { _fun0002_ip = 120; continue _fun0002 }
 117:
            var5 = var6;
 120:
            var9 = var5.content;
            var6 = var9;
            if(!var1) { _fun0002_ip = 218; continue _fun0002 }
 131:
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
            if(var12) { _fun0002_ip = 207; continue _fun0002 }
 202:
            var10 = var11.id;
 207:
            var1['authorId'] = var10;
            var6 = var5.bind(var8)(var9, var1);
 218:
            var1 = _closure1_slot5;
            var14 = var1.bind(var7)(var4, var2);
            var4 = arg1;
            var15 = true;
            var13 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var5 = arg2;
                    var7 = global;
                    var4 = var7.Array;
                    var2 = var4.isArray;
                    var2 = var2.bind(var4)(var3);
                    var6 = var3;
                    if(var2) { _fun0003_ip = 43; continue _fun0003 }
 32:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var6 = var2;
 43:
                    var3 = _closure2_slot2;
                    var8 = var6;
                    if(!var3) { _fun0003_ip = 228; continue _fun0003 }
 59:
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 75; continue _fun0003 }
 69:
                    var3 = _closure2_slot0;
                    _fun0003_ip = 79; continue _fun0003;
 75:
                    var3 = _closure2_slot5;
 79:
                    var10 = var3.embeds;
                    var4 = var6.length;
                    var9 = 1;
                    var3 = var6;
                    if(!(var9 === var4)) { _fun0003_ip = 225; continue _fun0003 }
 103:
                    var4 = var10.length;
                    var3 = var6;
                    if(!(var9 === var4)) { _fun0003_ip = 225; continue _fun0003 }
 115:
                    var9 = 0;
                    var4 = var6[var9];
                    var10 = var10[var9];
                    var11 = var4.type;
                    var9 = 'link';
                    if(!(var9 !== var11)) { _fun0003_ip = 154; continue _fun0003 }
 138:
                    var9 = var4.type;
                    var4 = 'attachmentLink';
                    var3 = var6;
                    if(!(var4 === var9)) { _fun0003_ip = 225; continue _fun0003 }
 154:
                    var12 = _closure1_slot3;
                    var11 = var12.has;
                    var9 = var10.type;
                    var9 = var11.bind(var12)(var9);
                    var3 = var6;
                    if(!var9) { _fun0003_ip = 225; continue _fun0003 }
 182:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var9 = var9[var4];
                    var4 = undefined;
                    var9 = var11.bind(var4)(var9);
                    var4 = var9.isEmbedInline;
                    var4 = var4.bind(var9)(var10);
                    var3 = var6;
                    if(!var4) { _fun0003_ip = 225; continue _fun0003 }
 221:
                    var3 = new Array(0);
 225:
                    var8 = var3;
 228:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 331; continue _fun0003 }
 235:
                    if(var5) { _fun0003_ip = 317; continue _fun0003 }
 238:
                    var3 = 0;
                    var4 = var8[var3];
                    var6 = var4.type;
                    var4 = 'paragraph';
                    var4 = var4 === var6;
                    if(!var4) { _fun0003_ip = 279; continue _fun0003 }
 260:
                    var6 = var8[var3];
                    var9 = var6.content;
                    var6 = var7.Array;
                    var4 = var9 instanceof var6;
 279:
                    if(!var4) { _fun0003_ip = 331; continue _fun0003 }
 282:
                    var4 = var8[var3];
                    var9 = _closure1_slot9;
                    var3 = var8[var3];
                    var3 = var3.content;
                    var6 = undefined;
                    var6 = var9.bind(var6)(var3);
                    var4['content'] = var3;
                    _fun0003_ip = 331; continue _fun0003;
 317:
                    var4 = _closure1_slot9;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var8);
 331:
                    var4 = _closure2_slot1;
                    var3 = var8;
                    if(!var4) { _fun0003_ip = 353; continue _fun0003 }
 341:
                    var6 = function removeBuildOverrideLinks(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'link';
                                var1 = var1 !== var3;
                                if(var1) { _fun0004_ip = 64; continue _fun0004 }
 19:
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
 64:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = undefined;
                    var3 = var6.bind(var4)(var8);
 353:
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
 0:
                                var4 = arg1;
                                var2 = var4.type;
                                var1 = 'link';
                                var1 = var1 === var2;
                                var2 = var4.target;
                                var3 = null;
                                var5 = var3 != var2;
                                var2 = null;
                                if(!var5) { _fun0005_ip = 75; continue _fun0005 }
 33:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 2;
                                var6 = var6[var5];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var6);
                                var5 = var6.parseQuestsEmbedCode;
                                var4 = var4.target;
                                var2 = var5.bind(var6)(var4);
 75:
                                if(!var1) { _fun0005_ip = 82; continue _fun0005 }
 78:
                                var1 = var3 != var2;
 82:
                                if(!var1) { _fun0005_ip = 95; continue _fun0005 }
 85:
                                var2 = _closure4_slot0;
                                var1 = !var2;
 95:
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
                    if(!(var1 > var6)) { _fun0003_ip = 471; continue _fun0003 }
 386:
                    if(var5) { _fun0003_ip = 455; continue _fun0003 }
 389:
                    var1 = var3[var6];
                    var10 = var1.type;
                    var9 = 'paragraph';
                    var1 = false;
                    if(!(var9 === var10)) { _fun0003_ip = 467; continue _fun0003 }
 408:
                    var9 = var3[var6];
                    var9 = var9.content;
                    var7 = var7.Array;
                    var7 = var9 instanceof var7;
                    var1 = false;
                    if(!var7) { _fun0003_ip = 467; continue _fun0003 }
 432:
                    var7 = _closure1_slot11;
                    var6 = var3[var6];
                    var6 = var6.content;
                    var1 = var7.bind(var4)(var6);
                    _fun0003_ip = 467; continue _fun0003;
 455:
                    var6 = _closure1_slot11;
                    var1 = var6.bind(var4)(var3);
 467:
                    _closure2_slot6 = var1;
 471:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0003_ip = 490; continue _fun0003 }
 478:
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var4)(var3);
 490:
                    var7 = _closure2_slot4;
                    var6 = null;
                    var1 = var3;
                    if(!(var6 != var7)) { _fun0003_ip = 513; continue _fun0003 }
 503:
                    var2 = _closure2_slot4;
                    var1 = var2.bind(var4)(var3, var5);
 513:
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
 0:
                var3 = arg1;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if(var2) { _fun0006_ip = 38; continue _fun0006 }
 27:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 38:
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
 0:
            var1 = arg1;
            var4 = var1.some;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = 'emoji';
                    var1 = var1 !== var2;
                    if(!var1) { _fun0008_ip = 32; continue _fun0008 }
 19:
                    var4 = var3.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var4;
 32:
                    if(!var1) { _fun0008_ip = 80; continue _fun0008 }
 35:
                    var2 = var3.content;
                    var4 = 'string';
                    var2 = typeof var2;
                    var2 = var4 !== var2;
                    if(var2) { _fun0008_ip = 77; continue _fun0008 }
 54:
                    var4 = var3.content;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var2 = var3 !== var4;
 77:
                    var1 = var2;
 80:
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 73; continue _fun0007 }
 24:
            var3 = 0;
            var _closure2_slot0 = var3;
            var4 = var1.forEach;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'emoji';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0009_ip = 32; continue _fun0009 }
 19:
                    var3 = var2.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var3;
 32:
                    if(var1) { _fun0009_ip = 53; continue _fun0009 }
 35:
                    var3 = _closure2_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure2_slot0 = var1;
 53:
                    var2 = _closure2_slot0;
                    var1 = 30;
                    if(!(!(var2 > var1))) { _fun0009_ip = 71; continue _fun0009 }
 67:
                    var1 = undefined;
                    return var1;
 71:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot0;
            var3 = 30;
            if(!(!(var4 > var3))) { _fun0007_ip = 71; continue _fun0007 }
 56:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var2 = true;
                var1 = arg1;
                var1['jumboable'] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
 71:
            return var1;
 73:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function containsMatchingNode(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var8;
            var4 = global;
            var2 = var4.Array;
            var2 = var3 instanceof var2;
            if(var2) { _fun0010_ip = 124; continue _fun0010 }
 27:
            var7 = undefined;
            var2 = var8.bind(var7)(var3);
            var5 = null;
            if(!(var5 == var2)) { _fun0010_ip = 122; continue _fun0010 }
 40:
            var6 = var3.content;
            var5 = var4.Array;
            var5 = var6 instanceof var5;
            if(var5) { _fun0010_ip = 101; continue _fun0010 }
 58:
            var5 = var3.items;
            var4 = var4.Array;
            var4 = var5 instanceof var4;
            if(!var4) { _fun0010_ip = 99; continue _fun0010 }
 77:
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
 99:
            _fun0010_ip = 119; continue _fun0010;
 101:
            var6 = _closure1_slot10;
            var5 = var3.content;
            var4 = var6.bind(var7)(var5, var8);
 119:
            var2 = var4;
 122:
            return var2;
 124:
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
 0:
                var5 = arg1;
                var3 = var5.type;
                var2 = 'spoiler';
                var1 = null;
                if(!(var2 === var3)) { _fun0011_ip = 40; continue _fun0011 }
 18:
                var4 = _closure1_slot10;
                var3 = undefined;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'link';
                        var1 = var1 === var3;
                        if(var1) { _fun0012_ip = 32; continue _fun0012 }
 19:
                        var3 = var2.type;
                        var2 = 'attachmentLink';
                        var1 = var2 === var3;
 32:
                        if(var1) { _fun0012_ip = 37; continue _fun0012 }
 35:
                        var1 = null;
 37:
                        return var1;
                    }
                };
                var1 = var4.bind(var3)(var5, var2);
 40:
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
 0:
                var1 = arg1;
                var5 = _closure1_slot4;
                var4 = var5.has;
                var3 = var1.type;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0013_ip = 39; continue _fun0013 }
 28:
                var5 = var1.content;
                var4 = null;
                var3 = var4 != var5;
 39:
                if(!var3) { _fun0013_ip = 248; continue _fun0013 }
 45:
                var6 = global;
                var5 = var6.Array;
                var4 = var5.isArray;
                var3 = var1.content;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0013_ip = 232; continue _fun0013 }
 74:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0013_ip = 190; continue _fun0013 }
 90:
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
                _fun0013_ip = 248; continue _fun0013;
 190:
                var6 = var1.content;
                var5 = var6.replace;
                var4 = /\n/g;
                var3 = ' ';
                var3 = var5.bind(var6)(var4, var3);
                var1['content'] = var3;
                _fun0013_ip = 248; continue _fun0013;
 232:
                var3 = _closure1_slot12;
                var2 = var1.content;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 248:
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
 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0014_ip = 11; continue _fun0014 }
 9:
            var5 = {};
 11:
            var3 = _closure1_slot7;
            var2 = var5.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            if(var2) { _fun0014_ip = 55; continue _fun0014 }
 47:
            var2 = var1.parse;
            _fun0014_ip = 61; continue _fun0014;
 55:
            var2 = var1.parseInlineReply;
 61:
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
 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0015_ip = 11; continue _fun0015 }
 9:
            var5 = {};
 11:
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
 0:
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0016_ip = 11; continue _fun0016 }
 9:
            var1 = {};
 11:
            var4 = _closure1_slot7;
            var3 = var1.formatInline;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            if(var3) { _fun0016_ip = 55; continue _fun0016 }
 47:
            var3 = var2.parseToAST;
            _fun0016_ip = 61; continue _fun0016;
 55:
            var3 = var2.parseInlineReplyToAST;
 61:
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
 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0017_ip = 11; continue _fun0017 }
 9:
            var5 = {};
 11:
            var3 = function renderMessageContentMarkupWithParser(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var3 = arg2;
                    var1 = arguments[2];
                    var6 = undefined;
                    if(!(var1 === var6)) { _fun0018_ip = 14; continue _fun0018 }
 12:
                    var1 = {};
 14:
                    var8 = var3.content;
                    var7 = var3.guildId;
                    var2 = var3.channelId;
                    var9 = var3.messageId;
                    var3 = null;
                    var5 = var8;
                    if(!(var3 != var1)) { _fun0018_ip = 107; continue _fun0018 }
 43:
                    var1 = var1.shouldFilterKeywords;
                    var5 = var8;
                    if(!var1) { _fun0018_ip = 107; continue _fun0018 }
 55:
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
 107:
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
 0:
                            var3 = arg1;
                            var1 = global;
                            var2 = var1.Array;
                            var1 = var2.isArray;
                            var2 = var1.bind(var2)(var3);
                            var1 = var3;
                            if(var2) { _fun0019_ip = 38; continue _fun0019 }
 27:
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
 38:
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