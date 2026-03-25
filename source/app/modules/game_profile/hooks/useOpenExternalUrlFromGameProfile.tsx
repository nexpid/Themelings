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
    var4 = 3;
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
                var4 = arg1;
                var2 = var4;
                var1 = undefined;
                var5 = undefined;
                var7 = undefined;
                var3 = undefined;
                var6 = null;
                if(!(var6 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                var4 = global;
                var10 = var4.URL;
                var15 = var2;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var16 = var9;
                var8 = new var16[var10](var15, var14);
                var5 = var8 instanceof Object ? var8 : var9;
case 4: // try_end0
                var8 = var5;
                var9 = var8.hostname;
                var8 = 'store.steampowered.com';
                if(!(var8 === var9)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var8 = _closure2_slot1;
                if(var8) { _fun0001_ip = 7; continue _fun0001 }
case 5:
                var9 = var5;
                var12 = var9.searchParams;
                var11 = var12.set;
                var10 = 'utm_source';
                var8 = 'discord';
                var8 = var11.bind(var12)(var10, var8);
                var8 = var9.toString;
                var2 = var8.bind(var9)();
                _fun0001_ip = 8; continue _fun0001;
case 7:
                var9 = var5.pathname;
                var8 = var9.match;
                var5 = _closure1_slot4;
                var5 = var8.bind(var9)(var5);
                var7 = var5;
                var8 = var6 == var5;
                var5 = undefined;
                if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var8 = var7;
                var7 = 1;
                var5 = var8[var7];
case 9:
                var3 = var5;
                if(!(var6 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
                var9 = var3;
                var3 = var4.HermesInternal;
                var8 = var3.concat;
                var7 = '';
                var5 = 'steam';
                var3 = '://store/';
                var2 = var8.bind(var7)(var5, var3, var9);
case 8:
                var5 = _closure2_slot0;
                if(!(var6 == var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var8 = var4.window;
                var7 = var8.open;
                var6 = var2;
                var5 = '_blank';
                var4 = 'noreferrer noopener';
                var4 = var7.bind(var8)(var6, var5, var4);
                _fun0001_ip = 2; continue _fun0001;
case 12:
                var3 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
case 2:
                return var1;
case 14: // catch_target0
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