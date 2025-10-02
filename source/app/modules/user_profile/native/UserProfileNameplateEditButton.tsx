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
case 0:
            var2 = arg1;
            var11 = var2.user;
            var _closure2_slot0 = var11;
            var3 = var2.pendingNameplate;
            var2 = var2.guildId;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var6 = _closure1_slot9;
            var12 = var6.bind(var4)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var13 = var8.bind(var4)(var6);
            var10 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var6 = var10.bind(var13)(var7, var6);
            var7 = 8;
            var7 = var9[var7];
            var13 = var8.bind(var4)(var7);
            var10 = var13.getProfilePreviewField;
            var7 = null;
            var8 = var7 == var3;
            var9 = undefined;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = var3.skuId;
case 5:
            var3 = var7 != var2;
            var8 = null;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var14 = var7 == var6;
            var3 = undefined;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var6.collectibles;
            var14 = var7 == var6;
            var3 = undefined;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var6 = var6.nameplate;
            var14 = var7 == var6;
            var3 = undefined;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            var3 = var6.skuId;
case 9:
            var8 = var3;
case 7:
            var3 = var11.collectibles;
            var14 = var7 == var3;
            var6 = undefined;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var3.nameplate;
            var14 = var7 == var3;
            var6 = undefined;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var6 = var3.skuId;
case 13:
            var17 = var7 != var2;
            var21 = var13;
            var20 = var9;
            var19 = var8;
            var18 = var6;
            var3 = var21[var10](var20, var19, var18, var17, var16);
            var8 = var3.value;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useFetchNameplate;
            var6 = var3.bind(var6)(var8);
            var3 = var6.nameplateProduct;
            _closure2_slot2 = var3;
            var10 = var6.nameplateRecord;
            _closure2_slot3 = var10;
            var14 = var6.nameplateData;
            var8 = var6.isFetching;
            var6 = var7 != var14;
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var7 != var10;
case 16:
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var7 != var3;
case 18:
            _closure2_slot4 = var6;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var2;
            var2 = function() {
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
                var7 = _closure2_slot3;
                var3['currentNameplate'] = var7;
                var2 = _closure2_slot1;
                var3['guildId'] = var2;
                var2 = 'Edit Nameplate';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var7.bind(var9)(var2, var3);
            var3 = _closure1_slot8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 13;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.UserProfileEditFormButton;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = function renderSectionLabel() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var1 = var4 == var1;
                    var7 = undefined;
                    var2 = undefined;
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var1 = _closure2_slot3;
                    var2 = var1.skuId;
case 22:
                    var1 = _closure2_slot0;
                    var5 = var1.collectibles;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var5 = var5.nameplate;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                    var1 = var5.skuId;
case 24:
                    var5 = _closure2_slot1;
                    if(!(var4 != var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var5 = _closure2_slot4;
                    if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 29:
                    if(!(var2 !== var1)) { _fun0003_ip = 27; continue _fun0003 }
case 30:
                    var1 = _closure2_slot2;
                    var1 = var1.name;
                    _fun0003_ip = 31; continue _fun0003;
case 27:
                    var2 = _closure2_slot1;
                    if(!(var4 == var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 14;
                    var4 = var8[var2];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.PoWNfX;
                    var2 = var4.bind(var5)(var2);
                    _fun0003_ip = 12; continue _fun0003;
case 34:
                    var3 = _closure2_slot2;
                    var2 = var3.name;
case 12:
                    _fun0003_ip = 36; continue _fun0003;
case 32:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 14;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.CHf9iI;
                    var2 = var4.bind(var5)(var3);
case 36:
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var1 = {};
            var8 = 14;
            var13 = var10[var8];
            var13 = var9.bind(var4)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var10[var8];
            var13 = var9.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.x5CoXV;
            var13 = var15.bind(var16)(var13);
            var1['label'] = var13;
            var13 = var11.bind(var4)();
            var1['buttonText'] = var13;
            var11 = var11.bind(var4)();
            var1['accessibilityLabel'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.RJxLnZ;
            var8 = var11.bind(var13)(var8);
            var1['accessibilityHint'] = var8;
            var1['onPress'] = var7;
            var11 = _closure1_slot8;
            if(var6) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var7 = var13.bind(var4)(var6);
            var6 = {};
            var8 = 17;
            var8 = var15[var8];
            var8 = var13.bind(var4)(var8);
            var6['source'] = var8;
            var8 = var12.noneIcon;
            var6['style'] = var8;
            var6 = var11.bind(var4)(var7, var6);
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var8 = _closure1_slot5;
            var7 = {};
            var12 = var12.previewContainer;
            var7['style'] = var12;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 15;
            var12 = var15[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
            var12['nameplate'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var7['children'] = var12;
            var6 = var11.bind(var4)(var8, var7);
case 39:
            var1['leading'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 20:
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