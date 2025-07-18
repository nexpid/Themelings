// app/modules/user_profile/native/UserProfileEffectEditButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
            if(var16) { _fun0001_ip = 136; continue _fun0001 }
 130:
            var14 = var6.profileEffectId;
 136:
            var6 = new Array(5);
            var6[0] = var14;
            var6[1] = var13;
            var6[2] = var3;
            var6[3] = var2;
            var13 = var5 == var7;
            var2 = undefined;
            if(var13) { _fun0001_ip = 171; continue _fun0001 }
 165:
            var2 = var7.profileEffectId;
 171:
            var6[4] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0002_ip = 37; continue _fun0002 }
 10:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 == var2;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 35; continue _fun0002 }
 25:
                    var2 = _closure2_slot0;
                    var1 = var2.profileEffectId;
 35:
                    _fun0002_ip = 89; continue _fun0002;
 37:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 54; continue _fun0002 }
 44:
                    var2 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 !== var2)) { _fun0002_ip = 60; continue _fun0002 }
 54:
                    var2 = _closure2_slot2;
                    _fun0002_ip = 86; continue _fun0002;
 60:
                    var3 = _closure2_slot4;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 83; continue _fun0002 }
 73:
                    var4 = _closure2_slot4;
                    var3 = var4.profileEffectId;
 83:
                    var2 = var3;
 86:
                    var1 = var2;
 89:
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
            if(var8) { _fun0001_ip = 280; continue _fun0001 }
 270:
            var8 = var2.config;
            var1 = var8.title;
 280:
            if(var3) { _fun0001_ip = 347; continue _fun0001 }
 283:
            var8 = var1;
            if(!(var5 == var1)) { _fun0001_ip = 345; continue _fun0001 }
 290:
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
 345:
            _fun0001_ip = 442; continue _fun0001;
 347:
            var10 = var5 == var2;
            var3 = undefined;
            if(var10) { _fun0001_ip = 361; continue _fun0001 }
 356:
            var3 = var2.id;
 361:
            var10 = var5 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 376; continue _fun0001 }
 370:
            var2 = var7.profileEffectId;
 376:
            if(!(var3 !== var2)) { _fun0001_ip = 384; continue _fun0001 }
 380:
            if(!(var5 == var1)) { _fun0001_ip = 439; continue _fun0001 }
 384:
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
 439:
            var8 = var1;
 442:
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
            if(!(var5 == var13)) { _fun0001_ip = 654; continue _fun0001 }
 591:
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
            _fun0001_ip = 799; continue _fun0001;
 654:
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
 799:
            var1['leading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();