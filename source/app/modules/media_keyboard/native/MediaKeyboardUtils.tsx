// app/modules/media_keyboard/native/MediaKeyboardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var14;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var11 = function addImagesFromPicker(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var3 = var3.UploadOrigin;
            var4 = var3.FILE_ATTACHMENT;
            var3 = arg3;
            if(!(var3 === var4)) { _fun0004_ip = 36; continue _fun0004 }
case 28:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 11;
            var3 = var8[var3];
            var8 = var4.bind(var1)(var3);
            var4 = var8.addFiles;
            var3 = {};
            var3['files'] = var7;
            var3['channelId'] = var6;
            var9 = _closure1_slot7;
            var9 = var9.ChannelMessage;
            var3['draftType'] = var9;
            var3 = var4.bind(var8)(var3);
            _fun0004_ip = 37; continue _fun0004;
case 36:
            var4 = var7.filter;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var6 = var4.uri;
                    var1 = var3 != var6;
case 38:
                    if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var6 = var4.uri;
                    var4 = '';
                    var1 = var4 !== var6;
case 40:
                    if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var7 = _closure1_slot9;
                    var6 = var7.findUpload;
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot7;
                    var4 = var4.ChannelMessage;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.doesImageMatchUpload;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var1 = var3 == var2;
case 42:
                    return var1;
                }
            };
            var4 = var4.bind(var7)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = {};
                var5 = arg1;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.UploadOrigin;
                var3 = var2.IMAGE_PICKER;
                var2 = 'origin';
                var1[var2] = var3;
                return var1;
            };
            var7 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.addFiles;
            var2 = {};
            var2['files'] = var7;
            var2['channelId'] = var6;
            var5 = _closure1_slot7;
            var5 = var5.ChannelMessage;
            var2['draftType'] = var5;
            var2 = var3.bind(var4)(var2);
case 37:
            return var1;
        }
    };
    var _closure1_slot24 = var11;
    var10 = function handleCameraDialog(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var3 = var1.previewType;
        var _closure2_slot1 = var3;
        var3 = var1.onDismissKeyboard;
        var _closure2_slot2 = var3;
        var3 = var1.onRestoreKeyboard;
        var _closure2_slot3 = var3;
        var1 = var1.onSelectFiles;
        var _closure2_slot4 = var1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 14;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.requestPermission;
        var3 = _closure1_slot20;
        var3 = var3.CAMERA;
        var4 = var4.bind(var5)(var3);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                if(!var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 15;
                var2 = var8[var2];
                var7 = undefined;
                var9 = var3.bind(var7)(var2);
                var6 = var9.track;
                var2 = _closure1_slot12;
                var5 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var4 = {};
                var2 = _closure1_slot17;
                var2 = var2.CAMERA;
                var4['type'] = var2;
                var10 = _closure2_slot0;
                var11 = var10.id;
                var4['channel_id'] = var11;
                var10 = var10.guild_id;
                var4['guild_id'] = var10;
                var4 = var6.bind(var9)(var5, var4);
                var2 = _closure2_slot2;
                var2 = var2.bind(var7)();
                var2 = 16;
                var2 = var8[var2];
                var4 = var3.bind(var7)(var2);
                var3 = var4.launchCamera;
                var2 = {'mediaType': 'mixed', 'includeBase64': false, 'quality': null, 'videoQuality': 'high', 'saveToPhotos': null, 'skipProcessing': true};
                var6 = _closure1_slot0;
                var5 = 17;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.getImageCompressionQuality;
                var5 = var5.bind(var6)();
                var2['quality'] = var5;
                var1 = _closure1_slot5;
                var1 = var1.saveCameraUploadsToDevice;
                var2['saveToPhotos'] = var1;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.didCancel;
                        if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                        var2 = var1.errorCode;
                        var5 = null;
                        var3 = var5 == var2;
                        var2 = undefined;
                        if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                        var3 = var1.assets;
                        var3 = var5 != var3;
                        if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 50:
                        var3 = var1.assets;
                        var4 = var3.length;
                        var3 = 0;
                        var4 = var4 > var3;
                        if(!var4) { _fun0007_ip = 48; continue _fun0007 }
case 51:
                        var1 = var1.assets;
                        var3 = var1[var3];
                        if(!(var5 != var3)) { _fun0007_ip = 48; continue _fun0007 }
case 52:
                        var1 = var3.uri;
                        if(!(var5 != var1)) { _fun0007_ip = 48; continue _fun0007 }
case 53:
                        var1 = var3.height;
                        if(!(var5 != var1)) { _fun0007_ip = 48; continue _fun0007 }
case 36:
                        var1 = var3.width;
                        if(!(var5 != var1)) { _fun0007_ip = 48; continue _fun0007 }
case 54:
                        var1 = var3.type;
                        if(!(var5 == var1)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var7 = var3.fileName;
                        var4 = var5 == var7;
                        var10 = undefined;
                        if(var4) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                        var6 = var7.split;
                        var4 = '.';
                        var6 = var6.bind(var7)(var4);
                        var4 = var6.pop;
                        var10 = var4.bind(var6)();
case 57:
                        var6 = var5 != var10;
                        var7 = 'image/jpeg';
                        var4 = var7;
                        if(!var6) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                        var6 = var3.fileType;
                        var6 = var5 != var6;
                        var4 = var7;
                        if(!var6) { _fun0007_ip = 59; continue _fun0007 }
case 61:
                        var9 = var3.fileType;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var8 = var6.concat;
                        var7 = '';
                        var6 = '/';
                        var7 = var8.bind(var7)(var9, var6, var10);
                        var6 = var7.toLowerCase;
                        var4 = var6.bind(var7)();
case 59:
                        var1 = var4;
case 55:
                        var6 = {};
                        var4 = var3.id;
                        var6['id'] = var4;
                        var4 = var3.uri;
                        var6['uri'] = var4;
                        var4 = var3.uri;
                        var6['originalUri'] = var4;
                        var4 = var3.width;
                        var6['width'] = var4;
                        var4 = var3.height;
                        var6['height'] = var4;
                        var4 = var3.fileName;
                        if(!(var5 != var4)) { _fun0007_ip = 27; continue _fun0007 }
case 62:
                        var7 = var3.fileName;
                        var4 = '';
                        if(!(var4 === var7)) { _fun0007_ip = 63; continue _fun0007 }
case 27:
                        var7 = var1.split;
                        var4 = '/';
                        var7 = var7.bind(var1)(var4);
                        var4 = 1;
                        var4 = var7[var4];
                        var5 = var5 != var4;
                        var7 = 'jpeg';
                        if(!var5) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                        var7 = var4;
case 64:
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'camera_upload.';
                        var4 = var5.bind(var4)(var7);
                        _fun0007_ip = 66; continue _fun0007;
case 63:
                        var4 = var3.fileName;
case 66:
                        var6['filename'] = var4;
                        var3 = var3.duration;
                        var6['playableDuration'] = var3;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.UploadPlatform;
                        var3 = var3.REACT_NATIVE;
                        var6['platform'] = var3;
                        var3 = true;
                        var6['createdUsingInAppCamera'] = var3;
                        var6['mimeType'] = var1;
                        var4 = _closure2_slot4;
                        var3 = new Array(1);
                        var3[0] = var6;
                        var3 = var4.bind(var2)(var3);
                        var4 = _closure1_slot1;
                        var3 = 15;
                        var3 = var5[var3];
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot12;
                        var4 = var3.IN_APP_CAMERA_USED;
                        var3 = {};
                        var7 = _closure1_slot11;
                        var7 = var7.FULLY_EXPANDED;
                        var3['camera_view'] = var7;
                        var7 = _closure2_slot1;
                        var3['camera_preview_type'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var2)();
                        _fun0007_ip = 48; continue _fun0007;
case 46:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot25 = var10;
    var9 = function handleViewAllDialog(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var3 = var1.draftType;
            var _closure2_slot1 = var3;
            var3 = var1.uploadLimit;
            var _closure2_slot2 = var3;
            var3 = var1.includedUploadIds;
            var _closure2_slot3 = var3;
            var3 = var1.onDismissKeyboard;
            var _closure2_slot4 = var3;
            var3 = var1.onRestoreKeyboard;
            var _closure2_slot5 = var3;
            var1 = var1.onSelectFiles;
            var _closure2_slot6 = var1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isIOS;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var3 = global;
            var7 = var3.parseInt;
            var5 = _closure1_slot4;
            var6 = var5.Version;
            var5 = 10;
            var6 = var7.bind(var1)(var6, var5);
            var5 = 14;
            if(!(!(var6 >= var5))) { _fun0008_ip = 69; continue _fun0008 }
case 67:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 14;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.requestPermission;
            var4 = _closure1_slot20;
            var4 = var4.PHOTOS;
            var4 = var5.bind(var6)(var4);
            _fun0008_ip = 70; continue _fun0008;
case 69:
            var6 = var3.Promise;
            var5 = var6.resolve;
            var3 = true;
            var4 = var5.bind(var6)(var3);
case 70:
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    if(!var2) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.track;
                    var3 = _closure1_slot12;
                    var7 = var3.CHAT_INPUT_COMPONENT_VIEWED;
                    var4 = {};
                    var3 = _closure1_slot17;
                    var3 = var3.NATIVE_MEDIA_PICKER;
                    var4['type'] = var3;
                    var3 = _closure2_slot0;
                    var10 = var3.id;
                    var4['channel_id'] = var10;
                    var10 = var3.guild_id;
                    var4['guild_id'] = var10;
                    var4 = var8.bind(var9)(var7, var4);
                    var4 = _closure2_slot4;
                    var4 = var4.bind(var5)();
                    var8 = _closure1_slot9;
                    var7 = var8.getUploads;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var8 = var7.bind(var8)(var4, var3);
                    var _closure3_slot0 = var8;
                    var4 = _closure2_slot3;
                    var3 = null;
                    var7 = var8;
                    if(!(var3 != var4)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var4 = var8.filter;
                    var3 = function(arg1) {
                        var3 = _closure2_slot3;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var8)(var3);
                    _closure3_slot0 = var3;
                    var7 = var3;
case 73:
                    var4 = {'mediaType': 'any', 'includeBase64': false};
                    var8 = _closure2_slot2;
                    var3 = 1;
                    var8 = var8 > var3;
                    if(!var8) { _fun0009_ip = 12; continue _fun0009 }
case 75:
                    var8 = _closure2_slot2;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 18;
                    var6 = var10[var6];
                    var9 = var9.bind(var5)(var6);
                    var6 = var9.isIOS;
                    var6 = var6.bind(var9)();
                    if(var6) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var6 = var7.length;
                    _fun0009_ip = 78; continue _fun0009;
case 76:
                    var10 = var7.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.origin;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.UploadOrigin;
                        var1 = var1.IMAGE_PICKER;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var9 = var10.bind(var7)(var9);
                    var6 = var9.length;
case 78:
                    var3 = var8 - var6;
case 12:
                    var4['selectionLimit'] = var3;
                    var6 = var7.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var6.bind(var7)(var3);
                    var4['selections'] = var3;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 18;
                    var3 = var6[var3];
                    var7 = var7.bind(var5)(var3);
                    var3 = var7.isIOS;
                    var3 = var3.bind(var7)();
                    var3 = !var3;
                    var4['includeExtra'] = var3;
                    var3 = true;
                    var4['skipProcessing'] = var3;
                    var3 = _closure1_slot1;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.launchImageLibrary;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = arg1;
                            var _closure4_slot0 = var4;
                            var5 = _closure2_slot5;
                            var1 = undefined;
                            var5 = var5.bind(var1)();
                            var5 = var4.didCancel;
                            if(var5) { _fun0010_ip = 79; continue _fun0010 }
case 38:
                            var5 = var4.errorCode;
                            var10 = null;
                            if(!(var10 == var5)) { _fun0010_ip = 79; continue _fun0010 }
case 5:
                            var5 = _closure3_slot0;
                            var7 = var5.length;
                            var5 = 0;
                            if(!(var5 === var7)) { _fun0010_ip = 42; continue _fun0010 }
case 30:
                            var7 = var4.assets;
                            if(!(var10 != var7)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                            var7 = var4.assets;
                            var7 = var7.length;
                            if(!(var5 !== var7)) { _fun0010_ip = 79; continue _fun0010 }
case 42:
                            var7 = var4.replaceSelection;
                            if(!var7) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                            var7 = _closure3_slot0;
                            var6 = var7.forEach;
                            var3 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var3 = arg1;
                                    var _closure5_slot0 = var3;
                                    var5 = var3.origin;
                                    var7 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 10;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var4 = var7.bind(var1)(var4);
                                    var4 = var4.UploadOrigin;
                                    var4 = var4.IMAGE_PICKER;
                                    var4 = var5 !== var4;
                                    if(var4) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                                    var5 = _closure4_slot0;
                                    var8 = var5.assets;
                                    var5 = null;
                                    var5 = var5 != var8;
                                    if(!var5) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                                    var7 = var8.some;
                                    var6 = function(arg1) {
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 12;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.doesImageMatchUpload;
                                        var2 = _closure5_slot0;
                                        var1 = arg1;
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var1;
                                    };
                                    var5 = var7.bind(var8)(var6);
case 85:
                                    var4 = var5;
case 83:
                                    if(var4) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 11;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var1)(var4);
                                    var5 = var6.remove;
                                    var4 = _closure2_slot0;
                                    var4 = var4.id;
                                    var3 = var3.id;
                                    var2 = _closure1_slot7;
                                    var2 = var2.ChannelMessage;
                                    var2 = var5.bind(var6)(var4, var3, var2);
case 87:
                                    return var1;
                                }
                            };
                            var3 = var6.bind(var7)(var3);
case 81:
                            var3 = new Array(0);
                            var6 = _closure1_slot22;
                            var4 = var4.assets;
                            var8 = var6.bind(var1)(var4);
                            var6 = var8.bind(var1)();
                            var4 = var6.done;
                            var7 = 10;
                            if(var4) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                            var12 = var6.value;
                            var4 = var12.uri;
                            if(!(var10 != var4)) { _fun0010_ip = 91; continue _fun0010 }
case 19:
                            var11 = var3.push;
                            var4 = {};
                            var13 = var12.id;
                            var4['id'] = var13;
                            var13 = var12.uri;
                            var4['uri'] = var13;
                            var13 = var12.uri;
                            var4['originalUri'] = var13;
                            var13 = var12.mimeType;
                            var4['mimeType'] = var13;
                            var13 = var12.width;
                            var4['width'] = var13;
                            var13 = var12.height;
                            var4['height'] = var13;
                            var13 = var12.fileName;
                            var4['filename'] = var13;
                            var12 = var12.duration;
                            var4['playableDuration'] = var12;
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var12 = var12[var7];
                            var12 = var13.bind(var1)(var12);
                            var12 = var12.UploadPlatform;
                            var12 = var12.REACT_NATIVE;
                            var4['platform'] = var12;
                            var4 = var11.bind(var3)(var4);
case 91:
                            var11 = var8.bind(var1)();
                            var4 = var11.done;
                            var6 = var11;
                            if(!var4) { _fun0010_ip = 90; continue _fun0010 }
case 89:
                            var4 = var3.length;
                            if(!(var4 > var5)) { _fun0010_ip = 79; continue _fun0010 }
case 92:
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var1)(var3);
case 79:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var4, var1);
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot26 = var9;
    var8 = function handleAttachFile() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var8;
    var1 = function _handleAttachFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 93; continue _fun0012 }
case 47:
                    var14 = var2.channel;
                    var _closure4_slot0 = var14;
                    var11 = var2.uploadLimit;
                    var3 = var2.onDismissKeyboard;
                    var7 = var2.onRestoreKeyboard;
                    var6 = var2.onSelectFiles;
                    var4 = undefined;
                    SaveGenerator(address=54);
case 94:
                    return var4;
case 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                    var3 = var3.bind(var4)();
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var8 = 15;
                    var8 = var9[var8];
                    var13 = var10.bind(var4)(var8);
                    var12 = var13.track;
                    var8 = _closure1_slot12;
                    var10 = var8.CHAT_INPUT_COMPONENT_VIEWED;
                    var8 = {};
                    var15 = _closure1_slot17;
                    var15 = var15.ATTACH_FILE;
                    var8['type'] = var15;
                    var15 = var14.id;
                    var8['channel_id'] = var15;
                    var14 = var14.guild_id;
                    var8['guild_id'] = var14;
                    var8 = var12.bind(var13)(var10, var8);
                    var8 = _closure1_slot0;
                    var3 = 22;
                    var3 = var9[var3];
                    var10 = var8.bind(var4)(var3);
                    var9 = var10.handleDocumentSelection;
                    var3 = {};
                    var8 = 1;
                    var11 = var11 > var8;
                    var3['pickMultiple'] = var11;
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=190);
case 98:
                    return var3;
case 99:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var7 = var7.bind(var4)();
                    var7 = null;
                    if(!(var7 != var3)) { _fun0012_ip = 102; continue _fun0012 }
case 37:
                    var7 = var3.length;
                    if(!(!(var7 < var8))) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var9 = global;
                    var8 = var9.Promise;
                    var7 = var8.all;
                    var10 = var9.Array;
                    var9 = var10.from;
                    var10 = var9.bind(var10)(var3);
                    var9 = var10.map;
                    var5 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                    StartGenerator();
                                    var9 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                                    var13 = var9.uri;
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var4[var2];
                                    var8 = undefined;
                                    var4 = var3.bind(var8)(var2);
                                    var3 = var4.getImageDimensionsIfMissing;
                                    var5 = var9.name;
                                    var7 = null;
                                    var10 = var7 != var5;
                                    var2 = undefined;
                                    if(!var10) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                                    var2 = var5;
case 106:
                                    var18 = var4;
                                    var17 = var13;
                                    var16 = undefined;
                                    var15 = undefined;
                                    var14 = var2;
                                    var2 = var18[var3](var17, var16, var15, var14, var13);
                                    SaveGenerator(address=89);
case 108:
                                    return var2;
case 109:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0013_ip = 91; continue _fun0013 }
case 42:
                                    var5 = var2.width;
                                    var4 = var2.height;
                                    var3 = {};
                                    var11 = _closure1_slot1;
                                    var12 = _closure1_slot2;
                                    var10 = 23;
                                    var10 = var12[var10];
                                    var11 = var11.bind(var8)(var10);
                                    var10 = var11.uniqueId;
                                    var10 = var10.bind(var11)(var13);
                                    var3['id'] = var10;
                                    var3['uri'] = var13;
                                    var3['originalUri'] = var13;
                                    var10 = var9.name;
                                    if(!(var7 == var10)) { _fun0013_ip = 110; continue _fun0013 }
case 14:
                                    var12 = var13.split;
                                    var11 = '/';
                                    var13 = var12.bind(var13)(var11);
                                    var12 = var13.at;
                                    var11 = -1;
                                    var10 = var12.bind(var13)(var11);
case 110:
                                    var3['filename'] = var10;
                                    var9 = var9.type;
                                    var10 = var7 != var9;
                                    var7 = undefined;
                                    if(!var10) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                                    var7 = var9;
case 111:
                                    var3['mimeType'] = var7;
                                    var7 = _closure4_slot0;
                                    var7 = var7.id;
                                    var3['channelId'] = var7;
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 10;
                                    var10 = var9[var6];
                                    var10 = var7.bind(var8)(var10);
                                    var10 = var10.UploadPlatform;
                                    var10 = var10.REACT_NATIVE;
                                    var3['platform'] = var10;
                                    var6 = var9[var6];
                                    var6 = var7.bind(var8)(var6);
                                    var6 = var6.UploadOrigin;
                                    var6 = var6.FILE_ATTACHMENT;
                                    var3['origin'] = var6;
                                    var3['width'] = var5;
                                    var3['height'] = var4;
                                    return var3;
case 91:
                                    return var2;
case 104:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var5 = var5.bind(var4)();
                    var5 = var9.bind(var10)(var5);
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=275);
case 113:
                    return var5;
case 114:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                    var6 = var6.bind(var4)(var5);
                    _fun0012_ip = 102; continue _fun0012;
case 115:
                    return var5;
case 102:
                    return var4;
case 100:
                    return var3;
case 96:
                    return var2;
case 93:
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
    var7 = function mediaNodeToUploadItem(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var1 = var2.node;
            var8 = var1.image;
            var1 = {};
            var2 = var2.node;
            var3 = var2.id;
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 117; continue _fun0014 }
case 41:
            var3 = var8.uri;
case 117:
            var1['id'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var9 = var7[var3];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var9 = var9.UploadOrigin;
            var9 = var9.IMAGE_PICKER;
            var1['origin'] = var9;
            var9 = var8.uri;
            var1['uri'] = var9;
            var9 = var8.uri;
            var1['originalUri'] = var9;
            var9 = var8.mimeType;
            var1['mimeType'] = var9;
            var9 = var8.width;
            var1['width'] = var9;
            var9 = var8.height;
            var1['height'] = var9;
            var9 = var8.filename;
            var1['filename'] = var9;
            var8 = var8.playableDuration;
            var1['playableDuration'] = var8;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.UploadPlatform;
            var3 = var3.REACT_NATIVE;
            var1['platform'] = var3;
            var2 = var2 != var4;
            if(!var2) { _fun0014_ip = 118; continue _fun0014 }
case 60:
            var3 = {};
            var3['createdUsingInAppCamera'] = var4;
            var2 = var3;
case 118:
            var11 = var1;
            var10 = var2;
            var2 = copyDataProperties(var11, var10);
            return var1;
        }
    };
    var _closure1_slot29 = var7;
    var5 = function handleSelectKeyboardItem(arg1, arg2, arg3, arg4) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arg1;
            var10 = arg2;
            var1 = var10.node;
            var1 = var1.image;
            var _closure2_slot0 = var1;
            var3 = arg3;
            if(var3) { _fun0015_ip = 119; continue _fun0015 }
case 33:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var9 = undefined;
            var6 = var4.bind(var9)(var3);
            var4 = var6.addFile;
            var3 = {};
            var3['channelId'] = var5;
            var8 = _closure1_slot29;
            var7 = arg4;
            var7 = var8.bind(var9)(var10, var7);
            var3['file'] = var7;
            var7 = _closure1_slot7;
            var7 = var7.ChannelMessage;
            var3['draftType'] = var7;
            var3 = var4.bind(var6)(var3);
            _fun0015_ip = 120; continue _fun0015;
case 119:
            var6 = _closure1_slot9;
            var4 = var6.findUpload;
            var3 = _closure1_slot7;
            var3 = var3.ChannelMessage;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.doesImageMatchUpload;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var6)(var5, var3, var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 11;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.remove;
            var2 = var2.id;
            var1 = _closure1_slot7;
            var1 = var1.ChannelMessage;
            var1 = var3.bind(var4)(var5, var2, var1);
case 120:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var5;
    var2 = function getMediaKeyboardDraftType(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.CHAT;
            if(!(var2 !== var3)) { _fun0016_ip = 83; continue _fun0016 }
case 29:
            var2 = _closure1_slot10;
            var2 = var2.COMMAND;
            if(!(var2 !== var3)) { _fun0016_ip = 122; continue _fun0016 }
case 38:
            var2 = _closure1_slot10;
            var2 = var2.APP_LAUNCHER;
            if(!(var2 !== var3)) { _fun0016_ip = 123; continue _fun0016 }
case 124:
            var2 = _closure1_slot10;
            var2 = var2.INTERACTION_MODAL;
            if(!(var2 !== var3)) { _fun0016_ip = 125; continue _fun0016 }
case 126:
            var2 = undefined;
            return var2;
case 125:
            var2 = _closure1_slot7;
            var2 = var2.InteractionModal;
            return var2;
case 123:
            var2 = _closure1_slot7;
            var2 = var2.ApplicationLauncherCommand;
            return var2;
case 122:
            var2 = _closure1_slot7;
            var2 = var2.SlashCommand;
            return var2;
case 83:
            var1 = _closure1_slot7;
            var1 = var1.ChannelMessage;
            return var1;
        }
    };
    var _closure1_slot31 = var2;
    var1 = global;
    var16 = var1.Object;
    var15 = var16.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var4);
    var1 = 0;
    var4 = var14[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.Platform;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var12 = var4.MediaKeyboardTarget;
    var _closure1_slot10 = var12;
    var4 = var4.InAppCameraUsedViews;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var12 = var4.AnalyticEvents;
    var _closure1_slot12 = var12;
    var12 = var4.AnalyticsObjects;
    var _closure1_slot13 = var12;
    var12 = var4.AnalyticsObjectTypes;
    var _closure1_slot14 = var12;
    var12 = var4.AnalyticsPages;
    var _closure1_slot15 = var12;
    var12 = var4.AnalyticsSections;
    var _closure1_slot16 = var12;
    var12 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot17 = var12;
    var12 = var4.ComponentActions;
    var _closure1_slot18 = var12;
    var4 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot19 = var4;
    var4 = 9;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot20 = var4;
    var4 = {};
    var12 = 'function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}';
    var4['code'] = var12;
    var _closure1_slot21 = var4;
    var4 = function() {
        var1 = function animatedIndexThreshold(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var1.length;
                var2 = 1;
                if(!(var2 !== var1)) { _fun0017_ip = 50; continue _fun0017 }
case 127:
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var1.length;
                var1 = var1 - var2;
                var1 = var3 * var1;
                _fun0017_ip = 4; continue _fun0017;
case 50:
                var1 = var3 - var2;
case 4:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 97398083076.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot21;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var12 = 25;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/media_keyboard/native/MediaKeyboardUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['addImagesFromPicker'] = var11;
    var11 = function addAttachmentForCommand(arg1, arg2, arg3, arg4, arg5) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg1;
            var9 = arg3;
            var10 = arg4;
            var7 = var10.option;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getFile;
            var3 = {};
            var8 = var9.uri;
            var3['uri'] = var8;
            var8 = var9.filename;
            var3['overrideFilename'] = var8;
            var8 = var9.mimeType;
            var3['overrideType'] = var8;
            var3 = var4.bind(var5)(var3);
            var8 = var3.filename;
            var4 = var10.target;
            var3 = _closure1_slot10;
            var3 = var3.COMMAND;
            if(!(var4 === var3)) { _fun0018_ip = 128; continue _fun0018 }
case 13:
            var3 = arg2;
            var4 = var3.current;
            var3 = var4.getApplicationCommandManager;
            var11 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var11)) { _fun0018_ip = 128; continue _fun0018 }
case 129:
            var5 = var11.insertOrJumpCommandOption;
            var4 = {};
            var4['displayText'] = var8;
            var3 = true;
            var4['preferred'] = var3;
            var14 = false;
            var17 = var11;
            var16 = var7;
            var15 = undefined;
            var13 = var4;
            var3 = var17[var5](var16, var15, var14, var13, var12);
case 128:
            var4 = _closure1_slot31;
            var3 = var10.target;
            var5 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var11 = var4[var2];
            var12 = var3.bind(var1)(var11);
            var11 = var12.remove;
            var10 = var10.option;
            var10 = var10.name;
            var10 = var11.bind(var12)(var6, var10, var5);
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.addFile;
            var2 = {};
            var2['channelId'] = var6;
            var6 = {};
            var16 = var6;
            var15 = var9;
            var9 = copyDataProperties(var16, var15);
            var10 = arg5;
            var9 = 'origin';
            var6[var9] = var10;
            var9 = var7.name;
            var7 = 'id';
            var6[var7] = var9;
            var7 = 'filename';
            var6[var7] = var8;
            var2['file'] = var6;
            var2['draftType'] = var5;
            var5 = false;
            var2['allowOptimization'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['addAttachmentForCommand'] = var11;
    var3['handleCameraDialog'] = var10;
    var3['handleViewAllDialog'] = var9;
    var9 = function(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var1 = arg2;
            var3 = var1.current;
            var1 = var3.closeCustomKeyboard;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot6;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var4);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.ComponentDispatch;
            var4 = var5.dispatch;
            var3 = _closure1_slot18;
            var3 = var3.MEDIA_KEYBOARD_GIFT_SELECTED;
            var3 = var4.bind(var5)(var3);
            var5 = {};
            var3 = _closure1_slot16;
            var3 = var3.CHANNEL_TEXT_AREA;
            var5['section'] = var3;
            var3 = _closure1_slot13;
            var3 = var3.BUTTON_ICON;
            var5['object'] = var3;
            var3 = _closure1_slot14;
            var3 = var3.GIFT;
            var5['objectType'] = var3;
            var6 = null;
            var4 = var6 == var8;
            var3 = undefined;
            if(var4) { _fun0019_ip = 130; continue _fun0019 }
case 131:
            var3 = var8.guild_id;
case 130:
            if(!(var6 == var3)) { _fun0019_ip = 57; continue _fun0019 }
case 14:
            var3 = _closure1_slot15;
            var3 = var3.DM_CHANNEL;
            _fun0019_ip = 132; continue _fun0019;
case 57:
            var4 = _closure1_slot15;
            var3 = var4.GUILD_CHANNEL;
case 132:
            var5['page'] = var3;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var9 = var4.bind(var1)(var3);
            var7 = var9.track;
            var3 = _closure1_slot12;
            var4 = var3.CHAT_INPUT_COMPONENT_VIEWED;
            var3 = {};
            var10 = _closure1_slot17;
            var10 = var10.NITRO_GIFTING;
            var3['type'] = var10;
            var11 = var6 == var8;
            var10 = undefined;
            if(var11) { _fun0019_ip = 133; continue _fun0019 }
case 134:
            var10 = var8.id;
case 133:
            var3['channel_id'] = var10;
            var11 = var6 == var8;
            var10 = undefined;
            if(var11) { _fun0019_ip = 113; continue _fun0019 }
case 135:
            var10 = var8.guild_id;
case 113:
            var3['guild_id'] = var10;
            var3 = var7.bind(var9)(var4, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openGiftModal;
            var2 = {};
            var7 = var6 != var8;
            var6 = undefined;
            if(!var7) { _fun0019_ip = 6; continue _fun0019 }
case 136:
            var7 = var8.isDM;
            var7 = var7.bind(var8)();
            var6 = undefined;
            if(!var7) { _fun0019_ip = 6; continue _fun0019 }
case 137:
            var7 = var8.getRecipientId;
            var6 = var7.bind(var8)();
case 6:
            var2['recipientUserId'] = var6;
            var2['analyticsLocation'] = var5;
            var5 = arg1;
            var2['analyticsLocations'] = var5;
            var5 = {};
            var6 = 'card';
            var5['presentation'] = var6;
            var2['navigationParams'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['handleSelectGift'] = var9;
    var9 = function handleSelectThread(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var8 = var9.track;
            var4 = _closure1_slot12;
            var7 = var4.CHAT_INPUT_COMPONENT_VIEWED;
            var6 = {};
            var4 = _closure1_slot17;
            var4 = var4.START_THREAD;
            var6['type'] = var4;
            var4 = var5.id;
            var6['channel_id'] = var4;
            var4 = null;
            var11 = var4 == var5;
            var10 = undefined;
            if(var11) { _fun0020_ip = 108; continue _fun0020 }
case 138:
            var10 = var5.guild_id;
case 108:
            var6['guild_id'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            if(!(var4 != var5)) { _fun0020_ip = 139; continue _fun0020 }
case 140:
            var6 = var3.current;
            var4 = var6.openSystemKeyboard;
            var4 = var4.bind(var6)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 18;
            var4 = var7[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isIOS;
            var4 = var4.bind(var6)();
            if(!var4) { _fun0020_ip = 141; continue _fun0020 }
case 142:
            var4 = var3.current;
            var3 = var4.blur;
            var3 = var3.bind(var4)();
case 141:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.navigateToThreadCreation;
            var2 = 'Plus Button';
            var2 = var3.bind(var4)(var5, var2);
case 139:
            return var1;
        }
    };
    var3['handleSelectThread'] = var9;
    var3['handleAttachFile'] = var8;
    var3['mediaNodeToUploadItem'] = var7;
    var3['handleSelectKeyboardItem'] = var5;
    var5 = function showSimpleMediaKeyboard(arg1) {
        var11 = arg1;
        var _closure2_slot0 = var11;
        var3 = _closure1_slot31;
        var1 = {};
        var2 = _closure1_slot10;
        var2 = var2.CHAT;
        var1['target'] = var2;
        var2 = var1.target;
        var1 = undefined;
        var10 = var3.bind(var1)(var2);
        var _closure2_slot1 = var10;
        var2 = function onAttachFileParams(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = {};
            var3 = _closure2_slot0;
            var1['channel'] = var3;
            var3 = _closure1_slot19;
            var1['uploadLimit'] = var3;
            var3 = function onDismissKeyboard() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideMediaKeyboardActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['onDismissKeyboard'] = var3;
            var3 = function onRestoreKeyboard() {
                var3 = _closure1_slot32;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onRestoreKeyboard'] = var3;
            var2 = function onSelectFiles(arg1) {
                var5 = _closure1_slot24;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var4, var2, var3);
                return var1;
            };
            var1['onSelectFiles'] = var2;
            return var1;
        };
        var _closure2_slot2 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 24;
        var2 = var7[var5];
        var4 = var6.bind(var1)(var2);
        var3 = var4.showMediaKeyboardActionSheet;
        var2 = {};
        var2['channel'] = var11;
        var2['draftType'] = var10;
        var9 = _closure1_slot19;
        var2['uploadLimit'] = var9;
        var9 = true;
        var2['disableWhenReachedLimit'] = var9;
        var9 = function onAttachPress() {
            var3 = _closure1_slot27;
            var2 = {};
            var5 = _closure2_slot2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.UploadOrigin;
            var4 = var4.FILE_ATTACHMENT;
            var7 = var5.bind(var1)(var4);
            var8 = var2;
            var4 = copyDataProperties(var8, var7);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2['onAttachPress'] = var9;
        var9 = function onPressCamera(arg1) {
            var3 = _closure1_slot25;
            var2 = {};
            var5 = _closure2_slot2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.UploadOrigin;
            var4 = var4.IMAGE_PICKER;
            var7 = var5.bind(var1)(var4);
            var8 = var2;
            var4 = copyDataProperties(var8, var7);
            var5 = arg1;
            var4 = 'previewType';
            var2[var4] = var5;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2['onPressCamera'] = var9;
        var9 = function onPressItem(arg1) {
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.item;
            var3 = var1.isIncluded;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 24;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.hideMediaKeyboardActionSheet;
            var6 = var6.bind(var7)();
            var2 = _closure1_slot30;
            var2 = var2.bind(var1)(var5, var4, var3);
            return var1;
        };
        var2['onPressItem'] = var9;
        var8 = function onViewAll() {
            var3 = _closure1_slot26;
            var2 = {};
            var6 = _closure2_slot2;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var5 = var5.UploadOrigin;
            var5 = var5.IMAGE_PICKER;
            var8 = var6.bind(var1)(var5);
            var9 = var2;
            var5 = copyDataProperties(var9, var8);
            var5 = _closure2_slot1;
            var4 = 'draftType';
            var2[var4] = var5;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2['onViewAll'] = var8;
        var8 = var7[var5];
        var8 = var6.bind(var1)(var8);
        var8 = var8.hideMediaKeyboardActionSheet;
        var2['onClose'] = var8;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.hideMediaKeyboardActionSheet;
        var2['onBack'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot32 = var5;
    var3['showSimpleMediaKeyboard'] = var5;
    var3['animatedIndexThreshold'] = var4;
    var3['getMediaKeyboardDraftType'] = var2;
    return var1;
})();