// app/modules/chat_input/native/accessories/ChatInputSendUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function chatInputSendMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var15 = var2.text;
            var10 = var2.parsedMessage;
            var9 = var2.tts;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0004_ip = 3; continue _fun0004 }
case 34:
            var9 = false;
case 3:
            var16 = var2.source;
            var3 = var2.params;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var8 = var3.chatInputRef;
            var4 = var3.hasAttachmentsToUpload;
            var14 = var3.pendingReply;
            var3 = var3.analyticsLocations;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var11 = '';
            if(!(var11 === var15)) { _fun0004_ip = 15; continue _fun0004 }
case 36:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.addBreadcrumb;
            var3 = {};
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = 'Empty text from ';
            var12 = var13.bind(var12)(var16);
            var3['message'] = var12;
            var3 = var5.bind(var6)(var3);
case 15:
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 10;
            var5 = var12[var5];
            var13 = var6.bind(var1)(var5);
            var12 = var13.saveDraft;
            var6 = var2.id;
            var5 = _closure1_slot4;
            var5 = var5.ChannelMessage;
            var5 = var12.bind(var13)(var6, var11, var5);
            var6 = var8.current;
            var12 = null;
            if(!(var12 != var6)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = var6.clearText;
            var5 = var5.bind(var6)();
case 37:
            var6 = var8.current;
            if(!(var12 != var6)) { _fun0004_ip = 18; continue _fun0004 }
case 39:
            var5 = var6.showSideActions;
            var5 = var5.bind(var6)();
case 18:
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var13 = var6.bind(var1)(var5);
            var6 = var13.handleLegacyCommands;
            var5 = {};
            var5['channel'] = var2;
            var16 = false;
            var5['isEdit'] = var16;
            var16 = var6.bind(var13)(var15, var5);
            var13 = var15;
            var6 = var10;
            var5 = var9;
            if(!(var12 != var16)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var17 = var16.content;
            if(!(var12 != var17)) { _fun0004_ip = 8; continue _fun0004 }
case 42:
            var15 = var16.content;
            var10 = undefined;
case 8:
            var17 = var16.tts;
            if(!(var12 != var17)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var9 = var16.tts;
case 43:
            var5 = var9;
            var13 = var15;
            var6 = var10;
case 40:
            var9 = var8.current;
            var8 = var12 == var9;
            var10 = undefined;
            if(var8) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var8 = var9.getApplicationCommandManager;
            var9 = var8.bind(var9)();
            var8 = var12 == var9;
            var10 = undefined;
            if(var8) { _fun0004_ip = 45; continue _fun0004 }
case 47:
            var8 = var9.getMentionGames;
            var10 = var8.bind(var9)();
case 45:
            if(!(var12 == var6)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 12;
            var8 = var15[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.parse;
            var22 = var9;
            var21 = var2;
            var20 = var13;
            var19 = undefined;
            var18 = var10;
            var6 = var22[var8](var21, var20, var19, var18, var17);
case 48:
            _closure2_slot2 = var6;
            var6['tts'] = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 13;
            var5 = var9[var5];
            var10 = var8.bind(var1)(var5);
            var8 = var10.deletePendingReply;
            var5 = var2.id;
            var5 = var8.bind(var10)(var5);
            var8 = {};
            var10 = _closure1_slot1;
            var5 = 14;
            var9 = var9[var5];
            var10 = var10.bind(var1)(var9);
            var9 = var10.getSendMessageOptionsForReply;
            var20 = var9.bind(var10)(var14);
            var21 = var8;
            var9 = copyDataProperties(var21, var20);
            var9 = _closure1_slot11;
            var10 = var9.CHAT_INPUT;
            var9 = 'location';
            var8[8] = var10;
            var16 = var2.id;
            if(var4) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var9 = new Array(0);
            _fun0004_ip = 52; continue _fun0004;
case 50:
            var15 = _closure1_slot6;
            var14 = var15.getUploads;
            var10 = _closure1_slot4;
            var10 = var10.ChannelMessage;
            var10 = var14.bind(var15)(var16, var10);
            if(!(var12 != var10)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 8;
            var12 = var15[var12];
            var15 = var14.bind(var1)(var12);
            var14 = var15.clearAll;
            var12 = _closure1_slot4;
            var12 = var12.ChannelMessage;
            var12 = var14.bind(var15)(var16, var12);
            _fun0004_ip = 55; continue _fun0004;
case 53:
            var10 = new Array(0);
case 55:
            var9 = var10;
case 52:
            _closure2_slot3 = var9;
            if(var4) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var10 = var6.content;
            var4 = var11 !== var10;
case 56:
            if(var4) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 9;
            var4 = var11[var4];
            var11 = var10.bind(var1)(var4);
            var10 = var11.addBreadcrumb;
            var4 = {};
            var12 = 'Parsed empty message content from text';
            var4['message'] = var12;
            var12 = {};
            var12['text'] = var13;
            var4['data'] = var12;
            var4 = var10.bind(var11)(var4);
case 58:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.sendMessage;
            var3 = var2.id;
            var2 = {};
            var21 = var2;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var8 = 'attachmentsToUpload';
            var2[7] = var9;
            var8 = function onAttachmentUploadError(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.handleUploadMessageAttachmentsErrors;
                    var4 = {};
                    var3 = arg1;
                    var4['file'] = var3;
                    var8 = _closure2_slot0;
                    var7 = var8.getGuildId;
                    var7 = var7.bind(var8)();
                    var4['guildId'] = var7;
                    var7 = _closure2_slot1;
                    var4['analyticsLocations'] = var7;
                    var7 = arg2;
                    var4['code'] = var7;
                    var7 = arg3;
                    var4['reason'] = var7;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0005_ip = 60; continue _fun0005 }
case 36:
                    var5 = _closure2_slot3;
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
case 60:
                    if(!var4) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var9 = var6.bind(var1)(var4);
                    var8 = var9.setUploads;
                    var5 = {};
                    var4 = _closure2_slot0;
                    var10 = var4.id;
                    var5['channelId'] = var10;
                    var10 = _closure2_slot3;
                    var5['uploads'] = var10;
                    var10 = _closure1_slot4;
                    var10 = var10.ChannelMessage;
                    var5['draftType'] = var10;
                    var10 = true;
                    var5['resetState'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = 10;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.saveDraft;
                    var4 = var4.id;
                    var3 = _closure2_slot2;
                    var3 = var3.content;
                    var2 = _closure1_slot4;
                    var2 = var2.ChannelMessage;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 61:
                    return var1;
                }
            };
            var7 = 'onAttachmentUploadError';
            var2[6] = var8;
            var22 = var5;
            var21 = var3;
            var20 = var6;
            var19 = undefined;
            var18 = var2;
            var2 = var22[var4](var21, var20, var19, var18, var17);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var5 = function chatInputValidateContentLength(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var8 = var1.text;
            var1 = var1.params;
            var7 = var1.channel;
            var10 = var1.analyticsLocations;
            var1 = var1.chatInputRef;
            var4 = var1.current;
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            var6 = undefined;
            if(var3) { _fun0006_ip = 63; continue _fun0006 }
case 5:
            var3 = var4.getApplicationCommandManager;
            var3 = var3.bind(var4)();
            var1 = var1 == var3;
            var6 = undefined;
            if(var1) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var1 = var3.getMentionGames;
            var6 = var1.bind(var3)();
case 63:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var5 = var5.bind(var2)(var1);
            var1 = var5.parse;
            var21 = var5;
            var20 = var7;
            var19 = var8;
            var18 = undefined;
            var17 = var6;
            var1 = var21[var1](var20, var19, var18, var17, var16);
            var5 = var1.content;
            var7 = var5.length;
            var5 = _closure1_slot0;
            var14 = 16;
            var4 = var4[var14];
            var5 = var5.bind(var2)(var4);
            var4 = var5.getMaxMessageLength;
            var4 = var4.bind(var5)();
            if(!(!(var7 <= var4))) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 17;
            var4 = var6[var4];
            var6 = var5.bind(var2)(var4);
            var5 = var6.canUseIncreasedMessageLength;
            var8 = _closure1_slot7;
            var4 = var8.getCurrentUser;
            var4 = var4.bind(var8)();
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            if(var4) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var4 = 18;
            var4 = var6[var4];
            var9 = var5.bind(var2)(var4);
            var8 = var9.handleShowUpsellAlert;
            var4 = {};
            var11 = _closure1_slot10;
            var11 = var11.LONGER_MESSAGE;
            var4['initialUpsellKey'] = var11;
            var11 = {};
            var4['analyticsLocation'] = var11;
            var4['analyticsLocations'] = var10;
            var10 = {};
            var11 = _closure1_slot12;
            var11 = var11.MESSAGE_LENGTH_UPSELL;
            var10['type'] = var11;
            var4['analyticsProperties'] = var10;
            var4 = var8.bind(var9)(var4);
            _fun0006_ip = 69; continue _fun0006;
case 67:
            var4 = 19;
            var4 = var6[var4];
            var9 = var5.bind(var2)(var4);
            var8 = var9.show;
            var4 = {};
            var15 = _closure1_slot0;
            var10 = 20;
            var11 = var6[var10];
            var11 = var15.bind(var2)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var6[var10];
            var11 = var15.bind(var2)(var11);
            var11 = var11.t;
            var11 = var11.l8rYLt;
            var11 = var12.bind(var13)(var11);
            var4['title'] = var11;
            var11 = var6[var10];
            var11 = var15.bind(var2)(var11);
            var13 = var11.intl;
            var12 = var13.formatToPlainString;
            var10 = var6[var10];
            var10 = var15.bind(var2)(var10);
            var10 = var10.t;
            var11 = var10.FfjF15;
            var10 = {};
            var10['currentLength'] = var7;
            var14 = var6[var14];
            var15 = var15.bind(var2)(var14);
            var14 = var15.getMaxMessageLength;
            var14 = var14.bind(var15)();
            var10['maxLength'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var4['body'] = var10;
            var4 = var8.bind(var9)(var4);
            var4 = 21;
            var4 = var6[var4];
            var6 = var5.bind(var2)(var4);
            var5 = var6.track;
            var3 = _closure1_slot8;
            var4 = var3.OPEN_MODAL;
            var3 = {};
            var8 = 'Message Too Long Alert iOS';
            var3['type'] = var8;
            var3['message_content_length'] = var7;
            var3 = var5.bind(var6)(var4, var3);
case 69:
            return var2;
case 65:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function showFileSizeExceededAlert(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.canUploadLargeFiles;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 4:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 18;
            var2 = var8[var2];
            var4 = var7.bind(var1)(var2);
            var3 = var4.handleShowUpsellAlert;
            var2 = {};
            var5 = _closure1_slot10;
            var5 = var5.UPLOAD;
            var2['initialUpsellKey'] = var5;
            var5 = {};
            var9 = _closure1_slot9;
            var9 = var9.FILE_UPLOAD_POPOUT;
            var5['section'] = var9;
            var2['analyticsLocation'] = var5;
            var5 = 29;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var7 = var5.FILE_UPLOAD_POPOUT;
            var5 = new Array(1);
            var5[0] = var7;
            var2['analyticsLocations'] = var5;
            var5 = {};
            var7 = _closure1_slot12;
            var7 = var7.UPLOAD_ERROR_UPSELL;
            var5['type'] = var7;
            var2['analyticsProperties'] = var5;
            var5 = arg2;
            var2['largestFileSize'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0007_ip = 71; continue _fun0007;
case 70:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 27;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var3 = var5.getKestrelConfig;
            var2 = {};
            var7 = 'native.showFileSizeExceededAlert';
            var2['location'] = var7;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var7 = var5.enabled;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 20;
            var9 = var8[var5];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var5];
            var8 = var11.bind(var1)(var8);
            var8 = var8.t;
            if(var7) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var7 = var8["/tGlcj"];
            var7 = var9.bind(var10)(var7);
            _fun0007_ip = 44; continue _fun0007;
case 72:
            var8 = var8.bRYgjH;
            var7 = var9.bind(var10)(var8);
case 44:
            var2['title'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = var11[var5];
            var6 = var10.bind(var1)(var6);
            var8 = var6.intl;
            var7 = var8.formatToPlainString;
            var5 = var11[var5];
            var5 = var10.bind(var1)(var5);
            var5 = var5.t;
            var6 = var5.fxEKdS;
            var5 = {};
            var9 = 28;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.sizeString;
            var9 = arg1;
            var9 = var10.bind(var11)(var9);
            var5['maxSize'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
case 71:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = function _chatInputSendApplicationCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var4 = var2.applicationCommand;
                    var7 = var4.command;
                    var11 = var4.optionValues;
                    var8 = var2.params;
                    var5 = undefined;
                    SaveGenerator(address=43);
case 76:
                    return var5;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var14 = var8.channel;
                    var3 = var8.chatInputRef;
                    var4 = var3.current;
                    var9 = null;
                    if(!(var9 != var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var3 = var4.clearText;
                    var3 = var3.bind(var4)();
case 80:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 30;
                    var3 = var10[var3];
                    var10 = var4.bind(var5)(var3);
                    var4 = var10.installApplicationOnDemandIfNeeded;
                    var3 = {};
                    var12 = var7.applicationId;
                    var3['applicationId'] = var12;
                    var12 = var8.channel;
                    var3['channel'] = var12;
                    var12 = var7.integration_types;
                    var3['commandIntegrationTypes'] = var12;
                    var3 = var4.bind(var10)(var3);
                    SaveGenerator(address=153);
case 82:
                    return var3;
case 83:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                    var4 = var3.isAuthorized;
                    if(!var4) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 31;
                    var4 = var13[var4];
                    var10 = var10.bind(var5)(var4);
                    var4 = {};
                    var4['command'] = var7;
                    var4['optionValues'] = var11;
                    var12 = _closure1_slot0;
                    var11 = 32;
                    var11 = var13[var11];
                    var13 = var12.bind(var5)(var11);
                    var12 = var13.getCommandContext;
                    var11 = {};
                    var11['channel'] = var14;
                    var14 = 'channel';
                    var11['type'] = var14;
                    var11 = var12.bind(var13)(var11);
                    var4['context'] = var11;
                    var11 = _closure1_slot17;
                    var4['maxSizeCallback'] = var11;
                    var4 = var10.bind(var5)(var4);
                    SaveGenerator(address=269);
case 88:
                    return var4;
case 89:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0008_ip = 47; continue _fun0008 }
case 90:
                    var10 = var7.inputType;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 33;
                    var7 = var12[var7];
                    var7 = var11.bind(var5)(var7);
                    var7 = var7.ApplicationCommandInputType;
                    var7 = var7.BUILT_IN_TEXT;
                    var7 = var10 === var7;
                    if(!var7) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    var7 = var9 != var4;
case 91:
                    if(!var7) { _fun0008_ip = 86; continue _fun0008 }
case 93:
                    var7 = _closure1_slot15;
                    var6 = {};
                    var9 = var4.content;
                    var6['text'] = var9;
                    var6['parsedMessage'] = var5;
                    var9 = var4.tts;
                    var6['tts'] = var9;
                    var9 = 'handleSendApplicationCommand';
                    var6['source'] = var9;
                    var6['params'] = var8;
                    var6 = var7.bind(var5)(var6);
case 86:
                    return var5;
case 47:
                    return var4;
case 84:
                    return var3;
case 78:
                    return var2;
case 74:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
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
    var6 = var6.DraftType;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot8 = var9;
    var9 = var6.AnalyticsSections;
    var _closure1_slot9 = var9;
    var6 = var6.UpsellTypes;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.MessageSendLocation;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PremiumUpsellTypes;
    var _closure1_slot12 = var6;
    var6 = 34;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/chat_input/native/accessories/ChatInputSendUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['chatInputValidateContentLength'] = var5;
    var5 = function chatInputHandleSendText(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var10 = var1.text;
            var _closure2_slot0 = var10;
            var6 = var1.params;
            var _closure2_slot1 = var6;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var8 = var6.channel;
            var3 = var6.hasAttachmentsToUpload;
            var7 = _closure1_slot5;
            var5 = var7.isChannelOnCooldown;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var7 = var10.length;
            var5 = 0;
            if(!(var5 === var7)) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            if(!var3) { _fun0009_ip = 94; continue _fun0009 }
case 96:
            var5 = _closure1_slot16;
            var3 = {};
            var3['text'] = var10;
            var3['params'] = var6;
            var9 = var5.bind(var1)(var3);
            _closure2_slot2 = var9;
            var3 = null;
            if(!(var3 != var9)) { _fun0009_ip = 94; continue _fun0009 }
case 62:
            var7 = _closure1_slot13;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var5 = var12[var5];
            var5 = var11.bind(var1)(var5);
            var5 = var5.RESTRICTIONS;
            var12 = var7.bind(var1)(var5);
            var7 = var12.bind(var1)();
            var5 = var7.done;
            var11 = false;
            if(var5) { _fun0009_ip = 98; continue _fun0009 }
case 99:
            var5 = var7.value;
            var13 = var5.check;
            var5 = var8.getGuildId;
            var5 = var5.bind(var8)();
            var5 = var3 != var5;
            var13 = var13.bind(var1)(var10, var8, var5);
            if(!(var11 === var13)) { _fun0009_ip = 68; continue _fun0009 }
case 100:
            var14 = var12.bind(var1)();
            var5 = var14.done;
            var7 = var14;
            if(var5) { _fun0009_ip = 98; continue _fun0009 }
case 101:
            _fun0009_ip = 99; continue _fun0009;
case 68:
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 19;
            var5 = var16[var5];
            var11 = var7.bind(var1)(var5);
            var7 = var11.show;
            var5 = {};
            var15 = _closure1_slot0;
            var12 = 20;
            var14 = var16[var12];
            var14 = var15.bind(var1)(var14);
            var18 = var14.intl;
            var17 = var18.string;
            var14 = var16[var12];
            var14 = var15.bind(var1)(var14);
            var14 = var14.t;
            var14 = var14.mY3Y38;
            var14 = var17.bind(var18)(var14);
            var5['title'] = var14;
            var13 = var13.body;
            var5['body'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.KJnHq3;
            var13 = var14.bind(var17)(var13);
            var5['confirmText'] = var13;
            var13 = function onConfirm() {
                var3 = _closure1_slot15;
                var2 = {};
                var1 = _closure2_slot0;
                var2['text'] = var1;
                var1 = _closure2_slot2;
                var2['parsedMessage'] = var1;
                var1 = undefined;
                var2['tts'] = var1;
                var5 = 'alert onConfirm';
                var2['source'] = var5;
                var4 = _closure2_slot1;
                var2['params'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onConfirm'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12.fsBWmS;
            var12 = var13.bind(var14)(var12);
            var5['cancelText'] = var12;
            var5 = var7.bind(var11)(var5);
            var5 = undefined;
            return var5;
case 98:
            var12 = _closure1_slot6;
            var11 = var12.getUploads;
            var7 = var8.id;
            var5 = _closure1_slot4;
            var5 = var5.ChannelMessage;
            var7 = var11.bind(var12)(var7, var5);
            if(!(var3 != var7)) { _fun0009_ip = 102; continue _fun0009 }
case 103:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 23;
            var3 = var11[var3];
            var11 = var5.bind(var1)(var3);
            var5 = var11.shouldShowAddMediaToOriginalPostModal;
            var3 = var8.id;
            var3 = var5.bind(var11)(var7, var3);
            if(var3) { _fun0009_ip = 104; continue _fun0009 }
case 102:
            var5 = _closure1_slot15;
            var3 = {};
            var3['text'] = var10;
            var3['parsedMessage'] = var9;
            var3['tts'] = var1;
            var9 = 'handleSendMessage';
            var3['source'] = var9;
            var3['params'] = var6;
            var3 = var5.bind(var1)(var3);
            _fun0009_ip = 94; continue _fun0009;
case 104:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 24;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.openLazy;
            var9 = _closure1_slot0;
            var4 = 26;
            var4 = var3[var4];
            var9 = var9.bind(var1)(var4);
            var4 = 25;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var9.bind(var1)(var4, var3);
            var3 = {};
            var8 = var8.id;
            var3['threadId'] = var8;
            var3['attachments'] = var7;
            var2 = function sendMessage() {
                var3 = _closure1_slot15;
                var2 = {};
                var1 = _closure2_slot0;
                var2['text'] = var1;
                var1 = _closure2_slot2;
                var2['parsedMessage'] = var1;
                var1 = undefined;
                var2['tts'] = var1;
                var5 = 'AddMediaToOriginalForumPostActionSheet';
                var2['source'] = var5;
                var4 = _closure2_slot1;
                var2['params'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['sendMessage'] = var2;
            var2 = 'add-media-to-original-forum-post';
            var2 = var5.bind(var6)(var4, var2, var3);
case 94:
            return var1;
        }
    };
    var3['chatInputHandleSendText'] = var5;
    var5 = function chatInputCreateThread(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.text;
            var2 = var1.threadCreationCallback;
            var5 = var3.length;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getMaxMessageLength;
            var4 = var4.bind(var6)();
            if(!(var5 > var4)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 17;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.canUseIncreasedMessageLength;
            var7 = _closure1_slot7;
            var4 = var7.getCurrentUser;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0010_ip = 105; continue _fun0010 }
case 107:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 18;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.handleShowUpsellAlert;
            var4 = {};
            var7 = _closure1_slot10;
            var7 = var7.LONGER_MESSAGE;
            var4['initialUpsellKey'] = var7;
            var7 = {};
            var8 = _closure1_slot12;
            var8 = var8.MESSAGE_LENGTH_UPSELL;
            var7['type'] = var8;
            var4['analyticsProperties'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = undefined;
            return var4;
case 105:
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var3['chatInputCreateThread'] = var5;
    var3['showFileSizeExceededAlert'] = var4;
    var2 = function chatInputSendApplicationCommand() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['chatInputSendApplicationCommand'] = var2;
    return var1;
})();