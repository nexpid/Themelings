// app/modules/launchpad/native/LaunchPadPullTabCache.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var6 = function getLaunchPadPullTabPositionCached() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = _closure1_slot6;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var1 = _closure1_slot4;
 55:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function setLaunchPadPullTabPositionCached(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot6;
        var2 = arg1;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var5;
    var2 = function setLaunchPadPullTabExclusionRect() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 9:
            var2 = _closure1_slot9;
            var5 = var2.bind(var1)();
 20:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 300; continue _fun0002 }
 58:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var8 = var4.bind(var1)(var7);
            var7 = var8.getWindowDimensions;
            var7 = var7.bind(var8)();
            var8 = var7.width;
            var7 = _closure1_slot5;
            var7 = var8 - var7;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getWindowDimensions;
            var3 = var3.bind(var4)();
            var6 = var3.width;
            var3 = _closure1_slot3;
            var4 = var5 + var3;
            var9 = _closure1_slot8;
            var8 = null;
            var10 = var8 == var9;
            var3 = undefined;
            if(var10) { _fun0002_ip = 153; continue _fun0002 }
 148:
            var3 = var9.left;
 153:
            var3 = var3 === var7;
            if(!var3) { _fun0002_ip = 182; continue _fun0002 }
 160:
            var10 = _closure1_slot8;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 178; continue _fun0002 }
 173:
            var9 = var10.right;
 178:
            var3 = var9 === var6;
 182:
            if(!var3) { _fun0002_ip = 207; continue _fun0002 }
 185:
            var10 = _closure1_slot8;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 203; continue _fun0002 }
 198:
            var9 = var10.top;
 203:
            var3 = var9 === var5;
 207:
            if(!var3) { _fun0002_ip = 232; continue _fun0002 }
 210:
            var9 = _closure1_slot8;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 228; continue _fun0002 }
 223:
            var8 = var9.bottom;
 228:
            var3 = var8 === var4;
 232:
            if(var3) { _fun0002_ip = 300; continue _fun0002 }
 235:
            var3 = {};
            var3['left'] = var7;
            var3['right'] = var6;
            var3['top'] = var5;
            var3['bottom'] = var4;
            _closure1_slot8 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.setSystemGestureExclusionRects;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var2 = var3.bind(var4)(var2);
 300:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var7 = 0;
    var10 = var9[var7];
    var1 = undefined;
    var10 = var8.bind(var1)(var10);
    var11 = var10.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot3 = var11;
    var11 = var10.LAUNCH_PAD_PULL_TAB_INITIAL_POSITION;
    var _closure1_slot4 = var11;
    var10 = var10.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot5 = var10;
    var10 = 'LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY';
    var _closure1_slot6 = var10;
    var _closure1_slot7 = var7;
    var _closure1_slot8 = var1;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/launchpad/native/LaunchPadPullTabCache.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getLaunchPadPullTabPositionCached'] = var6;
    var3['setLaunchPadPullTabPositionCached'] = var5;
    var5 = function persistLaunchPadPullTabPosition(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = global;
        var6 = var4.clearTimeout;
        var5 = _closure1_slot7;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var4.setTimeout;
        var4 = function() {
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var2 = _closure1_slot11;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var2 = 300;
        var2 = var5.bind(var1)(var4, var2);
        _closure1_slot7 = var2;
        return var1;
    };
    var3['persistLaunchPadPullTabPosition'] = var5;
    var4 = function clearLaunchPadPullTabExclusionRect() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0003_ip = 47; continue _fun0003 }
 37:
            var5 = _closure1_slot8;
            var4 = null;
            var3 = var4 != var5;
 47:
            if(!var3) { _fun0003_ip = 89; continue _fun0003 }
 50:
            _closure1_slot8 = var1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setSystemGestureExclusionRects;
            var2 = new Array(0);
            var2 = var3.bind(var4)(var2);
 89:
            return var1;
        }
    };
    var3['clearLaunchPadPullTabExclusionRect'] = var4;
    var3['setLaunchPadPullTabExclusionRect'] = var2;
    return var1;
})();