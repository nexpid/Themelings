// app/utils/native/UploadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var26 = require;
    var29 = metroImportDefault;
    var3 = exports;
    var27 = dependencyMap;
    var _closure1_slot0 = var26;
    var _closure1_slot1 = var29;
    var _closure1_slot2 = var27;
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
    var15 = function getAppDir() {
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
    var14 = function getFileInfo(arg1) {
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
            var3 = _closure1_slot37;
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
                var4 = _closure1_slot43;
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
                var4 = _closure1_slot42;
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
    var1 = function isPhotoKitAsset(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = /^ph:\/\//i;
            var1 = var2.bind(var3)(var1);
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0010_ip = 100; continue _fun0010 }
case 94:
            var2 = arg2;
            var1 = var3 != var2;
case 100:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var13 = function shouldForceConvertToJPG(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0011_ip = 121; continue _fun0011 }
case 122:
            var2 = _closure1_slot32;
            var2 = var2.bind(var3)(var6, var7);
            var4 = null;
            if(var2) { _fun0011_ip = 123; continue _fun0011 }
case 71:
            var5 = var6.match;
            var2 = /^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i;
            var2 = var5.bind(var6)(var2);
            var2 = var4 != var2;
            _fun0011_ip = 119; continue _fun0011;
case 123:
            var5 = var4 == var7;
            var3 = undefined;
            if(var5) { _fun0011_ip = 124; continue _fun0011 }
case 125:
            var6 = var7.match;
            var5 = /\.HEI[CF]$/i;
            var3 = var6.bind(var7)(var5);
case 124:
            var2 = var4 != var3;
case 119:
            var1 = var2;
case 121:
            return var1;
        }
    };
    var _closure1_slot33 = var13;
    var12 = function shouldConvertToJPG(arg1, arg2, arg3, arg4) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var10 = arg1;
            var8 = arg2;
            var1 = arg3;
            var2 = arg4;
            var6 = arguments[4];
            var7 = undefined;
            if(!(var6 === var7)) { _fun0012_ip = 126; continue _fun0012 }
case 127:
            var6 = true;
case 126:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var5 = var5.bind(var7)(var3);
            var3 = var5.isIOS;
            var3 = var3.bind(var5)();
            if(var3) { _fun0012_ip = 70; continue _fun0012 }
case 128:
            var3 = false;
            return var3;
case 70:
            var3 = null;
            var9 = var3 == var8;
            var5 = undefined;
            if(var9) { _fun0012_ip = 9; continue _fun0012 }
case 73:
            var11 = var8.lastIndexOf;
            var9 = '.';
            var5 = var11.bind(var8)(var9);
case 9:
            var11 = var3 != var5;
            var9 = -1;
            var12 = var9;
            if(!var11) { _fun0012_ip = 129; continue _fun0012 }
case 125:
            var12 = var5;
case 129:
            var5 = undefined;
            if(!(var9 !== var12)) { _fun0012_ip = 130; continue _fun0012 }
case 102:
            var11 = var8.substring;
            var9 = 1;
            var9 = var12 + var9;
            var11 = var11.bind(var8)(var9);
            var9 = var11.toLowerCase;
            var5 = var9.bind(var11)();
case 130:
            if(var6) { _fun0012_ip = 131; continue _fun0012 }
case 132:
            var9 = var10.match;
            var6 = /(&ext=|\.)(hei[cf])$/i;
            var6 = var9.bind(var10)(var6);
            var9 = var3 != var6;
            var6 = 'heic';
            var6 = var6 === var5;
            if(var6) { _fun0012_ip = 133; continue _fun0012 }
case 134:
            var11 = 'heif';
            var6 = var11 === var5;
case 133:
            if(var6) { _fun0012_ip = 135; continue _fun0012 }
case 136:
            var6 = var9;
case 135:
            return var6;
case 131:
            var6 = _closure1_slot32;
            var6 = var6.bind(var7)(var10, var8);
            if(var6) { _fun0012_ip = 137; continue _fun0012 }
case 138:
            var8 = var10.match;
            var6 = /^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i;
            var6 = var8.bind(var10)(var6);
            var6 = var3 != var6;
            if(var6) { _fun0012_ip = 139; continue _fun0012 }
case 140:
            var9 = var10.match;
            var8 = /^(assets-library|file):\/\/.+(&ext=|\.)png$/i;
            var8 = var9.bind(var10)(var8);
            var8 = var3 == var8;
            if(var8) { _fun0012_ip = 141; continue _fun0012 }
case 142:
            var9 = !var1;
            if(!var9) { _fun0012_ip = 143; continue _fun0012 }
case 144:
            var9 = !var2;
case 143:
            var8 = var9;
case 141:
            var6 = !var8;
case 139:
            return var6;
case 137:
            if(!(var3 != var5)) { _fun0012_ip = 145; continue _fun0012 }
case 146:
            var6 = 'png';
            if(!(var6 !== var5)) { _fun0012_ip = 147; continue _fun0012 }
case 148:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 19;
            var6 = var6[var8];
            var9 = var9.bind(var7)(var6);
            var6 = var9.isExtensionAnimated;
            var6 = var6.bind(var9)(var5);
            if(var6) { _fun0012_ip = 149; continue _fun0012 }
case 150:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var6 = var6.bind(var7)(var4);
            var4 = var6.getSupportedExtensions;
            var4 = var4.bind(var6)();
            if(!(var3 !== var4)) { _fun0012_ip = 151; continue _fun0012 }
case 152:
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0012_ip = 151; continue _fun0012 }
case 153:
            var3 = true;
            return var3;
case 149:
            var3 = false;
            return var3;
case 147:
            if(var2) { _fun0012_ip = 154; continue _fun0012 }
case 155:
            if(var1) { _fun0012_ip = 156; continue _fun0012 }
case 151:
            var1 = false;
            return var1;
case 156:
            var1 = true;
            return var1;
case 154:
            var1 = true;
            return var1;
case 145:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot34 = var12;
    var1 = function _shouldConvertToPNG() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 157; continue _fun0013 }
case 158:
                    var3 = arg1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0013_ip = 128; continue _fun0013 }
case 159:
                    var5 = false;
                    return var5;
case 128:
                    var6 = _closure1_slot32;
                    var5 = var3;
                    var6 = var6.bind(var4)(var5, var8);
                    var5 = null;
                    if(var6) { _fun0013_ip = 160; continue _fun0013 }
case 5:
                    var9 = var3;
                    var7 = var9.match;
                    var6 = /^(assets-library|file):\/\/.+(&ext=|\.)png$/i;
                    var6 = var7.bind(var9)(var6);
                    if(!(var5 != var6)) { _fun0013_ip = 161; continue _fun0013 }
case 162:
                    _fun0013_ip = 163; continue _fun0013;
case 161:
                    var6 = false;
                    return var6;
case 160:
                    var6 = var5 == var8;
                    var4 = undefined;
                    if(var6) { _fun0013_ip = 164; continue _fun0013 }
case 8:
                    var7 = var8.match;
                    var6 = /\.png$/i;
                    var4 = var7.bind(var8)(var6);
case 164:
                    if(!(var5 != var4)) { _fun0013_ip = 165; continue _fun0013 }
case 163: // try_start_0
                    var4 = _closure1_slot6;
                    var5 = var4.MediaManager;
                    var4 = var5.imageHasTransparency;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=181);
case 166:
                    return var3;
case 167:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 168; continue _fun0013 }
case 134: // try_end0
                    return var3;
case 168:
                    return var3;
case 169: // catch_target0
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
case 165:
                    var2 = false;
                    return var2;
case 157:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var11 = function shouldResolveToMediaFilePath(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
            if(!var1) { _fun0014_ip = 106; continue _fun0014 }
case 170:
            var3 = var4.match;
            var2 = /^content:\/\/.+$/i;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var1 = var2 != var3;
case 106:
            return var1;
        }
    };
    var _closure1_slot36 = var11;
    var10 = function isVideo(arg1, arg2) {
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
    var _closure1_slot37 = var10;
    var9 = function isImage(arg1, arg2) {
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
    var _closure1_slot38 = var9;
    var8 = function getType(arg1) {
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
            if(!var6) { _fun0015_ip = 171; continue _fun0015 }
case 172:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.getSystemVersionMajor;
            var7 = var6.bind(var7)();
            var6 = 34;
            if(!(!(var7 > var6))) { _fun0015_ip = 152; continue _fun0015 }
case 171:
            var6 = var3.frameRate;
            _fun0015_ip = 173; continue _fun0015;
case 152:
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
case 173:
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
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0016_ip = 174; continue _fun0016 }
case 69:
                                var14 = function* _loop() {
                                    var1 = function* anon_0__loop() {
                                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0017_ip = 175; continue _fun0017 }
case 3:
                                            var7 = undefined;
                                            var _closure8_slot0 = var7;
                                            var5 = _closure1_slot48;
                                            var2 = _closure2_slot6;
                                            var2 = var5.bind(var7)(var2);
                                            SaveGenerator(address=41);
case 176:
                                            return var2;
case 170:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                            if(var5) { _fun0017_ip = 177; continue _fun0017 }
case 122:
                                            var5 = var2.isSupported;
                                            if(var5) { _fun0017_ip = 178; continue _fun0017 }
case 95:
                                            var12 = null;
                                            if(!(var12 != var2)) { _fun0017_ip = 179; continue _fun0017 }
case 19:
                                            var5 = var2.capabilities;
                                            if(!(var12 != var5)) { _fun0017_ip = 179; continue _fun0017 }
case 105:
                                            var5 = var2.failures;
                                            if(!(var12 != var5)) { _fun0017_ip = 179; continue _fun0017 }
case 180:
                                            var5 = var2.failures;
                                            var5 = var5.length;
                                            var9 = 0;
                                            if(!(var9 !== var5)) { _fun0017_ip = 179; continue _fun0017 }
case 181:
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
                                            if(!(var12 == var5)) { _fun0017_ip = 182; continue _fun0017 }
case 183:
                                            var10 = var2.failures;
                                            var6 = var10.find;
                                            var5 = function(arg1) {
                                                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                                    var2 = arg1;
                                                    var3 = var2.type;
                                                    var1 = 'resolution';
                                                    var1 = var1 === var3;
                                                    if(var1) { _fun0018_ip = 107; continue _fun0018 }
case 184:
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
                                            if(!var5) { _fun0017_ip = 185; continue _fun0017 }
case 186:
                                            var5 = var2.capabilities;
                                            var5 = var5.resolution;
                                            var5 = var12 != var5;
                                            var10 = false;
                                            if(!var5) { _fun0017_ip = 185; continue _fun0017 }
case 187:
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetHeight;
                                            if(!(var9 !== var5)) { _fun0017_ip = 188; continue _fun0017 }
case 189:
                                            var5 = _closure2_slot6;
                                            var5 = var5.targetWidth;
                                            if(!(var9 !== var5)) { _fun0017_ip = 188; continue _fun0017 }
case 190:
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
                                            if(!(var11 !== var14)) { _fun0017_ip = 191; continue _fun0017 }
case 192:
                                            var16 = var13.Math;
                                            var15 = var16.round;
                                            var14 = var11 / var9;
                                            var5 = var15.bind(var16)(var14);
case 191:
                                            var14 = _closure2_slot6;
                                            var14 = var14.targetHeight;
                                            if(!(var5 !== var14)) { _fun0017_ip = 193; continue _fun0017 }
case 155:
                                            var15 = var13.Math;
                                            var14 = var15.round;
                                            var9 = var5 * var9;
                                            var11 = var14.bind(var15)(var9);
case 193:
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
                                            if(!var5) { _fun0017_ip = 194; continue _fun0017 }
case 195:
                                            var13 = _closure2_slot6;
                                            var13 = var13.targetHeight;
                                            var5 = var9 === var13;
case 194:
                                            var10 = false;
                                            if(var5) { _fun0017_ip = 185; continue _fun0017 }
case 196:
                                            var5 = _closure2_slot6;
                                            var5['targetWidth'] = var11;
                                            var5 = _closure2_slot6;
                                            var5['targetHeight'] = var9;
                                            var10 = true;
case 185:
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
                                            if(!(var12 != var9)) { _fun0017_ip = 197; continue _fun0017 }
case 198:
                                            var14 = var12 == var11;
                                            var13 = undefined;
                                            if(var14) { _fun0017_ip = 38; continue _fun0017 }
case 199:
                                            var14 = var11.frameRate;
                                            var15 = var12 == var14;
                                            var13 = undefined;
                                            if(var15) { _fun0017_ip = 38; continue _fun0017 }
case 200:
                                            var13 = var14.min;
case 38:
                                            var5 = var10;
                                            if(!(var12 != var13)) { _fun0017_ip = 197; continue _fun0017 }
case 201:
                                            var14 = var12 == var11;
                                            var13 = undefined;
                                            if(var14) { _fun0017_ip = 202; continue _fun0017 }
case 203:
                                            var14 = var11.frameRate;
                                            var15 = var12 == var14;
                                            var13 = undefined;
                                            if(var15) { _fun0017_ip = 202; continue _fun0017 }
case 204:
                                            var13 = var14.max;
case 202:
                                            var5 = var10;
                                            if(!(var12 != var13)) { _fun0017_ip = 197; continue _fun0017 }
case 205:
                                            var13 = _closure2_slot6;
                                            var13 = var13.frameRate;
                                            var14 = var9.message;
                                            var13 = var14.includes;
                                            var9 = 'not supported at resolution';
                                            var9 = var13.bind(var14)(var9);
                                            if(var9) { _fun0017_ip = 206; continue _fun0017 }
case 207:
                                            var9 = global;
                                            var15 = var9.Math;
                                            var14 = var15.min;
                                            var9 = _closure2_slot6;
                                            var13 = var9.frameRate;
                                            var9 = var11.frameRate;
                                            var9 = var9.max;
                                            var9 = var14.bind(var15)(var13, var9);
                                            _fun0017_ip = 208; continue _fun0017;
case 206:
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
                                                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                                    var3 = arg1;
                                                    var1 = _closure2_slot6;
                                                    var1 = var1.frameRate;
                                                    var1 = var3 < var1;
                                                    if(!var1) { _fun0019_ip = 209; continue _fun0019 }
case 126:
                                                    var2 = _closure8_slot0;
                                                    var2 = var2.frameRate;
                                                    var2 = var2.min;
                                                    var1 = var3 >= var2;
case 209:
                                                    return var1;
                                                }
                                            };
                                            var8 = var13.bind(var14)(var8);
                                            if(!(var12 == var8)) { _fun0017_ip = 210; continue _fun0017 }
case 211:
                                            var11 = var11.frameRate;
                                            var8 = var11.min;
case 210:
                                            var9 = var8;
case 208:
                                            var8 = _closure2_slot6;
                                            var8 = var8.frameRate;
                                            var5 = var10;
                                            if(!(var9 !== var8)) { _fun0017_ip = 197; continue _fun0017 }
case 36:
                                            var8 = _closure2_slot6;
                                            var8['frameRate'] = var9;
                                            var5 = true;
case 197:
                                            if(var5) { _fun0017_ip = 212; continue _fun0017 }
case 213:
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
case 212:
                                            var5 = _closure2_slot7;
                                            var5 = var5 + 1;
                                            _closure2_slot7 = var5;
                                            return var7;
case 188:
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
case 182:
                                            var5 = _closure2_slot6;
                                            var5 = var5.useHEVC;
                                            if(var5) { _fun0017_ip = 214; continue _fun0017 }
case 215:
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
                                            _fun0017_ip = 216; continue _fun0017;
case 214:
                                            var7 = _closure2_slot6;
                                            var6 = false;
                                            var7['useHEVC'] = var6;
                                            var5 = 1;
case 216:
                                            return var5;
case 179:
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
case 178:
                                            var3 = {};
                                            var4 = true;
                                            var3['v'] = var4;
                                            return var3;
case 177:
                                            return var2;
case 175:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = _closure2_slot7;
                                var12 = 4;
                                if(!(var2 < var12)) { _fun0016_ip = 217; continue _fun0016 }
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
                                if(var5) { _fun0016_ip = 218; continue _fun0016 }
case 219: // try_start_0
                                var5 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 220:
                                return var3;
case 221: // try_end0 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=4);
                                var25 = var4;
                                var24 = var7;
                                var3 = getMethod(var25, var24);
                                if(!(var3 !== var11)) { _fun0016_ip = 222; continue _fun0016 }
case 223:
                                var3 = var3.bind(var4)(var5);
                                var25 = var3;
                                var24 = var8;
                                var5 = ensureObject(var25, var24);
                                var5 = var3.done;
                                if(var5) { _fun0016_ip = 224; continue _fun0016 }
case 225:
                                var5 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 226:
                                return var3;
case 12: // try_start_1
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=15);
                                var17 = var5;
                                var15 = var16;
                                if(!var15) { _fun0016_ip = 88; continue _fun0016 }
case 136:
                                var17 = var5;
case 135: // try_end1
                                var24 = 'return';
                                var25 = var4;
                                var19 = getMethod(var25, var24);
                                if(!(var19 !== var11)) { _fun0016_ip = 227; continue _fun0016 }
case 138:
                                var15 = var17;
                                var15 = var19.bind(var4)(var15);
                                var24 = 'iterator.return() did not return an object';
                                var25 = var15;
                                var19 = ensureObject(var25, var24);
                                var19 = var15.done;
                                if(var19) { _fun0016_ip = 228; continue _fun0016 }
case 229:
                                var19 = generatorSetDelegated();
                                SaveGenerator(address=188);
case 82:
                                return var15;
case 228:
                                var15 = var15.value;
                                return var15;
case 227:
                                return var5;
case 224:
                                var2 = var3;
                                _fun0016_ip = 218; continue _fun0016;
case 222:
                                var24 = 'return';
                                var25 = var4;
                                var3 = getMethod(var25, var24);
                                if(!(var3 !== var11)) { _fun0016_ip = 230; continue _fun0016 }
case 231:
                                var25 = var3.bind(var4)();
                                var24 = 'iterator.return() did not return an object';
                                var3 = ensureObject(var25, var24);
case 230:
                                var25 = 'yield* delegate must have a .throw() method';
                                var3 = throwTypeError(var25);
                                throw var11;
case 218:
                                var5 = var2.value;
                                var4 = 0;
                                var3 = 1;
                                if(!(var4 !== var5)) { _fun0016_ip = 217; continue _fun0016 }
case 232:
                                var2 = var5;
                                if(!(var3 !== var2)) { _fun0016_ip = 233; continue _fun0016 }
case 234:
                                if(var2) { _fun0016_ip = 235; continue _fun0016 }
case 233:
                                var15 = _closure2_slot7;
                                if(!(var15 < var12)) { _fun0016_ip = 217; continue _fun0016 }
case 236:
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
case 237:
                                var16 = var21;
                                var16 = var22.bind(var17)(var16);
                                var25 = var16;
                                var24 = var6;
                                var18 = ensureObject(var25, var24);
                                var15 = var16;
                                var18 = var16.done;
                                if(var18) { _fun0016_ip = 238; continue _fun0016 }
case 239: // try_start_2
                                var18 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 240:
                                return var16;
case 173: // try_end2 // catch_target2 // catch_target3
                                CatchBlockStart(arg_register=17);
                                var25 = var17;
                                var24 = var7;
                                var16 = getMethod(var25, var24);
                                if(!(var16 !== var11)) { _fun0016_ip = 241; continue _fun0016 }
case 242:
                                var16 = var16.bind(var17)(var18);
                                var25 = var16;
                                var24 = var8;
                                var18 = ensureObject(var25, var24);
                                var18 = var16.done;
                                if(var18) { _fun0016_ip = 243; continue _fun0016 }
case 244:
                                var18 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 245:
                                return var16;
case 246: // try_start_3
                                ResumeGenerator(result_out_reg=17, return_bool_out_reg=19);
                                var21 = var18;
                                var19 = var20;
                                if(!var19) { _fun0016_ip = 237; continue _fun0016 }
case 247:
                                var21 = var18;
case 248: // try_end3
                                var24 = 'return';
                                var25 = var17;
                                var23 = getMethod(var25, var24);
                                if(!(var23 !== var11)) { _fun0016_ip = 249; continue _fun0016 }
case 250:
                                var19 = var21;
                                var19 = var23.bind(var17)(var19);
                                var24 = 'iterator.return() did not return an object';
                                var25 = var19;
                                var23 = ensureObject(var25, var24);
                                var23 = var19.done;
                                if(var23) { _fun0016_ip = 251; continue _fun0016 }
case 252:
                                var23 = generatorSetDelegated();
                                SaveGenerator(address=481);
case 253:
                                return var19;
case 251:
                                var19 = var19.value;
                                return var19;
case 249:
                                return var18;
case 243:
                                var15 = var16;
                                _fun0016_ip = 238; continue _fun0016;
case 241:
                                var24 = 'return';
                                var25 = var17;
                                var16 = getMethod(var25, var24);
                                if(!(var16 !== var11)) { _fun0016_ip = 254; continue _fun0016 }
case 255:
                                var25 = var16.bind(var17)();
                                var24 = 'iterator.return() did not return an object';
                                var16 = ensureObject(var25, var24);
case 254:
                                var25 = 'yield* delegate must have a .throw() method';
                                var16 = throwTypeError(var25);
                                throw var11;
case 238:
                                var5 = var15.value;
                                if(var4 !== var5) { _fun0016_ip = 232; continue _fun0016 }
case 217:
                                var3 = false;
                                return var3;
case 235:
                                var2 = var2.v;
                                return var2;
case 174:
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
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0020_ip = 256; continue _fun0020 }
case 257:
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
                        _fun0020_ip = 258; continue _fun0020;
case 256:
                        var5 = _closure1_slot36;
                        var2 = _closure2_slot0;
                        var7 = undefined;
                        var2 = var5.bind(var7)(var2);
                        if(var2) { _fun0020_ip = 259; continue _fun0020 }
case 260:
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
                        if(var5) { _fun0020_ip = 261; continue _fun0020 }
case 262:
                        var5 = _closure1_slot32;
                        var5 = var5.bind(var7)(var10, var12);
                        var9 = null;
                        if(var5) { _fun0020_ip = 263; continue _fun0020 }
case 169:
                        var8 = var10.match;
                        var5 = /^assets-library:\/\/.+&ext=(mov|qt)$/i;
                        var5 = var8.bind(var10)(var5);
                        var5 = var9 != var5;
                        if(!var5) { _fun0020_ip = 264; continue _fun0020 }
case 265:
                        var8 = _closure1_slot37;
                        var5 = var8.bind(var7)(var10);
case 264:
                        _fun0020_ip = 266; continue _fun0020;
case 263:
                        var10 = var9 == var12;
                        var8 = undefined;
                        if(var10) { _fun0020_ip = 267; continue _fun0020 }
case 268:
                        var11 = var12.match;
                        var10 = /\.(mov|qt)$/i;
                        var8 = var11.bind(var12)(var10);
case 267:
                        var5 = var9 != var8;
case 266:
                        var2 = var5;
case 261:
                        if(var2) { _fun0020_ip = 269; continue _fun0020 }
case 270:
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
                        if(var5) { _fun0020_ip = 239; continue _fun0020 }
case 271:
                        var5 = _closure1_slot32;
                        var5 = var5.bind(var7)(var10, var12);
                        var9 = null;
                        if(var5) { _fun0020_ip = 272; continue _fun0020 }
case 233:
                        var8 = var10.match;
                        var5 = /^assets-library:\/\/.+&ext=mp4$/i;
                        var5 = var8.bind(var10)(var5);
                        var5 = var9 != var5;
                        if(!var5) { _fun0020_ip = 273; continue _fun0020 }
case 274:
                        var8 = _closure1_slot37;
                        var5 = var8.bind(var7)(var10);
case 273:
                        _fun0020_ip = 275; continue _fun0020;
case 272:
                        var10 = var9 == var12;
                        var8 = undefined;
                        if(var10) { _fun0020_ip = 145; continue _fun0020 }
case 237:
                        var11 = var12.match;
                        var10 = /\.mp4$/i;
                        var8 = var11.bind(var12)(var10);
case 145:
                        var5 = var9 != var8;
case 275:
                        var2 = var5;
case 239:
                        if(var2) { _fun0020_ip = 276; continue _fun0020 }
case 240:
                        var8 = _closure2_slot0;
                        var2 = var8.toLowerCase;
                        var9 = var2.bind(var8)();
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var5.bind(var7)(var2);
                        var2 = var5.isIOS;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0020_ip = 277; continue _fun0020 }
case 278:
                        var6 = var8.startsWith;
                        var5 = 'file';
                        var2 = var6.bind(var8)(var5);
case 277:
                        if(!var2) { _fun0020_ip = 279; continue _fun0020 }
case 280:
                        var6 = var9.endsWith;
                        var5 = 'mov';
                        var5 = var6.bind(var9)(var5);
                        if(var5) { _fun0020_ip = 281; continue _fun0020 }
case 282:
                        var8 = var9.endsWith;
                        var6 = 'mp4';
                        var5 = var8.bind(var9)(var6);
case 281:
                        if(var5) { _fun0020_ip = 283; continue _fun0020 }
case 284:
                        var8 = var9.endsWith;
                        var6 = 'qt';
                        var5 = var8.bind(var9)(var6);
case 283:
                        var2 = var5;
case 279:
                        if(var2) { _fun0020_ip = 285; continue _fun0020 }
case 286:
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
                        _fun0020_ip = 287; continue _fun0020;
case 285:
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
                        if(var5) { _fun0020_ip = 288; continue _fun0020 }
case 289:
                        var11 = _closure2_slot0;
                        var10 = var11.toLowerCase;
                        var12 = var10.bind(var11)();
                        var11 = var12.endsWith;
                        var10 = 'qt';
                        var5 = var11.bind(var12)(var10);
case 288:
                        var6['isMov'] = var5;
                        var5 = _closure2_slot5;
                        var6['skipVideoTranscode'] = var5;
                        var5 = 'compressVideo';
                        var9 = var9.bind(var7)(var5, var8, var6);
                        var8 = var9.then;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot1;
                        var2 = var8.bind(var9)(var6, var5);
case 287:
                        _fun0020_ip = 290; continue _fun0020;
case 276:
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
case 290:
                        _fun0020_ip = 291; continue _fun0020;
case 269:
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
case 291:
                        _fun0020_ip = 292; continue _fun0020;
case 259:
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
case 292:
                        var1 = var2;
case 258:
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
    var _closure1_slot39 = var1;
    var1 = function buildResolvedUpload(arg1) {
        var1 = undefined;
        var4 = _closure1_slot41;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function _buildResolvedUpload() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 293; continue _fun0021 }
case 158:
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
                    if(!var3) { _fun0021_ip = 220; continue _fun0021 }
case 104:
                    var9 = var5.path;
                    var8 = var5.originalUri;
                    var3 = var9 !== var8;
case 220:
                    if(!var3) { _fun0021_ip = 294; continue _fun0021 }
case 130:
                    var11 = _closure1_slot50;
                    var17 = var5.originalUri;
                    var16 = var5.path;
                    var15 = var5.filename;
                    var14 = var5.attachmentQualityMetricsEnabled;
                    var13 = var5.attachmentOriginDetectionEnabled;
                    var18 = undefined;
                    var2 = var18[var11](var17, var16, var15, var14, var13, var12);
                    SaveGenerator(address=186);
case 295:
                    return var2;
case 226:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    var4 = var2;
                    if(var3) { _fun0021_ip = 296; continue _fun0021 }
case 294:
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
case 296:
                    return var2;
case 293:
                    return var1;
                }
            };
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
    var1 = function _processVideoUpload() {
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
                    if(var3) { _fun0022_ip = 297; continue _fun0022 }
case 158:
                    var13 = var2.originalUri;
                    var14 = var2.filename;
                    var15 = var2.mimeType;
                    var8 = var2.fileSize;
                    var12 = var2.spoiler;
                    var11 = var2.description;
                    var16 = var2.i;
                    var7 = undefined;
                    SaveGenerator(address=59);
case 298:
                    return var7;
case 128:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0022_ip = 299; continue _fun0022 }
case 300:
                    var3 = _closure1_slot29;
                    var9 = var3.bind(var7)();
                    var3 = _closure1_slot10;
                    var17 = var3.dataSavingMode;
                    if(!var17) { _fun0022_ip = 301; continue _fun0022 }
case 302:
                    var4 = _closure1_slot11;
                    var3 = var4.getType;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot15;
                    var3 = var3.CELLULAR;
                    var17 = var4 === var3;
case 301:
                    var3 = function fetchVideoMetadata(arg1, arg2) {
                        var1 = undefined;
                        var4 = _closure1_slot45;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var7)(var13, var15);
                    SaveGenerator(address=137);
case 303:
                    return var3;
case 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 304; continue _fun0022 }
case 183:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0022_ip = 196; continue _fun0022 }
case 305:
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
                    if(!var4) { _fun0022_ip = 224; continue _fun0022 }
case 306:
                    var4 = var3.frameRate;
                    if(!(var5 != var4)) { _fun0022_ip = 307; continue _fun0022 }
case 308:
                    var4 = global;
                    var18 = var4.Number;
                    var6 = var18.isFinite;
                    var4 = var3.frameRate;
                    var4 = var6.bind(var18)(var4);
                    if(!var4) { _fun0022_ip = 307; continue _fun0022 }
case 115:
                    var6 = var3.frameRate;
                    var4 = 0;
                    if(!(!(var6 <= var4))) { _fun0022_ip = 307; continue _fun0022 }
case 224:
                    var6 = _closure1_slot39;
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
case 309:
                    return var4;
case 310:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0022_ip = 311; continue _fun0022 }
case 312:
                    var17 = var4.path;
                    var8 = var4.encodingConfig;
                    if(!(var5 != var17)) { _fun0022_ip = 81; continue _fun0022 }
case 313:
                    var6 = _closure1_slot40;
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
case 311:
                    return var4;
case 307:
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
case 196:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var21 = 'Video metadata is required for video conversion';
                    var22 = var5;
                    var4 = new var22[var6](var21, var20);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 304:
                    return var3;
case 299:
                    return var2;
case 297:
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
    var1 = function _processImageOrFileUpload() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0023_ip = 314; continue _fun0023 }
case 158:
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
case 315:
                    return var6;
case 316:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0023_ip = 317; continue _fun0023 }
case 318:
                    var3 = _closure1_slot10;
                    var23 = var3.dataSavingMode;
                    if(!var23) { _fun0023_ip = 319; continue _fun0023 }
case 116:
                    var5 = _closure1_slot11;
                    var3 = var5.getType;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot15;
                    var3 = var3.CELLULAR;
                    var23 = var5 === var3;
case 319:
                    var3 = _closure1_slot38;
                    var12 = var3.bind(var6)(var16, var18);
                    if(var12) { _fun0023_ip = 220; continue _fun0023 }
case 303:
                    var10 = {};
                    _fun0023_ip = 320; continue _fun0023;
case 220:
                    var3 = {};
                    var3['width'] = var29;
                    var3['height'] = var26;
                    var10 = var3;
case 320:
                    var3 = _closure1_slot16;
                    var28 = var3.LOW;
                    var3 = var12;
                    if(!var3) { _fun0023_ip = 321; continue _fun0023 }
case 322:
                    var3 = !var23;
case 321:
                    var27 = false;
                    if(!var3) { _fun0023_ip = 323; continue _fun0023 }
case 166:
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
case 323:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var13 = 13;
                    var3 = var3[var13];
                    var7 = var7.bind(var6)(var3);
                    var3 = var7.isIOS;
                    var21 = var3.bind(var7)();
                    if(!var21) { _fun0023_ip = 324; continue _fun0023 }
case 325:
                    var7 = var16.startsWith;
                    var3 = 'ph://';
                    var21 = var7.bind(var16)(var3);
case 324:
                    var24 = false;
                    if(!var12) { _fun0023_ip = 326; continue _fun0023 }
case 273:
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
                    if(!var8) { _fun0023_ip = 327; continue _fun0023 }
case 87:
                    var3 = var7.enabled;
case 327:
                    var24 = var3;
case 326:
                    var8 = false;
                    var7 = false;
                    if(!var12) { _fun0023_ip = 194; continue _fun0023 }
case 328:
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
case 194:
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
                    if(!var25) { _fun0023_ip = 329; continue _fun0023 }
case 330:
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = false;
                    if(!var12) { _fun0023_ip = 329; continue _fun0023 }
case 331:
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var5 = 26;
                    var5 = var26[var5];
                    var25 = var25.bind(var6)(var5);
                    var5 = var25.isDiscordFrontendDevelopment;
                    var26 = var5.bind(var25)();
                    var5 = true;
                    if(var26) { _fun0023_ip = 205; continue _fun0023 }
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
case 205:
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(var23) { _fun0023_ip = 329; continue _fun0023 }
case 332:
                    var26 = var10.width;
                    var29 = null;
                    var26 = var29 != var26;
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(!var26) { _fun0023_ip = 329; continue _fun0023 }
case 333:
                    var26 = var10.height;
                    var26 = var29 != var26;
                    var11 = undefined;
                    var3 = undefined;
                    var13 = var28;
                    var22 = var27;
                    var20 = var5;
                    if(!var26) { _fun0023_ip = 329; continue _fun0023 }
case 334:
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
                    if(!var26) { _fun0023_ip = 329; continue _fun0023 }
case 335:
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
case 329:
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
                        var4 = _closure1_slot44;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var6)(var5);
                    SaveGenerator(address=978);
case 336:
                    return var3;
case 337:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 338; continue _fun0023 }
case 68:
                    var11 = null;
                    if(!(var11 == var3)) { _fun0023_ip = 339; continue _fun0023 }
case 340:
                    if(!(var9 === var6)) { _fun0023_ip = 341; continue _fun0023 }
case 342:
                    var9 = true;
case 341:
                    var5 = _closure1_slot36;
                    var5 = var5.bind(var6)(var16);
                    if(var5) { _fun0023_ip = 343; continue _fun0023 }
case 344:
                    var5 = global;
                    var20 = var5.Promise;
                    var5 = var20.resolve;
                    var5 = var5.bind(var20)(var16);
                    _fun0023_ip = 345; continue _fun0023;
case 343:
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
case 345:
                    SaveGenerator(address=1081);
case 346:
                    return var5;
case 347:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    var21 = var9;
                    var20 = var5;
                    var9 = undefined;
                    if(!var21) { _fun0023_ip = 348; continue _fun0023 }
case 349:
                    return var5;
case 339:
                    var20 = var3.path;
                    var9 = var3.encoderUsed;
case 348:
                    if(!(var11 != var20)) { _fun0023_ip = 350; continue _fun0023 }
case 351:
                    var5 = _closure1_slot40;
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
                    if(var12) { _fun0023_ip = 352; continue _fun0023 }
case 353:
                    var9 = var3.outputWidth;
case 352:
                    if(!(var11 == var9)) { _fun0023_ip = 354; continue _fun0023 }
case 355:
                    var9 = var10.width;
case 354:
                    var4['uploadedImageWidth'] = var9;
                    var12 = var11 == var3;
                    var9 = undefined;
                    if(var12) { _fun0023_ip = 356; continue _fun0023 }
case 357:
                    var9 = var3.outputHeight;
case 356:
                    if(!(var11 == var9)) { _fun0023_ip = 358; continue _fun0023 }
case 359:
                    var9 = var10.height;
case 358:
                    var4['uploadedImageHeight'] = var9;
                    var4['attachmentQualityMetricsEnabled'] = var8;
                    var4['attachmentOriginDetectionEnabled'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 350:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var40 = 'Failed to get image file path';
                    var41 = var5;
                    var4 = new var41[var6](var40, var39);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 338:
                    return var3;
case 317:
                    return var2;
case 314:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _tryConvertImage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 360; continue _fun0024 }
case 158:
                    var4 = var2.uri;
                    var10 = var2.filename;
                    var18 = var2.isLowQuality;
                    var3 = var2.compressionQuality;
                    var17 = var2.mobileLosslessImageEnabled;
                    var14 = var2.useEnhancedConversion;
                    var13 = var2.useJpegliEncoder;
                    var16 = var2.allowOptimization;
                    var12 = var2.targetWidth;
                    var7 = var2.targetHeight;
                    var8 = undefined;
                    SaveGenerator(address=78);
case 99:
                    return var8;
case 318:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0024_ip = 361; continue _fun0024 }
case 20:
                    var19 = var4;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var15 = 13;
                    var5 = var5[var15];
                    var9 = var9.bind(var8)(var5);
                    var5 = var9.isIOS;
                    var5 = var5.bind(var9)();
                    if(!var5) { _fun0024_ip = 362; continue _fun0024 }
case 363:
                    var11 = var19.match;
                    var9 = _closure1_slot21;
                    var11 = var11.bind(var19)(var9);
                    var9 = null;
                    var5 = var9 != var11;
case 362:
                    if(var5) { _fun0024_ip = 364; continue _fun0024 }
case 365:
                    var19 = var4;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var9 = var9.bind(var8)(var5);
                    var5 = var9.isIOS;
                    var5 = var5.bind(var9)();
                    if(!var5) { _fun0024_ip = 306; continue _fun0024 }
case 226:
                    var11 = var19.match;
                    var9 = _closure1_slot22;
                    var11 = var11.bind(var19)(var9);
                    var9 = null;
                    var5 = var9 != var11;
case 306:
                    if(var5) { _fun0024_ip = 366; continue _fun0024 }
case 367:
                    if(!var17) { _fun0024_ip = 152; continue _fun0024 }
case 368:
                    var9 = var4;
                    var5 = function shouldConvertToPNG() {
                        var1 = undefined;
                        var4 = _closure1_slot35;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = var5.bind(var8)(var9, var10);
                    SaveGenerator(address=239);
case 369:
                    return var5;
case 370:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 371; continue _fun0024 }
case 372:
                    if(!var5) { _fun0024_ip = 152; continue _fun0024 }
case 373: // try_start_0
                    var11 = {};
                    var9 = _closure1_slot6;
                    var20 = var9.MediaManager;
                    var19 = var20.getLosslessImageData;
                    var9 = var4;
                    var9 = var19.bind(var20)(var9);
                    SaveGenerator(address=286);
case 374:
                    return var9;
case 231:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=18);
                    if(var19) { _fun0024_ip = 375; continue _fun0024 }
case 376:
                    var11['path'] = var9;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 30;
                    var19 = var21[var19];
                    var19 = var20.bind(var8)(var19);
                    var19 = var19.ImageEncoder;
                    var19 = var19.PASSTHROUGH;
                    var11['encoderUsed'] = var19;
case 312: // try_end0
                    return var11;
case 375:
                    return var9;
case 377: // catch_target0
                    CatchBlockStart(arg_register=20);
                    var19 = _closure1_slot20;
                    var11 = var19.error;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var20 = var9.concat;
                    var9 = 'getLosslessImageData failed, falling through to JPEG conversion: ';
                    var9 = var20.bind(var9)(var21);
                    var9 = var11.bind(var19)(var9);
case 152:
                    var11 = _closure1_slot34;
                    var26 = var4;
                    var27 = undefined;
                    var25 = var10;
                    var24 = var18;
                    var23 = var17;
                    var22 = var16;
                    var9 = var27[var11](var26, var25, var24, var23, var22, var21);
                    if(var9) { _fun0024_ip = 378; continue _fun0024 }
case 156:
                    var17 = var4;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var15];
                    var11 = var11.bind(var8)(var9);
                    var9 = var11.isIOS;
                    var9 = var9.bind(var11)();
                    var11 = !var9;
                    var9 = !var11;
                    if(var11) { _fun0024_ip = 379; continue _fun0024 }
case 242:
                    var11 = _closure1_slot32;
                    var11 = var11.bind(var8)(var17, var10);
                    var16 = null;
                    if(var11) { _fun0024_ip = 248; continue _fun0024 }
case 326:
                    var15 = var17.match;
                    var11 = /^assets-library:\/\/.+&ext=gif$/i;
                    var11 = var15.bind(var17)(var11);
                    var11 = var16 != var11;
                    _fun0024_ip = 284; continue _fun0024;
case 248:
                    var17 = var16 == var10;
                    var15 = undefined;
                    if(var17) { _fun0024_ip = 380; continue _fun0024 }
case 381:
                    var18 = var10.match;
                    var17 = /\.gif$/i;
                    var15 = var18.bind(var10)(var17);
case 380:
                    var11 = var16 != var15;
case 284:
                    var9 = var11;
case 379:
                    if(var9) { _fun0024_ip = 382; continue _fun0024 }
case 252:
                    var9 = null;
                    return var9;
case 382:
                    var15 = _closure1_slot27;
                    var11 = var4;
                    var9 = 'convertToGIFFilePath';
                    var9 = var15.bind(var8)(var9, var11);
                    SaveGenerator(address=568);
case 383:
                    return var9;
case 384:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0024_ip = 385; continue _fun0024 }
case 304:
                    var11 = null;
                    if(!var9) { _fun0024_ip = 386; continue _fun0024 }
case 255:
                    var15 = {};
                    var15['path'] = var9;
                    var11 = var15;
case 386:
                    return var11;
case 385:
                    return var9;
case 378:
                    var9 = _closure1_slot33;
                    var11 = var4;
                    var15 = var9.bind(var8)(var11, var10);
                    var10 = _closure1_slot27;
                    var9 = {};
                    var9['compressionQuality'] = var3;
                    var9['forceConvertToJPG'] = var15;
                    var9['useEnhancedConversion'] = var14;
                    var9['useJpegliEncoder'] = var13;
                    var9['targetWidth'] = var12;
                    var9['targetHeight'] = var7;
                    var7 = 'convertToJPEG';
                    var7 = var10.bind(var8)(var7, var11, var9);
                    SaveGenerator(address=663);
case 387:
                    return var7;
case 388:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 389; continue _fun0024 }
case 390:
                    var9 = null;
                    var11 = var9 == var7;
                    var10 = undefined;
                    if(var11) { _fun0024_ip = 391; continue _fun0024 }
case 205:
                    var10 = var7.path;
case 391:
                    var14 = var7;
                    if(!(var9 != var10)) { _fun0024_ip = 392; continue _fun0024 }
case 393:
                    var14 = var10;
case 392:
                    var10 = var9 == var7;
                    var13 = undefined;
                    if(var10) { _fun0024_ip = 394; continue _fun0024 }
case 395:
                    var13 = var7.encoderUsed;
case 394:
                    var10 = var9 == var7;
                    var12 = undefined;
                    if(var10) { _fun0024_ip = 48; continue _fun0024 }
case 46:
                    var12 = var7.outputWidth;
case 48:
                    var10 = var9 == var7;
                    var11 = undefined;
                    if(var10) { _fun0024_ip = 396; continue _fun0024 }
case 397:
                    var11 = var7.outputHeight;
case 396:
                    var9 = null;
                    if(!var14) { _fun0024_ip = 398; continue _fun0024 }
case 399:
                    var10 = {};
                    var10['path'] = var14;
                    var10['encoderUsed'] = var13;
                    var10['outputWidth'] = var12;
                    var10['outputHeight'] = var11;
                    var9 = var10;
case 398:
                    return var9;
case 389:
                    return var7;
case 371:
                    return var5;
case 366:
                    var9 = _closure1_slot27;
                    var11 = var4;
                    var10 = var11.replace;
                    var7 = _closure1_slot22;
                    var5 = '';
                    var7 = var10.bind(var11)(var7, var5);
                    var5 = 'convertBase64ToGIF';
                    var5 = var9.bind(var8)(var5, var7);
                    SaveGenerator(address=822);
case 56:
                    return var5;
case 335:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0024_ip = 400; continue _fun0024 }
case 55:
                    var7 = null;
                    if(!var5) { _fun0024_ip = 401; continue _fun0024 }
case 36:
                    var9 = {};
                    var9['path'] = var5;
                    var7 = var9;
case 401:
                    return var7;
case 400:
                    return var5;
case 364:
                    var7 = _closure1_slot27;
                    var10 = var4;
                    var9 = var10.replace;
                    var5 = _closure1_slot21;
                    var4 = '';
                    var5 = var9.bind(var10)(var5, var4);
                    var4 = {};
                    var4['compressionQuality'] = var3;
                    var3 = 'convertBase64ToJPEG';
                    var3 = var7.bind(var8)(var3, var5, var4);
                    SaveGenerator(address=899);
case 402:
                    return var3;
case 403:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0024_ip = 404; continue _fun0024 }
case 405:
                    var4 = null;
                    if(!var3) { _fun0024_ip = 406; continue _fun0024 }
case 407:
                    var5 = {};
                    var5['path'] = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 30;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.ImageEncoder;
                    var6 = var6.NATIVE;
                    var5['encoderUsed'] = var6;
                    var4 = var5;
case 406:
                    return var4;
case 404:
                    return var3;
case 361:
                    return var2;
case 360:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _fetchVideoMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 11; continue _fun0025 }
case 158:
                    var7 = var9;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot37;
                    var3 = arg2;
                    var3 = var6.bind(var2)(var9, var3);
                    if(!var3) { _fun0025_ip = 221; continue _fun0025 }
case 170: // try_start_0
                    var9 = _closure1_slot27;
                    var6 = var7;
                    var3 = 'getVideoMetadata';
                    var3 = var9.bind(var2)(var3, var6);
                    SaveGenerator(address=64);
case 95:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0025_ip = 125; continue _fun0025 }
case 98:
                    var5 = var3;
                    var9 = var3.rotationDegrees;
                    var8 = var9;
                    var6 = null;
                    var9 = var6 != var9;
                    var6 = 0;
                    if(!var9) { _fun0025_ip = 123; continue _fun0025 }
case 74:
                    var6 = var8;
case 123:
                    var3['rotationDegrees'] = var6;
case 408: // try_end0
                    return var5;
case 125:
                    return var3;
case 129: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var6 = _closure1_slot20;
                    var5 = var6.warn;
                    var4 = {};
                    var4['uri'] = var7;
                    var4['error'] = var3;
                    var3 = 'Failed to fetch video metadata';
                    var3 = var5.bind(var6)(var3, var4);
case 221:
                    return var2;
case 11:
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
    var7 = function getCaptionLabel(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg3;
            var1 = arg2;
            if(var1) { _fun0026_ip = 409; continue _fun0026 }
case 257:
            var4 = 'image/gif';
            var2 = arg1;
            var1 = null;
            if(!(var4 === var2)) { _fun0026_ip = 116; continue _fun0026 }
case 89:
            var1 = 'GIF';
            _fun0026_ip = 116; continue _fun0026;
case 409:
            var4 = var3.playableDuration;
            var2 = null;
            var4 = var2 != var4;
            var2 = 'VIDEO';
            if(!var4) { _fun0026_ip = 22; continue _fun0026 }
case 410:
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
    var6 = function getImageDimensionsIfMissing(arg1, arg2, arg3, arg4) {
        var1 = undefined;
        var4 = _closure1_slot46;
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
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0027_ip = 411; continue _fun0027 }
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
                    if(!(var4 != var6)) { _fun0027_ip = 412; continue _fun0027 }
case 114:
                    if(!(var4 == var5)) { _fun0027_ip = 413; continue _fun0027 }
case 412:
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
                    if(var5) { _fun0027_ip = 119; continue _fun0027 }
case 160:
                    var5 = var10;
                    var5 = var5.isVideo;
                    if(var5) { _fun0027_ip = 119; continue _fun0027 }
case 414:
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
case 415:
                    return var5;
case 365:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0027_ip = 416; continue _fun0027 }
case 417:
                    var7 = var5;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 13;
                    var11 = var14[var11];
                    var12 = var12.bind(var13)(var11);
                    var11 = var12.isIOS;
                    var11 = var11.bind(var12)();
                    var9 = var11;
                    if(!var11) { _fun0027_ip = 306; continue _fun0027 }
case 418:
                    var9 = var10.isVideo;
case 306:
                    var8 = var9;
                    if(!var9) { _fun0027_ip = 77; continue _fun0027 }
case 367:
                    var9 = var7;
                    var10 = var9.width;
                    var9 = 0;
                    var8 = var9 === var10;
case 77:
                    var6 = var8;
                    if(!var8) { _fun0027_ip = 229; continue _fun0027 }
case 24:
                    var8 = var7;
                    var9 = var8.height;
                    var8 = 0;
                    var6 = var8 === var9;
case 229:
                    if(!var6) { _fun0027_ip = 419; continue _fun0027 }
case 140:
                    var6 = _closure1_slot6;
                    var9 = var6.DCDFileManager;
                    var8 = var9.getVideoDimensions;
                    var6 = var3;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=280);
case 420:
                    return var6;
case 421:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0027_ip = 376; continue _fun0027 }
case 231:
                    var7 = var6;
case 419: // try_end0
                    return var7;
case 376:
                    return var6;
case 416:
                    return var5;
case 422: // catch_target0
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
case 413:
                    return var2;
case 411:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot46 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot46 = var1;
    var5 = function isHEVCEncodingSupported() {
        var1 = undefined;
        var4 = _closure1_slot47;
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
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0028_ip = 5; continue _fun0028 }
case 423: // try_start_0
                    var2 = _closure1_slot6;
                    var3 = var2.MediaManager;
                    var2 = var3.isHEVCEncodingSupported;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=34);
case 424:
                    return var2;
case 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0028_ip = 425; continue _fun0028 }
case 426: // try_end0
                    return var2;
case 425:
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
        _closure1_slot47 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
    var4 = function checkVideoEncodingSupport(arg1) {
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
    var1 = function _checkVideoEncodingSupport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0029_ip = 220; continue _fun0029 }
case 69:
                    var5 = arg1;
case 158: // try_start_0
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
                    if(var3) { _fun0029_ip = 93; continue _fun0029 }
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
case 220:
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
    var2 = function calculateImageQualityMetrics(arg1, arg2, arg3, arg4, arg5) {
        var1 = undefined;
        var4 = _closure1_slot51;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot50 = var2;
    var1 = function _calculateImageQualityMetrics() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0030_ip = 427; continue _fun0030 }
case 69:
                    var5 = arg1;
                    var8 = arg2;
                    var10 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var2 = {};
                    var4 = arg5;
                    if(!var4) { _fun0030_ip = 428; continue _fun0030 }
case 409: // try_start_0
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
case 429:
                    return var4;
case 430:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0030_ip = 256; continue _fun0030 }
case 22:
                    var9 = var2;
                    var7 = var4.source;
                    var9['origin'] = var7;
case 125: // try_end0
                    _fun0030_ip = 428; continue _fun0030;
case 256:
                    return var4;
case 431: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var9 = _closure1_slot20;
                    var7 = var9.warn;
                    var4 = 'Failed to detect media origin';
                    var4 = var7.bind(var9)(var4, var11);
case 428:
                    var4 = arg4;
                    if(!var4) { _fun0030_ip = 432; continue _fun0030 }
case 132: // try_start_1
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
                    if(var7) { _fun0030_ip = 375; continue _fun0030 }
case 433:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '/';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0030_ip = 434; continue _fun0030 }
case 435:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '\\';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0030_ip = 434; continue _fun0030 }
case 372:
                    var9 = var5;
                    var7 = var9.startsWith;
                    var11 = 'ph://';
                    var7 = var7.bind(var9)(var11);
                    var10 = var8;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var9 = var9.concat;
                    if(var7) { _fun0030_ip = 230; continue _fun0030 }
case 436:
                    var7 = 'file://';
                    var7 = var9.bind(var7)(var10);
                    _fun0030_ip = 437; continue _fun0030;
case 230:
                    var7 = var9.bind(var11)(var10);
case 437:
                    _fun0030_ip = 312; continue _fun0030;
case 434:
                    var10 = var8;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'file://';
                    var7 = var9.bind(var8)(var10);
case 312:
                    var3 = var7;
case 375:
                    var7 = var6;
                    var6 = var7.calculateImageQualityMetrics;
                    var3 = var6.bind(var7)(var5, var3);
                    SaveGenerator(address=356);
case 438:
                    return var3;
case 439:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0030_ip = 440; continue _fun0030 }
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
case 278: // try_end1
                    _fun0030_ip = 432; continue _fun0030;
case 440:
                    return var3;
case 246: // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot20;
                    var4 = var5.warn;
                    var3 = 'Error in quality metrics calculation';
                    var3 = var4.bind(var5)(var3, var6);
case 432:
                    return var2;
case 427:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot51 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot51 = var1;
    var1 = ['filename'];
    var _closure1_slot3 = var1;
    var28 = global;
    var24 = var28.Object;
    var23 = var24.defineProperty;
    var22 = {};
    var1 = true;
    var22['value'] = var1;
    var1 = '__esModule';
    var1 = var23.bind(var24)(var3, var1, var22);
    var1 = 0;
    var22 = var27[var1];
    var1 = undefined;
    var22 = var29.bind(var1)(var22);
    var _closure1_slot4 = var22;
    var22 = 1;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot5 = var22;
    var22 = 2;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var23 = var22.NativeModules;
    var _closure1_slot6 = var23;
    var22 = var22.Image;
    var _closure1_slot7 = var22;
    var22 = 3;
    var23 = var27[var22];
    var23 = var26.bind(var1)(var23);
    var24 = var23.VideoCompressionQuality;
    var _closure1_slot8 = var24;
    var23 = var23.VideoQualitySettings;
    var _closure1_slot9 = var23;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot10 = var22;
    var22 = 4;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot11 = var22;
    var22 = 5;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot12 = var22;
    var22 = 6;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var23 = var22.Base64PNGPrefix;
    var _closure1_slot13 = var23;
    var24 = var22.Base64GIFPrefix;
    var _closure1_slot14 = var24;
    var23 = var22.Base64JPEGPrefix;
    var30 = var22.NetworkConnectionTypes;
    var _closure1_slot15 = var30;
    var30 = var22.CompressionQuality;
    var _closure1_slot16 = var30;
    var30 = var22.Base64WEBPPrefix;
    var _closure1_slot17 = var30;
    var22 = var22.Base64AVIFPrefix;
    var _closure1_slot18 = var22;
    var22 = 7;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var22 = var22.NativePermissionTypes;
    var _closure1_slot19 = var22;
    var22 = 8;
    var22 = var27[var22];
    var30 = var29.bind(var1)(var22);
    var22 = var30.prototype;
    var29 = Object.create(var22, {constructor: {value: var30}});
    var34 = 'UploadUtils.tsx';
    var35 = var29;
    var22 = new var35[var30](var34, var33);
    var22 = var22 instanceof Object ? var22 : var29;
    var _closure1_slot20 = var22;
    var31 = var28.RegExp;
    var22 = '^';
    var34 = var22 + var23;
    var29 = var31.prototype;
    var30 = Object.create(var29, {constructor: {value: var31}});
    var29 = 'i';
    var35 = var30;
    var33 = var29;
    var23 = new var35[var31](var34, var33, var32);
    var23 = var23 instanceof Object ? var23 : var30;
    var _closure1_slot21 = var23;
    var28 = var28.RegExp;
    var34 = var22 + var24;
    var24 = var28.prototype;
    var24 = Object.create(var24, {constructor: {value: var28}});
    var35 = var24;
    var22 = new var35[var28](var34, var33, var32);
    var22 = var22 instanceof Object ? var22 : var24;
    var _closure1_slot22 = var22;
    var24 = 'Canceled';
    var _closure1_slot23 = var24;
    var24 = {};
    var24['getFileInfo'] = var14;
    var24['isVideo'] = var10;
    var24['getType'] = var8;
    var24['openImagePickerUnhandled'] = var25;
    var24['openImagePicker'] = var21;
    var24['getCaptionLabel'] = var7;
    var24['getImageDimensionsIfMissing'] = var6;
    var24['isHEVCEncodingSupported'] = var5;
    var24['getAppDir'] = var15;
    var25 = 32;
    var25 = var27[var25];
    var27 = var26.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'utils/native/UploadUtils.tsx';
    var25 = var26.bind(var27)(var25);
    var3['default'] = var24;
    var3['base64JPEGRegex'] = var23;
    var3['base64GIFRegex'] = var22;
    var3['openImagePicker'] = var21;
    var3['mediaManager'] = var20;
    var20 = function getImageCompressionQuality() {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = _closure1_slot10;
            var1 = var1.dataSavingMode;
            if(!var1) { _fun0031_ip = 100; continue _fun0031 }
case 101:
            var3 = _closure1_slot11;
            var1 = var3.getType;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot15;
            var1 = var1.CELLULAR;
            if(!(var3 !== var1)) { _fun0031_ip = 441; continue _fun0031 }
case 100:
            var1 = _closure1_slot16;
            var1 = var1.HIGH;
            _fun0031_ip = 442; continue _fun0031;
case 441:
            var2 = _closure1_slot16;
            var1 = var2.LOW;
case 442:
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                if(!var2) { _fun0032_ip = 443; continue _fun0032 }
case 170:
                var4 = _closure2_slot0;
                var6 = var4.platform;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 17;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.UploadPlatform;
                var4 = var4.REACT_NATIVE;
                if(!(var6 !== var4)) { _fun0032_ip = 123; continue _fun0032 }
case 443:
                var4 = var5.bind(var1)();
                _fun0032_ip = 303; continue _fun0032;
case 123:
                var4 = _closure1_slot27;
                var2 = _closure2_slot0;
                var3 = var2.uri;
                var2 = 'cancelResolveToMediaFilePath';
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.then;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
case 303:
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['cancelGetFileInfo'] = var17;
    var16 = function getFileSize(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
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
            if(!var1) { _fun0033_ip = 97; continue _fun0033 }
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
            if(var1) { _fun0033_ip = 363; continue _fun0033 }
case 103:
            var1 = _closure1_slot6;
            var3 = var1.DCDFileManager;
            var1 = var3.getSize;
            var1 = var1.bind(var3)(var4);
            _fun0033_ip = 444; continue _fun0033;
case 363:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 18;
            var3 = var3[var6];
            var7 = var7.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var7)) { _fun0033_ip = 186; continue _fun0033 }
case 320:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getSize;
            var2 = var2.bind(var3)(var4);
            _fun0033_ip = 306; continue _fun0033;
case 186:
            var3 = global;
            var5 = var3.Promise;
            var4 = var5.reject;
            var3 = "RTNFileManager doesn't exist?";
            var2 = var4.bind(var5)(var3);
case 306:
            var1 = var2;
case 444:
            return var1;
        }
    };
    var3['getFileSize'] = var16;
    var3['getAppDir'] = var15;
    var3['getFileInfo'] = var14;
    var3['shouldForceConvertToJPG'] = var13;
    var3['shouldConvertToJPG'] = var12;
    var3['shouldResolveToMediaFilePath'] = var11;
    var3['isVideo'] = var10;
    var3['isImage'] = var9;
    var3['getType'] = var8;
    var3['getCaptionLabel'] = var7;
    var3['getImageDimensionsIfMissing'] = var6;
    var3['isHEVCEncodingSupported'] = var5;
    var3['checkVideoEncodingSupport'] = var4;
    var3['calculateImageQualityMetrics'] = var2;
    return var1;
})();