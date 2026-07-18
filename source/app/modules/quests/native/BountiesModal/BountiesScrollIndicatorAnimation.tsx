// app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'width': 80, 'height': 80};
        var1['container'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesScrollIndicatorAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.visible;
            var9 = var2.isFadingInContent;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useToken;
            var8 = _closure1_slot1;
            var2 = 6;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.TEXT_DEFAULT;
            var10 = var3.bind(var7)(var2);
            var14 = _closure1_slot4;
            var2 = var14.useState;
            var8 = 0;
            var2 = var2.bind(var14)(var8);
            var13 = _closure1_slot3;
            var12 = 2;
            var2 = var13.bind(var4)(var2, var12);
            var7 = var2[var8];
            var11 = 1;
            var2 = var2[var11];
            var3 = var14.useState;
            var3 = var3.bind(var14)(var1);
            var3 = var13.bind(var4)(var3, var12);
            var8 = var3[var8];
            var3 = var3[var11];
            if(!(var1 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 2:
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountiesScrollIndicatorRive;
            var5 = {'stateMachine': 'State Machine 1', 'fit': 'contain'};
            var8 = {};
            var8['color'] = var10;
            var9 = !var9;
            var8['startAnimation'] = var9;
            var5['dataBinding'] = var8;
            var5 = var3.bind(var4)(var6, var5, var7);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();