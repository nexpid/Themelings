// app/modules/device/native/DeviceMedia.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'DeviceMedia.tsx';
    var13 = var7;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var7 = var8.create;
    var2 = function() {
        var1 = {'assets': null, 'page': 0, 'hasReachedEnd': false, 'lastAssetIndex': 0};
        return var1;
    };
    var2 = var7.bind(var8)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = function getNextAssetPage() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = function applyStateUpdate(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var6 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var4;
                    var1 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var4.edges;
                    var9 = var5 == var2;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var8 = var2.length;
case 2:
                    var9 = var5 != var8;
                    var10 = 0;
                    var2 = 0;
                    if(!var9) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = var8;
case 5:
                    var2 = var6 + var2;
                    var _closure3_slot1 = var2;
                    var2 = _closure2_slot0;
                    if(!(var5 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = var5 == var4;
                    var8 = undefined;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = var4.edges;
                    var2 = var5 == var6;
                    var8 = var6;
case 9:
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 11:
                    var6 = var8.unshift;
                    var2 = _closure2_slot0;
                    var13 = var2.edges;
                    var2 = new Array(0);
                    var14 = var2;
                    var12 = 0;
                    var9 = arraySpread(var14, var13, var12);
                    var14 = var6;
                    var13 = var2;
                    var12 = var8;
                    var2 = apply(var14, var13, var12);
case 7:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = 5;
                    var6 = var6[var8];
                    var11 = var9.bind(var1)(var6);
                    var9 = var11.batchUpdates;
                    var6 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.setState;
                            var2 = {};
                            var1 = _closure3_slot0;
                            var2['assets'] = var1;
                            var5 = _closure2_slot2;
                            var2['page'] = var5;
                            var5 = _closure3_slot1;
                            var2['lastAssetIndex'] = var5;
                            var7 = null;
                            var8 = var7 == var1;
                            var1 = undefined;
                            var5 = undefined;
                            if(var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var6 = _closure3_slot0;
                            var6 = var6.page_info;
                            var7 = var7 == var6;
                            var5 = undefined;
                            if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                            var5 = var6.end_cursor;
case 12:
                            var2['endCursor'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var6 = var9.bind(var11)(var6);
                    var6 = var5 == var4;
                    if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var9 = var4.edges;
                    var9 = var9.length;
                    var6 = var10 === var9;
case 15:
                    if(var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var4 = var4.page_info;
                    var9 = var5 == var4;
                    var5 = undefined;
                    if(var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var5 = var4.has_next_page;
case 19:
                    var4 = false;
                    var6 = var4 === var5;
case 17:
                    var _closure3_slot2 = var6;
                    if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.batchUpdates;
                    var3 = function() {
                        var3 = _closure1_slot6;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = _closure3_slot2;
                        var1['hasReachedEnd'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 21:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['page'] = var7;
                    var2['has_reached_end'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var _closure2_slot3 = var2;
            var4 = _closure1_slot6;
            var3 = var4.getState;
            var5 = var3.bind(var4)();
            var3 = var5.assets;
            var _closure2_slot0 = var3;
            var6 = var5.page;
            var10 = var5.lastAssetIndex;
            var _closure2_slot1 = var10;
            var4 = var5.hasReachedEnd;
            var5 = var5.endCursor;
            var7 = null;
            if(!(var7 != var3)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(var4) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var8 = var3.edges;
            var3 = var3.edges;
            var4 = var3.length;
            var3 = 1;
            var4 = var4 - var3;
            var8 = var8[var4];
            var11 = var7 == var8;
            var4 = undefined;
            var9 = undefined;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var8.node;
            var11 = var7 == var8;
            var9 = undefined;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var9 = var8.image;
case 26:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 6;
            var11 = var11[var8];
            var12 = var12.bind(var4)(var11);
            var11 = var12.isIOS;
            var11 = var11.bind(var12)();
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            if(!(var7 != var9)) { _fun0001_ip = 23; continue _fun0001 }
case 31:
            var11 = var9.uri;
            if(!(var7 != var11)) { _fun0001_ip = 23; continue _fun0001 }
case 29:
            var3 = var6 + var3;
            var _closure2_slot2 = var3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 19:
            var3 = _closure1_slot3;
            var8 = var3.CameraRollUtils;
            var6 = var8.getPhotos;
            var3 = {'first': 51, 'assetType': 'All'};
            var3['offset'] = var10;
            var9 = var9.uri;
            var3['after'] = var9;
            var8 = var6.bind(var8)(var3);
            var6 = var8.then;
            var3 = function(arg1) {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var6.bind(var8)(var3);
            var6 = var8.catch;
            var3 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'CameraRollUtils -- Failed to get photos with error ';
                var2 = var6.bind(var2)(var5);
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
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
            var3 = var6.bind(var8)(var3);
            _fun0001_ip = 23; continue _fun0001;
case 32:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 7;
            var3 = var3[var6];
            var3 = var8.bind(var4)(var3);
            if(!(var7 != var3)) { _fun0001_ip = 23; continue _fun0001 }
case 33:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getPhotos;
            var2 = {'first': 51, 'groupTypes': 'Recents', 'assetType': 'All'};
            var2['after'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'DCDPhotos -- Failed to get photos with error ';
                var2 = var6.bind(var2)(var5);
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
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
            var1 = var2.bind(var3)(var1);
case 23:
            var1 = undefined;
            return var1;
        }
    };
    var2['getNextAssetPage'] = var7;
    var7 = function refreshAssets() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = function applyStateUpdate(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = 0;
                    var _closure3_slot1 = var4;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var7 = undefined;
                    if(var6) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var6 = var3.edges;
                    var8 = var5 == var6;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 34; continue _fun0005 }
case 36:
                    var7 = var6.length;
case 34:
                    if(!(var5 != var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var6 = var3.edges;
                    var5 = var6.forEach;
                    var3 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = arg1;
                            var5 = null;
                            var4 = var5 == var3;
                            var1 = undefined;
                            var2 = undefined;
                            if(var4) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                            var4 = var3.node;
                            var6 = var5 == var4;
                            var2 = undefined;
                            if(var6) { _fun0006_ip = 39; continue _fun0006 }
case 41:
                            var4 = var4.image;
                            var6 = var5 == var4;
                            var2 = undefined;
                            if(var6) { _fun0006_ip = 39; continue _fun0006 }
case 42:
                            var2 = var4.uri;
case 39:
                            var2 = var5 != var2;
                            if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                            var6 = var5 == var3;
                            var4 = undefined;
                            if(var6) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                            var3 = var3.node;
                            var6 = var5 == var3;
                            var4 = undefined;
                            if(var6) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                            var3 = var3.image;
                            var5 = var5 == var3;
                            var4 = undefined;
                            if(var5) { _fun0006_ip = 45; continue _fun0006 }
case 48:
                            var4 = var3.uri;
case 45:
                            var3 = '';
                            var2 = var3 !== var4;
case 43:
                            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                            var2 = _closure3_slot1;
                            var2 = var2 + 1;
                            _closure3_slot1 = var2;
case 49:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
case 37:
                    var3 = _closure3_slot1;
                    if(!(!(var3 > var4))) { _fun0005_ip = 51; continue _fun0005 }
case 25:
                    var5 = _closure1_slot5;
                    var4 = var5.info;
                    var3 = 'applyStateUpdate.noBrokenAsset';
                    var3 = var4.bind(var5)(var3);
                    _fun0005_ip = 52; continue _fun0005;
case 51:
                    var8 = _closure1_slot5;
                    var6 = var8.log;
                    var5 = {};
                    var4 = _closure3_slot1;
                    var5['numBrokenAssets'] = var4;
                    var5['numAssets'] = var7;
                    var4 = 'applyStateUpdate.hasBrokenAsset';
                    var4 = var6.bind(var8)(var4, var5);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot4;
                    var4 = var3.MEDIA_PICKER_ASSETS_DEBUG;
                    var3 = {};
                    var8 = _closure3_slot1;
                    var3['num_broken_assets'] = var8;
                    var3['num_assets'] = var7;
                    var7 = 'DeviceMedia.applyStateUpdate';
                    var3['location'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 52:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.setState;
                            var2 = {'assets': null, 'page': 0, 'lastAssetIndex': 51};
                            var1 = _closure3_slot0;
                            var2['assets'] = var1;
                            var5 = null;
                            var8 = var5 == var1;
                            var1 = undefined;
                            var6 = undefined;
                            if(var8) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var8 = _closure3_slot0;
                            var8 = var8.page_info;
                            var9 = var5 == var8;
                            var6 = undefined;
                            if(var9) { _fun0007_ip = 53; continue _fun0007 }
case 55:
                            var6 = var8.end_cursor;
case 53:
                            var2['endCursor'] = var6;
                            var6 = _closure3_slot0;
                            var8 = var5 == var6;
                            var6 = undefined;
                            if(var8) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                            var7 = _closure3_slot0;
                            var7 = var7.page_info;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0007_ip = 56; continue _fun0007 }
case 58:
                            var6 = var7.has_next_page;
case 56:
                            var5 = var5 == var6;
                            if(var5) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                            var5 = var6;
case 59:
                            var5 = !var5;
                            var2['hasReachedEnd'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var _closure2_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            if(var4) { _fun0004_ip = 61; continue _fun0004 }
case 39:
            var4 = _closure1_slot3;
            var6 = var4.CameraRollUtils;
            var5 = var6.getPhotos;
            var4 = {'first': 51, 'assetType': 'All'};
            var6 = var5.bind(var6)(var4);
            var5 = var6.then;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.catch;
            var4 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'CameraRollUtils -- Failed to get photos with error ';
                var2 = var6.bind(var2)(var5);
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
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
            var4 = var5.bind(var6)(var4);
            _fun0004_ip = 62; continue _fun0004;
case 61:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = 7;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.getPhotos;
            var3 = {'first': 51, 'groupTypes': 'Recents', 'assetType': 'All'};
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'DCDPhotos -- Failed to get photos with error ';
                var2 = var6.bind(var2)(var5);
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
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
case 62:
            return var1;
        }
    };
    var2['refreshAssets'] = var7;
    var7 = function useAssets() {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.assets;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['useAssets'] = var7;
    var4 = function useHasReachedEnd() {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.hasReachedEnd;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['useHasReachedEnd'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/DeviceMedia.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();