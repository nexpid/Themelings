// app/modules/icymi/native/useICYMIEmptyLoadingAnalytics.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/useICYMIEmptyLoadingAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useICYMIEmptyLoadingAnalytics(arg1, arg2) {
        var2 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var6 = var4.useRef;
        var3 = null;
        var3 = var6.bind(var4)(var3);
        var _closure2_slot2 = var3;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var5;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0001_ip = 189; continue _fun0001 }
 13:
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                if(var3) { _fun0001_ip = 125; continue _fun0001 }
 24:
                var4 = var2.current;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 189; continue _fun0001 }
 38:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var1 = _closure2_slot2;
                var4 = var1.current;
                var7 = var5 - var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 1;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var6 = var4.ICYMIAnalytics;
                var5 = var6.trackFeedEmptyLoadingComplete;
                var4 = {};
                var4['dwellTimeMs'] = var7;
                var4 = var5.bind(var6)(var4);
                var1['current'] = var3;
                _fun0001_ip = 189; continue _fun0001;
 125:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ICYMIAnalytics;
                var1 = var2.trackFeedEmptyLoadingSeen;
                var1 = var1.bind(var2)();
 189:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 110; continue _fun0002 }
 10:
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 110; continue _fun0002 }
 25:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var1 = _closure2_slot2;
                var3 = var1.current;
                var6 = var4 - var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.ICYMIAnalytics;
                var4 = var5.trackFeedEmptyLoadingAbandoned;
                var3 = {};
                var3['dwellTimeMs'] = var6;
                var3 = var4.bind(var5)(var3);
                var1['current'] = var2;
 110:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useICYMIEmptyLoadingAnalytics'] = var2;
    return var1;
})();