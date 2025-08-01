// app/modules/guild_role_subscriptions/native/components/FormSeparator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'stretch';
    var9['alignSelf'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 16;
    var9['marginTop'] = var10;
    var4['margins'] = var9;
    var9 = {'width': '100%', 'height': 1};
    var10 = 4;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var10;
    var4['separator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormSeparator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSeparator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.style;
            var10 = var1.withoutMargins;
            var1 = _closure1_slot2;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var9 = var8.container;
            var6 = new Array(3);
            var6[0] = var9;
            var9 = undefined;
            if(var10) { _fun0001_ip = 61; continue _fun0001 }
 55:
            var9 = var8.margins;
 61:
            var6[1] = var9;
            var6[2] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot1;
            var6 = _closure1_slot0;
            var5 = {};
            var8 = var8.separator;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();