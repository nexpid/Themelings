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
    var10 = var4.COLLECTIBLES_PREVIEW_SIZE;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['height'] = var10;
    var9['width'] = var10;
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var12 = 'hidden';
    var9['overflow'] = var12;
    var4['previewContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileNameplateEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.user;
            var _closure2_slot0 = var16;
            var11 = var1.pendingNameplate;
            var15 = var1.guildId;
            var _closure2_slot1 = var15;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot9;
            var10 = var1.bind(var4)();
            var7 = null;
            var2 = var7 != var15;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var13 = var3.bind(var4)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
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
            var14 = var12.bind(var13)(var8, var1);
            var1 = 9;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.getProfilePreviewValue;
            var1 = {};
            var1['pendingValue'] = var11;
            var12 = var16.collectibles;
            var13 = var7 == var12;
            var8 = undefined;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var12.nameplate;
case 4:
            var1['userValue'] = var8;
            var12 = var7 == var14;
            var8 = undefined;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var14.collectibles;
            var13 = var7 == var12;
            var8 = undefined;
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var8 = var12.nameplate;
case 6:
            var1['guildValue'] = var8;
            var1['guildId'] = var15;
            var8 = var3.bind(var6)(var1);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.useFetchNameplate;
            var12 = var7 == var8;
            var1 = undefined;
            if(var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var8.skuId;
case 9:
            var1 = var3.bind(var6)(var1);
            var6 = var1.nameplateProduct;
            var8 = var1.nameplateRecord;
            var12 = var1.nameplateData;
            var3 = var1.isFetching;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var13 = var16.collectibles;
            var17 = var7 == var13;
            var1 = undefined;
            if(var17) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var13.nameplate;
case 13:
            _fun0001_ip = 15; continue _fun0001;
case 11:
            var17 = var7 == var14;
            var13 = undefined;
            if(var17) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var14.collectibles;
            var17 = var7 == var14;
            var13 = undefined;
            if(var17) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var13 = var14.nameplate;
case 16:
            var1 = var13;
case 15:
            if(!(var4 !== var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = var11;
case 19:
            _closure2_slot3 = var1;
            var14 = _closure1_slot3;
            var13 = var14.useCallback;
            var11 = new Array(3);
            var11[0] = var16;
            var11[1] = var1;
            var11[2] = var15;
            var9 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 13;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 12;
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
            var9 = var13.bind(var14)(var9, var11);
            if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = var7 == var6;
            var14 = undefined;
            if(var3) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var14 = var6.name;
case 23:
            if(!(var7 == var14)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 15;
            var11 = var16[var3];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var3 = var16[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.PoWNfe;
            var14 = var11.bind(var13)(var3);
case 25:
            var13 = var14;
            if(!var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var13 = var14;
            if(!(var7 == var1)) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var3 = var15[var1];
            var3 = var2.bind(var4)(var3);
            var11 = var3.intl;
            var3 = var11.formatToPlainString;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.ep5D4i;
            var1 = {};
            var1['label'] = var14;
            var13 = var3.bind(var11)(var2, var1);
case 27:
            var3 = _closure1_slot8;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 14;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var11 = 15;
            var14 = var17[var11];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.x5CoXR;
            var11 = var14.bind(var15)(var11);
            var1['label'] = var11;
            var1['buttonText'] = var13;
            var11 = {};
            var11['text'] = var13;
            var1['accessibilityValue'] = var11;
            var1['onPress'] = var9;
            if(!(var7 != var12)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(!(var7 != var8)) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            if(!(var7 == var6)) { _fun0001_ip = 33; continue _fun0001 }
case 30:
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 17;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Icon;
            var6 = {};
            var11 = _closure1_slot1;
            var9 = 18;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var6['source'] = var9;
            var9 = var10.noneIcon;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            _fun0001_ip = 34; continue _fun0001;
case 33:
            var9 = _closure1_slot8;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.previewContainer;
            var7['style'] = var10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 16;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
            var10['nameplate'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 34:
            var1['leading'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 21:
            var3 = _closure1_slot8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var6 = 15;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.x5CoXR;
            var7 = var8.bind(var11)(var7);
            var1['label'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.MKDeyL;
            var6 = var7.bind(var8)(var6);
            var1['buttonText'] = var6;
            var6 = _closure1_slot7;
            var1['onPress'] = var6;
            var7 = _closure1_slot4;
            var5 = true;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var3.bind(var4)(var7, var6);
            var1['leading'] = var6;
            var1['loading'] = var5;
            var1['disabled'] = var5;
            var1['hideArrow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();