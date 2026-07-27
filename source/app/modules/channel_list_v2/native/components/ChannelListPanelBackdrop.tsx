// app/modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DM_WIDTH;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'position': 'relative', 'overflow': 'hidden'};
    var4['container'] = var9;
    var9 = {};
    var14 = var11.absoluteFillObject;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var12 = var11.PANEL_BG;
    var11 = 'backgroundColor';
    var9[10] = var12;
    var4['panelTint'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['listWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelListPanelBackdrop(arg1) {
        var2 = arg1;
        var7 = var2.style;
        var _closure2_slot0 = var7;
        var15 = var2.contentInset;
        var _closure2_slot1 = var15;
        var8 = var2.children;
        var2 = _closure1_slot8;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var _closure2_slot2 = var9;
        var5 = _closure1_slot3;
        var6 = var5.useContext;
        var3 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 6;
        var2 = var13[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.HomeDrawerStateContext;
        var2 = var6.bind(var5)(var2);
        var10 = var2.panelSpringTranslateX;
        var6 = _closure1_slot1;
        var2 = 7;
        var2 = var13[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var11 = var2.top;
        var2 = 8;
        var2 = var13[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useMobileQuestDockHeight;
        var14 = var2.bind(var3)();
        var _closure2_slot3 = var14;
        var3 = var5.useMemo;
        var2 = new Array(4);
        var2[0] = var9;
        var2[1] = var15;
        var2[2] = var14;
        var2[3] = var7;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                var3 = var1.container;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = {};
                var4 = _closure2_slot1;
                var6 = null;
                var4 = var6 == var4;
                var8 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var8 = var4.top;
case 2:
                var9 = var6 != var8;
                var7 = 0;
                if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var8;
case 4:
                var3['marginTop'] = var7;
                var7 = _closure2_slot1;
                var8 = var6 == var7;
                var7 = undefined;
                if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var8 = _closure2_slot1;
                var7 = var8.bottom;
case 6:
                var9 = var6 != var7;
                var8 = 0;
                if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var8 = var7;
case 8:
                var7 = _closure2_slot3;
                var7 = var8 + var7;
                var3['paddingBottom'] = var7;
                var7 = _closure2_slot1;
                var7 = var6 == var7;
                var8 = undefined;
                if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var7 = _closure2_slot1;
                var8 = var7.left;
case 10:
                var9 = var6 != var8;
                var7 = 0;
                if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var7 = var8;
case 12:
                var3['marginLeft'] = var7;
                var7 = _closure2_slot1;
                var7 = var6 == var7;
                var5 = undefined;
                if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var7 = _closure2_slot1;
                var5 = var7.right;
case 14:
                var6 = var6 != var5;
                var4 = 0;
                if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var4 = var5;
case 16:
                var3['marginRight'] = var4;
                var1[1] = var3;
                var2 = _closure2_slot0;
                var1[2] = var2;
                return var1;
            }
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var1['style'] = var5;
        var7 = _closure1_slot6;
        var5 = 9;
        var5 = var13[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var12 = _closure1_slot5;
        var5['offsetX'] = var12;
        var5['offsetY'] = var11;
        var5['parentSpringTranslateX'] = var10;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var6 = {};
        var10 = 'none';
        var6['pointerEvents'] = var10;
        var10 = var9.panelTint;
        var6['style'] = var10;
        var6 = var7.bind(var4)(var2, var6);
        var5[1] = var6;
        var6 = {};
        var9 = var9.listWrapper;
        var6['style'] = var9;
        var6['children'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();