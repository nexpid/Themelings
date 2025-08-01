// app/modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.clearSelectedSearchResult;
    var _closure1_slot3 = var7;
    var4 = var4.useSelectedSearchResult;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RendererType;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoScrollToSearchResultSetting(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var10;
            var4 = _closure1_slot4;
            var1 = undefined;
            var6 = var4.bind(var1)();
            var _closure2_slot2 = var6;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 5;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.useNavigation;
            var7 = var4.bind(var5)();
            var _closure2_slot3 = var7;
            var4 = null;
            var4 = var4 == var6;
            var9 = false;
            if(var4) { _fun0001_ip = 180; continue _fun0001 }
 78:
            var5 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 3;
            var4 = var12[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.SETTING_RENDERER_CONFIG;
            var4 = var4[var6];
            var5 = var4.type;
            var4 = _closure1_slot5;
            var4 = var4.ROUTE;
            var9 = false;
            if(!(var5 !== var4)) { _fun0001_ip = 180; continue _fun0001 }
 129:
            var5 = _closure1_slot0;
            var11 = _closure1_slot1;
            var4 = 4;
            var4 = var11[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getInitialScrollIndex;
            var11 = var4.bind(var5)(var6, var10);
            var4 = 0;
            var4 = var4 !== var11;
            if(!var4) { _fun0001_ip = 177; continue _fun0001 }
 170:
            var5 = 1;
            var4 = var5 !== var11;
 177:
            var9 = var4;
 180:
            var _closure2_slot4 = var9;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(5);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var2 = function() {
                var5 = _closure2_slot3;
                var4 = var5.addListener;
                var3 = 'transitionEnd';
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0002_ip = 124; continue _fun0002 }
 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var5 = var6.getInitialScrollIndex;
                        var4 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var5 = var5.bind(var6)(var4, var2);
                        var6 = null;
                        if(!(var6 != var5)) { _fun0002_ip = 128; continue _fun0002 }
 61:
                        var2 = _closure2_slot0;
                        var2 = var6 == var2;
                        var4 = undefined;
                        if(var2) { _fun0002_ip = 90; continue _fun0002 }
 74:
                        var3 = _closure2_slot0;
                        var3 = var3.current;
                        var2 = var6 == var3;
                        var4 = var3;
 90:
                        if(var2) { _fun0002_ip = 124; continue _fun0002 }
 93:
                        var3 = var4.scrollToIndex;
                        var2 = {'index': null, 'animated': false, 'viewOffset': 300};
                        var2['index'] = var5;
                        var2 = var3.bind(var4)(var2);
 124:
                        var2 = undefined;
                        return var2;
 128:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useAutoScrollToSearchResultSetting'] = var2;
    return var1;
})();