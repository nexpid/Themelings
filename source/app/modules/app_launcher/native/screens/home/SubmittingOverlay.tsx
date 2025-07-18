// app/modules/app_launcher/native/screens/home/SubmittingOverlay.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 2;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BACKDROP;
    var9['backgroundColor'] = var10;
    var4['ellipsis'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/SubmittingOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubmittingOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.submitting;
            var _closure2_slot0 = var5;
            var10 = var1.style;
            var1 = _closure1_slot4;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var3 = var7[var1];
            var8 = var13.bind(var4)(var3);
            var3 = var8.useAnimatedStyle;
            var2 = function o() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot0;
                    var4 = 0;
                    if(!var3) { _fun0002_ip = 47; continue _fun0002 }
 44:
                    var4 = 1;
 47:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var12 = 4;
            var12 = var7[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.withSpring;
            var11['withSpring'] = var12;
            var11['submitting'] = var5;
            var12 = 5;
            var12 = var7[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.SUBTLE_SPRING;
            var11['SUBTLE_SPRING'] = var12;
            var2['__closure'] = var11;
            var11 = 492443733468.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot5;
            var2['__initData'] = var11;
            var8 = var3.bind(var8)(var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = new Array(3);
            var7[0] = var10;
            var9 = var9.ellipsis;
            var7[1] = var9;
            var7[2] = var8;
            var1['style'] = var7;
            if(!var5) { _fun0001_ip = 257; continue _fun0001 }
 207:
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Ellipsis;
            var6 = {'variant': 'active', 'size': 'md'};
            var5 = var8.bind(var4)(var7, var6);
 257:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SubmittingOverlay'] = var2;
    return var1;
})();