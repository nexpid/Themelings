// discord_common/js/packages/design/components/Icon/getIconSize.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var2 = {'xxs': 12, 'xs': 16, 'sm': 18, 'md': 24, 'lg': 32, 'custom': null, 'refresh_sm': 20};
    var1 = undefined;
    var2['custom'] = var1;
    var _closure1_slot0 = var2;
    var6 = native7;
    var5 = 0;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/design/components/Icon/getIconSize.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getIconSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = 'custom';
            if(!(var1 !== var2)) { _fun0001_ip = 34; continue _fun0001 }
 11:
            var1 = _closure1_slot0;
            var2 = var1[var2];
            var1 = {};
            var1['width'] = var2;
            var1['height'] = var2;
            return var1;
 34:
            var1 = null;
            return var1;
        }
    };
    var3['getIconSize'] = var4;
    var3['ICON_SIZE'] = var2;
    return var1;
})();