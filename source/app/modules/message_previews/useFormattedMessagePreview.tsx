// app/modules/message_previews/useFormattedMessagePreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function isMessageContentPreviewable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 4;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.DEFAULT;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANGELOG;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.REPLY;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHAT_INPUT_COMMAND;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CONTEXT_MENU_COMMAND;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.POLL_RESULT;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.MessageTypes;
            var1 = var1.AUTO_MODERATION_ACTION;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var1 = false;
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var2 = function formatMessagePreview(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var3 = var5.isBlocked;
            var1 = var5.isIgnored;
            var4 = var5.authorNick;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = _closure1_slot7;
            var1 = undefined;
            var3 = var3.bind(var1)(var8);
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = function formatMessageContentPreview(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.embeds;
                    var3 = var1.length;
                    var1 = 1;
                    if(!(var1 === var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var1 = var2.embeds;
                    var3 = 0;
                    var1 = var1[var3];
                    var4 = var1.url;
                    var1 = var2.content;
                    if(!(var4 === var1)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                    var1 = var2.embeds;
                    var1 = var1[var3];
                    var4 = var1.rawTitle;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0003_ip = 19; continue _fun0003 }
case 16:
                    var1 = var2.content;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = var2.content;
                    var1 = '';
                    if(!(var1 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 20:
                    var6 = var2.hasFlag;
                    var1 = _closure1_slot6;
                    var1 = var1.IS_VOICE_MESSAGE;
                    var1 = var6.bind(var2)(var1);
                    if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var1 = var2.attachments;
                    var1 = var1.length;
                    var8 = 0;
                    if(!(!(var1 > var8))) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = var2.embeds;
                    var1 = var1.length;
                    if(!(!(var1 > var8))) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var1 = var2.stickerItems;
                    var1 = var1.length;
                    if(!(!(var1 > var8))) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var1 = var2.isPoll;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var12 = undefined;
                    var1 = var6.bind(var12)(var1);
                    var1 = var1.bind(var12)(var2);
                    if(var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    return var12;
case 33:
                    var1 = {};
                    var6 = 'text';
                    var1['type'] = var6;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 8;
                    var9 = var13[var6];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var6 = var13[var6];
                    var6 = var11.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6["9ddYKt"];
                    var6 = var9.bind(var10)(var6);
                    var1['text'] = var6;
                    return var1;
case 31:
                    var1 = {};
                    var6 = 'text';
                    var1['type'] = var6;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 8;
                    var10 = var13[var6];
                    var12 = undefined;
                    var10 = var9.bind(var12)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var6 = var13[var6];
                    var6 = var9.bind(var12)(var6);
                    var6 = var6.t;
                    var9 = var6.ImizdM;
                    var6 = {};
                    var13 = var2.poll;
                    var14 = var5 == var13;
                    if(var14) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var13 = var13.question;
                    var12 = var13.text;
case 35:
                    var6['question'] = var12;
                    var6 = var10.bind(var11)(var9, var6);
                    var1['text'] = var6;
                    return var1;
case 29:
                    var1 = {'type': 'text', 'text': null, 'trailingIcon': 'sticker'};
                    var6 = var2.stickerItems;
                    var6 = var6[var8];
                    var6 = var6.name;
                    var1['text'] = var6;
                    return var1;
case 27:
                    var9 = var2.embeds;
                    var6 = var9.every;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.url;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isImageUrl;
                            var2 = var2.url;
                            var1 = var3.bind(var4)(var2);
case 37:
                            return var1;
                        }
                    };
                    var9 = var6.bind(var9)(var1);
                    var6 = !var9;
                    if(!var6) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var11 = var2.embeds;
                    var10 = var11.every;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.url;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isVideoUrl;
                            var2 = var2.url;
                            var1 = var3.bind(var4)(var2);
case 37:
                            return var1;
                        }
                    };
                    var6 = var10.bind(var11)(var1);
case 39:
                    var1 = !var9;
                    if(!var1) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var1 = !var6;
case 41:
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var12 = var2.embeds;
                    var11 = var12.every;
                    var10 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.url;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isAudioFile;
                            var2 = var2.url;
                            var1 = var3.bind(var4)(var2);
case 37:
                            return var1;
                        }
                    };
                    var1 = var11.bind(var12)(var10);
case 43:
                    if(var9) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    if(var6) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    if(var1) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var1 = var2.embeds;
                    var1 = var1.length;
                    if(!(var1 > var8)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var1 = var2.embeds;
                    var1 = var1[var8];
                    var1 = var1.rawTitle;
                    if(!(var5 == var1)) { _fun0003_ip = 53; continue _fun0003 }
case 51:
                    var1 = var2.embeds;
                    var1 = var1.length;
                    if(!(var1 > var8)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                    var1 = var2.embeds;
                    var1 = var1[var8];
                    var1 = var1.rawDescription;
                    if(!(var5 == var1)) { _fun0003_ip = 56; continue _fun0003 }
case 54:
                    var1 = {'type': 'text', 'text': null, 'trailingIcon': 'link'};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 8;
                    var9 = var12[var5];
                    var6 = undefined;
                    var9 = var11.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var5 = var12[var5];
                    var5 = var11.bind(var6)(var5);
                    var5 = var5.t;
                    var6 = var5["9XuYjs"];
                    var5 = {};
                    var11 = var2.embeds;
                    var11 = var11.length;
                    var5['count'] = var11;
                    var5 = var9.bind(var10)(var6, var5);
                    var1['text'] = var5;
                    _fun0003_ip = 57; continue _fun0003;
case 56:
                    var5 = {};
                    var6 = 'markup';
                    var5['type'] = var6;
                    var6 = var2.embeds;
                    var6 = var6[var8];
                    var6 = var6.rawDescription;
                    var5['markup'] = var6;
                    var1 = var5;
case 57:
                    _fun0003_ip = 58; continue _fun0003;
case 53:
                    var5 = {};
                    var6 = 'markup';
                    var5['type'] = var6;
                    var6 = var2.embeds;
                    var6 = var6[var8];
                    var6 = var6.rawTitle;
                    var5['markup'] = var6;
                    var1 = var5;
case 58:
                    _fun0003_ip = 59; continue _fun0003;
case 49:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'audio'};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 8;
                    var9 = var12[var6];
                    var8 = undefined;
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var12[var6];
                    var6 = var11.bind(var8)(var6);
                    var6 = var6.t;
                    var8 = var6.fnO3hK;
                    var6 = {};
                    var11 = var2.embeds;
                    var11 = var11.length;
                    var6['count'] = var11;
                    var6 = var9.bind(var10)(var8, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 59:
                    _fun0003_ip = 60; continue _fun0003;
case 47:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'video'};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 8;
                    var9 = var12[var6];
                    var8 = undefined;
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var12[var6];
                    var6 = var11.bind(var8)(var6);
                    var6 = var6.t;
                    var8 = var6.SJ6pPX;
                    var6 = {};
                    var11 = var2.embeds;
                    var11 = var11.length;
                    var6['count'] = var11;
                    var6 = var9.bind(var10)(var8, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 60:
                    _fun0003_ip = 61; continue _fun0003;
case 45:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'image'};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 8;
                    var9 = var12[var6];
                    var8 = undefined;
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var12[var6];
                    var6 = var11.bind(var8)(var6);
                    var6 = var6.t;
                    var8 = var6.h4pFfU;
                    var6 = {};
                    var11 = var2.embeds;
                    var11 = var11.length;
                    var6['count'] = var11;
                    var6 = var9.bind(var10)(var8, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 61:
                    return var1;
case 25:
                    var6 = var2.attachments;
                    var5 = var6.every;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isImageFile;
                        var1 = arg1;
                        var1 = var1.filename;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var5.bind(var6)(var1);
                    var5 = !var6;
                    if(!var5) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var9 = var2.attachments;
                    var8 = var9.every;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isVideoFile;
                        var1 = arg1;
                        var1 = var1.filename;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var8.bind(var9)(var1);
case 62:
                    var1 = !var6;
                    if(!var1) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var1 = !var5;
case 64:
                    if(!var1) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var9 = var2.attachments;
                    var8 = var9.every;
                    var7 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAudioFile;
                        var1 = arg1;
                        var1 = var1.filename;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var8.bind(var9)(var7);
case 66:
                    if(var6) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    if(var5) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    if(var1) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var1 = {'type': 'text', 'text': null, 'trailingIcon': 'attachment'};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 8;
                    var7 = var10[var5];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var10[var5];
                    var5 = var9.bind(var6)(var5);
                    var5 = var5.t;
                    var6 = var5["89ihS8"];
                    var5 = {};
                    var9 = var2.attachments;
                    var9 = var9.length;
                    var5['count'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['text'] = var5;
                    _fun0003_ip = 74; continue _fun0003;
case 72:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'audio'};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6.fnO3hK;
                    var6 = {};
                    var10 = var2.attachments;
                    var10 = var10.length;
                    var6['count'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 74:
                    _fun0003_ip = 75; continue _fun0003;
case 70:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'video'};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6.SJ6pPX;
                    var6 = {};
                    var10 = var2.attachments;
                    var10 = var10.length;
                    var6['count'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 75:
                    _fun0003_ip = 76; continue _fun0003;
case 68:
                    var5 = {'type': 'text', 'text': null, 'trailingIcon': 'image'};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6.h4pFfU;
                    var6 = {};
                    var10 = var2.attachments;
                    var10 = var10.length;
                    var6['count'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var5['text'] = var6;
                    var1 = var5;
case 76:
                    return var1;
case 23:
                    var1 = {};
                    var5 = 'text';
                    var1['type'] = var5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 8;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.slFYgi;
                    var4 = var5.bind(var6)(var4);
                    var1['text'] = var4;
                    return var1;
case 22:
                    var1 = {};
                    var4 = 'message';
                    var1['type'] = var4;
                    var1['message'] = var2;
                    return var1;
case 19:
                    var1 = {};
                    var4 = 'markup';
                    var1['type'] = var4;
                    var2 = var2.embeds;
                    var2 = var2[var3];
                    var2 = var2.rawTitle;
                    var1['markup'] = var2;
                    return var1;
                }
            };
            var3 = var3.bind(var1)(var8);
            var6 = null;
            if(!(var6 == var3)) { _fun0002_ip = 77; continue _fun0002 }
case 14:
            var15 = var5.currentUserId;
            var11 = var5.authorNick;
            var9 = var5.otherUser;
            var14 = var5.otherUserNick;
            var12 = var5.isCallActive;
            var6 = var8.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var13 = 4;
            var5 = var5[var13];
            var5 = var7.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.RECIPIENT_ADD;
            if(!(var6 === var5)) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var5 = null;
            if(!(var5 == var14)) { _fun0002_ip = 80; continue _fun0002 }
case 78:
            var6 = var8.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var7.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.RECIPIENT_REMOVE;
            if(!(var6 === var5)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var7 = null;
            if(!(var7 == var14)) { _fun0002_ip = 83; continue _fun0002 }
case 81:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.CALL;
            if(!(var6 !== var5)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.CHANNEL_NAME_CHANGE;
            if(!(var6 !== var5)) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.CHANNEL_ICON_CHANGE;
            if(!(var6 !== var5)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.CHANNEL_PINNED_MESSAGE;
            if(!(var6 !== var5)) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.USER_JOIN;
            if(!(var6 !== var5)) { _fun0002_ip = 92; continue _fun0002 }
case 29:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.THREAD_CREATED;
            if(!(var6 !== var5)) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.PREMIUM_REFERRAL;
            if(!(var6 !== var5)) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.STAGE_START;
            if(!(var6 !== var5)) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.STAGE_END;
            if(!(var6 !== var5)) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.STAGE_SPEAKER;
            if(!(var6 !== var5)) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var6 = var8.type;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var10.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var5 = var5.STAGE_TOPIC;
            if(!(var6 !== var5)) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var10 = var8.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var6.bind(var1)(var5);
            var5 = var5.MessageTypes;
            var6 = var5.VOICE_SESSION;
            var5 = undefined;
            if(!(var10 === var6)) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 13;
            var10 = var16[var10];
            var13 = var13.bind(var1)(var10);
            var10 = var13.getVoiceSessionMessageContent;
            var10 = var10.bind(var13)(var8);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 103:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.ro3RM0;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameOnClick'] = var18;
            var18 = var8.content;
            var10['topic'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 101:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.V4uCm4;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameOnClick'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 99:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.vMJhvG;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameOnClick'] = var18;
            var18 = var8.content;
            var10['topic'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 97:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.aZtRW8;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameOnClick'] = var18;
            var18 = var8.content;
            var10['topic'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 95:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 8;
            var16 = var18[var10];
            var16 = var13.bind(var1)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var10 = var18[var10];
            var10 = var13.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.lieTqU;
            var10 = {};
            var10['username'] = var11;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 93:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.SGaUAU;
            var10 = {};
            var10['actorName'] = var11;
            var18 = 11;
            var21 = var20[var18];
            var21 = var19.bind(var1)(var21);
            var21 = var21.identity;
            var10['actorHook'] = var21;
            var21 = var8.content;
            var10['threadName'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['threadOnClick'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 92:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var17 = var10.intl;
            var16 = var17.formatToPlainString;
            var13 = _closure1_slot1;
            var10 = 12;
            var10 = var20[var10];
            var18 = var13.bind(var1)(var10);
            var13 = var18.getSystemMessageUserJoin;
            var10 = var8.id;
            var13 = var13.bind(var18)(var10);
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameHook'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 90:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.vfkjqx;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameHook'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 88:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.OEdU6X;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameHook'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 86:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 8;
            var13 = var20[var10];
            var13 = var19.bind(var1)(var13);
            var17 = var13.intl;
            var16 = var17.formatToPlainString;
            var10 = var20[var10];
            var10 = var19.bind(var1)(var10);
            var10 = var10.t;
            var13 = var10.oItgEw;
            var10 = {};
            var10['username'] = var11;
            var18 = 11;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.identity;
            var10['usernameHook'] = var18;
            var18 = var8.content;
            var10['channelName'] = var18;
            var10 = var16.bind(var17)(var13, var10);
            var6['text'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 84:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            if(var12) { _fun0002_ip = 107; continue _fun0002 }
case 108:
            var13 = var8.call;
            var10 = null;
            if(!(var10 != var13)) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            var10 = var8.call;
            var13 = var10.participants;
            var10 = var13.includes;
            var10 = var10.bind(var13)(var15);
            if(var10) { _fun0002_ip = 109; continue _fun0002 }
case 111:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 8;
            var13 = var17[var10];
            var13 = var16.bind(var1)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var10 = var17[var10];
            var10 = var16.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10["2CnhoI"];
            var10 = var13.bind(var15)(var10);
            _fun0002_ip = 112; continue _fun0002;
case 109:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 8;
            var15 = var18[var13];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var18[var13];
            var13 = var17.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.v05Xd6;
            var10 = var15.bind(var16)(var13);
case 112:
            _fun0002_ip = 113; continue _fun0002;
case 107:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 8;
            var15 = var18[var13];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var18[var13];
            var13 = var17.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.NGg/fm;
            var10 = var15.bind(var16)(var13);
case 113:
            var6['text'] = var10;
            var10 = undefined;
            if(!var12) { _fun0002_ip = 114; continue _fun0002 }
case 115:
            var10 = 'text-feedback-positive';
case 114:
            var6['color'] = var10;
            var10 = 'call-ended';
            if(!var12) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            var10 = 'call-active';
case 116:
            var6['trailingIcon'] = var10;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 83:
            var6 = {};
            var10 = 'text';
            var6['type'] = var10;
            var8 = var8.author;
            var8 = var8.id;
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0002_ip = 118; continue _fun0002 }
case 119:
            var7 = var9.id;
case 118:
            if(!(var8 !== var7)) { _fun0002_ip = 120; continue _fun0002 }
case 121:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 8;
            var8 = var15[var7];
            var8 = var13.bind(var1)(var8);
            var10 = var8.intl;
            var9 = var10.formatToPlainString;
            var7 = var15[var7];
            var7 = var13.bind(var1)(var7);
            var7 = var7.t;
            var8 = var7.L2FyVq;
            var7 = {};
            var7['username'] = var11;
            var12 = 11;
            var16 = var15[var12];
            var16 = var13.bind(var1)(var16);
            var16 = var16.identity;
            var7['usernameHook'] = var16;
            var7['otherUsername'] = var14;
            var12 = var15[var12];
            var12 = var13.bind(var1)(var12);
            var12 = var12.identity;
            var7['otherUsernameHook'] = var12;
            var7 = var9.bind(var10)(var8, var7);
            _fun0002_ip = 122; continue _fun0002;
case 120:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 8;
            var9 = var16[var8];
            var9 = var15.bind(var1)(var9);
            var12 = var9.intl;
            var10 = var12.formatToPlainString;
            var8 = var16[var8];
            var8 = var15.bind(var1)(var8);
            var8 = var8.t;
            var9 = var8["5v2xa8"];
            var8 = {};
            var8['username'] = var11;
            var13 = 11;
            var13 = var16[var13];
            var13 = var15.bind(var1)(var13);
            var13 = var13.identity;
            var8['usernameHook'] = var13;
            var7 = var10.bind(var12)(var9, var8);
case 122:
            var6['text'] = var7;
            var5 = var6;
            _fun0002_ip = 105; continue _fun0002;
case 80:
            var6 = {};
            var7 = 'text';
            var6['type'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 8;
            var8 = var13[var7];
            var8 = var12.bind(var1)(var8);
            var10 = var8.intl;
            var9 = var10.formatToPlainString;
            var7 = var13[var7];
            var7 = var12.bind(var1)(var7);
            var7 = var7.t;
            var8 = var7.MMN2Jq;
            var7 = {};
            var7['username'] = var11;
            var11 = 11;
            var15 = var13[var11];
            var15 = var12.bind(var1)(var15);
            var15 = var15.identity;
            var7['usernameHook'] = var15;
            var7['otherUsername'] = var14;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.identity;
            var7['otherUsernameHook'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var6['text'] = var7;
            var5 = var6;
case 105:
            var6 = null;
            var6 = var6 != var5;
            var1 = undefined;
            if(!var6) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var1 = var5;
case 123:
            return var1;
case 77:
            var1 = {};
            var23 = var1;
            var22 = var3;
            var3 = copyDataProperties(var23, var22);
            var3 = 'authorLabel';
            var1[2] = var4;
            return var1;
case 12:
            var1 = {};
            var3 = 'text';
            var1['type'] = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.G7p6v/;
            var3 = var4.bind(var5)(var3);
            var1['text'] = var3;
            return var1;
case 10:
            var1 = {};
            var3 = 'text';
            var1['type'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XAkOo2;
            var2 = var3.bind(var4)(var2);
            var1['text'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
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
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.MessageFlags;
    var _closure1_slot6 = var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/message_previews/useFormattedMessagePreview.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isMessageContentPreviewable'] = var5;
    var4 = function useFormattedMessagePreview(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var12 = arg2;
            var _closure2_slot0 = var4;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 5;
            var2 = var16[var14];
            var3 = undefined;
            var8 = var10.bind(var3)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = var4.author;
            var2 = var2.id;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot4;
                var5 = var4.isBlocked;
                var2 = _closure2_slot0;
                var3 = var2.author;
                var3 = var3.id;
                var3 = var5.bind(var4)(var3);
                var1['isBlocked'] = var3;
                var3 = var4.isIgnored;
                var2 = var2.author;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isIgnored'] = var2;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var2, var5);
            var7 = var2.isBlocked;
            var6 = var2.isIgnored;
            var8 = _closure1_slot1;
            var2 = 6;
            var2 = var16[var2];
            var11 = var8.bind(var3)(var2);
            var5 = var12.id;
            var2 = var4.id;
            var5 = var11.bind(var3)(var5, var2);
            var2 = var16[var14];
            var15 = var10.bind(var3)(var2);
            var13 = var15.useStateFromStores;
            var2 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var15)(var11, var2);
            var13 = 7;
            var2 = var16[var13];
            var2 = var8.bind(var3)(var2);
            var2 = var2.bind(var3)(var4);
            var8 = var2.nick;
            var15 = var4.type;
            var2 = 4;
            var2 = var16[var2];
            var2 = var10.bind(var3)(var2);
            var2 = var2.MessageTypes;
            var2 = var2.USER_JOIN;
            var10 = var8;
            if(!(var15 !== var2)) { _fun0007_ip = 125; continue _fun0007 }
case 34:
            var2 = var4.author;
            var2 = var2.id;
            var10 = var8;
            if(!(var2 === var11)) { _fun0007_ip = 125; continue _fun0007 }
case 126:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 8;
            var8 = var17[var2];
            var8 = var16.bind(var3)(var8);
            var15 = var8.intl;
            var8 = var15.string;
            var2 = var17[var2];
            var2 = var16.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.LuZzxn;
            var10 = var8.bind(var15)(var2);
case 125:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = var2[var14];
            var16 = var8.bind(var3)(var14);
            var15 = var16.useStateFromStores;
            var17 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var17;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.mentions;
                    var1 = var1.length;
                    var5 = 0;
                    var3 = var1 > var5;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 127; continue _fun0008 }
case 128:
                    var4 = _closure1_slot5;
                    var3 = var4.getUser;
                    var2 = _closure2_slot0;
                    var2 = var2.mentions;
                    var2 = var2[var5];
                    var1 = var3.bind(var4)(var2);
case 127:
                    return var1;
                }
            };
            var9 = var15.bind(var16)(var14, var9);
            var2 = var2[var13];
            var8 = var8.bind(var3)(var2);
            var2 = var8.useNullableUserAuthor;
            var2 = var2.bind(var8)(var9, var12);
            var8 = var2.nick;
            var2 = _closure1_slot8;
            var1 = {};
            var1['message'] = var4;
            var1['channel'] = var12;
            var1['currentUserId'] = var11;
            var1['authorNick'] = var10;
            var1['otherUser'] = var9;
            var1['otherUserNick'] = var8;
            var1['isBlocked'] = var7;
            var1['isIgnored'] = var6;
            var1['isCallActive'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['useFormattedMessagePreview'] = var4;
    var3['formatMessagePreview'] = var2;
    return var1;
})();