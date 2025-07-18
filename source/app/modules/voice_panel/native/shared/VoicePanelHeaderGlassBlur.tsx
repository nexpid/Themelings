// app/modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var _closure1_slot3 = var9;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var8 = var9.create;
    var4 = {};
    var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['blur'] = var11;
    var11 = {'position': 'absolute', 'left': 0, 'right': 0};
    var12 = var9.hairlineWidth;
    var12 = -var12;
    var11['bottom'] = var12;
    var12 = var9.hairlineWidth;
    var11['height'] = var12;
    var4['strokeContainer'] = var11;
    var11 = {'height': null, 'opacity': 0.15, 'backgroundColor': 'white'};
    var12 = var9.hairlineWidth;
    var11['height'] = var12;
    var4['stroke'] = var11;
    var11 = {'height': null, 'opacity': 0.8, 'backgroundColor': 'black'};
    var12 = var9.hairlineWidth;
    var11['height'] = var12;
    var4['strokeAlt'] = var11;
    var11 = {'height': null, 'opacity': 0.2, 'backgroundColor': 'black'};
    var12 = var9.hairlineWidth;
    var11['height'] = var12;
    var4['strokeAltLight'] = var11;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}';
    var4['code'] = var8;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function HeaderGlassBlur(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.shown;
            var _closure2_slot0 = var8;
            var10 = var2.blurStyle;
            var7 = var2.style;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 4;
            var3 = var9[var2];
            var4 = undefined;
            var6 = var11.bind(var4)(var3);
            var5 = var6.useAnimatedStyle;
            var3 = function k() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 23:
                    var4 = _closure1_slot7;
                    var3 = 1;
                    if(!var4) { _fun0002_ip = 46; continue _fun0002 }
 36:
                    var3 = 0.7;
 46:
                    var2 = var3;
 49:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['shown'] = var8;
            var13 = _closure1_slot7;
            var12['IS_ANDROID'] = var13;
            var3['__closure'] = var12;
            var12 = 3451055086565.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot9;
            var3['__initData'] = var12;
            var6 = var5.bind(var6)(var3);
            var2 = var9[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useAnimatedProps;
            var1 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    if(!var5) { _fun0003_ip = 63; continue _fun0003 }
 53:
                    var2 = 0.3;
 63:
                    var2 = var3.bind(var4)(var2);
                    var1['blurAmount'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var12 = 6;
            var12 = var9[var12];
            var12 = var11.bind(var4)(var12);
            var12 = var12.withSpring;
            var5['withSpring'] = var12;
            var5['shown'] = var8;
            var1['__closure'] = var5;
            var5 = 5642055202507.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var8 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var16 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var1 = 8;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = _closure1_slot6;
            var12 = var5.blur;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot8;
            var5 = {};
            var12 = 'ultra-thin';
            var5['blurStyle'] = var12;
            var17 = 9;
            var9 = var9[var17];
            var11 = var11.bind(var4)(var9);
            var9 = var11.isThemeDark;
            var11 = var9.bind(var11)(var16);
            var9 = 'light';
            if(!var11) { _fun0001_ip = 327; continue _fun0001 }
 323:
            var9 = 'dark';
 327:
            var5['blurTheme'] = var9;
            var9 = _closure1_slot3;
            var11 = var9.absoluteFillObject;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var5['style'] = var9;
            var5['animatedProps'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 10;
            var6 = var13[var10];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var18 = _closure1_slot6;
            var9 = var18.strokeContainer;
            var6['style'] = var9;
            var12 = _closure1_slot4;
            var9 = var13[var10];
            var15 = var11.bind(var4)(var9);
            var9 = {};
            var18 = var18.stroke;
            var9['style'] = var18;
            var15 = var12.bind(var4)(var15, var9);
            var9 = new Array(2);
            var9[0] = var15;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = _closure1_slot0;
            var13 = var13[var17];
            var15 = var15.bind(var4)(var13);
            var13 = var15.isThemeDark;
            var13 = var13.bind(var15)(var16);
            var14 = _closure1_slot6;
            if(var13) { _fun0001_ip = 506; continue _fun0001 }
 498:
            var13 = var14.strokeAltLight;
            _fun0001_ip = 512; continue _fun0001;
 506:
            var13 = var14.strokeAlt;
 512:
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();