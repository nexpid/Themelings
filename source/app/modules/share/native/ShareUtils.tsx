// app/modules/share/native/ShareUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _sendShareMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var2.attachments;
                    var5 = var2.channel;
                    var _closure4_slot0 = var5;
                    var10 = var2.comment;
                    var _closure4_slot1 = var10;
                    var6 = undefined;
                    var _closure4_slot2 = var6;
                    var _closure4_slot3 = var6;
                    var _closure4_slot4 = var6;
                    SaveGenerator(address=58);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var9 = var5.id;
                    _closure4_slot2 = var9;
                    var7 = var8.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var4 = {};
                        var2 = var1.uri;
                        var4['uri'] = var2;
                        var2 = var1.uri;
                        var4['originalUri'] = var2;
                        var2 = var1.mimeType;
                        var4['mimeType'] = var2;
                        var2 = var1.name;
                        var4['filename'] = var2;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var6 = var5[var2];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var6);
                        var6 = var6.UploadPlatform;
                        var6 = var6.REACT_NATIVE;
                        var4['platform'] = var6;
                        var6 = var1.width;
                        var4['width'] = var6;
                        var1 = var1.height;
                        var4['height'] = var1;
                        var1 = 8;
                        var1 = var5[var1];
                        var1 = var3.bind(var2)(var1);
                        var3 = var1.CloudUpload;
                        var1 = _closure4_slot0;
                        var7 = var1.id;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var9 = var2;
                        var8 = var4;
                        var1 = new var9[var3](var8, var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var11 = var7.bind(var8)(var4);
                    _closure4_slot3 = var11;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var8 = var7.bind(var6)(var4);
                    var7 = var8.parse;
                    var4 = null;
                    var13 = var4 != var10;
                    var4 = '';
                    if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var10;
case 8:
                    var10 = var7.bind(var8)(var5, var4);
                    var7 = var11.length;
                    var4 = 0;
                    if(!(var7 > var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var6)(var4);
                    var7 = var8.clearAll;
                    var4 = _closure1_slot4;
                    var4 = var4.ChannelMessage;
                    var4 = var7.bind(var8)(var9, var4);
case 10:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 10;
                    var4 = var9[var4];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.Future;
                    var7 = var4.prototype;
                    var7 = Object.create(var7, {constructor: {value: var4}});
                    var18 = var7;
                    var4 = new var18[var4](var17);
                    var4 = var4 instanceof Object ? var4 : var7;
                    _closure4_slot4 = var4;
                    var8 = _closure1_slot1;
                    var7 = 11;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.sendMessage;
                    var17 = var5.id;
                    var5 = {};
                    var12 = _closure1_slot5;
                    var12 = var12.SHARE_MODAL;
                    var5['location'] = var12;
                    var12 = true;
                    var5['doNotNotifyOnError'] = var12;
                    var5['attachmentsToUpload'] = var11;
                    var3 = function onAttachmentUploadError() {
                        var4 = _closure4_slot4;
                        var2 = var4.reject;
                        var1 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var2 = {};
                        var4 = _closure4_slot3;
                        var2['uploads'] = var4;
                        var4 = _closure4_slot2;
                        var2['channelId'] = var4;
                        var3 = _closure4_slot1;
                        var2['comment'] = var3;
                        var10 = var2.uploads;
                        var6 = var2.channelId;
                        var5 = var2.comment;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var9 = var4.bind(var1)(var3);
                        var8 = var9.setUploads;
                        var3 = {};
                        var3['channelId'] = var6;
                        var3['uploads'] = var10;
                        var10 = _closure1_slot4;
                        var10 = var10.ChannelMessage;
                        var3['draftType'] = var10;
                        var10 = true;
                        var3['resetState'] = var10;
                        var3 = var8.bind(var9)(var3);
                        var3 = 6;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.saveDraft;
                        var2 = _closure1_slot4;
                        var2 = var2.ChannelMessage;
                        var2 = var3.bind(var4)(var6, var5, var2);
                        return var1;
                    };
                    var5['onAttachmentUploadError'] = var3;
                    var15 = false;
                    var18 = var9;
                    var16 = var10;
                    var14 = var5;
                    var3 = var18[var8](var17, var16, var15, var14, var13);
                    SaveGenerator(address=337);
case 12:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var5 = var4.resolve;
                    var5 = var5.bind(var4)(var6);
                    var4 = var4.promise;
                    return var4;
case 14:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/ShareUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function showInformationToast(arg1) {
        var5 = arg1;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 3;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var8 = global;
        var8 = var8.HermesInternal;
        var9 = var8.concat;
        var8 = 'INFORMATION_TOAST-';
        var8 = var9.bind(var8)(var5);
        var2['key'] = var8;
        var2['content'] = var5;
        var5 = 4;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2['icon'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showInformationToast'] = var4;
    var2 = function sendShareMessage() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendShareMessage'] = var2;
    return var1;
})();