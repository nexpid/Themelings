// app/modules/search_v2/SearchUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getEmbedImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.image;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 21; continue _fun0001 }
 15:
            var1 = var2.thumbnail;
 21:
            if(!(var3 == var1)) { _fun0001_ip = 31; continue _fun0001 }
 25:
            var1 = var2.video;
 31:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function getSearchContextId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot8;
            var4 = var4.GUILD;
            if(!(var4 !== var3)) { _fun0002_ip = 113; continue _fun0002 }
 25:
            var4 = _closure1_slot8;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var3)) { _fun0002_ip = 106; continue _fun0002 }
 39:
            var4 = _closure1_slot8;
            var4 = var4.CHANNEL;
            if(!(var4 !== var3)) { _fun0002_ip = 106; continue _fun0002 }
 53:
            var4 = _closure1_slot8;
            var4 = var4.THREAD;
            if(!(var4 !== var3)) { _fun0002_ip = 106; continue _fun0002 }
 67:
            var4 = _closure1_slot8;
            var4 = var4.DMS;
            if(!(var4 !== var3)) { _fun0002_ip = 99; continue _fun0002 }
 81:
            var2 = _closure1_slot8;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0002_ip = 99; continue _fun0002 }
 95:
            var2 = undefined;
            return var2;
 99:
            var2 = var1.type;
            return var2;
 106:
            var2 = var1.channelId;
            return var2;
 113:
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.SearchTabs;
    var _closure1_slot4 = var9;
    var9 = var6.SearchMediaTypes;
    var _closure1_slot5 = var9;
    var6 = var6.SearchFileTypes;
    var _closure1_slot6 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.MessageFlags;
    var _closure1_slot7 = var9;
    var6 = var6.SearchTypes;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/search_v2/SearchUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getEmbedImage'] = var5;
    var5 = function getMedia(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var2 = 0;
            var _closure2_slot2 = var2;
            var7 = var5.attachments;
            var2 = null;
            if(!(var2 != var7)) { _fun0003_ip = 52; continue _fun0003 }
 35:
            var6 = var7.forEach;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.width;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0004_ip = 28; continue _fun0004 }
 17:
                    var5 = var4.width;
                    var2 = 0;
                    var1 = var5 > var2;
 28:
                    if(!var1) { _fun0004_ip = 40; continue _fun0004 }
 31:
                    var2 = var4.height;
                    var1 = var3 != var2;
 40:
                    if(!var1) { _fun0004_ip = 54; continue _fun0004 }
 43:
                    var3 = var4.height;
                    var2 = 0;
                    var1 = var3 > var2;
 54:
                    if(!var1) { _fun0004_ip = 140; continue _fun0004 }
 57:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = _closure1_slot5;
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
 140:
                    var1 = _closure2_slot2;
                    var1 = var1 + 1;
                    _closure2_slot2 = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3);
 52:
            var6 = var5.embeds;
            if(!(var2 != var6)) { _fun0003_ip = 79; continue _fun0003 }
 62:
            var3 = var6.forEach;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure1_slot9;
                    var1 = undefined;
                    var3 = var2.bind(var1)(var5);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 103; continue _fun0005 }
 23:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var7 = _closure1_slot5;
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
 103:
                    var2 = _closure2_slot2;
                    var2 = var2 + 1;
                    _closure2_slot2 = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
 79:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var8 = var7.bind(var2)(var3);
            var7 = var8.hasFlag;
            var3 = var5.flags;
            var2 = _closure1_slot7;
            var2 = var2.IS_VOICE_MESSAGE;
            var2 = var7.bind(var8)(var3, var2);
            if(!var2) { _fun0003_ip = 198; continue _fun0003 }
 134:
            var3 = var1.push;
            var2 = {};
            var6 = _closure1_slot5;
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
 198:
            return var1;
        }
    };
    var3['getMedia'] = var5;
    var5 = function getFiles(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var4 = 0;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 3;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.hasFlag;
            var5 = var3.flags;
            var4 = _closure1_slot7;
            var4 = var4.IS_VOICE_MESSAGE;
            var4 = var6.bind(var7)(var5, var4);
            var _closure2_slot3 = var4;
            var4 = var3.attachments;
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 108; continue _fun0006 }
 91:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var6 = _closure1_slot6;
                    if(var5) { _fun0007_ip = 36; continue _fun0007 }
 28:
                    var5 = var6.ATTACHMENT;
                    _fun0007_ip = 42; continue _fun0007;
 36:
                    var5 = var6.SOUND;
 42:
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
 108:
            return var1;
        }
    };
    var3['getFiles'] = var5;
    var5 = function getLinks(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var5 = var6.embeds;
            var4 = null;
            if(!(var4 != var5)) { _fun0008_ip = 46; continue _fun0008 }
 29:
            var3 = var5.forEach;
            var2 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure1_slot9;
                    var1 = undefined;
                    var4 = var2.bind(var1)(var5);
                    var2 = var5.url;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0009_ip = 35; continue _fun0009 }
 31:
                    var2 = var3 != var4;
 35:
                    if(!var2) { _fun0009_ip = 103; continue _fun0009 }
 38:
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
 103:
                    return var1;
                }
            };
            var2 = var3.bind(var5)(var2);
 46:
            var2 = var1.length;
            var5 = 0;
            if(!(var5 === var2)) { _fun0008_ip = 108; continue _fun0008 }
 57:
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
 108:
            return var1;
        }
    };
    var3['getLinks'] = var5;
    var3['getSearchContextId'] = var4;
    var4 = function getSearchTabFetchId(arg1, arg2, arg3) {
        var3 = _closure1_slot10;
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
    var3['getSearchTabFetchId'] = var4;
    var4 = function getBackwardCompatibilitySearchId(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot8;
            var4 = var4.GUILD;
            if(!(var4 !== var3)) { _fun0010_ip = 113; continue _fun0010 }
 25:
            var4 = _closure1_slot8;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var3)) { _fun0010_ip = 113; continue _fun0010 }
 39:
            var4 = _closure1_slot8;
            var4 = var4.CHANNEL;
            if(!(var4 !== var3)) { _fun0010_ip = 106; continue _fun0010 }
 53:
            var4 = _closure1_slot8;
            var4 = var4.THREAD;
            if(!(var4 !== var3)) { _fun0010_ip = 106; continue _fun0010 }
 67:
            var4 = _closure1_slot8;
            var4 = var4.DMS;
            if(!(var4 !== var3)) { _fun0010_ip = 99; continue _fun0010 }
 81:
            var2 = _closure1_slot8;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0010_ip = 99; continue _fun0010 }
 95:
            var2 = undefined;
            return var2;
 99:
            var2 = var1.type;
            return var2;
 106:
            var2 = var1.channelId;
            return var2;
 113:
            var1 = var1.guildId;
            return var1;
        }
    };
    var3['getBackwardCompatibilitySearchId'] = var4;
    var4 = function getChannelActiveAgoTimestamp(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
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
            if(!(!(var5 > var2))) { _fun0011_ip = 610; continue _fun0011 }
 75:
            var3 = 2592000;
            if(!(!(var5 > var3))) { _fun0011_ip = 522; continue _fun0011 }
 88:
            var4 = 172800;
            if(!(!(var5 > var4))) { _fun0011_ip = 428; continue _fun0011 }
 101:
            var4 = 86400;
            if(!(!(var5 > var4))) { _fun0011_ip = 369; continue _fun0011 }
 114:
            var4 = 3600;
            if(!(!(var5 > var4))) { _fun0011_ip = 281; continue _fun0011 }
 127:
            var7 = 60;
            if(!(!(var5 > var7))) { _fun0011_ip = 193; continue _fun0011 }
 134:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 5;
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
 193:
            var8 = global;
            var9 = var8.Math;
            var8 = var9.round;
            var7 = var5 / var7;
            var11 = var8.bind(var9)(var7);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 5;
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
 281:
            var7 = global;
            var8 = var7.Math;
            var7 = var8.round;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 5;
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
 369:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 5;
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
 428:
            var4 = global;
            var8 = var4.Math;
            var7 = var8.round;
            var4 = 86400;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 5;
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
 522:
            var4 = global;
            var7 = var4.Math;
            var4 = var7.round;
            var3 = var5 / var3;
            var9 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
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
 610:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.round;
            var2 = var5 / var2;
            var5 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
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
    var3['getChannelActiveAgoTimestamp'] = var4;
    var4 = function getIndexingErrorText(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0012_ip = 227; continue _fun0012 }
 28:
            var2 = _closure1_slot8;
            var2 = var2.DMS;
            if(!(var2 !== var3)) { _fun0012_ip = 166; continue _fun0012 }
 45:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0012_ip = 105; continue _fun0012 }
 59:
            var2 = _closure1_slot8;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0012_ip = 105; continue _fun0012 }
 73:
            var2 = _closure1_slot8;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0012_ip = 105; continue _fun0012 }
 87:
            var2 = _closure1_slot8;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0012_ip = 105; continue _fun0012 }
 101:
            var2 = undefined;
            return var2;
 105:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 166:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 227:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
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
    var3['getIndexingErrorText'] = var4;
    var4 = function isNonEmptyAutocompleteGroup(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0013_ip = 22; continue _fun0013 }
 12:
            var3 = var2.results;
            var1 = var4 != var3;
 22:
            if(!var1) { _fun0013_ip = 42; continue _fun0013 }
 25:
            var2 = var2.results;
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
 42:
            return var1;
        }
    };
    var3['isNonEmptyAutocompleteGroup'] = var4;
    var4 = function getGuildIdFromSearchContext(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot8;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0014_ip = 106; continue _fun0014 }
 25:
            var3 = _closure1_slot8;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0014_ip = 106; continue _fun0014 }
 39:
            var3 = _closure1_slot8;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0014_ip = 57; continue _fun0014 }
 53:
            var3 = null;
            return var3;
 57:
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = var1.channelId;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0014_ip = 92; continue _fun0014 }
 87:
            var3 = var4.guild_id;
 92:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0014_ip = 104; continue _fun0014 }
 101:
            var2 = var3;
 104:
            return var2;
 106:
            var1 = var1.guildId;
            return var1;
        }
    };
    var3['getGuildIdFromSearchContext'] = var4;
    var2 = function getTabTitle(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.RECENT;
            if(!(var2 !== var3)) { _fun0015_ip = 717; continue _fun0015 }
 23:
            var2 = _closure1_slot4;
            var2 = var2.MESSAGES;
            if(!(var2 !== var3)) { _fun0015_ip = 656; continue _fun0015 }
 40:
            var2 = _closure1_slot4;
            var2 = var2.PEOPLE;
            if(!(var2 !== var3)) { _fun0015_ip = 595; continue _fun0015 }
 57:
            var2 = _closure1_slot4;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0015_ip = 534; continue _fun0015 }
 74:
            var2 = _closure1_slot4;
            var2 = var2.PINS;
            if(!(var2 !== var3)) { _fun0015_ip = 473; continue _fun0015 }
 91:
            var2 = _closure1_slot4;
            var2 = var2.LINKS;
            if(!(var2 !== var3)) { _fun0015_ip = 412; continue _fun0015 }
 108:
            var2 = _closure1_slot4;
            var2 = var2.FILES;
            if(!(var2 !== var3)) { _fun0015_ip = 351; continue _fun0015 }
 125:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var3)) { _fun0015_ip = 292; continue _fun0015 }
 142:
            var2 = _closure1_slot4;
            var2 = var2.MEMBERS;
            if(!(var2 !== var3)) { _fun0015_ip = 233; continue _fun0015 }
 156:
            var2 = _closure1_slot4;
            var2 = var2.THREADS;
            if(!(var2 !== var3)) { _fun0015_ip = 174; continue _fun0015 }
 170:
            var2 = undefined;
            return var2;
 174:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 233:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 292:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 351:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 412:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 473:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 534:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 595:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 656:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
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
 717:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
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
    var3['getTabTitle'] = var2;
    return var1;
})();