// app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.CutoutShape;
    var7 = var7.Circle;
    var4['shape'] = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ICON_SIZE;
    var8 = var7.sm;
    var7 = 9;
    var7 = var8 - var7;
    var4['x'] = var7;
    var7 = -1;
    var4['y'] = var7;
    var7 = 10;
    var4['size'] = var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'height': 32, 'width': 32, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var4['iconContainer'] = var9;
    var9 = {'position': 'absolute', 'height': 6.5, 'width': 6.5, 'backgroundColor': null, 'borderRadius': null, 'top': 7.5, 'right': 7.5};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_DANGER;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var4['dot'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['color'] = var10;
    var4['icon'] = var9;
    var9 = {'marginVertical': 8, 'marginHorizontal': 4};
    var4['shopPressable'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = function ShopIconButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.shopButtonRef;
            var5 = var2.handlePress;
            var9 = var2.showRedDot;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 29:
            var9 = true;
 31:
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot10;
            var13 = var2.bind(var4)();
            _closure2_slot1 = var13;
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var13;
            var2[1] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.ShopIcon;
                    var2 = {};
                    var1 = 'sm';
                    var2['size'] = var1;
                    var6 = _closure2_slot1;
                    var6 = var6.icon;
                    var6 = var6.color;
                    var2['color'] = var6;
                    var6 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot0;
                    var1 = var6;
                    if(!var2) { _fun0002_ip = 135; continue _fun0002 }
 82:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var8 = _closure1_slot9;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var2['cutouts'] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 135:
                    return var1;
                }
            };
            var11 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot7;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 10;
            var1 = var14[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PressableScale;
            var1 = {};
            var7 = var13.shopPressable;
            var1['style'] = var7;
            var1['ref'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var6 = 11;
            var7 = var14[var6];
            var7 = var12.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.pWG4zc;
            var6 = var7.bind(var8)(var6);
            var1['accessibilityLabel'] = var6;
            var1['onPress'] = var5;
            var5 = 8;
            var1['hitSlop'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var13.iconContainer;
            var5['style'] = var8;
            var8 = new Array(2);
            var8[0] = var11;
            if(!var9) { _fun0001_ip = 262; continue _fun0001 }
 236:
            var12 = _closure1_slot7;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var13.dot;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 262:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopEntryButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopEntryButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.navigateToShop;
            var _closure2_slot0 = var2;
            var1 = var1.shopButtonRef;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var3.bind(var4)(var2, var1);
            var7 = null;
            var1 = var7 == var9;
            var2 = undefined;
            if(var1) { _fun0003_ip = 97; continue _fun0003 }
 91:
            var2 = var9.dismissibleContent;
 97:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 14;
            var1 = var1[var12];
            var1 = var3.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var4 = new Array(0);
            var3 = var7 == var9;
            var8 = undefined;
            if(var3) { _fun0003_ip = 147; continue _fun0003 }
 142:
            var8 = var9.type;
 147:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 15;
            var3 = var3[var14];
            var3 = var11.bind(var5)(var3);
            var3 = var3.CollectiblesMarketingType;
            var3 = var3.BADGE;
            var3 = var8 === var3;
            if(!var3) { _fun0003_ip = 205; continue _fun0003 }
 186:
            var11 = var7 == var9;
            var8 = undefined;
            if(var11) { _fun0003_ip = 201; continue _fun0003 }
 195:
            var8 = var9.dismissibleContent;
 201:
            var3 = var7 != var8;
 205:
            if(!var3) { _fun0003_ip = 224; continue _fun0003 }
 208:
            var8 = var4.push;
            var3 = var9.dismissibleContent;
            var3 = var8.bind(var4)(var3);
 224:
            if(!(var2 !== var1)) { _fun0003_ip = 281; continue _fun0003 }
 228:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['contentTypes'] = var4;
            var4 = function children(arg1) {
                var2 = arg1;
                var5 = var2.visibleContent;
                var _closure3_slot0 = var5;
                var2 = var2.markAsDismissed;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot7;
                var3 = _closure1_slot11;
                var2 = {};
                var6 = _closure2_slot1;
                var2['shopButtonRef'] = var6;
                var1 = function handlePress() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure3_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 48; continue _fun0004 }
 26:
                        var3 = _closure3_slot1;
                        var2 = _closure1_slot6;
                        var2 = var2.PRIMARY;
                        var2 = var3.bind(var1)(var2);
 48:
                        return var1;
                    }
                };
                var2['handlePress'] = var1;
                var1 = null;
                var1 = var1 != var5;
                var2['showRedDot'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 445; continue _fun0003;
 281:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SelectedVersionedDismissibleContent;
            var2 = {};
            var8 = var7 == var9;
            var13 = undefined;
            if(var8) { _fun0003_ip = 327; continue _fun0003 }
 322:
            var13 = var9.type;
 327:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var11.bind(var5)(var8);
            var8 = var8.CollectiblesMarketingType;
            var11 = var8.BADGE;
            var8 = null;
            if(!(var13 === var11)) { _fun0003_ip = 391; continue _fun0003 }
 362:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var10 = var11.bind(var5)(var10);
            var10 = var10.DismissibleContent;
            var8 = var10.COLLECTIBLES_SHOP_ENTRY_MARKETING;
 391:
            var2['contentType'] = var8;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0003_ip = 411; continue _fun0003 }
 405:
            var8 = var9.version;
 411:
            var9 = var7 != var8;
            var7 = 0;
            if(!var9) { _fun0003_ip = 423; continue _fun0003 }
 420:
            var7 = var8;
 423:
            var2['latestVersion'] = var7;
            var6 = function children(arg1) {
                var2 = arg1;
                var5 = var2.visibleContent;
                var _closure3_slot0 = var5;
                var2 = var2.markAsDismissed;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot7;
                var3 = _closure1_slot11;
                var2 = {};
                var6 = _closure2_slot1;
                var2['shopButtonRef'] = var6;
                var1 = function handlePress() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure3_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0005_ip = 48; continue _fun0005 }
 26:
                        var3 = _closure3_slot1;
                        var2 = _closure1_slot6;
                        var2 = var2.PRIMARY;
                        var2 = var3.bind(var1)(var2);
 48:
                        return var1;
                    }
                };
                var2['handlePress'] = var1;
                var1 = null;
                var1 = var1 != var5;
                var2['showRedDot'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 445:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();