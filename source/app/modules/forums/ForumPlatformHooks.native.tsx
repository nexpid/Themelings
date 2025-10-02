// app/modules/forums/ForumPlatformHooks.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot3 = var2;
    var2 = {};
    var4 = function useForumChannelSeenManager(arg1) {
        var1 = arg1;
        var7 = var1.guildId;
        var _closure2_slot0 = var7;
        var8 = var1.channelId;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot3;
        var3 = var5.useRef;
        var1 = null;
        var1 = var3.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var6 = var5.useCallback;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.getRootNavigationRef;
                var5 = var2.bind(var4)();
                var2 = null;
                if(!(var2 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var5.isReady;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var4 = var5.getCurrentRoute;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.coerceChannelRoute;
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var3 = var3.params;
                var5 = var3.channelId;
                var3 = _closure2_slot1;
                var4 = var5 === var3;
case 5:
                var3 = _closure2_slot2;
                var3 = var3.current;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var2 = var3.handleReactNavigationFocus;
                var2 = var2.bind(var3)(var4);
case 2:
                return var1;
            }
        };
        var6 = var6.bind(var5)(var3, var4);
        var _closure2_slot3 = var6;
        var4 = var5.useEffect;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getRootNavigationRef;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var3 = null;
                if(!(var3 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = var5.isReady;
                var3 = var3.bind(var5)();
                if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 8:
                return var2;
case 10:
                var4 = var5.addListener;
                var3 = _closure2_slot3;
                var2 = 'state';
                var2 = var4.bind(var5)(var2, var3);
                var1 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure2_slot3;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var4 = var5.useLayoutEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            var3 = _closure2_slot2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var4 = {};
            var5 = _closure2_slot0;
            var4['guildId'] = var5;
            var5 = _closure2_slot1;
            var4['channelId'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var7 = var4;
            var4 = new var8[var6](var7, var6);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['current'] = var4;
            var4 = var3.current;
            var3 = var4.initialize;
            var3 = var3.bind(var4)();
            var1 = _closure2_slot3;
            var1 = var1.bind(var2)();
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = var4.terminate;
                    var3 = var3.bind(var4)();
case 11:
                    var1 = _closure2_slot2;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1 = var1.current;
        return var1;
    };
    var2['useForumChannelSeenManager'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumPlatformHooks.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();