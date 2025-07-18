// app/actions/native/UploadActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DraftType;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function restoreFailedUpload(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
        var2['type'] = var5;
        var5 = arg1;
        var2['messageId'] = var5;
        var5 = arg2;
        var2['file'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['restoreFailedUpload'] = var7;
    var7 = function cancel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = 2;
            var3 = var1[var4];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.dispatch;
            var3 = {};
            var8 = 'UPLOAD_CANCEL_REQUEST';
            var3['type'] = var8;
            var8 = arg1;
            var3['channelId'] = var8;
            var3['file'] = var2;
            var3 = var6.bind(var7)(var3);
            var6 = _closure1_slot4;
            var3 = var6.getMessageForFile;
            var2 = var2.id;
            var6 = var3.bind(var6)(var2);
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 198; continue _fun0001 }
 86:
            var8 = _closure1_slot2;
            var7 = var8.getDraft;
            var3 = var6.channel_id;
            var2 = _closure1_slot3;
            var2 = var2.ChannelMessage;
            var3 = var7.bind(var8)(var3, var2);
            var2 = '';
            if(!(var2 === var3)) { _fun0001_ip = 198; continue _fun0001 }
 125:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'DRAFT_SAVE';
            var2['type'] = var7;
            var7 = var6.channel_id;
            var2['channelId'] = var7;
            var6 = var6.content;
            var2['draft'] = var6;
            var5 = _closure1_slot3;
            var5 = var5.ChannelMessage;
            var2['draftType'] = var5;
            var2 = var3.bind(var4)(var2);
 198:
            return var1;
        }
    };
    var2['cancel'] = var7;
    var4 = function cancelUploadItem(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPLOAD_ITEM_CANCEL_REQUEST';
        var2['type'] = var5;
        var5 = arg1;
        var2['file'] = var5;
        var5 = arg2;
        var2['itemId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['cancelUploadItem'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/UploadActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();