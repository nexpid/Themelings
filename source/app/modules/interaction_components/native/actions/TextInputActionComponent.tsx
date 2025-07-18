// app/modules/interaction_components/native/actions/TextInputActionComponent.tsx
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/TextInputActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TextInputActionComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.type;
            var _closure2_slot0 = var17;
            var3 = var1.style;
            var13 = var1.label;
            var12 = var1.placeholder;
            var10 = var1.required;
            var11 = var1.maxLength;
            var16 = var1.value;
            var7 = _closure1_slot3;
            var6 = var7.useState;
            var9 = null;
            var8 = var9 != var16;
            var5 = '';
            if(!var8) { _fun0001_ip = 75; continue _fun0001 }
 72:
            var5 = var16;
 75:
            var8 = var6.bind(var7)(var5);
            var7 = _closure1_slot2;
            var5 = undefined;
            var6 = 2;
            var8 = var7.bind(var5)(var8, var6);
            var6 = 0;
            var7 = var8[var6];
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot1 = var6;
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var6 = 3;
            var6 = var14[var6];
            var14 = var8.bind(var5)(var6);
            var8 = var14.useComponentState;
            var15 = var9 != var16;
            var6 = undefined;
            if(!var15) { _fun0001_ip = 160; continue _fun0001 }
 147:
            var15 = {};
            var15['type'] = var17;
            var15['value'] = var16;
            var6 = var15;
 160:
            var8 = var8.bind(var14)(var1, var6);
            var6 = var8.state;
            var _closure2_slot2 = var6;
            var16 = var8.executeStateUpdate;
            var _closure2_slot3 = var16;
            var8 = var8.error;
            var15 = _closure1_slot0;
            var18 = _closure1_slot1;
            var14 = 4;
            var14 = var18[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.useIsFirstTextInputInModal;
            var1 = var1.id;
            var1 = var14.bind(var15)(var1);
            var15 = _closure1_slot3;
            var18 = var15.useEffect;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var3 = _closure2_slot2;
                    var4 = var3.type;
 29:
                    var3 = _closure2_slot0;
                    if(!(var4 === var3)) { _fun0002_ip = 55; continue _fun0002 }
 37:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var2.value;
                    var2 = var3.bind(var1)(var2);
 55:
                    return var1;
                }
            };
            var6 = var18.bind(var15)(var6, var14);
            var14 = var15.useCallback;
            var6 = new Array(2);
            var6[0] = var17;
            var6[1] = var16;
            var4 = function(arg1) {
                var4 = arg1;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var3 = _closure2_slot3;
                var2 = {};
                var5 = _closure2_slot0;
                var2['type'] = var5;
                var2['value'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var14.bind(var15)(var4, var6);
            var6 = {};
            var6['label'] = var13;
            var6['placeholder'] = var12;
            var6['maxLength'] = var11;
            var6['required'] = var10;
            var10 = var9 != var8;
            var9 = 'default';
            if(!var10) { _fun0001_ip = 326; continue _fun0001 }
 322:
            var9 = 'error';
 326:
            var6['status'] = var9;
            var6['errorMessage'] = var8;
            var6['value'] = var7;
            var6['onChange'] = var4;
            var6['autoFocus'] = var1;
            var1 = true;
            var6['isClearable'] = var1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.TextInputComponentStyle;
            var1 = var1.PARAGRAPH;
            if(!(var3 !== var1)) { _fun0001_ip = 442; continue _fun0001 }
 392:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TextInput;
            var1 = {};
            var21 = var1;
            var20 = var6;
            var7 = copyDataProperties(var21, var20);
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 490; continue _fun0001;
 442:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TextArea;
            var2 = {};
            var21 = var2;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var1 = var4.bind(var5)(var3, var2);
 490:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();