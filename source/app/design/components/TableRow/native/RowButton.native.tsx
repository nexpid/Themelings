// app/design/components/TableRow/native/RowButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function RowButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var12 = var8.arrow;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = true;
case 2:
            var9 = var8.disabled;
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = false;
case 4:
            var3 = var8.variant;
            if(!(var3 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 'secondary';
case 6:
            var14 = var8.icon;
            var5 = var8.onPress;
            var6 = var8.experimental_withBlurBackground;
            var7 = {'arrow': 0, 'disabled': 0, 'variant': 0, 'icon': 0, 'onPress': 0, 'experimental_withBlurBackground': 0};
            var1 = null;
            var18 = var7;
            var17 = null;
            var2 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var8;
            var16 = var7;
            var8 = copyDataProperties(var18, var17, var16);
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 4;
            var2 = var11[var2];
            var7 = var7.bind(var4)(var2);
            var2 = 'RowButton';
            var11 = var7.bind(var4)(var2);
            var13 = var14;
            if(!(var1 != var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot3;
            var1 = var2.isValidElement;
            var1 = var1.bind(var2)(var14);
            var13 = var14;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var7 = 'translucent';
            if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = 'secondary';
            var2 = 'primary';
            if(!(var2 === var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = 'default';
case 13:
            var7 = var1;
case 11:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 5;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowIcon;
            var1 = {};
            var1['source'] = var14;
            var1['variant'] = var7;
            var13 = var3.bind(var4)(var2, var1);
case 8:
            var3 = _closure1_slot4;
            var2 = _closure1_slot6;
            var1 = {};
            var1['isRefreshEnabled'] = var11;
            var1['experimental_withBlurBackground'] = var6;
            var1['onPress'] = var5;
            var1['disabled'] = var9;
            var18 = var1;
            var17 = var8;
            var5 = copyDataProperties(var18, var17);
            var7 = _closure1_slot4;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 6;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowInner;
            var5 = {};
            var5['icon'] = var13;
            var5['arrow'] = var12;
            var5['disabled'] = var9;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 3;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.radii;
            var9 = var10.xl;
case 15:
            var5['borderRadius'] = var9;
            var18 = var5;
            var17 = var8;
            var8 = copyDataProperties(var18, var17);
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = function RowButtonWrapper(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = var7.experimental_withBlurBackground;
            var2 = var7.isRefreshEnabled;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = false;
case 17:
            var14 = var7.onPress;
            var11 = var7.disabled;
            var8 = var7.children;
            var6 = {'experimental_withBlurBackground': 0, 'isRefreshEnabled': 0, 'onPress': 0, 'disabled': 0, 'children': 0};
            var1 = null;
            var19 = var6;
            var18 = null;
            var5 = silentSetPrototypeOf(var19, var18);
            var10 = 0;
            var19 = {};
            var18 = var7;
            var17 = var6;
            var7 = copyDataProperties(var19, var18, var17);
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var6 = _closure1_slot5;
            var13 = var6.bind(var4)(var2);
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 7;
            var6 = var15[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.useSharedValue;
            var9 = var6.bind(var9)(var10);
            _closure2_slot1 = var9;
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var10 = new Array(1);
            var10[0] = var9;
            var6 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6 = var15.bind(var16)(var6, var10);
            _closure2_slot2 = var6;
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var10 = new Array(1);
            var10[0] = var9;
            var6 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6 = var15.bind(var16)(var6, var10);
            _closure2_slot3 = var6;
            if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var10 = 'subtle';
            if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var10 = 'control-secondary';
case 21:
            var15 = 'control-secondary';
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var1 == var7;
            var1 = undefined;
            if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var7.variant;
case 25:
            var15 = var1;
case 23:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.InternalCard;
            var1 = {'shadow': 'low', 'start': true, 'end': true};
            var1['onPress'] = var14;
            var6 = var13.card;
            var1['style'] = var6;
            var1['disabled'] = var11;
            var19 = var1;
            var18 = var7;
            var6 = copyDataProperties(var19, var18);
            var6 = 'variant';
            var1[5] = var15;
            var6 = 'border';
            var1[5] = var10;
            var6 = 'children';
            var1[5] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 19:
            var3 = _closure1_slot4;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.InternalCard;
            var1 = {'shadow': 'none', 'border': 'none', 'start': true, 'end': true};
            var1['onPress'] = var14;
            var14 = function onPressIn(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.onPressIn;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 7; continue _fun0003 }
case 27:
                    var4 = _closure2_slot0;
                    var3 = var4.onPressIn;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
case 7:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onPressIn'] = var14;
            var12 = function onPressOut(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.onPressOut;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 7; continue _fun0004 }
case 27:
                    var4 = _closure2_slot0;
                    var3 = var4.onPressOut;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
case 7:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onPressOut'] = var12;
            var14 = var13.card;
            var12 = new Array(2);
            var12[0] = var14;
            var13 = var13.cardWithBlur;
            var12[1] = var13;
            var1['style'] = var12;
            var1['disabled'] = var11;
            var19 = var1;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var11 = 'transparent';
            var7 = 'variant';
            var1[6] = var11;
            var7 = _closure1_slot4;
            var5 = 9;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BackgroundBlurView;
            var5 = {};
            var5['pressed'] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arguments[0];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var4 = false;
case 28:
            var1 = {};
            var2 = {};
            var3 = 0;
            if(!var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var3 = undefined;
case 30:
            var2['padding'] = var3;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.TABLE_ROW_BORDER_RADIUS;
            var2['borderTopStartRadius'] = var7;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.TABLE_ROW_BORDER_RADIUS;
            var2['borderTopEndRadius'] = var7;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.TABLE_ROW_BORDER_RADIUS;
            var2['borderBottomStartRadius'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.TABLE_ROW_BORDER_RADIUS;
            var2['borderBottomEndRadius'] = var3;
            var1['card'] = var2;
            var2 = {};
            var3 = 'hidden';
            var2['overflow'] = var3;
            var1['cardWithBlur'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TableRowIcon;
    var2['Icon'] = var7;
    var7 = 10;
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