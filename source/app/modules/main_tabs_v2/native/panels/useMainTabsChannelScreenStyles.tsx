// app/modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx
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
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 3;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.shadows;
    var13 = var10.SHADOW_LOW;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var4['elevation'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useMainTabsChannelScreenStylesTsx1(){const{isDragging,translateX,maxWidth,elevationStyle}=this.__closure;const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0};}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMainTabsChannelScreenStyles(arg1, arg2, arg3) {
        var11 = arg1;
        var10 = arg2;
        var9 = arg3;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var9;
        var3 = _closure1_slot3;
        var5 = undefined;
        var6 = var3.bind(var5)();
        var _closure2_slot3 = var6;
        var8 = var6.elevation;
        var _closure2_slot4 = var8;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 4;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useAnimatedStyle;
        var3 = function u() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var4 = var1.bind(var2)();
                if(var4) { _fun0001_ip = 65; continue _fun0001 }
 19:
                var2 = _closure2_slot1;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var1 !== var2;
                if(!var1) { _fun0001_ip = 62; continue _fun0001 }
 41:
                var5 = _closure2_slot1;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = _closure2_slot2;
                var1 = var5 !== var2;
 62:
                var4 = var1;
 65:
                var1 = {};
                var5 = {};
                var6 = _closure2_slot1;
                var2 = var6.get;
                var2 = var2.bind(var6)();
                var5['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var1['transform'] = var2;
                var5 = 0;
                if(!var4) { _fun0001_ip = 114; continue _fun0001 }
 104:
                var6 = _closure2_slot4;
                var5 = var6.shadowOpacity;
 114:
                var1['shadowOpacity'] = var5;
                var2 = 0;
                if(!var4) { _fun0001_ip = 134; continue _fun0001 }
 124:
                var3 = _closure2_slot4;
                var2 = var3.elevation;
 134:
                var1['elevation'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['isDragging'] = var11;
        var7['translateX'] = var10;
        var7['maxWidth'] = var9;
        var7['elevationStyle'] = var8;
        var3['__closure'] = var7;
        var7 = 9545011275058.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot4;
        var3['__initData'] = var7;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot5 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = _closure2_slot3;
            var3 = var1.elevation;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = _closure2_slot5;
            var1[1] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useMainTabsChannelScreenStyles'] = var2;
    return var1;
})();