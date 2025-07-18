// app/components_native/common/VolumeSlider.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
        var4 = 0;
        var8 = var6[var4];
        var7 = native4;
        var1 = undefined;
        var7 = var7.bind(var1)(var8);
        var7 = 1;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.View;
        var _closure1_slot3 = var8;
        var8 = var7.StyleSheet;
        var7 = 2;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var9 = var7.jsx;
        var _closure1_slot4 = var9;
        var7 = var7.jsxs;
        var _closure1_slot5 = var7;
        var7 = 3;
        var7 = var6[var7];
        var9 = var5.bind(var1)(var7);
        var7 = var9.isAndroid;
        var7 = var7.bind(var9)();
        var10 = 16;
        if(!var7) { _fun0001_ip = 160; continue _fun0001 }
 158:
        var10 = 0;
 160:
        var7 = var8.create;
        var4 = {};
        var9 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['volumerSlider'] = var9;
        var9 = {};
        var9['marginRight'] = var10;
        var4['leftIcon'] = var9;
        var9 = {};
        var9['marginLeft'] = var10;
        var4['rightIcon'] = var9;
        var9 = {'flex': 1, 'marginVertical': 4294967286, 'backgroundColor': 'transparent'};
        var4['volumerSliderNative'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot6 = var4;
        var4 = 10;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/VolumeSlider.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var6 = var1.style;
                var13 = var1.minTrackColor;
                var4 = undefined;
                if(!(var13 === var4)) { _fun0002_ip = 58; continue _fun0002 }
 24:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var13 = var2.BRAND_500;
 58:
                var11 = var1.maxTrackTintColor;
                if(!(var11 === var4)) { _fun0002_ip = 102; continue _fun0002 }
 68:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var11 = var2.PRIMARY_400;
 102:
                var19 = var1.value;
                var14 = var1.maxVolume;
                if(!(var14 === var4)) { _fun0002_ip = 120; continue _fun0002 }
 117:
                var14 = 200;
 120:
                var2 = var1.onValueChange;
                var _closure2_slot0 = var2;
                var10 = var1.onResponderGrant;
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = _closure1_slot6;
                var7 = var5.volumerSlider;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1['style'] = var5;
                var8 = _closure1_slot4;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 5;
                var5 = var16[var5];
                var5 = var15.bind(var4)(var5);
                var6 = var5.VoiceXIcon;
                var5 = {};
                var7 = _closure1_slot6;
                var7 = var7.leftIcon;
                var5['style'] = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var7 = _closure1_slot1;
                var6 = 6;
                var6 = var16[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var17 = _closure1_slot6;
                var17 = var17.volumerSliderNative;
                var6['style'] = var17;
                var17 = 7;
                var17 = var16[var17];
                var18 = var15.bind(var4)(var17);
                var17 = var18.amplitudeToPerceptual;
                var17 = var17.bind(var18)(var19);
                var6['value'] = var17;
                var17 = 0;
                var6['minimumValue'] = var17;
                var6['maximumValue'] = var14;
                var6['minimumTrackTintColor'] = var13;
                var6['maximumTrackTintColor'] = var11;
                var11 = 8;
                var13 = var16[var11];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var16[var11];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.xPHVBg;
                var11 = var13.bind(var14)(var11);
                var6['accessibilityLabel'] = var11;
                var11 = function onValueChange(arg1) {
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.perceptualToAmplitude;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6['onValueChange'] = var11;
                var11 = null;
                if(!(var11 == var10)) { _fun0002_ip = 425; continue _fun0002 }
 383:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 3;
                var11 = var14[var11];
                var13 = var13.bind(var4)(var11);
                var11 = var13.isAndroid;
                var13 = var11.bind(var13)();
                var11 = undefined;
                if(!var13) { _fun0002_ip = 422; continue _fun0002 }
 417:
                var11 = function() {
                    var1 = true;
                    return var1;
                };
 422:
                var10 = var11;
 425:
                var6['onResponderGrant'] = var10;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 9;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.VoiceNormalIcon;
                var6 = {};
                var9 = _closure1_slot6;
                var9 = var9.rightIcon;
                var6['style'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();