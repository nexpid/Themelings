// app/utils/native/requireNativeComponentOrDefault.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var8 = var7.requireNativeComponent;
    var _closure1_slot0 = var8;
    var8 = var7.UIManager;
    var _closure1_slot1 = var8;
    var7 = var7.View;
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportDefault;
    var9 = var7.bind(var1)(var8);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var12 = 'RequireNativeComponentOrDefault';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot3 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/requireNativeComponentOrDefault.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function requireNativeComponentOrDefault(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.componentName;
            var6 = var1.componentFoundInstance;
            var3 = var1.componentMissingFallbackInstance;
            var8 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
case 2:
            var5 = var1.warnWhenMissing;
            if(!(var5 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = true;
case 4:
            var7 = _closure1_slot1;
            var1 = var7.hasViewManagerConfig;
            var1 = var1.bind(var7)(var4);
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot3;
            var7 = var9.warn;
            var5 = global;
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var10 = '';
            var5 = ' not found, you are likely on a branch override without the native code.';
            var5 = var11.bind(var10)(var4, var5);
            var5 = var7.bind(var9)(var5);
            var1 = var3;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = _closure1_slot4;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot4;
            var3 = var5.set;
            var7 = null;
            if(!(var7 == var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot0;
            var6 = var7.bind(var8)(var4);
case 12:
            var3 = var3.bind(var5)(var4, var6);
case 10:
            var3 = _closure1_slot4;
            var2 = var3.get;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();