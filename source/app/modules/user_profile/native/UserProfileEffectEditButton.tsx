// app/modules/user_profile/native/UserProfileEffectEditButton.tsx
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['profileEffectPreviewContainer'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['sampleProfile'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_SECONDARY;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEffectEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEffectEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = var3.displayProfile;
            var _closure2_slot0 = var6;
            var11 = var3.user;
            var _closure2_slot1 = var11;
            var2 = var3.pendingProfileEffect;
            var _closure2_slot2 = var2;
            var12 = var3.guildId;
            var _closure2_slot3 = var12;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot7;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var11.id;
            var7 = var5.bind(var4)(var3);
            var _closure2_slot4 = var7;
            var5 = null;
            var3 = var5 != var12;
            var _closure2_slot5 = var3;
            var13 = var4 !== var2;
            var _closure2_slot6 = var13;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var16 = var5 == var6;
            var14 = undefined;
            if(var16) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var6.profileEffect;
case 2:
            var6 = new Array(5);
            var6[0] = var14;
            var6[1] = var13;
            var6[2] = var3;
            var6[3] = var2;
            var13 = var5 == var7;
            var2 = undefined;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7.profileEffect;
case 4:
            var6[4] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 == var2;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot0;
                    var1 = var2.profileEffect;
case 8:
                    _fun0002_ip = 10; continue _fun0002;
case 6:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 11:
                    var2 = _closure2_slot2;
                    _fun0002_ip = 14; continue _fun0002;
case 13:
                    var3 = _closure2_slot4;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = _closure2_slot4;
                    var3 = var4.profileEffect;
case 15:
                    var2 = var3;
case 14:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var13 = var8.bind(var10)(var2, var6);
            _closure2_slot7 = var13;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var8 = var6.bind(var4)(var2);
            var6 = var8.useProfileEffectPreset;
            var10 = var5 == var13;
            var2 = undefined;
            if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = var13.skuId;
case 17:
            var2 = var6.bind(var8)(var2);
            var10 = _closure1_slot3;
            var8 = var10.useCallback;
            var6 = new Array(3);
            var6[0] = var13;
            var6[1] = var12;
            var6[2] = var11;
            var1 = function() {
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
                var7 = _closure2_slot1;
                var3['user'] = var7;
                var7 = _closure2_slot7;
                var3['currentProfileEffect'] = var7;
                var2 = _closure2_slot3;
                var3['guildId'] = var2;
                var2 = 'Profile Effect';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var6 = var8.bind(var10)(var1, var6);
            var8 = var5 == var2;
            var1 = undefined;
            if(var8) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var2.config;
            var1 = var8.title;
case 19:
            if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var1;
            if(!(var5 == var1)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 10;
            var10 = var14[var3];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var3 = var14[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.PoWNfX;
            var8 = var10.bind(var11)(var3);
case 23:
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var10 = var5 == var2;
            var3 = undefined;
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var3 = var2.id;
case 26:
            var10 = var5 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var7.profileEffect;
            var10 = var5 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var2 = var7.id;
case 28:
            if(!(var3 !== var2)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!(var5 == var1)) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var3 = var11[var2];
            var3 = var10.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.CHf9iI;
            var1 = var3.bind(var7)(var2);
case 33:
            var8 = var1;
case 25:
            var3 = _closure1_slot5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 11;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var7 = 10;
            var10 = var12[var7];
            var10 = var11.bind(var4)(var10);
            var16 = var10.intl;
            var14 = var16.string;
            var10 = var12[var7];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.wR5wOj;
            var10 = var14.bind(var16)(var10);
            var1['label'] = var10;
            var1['buttonText'] = var8;
            var1['accessibilityLabel'] = var8;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Xz9c9/;
            var7 = var8.bind(var10)(var7);
            var1['accessibilityHint'] = var7;
            var1['onPress'] = var6;
            if(!(var5 == var13)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = _closure1_slot5;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 12;
            var5 = var11[var5];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var8 = 15;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var5['source'] = var8;
            var8 = var15.noneIcon;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var15.profileEffectPreviewContainer;
            var6['style'] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 12;
            var9 = var14[var9];
            var10 = var11.bind(var4)(var9);
            var9 = {};
            var16 = 13;
            var16 = var14[var16];
            var16 = var11.bind(var4)(var16);
            var9['source'] = var16;
            var15 = var15.sampleProfile;
            var9['style'] = var15;
            var15 = true;
            var9['disableColor'] = var15;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = 14;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var13 = var13.skuId;
            var10['skuId'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 36:
            var1['leading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();