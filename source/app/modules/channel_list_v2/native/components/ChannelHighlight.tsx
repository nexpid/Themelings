// app/modules/channel_list_v2/native/components/ChannelHighlight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var4 = function useJumpToChannelId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.useRoute;
            var2 = var2.bind(var3)();
            var2 = var2.params;
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0001_ip = 56; continue _fun0001 }
 50:
            var1 = var2.jumpToChannelId;
 56:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var11 = 0;
    var6 = var9[var11];
    var5 = metroImportAll;
    var1 = undefined;
    var10 = var5.bind(var1)(var6);
    var _closure1_slot3 = var10;
    var5 = 1;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var7 = 3;
    var5 = var9[var7];
    var6 = var8.bind(var1)(var5);
    var5 = var6.makeMutable;
    var5 = var5.bind(var6)(var11);
    var _closure1_slot6 = var5;
    var6 = {};
    var6['mass'] = var7;
    var _closure1_slot7 = var6;
    var6 = {};
    var7 = 'function ChannelHighlightTsx1(finished){const{runOnJS,clearNavigationParams}=this.__closure;if(finished){runOnJS(clearNavigationParams)();}}';
    var6['code'] = var7;
    var _closure1_slot8 = var6;
    var6 = 8;
    var6 = var9[var6];
    var11 = var8.bind(var1)(var6);
    var7 = var11.createStyleProperties;
    var6 = {};
    var12 = 9;
    var12 = var9[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var6['highlightOpaque'] = var12;
    var6 = var7.bind(var11)(var6);
    var _closure1_slot9 = var6;
    var6 = {};
    var7 = 'function ChannelHighlightTsx2(){const{interpolateColor,jumpToChannelHighlightOpacity,backgroundColorTransparent,backgroundColorWithOpacity}=this.__closure;return{backgroundColor:interpolateColor(jumpToChannelHighlightOpacity.get(),[0,1],[backgroundColorTransparent,backgroundColorWithOpacity])};}';
    var6['code'] = var7;
    var _closure1_slot10 = var6;
    var7 = var10.memo;
    var6 = function ChannelHighlight(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var1 = _closure1_slot9;
        var4 = undefined;
        var1 = var1.bind(var4)();
        var8 = var1.highlightOpaque;
        var14 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var1 = var7[var1];
        var9 = var14.bind(var4)(var1);
        var2 = var9.hexWithOpacity;
        var1 = 0;
        var12 = var2.bind(var9)(var8, var1);
        var _closure2_slot0 = var12;
        var2 = _closure1_slot1;
        var1 = 11;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var11 = var1.bind(var4)(var8);
        var _closure2_slot1 = var11;
        var1 = 3;
        var8 = var7[var1];
        var9 = var14.bind(var4)(var8);
        var8 = var9.useAnimatedStyle;
        var6 = function t() {
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.interpolateColor;
            var3 = _closure1_slot6;
            var2 = var3.get;
            var4 = var2.bind(var3)();
            var7 = _closure2_slot0;
            var3 = new Array(2);
            var3[0] = var7;
            var2 = _closure2_slot1;
            var3[1] = var2;
            var2 = [0, 1];
            var2 = var5.bind(var6)(var4, var2, var3);
            var1['backgroundColor'] = var2;
            return var1;
        };
        var10 = {};
        var13 = var7[var1];
        var13 = var14.bind(var4)(var13);
        var13 = var13.interpolateColor;
        var10['interpolateColor'] = var13;
        var13 = _closure1_slot6;
        var10['jumpToChannelHighlightOpacity'] = var13;
        var10['backgroundColorTransparent'] = var12;
        var10['backgroundColorWithOpacity'] = var11;
        var6['__closure'] = var10;
        var10 = 2192852776907.0;
        var6['__workletHash'] = var10;
        var10 = _closure1_slot10;
        var6['__initData'] = var10;
        var6 = var8.bind(var9)(var6);
        var3 = _closure1_slot5;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6 = var7.bind(var10)(var6);
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/channel_list_v2/native/components/ChannelHighlight.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['jumpToChannelHighlightOpacity'] = var5;
    var3['useJumpToChannelId'] = var4;
    var2 = function useJumpToChannel(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var1 = var6[var1];
        var4 = undefined;
        var7 = var5.bind(var4)(var1);
        var1 = var7.useNavigation;
        var1 = var1.bind(var7)();
        var _closure2_slot2 = var1;
        var1 = 6;
        var1 = var6[var1];
        var7 = var5.bind(var4)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var1 = _closure1_slot4;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var1 = var6.bind(var7)(var5, var1);
        var _closure2_slot3 = var1;
        var1 = _closure1_slot11;
        var1 = var1.bind(var4)();
        var _closure2_slot4 = var1;
        var4 = _closure1_slot3;
        var5 = var4.useRef;
        var3 = null;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot5 = var3;
        var3 = var4.useEffect;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var14 = function clearNavigationParams() {
                    var4 = _closure2_slot2;
                    var3 = var4.setParams;
                    var2 = {};
                    var1 = undefined;
                    var2['jumpToChannelId'] = var1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var _closure3_slot0 = var14;
                var1 = _closure2_slot5;
                var2 = var1.current;
                var1 = _closure2_slot4;
                if(!(var2 !== var1)) { _fun0002_ip = 363; continue _fun0002 }
 36:
                var1 = _closure2_slot5;
                var2 = _closure2_slot4;
                var1['current'] = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 363; continue _fun0002 }
 59:
                var5 = _closure2_slot0;
                var3 = var5.findIndex;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.kind;
                        var1 = 'channel';
                        var1 = var1 === var3;
                        if(!var1) { _fun0003_ip = 40; continue _fun0003 }
 19:
                        var2 = var2.channel;
                        var3 = var2.id;
                        var2 = _closure2_slot4;
                        var1 = var3 === var2;
 40:
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var2);
                var2 = -1;
                if(!(!(var5 > var2))) { _fun0002_ip = 102; continue _fun0002 }
 91:
                var2 = undefined;
                var2 = var14.bind(var2)();
                _fun0002_ip = 363; continue _fun0002;
 102:
                var2 = _closure2_slot1;
                var3 = var2.current;
                if(!(var1 != var3)) { _fun0002_ip = 159; continue _fun0002 }
 115:
                var2 = var3.scrollToIndex;
                var1 = {};
                var1['index'] = var5;
                var4 = _closure2_slot3;
                var4 = !var4;
                var1['animated'] = var4;
                var4 = 0.5;
                var1['viewPosition'] = var4;
                var1 = var2.bind(var3)(var1);
 159:
                var3 = _closure1_slot6;
                var2 = var3.set;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 3;
                var4 = var18[var15];
                var16 = undefined;
                var6 = var17.bind(var16)(var4);
                var5 = var6.withSequence;
                var10 = 7;
                var4 = var18[var10];
                var9 = var17.bind(var16)(var4);
                var8 = var9.withSpring;
                var13 = _closure1_slot7;
                var4 = 1;
                var4 = var8.bind(var9)(var4, var13);
                var8 = var18[var15];
                var9 = var17.bind(var16)(var8);
                var8 = var9.withDelay;
                var10 = var18[var10];
                var12 = var17.bind(var16)(var10);
                var11 = var12.withSpring;
                var10 = function n(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0004_ip = 52; continue _fun0004 }
 6:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var15 = var18[var15];
                var15 = var17.bind(var16)(var15);
                var15 = var15.runOnJS;
                var7['runOnJS'] = var15;
                var7['clearNavigationParams'] = var14;
                var10['__closure'] = var7;
                var7 = 433061212924.0;
                var10['__workletHash'] = var7;
                var1 = _closure1_slot8;
                var10['__initData'] = var1;
                var22 = 0;
                var20 = 'respect-motion-settings';
                var23 = var12;
                var21 = var13;
                var19 = var10;
                var7 = var23[var11](var22, var21, var20, var19, var18);
                var1 = 150;
                var1 = var8.bind(var9)(var1, var7);
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
 363:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useJumpToChannel'] = var2;
    return var1;
})();