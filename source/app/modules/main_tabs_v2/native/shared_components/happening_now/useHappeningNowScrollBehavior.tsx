// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var2);
        var1 = 0;
        var5 = var7[var1];
        var2 = metroImportDefault;
        var1 = undefined;
        var2 = var2.bind(var1)(var5);
        var _closure1_slot0 = var2;
        var2 = 1;
        var5 = var7[var2];
        var2 = metroImportAll;
        var2 = var2.bind(var1)(var5);
        var _closure1_slot1 = var2;
        var2 = 2;
        var2 = var7[var2];
        var5 = var6.bind(var1)(var2);
        var2 = var5.isFabric;
        var2 = var2.bind(var5)();
        if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = 3;
        var2 = var7[var2];
        var5 = var6.bind(var1)(var2);
        var2 = var5.isIOS;
        var2 = var2.bind(var5)();
        if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
        var2 = function useHappeningNowScrollSnappingV1(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var2 = var8.current;
                var7 = null;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = var2.state;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                var2 = var2.data;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                var1 = var2.length;
case 5:
                var2 = var7 != var1;
                var5 = 0;
                var4 = 0;
                if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = var1;
case 9:
                var1 = new Array(0);
                var9 = var5 < var4;
                var3 = 0;
                var2 = 0;
                if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var9 = var8.current;
                var11 = var7 == var9;
                var10 = undefined;
                if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var11 = var9.recyclerlistview_unsafe;
                var9 = var7 == var11;
                var10 = undefined;
                if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                var9 = var11.getLayout;
                var9 = var9.bind(var11)(var2);
                var11 = var7 == var9;
                var10 = undefined;
                if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 16:
                var10 = var9.width;
case 13:
                var11 = var7 != var10;
                var9 = 0;
                if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var9 = var10;
case 17:
                var10 = var1.push;
                var10 = var10.bind(var1)(var3);
                var3 = var3 + var9;
                var2 = var2 + 1;
                if(var2 < var4) { _fun0002_ip = 12; continue _fun0002 }
case 11:
                return var1;
            }
        };
        _fun0001_ip = 19; continue _fun0001;
case 4:
        var2 = function useHappeningNowScrollSnappingV2(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var8 = arg1;
                var2 = var8.current;
                var7 = null;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                var2 = var2.props;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 7:
                var2 = var2.data;
                var3 = var7 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 8:
                var1 = var2.length;
case 5:
                var2 = var7 != var1;
                var5 = 0;
                var4 = 0;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = var1;
case 9:
                var1 = new Array(0);
                var9 = var5 < var4;
                var3 = 0;
                var2 = 0;
                if(!var9) { _fun0003_ip = 20; continue _fun0003 }
case 12:
                var11 = var8.current;
                var9 = var7 == var11;
                var10 = undefined;
                if(var9) { _fun0003_ip = 21; continue _fun0003 }
case 14:
                var9 = var11.getLayout;
                var9 = var9.bind(var11)(var2);
                var11 = var7 == var9;
                var10 = undefined;
                if(var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var10 = var9.width;
case 21:
                var11 = var7 != var10;
                var9 = 0;
                if(!var11) { _fun0003_ip = 2; continue _fun0003 }
case 23:
                var9 = var10;
case 2:
                var10 = var1.push;
                var10 = var10.bind(var1)(var3);
                var3 = var3 + var9;
                var2 = var2 + 1;
                if(var2 < var4) { _fun0003_ip = 12; continue _fun0003 }
case 20:
                return var1;
            }
        };
case 19:
        var5 = 4;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx';
        var5 = var6.bind(var7)(var5);
        var4 = function useHappeningNowScrollBehavior(arg1, arg2) {
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot1;
            var4 = var5.useState;
            var3 = false;
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var3 = undefined;
            var2 = 2;
            var4 = var4.bind(var3)(var8, var2);
            var2 = 0;
            var2 = var4[var2];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot2 = var3;
            var4 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function(arg1) {
                var2 = arg1;
                var5 = _closure2_slot2;
                var1 = var2.nativeEvent;
                var1 = var1.contentOffset;
                var4 = var1.x;
                var1 = _closure2_slot0;
                var4 = var4 < var1;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot1;
                var3 = var2.nativeEvent;
                var3 = var3.contentOffset;
                var3 = var3.x;
                var2 = var2.nativeEvent;
                var2 = var2.layoutMeasurement;
                var2 = var2.width;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = var4.bind(var5)(var1, var3);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var3['default'] = var4;
        var3['useHappeningNowScrollSnapping'] = var2;
        return var1;
    }
})();