// app/modules/double_tap_to_react/native/DoubleTapChatInputBannerStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = function handleShowBanner(arg1) {
        var1 = arg1;
        var2 = var1.emoji;
        var3 = true;
        _closure1_slot8 = var3;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var10 = function handleHideBanner() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var10;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = false;
    var _closure1_slot8 = var4;
    var4 = null;
    var _closure1_slot9 = var4;
    var4 = 80;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function DoubleTapChatInputBannerStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'shouldShow';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'bannerEmoji';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'bannerHeight';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'DoubleTapChatInputBannerStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var4['SHOW_DOUBLE_TAP_TO_REACT_BANNER'] = var2;
    var4['HIDE_DOUBLE_TAP_TO_REACT_BANNER'] = var10;
    var10 = function handleAutoHideBanner() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot8;
            var1 = false;
            if(!(var1 !== var2)) { _fun0003_ip = 66; continue _fun0003 }
 13:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.markDoubleTapDismissed;
            var4 = _closure1_slot7;
            var4 = var4.AUTO_DISMISS;
            var4 = var5.bind(var6)(var4);
            var3 = _closure1_slot12;
            var3 = var3.bind(var2)();
            return var2;
 66:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var10;
    var5 = function handleUpdateBannerHeight(arg1) {
        var1 = arg1;
        var2 = var1.height;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var4['UPDATE_DOUBLE_TAP_TO_REACT_BANNER_HEIGHT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/double_tap_to_react/native/DoubleTapChatInputBannerStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleShowBanner'] = var2;
    return var1;
})();