// app/modules/user_profile/hooks/native/useUploadAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPages;
    var _closure1_slot6 = var7;
    var7 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot7 = var7;
    var7 = var4.Base64GIFPrefix;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot9 = var7;
    var4 = var4.UpsellTypes;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUploadAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUploadAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.isTryItOut;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot0 = var6;
            var5 = var2.analyticsLocations;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var8.bind(var9)(var7, var3);
            _closure2_slot2 = var7;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleShowUpsellAlert;
                var2 = {};
                var5 = _closure1_slot10;
                var5 = var5.ANIMATED_AVATAR;
                var2['initialUpsellKey'] = var5;
                var5 = {};
                var7 = _closure1_slot6;
                var7 = var7.USER_SETTINGS;
                var5['page'] = var7;
                var7 = _closure1_slot9;
                var7 = var7.SETTINGS_OVERVIEW;
                var5['section'] = var7;
                var2['analyticsLocation'] = var5;
                var5 = {};
                var6 = _closure1_slot11;
                var6 = var6.ANIMATED_USER_AVATAR_MODAL;
                var5['type'] = var6;
                var2['analyticsProperties'] = var5;
                var5 = _closure2_slot1;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var3.bind(var4)(var5, var8);
            _closure2_slot3 = var5;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var3 = undefined;
                        var6 = var4.bind(var3)(var2);
                        var2 = var6.hideActionSheet;
                        var2 = var2.bind(var6)();
                        var2 = 8;
                        var2 = var5[var2];
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.openImagePicker;
                        var2 = {};
                        var6 = _closure1_slot7;
                        var2['size'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=82);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var13 = var2.base64;
                        var11 = null;
                        if(!(var11 != var13)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var4 = _closure2_slot0;
                        if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 9;
                        var5 = var8[var5];
                        var8 = var6.bind(var3)(var5);
                        var6 = var8.canUseAnimatedAvatar;
                        var5 = _closure2_slot2;
                        var4 = var6.bind(var8)(var5);
case 12:
                        var6 = var13.match;
                        var5 = global;
                        var12 = var5.RegExp;
                        var8 = _closure1_slot8;
                        var5 = '^';
                        var15 = var5 + var8;
                        var5 = var12.prototype;
                        var8 = Object.create(var5, {constructor: {value: var12}});
                        var14 = 'i';
                        var16 = var8;
                        var5 = new var16[var12](var15, var14, var13);
                        var5 = var5 instanceof Object ? var5 : var8;
                        var5 = var6.bind(var13)(var5);
                        if(!(var11 != var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                        var4 = _closure2_slot3;
                        var4 = var4.bind(var3)();
                        _fun0002_ip = 10; continue _fun0002;
case 14:
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 10;
                        var4 = var12[var8];
                        var6 = var9.bind(var3)(var4);
                        var5 = var6.createPendingImage;
                        var4 = {};
                        var4['imageUri'] = var13;
                        var8 = var12[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = var9.generateAvatarDescription;
                        var8 = var8.bind(var9)();
                        var4['description'] = var8;
                        var6 = var5.bind(var6)(var4);
                        var4 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                        var4 = 12;
                        var4 = var7[var4];
                        var9 = var5.bind(var3)(var4);
                        var8 = var9.setNewPendingAvatar;
                        var4 = _closure2_slot2;
                        var11 = var11 == var4;
                        var4 = undefined;
                        if(var11) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var10 = _closure2_slot2;
                        var4 = var10.avatar;
case 19:
                        var4 = var8.bind(var9)(var6, var4);
                        _fun0002_ip = 10; continue _fun0002;
case 17:
                        var4 = 11;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.setTryItOutAvatar;
                        var4 = var4.bind(var5)(var6);
case 10:
                        return var3;
case 8:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(3);
            var1[0] = var7;
            var1[1] = var6;
            var1[2] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();