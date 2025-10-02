// app/actions/native/BundleUpdaterActionCreators.tsx
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
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot3 = var2;
    var2 = false;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function prepareUpdate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 1;
            var1 = var10[var1];
            var9 = undefined;
            var4 = var3.bind(var9)(var1);
            var3 = var4.show;
            var1 = {};
            var8 = _closure1_slot0;
            var5 = 2;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var11 = var6.intl;
            var7 = var11.string;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.GQZdmJ;
            var6 = var7.bind(var11)(var6);
            var1['title'] = var6;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var11 = var6.intl;
            var7 = var11.string;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.Fizu9/;
            var6 = var7.bind(var11)(var6);
            var1['body'] = var6;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var11 = var6.intl;
            var7 = var11.string;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.UefCDQ;
            var6 = var7.bind(var11)(var6);
            var1['confirmText'] = var6;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.1SzcGx;
            var5 = var6.bind(var7)(var5);
            var1['cancelText'] = var5;
            var5 = function onConfirm() {
                var1 = _closure1_slot3;
                var2 = var1.BundleUpdaterManager;
                var1 = var2.reload;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['onConfirm'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = true;
            _closure1_slot4 = var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var2['prepareUpdate'] = var7;
    var4 = function deferUpdate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot4;
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = false;
            _closure1_slot4 = var2;
            var1 = _closure1_slot3;
            var2 = var1.BundleUpdaterManager;
            var1 = var2.reload;
            var1 = var1.bind(var2)();
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var2['deferUpdate'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/BundleUpdaterActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();