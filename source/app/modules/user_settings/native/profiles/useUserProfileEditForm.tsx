// app/modules/user_settings/native/profiles/useUserProfileEditForm.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FormStates;
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/profiles/useUserProfileEditForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileEditForm() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var10 = 5;
        var2 = var7[var10];
        var5 = undefined;
        var11 = var6.bind(var5)(var2);
        var9 = var11.useStateFromStoresObject;
        var8 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getAllPending;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var9.bind(var11)(var3, var2);
        var _closure2_slot0 = var3;
        var2 = var7[var10];
        var12 = var6.bind(var5)(var2);
        var11 = var12.useStateFromStoresObject;
        var9 = new Array(1);
        var9[0] = var8;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getAllTryItOut;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var11.bind(var12)(var9, var2);
        var9 = var7[var10];
        var13 = var6.bind(var5)(var9);
        var12 = var13.useStateFromStores;
        var11 = new Array(2);
        var11[0] = var8;
        var9 = _closure1_slot5;
        var11[1] = var9;
        var9 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var1 = var3.getFormState;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot7;
                var1 = var1.SUBMITTING;
                var1 = var3 === var1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure1_slot5;
                var1 = var2.isSubmitting;
case 2:
                return var1;
            }
        };
        var9 = var12.bind(var13)(var11, var9);
        var _closure2_slot1 = var9;
        var11 = var7[var10];
        var14 = var6.bind(var5)(var11);
        var13 = var14.useStateFromStores;
        var12 = new Array(1);
        var12[0] = var8;
        var11 = function() {
            var2 = _closure1_slot6;
            var1 = var2.showNotice;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12 = var13.bind(var14)(var12, var11);
        var11 = var3.pendingAvatarDecoration;
        var10 = var7[var10];
        var14 = var6.bind(var5)(var10);
        var13 = var14.useStateFromStores;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getErrors;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var13.bind(var14)(var10, var8);
        var14 = _closure1_slot4;
        var15 = var14.useEffect;
        var13 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.wait;
                var4 = _closure1_slot0;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.resetAllPending;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var8 = new Array(0);
        var8 = var15.bind(var14)(var13, var8);
        var15 = var14.useCallback;
        var4 = _closure1_slot3;
        var8 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = undefined;
                    var6 = undefined;
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var5 = var8[var3];
                    var11 = var4.bind(var2)(var5);
                    var9 = var11.getAccountUpdateForUpdateRequest;
                    var5 = _closure2_slot0;
                    var16 = var9.bind(var11)(var5);
                    var9 = var8[var3];
                    var11 = var4.bind(var2)(var9);
                    var9 = var11.getProfileChangesForUpdateRequest;
                    var12 = var9.bind(var11)(var5);
                    var3 = var8[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getPrimaryGuildChangesForUpdateRequest;
                    var5 = var3.bind(var4)(var5);
                    var6 = true;
                    var8 = global;
                    var4 = var8.Object;
                    var3 = var4.keys;
                    var3 = var3.bind(var4)(var16);
                    var3 = var3.length;
                    var9 = 0;
                    if(!(var3 > var9)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var13 = 7;
                    var3 = var3[var13];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.saveAccountChanges;
                    var3 = var3.bind(var4)(var16);
                    SaveGenerator(address=174);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var14 = null;
                    if(!(var14 != var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = var3.ok;
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 14:
                    var11 = var14 == var3;
                    var4 = undefined;
                    if(var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var11 = var3.body;
                    var15 = var14 == var11;
                    var4 = undefined;
                    if(var15) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                    var4 = var11.username;
case 17:
                    if(!(var14 == var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var11 = var14 == var3;
                    var4 = undefined;
                    if(var11) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var11 = var3.body;
                    var15 = var14 == var11;
                    var4 = undefined;
                    if(var15) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                    var4 = var11.avatar;
case 22:
                    if(!(var14 != var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 11;
                    var4 = var15[var4];
                    var15 = var11.bind(var2)(var4);
                    var11 = var15.showGenericProfileUpdateFailureToast;
                    var4 = var3.body;
                    var4 = var4.avatar;
                    var4 = var11.bind(var15)(var4);
                    _fun0002_ip = 25; continue _fun0002;
case 20:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 10;
                    var4 = var15[var4];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.showInvalidUsernameToast;
                    var4 = var4.bind(var11)();
                    _fun0002_ip = 25; continue _fun0002;
case 16:
                    var17 = var3.body;
                    var4 = _closure2_slot0;
                    var4 = var4.pendingAvatar;
                    if(!(var2 !== var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 9;
                    var4 = var15[var4];
                    var15 = var11.bind(var2)(var4);
                    var11 = var15.trackUserAvatarUpdated;
                    var4 = {};
                    var17 = var17.avatar;
                    var4['avatarHash'] = var17;
                    var16 = var16.avatarId;
                    var4['avatarId'] = var16;
                    var16 = _closure2_slot0;
                    var17 = var16.pendingAvatar;
                    var18 = var14 == var17;
                    var16 = undefined;
                    if(var18) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var16 = var17.assetOrigin;
case 29:
                    var4['avatarAssetOrigin'] = var16;
                    var4 = var11.bind(var15)(var4);
case 27:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.resetPendingAccountChanges;
                    var4 = var4.bind(var11)();
case 25:
                    var4 = var6;
                    var11 = undefined;
                    if(!var4) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var15 = var14 == var3;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var13 = var3.ok;
case 33:
                    var4 = var14 != var13;
                    var11 = var13;
case 31:
                    if(!var4) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var4 = var11;
case 35:
                    var6 = var4;
case 8:
                    var11 = var8.Object;
                    var4 = var11.keys;
                    var4 = var4.bind(var11)(var12);
                    var4 = var4.length;
                    if(!(var4 > var9)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 12;
                    var4 = var4[var13];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.saveProfileChanges;
                    var4 = var4.bind(var11)(var12);
                    SaveGenerator(address=584);
case 39:
                    return var4;
case 40:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var14 = null;
                    if(!(var14 != var4)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var11 = var4.ok;
                    if(var11) { _fun0002_ip = 45; continue _fun0002 }
case 43:
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 13;
                    var11 = var15[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.APIError;
                    var12 = var11.prototype;
                    var12 = Object.create(var12, {constructor: {value: var11}});
                    var21 = var12;
                    var20 = var4;
                    var11 = new var21[var11](var20, var19);
                    var15 = var11 instanceof Object ? var11 : var12;
                    var12 = var15.getFirstFieldErrorMessage;
                    var11 = 'banner';
                    var15 = var12.bind(var15)(var11);
                    if(!(var14 != var15)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var12 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 11;
                    var11 = var16[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.showGenericProfileUpdateFailureToast;
                    var11 = var11.bind(var12)(var15);
                    _fun0002_ip = 46; continue _fun0002;
case 45:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var13];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.resetPendingProfileChanges;
                    var11 = var11.bind(var12)();
case 46:
                    var11 = var6;
                    var12 = undefined;
                    if(!var11) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var15 = var14 == var4;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var13 = var4.ok;
case 50:
                    var11 = var14 != var13;
                    var12 = var13;
case 48:
                    if(!var11) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var11 = var12;
case 52:
                    var6 = var11;
case 37:
                    var11 = _closure2_slot0;
                    var11 = var11.pendingLegacyUsernameDisabled;
                    if(!(var2 !== var11)) { _fun0002_ip = 54; continue _fun0002 }
case 55: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 14;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var12 = var11.LegacyUsernameDisabled;
                    var11 = var12.updateSetting;
                    var10 = _closure2_slot0;
                    var10 = var10.pendingLegacyUsernameDisabled;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=840);
case 56:
                    return var10;
case 57:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 7;
                    var11 = var13[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.resetPendingLegacyUsernameDisabled;
                    var11 = var11.bind(var12)();
case 60: // try_end0
                    _fun0002_ip = 54; continue _fun0002;
case 58:
                    return var10;
case 61: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var6 = false;
case 54:
                    var10 = var8.Object;
                    var8 = var10.keys;
                    var8 = var8.bind(var10)(var5);
                    var8 = var8.length;
                    if(!(var8 > var9)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                    var11 = var5.primaryGuildId;
                    if(!(var2 !== var11)) { _fun0002_ip = 62; continue _fun0002 }
case 64:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 15;
                    var5 = var9[var5];
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.adoptGuildIdentity;
                    var10 = null;
                    var5 = var10 !== var11;
                    var5 = var8.bind(var9)(var11, var5);
                    SaveGenerator(address=968);
case 65:
                    return var5;
case 66:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 67; continue _fun0002 }
case 68:
                    if(!(var10 != var5)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                    var8 = var5.ok;
                    if(var8) { _fun0002_ip = 71; continue _fun0002 }
case 69:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 13;
                    var8 = var11[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.APIError;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var21 = var9;
                    var20 = var5;
                    var8 = new var21[var8](var20, var19);
                    var11 = var8 instanceof Object ? var8 : var9;
                    var9 = var11.getFirstFieldErrorMessage;
                    var8 = 'banner';
                    var11 = var9.bind(var11)(var8);
                    if(!(var10 != var11)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 11;
                    var8 = var12[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.showGenericProfileUpdateFailureToast;
                    var8 = var8.bind(var9)(var11);
                    _fun0002_ip = 72; continue _fun0002;
case 71:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.resetPendingPrimaryGuildChanges;
                    var7 = var7.bind(var8)();
case 72:
                    var7 = var6;
                    var8 = undefined;
                    if(!var7) { _fun0002_ip = 74; continue _fun0002 }
case 75:
                    var11 = var10 == var5;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 76; continue _fun0002 }
case 77:
                    var9 = var5.ok;
case 76:
                    var7 = var10 != var9;
                    var8 = var9;
case 74:
                    if(!var7) { _fun0002_ip = 78; continue _fun0002 }
case 79:
                    var7 = var8;
case 78:
                    var6 = var7;
case 62:
                    return var6;
case 67:
                    return var5;
case 41:
                    return var4;
case 12:
                    return var3;
case 6:
                    return var2;
case 4:
                    return var1;
                }
            };
            return var1;
        };
        var13 = var4.bind(var5)(var8);
        var8 = new Array(2);
        var8[0] = var9;
        var8[1] = var3;
        var8 = var15.bind(var14)(var13, var8);
        var13 = var14.useCallback;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 80; continue _fun0003 }
case 5:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.saveAccountChanges;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.pendingAvatarDecoration;
                    var2['avatarDecoration'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=77);
case 83:
                    return var2;
case 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var4 = null;
                    var4 = var4 != var2;
                    if(!var4) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                    var4 = var2.ok;
case 87:
                    if(!var4) { _fun0003_ip = 81; continue _fun0003 }
case 89:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.resetPendingAvatarDecoration;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 81; continue _fun0003;
case 85:
                    return var2;
case 81:
                    var2 = undefined;
                    return var2;
case 80:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var1);
        var1 = new Array(2);
        var1[0] = var9;
        var15 = var3.pendingAvatarDecoration;
        var1[1] = var15;
        var4 = var13.bind(var14)(var4, var1);
        var1 = {};
        var1['hasEdits'] = var12;
        var11 = var5 !== var11;
        var1['hasAvatarDecorationEdits'] = var11;
        var1['errors'] = var10;
        var1['isSubmitting'] = var9;
        var1['handleSubmit'] = var8;
        var1['handleSubmitAvatarDecoration'] = var4;
        var4 = 7;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.resetAllPending;
        var1['resetPending'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.resetPendingAvatarDecoration;
        var1['resetPendingAvatarDecoration'] = var4;
        var18 = var1;
        var17 = var3;
        var3 = copyDataProperties(var18, var17);
        var18 = var1;
        var17 = var2;
        var2 = copyDataProperties(var18, var17);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();