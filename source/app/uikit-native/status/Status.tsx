// app/uikit-native/status/Status.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getStatusSource(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = arg4;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = arg3;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot7;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot7;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.OFFLINE;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot7;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var2 = _closure1_slot7;
            var2 = var2.ONLINE;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 12:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 10:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 8:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 6:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 4:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 2:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_PADDING;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TYPING_ENTERING;
    var _closure1_slot8 = var7;
    var7 = var4.TYPING_EXITING;
    var _closure1_slot9 = var7;
    var4 = var4.CHANNEL_SPRING_CONFIG;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%'};
    var4['statusIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg2;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var4.getStatusTypingDimensions;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var7 = var1.width;
            var8 = var1.height;
            var4 = var1.dotSize;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot7;
            var9 = var9.ONLINE;
            if(!(var9 !== var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var9 = _closure1_slot7;
            var9 = var9.IDLE;
            if(!(var9 !== var10)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = _closure1_slot7;
            var9 = var9.DND;
            if(!(var9 !== var10)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = _closure1_slot7;
            var9 = var9.STREAMING;
            if(!(var9 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var9 = _closure1_slot7;
            var9 = var9.INVISIBLE;
            if(!(var9 !== var10)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var9 = _closure1_slot7;
            var9 = var9.UNKNOWN;
            if(!(var9 !== var10)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var9 = _closure1_slot7;
            var9 = var9.OFFLINE;
case 23:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.PRIMARY_400;
            _fun0002_ip = 26; continue _fun0002;
case 21:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.TWITCH;
            _fun0002_ip = 26; continue _fun0002;
case 19:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.RED_400;
            _fun0002_ip = 26; continue _fun0002;
case 17:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.YELLOW_300;
            _fun0002_ip = 26; continue _fun0002;
case 15:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.GREEN_360;
case 26:
            var2['backgroundColor'] = var9;
            var2['borderRadius'] = var8;
            var2['height'] = var8;
            var2['width'] = var7;
            var7 = 4;
            var2['paddingStart'] = var7;
            var7 = 2;
            var2['paddingEnd'] = var7;
            var7 = 0;
            var2['marginRight'] = var7;
            var1['ellipsis'] = var2;
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var4;
            var4 = _closure1_slot1;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.WHITE;
            var2['backgroundColor'] = var3;
            var1['ellipsisDot'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/status/Status.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function Status(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.isMobileOnline;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0003_ip = 27; continue _fun0003 }
case 3:
            var11 = false;
case 27:
            var10 = var1.isVROnline;
            if(!(var10 === var4)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = false;
case 28:
            var6 = var1.style;
            var9 = var1.status;
            var12 = var1.size;
            var8 = var1.streaming;
            if(!(var8 === var4)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var8 = false;
case 30:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 17;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var12 = var5.bind(var4)(var12, var11);
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var6;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var12 = _closure1_slot13;
            var12 = var12.statusIcon;
            var5['style'] = var12;
            var7 = _closure1_slot17;
            var19 = undefined;
            var18 = var9;
            var17 = var8;
            var16 = var11;
            var15 = var10;
            var7 = var19[var7](var18, var17, var16, var15, var14);
            var5['source'] = var7;
            var7 = 'stretch';
            var5['resizeMode'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function StatusWithTyping(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var15 = var1.isMobileOnline;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0004_ip = 32; continue _fun0004 }
case 27:
            var15 = false;
case 32:
            var14 = var1.isVROnline;
            if(!(var14 === var4)) { _fun0004_ip = 33; continue _fun0004 }
case 28:
            var14 = false;
case 33:
            var7 = var1.style;
            var13 = var1.status;
            var3 = var1.size;
            var12 = var1.streaming;
            if(!(var12 === var4)) { _fun0004_ip = 34; continue _fun0004 }
case 30:
            var12 = false;
case 34:
            var6 = var1.typing;
            var8 = var1.userId;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot14;
            var18 = var1.bind(var4)(var3, var13);
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var16 = var1.bind(var4)(var3, var15);
            var3 = _closure1_slot0;
            var1 = 18;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useFlashListAnimationDisabler;
            var1 = null;
            var9 = var1 != var8;
            var1 = '';
            if(!var9) { _fun0004_ip = 8; continue _fun0004 }
case 35:
            var1 = var8;
case 8:
            var5 = var3.bind(var5)(var1);
            var1 = _closure1_slot3;
            var3 = 2;
            var5 = var1.bind(var4)(var5, var3);
            var1 = 0;
            var19 = var5[var1];
            _closure2_slot0 = var19;
            var17 = 1;
            var22 = var5[var17];
            _closure2_slot1 = var22;
            if(var6) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var24 = var16.width;
            _fun0004_ip = 2; continue _fun0004;
case 36:
            var5 = var18.ellipsis;
            var8 = var5.width;
            var5 = _closure1_slot6;
            var5 = var3 * var5;
            var24 = var8 + var5;
case 2:
            _closure2_slot2 = var24;
            if(var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var23 = var16.height;
            _fun0004_ip = 40; continue _fun0004;
case 38:
            var5 = var18.ellipsis;
            var8 = var5.height;
            var5 = _closure1_slot6;
            var5 = var3 * var5;
            var23 = var8 + var5;
case 40:
            _closure2_slot3 = var23;
            if(var6) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var21 = var16.borderRadius;
            _fun0004_ip = 43; continue _fun0004;
case 41:
            var21 = var24 / var3;
case 43:
            _closure2_slot4 = var21;
            var20 = 0;
            if(!var6) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.getAnimatedTypingTranslateX;
            var3 = var16.width;
            var20 = var5.bind(var8)(var3);
case 44:
            _closure2_slot5 = var20;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 19;
            var3 = var25[var10];
            var8 = var26.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function f() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var7 = 'animate-never';
                    if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 46:
                    var7 = 'respect-motion-settings';
case 33:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 20;
                    var3 = var9[var4];
                    var5 = undefined;
                    var11 = var8.bind(var5)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot2;
                    var6 = _closure1_slot10;
                    var3 = var10.bind(var11)(var3, var6, var7);
                    var1['width'] = var3;
                    var3 = var9[var4];
                    var12 = var8.bind(var5)(var3);
                    var11 = var12.withSpring;
                    var16 = _closure2_slot3;
                    var13 = _closure2_slot1;
                    var17 = var12;
                    var15 = var6;
                    var14 = var7;
                    var3 = var17[var11](var16, var15, var14, var13, var12);
                    var1['height'] = var3;
                    var3 = var9[var4];
                    var11 = var8.bind(var5)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot4;
                    var3 = var10.bind(var11)(var3, var6, var7);
                    var1['borderRadius'] = var3;
                    var3 = {};
                    var4 = var9[var4];
                    var5 = var8.bind(var5)(var4);
                    var4 = var5.withSpring;
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var5)(var2, var6, var7);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var9['enableAnimation'] = var19;
            var19 = 20;
            var25 = var25[var19];
            var25 = var26.bind(var4)(var25);
            var25 = var25.withSpring;
            var9['withSpring'] = var25;
            var9['width'] = var24;
            var24 = _closure1_slot10;
            var9['CHANNEL_SPRING_CONFIG'] = var24;
            var9['height'] = var23;
            var9['onAnimationFinished'] = var22;
            var9['borderRadius'] = var21;
            var9['translateX'] = var20;
            var3['__closure'] = var9;
            var9 = 2188820017597.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot15;
            var3['__initData'] = var9;
            var8 = var5.bind(var8)(var3);
            if(!var6) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var17 = 0;
case 47:
            _closure2_slot6 = var17;
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var10];
            var5 = var20.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function O() {
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var3 = _closure2_slot6;
                var2 = _closure1_slot10;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var9 = {};
            var19 = var1[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.withSpring;
            var9['withSpring'] = var19;
            var9['statusOpacity'] = var17;
            var17 = _closure1_slot10;
            var9['CHANNEL_SPRING_CONFIG'] = var17;
            var2['__closure'] = var9;
            var9 = 7224613224414.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot16;
            var2['__initData'] = var9;
            var9 = var3.bind(var5)(var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var1 = var1[var10];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var16;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var16 = false;
            var1['collapsable'] = var16;
            if(!var6) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var8 = _closure1_slot11;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = var19[var10];
            var5 = var17.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var5['collapsable'] = var16;
            var16 = _closure1_slot8;
            var5['entering'] = var16;
            var16 = _closure1_slot9;
            var5['exiting'] = var16;
            var20 = {};
            var16 = 'absolute';
            var20['position'] = var16;
            var16 = _closure1_slot6;
            var20['left'] = var16;
            var20['top'] = var16;
            var16 = new Array(1);
            var16[0] = var20;
            var5['style'] = var16;
            var16 = 21;
            var16 = var19[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var19 = var18.ellipsis;
            var16['style'] = var19;
            var18 = var18.ellipsisDot;
            var16['dotStyle'] = var18;
            var18 = true;
            var16['disableScale'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var5['children'] = var16;
            var6 = var8.bind(var4)(var7, var5);
case 49:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var9;
            var10 = _closure1_slot4;
            var9 = {};
            var16 = _closure1_slot13;
            var16 = var16.statusIcon;
            var9['style'] = var16;
            var11 = _closure1_slot17;
            var31 = undefined;
            var30 = var13;
            var29 = var12;
            var28 = var15;
            var27 = var14;
            var11 = var31[var11](var30, var29, var28, var27, var26);
            var9['source'] = var11;
            var11 = 'stretch';
            var9['resizeMode'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['StatusWithTyping'] = var2;
    return var1;
})();