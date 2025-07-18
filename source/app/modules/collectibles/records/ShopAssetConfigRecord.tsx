// app/modules/collectibles/records/ShopAssetConfigRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var2 = var2.desktop_max_height;
            var3['desktopMaxHeight'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var3 = 'toDesktopStyles';
        var1['key'] = var3;
        var3 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var3 = var2.desktopMaxHeight;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 19; continue _fun0001 }
 15:
                var1 = undefined;
                return var1;
 19:
                var1 = {};
                var2 = var2.desktopMaxHeight;
                var1['maxHeight'] = var2;
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(1);
        var3[0] = var1;
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
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/ShopAssetConfigRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AssetDisplayConfigRecord'] = var2;
    return var1;
})();