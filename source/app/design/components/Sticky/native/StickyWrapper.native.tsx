// app/design/components/Sticky/native/StickyWrapper.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var12 = 0;
    var4 = var7[var12];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = native4;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.NOOP;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var5 = var8.createContext;
    var4 = {};
    var10 = 4;
    var11 = var7[var10];
    var14 = var6.bind(var1)(var11);
    var13 = var14.createFakeSharedValue;
    var11 = false;
    var11 = var13.bind(var14)(var11);
    var4['showHeader'] = var11;
    var10 = var7[var10];
    var11 = var6.bind(var1)(var10);
    var10 = var11.createFakeSharedValue;
    var10 = var10.bind(var11)(var12);
    var4['headerHeight'] = var10;
    var4['setShowHeader'] = var9;
    var4['setHeaderHeight'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var5 = {};
    var8 = "function StickyWrapperNativeTsx1(){const{showHeader,headerHeight}=this.__closure;return{position:'relative',height:'100%',width:'100%',paddingTop:showHeader.get()?headerHeight.get():0};}";
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Sticky/native/StickyWrapper.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['StickyContext'] = var4;
    var2 = function StickyWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.initiallyShowHeader;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var10 = true;
 19:
            var7 = var2.children;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var2 = var9[var5];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var14 = var2.bind(var3)(var10);
            _closure2_slot0 = var14;
            var10 = _closure1_slot4;
            var11 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var14;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var11.bind(var10)(var2, var3);
            _closure2_slot1 = var2;
            var2 = var9[var5];
            var11 = var8.bind(var4)(var2);
            var3 = var11.useSharedValue;
            var2 = 0;
            var13 = var3.bind(var11)(var2);
            _closure2_slot2 = var13;
            var12 = var10.useCallback;
            var11 = new Array(1);
            var11[0] = var13;
            var3 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var12.bind(var10)(var3, var11);
            _closure2_slot3 = var3;
            var3 = var9[var5];
            var11 = var8.bind(var4)(var3);
            var8 = var11.useAnimatedStyle;
            var3 = function u() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {'position': 'relative', 'height': '100%', 'width': '100%'};
                    var4 = _closure2_slot0;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 0;
                    if(!var4) { _fun0002_ip = 48; continue _fun0002 }
 35:
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
 48:
                    var1['paddingTop'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['showHeader'] = var14;
            var12['headerHeight'] = var13;
            var3['__closure'] = var12;
            var12 = 8421392603729.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot7;
            var3['__initData'] = var12;
            var8 = var8.bind(var11)(var3);
            var3 = var10.useState;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['showHeader'] = var3;
                var3 = _closure2_slot1;
                var1['setShowHeader'] = var3;
                var3 = _closure2_slot2;
                var1['headerHeight'] = var3;
                var2 = _closure2_slot3;
                var1['setHeaderHeight'] = var2;
                return var1;
            };
            var10 = var3.bind(var10)(var1);
            var3 = _closure1_slot3;
            var1 = 1;
            var1 = var3.bind(var4)(var10, var1);
            var10 = var1[var2];
            var3 = _closure1_slot5;
            var1 = _closure1_slot6;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var10;
            var6 = _closure1_slot1;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var5['style'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['StickyWrapper'] = var2;
    return var1;
})();