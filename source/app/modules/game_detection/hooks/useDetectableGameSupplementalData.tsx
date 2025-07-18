// app/modules/game_detection/hooks/useDetectableGameSupplementalData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useRequestDetectableGameSupplementalData(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 35; continue _fun0001 }
 13:
                var3 = _closure1_slot7;
                var2 = var3.request;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 35:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = function DetectableGameSupplementalFetchManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var6 = var5.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['_fetched'] = var6;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['_pending'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.DelayedCall;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var9 = 32;
            var8 = function() {
                var2 = _closure3_slot0;
                var1 = var2._flush;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var4;
            var2 = new var10[var6](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_flushHandler'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'request';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var3 = var1._pending;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                if(var2) { _fun0002_ip = 41; continue _fun0002 }
 25:
                var5 = var1._fetched;
                var3 = var5.has;
                var2 = var3.bind(var5)(var4);
 41:
                if(var2) { _fun0002_ip = 79; continue _fun0002 }
 44:
                var3 = var1._pending;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = var1._flushHandler;
                var2 = var3.delay;
                var1 = false;
                var1 = var2.bind(var3)(var1);
 79:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = '_flush';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var6 = new Array(0);
            var _closure3_slot1 = var6;
            var5 = var1._pending;
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = _closure3_slot0;
                var4 = var2._fetched;
                var2 = var4.add;
                var2 = var2.bind(var4)(var3);
                var2 = _closure3_slot1;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var3 = var1._pending;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.chunk;
            var3 = 20;
            var4 = var4.bind(var5)(var6, var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getDetectableGamesSupplemental;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var5.bind(var1)();
    var8 = var5.prototype;
    var8 = Object.create(var8, {constructor: {value: var5}});
    var14 = var8;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/hooks/useDetectableGameSupplementalData.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useRequestDetectableGameSupplementalData'] = var4;
    var2 = function useDetectableGameSupplementalData(arg1, arg2) {
        var6 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var3;
        var4 = _closure1_slot8;
        var5 = undefined;
        var4 = var4.bind(var5)(var6);
        var7 = _closure1_slot5;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                var2 = var1 != var2;
                var1 = undefined;
                if(!var2) { _fun0003_ip = 51; continue _fun0003 }
 18:
                var2 = {};
                var3 = _closure2_slot1;
                var4 = var3.coverImageWidth;
                var2['width'] = var4;
                var3 = var3.coverImageHeight;
                var2['height'] = var3;
                var1 = var2;
 51:
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var4);
        var _closure2_slot2 = var3;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 7;
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 101; continue _fun0004 }
 13:
                var1 = {};
                var5 = _closure1_slot6;
                var3 = var5.isFetching;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['isFetching'] = var3;
                var3 = var5.getLocalizedName;
                var3 = var3.bind(var5)(var4);
                var1['localizedName'] = var3;
                var3 = var5.getThemes;
                var3 = var3.bind(var5)(var4);
                var1['themes'] = var3;
                var3 = var5.getCoverImageUrl;
                var2 = _closure2_slot2;
                var2 = var3.bind(var5)(var4, var2);
                var1['coverImageUrl'] = var2;
                _fun0004_ip = 130; continue _fun0004;
 101:
                var2 = {};
                var3 = false;
                var2['isFetching'] = var3;
                var3 = undefined;
                var2['localizedName'] = var3;
                var2['themes'] = var3;
                var2['coverImageUrl'] = var3;
                var1 = var2;
 130:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useDetectableGameSupplementalData'] = var2;
    return var1;
})();