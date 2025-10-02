// app/modules/messages/retrySendMessage.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/retrySendMessage.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function retrySendMessage(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var10 = arg3;
            var4 = arguments[3];
            var _closure2_slot0 = var6;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = {};
case 2:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var9 = 1;
            var3 = var3[var9];
            var13 = var7.bind(var1)(var3);
            var12 = var13.deleteMessage;
            var8 = var6.id;
            var7 = var5.id;
            var3 = true;
            var3 = var12.bind(var13)(var8, var7, var3);
            var3 = var5.isCommandType;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var5.content;
            var3 = var5.tts;
            var12 = var5.messageReference;
            var16 = var5.flags;
            var17 = var5.nonce;
            var14 = null;
            var7 = var14 == var10;
            var13 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var10.map;
            var7 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.on;
                    var2 = null;
                    var1 = var4;
                    if(!(var2 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.CloudUpload;
                    var2 = var3.fromJson;
                    var1 = var2.bind(var3)(var4);
case 8:
                    return var1;
                }
            };
            var13 = var8.bind(var10)(var7);
case 6:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var10 = var8.bind(var1)(var7);
            var9 = var10.sendMessage;
            var8 = var6.id;
            var7 = {};
            var7['content'] = var15;
            var7['tts'] = var3;
            var3 = new Array(0);
            var7['invalidEmojis'] = var3;
            var3 = new Array(0);
            var7['validNonShortcutEmojis'] = var3;
            var3 = {};
            var21 = var3;
            var20 = var4;
            var15 = copyDataProperties(var21, var20);
            var15 = 'nonce';
            var3[var15] = var17;
            var15 = 'flags';
            var3[var15] = var16;
            var15 = var14 != var12;
            var14 = undefined;
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var12;
case 10:
            var12 = 'messageReference';
            var3[var12] = var14;
            var12 = _closure1_slot3;
            var14 = var12.RETRY;
            var12 = 'location';
            var3[var12] = var14;
            var12 = 'attachmentsToUpload';
            var3[var12] = var13;
            var12 = function onAttachmentUploadError(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleUploadMessageAttachmentsErrors;
                var2 = {};
                var5 = arg1;
                var2['file'] = var5;
                var6 = _closure2_slot0;
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
            var11 = 'onAttachmentUploadError';
            var3[var11] = var12;
            var22 = var10;
            var21 = var8;
            var20 = var7;
            var19 = undefined;
            var18 = var3;
            var3 = var22[var9](var21, var20, var19, var18, var17);
            _fun0001_ip = 12; continue _fun0001;
case 4:
            var3 = var5.interactionData;
            var8 = null;
            var3 = var8 != var3;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var4.applicationId;
            var3 = var8 != var7;
case 13:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.retryCommandMessage;
            var2 = var2.bind(var3)(var5, var6, var4);
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();