// app/modules/collectibles/native/IndividualProductPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var9[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.Pressable;
    var _closure1_slot3 = var5;
    var12 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot5 = var5;
    var4 = var4.ShopCtaEnum;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var9[var4];
    var6 = var8.bind(var1)(var4);
    var5 = var6.createStyles;
    var4 = {};
    var7 = {'marginTop': null, 'position': 'relative', 'height': 280};
    var10 = 5;
    var13 = var9[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var7['marginTop'] = var13;
    var4['collectiblePreview'] = var7;
    var7 = {'position': 'relative', 'flex': 1, 'alignItems': 'center', 'overflow': 'hidden'};
    var4['profilePreviewContainer'] = var7;
    var7 = {};
    var13 = '66%';
    var7['width'] = var13;
    var4['profilePreview'] = var7;
    var7 = {};
    var15 = var12.absoluteFillObject;
    var16 = var7;
    var12 = copyDataProperties(var16, var15);
    var13 = -1;
    var12 = 'bottom';
    var7[11] = var13;
    var13 = 'none';
    var12 = 'pointerEvents';
    var7[11] = var13;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.MOBILE_ACTIONSHEET_BACKGROUND;
    var10 = 'color';
    var7[9] = var11;
    var4['profilePreviewGradient'] = var7;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot9 = var4;
    var4 = function ProfilePreviewWrapper(arg1) {
        var1 = arg1;
        var2 = var1.handlePreviewPress;
        var _closure2_slot0 = var2;
        var2 = var1.onTrackPress;
        var _closure2_slot1 = var2;
        var10 = var1.children;
        var1 = _closure1_slot9;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot1;
                var2 = _closure1_slot6;
                var4 = var2.FULL_PROFILE_PREVIEW;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
case 2:
                var2 = _closure2_slot0;
                if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var5;
        var5 = var12.collectiblePreview;
        var1['style'] = var5;
        var7 = _closure1_slot8;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var12.profilePreviewContainer;
        var5['style'] = var8;
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var9 = 6;
        var9 = var11[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var11 = var12.profilePreviewGradient;
        var9['style'] = var11;
        var11 = {'x': 0, 'y': 0.6};
        var9['start'] = var11;
        var11 = {'x': 0, 'y': 1};
        var9['end'] = var11;
        var11 = var12.profilePreviewGradient;
        var15 = var11.color;
        var11 = global;
        var11 = var11.HermesInternal;
        var14 = var11.concat;
        var13 = '';
        var11 = '00';
        var13 = var14.bind(var13)(var15, var11);
        var11 = new Array(2);
        var11[0] = var13;
        var12 = var12.profilePreviewGradient;
        var12 = var12.color;
        var11[1] = var12;
        var9['colors'] = var11;
        var9 = var3.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var4;
    var6 = function ProfileEffectPreview(arg1) {
        var1 = arg1;
        var10 = var1.profileEffect;
        var9 = var1.profileEffectRestartKey;
        var8 = var1.width;
        var13 = var1.handlePreviewPress;
        var6 = var1.onTrackPress;
        var1 = _closure1_slot9;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 7;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useCurrentUser;
        var11 = var1.bind(var2)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1['handlePreviewPress'] = var13;
        var1['onTrackPress'] = var6;
        var6 = _closure1_slot1;
        var5 = 8;
        var5 = var12[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['user'] = var11;
        var5['profileEffect'] = var10;
        var5['profileEffectRestartKey'] = var9;
        var5['maxWidth'] = var8;
        var7 = var7.profilePreview;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var6;
    var4 = function ProfileFramePreview(arg1) {
        var1 = arg1;
        var10 = var1.profileFrame;
        var8 = var1.width;
        var12 = var1.handlePreviewPress;
        var6 = var1.onTrackPress;
        var1 = _closure1_slot9;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 7;
        var1 = var11[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useCurrentUser;
        var9 = var1.bind(var2)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1['handlePreviewPress'] = var12;
        var1['onTrackPress'] = var6;
        var6 = _closure1_slot1;
        var5 = 9;
        var5 = var11[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['profileFrame'] = var10;
        var5['user'] = var9;
        var5['maxWidth'] = var8;
        var7 = var7.profilePreview;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var4;
    var5 = function AvatarDecorationPreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var2 = var1.handlePreviewPress;
        var _closure2_slot0 = var2;
        var1 = var1.onTrackPress;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot3;
        var1 = {};
        var8 = function onPress() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = _closure2_slot1;
                var2 = _closure1_slot6;
                var4 = var2.FULL_PROFILE_PREVIEW;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
case 2:
                var2 = _closure2_slot0;
                if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var8;
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 10;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var5;
    var4 = function NameplatePreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 11;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/collectibles/native/IndividualProductPreview.tsx';
    var7 = var8.bind(var9)(var7);
    var3['ProfileEffectPreview'] = var6;
    var3['AvatarDecorationPreview'] = var5;
    var3['NameplatePreview'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.product;
            var9 = var1.width;
            var8 = var1.handlePreviewPress;
            var7 = var1.onTrackPress;
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 12;
            var2 = var2[var10];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            if(!(var2 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            if(!(var2 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = null;
            return var2;
case 14:
            var3 = var5.skuId;
            var2 = _closure1_slot5;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var5.skuId;
            var2 = _closure1_slot5;
            var3 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            if(!(var6 === var3)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var10 = _closure1_slot7;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.OrbBadgePreview;
            var3 = {};
            var2 = var10.bind(var4)(var6, var3);
case 18:
            _fun0003_ip = 20; continue _fun0003;
case 16:
            var10 = _closure1_slot7;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 13;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.FractionalNitroPreview;
            var3 = {};
            var2 = var10.bind(var4)(var6, var3);
case 20:
            return var2;
case 12:
            var6 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var2['product'] = var5;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 10:
            var6 = _closure1_slot7;
            var3 = _closure1_slot12;
            var2 = {};
            var11 = var5.items;
            var10 = 0;
            var10 = var11[var10];
            var2['profileFrame'] = var10;
            var2['width'] = var9;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 8:
            var6 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var11 = var5.items;
            var10 = 0;
            var10 = var11[var10];
            var2['profileEffect'] = var10;
            var2['width'] = var9;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 6:
            var3 = _closure1_slot7;
            var2 = _closure1_slot14;
            var1 = {};
            var1['product'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['IndividualProductPreview'] = var2;
    return var1;
})();