// app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'paddingVertical': 12, 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'marginEnd': 27, 'flex': 3};
    var4['message'] = var9;
    var9 = {'flexGrow': 0, 'alignSelf': 'center'};
    var4['actionButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
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
            var15 = var1.message;
            var10 = var1.ctaMessage;
            var13 = var1.onClick;
            var11 = var1.submitting;
            var12 = var1.disabled;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var8.container;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot3;
            var9 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 4;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var16 = var8.message;
            var5['style'] = var16;
            var5['children'] = var15;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var8 = var8.actionButton;
            var6['style'] = var8;
            var8 = 5;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Button;
            var8 = {};
            var14 = 'sm';
            var8['size'] = var14;
            var8['onPress'] = var13;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var12;
case 4:
            var8['disabled'] = var11;
            var8['text'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();