// app/modules/collectibles/records/ShopAssetConfigRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var5 = function AssetDisplayConfigRecord(arg1) {
            var2 = arg1;
            var3 = this;
            var5 = _closure1_slot0;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = var2.desktop_max_height;
            var3['desktopMaxHeight'] = var4;
            var4 = var2.mobile_max_height;
            var3['mobileMaxHeight'] = var4;
            var4 = var2.responsive;
            var3['responsive'] = var4;
            var2 = var2.background_style;
            var3['backgroundStyle'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var3 = 'toDesktopStyles';
        var1['key'] = var3;
        var3 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var2 = {};
                var3 = var1.desktopMaxHeight;
                var4 = null;
                if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var1.desktopMaxHeight;
                var2['maxHeight'] = var3;
case 2:
                var3 = var1.backgroundStyle;
                if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var1.backgroundStyle;
                var2['background'] = var1;
case 4:
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var1 = var1.bind(var3)(var2);
                var3 = var1.length;
                var1 = 0;
                var3 = var3 > var1;
                var1 = undefined;
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'toMobileStyles';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var2 = {};
                var3 = var1.mobileMaxHeight;
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var3 = var1.mobileMaxHeight;
                var2['maxHeight'] = var3;
case 2:
                var3 = var1.backgroundStyle;
                if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = var1.backgroundStyle;
                var2['background'] = var1;
case 4:
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var1 = var1.bind(var3)(var2);
                var3 = var1.length;
                var1 = 0;
                var3 = var3 > var1;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var3 = _closure2_slot0;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/ShopAssetConfigRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AssetDisplayConfigRecord'] = var2;
    return var1;
})();