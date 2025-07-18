// app/modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiCategoryTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IMAGE_SIZE;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PADDING_VERTICAL;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.Fragment;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var8 = var9.create;
    var4 = {};
    var11 = {'position': 'absolute', 'left': 0, 'right': 0};
    var4['containerPortals'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var4['container'] = var11;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 8;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var10 = var8.bind(var9)(var4);
    var4 = 9;
    var8 = var6[var4];
    var9 = var5.bind(var1)(var8);
    var8 = var9.createBottomSheetScrollableComponent;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SCROLLABLE_TYPE;
    var4 = var4.SCROLLVIEW;
    var4 = var8.bind(var9)(var4, var10);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function EmojiPickerListComponentAndroidTsx1(){const{animatedSheetIndex}=this.__closure;return animatedSheetIndex.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.analyticsLocations;
            var _closure2_slot0 = var10;
            var14 = var1.categoryIndexActive;
            var _closure2_slot1 = var14;
            var8 = var1.data;
            var _closure2_slot2 = var8;
            var5 = var1.animateEmoji;
            var _closure2_slot3 = var5;
            var11 = var1.guildId;
            var _closure2_slot4 = var11;
            var3 = var1.inActionSheet;
            var27 = var1.inPortalKeyboard;
            var _closure2_slot5 = var27;
            var13 = var1.paddingTop;
            var12 = var1.paddingBottom;
            var16 = var1.onPressEmoji;
            var _closure2_slot6 = var16;
            var20 = var1.onLongPressEmoji;
            var _closure2_slot7 = var20;
            var6 = var1.onShowNitroUpsell;
            var _closure2_slot8 = var6;
            var9 = var1.useTier0UpsellContent;
            var _closure2_slot9 = var9;
            var19 = _closure1_slot3;
            var7 = var19.useRef;
            var4 = null;
            var7 = var7.bind(var19)(var4);
            var _closure2_slot10 = var7;
            var17 = var19.useEffect;
            var15 = new Array(2);
            var15[0] = var7;
            var15[1] = var8;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot10;
                    var4 = var1.current;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0002_ip = 31; continue _fun0002 }
 21:
                    var3 = _closure2_slot2;
                    var2 = var3.hasGuildData;
 31:
                    if(!var2) { _fun0002_ip = 81; continue _fun0002 }
 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.Commands;
                    var2 = var3.refreshEmojis;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var17.bind(var19)(var4, var15);
            var17 = var19.useCallback;
            var15 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 69; continue _fun0003 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Commands;
                    var3 = var4.scrollingEnabled;
                    var2 = var1.current;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = new Array(0);
            var23 = var17.bind(var19)(var15, var4);
            var _closure2_slot11 = var23;
            var17 = var19.useContext;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var4 = 10;
            var15 = var26[var4];
            var4 = undefined;
            var15 = var25.bind(var4)(var15);
            var15 = var15.PortalKeyboardContext;
            var15 = var17.bind(var19)(var15);
            var22 = var15.animatedSheetIndex;
            var _closure2_slot12 = var22;
            var24 = 7;
            var15 = var26[var24];
            var21 = var25.bind(var4)(var15);
            var18 = var21.useAnimatedReaction;
            var17 = function D() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = {};
            var15['animatedSheetIndex'] = var22;
            var17['__closure'] = var15;
            var15 = 5078921785740.0;
            var17['__workletHash'] = var15;
            var15 = _closure1_slot13;
            var17['__initData'] = var15;
            var15 = function R(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot5;
                    var2 = !var2;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
 16:
                    var4 = 0;
                    var2 = var3 < var4;
 22:
                    if(var2) { _fun0004_ip = 132; continue _fun0004 }
 25:
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0004_ip = 86; continue _fun0004 }
 31:
                    var2 = 1;
                    if(!(var2 === var3)) { _fun0004_ip = 132; continue _fun0004 }
 38:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot11;
                    var3 = var3.bind(var5)(var2);
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 132; continue _fun0004;
 86:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var2 = var2.bind(var4)(var1);
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var22['inPortalKeyboard'] = var27;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.runOnJS;
            var22['runOnJS'] = var24;
            var22['scrollingEnabled'] = var23;
            var15['__closure'] = var22;
            var22 = 9047705951167.0;
            var15['__workletHash'] = var22;
            var22 = _closure1_slot14;
            var15['__initData'] = var22;
            var15 = var18.bind(var21)(var17, var15);
            var18 = var19.useCallback;
            var17 = new Array(1);
            var17[0] = var11;
            var15 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.emojiId;
                    var3 = var1.emojiName;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0005_ip = 59; continue _fun0005 }
 21:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.getByName;
                    var1 = var1.bind(var2)(var3);
                    _fun0005_ip = 95; continue _fun0005;
 59:
                    var5 = _closure1_slot4;
                    var3 = var5.getDisambiguatedEmojiContext;
                    var2 = _closure2_slot4;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getById;
                    var1 = var2.bind(var3)(var4);
 95:
                    return var1;
                }
            };
            var15 = var18.bind(var19)(var15, var17);
            var _closure2_slot13 = var15;
            var18 = var19.useCallback;
            var17 = new Array(2);
            var17[0] = var16;
            var17[1] = var15;
            var16 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.nativeEvent;
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0006_ip = 37; continue _fun0006 }
 28:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)(var3);
 37:
                    return var1;
                }
            };
            var17 = var18.bind(var19)(var16, var17);
            var18 = var19.useCallback;
            var16 = new Array(2);
            var16[0] = var20;
            var16[1] = var15;
            var15 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.nativeEvent;
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0007_ip = 37; continue _fun0007 }
 28:
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)(var3);
 37:
                    return var1;
                }
            };
            var16 = var18.bind(var19)(var15, var16);
            var18 = var19.useCallback;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = var1.index;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var15 = var18.bind(var19)(var14, var15);
            var18 = var19.useCallback;
            var14 = new Array(1);
            var14[0] = var6;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot8;
                var2 = var1.showNitroUpsell;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var18.bind(var19)(var6, var14);
            var20 = var19.useImperativeHandle;
            var18 = arg2;
            var6 = function() {
                var1 = {};
                var3 = function scrollToHeaderIndex(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.index;
                        var5 = var1.animated;
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0008_ip = 22; continue _fun0008 }
 20:
                        var5 = true;
 22:
                        var2 = _closure2_slot10;
                        var4 = var2.current;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 87; continue _fun0008 }
 40:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 8;
                        var3 = var7[var3];
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.Commands;
                        var3 = var4.scrollToHeaderIndex;
                        var2 = var2.current;
                        var2 = var3.bind(var4)(var2, var6, var5);
 87:
                        return var1;
                    }
                };
                var1['scrollToHeaderIndex'] = var3;
                var3 = function forceUpdate() {
                    var1 = undefined;
                    return var1;
                };
                var1['forceUpdate'] = var3;
                var2 = function onStickyHeaderRendered() {
                    var1 = undefined;
                    return var1;
                };
                var1['onStickyHeaderRendered'] = var2;
                return var1;
            };
            var6 = var20.bind(var19)(var18, var6);
            var18 = var19.useMemo;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = {'animateEmoji': null, 'scrollFastOptimizationEnabled': true, 'scrollFastVelocity': 8000, 'disableAnimationsOnScroll': true};
                var2 = _closure2_slot3;
                var1['animateEmoji'] = var2;
                return var1;
            };
            var18 = var18.bind(var19)(var5, var6);
            if(var3) { _fun0001_ip = 581; continue _fun0001 }
 559:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            _fun0001_ip = 585; continue _fun0001;
 581:
            var6 = _closure1_slot12;
 585:
            var5 = _closure1_slot8;
            var3 = {};
            var3['config'] = var18;
            var3['emojiData'] = var8;
            var18 = _closure1_slot7;
            var3['emojiMargin'] = var18;
            var18 = _closure1_slot6;
            var3['emojiSize'] = var18;
            var3['onPressEmoji'] = var17;
            var3['onLongPressEmoji'] = var16;
            var3['onStickyHeaderRender'] = var15;
            var3['onShowNitroUpsell'] = var14;
            var3['paddingTop'] = var13;
            var3['paddingBottom'] = var12;
            var3['useTier0UpsellContent'] = var9;
            var3['ref'] = var7;
            var7 = _closure1_slot11;
            var7 = var7.container;
            var3['style'] = var7;
            var7 = var5.bind(var4)(var6, var3);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var8 = var8.hasSearchUpsell;
            var3[3] = var8;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = var1.hasSearchUpsell;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 130; continue _fun0009 }
 18:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.PREMIUM_UPSELL;
                    var2['portalId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.PremiumSearchUpsell;
                    var6 = {};
                    var9 = _closure2_slot4;
                    var6['guildId'] = var9;
                    var9 = _closure2_slot0;
                    var6['analyticsLocations'] = var9;
                    var8 = _closure2_slot9;
                    var6['useTier0UpsellContent'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 130:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();