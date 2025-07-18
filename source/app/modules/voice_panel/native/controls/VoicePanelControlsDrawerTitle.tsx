// app/modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.StyleSheet;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CONTROLS_DRAWER_HEADER_SIZE;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'justifyContent': 'center', 'alignItems': 'center', 'padding': 16};
    var10['height'] = var11;
    var4['titleWrapper'] = var10;
    var10 = {'borderRadius': null, 'paddingHorizontal': 12, 'paddingTop': 1, 'paddingBottom': 2};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['titlePill'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FLOATING;
    var10['backgroundColor'] = var11;
    var4['titlePillBG'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}";
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelControlsDrawerTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.title;
            var14 = var2.shown;
            var _closure2_slot0 = var14;
            var13 = var2.disablePill;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var13 = false;
 34:
            var _closure2_slot1 = var13;
            var7 = var2.style;
            var8 = var2.blurStyle;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot6;
            var10 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 6;
            var5 = var15[var2];
            var12 = var3.bind(var4)(var5);
            var6 = var12.useSharedValue;
            var5 = true;
            var12 = var6.bind(var12)(var5);
            _closure2_slot2 = var12;
            var5 = var10.titlePillBG;
            var6 = var5.backgroundColor;
            _closure2_slot3 = var6;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function p() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0002_ip = 30; continue _fun0002 }
 15:
                    var4 = _closure2_slot2;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    _fun0002_ip = 43; continue _fun0002;
 30:
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var4 = var2.bind(var5)();
 43:
                    var5 = 'transparent';
                    var2 = var5;
                    if(!var4) { _fun0002_ip = 67; continue _fun0002 }
 53:
                    var4 = _closure2_slot1;
                    var2 = var5;
                    if(var4) { _fun0002_ip = 67; continue _fun0002 }
 63:
                    var2 = _closure2_slot3;
 67:
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['shown'] = var14;
            var5['_shown'] = var12;
            var5['disablePill'] = var13;
            var5['backgroundColor'] = var6;
            var1['__closure'] = var5;
            var5 = 14837285839887.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot7;
            var1['__initData'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var15[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var16 = var10.titleWrapper;
            var5 = new Array(2);
            var5[0] = var16;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var5 = 8;
            var5 = var15[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var15 = null;
            if(!(var15 != var14)) { _fun0001_ip = 272; continue _fun0001 }
 269:
            var12 = var14;
 272:
            var5['shown'] = var12;
            var12 = _closure1_slot3;
            var12 = var12.absoluteFillObject;
            var5['style'] = var12;
            var5['blurStyle'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 9;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var14 = var10.titlePill;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var6['style'] = var10;
            var10 = _closure1_slot0;
            var9 = 10;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
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
    var4 = 'modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();