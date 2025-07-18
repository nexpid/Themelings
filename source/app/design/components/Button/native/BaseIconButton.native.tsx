// app/design/components/Button/native/BaseIconButton.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var3 = {};
            var1 = 'sm';
            if(!(var1 !== var2)) { _fun0001_ip = 159; continue _fun0001 }
 16:
            var1 = 'md';
            if(!(var1 !== var2)) { _fun0001_ip = 97; continue _fun0001 }
 24:
            var1 = 'lg';
            if(!(var1 === var2)) { _fun0001_ip = 219; continue _fun0001 }
 35:
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var7 = var6[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.LARGE_BUTTON_PADDING;
            var1['paddingHorizontal'] = var7;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.LARGE_BUTTON_PADDING;
            var1['paddingVertical'] = var2;
            var3 = var1;
            _fun0001_ip = 219; continue _fun0001;
 97:
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var7 = var6[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.MEDIUM_BUTTON_PADDING;
            var1['paddingHorizontal'] = var7;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.MEDIUM_BUTTON_PADDING;
            var1['paddingVertical'] = var2;
            var3 = var1;
            _fun0001_ip = 219; continue _fun0001;
 159:
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var7 = var6[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.SMALL_BUTTON_PADDING;
            var1['paddingHorizontal'] = var7;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.SMALL_BUTTON_PADDING;
            var1['paddingVertical'] = var2;
            var3 = var1;
 219:
            var1 = {};
            var2 = {'flexShrink': 0, 'flexGrow': 0, 'alignSelf': 'center'};
            var1['button'] = var2;
            var2 = {};
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var1['pill'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var21 = arg1;
            var5 = var21.style;
            var17 = var21.pillStyle;
            var1 = var21.variant;
            var14 = 'primary';
            var4 = undefined;
            if(!(var4 !== var1)) { _fun0002_ip = 32; continue _fun0002 }
 29:
            var14 = var1;
 32:
            var15 = var21.size;
            if(!(var4 === var15)) { _fun0002_ip = 70; continue _fun0002 }
 41:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.DEFAULT_BUTTON_SIZE;
 70:
            var10 = var21.maxFontSizeMultiplier;
            var9 = var21.loading;
            var11 = var21.icon;
            var2 = var21.scaleAmountInPx;
            var1 = 4;
            var20 = var1;
            if(!(var4 !== var2)) { _fun0002_ip = 106; continue _fun0002 }
 103:
            var20 = var2;
 106:
            var2 = _closure1_slot4;
            var16 = var2.bind(var4)(var14, var15);
            var6 = _closure1_slot0;
            var18 = _closure1_slot1;
            var1 = var18[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var19 = 0;
            var7 = var1.bind(var2)(var19);
            var1 = 6;
            var2 = var18[var1];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useIconTintStyles;
            var13 = var2.bind(var3)(var14);
            var1 = var18[var1];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useIconSizeStyles;
            var1 = true;
            var12 = var2.bind(var3)(var15, var1, var10);
            var24 = 3;
            var1 = var18[var24];
            var1 = var6.bind(var4)(var1);
            var22 = var1.LARGE_BUTTON_HEIGHT;
            var10 = 'sm';
            if(!(var10 !== var15)) { _fun0002_ip = 254; continue _fun0002 }
 221:
            var1 = 'md';
            if(!(var1 === var15)) { _fun0002_ip = 277; continue _fun0002 }
 229:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var22 = var1.MEDIUM_BUTTON_HEIGHT;
            _fun0002_ip = 277; continue _fun0002;
 254:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var22 = var1.SMALL_BUTTON_HEIGHT;
 277:
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var23 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var24];
            var1 = var23.bind(var4)(var1);
            var1 = var1.MINIMUM_HIT_AREA;
            var22 = var1 - var22;
            var1 = 2;
            var1 = var22 / var1;
            var19 = var2.bind(var3)(var1, var19);
            var3 = _closure1_slot3;
            var1 = 7;
            var1 = var18[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BaseButton;
            var1 = {};
            var27 = var1;
            var26 = var21;
            var21 = copyDataProperties(var27, var26);
            var22 = arg2;
            var21 = 'ref';
            var1[var21] = var22;
            var22 = var16.button;
            var21 = new Array(2);
            var21[0] = var22;
            var21[1] = var5;
            var5 = 'style';
            var1[var5] = var21;
            var5 = 'pressed';
            var1[var5] = var7;
            var5 = 'scaleAmountInPx';
            var1[var5] = var20;
            var5 = 'hitSlop';
            var1[var5] = var19;
            var5 = 8;
            var5 = var18[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ButtonPill;
            var5 = {};
            var18 = var16.pill;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var5['style'] = var16;
            var5['variant'] = var14;
            var5['size'] = var15;
            var5['loading'] = var9;
            var9 = 'xs';
            var14 = 'lg';
            if(!(var14 === var15)) { _fun0002_ip = 500; continue _fun0002 }
 497:
            var9 = var10;
 500:
            var5['loaderSize'] = var9;
            var5['pressed'] = var7;
            var9 = _closure1_slot2;
            var7 = var9.isValidElement;
            var9 = var7.bind(var9)(var11);
            var7 = var11;
            if(var9) { _fun0002_ip = 567; continue _fun0002 }
 531:
            var10 = _closure1_slot3;
            var9 = _closure1_slot5;
            var8 = {};
            var8['source'] = var11;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 567:
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/BaseIconButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseIconButton'] = var2;
    return var1;
})();