// app/uikit-native/refresh/form/FormRadioRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormRadioRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormRadioRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = var3.selected;
            var13 = var3.align;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 25; continue _fun0001 }
 21:
            var13 = 'left';
 25:
            var10 = var3.leading;
            var9 = var3.value;
            var7 = var3.onPress;
            var14 = var3.style;
            var2 = {'selected': 0, 'align': 0, 'leading': 0, 'value': 0, 'onPress': 0, 'style': 0};
            var19 = var2;
            var18 = null;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var3;
            var17 = var2;
            var6 = copyDataProperties(var19, var18, var17);
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 2;
            var1 = var15[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot4;
            if(var1) { _fun0001_ip = 335; continue _fun0001 }
 135:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 4;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var19 = var1;
            var18 = var6;
            var11 = copyDataProperties(var19, var18);
            var11 = 'style';
            var1[var11] = var14;
            var11 = 'onPress';
            var1[var11] = var7;
            var14 = 'radio';
            var11 = 'accessibilityRole';
            var1[var11] = var14;
            var14 = {};
            var14['selected'] = var8;
            var11 = 'accessibilityState';
            var1[var11] = var14;
            var11 = 'right';
            var12 = null;
            if(!(var11 === var13)) { _fun0001_ip = 261; continue _fun0001 }
 224:
            var15 = _closure1_slot4;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 5;
            var11 = var16[var11];
            var14 = var14.bind(var5)(var11);
            var11 = {};
            var11['selected'] = var8;
            var12 = var15.bind(var5)(var14, var11);
 261:
            var11 = 'trailing';
            var1[var11] = var12;
            var11 = 'left';
            var12 = var10;
            if(!(var11 === var13)) { _fun0001_ip = 318; continue _fun0001 }
 281:
            var14 = _closure1_slot4;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 5;
            var11 = var15[var11];
            var13 = var13.bind(var5)(var11);
            var11 = {};
            var11['selected'] = var8;
            var12 = var14.bind(var5)(var13, var11);
 318:
            var11 = 'leading';
            var1[var11] = var12;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 397; continue _fun0001;
 335:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 3;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRadioRow;
            var2 = {};
            var2['icon'] = var10;
            var2['value'] = var9;
            var2['legacyCompat_selected'] = var8;
            var2['legacyCompat_onPress'] = var7;
            var19 = var2;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var1 = var4.bind(var5)(var3, var2);
 397:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();