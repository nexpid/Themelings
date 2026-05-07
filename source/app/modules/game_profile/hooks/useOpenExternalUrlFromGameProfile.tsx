// app/modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = /^\/app\/(\d+)(?:\/)?/;
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenExternalUrlFromGameProfile(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = function useIsProtocolRegistered(arg1) {
            var6 = 'steam';
            var _closure3_slot0 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useState;
            var3 = false;
            var7 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = undefined;
            var1 = 2;
            var4 = var4.bind(var3)(var7, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure3_slot1 = var3;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.isProtocolRegistered;
                var3 = _closure3_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = var4.then;
                var2 = _closure3_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var3 = undefined;
        var2 = 'steam';
        var5 = var4.bind(var3)(var2);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var9 = var3;
                var1 = undefined;
                var6 = undefined;
                var11 = undefined;
                var7 = undefined;
                var2 = undefined;
                var8 = null;
                if(!(var8 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                var4 = global;
                var12 = var4.URL;
                var17 = var9;
                var10 = var12.prototype;
                var10 = Object.create(var10, {constructor: {value: var12}});
                var18 = var10;
                var3 = new var18[var12](var17, var16);
                var6 = var3 instanceof Object ? var3 : var10;
case 4: // try_end0
                var3 = var6;
                var10 = var3.hostname;
                var3 = 'store.steampowered.com';
                if(!(var3 === var10)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var10 = _closure2_slot1;
                if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 7:
                var10 = var6;
                var13 = var10.pathname;
                var12 = var13.match;
                var10 = _closure1_slot4;
                var10 = var12.bind(var13)(var10);
                var11 = var10;
                var12 = var8 == var10;
                var10 = undefined;
                if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var12 = var11;
                var11 = 1;
                var10 = var12[var11];
case 8:
                var7 = var10;
                if(!(var8 == var10)) { _fun0001_ip = 10; continue _fun0001 }
case 5:
                var11 = var6;
                var14 = var11.searchParams;
                var13 = var14.set;
                var12 = 'utm_source';
                var10 = 'discord';
                var10 = var13.bind(var14)(var12, var10);
                var10 = var11.toString;
                var9 = var10.bind(var11)();
                var11 = _closure2_slot0;
                if(!(var8 == var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 3;
                var11 = var13[var11];
                var12 = var12.bind(var1)(var11);
                var11 = var9;
                var11 = var12.bind(var1)(var11);
                _fun0001_ip = 2; continue _fun0001;
case 11:
                var10 = _closure2_slot0;
                var9 = var10.bind(var1)(var9);
case 2:
                return var1;
case 10:
                var12 = var7;
                var7 = var4.HermesInternal;
                var11 = var7.concat;
                var10 = '';
                var9 = 'steam';
                var7 = '://store/';
                var2 = var11.bind(var10)(var9, var7, var12);
                var7 = _closure2_slot0;
                if(!(var8 == var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var7 = var6;
                var10 = var7.searchParams;
                var9 = var10.set;
                var8 = 'utm_source';
                var6 = 'discord';
                var6 = var9.bind(var10)(var8, var6);
                var6 = var7.toString;
                var6 = var6.bind(var7)();
                var _closure3_slot0 = var6;
                var8 = var4.setTimeout;
                var7 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var6 = 2500;
                var6 = var8.bind(var1)(var7, var6);
                var _closure3_slot1 = var6;
                var9 = var4.window;
                var8 = var9.addEventListener;
                var7 = {};
                var6 = true;
                var7['once'] = var6;
                var6 = 'blur';
                var5 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var8.bind(var9)(var6, var5, var7);
                var4 = var4.window;
                var5 = var4.location;
                var4 = var2;
                var5['href'] = var4;
                var4 = undefined;
                return var4;
case 13:
                var3 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                var2 = undefined;
                return var2;
case 15: // catch_target0
                CatchBlockStart(arg_register=1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();