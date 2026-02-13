// app/components_native/common/VolumeSlider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
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
        var7 = metroImportAll;
        var1 = undefined;
        var7 = var7.bind(var1)(var8);
        var7 = 1;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.View;
        var _closure1_slot3 = var7;
        var7 = 2;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot4 = var8;
        var7 = var7.jsxs;
        var _closure1_slot5 = var7;
        var7 = 3;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        var10 = 16;
        if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var10 = 0;
case 2:
        var4 = 4;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
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
        var4 = 11;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/VolumeSlider.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var7 = var1.style;
                var14 = var1.minTrackColor;
                var4 = undefined;
                if(!(var14 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var14 = var2.BRAND_500;
case 4:
                var12 = var1.maxTrackTintColor;
                if(!(var12 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var12 = var2.PRIMARY_400;
case 6:
                var20 = var1.value;
                var15 = var1.maxVolume;
                if(!(var15 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var15 = 200;
case 8:
                var2 = var1.onValueChange;
                var _closure2_slot0 = var2;
                var11 = var1.onResponderGrant;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var9.volumerSlider;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1['style'] = var5;
                var10 = _closure1_slot4;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 6;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var7 = var5.VoiceXIcon;
                var5 = {};
                var8 = var9.leftIcon;
                var5['style'] = var8;
                var7 = var10.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var8 = _closure1_slot1;
                var7 = 7;
                var7 = var17[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var18 = var9.volumerSliderNative;
                var7['style'] = var18;
                var18 = 8;
                var18 = var17[var18];
                var19 = var16.bind(var4)(var18);
                var18 = var19.amplitudeToPerceptual;
                var18 = var18.bind(var19)(var20);
                var7['value'] = var18;
                var18 = 0;
                var7['minimumValue'] = var18;
                var7['maximumValue'] = var15;
                var7['minimumTrackTintColor'] = var14;
                var7['maximumTrackTintColor'] = var12;
                var12 = 9;
                var14 = var17[var12];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.xPHVBs;
                var12 = var14.bind(var15)(var12);
                var7['accessibilityLabel'] = var12;
                var12 = function onValueChange(arg1) {
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.perceptualToAmplitude;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var7['onValueChange'] = var12;
                var12 = null;
                if(!(var12 == var11)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 3;
                var12 = var15[var12];
                var14 = var14.bind(var4)(var12);
                var12 = var14.isAndroid;
                var14 = var12.bind(var14)();
                var12 = undefined;
                if(!var14) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var12 = function() {
                    var1 = true;
                    return var1;
                };
case 12:
                var11 = var12;
case 10:
                var7['onResponderGrant'] = var11;
                var7 = var10.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 10;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.VoiceNormalIcon;
                var6 = {};
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