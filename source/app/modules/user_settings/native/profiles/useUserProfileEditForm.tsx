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
 0:
                var3 = _closure1_slot6;
                var1 = var3.getFormState;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot7;
                var1 = var1.SUBMITTING;
                var1 = var3 === var1;
                if(var1) { _fun0001_ip = 44; continue _fun0001 }
 34:
                var2 = _closure1_slot5;
                var1 = var2.isSubmitting;
 44:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 1175; continue _fun0002 }
 10:
                    var2 = undefined;
                    var6 = undefined;
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 1172; continue _fun0002 }
 27:
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
                    if(!(var3 > var9)) { _fun0002_ip = 521; continue _fun0002 }
 139:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var13 = 7;
                    var3 = var3[var13];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.saveAccountChanges;
                    var3 = var3.bind(var4)(var16);
                    SaveGenerator(address=174);
 172:
                    return var3;
 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 1169; continue _fun0002 }
 183:
                    var14 = null;
                    if(!(var14 != var3)) { _fun0002_ip = 201; continue _fun0002 }
 189:
                    var4 = var3.ok;
                    if(var4) { _fun0002_ip = 351; continue _fun0002 }
 201:
                    var11 = var14 == var3;
                    var4 = undefined;
                    if(var11) { _fun0002_ip = 229; continue _fun0002 }
 210:
                    var11 = var3.body;
                    var15 = var14 == var11;
                    var4 = undefined;
                    if(var15) { _fun0002_ip = 229; continue _fun0002 }
 224:
                    var4 = var11.username;
 229:
                    if(!(var14 == var4)) { _fun0002_ip = 316; continue _fun0002 }
 233:
                    var11 = var14 == var3;
                    var4 = undefined;
                    if(var11) { _fun0002_ip = 262; continue _fun0002 }
 242:
                    var11 = var3.body;
                    var15 = var14 == var11;
                    var4 = undefined;
                    if(var15) { _fun0002_ip = 262; continue _fun0002 }
 256:
                    var4 = var11.avatar;
 262:
                    if(!(var14 != var4)) { _fun0002_ip = 482; continue _fun0002 }
 269:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 11;
                    var4 = var15[var4];
                    var15 = var11.bind(var2)(var4);
                    var11 = var15.showGenericProfileUpdateFailureToast;
                    var4 = var3.body;
                    var4 = var4.avatar;
                    var4 = var11.bind(var15)(var4);
                    _fun0002_ip = 482; continue _fun0002;
 316:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 10;
                    var4 = var15[var4];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.showInvalidUsernameToast;
                    var4 = var4.bind(var11)();
                    _fun0002_ip = 482; continue _fun0002;
 351:
                    var17 = var3.body;
                    var4 = _closure2_slot0;
                    var4 = var4.pendingAvatar;
                    if(!(var2 !== var4)) { _fun0002_ip = 455; continue _fun0002 }
 370:
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
                    if(var18) { _fun0002_ip = 445; continue _fun0002 }
 439:
                    var16 = var17.assetOrigin;
 445:
                    var4['avatarAssetOrigin'] = var16;
                    var4 = var11.bind(var15)(var4);
 455:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.resetPendingAccountChanges;
                    var4 = var4.bind(var11)();
 482:
                    var4 = var6;
                    var11 = undefined;
                    if(!var4) { _fun0002_ip = 512; continue _fun0002 }
 490:
                    var15 = var14 == var3;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 505; continue _fun0002 }
 499:
                    var13 = var3.ok;
 505:
                    var4 = var14 != var13;
                    var11 = var13;
 512:
                    if(!var4) { _fun0002_ip = 518; continue _fun0002 }
 515:
                    var4 = var11;
 518:
                    var6 = var4;
 521:
                    var11 = var8.Object;
                    var4 = var11.keys;
                    var4 = var4.bind(var11)(var12);
                    var4 = var4.length;
                    if(!(var4 > var9)) { _fun0002_ip = 775; continue _fun0002 }
 549:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 12;
                    var4 = var4[var13];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.saveProfileChanges;
                    var4 = var4.bind(var11)(var12);
                    SaveGenerator(address=584);
 582:
                    return var4;
 584:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 1166; continue _fun0002 }
 593:
                    var14 = null;
                    if(!(var14 != var4)) { _fun0002_ip = 608; continue _fun0002 }
 599:
                    var11 = var4.ok;
                    if(var11) { _fun0002_ip = 709; continue _fun0002 }
 608:
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
                    if(!(var14 != var15)) { _fun0002_ip = 736; continue _fun0002 }
 676:
                    var12 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 11;
                    var11 = var16[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.showGenericProfileUpdateFailureToast;
                    var11 = var11.bind(var12)(var15);
                    _fun0002_ip = 736; continue _fun0002;
 709:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var13];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.resetPendingProfileChanges;
                    var11 = var11.bind(var12)();
 736:
                    var11 = var6;
                    var12 = undefined;
                    if(!var11) { _fun0002_ip = 766; continue _fun0002 }
 744:
                    var15 = var14 == var4;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 759; continue _fun0002 }
 753:
                    var13 = var4.ok;
 759:
                    var11 = var14 != var13;
                    var12 = var13;
 766:
                    if(!var11) { _fun0002_ip = 772; continue _fun0002 }
 769:
                    var11 = var12;
 772:
                    var6 = var11;
 775:
                    var11 = _closure2_slot0;
                    var11 = var11.pendingLegacyUsernameDisabled;
                    if(!(var2 !== var11)) { _fun0002_ip = 885; continue _fun0002 }
 789: // try_start_0
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
 838:
                    return var10;
 840:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 878; continue _fun0002 }
 846:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 7;
                    var11 = var13[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.resetPendingLegacyUsernameDisabled;
                    var11 = var11.bind(var12)();
 876: // try_end0
                    _fun0002_ip = 885; continue _fun0002;
 878:
                    return var10;
 881: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var6 = false;
 885:
                    var10 = var8.Object;
                    var8 = var10.keys;
                    var8 = var8.bind(var10)(var5);
                    var8 = var8.length;
                    if(!(var8 > var9)) { _fun0002_ip = 1160; continue _fun0002 }
 913:
                    var11 = var5.primaryGuildId;
                    if(!(var2 !== var11)) { _fun0002_ip = 1160; continue _fun0002 }
 926:
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
 966:
                    return var5;
 968:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 1163; continue _fun0002 }
 977:
                    if(!(var10 != var5)) { _fun0002_ip = 990; continue _fun0002 }
 981:
                    var8 = var5.ok;
                    if(var8) { _fun0002_ip = 1091; continue _fun0002 }
 990:
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
                    if(!(var10 != var11)) { _fun0002_ip = 1121; continue _fun0002 }
 1058:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 11;
                    var8 = var12[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.showGenericProfileUpdateFailureToast;
                    var8 = var8.bind(var9)(var11);
                    _fun0002_ip = 1121; continue _fun0002;
 1091:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.resetPendingPrimaryGuildChanges;
                    var7 = var7.bind(var8)();
 1121:
                    var7 = var6;
                    var8 = undefined;
                    if(!var7) { _fun0002_ip = 1151; continue _fun0002 }
 1129:
                    var11 = var10 == var5;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 1144; continue _fun0002 }
 1138:
                    var9 = var5.ok;
 1144:
                    var7 = var10 != var9;
                    var8 = var9;
 1151:
                    if(!var7) { _fun0002_ip = 1157; continue _fun0002 }
 1154:
                    var7 = var8;
 1157:
                    var6 = var7;
 1160:
                    return var6;
 1163:
                    return var5;
 1166:
                    return var4;
 1169:
                    return var3;
 1172:
                    return var2;
 1175:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 138; continue _fun0003 }
 10:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0003_ip = 133; continue _fun0003 }
 20:
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
 75:
                    return var2;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 130; continue _fun0003 }
 83:
                    var4 = null;
                    var4 = var4 != var2;
                    if(!var4) { _fun0003_ip = 98; continue _fun0003 }
 92:
                    var4 = var2.ok;
 98:
                    if(!var4) { _fun0003_ip = 133; continue _fun0003 }
 101:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.resetPendingAvatarDecoration;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 133; continue _fun0003;
 130:
                    return var2;
 133:
                    var2 = undefined;
                    return var2;
 138:
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