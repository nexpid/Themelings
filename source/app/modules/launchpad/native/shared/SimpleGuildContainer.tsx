// app/modules/launchpad/native/shared/SimpleGuildContainer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {'mass': 0.2, 'damping': 40, 'stiffness': 300, 'overshootClamping': true, 'restSpeedThreshold': 1};
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'right': 4294967292, 'bottom': 0};
    var4['badgeWrapper'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.badge;
            var9 = var1.unread;
            var8 = var1.backgroundColor;
            var1 = _closure1_slot10;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = 0;
            if(!(var10 <= var1)) { _fun0001_ip = 44; continue _fun0001 }
 39:
            var1 = null;
            if(!var9) { _fun0001_ip = 115; continue _fun0001 }
 44:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.badgeWrapper;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 4;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['value'] = var10;
            var6['unread'] = var9;
            var6['backgroundColor'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 115:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.guildId;
            var6 = var1.activityIndicatorState;
            var8 = var1.backgroundColor;
            var1 = null;
            var3 = var1 == var6;
            var5 = undefined;
            var2 = undefined;
            if(var3) { _fun0002_ip = 37; continue _fun0002 }
 32:
            var2 = var6.source;
 37:
            if(!(var1 == var2)) { _fun0002_ip = 101; continue _fun0002 }
 41:
            var2 = var1 != var7;
            var1 = null;
            if(!var2) { _fun0002_ip = 99; continue _fun0002 }
 50:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['guildId'] = var7;
            var7 = {};
            var7['backgroundColor'] = var8;
            var2['style'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 99:
            _fun0002_ip = 183; continue _fun0002;
 101:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GuildsBarActivityIndicatorBase;
            var2 = {};
            var7 = {};
            var7['backgroundColor'] = var8;
            var2['style'] = var7;
            var7 = var6.source;
            var2['source'] = var7;
            var7 = var6.IconComponent;
            var2['IconComponent'] = var7;
            var6 = var6.isCurrentUserConnected;
            var2['isCurrentUserConnected'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 183:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/SimpleGuildContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SimpleGuildContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var21 = var2.guildIconRef;
            var14 = var2.guildId;
            var22 = var2.style;
            var15 = var2.children;
            var23 = var2.selected;
            var _closure2_slot0 = var23;
            var25 = var2.size;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0003_ip = 50; continue _fun0003 }
 47:
            var25 = 48;
 50:
            var _closure2_slot1 = var25;
            var17 = var2.borderRadius;
            if(!(var17 === var4)) { _fun0003_ip = 106; continue _fun0003 }
 63:
            var3 = 24;
            if(!var23) { _fun0003_ip = 103; continue _fun0003 }
 69:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.radii;
            var3 = var5.lg;
 103:
            var17 = var3;
 106:
            var _closure2_slot2 = var17;
            var10 = var2.badge;
            var _closure2_slot3 = var10;
            var9 = var2.unread;
            var _closure2_slot4 = var9;
            var11 = var2.backgroundColor;
            var _closure2_slot5 = var11;
            var20 = var2.folder;
            if(!(var20 === var4)) { _fun0003_ip = 151; continue _fun0003 }
 149:
            var20 = false;
 151:
            var18 = var2.usingCutout;
            if(!(var18 === var4)) { _fun0003_ip = 163; continue _fun0003 }
 161:
            var18 = false;
 163:
            var _closure2_slot6 = var18;
            var13 = var2.activityIndicatorState;
            var _closure2_slot7 = var13;
            var12 = var2.accessibilityLabel;
            var5 = var2.onAccessibilityAction;
            var16 = var2.onLayout;
            var _closure2_slot8 = var4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var24 = var2.iconStroke;
            _closure2_slot8 = var24;
            var19 = var2.iconBackground;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var3 = new Array(8);
            var3[0] = var23;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var18;
            var3[4] = var25;
            var3[5] = var11;
            var3[6] = var17;
            var3[7] = var13;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var10 = null;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 449; continue _fun0004 }
 17:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0004_ip = 230; continue _fun0004 }
 30:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot5;
                    var6 = {};
                    var7 = {'borderRadius': null, 'borderWidth': 2, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    var15 = _closure2_slot2;
                    var2 = 2;
                    var2 = var15 + var2;
                    var7['borderRadius'] = var2;
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 6;
                    var13 = var13[var2];
                    var2 = undefined;
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.unsafe_rawColors;
                    var13 = var13.BRAND_500;
                    var7['borderColor'] = var13;
                    var14 = _closure2_slot1;
                    var13 = 4;
                    var16 = var14 + var13;
                    var7['width'] = var16;
                    var13 = var14 + var13;
                    var7['height'] = var13;
                    var6['style'] = var7;
                    var7 = var12.bind(var2)(var11, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = {};
                    var13 = {'borderRadius': null, 'borderWidth': 3, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0};
                    var13['borderRadius'] = var15;
                    var15 = _closure2_slot5;
                    var13['borderColor'] = var15;
                    var13['width'] = var14;
                    var13['height'] = var14;
                    var7['style'] = var13;
                    var7 = var12.bind(var2)(var11, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    _fun0004_ip = 446; continue _fun0004;
 230:
                    var6 = _closure1_slot6;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {'style': null, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8, 'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7};
                    var7 = {'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    var3['style'] = var7;
                    var7 = _closure2_slot7;
                    var11 = var10 == var7;
                    var7 = undefined;
                    if(var11) { _fun0004_ip = 312; continue _fun0004 }
 303:
                    var11 = _closure2_slot7;
                    var7 = var11.source;
 312:
                    var11 = var10 != var7;
                    var10 = 0;
                    var7 = 0;
                    if(!var11) { _fun0004_ip = 326; continue _fun0004 }
 323:
                    var7 = 13;
 326:
                    var3['cutoutTopRightSize'] = var7;
                    var7 = _closure2_slot3;
                    var11 = var7 > var10;
                    var7 = 13;
                    if(var11) { _fun0004_ip = 361; continue _fun0004 }
 346:
                    var11 = _closure2_slot4;
                    var10 = 0;
                    if(!var11) { _fun0004_ip = 358; continue _fun0004 }
 355:
                    var10 = 11;
 358:
                    var7 = var10;
 361:
                    var3['cutoutBottomRightSize'] = var7;
                    var11 = 6;
                    var7 = _closure2_slot1;
                    var10 = 4;
                    var10 = var7 + var10;
                    var3['imageSize'] = var10;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.unsafe_rawColors;
                    var9 = var9.BRAND_500;
                    var3['imageBackgroundColor'] = var9;
                    var9 = _closure2_slot2;
                    var8 = 2;
                    var8 = var9 + var8;
                    var3['imageBorderRadius'] = var8;
                    var3['clipInnerAmount'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
 446:
                    var1 = var2;
 449:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            var3 = var8.useMemo;
            var2 = new Array(4);
            var2[0] = var17;
            var2[1] = var18;
            var2[2] = var25;
            var2[3] = var24;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(var2) { _fun0005_ip = 85; continue _fun0005 }
 12:
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var2 = {'position': 'absolute', 'borderWidth': 1};
                    var7 = _closure2_slot8;
                    var7 = var7.color;
                    var2['borderColor'] = var7;
                    var7 = _closure2_slot2;
                    var2['borderRadius'] = var7;
                    var6 = _closure2_slot1;
                    var2['width'] = var6;
                    var2['height'] = var6;
                    var3['style'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 85:
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var22;
            var22 = true;
            var1['accessible'] = var22;
            var22 = {};
            var22['selected'] = var23;
            var1['accessibilityState'] = var22;
            var22 = 'button';
            var1['accessibilityRole'] = var22;
            var1['accessibilityLabel'] = var12;
            var22 = {};
            var12 = 'activate';
            var22['name'] = var12;
            var12 = new Array(1);
            var12[0] = var22;
            var1['accessibilityActions'] = var12;
            var1['onAccessibilityAction'] = var5;
            var12 = _closure1_slot6;
            var5 = {};
            var5['ref'] = var21;
            var5['onLayout'] = var16;
            var16 = {};
            var16['borderRadius'] = var17;
            var17 = 'hidden';
            var16['overflow'] = var17;
            var17 = 'transparent';
            if(var18) { _fun0003_ip = 461; continue _fun0003 }
 447:
            var18 = var11;
            if(var20) { _fun0003_ip = 458; continue _fun0003 }
 453:
            var18 = var19.color;
 458:
            var17 = var18;
 461:
            var16['backgroundColor'] = var17;
            var5['style'] = var16;
            var5['children'] = var15;
            var12 = var12.bind(var4)(var2, var5);
            var5 = new Array(5);
            var5[0] = var12;
            var5[1] = var8;
            var5[2] = var7;
            var8 = _closure1_slot6;
            var12 = _closure1_slot12;
            var7 = {};
            var7['backgroundColor'] = var11;
            var7['guildId'] = var14;
            var7['activityIndicatorState'] = var13;
            var7 = var8.bind(var4)(var12, var7);
            var5[3] = var7;
            var7 = _closure1_slot11;
            var6 = {};
            var6['backgroundColor'] = var11;
            var6['badge'] = var10;
            var6['unread'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SimpleGuildContainer'] = var4;
    var2 = function SimpleGuildContainerAnimated(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var14 = var2.guildIconRef;
            var22 = var2.guildId;
            var13 = var2.style;
            var26 = var2.children;
            var10 = var2.selected;
            var _closure2_slot0 = var10;
            var3 = var2.size;
            var3 = var2.borderRadius;
            var19 = var2.badge;
            var18 = var2.unread;
            var20 = var2.backgroundColor;
            var _closure2_slot1 = var20;
            var4 = var2.folder;
            var4 = var2.usingCutout;
            var21 = var2.activityIndicatorState;
            var9 = var2.accessibilityLabel;
            var8 = var2.onAccessibilityAction;
            var7 = var2.onLayout;
            var12 = var2.onPress;
            var11 = var2.onLongPress;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var6 = _closure1_slot1;
            var15 = _closure1_slot2;
            var4 = 7;
            var4 = var15[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var23 = var4.iconBackground;
            var _closure2_slot2 = var23;
            if(var10) { _fun0006_ip = 188; continue _fun0006 }
 171:
            var4 = null;
            var4 = var4 != var3;
            var17 = 24;
            if(!var4) { _fun0006_ip = 186; continue _fun0006 }
 183:
            var17 = var3;
 186:
            _fun0006_ip = 219; continue _fun0006;
 188:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var17 = var3.lg;
 219:
            _closure2_slot3 = var17;
            var29 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 9;
            var3 = var24[var15];
            var6 = var29.bind(var5)(var3);
            var4 = var6.useDerivedValue;
            var3 = function V() {
                var1 = _closure2_slot3;
                return var1;
            };
            var16 = {};
            var16['targetRadius'] = var17;
            var3['__closure'] = var16;
            var16 = 5259600477627.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot13;
            var3['__initData'] = var16;
            var30 = var4.bind(var6)(var3);
            _closure2_slot4 = var30;
            var3 = var24[var15];
            var6 = var29.bind(var5)(var3);
            var4 = var6.useDerivedValue;
            var3 = function z() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!var2) { _fun0007_ip = 15; continue _fun0007 }
 12:
                    var1 = 1;
 15:
                    return var1;
                }
            };
            var16 = {};
            var16['selected'] = var10;
            var3['__closure'] = var16;
            var16 = 12318204664732.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot14;
            var3['__initData'] = var16;
            var25 = var4.bind(var6)(var3);
            _closure2_slot5 = var25;
            var3 = var24[var15];
            var6 = var29.bind(var5)(var3);
            var4 = var6.useAnimatedStyle;
            var3 = function H() {
                var1 = {'borderRadius': null, 'width': 48, 'height': 48, 'overflow': 'hidden'};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.withSpring;
                var7 = _closure2_slot4;
                var4 = var7.get;
                var4 = var4.bind(var7)();
                var3 = _closure1_slot9;
                var3 = var5.bind(var6)(var4, var3);
                var1['borderRadius'] = var3;
                var2 = _closure2_slot2;
                var2 = var2.color;
                var1['backgroundColor'] = var2;
                return var1;
            };
            var16 = {};
            var31 = 10;
            var17 = var24[var31];
            var17 = var29.bind(var5)(var17);
            var17 = var17.withSpring;
            var16['withSpring'] = var17;
            var16['toRadius'] = var30;
            var27 = _closure1_slot9;
            var16['springConfig'] = var27;
            var17 = 48;
            var16['GUILD_SIZE'] = var17;
            var16['iconBackground'] = var23;
            var3['__closure'] = var16;
            var16 = 11339684212259.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot15;
            var3['__initData'] = var16;
            var28 = var4.bind(var6)(var3);
            var16 = _closure1_slot1;
            var3 = 6;
            var3 = var24[var3];
            var3 = var16.bind(var5)(var3);
            var3 = var3.unsafe_rawColors;
            var32 = var3.BRAND_500;
            _closure2_slot6 = var32;
            var3 = var24[var15];
            var6 = var29.bind(var5)(var3);
            var4 = var6.useAnimatedStyle;
            var3 = function j() {
                var1 = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294, 'width': 52, 'height': 52};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 10;
                var2 = var9[var3];
                var7 = undefined;
                var10 = var8.bind(var7)(var2);
                var5 = var10.withSpring;
                var11 = _closure2_slot4;
                var4 = var11.get;
                var11 = var4.bind(var11)();
                var4 = 2;
                var4 = var11 + var4;
                var6 = _closure1_slot9;
                var4 = var5.bind(var10)(var4, var6);
                var1['borderRadius'] = var4;
                var3 = var9[var3];
                var5 = var8.bind(var7)(var3);
                var4 = var5.withSpring;
                var3 = 9;
                var3 = var9[var3];
                var10 = var8.bind(var7)(var3);
                var9 = var10.interpolate;
                var7 = _closure2_slot5;
                var3 = var7.get;
                var8 = var3.bind(var7)();
                var7 = [0, 1];
                var3 = [0, 2];
                var3 = var9.bind(var10)(var8, var7, var3);
                var3 = var4.bind(var5)(var3, var6);
                var1['borderWidth'] = var3;
                var2 = _closure2_slot6;
                var1['borderColor'] = var2;
                return var1;
            };
            var23 = {};
            var33 = var24[var31];
            var33 = var29.bind(var5)(var33);
            var33 = var33.withSpring;
            var23['withSpring'] = var33;
            var23['toRadius'] = var30;
            var23['springConfig'] = var27;
            var33 = var24[var15];
            var33 = var29.bind(var5)(var33);
            var33 = var33.interpolate;
            var23['interpolate'] = var33;
            var23['toStrokeWidth'] = var25;
            var23['borderColor'] = var32;
            var23['GUILD_SIZE'] = var17;
            var3['__closure'] = var23;
            var23 = 1481885125958.0;
            var3['__workletHash'] = var23;
            var23 = _closure1_slot16;
            var3['__initData'] = var23;
            var23 = var4.bind(var6)(var3);
            var3 = var24[var15];
            var4 = var29.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function M() {
                var1 = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0, 'width': 48, 'height': 48};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 10;
                var2 = var9[var3];
                var7 = undefined;
                var10 = var8.bind(var7)(var2);
                var5 = var10.withSpring;
                var11 = _closure2_slot4;
                var4 = var11.get;
                var4 = var4.bind(var11)();
                var6 = _closure1_slot9;
                var4 = var5.bind(var10)(var4, var6);
                var1['borderRadius'] = var4;
                var3 = var9[var3];
                var5 = var8.bind(var7)(var3);
                var4 = var5.withSpring;
                var3 = 9;
                var3 = var9[var3];
                var10 = var8.bind(var7)(var3);
                var9 = var10.interpolate;
                var7 = _closure2_slot5;
                var3 = var7.get;
                var8 = var3.bind(var7)();
                var7 = [0, 1];
                var3 = [0, 3];
                var3 = var9.bind(var10)(var8, var7, var3);
                var3 = var4.bind(var5)(var3, var6);
                var1['borderWidth'] = var3;
                var2 = _closure2_slot1;
                var1['borderColor'] = var2;
                return var1;
            };
            var6 = {};
            var31 = var24[var31];
            var31 = var29.bind(var5)(var31);
            var31 = var31.withSpring;
            var6['withSpring'] = var31;
            var6['toRadius'] = var30;
            var6['springConfig'] = var27;
            var27 = var24[var15];
            var27 = var29.bind(var5)(var27);
            var27 = var27.interpolate;
            var6['interpolate'] = var27;
            var6['toStrokeWidth'] = var25;
            var6['backgroundColor'] = var20;
            var6['GUILD_SIZE'] = var17;
            var1['__closure'] = var6;
            var6 = 11592745547551.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot17;
            var1['__initData'] = var6;
            var27 = var3.bind(var4)(var1);
            var4 = _closure1_slot8;
            var3 = _closure1_slot7;
            var1 = {};
            var17 = _closure1_slot6;
            var6 = var24[var15];
            var6 = var16.bind(var5)(var6);
            var25 = var6.View;
            var6 = {};
            var6['style'] = var28;
            var6['children'] = var26;
            var25 = var17.bind(var5)(var25, var6);
            var6 = new Array(5);
            var6[0] = var25;
            var25 = var24[var15];
            var25 = var16.bind(var5)(var25);
            var26 = var25.View;
            var25 = {};
            var25['style'] = var27;
            var25 = var17.bind(var5)(var26, var25);
            var6[1] = var25;
            var15 = var24[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.View;
            var15 = {};
            var15['style'] = var23;
            var15 = var17.bind(var5)(var16, var15);
            var6[2] = var15;
            var16 = _closure1_slot12;
            var15 = {};
            var15['backgroundColor'] = var20;
            var15['guildId'] = var22;
            var15['activityIndicatorState'] = var21;
            var15 = var17.bind(var5)(var16, var15);
            var6[3] = var15;
            var16 = _closure1_slot11;
            var15 = {};
            var15['backgroundColor'] = var20;
            var15['badge'] = var19;
            var15['unread'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var6[4] = var15;
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 == var12)) { _fun0006_ip = 976; continue _fun0006 }
 950:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var1 = {};
            var1['style'] = var13;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 1054; continue _fun0006;
 976:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var2['ref'] = var14;
            var2['style'] = var13;
            var2['onPress'] = var12;
            var2['onLongPress'] = var11;
            var11 = 'button';
            var2['accessibilityRole'] = var11;
            var11 = true;
            var2['accessible'] = var11;
            var2['accessibilityLabel'] = var9;
            var9 = {};
            var9['selected'] = var10;
            var2['accessibilityState'] = var9;
            var2['onAccessibilityAction'] = var8;
            var2['onLayout'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1054:
            return var1;
        }
    };
    var3['SimpleGuildContainerAnimated'] = var2;
    return var1;
})();