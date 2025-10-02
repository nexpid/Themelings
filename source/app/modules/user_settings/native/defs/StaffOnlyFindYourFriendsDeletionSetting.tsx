// app/modules/user_settings/native/defs/StaffOnlyFindYourFriendsDeletionSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function setFindYourFriendsDeletionIsLoading(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isLoading'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function useFindYourFriendsDeletionIsLoading() {
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isLoading;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _onFindYourFriendsDeletionPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot6;
                    var3 = var5.getState;
                    var3 = var3.bind(var5)();
                    var3 = var3.isLoading;
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot7;
                    var3 = true;
                    var3 = var5.bind(var2)(var3);
case 6: // try_start_0 // try_start_1
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.adminDeleteContactSync;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=88);
case 7:
                    return var3;
case 8:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10: // try_end0
                    _fun0001_ip = 11; continue _fun0001;
case 9: // try_end1
                    var6 = _closure1_slot7;
                    var5 = false;
                    var5 = var6.bind(var2)(var5);
                    return var3;
case 12: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.APIError;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var10 = var5;
                    var9 = var6;
                    var3 = new var10[var3](var9, var8);
                    var5 = var3 instanceof Object ? var3 : var5;
                    var3 = var5.getAnyErrorMessage;
                    var5 = var3.bind(var5)();
                    var7 = var5;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.open;
                    var3 = {};
                    var8 = 'FIND_YOUR_FRIENDS_DELETION';
                    var3['key'] = var8;
                    var3['content'] = var7;
                    var3 = var5.bind(var6)(var3);
case 11: // try_end2
                    var5 = _closure1_slot7;
                    var3 = false;
                    var3 = var5.bind(var2)(var3);
                    _fun0001_ip = 4; continue _fun0001;
case 14: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot7;
                    var4 = false;
                    var4 = var5.bind(var2)(var4);
                    throw var3;
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityIndicator;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RendererType;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var10 = var5.bind(var1)(var2);
    var9 = var10.createWithEqualityFn;
    var2 = function() {
        var1 = {};
        var2 = false;
        var1['isLoading'] = var2;
        return var1;
    };
    var2 = var9.bind(var10)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = 'STAFF ONLY - Find your friends deletion';
    var2['title'] = var8;
    var7 = var7.CONTENT_AND_SOCIAL_DISCORD;
    var2['parent'] = var7;
    var7 = function useIsFindYourFriendsDeletionDisabled() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['useIsDisabled'] = var7;
    var7 = function onFindYourFriendsDeletionPress() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onPress'] = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useStaffOrDeveloperSettingPredicate;
    var2['usePredicate'] = var7;
    var4 = function useIsFindYourFriendsDeletionTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = undefined;
            var3 = var1.bind(var5)();
            var1 = null;
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/StaffOnlyFindYourFriendsDeletionSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();