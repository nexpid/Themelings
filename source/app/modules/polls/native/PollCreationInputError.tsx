// app/modules/polls/native/PollCreationInputError.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 4294967286};
    var4['container'] = var9;
    var9 = {'alignSelf': 'center', 'marginRight': 5};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DANGER;
    var9['color'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/PollCreationInputError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PollCreationInputError(arg1) {
        var2 = arg1;
        var9 = var2.message;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot7;
        var4 = undefined;
        var11 = var2.bind(var4)();
        var5 = _closure1_slot3;
        var3 = var5.useEffect;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var3 = '';
                var2 = var3 !== var4;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.AccessibilityAnnouncer;
                var2 = var3.announce;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var11.container;
        var1['style'] = var5;
        var8 = _closure1_slot5;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var5 = 6;
        var5 = var10[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {'width': 16, 'height': 16};
        var11 = var11.icon;
        var5['style'] = var11;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot0;
        var6 = 7;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();