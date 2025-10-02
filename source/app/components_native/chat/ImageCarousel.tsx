// app/components_native/chat/ImageCarousel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function useTileEntranceAnimatedStyle(arg1) {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 8;
        var3 = var9[var2];
        var7 = undefined;
        var6 = var8.bind(var7)(var3);
        var5 = var6.useSharedValue;
        var3 = 0;
        var6 = var5.bind(var6)(var3);
        var _closure2_slot0 = var6;
        var11 = _closure1_slot3;
        var10 = var11.useEffect;
        var5 = new Array(2);
        var5[0] = var6;
        var3 = arg1;
        var5[1] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.set;
            var1 = 1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3 = var10.bind(var11)(var3, var5);
        var2 = var9[var2];
        var3 = var8.bind(var7)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function l() {
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var5 = undefined;
            var10 = var6.bind(var5)(var2);
            var9 = var10.withTiming;
            var4 = _closure2_slot0;
            var2 = var4.get;
            var3 = var2.bind(var4)();
            var2 = {};
            var7 = 300;
            var2['duration'] = var7;
            var7 = 10;
            var7 = var8[var7];
            var7 = var6.bind(var5)(var7);
            var7 = var7.STANDARD_EASING;
            var2['easing'] = var7;
            var7 = 'animate-always';
            var2 = var9.bind(var10)(var3, var2, var7);
            var1['opacity'] = var2;
            var3 = {};
            var2 = 11;
            var2 = var8[var2];
            var6 = var6.bind(var5)(var2);
            var5 = var6.withSpring;
            var2 = var4.get;
            var4 = var2.bind(var4)();
            var2 = {'stiffness': 80, 'damping': 6, 'mass': 0.3};
            var2 = var5.bind(var6)(var4, var2, var7);
            var3['scale'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var5 = {};
        var10 = 9;
        var10 = var9[var10];
        var10 = var8.bind(var7)(var10);
        var10 = var10.withTiming;
        var5['withTiming'] = var10;
        var5['animatedStylePropValue'] = var6;
        var6 = 10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.STANDARD_EASING;
        var5['STANDARD_EASING'] = var6;
        var6 = 11;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withSpring;
        var5['withSpring'] = var6;
        var1['__closure'] = var5;
        var5 = 9754366991991.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot14;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var2;
    var1 = function Tile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5.id;
            var _closure2_slot0 = var2;
            var19 = var5.isVideo;
            var _closure2_slot1 = var19;
            var18 = var5.isImage;
            var _closure2_slot2 = var18;
            var8 = var5.description;
            var _closure2_slot3 = var8;
            var27 = var5.item;
            var _closure2_slot4 = var27;
            var11 = var5.onRemove;
            var _closure2_slot5 = var11;
            var14 = var5.channelId;
            var _closure2_slot6 = var14;
            var3 = var5.fileType;
            var _closure2_slot7 = var3;
            var17 = var5.isHighlighted;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = false;
case 2:
            var _closure2_slot8 = var17;
            var7 = var5.isThumbnail;
            if(!(var7 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = false;
case 4:
            var _closure2_slot9 = var7;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var5 = _closure1_slot13;
            var15 = var5.bind(var4)();
            _closure2_slot10 = var15;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 12;
            var5 = var9[var5];
            var10 = var6.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getUpload;
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.ChannelMessage;
                    var3 = var4.bind(var5)(var3, var2, var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var3.spoiler;
case 6:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var5);
            _closure2_slot11 = var6;
            var13 = _closure1_slot3;
            var10 = var13.useCallback;
            var9 = new Array(3);
            var9[0] = var19;
            var9[1] = var18;
            var9[2] = var17;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var2 = _closure2_slot8;
                    var3 = var4;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = 4;
                    var3 = var4 - var2;
case 10:
                    var5 = _closure2_slot1;
                    if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = _closure2_slot2;
case 12:
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = 192;
                    var4 = undefined;
case 14:
                    var1 = {};
                    var1['width'] = var4;
                    var1['height'] = var3;
                    var1['maxWidth'] = var2;
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var5, var9);
            _closure2_slot12 = var10;
            var13 = _closure1_slot3;
            var9 = var13.useCallback;
            var5 = new Array(7);
            var5[0] = var14;
            var5[1] = var2;
            var5[2] = var19;
            var5[3] = var18;
            var5[4] = var11;
            var5[5] = var27;
            var5[6] = var3;
            var3 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 15;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 14;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['id'] = var7;
                var7 = _closure2_slot4;
                var3['source'] = var7;
                var7 = _closure2_slot5;
                var3['onRemove'] = var7;
                var7 = _closure2_slot1;
                var3['isVideo'] = var7;
                var7 = _closure2_slot2;
                var3['isImage'] = var7;
                var7 = _closure2_slot6;
                var3['channelId'] = var7;
                var2 = _closure2_slot7;
                var3['fileType'] = var2;
                var2 = 'UploadPreviewActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var16 = var9.bind(var13)(var3, var5);
            var9 = _closure1_slot3;
            var5 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var5.bind(var9)(var2, var3);
            _closure2_slot13 = var9;
            var11 = _closure1_slot3;
            var5 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'remove';
                    if(!(var1 === var2)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var5.bind(var11)(var2, var3);
            var3 = _closure1_slot16;
            var2 = var27.id;
            var26 = null;
            if(!(var26 == var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var27.uri;
case 20:
            var14 = var3.bind(var4)(var2);
            _closure2_slot14 = var14;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(10);
            var2[0] = var10;
            var2[1] = var14;
            var2[2] = var8;
            var8 = var27.uri;
            var2[3] = var8;
            var8 = var27.filename;
            var2[4] = var8;
            var2[5] = var18;
            var2[6] = var7;
            var2[7] = var19;
            var2[8] = var6;
            var2[9] = var15;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var4 = undefined;
                    var1 = var1.bind(var4)();
                    var13 = var1.width;
                    var12 = var1.height;
                    var11 = var1.maxWidth;
                    var3 = _closure1_slot12;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var1 = var10[var1];
                    var1 = var9.bind(var4)(var1);
                    var2 = var1.View;
                    var1 = {};
                    var5 = _closure2_slot10;
                    var6 = var5.tileContainer;
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = {};
                    var6['width'] = var13;
                    var6['height'] = var12;
                    var5[1] = var6;
                    var6 = _closure2_slot14;
                    var5[2] = var6;
                    var1['style'] = var5;
                    var7 = _closure1_slot11;
                    var5 = 16;
                    var5 = var10[var5];
                    var6 = var9.bind(var4)(var5);
                    var5 = {};
                    var8 = _closure2_slot4;
                    var16 = var8.uri;
                    var5['uri'] = var16;
                    var16 = _closure2_slot2;
                    var5['isImage'] = var16;
                    var16 = _closure2_slot1;
                    var5['isVideo'] = var16;
                    var5['width'] = var13;
                    var5['height'] = var12;
                    var5['maxFileWidth'] = var11;
                    var8 = var8.filename;
                    var5['fileName'] = var8;
                    var8 = 7;
                    var8 = var10[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.radii;
                    var8 = var8.md;
                    var5['borderRadius'] = var8;
                    var6 = var7.bind(var4)(var6, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var7 = _closure2_slot9;
                    var10 = null;
                    var6 = null;
                    if(!var7) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var11 = _closure2_slot10;
                    var11 = var11.footerRightContainer;
                    var7['style'] = var11;
                    var13 = _closure1_slot11;
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 17;
                    var11 = var18[var16];
                    var12 = var17.bind(var4)(var11);
                    var11 = {};
                    var19 = 18;
                    var19 = var18[var19];
                    var19 = var17.bind(var4)(var19);
                    var11['source'] = var19;
                    var16 = var18[var16];
                    var16 = var17.bind(var4)(var16);
                    var16 = var16.Sizes;
                    var16 = var16.SMALL_14;
                    var11['size'] = var16;
                    var11 = var13.bind(var4)(var12, var11);
                    var7['children'] = var11;
                    var6 = var9.bind(var4)(var8, var7);
case 22:
                    var5[1] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot4;
                    var6 = {};
                    var9 = _closure2_slot10;
                    var9 = var9.decorationsContainer;
                    var6['style'] = var9;
                    var9 = _closure2_slot11;
                    var11 = null;
                    if(!var9) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var13 = _closure1_slot11;
                    var12 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var9 = 19;
                    var9 = var16[var9];
                    var12 = var12.bind(var4)(var9);
                    var9 = {};
                    var16 = _closure2_slot10;
                    var16 = var16.spoilerOverlay;
                    var9['style'] = var16;
                    var11 = var13.bind(var4)(var12, var9);
case 24:
                    var9 = new Array(3);
                    var9[0] = var11;
                    var13 = _closure1_slot12;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var16 = _closure2_slot3;
                    var16 = var10 != var16;
                    var17 = null;
                    if(!var16) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var16 = _closure2_slot3;
                    var16 = var10 == var16;
                    var18 = undefined;
                    if(var16) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var16 = _closure2_slot3;
                    var18 = var16.length;
case 28:
                    var16 = 0;
                    var16 = var18 > var16;
                    var17 = null;
                    if(!var16) { _fun0006_ip = 26; continue _fun0006 }
case 30:
                    var19 = _closure1_slot11;
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var16 = 20;
                    var16 = var24[var16];
                    var16 = var23.bind(var4)(var16);
                    var18 = var16.Text;
                    var16 = {'variant': 'text-xs/medium', 'color': 'white', 'allowFontScaling': false};
                    var20 = _closure2_slot10;
                    var20 = var20.altTagText;
                    var16['style'] = var20;
                    var20 = 21;
                    var21 = var24[var20];
                    var21 = var23.bind(var4)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var24[var20];
                    var20 = var23.bind(var4)(var20);
                    var20 = var20.t;
                    var20 = var20.QEW819;
                    var20 = var21.bind(var22)(var20);
                    var16['children'] = var20;
                    var17 = var19.bind(var4)(var18, var16);
case 26:
                    var16 = new Array(2);
                    var16[0] = var17;
                    var18 = _closure2_slot1;
                    var17 = null;
                    if(!var18) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var20 = _closure1_slot11;
                    var19 = _closure1_slot4;
                    var18 = {};
                    var21 = _closure2_slot10;
                    var21 = var21.iconContainer;
                    var18['style'] = var21;
                    var23 = _closure1_slot11;
                    var22 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var21 = 22;
                    var21 = var24[var21];
                    var21 = var22.bind(var4)(var21);
                    var22 = var21.PlayIcon;
                    var21 = {'size': 'xxs', 'color': 'white'};
                    var21 = var23.bind(var4)(var22, var21);
                    var18['children'] = var21;
                    var17 = var20.bind(var4)(var19, var18);
case 31:
                    var16[1] = var17;
                    var11['children'] = var16;
                    var11 = var13.bind(var4)(var12, var11);
                    var9[1] = var11;
                    var11 = _closure2_slot11;
                    var10 = null;
                    if(!var11) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var13 = _closure1_slot11;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var15 = _closure2_slot10;
                    var15 = var15.iconContainer;
                    var11['style'] = var15;
                    var16 = _closure1_slot11;
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 23;
                    var14 = var17[var14];
                    var14 = var15.bind(var4)(var14);
                    var15 = var14.EyeIcon;
                    var14 = {'size': 'xxs', 'color': 'white'};
                    var14 = var16.bind(var4)(var15, var14);
                    var11['children'] = var14;
                    var10 = var13.bind(var4)(var12, var11);
case 33:
                    var9[2] = var10;
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[2] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var1 = {};
            var2 = 'remove';
            var1['name'] = var2;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 21;
            var2 = var22[var10];
            var2 = var23.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.string;
            var2 = var22[var10];
            var2 = var23.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.kFwAsb;
            var2 = var3.bind(var5)(var2);
            var1['label'] = var2;
            var21 = new Array(1);
            var21[0] = var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = _closure1_slot11;
            var6 = 24;
            var5 = var22[var6];
            var5 = var23.bind(var4)(var5);
            var7 = var5.PressableOpacity;
            var5 = {};
            var11 = 'button';
            var5['accessibilityRole'] = var11;
            var24 = var22[var10];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.formatToPlainString;
            var22 = var22[var10];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var23 = var22.MJHFt7;
            var22 = {};
            var27 = var27.filename;
            var28 = var26 != var27;
            var26 = '';
            if(!var28) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var26 = var27;
case 35:
            var22['name'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var5['accessibilityLabel'] = var22;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var10];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var10];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.QtJ1c3;
            var22 = var23.bind(var24)(var22);
            var5['accessibilityHint'] = var22;
            var5['accessibilityActions'] = var21;
            var5['onAccessibilityAction'] = var20;
            var18 = !var18;
            if(!var18) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var18 = !var19;
case 37:
            var5['disabled'] = var18;
            var5['onPress'] = var16;
            var18 = var15.pressableContainer;
            var16 = new Array(2);
            var16[0] = var18;
            if(!var17) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var17 = var15.highlightedTileContainer;
case 39:
            var16[1] = var17;
            var5['style'] = var16;
            var13 = var13.bind(var4)();
            var5['children'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot11;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = var18[var6];
            var6 = var16.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var6['accessibilityRole'] = var11;
            var11 = var18[var10];
            var11 = var16.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var18[var10];
            var10 = var16.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.kFwAsb;
            var10 = var11.bind(var13)(var10);
            var6['accessibilityLabel'] = var10;
            var10 = var15.closeButton;
            var6['style'] = var10;
            var6['onPress'] = var9;
            var9 = {'top': 4, 'bottom': 4, 'left': 4, 'right': 4};
            var6['hitSlop'] = var9;
            var11 = _closure1_slot11;
            var17 = _closure1_slot1;
            var9 = 8;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var10 = var9.View;
            var9 = {};
            var16 = var15.closeContainer;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var14;
            var9['style'] = var13;
            var14 = _closure1_slot11;
            var16 = 17;
            var12 = var18[var16];
            var13 = var17.bind(var4)(var12);
            var12 = {};
            var19 = 25;
            var19 = var18[var19];
            var19 = var17.bind(var4)(var19);
            var12['source'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.MEDIUM;
            var12['size'] = var16;
            var16 = 7;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.unsafe_rawColors;
            var16 = var16.PRIMARY_500;
            var12['color'] = var16;
            var15 = var15.closeButtonIcon;
            var12['style'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var19 = 1;
    var5 = var7[var19];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot4 = var9;
    var14 = var5.StyleSheet;
    var5 = var5.ScrollView;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DraftType;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var18 = 4;
    var5 = var7[var18];
    var5 = var6.bind(var1)(var5);
    var17 = var5.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    var _closure1_slot8 = var17;
    var15 = var5.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    var _closure1_slot9 = var15;
    var5 = var5.IMAGE_CAROUSEL_TILE_HEIGHT;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot11 = var9;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var12 = '100%';
    var11['width'] = var12;
    var5['container'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var18;
    var5['pressableContainer'] = var11;
    var11 = {'position': 'relative', 'minWidth': 60, 'backgroundColor': null, 'overflow': 'hidden'};
    var12 = 7;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SECONDARY;
    var11['backgroundColor'] = var16;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var16 = var16 - var19;
    var11['borderRadius'] = var16;
    var5['tileContainer'] = var11;
    var11 = {};
    var21 = var14.absoluteFillObject;
    var22 = var11;
    var16 = copyDataProperties(var22, var21);
    var16 = 'flex';
    var11[var16] = var19;
    var19 = 'row';
    var16 = 'flexDirection';
    var11[var16] = var19;
    var19 = 'space-between';
    var16 = 'justifyContent';
    var11[var16] = var19;
    var19 = 'flex-end';
    var16 = 'alignItems';
    var11[var16] = var19;
    var16 = 'padding';
    var11[var16] = var18;
    var5['decorationsContainer'] = var11;
    var11 = {'borderColor': null, 'borderStyle': 'solid', 'borderWidth': 2, 'borderRadius': 10};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_ACTIVE;
    var11['borderColor'] = var16;
    var5['highlightedTileContainer'] = var11;
    var11 = {'position': 'absolute', 'top': null, 'right': 2};
    var16 = -1;
    var16 = var16 * var17;
    var11['top'] = var16;
    var5['closeButton'] = var11;
    var11 = {};
    var11['paddingTop'] = var15;
    var5['scrollview'] = var11;
    var11 = {'height': 20, 'width': 20, 'borderRadius': 20, 'alignItems': 'center', 'justifyContent': 'center'};
    var15 = 20;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BACKDROP_IMMERSIVE;
    var11['backgroundColor'] = var16;
    var5['closeContainer'] = var11;
    var11 = {};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var11['borderRadius'] = var16;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOBILE_PRIMARY;
    var11['backgroundColor'] = var16;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var11['tintColor'] = var16;
    var5['closeButtonIcon'] = var11;
    var11 = {};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11['paddingHorizontal'] = var16;
    var11['lineHeight'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BACKDROP_IMMERSIVE;
    var11['backgroundColor'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var15 = 'uppercase';
    var11['textTransform'] = var15;
    var5['altTagText'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BACKDROP_IMMERSIVE;
    var11['backgroundColor'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11['borderRadius'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11['padding'] = var15;
    var5['iconContainer'] = var11;
    var11 = {};
    var21 = var14.absoluteFillObject;
    var22 = var11;
    var14 = copyDataProperties(var22, var21);
    var5['spoilerOverlay'] = var11;
    var11 = {'position': 'absolute', 'bottom': 4, 'right': 4, 'alignItems': 'center', 'justifyContent': 'center', 'alignContent': 'center', 'backgroundColor': null, 'padding': 4, 'borderRadius': 20, 'opacity': 0.85};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND;
    var11['backgroundColor'] = var12;
    var5['footerRightContainer'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot13 = var5;
    var5 = {};
    var9 = "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'animate-always'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'animate-always')}]};}";
    var5['code'] = var9;
    var _closure1_slot14 = var5;
    var5 = function CustomScrollView(arg1) {
        var3 = _closure1_slot13;
        var4 = undefined;
        var5 = var3.bind(var4)();
        var6 = _closure1_slot3;
        var3 = var6.useRef;
        var7 = 0;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot0 = var3;
        var6 = _closure1_slot3;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot1 = var3;
        var7 = _closure1_slot3;
        var6 = var7.useRef;
        var3 = null;
        var9 = var6.bind(var7)(var3);
        var _closure2_slot2 = var9;
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var6 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot0;
                var4 = var1.current;
                var1 = _closure2_slot1;
                var6 = var1.current;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 26;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = var7.getWindowDimensions;
                var5 = var5.bind(var7)();
                var5 = var5.width;
                var5 = var6 + var5;
                var5 = var5 > var3;
                var4 = var3 > var4;
                if(var4) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var4 = var5;
case 41:
                if(!var4) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var4 = _closure2_slot2;
                var5 = var4.current;
                var4 = null;
                if(!(var4 != var5)) { _fun0007_ip = 43; continue _fun0007 }
case 45:
                var4 = var5.scrollToEnd;
                var4 = var4.bind(var5)();
case 43:
                var2 = _closure2_slot0;
                var2['current'] = var3;
                return var1;
            }
        };
        var3 = new Array(0);
        var8 = var7.bind(var8)(var6, var3);
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var3 = function(arg1) {
            var2 = _closure2_slot1;
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.contentOffset;
            var1 = var1.x;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = new Array(0);
        var7 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var10 = arg1;
        var11 = var1;
        var6 = copyDataProperties(var11, var10);
        var6 = 'ref';
        var1[var6] = var9;
        var6 = 'onContentSizeChange';
        var1[var6] = var8;
        var6 = 'onScroll';
        var1[var6] = var7;
        var7 = 16;
        var6 = 'scrollEventThrottle';
        var1[var6] = var7;
        var6 = var5.scrollview;
        var5 = 'contentContainerStyle';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var13 = var1.attachments;
            var2 = var1.onRemove;
            var _closure2_slot0 = var2;
            var2 = var1.channelId;
            var _closure2_slot1 = var2;
            var11 = var1.headerElement;
            var1 = var1.highlightThumbnails;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0008_ip = 7; continue _fun0008 }
case 46:
            var1 = false;
case 7:
            var _closure2_slot2 = var1;
            var1 = _closure1_slot13;
            var5 = var1.bind(var4)();
            var9 = null;
            var12 = var9 != var13;
            if(!var12) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var2 = var13.length;
            var1 = 0;
            var12 = var2 > var1;
case 47:
            if(var12) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var12 = var9 != var11;
case 49:
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var14 = 0;
            if(!var12) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var16 = _closure1_slot10;
            var15 = _closure1_slot9;
            var14 = var16 + var15;
case 51:
            var6['height'] = var14;
            var14 = 0;
            if(!var12) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var16 = _closure1_slot9;
            var15 = _closure1_slot8;
            var16 = var16 - var15;
            var15 = -1;
            var14 = var15 * var16;
case 53:
            var6['marginTop'] = var14;
            var7 = 0;
            if(!var12) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var14 = _closure1_slot8;
            var12 = 2;
            var7 = var12 * var14;
case 55:
            var6['marginBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot15;
            var5 = {'horizontal': true, 'keyboardShouldPersistTaps': 'always', 'showsHorizontalScrollIndicator': false, 'accessibilityRole': 'list'};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 21;
            var12 = var16[var8];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var8 = var16[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.RhtzFR;
            var8 = var12.bind(var14)(var8);
            var5['accessibilityLabel'] = var8;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = var9 != var13;
            var9 = null;
            if(!var11) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var11 = global;
            var12 = var11.Object;
            var11 = var12.values;
            var12 = var11.bind(var12)(var13);
            var11 = var12.map;
            var10 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var8 = arg1;
                    var1 = var8.item;
                    var2 = var1.platform;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 27;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.UploadPlatform;
                    var1 = var1.REACT_NATIVE;
                    if(!(var2 === var1)) { _fun0009_ip = 59; continue _fun0009 }
case 6:
                    var13 = var8.id;
                    var4 = var8.uniqueId;
                    var9 = var8.item;
                    var12 = var8.isVideo;
                    var11 = var8.isImage;
                    var10 = var8.description;
                    var6 = var8.isThumbnail;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var1['id'] = var13;
                    var1['isVideo'] = var12;
                    var1['isImage'] = var11;
                    var1['description'] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 28;
                    var7 = var11[var7];
                    var11 = var10.bind(var5)(var7);
                    var10 = var11.getType;
                    var7 = var9.uri;
                    var7 = var10.bind(var11)(var7);
                    var1['fileType'] = var7;
                    var10 = _closure2_slot0;
                    var1['onRemove'] = var10;
                    var10 = _closure2_slot1;
                    var1['channelId'] = var10;
                    var1['item'] = var9;
                    var7 = _closure2_slot2;
                    if(!var7) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var9 = var8.isThumbnail;
                    var8 = true;
                    var7 = var8 === var9;
case 60:
                    var1['isHighlighted'] = var7;
                    var1['isThumbnail'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
case 59:
                    var1 = null;
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var10);
case 57:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/chat/ImageCarousel.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useTileEntranceAnimatedStyle'] = var2;
    return var1;
})();