// app/modules/device/native/DeviceMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var7 = var8.create;
    var2 = function() {
        var1 = {'assets': null, 'page': 0, 'hasReachedEnd': false, 'lastAssetIndex': 0};
        return var1;
    };
    var2 = var7.bind(var8)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function getNextAssetPage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.batchSize;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot4;
            var3 = var5.getState;
            var7 = var3.bind(var5)();
            var3 = var7.assets;
            var _closure2_slot0 = var3;
            var9 = var7.page;
            var6 = var7.lastAssetIndex;
            var _closure2_slot1 = var6;
            var5 = var7.hasReachedEnd;
            var7 = var7.endCursor;
            var11 = null;
            if(!(var11 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var10 = var3.edges;
            var3 = var3.edges;
            var5 = var3.length;
            var3 = 1;
            var5 = var5 - var3;
            var10 = var10[var5];
            var12 = var11 == var10;
            var5 = undefined;
            if(var12) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var10 = var10.node;
            var12 = var11 == var10;
            var5 = undefined;
            if(var12) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var5 = var10.image;
case 5:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 5;
            var10 = var13[var10];
            var12 = var12.bind(var1)(var10);
            var10 = var12.isIOS;
            var10 = var10.bind(var12)();
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var11 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var10 = var5.uri;
            if(!(var11 != var10)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var3 = var9 + var3;
            _closure2_slot2 = var3;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var2['batchSize'] = var8;
            var2['endCursor'] = var7;
            var2['lastAssetIndex'] = var6;
            var5 = var5.uri;
            var2['lastNodeImageUri'] = var5;
            var4 = function onFetched(arg1) {
                var3 = function applyStateUpdate(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var6 = _closure2_slot1;
                        var5 = null;
                        var2 = var5 == var4;
                        var1 = undefined;
                        var8 = undefined;
                        if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var2 = var4.edges;
                        var9 = var5 == var2;
                        var8 = undefined;
                        if(var9) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                        var8 = var2.length;
case 11:
                        var9 = var5 != var8;
                        var10 = 0;
                        var2 = 0;
                        if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var2 = var8;
case 14:
                        var2 = var6 + var2;
                        var _closure4_slot1 = var2;
                        var2 = _closure2_slot0;
                        if(!(var5 != var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var2 = var5 == var4;
                        var8 = undefined;
                        if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var6 = var4.edges;
                        var2 = var5 == var6;
                        var8 = var6;
case 18:
                        if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 20:
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
case 16:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 3;
                        var6 = var6[var8];
                        var11 = var9.bind(var1)(var6);
                        var9 = var11.batchUpdates;
                        var6 = function() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var4 = _closure1_slot4;
                                var3 = var4.setState;
                                var2 = {};
                                var1 = _closure4_slot0;
                                var2['assets'] = var1;
                                var5 = _closure2_slot2;
                                var2['page'] = var5;
                                var5 = _closure4_slot1;
                                var2['lastAssetIndex'] = var5;
                                var7 = null;
                                var8 = var7 == var1;
                                var1 = undefined;
                                var5 = undefined;
                                if(var8) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                                var6 = _closure4_slot0;
                                var6 = var6.page_info;
                                var7 = var7 == var6;
                                var5 = undefined;
                                if(var7) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                                var5 = var6.end_cursor;
case 21:
                                var2['endCursor'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        var6 = var9.bind(var11)(var6);
                        var6 = var5 == var4;
                        if(var6) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var9 = var4.edges;
                        var9 = var9.length;
                        var6 = var10 === var9;
case 24:
                        if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var4 = var4.page_info;
                        var9 = var5 == var4;
                        var5 = undefined;
                        if(var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                        var5 = var4.has_next_page;
case 28:
                        var4 = false;
                        var6 = var4 === var5;
case 26:
                        var _closure4_slot2 = var6;
                        if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot4;
                            var2 = var3.setState;
                            var1 = {};
                            var4 = _closure4_slot2;
                            var1['hasReachedEnd'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
case 30:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot3;
                        var3 = var2.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                        var2 = {};
                        var7 = _closure2_slot2;
                        var2['page'] = var7;
                        var2['has_reached_end'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onFetched'] = var4;
            var2 = var3.bind(var1)(var2);
case 2:
            return var1;
        }
    };
    var2['getNextAssetPage'] = var7;
    var7 = function refreshAssets(arg1) {
        var1 = arg1;
        var5 = var1.batchSize;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['batchSize'] = var5;
        var4 = function onFetched(arg1) {
            var3 = function applyStateUpdate(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var8 = arg1;
                    var _closure4_slot0 = var8;
                    var9 = null;
                    var3 = var9 == var8;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var6 = var8.edges;
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var4 = null;
                            var3 = var4 == var2;
                            var1 = undefined;
                            if(var3) { _fun0005_ip = 11; continue _fun0005 }
case 34:
                            var3 = var2.node;
                            var6 = var4 == var3;
                            var1 = undefined;
                            if(var6) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                            var3 = var3.image;
                            var6 = var4 == var3;
                            var1 = undefined;
                            if(var6) { _fun0005_ip = 11; continue _fun0005 }
case 13:
                            var1 = var3.uri;
case 11:
                            var1 = var4 == var1;
                            if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                            var6 = var4 == var2;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                            var2 = var2.node;
                            var6 = var4 == var2;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 23:
                            var2 = var2.image;
                            var4 = var4 == var2;
                            var3 = undefined;
                            if(var4) { _fun0005_ip = 37; continue _fun0005 }
case 39:
                            var3 = var2.uri;
case 37:
                            var2 = '';
                            var1 = var2 === var3;
case 35:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.length;
case 32:
                    var5 = var9 != var4;
                    var3 = 0;
                    var7 = 0;
                    if(!var5) { _fun0004_ip = 40; continue _fun0004 }
case 22:
                    var7 = var4;
case 40:
                    if(!(var7 > var3)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot3;
                    var4 = var3.MEDIA_PICKER_ASSETS_DEBUG;
                    var3 = {};
                    var3['num_broken_assets'] = var7;
                    var10 = var9 == var8;
                    var7 = undefined;
                    if(var10) { _fun0004_ip = 43; continue _fun0004 }
case 6:
                    var8 = var8.edges;
                    var9 = var9 == var8;
                    var7 = undefined;
                    if(var9) { _fun0004_ip = 43; continue _fun0004 }
case 7:
                    var7 = var8.length;
case 43:
                    var3['num_assets'] = var7;
                    var7 = 'DeviceMedia.applyStateUpdate';
                    var3['location'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 41:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.setState;
                            var2 = {};
                            var1 = _closure4_slot0;
                            var2['assets'] = var1;
                            var5 = 0;
                            var2['page'] = var5;
                            var5 = _closure2_slot0;
                            var2['lastAssetIndex'] = var5;
                            var5 = null;
                            var8 = var5 == var1;
                            var1 = undefined;
                            var6 = undefined;
                            if(var8) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                            var8 = _closure4_slot0;
                            var8 = var8.page_info;
                            var9 = var5 == var8;
                            var6 = undefined;
                            if(var9) { _fun0006_ip = 44; continue _fun0006 }
case 46:
                            var6 = var8.end_cursor;
case 44:
                            var2['endCursor'] = var6;
                            var6 = _closure4_slot0;
                            var8 = var5 == var6;
                            var6 = undefined;
                            if(var8) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                            var7 = _closure4_slot0;
                            var7 = var7.page_info;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0006_ip = 47; continue _fun0006 }
case 49:
                            var6 = var7.has_next_page;
case 47:
                            var5 = var5 == var6;
                            if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                            var5 = var6;
case 50:
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
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2['onFetched'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['refreshAssets'] = var7;
    var7 = function useAssets() {
        var3 = _closure1_slot4;
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
        var3 = _closure1_slot4;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/DeviceMedia.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();