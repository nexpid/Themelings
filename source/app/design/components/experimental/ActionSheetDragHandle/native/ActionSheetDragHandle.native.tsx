// app/design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.TouchableWithoutFeedback;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.DRAG_HANDLE_BAR_HEIGHT;
    var12 = var4.DRAG_HANDLE_PADDING;
    var14 = var4.DRAG_HANDLE_HEIGHT;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['height'] = var14;
    var4['container'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['containerOverlay'] = var10;
    var10 = {};
    var14 = 'center';
    var10['alignItems'] = var14;
    var10['paddingVertical'] = var12;
    var4['handle'] = var10;
    var10 = {};
    var12 = 5;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_MUTED;
    var10['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var10['borderRadius'] = var12;
    var10['height'] = var11;
    var11 = 31;
    var10['width'] = var11;
    var4['bar'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.onPress;
            var11 = var1.overlay;
            var7 = var1.accessibilityLabel;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 83; continue _fun0001 }
 25:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var3 = var9[var2];
            var3 = var8.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.WAI6xs;
            var7 = var3.bind(var6)(var2);
 83:
            var13 = var1.animatedBarStyles;
            var6 = var1.aria-hidden;
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var12.container;
            var10 = new Array(2);
            var10[0] = var8;
            var8 = null;
            var14 = var8 != var11;
            var11 = null;
            if(!var14) { _fun0001_ip = 146; continue _fun0001 }
 140:
            var11 = var12.containerOverlay;
 146:
            var10[1] = var11;
            var1['style'] = var10;
            var1['accessibilityLabel'] = var7;
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var1['aria-hidden'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot4;
            var5 = {};
            var10 = var12.handle;
            var5['style'] = var10;
            if(!(var8 == var13)) { _fun0001_ip = 227; continue _fun0001 }
 199:
            var11 = _closure1_slot5;
            var10 = _closure1_slot4;
            var8 = {};
            var14 = var12.bar;
            var8['style'] = var14;
            var8 = var11.bind(var4)(var10, var8);
            _fun0001_ip = 286; continue _fun0001;
 227:
            var11 = _closure1_slot5;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 7;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.View;
            var9 = {};
            var14 = var12.bar;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var9['style'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 286:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ActionSheetDragHandle'] = var2;
    return var1;
})();