// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNEL_SPRING_CONFIG;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 17;
    var7 = {'damping': 17, 'stiffness': 320, 'mass': 0.5};
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1, arg2) {
        var10 = arg1;
        var8 = arg2;
        var1 = {};
        var2 = {};
        var3 = 'row';
        var2['flexDirection'] = var3;
        var1['avatarStack'] = var2;
        var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': 24, 'paddingLeft': 4, 'paddingRight': 4, 'paddingVertical': 4};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 7;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_MOD_SUBTLE;
        var2['backgroundColor'] = var7;
        var7 = 4;
        var1['stageAvatarStack'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row'};
        var1['avatarBubbles'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row'};
        var1['avatars'] = var2;
        var2 = {};
        var11 = -var8;
        var2['marginLeft'] = var11;
        var1['shiftedAvatar'] = var2;
        var2 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.colors;
        var11 = var11.BG_MOD_STRONG;
        var2['backgroundColor'] = var11;
        var11 = -var8;
        var2['marginLeft'] = var11;
        var11 = _closure1_slot0;
        var9 = 8;
        var12 = var6[var9];
        var12 = var11.bind(var4)(var12);
        var12 = var12.AVATAR_SIZE_MAP;
        var12 = var12[var10];
        var2['height'] = var12;
        var9 = var6[var9];
        var9 = var11.bind(var4)(var9);
        var9 = var9.AVATAR_SIZE_MAP;
        var9 = var9[var10];
        var2['minWidth'] = var9;
        var9 = 10;
        var2['borderRadius'] = var9;
        var2['paddingHorizontal'] = var7;
        var7 = 1;
        var2['paddingTop'] = var7;
        var1['userCounter'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'flex-end', 'overflow': 'hidden'};
        var7 = -4;
        var7 = var7 - var8;
        var2['marginLeft'] = var7;
        var1['ellipsisWrapper'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.CARD_SECONDARY_BG;
        var2['borderColor'] = var3;
        var1['ellipsisBorder'] = var2;
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = 'function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}';
    var7['code'] = var8;
    var _closure1_slot12 = var7;
    var7 = {};
    var8 = 'function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}';
    var7['code'] = var8;
    var _closure1_slot13 = var7;
    var7 = {};
    var8 = 'function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}';
    var7['code'] = var8;
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HappeningNowAvatarStack(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = var6.users;
            var1 = var6.guildId;
            var _closure2_slot0 = var1;
            var14 = var6.isTyping;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var14 = false;
 34:
            var _closure2_slot1 = var14;
            var10 = var6.userLimit;
            if(!(var10 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 48:
            var10 = 3;
 51:
            var13 = var6.userCount;
            var1 = var6.isStage;
            var _closure2_slot2 = var1;
            var22 = var6.avatarSize;
            if(!(var22 === var4)) { _fun0001_ip = 112; continue _fun0001 }
 77:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 9;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.AvatarSizes;
            var22 = var5.XSMALL_20;
 112:
            var _closure2_slot3 = var22;
            var5 = var6.avatarBorderWidth;
            if(!(var5 === var4)) { _fun0001_ip = 131; continue _fun0001 }
 128:
            var5 = 2;
 131:
            var _closure2_slot4 = var5;
            var5 = var6.avatarOverlap;
            if(!(var5 === var4)) { _fun0001_ip = 148; continue _fun0001 }
 145:
            var5 = 4;
 148:
            var _closure2_slot5 = var5;
            var9 = var6.style;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var6 = _closure1_slot11;
            var11 = var6.bind(var4)(var22, var5);
            _closure2_slot6 = var11;
            var12 = _closure1_slot4;
            var8 = var12.useState;
            var6 = function() {
                var1 = _closure2_slot1;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            var12 = var8.bind(var12)(var6);
            var8 = _closure1_slot3;
            var6 = 2;
            var6 = var8.bind(var4)(var12, var6);
            var21 = 0;
            var8 = var6[var21];
            var17 = 1;
            var6 = var6[var17];
            _closure2_slot7 = var6;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 10;
            var12 = var12[var6];
            var15 = var15.bind(var4)(var12);
            var12 = var15.useSharedValue;
            var16 = var5;
            var5 = 0;
            if(!var14) { _fun0001_ip = 285; continue _fun0001 }
 282:
            var5 = var17;
 285:
            var5 = var12.bind(var15)(var5);
            _closure2_slot8 = var5;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 11;
            var12 = var20[var12];
            var18 = var23.bind(var4)(var12);
            var17 = var18.useStateFromStores;
            var12 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var12;
            var12 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var12 = var17.bind(var18)(var15, var12);
            var15 = var20[var6];
            var18 = var23.bind(var4)(var15);
            var17 = var18.useAnimatedStyle;
            var15 = function V() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var2 = var6[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.interpolate;
                var8 = _closure2_slot8;
                var7 = var8.get;
                var9 = var7.bind(var8)();
                var8 = [0, 1];
                var7 = [0, 1];
                var7 = var10.bind(var11)(var9, var8, var7);
                var1['opacity'] = var7;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.interpolate;
                var3 = _closure2_slot8;
                var2 = var3.get;
                var4 = var2.bind(var3)();
                var3 = [0, 1];
                var2 = [0, 28];
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['width'] = var2;
                return var1;
            };
            var19 = {};
            var20 = var20[var6];
            var20 = var23.bind(var4)(var20);
            var20 = var20.interpolate;
            var19['interpolate'] = var20;
            var19['typingValue'] = var5;
            var20 = 28;
            var19['ELLIPSIS_WIDTH'] = var20;
            var15['__closure'] = var19;
            var19 = 14140918847743.0;
            var15['__workletHash'] = var19;
            var19 = _closure1_slot12;
            var15['__initData'] = var19;
            var19 = var17.bind(var18)(var15);
            var18 = _closure1_slot4;
            var17 = var18.useEffect;
            var15 = new Array(2);
            var15[0] = var14;
            var15[1] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 12;
                    var5 = var5[var1];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var5);
                    var8 = var9.withSpring;
                    var5 = _closure2_slot1;
                    var7 = 0;
                    if(!var5) { _fun0002_ip = 54; continue _fun0002 }
 51:
                    var7 = 1;
 54:
                    var17 = _closure1_slot7;
                    var5 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 57; continue _fun0003 }
 6:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = undefined;
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.runOnJS;
                            var2 = _closure2_slot7;
                            var2 = var4.bind(var5)(var2);
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
 57:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 10;
                    var12 = var14[var12];
                    var12 = var13.bind(var1)(var12);
                    var12 = var12.runOnJS;
                    var10['runOnJS'] = var12;
                    var12 = _closure2_slot7;
                    var10['setRenderComponents'] = var12;
                    var11 = _closure2_slot1;
                    var10['isTyping'] = var11;
                    var5['__closure'] = var10;
                    var10 = 2498652829757.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot13;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var5 = var17.bind(var18)(var5, var15);
            var5 = var3.slice;
            var10 = var5.bind(var3)(var21, var10);
            _closure2_slot9 = var10;
            var20 = null;
            if(!(var20 == var13)) { _fun0001_ip = 502; continue _fun0001 }
 497:
            var13 = var3.length;
 502:
            var3 = var10.length;
            var29 = var13 - var3;
            _closure2_slot10 = var29;
            var5 = var10.map;
            var3 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot9;
                    var3 = var2.length;
                    var2 = 1;
                    var6 = var3 - var2;
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['user'] = var1;
                    var8 = _closure2_slot0;
                    var2['guildId'] = var8;
                    var8 = _closure2_slot3;
                    var2['size'] = var8;
                    var10 = var5.bind(var4)(var3, var2);
                    var3 = _closure1_slot5;
                    var2 = {};
                    var8 = 0;
                    var9 = undefined;
                    if(!(var8 !== var7)) { _fun0004_ip = 106; continue _fun0004 }
 96:
                    var11 = _closure2_slot6;
                    var9 = var11.shiftedAvatar;
 106:
                    var2['style'] = var9;
                    if(!(var7 === var6)) { _fun0004_ip = 141; continue _fun0004 }
 114:
                    var7 = _closure2_slot2;
                    var6 = var10;
                    if(var7) { _fun0004_ip = 309; continue _fun0004 }
 127:
                    var7 = _closure2_slot10;
                    var6 = var10;
                    if(!(var7 > var8)) { _fun0004_ip = 309; continue _fun0004 }
 141:
                    var9 = _closure1_slot8;
                    var8 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var11 = 13;
                    var7 = var16[var11];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var12 = {};
                    var15 = _closure1_slot0;
                    var11 = var16[var11];
                    var11 = var15.bind(var4)(var11);
                    var11 = var11.CutoutShape;
                    var11 = var11.Circle;
                    var12['shape'] = var11;
                    var11 = 8;
                    var13 = var16[var11];
                    var13 = var15.bind(var4)(var13);
                    var17 = var13.AVATAR_SIZE_MAP;
                    var13 = _closure2_slot3;
                    var18 = var17[var13];
                    var17 = _closure2_slot5;
                    var17 = var18 - var17;
                    var14 = _closure2_slot4;
                    var17 = var17 - var14;
                    var12['x'] = var17;
                    var17 = -var14;
                    var12['y'] = var17;
                    var11 = var16[var11];
                    var11 = var15.bind(var4)(var11);
                    var11 = var11.AVATAR_SIZE_MAP;
                    var13 = var11[var13];
                    var11 = 2;
                    var11 = var11 * var14;
                    var11 = var13 + var11;
                    var12['size'] = var11;
                    var11 = new Array(1);
                    var11[0] = var12;
                    var7['cutouts'] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
 309:
                    var2['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var10 = var5.bind(var10)(var3);
            _closure2_slot11 = var10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = var18[var6];
            var5 = var17.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function H() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot11;
                    var4 = var2.length;
                    var5 = _closure2_slot2;
                    var3 = 0;
                    var2 = 0;
                    if(var5) { _fun0005_ip = 39; continue _fun0005 }
 23:
                    var5 = _closure2_slot10;
                    var5 = var5 > var3;
                    var2 = 0;
                    if(!var5) { _fun0005_ip = 39; continue _fun0005 }
 36:
                    var2 = 1;
 39:
                    var4 = var4 + var2;
                    var7 = 0;
                    if(!(var4 > var3)) { _fun0005_ip = 111; continue _fun0005 }
 49:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var5 = var2.AVATAR_SIZE_MAP;
                    var2 = _closure2_slot3;
                    var2 = var5[var2];
                    var2 = var4 * var2;
                    var5 = _closure2_slot5;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var1 * var5;
                    var7 = var2 - var1;
 111:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 12;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var8.bind(var5)(var6);
                    var5 = var6.withSpring;
                    var2 = _closure1_slot10;
                    var2 = var5.bind(var6)(var7, var2);
                    var1['width'] = var2;
                    var2 = 4;
                    if(!(var3 === var4)) { _fun0005_ip = 166; continue _fun0005 }
 164:
                    var2 = 0;
 166:
                    var1['marginRight'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['isStage'] = var1;
            var15['extraUsers'] = var29;
            var15['avatars'] = var10;
            var23 = 8;
            var23 = var18[var23];
            var23 = var17.bind(var4)(var23);
            var23 = var23.AVATAR_SIZE_MAP;
            var15['AVATAR_SIZE_MAP'] = var23;
            var15['avatarSize'] = var22;
            var15['avatarOverlap'] = var16;
            var16 = 12;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.withSpring;
            var15['withSpring'] = var16;
            var16 = _closure1_slot10;
            var15['SPRING_CONFIG'] = var16;
            var2['__closure'] = var15;
            var15 = 5027466437777.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot14;
            var2['__initData'] = var15;
            var15 = var3.bind(var5)(var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var5 = {};
            if(var1) { _fun0001_ip = 1086; continue _fun0001 }
 699:
            var16 = var11.avatarStack;
            var1 = new Array(2);
            var1[0] = var16;
            var1[1] = var9;
            var5['style'] = var1;
            var17 = _closure1_slot9;
            var16 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var16.bind(var4)(var1);
            var16 = var1.View;
            var1 = {};
            var22 = var11.avatarBubbles;
            var18 = new Array(2);
            var18[0] = var22;
            var18[1] = var15;
            var1['style'] = var18;
            var23 = _closure1_slot8;
            var22 = _closure1_slot5;
            var18 = {};
            var24 = var11.avatars;
            var18['style'] = var24;
            var18['children'] = var10;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(2);
            var18[0] = var22;
            var20 = null;
            if(!(var29 > var21)) { _fun0001_ip = 939; continue _fun0001 }
 818:
            var23 = _closure1_slot8;
            var22 = _closure1_slot5;
            var21 = {};
            var24 = var11.userCounter;
            var21['style'] = var24;
            var26 = _closure1_slot9;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 14;
            var24 = var30[var24];
            var24 = var28.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {'color': 'text-normal', 'variant': 'text-xxs/semibold', 'allowFontScaling': false};
            var27 = 15;
            var27 = var30[var27];
            var28 = var28.bind(var4)(var27);
            var27 = var28.humanizeValue;
            var28 = var27.bind(var28)(var29, var12);
            var27 = ['+'];
            var27[1] = var28;
            var24['children'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 939:
            var18[1] = var20;
            var1['children'] = var18;
            var16 = var17.bind(var4)(var16, var1);
            var1 = new Array(2);
            var1[0] = var16;
            if(var8) { _fun0001_ip = 967; continue _fun0001 }
 964:
            var8 = var14;
 967:
            if(!var8) { _fun0001_ip = 1070; continue _fun0001 }
 970:
            var17 = _closure1_slot8;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = var20[var6];
            var14 = var16.bind(var4)(var14);
            var16 = var14.View;
            var14 = {};
            var21 = var11.ellipsisWrapper;
            var18 = new Array(2);
            var18[0] = var21;
            var18[1] = var19;
            var14['style'] = var18;
            var19 = _closure1_slot0;
            var18 = 16;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.TypingIndicator;
            var18 = {};
            var20 = var11.ellipsisBorder;
            var18['style'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var14['children'] = var18;
            var8 = var17.bind(var4)(var16, var14);
 1070:
            var1[1] = var8;
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 1256; continue _fun0001;
 1086:
            var14 = var11.stageAvatarStack;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var9;
            var5['style'] = var8;
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = var14[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.View;
            var6 = {};
            var16 = var11.avatars;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var15;
            var6['style'] = var11;
            var6['children'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var11 = _closure1_slot0;
            var7 = 14;
            var7 = var14[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'color': 'text-normal', 'variant': 'text-xs/semibold'};
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.humanizeValue;
            var10 = var10.bind(var11)(var13, var12);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
 1256:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowAvatarStack'] = var2;
    return var1;
})();