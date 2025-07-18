// app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var13 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var11 = 0;
        var7 = var6[var11];
        var4 = native4;
        var1 = undefined;
        var7 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {};
        var12 = 3;
        var12 = var6[var12];
        var14 = var5.bind(var1)(var12);
        var12 = var14.isAndroid;
        var12 = var12.bind(var14)();
        if(!var12) { _fun0001_ip = 163; continue _fun0001 }
 140:
        var12 = 4;
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.spacing;
        var11 = var12.PX_8;
 163:
        var10['marginTop'] = var11;
        var4['slider'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot4 = var4;
        var4 = var7.memo;
        var2 = function VEVOOSlider(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var9 = var1.disabled;
                var13 = var1.disabledOpacity;
                var4 = undefined;
                if(!(var13 === var4)) { _fun0002_ip = 22; continue _fun0002 }
 20:
                var13 = false;
 22:
                var8 = var1.initialValue;
                var6 = var1.onValueChange;
                var1 = _closure1_slot4;
                var7 = var1.bind(var4)();
                var3 = _closure1_slot3;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = var7.slider;
                var10 = new Array(2);
                var10[0] = var7;
                var11 = {};
                var7 = 1;
                var12 = var7;
                if(!var13) { _fun0002_ip = 106; continue _fun0002 }
 96:
                var12 = 0.5;
 106:
                var11['opacity'] = var12;
                var10[1] = var11;
                var1['style'] = var10;
                var1['disabled'] = var9;
                var9 = var8.current;
                var8 = null;
                var10 = var8 != var9;
                var8 = undefined;
                if(!var10) { _fun0002_ip = 141; continue _fun0002 }
 138:
                var8 = var9;
 141:
                var1['value'] = var8;
                var8 = 0;
                var1['minimumValue'] = var8;
                var1['maximumValue'] = var7;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var8 = 4;
                var10 = var7[var8];
                var10 = var9.bind(var4)(var10);
                var10 = var10.unsafe_rawColors;
                var10 = var10.BRAND_500;
                var1['minimumTrackTintColor'] = var10;
                var8 = var7[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.PRIMARY_400;
                var1['maximumTrackTintColor'] = var8;
                var1['onValueChange'] = var6;
                var6 = _closure1_slot0;
                var5 = 3;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isAndroid;
                var6 = var5.bind(var6)();
                var5 = undefined;
                if(!var6) { _fun0002_ip = 262; continue _fun0002 }
 253:
                var5 = function() {
                    var1 = true;
                    return var1;
                };
 262:
                var1['onResponderGrant'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 6;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/visual_effect_view/native/overrides/VEVOOSlider.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();