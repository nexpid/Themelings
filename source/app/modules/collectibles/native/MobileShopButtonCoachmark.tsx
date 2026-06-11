// app/modules/collectibles/native/MobileShopButtonCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 80, 'width': 80};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var10 = -var10;
    var9['marginBottom'] = var10;
    var4['image'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/MobileShopButtonCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MobileShopButtonCoachmark(arg1) {
        var1 = arg1;
        var13 = var1.marketing;
        var _closure2_slot0 = var13;
        var4 = var1.shopButtonRef;
        var3 = var1.navigateToShop;
        var _closure2_slot1 = var3;
        var12 = var1.visible;
        var _closure2_slot2 = var12;
        var6 = var1.onDismiss;
        var _closure2_slot3 = var6;
        var7 = _closure1_slot6;
        var5 = undefined;
        var10 = var7.bind(var5)();
        var _closure2_slot4 = var10;
        var11 = var13.assetLight;
        var _closure2_slot5 = var11;
        var7 = _closure1_slot2;
        var9 = var7.useRef;
        var8 = false;
        var8 = var9.bind(var7)(var8);
        var _closure2_slot6 = var8;
        var9 = var7.useCallback;
        var8 = new Array(2);
        var8[0] = var6;
        var8[1] = var3;
        var3 = function() {
            var3 = _closure2_slot6;
            var1 = true;
            var3['current'] = var1;
            var4 = _closure2_slot3;
            var1 = _closure1_slot4;
            var3 = var1.TAKE_ACTION;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var2 = _closure2_slot1;
            var2 = var2.bind(var1)();
            return var1;
        };
        var9 = var9.bind(var7)(var3, var8);
        var _closure2_slot7 = var9;
        var14 = var7.useCallback;
        var8 = new Array(1);
        var8[0] = var6;
        var3 = function() {
            var3 = _closure2_slot6;
            var2 = true;
            var3['current'] = var2;
            var3 = _closure2_slot3;
            var1 = _closure1_slot4;
            var2 = var1.USER_DISMISS;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = var14.bind(var7)(var3, var8);
        var _closure2_slot8 = var8;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var6);
        var _closure2_slot9 = var3;
        var6 = var7.useEffect;
        var3 = function() {
            var2 = _closure2_slot9;
            var1 = _closure2_slot3;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var14 = var7.useEffect;
        var6 = function() {
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot9;
                    var2 = var3.current;
                    var1 = _closure1_slot4;
                    var1 = var1.AUTO_DISMISS;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var3 = new Array(0);
        var3 = var14.bind(var7)(var6, var3);
        var6 = var7.useMemo;
        var14 = var13.title;
        var3 = new Array(8);
        var3[0] = var14;
        var14 = var13.body;
        var3[1] = var14;
        var13 = var13.buttonLabel;
        var3[2] = var13;
        var3[3] = var12;
        var3[4] = var11;
        var10 = var10.image;
        var3[5] = var10;
        var3[6] = var9;
        var3[7] = var8;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot0;
                var4 = var3.title;
                var1['title'] = var4;
                var3 = var3.body;
                var1['description'] = var3;
                var3 = _closure2_slot2;
                var1['visible'] = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var8 = undefined;
                var5 = var5.bind(var8)(var3);
                var3 = var5.isYouNavFloating;
                var5 = var3.bind(var5)();
                var3 = 'bottom';
                if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = 'top';
case 4:
                var1['position'] = var3;
                var3 = function renderImgComponent() {
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var1 = _closure2_slot4;
                    var1 = var1.image;
                    var2['style'] = var1;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['uri'] = var5;
                    var2['source'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['renderImgComponent'] = var3;
                var3 = _closure2_slot0;
                var3 = var3.buttonLabel;
                var5 = null;
                if(!(var5 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.fYfGgK;
                var3 = var5.bind(var6)(var4);
case 6:
                var1['buttonLabel'] = var3;
                var3 = 'secondary';
                var1['buttonVariant'] = var3;
                var3 = _closure2_slot7;
                var1['onButtonPress'] = var3;
                var2 = _closure2_slot8;
                var1['onDismiss'] = var2;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var2, var3);
        var2 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 8;
        var1 = var6[var1];
        var2 = var2.bind(var5)(var1);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();