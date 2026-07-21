// app/modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function FocusedActivityAccessibilityLayer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.channelId;
            var6 = var1.activityName;
            var8 = var1.children;
            var1 = _closure1_slot10;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useState;
            var1 = false;
            var5 = var3.bind(var5)(var1);
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 0;
            var12 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot0 = var1;
            var5 = _closure1_slot3;
            var3 = var5.useRef;
            var1 = null;
            var10 = var3.bind(var5)(var1);
            var _closure2_slot1 = var10;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var5 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var9 = var7.bind(var9)(var5, var3);
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var3 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setAccessibilityFocus;
                var2 = {};
                var5 = _closure2_slot1;
                var2['ref'] = var5;
                var5 = 300;
                var2['delay'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var16 = var5.bind(var7)(var3, var2);
            if(!(var1 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var2 = var7[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.KYNi2m;
            var14 = var2.bind(var3)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var3 = var7[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.XSfwGL;
            var1 = {};
            var1['name'] = var6;
            var14 = var3.bind(var5)(var2, var1);
case 4:
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var15.fill;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 8;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.AccessibilityView;
            var5 = {};
            var11 = global;
            var11 = var11.HermesInternal;
            var17 = var11.concat;
            var11 = 'voice-panel-activity-';
            var11 = var17.bind(var11)(var18);
            var5['nativeID'] = var11;
            var5['accessibilityViewIsModal'] = var12;
            var11 = undefined;
            if(!var12) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var11 = var16;
case 5:
            var5['onAccessibilityEscape'] = var11;
            var11 = !var12;
            var5['accessibilityElementsHidden'] = var11;
            var11 = 'no-hide-descendants';
            var16 = var11;
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var16 = 'auto';
case 7:
            var5['importantForAccessibility'] = var16;
            var15 = var15.fill;
            var5['style'] = var15;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var6['ref'] = var10;
            var10 = _closure1_slot5;
            var10 = var10.absoluteFill;
            var6['style'] = var10;
            var10 = 'auto';
            var15 = var10;
            if(!var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = 'none';
case 9:
            var6['pointerEvents'] = var15;
            var15 = true;
            var6['accessible'] = var15;
            var15 = 'button';
            var6['accessibilityRole'] = var15;
            var6['accessibilityLabel'] = var14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 7;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["8DaKO6"];
            var13 = var14.bind(var15)(var13);
            var6['accessibilityHint'] = var13;
            var6['accessibilityElementsHidden'] = var12;
            if(!var12) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var11;
case 11:
            var6['importantForAccessibility'] = var10;
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IS_IOS;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['fill'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityAccessibilityLayer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = var4.isActivityFocused;
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['isActivityFocused'] = var2;
            var9 = {};
            var8 = var4;
            var7 = var3;
            var6 = copyDataProperties(var9, var8, var7);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.useIsScreenReaderEnabled;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot7;
            if(!var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 13:
            var1 = var6.children;
            _fun0002_ip = 17; continue _fun0002;
case 16:
            var4 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();