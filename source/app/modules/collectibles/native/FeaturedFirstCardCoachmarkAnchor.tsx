// app/modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function CoachmarkRenderer(arg1) {
        var1 = arg1;
        var4 = var1.anchorRef;
        var8 = var1.config;
        var _closure2_slot0 = var8;
        var7 = var1.markAsDismissed;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot0;
                var8 = var1;
                var7 = var3;
                var4 = copyDataProperties(var8, var7);
                var3 = var3.title;
                var4 = 'function';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var5 = var3.title;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var6 = _closure2_slot0;
                var3 = var6.title;
                var5 = var3.bind(var6)();
case 4:
                var3 = 'title';
                var1[var3] = var5;
                var3 = _closure2_slot0;
                var3 = var3.description;
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var3 = _closure2_slot0;
                var3 = var3.description;
                _fun0001_ip = 7; continue _fun0001;
case 5:
                var4 = _closure2_slot0;
                var2 = var4.description;
                var3 = var2.bind(var4)();
case 7:
                var2 = 'description';
                var1[var2] = var3;
                var3 = true;
                var2 = 'visible';
                var1[var2] = var3;
                var3 = function onDismiss() {
                    var3 = _closure2_slot1;
                    var1 = _closure1_slot6;
                    var2 = var1.USER_DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 'onDismiss';
                var1[var2] = var3;
                return var1;
            }
        };
        var3 = var5.bind(var6)(var2, var3);
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var _closure1_slot10 = var1;
    var2 = function FeaturedFirstCardCoachmark(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.anchorRef;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useHasNeverWishlisted;
            var9 = var1.bind(var7)();
            var _closure2_slot0 = var9;
            var1 = 9;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var4 = var6.useMobileWishlistOwnerExperiment;
            var1 = 'FeaturedFirstCardCoachmark';
            var1 = var4.bind(var6)(var1);
            var4 = var1.showWishlistButtonInProductCard;
            var1 = var1.showWishlistButtonInPDP;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = !var4;
case 8:
            _closure2_slot1 = var1;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 10:
                    var1 = new Array(0);
                    _fun0003_ip = 13; continue _fun0003;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var1, var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useSelectedDismissibleContent;
            var6 = var1.bind(var4)(var6);
            var4 = _closure1_slot3;
            var1 = 2;
            var4 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var9 = var4[var1];
            var1 = 1;
            var6 = var4[var1];
            _closure2_slot2 = var6;
            var1 = null;
            var4 = var1 != var9;
            var7 = null;
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot9;
            var7 = var4[var9];
case 14:
            _closure2_slot3 = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 11;
            var4 = var10[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.useCollectiblesCoachmarkScrollDismissContext;
            var4 = var4.bind(var9)();
            var11 = var4.registerDismiss;
            _closure2_slot4 = var11;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var4 = new Array(3);
            var4[0] = var7;
            var4[1] = var11;
            var4[2] = var6;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 10; continue _fun0004 }
case 16:
                    var2 = undefined;
                    return var2;
case 10:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = function() {
                        var3 = _closure2_slot2;
                        var1 = _closure1_slot6;
                        var2 = var1.INDIRECT_ACTION;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var4);
            var3 = var1 == var7;
            var1 = null;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var2['anchorRef'] = var8;
            var2['config'] = var7;
            var2['markAsDismissed'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot7 = var8;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = {};
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DismissibleContent;
    var9 = var8.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
    var8 = {};
    var10 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.47Rhc3;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['title'] = var10;
    var10 = function description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.hbuKNU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['description'] = var10;
    var10 = 'top';
    var8['position'] = var10;
    var5[var9] = var8;
    var _closure1_slot9 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function FeaturedFirstCardCoachmarkAnchor(arg1) {
        var1 = arg1;
        var7 = var1.children;
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var3 = null;
        var11 = var1.bind(var2)(var3);
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var9 = var1.bind(var2)(var3);
        var4 = _closure1_slot8;
        var3 = _closure1_slot5;
        var2 = {};
        var2['ref'] = var11;
        var1 = false;
        var2['collapsable'] = var1;
        var8 = _closure1_slot7;
        var5 = {};
        var5['ref'] = var9;
        var10 = {'position': 'absolute', 'top': 0, 'right': 6, 'width': 32, 'height': 32};
        var5['style'] = var10;
        var5['collapsable'] = var1;
        var1 = undefined;
        var8 = var8.bind(var1)(var3, var5);
        var5 = new Array(4);
        var5[0] = var8;
        var5[1] = var7;
        var10 = _closure1_slot7;
        var8 = _closure1_slot11;
        var7 = {};
        var7['anchorRef'] = var11;
        var7 = var10.bind(var1)(var8, var7);
        var5[2] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var6 = 12;
        var6 = var10[var6];
        var7 = var7.bind(var1)(var6);
        var6 = {};
        var6['anchorRef'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[3] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['FeaturedFirstCardCoachmark'] = var2;
    return var1;
})();