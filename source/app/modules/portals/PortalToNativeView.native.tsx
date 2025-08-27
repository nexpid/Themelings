// app/modules/portals/PortalToNativeView.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var7 = var4.requireNativeComponent;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 'PortalToNativeView';
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'absolute', 'opacity': 0, 'height': 0, 'right': 0, 'left': 0, 'top': 0};
    var4['portal'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/portals/PortalToNativeView.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PortalToNativeView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.portalId;
            var1 = var1.children;
            var2 = null;
            if(!(var2 == var6)) { _fun0001_ip = 102; continue _fun0001 }
 20:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.addBreadcrumb;
            var2 = {};
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var7 = "portalId is '";
            var5 = "'";
            var5 = var8.bind(var7)(var6, var5);
            var2['message'] = var5;
            var5 = 'PortalToNativeView';
            var2['category'] = var5;
            var2 = var3.bind(var4)(var2);
 102:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = 'none';
            var2['pointerEvents'] = var7;
            var2['portalId'] = var6;
            var5 = _closure1_slot4;
            var5 = var5.portal;
            var2['style'] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();