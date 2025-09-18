// app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var13 = 4;
        var4 = var6[var13];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AnalyticEvents;
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ContentDismissActionType;
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot11 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot12 = var7;
        var4 = var4.jsxs;
        var _closure1_slot13 = var4;
        var4 = 10;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var12 = 48;
        var9 = {'width': 48, 'height': 48};
        var4['emoji'] = var9;
        var9 = {'width': 48, 'height': 48};
        var4['selectedCustomEmoji'] = var9;
        var9 = {};
        var14 = 11;
        var10 = var6[var14];
        var15 = var5.bind(var1)(var10);
        var10 = var15.isIOS;
        var15 = var10.bind(var15)();
        var10 = 36;
        if(!var15) { _fun0001_ip = 351; continue _fun0001 }
 348:
        var10 = var12;
 351:
        var9['fontSize'] = var10;
        var10 = var6[var14];
        var12 = var5.bind(var1)(var10);
        var10 = var12.isIOS;
        var12 = var10.bind(var12)();
        var10 = undefined;
        if(!var12) { _fun0001_ip = 383; continue _fun0001 }
 380:
        var10 = 56;
 383:
        var9['lineHeight'] = var10;
        var12 = 'center';
        var9['textAlign'] = var12;
        var4['selectedTextEmoji'] = var9;
        var9 = {};
        var10 = 12;
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_16;
        var9['marginLeft'] = var15;
        var15 = 40;
        var9['fontSize'] = var15;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isIOS;
        var15 = var14.bind(var15)();
        var14 = undefined;
        if(!var15) { _fun0001_ip = 465; continue _fun0001 }
 462:
        var14 = 56;
 465:
        var9['lineHeight'] = var14;
        var4['selectedEmojiText'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'center'};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_4;
        var9['paddingHorizontal'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_32;
        var9['paddingTop'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var9['paddingBottom'] = var14;
        var4['content'] = var9;
        var9 = {};
        var14 = 'row';
        var9['flexDirection'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.CARD_PRIMARY_BG;
        var9['backgroundColor'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BORDER_STRONG;
        var9['borderColor'] = var14;
        var9['borderWidth'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var9['paddingVertical'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var9['paddingHorizontal'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.xl;
        var9['borderRadius'] = var13;
        var9['justifyContent'] = var12;
        var9['alignItems'] = var12;
        var4['emojiContainer'] = var9;
        var9 = {};
        var9['textAlign'] = var12;
        var4['alignCenter'] = var9;
        var9 = {};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_24;
        var9['marginVertical'] = var12;
        var4['emojiSelectRow'] = var9;
        var9 = {'marginBottom': null, 'flexDirection': 'row', 'alignItems': 'center'};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginBottom'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['gap'] = var12;
        var4['header'] = var9;
        var9 = {};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginTop'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_24;
        var9['marginBottom'] = var10;
        var4['emojiName'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot14 = var4;
        var4 = {};
        var7 = 'function DoubleTapToReactActionSheetTsx1(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}';
        var4['code'] = var7;
        var _closure1_slot15 = var4;
        var4 = {};
        var7 = 'function DoubleTapToReactActionSheetTsx2(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}';
        var4['code'] = var7;
        var _closure1_slot16 = var4;
        var4 = 32;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function DoubleTapToReactActionSheet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var18 = var2.emoji;
                var8 = var2.markAsDismissed;
                var _closure2_slot0 = var8;
                var2 = _closure1_slot14;
                var4 = undefined;
                var21 = var2.bind(var4)();
                var2 = _closure1_slot0;
                var20 = _closure1_slot2;
                var3 = 13;
                var3 = var20[var3];
                var7 = var2.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var3 = var6.bind(var7)(var5, var3);
                var _closure2_slot1 = var3;
                var6 = _closure1_slot5;
                var5 = var6.useState;
                var5 = var5.bind(var6)(var18);
                var9 = _closure1_slot4;
                var7 = 2;
                var5 = var9.bind(var4)(var5, var7);
                var11 = 0;
                var17 = var5[var11];
                var _closure2_slot2 = var17;
                var10 = 1;
                var5 = var5[var10];
                var _closure2_slot3 = var5;
                var12 = var6.useRef;
                var5 = true;
                var5 = var12.bind(var6)(var5);
                var _closure2_slot4 = var5;
                var12 = var6.useState;
                var5 = false;
                var5 = var12.bind(var6)(var5);
                var5 = var9.bind(var4)(var5, var7);
                var12 = var5[var11];
                var _closure2_slot5 = var12;
                var5 = var5[var10];
                var _closure2_slot6 = var5;
                var5 = var6.useRef;
                var22 = null;
                var5 = var5.bind(var6)(var22);
                var _closure2_slot7 = var5;
                var9 = 14;
                var5 = var20[var9];
                var7 = var2.bind(var4)(var5);
                var5 = var7.useSharedValue;
                var11 = var5.bind(var7)(var11);
                var _closure2_slot8 = var11;
                var5 = var20[var9];
                var13 = var2.bind(var4)(var5);
                var7 = var13.useAnimatedStyle;
                var5 = function C() {
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var2 = var8[var4];
                    var6 = undefined;
                    var12 = var7.bind(var6)(var2);
                    var11 = var12.interpolate;
                    var5 = _closure2_slot8;
                    var2 = var5.get;
                    var10 = var2.bind(var5)();
                    var9 = [0, 1];
                    var2 = [1, 1.3];
                    var2 = var11.bind(var12)(var10, var9, var2);
                    var3['scale'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = var8[var4];
                    var8 = var7.bind(var6)(var4);
                    var7 = var8.interpolate;
                    var4 = var5.get;
                    var6 = var4.bind(var5)();
                    var5 = [0];
                    var4 = -20;
                    var5[1] = var4;
                    var4 = [0, 1];
                    var4 = var7.bind(var8)(var6, var4, var5);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                };
                var14 = {};
                var16 = var20[var9];
                var16 = var2.bind(var4)(var16);
                var16 = var16.interpolate;
                var14['interpolate'] = var16;
                var14['sharedSaveValue'] = var11;
                var5['__closure'] = var14;
                var14 = 2207211447725.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot15;
                var5['__initData'] = var14;
                var24 = var7.bind(var13)(var5);
                var5 = var20[var9];
                var7 = var2.bind(var4)(var5);
                var5 = var7.useSharedValue;
                var13 = var5.bind(var7)(var10);
                var _closure2_slot9 = var13;
                var5 = var20[var9];
                var7 = var2.bind(var4)(var5);
                var5 = var7.useSharedValue;
                var5 = var5.bind(var7)(var10);
                var _closure2_slot10 = var5;
                var7 = var20[var9];
                var14 = var2.bind(var4)(var7);
                var10 = var14.useAnimatedStyle;
                var7 = function f() {
                    var1 = {};
                    var4 = {};
                    var5 = _closure2_slot9;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['scale'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    return var1;
                };
                var16 = {};
                var16['scaleChangeValue'] = var13;
                var16['opacityChangeValue'] = var5;
                var7['__closure'] = var16;
                var16 = 15054754202024.0;
                var7['__workletHash'] = var16;
                var16 = _closure1_slot16;
                var7['__initData'] = var16;
                var23 = var10.bind(var14)(var7);
                var10 = var6.useCallback;
                var7 = new Array(4);
                var7[0] = var13;
                var7[1] = var5;
                var7[2] = var3;
                var7[3] = var12;
                var5 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var _closure3_slot0 = var2;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure2_slot5;
                        if(var3) { _fun0003_ip = 310; continue _fun0003 }
 29:
                        var4 = _closure2_slot1;
                        var5 = _closure2_slot9;
                        var3 = var5.set;
                        if(var4) { _fun0003_ip = 263; continue _fun0003 }
 48:
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var8 = 14;
                        var4 = var15[var8];
                        var11 = undefined;
                        var10 = var12.bind(var11)(var4);
                        var9 = var10.withSequence;
                        var4 = 15;
                        var6 = var15[var4];
                        var13 = var12.bind(var11)(var6);
                        var7 = var13.withTiming;
                        var6 = {};
                        var19 = 0;
                        var6['duration'] = var19;
                        var18 = 0.5;
                        var7 = var7.bind(var13)(var18, var6);
                        var6 = 16;
                        var6 = var15[var6];
                        var17 = var12.bind(var11)(var6);
                        var16 = var17.withSpring;
                        var14 = 200;
                        var13 = 1;
                        var6 = {'duration': 200, 'dampingRatio': 0.45, 'mass': 10, 'overshootClamping': true};
                        var6 = var16.bind(var17)(var13, var6);
                        var6 = var9.bind(var10)(var7, var6);
                        var6 = var3.bind(var5)(var6);
                        var7 = _closure2_slot10;
                        var6 = var7.set;
                        var8 = var15[var8];
                        var10 = var12.bind(var11)(var8);
                        var9 = var10.withSequence;
                        var8 = var15[var4];
                        var17 = var12.bind(var11)(var8);
                        var16 = var17.withTiming;
                        var8 = {};
                        var8['duration'] = var19;
                        var8 = var16.bind(var17)(var18, var8);
                        var4 = var15[var4];
                        var12 = var12.bind(var11)(var4);
                        var11 = var12.withTiming;
                        var4 = {};
                        var4['duration'] = var14;
                        var4 = var11.bind(var12)(var13, var4);
                        var4 = var9.bind(var10)(var8, var4);
                        var4 = var6.bind(var7)(var4);
                        _fun0003_ip = 285; continue _fun0003;
 263:
                        var4 = 1;
                        var3 = var3.bind(var5)(var4);
                        var3 = _closure2_slot10;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 285:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = undefined;
                        var2 = function() {
                            var5 = _closure2_slot3;
                            var4 = _closure3_slot0;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var3 = _closure2_slot4;
                            var2 = _closure3_slot1;
                            var3['current'] = var2;
                            return var1;
                        };
                        var1 = 0;
                        var1 = var4.bind(var3)(var2, var1);
 310:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = var10.bind(var6)(var5, var7);
                var10 = var6.useMemo;
                var7 = new Array(1);
                var7[0] = var17;
                var5 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 17;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = var1.DoubleTapReactionEmoji;
                        var1 = var3.getSetting;
                        var1 = var1.bind(var3)();
                        var7 = var1.emojiId;
                        var8 = var1.emojiName;
                        var1 = null;
                        if(!(var1 == var7)) { _fun0004_ip = 101; continue _fun0004 }
 59:
                        var3 = var1 != var8;
                        var5 = null;
                        if(!var3) { _fun0004_ip = 99; continue _fun0004 }
 68:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 18;
                        var3 = var9[var3];
                        var6 = var6.bind(var4)(var3);
                        var3 = var6.getByName;
                        var5 = var3.bind(var6)(var8);
 99:
                        _fun0004_ip = 116; continue _fun0004;
 101:
                        var6 = _closure1_slot8;
                        var3 = var6.getCustomEmojiById;
                        var5 = var3.bind(var6)(var7);
 116:
                        var1 = var1 == var5;
                        if(var1) { _fun0004_ip = 165; continue _fun0004 }
 123:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 19;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.areEmojisEqual;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var4)(var5, var2);
                        var1 = !var2;
 165:
                        return var1;
                    }
                };
                var13 = var10.bind(var6)(var5, var7);
                var _closure2_slot11 = var13;
                var10 = var6.useMemo;
                var7 = new Array(1);
                var7[0] = var17;
                var5 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure2_slot2;
                        var2 = var1.id;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0005_ip = 29; continue _fun0005 }
 18:
                        var1 = _closure2_slot2;
                        var1 = var1.url;
                        _fun0005_ip = 99; continue _fun0005;
 29:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 20;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getEmojiURL;
                        var2 = {};
                        var6 = _closure2_slot2;
                        var7 = var6.id;
                        var2['id'] = var7;
                        var6 = var6.animated;
                        var2['animated'] = var6;
                        var5 = _closure1_slot11;
                        var2['size'] = var5;
                        var1 = var3.bind(var4)(var2);
 99:
                        return var1;
                    }
                };
                var19 = var10.bind(var6)(var5, var7);
                var10 = var6.useCallback;
                var7 = _closure1_slot3;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 270; continue _fun0006 }
 10:
                            var2 = _closure2_slot11;
                            if(!var2) { _fun0006_ip = 112; continue _fun0006 }
 20:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 17;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var4 = var2.DoubleTapReactionEmoji;
                            var3 = var4.updateSetting;
                            var2 = {};
                            var5 = _closure2_slot2;
                            var6 = var5.id;
                            var2['emojiId'] = var6;
                            var6 = var5.name;
                            var2['emojiName'] = var6;
                            var5 = var5.animated;
                            var2['animated'] = var5;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=103);
 101:
                            return var2;
 103:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 267; continue _fun0006 }
 112:
                            var12 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 21;
                            var5 = var6[var3];
                            var3 = undefined;
                            var10 = var12.bind(var3)(var5);
                            var9 = var10.track;
                            var5 = _closure1_slot9;
                            var8 = var5.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                            var5 = {};
                            var7 = _closure2_slot2;
                            var13 = var7.id;
                            var5['emoji_id'] = var13;
                            var13 = var7.name;
                            var5['emoji_name'] = var13;
                            var13 = var7.animated;
                            var5['emoji_animated'] = var13;
                            var11 = _closure2_slot4;
                            var11 = var11.current;
                            var5['recommended'] = var11;
                            var11 = 22;
                            var11 = var6[var11];
                            var11 = var12.bind(var3)(var11);
                            var11 = var11.DOUBLE_TAP_TO_REACT_ACTION_SHEET;
                            var5['location'] = var11;
                            var5 = var9.bind(var10)(var8, var5);
                            var5 = _closure1_slot0;
                            var4 = 23;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.showDoubleTapEmojiUpdatedToast;
                            var4 = {};
                            var4['emoji'] = var7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
 267:
                            return var2;
 270:
                            return var1;
                        }
                    };
                    return var1;
                };
                var7 = var7.bind(var4)(var5);
                var5 = new Array(2);
                var5[0] = var13;
                var5[1] = var17;
                var7 = var10.bind(var6)(var7, var5);
                var _closure2_slot12 = var7;
                var10 = var6.useCallback;
                var5 = new Array(4);
                var5[0] = var11;
                var5[1] = var7;
                var5[2] = var8;
                var5[3] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure2_slot6;
                        var1 = undefined;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot1;
                        var5 = _closure2_slot8;
                        var4 = var5.set;
                        if(var3) { _fun0007_ip = 262; continue _fun0007 }
 35:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var15 = 14;
                        var3 = var12[var15];
                        var10 = var11.bind(var1)(var3);
                        var9 = var10.withSequence;
                        var3 = 15;
                        var6 = var12[var3];
                        var8 = var11.bind(var1)(var6);
                        var7 = var8.withTiming;
                        var6 = {};
                        var13 = 0;
                        var6['duration'] = var13;
                        var8 = var7.bind(var8)(var13, var6);
                        var6 = var12[var3];
                        var14 = var11.bind(var1)(var6);
                        var7 = var14.withTiming;
                        var6 = {};
                        var16 = 100;
                        var6['duration'] = var16;
                        var17 = var12[var15];
                        var17 = var11.bind(var1)(var17);
                        var18 = var17.Easing;
                        var17 = var18.out;
                        var15 = var12[var15];
                        var15 = var11.bind(var1)(var15);
                        var15 = var15.Easing;
                        var15 = var15.quad;
                        var15 = var17.bind(var18)(var15);
                        var6['easing'] = var15;
                        var15 = 1;
                        var7 = var7.bind(var14)(var15, var6);
                        var3 = var12[var3];
                        var14 = var11.bind(var1)(var3);
                        var6 = var14.withTiming;
                        var3 = {};
                        var3['duration'] = var16;
                        var20 = var6.bind(var14)(var15, var3);
                        var3 = 16;
                        var3 = var12[var3];
                        var12 = var11.bind(var1)(var3);
                        var11 = var12.withSpring;
                        var3 = {'stiffness': 2000, 'damping': 70, 'mass': 3};
                        var19 = var11.bind(var12)(var13, var3);
                        var23 = var10;
                        var22 = var8;
                        var21 = var7;
                        var3 = var23[var9](var22, var21, var20, var19, var18);
                        var3 = var4.bind(var5)(var3);
                        _fun0007_ip = 269; continue _fun0007;
 262:
                        var3 = 0;
                        var3 = var4.bind(var5)(var3);
 269:
                        var3 = _closure2_slot7;
                        var4 = var3.current;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0007_ip = 306; continue _fun0007 }
 284:
                        var3 = global;
                        var4 = var3.clearTimeout;
                        var3 = _closure2_slot7;
                        var3 = var3.current;
                        var3 = var4.bind(var1)(var3);
 306:
                        var3 = _closure2_slot7;
                        var4 = global;
                        var5 = var4.setTimeout;
                        var2 = _closure2_slot1;
                        var4 = 450;
                        if(!var2) { _fun0007_ip = 333; continue _fun0007 }
 331:
                        var4 = 0;
 333:
                        var2 = function() {
                            var3 = _closure2_slot7;
                            var1 = null;
                            var3['current'] = var1;
                            var3 = _closure2_slot12;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var4 = _closure2_slot0;
                            var3 = _closure1_slot10;
                            var3 = var3.TAKE_ACTION;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 24;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var2 = var5.bind(var1)(var2, var4);
                        var3['current'] = var2;
                        return var1;
                    }
                };
                var13 = var10.bind(var6)(var3, var5);
                var5 = var6.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var7;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure2_slot7;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0008_ip = 42; continue _fun0008 }
 18:
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var1 = _closure2_slot7;
                        var3 = var1.current;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
 42:
                        var3 = _closure2_slot12;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var3 = _closure2_slot0;
                        var2 = _closure1_slot10;
                        var2 = var2.USER_DISMISS;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var1, var3);
                var3 = _closure1_slot12;
                var1 = 25;
                var1 = var20[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var1['onDismiss'] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var21.content;
                var5['style'] = var8;
                var8 = {};
                var10 = var21.emojiContainer;
                var8['style'] = var10;
                var16 = _closure1_slot1;
                var9 = var20[var9];
                var9 = var16.bind(var4)(var9);
                var10 = var9.View;
                var9 = {};
                var11 = new Array(2);
                var11[0] = var24;
                var11[1] = var23;
                var9['style'] = var11;
                var11 = 26;
                var11 = var20[var11];
                var16 = var16.bind(var4)(var11);
                var11 = {};
                var20 = var21.emoji;
                var11['style'] = var20;
                var20 = var21.selectedCustomEmoji;
                var11['fastImageStyle'] = var20;
                var20 = var21.selectedTextEmoji;
                var11['textEmojiStyle'] = var20;
                var20 = var17.id;
                var22 = var22 == var20;
                var20 = '';
                if(!var22) { _fun0002_ip = 803; continue _fun0002 }
 798:
                var20 = var17.surrogates;
 803:
                var11['name'] = var20;
                var11['src'] = var19;
                var11 = var3.bind(var4)(var16, var11);
                var9['children'] = var11;
                var9 = var3.bind(var4)(var10, var9);
                var10 = new Array(2);
                var10[0] = var9;
                var11 = _closure1_slot12;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 27;
                var19 = var20[var9];
                var19 = var16.bind(var4)(var19);
                var22 = var19.Text;
                var19 = {'variant': 'text-lg/semibold', 'style': null, 'color': 'interactive-normal', 'children': '1'};
                var23 = var21.selectedEmojiText;
                var19['style'] = var23;
                var19 = var11.bind(var4)(var22, var19);
                var10[1] = var19;
                var8['children'] = var10;
                var10 = var7.bind(var4)(var6, var8);
                var8 = new Array(6);
                var8[0] = var10;
                var10 = var20[var9];
                var10 = var16.bind(var4)(var10);
                var19 = var10.Text;
                var10 = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
                var22 = var21.emojiName;
                var10['style'] = var22;
                var24 = var17.name;
                var22 = global;
                var22 = var22.HermesInternal;
                var23 = var22.concat;
                var22 = ':';
                var22 = var23.bind(var22)(var24, var22);
                var10['children'] = var22;
                var10 = var11.bind(var4)(var19, var10);
                var8[1] = var10;
                var23 = _closure1_slot13;
                var22 = _closure1_slot6;
                var10 = {};
                var19 = var21.header;
                var10['style'] = var19;
                var19 = var20[var9];
                var19 = var16.bind(var4)(var19);
                var25 = var19.Text;
                var24 = {'style': null, 'variant': 'text-lg/bold', 'color': 'header-primary'};
                var19 = var21.alignCenter;
                var24['style'] = var19;
                var19 = 28;
                var26 = var20[var19];
                var26 = var16.bind(var4)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var20[var19];
                var26 = var16.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26.F6lRAA;
                var26 = var27.bind(var28)(var26);
                var24['children'] = var26;
                var25 = var11.bind(var4)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var25 = 29;
                var25 = var20[var25];
                var25 = var16.bind(var4)(var25);
                var26 = var25.NewBadge;
                var25 = {};
                var25 = var11.bind(var4)(var26, var25);
                var24[1] = var25;
                var10['children'] = var24;
                var10 = var23.bind(var4)(var22, var10);
                var8[2] = var10;
                var9 = var20[var9];
                var9 = var16.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-normal'};
                var22 = var21.alignCenter;
                var9['style'] = var22;
                var22 = var20[var19];
                var22 = var16.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var20[var19];
                var22 = var16.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.yIax8v;
                var22 = var23.bind(var24)(var22);
                var9['children'] = var22;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var10 = _closure1_slot1;
                var9 = 30;
                var9 = var20[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var21 = var21.emojiSelectRow;
                var9['style'] = var21;
                var9['selectedEmoji'] = var17;
                var9['onPressEmoji'] = var14;
                var9 = var11.bind(var4)(var10, var9);
                var8[4] = var9;
                var9 = 31;
                var9 = var20[var9];
                var9 = var16.bind(var4)(var9);
                var10 = var9.Button;
                var9 = {'grow': true, 'size': 'lg', 'text': null, 'variant': 'primary'};
                var14 = 19;
                var14 = var20[var14];
                var16 = var16.bind(var4)(var14);
                var14 = var16.areEmojisEqual;
                var14 = var14.bind(var16)(var17, var18);
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if(var14) { _fun0002_ip = 1432; continue _fun0002 }
 1417:
                var14 = var15.tdsiOz;
                var14 = var16.bind(var17)(var14);
                _fun0002_ip = 1443; continue _fun0002;
 1432:
                var15 = var15.NX+WJC;
                var14 = var16.bind(var17)(var15);
 1443:
                var9['text'] = var14;
                var9['onPress'] = var13;
                var9['disabled'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[5] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();