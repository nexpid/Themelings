// app/modules/collectibles/native/ProfileEffectProductPreviewV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'width': '80%', 'height': '100%'};
    var4['container'] = var9;
    var9 = {'marginTop': 16, 'zIndex': 100};
    var4['profilePreview'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProfileEffectProductPreviewV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.product;
            var7 = var1.width;
            var1 = _closure1_slot5;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCurrentUser;
            var10 = var1.bind(var2)();
            var1 = var15.items;
            var1 = var1.length;
            var2 = 0;
            if(!(!(var1 <= var2))) { _fun0001_ip = 322; continue _fun0001 }
 77:
            var3 = var15.type;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            if(!(var3 !== var1)) { _fun0001_ip = 130; continue _fun0001 }
 118:
            var1 = var15.items;
            var8 = var1[var2];
            _fun0001_ip = 143; continue _fun0001;
 130:
            var2 = var15.items;
            var1 = 1;
            var8 = var2[var1];
 143:
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var9.container;
            var1['style'] = var6;
            var6 = 'box-none';
            var1['pointerEvents'] = var6;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 6;
            var13 = var11[var6];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var6 = var11[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var12 = var6.HSX4HR;
            var6 = {};
            var15 = var15.name;
            var6['profileEffect'] = var15;
            var6 = var13.bind(var14)(var12, var6);
            var1['accessibilityLabel'] = var6;
            var6 = 'image';
            var1['accessibilityRole'] = var6;
            var6 = _closure1_slot1;
            var5 = 7;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['user'] = var10;
            var9 = var9.profilePreview;
            var5['style'] = var9;
            var5['pendingProfileEffectRecord'] = var8;
            var5['maxWidth'] = var7;
            var7 = true;
            var5['gradientFullHeight'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 322:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();