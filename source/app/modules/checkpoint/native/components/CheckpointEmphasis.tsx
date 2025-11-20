// app/modules/checkpoint/native/components/CheckpointEmphasis.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.useContext;
        var _closure1_slot2 = var4;
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
        var9 = {'transform': null, 'padding': 2, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        var10 = 4;
        var11 = var6[var10];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isIOS;
        var12 = var11.bind(var12)();
        var11 = 'translateY(6px)';
        if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var11 = 'translateY(2px)';
case 2:
        var9['transform'] = var11;
        var11 = 5;
        var12 = var6[var11];
        var11 = metroImportDefault;
        var11 = var11.bind(var1)(var12);
        var11 = var11.spacing;
        var11 = var11.PX_4;
        var9['gap'] = var11;
        var4['emphasis'] = var9;
        var9 = {};
        var10 = var6[var10];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isIOS;
        var11 = var10.bind(var11)();
        var10 = 'none';
        if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var10 = 'translateY(2px)';
case 4:
        var9['transform'] = var10;
        var4['emphasisText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot6 = var4;
        var4 = 9;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/checkpoint/native/components/CheckpointEmphasis.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function CheckpointEmphasis(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var9 = var1.children;
                var7 = var1.icon;
                var12 = var1.forcePosition;
                var1 = _closure1_slot6;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CheckpointColorContext;
                var1 = var2.bind(var4)(var1);
                var2 = 7;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useToken;
                var1 = var1.primaryColor;
                var11 = var2.bind(var3)(var1);
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var10.emphasis;
                var5 = new Array(3);
                var5[0] = var8;
                var8 = {};
                var8['backgroundColor'] = var11;
                var5[1] = var8;
                var8 = undefined;
                if(var12) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var11 = {};
                var13 = 'none';
                var11['transform'] = var13;
                var8 = var11;
case 6:
                var5[2] = var8;
                var1['style'] = var5;
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 8;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {'style': null, 'variant': 'heading-lg/medium', 'color': 'black'};
                var11 = var10.emphasisText;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = undefined;
                if(var12) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var12 = {};
                var13 = 'none';
                var12['transform'] = var13;
                var11 = var12;
case 8:
                var10[1] = var11;
                var6['style'] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();