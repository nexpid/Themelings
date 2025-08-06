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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 6;
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
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileNameplateEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.user;
            var _closure2_slot0 = var14;
            var1 = var2.pendingNameplate;
            var11 = var2.guildId;
            var _closure2_slot1 = var11;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot9;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var12 = var7.bind(var4)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 18:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 31:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 63:
                    return var1;
                }
            };
            var2 = var9.bind(var12)(var6, var2);
            var6 = 8;
            var6 = var8[var6];
            var12 = var7.bind(var4)(var6);
            var9 = var12.getProfilePreviewField;
            var7 = null;
            var6 = var7 == var1;
            var8 = undefined;
            if(var6) { _fun0001_ip = 131; continue _fun0001 }
 125:
            var8 = var1.skuId;
 131:
            var1 = var7 != var11;
            var6 = null;
            if(!var1) { _fun0001_ip = 188; continue _fun0001 }
 140:
            var13 = var7 == var2;
            var1 = undefined;
            if(var13) { _fun0001_ip = 185; continue _fun0001 }
 149:
            var2 = var2.collectibles;
            var13 = var7 == var2;
            var1 = undefined;
            if(var13) { _fun0001_ip = 185; continue _fun0001 }
 164:
            var2 = var2.nameplate;
            var13 = var7 == var2;
            var1 = undefined;
            if(var13) { _fun0001_ip = 185; continue _fun0001 }
 179:
            var1 = var2.skuId;
 185:
            var6 = var1;
 188:
            var1 = var14.collectibles;
            var13 = var7 == var1;
            var2 = undefined;
            if(var13) { _fun0001_ip = 224; continue _fun0001 }
 203:
            var1 = var1.nameplate;
            var13 = var7 == var1;
            var2 = undefined;
            if(var13) { _fun0001_ip = 224; continue _fun0001 }
 218:
            var2 = var1.skuId;
 224:
            var17 = var7 != var11;
            var21 = var12;
            var20 = var8;
            var19 = var6;
            var18 = var2;
            var1 = var21[var9](var20, var19, var18, var17, var16);
            var6 = var1.value;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useFetchNameplate;
            var2 = var1.bind(var2)(var6);
            var1 = var2.nameplateProduct;
            var13 = var2.nameplateRecord;
            _closure2_slot2 = var13;
            var12 = var2.nameplateData;
            var2 = var2.isFetching;
            var6 = var7 != var12;
            if(!var6) { _fun0001_ip = 319; continue _fun0001 }
 315:
            var6 = var7 != var13;
 319:
            if(!var6) { _fun0001_ip = 326; continue _fun0001 }
 322:
            var6 = var7 != var1;
 326:
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var13;
            var7[2] = var11;
            var3 = function() {
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
                var7 = _closure2_slot2;
                var3['currentNameplate'] = var7;
                var2 = _closure2_slot1;
                var3['guildId'] = var2;
                var2 = 'Edit Nameplate';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var8.bind(var9)(var3, var7);
            if(var2) { _fun0001_ip = 730; continue _fun0001 }
 370:
            if(var6) { _fun0001_ip = 430; continue _fun0001 }
 373:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var3 = var11[var2];
            var3 = var9.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.PoWNfX;
            var9 = var3.bind(var8)(var2);
            _fun0001_ip = 435; continue _fun0001;
 430:
            var9 = var1.name;
 435:
            var3 = _closure1_slot8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var8 = 14;
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
            var9 = _closure1_slot8;
            if(var6) { _fun0001_ip = 645; continue _fun0001 }
 589:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var8 = 17;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var6['source'] = var8;
            var8 = var10.noneIcon;
            var6['style'] = var8;
            var6 = var9.bind(var4)(var7, var6);
            _fun0001_ip = 717; continue _fun0001;
 645:
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.previewContainer;
            var7['style'] = var10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 15;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
            var10['nameplate'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 717:
            var1['leading'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 730:
            var3 = _closure1_slot8;
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
            var6 = _closure1_slot7;
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