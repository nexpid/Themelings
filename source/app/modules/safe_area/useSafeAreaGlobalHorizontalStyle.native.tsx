// app/modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function shouldExcludeSafeAreaForModalKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.isVoiceChannelModalKey;
            var2 = var2.bind(var4)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot5;
            var3 = var4.has;
            var2 = var3.bind(var4)(var5);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var10 = var7[var1];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var10);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var12 = var8.MEDIA_MODAL_KEY;
    var8 = 3;
    var8 = var7[var8];
    var9 = var6.bind(var1)(var8);
    var11 = var9.OAUTH2_AUTHORIZE_MODAL_KEY;
    var8 = var9.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var10 = var9.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var9 = var5.Set;
    var5 = new Array(4);
    var5[0] = var12;
    var5[1] = var11;
    var5[2] = var10;
    var5[3] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var16 = var8;
    var15 = var5;
    var5 = new var16[var9](var15, var14);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot5 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useSafeAreaGlobalHorizontalStyle() {
        var5 = _closure1_slot4;
        var4 = undefined;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.shouldDisableSafeAreas;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var5.bind(var4)(var3);
        var _closure2_slot0 = var7;
        var5 = _closure1_slot6;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 5;
        var3 = var9[var3];
        var6 = var6.bind(var4)(var3);
        var3 = var6.useOpenModalKey;
        var3 = var3.bind(var6)();
        var6 = var5.bind(var4)(var3);
        var _closure2_slot1 = var6;
        var8 = _closure1_slot1;
        var3 = 6;
        var3 = var9[var3];
        var10 = var8.bind(var4)(var3);
        var5 = var10.useConfig;
        var3 = {};
        var11 = 'useSafeAreaGlobalHorizontalStyle';
        var3['location'] = var11;
        var3 = var5.bind(var10)(var3);
        var5 = var3.enabled;
        var _closure2_slot2 = var5;
        var3 = 7;
        var3 = var9[var3];
        var3 = var8.bind(var4)(var3);
        var8 = var3.bind(var4)();
        var _closure2_slot3 = var8;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = !var1;
                if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = _closure2_slot2;
                var4 = !var1;
case 6:
                if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = _closure2_slot1;
                var4 = !var1;
case 8:
                var1 = {};
                var5 = undefined;
                if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var6 = _closure2_slot3;
                var5 = var6.right;
case 10:
                var1['paddingRight'] = var5;
                var2 = undefined;
                if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var3 = _closure2_slot3;
                var2 = var3.left;
case 12:
                var1['paddingLeft'] = var2;
                var2 = 1;
                var1['flex'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['shouldExcludeSafeAreaForModalKey'] = var4;
    var2 = function useLocalHorizontalSafeArea() {
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 6;
        var3 = var7[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var6 = var8.useConfig;
        var3 = {};
        var9 = 'useLocalHorizontalSafeArea';
        var3['location'] = var9;
        var3 = var6.bind(var8)(var3);
        var6 = var3.enabled;
        var _closure2_slot0 = var6;
        var3 = 7;
        var3 = var7[var3];
        var3 = var5.bind(var4)(var3);
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = var5.left;
        var2[1] = var6;
        var5 = var5.right;
        var2[2] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var1 = {'left': 0, 'right': 0};
                _fun0003_ip = 16; continue _fun0003;
case 14:
                var2 = {};
                var3 = _closure2_slot1;
                var4 = var3.left;
                var2['left'] = var4;
                var3 = var3.right;
                var2['right'] = var3;
                var1 = var2;
case 16:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useLocalHorizontalSafeArea'] = var2;
    return var1;
})();