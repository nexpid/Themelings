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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileNameplateEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.user;
            var _closure2_slot0 = var13;
            var2 = var1.pendingNameplate;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot8;
            var10 = var1.bind(var4)();
            if(!(var4 === var2)) { _fun0001_ip = 81; continue _fun0001 }
 41:
            var1 = var13.collectibles;
            var7 = null;
            var8 = var7 == var1;
            var6 = undefined;
            if(var8) { _fun0001_ip = 79; continue _fun0001 }
 58:
            var1 = var1.nameplate;
            var7 = var7 == var1;
            var6 = undefined;
            if(var7) { _fun0001_ip = 79; continue _fun0001 }
 73:
            var6 = var1.skuId;
 79:
            _fun0001_ip = 101; continue _fun0001;
 81:
            var1 = null;
            var7 = var1 == var2;
            var1 = undefined;
            if(var7) { _fun0001_ip = 98; continue _fun0001 }
 92:
            var1 = var2.skuId;
 98:
            var6 = var1;
 101:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useFetchNameplate;
            var2 = var1.bind(var2)(var6);
            var1 = var2.nameplateProduct;
            var11 = var2.nameplateRecord;
            _closure2_slot1 = var11;
            var12 = var2.nameplateData;
            var2 = var2.isFetching;
            var7 = null;
            var6 = var7 != var12;
            if(!var6) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var6 = var7 != var11;
 173:
            if(!var6) { _fun0001_ip = 180; continue _fun0001 }
 176:
            var6 = var7 != var1;
 180:
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var11;
            var3 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 8;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['user'] = var7;
                var2 = _closure2_slot1;
                var3['currentNameplate'] = var2;
                var2 = 'Edit Nameplate';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var8.bind(var9)(var3, var7);
            if(var2) { _fun0001_ip = 580; continue _fun0001 }
 220:
            if(var6) { _fun0001_ip = 280; continue _fun0001 }
 223:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var3 = var11[var2];
            var3 = var9.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.PoWNfX;
            var9 = var3.bind(var8)(var2);
            _fun0001_ip = 285; continue _fun0001;
 280:
            var9 = var1.name;
 285:
            var3 = _closure1_slot7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 10;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var8 = 11;
            var11 = var14[var8];
            var11 = var13.bind(var4)(var11);
            var16 = var11.intl;
            var15 = var16.string;
            var11 = var14[var8];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.x5CoXV;
            var11 = var15.bind(var16)(var11);
            var1['label'] = var11;
            var1['buttonText'] = var9;
            var1['accessibilityLabel'] = var9;
            var9 = var14[var8];
            var9 = var13.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.RJxLnZ;
            var8 = var9.bind(var11)(var8);
            var1['accessibilityHint'] = var8;
            var1['onPress'] = var7;
            var9 = _closure1_slot7;
            if(var6) { _fun0001_ip = 495; continue _fun0001 }
 439:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var8 = 14;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var6['source'] = var8;
            var8 = var10.noneIcon;
            var6['style'] = var8;
            var6 = var9.bind(var4)(var7, var6);
            _fun0001_ip = 567; continue _fun0001;
 495:
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.previewContainer;
            var7['style'] = var10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 12;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
            var10['nameplate'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 567:
            var1['leading'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 580:
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var6 = 11;
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