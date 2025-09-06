// app/modules/virtual_currency/checkout/native/OrbCheckoutProductPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot3 = var5;
    var4 = var4.ActivityIndicator;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = {};
            var2 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 4;
            var4 = var4[var7];
            var6 = undefined;
            var4 = var8.bind(var6)(var4);
            var4 = var4.CollectiblesItemType;
            var8 = var4.PROFILE_EFFECT;
            var4 = '100%';
            if(!(var5 === var8)) { _fun0001_ip = 69; continue _fun0001 }
 66:
            var4 = 140;
 69:
            var2['width'] = var4;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var4.bind(var6)(var3);
            var3 = var3.CollectiblesItemType;
            var4 = var3.PROFILE_EFFECT;
            var3 = '40%';
            if(!(var5 === var4)) { _fun0001_ip = 118; continue _fun0001 }
 112:
            var3 = 280;
 118:
            var2['height'] = var3;
            var1['productPreviewContainer'] = var2;
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = function ProductPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.product;
            var _closure2_slot0 = var5;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot6;
            var2 = var5.type;
            var8 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCurrentUser;
            var9 = var2.bind(var6)();
            var _closure2_slot1 = var9;
            var2 = 6;
            var2 = var11[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.isThemeDark;
            var10 = _closure1_slot1;
            var2 = 7;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var3.bind(var6)(var2);
            var _closure2_slot2 = var2;
            var2 = null;
            var2 = var2 == var5;
            var10 = undefined;
            if(var2) { _fun0002_ip = 146; continue _fun0002 }
 134:
            var3 = var5.items;
            var2 = 0;
            var10 = var3[var2];
 146:
            _closure2_slot3 = var10;
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 4;
            var2 = var2[var12];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var3 !== var2)) { _fun0002_ip = 422; continue _fun0002 }
 194:
            var6 = var9.getAvatarSource;
            var3 = false;
            var2 = 200;
            var2 = var6.bind(var9)(var4, var3, var2);
            _closure2_slot4 = var2;
            var6 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var8.productPreviewContainer;
            var2['style'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 9;
            var11 = var8[var11];
            var13 = var9.bind(var4)(var11);
            var11 = var13.match;
            var10 = var10.type;
            var14 = var11.bind(var13)(var10);
            var13 = var14.with;
            var10 = var8[var12];
            var10 = var9.bind(var4)(var10);
            var10 = var10.CollectiblesItemType;
            var11 = var10.AVATAR_DECORATION;
            var10 = function() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot3;
                var1['item'] = var6;
                var6 = 200;
                var1['size'] = var6;
                var5 = _closure2_slot4;
                var1['avatarSource'] = var5;
                var5 = false;
                var1['animate'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var14 = var13.bind(var14)(var11, var10);
            var13 = var14.with;
            var10 = var8[var12];
            var10 = var9.bind(var4)(var10);
            var10 = var10.CollectiblesItemType;
            var11 = var10.PROFILE_EFFECT;
            var10 = function() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot3;
                var1['item'] = var6;
                var6 = false;
                var1['isPurchased'] = var6;
                var5 = _closure2_slot2;
                var1['isDarkTheme'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var13.bind(var14)(var11, var10);
            var10 = var11.with;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var8 = var8.CollectiblesItemType;
            var9 = var8.NAMEPLATE;
            var8 = function() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.NameplatePreview;
                var1 = {};
                var6 = _closure2_slot1;
                var1['user'] = var6;
                var5 = _closure2_slot3;
                var1['nameplate'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9, var8);
            var8 = var9.otherwise;
            var7 = function() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/normal', 'color': 'text-muted'};
                var5 = _closure2_slot0;
                var5 = var5.name;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 422:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var5 = var5.name;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/checkout/native/OrbCheckoutProductPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ProductPreview'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var1 = var1.product;
            var2 = null;
            if(!(var2 != var1)) { _fun0003_ip = 43; continue _fun0003 }
 15:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var2['product'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            _fun0003_ip = 88; continue _fun0003;
 43:
            var5 = _closure1_slot5;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = _closure1_slot4;
            var6 = {};
            var2 = 'large';
            var6['size'] = var2;
            var2 = undefined;
            var6 = var5.bind(var2)(var7, var6);
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
 88:
            return var1;
        }
    };
    var3['OrbCheckoutProductPreview'] = var2;
    return var1;
})();