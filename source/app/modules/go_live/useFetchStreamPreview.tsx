// app/modules/go_live/useFetchStreamPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/useFetchStreamPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchStreamPreview(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var12 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var12;
            var _closure2_slot2 = var10;
            var1 = null;
            var5 = var1 == var12;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1 == var10;
case 2:
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 6;
            var1 = var9[var2];
            var3 = undefined;
            var14 = var4.bind(var3)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var13.bind(var14)(var8, var1);
            var _closure2_slot4 = var1;
            var1 = var9[var2];
            var14 = var4.bind(var3)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot5;
                    var4 = var5.canBasicChannel;
                    var3 = _closure1_slot7;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var1 = var13.bind(var14)(var8, var1);
            var8 = var9[var2];
            var15 = var4.bind(var3)(var8);
            var14 = var15.useStateFromStores;
            var8 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var8;
            var8 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getVoiceChannelId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var14.bind(var15)(var13, var8);
            var2 = var9[var2];
            var13 = var4.bind(var3)(var2);
            var9 = var13.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot3;
                    var2 = !var4;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var8 = _closure1_slot3;
                    var7 = var8.shouldFetchPreview;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot2;
                    var2 = var7.bind(var8)(var6, var5, var4);
case 6:
                    var1['shouldFetchPreview'] = var2;
                    var4 = _closure2_slot3;
                    var2 = null;
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var8 = _closure1_slot3;
                    var7 = var8.getPreviewURL;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot2;
                    var2 = var7.bind(var8)(var6, var5, var4);
case 8:
                    var1['previewUrl'] = var2;
                    var4 = _closure2_slot3;
                    var2 = !var4;
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = _closure1_slot3;
                    var6 = var7.getIsPreviewLoading;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var2 = var6.bind(var7)(var5, var4, var3);
case 10:
                    var1['isLoading'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var13)(var4, var2);
            var13 = var2.shouldFetchPreview;
            var _closure2_slot5 = var13;
            var4 = var2.previewUrl;
            var2 = var2.isLoading;
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var8;
case 12:
            var _closure2_slot6 = var1;
            var9 = _closure1_slot2;
            var8 = var9.useEffect;
            var7 = new Array(6);
            var7[0] = var13;
            var7[1] = var12;
            var7[2] = var11;
            var7[3] = var10;
            var7[4] = var5;
            var7[5] = var1;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure2_slot3;
                    var2 = !var3;
case 14:
                    if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = _closure2_slot6;
case 16:
                    if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchStreamPreview;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var1 = {};
            var1['previewUrl'] = var4;
            var1['isLoading'] = var2;
            _fun0001_ip = 23; continue _fun0001;
case 20:
            var2 = {};
            var2['previewUrl'] = var3;
            var3 = false;
            var2['isLoading'] = var3;
            var1 = var2;
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();