// app/utils/AttachmentFile.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getAttachmentFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = var3;
                    var4 = arg2;
                    var10 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    var8 = undefined;
                    var6 = undefined;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 2;
                    var11 = var14[var11];
                    var12 = var12.bind(var10)(var11);
                    var3 = var3.item;
                    var11 = var3.platform;
                    var13 = _closure1_slot0;
                    var3 = 3;
                    var3 = var14[var3];
                    var3 = var13.bind(var10)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.REACT_NATIVE;
                    var11 = var11 === var3;
                    var3 = 'Upload must be in the React Native format';
                    var3 = var12.bind(var10)(var11, var3);
case 4: // try_start_1
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var11 = 4;
                    var3 = var3[var11];
                    var14 = var12.bind(var10)(var3);
                    var13 = var14.getFileInfo;
                    var12 = var9;
                    var3 = var4;
                    var3 = var13.bind(var14)(var12, var3);
                    SaveGenerator(address=149);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var8 = var3;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 5;
                    var12 = var14[var12];
                    var14 = var13.bind(var10)(var12);
                    var13 = var14.getAttachmentPayload;
                    var12 = var9;
                    var9 = var4;
                    var4 = var3.name;
                    var6 = var13.bind(var14)(var12, var9, var4);
case 9: // try_start_0
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var10 = var9.bind(var10)(var4);
                    var9 = var10.getFileSize;
                    var4 = var8;
                    var4 = var4.uri;
                    var4 = var9.bind(var10)(var4);
                    SaveGenerator(address=245);
case 10:
                    return var4;
case 11:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var4;
case 14: // try_end0
                    _fun0001_ip = 15; continue _fun0001;
case 12: // try_end1
                    return var4;
case 16: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
case 15:
                    var4 = {};
                    var4['file'] = var8;
                    var8 = var8.uri;
                    var4['uri'] = var8;
                    var8 = var6.filename;
                    var7 = var8;
                    var6 = null;
                    var8 = var6 != var8;
                    var6 = '';
                    if(!var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var6 = var7;
case 17:
                    var4['name'] = var6;
                    var4['fileSize'] = var5;
case 19: // try_end2
                    return var4;
case 7:
                    return var3;
case 20: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot4;
                    var3 = var4.error;
                    var2 = 'Failed to get attachment file';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _cancelGetAttachmentFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.cancelGetFileInfo;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=50);
case 23:
                    return var2;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    return var3;
case 25:
                    return var2;
case 21:
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
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'AttachmentFile';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/AttachmentFile.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAttachmentFile() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getAttachmentFile'] = var4;
    var4 = function cancelGetAttachmentFile() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGetAttachmentFile'] = var4;
    var2 = function fileIsInAppDir(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = var4;
            var2 = var4.replace;
            var1 = /^file:\\/\\//;
            var5 = '';
            var3 = var2.bind(var4)(var1, var5);
case 27: // try_start_0
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 4;
            var4 = var4[var7];
            var6 = undefined;
            var8 = var8.bind(var6)(var4);
            var4 = var8.getAppDir;
            var4 = var4.bind(var8)();
            var4 = var5 !== var4;
            var1 = var4;
            if(!var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = var3;
            var3 = var4.startsWith;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var5 = var5.bind(var6)(var2);
            var2 = var5.getAppDir;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 28: // try_end0
            return var1;
case 30: // catch_target0
            CatchBlockStart(arg_register=3);
            var3 = _closure1_slot4;
            var2 = var3.error;
            var1 = 'Failed to get app dir';
            var1 = var2.bind(var3)(var1, var4);
            var1 = false;
            return var1;
        }
    };
    var3['fileIsInAppDir'] = var2;
    return var1;
})();