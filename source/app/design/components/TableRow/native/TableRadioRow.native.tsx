// app/design/components/TableRow/native/TableRadioRow.native.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TableRow/native/TableRadioRow.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TableRadioRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = var5.value;
            var _closure2_slot0 = var2;
            var15 = var5.label;
            var14 = var5.subLabel;
            var11 = var5.disabled;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 36:
            var11 = false;
 38:
            var9 = var5.accessibilityHint;
            var8 = var5.legacyCompat_selected;
            var1 = var5.legacyCompat_onPress;
            var _closure2_slot1 = var1;
            var3 = {'value': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0, 'legacyCompat_selected': 0, 'legacyCompat_onPress': 0};
            var10 = null;
            var19 = var3;
            var18 = null;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var5;
            var17 = var3;
            var12 = copyDataProperties(var19, var18, var17);
            var _closure2_slot2 = var4;
            var7 = _closure1_slot2;
            var3 = var7.useContext;
            var13 = _closure1_slot0;
            var16 = _closure1_slot1;
            var1 = 2;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.TableRadioGroupContext;
            var3 = var3.bind(var7)(var1);
            var1 = var3.selectedValue;
            var3 = var3.onSelect;
            _closure2_slot2 = var3;
            if(!(var10 == var8)) { _fun0001_ip = 169; continue _fun0001 }
 165:
            var8 = var1 === var2;
 169:
            var2 = _closure1_slot0;
            var16 = _closure1_slot1;
            var1 = 3;
            var3 = var16[var1];
            var7 = var2.bind(var4)(var3);
            var3 = var7.getNodeText;
            var13 = var3.bind(var7)(var15);
            var1 = var16[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.getNodeText;
            var7 = var1.bind(var3)(var14);
            var3 = _closure1_slot3;
            var1 = 4;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var19 = var1;
            var18 = var12;
            var12 = copyDataProperties(var19, var18);
            var16 = false;
            var12 = 'arrow';
            var1[var12] = var16;
            var12 = 'label';
            var1[var12] = var15;
            var12 = 'subLabel';
            var1[var12] = var14;
            var12 = 'disabled';
            var1[var12] = var11;
            var12 = {};
            var12['disabled'] = var11;
            var12['selected'] = var8;
            var11 = 'accessibilityState';
            var1[var11] = var12;
            var12 = true;
            var11 = 'accessible';
            var1[var11] = var12;
            var12 = 'radio';
            var11 = 'accessibilityRole';
            var1[var11] = var12;
            var10 = var10 != var7;
            var12 = '';
            var11 = var12;
            if(!var10) { _fun0001_ip = 353; continue _fun0001 }
 350:
            var11 = var7;
 353:
            var7 = global;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var7 = ', ';
            var10 = var10.bind(var12)(var13, var7, var11);
            var7 = 'accessibilityLabel';
            var1[var7] = var10;
            var7 = 'accessibilityHint';
            var1[var7] = var9;
            var7 = function onPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 27; continue _fun0002 }
 13:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
 27:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6 = 'onPress';
            var1[var6] = var7;
            var7 = _closure1_slot3;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.FormRadio;
            var5 = {};
            var5['selected'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'trailing';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TableRadioRow'] = var2;
    return var1;
})();