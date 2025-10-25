// app/modules/image/native/ImagePicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var4;
    var7 = function launchImageLibrary(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.mediaType;
            var1 = 'any';
            if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var9 = 'mixed';
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var9 = var2.mediaType;
case 4:
            var7 = var2.selections;
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = new Array(0);
case 5:
            var1 = var2.disableNewIOSPicker;
            var6 = !var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            var8 = undefined;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = 'pageSheet';
case 7:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.launchImageLibrary;
            var3 = {};
            var11 = var3;
            var10 = var2;
            var2 = copyDataProperties(var11, var10);
            var2 = 'mediaType';
            var3[var2] = var9;
            var2 = 'presentationStyle';
            var3[var2] = var8;
            var2 = 'selection';
            var3[var2] = var7;
            var2 = 'useNewIOSPicker';
            var3[var2] = var6;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot3 = var7;
    var6 = function launchCamera(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.launchCamera;
        var3 = arg1;
        var2 = arg2;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot4 = var6;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var2 = true;
    var8['value'] = var2;
    var2 = '__esModule';
    var2 = var9.bind(var10)(var3, var2, var8);
    var2 = {};
    var2['launchImageLibrary'] = var7;
    var7 = function launchImageLibraryAsync(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2['launchImageLibraryAsync'] = var7;
    var2['launchCamera'] = var6;
    var6 = function launchCameraAsync(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2['launchCameraAsync'] = var6;
    var1 = function launchCropper(arg1) {
        var1 = arg1;
        var8 = var1.uri;
        var7 = var1.width;
        var6 = var1.height;
        var5 = var1.includeBase64;
        var4 = var1.mimeType;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.openCropper;
        var1 = {};
        var9 = 'photo';
        var1['mediaType'] = var9;
        var1['path'] = var8;
        var1['width'] = var7;
        var1['height'] = var6;
        var1['includeBase64'] = var5;
        var1['mimeType'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['launchCropper'] = var1;
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/image/native/ImagePicker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();