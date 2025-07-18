// app/design/components/TableRow/native/TableSwitchRow.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TableRow/native/TableSwitchRow.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TableSwitchRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var10 = var5.value;
            var _closure2_slot0 = var10;
            var1 = var5.onValueChange;
            var _closure2_slot1 = var1;
            var18 = var5.label;
            var16 = var5.subLabel;
            var8 = var5.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 48; continue _fun0001 }
 46:
            var8 = false;
 48:
            var13 = var5.accessibilityHint;
            var3 = {'value': 0, 'onValueChange': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0};
            var14 = null;
            var24 = var3;
            var23 = null;
            var1 = silentSetPrototypeOf(var24, var23);
            var1 = 0;
            var24 = {};
            var23 = var5;
            var22 = var3;
            var15 = copyDataProperties(var24, var23, var22);
            var _closure2_slot2 = var4;
            var2 = _closure1_slot0;
            var19 = _closure1_slot1;
            var3 = 3;
            var3 = var19[var3];
            var7 = var2.bind(var4)(var3);
            var3 = var7.isAndroid;
            var7 = var3.bind(var7)();
            var9 = function handleOnPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 36; continue _fun0002 }
 20:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    var1 = var3.bind(var4)(var2);
 36:
                    return var1;
                }
            };
            var3 = 4;
            var11 = var19[var3];
            var12 = var2.bind(var4)(var11);
            var11 = var12.getNodeText;
            var17 = var11.bind(var12)(var18);
            var3 = var19[var3];
            var11 = var2.bind(var4)(var3);
            var3 = var11.getNodeText;
            var12 = var3.bind(var11)(var16);
            var21 = _closure1_slot3;
            var3 = var21.useState;
            var20 = var3.bind(var21)(var10);
            var11 = _closure1_slot2;
            var3 = 2;
            var3 = var11.bind(var4)(var20, var3);
            var11 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            _closure2_slot2 = var1;
            var20 = var21.useEffect;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var20.bind(var21)(var1, var3);
            var3 = _closure1_slot4;
            var1 = 5;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var24 = var1;
            var23 = var15;
            var15 = copyDataProperties(var24, var23);
            var19 = false;
            var15 = 'arrow';
            var1[var15] = var19;
            var15 = 'label';
            var1[var15] = var18;
            var15 = 'subLabel';
            var1[var15] = var16;
            var15 = 'disabled';
            var1[var15] = var8;
            var15 = {};
            var15['disabled'] = var8;
            var15['checked'] = var11;
            var11 = 'accessibilityState';
            var1[var11] = var15;
            var11 = true;
            var15 = 'accessible';
            var1[var15] = var11;
            var16 = 'switch';
            var15 = 'accessibilityRole';
            var1[var15] = var16;
            var14 = var14 != var12;
            var16 = '';
            var15 = var16;
            if(!var14) { _fun0001_ip = 376; continue _fun0001 }
 373:
            var15 = var12;
 376:
            var12 = global;
            var12 = var12.HermesInternal;
            var14 = var12.concat;
            var12 = ', ';
            var14 = var14.bind(var16)(var17, var12, var15);
            var12 = 'accessibilityLabel';
            var1[var12] = var14;
            var12 = 'accessibilityHint';
            var1[var12] = var13;
            var12 = undefined;
            if(!var7) { _fun0001_ip = 428; continue _fun0001 }
 425:
            var12 = var9;
 428:
            var7 = 'onPress';
            var1[var7] = var12;
            var7 = function onAccessibilityTap() {
                var3 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 31; continue _fun0003 }
 13:
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = 'onAccessibilityTap';
            var1[var6] = var7;
            var7 = _closure1_slot4;
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 6;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.FormSwitch;
            var5 = {};
            var5['aria-hidden'] = var11;
            var5['value'] = var10;
            var5['onValueChange'] = var9;
            var5['disabled'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'trailing';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TableSwitchRow'] = var2;
    return var1;
})();