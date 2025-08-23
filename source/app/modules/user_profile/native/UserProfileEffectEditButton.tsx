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
 0:
            var3 = arg1;
            var6 = var3.displayProfile;
            var _closure2_slot0 = var6;
            var11 = var3.user;
            var _closure2_slot1 = var11;
            var2 = var3.pendingProfileEffectId;
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
            if(var16) { _fun0001_ip = 150; continue _fun0001 }
 130:
            var6 = var6.profileEffect;
            var16 = var5 == var6;
            var14 = undefined;
            if(var16) { _fun0001_ip = 150; continue _fun0001 }
 145:
            var14 = var6.id;
 150:
            var6 = new Array(5);
            var6[0] = var14;
            var6[1] = var13;
            var6[2] = var3;
            var6[3] = var2;
            var13 = var5 == var7;
            var2 = undefined;
            if(var13) { _fun0001_ip = 199; continue _fun0001 }
 179:
            var13 = var7.profileEffect;
            var14 = var5 == var13;
            var2 = undefined;
            if(var14) { _fun0001_ip = 199; continue _fun0001 }
 194:
            var2 = var13.id;
 199:
            var6[4] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0002_ip = 51; continue _fun0002 }
 10:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var1;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 49; continue _fun0002 }
 25:
                    var2 = _closure2_slot0;
                    var2 = var2.profileEffect;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 49; continue _fun0002 }
 44:
                    var1 = var2.id;
 49:
                    _fun0002_ip = 117; continue _fun0002;
 51:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 68; continue _fun0002 }
 58:
                    var2 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 !== var2)) { _fun0002_ip = 74; continue _fun0002 }
 68:
                    var2 = _closure2_slot2;
                    _fun0002_ip = 114; continue _fun0002;
 74:
                    var3 = _closure2_slot4;
                    var7 = var5 == var3;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 111; continue _fun0002 }
 87:
                    var4 = _closure2_slot4;
                    var4 = var4.profileEffect;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 111; continue _fun0002 }
 106:
                    var3 = var4.id;
 111:
                    var2 = var3;
 114:
                    var1 = var2;
 117:
                    return var1;
                }
            };
            var13 = var8.bind(var10)(var2, var6);
            _closure2_slot7 = var13;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useProfileEffectPreset;
            var2 = var2.bind(var6)(var13);
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
                var3['currentProfileEffectId'] = var7;
                var2 = _closure2_slot3;
                var3['guildId'] = var2;
                var2 = 'Profile Effect';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var6 = var8.bind(var10)(var1, var6);
            var8 = var5 == var2;
            var1 = undefined;
            if(var8) { _fun0001_ip = 308; continue _fun0001 }
 298:
            var8 = var2.config;
            var1 = var8.title;
 308:
            if(var3) { _fun0001_ip = 375; continue _fun0001 }
 311:
            var8 = var1;
            if(!(var5 == var1)) { _fun0001_ip = 373; continue _fun0001 }
 318:
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
 373:
            _fun0001_ip = 484; continue _fun0001;
 375:
            var10 = var5 == var2;
            var3 = undefined;
            if(var10) { _fun0001_ip = 389; continue _fun0001 }
 384:
            var3 = var2.id;
 389:
            var10 = var5 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 418; continue _fun0001 }
 398:
            var7 = var7.profileEffect;
            var10 = var5 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 418; continue _fun0001 }
 413:
            var2 = var7.id;
 418:
            if(!(var3 !== var2)) { _fun0001_ip = 426; continue _fun0001 }
 422:
            if(!(var5 == var1)) { _fun0001_ip = 481; continue _fun0001 }
 426:
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
 481:
            var8 = var1;
 484:
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
            if(!(var5 == var13)) { _fun0001_ip = 696; continue _fun0001 }
 633:
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
            _fun0001_ip = 841; continue _fun0001;
 696:
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
            var10 = {'profileEffectId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var10['profileEffectId'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 841:
            var1['leading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();