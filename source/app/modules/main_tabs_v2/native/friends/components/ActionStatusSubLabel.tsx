// app/modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot3 = var8;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 'hidden';
        var2['overflow'] = var3;
        var1['container'] = var2;
        var2 = {};
        var3 = 'absolute';
        var2['position'] = var3;
        var1['actionStatus'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = function announceActioned(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.AccessibilityAnnouncer;
        var3 = var4.announce;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Text;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActionStatusSubLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var25 = var1.lineHeight;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0001_ip = 20; continue _fun0001 }
 17:
            var25 = 16;
 20:
            var _closure2_slot0 = var25;
            var15 = var1.textVariant;
            if(!(var15 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 34:
            var15 = 'text-xs/medium';
 38:
            var22 = var1.actioned;
            var _closure2_slot1 = var22;
            var17 = var1.label;
            var18 = var1.secondaryLabel;
            var9 = var1.actionStatus;
            var20 = var1.actionStatusAccessibilityLabel;
            var _closure2_slot2 = var20;
            var14 = var1.maxFontSizeMultiplier;
            var23 = var1.animate;
            var _closure2_slot3 = var23;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = null;
            var7 = var1 != var18;
            _closure2_slot4 = var7;
            var21 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var3 = var21.bind(var4)(var1);
            var1 = var3.useFontScale;
            var24 = var1.bind(var3)();
            _closure2_slot5 = var24;
            var1 = _closure1_slot5;
            var11 = var1.bind(var4)();
            var1 = 4;
            var3 = var5[var1];
            var10 = var21.bind(var4)(var3);
            var8 = var10.useAnimatedStyle;
            var3 = function L() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure2_slot4;
                    if(!var6) { _fun0002_ip = 26; continue _fun0002 }
 10:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var6 = !var1;
 26:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot5;
                    var3 = var2 * var1;
                    var5 = var3;
                    if(!var6) { _fun0002_ip = 51; continue _fun0002 }
 44:
                    var1 = 2;
                    var5 = var1 * var3;
 51:
                    var1 = {};
                    var4 = _closure2_slot3;
                    var2 = var5;
                    if(!var4) { _fun0002_ip = 201; continue _fun0002 }
 66:
                    var8 = _closure2_slot1;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var2 = var5;
                    if(!var4) { _fun0002_ip = 201; continue _fun0002 }
 85:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 7;
                    var4 = var11[var4];
                    var9 = undefined;
                    var5 = var10.bind(var9)(var4);
                    var4 = var5.withTiming;
                    var8 = 4;
                    var8 = var11[var8];
                    var9 = var10.bind(var9)(var8);
                    var8 = var9.interpolate;
                    var10 = _closure2_slot1;
                    var7 = var10.get;
                    var10 = var7.bind(var10)();
                    var7 = 0;
                    if(!var10) { _fun0002_ip = 154; continue _fun0002 }
 151:
                    var7 = 1;
 154:
                    var10 = var3;
                    if(!var6) { _fun0002_ip = 167; continue _fun0002 }
 160:
                    var6 = 2;
                    var10 = var6 * var3;
 167:
                    var6 = new Array(2);
                    var6[0] = var10;
                    var6[1] = var3;
                    var3 = [0, 1];
                    var3 = var8.bind(var9)(var7, var3, var6);
                    var2 = var4.bind(var5)(var3);
 201:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['hasSecondLine'] = var7;
            var12['actioned'] = var22;
            var12['lineHeight'] = var25;
            var12['fontScale'] = var24;
            var12['animate'] = var23;
            var16 = 7;
            var13 = var5[var16];
            var13 = var21.bind(var4)(var13);
            var13 = var13.withTiming;
            var12['withTiming'] = var13;
            var13 = var5[var1];
            var13 = var21.bind(var4)(var13);
            var13 = var13.interpolate;
            var12['interpolate'] = var13;
            var3['__closure'] = var12;
            var12 = 14210085997091.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot8;
            var3['__initData'] = var12;
            var8 = var8.bind(var10)(var3);
            var3 = var5[var1];
            var12 = var21.bind(var4)(var3);
            var10 = var12.useAnimatedStyle;
            var3 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var4 = 0;
                    if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 21:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot5;
                    var4 = var2 * var1;
 33:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot3;
                    var2 = var4;
                    if(!var5) { _fun0003_ip = 152; continue _fun0003 }
 47:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 7;
                    var5 = var12[var5];
                    var9 = undefined;
                    var6 = var11.bind(var9)(var5);
                    var5 = var6.withTiming;
                    var8 = 4;
                    var8 = var12[var8];
                    var9 = var11.bind(var9)(var8);
                    var8 = var9.interpolate;
                    var11 = _closure2_slot1;
                    var7 = var11.get;
                    var7 = var7.bind(var11)();
                    var10 = 0;
                    if(!var7) { _fun0003_ip = 116; continue _fun0003 }
 113:
                    var10 = 1;
 116:
                    var7 = [0];
                    var7[1] = var4;
                    var4 = [0, 1];
                    var4 = var8.bind(var9)(var10, var4, var7);
                    var2 = var5.bind(var6)(var4);
 152:
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['actioned'] = var22;
            var13['lineHeight'] = var25;
            var13['fontScale'] = var24;
            var13['animate'] = var23;
            var19 = var5[var16];
            var19 = var21.bind(var4)(var19);
            var19 = var19.withTiming;
            var13['withTiming'] = var19;
            var19 = var5[var1];
            var19 = var21.bind(var4)(var19);
            var19 = var19.interpolate;
            var13['interpolate'] = var19;
            var3['__closure'] = var13;
            var13 = 1040596522101.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot9;
            var3['__initData'] = var13;
            var19 = var10.bind(var12)(var3);
            var3 = var5[var1];
            var12 = var21.bind(var4)(var3);
            var10 = var12.useAnimatedStyle;
            var3 = function V() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var5 = 0;
                    var4 = 0;
                    if(var1) { _fun0004_ip = 38; continue _fun0004 }
 23:
                    var1 = _closure2_slot0;
                    var2 = -var1;
                    var1 = _closure2_slot5;
                    var4 = var2 * var1;
 38:
                    var1 = {};
                    var3 = {};
                    var7 = _closure2_slot3;
                    var2 = var4;
                    if(!var7) { _fun0004_ip = 155; continue _fun0004 }
 52:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 7;
                    var7 = var12[var7];
                    var10 = undefined;
                    var8 = var11.bind(var10)(var7);
                    var7 = var8.withTiming;
                    var9 = 4;
                    var9 = var12[var9];
                    var12 = var11.bind(var10)(var9);
                    var11 = var12.interpolate;
                    var10 = _closure2_slot1;
                    var9 = var10.get;
                    var9 = var9.bind(var10)();
                    var10 = 0;
                    if(!var9) { _fun0004_ip = 121; continue _fun0004 }
 118:
                    var10 = 1;
 121:
                    var9 = new Array(2);
                    var9[0] = var4;
                    var9[1] = var5;
                    var4 = [0, 1];
                    var4 = var11.bind(var12)(var10, var4, var9);
                    var2 = var7.bind(var8)(var4);
 155:
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 202; continue _fun0004 }
 179:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0004_ip = 200; continue _fun0004 }
 197:
                    var2 = 1;
 200:
                    _fun0004_ip = 258; continue _fun0004;
 202:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var3 = var4.withTiming;
                    var7 = _closure2_slot1;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var5 = 0;
                    if(!var6) { _fun0004_ip = 253; continue _fun0004 }
 250:
                    var5 = 1;
 253:
                    var2 = var3.bind(var4)(var5);
 258:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['actioned'] = var22;
            var13['lineHeight'] = var25;
            var13['fontScale'] = var24;
            var13['animate'] = var23;
            var16 = var5[var16];
            var16 = var21.bind(var4)(var16);
            var16 = var16.withTiming;
            var13['withTiming'] = var16;
            var16 = var5[var1];
            var16 = var21.bind(var4)(var16);
            var16 = var16.interpolate;
            var13['interpolate'] = var16;
            var3['__closure'] = var13;
            var13 = 2183035188794.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot10;
            var3['__initData'] = var13;
            var12 = var10.bind(var12)(var3);
            var3 = var5[var1];
            var13 = var21.bind(var4)(var3);
            var10 = var13.useAnimatedReaction;
            var3 = function Y() {
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = {};
            var16['actioned'] = var22;
            var3['__closure'] = var16;
            var16 = 9609826744629.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot11;
            var3['__initData'] = var16;
            var2 = function v(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0005_ip = 15; continue _fun0005 }
 6:
                    var3 = false;
                    var2 = arg2;
                    var1 = var3 === var2;
 15:
                    if(!var1) { _fun0005_ip = 31; continue _fun0005 }
 18:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 != var3;
 31:
                    if(!var1) { _fun0005_ip = 85; continue _fun0005 }
 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure1_slot6;
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = {};
            var16['actionStatusAccessibilityLabel'] = var20;
            var20 = var5[var1];
            var20 = var21.bind(var4)(var20);
            var20 = var20.runOnJS;
            var16['runOnJS'] = var20;
            var20 = _closure1_slot6;
            var16['announceActioned'] = var20;
            var2['__closure'] = var16;
            var16 = 14141240445417.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot12;
            var2['__initData'] = var16;
            var2 = var10.bind(var13)(var3, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var11.container;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var8;
            var1['style'] = var5;
            var16 = _closure1_slot3;
            var8 = _closure1_slot7;
            var5 = {};
            var5['variant'] = var15;
            var5['maxFontSizeMultiplier'] = var14;
            var13 = 'text-normal';
            var5['color'] = var13;
            var5['style'] = var19;
            var10 = 1;
            var5['lineClamp'] = var10;
            var5['children'] = var17;
            var8 = var16.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            if(!var7) { _fun0001_ip = 815; continue _fun0001 }
 773:
            var17 = _closure1_slot3;
            var16 = _closure1_slot7;
            var8 = {};
            var8['variant'] = var15;
            var8['maxFontSizeMultiplier'] = var14;
            var8['style'] = var19;
            var8['color'] = var13;
            var8['lineClamp'] = var10;
            var8['children'] = var18;
            var7 = var17.bind(var4)(var16, var8);
 815:
            var5[1] = var7;
            var8 = _closure1_slot3;
            var7 = _closure1_slot7;
            var6 = {};
            var6['variant'] = var15;
            var6['maxFontSizeMultiplier'] = var14;
            var6['color'] = var13;
            var13 = var11.actionStatus;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var6['style'] = var11;
            var6['lineClamp'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ActionStatusSubLabel'] = var2;
    return var1;
})();