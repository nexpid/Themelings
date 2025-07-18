// app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.HEADER_CORNER_RADIUS;
    var11 = var4.MIDNIGHT_BORDER_WIDTH;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'zIndex': 1, 'top': 0, 'width': '100%'};
    var12 = 6;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var14;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderLeftColor'] = var12;
    var9['borderLeftWidth'] = var11;
    var4['midnightContainer'] = var9;
    var9 = {};
    var9['height'] = var10;
    var4['additionalHeight'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelScreenAnimatedFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.translateX;
            var _closure2_slot0 = var16;
            var15 = var1.maxWidth;
            var _closure2_slot1 = var15;
            var14 = var1.isChatLockedOpen;
            var _closure2_slot2 = var14;
            var1 = _closure1_slot7;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var1 = _closure1_slot4;
            var11 = var1.MIDNIGHT;
            var8 = _closure1_slot0;
            var1 = 8;
            var7 = var5[var1];
            var10 = var8.bind(var4)(var7);
            var7 = var10.useAnimatedStyle;
            var3 = function S() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var6 = var3 === var2;
                    if(var6) { _fun0002_ip = 31; continue _fun0002 }
 27:
                    var6 = _closure2_slot2;
 31:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.withTiming;
                    var3 = 1;
                    if(!var6) { _fun0002_ip = 71; continue _fun0002 }
 69:
                    var3 = 0;
 71:
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.STANDARD_EASING;
                    var2['easing'] = var8;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    if(var6) { _fun0002_ip = 135; continue _fun0002 }
 127:
                    var6 = var7.SIDE_PANEL_OPEN_DURATION_MS;
                    _fun0002_ip = 141; continue _fun0002;
 135:
                    var6 = var7.SIDE_PANEL_CLOSE_DURATION_MS;
 141:
                    var2['duration'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['translateX'] = var16;
            var13['maxWidth'] = var15;
            var13['isChatLockedOpen'] = var14;
            var14 = 9;
            var14 = var5[var14];
            var14 = var8.bind(var4)(var14);
            var14 = var14.withTiming;
            var13['withTiming'] = var14;
            var14 = 10;
            var14 = var5[var14];
            var14 = var8.bind(var4)(var14);
            var14 = var14.STANDARD_EASING;
            var13['STANDARD_EASING'] = var14;
            var14 = 11;
            var15 = var5[var14];
            var15 = var8.bind(var4)(var15);
            var15 = var15.SIDE_PANEL_CLOSE_DURATION_MS;
            var13['SIDE_PANEL_CLOSE_DURATION_MS'] = var15;
            var14 = var5[var14];
            var14 = var8.bind(var4)(var14);
            var14 = var14.SIDE_PANEL_OPEN_DURATION_MS;
            var13['SIDE_PANEL_OPEN_DURATION_MS'] = var14;
            var3['__closure'] = var13;
            var13 = 9063010717249.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot8;
            var3['__initData'] = var13;
            var7 = var7.bind(var10)(var3);
            var3 = 12;
            var3 = var5[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useGradientTop;
            var8 = var3.bind(var8)();
            var3 = _closure1_slot6;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var10 = var9.container;
            var5 = new Array(4);
            var5[0] = var10;
            var10 = undefined;
            if(!(var12 === var11)) { _fun0001_ip = 328; continue _fun0001 }
 322:
            var10 = var9.midnightContainer;
 328:
            var5[1] = var10;
            var5[2] = var8;
            var5[3] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 13;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SafeAreaPaddingView;
            var5 = {};
            var10 = true;
            var5['top'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.additionalHeight;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();