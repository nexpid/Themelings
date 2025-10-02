// app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
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
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'paddingVertical': 12, 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'marginEnd': 27, 'flex': 3};
    var4['message'] = var9;
    var9 = {'flexGrow': 0, 'paddingHorizontal': 16, 'height': 32, 'alignSelf': 'center'};
    var4['actionButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/ActionableNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActionableNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var13 = var1.message;
            var9 = var1.ctaMessage;
            var12 = var1.onClick;
            var10 = var1.submitting;
            var11 = var1.disabled;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var1 = _closure1_slot6;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var16.container;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 4;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var14 = var16.message;
            var5['style'] = var14;
            var5['children'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var14 = _closure1_slot1;
            var13 = 5;
            var6 = var15[var13];
            var7 = var14.bind(var4)(var6);
            var6 = {};
            var16 = var16.actionButton;
            var6['style'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Colors;
            var13 = var13.BRAND;
            var6['color'] = var13;
            var6['onPress'] = var12;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var11;
case 4:
            var6['disabled'] = var10;
            var6['text'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();