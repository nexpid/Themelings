// app/modules/guild_role_subscriptions/native/components/ShinyButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 4;
    var9['marginRight'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['tintColor'] = var10;
    var4['sparkleIcon'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['disabled'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/ShinyButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ShinyButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.style;
            var8 = var3.loading;
            var11 = var3.disabled;
            var6 = var3.onPress;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = function c() {
                var1 = undefined;
                return var1;
            };
case 2:
            var2 = {'style': 0, 'loading': 0, 'disabled': 0, 'onPress': 0};
            var16 = null;
            var17 = var2;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var3;
            var15 = var2;
            var5 = copyDataProperties(var17, var16, var15);
            var1 = _closure1_slot4;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseTextButton;
            var1 = {};
            var1['onPress'] = var6;
            var10 = var12.container;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var9;
            var1['pillStyle'] = var6;
            var1['loading'] = var8;
            var1['disabled'] = var11;
            var6 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot3;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 5;
            var7 = var14[var10];
            var8 = var13.bind(var4)(var7);
            var7 = {};
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.REFRESH_SMALL_16;
            var7['size'] = var10;
            var10 = 6;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var7['source'] = var10;
            var13 = var12.sparkleIcon;
            var10 = new Array(2);
            var10[0] = var13;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var12.disabled;
case 6:
            var10[1] = var11;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var1['icon'] = var6;
            var17 = var1;
            var16 = var5;
            var5 = copyDataProperties(var17, var16);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();