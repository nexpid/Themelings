// app/modules/device/native/getDeviceMediaPhotos.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'DeviceMedia.tsx';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/getDeviceMediaPhotos.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getDeviceMediaPhotos(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.batchSize;
            var8 = var1.endCursor;
            var11 = var1.lastAssetIndex;
            var12 = var1.lastNodeImageUri;
            var7 = var1.extensions;
            var5 = var1.onFetched;
            var4 = var1.onError;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = function u(arg1) {
                var5 = arg1;
                var4 = _closure1_slot4;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'CameraRollUtils -- Failed to get photos with error ';
                var2 = var6.bind(var2)(var5);
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.captureException;
                var2 = {};
                var6 = {};
                var7 = 'DEVICE_MEDIA';
                var6['source'] = var7;
                var2['tags'] = var6;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
case 2:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 3;
            var3 = var10[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot3;
            var10 = var3.CameraRollUtils;
            var6 = var10.getPhotos;
            var3 = {};
            var3['first'] = var9;
            var13 = 'All';
            var3['assetType'] = var13;
            var3['after'] = var12;
            var3['offset'] = var11;
            var3['extensions'] = var7;
            var6 = var6.bind(var10)(var3);
            var3 = var6.then;
            var6 = var3.bind(var6)(var5);
            var3 = var6.catch;
            var3 = var3.bind(var6)(var4);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 4;
            var3 = var3[var6];
            var10 = var10.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var6 = var3.bind(var1)(var2);
            var3 = var6.getPhotos;
            var2 = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
            var2['first'] = var9;
            var2['after'] = var8;
            var2['extensions'] = var7;
            var3 = var3.bind(var6)(var2);
            var2 = var3.then;
            var3 = var2.bind(var3)(var5);
            var2 = var3.catch;
            var2 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();