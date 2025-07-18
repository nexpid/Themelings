// app/modules/media_viewer/native/useMediaItemSpoilerState.tsx
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
    var4 = {};
    var7 = 'function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMediaItemSpoilerState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaItemSpoilerState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var9 = 2;
            var1 = var4[var9];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var8 = var1.MediaViewerSourcesStore;
            var3 = var8.useState;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.spoilerIndexes;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var8)(var1);
            var _closure2_slot1 = var1;
            var8 = _closure1_slot3;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var1);
            var3 = _closure1_slot2;
            var8 = var3.bind(var6)(var8, var9);
            var9 = 0;
            var3 = var8[var9];
            var10 = 1;
            var8 = var8[var10];
            var _closure2_slot2 = var8;
            var8 = 3;
            var4 = var4[var8];
            var7 = var7.bind(var6)(var4);
            var4 = var7.useSharedValue;
            if(!var1) { _fun0001_ip = 125; continue _fun0001 }
 122:
            var9 = var10;
 125:
            var7 = var4.bind(var7)(var9);
            var _closure2_slot3 = var7;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 4;
                    var5 = var5[var1];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var5);
                    var8 = var9.withTiming;
                    var5 = _closure2_slot1;
                    var7 = 0;
                    if(!var5) { _fun0002_ip = 54; continue _fun0002 }
 51:
                    var7 = 1;
 54:
                    var6 = {};
                    var5 = 200;
                    var6['duration'] = var5;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var5 = 5;
                    var5 = var14[var5];
                    var5 = var13.bind(var1)(var5);
                    var5 = var5.STANDARD_EASING;
                    var6['easing'] = var5;
                    var5 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.runOnJS;
                        var3 = _closure2_slot2;
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = {};
                    var12 = 3;
                    var12 = var14[var12];
                    var12 = var13.bind(var1)(var12);
                    var12 = var12.runOnJS;
                    var10['runOnJS'] = var12;
                    var12 = _closure2_slot2;
                    var10['setSpoilerActive'] = var12;
                    var11 = _closure2_slot1;
                    var10['hasSpoiler'] = var11;
                    var5['__closure'] = var10;
                    var10 = 15930548853488.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot4;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var18 = var7;
                    var17 = var6;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var4);
            var1 = new Array(2);
            var1[0] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useAnimatedStyle;
            var2 = function S() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var6 = {};
            var6['spoilerOpacity'] = var7;
            var2['__closure'] = var6;
            var6 = 8496335051493.0;
            var2['__workletHash'] = var6;
            var5 = _closure1_slot5;
            var2['__initData'] = var5;
            var2 = var3.bind(var4)(var2);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useMediaItemSpoilerState'] = var2;
    return var1;
})();