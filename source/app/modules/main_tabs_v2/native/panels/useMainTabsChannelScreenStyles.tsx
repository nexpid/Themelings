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
    var7 = 'function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMainTabsChannelScreenStyles(arg1, arg2, arg3, arg4, arg5) {
        var12 = arg1;
        var11 = arg2;
        var10 = arg3;
        var8 = arg4;
        var13 = arg5;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var11;
        var _closure2_slot2 = var10;
        var _closure2_slot3 = var8;
        var _closure2_slot4 = var13;
        var3 = _closure1_slot3;
        var5 = undefined;
        var6 = var3.bind(var5)();
        var _closure2_slot5 = var6;
        var9 = var6.elevation;
        var _closure2_slot6 = var9;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 4;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useAnimatedStyle;
        var3 = function c() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot4;
                var5 = null;
                if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var1 = var1.bind(var2)();
case 2:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var6 = var1.bind(var2)();
                if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot1;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var1 !== var2;
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure2_slot1;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot2;
                var1 = var3 !== var2;
case 6:
                var6 = var1;
case 4:
                var1 = {};
                var3 = {};
                var7 = _closure2_slot1;
                var2 = var7.get;
                var2 = var2.bind(var7)();
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                var2 = 0;
                if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var7 = _closure2_slot6;
                var2 = var7.shadowOpacity;
case 8:
                var1['shadowOpacity'] = var2;
                var2 = 0;
                if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var6 = _closure2_slot6;
                var2 = var6.elevation;
case 10:
                var1['elevation'] = var2;
                var2 = _closure2_slot3;
                var6 = var5 != var2;
                var5 = 1;
                var2 = var5;
                if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var6 = _closure2_slot3;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                var2 = var5;
                if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                var2 = 0;
case 12:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['freezeValue'] = var13;
        var7['isDragging'] = var12;
        var7['translateX'] = var11;
        var7['maxWidth'] = var10;
        var7['elevationStyle'] = var9;
        var7['isCompletelyCovered'] = var8;
        var3['__closure'] = var7;
        var7 = 16765484569296.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot4;
        var3['__initData'] = var7;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot7 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = _closure2_slot5;
            var3 = var1.elevation;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = _closure2_slot7;
            var1[1] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useMainTabsChannelScreenStyles'] = var2;
    return var1;
})();