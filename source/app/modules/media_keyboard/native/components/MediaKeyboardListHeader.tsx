// app/modules/media_keyboard/native/components/MediaKeyboardListHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var12 = 2;
    var2 = var7[var12];
    var2 = var6.bind(var1)(var2);
    var13 = var2.HEADER_HANDLE_HEIGHT;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = {'mass': 0.1, 'damping': 13, 'stiffness': 270, 'overshootClamping': true};
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'flex': 1, 'flexDirection': 'row', 'justifyContent': 'space-around', 'overflow': 'hidden', 'paddingHorizontal': null, 'paddingBottom': 16, 'gap': 8, 'top': null, 'left': 0, 'right': 0};
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PARENT_PADDING;
    var2 = var2 / var12;
    var11['paddingHorizontal'] = var2;
    var2 = 16;
    var12 = 8;
    var11['top'] = var13;
    var5['header'] = var11;
    var11 = {};
    var13 = 6;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var11['tintColor'] = var13;
    var11['marginRight'] = var12;
    var5['headerIcon'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot7 = var5;
    var5 = {};
    var9 = 'function MediaKeyboardListHeaderTsx1(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints,showOverflowAsCircles,reducedMotion,withSpring,HEADER_SPRING}=this.__closure;const nearTop=animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,0.7);const targetOpacity=nearTop?0:1;const targetTranslateY=nearTop?30:0;const targetScale=nearTop?0.9:1;return{paddingTop:showOverflowAsCircles?8:0,opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,HEADER_SPRING),transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,HEADER_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,HEADER_SPRING)}]};}';
    var5['code'] = var9;
    var _closure1_slot8 = var5;
    var5 = {};
    var9 = "function MediaKeyboardListHeaderTsx2(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints}=this.__closure;return{pointerEvents:animatedIndex.get()<animatedIndexThreshold(animatedSnapPoints,0.5)?'auto':'none'};}";
    var5['code'] = var9;
    var _closure1_slot9 = var5;
    var5 = var8.memo;
    var4 = function MediaKeyboardListHeader(arg1) {
        var1 = arg1;
        var15 = var1.animatedIndex;
        var _closure2_slot0 = var15;
        var7 = var1.overflowButtons;
        var2 = _closure1_slot7;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var _closure2_slot1 = var8;
        var3 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 7;
        var2 = var11[var2];
        var10 = var3.bind(var4)(var2);
        var9 = var10.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var1 = _closure1_slot4;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var16 = var9.bind(var10)(var6, var2);
        var _closure2_slot2 = var16;
        var2 = 8;
        var2 = var11[var2];
        var6 = var3.bind(var4)(var2);
        var2 = var6.useBottomSheetInternal;
        var2 = var2.bind(var6)();
        var13 = var2.animatedSnapPoints;
        var _closure2_slot3 = var13;
        var2 = 9;
        var2 = var11[var2];
        var2 = var3.bind(var4)(var2);
        var9 = var2.ChatInputIaMobileExperiment;
        var6 = var9.useConfig;
        var2 = {};
        var10 = 'MediaKeyboardListHeader';
        var2['location'] = var10;
        var2 = var6.bind(var9)(var2);
        var17 = var2.showOverflowAsCircles;
        var _closure2_slot4 = var17;
        var2 = 10;
        var6 = var11[var2];
        var10 = var3.bind(var4)(var6);
        var9 = var10.useAnimatedStyle;
        var6 = function I() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var9 = undefined;
                var7 = var3.bind(var9)(var1);
                var6 = var7.animatedIndexThreshold;
                var3 = _closure2_slot3;
                var1 = 0.7;
                var1 = var6.bind(var7)(var3, var1);
                var1 = var2 > var1;
                var8 = 1;
                var10 = var8;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var10 = 0;
case 2:
                var11 = 0;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var11 = 30;
case 4:
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var8 = 0.9;
case 6:
                var1 = {};
                var3 = _closure2_slot4;
                var2 = 0;
                if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = 8;
case 8:
                var1['paddingTop'] = var2;
                var3 = _closure2_slot2;
                var2 = var10;
                if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var7 = var6.bind(var9)(var3);
                var6 = var7.withSpring;
                var3 = _closure1_slot6;
                var2 = var6.bind(var7)(var10, var3);
case 10:
                var1['opacity'] = var2;
                var3 = {};
                var6 = _closure2_slot2;
                var2 = var11;
                if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 12;
                var6 = var10[var6];
                var10 = var7.bind(var9)(var6);
                var7 = var10.withSpring;
                var6 = _closure1_slot6;
                var2 = var7.bind(var10)(var11, var6);
case 12:
                var3['translateY'] = var2;
                var2 = new Array(2);
                var2[0] = var3;
                var3 = {};
                var6 = _closure2_slot2;
                var4 = var8;
                if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 12;
                var6 = var10[var6];
                var7 = var7.bind(var9)(var6);
                var6 = var7.withSpring;
                var5 = _closure1_slot6;
                var4 = var6.bind(var7)(var8, var5);
case 14:
                var3['scale'] = var4;
                var2[1] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var12 = {};
        var12['animatedIndex'] = var15;
        var14 = 11;
        var18 = var11[var14];
        var18 = var3.bind(var4)(var18);
        var18 = var18.animatedIndexThreshold;
        var12['animatedIndexThreshold'] = var18;
        var12['animatedSnapPoints'] = var13;
        var12['showOverflowAsCircles'] = var17;
        var12['reducedMotion'] = var16;
        var16 = 12;
        var16 = var11[var16];
        var16 = var3.bind(var4)(var16);
        var16 = var16.withSpring;
        var12['withSpring'] = var16;
        var16 = _closure1_slot6;
        var12['HEADER_SPRING'] = var16;
        var6['__closure'] = var12;
        var12 = 9112003790083.0;
        var6['__workletHash'] = var12;
        var12 = _closure1_slot8;
        var6['__initData'] = var12;
        var10 = var9.bind(var10)(var6);
        var2 = var11[var2];
        var9 = var3.bind(var4)(var2);
        var6 = var9.useAnimatedProps;
        var2 = function _() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var4 = _closure2_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 11;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.animatedIndexThreshold;
                var4 = _closure2_slot3;
                var2 = 0.5;
                var2 = var5.bind(var6)(var4, var2);
                var3 = var3 < var2;
                var2 = 'none';
                if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 3:
                var2 = 'auto';
case 16:
                var1['pointerEvents'] = var2;
                return var1;
            }
        };
        var12 = {};
        var12['animatedIndex'] = var15;
        var14 = var11[var14];
        var14 = var3.bind(var4)(var14);
        var14 = var14.animatedIndexThreshold;
        var12['animatedIndexThreshold'] = var14;
        var12['animatedSnapPoints'] = var13;
        var2['__closure'] = var12;
        var12 = 1463681350701.0;
        var2['__workletHash'] = var12;
        var12 = _closure1_slot9;
        var2['__initData'] = var12;
        var6 = var6.bind(var9)(var2);
        var2 = 13;
        var9 = var11[var2];
        var12 = var3.bind(var4)(var9);
        var9 = var12.useGradientBottom;
        var9 = var9.bind(var12)();
        var _closure2_slot5 = var9;
        var14 = _closure1_slot3;
        var13 = var14.useMemo;
        var12 = new Array(1);
        var12[0] = var9;
        var9 = function() {
            var1 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.spacing;
            var2 = var2.PX_4;
            var1['marginBottom'] = var2;
            var5 = _closure2_slot5;
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            return var1;
        };
        var9 = var13.bind(var14)(var9, var12);
        var2 = var11[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useClientThemesOverride;
        var9 = var2.bind(var3)(var9);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var1 = 14;
        var1 = var11[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var11 = var8.header;
        var8 = new Array(3);
        var8[0] = var11;
        var8[1] = var10;
        var8[2] = var9;
        var1['style'] = var8;
        var1['animatedProps'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var11 = var1.IconComponent;
                var9 = var1.text;
                var8 = var1.onPress;
                var7 = var1.disabled;
                var1 = _closure2_slot4;
                var5 = _closure1_slot5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var1 = 16;
                var1 = var4[var1];
                var10 = undefined;
                var1 = var3.bind(var10)(var1);
                var2 = var1.Button;
                var1 = {};
                var12 = {};
                var14 = 'sm';
                var12['size'] = var14;
                var13 = _closure2_slot1;
                var13 = var13.headerIcon;
                var12['style'] = var13;
                var12 = var5.bind(var10)(var11, var12);
                var1['icon'] = var12;
                var1['text'] = var9;
                var1['onPress'] = var8;
                var1['disabled'] = var7;
                var12 = 'md';
                var1['size'] = var12;
                var12 = 'secondary';
                var1['variant'] = var12;
                var12 = true;
                var1['grow'] = var12;
                var1 = var5.bind(var10)(var2, var1, var6);
                _fun0003_ip = 19; continue _fun0003;
case 17:
                var2 = 15;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.IconButton;
                var2 = {};
                var10 = {};
                var12 = 'md';
                var10['size'] = var12;
                var10 = var5.bind(var4)(var11, var10);
                var2['icon'] = var10;
                var2['label'] = var9;
                var2['accessibilityLabel'] = var9;
                var2['onPress'] = var8;
                var2['disabled'] = var7;
                var7 = 'secondary';
                var2['variant'] = var7;
                var1 = var5.bind(var4)(var3, var2, var6);
case 19:
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_keyboard/native/components/MediaKeyboardListHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['HEADER_PADDING_BOTTOM'] = var2;
    return var1;
})();