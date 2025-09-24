// app/design/components/TableRow/native/RowButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var2 = function RowButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var10 = var5.arrow;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var10 = true;
 17:
            var9 = var5.disabled;
            if(!(var9 === var4)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var9 = false;
 28:
            var13 = var5.variant;
            if(!(var13 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 37:
            var13 = 'secondary';
 41:
            var12 = var5.icon;
            var6 = var5.onPress;
            var7 = var5.experimental_withBlurBackground;
            var3 = {'arrow': 0, 'disabled': 0, 'variant': 0, 'icon': 0, 'onPress': 0, 'experimental_withBlurBackground': 0};
            var1 = null;
            var16 = var3;
            var15 = null;
            var2 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var5;
            var14 = var3;
            var8 = copyDataProperties(var16, var15, var14);
            var11 = var12;
            if(!(var1 != var12)) { _fun0001_ip = 197; continue _fun0001 }
 101:
            var3 = _closure1_slot2;
            var2 = var3.isValidElement;
            var2 = var2.bind(var3)(var12);
            var11 = var12;
            if(var2) { _fun0001_ip = 197; continue _fun0001 }
 125:
            var5 = 'translucent';
            if(var7) { _fun0001_ip = 151; continue _fun0001 }
 132:
            var2 = 'secondary';
            var3 = 'primary';
            if(!(var3 === var13)) { _fun0001_ip = 148; continue _fun0001 }
 144:
            var2 = 'blurple';
 148:
            var5 = var2;
 151:
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 3;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowIcon;
            var1 = {};
            var1['source'] = var12;
            var1['variant'] = var5;
            var11 = var3.bind(var4)(var2, var1);
 197:
            var3 = _closure1_slot3;
            var2 = _closure1_slot5;
            var1 = {};
            var1['experimental_withBlurBackground'] = var7;
            var1['onPress'] = var6;
            var1['disabled'] = var9;
            var16 = var1;
            var15 = var8;
            var6 = copyDataProperties(var16, var15);
            var7 = _closure1_slot3;
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 4;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowInner;
            var5 = {};
            var5['icon'] = var11;
            var5['arrow'] = var10;
            var5['disabled'] = var9;
            var16 = var5;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = function RowButtonWrapper(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = var4.experimental_withBlurBackground;
            var13 = var4.onPress;
            var8 = var4.disabled;
            var9 = var4.children;
            var3 = {'experimental_withBlurBackground': 0, 'onPress': 0, 'disabled': 0, 'children': 0};
            var18 = null;
            var19 = var3;
            var2 = silentSetPrototypeOf(var19, var18);
            var10 = 0;
            var19 = {};
            var18 = var4;
            var17 = var3;
            var7 = copyDataProperties(var19, var18, var17);
            var _closure2_slot0 = var7;
            var2 = _closure1_slot4;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var14 = _closure1_slot1;
            var2 = 5;
            var2 = var14[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var10 = var2.bind(var3)(var10);
            var _closure2_slot1 = var10;
            var16 = _closure1_slot2;
            var15 = var16.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var15.bind(var16)(var2, var3);
            var _closure2_slot2 = var2;
            var16 = _closure1_slot2;
            var15 = var16.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var15.bind(var16)(var2, var3);
            var _closure2_slot3 = var2;
            var3 = _closure1_slot3;
            var2 = 6;
            var2 = var14[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.InternalCard;
            if(var1) { _fun0002_ip = 255; continue _fun0002 }
 199:
            var1 = {'shadow': 'low', 'border': 'subtle', 'start': true, 'end': true};
            var1['onPress'] = var13;
            var5 = var12.card;
            var1['style'] = var5;
            var1['disabled'] = var8;
            var19 = var1;
            var18 = var7;
            var5 = copyDataProperties(var19, var18);
            var5 = 'children';
            var1[var5] = var9;
            _fun0002_ip = 407; continue _fun0002;
 255:
            var5 = {'shadow': 'none', 'border': 'none', 'start': true, 'end': true};
            var5['onPress'] = var13;
            var13 = function onPressIn(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.onPressIn;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 37; continue _fun0003 }
 19:
                    var4 = _closure2_slot0;
                    var3 = var4.onPressIn;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
 37:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5['onPressIn'] = var13;
            var11 = function onPressOut(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.onPressOut;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 37; continue _fun0004 }
 19:
                    var4 = _closure2_slot0;
                    var3 = var4.onPressOut;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
 37:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5['onPressOut'] = var11;
            var13 = var12.card;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.cardWithBlur;
            var11[1] = var12;
            var5['style'] = var11;
            var5['disabled'] = var8;
            var19 = var5;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var8 = 'transparent';
            var7 = 'variant';
            var5[var7] = var8;
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 7;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.BackgroundBlurView;
            var6 = {};
            var6['pressed'] = var10;
            var6['children'] = var9;
            var7 = var8.bind(var4)(var7, var6);
            var6 = 'children';
            var5[var6] = var7;
            var1 = var5;
 407:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 0;
        var2['padding'] = var3;
        var1['card'] = var2;
        var2 = {};
        var3 = 'hidden';
        var2['overflow'] = var3;
        var1['cardWithBlur'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TableRowIcon;
    var2['Icon'] = var7;
    var7 = 8;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'design/components/TableRow/native/RowButton.native.tsx';
    var7 = var8.bind(var9)(var7);
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TableRowIconProps;
    var3['RowButtonIconProps'] = var4;
    var3['RowButton'] = var2;
    return var1;
})();