// app/uikit-native/status/Status.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getStatusSource(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            if(var2) { _fun0001_ip = 213; continue _fun0001 }
 15:
            var2 = arg3;
            if(var2) { _fun0001_ip = 189; continue _fun0001 }
 24:
            var2 = _closure1_slot7;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0001_ip = 165; continue _fun0001 }
 41:
            var2 = _closure1_slot7;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0001_ip = 141; continue _fun0001 }
 55:
            var2 = _closure1_slot7;
            var2 = var2.OFFLINE;
            if(!(var2 !== var3)) { _fun0001_ip = 117; continue _fun0001 }
 69:
            var2 = _closure1_slot7;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0001_ip = 117; continue _fun0001 }
 83:
            var2 = _closure1_slot7;
            var2 = var2.ONLINE;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 117:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 141:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 165:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 189:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 213:
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
 0:
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
            if(!(var9 !== var10)) { _fun0002_ip = 300; continue _fun0002 }
 79:
            var9 = _closure1_slot7;
            var9 = var9.IDLE;
            if(!(var9 !== var10)) { _fun0002_ip = 267; continue _fun0002 }
 96:
            var9 = _closure1_slot7;
            var9 = var9.DND;
            if(!(var9 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 113:
            var9 = _closure1_slot7;
            var9 = var9.STREAMING;
            if(!(var9 !== var10)) { _fun0002_ip = 201; continue _fun0002 }
 127:
            var9 = _closure1_slot7;
            var9 = var9.INVISIBLE;
            if(!(var9 !== var10)) { _fun0002_ip = 165; continue _fun0002 }
 141:
            var9 = _closure1_slot7;
            var9 = var9.UNKNOWN;
            if(!(var9 !== var10)) { _fun0002_ip = 165; continue _fun0002 }
 155:
            var9 = _closure1_slot7;
            var9 = var9.OFFLINE;
 165:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.PRIMARY_400;
            _fun0002_ip = 331; continue _fun0002;
 201:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.TWITCH;
            _fun0002_ip = 331; continue _fun0002;
 234:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.RED_400;
            _fun0002_ip = 331; continue _fun0002;
 267:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.YELLOW_300;
            _fun0002_ip = 331; continue _fun0002;
 300:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.GREEN_360;
 331:
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
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/status/Status.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function Status(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.isMobileOnline;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0003_ip = 17; continue _fun0003 }
 15:
            var10 = false;
 17:
            var6 = var1.style;
            var9 = var1.status;
            var11 = var1.size;
            var8 = var1.streaming;
            if(!(var8 === var4)) { _fun0003_ip = 44; continue _fun0003 }
 42:
            var8 = false;
 44:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 16;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var11 = var5.bind(var4)(var11, var10);
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var6;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var11 = _closure1_slot13;
            var11 = var11.statusIcon;
            var5['style'] = var11;
            var7 = _closure1_slot17;
            var7 = var7.bind(var4)(var9, var8, var10);
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
 0:
            var1 = arg1;
            var14 = var1.isMobileOnline;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0004_ip = 19; continue _fun0004 }
 17:
            var14 = false;
 19:
            var7 = var1.style;
            var13 = var1.status;
            var3 = var1.size;
            var12 = var1.streaming;
            if(!(var12 === var4)) { _fun0004_ip = 46; continue _fun0004 }
 44:
            var12 = false;
 46:
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
            var17 = var1.bind(var4)(var3, var13);
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var15 = var1.bind(var4)(var3, var14);
            var3 = _closure1_slot0;
            var1 = 17;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useFlashListAnimationDisabler;
            var1 = null;
            var9 = var1 != var8;
            var1 = '';
            if(!var9) { _fun0004_ip = 162; continue _fun0004 }
 159:
            var1 = var8;
 162:
            var5 = var3.bind(var5)(var1);
            var1 = _closure1_slot3;
            var3 = 2;
            var5 = var1.bind(var4)(var5, var3);
            var1 = 0;
            var18 = var5[var1];
            _closure2_slot0 = var18;
            var16 = 1;
            var21 = var5[var16];
            _closure2_slot1 = var21;
            if(var6) { _fun0004_ip = 211; continue _fun0004 }
 204:
            var23 = var15.width;
            _fun0004_ip = 234; continue _fun0004;
 211:
            var5 = var17.ellipsis;
            var8 = var5.width;
            var5 = _closure1_slot6;
            var5 = var3 * var5;
            var23 = var8 + var5;
 234:
            _closure2_slot2 = var23;
            if(var6) { _fun0004_ip = 248; continue _fun0004 }
 241:
            var22 = var15.height;
            _fun0004_ip = 271; continue _fun0004;
 248:
            var5 = var17.ellipsis;
            var8 = var5.height;
            var5 = _closure1_slot6;
            var5 = var3 * var5;
            var22 = var8 + var5;
 271:
            _closure2_slot3 = var22;
            if(var6) { _fun0004_ip = 285; continue _fun0004 }
 278:
            var20 = var15.borderRadius;
            _fun0004_ip = 289; continue _fun0004;
 285:
            var20 = var23 / var3;
 289:
            _closure2_slot4 = var20;
            var19 = 0;
            if(!var6) { _fun0004_ip = 334; continue _fun0004 }
 298:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.getAnimatedTypingTranslateX;
            var3 = var15.width;
            var19 = var5.bind(var8)(var3);
 334:
            _closure2_slot5 = var19;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 18;
            var3 = var24[var10];
            var8 = var25.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function R() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var7 = 'animate-never';
                    if(!var1) { _fun0005_ip = 31; continue _fun0005 }
 25:
                    var7 = 'respect-motion-settings';
 31:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 19;
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
            var9['enableAnimation'] = var18;
            var18 = 19;
            var24 = var24[var18];
            var24 = var25.bind(var4)(var24);
            var24 = var24.withSpring;
            var9['withSpring'] = var24;
            var9['width'] = var23;
            var23 = _closure1_slot10;
            var9['CHANNEL_SPRING_CONFIG'] = var23;
            var9['height'] = var22;
            var9['onAnimationFinished'] = var21;
            var9['borderRadius'] = var20;
            var9['translateX'] = var19;
            var3['__closure'] = var9;
            var9 = 2188820017597.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot15;
            var3['__initData'] = var9;
            var8 = var5.bind(var8)(var3);
            if(!var6) { _fun0004_ip = 470; continue _fun0004 }
 468:
            var16 = 0;
 470:
            _closure2_slot6 = var16;
            var19 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var10];
            var5 = var19.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function f() {
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 19;
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
            var18 = var1[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.withSpring;
            var9['withSpring'] = var18;
            var9['statusOpacity'] = var16;
            var16 = _closure1_slot10;
            var9['CHANNEL_SPRING_CONFIG'] = var16;
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
            var5[0] = var15;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var15 = false;
            var1['collapsable'] = var15;
            if(!var6) { _fun0004_ip = 775; continue _fun0004 }
 632:
            var8 = _closure1_slot11;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = var18[var10];
            var5 = var16.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var5['collapsable'] = var15;
            var15 = _closure1_slot8;
            var5['entering'] = var15;
            var15 = _closure1_slot9;
            var5['exiting'] = var15;
            var19 = {};
            var15 = 'absolute';
            var19['position'] = var15;
            var15 = _closure1_slot6;
            var19['left'] = var15;
            var19['top'] = var15;
            var15 = new Array(1);
            var15[0] = var19;
            var5['style'] = var15;
            var15 = 20;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var18 = var17.ellipsis;
            var15['style'] = var18;
            var17 = var17.ellipsisDot;
            var15['dotStyle'] = var17;
            var17 = true;
            var15['disableScale'] = var17;
            var15 = var8.bind(var4)(var16, var15);
            var5['children'] = var15;
            var6 = var8.bind(var4)(var7, var5);
 775:
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
            var15 = _closure1_slot13;
            var15 = var15.statusIcon;
            var9['style'] = var15;
            var11 = _closure1_slot17;
            var11 = var11.bind(var4)(var13, var12, var14);
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