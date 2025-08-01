// app/modules/user_profile/native/UserProfileNameplateEditButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['previewContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_SECONDARY;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileNameplateEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var18 = var1.user;
            var _closure2_slot0 = var18;
            var7 = var1.pendingNameplate;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useMobileCanPurchaseNameplates;
            var9 = 'UserProfileNameplateEditButton';
            var1 = var1.bind(var2)(var9);
            var2 = _closure1_slot8;
            var11 = var2.bind(var4)();
            var6 = var18.nameplate;
            var2 = 7;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGetOrFetchPurchases;
            var3 = var2.bind(var3)(var9);
            var2 = var3.purchases;
            var _closure2_slot1 = var2;
            var9 = var3.isFetching;
            var12 = _closure1_slot3;
            var10 = var12.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNameplatesFromPurchases;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var2 = var10.bind(var12)(var2, var3);
            if(!(var4 === var7)) { _fun0001_ip = 193; continue _fun0001 }
 153:
            var3 = var18.collectibles;
            var12 = null;
            var13 = var12 == var3;
            var10 = undefined;
            if(var13) { _fun0001_ip = 191; continue _fun0001 }
 170:
            var3 = var3.nameplate;
            var12 = var12 == var3;
            var10 = undefined;
            if(var12) { _fun0001_ip = 191; continue _fun0001 }
 185:
            var10 = var3.skuId;
 191:
            _fun0001_ip = 213; continue _fun0001;
 193:
            var3 = null;
            var12 = var3 == var7;
            var3 = undefined;
            if(var12) { _fun0001_ip = 210; continue _fun0001 }
 204:
            var3 = var7.skuId;
 210:
            var10 = var3;
 213:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 9;
            var3 = var12[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useFetchNameplate;
            var3 = var3.bind(var7)(var10);
            var10 = var3.nameplateProduct;
            var17 = var3.nameplateRecord;
            _closure2_slot2 = var17;
            var13 = var3.nameplateData;
            var12 = var3.isFetching;
            var3 = null;
            var7 = var3 != var13;
            if(!var7) { _fun0001_ip = 285; continue _fun0001 }
 281:
            var7 = var3 != var17;
 285:
            if(!var7) { _fun0001_ip = 292; continue _fun0001 }
 288:
            var7 = var3 != var10;
 292:
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var17;
            var8 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 12;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 11;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['user'] = var7;
                var2 = _closure2_slot2;
                var3['currentNameplate'] = var2;
                var2 = 'Edit Nameplate';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var8 = var15.bind(var16)(var8, var14);
            if(var12) { _fun0001_ip = 807; continue _fun0001 }
 332:
            if(var9) { _fun0001_ip = 807; continue _fun0001 }
 338:
            if(var7) { _fun0001_ip = 398; continue _fun0001 }
 341:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 14;
            var12 = var16[var9];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.PoWNfX;
            var9 = var12.bind(var14)(var9);
            _fun0001_ip = 403; continue _fun0001;
 398:
            var9 = var10.name;
 403:
            if(var1) { _fun0001_ip = 410; continue _fun0001 }
 406:
            var1 = var3 != var6;
 410:
            if(var1) { _fun0001_ip = 416; continue _fun0001 }
 413:
            var1 = var2;
 416:
            var6 = !var1;
            var3 = _closure1_slot7;
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var16 = 14;
            var12 = var10[var16];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var10 = var10[var16];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.x5CoXV;
            var10 = var12.bind(var14)(var10);
            var1['label'] = var10;
            var1['buttonText'] = var9;
            var10 = undefined;
            if(!var6) { _fun0001_ip = 566; continue _fun0001 }
 512:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var16];
            var14 = var17.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var12[var16];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OwlOS0;
            var10 = var14.bind(var15)(var12);
 566:
            var1['buttonSubtext'] = var10;
            var1['accessibilityLabel'] = var9;
            var9 = undefined;
            if(var6) { _fun0001_ip = 634; continue _fun0001 }
 580:
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var16];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var10 = var10[var16];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.RJxLnZ;
            var9 = var12.bind(var14)(var10);
 634:
            var1['accessibilityHint'] = var9;
            if(!var6) { _fun0001_ip = 646; continue _fun0001 }
 642:
            var8 = _closure1_slot6;
 646:
            var1['onPress'] = var8;
            var10 = _closure1_slot7;
            if(var7) { _fun0001_ip = 713; continue _fun0001 }
 657:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 16;
            var7 = var14[var7];
            var8 = var12.bind(var4)(var7);
            var7 = {};
            var9 = 17;
            var9 = var14[var9];
            var9 = var12.bind(var4)(var9);
            var7['source'] = var9;
            var9 = var11.noneIcon;
            var7['style'] = var9;
            var7 = var10.bind(var4)(var8, var7);
            _fun0001_ip = 785; continue _fun0001;
 713:
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.previewContainer;
            var8['style'] = var11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 15;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
            var11['nameplate'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 785:
            var1['leading'] = var7;
            var1['disabled'] = var6;
            var1['hideArrow'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 807:
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var6 = 14;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.x5CoXV;
            var7 = var8.bind(var11)(var7);
            var1['label'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.MKDeyM;
            var7 = var8.bind(var11)(var7);
            var1['buttonText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ZTNur6;
            var6 = var7.bind(var8)(var6);
            var1['accessibilityLabel'] = var6;
            var1['accessibilityHint'] = var4;
            var6 = _closure1_slot6;
            var1['onPress'] = var6;
            var7 = _closure1_slot4;
            var5 = true;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var3.bind(var4)(var7, var6);
            var1['leading'] = var6;
            var1['disabled'] = var5;
            var1['hideArrow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();