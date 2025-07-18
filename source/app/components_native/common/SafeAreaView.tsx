// app/components_native/common/SafeAreaView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/SafeAreaView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafeAreaPaddingView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var14 = var7.top;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0001_ip = 18; continue _fun0001 }
 16:
            var14 = false;
 18:
            var12 = var7.bottom;
            if(!(var12 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var12 = false;
 29:
            var11 = var7.left;
            if(!(var11 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var11 = false;
 40:
            var8 = var7.right;
            if(!(var8 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var8 = false;
 51:
            var3 = var7.style;
            var5 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'style': 0};
            var10 = null;
            var20 = var5;
            var19 = null;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var7;
            var18 = var5;
            var5 = copyDataProperties(var20, var19, var18);
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 3;
            var7 = var13[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.bind(var4)();
            var13 = _closure1_slot2;
            var7 = var13.useRef;
            var7 = var7.bind(var13)(var10);
            _closure2_slot0 = var7;
            if(!(var10 == var3)) { _fun0001_ip = 156; continue _fun0001 }
 154:
            var3 = {};
 156:
            var17 = var3.paddingTop;
            if(var17) { _fun0001_ip = 171; continue _fun0001 }
 165:
            var17 = var3.paddingVertical;
 171:
            if(var17) { _fun0001_ip = 176; continue _fun0001 }
 174:
            var17 = 0;
 176:
            var15 = var3.paddingBottom;
            if(var15) { _fun0001_ip = 191; continue _fun0001 }
 185:
            var15 = var3.paddingVertical;
 191:
            if(var15) { _fun0001_ip = 196; continue _fun0001 }
 194:
            var15 = 0;
 196:
            var13 = var3.paddingLeft;
            if(var13) { _fun0001_ip = 210; continue _fun0001 }
 205:
            var13 = var3.paddingHorizontal;
 210:
            if(var13) { _fun0001_ip = 215; continue _fun0001 }
 213:
            var13 = 0;
 215:
            var10 = var3.paddingRight;
            if(var10) { _fun0001_ip = 229; continue _fun0001 }
 224:
            var10 = var3.paddingHorizontal;
 229:
            if(var10) { _fun0001_ip = 234; continue _fun0001 }
 232:
            var10 = 0;
 234:
            var6 = new Array(5);
            var6[0] = var3;
            var3 = undefined;
            if(!var14) { _fun0001_ip = 266; continue _fun0001 }
 247:
            var14 = {};
            var16 = var9.top;
            var16 = var16 + var17;
            var14['paddingTop'] = var16;
            var3 = var14;
 266:
            var6[1] = var3;
            var3 = undefined;
            if(!var12) { _fun0001_ip = 294; continue _fun0001 }
 275:
            var12 = {};
            var14 = var9.bottom;
            var14 = var14 + var15;
            var12['paddingBottom'] = var14;
            var3 = var12;
 294:
            var6[2] = var3;
            var3 = undefined;
            if(!var11) { _fun0001_ip = 322; continue _fun0001 }
 303:
            var11 = {};
            var12 = var9.left;
            var12 = var12 + var13;
            var11['paddingLeft'] = var12;
            var3 = var11;
 322:
            var6[3] = var3;
            var3 = undefined;
            if(!var8) { _fun0001_ip = 350; continue _fun0001 }
 331:
            var8 = {};
            var9 = var9.right;
            var9 = var9 + var10;
            var8['paddingRight'] = var9;
            var3 = var8;
 350:
            var6[4] = var3;
            _closure2_slot1 = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)(var7);
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)(var6, var3);
            _closure2_slot2 = var7;
            if(!var7) { _fun0001_ip = 415; continue _fun0001 }
 408:
            _closure2_slot1 = var3;
            var6 = var3;
 415:
            var7 = _closure1_slot2;
            var3 = var7.useInsertionEffect;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 24; continue _fun0002 }
 10:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var2['current'] = var1;
 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var6;
            var20 = var1;
            var19 = var5;
            var5 = copyDataProperties(var20, var19);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SafeAreaPaddingView'] = var2;
    return var1;
})();