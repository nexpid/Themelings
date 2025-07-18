// app/modules/remixing/useLoadFont.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = function fontNameTag(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '/';
        var2 = var2.bind(var3)(var1);
        var3 = var2.length;
        var1 = 1;
        var1 = var3 - var1;
        var3 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'font:';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot4 = var4;
    var4 = function reportUseFontHookLoadingError(arg1) {
        var3 = _closure1_slot6;
        var4 = _closure1_slot4;
        var1 = undefined;
        var2 = arg1;
        var4 = var4.bind(var1)(var2);
        var2 = new Array(1);
        var2[0] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var8 = {};
    var4 = false;
    var8['trailing'] = var4;
    var7 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var2 = new Array(0);
 13:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.increment;
            var3 = {};
            var7 = _closure1_slot0;
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.MetricEvents;
            var6 = var6.REMIX_FONT_LOADING_ERROR;
            var3['name'] = var6;
            var3['tags'] = var2;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var4 = 1000;
    var4 = var9.bind(var1)(var7, var4, var8);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/useLoadFont.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var11 = arg1;
            var7 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 4;
            var2 = var12[var1];
            var4 = undefined;
            var8 = var10.bind(var4)(var2);
            var5 = var8.useFont;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureException;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var8)(var7, var9, var2);
            var1 = var12[var1];
            var8 = var10.bind(var4)(var1);
            var5 = var8.useFont;
            var1 = 6;
            var1 = var12[var1];
            var4 = var10.bind(var4)(var1);
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureException;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var8)(var4, var9, var1);
            var9 = _closure1_slot3;
            var4 = var9.useRef;
            var3 = null;
            var5 = var4.bind(var9)(var3);
            var _closure2_slot2 = var5;
            var4 = var9.useRef;
            var4 = var4.bind(var9)(var3);
            var _closure2_slot3 = var4;
            var10 = var9.useEffect;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var7;
            var7 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var3 = var2.Math;
                var2 = var3.random;
                var3 = var2.bind(var3)();
                var2 = 1;
                var6 = var2 + var3;
                var4 = undefined;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0003_ip = 74; continue _fun0003 }
 13:
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        if(!(var5 === var2)) { _fun0003_ip = 115; continue _fun0003 }
 26:
                        var6 = _closure1_slot5;
                        var3 = _closure2_slot0;
                        var4 = undefined;
                        var3 = var6.bind(var4)(var3);
                        var3 = _closure2_slot3;
                        var3 = var3.current;
                        if(!(var5 === var3)) { _fun0003_ip = 115; continue _fun0003 }
 57:
                        var3 = _closure1_slot5;
                        var2 = '@discordapp/tokens/typography/generated/noto-sans/notosans-700-bold.ttf';
                        var2 = var3.bind(var4)(var2);
                        _fun0003_ip = 115; continue _fun0003;
 74:
                        var3 = _closure1_slot6;
                        var4 = _closure1_slot4;
                        var1 = _closure2_slot0;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var1);
                        var1 = ['fontSource:null'];
                        var1[1] = var4;
                        var1 = var3.bind(var2)(var1);
 115:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 500;
                var2 = var2 * var6;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var7 = var10.bind(var9)(var7, var8);
            var8 = var9.useEffect;
            var7 = function() {
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot2;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0004_ip = 28; continue _fun0004 }
 18:
                        var3 = var4.dispose;
                        var3 = var3.bind(var4)();
 28:
                        var2 = _closure2_slot3;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0004_ip = 51; continue _fun0004 }
 41:
                        var1 = var2.dispose;
                        var1 = var1.bind(var2)();
 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var6 = new Array(0);
            var6 = var8.bind(var9)(var7, var6);
            var5['current'] = var2;
            var4['current'] = var1;
            if(!(var3 !== var2)) { _fun0002_ip = 202; continue _fun0002 }
 199:
            var1 = var2;
 202:
            return var1;
        }
    };
    var3['useLoadFont'] = var2;
    return var1;
})();