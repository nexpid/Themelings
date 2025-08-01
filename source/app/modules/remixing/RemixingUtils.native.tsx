// app/modules/remixing/RemixingUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _sendLocalFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    var11 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 371; continue _fun0001 }
 21:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var7 = var7.bind(var3)(var2);
                    var2 = var7.getImageDimensionsIfMissing;
                    var16 = var7;
                    var15 = var6;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = var5;
                    var2 = var16[var2](var15, var14, var13, var12, var11);
                    SaveGenerator(address=77);
 75:
                    return var2;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 368; continue _fun0001 }
 86:
                    var10 = {};
                    var10['uri'] = var6;
                    var10['originalUri'] = var6;
                    var6 = arg3;
                    var10['mimeType'] = var6;
                    var6 = var2.width;
                    var10['width'] = var6;
                    var6 = var2.height;
                    var10['height'] = var6;
                    var10['filename'] = var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.UploadPlatform;
                    var5 = var5.REACT_NATIVE;
                    var10['platform'] = var5;
                    var5 = true;
                    var10['isRemix'] = var5;
                    var6 = _closure1_slot8;
                    var5 = var6.getChannel;
                    var5 = var5.bind(var6)(var11);
                    _closure4_slot0 = var5;
                    var6 = null;
                    if(!(var6 != var5)) { _fun0001_ip = 365; continue _fun0001 }
 200:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.CloudUpload;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var16 = var7;
                    var15 = var10;
                    var14 = var11;
                    var6 = new var16[var6](var15, var14, var13);
                    var11 = var6 instanceof Object ? var6 : var7;
                    var7 = _closure1_slot1;
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.sendMessage;
                    var6 = var5.id;
                    var5 = {};
                    var10 = _closure1_slot15;
                    var4 = arg5;
                    var4 = var10.bind(var3)(var4);
                    var5['content'] = var4;
                    var4 = false;
                    var5['tts'] = var4;
                    var4 = new Array(0);
                    var5['invalidEmojis'] = var4;
                    var4 = new Array(0);
                    var5['validNonShortcutEmojis'] = var4;
                    var4 = {};
                    var10 = new Array(1);
                    var10[0] = var11;
                    var4['attachmentsToUpload'] = var10;
                    var9 = function onAttachmentUploadError(arg1, arg2, arg3) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleUploadMessageAttachmentsErrors;
                        var2 = {};
                        var5 = arg1;
                        var2['file'] = var5;
                        var6 = _closure4_slot0;
                        var5 = var6.getGuildId;
                        var5 = var5.bind(var6)();
                        var2['guildId'] = var5;
                        var5 = new Array(0);
                        var2['analyticsLocations'] = var5;
                        var5 = arg2;
                        var2['code'] = var5;
                        var5 = arg3;
                        var2['reason'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4['onAttachmentUploadError'] = var9;
                    var16 = var8;
                    var15 = var6;
                    var14 = var5;
                    var13 = undefined;
                    var12 = var4;
                    var4 = var16[var7](var15, var14, var13, var12, var11);
 365:
                    return var3;
 368:
                    return var2;
 371:
                    return var1;
                }
            };
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
    var4 = function getRemixSourceFromAttachment(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var7 = null;
            if(!(var7 != var4)) { _fun0002_ip = 319; continue _fun0002 }
 21:
            var2 = var4.width;
            if(!(var7 != var2)) { _fun0002_ip = 319; continue _fun0002 }
 33:
            var2 = var4.width;
            var5 = 0;
            if(!(!(var2 <= var5))) { _fun0002_ip = 319; continue _fun0002 }
 47:
            var2 = var4.height;
            if(!(var7 != var2)) { _fun0002_ip = 319; continue _fun0002 }
 59:
            var2 = var4.height;
            if(!(!(var2 <= var5))) { _fun0002_ip = 319; continue _fun0002 }
 71:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 14;
            var6 = var6[var5];
            var5 = undefined;
            var10 = var8.bind(var5)(var6);
            var9 = var10.urlMatchesFileExtension;
            var8 = var4.url;
            var6 = _closure1_slot13;
            var6 = var9.bind(var10)(var8, var6);
            if(var6) { _fun0002_ip = 319; continue _fun0002 }
 123:
            var9 = _closure1_slot8;
            var8 = var9.getChannel;
            var6 = var3.channel_id;
            var6 = var8.bind(var9)(var6);
            var8 = var4.proxy_url;
            if(!(var7 != var8)) { _fun0002_ip = 166; continue _fun0002 }
 152:
            var9 = var4.proxy_url;
            var8 = '';
            if(!(var8 === var9)) { _fun0002_ip = 173; continue _fun0002 }
 166:
            var11 = var4.url;
            _fun0002_ip = 179; continue _fun0002;
 173:
            var11 = var4.proxy_url;
 179:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var10 = var8.bind(var5)(var2);
            var9 = var10.getMobileOptimizedSrc;
            var8 = var4.width;
            var2 = var4.height;
            var8 = var9.bind(var10)(var11, var8, var2);
            var9 = var3.attachments;
            var2 = var9.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var1['uri'] = var8;
            var8 = var3.channel_id;
            var1['channelId'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 274; continue _fun0002 }
 269:
            var5 = var6.guild_id;
 274:
            var1['guildId'] = var5;
            var5 = var4.width;
            var1['width'] = var5;
            var4 = var4.height;
            var1['height'] = var4;
            var4 = false;
            var1['local'] = var4;
            var3 = var3.id;
            var1['messageId'] = var3;
            var1['mediaIndex'] = var2;
            return var1;
 319:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.NativeModules;
    var _closure1_slot6 = var9;
    var5 = var5.Image;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.REMIX_VIEW_MODAL_KEY;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot11 = var8;
    var8 = var5.AnalyticsObjects;
    var _closure1_slot12 = var8;
    var8 = var5.GIF_RE_IOS;
    var _closure1_slot13 = var8;
    var5 = var5.NOOP;
    var _closure1_slot14 = var5;
    var5 = function composeRemixMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0003_ip = 60; continue _fun0003 }
 16:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var4 = var2.bind(var3)(var4);
            var3 = var4.join;
            var2 = ' ';
            var1 = var3.bind(var4)(var2);
 60:
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/remixing/RemixingUtils.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function sendLocalFile() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendLocalFile'] = var5;
    var5 = function useDominantColorsFromImage(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var3 = new Array(0);
        var7 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 95; continue _fun0004 }
 13:
                var2 = _closure1_slot6;
                var4 = var2.ImageManager;
                var3 = var4.getDominantColors;
                var6 = _closure1_slot7;
                var5 = var6.resolveAssetSource;
                var2 = {};
                var7 = _closure2_slot0;
                var2['uri'] = var7;
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure2_slot1;
                    var2 = var4.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = 0;
                        var13 = var2[var1];
                        var1 = 1;
                        var11 = var2[var1];
                        var1 = 2;
                        var9 = var2[var1];
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var14 = 'rgba(';
                        var2 = ', ';
                        var8 = ', 1)';
                        var12 = var2;
                        var10 = var2;
                        var1 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = _closure1_slot14;
                var1 = var2.bind(var3)(var1);
 95:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useDominantColorsFromImage'] = var5;
    var5 = function getRemixSourceFromSelectedMedia(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg2;
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 37; continue _fun0005 }
 9:
            var3 = var1.mediaType;
            var2 = 'image';
            if(!(var2 === var3)) { _fun0005_ip = 37; continue _fun0005 }
 23:
            var3 = var1.sourceType;
            var2 = 'attachment';
            if(!(var2 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
 37:
            var2 = undefined;
            return var2;
 41:
            var4 = _closure1_slot17;
            var3 = var1.source;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        }
    };
    var3['getRemixSourceFromSelectedMedia'] = var5;
    var3['getRemixSourceFromAttachment'] = var4;
    var4 = function remixImage(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var9 = arg3;
            var5 = _closure1_slot17;
            var1 = undefined;
            var4 = arg1;
            var2 = arg2;
            var7 = var5.bind(var1)(var4, var2);
            var _closure2_slot0 = var7;
            var2 = null;
            if(!(var2 != var7)) { _fun0006_ip = 320; continue _fun0006 }
 39:
            var4 = _closure1_slot9;
            var5 = var4.initializeIfNeeded;
            var5 = var5.bind(var4)();
            var5 = var4.startRemixing;
            var5 = var5.bind(var4)();
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 16;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.enterRemixing;
            var7 = var5.bind(var6)(var7);
            var6 = var7.then;
            var5 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var8 = _closure1_slot0;
                var4 = 19;
                var4 = var3[var4];
                var8 = var8.bind(var1)(var4);
                var4 = 18;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var8.bind(var1)(var4, var3);
                var3 = {};
                var8 = _closure2_slot0;
                var3['source'] = var8;
                var8 = function onEnter() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['onEnter'] = var8;
                var7 = function onExit() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['onExit'] = var7;
                var2 = _closure1_slot10;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.catch;
            var3 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 21;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.presentError;
                var2 = 22;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.HxKEh4;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = var4.getSessionId;
            var6 = var3.bind(var4)();
            var2 = var2 == var9;
            var3 = undefined;
            if(var2) { _fun0006_ip = 149; continue _fun0006 }
 144:
            var3 = var9.location;
 149:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var11 = 23;
            var2 = var2[var11];
            var2 = var4.bind(var1)(var2);
            var2 = var2.MESSAGE_REMIX_TAG;
            if(!(var2 !== var3)) { _fun0006_ip = 206; continue _fun0006 }
 179:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var2 = var4.bind(var1)(var2);
            var2 = var2.MESSAGE_REMIX_BUTTON;
            if(!(var2 === var3)) { _fun0006_ip = 320; continue _fun0006 }
 206:
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var5 = var10.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot11;
            var3 = var2.REMIXING_BADGE_PRESSED;
            var2 = {};
            var2['remixing_session_id'] = var6;
            var6 = {};
            var12 = var9.section;
            var6['section'] = var12;
            var9 = var9.location;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var7 = var7.MESSAGE_REMIX_TAG;
            if(!(var9 !== var7)) { _fun0006_ip = 295; continue _fun0006 }
 283:
            var7 = _closure1_slot12;
            var7 = var7.MESSAGE_REMIX_BUTTON;
            _fun0006_ip = 305; continue _fun0006;
 295:
            var8 = _closure1_slot12;
            var7 = var8.BADGE;
 305:
            var6['object'] = var7;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 320:
            return var1;
        }
    };
    var3['remixImage'] = var4;
    var4 = function showRemixActionSheet(arg1, arg2, arg3) {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 20;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 19;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 25;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = {};
        var2 = arg1;
        var3['message'] = var2;
        var2 = arg2;
        var3['analyticsLocation'] = var2;
        var2 = arg3;
        var3['onClose'] = var2;
        var2 = 'REMIXING_ENTRYPOINT_ACTION_SHEET';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['showRemixActionSheet'] = var4;
    var2 = function getRemixMentions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var7;
            var1 = undefined;
            if(var4) { _fun0007_ip = 62; continue _fun0007 }
 39:
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.MentionElementTypes;
                    var4 = var5.has;
                    var3 = var2.type;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0008_ip = 71; continue _fun0008 }
 55:
                    var3 = var1.push;
                    var2 = var2.mention;
                    var2 = var3.bind(var1)(var2);
 71:
                    return var1;
                }
            };
            var4 = new Array(0);
            var1 = var6.bind(var7)(var5, var4);
 62:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRemixMentions'] = var2;
    return var1;
})();