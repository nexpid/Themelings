// app/modules/device/native/DeviceMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var8 = var4.bind(var1)(var2);
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'DeviceMedia.tsx';
    var13 = var4;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var4 = var8.create;
    var2 = function() {
        var1 = {'assets': null, 'page': 0, 'hasReachedEnd': false, 'lastAssetIndex': 0};
        var3 = function refreshAssets(arg1) {
            var3 = function refreshAssets() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var6 = arguments[0];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0001_ip = 18; continue _fun0001 }
 11:
                    var6 = _closure1_slot6;
 18:
                    var _closure4_slot0 = var6;
                    var3 = function applyStateUpdate(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var4 = _closure1_slot5;
                                var3 = var4.setState;
                                var2 = {};
                                var1 = _closure5_slot0;
                                var2['assets'] = var1;
                                var5 = 0;
                                var2['page'] = var5;
                                var5 = _closure4_slot0;
                                var2['lastAssetIndex'] = var5;
                                var5 = null;
                                var8 = var5 == var1;
                                var1 = undefined;
                                var6 = undefined;
                                if(var8) { _fun0002_ip = 84; continue _fun0002 }
 59:
                                var8 = _closure5_slot0;
                                var8 = var8.page_info;
                                var9 = var5 == var8;
                                var6 = undefined;
                                if(var9) { _fun0002_ip = 84; continue _fun0002 }
 78:
                                var6 = var8.end_cursor;
 84:
                                var2['endCursor'] = var6;
                                var6 = _closure5_slot0;
                                var8 = var5 == var6;
                                var6 = undefined;
                                if(var8) { _fun0002_ip = 127; continue _fun0002 }
 102:
                                var7 = _closure5_slot0;
                                var7 = var7.page_info;
                                var8 = var5 == var7;
                                var6 = undefined;
                                if(var8) { _fun0002_ip = 127; continue _fun0002 }
 121:
                                var6 = var7.has_next_page;
 127:
                                var5 = var5 == var6;
                                if(var5) { _fun0002_ip = 137; continue _fun0002 }
 134:
                                var5 = var6;
 137:
                                var5 = !var5;
                                var2['hasReachedEnd'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var _closure4_slot1 = var3;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0001_ip = 145; continue _fun0001 }
 69:
                    var4 = _closure1_slot3;
                    var7 = var4.CameraRollUtils;
                    var5 = var7.getPhotos;
                    var4 = {};
                    var4['first'] = var6;
                    var8 = 'All';
                    var4['assetType'] = var8;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.then;
                    var4 = function(arg1) {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.catch;
                    var4 = function(arg1) {
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
                        var1 = 6;
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
                    var4 = var5.bind(var7)(var4);
                    _fun0001_ip = 254; continue _fun0001;
 145:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 5;
                    var4 = var4[var5];
                    var7 = var7.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var7)) { _fun0001_ip = 254; continue _fun0001 }
 171:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getPhotos;
                    var3 = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    var3['first'] = var6;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        var5 = arg1;
                        var4 = _closure1_slot4;
                        var3 = var4.log;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'DCDPhotos -- Failed to get photos with error ';
                        var2 = var6.bind(var2)(var5);
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
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
                    var2 = var3.bind(var4)(var2);
 254:
                    return var1;
                }
            };
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['refreshAssets'] = var3;
        var2 = function fetchNextPage() {
            var2 = function getNextAssetPage() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = function applyStateUpdate(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var6 = arg1;
                            var _closure5_slot0 = var6;
                            var5 = _closure4_slot2;
                            var7 = null;
                            var4 = var7 == var6;
                            var1 = undefined;
                            var8 = undefined;
                            if(var4) { _fun0004_ip = 49; continue _fun0004 }
 29:
                            var4 = var6.edges;
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0004_ip = 49; continue _fun0004 }
 44:
                            var8 = var4.length;
 49:
                            var10 = var7 != var8;
                            var9 = 0;
                            var4 = 0;
                            if(!var10) { _fun0004_ip = 63; continue _fun0004 }
 60:
                            var4 = var8;
 63:
                            var4 = var5 + var4;
                            var _closure5_slot1 = var4;
                            var4 = _closure4_slot0;
                            if(!(var7 != var4)) { _fun0004_ip = 146; continue _fun0004 }
 79:
                            var4 = var7 == var6;
                            var5 = undefined;
                            if(var4) { _fun0004_ip = 101; continue _fun0004 }
 88:
                            var8 = var6.edges;
                            var4 = var7 == var8;
                            var5 = var8;
 101:
                            if(var4) { _fun0004_ip = 146; continue _fun0004 }
 104:
                            var4 = var5.unshift;
                            var3 = _closure4_slot0;
                            var12 = var3.edges;
                            var3 = new Array(0);
                            var13 = var3;
                            var11 = 0;
                            var8 = arraySpread(var13, var12, var11);
                            var13 = var4;
                            var12 = var3;
                            var11 = var5;
                            var3 = apply(var13, var12, var11);
 146:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 3;
                            var4 = var4[var5];
                            var10 = var8.bind(var1)(var4);
                            var8 = var10.batchUpdates;
                            var4 = function() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var4 = _closure1_slot5;
                                    var3 = var4.setState;
                                    var2 = {};
                                    var1 = _closure5_slot0;
                                    var2['assets'] = var1;
                                    var7 = _closure4_slot1;
                                    var5 = 1;
                                    var5 = var7 + var5;
                                    var2['page'] = var5;
                                    var5 = _closure5_slot1;
                                    var2['lastAssetIndex'] = var5;
                                    var7 = null;
                                    var8 = var7 == var1;
                                    var1 = undefined;
                                    var5 = undefined;
                                    if(var8) { _fun0005_ip = 93; continue _fun0005 }
 68:
                                    var6 = _closure5_slot0;
                                    var6 = var6.page_info;
                                    var7 = var7 == var6;
                                    var5 = undefined;
                                    if(var7) { _fun0005_ip = 93; continue _fun0005 }
 87:
                                    var5 = var6.end_cursor;
 93:
                                    var2['endCursor'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                }
                            };
                            var4 = var8.bind(var10)(var4);
                            var4 = var7 != var6;
                            if(!var4) { _fun0004_ip = 209; continue _fun0004 }
 194:
                            var8 = var6.edges;
                            var8 = var8.length;
                            var4 = var9 !== var8;
 209:
                            if(!var4) { _fun0004_ip = 239; continue _fun0004 }
 212:
                            var6 = var6.page_info;
                            var8 = var7 == var6;
                            var7 = undefined;
                            if(var8) { _fun0004_ip = 233; continue _fun0004 }
 227:
                            var7 = var6.has_next_page;
 233:
                            var6 = false;
                            var4 = var6 !== var7;
 239:
                            if(var4) { _fun0004_ip = 277; continue _fun0004 }
 242:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                var3 = _closure1_slot5;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = true;
                                var1['hasReachedEnd'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
 277:
                            return var1;
                        }
                    };
                    var _closure4_slot3 = var1;
                    var3 = _closure1_slot5;
                    var1 = var3.getState;
                    var4 = var1.bind(var3)();
                    var1 = var4.assets;
                    var _closure4_slot0 = var1;
                    var3 = var4.page;
                    var _closure4_slot1 = var3;
                    var10 = var4.lastAssetIndex;
                    var _closure4_slot2 = var10;
                    var3 = var4.hasReachedEnd;
                    var6 = var4.endCursor;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0003_ip = 444; continue _fun0003 }
 81:
                    if(var3) { _fun0003_ip = 444; continue _fun0003 }
 87:
                    var3 = var1.edges;
                    var1 = var1.edges;
                    var5 = var1.length;
                    var1 = 1;
                    var1 = var5 - var1;
                    var3 = var3[var1];
                    var5 = var4 == var3;
                    var1 = undefined;
                    var9 = undefined;
                    if(var5) { _fun0003_ip = 147; continue _fun0003 }
 126:
                    var3 = var3.node;
                    var5 = var4 == var3;
                    var9 = undefined;
                    if(var5) { _fun0003_ip = 147; continue _fun0003 }
 141:
                    var9 = var3.image;
 147:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 4;
                    var3 = var3[var8];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.isIOS;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0003_ip = 199; continue _fun0003 }
 180:
                    if(!(var4 != var9)) { _fun0003_ip = 442; continue _fun0003 }
 187:
                    var3 = var9.uri;
                    if(!(var4 != var3)) { _fun0003_ip = 442; continue _fun0003 }
 199:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.isIOS;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0003_ip = 324; continue _fun0003 }
 229:
                    var3 = _closure1_slot3;
                    var8 = var3.CameraRollUtils;
                    var5 = var8.getPhotos;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var3['first'] = var11;
                    var11 = 'All';
                    var3['assetType'] = var11;
                    var3['offset'] = var10;
                    var9 = var9.uri;
                    var3['after'] = var9;
                    var8 = var5.bind(var8)(var3);
                    var5 = var8.then;
                    var3 = function(arg1) {
                        var3 = _closure4_slot3;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = var5.bind(var8)(var3);
                    var5 = var8.catch;
                    var3 = function(arg1) {
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
                        var1 = 6;
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
                    var3 = var5.bind(var8)(var3);
                    _fun0003_ip = 440; continue _fun0003;
 324:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 5;
                    var3 = var3[var5];
                    var3 = var8.bind(var1)(var3);
                    if(!(var4 != var3)) { _fun0003_ip = 440; continue _fun0003 }
 348:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getPhotos;
                    var3 = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    var7 = _closure1_slot6;
                    var3['first'] = var7;
                    var3['after'] = var6;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var3 = _closure4_slot3;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        var5 = arg1;
                        var4 = _closure1_slot4;
                        var3 = var4.log;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'DCDPhotos -- Failed to get photos with error ';
                        var2 = var6.bind(var2)(var5);
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
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
                    var2 = var3.bind(var4)(var2);
 440:
                    return var1;
 442:
                    return var1;
 444:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1['fetchNextPage'] = var2;
        return var1;
    };
    var2 = var4.bind(var8)(var2);
    var _closure1_slot5 = var2;
    var4 = 51;
    var _closure1_slot6 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/device/native/DeviceMedia.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BATCH_SIZE'] = var4;
    var3['useDeviceMedia'] = var2;
    return var1;
})();