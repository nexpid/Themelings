// app/modules/collectibles/native/DebugLogView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot4 = var7;
    var4 = var4.TouchableOpacity;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCollectiblesDebugStore;
    var _closure1_slot7 = var7;
    var4 = var4.addDebugLog;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': 'rgba(0, 0, 0, 0.8)', 'padding': 10, 'maxHeight': 350, 'width': '100%', 'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 9999, 'borderTopWidth': 1, 'borderTopColor': '#ff0000'};
    var4['debugLogContainer'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginBottom': 5};
    var4['debugLogHeader'] = var9;
    var9 = {'color': '#00ff00', 'fontSize': 12, 'marginBottom': 2, 'fontFamily': 'monospace'};
    var4['debugLogText'] = var9;
    var9 = {'backgroundColor': '#ff0000', 'paddingHorizontal': 8, 'paddingVertical': 2};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['clearButton'] = var9;
    var9 = {'color': '#ffffff', 'fontSize': 10, 'fontWeight': 'bold'};
    var4['clearButtonText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/DebugLogView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot7;
            var4 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.logs;
                return var1;
            };
            var10 = var2.bind(var4)(var1);
            var _closure2_slot0 = var10;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.clearLogs;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot11;
            var15 = var1.bind(var4)();
            var _closure2_slot2 = var15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.get;
                var1 = 'shop_show_debug_overlay';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var _closure2_slot3 = var1;
            var7 = _closure1_slot2;
            var5 = var7.useEffect;
            var2 = var10.length;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var1;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.length;
                    var1 = 0;
                    var1 = var1 === var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot3;
case 2:
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = 'Debug log initialized';
                    var1 = var3.bind(var2)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var10.length;
            var7 = 0;
            if(!(var7 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = var10.slice;
            var1 = global;
            var5 = var1.Math;
            var3 = var5.max;
            var8 = var10.length;
            var1 = 10;
            var1 = var8 - var1;
            var1 = var3.bind(var5)(var7, var1);
            var11 = var2.bind(var10)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var15.debugLogContainer;
            var1['style'] = var5;
            var5 = {};
            var7 = var15.debugLogHeader;
            var5['style'] = var7;
            var14 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 8;
            var7 = var16[var13];
            var7 = var14.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var12 = 'text-xs/normal';
            var7['variant'] = var12;
            var12 = {};
            var19 = var15.debugLogText;
            var20 = var12;
            var17 = copyDataProperties(var20, var19);
            var18 = '#ffffff';
            var17 = 'color';
            var12[var17] = var18;
            var7['style'] = var12;
            var12 = var10.length;
            var10 = ['Debug Log ('];
            var10[1] = var12;
            var12 = ' entries)';
            var10[2] = var12;
            var7['children'] = var10;
            var8 = var3.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = _closure1_slot10;
            var12 = _closure1_slot5;
            var10 = {};
            var17 = function onPress() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10['onPress'] = var17;
            var17 = var15.clearButton;
            var10['style'] = var17;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/bold', 'style': null, 'children': 'Clear'};
            var15 = var15.clearButtonText;
            var13['style'] = var15;
            var13 = var8.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var8.bind(var4)(var12, var10);
            var7[1] = var10;
            var5['children'] = var7;
            var7 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var5 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var1 = 'text-xs/normal';
                var2['variant'] = var1;
                var1 = _closure2_slot2;
                var1 = var1.debugLogText;
                var2['style'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 6:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();