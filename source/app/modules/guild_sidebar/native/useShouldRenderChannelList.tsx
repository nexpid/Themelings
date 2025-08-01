// app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot6 = var4;
    var4 = false;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/useShouldRenderChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldRenderChannelList() {
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = _closure1_slot7;
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var4[var1];
        var _closure2_slot0 = var1;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var9 = function allowRender() {
                    var3 = true;
                    _closure1_slot7 = var3;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var _closure3_slot0 = var9;
                var7 = function handleGatewayChange() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure1_slot5;
                        var1 = var2.isConnected;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0002_ip = 33; continue _fun0002 }
 20:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot1 = var7;
                var6 = function handleCacheChange() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure1_slot4;
                        var1 = var2.getLazyCacheStatus;
                        var2 = var1.bind(var2)();
                        var1 = 'cache-loaded';
                        if(!(var1 === var2)) { _fun0003_ip = 40; continue _fun0003 }
 27:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot2 = var6;
                var5 = function handleNavigationChange() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 5;
                        var2 = var6[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.coerceGuildsRoute;
                        var2 = 6;
                        var2 = var6[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getRootNavigationRef;
                        var7 = var2.bind(var3)();
                        var3 = null;
                        var6 = var3 == var7;
                        var2 = undefined;
                        if(var6) { _fun0004_ip = 74; continue _fun0004 }
 64:
                        var6 = var7.getCurrentRoute;
                        var2 = var6.bind(var7)();
 74:
                        var2 = var4.bind(var5)(var2);
                        if(!(var3 != var2)) { _fun0004_ip = 94; continue _fun0004 }
 83:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
 94:
                        return var1;
                    }
                };
                var _closure3_slot3 = var5;
                var2 = _closure2_slot0;
                if(var2) { _fun0001_ip = 195; continue _fun0001 }
 59:
                var4 = _closure1_slot5;
                var3 = var4.addReactChangeListener;
                var3 = var3.bind(var4)(var7);
                var4 = _closure1_slot4;
                var3 = var4.addReactChangeListener;
                var3 = var3.bind(var4)(var6);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var7 = var6[var3];
                var3 = undefined;
                var7 = var4.bind(var3)(var7);
                var8 = var7.ComponentDispatch;
                var7 = var8.subscribe;
                var2 = _closure1_slot6;
                var2 = var2.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                var2 = var7.bind(var8)(var2, var9);
                var2 = 6;
                var2 = var6[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 186; continue _fun0001 }
 170:
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
 186:
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = _closure1_slot5;
                        var4 = var5.removeReactChangeListener;
                        var1 = _closure3_slot1;
                        var1 = var4.bind(var5)(var1);
                        var5 = _closure1_slot4;
                        var4 = var5.addReactChangeListener;
                        var1 = _closure3_slot2;
                        var1 = var4.bind(var5)(var1);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 7;
                        var6 = var5[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var6);
                        var8 = var6.ComponentDispatch;
                        var7 = var8.unsubscribe;
                        var3 = _closure1_slot6;
                        var6 = var3.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                        var3 = _closure3_slot0;
                        var3 = var7.bind(var8)(var6, var3);
                        var3 = 6;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var5 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var5)) { _fun0005_ip = 146; continue _fun0005 }
 126:
                        var4 = var5.removeListener;
                        var3 = _closure3_slot3;
                        var2 = 'state';
                        var2 = var4.bind(var5)(var2, var3);
 146:
                        return var1;
                    }
                };
                return var1;
 195:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useShouldRenderChannelList'] = var2;
    return var1;
})();