// app/utils/native/UploadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var27 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var27;
    var _closure1_slot2 = var15;
    var25 = function openImagePickerUnhandled() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var25;
    var1 = function _openImagePickerUnhandled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = arg1;
                    var13 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var4 = undefined;
                    var15 = undefined;
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 9;
                    var2 = var10[var2];
                    var10 = var3.bind(var13)(var2);
                    var3 = var10.requestPermission;
                    var2 = _closure1_slot19;
                    var2 = var2.PHOTOS;
                    var2 = var3.bind(var10)(var2);
                    SaveGenerator(address=77);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = global;
                    var11 = var3.Error;
                    var3 = var11.prototype;
                    var10 = Object.create(var3, {constructor: {value: var11}});
                    var23 = 'Missing permission';
                    var24 = var10;
                    var3 = new var24[var11](var23, var22);
                    var3 = var3 instanceof Object ? var3 : var10;
                    throw var3;
case 8:
                    var10 = var14;
                    var3 = 'size';
                    var3 = var3 in var10;
                    var10 = {};
                    var11 = var14;
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = var11.width;
                    var10['width'] = var3;
                    var3 = var11.height;
                    var10['height'] = var3;
                    var3 = var10;
                    _fun0001_ip = 12; continue _fun0001;
case 10:
                    var12 = var11.size;
                    var10['width'] = var12;
                    var11 = var11.size;
                    var10['height'] = var11;
                    var3 = var10;
case 12:
                    var18 = var3.width;
                    var17 = var3.height;
                    var11 = global;
                    var12 = var11.Promise;
                    var3 = var12.prototype;
                    var10 = Object.create(var3, {constructor: {value: var12}});
                    var23 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.launchImageLibrary;
                        var3 = {'mediaType': 'photo', 'includeBase64': true, 'disableNewIOSPicker': true};
                        var2 = function(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var1 = arg1;
                                var2 = var1.assets;
                                var3 = null;
                                var2 = var3 != var2;
                                var5 = null;
                                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                                var2 = var1.assets;
                                var2 = var2.length;
                                var4 = 0;
                                var2 = var2 > var4;
                                var5 = null;
                                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                                var2 = var1.assets;
                                var5 = var2[var4];
case 13:
                                var2 = var1.didCancel;
                                if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                                var2 = var1.errorCode;
                                if(!(var3 == var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                                var6 = var3 == var5;
                                var4 = undefined;
                                var2 = undefined;
                                if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                                var2 = var5.uri;
case 20:
                                if(!(var3 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 22:
                                var3 = _closure5_slot0;
                                var2 = {};
                                var6 = var5.uri;
                                var2['uri'] = var6;
                                var5 = var5.base64;
                                var2['base64'] = var5;
                                var2 = var3.bind(var4)(var2);
                                _fun0002_ip = 23; continue _fun0002;
case 18:
                                var3 = _closure5_slot1;
                                var2 = global;
                                var4 = var2.Error;
                                var7 = var1.errorMessage;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {constructor: {value: var4}});
                                var8 = var2;
                                var1 = new var8[var4](var7, var6);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                _fun0002_ip = 23; continue _fun0002;
case 16:
                                var3 = _closure5_slot1;
                                var1 = global;
                                var4 = var1.Error;
                                var7 = _closure1_slot23;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {constructor: {value: var4}});
                                var8 = var2;
                                var1 = new var8[var4](var7, var6);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
case 23:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var24 = var10;
                    var3 = new var24[var12](var23, var22);
                    var3 = var3 instanceof Object ? var3 : var10;
                    SaveGenerator(address=235);
case 24:
                    return var3;
case 25:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var6 = var3;
                    var12 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 11;
                    var10 = var16[var10];
                    var19 = var12.bind(var13)(var10);
                    var12 = var19.getFile;
                    var10 = {};
                    var20 = var3.uri;
                    var10['uri'] = var20;
                    var20 = '';
                    var10['i'] = var20;
                    var9 = var12.bind(var19)(var10);
                    var12 = _closure1_slot1;
                    var10 = 12;
                    var10 = var16[var10];
                    var16 = var12.bind(var13)(var10);
                    var12 = var16.fromFileUri;
                    var10 = var3.uri;
                    var12 = var12.bind(var16)(var10);
                    var10 = var12.catch;
                    var5 = function() {
                        var1 = null;
                        return var1;
                    };
                    var4 = var10.bind(var12)(var5);
                    var5 = var3.base64;
                    var16 = null;
                    if(!(var16 != var5)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 13;
                    var5 = var12[var5];
                    var10 = var10.bind(var13)(var5);
                    var5 = var10.isAndroid;
                    var5 = var5.bind(var10)();
                    if(!var5) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                    var5 = var6;
                    var12 = var5.base64;
                    var10 = var12.startsWith;
                    var5 = 'UklGR';
                    var5 = var10.bind(var12)(var5);
                    if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var5 = var6;
                    var12 = var5.base64;
                    var10 = var12.indexOf;
                    var5 = 'ZnR5cA==';
                    var10 = var10.bind(var12)(var5);
                    var5 = 4;
                    if(!(var5 === var10)) { _fun0001_ip = 28; continue _fun0001 }
case 33:
                    var5 = var6;
                    var12 = var5.base64;
                    var10 = var12.indexOf;
                    var5 = 'YXZpZg==';
                    var5 = var10.bind(var12)(var5);
                    var10 = 8;
                    if(!(var10 !== var5)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var5 = var6;
                    var19 = var5.base64;
                    var12 = var19.indexOf;
                    var5 = 'YXZpcw==';
                    var5 = var12.bind(var19)(var5);
                    if(!(var10 !== var5)) { _fun0001_ip = 34; continue _fun0001 }
case 28:
                    var5 = var9;
                    var10 = var5.type;
                    var5 = 'image/gif';
                    if(!(var5 !== var10)) { _fun0001_ip = 36; continue _fun0001 }
case 37: // try_start_0
                    var12 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var10 = 10;
                    var10 = var19[var10];
                    var13 = var12.bind(var13)(var10);
                    var12 = var13.launchCropper;
                    var10 = {};
                    var19 = var6;
                    var19 = var19.uri;
                    var10['uri'] = var19;
                    var10['width'] = var18;
                    var10['height'] = var17;
                    var17 = true;
                    var10['includeBase64'] = var17;
                    var14 = var14.preferredMimeType;
                    var15 = var14;
                    if(!(var16 == var14)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var14 = var9;
                    var14 = var14.type;
                    _fun0001_ip = 40; continue _fun0001;
case 38:
                    var14 = var15;
case 40:
                    var10['mimeType'] = var14;
                    var10 = var12.bind(var13)(var10);
                    SaveGenerator(address=648);
case 41:
                    return var10;
case 42:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var12 = {};
                    var16 = var10.mime;
                    var15 = var10.data;
                    var11 = var11.HermesInternal;
                    var14 = var11.concat;
                    var13 = 'data:';
                    var11 = ';base64,';
                    var11 = var14.bind(var13)(var16, var11, var15);
                    var12['base64'] = var11;
                    var11 = var10.mime;
                    var12['mimeType'] = var11;
                    var11 = var4;
                    SaveGenerator(address=720);
case 45:
                    return var11;
case 46:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var12['originalMd5'] = var11;
case 49: // try_end0
                    return var12;
case 47:
                    return var11;
case 43:
                    return var10;
case 50: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var8 = var10;
                    var11 = var10.code;
                    var10 = 'E_PICKER_CANCELLED';
                    if(!(var10 !== var11)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var10 = {};
                    var12 = _closure1_slot13;
                    var11 = var6;
                    var11 = var11.base64;
                    var11 = var12 + var11;
                    var10['base64'] = var11;
                    var9 = var9.type;
                    var10['mimeType'] = var9;
                    var9 = var8;
                    var9 = var9.message;
                    var10['errorStr'] = var9;
                    var9 = var4;
                    SaveGenerator(address=814);
case 53:
                    return var9;
case 54:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var10['originalMd5'] = var9;
                    return var10;
case 55:
                    return var9;
case 51:
                    throw var8;
case 36:
                    var8 = {};
                    var10 = _closure1_slot14;
                    var9 = var6;
                    var9 = var9.base64;
                    var9 = var10 + var9;
                    var8['base64'] = var9;
                    var8['mimeType'] = var5;
                    var5 = var4;
                    SaveGenerator(address=869);
case 57:
                    return var5;
case 58:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var8['originalMd5'] = var5;
                    return var8;
case 59:
                    return var5;
case 34:
                    var8 = {};
                    var9 = _closure1_slot18;
                    var5 = var6;
                    var5 = var5.base64;
                    var5 = var9 + var5;
                    var8['base64'] = var5;
                    var5 = 'image/avif';
                    var8['mimeType'] = var5;
                    var5 = var4;
                    SaveGenerator(address=928);
case 61:
                    return var5;
case 62:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var8['originalMd5'] = var5;
                    return var8;
case 63:
                    return var5;
case 31:
                    var5 = {};
                    var7 = _closure1_slot17;
                    var6 = var6.base64;
                    var6 = var7 + var6;
                    var5['base64'] = var6;
                    var6 = 'image/webp';
                    var5['mimeType'] = var6;
                    SaveGenerator(address=981);
case 65:
                    return var4;
case 66:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                    var5['originalMd5'] = var4;
                    return var5;
case 67:
                    return var4;
case 26:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var21 = function openImagePicker() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _openImagePicker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 69:
                    var5 = arg1;
                    var10 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var8 = var7.bind(var10)(var2);
                    var7 = var8.requestPermission;
                    var2 = _closure1_slot19;
                    var2 = var2.PHOTOS;
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=65);
case 70:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    if(var2) { _fun0003_ip = 74; continue _fun0003 }
case 5:
                    var7 = {};
                    var8 = 'Missing permission';
                    var7['errorStr'] = var8;
                    return var7;
case 74: // try_start_0
                    var7 = _closure1_slot24;
                    var5 = var7.bind(var10)(var5);
                    SaveGenerator(address=106);
case 75:
                    return var5;
case 76:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                    var6 = var5;
                    var8 = var5.errorStr;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0003_ip = 79; continue _fun0003 }
case 18:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 14;
                    var7 = var14[var7];
                    var9 = var11.bind(var10)(var7);
                    var8 = var9.presentFailedToast;
                    var7 = 15;
                    var12 = var14[var7];
                    var12 = var11.bind(var10)(var12);
                    var13 = var12.intl;
                    var12 = var13.formatToPlainString;
                    var7 = var14[var7];
                    var7 = var11.bind(var10)(var7);
                    var7 = var7.t;
                    var11 = var7.Ex162J;
                    var7 = {};
                    var14 = var6;
                    var14 = var14.errorStr;
                    var7['reason'] = var14;
                    var7 = var12.bind(var13)(var11, var7);
                    var7 = var8.bind(var9)(var7);
case 79: // try_end0
                    return var6;
case 77:
                    return var5;
case 80: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var6 = var5.code;
                    var5 = 'E_PICKER_CANCELLED';
                    if(!(var5 !== var6)) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                    var5 = var3;
                    var6 = var5.message;
                    var5 = _closure1_slot23;
                    if(!(var6 !== var5)) { _fun0003_ip = 81; continue _fun0003 }
case 83:
                    var5 = var3;
                    var6 = var5.code;
                    var5 = 'E_CROPPER_IMAGE_NOT_FOUND';
                    if(!(var5 !== var6)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 14;
                    var5 = var7[var5];
                    var7 = var6.bind(var10)(var5);
                    var6 = var7.presentFailedToast;
                    var5 = var3;
                    var3 = var5.message;
                    var3 = var6.bind(var7)(var3);
                    var3 = {};
                    var5 = var5.message;
                    var3['errorStr'] = var5;
                    _fun0003_ip = 86; continue _fun0003;
case 84:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 14;
                    var4 = var11[var4];
                    var6 = var9.bind(var10)(var4);
                    var5 = var6.presentFailedToast;
                    var4 = 15;
                    var7 = var11[var4];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var11[var4];
                    var4 = var9.bind(var10)(var4);
                    var4 = var4.t;
                    var4 = var4.TTzyzW;
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var4);
                    var4 = {};
                    var5 = 'No select photo access';
                    var4['errorStr'] = var5;
                    var3 = var4;
case 86:
                    _fun0003_ip = 87; continue _fun0003;
case 81:
                    var4 = {};
                    var5 = 'Cancelled';
                    var4['errorStr'] = var5;
                    var3 = var4;
case 87:
                    return var3;
case 72:
                    return var2;
case 33:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var20 = function mediaManager() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var20;
    var1 = function _mediaManager() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 88; continue _fun0004 }
case 69:
                    var6 = arg1;
                    var5 = arg2;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                    var2 = null;
case 89:
                    var4 = var2;
                    SaveGenerator(address=31);
case 91:
                    return var3;
case 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 93; continue _fun0004 }
case 94: // try_start_0
                    var7 = _closure1_slot6;
                    var7 = var7.MediaManager;
                    var6 = var7[var6];
                    var4 = var6.bind(var7)(var5, var4);
                    SaveGenerator(address=64);
case 95:
                    return var4;
case 96:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 97; continue _fun0004 }
case 98: // try_end0
                    return var4;
case 97:
                    return var4;
case 99: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot20;
                    var4 = var5.warn;
                    var4 = var4.bind(var5)(var6);
                    return var3;
case 93:
                    return var2;
case 88:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var19 = function getVideoQuality() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot10;
            var2 = var2.dataSavingMode;
            if(!var2) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            var3 = _closure1_slot11;
            var2 = var3.getType;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot15;
            var2 = var2.CELLULAR;
            if(!(var3 !== var2)) { _fun0005_ip = 8; continue _fun0005 }
case 100:
            var3 = _closure1_slot12;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var2 = _closure1_slot10;
            var5 = var2.videoUploadQuality;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.canUseHighVideoUploadQuality;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            var2 = _closure1_slot31;
            var2 = var2.bind(var4)(var5);
            _fun0005_ip = 104; continue _fun0005;
case 102:
            var3 = _closure1_slot30;
            var2 = var3.bind(var4)(var5);
case 104:
            return var2;
case 8:
            var1 = _closure1_slot8;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot29 = var19;
    var18 = function resolveModeToVideoQualityForUserWithFeature(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.DATA_SAVER;
            if(!(var2 !== var3)) { _fun0006_ip = 105; continue _fun0006 }
case 14:
            var2 = _closure1_slot9;
            var2 = var2.STANDARD;
            if(!(var2 !== var3)) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var2 = _closure1_slot9;
            var2 = var2.BEST;
            if(!(var2 !== var3)) { _fun0006_ip = 108; continue _fun0006 }
case 109:
            var2 = _closure1_slot8;
            var2 = var2.MEDIUM;
            return var2;
case 108:
            var2 = _closure1_slot8;
            var2 = var2.VERY_HIGH;
            return var2;
case 106:
            var2 = _closure1_slot8;
            var2 = var2.HIGH;
            return var2;
case 105:
            var1 = _closure1_slot8;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot30 = var18;
    var17 = function resolveModeToVideoQualityForFreeUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.DATA_SAVER;
            if(!(var2 !== var3)) { _fun0007_ip = 105; continue _fun0007 }
case 14:
            var2 = _closure1_slot9;
            var2 = var2.STANDARD;
            if(!(var2 !== var3)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            var2 = _closure1_slot9;
            var2 = var2.BEST;
            if(!(var2 !== var3)) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            var2 = _closure1_slot8;
            var2 = var2.LOW;
            return var2;
case 108:
            var2 = _closure1_slot8;
            var2 = var2.HIGH;
            return var2;
case 106:
            var2 = _closure1_slot8;
            var2 = var2.MEDIUM;
            return var2;
case 105:
            var1 = _closure1_slot8;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot31 = var17;
    var16 = function getAppDir() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0008_ip = 110; continue _fun0008 }
case 111:
            var2 = _closure1_slot6;
            var2 = var2.DCDFileManager;
            var6 = var2.DocumentsDirPath;
            var5 = var6.replace;
            var4 = /Documents$/;
            var2 = '';
            var4 = var5.bind(var6)(var4, var2);
            var2 = '/private';
            var2 = var2 + var4;
            return var2;
case 110:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 18;
            var2 = var2[var4];
            var5 = var5.bind(var3)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0008_ip = 112; continue _fun0008 }
case 113:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getConstants;
            var1 = var1.bind(var2)();
            var4 = var1.CacheDirPath;
            var3 = var4.replace;
            var2 = /cache$/;
            var1 = '';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 112:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var8 = "RTNFileManager doesn't exist?";
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var13 = function getFileInfo(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var5 = arguments[1];
            var8 = var1.item;
            var7 = var1.spoiler;
            var6 = var1.description;
            var9 = var1.mimeType;
            var1 = var1.allowOptimization;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0009_ip = 114; continue _fun0009 }
case 15:
            var5 = '';
case 114:
            var11 = var8.platform;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 17;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.UploadPlatform;
            var10 = var10.REACT_NATIVE;
            if(!(var11 === var10)) { _fun0009_ip = 115; continue _fun0009 }
case 116:
            var11 = var8.originalUri;
            var10 = var8.filename;
            var12 = var8.mimeType;
            var13 = null;
            if(!(var13 != var12)) { _fun0009_ip = 113; continue _fun0009 }
case 117:
            var9 = var12;
case 113:
            var3 = _closure1_slot35;
            var3 = var3.bind(var4)(var11, var9);
            if(var3) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            var3 = {};
            var3['originalUri'] = var11;
            var3['filename'] = var10;
            var3['mimeType'] = var9;
            var3['spoiler'] = var7;
            var3['description'] = var6;
            var3['i'] = var5;
            var12 = var8.width;
            var3['width'] = var12;
            var12 = var8.height;
            var3['height'] = var12;
            var3['allowOptimization'] = var1;
            var1 = function processImageOrFileUpload(arg1) {
                var1 = undefined;
                var4 = _closure1_slot41;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var1.bind(var4)(var3);
            _fun0009_ip = 120; continue _fun0009;
case 118:
            var3 = {};
            var3['originalUri'] = var11;
            var3['filename'] = var10;
            var3['mimeType'] = var9;
            var8 = var8.size;
            var3['fileSize'] = var8;
            var3['spoiler'] = var7;
            var3['description'] = var6;
            var3['i'] = var5;
            var2 = function processVideoUpload(arg1) {
                var1 = undefined;
                var4 = _closure1_slot40;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var2.bind(var4)(var3);
case 120:
            return var1;
case 115:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var15 = 'Try to get file info for unsupported upload item';
            var16 = var2;
            var1 = new var16[var3](var15, var14);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var1 = function _getPhotoKitDataUTI() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 121; continue _fun0010 }
case 69:
                    var3 = arg1;
                    var4 = undefined;
                    var5 = undefined;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 13;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.isIOS;
                    var6 = var6.bind(var7)();
                    if(!var6) { _fun0010_ip = 99; continue _fun0010 }
case 122:
                    var8 = var3;
                    var7 = var8.startsWith;
                    var6 = 'ph://';
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0010_ip = 123; continue _fun0010 }
case 99:
                    return var4;
case 123: // try_start_0
                    var6 = _closure1_slot6;
                    var7 = var6.MediaManager;
                    var6 = var7.getImageContentType;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=106);
case 75:
                    return var3;
case 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 124; continue _fun0010 }
case 78:
                    var5 = var3;
                    var6 = null;
                    var6 = var6 != var3;
                    var4 = undefined;
                    if(!var6) { _fun0010_ip = 125; continue _fun0010 }
case 126:
                    var4 = var5;
case 125: // try_end0
                    return var4;
case 124:
                    return var3;
case 127: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot20;
                    var3 = var4.warn;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'getImageContentType failed: ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
case 121:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function _shouldConvertToPNG() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 128; continue _fun0011 }
case 129:
                    var3 = arg1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0011_ip = 130; continue _fun0011 }
case 131:
                    var5 = false;
                    return var5;
case 130:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.isPhotoKitAsset;
                    var5 = var3;
                    var6 = var6.bind(var7)(var5, var8);
                    var5 = null;
                    if(var6) { _fun0011_ip = 132; continue _fun0011 }
case 133:
                    var9 = var3;
                    var7 = var9.match;
                    var6 = /^(assets-library|file):\/\/.+(&ext=|\.)png$/i;
                    var6 = var7.bind(var9)(var6);
                    if(!(var5 != var6)) { _fun0011_ip = 134; continue _fun0011 }
case 135:
                    _fun0011_ip = 136; continue _fun0011;
case 134:
                    var6 = false;
                    return var6;
case 132:
                    var6 = var5 == var8;
                    var4 = undefined;
                    if(var6) { _fun0011_ip = 137; continue _fun0011 }
case 138:
                    var7 = var8.match;
                    var6 = /\.png$/i;
                    var4 = var7.bind(var8)(var6);
case 137:
                    if(!(var5 != var4)) { _fun0011_ip = 139; continue _fun0011 }
case 136: // try_start_0
                    var4 = _closure1_slot6;
                    var5 = var4.MediaManager;
                    var4 = var5.imageHasTransparency;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=203);
case 140:
                    return var3;
case 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 142; continue _fun0011 }
case 143: // try_end0
                    return var3;
case 142:
                    return var3;
case 144: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot20;
                    var3 = var4.error;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'shouldConvertToPNG: imageHasTransparency failed: ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
case 139:
                    var2 = false;
                    return var2;
case 128:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var12 = function shouldResolveToMediaFilePath(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0012_ip = 106; continue _fun0012 }
case 145:
            var3 = var4.match;
            var2 = /^content:\/\/.+$/i;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var1 = var2 != var3;
case 106:
            return var1;
        }
    };
    var _closure1_slot34 = var12;
    var11 = function isVideo(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var4 = arg2;
        var1['overrideType'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.isVideo;
        return var1;
    };
    var _closure1_slot35 = var11;
    var10 = function isImage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var4 = arg2;
        var1['overrideType'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.isImage;
        return var1;
    };
    var _closure1_slot36 = var10;
    var9 = function getType(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.type;
        return var1;
    };
    var1 = function convertVideo(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var3 = var2.uri;
            var _closure2_slot0 = var3;
            var3 = var2.filename;
            var _closure2_slot1 = var3;
            var3 = var2.isLowQuality;
            var _closure2_slot2 = var3;
            var3 = var2.compressionQuality;
            var _closure2_slot3 = var3;
            var6 = var2.videoQualitySetting;
            var _closure2_slot4 = var6;
            var3 = var2.videoMetadata;
            var15 = var2.fileSize;
            var11 = undefined;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 20;
            var2 = var8[var12];
            var2 = var7.bind(var11)(var2);
            var5 = var2.VideoQualityTarget;
            var2 = var5.fromCompressionQuality;
            var13 = var2.bind(var5)(var6);
            var2 = var8[var12];
            var6 = var7.bind(var11)(var2);
            var5 = var6.canSkipVideoTranscode;
            var2 = 21;
            var2 = var8[var2];
            var10 = var7.bind(var11)(var2);
            var2 = var10.maxFileSize;
            var14 = var2.bind(var10)();
            var18 = var6;
            var17 = var13;
            var16 = var3;
            var5 = var18[var5](var17, var16, var15, var14, var13);
            var _closure2_slot5 = var5;
            var2 = var8[var12];
            var9 = var7.bind(var11)(var2);
            var6 = var9.calculateTargetDimensions;
            var2 = var13.targetResolution;
            var6 = var6.bind(var9)(var3, var2);
            var2 = var8[var12];
            var10 = var7.bind(var11)(var2);
            var9 = var10.calculateOptimalBitrate;
            var2 = var8[var12];
            var2 = var7.bind(var11)(var2);
            var2 = var2.DEFAULT_VIDEO_ENCODING_CONFIG;
            var2 = var2.bitrateFloor;
            var9 = var9.bind(var10)(var3, var13, var2);
            var2 = {};
            var10 = var8[var12];
            var10 = var7.bind(var11)(var10);
            var16 = var10.DEFAULT_VIDEO_ENCODING_CONFIG;
            var17 = var2;
            var10 = copyDataProperties(var17, var16);
            var10 = 'videoQuality';
            var2[9] = var13;
            var13 = var6.width;
            var10 = 'targetWidth';
            var2[9] = var13;
            var10 = var6.height;
            var6 = 'targetHeight';
            var2[5] = var10;
            var6 = 'targetBitrate';
            var2[5] = var9;
            var6 = 13;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if(!var6) { _fun0013_ip = 146; continue _fun0013 }
case 147:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.getSystemVersionMajor;
            var7 = var6.bind(var7)();
            var6 = 34;
            if(!(!(var7 > var6))) { _fun0013_ip = 148; continue _fun0013 }
case 146:
            var6 = var3.frameRate;
            _fun0013_ip = 149; continue _fun0013;
case 148:
            var7 = global;
            var9 = var7.Math;
            var8 = var9.min;
            var7 = var3.frameRate;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var10.bind(var11)(var4);
            var4 = var4.DEFAULT_VIDEO_ENCODING_CONFIG;
            var4 = var4.frameRate;
            var6 = var8.bind(var9)(var7, var4);
case 149:
            var4 = 'frameRate';
            var2[3] = var6;
            var4 = 'skipVideoTranscode';
            var2[3] = var5;
            var5 = var3.isHDRContent;
            var4 = 'createHDR';
            var2[3] = var5;
            var4 = var3.rotationDegrees;
            var3 = 'rotationDegrees';
            var2[2] = var4;
            _closure2_slot6 = var2;
            var2 = 0;
            _closure2_slot7 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var17 = function(arg1, arg2) {
                var4 = arg2;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var4;
                var1 = function resolveWithConfig(arg1) {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var1 = arg1;
                    var2['path'] = var1;
                    var1 = _closure2_slot6;
                    var2['encodingConfig'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot2 = var1;
                var3 = function() {
                    var4 = _closure1_slot5;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0014_ip = 150; continue _fun0014 }
case 69:
                                var14 = function* _loop() {
                                    var1 = function* anon_0__loop() {
                                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0015_ip = 151; continue _fun0015 }
case 3:
                                            var7 = undefined;
                                            var _closure8_slot0 = var7;
                                            var5 = _closure1_slot46;
                                            var2 = _closure2_slot6;
                                            var2 = var5.bind(var7)(var2);
                                            SaveGenerator(address=41);
case 152:
                                            return var2;
case 145:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                            if(var5) { _fun0015_ip = 153; continue _fun0015 }
case 154:
                                            var5 = var2.isSupported;
                                            if(var5) { _fun0015_ip = 155; continue _fun0015 }
case 95:
                                            var12 = null;
                                            if(!(var12 != var2)) { _fun0015_ip = 156; continue _fun0015 }
case 19:
                                            var5 = var2.capabilities;
                                            if(!(var12 != var5)) { _fun0015_ip = 156; continue _fun0015 }
case 105:
                                            var5 = var2.failures;
                                            if(!(var12 != var5)) { _fun0015_ip = 156; continue _fun0015 }
case 157:
                                            var5 = var2.failures;
                                            var5 = var5.length;
                                            var9 = 0;
                                            if(!(var9 !== var5)) { _fun0015_ip = 156; continue _fun0015 }
case 158:
                                            var10 = var2.failures;
                                            var6 = var10.find;
                                            var5 = function(arg1) {
                                                var1 = arg1;
                                                var2 = var1.type;
                                                var1 = 'codec_not_found';
                                                var1 = var1 === var2;
                                                return var1;
                                            };
                                            var5 = var6.bind(var10)(var5);
                                            if(!(var12 == var5)) { _fun0015_ip = 159; continue _fun0015 }
case 160:
                                            var10 = var2.failures;
                                            var6 = var10.find;
                                            var5 = function(arg1) {
                                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                                    var2 = arg1;
                                                    var3 = var2.type;
                                                    var1 = 'resolution';
                                                    var1 = var1 === var3;
                                                    if(var1) { _fun0016_ip = 107; continue _fun0016 }
case 161:
                                                    var3 = var2.type;
                                                    var2 = 'resolution_alignment';
                                                    var1 = var2 === var3;
case 107:
                                                    return var1;
                                                }
                                            };
                                            var5 = var6.bind(var10)(var5);
                                            var5 = var12 != var5;
                                            var6 = false;
                                            var10 = false;
                                            if(!var5) { _fun0015_ip = 162; continue _fun0015 }
case 163:
                                            var5 = var2.capabilities;
                                            var5 = var5.resolution;
                                            var5 = var12 != var5;
                                            var10 = false;
                                            if(!var5) { _fun0015_ip = 162; continue _fun0015 }
case 164:
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetHeight;
                                            if(!(var9 !== var5)) { _fun0015_ip = 165; continue _fun0015 }
case 166:
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetWidth;
                                            if(!(var9 !== var5)) { _fun0015_ip = 165; continue _fun0015 }
case 167:
                                            var5 = var2.capabilities;
                                            var5 = var5.resolution;
                                            var15 = var5.maxWidth;
                                            var5 = var2.capabilities;
                                            var5 = var5.resolution;
                                            var16 = var5.maxHeight;
                                            var5 = _closure2_slot6;
                                            var9 = var5.targetWidth;
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetHeight;
                                            var9 = var9 / var5;
                                            var13 = global;
                                            var14 = var13.Math;
                                            var11 = var14.min;
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetWidth;
                                            var11 = var11.bind(var14)(var5, var15);
                                            var15 = var13.Math;
                                            var14 = var15.min;
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetHeight;
                                            var5 = var14.bind(var15)(var5, var16);
                                            var14 = _closure2_slot6;
                                            var14 = var14.targetWidth;
                                            if(!(var11 !== var14)) { _fun0015_ip = 168; continue _fun0015 }
case 169:
                                            var16 = var13.Math;
                                            var15 = var16.round;
                                            var14 = var11 / var9;
                                            var5 = var15.bind(var16)(var14);
case 168:
                                            var14 = _closure2_slot6;
                                            var14 = var14.targetHeight;
                                            if(!(var5 !== var14)) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                                            var15 = var13.Math;
                                            var14 = var15.round;
                                            var9 = var5 * var9;
                                            var11 = var14.bind(var15)(var9);
case 170:
                                            var9 = var2.capabilities;
                                            var9 = var9.blockSize;
                                            var14 = var9.widthAlignment;
                                            var9 = var9.heightAlignment;
                                            var16 = var13.Math;
                                            var15 = var16.floor;
                                            var11 = var11 / var14;
                                            var11 = var15.bind(var16)(var11);
                                            var11 = var11 * var14;
                                            var14 = var13.Math;
                                            var13 = var14.floor;
                                            var5 = var5 / var9;
                                            var5 = var13.bind(var14)(var5);
                                            var9 = var5 * var9;
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetWidth;
                                            var5 = var11 === var5;
                                            if(!var5) { _fun0015_ip = 172; continue _fun0015 }
case 173:
                                            var13 = _closure2_slot6;
                                            var13 = var13.targetHeight;
                                            var5 = var9 === var13;
case 172:
                                            var10 = false;
                                            if(var5) { _fun0015_ip = 162; continue _fun0015 }
case 174:
                                            var5 = _closure2_slot6;
                                            var5['targetWidth'] = var11;
                                            var5 = _closure2_slot6;
                                            var5['targetHeight'] = var9;
                                            var10 = true;
case 162:
                                            var11 = var2.failures;
                                            var9 = var11.find;
                                            var5 = function(arg1) {
                                                var1 = arg1;
                                                var2 = var1.type;
                                                var1 = 'frameRate';
                                                var1 = var1 === var2;
                                                return var1;
                                            };
                                            var9 = var9.bind(var11)(var5);
                                            var11 = var2.capabilities;
                                            _closure8_slot0 = var11;
                                            var5 = var10;
                                            if(!(var12 != var9)) { _fun0015_ip = 175; continue _fun0015 }
case 176:
                                            var14 = var12 == var11;
                                            var13 = undefined;
                                            if(var14) { _fun0015_ip = 38; continue _fun0015 }
case 177:
                                            var14 = var11.frameRate;
                                            var15 = var12 == var14;
                                            var13 = undefined;
                                            if(var15) { _fun0015_ip = 38; continue _fun0015 }
case 178:
                                            var13 = var14.min;
case 38:
                                            var5 = var10;
                                            if(!(var12 != var13)) { _fun0015_ip = 175; continue _fun0015 }
case 179:
                                            var14 = var12 == var11;
                                            var13 = undefined;
                                            if(var14) { _fun0015_ip = 180; continue _fun0015 }
case 181:
                                            var14 = var11.frameRate;
                                            var15 = var12 == var14;
                                            var13 = undefined;
                                            if(var15) { _fun0015_ip = 180; continue _fun0015 }
case 182:
                                            var13 = var14.max;
case 180:
                                            var5 = var10;
                                            if(!(var12 != var13)) { _fun0015_ip = 175; continue _fun0015 }
case 183:
                                            var13 = _closure2_slot6;
                                            var13 = var13.frameRate;
                                            var14 = var9.message;
                                            var13 = var14.includes;
                                            var9 = 'not supported at resolution';
                                            var9 = var13.bind(var14)(var9);
                                            if(var9) { _fun0015_ip = 184; continue _fun0015 }
case 185:
                                            var9 = global;
                                            var15 = var9.Math;
                                            var14 = var15.min;
                                            var9 = _closure2_slot6;
                                            var13 = var9.frameRate;
                                            var9 = var11.frameRate;
                                            var9 = var9.max;
                                            var9 = var14.bind(var15)(var13, var9);
                                            _fun0015_ip = 186; continue _fun0015;
case 184:
                                            var15 = [60, 30, 29.97, 24, 15];
                                            var14 = var15.sort;
                                            var13 = function(arg1, arg2) {
                                                var2 = arg2;
                                                var1 = arg1;
                                                var1 = var2 - var1;
                                                return var1;
                                            };
                                            var14 = var14.bind(var15)(var13);
                                            var13 = var14.find;
                                            var8 = function(arg1) {
                                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                                    var3 = arg1;
                                                    var1 = _closure2_slot6;
                                                    var1 = var1.frameRate;
                                                    var1 = var3 < var1;
                                                    if(!var1) { _fun0017_ip = 187; continue _fun0017 }
case 188:
                                                    var2 = _closure8_slot0;
                                                    var2 = var2.frameRate;
                                                    var2 = var2.min;
                                                    var1 = var3 >= var2;
case 187:
                                                    return var1;
                                                }
                                            };
                                            var8 = var13.bind(var14)(var8);
                                            if(!(var12 == var8)) { _fun0015_ip = 189; continue _fun0015 }
case 190:
                                            var11 = var11.frameRate;
                                            var8 = var11.min;
case 189:
                                            var9 = var8;
case 186:
                                            var8 = _closure2_slot6;
                                            var8 = var8.frameRate;
                                            var5 = var10;
                                            if(!(var9 !== var8)) { _fun0015_ip = 175; continue _fun0015 }
case 36:
                                            var8 = _closure2_slot6;
                                            var8['frameRate'] = var9;
                                            var5 = true;
case 175:
                                            if(var5) { _fun0015_ip = 191; continue _fun0015 }
case 192:
                                            var9 = _closure1_slot20;
                                            var8 = var9.error;
                                            var5 = {};
                                            var10 = var2.failures;
                                            var5['currentFailures'] = var10;
                                            var10 = _closure2_slot6;
                                            var5['config'] = var10;
                                            var10 = var2.capabilities;
                                            var5['capabilities'] = var10;
                                            var11 = _closure2_slot7;
                                            var10 = 1;
                                            var10 = var11 + var10;
                                            var5['attempt'] = var10;
                                            var10 = 'No adjustments possible for current failures';
                                            var5 = var8.bind(var9)(var10, var5);
                                            var8 = _closure3_slot1;
                                            var5 = global;
                                            var5 = var5.Error;
                                            var9 = var5.prototype;
                                            var9 = Object.create(var9, {constructor: {value: var5}});
                                            var19 = var9;
                                            var18 = var10;
                                            var5 = new var19[var5](var18, var17);
                                            var5 = var5 instanceof Object ? var5 : var9;
                                            var5 = var8.bind(var7)(var5);
                                            var5 = {};
                                            var5['v'] = var6;
                                            return var5;
case 191:
                                            var5 = _closure2_slot7;
                                            var5 = var5 + 1;
                                            _closure2_slot7 = var5;
                                            return var7;
case 165:
                                            var8 = _closure3_slot1;
                                            var5 = global;
                                            var10 = var5.Error;
                                            var5 = var10.prototype;
                                            var9 = Object.create(var5, {constructor: {value: var10}});
                                            var18 = 'Invalid video dimensions: width or height is 0';
                                            var19 = var9;
                                            var5 = new var19[var10](var18, var17);
                                            var5 = var5 instanceof Object ? var5 : var9;
                                            var5 = var8.bind(var7)(var5);
                                            var5 = {};
                                            var5['v'] = var6;
                                            return var5;
case 159:
                                            var5 = _closure2_slot6;
                                            var5 = var5.useHEVC;
                                            if(var5) { _fun0015_ip = 193; continue _fun0015 }
case 194:
                                            var6 = _closure1_slot20;
                                            var5 = var6.error;
                                            var9 = 'No supported video encoder found';
                                            var5 = var5.bind(var6)(var9);
                                            var6 = _closure3_slot1;
                                            var5 = global;
                                            var5 = var5.Error;
                                            var8 = var5.prototype;
                                            var8 = Object.create(var8, {constructor: {value: var5}});
                                            var19 = var8;
                                            var18 = var9;
                                            var5 = new var19[var5](var18, var17);
                                            var5 = var5 instanceof Object ? var5 : var8;
                                            var5 = var6.bind(var7)(var5);
                                            var5 = {};
                                            var6 = false;
                                            var5['v'] = var6;
                                            _fun0015_ip = 195; continue _fun0015;
case 193:
                                            var7 = _closure2_slot6;
                                            var6 = false;
                                            var7['useHEVC'] = var6;
                                            var5 = 1;
case 195:
                                            return var5;
case 156:
                                            var6 = _closure1_slot20;
                                            var5 = var6.warn;
                                            var4 = {};
                                            var7 = _closure2_slot6;
                                            var4['config'] = var7;
                                            var7 = _closure2_slot7;
                                            var3 = 1;
                                            var3 = var7 + var3;
                                            var4['attempt'] = var3;
                                            var3 = 'Unable to determine device capabilities or adjust parameters';
                                            var3 = var5.bind(var6)(var3, var4);
                                            var3 = 0;
                                            return var3;
case 155:
                                            var3 = {};
                                            var4 = true;
                                            var3['v'] = var4;
                                            return var3;
case 153:
                                            return var2;
case 151:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = _closure2_slot7;
                                var12 = 4;
                                if(!(var2 < var12)) { _fun0014_ip = 196; continue _fun0014 }
case 107:
                                var11 = undefined;
                                var3 = var14.bind(var11)();
                                var10 = global;
                                var2 = var10.Symbol;
                                var2 = var2.iterator;
                                var2 = var3[var2];
                                var4 = var2.bind(var3)();
                                var9 = 'iterator is not an object';
                                var25 = var4;
                                var24 = var9;
                                var2 = ensureObject(var25, var24);
                                var18 = var4.next;
                                var17 = undefined;
                                var8 = 'iterator.throw() did not return an object';
                                var7 = 'throw';
                                var6 = 'iterator.next() did not return an object';
case 88:
                                var3 = var17;
                                var3 = var18.bind(var4)(var3);
                                var25 = var3;
                                var24 = var6;
                                var5 = ensureObject(var25, var24);
                                var2 = var3;
                                var5 = var3.done;
                                if(var5) { _fun0014_ip = 197; continue _fun0014 }
case 134: // try_start_0
                                var5 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 198:
                                return var3;
case 199: // try_end0 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=4);
                                var25 = var4;
                                var24 = var7;
                                var3 = getMethod(var25, var24);
                                if(!(var3 !== var11)) { _fun0014_ip = 200; continue _fun0014 }
case 201:
                                var3 = var3.bind(var4)(var5);
                                var25 = var3;
                                var24 = var8;
                                var5 = ensureObject(var25, var24);
                                var5 = var3.done;
                                if(var5) { _fun0014_ip = 202; continue _fun0014 }
case 121:
                                var5 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 203:
                                return var3;
case 12: // try_start_1
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=15);
                                var17 = var5;
                                var15 = var16;
                                if(!var15) { _fun0014_ip = 88; continue _fun0014 }
case 204:
                                var17 = var5;
case 141: // try_end1
                                var24 = 'return';
                                var25 = var4;
                                var19 = getMethod(var25, var24);
                                if(!(var19 !== var11)) { _fun0014_ip = 205; continue _fun0014 }
case 206:
                                var15 = var17;
                                var15 = var19.bind(var4)(var15);
                                var24 = 'iterator.return() did not return an object';
                                var25 = var15;
                                var19 = ensureObject(var25, var24);
                                var19 = var15.done;
                                if(var19) { _fun0014_ip = 207; continue _fun0014 }
case 208:
                                var19 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 82:
                                return var15;
case 207:
                                var15 = var15.value;
                                return var15;
case 205:
                                return var5;
case 202:
                                var2 = var3;
                                _fun0014_ip = 197; continue _fun0014;
case 200:
                                var24 = 'return';
                                var25 = var4;
                                var3 = getMethod(var25, var24);
                                if(!(var3 !== var11)) { _fun0014_ip = 209; continue _fun0014 }
case 210:
                                var25 = var3.bind(var4)();
                                var24 = 'iterator.return() did not return an object';
                                var3 = ensureObject(var25, var24);
case 209:
                                var25 = 'yield* delegate must have a .throw() method';
                                var3 = throwTypeError(var25);
                                throw var11;
case 197:
                                var5 = var2.value;
                                var4 = 0;
                                var3 = 1;
                                if(!(var4 !== var5)) { _fun0014_ip = 196; continue _fun0014 }
case 211:
                                var2 = var5;
                                if(!(var3 !== var2)) { _fun0014_ip = 212; continue _fun0014 }
case 213:
                                if(var2) { _fun0014_ip = 214; continue _fun0014 }
case 212:
                                var15 = _closure2_slot7;
                                if(!(var15 < var12)) { _fun0014_ip = 196; continue _fun0014 }
case 215:
                                var16 = var14.bind(var11)();
                                var15 = var10.Symbol;
                                var15 = var15.iterator;
                                var15 = var16[var15];
                                var17 = var15.bind(var16)();
                                var25 = var17;
                                var24 = var9;
                                var15 = ensureObject(var25, var24);
                                var22 = var17.next;
                                var21 = undefined;
case 216:
                                var16 = var21;
                                var16 = var22.bind(var17)(var16);
                                var25 = var16;
                                var24 = var6;
                                var18 = ensureObject(var25, var24);
                                var15 = var16;
                                var18 = var16.done;
                                if(var18) { _fun0014_ip = 217; continue _fun0014 }
case 218: // try_start_2
                                var18 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 219:
                                return var16;
case 149: // try_end2 // catch_target2 // catch_target3
                                CatchBlockStart(arg_register=17);
                                var25 = var17;
                                var24 = var7;
                                var16 = getMethod(var25, var24);
                                if(!(var16 !== var11)) { _fun0014_ip = 220; continue _fun0014 }
case 221:
                                var16 = var16.bind(var17)(var18);
                                var25 = var16;
                                var24 = var8;
                                var18 = ensureObject(var25, var24);
                                var18 = var16.done;
                                if(var18) { _fun0014_ip = 222; continue _fun0014 }
case 223:
                                var18 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 224:
                                return var16;
case 225: // try_start_3
                                ResumeGenerator(result_out_reg=17, return_bool_out_reg=19);
                                var21 = var18;
                                var19 = var20;
                                if(!var19) { _fun0014_ip = 216; continue _fun0014 }
case 226:
                                var21 = var18;
case 227: // try_end3
                                var24 = 'return';
                                var25 = var17;
                                var23 = getMethod(var25, var24);
                                if(!(var23 !== var11)) { _fun0014_ip = 228; continue _fun0014 }
case 229:
                                var19 = var21;
                                var19 = var23.bind(var17)(var19);
                                var24 = 'iterator.return() did not return an object';
                                var25 = var19;
                                var23 = ensureObject(var25, var24);
                                var23 = var19.done;
                                if(var23) { _fun0014_ip = 230; continue _fun0014 }
case 231:
                                var23 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 232:
                                return var19;
case 230:
                                var19 = var19.value;
                                return var19;
case 228:
                                return var18;
case 222:
                                var15 = var16;
                                _fun0014_ip = 217; continue _fun0014;
case 220:
                                var24 = 'return';
                                var25 = var17;
                                var16 = getMethod(var25, var24);
                                if(!(var16 !== var11)) { _fun0014_ip = 233; continue _fun0014 }
case 234:
                                var25 = var16.bind(var17)();
                                var24 = 'iterator.return() did not return an object';
                                var16 = ensureObject(var25, var24);
case 233:
                                var25 = 'yield* delegate must have a .throw() method';
                                var16 = throwTypeError(var25);
                                throw var11;
case 217:
                                var5 = var15.value;
                                if(var4 !== var5) { _fun0014_ip = 211; continue _fun0014 }
case 196:
                                var3 = false;
                                return var3;
case 214:
                                var2 = var2.v;
                                return var2;
case 150:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function findCompatibleConfig() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = undefined;
                var3 = var3.bind(var1)();
                var5 = var3.bind(var1)();
                var3 = var5.then;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0018_ip = 235; continue _fun0018 }
case 236:
                        var3 = _closure1_slot20;
                        var2 = var3.error;
                        var1 = {};
                        var6 = _closure2_slot6;
                        var1['finalConfig'] = var6;
                        var5 = _closure2_slot7;
                        var1['attempts'] = var5;
                        var5 = 'Could not find compatible encoding configuration after multiple attempts';
                        var1 = var2.bind(var3)(var5, var1);
                        var3 = _closure3_slot1;
                        var1 = global;
                        var1 = var1.Error;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var16 = var2;
                        var15 = var5;
                        var1 = new var16[var1](var15, var14);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = undefined;
                        _fun0018_ip = 237; continue _fun0018;
case 235:
                        var5 = _closure1_slot34;
                        var2 = _closure2_slot0;
                        var7 = undefined;
                        var2 = var5.bind(var7)(var2);
                        if(var2) { _fun0018_ip = 6; continue _fun0018 }
case 135:
                        var10 = _closure2_slot0;
                        var12 = _closure2_slot1;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 13;
                        var2 = var2[var6];
                        var5 = var5.bind(var7)(var2);
                        var2 = var5.isIOS;
                        var2 = var2.bind(var5)();
                        var5 = !var2;
                        var2 = !var5;
                        if(var5) { _fun0018_ip = 238; continue _fun0018 }
case 239:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 19;
                        var5 = var9[var5];
                        var8 = var8.bind(var7)(var5);
                        var5 = var8.isPhotoKitAsset;
                        var5 = var5.bind(var8)(var10, var12);
                        var9 = null;
                        if(var5) { _fun0018_ip = 240; continue _fun0018 }
case 144:
                        var8 = var10.match;
                        var5 = /^assets-library:\/\/.+&ext=(mov|qt)$/i;
                        var5 = var8.bind(var10)(var5);
                        var5 = var9 != var5;
                        if(!var5) { _fun0018_ip = 241; continue _fun0018 }
case 208:
                        var8 = _closure1_slot35;
                        var5 = var8.bind(var7)(var10);
case 241:
                        _fun0018_ip = 242; continue _fun0018;
case 240:
                        var10 = var9 == var12;
                        var8 = undefined;
                        if(var10) { _fun0018_ip = 243; continue _fun0018 }
case 244:
                        var11 = var12.match;
                        var10 = /\.(mov|qt)$/i;
                        var8 = var11.bind(var12)(var10);
case 243:
                        var5 = var9 != var8;
case 242:
                        var2 = var5;
case 238:
                        if(var2) { _fun0018_ip = 245; continue _fun0018 }
case 246:
                        var10 = _closure2_slot0;
                        var12 = _closure2_slot1;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var5.bind(var7)(var2);
                        var2 = var5.isIOS;
                        var2 = var2.bind(var5)();
                        var5 = !var2;
                        var2 = !var5;
                        if(var5) { _fun0018_ip = 247; continue _fun0018 }
case 248:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 19;
                        var5 = var9[var5];
                        var8 = var8.bind(var7)(var5);
                        var5 = var8.isPhotoKitAsset;
                        var5 = var5.bind(var8)(var10, var12);
                        var9 = null;
                        if(var5) { _fun0018_ip = 249; continue _fun0018 }
case 250:
                        var8 = var10.match;
                        var5 = /^assets-library:\/\/.+&ext=mp4$/i;
                        var5 = var8.bind(var10)(var5);
                        var5 = var9 != var5;
                        if(!var5) { _fun0018_ip = 251; continue _fun0018 }
case 252:
                        var8 = _closure1_slot35;
                        var5 = var8.bind(var7)(var10);
case 251:
                        _fun0018_ip = 253; continue _fun0018;
case 249:
                        var10 = var9 == var12;
                        var8 = undefined;
                        if(var10) { _fun0018_ip = 33; continue _fun0018 }
case 254:
                        var11 = var12.match;
                        var10 = /\.mp4$/i;
                        var8 = var11.bind(var12)(var10);
case 33:
                        var5 = var9 != var8;
case 253:
                        var2 = var5;
case 247:
                        if(var2) { _fun0018_ip = 255; continue _fun0018 }
case 256:
                        var8 = _closure2_slot0;
                        var2 = var8.toLowerCase;
                        var9 = var2.bind(var8)();
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var5.bind(var7)(var2);
                        var2 = var5.isIOS;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0018_ip = 257; continue _fun0018 }
case 258:
                        var6 = var8.startsWith;
                        var5 = 'file';
                        var2 = var6.bind(var8)(var5);
case 257:
                        if(!var2) { _fun0018_ip = 259; continue _fun0018 }
case 174:
                        var6 = var9.endsWith;
                        var5 = 'mov';
                        var5 = var6.bind(var9)(var5);
                        if(var5) { _fun0018_ip = 260; continue _fun0018 }
case 228:
                        var8 = var9.endsWith;
                        var6 = 'mp4';
                        var5 = var8.bind(var9)(var6);
case 260:
                        if(var5) { _fun0018_ip = 233; continue _fun0018 }
case 261:
                        var8 = var9.endsWith;
                        var6 = 'qt';
                        var5 = var8.bind(var9)(var6);
case 233:
                        var2 = var5;
case 259:
                        if(var2) { _fun0018_ip = 262; continue _fun0018 }
case 263:
                        var8 = _closure1_slot20;
                        var6 = var8.error;
                        var5 = {};
                        var9 = _closure2_slot0;
                        var5['uri'] = var9;
                        var2 = _closure2_slot1;
                        var5['filename'] = var2;
                        var2 = 'Unsupported video URI format';
                        var2 = var6.bind(var8)(var2, var5);
                        var5 = _closure3_slot1;
                        var2 = global;
                        var8 = var2.Error;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'Unsupported video URI format: ';
                        var15 = var6.bind(var2)(var9);
                        var6 = var8.prototype;
                        var6 = Object.create(var6, {constructor: {value: var8}});
                        var16 = var6;
                        var2 = new var16[var8](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var6;
                        var2 = var5.bind(var7)(var2);
                        var2 = undefined;
                        _fun0018_ip = 264; continue _fun0018;
case 262:
                        var9 = _closure1_slot27;
                        var8 = _closure2_slot0;
                        var6 = {};
                        var5 = _closure2_slot6;
                        var6['encodingConfig'] = var5;
                        var5 = _closure2_slot4;
                        var6['videoQuality'] = var5;
                        var5 = var8.toLowerCase;
                        var11 = var5.bind(var8)();
                        var10 = var11.endsWith;
                        var5 = 'mov';
                        var5 = var10.bind(var11)(var5);
                        if(var5) { _fun0018_ip = 265; continue _fun0018 }
case 266:
                        var11 = _closure2_slot0;
                        var10 = var11.toLowerCase;
                        var12 = var10.bind(var11)();
                        var11 = var12.endsWith;
                        var10 = 'qt';
                        var5 = var11.bind(var12)(var10);
case 265:
                        var6['isMov'] = var5;
                        var5 = _closure2_slot5;
                        var6['skipVideoTranscode'] = var5;
                        var5 = 'compressVideo';
                        var9 = var9.bind(var7)(var5, var8, var6);
                        var8 = var9.then;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot1;
                        var2 = var8.bind(var9)(var6, var5);
case 264:
                        _fun0018_ip = 267; continue _fun0018;
case 255:
                        var9 = _closure1_slot27;
                        var8 = _closure2_slot0;
                        var6 = {};
                        var5 = _closure2_slot6;
                        var6['encodingConfig'] = var5;
                        var5 = _closure2_slot4;
                        var6['videoQuality'] = var5;
                        var5 = _closure2_slot5;
                        var6['skipVideoTranscode'] = var5;
                        var5 = 'compressVideo';
                        var9 = var9.bind(var7)(var5, var8, var6);
                        var8 = var9.then;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot1;
                        var2 = var8.bind(var9)(var6, var5);
case 267:
                        _fun0018_ip = 268; continue _fun0018;
case 245:
                        var9 = _closure1_slot27;
                        var8 = _closure2_slot0;
                        var6 = {};
                        var5 = _closure2_slot6;
                        var6['encodingConfig'] = var5;
                        var5 = _closure2_slot4;
                        var6['videoQuality'] = var5;
                        var5 = true;
                        var6['isMov'] = var5;
                        var5 = _closure2_slot5;
                        var6['skipVideoTranscode'] = var5;
                        var5 = 'compressVideo';
                        var9 = var9.bind(var7)(var5, var8, var6);
                        var8 = var9.then;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot1;
                        var2 = var8.bind(var9)(var6, var5);
case 268:
                        _fun0018_ip = 269; continue _fun0018;
case 6:
                        var6 = _closure1_slot27;
                        var5 = _closure2_slot0;
                        var4 = {};
                        var8 = _closure2_slot6;
                        var4['encodingConfig'] = var8;
                        var8 = _closure2_slot3;
                        var4['compressionQuality'] = var8;
                        var8 = _closure2_slot2;
                        var4['isLowQuality'] = var8;
                        var8 = _closure2_slot4;
                        var4['videoQuality'] = var8;
                        var3 = _closure2_slot5;
                        var4['skipVideoTranscode'] = var3;
                        var3 = 'resolveToMediaFilePath';
                        var6 = var6.bind(var7)(var3, var5, var4);
                        var5 = var6.then;
                        var4 = _closure3_slot2;
                        var3 = _closure3_slot1;
                        var2 = var5.bind(var6)(var4, var3);
case 269:
                        var1 = var2;
case 237:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = var3.catch;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var18 = var2;
            var1 = new var18[var3](var17, var16);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function buildResolvedUpload(arg1) {
        var1 = undefined;
        var4 = _closure1_slot39;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function _buildResolvedUpload() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 270; continue _fun0019 }
case 129:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var12 = undefined;
                    var6 = var4.bind(var12)(var3);
                    var4 = var6.getFile;
                    var3 = {};
                    var7 = var5.path;
                    var3['uri'] = var7;
                    var7 = var5.i;
                    var3['i'] = var7;
                    var7 = var5.mimeType;
                    var3['overrideType'] = var7;
                    var7 = var5.filename;
                    var3['overrideFilename'] = var7;
                    var6 = var4.bind(var6)(var3);
                    var7 = var6.filename;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot3;
                    var6 = var4.bind(var12)(var6, var3);
                    var4 = {};
                    var3 = var5.isImage;
                    if(!var3) { _fun0019_ip = 198; continue _fun0019 }
case 104:
                    var9 = var5.path;
                    var8 = var5.originalUri;
                    var3 = var9 !== var8;
case 198:
                    if(!var3) { _fun0019_ip = 271; continue _fun0019 }
case 272:
                    var11 = _closure1_slot48;
                    var17 = var5.originalUri;
                    var16 = var5.path;
                    var15 = var5.filename;
                    var14 = var5.attachmentQualityMetricsEnabled;
                    var13 = var5.attachmentOriginDetectionEnabled;
                    var18 = undefined;
                    var2 = var18[var11](var17, var16, var15, var14, var13, var12);
                    SaveGenerator(address=186);
case 273:
                    return var2;
case 203:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    var4 = var2;
                    if(var3) { _fun0019_ip = 274; continue _fun0019 }
case 271:
                    var3 = {};
                    var17 = var3;
                    var16 = var6;
                    var6 = copyDataProperties(var17, var16);
                    var6 = 'name';
                    var3[5] = var7;
                    var7 = var5.spoiler;
                    var6 = 'spoiler';
                    var3[5] = var7;
                    var7 = var5.description;
                    var6 = 'description';
                    var3[5] = var7;
                    var7 = var5.compressionQuality;
                    var6 = 'imageCompressionQuality';
                    var3[5] = var7;
                    var7 = var5.imageEncoderType;
                    var6 = 'imageEncoderType';
                    var3[5] = var7;
                    var7 = var5.videoQualitySetting;
                    var6 = 'videoCompressionQuality';
                    var3[5] = var7;
                    var7 = var5.videoMetadata;
                    var6 = 'videoMetadata';
                    var3[5] = var7;
                    var7 = var5.encodingConfig;
                    var6 = 'encodingConfig';
                    var3[5] = var7;
                    var6 = var5.sourceImageDimensions;
                    var7 = var6.width;
                    var6 = 'sourceWidth';
                    var3[5] = var7;
                    var6 = var5.sourceImageDimensions;
                    var7 = var6.height;
                    var6 = 'sourceHeight';
                    var3[5] = var7;
                    var7 = var5.uploadedImageWidth;
                    var6 = 'uploadedImageWidth';
                    var3[5] = var7;
                    var6 = var5.uploadedImageHeight;
                    var5 = 'uploadedImageHeight';
                    var3[4] = var6;
                    var6 = var4.psnr;
                    var5 = 'psnr';
                    var3[4] = var6;
                    var6 = var4.ssim;
                    var5 = 'ssim';
                    var3[4] = var6;
                    var6 = var4.origin;
                    var5 = 'origin';
                    var3[4] = var6;
                    var6 = var4.psnrMeasurementLatencyMs;
                    var5 = 'psnrMeasurementLatencyMs';
                    var3[4] = var6;
                    var5 = var4.ssimMeasurementLatencyMs;
                    var4 = 'ssimMeasurementLatencyMs';
                    var3[3] = var5;
                    return var3;
case 274:
                    return var2;
case 270:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot39 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _processVideoUpload() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0020_ip = 275; continue _fun0020 }
case 129:
                    var13 = var2.originalUri;
                    var14 = var2.filename;
                    var15 = var2.mimeType;
                    var8 = var2.fileSize;
                    var12 = var2.spoiler;
                    var11 = var2.description;
                    var16 = var2.i;
                    var7 = undefined;
                    SaveGenerator(address=59);
case 276:
                    return var7;
case 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0020_ip = 277; continue _fun0020 }
case 278:
                    var3 = _closure1_slot29;
                    var9 = var3.bind(var7)();
                    var3 = _closure1_slot10;
                    var17 = var3.dataSavingMode;
                    if(!var17) { _fun0020_ip = 279; continue _fun0020 }
case 280:
                    var4 = _closure1_slot11;
                    var3 = var4.getType;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot15;
                    var3 = var3.CELLULAR;
                    var17 = var4 === var3;
case 279:
                    var3 = function fetchVideoMetadata(arg1, arg2) {
                        var1 = undefined;
                        var4 = _closure1_slot43;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var7)(var13, var15);
                    SaveGenerator(address=137);
case 127:
                    return var3;
case 281:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 282; continue _fun0020 }
case 160:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0020_ip = 174; continue _fun0020 }
case 283:
                    var6 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var4 = 23;
                    var4 = var18[var4];
                    var18 = var6.bind(var7)(var4);
                    var6 = var18.getVideoFrameRateValidationExperimentConfig;
                    var4 = {};
                    var19 = 'upload_utils.process_video_upload';
                    var4['location'] = var19;
                    var4 = var6.bind(var18)(var4);
                    var4 = var4.enableFrameRateValidation;
                    if(!var4) { _fun0020_ip = 202; continue _fun0020 }
case 284:
                    var4 = var3.frameRate;
                    if(!(var5 != var4)) { _fun0020_ip = 285; continue _fun0020 }
case 286:
                    var4 = global;
                    var18 = var4.Number;
                    var6 = var18.isFinite;
                    var4 = var3.frameRate;
                    var4 = var6.bind(var18)(var4);
                    if(!var4) { _fun0020_ip = 285; continue _fun0020 }
case 115:
                    var6 = var3.frameRate;
                    var4 = 0;
                    if(!(!(var6 <= var4))) { _fun0020_ip = 285; continue _fun0020 }
case 202:
                    var6 = _closure1_slot37;
                    var4 = {};
                    var4['uri'] = var13;
                    var4['filename'] = var14;
                    var4['isLowQuality'] = var17;
                    var17 = _closure1_slot16;
                    var17 = var17.LOW;
                    var4['compressionQuality'] = var17;
                    var4['videoQualitySetting'] = var9;
                    var4['videoMetadata'] = var3;
                    var4['fileSize'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=325);
case 287:
                    return var4;
case 288:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0020_ip = 289; continue _fun0020 }
case 290:
                    var17 = var4.path;
                    var8 = var4.encodingConfig;
                    if(!(var5 != var17)) { _fun0020_ip = 81; continue _fun0020 }
case 291:
                    var6 = _closure1_slot38;
                    var5 = {};
                    var5['path'] = var17;
                    var5['i'] = var16;
                    var5['mimeType'] = var15;
                    var5['filename'] = var14;
                    var5['originalUri'] = var13;
                    var5['spoiler'] = var12;
                    var5['description'] = var11;
                    var10 = _closure1_slot16;
                    var10 = var10.LOW;
                    var5['compressionQuality'] = var10;
                    var5['videoQualitySetting'] = var9;
                    var5['videoMetadata'] = var3;
                    var5['encodingConfig'] = var8;
                    var8 = {};
                    var5['sourceImageDimensions'] = var8;
                    var8 = false;
                    var5['isImage'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var5;
case 81:
                    var5 = global;
                    var7 = var5.Error;
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {constructor: {value: var7}});
                    var21 = 'Failed to get video file path';
                    var22 = var6;
                    var5 = new var22[var7](var21, var20);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 289:
                    return var4;
case 285:
                    var4 = global;
                    var6 = var4.Error;
                    var7 = var3.frameRate;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'Invalid video frame rate: ';
                    var21 = var5.bind(var4)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var22 = var5;
                    var4 = new var22[var6](var21, var20);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 174:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var21 = 'Video metadata is required for video conversion';
                    var22 = var5;
                    var4 = new var22[var6](var21, var20);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 282:
                    return var3;
case 277:
                    return var2;
case 275:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function _processImageOrFileUpload() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 292; continue _fun0021 }
case 129:
                    var16 = var2.originalUri;
                    var17 = var2.filename;
                    var18 = var2.mimeType;
                    var15 = var2.spoiler;
                    var14 = var2.description;
                    var19 = var2.i;
                    var29 = var2.width;
                    var26 = var2.height;
                    var9 = var2.allowOptimization;
                    var6 = undefined;
                    SaveGenerator(address=69);
case 293:
                    return var6;
case 294:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 295; continue _fun0021 }
case 296:
                    var3 = _closure1_slot10;
                    var23 = var3.dataSavingMode;
                    if(!var23) { _fun0021_ip = 297; continue _fun0021 }
case 116:
                    var5 = _closure1_slot11;
                    var3 = var5.getType;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot15;
                    var3 = var3.CELLULAR;
                    var23 = var5 === var3;
case 297:
                    var3 = _closure1_slot36;
                    var12 = var3.bind(var6)(var16, var18);
                    if(var12) { _fun0021_ip = 198; continue _fun0021 }
case 127:
                    var10 = {};
                    _fun0021_ip = 298; continue _fun0021;
case 198:
                    var3 = {};
                    var3['width'] = var29;
                    var3['height'] = var26;
                    var10 = var3;
case 298:
                    var3 = _closure1_slot16;
                    var28 = var3.LOW;
                    var3 = var12;
                    if(!var3) { _fun0021_ip = 299; continue _fun0021 }
case 300:
                    var3 = !var23;
case 299:
                    var27 = false;
                    if(!var3) { _fun0021_ip = 301; continue _fun0021 }
case 302:
                    var13 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var7 = 24;
                    var3 = var20[var7];
                    var3 = var13.bind(var6)(var3);
                    var3 = var3.ADAPTIVE_COMPRESSION_CONFIG;
                    var3 = var3.useOriginalIfSmaller;
                    var8 = var20[var7];
                    var11 = var13.bind(var6)(var8);
                    var8 = var11.getAdaptiveImageCompressionQuality;
                    var7 = var20[var7];
                    var7 = var13.bind(var6)(var7);
                    var7 = var7.ADAPTIVE_COMPRESSION_CONFIG;
                    var7 = var8.bind(var11)(var10, var7);
                    var13 = _closure1_slot20;
                    var11 = var13.log;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var25 = var8.concat;
                    var41 = 'Got image compression quality: ';
                    var39 = ' for ';
                    var37 = ' with dimensions: ';
                    var35 = 'x';
                    var33 = ' and useOriginalIfSmaller: ';
                    var40 = var7;
                    var38 = var16;
                    var36 = var29;
                    var34 = var26;
                    var32 = var3;
                    var8 = var41[var25](var40, var39, var38, var37, var36, var35, var34, var33, var32, var31);
                    var8 = var11.bind(var13)(var8);
                    var28 = var7;
                    var27 = var3;
case 301:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var13 = 13;
                    var3 = var3[var13];
                    var7 = var7.bind(var6)(var3);
                    var3 = var7.isIOS;
                    var21 = var3.bind(var7)();
                    if(!var21) { _fun0021_ip = 303; continue _fun0021 }
case 304:
                    var7 = var16.startsWith;
                    var3 = 'ph://';
                    var21 = var7.bind(var16)(var3);
case 303:
                    var24 = false;
                    if(!var12) { _fun0021_ip = 305; continue _fun0021 }
case 306:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 25;
                    var3 = var11[var3];
                    var20 = var8.bind(var6)(var3);
                    var7 = var20.useMobileLosslessImageUploadV2Experiment;
                    var3 = {};
                    var22 = 'upload_utils.process_image_upload';
                    var3['location'] = var22;
                    var7 = var7.bind(var20)(var3);
                    var3 = 26;
                    var3 = var11[var3];
                    var8 = var8.bind(var6)(var3);
                    var3 = var8.isDiscordFrontendDevelopment;
                    var3 = var3.bind(var8)();
                    var8 = !var3;
                    var3 = !var8;
                    if(!var8) { _fun0021_ip = 307; continue _fun0021 }
case 87:
                    var3 = var7.enabled;
case 307:
                    var24 = var3;
case 305:
                    var8 = false;
                    var7 = false;
                    if(!var12) { _fun0021_ip = 172; continue _fun0021 }
case 308:
                    var11 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var3 = 27;
                    var3 = var20[var3];
                    var3 = var11.bind(var6)(var3);
                    var20 = var3.AttachmentQualityMetricsExperiment;
                    var11 = var20.getConfig;
                    var3 = {};
                    var22 = 'upload_utils.process_image_upload';
                    var3['location'] = var22;
                    var3 = var11.bind(var20)(var3);
                    var8 = var3.enableQualityMetrics;
                    var7 = var3.enableOriginDetection;
case 172:
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var13];
                    var11 = var11.bind(var6)(var3);
                    var3 = var11.isIOS;
                    var25 = var3.bind(var11)();
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = false;
                    if(!var25) { _fun0021_ip = 309; continue _fun0021 }
case 310:
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = false;
                    if(!var12) { _fun0021_ip = 309; continue _fun0021 }
case 259:
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var5 = 26;
                    var5 = var26[var5];
                    var25 = var25.bind(var6)(var5);
                    var5 = var25.isDiscordFrontendDevelopment;
                    var26 = var5.bind(var25)();
                    var5 = true;
                    if(var26) { _fun0021_ip = 183; continue _fun0021 }
case 38:
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var26 = 28;
                    var26 = var30[var26];
                    var30 = var29.bind(var6)(var26);
                    var29 = var30.getIosJpegliConfig;
                    var26 = {};
                    var31 = 'upload_utils.process_image_upload';
                    var26['location'] = var31;
                    var26 = var29.bind(var30)(var26);
                    var5 = var26.useJpegliEncoder;
case 183:
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(var23) { _fun0021_ip = 309; continue _fun0021 }
case 311:
                    var26 = var10.width;
                    var29 = null;
                    var26 = var29 != var26;
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(!var26) { _fun0021_ip = 309; continue _fun0021 }
case 312:
                    var26 = var10.height;
                    var26 = var29 != var26;
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(!var26) { _fun0021_ip = 309; continue _fun0021 }
case 313:
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var26 = 29;
                    var26 = var30[var26];
                    var30 = var29.bind(var6)(var26);
                    var29 = var30.getMobileImageEncodingLadderConfig;
                    var26 = {};
                    var31 = 'upload_utils.process_image_upload';
                    var26['location'] = var31;
                    var26 = var29.bind(var30)(var26);
                    var26 = var26.useImageEncodingLadder;
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(!var26) { _fun0021_ip = 309; continue _fun0021 }
case 314:
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 24;
                    var26 = var28[var26];
                    var26 = var27.bind(var6)(var26);
                    var28 = var26.ImageEncodingLadder;
                    var27 = var28.selectEncodingConfig;
                    var26 = {};
                    var29 = var10.width;
                    var26['width'] = var29;
                    var29 = var10.height;
                    var26['height'] = var29;
                    var27 = var27.bind(var28)(var26);
                    var28 = var27.compressionQuality;
                    var26 = 100;
                    var13 = var28 / var26;
                    var11 = var27.targetWidth;
                    var3 = var27.targetHeight;
                    var22 = true;
                    var20 = var5;
case 309:
                    var5 = {};
                    var5['uri'] = var16;
                    var5['filename'] = var17;
                    var5['isLowQuality'] = var23;
                    var5['compressionQuality'] = var13;
                    var5['mobileLosslessImageEnabled'] = var24;
                    var5['useEnhancedConversion'] = var21;
                    var5['useJpegliEncoder'] = var20;
                    var5['allowOptimization'] = var9;
                    var5['targetWidth'] = var11;
                    var5['targetHeight'] = var3;
                    var3 = function tryConvertImage(arg1) {
                        var1 = undefined;
                        var4 = _closure1_slot42;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var6)(var5);
                    SaveGenerator(address=978);
case 315:
                    return var3;
case 316:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 317; continue _fun0021 }
case 68:
                    var11 = null;
                    if(!(var11 == var3)) { _fun0021_ip = 318; continue _fun0021 }
case 319:
                    if(!(var9 === var6)) { _fun0021_ip = 268; continue _fun0021 }
case 320:
                    var9 = true;
case 268:
                    var5 = _closure1_slot34;
                    var5 = var5.bind(var6)(var16);
                    if(var5) { _fun0021_ip = 321; continue _fun0021 }
case 322:
                    var5 = global;
                    var20 = var5.Promise;
                    var5 = var20.resolve;
                    var5 = var5.bind(var20)(var16);
                    _fun0021_ip = 323; continue _fun0021;
case 321:
                    var21 = _closure1_slot27;
                    var20 = {};
                    var20['compressionQuality'] = var13;
                    var20['isLowQuality'] = var23;
                    var23 = true;
                    var20['skipVideoTranscode'] = var23;
                    var20['useOriginalIfSmaller'] = var22;
                    var20['allowOptimization'] = var9;
                    var9 = 'resolveToMediaFilePath';
                    var5 = var21.bind(var6)(var9, var16, var20);
case 323:
                    SaveGenerator(address=1081);
case 324:
                    return var5;
case 325:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    var21 = var9;
                    var20 = var5;
                    var9 = undefined;
                    if(!var21) { _fun0021_ip = 326; continue _fun0021 }
case 327:
                    return var5;
case 318:
                    var20 = var3.path;
                    var9 = var3.encoderUsed;
case 326:
                    if(!(var11 != var20)) { _fun0021_ip = 328; continue _fun0021 }
case 329:
                    var5 = _closure1_slot38;
                    var4 = {};
                    var4['path'] = var20;
                    var4['i'] = var19;
                    var4['mimeType'] = var18;
                    var4['filename'] = var17;
                    var4['originalUri'] = var16;
                    var4['spoiler'] = var15;
                    var4['description'] = var14;
                    var4['compressionQuality'] = var13;
                    var4['sourceImageDimensions'] = var10;
                    var4['isImage'] = var12;
                    var4['imageEncoderType'] = var9;
                    var12 = var11 == var3;
                    var9 = undefined;
                    if(var12) { _fun0021_ip = 330; continue _fun0021 }
case 331:
                    var9 = var3.outputWidth;
case 330:
                    if(!(var11 == var9)) { _fun0021_ip = 332; continue _fun0021 }
case 333:
                    var9 = var10.width;
case 332:
                    var4['uploadedImageWidth'] = var9;
                    var12 = var11 == var3;
                    var9 = undefined;
                    if(var12) { _fun0021_ip = 334; continue _fun0021 }
case 335:
                    var9 = var3.outputHeight;
case 334:
                    if(!(var11 == var9)) { _fun0021_ip = 336; continue _fun0021 }
case 337:
                    var9 = var10.height;
case 336:
                    var4['uploadedImageHeight'] = var9;
                    var4['attachmentQualityMetricsEnabled'] = var8;
                    var4['attachmentOriginDetectionEnabled'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 328:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var40 = 'Failed to get image file path';
                    var41 = var5;
                    var4 = new var41[var6](var40, var39);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 317:
                    return var3;
case 295:
                    return var2;
case 292:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot41 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function _tryConvertImage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0022_ip = 338; continue _fun0022 }
case 339:
                    var5 = var2.uri;
                    var20 = var2.filename;
                    var22 = var2.isLowQuality;
                    var4 = var2.compressionQuality;
                    var21 = var2.mobileLosslessImageEnabled;
                    var15 = var2.useEnhancedConversion;
                    var14 = var2.useJpegliEncoder;
                    var19 = var2.allowOptimization;
                    var13 = var2.targetWidth;
                    var8 = var2.targetHeight;
                    var9 = undefined;
                    SaveGenerator(address=80);
case 296:
                    return var9;
case 340:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0022_ip = 341; continue _fun0022 }
case 9:
                    var7 = var5;
                    var3 = function getPhotoKitDataUTI() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var9)(var7);
                    SaveGenerator(address=106);
case 75:
                    return var3;
case 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0022_ip = 342; continue _fun0022 }
case 343:
                    var17 = var5;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = 13;
                    var10 = var10[var12];
                    var11 = var11.bind(var9)(var10);
                    var10 = var11.isIOS;
                    var10 = var10.bind(var11)();
                    if(!var10) { _fun0022_ip = 344; continue _fun0022 }
case 345:
                    var16 = var17.match;
                    var11 = _closure1_slot21;
                    var16 = var16.bind(var17)(var11);
                    var11 = null;
                    var10 = var11 != var16;
case 344:
                    if(var10) { _fun0022_ip = 346; continue _fun0022 }
case 347:
                    var17 = var5;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var11 = var11.bind(var9)(var10);
                    var10 = var11.isIOS;
                    var10 = var10.bind(var11)();
                    if(!var10) { _fun0022_ip = 25; continue _fun0022 }
case 348:
                    var16 = var17.match;
                    var11 = _closure1_slot22;
                    var16 = var16.bind(var17)(var11);
                    var11 = null;
                    var10 = var11 != var16;
case 25:
                    if(var10) { _fun0022_ip = 349; continue _fun0022 }
case 350:
                    if(!var21) { _fun0022_ip = 351; continue _fun0022 }
case 208:
                    var10 = var5;
                    var6 = function shouldConvertToPNG() {
                        var1 = undefined;
                        var4 = _closure1_slot33;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var6 = var6.bind(var9)(var10, var20);
                    SaveGenerator(address=265);
case 205:
                    return var6;
case 128:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0022_ip = 352; continue _fun0022 }
case 353:
                    if(!var6) { _fun0022_ip = 351; continue _fun0022 }
case 354: // try_start_0
                    var11 = {};
                    var10 = _closure1_slot6;
                    var17 = var10.MediaManager;
                    var16 = var17.getLosslessImageData;
                    var10 = var5;
                    var10 = var16.bind(var17)(var10);
                    SaveGenerator(address=312);
case 355:
                    return var10;
case 197:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(var16) { _fun0022_ip = 356; continue _fun0022 }
case 357:
                    var11['path'] = var10;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var16 = 30;
                    var16 = var18[var16];
                    var16 = var17.bind(var9)(var16);
                    var16 = var16.ImageEncoder;
                    var16 = var16.PASSTHROUGH;
                    var11['encoderUsed'] = var16;
case 358: // try_end0
                    return var11;
case 356:
                    return var10;
case 359: // catch_target0
                    CatchBlockStart(arg_register=17);
                    var16 = _closure1_slot20;
                    var11 = var16.error;
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var17 = var10.concat;
                    var10 = 'getLosslessImageData failed, falling through to JPEG conversion: ';
                    var10 = var17.bind(var10)(var18);
                    var10 = var11.bind(var16)(var10);
case 351:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var17 = 19;
                    var10 = var10[var17];
                    var16 = var11.bind(var9)(var10);
                    var11 = var16.shouldForceConvertToJPG;
                    var10 = var5;
                    var16 = var11.bind(var16)(var10, var20, var3);
                    if(var16) { _fun0022_ip = 360; continue _fun0022 }
case 361:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var17];
                    var18 = var11.bind(var9)(var10);
                    var11 = var18.shouldConvertToJPG;
                    var27 = var5;
                    var28 = var18;
                    var26 = var20;
                    var25 = var22;
                    var24 = var21;
                    var23 = var19;
                    var10 = var28[var11](var27, var26, var25, var24, var23, var22);
                    if(var10) { _fun0022_ip = 360; continue _fun0022 }
case 35:
                    var18 = var5;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var11 = var11.bind(var9)(var10);
                    var10 = var11.isIOS;
                    var10 = var10.bind(var11)();
                    var11 = !var10;
                    var10 = !var11;
                    if(var11) { _fun0022_ip = 362; continue _fun0022 }
case 174:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var17];
                    var12 = var12.bind(var9)(var11);
                    var11 = var12.isPhotoKitAsset;
                    var11 = var11.bind(var12)(var18, var20);
                    var17 = null;
                    if(var11) { _fun0022_ip = 363; continue _fun0022 }
case 364:
                    var12 = var18.match;
                    var11 = /^assets-library:\/\/.+&ext=gif$/i;
                    var11 = var12.bind(var18)(var11);
                    var11 = var17 != var11;
                    _fun0022_ip = 179; continue _fun0022;
case 363:
                    var18 = var17 == var20;
                    var12 = undefined;
                    if(var18) { _fun0022_ip = 365; continue _fun0022 }
case 366:
                    var19 = var20.match;
                    var18 = /\.gif$/i;
                    var12 = var19.bind(var20)(var18);
case 365:
                    var11 = var17 != var12;
case 179:
                    var10 = var11;
case 362:
                    if(var10) { _fun0022_ip = 367; continue _fun0022 }
case 368:
                    var10 = null;
                    return var10;
case 367:
                    var12 = _closure1_slot27;
                    var11 = var5;
                    var10 = 'convertToGIFFilePath';
                    var10 = var12.bind(var9)(var10, var11);
                    SaveGenerator(address=675);
case 369:
                    return var10;
case 370:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0022_ip = 311; continue _fun0022 }
case 371:
                    var11 = null;
                    if(!var10) { _fun0022_ip = 372; continue _fun0022 }
case 373:
                    var12 = {};
                    var12['path'] = var10;
                    var11 = var12;
case 372:
                    return var11;
case 311:
                    return var10;
case 360:
                    var12 = _closure1_slot27;
                    var11 = var5;
                    var10 = {};
                    var10['compressionQuality'] = var4;
                    var10['forceConvertToJPG'] = var16;
                    var10['useEnhancedConversion'] = var15;
                    var10['useJpegliEncoder'] = var14;
                    var10['targetWidth'] = var13;
                    var10['targetHeight'] = var8;
                    var8 = 'convertToJPEG';
                    var8 = var12.bind(var9)(var8, var11, var10);
                    SaveGenerator(address=760);
case 374:
                    return var8;
case 52:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0022_ip = 375; continue _fun0022 }
case 376:
                    var10 = null;
                    var12 = var10 == var8;
                    var11 = undefined;
                    if(var12) { _fun0022_ip = 377; continue _fun0022 }
case 378:
                    var11 = var8.path;
case 377:
                    var15 = var8;
                    if(!(var10 != var11)) { _fun0022_ip = 379; continue _fun0022 }
case 380:
                    var15 = var11;
case 379:
                    var11 = var10 == var8;
                    var14 = undefined;
                    if(var11) { _fun0022_ip = 381; continue _fun0022 }
case 190:
                    var14 = var8.encoderUsed;
case 381:
                    var11 = var10 == var8;
                    var13 = undefined;
                    if(var11) { _fun0022_ip = 382; continue _fun0022 }
case 383:
                    var13 = var8.outputWidth;
case 382:
                    var11 = var10 == var8;
                    var12 = undefined;
                    if(var11) { _fun0022_ip = 384; continue _fun0022 }
case 385:
                    var12 = var8.outputHeight;
case 384:
                    var10 = null;
                    if(!var15) { _fun0022_ip = 386; continue _fun0022 }
case 387:
                    var11 = {};
                    var11['path'] = var15;
                    var11['encoderUsed'] = var14;
                    var11['outputWidth'] = var13;
                    var11['outputHeight'] = var12;
                    var10 = var11;
case 386:
                    return var10;
case 375:
                    return var8;
case 352:
                    return var6;
case 349:
                    var10 = _closure1_slot27;
                    var12 = var5;
                    var11 = var12.replace;
                    var8 = _closure1_slot22;
                    var6 = '';
                    var8 = var11.bind(var12)(var8, var6);
                    var6 = 'convertBase64ToGIF';
                    var6 = var10.bind(var9)(var6, var8);
                    SaveGenerator(address=919);
case 388:
                    return var6;
case 389:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0022_ip = 390; continue _fun0022 }
case 391:
                    var8 = null;
                    if(!var6) { _fun0022_ip = 392; continue _fun0022 }
case 393:
                    var10 = {};
                    var10['path'] = var6;
                    var8 = var10;
case 392:
                    return var8;
case 390:
                    return var6;
case 346:
                    var8 = _closure1_slot27;
                    var11 = var5;
                    var10 = var11.replace;
                    var6 = _closure1_slot21;
                    var5 = '';
                    var6 = var10.bind(var11)(var6, var5);
                    var5 = {};
                    var5['compressionQuality'] = var4;
                    var4 = 'convertBase64ToJPEG';
                    var4 = var8.bind(var9)(var4, var6, var5);
                    SaveGenerator(address=996);
case 394:
                    return var4;
case 395:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0022_ip = 194; continue _fun0022 }
case 396:
                    var5 = null;
                    if(!var4) { _fun0022_ip = 397; continue _fun0022 }
case 398:
                    var6 = {};
                    var6['path'] = var4;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 30;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ImageEncoder;
                    var7 = var7.NATIVE;
                    var6['encoderUsed'] = var7;
                    var5 = var6;
case 397:
                    return var5;
case 194:
                    return var4;
case 342:
                    return var3;
case 341:
                    return var2;
case 338:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot42 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function _fetchVideoMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 11; continue _fun0023 }
case 129:
                    var7 = var9;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot35;
                    var3 = arg2;
                    var3 = var6.bind(var2)(var9, var3);
                    if(!var3) { _fun0023_ip = 199; continue _fun0023 }
case 145: // try_start_0
                    var9 = _closure1_slot27;
                    var6 = var7;
                    var3 = 'getVideoMetadata';
                    var3 = var9.bind(var2)(var3, var6);
                    SaveGenerator(address=64);
case 95:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0023_ip = 399; continue _fun0023 }
case 98:
                    var5 = var3;
                    var9 = var3.rotationDegrees;
                    var8 = var9;
                    var6 = null;
                    var9 = var6 != var9;
                    var6 = 0;
                    if(!var9) { _fun0023_ip = 400; continue _fun0023 }
case 74:
                    var6 = var8;
case 400:
                    var3['rotationDegrees'] = var6;
case 401: // try_end0
                    return var5;
case 399:
                    return var3;
case 402: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var6 = _closure1_slot20;
                    var5 = var6.warn;
                    var4 = {};
                    var4['uri'] = var7;
                    var4['error'] = var3;
                    var3 = 'Failed to fetch video metadata';
                    var3 = var5.bind(var6)(var3, var4);
case 199:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var8 = function getCaptionLabel(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = arg3;
            var1 = arg2;
            if(var1) { _fun0024_ip = 403; continue _fun0024 }
case 236:
            var4 = 'image/gif';
            var2 = arg1;
            var1 = null;
            if(!(var4 === var2)) { _fun0024_ip = 116; continue _fun0024 }
case 89:
            var1 = 'GIF';
            _fun0024_ip = 116; continue _fun0024;
case 403:
            var4 = var3.playableDuration;
            var2 = null;
            var4 = var2 != var4;
            var2 = 'VIDEO';
            if(!var4) { _fun0024_ip = 22; continue _fun0024 }
case 404:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 31;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getTimeFormat;
            var3 = var3.playableDuration;
            var2 = var4.bind(var5)(var3);
case 22:
            var1 = var2;
case 116:
            return var1;
        }
    };
    var7 = function getImageDimensionsIfMissing(arg1, arg2, arg3, arg4) {
        var1 = undefined;
        var4 = _closure1_slot44;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _getImageDimensionsIfMissing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0025_ip = 405; continue _fun0025 }
case 101:
                    var3 = arg1;
                    var13 = undefined;
                    var2 = undefined;
                    var10 = undefined;
                    var7 = undefined;
                    var4 = {};
                    var4['width'] = var6;
                    var4['height'] = var5;
                    var2 = var4;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0025_ip = 122; continue _fun0025 }
case 114:
                    if(!(var4 == var5)) { _fun0025_ip = 406; continue _fun0025 }
case 122:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 11;
                    var5 = var8[var5];
                    var8 = var6.bind(var13)(var5);
                    var6 = var8.getFile;
                    var5 = {};
                    var9 = var3;
                    var5['uri'] = var9;
                    var9 = arg4;
                    var5['overrideFilename'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var10 = var5;
                    var5 = var5.isImage;
                    if(var5) { _fun0025_ip = 119; continue _fun0025 }
case 407:
                    var5 = var10;
                    var5 = var5.isVideo;
                    if(var5) { _fun0025_ip = 119; continue _fun0025 }
case 408:
                    var5 = var2;
                    return var5;
case 119: // try_start_0
                    var6 = var3;
                    var5 = function getImageDimensionByUri(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1, arg2) {
                            var2 = arg1;
                            var _closure6_slot0 = var2;
                            var5 = _closure1_slot7;
                            var4 = var5.getSize;
                            var3 = _closure5_slot0;
                            var2 = function(arg1, arg2) {
                                var3 = _closure6_slot0;
                                var2 = {};
                                var1 = arg1;
                                var2['width'] = var1;
                                var1 = arg2;
                                var2['height'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = arg2;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var5 = var5.bind(var13)(var6);
                    SaveGenerator(address=153);
case 409:
                    return var5;
case 410:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0025_ip = 411; continue _fun0025 }
case 412:
                    var7 = var5;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 13;
                    var11 = var14[var11];
                    var12 = var12.bind(var13)(var11);
                    var11 = var12.isIOS;
                    var11 = var11.bind(var12)();
                    var9 = var11;
                    if(!var11) { _fun0025_ip = 284; continue _fun0025 }
case 140:
                    var9 = var10.isVideo;
case 284:
                    var8 = var9;
                    if(!var9) { _fun0025_ip = 77; continue _fun0025 }
case 413:
                    var9 = var7;
                    var10 = var9.width;
                    var9 = 0;
                    var8 = var9 === var10;
case 77:
                    var6 = var8;
                    if(!var8) { _fun0025_ip = 208; continue _fun0025 }
case 24:
                    var8 = var7;
                    var9 = var8.height;
                    var8 = 0;
                    var6 = var8 === var9;
case 208:
                    if(!var6) { _fun0025_ip = 414; continue _fun0025 }
case 415:
                    var6 = _closure1_slot6;
                    var9 = var6.DCDFileManager;
                    var8 = var9.getVideoDimensions;
                    var6 = var3;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=280);
case 416:
                    return var6;
case 354:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0025_ip = 243; continue _fun0025 }
case 210:
                    var7 = var6;
case 414: // try_end0
                    return var7;
case 243:
                    return var6;
case 411:
                    return var5;
case 417: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot20;
                    var4 = var5.warn;
                    var8 = var3;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Unable to get width and height of media file: ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var4.bind(var5)(var3, var6);
                    var3 = var2;
                    return var3;
case 406:
                    return var2;
case 405:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot44 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var6 = function isHEVCEncodingSupported() {
        var1 = undefined;
        var4 = _closure1_slot45;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _isHEVCEncodingSupported() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0026_ip = 5; continue _fun0026 }
case 418: // try_start_0
                    var2 = _closure1_slot6;
                    var3 = var2.MediaManager;
                    var2 = var3.isHEVCEncodingSupported;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=34);
case 419:
                    return var2;
case 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0026_ip = 420; continue _fun0026 }
case 421: // try_end0
                    return var2;
case 420:
                    return var2;
case 114: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot20;
                    var3 = var4.warn;
                    var2 = 'Error checking HEVC support:';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = false;
                    return var2;
case 5:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot45 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var5 = function checkVideoEncodingSupport(arg1) {
        var1 = undefined;
        var4 = _closure1_slot47;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot46 = var5;
    var1 = function _checkVideoEncodingSupport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0027_ip = 198; continue _fun0027 }
case 69:
                    var5 = arg1;
case 129: // try_start_0
                    var2 = _closure1_slot6;
                    var4 = var2.MediaManager;
                    var3 = var4.isVideoEncodingSupported;
                    var2 = {};
                    var6 = var5.targetWidth;
                    var2['width'] = var6;
                    var6 = var5.targetHeight;
                    var2['height'] = var6;
                    var6 = var5.frameRate;
                    var2['frameRate'] = var6;
                    var5 = var5.useHEVC;
                    var2['isHEVC'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=89);
case 20:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0027_ip = 93; continue _fun0027 }
case 110: // try_end0
                    return var2;
case 93:
                    return var2;
case 88: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot20;
                    var3 = var4.warn;
                    var2 = 'Error checking video encoding support:';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = {};
                    var3 = true;
                    var2['isSupported'] = var3;
                    return var2;
case 198:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot47 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
    var4 = function calculateImageQualityMetrics(arg1, arg2, arg3, arg4, arg5) {
        var1 = undefined;
        var4 = _closure1_slot49;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot48 = var4;
    var1 = function _calculateImageQualityMetrics() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0028_ip = 422; continue _fun0028 }
case 69:
                    var5 = arg1;
                    var8 = arg2;
                    var10 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var2 = {};
                    var4 = arg5;
                    if(!var4) { _fun0028_ip = 423; continue _fun0028 }
case 403: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 2;
                    var4 = var9[var4];
                    var4 = var7.bind(var10)(var4);
                    var4 = var4.NativeModules;
                    var9 = var4.MediaManager;
                    var7 = var9.getMediaOrigin;
                    var4 = var5;
                    var4 = var7.bind(var9)(var4);
                    SaveGenerator(address=85);
case 424:
                    return var4;
case 425:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0028_ip = 235; continue _fun0028 }
case 22:
                    var9 = var2;
                    var7 = var4.source;
                    var9['origin'] = var7;
case 399: // try_end0
                    _fun0028_ip = 423; continue _fun0028;
case 235:
                    return var4;
case 426: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var9 = _closure1_slot20;
                    var7 = var9.warn;
                    var4 = 'Failed to detect media origin';
                    var4 = var7.bind(var9)(var4, var11);
case 423:
                    var4 = arg4;
                    if(!var4) { _fun0028_ip = 427; continue _fun0028 }
case 428: // try_start_1
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 2;
                    var7 = var11[var7];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.NativeModules;
                    var6 = var7.MediaManager;
                    var10 = var8;
                    var3 = var10;
                    var9 = var10.includes;
                    var7 = '://';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0028_ip = 429; continue _fun0028 }
case 430:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '/';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0028_ip = 431; continue _fun0028 }
case 432:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '\\';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0028_ip = 431; continue _fun0028 }
case 433:
                    var9 = var5;
                    var7 = var9.startsWith;
                    var11 = 'ph://';
                    var7 = var7.bind(var9)(var11);
                    var10 = var8;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var9 = var9.concat;
                    if(var7) { _fun0028_ip = 209; continue _fun0028 }
case 434:
                    var7 = 'file://';
                    var7 = var9.bind(var7)(var10);
                    _fun0028_ip = 246; continue _fun0028;
case 209:
                    var7 = var9.bind(var11)(var10);
case 246:
                    _fun0028_ip = 290; continue _fun0028;
case 431:
                    var10 = var8;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'file://';
                    var7 = var9.bind(var8)(var10);
case 290:
                    var3 = var7;
case 429:
                    var7 = var6;
                    var6 = var7.calculateImageQualityMetrics;
                    var3 = var6.bind(var7)(var5, var3);
                    SaveGenerator(address=356);
case 435:
                    return var3;
case 436:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0028_ip = 437; continue _fun0028 }
case 29:
                    var6 = var2;
                    var5 = var3.psnr;
                    var6['psnr'] = var5;
                    var5 = var3.ssim;
                    var6['ssim'] = var5;
                    var5 = var3.psnrCalculationTimeMs;
                    var6['psnrMeasurementLatencyMs'] = var5;
                    var5 = var3.ssimCalculationTimeMs;
                    var6['ssimMeasurementLatencyMs'] = var5;
                    var6 = _closure1_slot20;
                    var5 = var6.log;
                    var10 = var3.psnr;
                    var9 = var3.ssim;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'Quality metrics calculated: PSNR=';
                    var4 = 'dB, SSIM=';
                    var4 = var8.bind(var7)(var10, var4, var9);
                    var4 = var5.bind(var6)(var4);
case 256: // try_end1
                    _fun0028_ip = 427; continue _fun0028;
case 437:
                    return var3;
case 225: // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot20;
                    var4 = var5.warn;
                    var3 = 'Error in quality metrics calculation';
                    var3 = var4.bind(var5)(var3, var6);
case 427:
                    return var2;
case 422:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot49 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = ['filename'];
    var _closure1_slot3 = var1;
    var26 = global;
    var24 = var26.Object;
    var23 = var24.defineProperty;
    var22 = {};
    var1 = true;
    var22['value'] = var1;
    var1 = '__esModule';
    var1 = var23.bind(var24)(var3, var1, var22);
    var1 = 0;
    var22 = var15[var1];
    var1 = undefined;
    var22 = var27.bind(var1)(var22);
    var _closure1_slot4 = var22;
    var22 = 1;
    var22 = var15[var22];
    var22 = var27.bind(var1)(var22);
    var _closure1_slot5 = var22;
    var22 = 2;
    var22 = var15[var22];
    var22 = var14.bind(var1)(var22);
    var23 = var22.NativeModules;
    var _closure1_slot6 = var23;
    var22 = var22.Image;
    var _closure1_slot7 = var22;
    var22 = 3;
    var23 = var15[var22];
    var23 = var14.bind(var1)(var23);
    var24 = var23.VideoCompressionQuality;
    var _closure1_slot8 = var24;
    var23 = var23.VideoQualitySettings;
    var _closure1_slot9 = var23;
    var22 = var15[var22];
    var22 = var27.bind(var1)(var22);
    var _closure1_slot10 = var22;
    var22 = 4;
    var22 = var15[var22];
    var22 = var27.bind(var1)(var22);
    var _closure1_slot11 = var22;
    var22 = 5;
    var22 = var15[var22];
    var22 = var27.bind(var1)(var22);
    var _closure1_slot12 = var22;
    var22 = 6;
    var22 = var15[var22];
    var22 = var14.bind(var1)(var22);
    var23 = var22.Base64PNGPrefix;
    var _closure1_slot13 = var23;
    var24 = var22.Base64GIFPrefix;
    var _closure1_slot14 = var24;
    var23 = var22.Base64JPEGPrefix;
    var28 = var22.NetworkConnectionTypes;
    var _closure1_slot15 = var28;
    var28 = var22.CompressionQuality;
    var _closure1_slot16 = var28;
    var28 = var22.Base64WEBPPrefix;
    var _closure1_slot17 = var28;
    var22 = var22.Base64AVIFPrefix;
    var _closure1_slot18 = var22;
    var22 = 7;
    var22 = var15[var22];
    var22 = var14.bind(var1)(var22);
    var22 = var22.NativePermissionTypes;
    var _closure1_slot19 = var22;
    var22 = 8;
    var22 = var15[var22];
    var28 = var27.bind(var1)(var22);
    var22 = var28.prototype;
    var27 = Object.create(var22, {constructor: {value: var28}});
    var32 = 'UploadUtils.tsx';
    var33 = var27;
    var22 = new var33[var28](var32, var31);
    var22 = var22 instanceof Object ? var22 : var27;
    var _closure1_slot20 = var22;
    var29 = var26.RegExp;
    var22 = '^';
    var32 = var22 + var23;
    var27 = var29.prototype;
    var28 = Object.create(var27, {constructor: {value: var29}});
    var27 = 'i';
    var33 = var28;
    var31 = var27;
    var23 = new var33[var29](var32, var31, var30);
    var23 = var23 instanceof Object ? var23 : var28;
    var _closure1_slot21 = var23;
    var26 = var26.RegExp;
    var32 = var22 + var24;
    var24 = var26.prototype;
    var24 = Object.create(var24, {constructor: {value: var26}});
    var33 = var24;
    var22 = new var33[var26](var32, var31, var30);
    var22 = var22 instanceof Object ? var22 : var24;
    var _closure1_slot22 = var22;
    var24 = 'Canceled';
    var _closure1_slot23 = var24;
    var24 = {};
    var24['getFileInfo'] = var13;
    var24['isVideo'] = var11;
    var24['getType'] = var9;
    var24['openImagePickerUnhandled'] = var25;
    var24['openImagePicker'] = var21;
    var24['getCaptionLabel'] = var8;
    var24['getImageDimensionsIfMissing'] = var7;
    var24['isHEVCEncodingSupported'] = var6;
    var24['getAppDir'] = var16;
    var25 = 32;
    var25 = var15[var25];
    var27 = var14.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'utils/native/UploadUtils.tsx';
    var25 = var26.bind(var27)(var25);
    var3['default'] = var24;
    var3['base64JPEGRegex'] = var23;
    var3['base64GIFRegex'] = var22;
    var3['openImagePicker'] = var21;
    var3['mediaManager'] = var20;
    var20 = function getImageCompressionQuality() {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = _closure1_slot10;
            var1 = var1.dataSavingMode;
            if(!var1) { _fun0029_ip = 100; continue _fun0029 }
case 101:
            var3 = _closure1_slot11;
            var1 = var3.getType;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot15;
            var1 = var1.CELLULAR;
            if(!(var3 !== var1)) { _fun0029_ip = 438; continue _fun0029 }
case 100:
            var1 = _closure1_slot16;
            var1 = var1.HIGH;
            _fun0029_ip = 439; continue _fun0029;
case 438:
            var2 = _closure1_slot16;
            var1 = var2.LOW;
case 439:
            return var1;
        }
    };
    var3['getImageCompressionQuality'] = var20;
    var3['getVideoQuality'] = var19;
    var3['resolveModeToVideoQualityForUserWithFeature'] = var18;
    var3['resolveModeToVideoQualityForFreeUser'] = var17;
    var17 = function cancelGetFileInfo(arg1) {
        var2 = arg1;
        var2 = var2.item;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0030_ip = 440; continue _fun0030 }
case 145:
                var4 = _closure2_slot0;
                var6 = var4.platform;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 17;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.UploadPlatform;
                var4 = var4.REACT_NATIVE;
                if(!(var6 !== var4)) { _fun0030_ip = 400; continue _fun0030 }
case 440:
                var4 = var5.bind(var1)();
                _fun0030_ip = 127; continue _fun0030;
case 400:
                var4 = _closure1_slot27;
                var2 = _closure2_slot0;
                var3 = var2.uri;
                var2 = 'cancelResolveToMediaFilePath';
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.then;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
case 127:
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['cancelGetFileInfo'] = var17;
    var17 = function getFileSize(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var4 = var8;
            if(!var1) { _fun0031_ip = 97; continue _fun0031 }
case 100:
            var7 = var8.replace;
            var3 = /file:\/\//;
            var1 = '';
            var4 = var7.bind(var8)(var3, var1);
case 97:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0031_ip = 126; continue _fun0031 }
case 103:
            var1 = _closure1_slot6;
            var3 = var1.DCDFileManager;
            var1 = var3.getSize;
            var1 = var1.bind(var3)(var4);
            _fun0031_ip = 441; continue _fun0031;
case 126:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 18;
            var3 = var3[var6];
            var7 = var7.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var7)) { _fun0031_ip = 163; continue _fun0031 }
case 298:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getSize;
            var2 = var2.bind(var3)(var4);
            _fun0031_ip = 284; continue _fun0031;
case 163:
            var3 = global;
            var5 = var3.Promise;
            var4 = var5.reject;
            var3 = "RTNFileManager doesn't exist?";
            var2 = var4.bind(var5)(var3);
case 284:
            var1 = var2;
case 441:
            return var1;
        }
    };
    var3['getFileSize'] = var17;
    var3['getAppDir'] = var16;
    var3['getFileInfo'] = var13;
    var13 = 19;
    var16 = var15[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.shouldConvertToJPG;
    var3['shouldConvertToJPG'] = var16;
    var13 = var15[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.shouldForceConvertToJPG;
    var3['shouldForceConvertToJPG'] = var13;
    var3['shouldResolveToMediaFilePath'] = var12;
    var3['isVideo'] = var11;
    var3['isImage'] = var10;
    var3['getType'] = var9;
    var3['getCaptionLabel'] = var8;
    var3['getImageDimensionsIfMissing'] = var7;
    var3['isHEVCEncodingSupported'] = var6;
    var3['checkVideoEncodingSupport'] = var5;
    var3['calculateImageQualityMetrics'] = var4;
    var2 = function getFileFromUploadItem(arg1) {
        var4 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var5 = var4.uri;
        var1['uri'] = var5;
        var5 = var4.filename;
        var1['overrideFilename'] = var5;
        var4 = var4.mimeType;
        var1['overrideType'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getFileFromUploadItem'] = var2;
    return var1;
})();