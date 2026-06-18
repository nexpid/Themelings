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
        var7 = var7.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
        var _closure1_slot4 = var7;
        var7 = 3;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot5 = var8;
        var7 = var7.jsxs;
        var _closure1_slot6 = var7;
        var7 = 4;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        var10 = 16;
        if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var10 = 0;
case 2:
        var4 = 5;
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
        var _closure1_slot7 = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/VolumeSlider.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function VolumeSlider(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var7 = var3.style;
                var14 = var3.maxTrackTintColor;
                var4 = undefined;
                if(!(var14 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.unsafe_rawColors;
                var14 = var1.PRIMARY_400;
case 4:
                var22 = var3.value;
                var16 = var3.maxVolume;
                if(!(var16 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var16 = _closure1_slot4;
case 6:
                var1 = var3.onValueChange;
                var _closure2_slot0 = var1;
                var11 = var3.onResponderGrant;
                var2 = {'style': 0, 'maxTrackTintColor': 0, 'value': 0, 'maxVolume': 0, 'onValueChange': 0, 'onResponderGrant': 0};
                var12 = null;
                var25 = var2;
                var24 = null;
                var1 = silentSetPrototypeOf(var25, var24);
                var19 = 0;
                var25 = {};
                var24 = var3;
                var23 = var2;
                var1 = copyDataProperties(var25, var24, var23);
                var2 = _closure1_slot7;
                var9 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 7;
                var2 = var10[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useToken;
                var8 = _closure1_slot1;
                var2 = 6;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                var15 = var3.bind(var5)(var2);
                var1 = var1.minTrackColor;
                if(!(var12 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var15 = var1;
case 8:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var9.volumerSlider;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1['style'] = var5;
                var10 = _closure1_slot5;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 8;
                var5 = var18[var5];
                var5 = var17.bind(var4)(var5);
                var7 = var5.VoiceXIcon;
                var5 = {};
                var8 = var9.leftIcon;
                var5['style'] = var8;
                var7 = var10.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var8 = _closure1_slot1;
                var7 = 9;
                var7 = var18[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var20 = var9.volumerSliderNative;
                var7['style'] = var20;
                var20 = 10;
                var20 = var18[var20];
                var21 = var17.bind(var4)(var20);
                var20 = var21.amplitudeToPerceptual;
                var20 = var20.bind(var21)(var22);
                var7['value'] = var20;
                var7['minimumValue'] = var19;
                var7['maximumValue'] = var16;
                var7['minimumTrackTintColor'] = var15;
                var7['maximumTrackTintColor'] = var14;
                var14 = 11;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.xPHVBs;
                var14 = var15.bind(var16)(var14);
                var7['accessibilityLabel'] = var14;
                var14 = function onValueChange(arg1) {
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.perceptualToAmplitude;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var7['onValueChange'] = var14;
                if(!(var12 == var11)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 4;
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
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 12;
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