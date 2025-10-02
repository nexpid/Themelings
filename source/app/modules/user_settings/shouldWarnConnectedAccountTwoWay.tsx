// app/modules/user_settings/shouldWarnConnectedAccountTwoWay.tsx
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
    var7 = var7.PlatformTypes;
    var8 = var4.Set;
    var9 = var7.XBOX;
    var4 = new Array(4);
    var4[0] = var9;
    var9 = var7.PLAYSTATION;
    var4[1] = var9;
    var9 = var7.PLAYSTATION_STAGING;
    var4[2] = var9;
    var7 = var7.CRUNCHYROLL;
    var4[3] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/shouldWarnConnectedAccountTwoWay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldWarnConnectedAccountTwoWay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = var4.has;
            var1 = var2.type;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.twoWayLink;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();