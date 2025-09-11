// app/modules/messages/MessageParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function matchPrefix(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var4 = arg3;
            var6 = arguments[3];
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 30; continue _fun0001 }
 28:
            var6 = null;
 30:
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var3;
            var3 = 0;
            var3 = var5[var3];
            if(!(var3 === var2)) { _fun0001_ip = 142; continue _fun0001 }
 48:
            var3 = var5.substr;
            var2 = var2.length;
            var2 = var3.bind(var5)(var2);
            _closure2_slot3 = var2;
            var3 = var4.sortBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.text;
                var1 = var1.length;
                var1 = -var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.text;
                var2 = _closure2_slot1;
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.indexOf;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = 1;
                var1 = var1 === var2;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.sortBy;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.text;
                    var2 = _closure2_slot3;
                    var1 = 1;
                    if(!(var3 === var2)) { _fun0002_ip = 24; continue _fun0002 }
 22:
                    var1 = 0;
 24:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var4 = var1.text;
                var1 = _closure2_slot0;
                var4 = var1 + var4;
                var1 = new Array(3);
                var1[0] = var4;
                var1[1] = var3;
                var2 = _closure2_slot2;
                var1[2] = var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.first;
            var1 = var1.bind(var2)();
            return var1;
 142:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var15 = function matchAndReturnText(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = {};
        var4 = var3.order;
        var1['order'] = var4;
        var3 = var3.match;
        var1['match'] = var3;
        var2 = function parse(arg1) {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.type;
            var1['type'] = var2;
            var3 = arg1;
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        };
        var1['parse'] = var2;
        return var1;
    };
    var11 = function matchRegexAndReturnText(arg1) {
        var1 = {};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.anyScopeRegex;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1['match'] = var2;
        var2 = function parse(arg1) {
            var1 = {};
            var2 = 'text';
            var1['type'] = var2;
            var3 = arg1;
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        };
        var1['parse'] = var2;
        return var1;
    };
    var1 = function rebuild(arg1, arg2, arg3, arg4) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = arg4;
        var _closure2_slot2 = var2;
        var2 = '';
        var _closure2_slot3 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var14 = _closure2_slot0;
                var13 = _closure2_slot2;
                var12 = null;
                if(!(var12 != var13)) { _fun0003_ip = 276; continue _fun0003 }
 23:
                var4 = var1.type;
                var3 = 'customEmoticon';
                if(!(var3 === var4)) { _fun0003_ip = 53; continue _fun0003 }
 38:
                var5 = var1.emoji;
                var4 = undefined;
                var3 = false;
                var3 = var13.bind(var4)(var5, var3);
 53:
                var4 = var1.type;
                var3 = 'emoticon';
                if(!(var3 !== var4)) { _fun0003_ip = 82; continue _fun0003 }
 66:
                var4 = var1.type;
                var3 = 'text';
                if(!(var3 === var4)) { _fun0003_ip = 276; continue _fun0003 }
 82:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var10 = 19;
                var3 = var3[var10];
                var9 = undefined;
                var5 = var4.bind(var9)(var3);
                var4 = var5.translateSurrogatesToInlineEmoji;
                var3 = var1.content;
                var8 = var4.bind(var5)(var3);
                var4 = _closure1_slot21;
                var3 = var4.exec;
                var3 = var3.bind(var4)(var8);
                var6 = 1;
                var5 = 2;
                var4 = '';
                if(!(var12 !== var3)) { _fun0003_ip = 276; continue _fun0003 }
 155:
                var15 = var3[var6];
                if(!(var12 != var15)) { _fun0003_ip = 171; continue _fun0003 }
 163:
                var15 = var3[var6];
                if(!(var4 === var15)) { _fun0003_ip = 205; continue _fun0003 }
 171:
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var10];
                var17 = var16.bind(var9)(var15);
                var16 = var17.getByName;
                var15 = var3[var5];
                var16 = var16.bind(var17)(var15);
                _fun0003_ip = 237; continue _fun0003;
 205:
                var15 = var14.emojiContext;
                var16 = undefined;
                if(!var15) { _fun0003_ip = 237; continue _fun0003 }
 216:
                var18 = var14.emojiContext;
                var17 = var18.getById;
                var15 = var3[var6];
                var16 = var17.bind(var18)(var15);
 237:
                if(!var16) { _fun0003_ip = 257; continue _fun0003 }
 240:
                var15 = var1.isShortcut;
                if(var15) { _fun0003_ip = 251; continue _fun0003 }
 249:
                var15 = false;
 251:
                var15 = var13.bind(var9)(var16, var15);
 257:
                var16 = _closure1_slot21;
                var15 = var16.exec;
                var3 = var15.bind(var16)(var8);
                if(var12 !== var3) { _fun0003_ip = 155; continue _fun0003 }
 276:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0003_ip = 361; continue _fun0003 }
 292:
                var3 = var1.content;
                var4 = var3.constructor;
                var3 = global;
                var3 = var3.Array;
                if(!(var4 === var3)) { _fun0003_ip = 461; continue _fun0003 }
 317:
                var4 = _closure2_slot3;
                var9 = _closure1_slot23;
                var22 = var1.content;
                var21 = _closure2_slot0;
                var20 = _closure2_slot1;
                var19 = _closure2_slot2;
                var23 = undefined;
                var3 = var23[var9](var22, var21, var20, var19, var18);
                var3 = var4 + var3;
                _closure2_slot3 = var3;
                _fun0003_ip = 461; continue _fun0003;
 361:
                var4 = var1.type;
                var3 = 'codeBlock';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 374:
                var3 = 'inlineCode';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 382:
                var3 = 'mention';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 390:
                var3 = 'roleMention';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 398:
                var3 = 'channel';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 406:
                var3 = 'emoji';
                if(!(var3 !== var4)) { _fun0003_ip = 444; continue _fun0003 }
 414:
                var4 = _closure2_slot3;
                var6 = _closure2_slot1;
                var5 = var1.content;
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var4 + var3;
                _closure2_slot3 = var3;
                _fun0003_ip = 461; continue _fun0003;
 444:
                var3 = _closure2_slot3;
                var1 = var1.content;
                var1 = var3 + var1;
                _closure2_slot3 = var1;
 461:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot3;
        return var1;
    };
    var _closure1_slot23 = var1;
    var4 = function parseAndRebuild(arg1, arg2, arg3) {
        var6 = arg2;
        var5 = _closure1_slot23;
        var3 = _closure1_slot20;
        var4 = undefined;
        var2 = arg1;
        var3 = var3.bind(var4)(var2, var6);
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 19;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var9 = var1.translateInlineEmojiToSurrogates;
        var8 = arg3;
        var12 = undefined;
        var11 = var3;
        var10 = var6;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot24 = var4;
    var2 = function createParserState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var6 = undefined;
            var3 = undefined;
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
 18:
            var1 = var4.getGuildId;
            var3 = var1.bind(var4)();
 28:
            var _closure2_slot0 = var3;
            var1 = var5 != var3;
            var11 = null;
            if(!var1) { _fun0004_ip = 58; continue _fun0004 }
 41:
            var7 = _closure1_slot11;
            var1 = var7.getGuild;
            var11 = var1.bind(var7)(var3);
 58:
            var9 = _closure1_slot12;
            var8 = var9.can;
            var7 = _closure1_slot16;
            var7 = var7.MENTION_EVERYONE;
            var7 = var8.bind(var9)(var7, var4);
            var _closure2_slot1 = var7;
            if(!(var5 != var4)) { _fun0004_ip = 108; continue _fun0004 }
 95:
            var7 = var4.isPrivate;
            var7 = var7.bind(var4)();
            if(var7) { _fun0004_ip = 150; continue _fun0004 }
 108:
            if(!(var5 == var3)) { _fun0004_ip = 118; continue _fun0004 }
 112:
            var14 = new Array(0);
            _fun0004_ip = 148; continue _fun0004;
 118:
            var8 = _closure1_slot9;
            var7 = var8.getMembers;
            var9 = var7.bind(var8)(var3);
            var8 = var9.map;
            var7 = function(arg1) {
                var1 = arg1;
                var3 = var1.userId;
                var2 = var1.nick;
                var1 = {};
                var1['userId'] = var3;
                var1['nick'] = var2;
                return var1;
            };
            var14 = var8.bind(var9)(var7);
 148:
            _fun0004_ip = 171; continue _fun0004;
 150:
            var8 = var4.recipients;
            var7 = var8.map;
            var4 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var1['userId'] = var2;
                var2 = null;
                var1['nick'] = var2;
                return var1;
            };
            var14 = var7.bind(var8)(var4);
 171:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 22;
            var7 = var8[var4];
            var10 = var9.bind(var6)(var7);
            var13 = var14.reduce;
            var12 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var5 = var2.userId;
                    var3 = _closure1_slot15;
                    var2 = var3.getUser;
                    var4 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 60; continue _fun0005 }
 35:
                    var3 = var1.push;
                    var2 = {};
                    var2['id'] = var5;
                    var4 = var4.tag;
                    var2['text'] = var4;
                    var2 = var3.bind(var1)(var2);
 60:
                    return var1;
                }
            };
            var7 = new Array(0);
            var7 = var13.bind(var14)(var12, var7);
            var7 = var10.bind(var6)(var7);
            var8 = var8[var4];
            var9 = var9.bind(var6)(var8);
            if(!(var5 == var11)) { _fun0004_ip = 236; continue _fun0004 }
 230:
            var8 = new Array(0);
            _fun0004_ip = 256; continue _fun0004;
 236:
            var13 = _closure1_slot10;
            var12 = var13.getSortedRoles;
            var10 = var11.id;
            var8 = var12.bind(var13)(var10);
 256:
            var10 = var9.bind(var6)(var8);
            var9 = var10.filter;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.mentionable;
                    var1 = _closure2_slot1;
                    if(var1) { _fun0006_ip = 22; continue _fun0006 }
 19:
                    var1 = var2;
 22:
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var8);
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var12 = var9.bind(var10)(var8);
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var4];
            var9 = var9.bind(var6)(var8);
            var10 = _closure1_slot7;
            var8 = var10.getTextChannelNameDisambiguations;
            var8 = var8.bind(var10)(var3);
            var10 = var9.bind(var6)(var8);
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var10 = var9.bind(var10)(var8);
            if(!(var5 == var3)) { _fun0004_ip = 353; continue _fun0004 }
 347:
            var8 = new Array(0);
            _fun0004_ip = 437; continue _fun0004;
 353:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = var13[var4];
            var5 = var5.bind(var6)(var4);
            var9 = _closure1_slot0;
            var4 = 26;
            var4 = var13[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                var2 = _closure1_slot8;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.flatMap;
            var4 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.getChannels;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var3 = var2[var1];
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.channel;
                    var3 = var3.id;
                    var1['id'] = var3;
                    var2 = var2.channel;
                    var2 = var2.name;
                    var1['text'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.value;
            var8 = var4.bind(var5)();
 437:
            var5 = _closure1_slot4;
            var4 = var5.computeAllActiveJoinedThreads;
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var2 = var2.name;
                var1['text'] = var2;
                return var1;
            };
            var9 = var4.bind(var5)(var2);
            var2 = _closure1_slot3;
            var1 = var2.getDisambiguatedEmojiContext;
            var6 = var1.bind(var2)(var3);
            var1 = var6.getEscapedCustomEmoticonNames;
            var3 = var1.bind(var6)();
            var1 = var6.getCustomEmoji;
            var4 = var1.bind(var6)();
            var1 = var6.getCustomEmoticonRegex;
            var5 = var1.bind(var6)();
            var1 = {};
            var2 = true;
            var1['inline'] = var2;
            var1['mentionableRoles'] = var12;
            var1['guild'] = var11;
            var1['users'] = var7;
            var7 = var10.concat;
            var8 = var7.bind(var10)(var8);
            var7 = var8.concat;
            var7 = var7.bind(var8)(var9);
            var1['channels'] = var7;
            var1['emojiContext'] = var6;
            var1['customEmoticonsRegex'] = var5;
            var1['customEmoji'] = var4;
            var1['textExclusions'] = var3;
            var1['disableErrorGuards'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var2;
    var1 = function NOOP(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var12 = var1.Object;
    var10 = var12.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var10 = var8[var5];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var18 = var5.MARKDOWN_SPOILER_REGEXP;
    var17 = var5.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var5 = var5.Permissions;
    var _closure1_slot16 = var5;
    var5 = 13;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.EmojiIntention;
    var _closure1_slot17 = var5;
    var22 = /^<@!?(\d+)>/;
    var21 = /^<@&(\d+)>/;
    var20 = /^<#(\d+)>/;
    var19 = /^<a?:(\w+):(\d+)>/;
    var5 = /(@everyone|@here|@Clyde)\b/;
    var _closure1_slot18 = var5;
    var10 = {};
    var5 = 15;
    var12 = var8[var5];
    var12 = var9.bind(var1)(var12);
    var12 = var12.defaultRules;
    var12 = var12.link;
    var12 = var15.bind(var1)(var12);
    var10['link'] = var12;
    var12 = var8[var5];
    var12 = var9.bind(var1)(var12);
    var12 = var12.defaultRules;
    var12 = var12.autolink;
    var12 = var15.bind(var1)(var12);
    var10['autolink'] = var12;
    var12 = var8[var5];
    var12 = var9.bind(var1)(var12);
    var12 = var12.defaultRules;
    var12 = var12.url;
    var12 = var15.bind(var1)(var12);
    var10['url'] = var12;
    var14 = 16;
    var12 = var8[var14];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RULES;
    var12 = var12.inlineCode;
    var12 = var15.bind(var1)(var12);
    var10['inlineCode'] = var12;
    var12 = var8[var14];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RULES;
    var12 = var12.codeBlock;
    var12 = var15.bind(var1)(var12);
    var10['codeBlock'] = var12;
    var12 = var11.bind(var1)(var22);
    var10['rawUserMention'] = var12;
    var12 = var11.bind(var1)(var21);
    var10['rawRoleMention'] = var12;
    var12 = var11.bind(var1)(var20);
    var10['rawChannelMention'] = var12;
    var11 = var11.bind(var1)(var19);
    var10['rawEmoji'] = var11;
    var11 = {};
    var12 = function match(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var3 = arg2;
            var9 = arg3;
            var2 = var9.split;
            var1 = ' ';
            var2 = var2.bind(var9)(var1);
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            var4 = var1 + var7;
            var2 = /^[^ ]+@[^ ]+\.[^ .]+/;
            var1 = var2.test;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0007_ip = 318; continue _fun0007 }
 67:
            var2 = _closure1_slot22;
            var14 = var3.users;
            var8 = undefined;
            var10 = '@';
            var6 = 'mention';
            var17 = undefined;
            var16 = var10;
            var15 = var7;
            var13 = var6;
            var1 = var17[var2](var16, var15, var14, var13, var12);
            if(var1) { _fun0007_ip = 316; continue _fun0007 }
 111:
            var11 = _closure1_slot22;
            var14 = var3.mentionableRoles;
            var13 = 'roleMention';
            var17 = undefined;
            var16 = var10;
            var15 = var7;
            var2 = var17[var11](var16, var15, var14, var13, var12);
            if(var2) { _fun0007_ip = 314; continue _fun0007 }
 143:
            var4 = _closure1_slot22;
            var12 = var3.users;
            var11 = var12.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.text;
                var3 = var4.split;
                var2 = '#';
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var3 = var3[var2];
                var2 = 'text';
                var1[var2] = var3;
                return var1;
            };
            var14 = var11.bind(var12)(var3);
            var17 = undefined;
            var16 = var10;
            var15 = var7;
            var13 = var6;
            var4 = var17[var4](var16, var15, var14, var13, var12);
            var3 = null;
            if(var4) { _fun0007_ip = 192; continue _fun0007 }
 190:
            return var3;
 192:
            var10 = _closure1_slot18;
            var6 = var10.exec;
            var11 = var6.bind(var10)(var7);
            if(!(var3 != var11)) { _fun0007_ip = 235; continue _fun0007 }
 211:
            var6 = 0;
            var10 = var4[var6];
            var10 = var10.length;
            var6 = var11[var6];
            var6 = var6.length;
            if(!(!(var10 <= var6))) { _fun0007_ip = 312; continue _fun0007 }
 235:
            var6 = '';
            if(!(var6 === var9)) { _fun0007_ip = 308; continue _fun0007 }
 243:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 17;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.SILENT_RE;
            var5 = var6.exec;
            var7 = var5.bind(var6)(var7);
            if(!(var3 != var7)) { _fun0007_ip = 308; continue _fun0007 }
 284:
            var5 = 0;
            var6 = var4[var5];
            var6 = var6.length;
            var5 = var7[var5];
            var5 = var5.length;
            if(!(!(var6 <= var5))) { _fun0007_ip = 310; continue _fun0007 }
 308:
            return var4;
 310:
            return var3;
 312:
            return var3;
 314:
            return var2;
 316:
            return var1;
 318:
            var1 = null;
            return var1;
        }
    };
    var11['match'] = var12;
    var12 = function parse(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var8 = arg1;
            var2 = var8[Symbol.iterator];
            var8 = var2().next;
            var10 = undefined;
            var3 = undefined;
            var4 = undefined;
            var9 = var8().value;
            var11 = var2;
            var11 = var11 === var10;
            var3 = var11;
            if(var11) { _fun0008_ip = 32; continue _fun0008 }
 29:
            var4 = var9;
 32:
            var4 = undefined;
            var9 = var3;
            if(var9) { _fun0008_ip = 60; continue _fun0008 }
 40:
            var9 = var8().value;
            var11 = var2;
            var11 = var11 === var10;
            var3 = var11;
            if(var11) { _fun0008_ip = 60; continue _fun0008 }
 57:
            var4 = var9;
 60:
            var5 = var4;
            var4 = undefined;
            var9 = var3;
            if(var9) { _fun0008_ip = 91; continue _fun0008 }
 71:
            var8 = var8().value;
            var9 = var2;
            var9 = var9 === var10;
            var3 = var9;
            if(var9) { _fun0008_ip = 91; continue _fun0008 }
 88:
            var4 = var8;
 91:
            var7 = var4;
            var4 = var3;
            if(var4) { _fun0008_ip = 103; continue _fun0008 }
 100:
            var2.return();
 103:
            var6 = '@';
            var8 = var7;
            var4 = 'roleMention';
            if(!(var4 === var8)) { _fun0008_ip = 129; continue _fun0008 }
 118:
            var8 = var6;
            var4 = '&';
            var6 = var8 + var4;
 129:
            var4 = {};
            var4['type'] = var7;
            var9 = var6;
            var8 = var5;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = '<';
            var5 = '>';
            var5 = var7.bind(var6)(var9, var8, var5);
            var4['content'] = var5;
            return var4;
 175:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0008_ip = 183; continue _fun0008 }
 180:
            var2.return();
 183:
            throw var1;
        }
    };
    var11['parse'] = var12;
    var10['mention'] = var11;
    var11 = {};
    var12 = function match(arg1, arg2) {
        var1 = arg2;
        var5 = var1.channels;
        var4 = function matchChannelPrefix(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg2;
                var5 = arg3;
                var4 = undefined;
                var3 = undefined;
                if(!(var3 === var3)) { _fun0009_ip = 18; continue _fun0009 }
 16:
                var3 = null;
 18:
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var4;
                var _closure3_slot2 = var4;
                var9 = 0;
                var7 = var6[var9];
                var2 = '#';
                if(!(var7 === var2)) { _fun0009_ip = 287; continue _fun0009 }
 47:
                var7 = 1;
                var8 = var6[var7];
                var14 = '"';
                if(!(var14 === var8)) { _fun0009_ip = 260; continue _fun0009 }
 65:
                var8 = var6.length;
                var11 = 2;
                var8 = var11 < var8;
                var13 = '\\';
                var12 = var11;
                var10 = var12;
                if(!var8) { _fun0009_ip = 132; continue _fun0009 }
 90:
                var8 = var6[var12];
                if(!(var13 === var8)) { _fun0009_ip = 103; continue _fun0009 }
 98:
                var8 = var12 + 1;
                _fun0009_ip = 117; continue _fun0009;
 103:
                var15 = var6[var12];
                var8 = var12;
                var10 = var8;
                if(!(var14 !== var15)) { _fun0009_ip = 132; continue _fun0009 }
 117:
                var12 = var8 + 1;
                var8 = var6.length;
                var10 = var12;
                if(var10 < var8) { _fun0009_ip = 90; continue _fun0009 }
 132:
                var8 = var6.substring;
                var7 = var10 + var7;
                var7 = var8.bind(var6)(var9, var7);
                _closure3_slot1 = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 14;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.unescapeChannelName;
                var7 = var6.substring;
                var7 = var7.bind(var6)(var11, var10);
                var7 = var8.bind(var9)(var7);
                _closure3_slot2 = var7;
                var8 = var5.sortBy;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.text;
                    var1 = var1.length;
                    var1 = -var1;
                    return var1;
                };
                var9 = var8.bind(var5)(var7);
                var8 = var9.filter;
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.text;
                    var1 = _closure3_slot2;
                    var1 = var1 === var2;
                    return var1;
                };
                var8 = var8.bind(var9)(var7);
                var7 = var8.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.id;
                    var4 = _closure3_slot1;
                    var1 = new Array(3);
                    var1[0] = var4;
                    var1[1] = var3;
                    var2 = _closure3_slot0;
                    var1[2] = var2;
                    return var1;
                };
                var7 = var7.bind(var8)(var1);
                var1 = var7.first;
                var1 = var1.bind(var7)();
                return var1;
 260:
                var1 = _closure1_slot22;
                var20 = undefined;
                var19 = var2;
                var18 = var6;
                var17 = var5;
                var16 = var3;
                var1 = var20[var1](var19, var18, var17, var16, var15);
                return var1;
 287:
                var1 = null;
                return var1;
            }
        };
        var3 = undefined;
        var2 = '#';
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var11['match'] = var12;
    var12 = function parse(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 1;
        var5 = var3[var2];
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<#';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var11['parse'] = var12;
    var10['channel'] = var11;
    var11 = {};
    var12 = function match(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var7 = arg3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.ConvertEmoticons;
            var2 = var3.getSetting;
            var2 = var2.bind(var3)();
            if(var2) { _fun0010_ip = 54; continue _fun0010 }
 50:
            var2 = null;
            return var2;
 54:
            var2 = var7.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0010_ip = 96; continue _fun0010 }
 65:
            var6 = /\s$/;
            var2 = var6.test;
            var2 = var2.bind(var6)(var7);
            if(var2) { _fun0010_ip = 96; continue _fun0010 }
 92:
            var2 = null;
            return var2;
 96:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 19;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.EMOJI_SHORTCUT_RE;
            var1 = var2.exec;
            var2 = var1.bind(var2)(var4);
            var5 = null;
            var6 = var5 == var2;
            var1 = null;
            if(var6) { _fun0010_ip = 209; continue _fun0010 }
 144:
            var6 = var2[var3];
            var7 = var6.length;
            var6 = var4.length;
            if(!(var7 !== var6)) { _fun0010_ip = 206; continue _fun0010 }
 162:
            var6 = var2[var3];
            var6 = var6.length;
            var7 = var4[var6];
            var6 = ' ';
            if(!(var6 !== var7)) { _fun0010_ip = 206; continue _fun0010 }
 183:
            var3 = var2[var3];
            var3 = var3.length;
            var4 = var4[var3];
            var3 = '\n';
            var1 = null;
            if(!(var3 === var4)) { _fun0010_ip = 209; continue _fun0010 }
 206:
            var1 = var2;
 209:
            return var1;
        }
    };
    var11['match'] = var12;
    var12 = function parse(arg1) {
        var1 = {'type': 'emoticon', 'content': null, 'isShortcut': true};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 19;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.convertShortcutToName;
        var5 = arg1;
        var2 = 1;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var1['content'] = var2;
        return var1;
    };
    var11['parse'] = var12;
    var10['emoticon'] = var11;
    var11 = {};
    var12 = var8[var14];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RULES;
    var12 = var12.emoji;
    var12 = var12.order;
    var11['order'] = var12;
    var12 = function match(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.EMOJI_NAME_RE;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var11['match'] = var12;
    var12 = function parse(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var5 = var4().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0011_ip = 27; continue _fun0011 }
 24:
            var2 = var5;
 27:
            var6 = undefined;
            if(var3) { _fun0011_ip = 57; continue _fun0011 }
 32:
            var5 = var4().value;
            var4 = var1;
            var4 = var4 === var7;
            var6 = undefined;
            var3 = var4;
            if(var4) { _fun0011_ip = 57; continue _fun0011 }
 51:
            var6 = var5;
            var3 = var4;
 57:
            if(var3) { _fun0011_ip = 63; continue _fun0011 }
 60:
            var1.return();
 63:
            var1 = arg3;
            var1 = var1.customEmoji;
            var4 = global;
            var3 = var4.Object;
            var3 = var3.prototype;
            var5 = var3.hasOwnProperty;
            var3 = var5.call;
            var7 = var3.bind(var5)(var1, var6);
            var5 = null;
            var3 = null;
            if(!var7) { _fun0011_ip = 113; continue _fun0011 }
 109:
            var3 = var1[var6];
 113:
            if(!(var5 == var3)) { _fun0011_ip = 133; continue _fun0011 }
 117:
            var1 = {};
            var6 = 'text';
            var1['type'] = var6;
            var1['content'] = var2;
            _fun0011_ip = 235; continue _fun0011;
 133:
            var2 = {};
            var6 = 'customEmoticon';
            var2['type'] = var6;
            var7 = var3.animated;
            var10 = '';
            var6 = true;
            if(!(var6 === var7)) { _fun0011_ip = 165; continue _fun0011 }
 161:
            var10 = 'a';
 165:
            var9 = var3.originalName;
            if(!(var5 == var9)) { _fun0011_ip = 180; continue _fun0011 }
 175:
            var9 = var3.name;
 180:
            var12 = var3.id;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var17 = '<';
            var5 = ':';
            var11 = '>';
            var16 = var10;
            var15 = var5;
            var14 = var9;
            var13 = var5;
            var4 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
            var2['content'] = var4;
            var2['emoji'] = var3;
            var1 = var2;
 235:
            return var1;
        }
    };
    var11['parse'] = var12;
    var10['emoji'] = var11;
    var11 = {};
    var12 = function match(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg2;
            var5 = var1.customEmoticonsRegex;
            var1 = null;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0012_ip = 34; continue _fun0012 }
 20:
            var4 = var5.exec;
            var3 = arg1;
            var2 = var4.bind(var5)(var3);
 34:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0012_ip = 46; continue _fun0012 }
 43:
            var1 = var2;
 46:
            return var1;
        }
    };
    var11['match'] = var12;
    var12 = function parse(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0013_ip = 27; continue _fun0013 }
 24:
            var2 = var4;
 27:
            var4 = undefined;
            if(var3) { _fun0013_ip = 57; continue _fun0013 }
 32:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var4 = undefined;
            var3 = var5;
            if(var5) { _fun0013_ip = 57; continue _fun0013 }
 51:
            var4 = var6;
            var3 = var5;
 57:
            if(var3) { _fun0013_ip = 63; continue _fun0013 }
 60:
            var1.return();
 63:
            var1 = arg3;
            var3 = var1.emojiContext;
            var1 = var3.getEmoticonByName;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 == var3)) { _fun0013_ip = 107; continue _fun0013 }
 91:
            var1 = {};
            var4 = 'text';
            var1['type'] = var4;
            var1['content'] = var2;
            _fun0013_ip = 198; continue _fun0013;
 107:
            var2 = {};
            var4 = 'customEmoticon';
            var2['type'] = var4;
            var5 = var3.animated;
            var10 = '';
            var4 = true;
            if(!(var4 === var5)) { _fun0013_ip = 139; continue _fun0013 }
 135:
            var10 = 'a';
 139:
            var14 = var3.name;
            var12 = var3.id;
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var17 = '<';
            var5 = ':';
            var11 = '>';
            var16 = var10;
            var15 = var5;
            var13 = var5;
            var4 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
            var2['content'] = var4;
            var2['emoji'] = var3;
            var1 = var2;
 198:
            return var1;
        }
    };
    var11['parse'] = var12;
    var10['customEmoticons'] = var11;
    var11 = {};
    var13 = 20;
    var12 = var8[var13];
    var24 = var9.bind(var1)(var12);
    var25 = var11;
    var12 = copyDataProperties(var25, var24);
    var16 = function match(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.textExclusions;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 === var1)) { _fun0014_ip = 37; continue _fun0014 }
 23:
            var3 = var2.textExclusions;
            var1 = '';
            if(!(var1 === var3)) { _fun0014_ip = 113; continue _fun0014 }
 37:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 20;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var5 = var1.match;
            var1 = null;
            var5 = var1 != var5;
            if(!var5) { _fun0014_ip = 111; continue _fun0014 }
 77:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var5.bind(var6)(var3);
            var5 = var6.match;
            var3 = '';
            var1 = var5.bind(var6)(var4, var2, var3);
 111:
            _fun0014_ip = 166; continue _fun0014;
 113:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.textMarkupPatternWithExclusions;
            var2 = var2.textExclusions;
            var3 = var3.bind(var5)(var2);
            var2 = var3.exec;
            var1 = var2.bind(var3)(var4);
 166:
            return var1;
        }
    };
    var12 = 'match';
    var11[var12] = var16;
    var10['text'] = var11;
    var11 = {};
    var12 = var8[var14];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RULES;
    var12 = var12.inlineCode;
    var12 = var15.bind(var1)(var12);
    var11['inlineCode'] = var12;
    var12 = var8[var14];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RULES;
    var12 = var12.codeBlock;
    var12 = var15.bind(var1)(var12);
    var11['codeBlock'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var22);
    var12['match'] = var15;
    var15 = function parse(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var1 = arg3;
            var10 = var1.isNotification;
            var9 = var1.guild;
            var7 = undefined;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot15;
            var5 = var6.getUser;
            var2 = 1;
            var2 = var3[var2];
            var6 = var5.bind(var6)(var2);
            var2 = null;
            if(!(var2 != var6)) { _fun0015_ip = 470; continue _fun0015 }
 59:
            var11 = _closure1_slot1;
            var5 = _closure1_slot2;
            var8 = 21;
            var5 = var5[var8];
            var12 = var11.bind(var7)(var5);
            var11 = var12.getUserTag;
            var5 = {};
            var15 = 'always';
            var13 = var15;
            if(!var10) { _fun0015_ip = 118; continue _fun0015 }
 97:
            var14 = _closure1_slot14;
            var14 = var14.enabled;
            var13 = var15;
            if(!var14) { _fun0015_ip = 118; continue _fun0015 }
 112:
            var13 = 'never';
 118:
            var5['identifiable'] = var13;
            var5 = var11.bind(var12)(var6, var5);
            if(var10) { _fun0015_ip = 384; continue _fun0015 }
 135:
            var10 = var6.bot;
            if(var10) { _fun0015_ip = 354; continue _fun0015 }
 147:
            var11 = var2 == var9;
            var10 = undefined;
            if(var11) { _fun0015_ip = 161; continue _fun0015 }
 156:
            var10 = var9.id;
 161:
            var10 = var2 != var10;
            var13 = '';
            var11 = var13;
            if(!var10) { _fun0015_ip = 323; continue _fun0015 }
 178:
            var10 = var5.toLowerCase;
            var10 = var10.bind(var5)();
            _closure2_slot0 = var10;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 22;
            var10 = var14[var10];
            var12 = var12.bind(var7)(var10);
            var10 = var12.some;
            var15 = _closure1_slot10;
            var14 = var15.getUnsafeMutableRoles;
            var9 = var9.id;
            var9 = var14.bind(var15)(var9);
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.startsWith;
                var1 = arg1;
                var4 = var1.name;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var12)(var9, var4);
            var4 = var13;
            if(!var9) { _fun0015_ip = 320; continue _fun0015 }
 255:
            var12 = var6.discriminator;
            var9 = global;
            var10 = var9.HermesInternal;
            var10 = var10.concat;
            var14 = var10.bind(var13)(var12);
            var13 = var14.padStart;
            var12 = 4;
            var10 = '0';
            var12 = var13.bind(var14)(var12, var10);
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '#';
            var4 = var10.bind(var9)(var12);
 320:
            var11 = var4;
 323:
            var4 = {};
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '@';
            var9 = var10.bind(var9)(var5, var11);
            var4['content'] = var9;
            return var4;
 354:
            var4 = {};
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '@';
            var9 = var10.bind(var9)(var5);
            var4['content'] = var9;
            return var4;
 384:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var4 = var4.bind(var7)(var1);
            var1 = var4.getGlobalName;
            var6 = var1.bind(var4)(var6);
            var1 = {};
            if(!(var2 == var6)) { _fun0015_ip = 442; continue _fun0015 }
 418:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '@';
            var2 = var4.bind(var2)(var5);
            _fun0015_ip = 464; continue _fun0015;
 442:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '@';
            var2 = var5.bind(var4)(var6);
 464:
            var1['content'] = var2;
            return var1;
 470:
            var1 = {};
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['mention'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var21);
    var12['match'] = var15;
    var15 = function parse(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var1 = arg3;
            var2 = var1.guild;
            var1 = null;
            if(!(var1 != var2)) { _fun0016_ip = 52; continue _fun0016 }
 17:
            var6 = _closure1_slot10;
            var5 = var6.getRole;
            var3 = var2.id;
            var2 = 1;
            var2 = var4[var2];
            var2 = var5.bind(var6)(var3, var2);
            if(!(var1 == var2)) { _fun0016_ip = 66; continue _fun0016 }
 52:
            var1 = {};
            var3 = 0;
            var3 = var4[var3];
            var1['content'] = var3;
            return var1;
 66:
            var1 = {};
            var4 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '@';
            var2 = var3.bind(var2)(var4);
            var1['content'] = var2;
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['roleMention'] = var12;
    var12 = {};
    var15 = var8[var5];
    var21 = var9.bind(var1)(var15);
    var16 = var21.anyScopeRegex;
    var15 = /^<@\$(\d+)>/;
    var15 = var16.bind(var21)(var15);
    var12['match'] = var15;
    var15 = function parse(arg1, arg2, arg3) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var5 = arg1;
            var1 = arg3;
            var1 = var1.guild;
            if(!var1) { _fun0017_ip = 95; continue _fun0017 }
 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var6 = var3.GameMentionsGuildExperiment;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var1 = var1.id;
            var3['guildId'] = var1;
            var1 = 'Message Unparser';
            var3['location'] = var1;
            var1 = {};
            var8 = true;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enabled;
            if(var1) { _fun0017_ip = 109; continue _fun0017 }
 95:
            var1 = {};
            var3 = 0;
            var3 = var5[var3];
            var1['content'] = var3;
            return var1;
 109:
            var4 = _closure1_slot6;
            var3 = var4.getDetectableGame;
            var1 = 1;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 == var3)) { _fun0017_ip = 222; continue _fun0017 }
 137:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.11pdXV;
            var5 = var4.bind(var5)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '@';
            var2 = var4.bind(var2)(var5);
            var1['content'] = var2;
            _fun0017_ip = 258; continue _fun0017;
 222:
            var2 = {};
            var5 = var3.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '@';
            var3 = var4.bind(var3)(var5);
            var2['content'] = var3;
            var1 = var2;
 258:
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['gameMention'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var20);
    var12['match'] = var15;
    var15 = function parse(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var1 = 1;
            var1 = var4[var1];
            var8 = var3.bind(var5)(var1);
            var1 = {};
            var3 = null;
            if(!(var3 != var8)) { _fun0018_ip = 87; continue _fun0018 }
 35:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.computeChannelName;
            var12 = _closure1_slot15;
            var11 = _closure1_slot13;
            var14 = var7;
            var13 = var8;
            var10 = true;
            var9 = true;
            var2 = var14[var6](var13, var12, var11, var10, var9, var8);
            _fun0018_ip = 93; continue _fun0018;
 87:
            var3 = 0;
            var2 = var4[var3];
 93:
            var1['content'] = var2;
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['channel'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var19);
    var12['match'] = var15;
    var15 = function parse(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = arg1;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var2 = var3().value;
            var2 = var1;
            var7 = undefined;
            var2 = var2 === var7;
            var4 = undefined;
            if(var2) { _fun0019_ip = 49; continue _fun0019 }
 24:
            var6 = var3().value;
            var5 = var1;
            var5 = var5 === var7;
            var4 = undefined;
            var2 = var5;
            if(var5) { _fun0019_ip = 49; continue _fun0019 }
 43:
            var4 = var6;
            var2 = var5;
 49:
            var5 = undefined;
            if(var2) { _fun0019_ip = 79; continue _fun0019 }
 54:
            var6 = var3().value;
            var3 = var1;
            var3 = var3 === var7;
            var5 = undefined;
            var2 = var3;
            if(var3) { _fun0019_ip = 79; continue _fun0019 }
 73:
            var5 = var6;
            var2 = var3;
 79:
            if(var2) { _fun0019_ip = 85; continue _fun0019 }
 82:
            var1.return();
 85:
            var1 = arg3;
            var7 = var1.guild;
            var6 = _closure1_slot3;
            var2 = var6.getDisambiguatedEmojiContext;
            var3 = null;
            var1 = null;
            if(!var7) { _fun0019_ip = 118; continue _fun0019 }
 113:
            var1 = var7.id;
 118:
            var2 = var2.bind(var6)(var1);
            var1 = var2.getById;
            var2 = var1.bind(var2)(var5);
            var1 = {};
            if(!(var3 != var2)) { _fun0019_ip = 145; continue _fun0019 }
 140:
            var4 = var2.name;
 145:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var2 = var3.bind(var2)(var4, var2);
            var1['content'] = var2;
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['emoji'] = var12;
    var12 = {};
    var15 = var8[var5];
    var19 = var9.bind(var1)(var15);
    var16 = var19.anyScopeRegex;
    var15 = 25;
    var15 = var8[var15];
    var15 = var7.bind(var1)(var15);
    var15 = var15.soundmojiRawFormatRegex;
    var15 = var16.bind(var19)(var15);
    var12['match'] = var15;
    var15 = function parse(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var3 = arg1;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var2 = var3().value;
            var2 = var1;
            var5 = undefined;
            var2 = var2 === var5;
            var7 = undefined;
            if(var2) { _fun0020_ip = 49; continue _fun0020 }
 24:
            var6 = var3().value;
            var4 = var1;
            var4 = var4 === var5;
            var7 = undefined;
            var2 = var4;
            if(var4) { _fun0020_ip = 49; continue _fun0020 }
 43:
            var7 = var6;
            var2 = var4;
 49:
            var6 = undefined;
            if(var2) { _fun0020_ip = 79; continue _fun0020 }
 54:
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var6 = undefined;
            var2 = var3;
            if(var3) { _fun0020_ip = 79; continue _fun0020 }
 73:
            var6 = var4;
            var2 = var3;
 79:
            if(var2) { _fun0020_ip = 85; continue _fun0020 }
 82:
            var1.return();
 85:
            var1 = {};
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var13 = '<sound:';
            var11 = ':';
            var9 = '>';
            var12 = var7;
            var10 = var6;
            var2 = var13[var5](var12, var11, var10, var9, var8);
            var1['content'] = var2;
            return var1;
        }
    };
    var12['parse'] = var15;
    var11['soundboard'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var18);
    var12['match'] = var15;
    var15 = function parse() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 24;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.F+x38P;
        var3 = var3.bind(var4)(var2);
        var2 = var3.toLowerCase;
        var5 = var2.bind(var3)();
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var12['parse'] = var15;
    var11['spoiler'] = var12;
    var12 = {};
    var15 = var8[var5];
    var16 = var9.bind(var1)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var17);
    var12['match'] = var15;
    var15 = function parse(arg1) {
        var1 = {};
        var3 = arg1;
        var2 = 1;
        var5 = var3[var2];
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<id:';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var12['parse'] = var15;
    var11['staticRouteLink'] = var12;
    var12 = {};
    var14 = var8[var14];
    var14 = var9.bind(var1)(var14);
    var14 = var14.RULES;
    var24 = var14.timestamp;
    var25 = var12;
    var14 = copyDataProperties(var25, var24);
    var15 = function parse(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var8 = 0;
            var7 = copyRestArgs(var8);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.RULES;
            var3 = var1.timestamp;
            var2 = var3.parse;
            var1 = new Array(0);
            var8 = var1;
            var6 = 0;
            var4 = arraySpread(var8, var7, var6);
            var8 = var2;
            var7 = var1;
            var6 = var3;
            var3 = apply(var8, var7, var6);
            var2 = var3.type;
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0021_ip = 102; continue _fun0021 }
 88:
            var1 = {};
            var2 = var3.formatted;
            var1['content'] = var2;
            _fun0021_ip = 116; continue _fun0021;
 102:
            var2 = {};
            var3 = var3.content;
            var2['content'] = var3;
            var1 = var2;
 116:
            return var1;
        }
    };
    var14 = 'parse';
    var12[var14] = var15;
    var11['timestamp'] = var12;
    var12 = {};
    var13 = var8[var13];
    var24 = var9.bind(var1)(var13);
    var25 = var12;
    var13 = copyDataProperties(var25, var24);
    var11['text'] = var12;
    var _closure1_slot19 = var11;
    var13 = new Array(2);
    var13[0] = var10;
    var13[1] = var11;
    var12 = var13.forEach;
    var11 = function(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = function(arg1, arg2) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2 = var2[var1];
            var1 = arg2;
            var2['order'] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var5 = var8[var5];
    var9 = var9.bind(var1)(var5);
    var5 = var9.parserFor;
    var5 = var5.bind(var9)(var10);
    var _closure1_slot20 = var5;
    var5 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = function parse(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var3 = arg1;
            var6 = arguments[2];
            var _closure2_slot0 = var3;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0022_ip = 20; continue _fun0022 }
 18:
            var6 = undefined;
 20:
            var _closure2_slot1 = var5;
            var1 = null;
            if(!(var1 == var6)) { _fun0022_ip = 42; continue _fun0022 }
 30:
            var1 = _closure1_slot25;
            var6 = var1.bind(var5)(var3);
 42:
            var1 = {};
            var3 = arg2;
            var1['content'] = var3;
            var3 = false;
            var1['tts'] = var3;
            var3 = new Array(0);
            var1['invalidEmojis'] = var3;
            var3 = new Array(0);
            var1['validNonShortcutEmojis'] = var3;
            _closure2_slot1 = var1;
            var4 = _closure1_slot24;
            var3 = var1.content;
            var2 = function(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.isEmojiPremiumLocked;
                    var3 = {};
                    var3['emoji'] = var4;
                    var8 = _closure2_slot0;
                    var3['channel'] = var8;
                    var7 = _closure1_slot17;
                    var7 = var7.CHAT;
                    var3['intention'] = var7;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0023_ip = 102; continue _fun0023 }
 74:
                    var3 = arg2;
                    if(var3) { _fun0023_ip = 122; continue _fun0023 }
 80:
                    var3 = _closure2_slot1;
                    var5 = var3.validNonShortcutEmojis;
                    var3 = var5.push;
                    var3 = var3.bind(var5)(var4);
                    _fun0023_ip = 122; continue _fun0023;
 102:
                    var2 = _closure2_slot1;
                    var3 = var2.invalidEmojis;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 122:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var6, var2);
            var1['content'] = var2;
            return var1;
        }
    };
    var5['parse'] = var9;
    var9 = function parsePreprocessor(arg1, arg2) {
        var3 = _closure1_slot25;
        var4 = undefined;
        var2 = arg1;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot20;
        var1 = arg2;
        var1 = var2.bind(var4)(var1, var3);
        return var1;
    };
    var5['parsePreprocessor'] = var9;
    var6 = function unparse(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = arg3;
            var5 = _closure1_slot5;
            var4 = var5.getChannel;
            var3 = arg2;
            var5 = var4.bind(var5)(var3);
            var3 = null;
            var4 = var3 != var5;
            var6 = null;
            if(!var4) { _fun0024_ip = 44; continue _fun0024 }
 34:
            var4 = var5.getGuildId;
            var6 = var4.bind(var5)();
 44:
            var4 = var3 != var6;
            var3 = null;
            if(!var4) { _fun0024_ip = 67; continue _fun0024 }
 53:
            var5 = _closure1_slot11;
            var4 = var5.getGuild;
            var3 = var4.bind(var5)(var6);
 67:
            if(var2) { _fun0024_ip = 120; continue _fun0024 }
 70:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 22;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.omit;
            var5 = _closure1_slot19;
            var4 = ['spoiler', 'timestamp'];
            var7 = var6.bind(var7)(var5, var4);
            _fun0024_ip = 124; continue _fun0024;
 120:
            var7 = _closure1_slot19;
 124:
            if(var2) { _fun0024_ip = 157; continue _fun0024 }
 127:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 19;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.translateSurrogatesToInlineEmoji;
            _fun0024_ip = 161; continue _fun0024;
 157:
            var5 = _closure1_slot26;
 161:
            var4 = {};
            var6 = true;
            var4['inline'] = var6;
            var4['guild'] = var3;
            var4['isNotification'] = var2;
            var3 = _closure1_slot23;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var2 = undefined;
            var6 = var6.bind(var2)(var1);
            var1 = var6.parserFor;
            var6 = var1.bind(var6)(var7);
            var1 = arg1;
            var1 = var6.bind(var2)(var1, var4);
            var1 = var3.bind(var2)(var1, var4, var5);
            return var1;
        }
    };
    var5['unparse'] = var6;
    var6 = 28;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/MessageParser.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['parseAndRebuild'] = var4;
    var3['createParserState'] = var2;
    return var1;
})();