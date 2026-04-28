// app/modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot2 = var7;
    var4 = var4.useRef;
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeTrackProfileFrameViewed(arg1) {
        var1 = arg1;
        var6 = var1.skuId;
        var _closure2_slot0 = var6;
        var3 = var1.openedAt;
        var _closure2_slot1 = var3;
        var3 = var1.context;
        var _closure2_slot2 = var3;
        var1 = var1.analyticsLocations;
        var _closure2_slot3 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var8 = var5.bind(var1)(var4);
        var7 = var8.useStateFromStores;
        var4 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getProductFetch;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var4);
        var _closure2_slot4 = var5;
        var4 = _closure1_slot3;
        var4 = var4.bind(var1)(var1);
        var _closure2_slot5 = var4;
        var4 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var7 = null;
                if(!(var7 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var9 = var1.bind(var2)();
                var1 = _closure2_slot5;
                var1 = var1.current;
                var1 = var7 == var1;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot1;
                var1 = var7 != var2;
case 4:
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = _closure2_slot5;
                var1 = _closure2_slot1;
                var1 = var9 - var1;
                var2['current'] = var1;
case 6:
                var1 = _closure2_slot4;
                var1 = var7 == var1;
                var5 = undefined;
                var2 = undefined;
                if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var1 = _closure2_slot4;
                var2 = var1.state;
case 8:
                var1 = 'success';
                if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var5)(var1);
                var2 = var3.maybeTrackUserProfileUiViewed;
                var1 = {};
                var6 = 'PROFILE_FRAME';
                var1['profileUi'] = var6;
                var6 = _closure2_slot5;
                var6 = var6.current;
                var1['timeToInteractiveMs'] = var6;
                var6 = _closure2_slot1;
                var8 = var7 != var6;
                var6 = undefined;
                if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var8 = _closure2_slot1;
                var6 = var9 - var8;
case 11:
                var1['timeToLoadMs'] = var6;
                var6 = _closure2_slot4;
                var8 = var7 == var6;
                var6 = undefined;
                if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var8 = _closure2_slot4;
                var6 = var8.startedAt;
case 13:
                var8 = var7 != var6;
                var6 = undefined;
                if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var8 = _closure2_slot4;
                var9 = var7 == var8;
                var8 = undefined;
                if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var9 = _closure2_slot4;
                var8 = var9.endedAt;
case 17:
                var8 = var7 != var8;
                var6 = undefined;
                if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 19:
                var8 = _closure2_slot4;
                var9 = var8.endedAt;
                var8 = var8.startedAt;
                var6 = var9 - var8;
case 15:
                var1['timeToFetchMs'] = var6;
                var6 = _closure2_slot1;
                var1['viewStartedAt'] = var6;
                var6 = _closure2_slot4;
                var6 = var7 == var6;
                var5 = undefined;
                if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var6 = _closure2_slot4;
                var5 = var6.startedAt;
case 20:
                var1['fetchStartedAt'] = var5;
                var5 = _closure2_slot3;
                var1['analyticsLocations'] = var5;
                var10 = _closure2_slot2;
                var11 = var1;
                var4 = copyDataProperties(var11, var10);
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();