// app/design/components/ContextMenu/native/ContextMenuConstants.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = global;
        var7 = var1.Object;
        var4 = var7.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var7)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var2 = var4.isIOS;
        var2 = var2.bind(var4)();
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.HapticFeedbackTypes;
        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = var4.IMPACT_MEDIUM;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var2 = var4.IMPACT_HEAVY;
case 4:
        var4 = 2;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'design/components/ContextMenu/native/ContextMenuConstants.native.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = 300;
        var3['CONTEXT_MENU_LONG_PRESS_DURATION_MS'] = var4;
        var3['CONTEXT_MENU_OPEN_HAPTIC'] = var2;
        var2 = 12;
        var3['CONTEXT_MENU_ITEM_PADDING'] = var2;
        var4 = 42;
        var3['CONTEXT_MENU_ITEM_BASE_HEIGHT'] = var4;
        var4 = 4;
        var3['CONTEXT_MENU_DIVIDER_HEIGHT'] = var4;
        var3['CONTEXT_MENU_EDGE_OFFSET'] = var2;
        var2 = 220;
        var3['CONTEXT_MENU_MIN_WIDTH'] = var2;
        var2 = 10;
        var3['CONTEXT_MENU_OFFSET'] = var2;
        var2 = 0.5;
        var3['CONTEXT_MENU_MIN_SCALE'] = var2;
        var2 = {'mass': 0.3, 'damping': 20, 'stiffness': 200, 'overshootClamping': true, 'restDisplacementThreshold': 0.001};
        var3['CONTEXT_MENU_SPRING'] = var2;
        return var1;
    }
})();