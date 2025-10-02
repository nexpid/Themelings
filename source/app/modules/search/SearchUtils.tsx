// app/modules/search/SearchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var9 = function getEmbedImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.image;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = var2.thumbnail;
case 36:
            if(!(var3 == var1)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = var2.video;
case 38:
            return var1;
        }
    };
    var _closure1_slot25 = var9;
    var8 = function getSearchContextId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot14;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 39:
            var3 = _closure1_slot14;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = _closure1_slot14;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 43:
            var3 = _closure1_slot14;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 30:
            var3 = _closure1_slot14;
            var3 = var3.DMS;
            if(!(var3 !== var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = _closure1_slot14;
            var3 = var3.FAVORITES;
            if(!(var3 !== var4)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var3 = undefined;
            return var3;
case 46:
            var2 = _closure1_slot20;
            return var2;
case 44:
            var2 = var1.type;
            return var2;
case 41:
            var2 = var1.channelId;
            return var2;
case 40:
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot26 = var8;
    var7 = function isGuildLikeSearchContext(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot14;
            var1 = var1.GUILD;
            var1 = var4 === var1;
            if(var1) { _fun0006_ip = 48; continue _fun0006 }
case 34:
            var5 = var3.type;
            var4 = _closure1_slot14;
            var4 = var4.GUILD_CHANNEL;
            var1 = var5 === var4;
case 48:
            if(var1) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = var3.type;
            var2 = _closure1_slot14;
            var2 = var2.THREAD;
            var1 = var3 === var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot27 = var7;
    var5 = function quoteChannelName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var2 = var5.match;
            var1 = /([\\" ])/g;
            var3 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var5;
            if(!(var2 != var3)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var4 = var5.replaceAll;
            var3 = /([\\"])/g;
            var2 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '\\';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '"';
            var1 = var3.bind(var2)(var4, var2);
case 51:
            return var1;
        }
    };
    var _closure1_slot28 = var5;
    var4 = function tokenizeQuery(arg1) {
        var3 = _closure1_slot22;
        var2 = var3.tokenize;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot29 = var4;
    var1 = global;
    var15 = var1.Object;
    var10 = var15.defineProperty;
    var6 = {};
    var14 = true;
    var6['value'] = var14;
    var1 = '__esModule';
    var1 = var10.bind(var15)(var3, var1, var6);
    var1 = 0;
    var6 = var12[var1];
    var1 = undefined;
    var6 = var13.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var12[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var12[var6];
    var6 = var11.bind(var1)(var6);
    var10 = var6.SearchTabs;
    var _closure1_slot10 = var10;
    var10 = var6.SearchMediaTypes;
    var _closure1_slot11 = var10;
    var6 = var6.SearchFileTypes;
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var12[var6];
    var6 = var11.bind(var1)(var6);
    var10 = var6.MessageFlags;
    var _closure1_slot13 = var10;
    var10 = var6.SearchTypes;
    var _closure1_slot14 = var10;
    var10 = var6.SearchTokenTypes;
    var _closure1_slot15 = var10;
    var15 = var6.SearchPopoutModes;
    var _closure1_slot16 = var15;
    var15 = var6.IS_SEARCH_ANSWER_TOKEN;
    var _closure1_slot17 = var15;
    var15 = var6.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot18 = var15;
    var15 = var6.SearchModes;
    var _closure1_slot19 = var15;
    var6 = var6.FAVORITES;
    var _closure1_slot20 = var6;
    var6 = {};
    var15 = var10.FILTER_BEFORE;
    var6[var15] = var14;
    var15 = var10.FILTER_AFTER;
    var6[var15] = var14;
    var10 = var10.FILTER_ON;
    var6[var10] = var14;
    var _closure1_slot21 = var6;
    var10 = 15;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var13 = var10.prototype;
    var13 = Object.create(var13, {constructor: {value: var10}});
    var19 = var13;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var13;
    var _closure1_slot22 = var10;
    var10 = 21;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/search/SearchUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['getEmbedImage'] = var9;
    var9 = function getMedia(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var2 = 0;
            var _closure2_slot2 = var2;
            var7 = var5.attachments;
            var2 = null;
            if(!(var2 != var7)) { _fun0008_ip = 50; continue _fun0008 }
case 53:
            var6 = var7.forEach;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.width;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0009_ip = 34; continue _fun0009 }
case 54:
                    var5 = var4.width;
                    var2 = 0;
                    var1 = var5 > var2;
case 34:
                    if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 38:
                    var2 = var4.height;
                    var1 = var3 != var2;
case 55:
                    if(!var1) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var3 = var4.height;
                    var2 = 0;
                    var1 = var3 > var2;
case 56:
                    if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = _closure1_slot11;
                    var6 = var6.ATTACHMENT;
                    var1['type'] = var6;
                    var6 = _closure2_slot0;
                    var7 = var6.id;
                    var1['messageId'] = var7;
                    var7 = var6.channel_id;
                    var1['channelId'] = var7;
                    var6 = var6.author;
                    var1['author'] = var6;
                    var5 = _closure2_slot2;
                    var1['mediaIndex'] = var5;
                    var1['attachment'] = var4;
                    var1 = var2.bind(var3)(var1);
case 58:
                    var1 = _closure2_slot2;
                    var1 = var1 + 1;
                    _closure2_slot2 = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3);
case 50:
            var6 = var5.embeds;
            if(!(var2 != var6)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var3 = var6.forEach;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure1_slot25;
                    var1 = undefined;
                    var3 = var2.bind(var1)(var5);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 62; continue _fun0010 }
case 31:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var7 = _closure1_slot11;
                    var7 = var7.EMBED;
                    var2['type'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var7.id;
                    var2['messageId'] = var8;
                    var8 = var7.channel_id;
                    var2['channelId'] = var8;
                    var7 = var7.author;
                    var2['author'] = var7;
                    var6 = _closure2_slot2;
                    var2['mediaIndex'] = var6;
                    var2['embed'] = var5;
                    var2 = var3.bind(var4)(var2);
case 62:
                    var2 = _closure2_slot2;
                    var2 = var2 + 1;
                    _closure2_slot2 = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
case 60:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var8 = var7.bind(var2)(var3);
            var7 = var8.hasFlag;
            var3 = var5.flags;
            var2 = _closure1_slot13;
            var2 = var2.IS_VOICE_MESSAGE;
            var2 = var7.bind(var8)(var3, var2);
            if(!var2) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var3 = var1.push;
            var2 = {};
            var6 = _closure1_slot11;
            var6 = var6.SOUND;
            var2['type'] = var6;
            var6 = var5.id;
            var2['messageId'] = var6;
            var6 = var5.channel_id;
            var2['channelId'] = var6;
            var5 = var5.author;
            var2['author'] = var5;
            var4 = _closure2_slot2;
            var2['mediaIndex'] = var4;
            var2 = var3.bind(var1)(var2);
case 63:
            return var1;
        }
    };
    var3['getMedia'] = var9;
    var9 = function getFiles(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var4 = 0;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 9;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.hasFlag;
            var5 = var3.flags;
            var4 = _closure1_slot13;
            var4 = var4.IS_VOICE_MESSAGE;
            var4 = var6.bind(var7)(var5, var4);
            var _closure2_slot3 = var4;
            var4 = var3.attachments;
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var6 = _closure1_slot12;
                    if(var5) { _fun0012_ip = 67; continue _fun0012 }
case 34:
                    var5 = var6.ATTACHMENT;
                    _fun0012_ip = 68; continue _fun0012;
case 67:
                    var5 = var6.SOUND;
case 68:
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var1['messageId'] = var6;
                    var6 = var5.channel_id;
                    var1['channelId'] = var6;
                    var5 = var5.author;
                    var1['author'] = var5;
                    var5 = _closure2_slot2;
                    var1['mediaIndex'] = var5;
                    var5 = arg1;
                    var1['attachment'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = _closure2_slot2;
                    var1 = var1 + 1;
                    _closure2_slot2 = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 65:
            return var1;
        }
    };
    var3['getFiles'] = var9;
    var9 = function getLinks(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var5 = var6.embeds;
            var4 = null;
            if(!(var4 != var5)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
            var3 = var5.forEach;
            var2 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure1_slot25;
                    var1 = undefined;
                    var4 = var2.bind(var1)(var5);
                    var2 = var5.url;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0014_ip = 53; continue _fun0014 }
case 38:
                    var2 = var3 != var4;
case 53:
                    if(!var2) { _fun0014_ip = 62; continue _fun0014 }
case 71:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.id;
                    var2['messageId'] = var7;
                    var7 = var6.channel_id;
                    var2['channelId'] = var7;
                    var6 = var6.author;
                    var2['author'] = var6;
                    var6 = arg2;
                    var2['mediaIndex'] = var6;
                    var2['embed'] = var5;
                    var2 = var3.bind(var4)(var2);
case 62:
                    return var1;
                }
            };
            var2 = var3.bind(var5)(var2);
case 69:
            var2 = var1.length;
            var5 = 0;
            if(!(var5 === var2)) { _fun0013_ip = 65; continue _fun0013 }
case 4:
            var3 = var1.push;
            var2 = {};
            var7 = var6.id;
            var2['messageId'] = var7;
            var7 = var6.channel_id;
            var2['channelId'] = var7;
            var6 = var6.author;
            var2['author'] = var6;
            var2['mediaIndex'] = var5;
            var2['embed'] = var4;
            var2 = var3.bind(var1)(var2);
case 65:
            return var1;
        }
    };
    var3['getLinks'] = var9;
    var3['getSearchContextId'] = var8;
    var8 = function getSearchTabFetchId(arg1, arg2, arg3) {
        var3 = _closure1_slot26;
        var2 = undefined;
        var1 = arg1;
        var11 = var3.bind(var2)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var12 = '';
        var3 = '-';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var5](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getSearchTabFetchId'] = var8;
    var8 = function getChannelActiveAgoTimestamp(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 10;
            var4 = var7[var2];
            var6 = undefined;
            var4 = var3.bind(var6)(var4);
            var5 = var4.bind(var6)();
            var4 = var5.diff;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = arg1;
            var3 = var3.bind(var6)(var2);
            var2 = 's';
            var5 = var4.bind(var5)(var3, var2);
            var2 = 31536000;
            if(!(!(var5 > var2))) { _fun0015_ip = 72; continue _fun0015 }
case 60:
            var3 = 2592000;
            if(!(!(var5 > var3))) { _fun0015_ip = 73; continue _fun0015 }
case 74:
            var4 = 172800;
            if(!(!(var5 > var4))) { _fun0015_ip = 75; continue _fun0015 }
case 76:
            var4 = 86400;
            if(!(!(var5 > var4))) { _fun0015_ip = 77; continue _fun0015 }
case 78:
            var4 = 3600;
            if(!(!(var5 > var4))) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var7 = 60;
            if(!(!(var5 > var7))) { _fun0015_ip = 81; continue _fun0015 }
case 82:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 11;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.5LdpkZ;
            var8 = var9.bind(var10)(var8);
            return var8;
case 81:
            var8 = global;
            var9 = var8.Math;
            var8 = var9.round;
            var7 = var5 / var7;
            var11 = var8.bind(var9)(var7);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 11;
            var9 = var12[var7];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var12[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.t;
            var8 = var7.CbRfws;
            var7 = {};
            var7['count'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            return var7;
case 79:
            var7 = global;
            var8 = var7.Math;
            var7 = var8.round;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 11;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.WJBWPz;
            var4 = {};
            var4['count'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 77:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 11;
            var7 = var10[var4];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.uNkIhY;
            var4 = var7.bind(var8)(var4);
            return var4;
case 75:
            var4 = global;
            var8 = var4.Math;
            var7 = var8.round;
            var4 = 86400;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 11;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.HNgi9/;
            var4 = {};
            var4['count'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 73:
            var4 = global;
            var7 = var4.Math;
            var4 = var7.round;
            var3 = var5 / var3;
            var9 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 11;
            var7 = var10[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.g2uHTE;
            var3 = {};
            var3['count'] = var9;
            var3 = var7.bind(var8)(var4, var3);
            return var3;
case 72:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.round;
            var2 = var5 / var2;
            var5 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.7th+MT;
            var1 = {};
            var1['count'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getChannelActiveAgoTimestamp'] = var8;
    var8 = function getIndexingErrorText(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot14;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0016_ip = 83; continue _fun0016 }
case 34:
            var2 = _closure1_slot14;
            var2 = var2.DMS;
            if(!(var2 !== var3)) { _fun0016_ip = 84; continue _fun0016 }
case 85:
            var2 = _closure1_slot14;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0016_ip = 44; continue _fun0016 }
case 86:
            var2 = _closure1_slot14;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0016_ip = 44; continue _fun0016 }
case 87:
            var2 = _closure1_slot14;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0016_ip = 44; continue _fun0016 }
case 88:
            var2 = _closure1_slot14;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0016_ip = 44; continue _fun0016 }
case 76:
            var2 = undefined;
            return var2;
case 44:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.AXPbZm;
            var2 = var3.bind(var4)(var2);
            return var2;
case 84:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Br0xJC;
            var2 = var3.bind(var4)(var2);
            return var2;
case 83:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Q0JJjo;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getIndexingErrorText'] = var8;
    var8 = function getGuildIdFromSearchContext(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot14;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0017_ip = 58; continue _fun0017 }
case 39:
            var3 = _closure1_slot14;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0017_ip = 58; continue _fun0017 }
case 42:
            var3 = _closure1_slot14;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0017_ip = 58; continue _fun0017 }
case 43:
            var3 = _closure1_slot14;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0017_ip = 66; continue _fun0017 }
case 30:
            var3 = _closure1_slot14;
            var3 = var3.FAVORITES;
            if(!(var3 !== var4)) { _fun0017_ip = 89; continue _fun0017 }
case 45:
            var3 = null;
            return var3;
case 89:
            var3 = _closure1_slot20;
            return var3;
case 66:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var2 = var1.channelId;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0017_ip = 90; continue _fun0017 }
case 91:
            var3 = var4.guild_id;
case 90:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0017_ip = 92; continue _fun0017 }
case 93:
            var2 = var3;
case 92:
            return var2;
case 58:
            var1 = var1.guildId;
            return var1;
        }
    };
    var3['getGuildIdFromSearchContext'] = var8;
    var3['isGuildLikeSearchContext'] = var7;
    var7 = function getChannelIdFromSearchContext(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot14;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var3)) { _fun0018_ip = 59; continue _fun0018 }
case 39:
            var4 = _closure1_slot14;
            var4 = var4.CHANNEL;
            if(!(var4 !== var3)) { _fun0018_ip = 59; continue _fun0018 }
case 42:
            var2 = _closure1_slot14;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0018_ip = 59; continue _fun0018 }
case 43:
            var2 = null;
            return var2;
case 59:
            var1 = var1.channelId;
            return var1;
        }
    };
    var3['getChannelIdFromSearchContext'] = var7;
    var7 = function getTabTitle(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.RECENT;
            if(!(var2 !== var3)) { _fun0019_ip = 94; continue _fun0019 }
case 31:
            var2 = _closure1_slot10;
            var2 = var2.MESSAGES;
            if(!(var2 !== var3)) { _fun0019_ip = 95; continue _fun0019 }
case 55:
            var2 = _closure1_slot10;
            var2 = var2.PEOPLE;
            if(!(var2 !== var3)) { _fun0019_ip = 96; continue _fun0019 }
case 59:
            var2 = _closure1_slot10;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0019_ip = 97; continue _fun0019 }
case 98:
            var2 = _closure1_slot10;
            var2 = var2.PINS;
            if(!(var2 !== var3)) { _fun0019_ip = 99; continue _fun0019 }
case 66:
            var2 = _closure1_slot10;
            var2 = var2.LINKS;
            if(!(var2 !== var3)) { _fun0019_ip = 100; continue _fun0019 }
case 101:
            var2 = _closure1_slot10;
            var2 = var2.FILES;
            if(!(var2 !== var3)) { _fun0019_ip = 102; continue _fun0019 }
case 103:
            var2 = _closure1_slot10;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var3)) { _fun0019_ip = 104; continue _fun0019 }
case 105:
            var2 = _closure1_slot10;
            var2 = var2.MEMBERS;
            if(!(var2 !== var3)) { _fun0019_ip = 106; continue _fun0019 }
case 107:
            var2 = _closure1_slot10;
            var2 = var2.THREADS;
            if(!(var2 !== var3)) { _fun0019_ip = 108; continue _fun0019 }
case 109:
            var2 = undefined;
            return var2;
case 108:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.B2panJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 106:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.9Oq93t;
            var2 = var3.bind(var4)(var2);
            return var2;
case 104:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.OGiMXF;
            var2 = var3.bind(var4)(var2);
            return var2;
case 102:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.WgVYR0;
            var2 = var3.bind(var4)(var2);
            return var2;
case 100:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DFSvTk;
            var2 = var3.bind(var4)(var2);
            return var2;
case 99:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2./MoGoK;
            var2 = var3.bind(var4)(var2);
            return var2;
case 97:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Aw9+/P;
            var2 = var3.bind(var4)(var2);
            return var2;
case 96:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GFd/Iy;
            var2 = var3.bind(var4)(var2);
            return var2;
case 95:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.dvZAkp;
            var2 = var3.bind(var4)(var2);
            return var2;
case 94:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.tWnHcH;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getTabTitle'] = var7;
    var7 = function searchModeToSearchQueryParams(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot19;
            var2 = var2.MOST_RELEVANT;
            if(!(var2 !== var3)) { _fun0020_ip = 110; continue _fun0020 }
case 29:
            var2 = _closure1_slot19;
            var2 = var2.OLDEST;
            if(!(var2 !== var3)) { _fun0020_ip = 61; continue _fun0020 }
case 111:
            var1 = _closure1_slot19;
            var1 = var1.NEWEST;
            var1 = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            return var1;
case 61:
            var1 = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            return var1;
case 110:
            var1 = {'sort_by': 'relevance', 'sort_order': 'desc'};
            return var1;
        }
    };
    var3['searchModeToSearchQueryParams'] = var7;
    var7 = function searchQueryParamsToSearchMode(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.sort_by;
            var3 = null;
            if(!(var3 != var2)) { _fun0021_ip = 112; continue _fun0021 }
case 37:
            var2 = var1.sort_order;
            if(!(var3 != var2)) { _fun0021_ip = 112; continue _fun0021 }
case 39:
            var3 = var1.sort_by;
            var2 = 'relevance';
            if(!(var2 !== var3)) { _fun0021_ip = 88; continue _fun0021 }
case 113:
            var2 = var1.sort_order;
            var1 = 'asc';
            if(!(var1 !== var2)) { _fun0021_ip = 114; continue _fun0021 }
case 59:
            var1 = _closure1_slot19;
            var1 = var1.NEWEST;
            _fun0021_ip = 89; continue _fun0021;
case 114:
            var2 = _closure1_slot19;
            var1 = var2.OLDEST;
case 89:
            _fun0021_ip = 115; continue _fun0021;
case 88:
            var2 = _closure1_slot19;
            var1 = var2.MOST_RELEVANT;
case 115:
            _fun0021_ip = 116; continue _fun0021;
case 112:
            var2 = _closure1_slot19;
            var1 = var2.NEWEST;
case 116:
            return var1;
        }
    };
    var3['searchQueryParamsToSearchMode'] = var7;
    var7 = function getSearchOptionAnswer(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot15;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var3)) { _fun0022_ip = 117; continue _fun0022 }
case 31:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var3)) { _fun0022_ip = 118; continue _fun0022 }
case 55:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var3)) { _fun0022_ip = 119; continue _fun0022 }
case 59:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var3)) { _fun0022_ip = 120; continue _fun0022 }
case 98:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var3)) { _fun0022_ip = 120; continue _fun0022 }
case 66:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var3)) { _fun0022_ip = 120; continue _fun0022 }
case 101:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var3)) { _fun0022_ip = 121; continue _fun0022 }
case 103:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_FILE_TYPE;
            if(!(var2 !== var3)) { _fun0022_ip = 122; continue _fun0022 }
case 105:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_FILE_NAME;
            if(!(var2 !== var3)) { _fun0022_ip = 123; continue _fun0022 }
case 124:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_PINNED;
            if(!(var2 !== var3)) { _fun0022_ip = 125; continue _fun0022 }
case 126:
            var2 = _closure1_slot15;
            var2 = var2.FILTER_AUTHOR_TYPE;
            if(!(var2 !== var3)) { _fun0022_ip = 127; continue _fun0022 }
case 19:
            var2 = undefined;
            return var2;
case 127:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.qCQzBg;
            var2 = var3.bind(var4)(var2);
            return var2;
case 125:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.UJxL3d;
            var2 = var3.bind(var4)(var2);
            return var2;
case 123:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uAbFDA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 122:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FXcAFR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 121:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GpM+//;
            var2 = var3.bind(var4)(var2);
            return var2;
case 120:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Zbbc1N;
            var2 = var3.bind(var4)(var2);
            return var2;
case 119:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.bhSYbW;
            var2 = var3.bind(var4)(var2);
            return var2;
case 118:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BYvFWl;
            var2 = var3.bind(var4)(var2);
            return var2;
case 117:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.E466pK;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSearchOptionAnswer'] = var7;
    var3['ShowDatePicker'] = var6;
    var6 = function setIncludeNSFW(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = _closure1_slot6;
            var3 = var4.didAgree;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0023_ip = 128; continue _fun0023 }
case 129:
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var3 = null;
            if(!(var3 != var1)) { _fun0023_ip = 60; continue _fun0023 }
case 57:
            var2 = var1.nsfwAllowed;
            var2 = var3 == var2;
            if(var2) { _fun0023_ip = 130; continue _fun0023 }
case 28:
            var2 = var1.nsfwAllowed;
case 130:
            var1 = arg1;
            var1['include_nsfw'] = var2;
case 128:
            var1 = undefined;
            return var1;
case 60:
            var1 = undefined;
            return var1;
        }
    };
    var3['setIncludeNSFW'] = var6;
    var6 = function getSearchQueryFromTokens(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.type;
                    var5 = _closure1_slot18;
                    var1 = var5.test;
                    var1 = var1.bind(var5)(var3);
                    if(var1) { _fun0025_ip = 131; continue _fun0025 }
case 38:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_BEFORE;
                    if(!(var1 !== var3)) { _fun0025_ip = 132; continue _fun0025 }
case 133:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_ON;
                    if(!(var1 !== var3)) { _fun0025_ip = 132; continue _fun0025 }
case 134:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_AFTER;
                    if(!(var1 !== var3)) { _fun0025_ip = 132; continue _fun0025 }
case 135:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var7 = undefined;
                    var1 = var5.bind(var7)(var1);
                    var1 = var1[var3];
                    var6 = null;
                    var8 = var6 != var1;
                    var5 = null;
                    if(!var8) { _fun0025_ip = 103; continue _fun0025 }
case 40:
                    var5 = var1.queryKey;
case 103:
                    if(!(var6 == var5)) { _fun0025_ip = 136; continue _fun0025 }
case 137:
                    var5 = 'content';
case 136:
                    var8 = _closure2_slot0;
                    var8 = var8[var5];
                    if(!(var6 == var8)) { _fun0025_ip = 138; continue _fun0025 }
case 139:
                    var9 = _closure2_slot0;
                    var8 = global;
                    var8 = var8.Set;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {constructor: {value: var8}});
                    var12 = var10;
                    var8 = new var12[var8](var11);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var9[var5] = var8;
case 138:
                    var1 = _closure2_slot0;
                    var5 = var1[var5];
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_USERNAME_FROM;
                    if(!(var1 !== var3)) { _fun0025_ip = 140; continue _fun0025 }
case 141:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_USERNAME_MENTIONS;
                    if(!(var1 !== var3)) { _fun0025_ip = 140; continue _fun0025 }
case 142:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_FILE_TYPE;
                    if(!(var1 !== var3)) { _fun0025_ip = 143; continue _fun0025 }
case 144:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_FILE_NAME;
                    if(!(var1 !== var3)) { _fun0025_ip = 143; continue _fun0025 }
case 145:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_IN;
                    if(!(var1 !== var3)) { _fun0025_ip = 146; continue _fun0025 }
case 147:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_HAS;
                    if(!(var1 !== var3)) { _fun0025_ip = 148; continue _fun0025 }
case 149:
                    var1 = _closure1_slot15;
                    var1 = var1.ANSWER_PINNED;
                    if(!(var1 !== var3)) { _fun0025_ip = 150; continue _fun0025 }
case 151:
                    var3 = var5.add;
                    var1 = var4.getFullMatch;
                    var8 = var1.bind(var4)();
                    var1 = var8.trim;
                    var1 = var1.bind(var8)();
                    var1 = var3.bind(var5)(var1);
                    _fun0025_ip = 131; continue _fun0025;
case 150:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'pinned';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0025_ip = 131; continue _fun0025;
case 148:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'has';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0025_ip = 131; continue _fun0025;
case 146:
                    var3 = _closure1_slot23;
                    var8 = var4.getData;
                    var1 = 'channelIds';
                    var1 = var8.bind(var4)(var1);
                    if(!(var6 == var1)) { _fun0025_ip = 152; continue _fun0025 }
case 153:
                    var1 = new Array(0);
case 152:
                    var6 = var3.bind(var7)(var1);
                    var3 = var6.bind(var7)();
                    var1 = var3.done;
                    if(var1) { _fun0025_ip = 131; continue _fun0025 }
case 154:
                    var8 = var3.value;
                    var1 = var5.add;
                    var1 = var1.bind(var5)(var8);
                    var8 = var6.bind(var7)();
                    var1 = var8.done;
                    var3 = var8;
                    if(var1) { _fun0025_ip = 131; continue _fun0025 }
case 155:
                    _fun0025_ip = 154; continue _fun0025;
case 143:
                    var3 = var5.add;
                    var6 = var4.getMatch;
                    var1 = 1;
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0025_ip = 131; continue _fun0025;
case 140:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'userId';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0025_ip = 131; continue _fun0025;
case 132:
                    var3 = var4.getData;
                    var1 = 'start';
                    var6 = var3.bind(var4)(var1);
                    var3 = var4.getData;
                    var1 = 'end';
                    var5 = var3.bind(var4)(var1);
                    if(!var6) { _fun0025_ip = 156; continue _fun0025 }
case 157:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var1 = var4.fromTimestamp;
                    var1 = var1.bind(var4)(var6);
                    var3['min_id'] = var1;
case 156:
                    var1 = var5;
                    if(!var1) { _fun0025_ip = 117; continue _fun0025 }
case 158:
                    var3 = _closure2_slot0;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.fromTimestamp;
                    var2 = var2.bind(var4)(var5);
                    var3['max_id'] = var2;
                    var1 = var2;
case 117:
                    var1 = undefined;
                    return var1;
case 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var25 = global;
            var3 = var25.Object;
            var2 = var3.entries;
            var6 = var2.bind(var3)(var1);
            var2 = var6.length;
            var4 = 0;
            var2 = var4 < var2;
            var23 = undefined;
            var22 = 2;
            var5 = 1;
            var3 = 0;
            if(!var2) { _fun0024_ip = 159; continue _fun0024 }
case 114:
            var7 = var6[var3];
            var2 = _closure1_slot3;
            var2 = var2.bind(var23)(var7, var22);
            var7 = var2[var4];
            var9 = var2[var5];
            var2 = var25.Set;
            var2 = var9 instanceof var2;
            if(!var2) { _fun0024_ip = 80; continue _fun0024 }
case 160:
            var8 = var25.Array;
            var2 = var8.from;
            var2 = var2.bind(var8)(var9);
            var1[var7] = var2;
case 80:
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0024_ip = 114; continue _fun0024 }
case 159:
            var2 = var1.content;
            if(!var2) { _fun0024_ip = 161; continue _fun0024 }
case 162:
            var2 = delete var1.contents;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 14;
            var2 = var5[var2];
            var5 = var3.bind(var23)(var2);
            var3 = var5.getCurrentConfig;
            var2 = {};
            var6 = 'getSearchQueryFromTokens';
            var2['location'] = var6;
            var21 = var3.bind(var5)(var2);
            var2 = var21.enabled;
            if(var2) { _fun0024_ip = 145; continue _fun0024 }
case 163:
            var5 = var1.content;
            var3 = var5.join;
            var2 = ' ';
            var3 = var3.bind(var5)(var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            var2 = var1.content;
            if(var2) { _fun0024_ip = 161; continue _fun0024 }
case 164:
            var2 = delete var1.content;
            _fun0024_ip = 161; continue _fun0024;
case 145:
            var2 = new Array(0);
            var3 = var21.brackets;
            if(var3) { _fun0024_ip = 165; continue _fun0024 }
case 166:
            var3 = var21.quotes;
            if(var3) { _fun0024_ip = 167; continue _fun0024 }
case 79:
            var20 = /((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g;
            _fun0024_ip = 168; continue _fun0024;
case 167:
            var20 = /("((?:[\0-!#-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)"|(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
case 168:
            _fun0024_ip = 169; continue _fun0024;
case 165:
            var20 = /(\[((?:[\0-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\]|(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
case 169:
            var5 = _closure1_slot23;
            var3 = var1.content;
            var19 = var5.bind(var23)(var3);
            var5 = var19.bind(var23)();
            var3 = var5.done;
            var18 = '';
            var17 = '|';
            var16 = '://';
            var15 = '"';
            var14 = ']';
            var13 = '[';
            var12 = null;
            var11 = var5;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            if(var3) { _fun0024_ip = 170; continue _fun0024 }
case 146:
            var26 = var11.value;
            var3 = var26.match;
            var30 = var3.bind(var26)(var20);
            var29 = var8;
            var28 = var7;
            var27 = var6;
            var26 = var5;
            if(!(var12 != var30)) { _fun0024_ip = 171; continue _fun0024 }
case 121:
            var3 = _closure1_slot23;
            var31 = var3.bind(var23)(var30);
            var32 = var31.bind(var23)();
            var3 = var32.done;
            var30 = var32;
            var10 = var30;
            var9 = var31;
            var29 = var8;
            var28 = var7;
            var27 = var6;
            var26 = var5;
            if(var3) { _fun0024_ip = 171; continue _fun0024 }
case 155:
            var35 = var30.value;
            var34 = var21.brackets;
            if(!var34) { _fun0024_ip = 172; continue _fun0024 }
case 173:
            var3 = var35.startsWith;
            var34 = var3.bind(var35)(var13);
case 172:
            if(!var34) { _fun0024_ip = 174; continue _fun0024 }
case 175:
            var3 = var35.endsWith;
            var34 = var3.bind(var35)(var14);
case 174:
            var33 = var21.quotes;
            if(!var33) { _fun0024_ip = 176; continue _fun0024 }
case 177:
            var3 = var35.startsWith;
            var33 = var3.bind(var35)(var15);
case 176:
            if(!var33) { _fun0024_ip = 178; continue _fun0024 }
case 179:
            var3 = var35.endsWith;
            var33 = var3.bind(var35)(var15);
case 178:
            var3 = var35.includes;
            var32 = var3.bind(var35)(var16);
            if(var34) { _fun0024_ip = 180; continue _fun0024 }
case 181:
            if(var33) { _fun0024_ip = 180; continue _fun0024 }
case 182:
            var37 = var22;
            if(!var32) { _fun0024_ip = 183; continue _fun0024 }
case 180:
            var37 = 0;
case 183:
            var36 = var2.push;
            var3 = var25.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var18)(var37, var17, var35);
            var3 = var36.bind(var2)(var3);
            var36 = var31.bind(var23)();
            var3 = var36.done;
            var30 = var36;
            var10 = var30;
            var9 = var31;
            var29 = var35;
            var28 = var34;
            var27 = var33;
            var26 = var32;
            if(!var3) { _fun0024_ip = 155; continue _fun0024 }
case 171:
            var30 = var19.bind(var23)();
            var3 = var30.done;
            var8 = var29;
            var7 = var28;
            var6 = var27;
            var5 = var26;
            var11 = var30;
            if(!var3) { _fun0024_ip = 146; continue _fun0024 }
case 170:
            var3 = var2.length;
            if(!(var3 > var4)) { _fun0024_ip = 184; continue _fun0024 }
case 185:
            var1['contents'] = var2;
case 184:
            var2 = delete var1.content;
case 161:
            return var1;
        }
    };
    var3['getSearchQueryFromTokens'] = var6;
    var6 = function getQueryContentString(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 == var5;
            var1 = undefined;
            if(var2) { _fun0026_ip = 29; continue _fun0026 }
case 32:
            var1 = var5.contents;
case 29:
            if(!(var3 != var1)) { _fun0026_ip = 113; continue _fun0026 }
case 129:
            var1 = var5.contents;
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0026_ip = 59; continue _fun0026 }
case 113:
            var2 = var3 == var5;
            var1 = undefined;
            if(var2) { _fun0026_ip = 4; continue _fun0026 }
case 50:
            var1 = var5.content;
case 4:
            _fun0026_ip = 116; continue _fun0026;
case 59:
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0026_ip = 41; continue _fun0026 }
case 186:
            var5 = var5.contents;
            var3 = var3 == var5;
            var2 = undefined;
            if(var3) { _fun0026_ip = 41; continue _fun0026 }
case 45:
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.split;
                var3 = '|';
                var4 = var1.bind(var2)(var3);
                var2 = var4.slice;
                var1 = 1;
                var2 = var2.bind(var4)(var1);
                var1 = var2.join;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.join;
            var3 = ' ';
            var2 = var4.bind(var5)(var3);
case 41:
            var1 = var2;
case 116:
            return var1;
        }
    };
    var3['getQueryContentString'] = var6;
    var6 = function getNonTokenQuery(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = arg1;
                var4 = var3.type;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.NON_TOKEN_TYPE;
                var1 = '';
                if(!(var4 === var2)) { _fun0027_ip = 59; continue _fun0027 }
case 48:
                var2 = var3.getFullMatch;
                var1 = var2.bind(var3)();
case 59:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = ' ';
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getNonTokenQuery'] = var6;
    var6 = function getSelectionScope(arg1, arg2, arg3) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var3;
            var2 = var6.find;
            var1 = function(arg1, arg2) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = _closure2_slot1;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0029_ip = 7; continue _fun0029 }
case 187:
                    var3 = _closure2_slot1;
                    var2 = var1.end;
                    if(!(var3 <= var2)) { _fun0029_ip = 7; continue _fun0029 }
case 53:
                    var3 = _closure2_slot2;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0029_ip = 7; continue _fun0029 }
case 133:
                    var3 = _closure2_slot2;
                    var2 = var1.end;
                    if(!(!(var3 <= var2))) { _fun0029_ip = 49; continue _fun0029 }
case 7:
                    var _closure2_slot3 = var1;
                    var1 = false;
                    _fun0029_ip = 188; continue _fun0029;
case 49:
                    var5 = _closure2_slot0;
                    var3 = 1;
                    var2 = var6 + var3;
                    var5 = var5[var2];
                    var2 = null;
                    var5 = var2 != var5;
                    var1 = true;
                    if(!var5) { _fun0029_ip = 188; continue _fun0029 }
case 47:
                    var5 = _closure2_slot0;
                    var3 = var6 + var3;
                    var3 = var5[var3];
                    var _closure2_slot4 = var3;
                    var1 = true;
case 188:
                    return var1;
                }
            };
            var6 = var2.bind(var6)(var1);
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0028_ip = 74; continue _fun0028 }
case 133:
            var2 = {};
            var7 = _closure2_slot3;
            var2['previousToken'] = var7;
            var2['currentToken'] = var6;
            var5 = _closure2_slot4;
            var2['nextToken'] = var5;
            var2['focusOffset'] = var4;
            var2['anchorOffset'] = var3;
            var1 = var2;
case 74:
            return var1;
        }
    };
    var3['getSelectionScope'] = var6;
    var6 = function getAutocompleteMode(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 == var1)) { _fun0030_ip = 189; continue _fun0030 }
case 190:
            var1 = {};
case 189:
            var3 = var1.currentToken;
            var2 = var1.nextToken;
            var6 = var1.previousToken;
            var1 = arg2;
            var4 = var1.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0030_ip = 191; continue _fun0030 }
case 2:
            if(!(var7 != var3)) { _fun0030_ip = 192; continue _fun0030 }
case 43:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 12;
            var1 = var1[var9];
            var5 = undefined;
            var10 = var8.bind(var5)(var1);
            var8 = var10.isSearchFilterTokenType;
            var1 = var3.type;
            var1 = var8.bind(var10)(var1);
            if(!var1) { _fun0030_ip = 193; continue _fun0030 }
case 194:
            if(!(var7 != var2)) { _fun0030_ip = 122; continue _fun0030 }
case 195:
            var8 = var2.type;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 15;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 !== var1)) { _fun0030_ip = 122; continue _fun0030 }
case 105:
            if(!(var7 != var2)) { _fun0030_ip = 193; continue _fun0030 }
case 196:
            var10 = _closure1_slot17;
            var8 = var10.test;
            var1 = var2.type;
            var1 = var8.bind(var10)(var1);
            if(var1) { _fun0030_ip = 193; continue _fun0030 }
case 197:
            var1 = {};
            var8 = _closure1_slot16;
            var8 = var8.FILTER;
            var1['type'] = var8;
            var8 = var3.type;
            var1['filter'] = var8;
            var1['token'] = var7;
            return var1;
case 193:
            var8 = var3.type;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 15;
            var1 = var1[var10];
            var1 = var11.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 === var1)) { _fun0030_ip = 198; continue _fun0030 }
case 199:
            if(!(var7 != var6)) { _fun0030_ip = 198; continue _fun0030 }
case 200:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var8.bind(var5)(var1);
            var8 = var9.isSearchFilterTokenType;
            var1 = var6.type;
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0030_ip = 201; continue _fun0030 }
case 198:
            var8 = var3.type;
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            var5 = undefined;
            if(!(var8 === var1)) { _fun0030_ip = 168; continue _fun0030 }
case 202:
            var5 = var3;
case 168:
            var1 = {};
            var8 = _closure1_slot16;
            var8 = var8.FILTER_ALL;
            var1['type'] = var8;
            var1['filter'] = var7;
            var1['token'] = var5;
            _fun0030_ip = 203; continue _fun0030;
case 201:
            var5 = {};
            var7 = _closure1_slot16;
            var7 = var7.FILTER;
            var5['type'] = var7;
            var6 = var6.type;
            var5['filter'] = var6;
            var5['token'] = var3;
            var1 = var5;
case 203:
            return var1;
case 122:
            var1 = {};
            var4 = _closure1_slot16;
            var4 = var4.FILTER;
            var1['type'] = var4;
            var3 = var3.type;
            var1['filter'] = var3;
            var1['token'] = var2;
            return var1;
case 192:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot16;
            var2 = var2.FILTER_ALL;
            var1['type'] = var2;
            return var1;
case 191:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot16;
            var2 = var2.EMPTY;
            var1['type'] = var2;
            return var1;
        }
    };
    var3['getAutocompleteMode'] = var6;
    var3['quoteChannelName'] = var5;
    var5 = function getFlattenedAutocompleteResults(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 16;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var2 = null;
                if(!(var2 != var5)) { _fun0031_ip = 204; continue _fun0031 }
case 37:
                var2 = var5.results;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0031_ip = 204; continue _fun0031 }
case 205:
                var2 = var5.group;
                var _closure3_slot1 = var2;
                var4 = _closure2_slot1;
                var3 = var4.concat;
                var6 = var5.results;
                var5 = var6.map;
                var1 = function(arg1) {
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.text;
                        var1 = var3.channel;
                        var5 = null;
                        var7 = var4;
                        if(!(var5 != var1)) { _fun0032_ip = 67; continue _fun0032 }
case 187:
                        var2 = _closure1_slot28;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var4);
case 67:
                        var1 = _closure2_slot0;
                        var6 = var1.type;
                        var1 = _closure1_slot16;
                        var1 = var1.FILTER_ALL;
                        var2 = var7;
                        if(!(var6 === var1)) { _fun0032_ip = 206; continue _fun0032 }
case 128:
                        var6 = var3.group;
                        if(!(var5 == var6)) { _fun0032_ip = 74; continue _fun0032 }
case 45:
                        var6 = _closure3_slot1;
case 74:
                        _closure3_slot1 = var6;
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var6 = undefined;
                        var4 = var8.bind(var6)(var4);
                        var1 = _closure3_slot1;
                        var1 = var4[var1];
                        var8 = var5 == var1;
                        var4 = undefined;
                        if(var8) { _fun0032_ip = 159; continue _fun0032 }
case 82:
                        var4 = var1.key;
case 159:
                        var4 = var5 != var4;
                        if(!var4) { _fun0032_ip = 197; continue _fun0032 }
case 196:
                        var5 = var5 == var1;
                        var6 = undefined;
                        if(var5) { _fun0032_ip = 207; continue _fun0032 }
case 208:
                        var6 = var1.key;
case 207:
                        var5 = '';
                        var4 = var5 !== var6;
case 197:
                        var2 = var7;
                        if(!var4) { _fun0032_ip = 206; continue _fun0032 }
case 108:
                        var6 = var1.key;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '';
                        var1 = ' ';
                        var2 = var5.bind(var4)(var6, var1, var7);
case 206:
                        var1 = {};
                        var1['result'] = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.group;
                        var1['group'] = var3;
                        var1['resultText'] = var2;
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                _closure2_slot1 = var1;
case 204:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var3 = _closure2_slot1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.resultText;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getFlattenedAutocompleteResults'] = var5;
    var5 = function getTotalResults(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var4 = null;
                var1 = var3;
                if(!(var4 != var2)) { _fun0033_ip = 3; continue _fun0033 }
case 37:
                var2 = var2.results;
                var2 = var2.length;
                var1 = var2 + var3;
case 3:
                return var1;
            }
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getTotalResults'] = var5;
    var5 = function getQueryFromTokens(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var4 = '';
            var1 = var4;
            if(var2) { _fun0034_ip = 2; continue _fun0034 }
case 209:
            var3 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getFullMatch;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.join;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var3['getQueryFromTokens'] = var5;
    var5 = function queryHasFilter(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot29;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['queryHasFilter'] = var5;
    var3['tokenizeQuery'] = var4;
    var4 = function clearTokenCache() {
        var2 = _closure1_slot22;
        var1 = var2.clearCache;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['clearTokenCache'] = var4;
    var4 = function showDatePicker(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0035_ip = 31; continue _fun0035 }
case 210:
            var2 = _closure1_slot21;
            var1 = var2[var3];
case 31:
            return var1;
        }
    };
    var3['showDatePicker'] = var4;
    var4 = function filterHasAnswer(arg1, arg2) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var3 = arg2;
            var5 = _closure1_slot18;
            var2 = var5.test;
            var1 = arg1;
            var1 = var1.type;
            var5 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var2 == var3;
            if(!var1) { _fun0036_ip = 55; continue _fun0036 }
case 52:
            var1 = var5;
case 55:
            if(var1) { _fun0036_ip = 45; continue _fun0036 }
case 57:
            var2 = var2 != var3;
            if(!var2) { _fun0036_ip = 43; continue _fun0036 }
case 50:
            var2 = var5;
case 43:
            if(!var2) { _fun0036_ip = 211; continue _fun0036 }
case 28:
            var5 = _closure1_slot17;
            var4 = var5.test;
            var3 = var3.type;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 211:
            var1 = var2;
case 45:
            var1 = !var1;
            return var1;
        }
    };
    var3['filterHasAnswer'] = var4;
    var4 = function refreshSearchTokens() {
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 12;
        var5 = var4[var2];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.rebuildSearchTokenConfigs;
        var5 = var5.bind(var6)();
        var6 = _closure1_slot22;
        var5 = var6.reset;
        var5 = var5.bind(var6)();
        var3 = _closure1_slot1;
        var5 = 16;
        var5 = var4[var5];
        var5 = var3.bind(var1)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var6 = var5.bind(var1)(var2);
        var5 = var6.forOwn;
        var2 = function(arg1, arg2) {
            var3 = _closure1_slot22;
            var2 = var3.addRule;
            var1 = {};
            var4 = arg2;
            var1['type'] = var4;
            var5 = arg1;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var5.bind(var6)(var2);
        var2 = 17;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.markSearchTokensRefreshed;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['refreshSearchTokens'] = var4;
    var4 = function isChannelFilterSupported(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var2 = _closure1_slot27;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            if(var2) { _fun0037_ip = 212; continue _fun0037 }
case 29:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var2 = {};
            var6 = 'isChannelFilterSupported';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var4 = var1.type;
            var1 = _closure1_slot14;
            var1 = var1.DMS;
            var1 = var4 === var1;
            if(!var1) { _fun0037_ip = 11; continue _fun0037 }
case 213:
            var3 = _closure1_slot8;
            var3 = var3.hidePersonalInformation;
            var1 = !var3;
case 11:
            if(!var1) { _fun0037_ip = 160; continue _fun0037 }
case 46:
            if(var2) { _fun0037_ip = 195; continue _fun0037 }
case 112:
            var2 = true;
case 195:
            var1 = var2;
case 160:
            return var1;
case 212:
            var1 = true;
            return var1;
        }
    };
    var3['isChannelFilterSupported'] = var4;
    var4 = function getChannelDisplayName(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var7 = arg1;
            var4 = var7.name;
            var1 = var7.isGroupDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0038_ip = 214; continue _fun0038 }
case 129:
            var1 = var7.isDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0038_ip = 90; continue _fun0038 }
case 52:
            var1 = var7.isThread;
            var1 = var1.bind(var7)();
            var1 = !var1;
            var5 = _closure1_slot5;
            var3 = var5.getTextChannelNameDisambiguations;
            var2 = var7.getGuildId;
            var2 = var2.bind(var7)();
            var3 = var3.bind(var5)(var2);
            var2 = var7.id;
            var3 = var3[var2];
            var6 = null;
            var2 = var6 == var3;
            var5 = undefined;
            if(var2) { _fun0038_ip = 62; continue _fun0038 }
case 215:
            var5 = var3.name;
case 62:
            var2 = var1;
            if(!(var6 != var5)) { _fun0038_ip = 216; continue _fun0038 }
case 188:
            var4 = var3.name;
            var2 = var1;
            _fun0038_ip = 216; continue _fun0038;
case 90:
            var1 = var7.getRecipientId;
            var6 = var1.bind(var7)();
            var5 = _closure1_slot9;
            var3 = var5.getUser;
            var5 = var3.bind(var5)(var6);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var1 = var3.getUserTag;
            var6 = var1.bind(var3)(var5);
            var1 = null;
            var3 = var1 == var6;
            var2 = false;
            var4 = var6;
            if(!var3) { _fun0038_ip = 216; continue _fun0038 }
case 217:
            return var1;
case 214:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 19;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.computeChannelName;
            var3 = _closure1_slot9;
            var1 = _closure1_slot7;
            var4 = var5.bind(var6)(var7, var3, var1);
            var2 = false;
case 216:
            var3 = _closure1_slot28;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var1 = var4;
            if(!var2) { _fun0038_ip = 218; continue _fun0038 }
case 219:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '#';
            var1 = var3.bind(var2)(var4);
case 218:
            return var1;
        }
    };
    var3['getChannelDisplayName'] = var4;
    var4 = function getChannelPlaceholderName(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isGroupDM;
            var2 = var1.bind(var5)();
            if(var2) { _fun0039_ip = 107; continue _fun0039 }
case 187:
            var2 = var5.isDM;
            var2 = var2.bind(var5)();
            if(var2) { _fun0039_ip = 11; continue _fun0039 }
case 53:
            var4 = _closure1_slot5;
            var3 = var4.getTextChannelNameDisambiguations;
            var2 = var5.getGuildId;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var5.id;
            var4 = var3[var2];
            var3 = null;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0039_ip = 89; continue _fun0039 }
case 220:
            var2 = var4.name;
case 89:
            if(!(var3 == var2)) { _fun0039_ip = 221; continue _fun0039 }
case 222:
            var2 = var5.name;
case 221:
            return var2;
case 11:
            var2 = var5.getRecipientId;
            var4 = var2.bind(var5)();
            var3 = _closure1_slot9;
            var2 = var3.getUser;
            var4 = var2.bind(var3)(var4);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 20;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.getUserTag;
            var2 = var2.bind(var3)(var4);
            return var2;
case 107:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.computeChannelName;
            var2 = _closure1_slot9;
            var1 = _closure1_slot7;
            var1 = var3.bind(var4)(var5, var2, var1);
            return var1;
        }
    };
    var3['getChannelPlaceholderName'] = var4;
    var2 = function isFavoriteSearchEnabled() {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0040_ip = 52; continue _fun0040 }
case 223:
            var3 = var4.isStaff;
            var2 = var3.bind(var4)();
case 52:
            var1 = var1 != var2;
            if(!var1) { _fun0040_ip = 48; continue _fun0040 }
case 69:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var3['isFavoriteSearchEnabled'] = var2;
    return var1;
})();