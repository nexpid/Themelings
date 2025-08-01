// app/modules/polls/PollUploadAttachmentActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handlePollGifAttachmentAdd() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var15 = arg2;
                    var14 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 487; continue _fun0001 }
 16:
                    var11 = arg1;
                    var7 = var15;
                    var3 = var14;
                    var2 = undefined;
                    var8 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 3;
                    var12 = var12[var5];
                    var13 = var13.bind(var2)(var12);
                    var12 = var13.getFileNameFromGifUrl;
                    var8 = var12.bind(var13)(var15, var14);
 70: // try_start_0
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var5];
                    var13 = var13.bind(var2)(var12);
                    var12 = var13.downloadPollGif;
                    var3 = var12.bind(var13)(var3);
                    SaveGenerator(address=102);
 100:
                    return var3;
 102:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 479; continue _fun0001 }
 111:
                    var4 = var3;
                    var13 = null;
                    if(!(var13 != var3)) { _fun0001_ip = 476; continue _fun0001 }
 123:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = var14[var5];
                    var16 = var12.bind(var2)(var5);
                    var15 = var16.getFilePathForGif;
                    var5 = var8;
                    var19 = var15.bind(var16)(var5);
                    var5 = 4;
                    var5 = var14[var5];
                    var15 = var12.bind(var2)(var5);
                    var14 = var15.writeFile;
                    var18 = var4;
                    var20 = 'cache';
                    var17 = 'base64';
                    var21 = var15;
                    var4 = var21[var14](var20, var19, var18, var17, var16);
                    SaveGenerator(address=194);
 192:
                    return var4;
 194:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 473; continue _fun0001 }
 203:
                    var6 = var4;
                    if(!(var13 != var4)) { _fun0001_ip = 470; continue _fun0001 }
 213:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 5;
                    var5 = var14[var5];
                    var14 = var12.bind(var2)(var5);
                    var12 = var14.getImageDimensionsIfMissing;
                    var5 = var6;
                    var5 = var12.bind(var14)(var5);
                    SaveGenerator(address=251);
 249:
                    return var5;
 251:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 467; continue _fun0001 }
 260:
                    var9 = var5;
                    var12 = {};
                    var12['id'] = var7;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 6;
                    var14 = var14[var7];
                    var14 = var15.bind(var2)(var14);
                    var14 = var14.UploadOrigin;
                    var14 = var14.IMAGE_PICKER;
                    var12['origin'] = var14;
                    var14 = var6;
                    var12['uri'] = var14;
                    var12['originalUri'] = var14;
                    var12['filename'] = var8;
                    var8 = 'image/gif';
                    var12['mimeType'] = var8;
                    var14 = var13 == var5;
                    var8 = undefined;
                    if(var14) { _fun0001_ip = 352; continue _fun0001 }
 344:
                    var14 = var9;
                    var8 = var14.width;
 352:
                    var12['width'] = var8;
                    var8 = var9;
                    var13 = var13 == var8;
                    var8 = undefined;
                    if(var13) { _fun0001_ip = 373; continue _fun0001 }
 368:
                    var8 = var9.height;
 373:
                    var12['height'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.UploadPlatform;
                    var7 = var7.REACT_NATIVE;
                    var12['platform'] = var7;
                    var8 = _closure1_slot1;
                    var7 = 7;
                    var7 = var9[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.addFile;
                    var7 = {};
                    var7['file'] = var12;
                    var7['channelId'] = var11;
                    var10 = _closure1_slot4;
                    var10 = var10.Poll;
                    var7['draftType'] = var10;
                    var7 = var8.bind(var9)(var7);
 464: // try_end0
                    return var6;
 467:
                    return var5;
 470:
                    return var2;
 473:
                    return var4;
 476:
                    return var2;
 479:
                    return var3;
 482: // catch_target0
                    CatchBlockStart(arg_register=2);
                    return var2;
 487:
                    return var1;
                }
            };
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
    var1 = function _removePollUploadAttachment() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 150; continue _fun0002 }
 10:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = arg3;
 19: // try_start_0
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var6 = var8[var6];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var6);
                    var9 = var10.remove;
                    var6 = var5;
                    var5 = var4;
                    var4 = _closure1_slot4;
                    var4 = var4.Poll;
                    var4 = var9.bind(var10)(var6, var5, var4);
                    var6 = _closure1_slot0;
                    var3 = 4;
                    var3 = var8[var3];
                    var5 = var6.bind(var7)(var3);
                    var4 = var5.removeFile;
                    var3 = 3;
                    var3 = var8[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.getFilePathForGif;
                    var3 = var3.bind(var6)(var2);
                    var2 = 'cache';
                    var2 = var4.bind(var5)(var2, var3);
                    SaveGenerator(address=132);
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 140; continue _fun0002 }
 138: // try_end0
                    _fun0002_ip = 145; continue _fun0002;
 140:
                    return var2;
 143: // catch_target0
                    CatchBlockStart(arg_register=1);
 145:
                    var2 = undefined;
                    return var2;
 150:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _removeAllPollUploadAttachments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 118; continue _fun0003 }
 7:
                    var3 = arg1;
 10: // try_start_0
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.clearAll;
                    var4 = var3;
                    var3 = _closure1_slot4;
                    var3 = var3.Poll;
                    var3 = var7.bind(var8)(var4, var3);
                    var4 = _closure1_slot0;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.clearFolder;
                    var3 = _closure1_slot5;
                    var2 = 'cache';
                    var2 = var4.bind(var5)(var2, var3);
                    SaveGenerator(address=100);
 98:
                    return var2;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 108; continue _fun0003 }
 106: // try_end0
                    _fun0003_ip = 113; continue _fun0003;
 108:
                    return var2;
 111: // catch_target0
                    CatchBlockStart(arg_register=1);
 113:
                    var2 = undefined;
                    return var2;
 118:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var4.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/PollUploadAttachmentActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function handlePollGifAttachmentAdd() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handlePollGifAttachmentAdd'] = var4;
    var4 = function handlePollMediaAttachmentAdd() {
        var1 = undefined;
        return var1;
    };
    var3['handlePollMediaAttachmentAdd'] = var4;
    var4 = function removePollUploadAttachment() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removePollUploadAttachment'] = var4;
    var2 = function removeAllPollUploadAttachments() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeAllPollUploadAttachments'] = var2;
    return var1;
})();