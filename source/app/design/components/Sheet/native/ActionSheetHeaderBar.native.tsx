// app/design/components/Sheet/native/ActionSheetHeaderBar.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Pressable;
    var _closure1_slot3 = var5;
    var5 = var4.StyleSheet;
    var _closure1_slot4 = var5;
    var5 = var4.TouchableWithoutFeedback;
    var _closure1_slot5 = var5;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var5 = var4.Fragment;
    var _closure1_slot8 = var5;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = {};
    var5 = 'floating';
    var4['FLOATING'] = var5;
    var5 = 'overlay';
    var4['OVERLAY'] = var5;
    var _closure1_slot10 = var4;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {};
            var3 = 12;
            var2['marginBottom'] = var3;
            var6 = _closure1_slot10;
            var6 = var6.FLOATING;
            if(!(var6 !== var8)) { _fun0001_ip = 50; continue _fun0001 }
 34:
            var6 = _closure1_slot10;
            var7 = var6.OVERLAY;
            var6 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 64; continue _fun0001 }
 50:
            var6 = {'left': 0, 'right': 0, 'position': 'absolute'};
 64:
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var1['header'] = var2;
            var2 = {'alignSelf': 'center', 'width': 32, 'height': 4, 'borderRadius': null, 'backgroundColor': null, 'top': 4};
            var11 = 4;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var9 = var6[var11];
            var10 = undefined;
            var9 = var7.bind(var10)(var9);
            var9 = var9.radii;
            var9 = var9.sm;
            var2['borderRadius'] = var9;
            var6 = var6[var11];
            var6 = var7.bind(var10)(var6);
            var6 = var6.colors;
            var6 = var6.BG_MOD_STRONG;
            var2['backgroundColor'] = var6;
            var6 = _closure1_slot10;
            var6 = var6.FLOATING;
            if(!(var6 !== var8)) { _fun0001_ip = 254; continue _fun0001 }
 171:
            var6 = _closure1_slot10;
            var7 = var6.OVERLAY;
            var6 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 291; continue _fun0001 }
 187:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE_500;
            var7['backgroundColor'] = var12;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.shadows;
            var13 = var8.SHADOW_LOW;
            var14 = var7;
            var8 = copyDataProperties(var14, var13);
            var6 = var7;
            _fun0001_ip = 291; continue _fun0001;
 254:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.colors;
            var8 = var8.INTERACTIVE_MUTED;
            var7['backgroundColor'] = var8;
            var6 = var7;
 291:
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var1['indicator'] = var2;
            var2 = {};
            var5 = _closure1_slot4;
            var13 = var5.absoluteFillObject;
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 'height';
            var2[var5] = var4;
            var4 = var3 - var4;
            var3 = 'marginTop';
            var2[var3] = var4;
            var1['accessibleDismiss'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Sheet/native/ActionSheetHeaderBar.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ActionSheetHeaderBarVariants'] = var4;
    var2 = function ActionSheetHeaderBar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.accessibilityLabel;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0002_ip = 72; continue _fun0002 }
 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.WAI6xs;
            var11 = var3.bind(var4)(var2);
 72:
            var14 = var1.style;
            var15 = var1.tabStyle;
            var10 = var1.onPress;
            var4 = var1.variant;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var2 = var1.height;
            var1 = _closure1_slot11;
            var13 = var1.bind(var5)(var4, var2);
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var10;
            var1['onAccessibilityEscape'] = var10;
            var12 = true;
            var1['aria-hidden'] = var12;
            var8 = _closure1_slot6;
            var7 = {};
            var16 = var13.header;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var14;
            var7['style'] = var9;
            var9 = {};
            var16 = var13.indicator;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var9['style'] = var14;
            var9 = var4.bind(var5)(var8, var9);
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['children'] = var7;
            var7 = var4.bind(var5)(var3, var1);
            var1 = var7;
            if(!var2) { _fun0002_ip = 349; continue _fun0002 }
 270:
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var2 = {};
            var9 = _closure1_slot7;
            var8 = _closure1_slot3;
            var6 = {};
            var13 = var13.accessibleDismiss;
            var6['style'] = var13;
            var6['accessible'] = var12;
            var6['accessibilityLabel'] = var11;
            var11 = 'button';
            var6['accessibilityRole'] = var11;
            var6['onPress'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 349:
            return var1;
        }
    };
    var3['ActionSheetHeaderBar'] = var2;
    return var1;
})();