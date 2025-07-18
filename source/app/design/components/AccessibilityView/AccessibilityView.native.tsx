// app/design/components/AccessibilityView/AccessibilityView.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var10 = var3.accessibilityViewIsModal;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var10 = false;
 17:
            var9 = var3.nativeID;
            var8 = var3.collapsable;
            var6 = var3.onAccessibilityEscape;
            var2 = {'accessibilityViewIsModal': 0, 'nativeID': 0, 'collapsable': 0, 'onAccessibilityEscape': 0};
            var7 = null;
            var14 = var2;
            var13 = null;
            var1 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var3;
            var12 = var2;
            var5 = copyDataProperties(var14, var13, var12);
            if(!var10) { _fun0001_ip = 79; continue _fun0001 }
 75:
            if(!(var7 != var6)) { _fun0001_ip = 179; continue _fun0001 }
 79:
            var3 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 3;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['accessibilityViewIsModal'] = var10;
            var2['nativeID'] = var9;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var10 = arg2;
            var1['ref'] = var10;
            var1['nativeID'] = var9;
            var7 = var7 == var9;
            if(!var7) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var7 = var8;
 151:
            var1['collapsable'] = var7;
            var1['onAccessibilityEscape'] = var6;
            var14 = var1;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 179:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var14 = 'Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.';
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4 = var4.bind(var8)(var2);
    var2 = 4;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = var5.createAnimatedComponent;
    var2 = var2.bind(var5)(var4);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/AccessibilityView/AccessibilityView.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AccessibilityView'] = var4;
    var3['AccessibilityViewAnimated'] = var2;
    return var1;
})();