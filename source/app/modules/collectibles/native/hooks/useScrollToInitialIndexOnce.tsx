// app/modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 100;
    var3['INITIAL_SCROLL_DELAY_MS'] = var4;
    var2 = function useScrollToInitialIndexOnce(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.initialScrollIndex;
            var _closure2_slot0 = var8;
            var9 = var1.shouldScroll;
            var _closure2_slot1 = var9;
            var6 = var1.flashListRef;
            var _closure2_slot2 = var6;
            var7 = var1.afterMs;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 50; continue _fun0001 }
 47:
            var7 = 100;
 50:
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var1;
            var5 = _closure1_slot0;
            var4 = var5.useRef;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            _closure2_slot4 = var3;
            var4 = var5.useEffect;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 20; continue _fun0002 }
 16:
                    var2 = _closure2_slot1;
 20:
                    if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 23:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    var2 = !var3;
 35:
                    if(!var2) { _fun0002_ip = 79; continue _fun0002 }
 38:
                    var3 = _closure2_slot4;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure2_slot2;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 46; continue _fun0003 }
 18:
                            var2 = var3.scrollToIndex;
                            var1 = {};
                            var5 = true;
                            var1['animated'] = var5;
                            var4 = _closure2_slot0;
                            var1['index'] = var4;
                            var1 = var2.bind(var3)(var1);
 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var4.bind(var2)(var1, var3);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useScrollToInitialIndexOnce'] = var2;
    return var1;
})();