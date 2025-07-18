// app/modules/chat_input/native/accessories/ChatInputSendUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function chatInputSendMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var14 = var2.text;
            var _closure2_slot0 = var14;
            var9 = var2.parsedMessage;
            var8 = var2.tts;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0004_ip = 34; continue _fun0004 }
 32:
            var8 = false;
 34:
            var16 = var2.source;
            var3 = var2.params;
            var2 = var3.channel;
            var _closure2_slot1 = var2;
            var5 = var3.chatInputRef;
            var4 = var3.hasAttachmentsToUpload;
            var10 = var3.pendingReply;
            var3 = var3.analyticsLocations;
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var1;
            var11 = '';
            if(!(var11 === var14)) { _fun0004_ip = 158; continue _fun0004 }
 94:
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 9;
            var3 = var12[var3];
            var12 = var6.bind(var1)(var3);
            var6 = var12.addBreadcrumb;
            var3 = {};
            var13 = global;
            var13 = var13.HermesInternal;
            var15 = var13.concat;
            var13 = 'Empty text from ';
            var13 = var15.bind(var13)(var16);
            var3['message'] = var13;
            var3 = var6.bind(var12)(var3);
 158:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 10;
            var6 = var13[var6];
            var15 = var12.bind(var1)(var6);
            var13 = var15.saveDraft;
            var12 = var2.id;
            var6 = _closure1_slot4;
            var6 = var6.ChannelMessage;
            var6 = var13.bind(var15)(var12, var11, var6);
            var13 = var5.current;
            var12 = null;
            if(!(var12 != var13)) { _fun0004_ip = 230; continue _fun0004 }
 220:
            var6 = var13.clearText;
            var6 = var6.bind(var13)();
 230:
            var6 = var5.current;
            if(!(var12 != var6)) { _fun0004_ip = 249; continue _fun0004 }
 239:
            var5 = var6.showSideActions;
            var5 = var5.bind(var6)();
 249:
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var13 = var6.bind(var1)(var5);
            var6 = var13.handleLegacyCommands;
            var5 = {};
            var5['channel'] = var2;
            var15 = false;
            var5['isEdit'] = var15;
            var15 = var6.bind(var13)(var14, var5);
            var13 = var14;
            var6 = var9;
            var5 = var8;
            if(!(var12 != var15)) { _fun0004_ip = 355; continue _fun0004 }
 307:
            var16 = var15.content;
            if(!(var12 != var16)) { _fun0004_ip = 330; continue _fun0004 }
 316:
            var16 = var15.content;
            _closure2_slot0 = var16;
            var14 = var16;
            var9 = undefined;
 330:
            var16 = var15.tts;
            if(!(var12 != var16)) { _fun0004_ip = 346; continue _fun0004 }
 340:
            var8 = var15.tts;
 346:
            var5 = var8;
            var13 = var14;
            var6 = var9;
 355:
            if(!(var12 == var6)) { _fun0004_ip = 391; continue _fun0004 }
 359:
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 12;
            var8 = var14[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.parse;
            var6 = var8.bind(var9)(var2, var13);
 391:
            var6['tts'] = var5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var14 = var9.bind(var1)(var5);
            var9 = var14.deletePendingReply;
            var5 = var2.id;
            var5 = var9.bind(var14)(var5);
            var9 = _closure1_slot1;
            var5 = 14;
            var8 = var8[var5];
            var9 = var9.bind(var1)(var8);
            var8 = var9.getSendMessageOptionsForReply;
            var8 = var8.bind(var9)(var10);
            var9 = _closure1_slot11;
            var9 = var9.CHAT_INPUT;
            var8['location'] = var9;
            var16 = var2.id;
            if(var4) { _fun0004_ip = 490; continue _fun0004 }
 484:
            var9 = new Array(0);
            _fun0004_ip = 571; continue _fun0004;
 490:
            var15 = _closure1_slot6;
            var14 = var15.getUploads;
            var10 = _closure1_slot4;
            var10 = var10.ChannelMessage;
            var10 = var14.bind(var15)(var16, var10);
            if(!(var12 != var10)) { _fun0004_ip = 564; continue _fun0004 }
 520:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 8;
            var12 = var15[var12];
            var15 = var14.bind(var1)(var12);
            var14 = var15.clearAll;
            var12 = _closure1_slot4;
            var12 = var12.ChannelMessage;
            var12 = var14.bind(var15)(var16, var12);
            _fun0004_ip = 568; continue _fun0004;
 564:
            var10 = new Array(0);
 568:
            var9 = var10;
 571:
            _closure2_slot3 = var9;
            if(var4) { _fun0004_ip = 587; continue _fun0004 }
 578:
            var10 = var6.content;
            var4 = var11 !== var10;
 587:
            if(var4) { _fun0004_ip = 643; continue _fun0004 }
 590:
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
 643:
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
            var2[var8] = var9;
            var8 = function onAttachmentUploadError(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    var8 = _closure2_slot1;
                    var7 = var8.getGuildId;
                    var7 = var7.bind(var8)();
                    var4['guildId'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var7 = arg2;
                    var4['code'] = var7;
                    var7 = arg3;
                    var4['reason'] = var7;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0005_ip = 109; continue _fun0005 }
 94:
                    var5 = _closure2_slot3;
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
 109:
                    if(!var4) { _fun0005_ip = 233; continue _fun0005 }
 112:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var9 = var6.bind(var1)(var4);
                    var8 = var9.setUploads;
                    var5 = {};
                    var4 = _closure2_slot1;
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
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot4;
                    var2 = var2.ChannelMessage;
                    var2 = var5.bind(var6)(var4, var3, var2);
 233:
                    return var1;
                }
            };
            var7 = 'onAttachmentUploadError';
            var2[var7] = var8;
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
    var1 = function _chatInputSendApplicationCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 395; continue _fun0006 }
 13:
                    var4 = var2.applicationCommand;
                    var7 = var4.command;
                    var11 = var4.optionValues;
                    var8 = var2.params;
                    var5 = undefined;
                    SaveGenerator(address=43);
 41:
                    return var5;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 392; continue _fun0006 }
 52:
                    var14 = var8.channel;
                    var3 = var8.chatInputRef;
                    var4 = var3.current;
                    var9 = null;
                    if(!(var9 != var4)) { _fun0006_ip = 84; continue _fun0006 }
 74:
                    var3 = var4.clearText;
                    var3 = var3.bind(var4)();
 84:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 27;
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
 151:
                    return var3;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 389; continue _fun0006 }
 162:
                    var4 = var3.isAuthorized;
                    if(!var4) { _fun0006_ip = 383; continue _fun0006 }
 174:
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 28;
                    var4 = var13[var4];
                    var10 = var10.bind(var5)(var4);
                    var4 = {};
                    var4['command'] = var7;
                    var4['optionValues'] = var11;
                    var12 = _closure1_slot0;
                    var11 = 29;
                    var11 = var13[var11];
                    var13 = var12.bind(var5)(var11);
                    var12 = var13.getCommandContext;
                    var11 = {};
                    var11['channel'] = var14;
                    var14 = 'channel';
                    var11['type'] = var14;
                    var11 = var12.bind(var13)(var11);
                    var4['context'] = var11;
                    var11 = function maxSizeCallback(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            if(var2) { _fun0007_ip = 189; continue _fun0007 }
 63:
                            var2 = 18;
                            var2 = var11[var2];
                            var6 = var3.bind(var1)(var2);
                            var4 = var6.handleShowUpsellAlert;
                            var2 = {};
                            var7 = _closure1_slot10;
                            var7 = var7.UPLOAD;
                            var2['initialUpsellKey'] = var7;
                            var7 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.FILE_UPLOAD_POPOUT;
                            var7['section'] = var8;
                            var2['analyticsLocation'] = var7;
                            var7 = 31;
                            var7 = var11[var7];
                            var7 = var3.bind(var1)(var7);
                            var8 = var7.FILE_UPLOAD_POPOUT;
                            var7 = new Array(1);
                            var7[0] = var8;
                            var2['analyticsLocations'] = var7;
                            var7 = {};
                            var8 = _closure1_slot12;
                            var8 = var8.UPLOAD_ERROR_UPSELL;
                            var7['type'] = var8;
                            var2['analyticsProperties'] = var7;
                            var7 = arg2;
                            var2['largestFileSize'] = var7;
                            var2 = var4.bind(var6)(var2);
                            _fun0007_ip = 351; continue _fun0007;
 189:
                            var2 = 19;
                            var2 = var11[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var10 = _closure1_slot0;
                            var5 = 20;
                            var6 = var11[var5];
                            var6 = var10.bind(var1)(var6);
                            var8 = var6.intl;
                            var7 = var8.string;
                            var6 = var11[var5];
                            var6 = var10.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6./tGlcn;
                            var6 = var7.bind(var8)(var6);
                            var2['title'] = var6;
                            var6 = var11[var5];
                            var6 = var10.bind(var1)(var6);
                            var8 = var6.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var10.bind(var1)(var5);
                            var5 = var5.t;
                            var6 = var5.fxEKdX;
                            var5 = {};
                            var9 = 30;
                            var9 = var11[var9];
                            var11 = var10.bind(var1)(var9);
                            var10 = var11.sizeString;
                            var9 = arg1;
                            var9 = var10.bind(var11)(var9);
                            var5['maxSize'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
 351:
                            return var1;
                        }
                    };
                    var4['maxSizeCallback'] = var11;
                    var4 = var10.bind(var5)(var4);
                    SaveGenerator(address=274);
 272:
                    return var4;
 274:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0006_ip = 386; continue _fun0006 }
 280:
                    var10 = var7.inputType;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 32;
                    var7 = var12[var7];
                    var7 = var11.bind(var5)(var7);
                    var7 = var7.ApplicationCommandInputType;
                    var7 = var7.BUILT_IN_TEXT;
                    var7 = var10 === var7;
                    if(!var7) { _fun0006_ip = 329; continue _fun0006 }
 325:
                    var7 = var9 != var4;
 329:
                    if(!var7) { _fun0006_ip = 383; continue _fun0006 }
 332:
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
 383:
                    return var5;
 386:
                    return var4;
 389:
                    return var3;
 392:
                    return var2;
 395:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot9 = var7;
    var4 = var4.UpsellTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot12 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputSendUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function chatInputHandleSendText(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var12 = var1.text;
            var _closure2_slot0 = var12;
            var6 = var1.params;
            var _closure2_slot1 = var6;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var11 = var6.channel;
            var9 = var6.analyticsLocations;
            var4 = var6.hasAttachmentsToUpload;
            var7 = _closure1_slot5;
            var5 = var7.isChannelOnCooldown;
            var5 = var5.bind(var7)(var11);
            if(var5) { _fun0008_ip = 1066; continue _fun0008 }
 71:
            var7 = var12.length;
            var5 = 0;
            if(!(var5 === var7)) { _fun0008_ip = 88; continue _fun0008 }
 82:
            if(!var4) { _fun0008_ip = 1066; continue _fun0008 }
 88:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = 12;
            var5 = var4[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.parse;
            var8 = var5.bind(var7)(var11, var12);
            _closure2_slot2 = var8;
            var5 = var8.content;
            var7 = var5.length;
            var5 = _closure1_slot0;
            var14 = 16;
            var4 = var4[var14];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getMaxMessageLength;
            var4 = var4.bind(var5)();
            if(!(!(var7 > var4))) { _fun0008_ip = 715; continue _fun0008 }
 167:
            var5 = _closure1_slot13;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 22;
            var4 = var13[var4];
            var4 = var10.bind(var1)(var4);
            var4 = var4.RESTRICTIONS;
            var15 = var5.bind(var1)(var4);
            var10 = var15.bind(var1)();
            var5 = var10.done;
            var4 = null;
            var13 = false;
            if(var5) { _fun0008_ip = 488; continue _fun0008 }
 221:
            var5 = var10.value;
            var16 = var5.check;
            var5 = var11.getGuildId;
            var5 = var5.bind(var11)();
            var5 = var4 != var5;
            var16 = var16.bind(var1)(var12, var11, var5);
            if(!(var13 === var16)) { _fun0008_ip = 277; continue _fun0008 }
 257:
            var17 = var15.bind(var1)();
            var5 = var17.done;
            var10 = var17;
            if(var5) { _fun0008_ip = 488; continue _fun0008 }
 275:
            _fun0008_ip = 221; continue _fun0008;
 277:
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 19;
            var5 = var19[var5];
            var13 = var10.bind(var1)(var5);
            var10 = var13.show;
            var5 = {};
            var18 = _closure1_slot0;
            var15 = 20;
            var17 = var19[var15];
            var17 = var18.bind(var1)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var19[var15];
            var17 = var18.bind(var1)(var17);
            var17 = var17.t;
            var17 = var17.mY3Y39;
            var17 = var20.bind(var21)(var17);
            var5['title'] = var17;
            var16 = var16.body;
            var5['body'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var1)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var1)(var16);
            var16 = var16.t;
            var16 = var16.KJnHq6;
            var16 = var17.bind(var20)(var16);
            var5['confirmText'] = var16;
            var16 = function onConfirm() {
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
            var5['onConfirm'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var1)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmZ;
            var15 = var16.bind(var17)(var15);
            var5['cancelText'] = var15;
            var5 = var10.bind(var13)(var5);
            var5 = undefined;
            return var5;
 488:
            var15 = _closure1_slot6;
            var13 = var15.getUploads;
            var10 = var11.id;
            var5 = _closure1_slot4;
            var5 = var5.ChannelMessage;
            var10 = var13.bind(var15)(var10, var5);
            if(!(var4 != var10)) { _fun0008_ip = 563; continue _fun0008 }
 523:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 23;
            var4 = var13[var4];
            var13 = var5.bind(var1)(var4);
            var5 = var13.shouldShowAddMediaToOriginalPostModal;
            var4 = var11.id;
            var4 = var5.bind(var13)(var10, var4);
            if(var4) { _fun0008_ip = 608; continue _fun0008 }
 563:
            var5 = _closure1_slot15;
            var4 = {};
            var4['text'] = var12;
            var4['parsedMessage'] = var8;
            var4['tts'] = var1;
            var8 = 'handleSendMessage';
            var4['source'] = var8;
            var4['params'] = var6;
            var4 = var5.bind(var1)(var4);
            _fun0008_ip = 1066; continue _fun0008;
 608:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = 24;
            var5 = var4[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.openLazy;
            var12 = _closure1_slot0;
            var5 = 26;
            var5 = var4[var5];
            var12 = var12.bind(var1)(var5);
            var5 = 25;
            var5 = var4[var5];
            var4 = var4.paths;
            var5 = var12.bind(var1)(var5, var4);
            var4 = {};
            var11 = var11.id;
            var4['threadId'] = var11;
            var4['attachments'] = var10;
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
            var4['sendMessage'] = var2;
            var2 = 'add-media-to-original-forum-post';
            var2 = var6.bind(var8)(var5, var2, var4);
            _fun0008_ip = 1066; continue _fun0008;
 715:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.canUseIncreasedMessageLength;
            var6 = _closure1_slot7;
            var2 = var6.getCurrentUser;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            if(var2) { _fun0008_ip = 850; continue _fun0008 }
 770:
            var2 = 18;
            var2 = var6[var2];
            var8 = var5.bind(var1)(var2);
            var4 = var8.handleShowUpsellAlert;
            var2 = {};
            var10 = _closure1_slot10;
            var10 = var10.LONGER_MESSAGE;
            var2['initialUpsellKey'] = var10;
            var10 = {};
            var2['analyticsLocation'] = var10;
            var2['analyticsLocations'] = var9;
            var9 = {};
            var10 = _closure1_slot12;
            var10 = var10.MESSAGE_LENGTH_UPSELL;
            var9['type'] = var10;
            var2['analyticsProperties'] = var9;
            var2 = var4.bind(var8)(var2);
            var2 = undefined;
            _fun0008_ip = 1064; continue _fun0008;
 850:
            var4 = 19;
            var4 = var6[var4];
            var9 = var5.bind(var1)(var4);
            var8 = var9.show;
            var4 = {};
            var15 = _closure1_slot0;
            var10 = 20;
            var11 = var6[var10];
            var11 = var15.bind(var1)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var6[var10];
            var11 = var15.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.l8rYLi;
            var11 = var12.bind(var13)(var11);
            var4['title'] = var11;
            var11 = var6[var10];
            var11 = var15.bind(var1)(var11);
            var13 = var11.intl;
            var12 = var13.formatToPlainString;
            var10 = var6[var10];
            var10 = var15.bind(var1)(var10);
            var10 = var10.t;
            var11 = var10.FfjF19;
            var10 = {};
            var10['currentLength'] = var7;
            var14 = var6[var14];
            var15 = var15.bind(var1)(var14);
            var14 = var15.getMaxMessageLength;
            var14 = var14.bind(var15)();
            var10['maxLength'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var4['body'] = var10;
            var4 = var8.bind(var9)(var4);
            var4 = 21;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.track;
            var3 = _closure1_slot8;
            var4 = var3.OPEN_MODAL;
            var3 = {};
            var8 = 'Message Too Long Alert iOS';
            var3['type'] = var8;
            var3['message_content_length'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = undefined;
 1064:
            return var2;
 1066:
            return var1;
        }
    };
    var3['chatInputHandleSendText'] = var4;
    var4 = function chatInputCreateThread(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!(var5 > var4)) { _fun0009_ip = 178; continue _fun0009 }
 58:
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
            if(var4) { _fun0009_ip = 178; continue _fun0009 }
 105:
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
 178:
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var3['chatInputCreateThread'] = var4;
    var2 = function chatInputSendApplicationCommand() {
        var1 = undefined;
        var4 = _closure1_slot16;
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