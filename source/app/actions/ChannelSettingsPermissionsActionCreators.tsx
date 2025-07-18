// app/actions/ChannelSettingsPermissionsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _updatePermission() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var9 = arg2;
                    var8 = arg3;
                    var7 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 165; continue _fun0001 }
 22:
                    var2 = var4.getGuildId;
                    var2 = var2.bind(var4)();
                    var3 = null;
                    if(!(var3 != var2)) { _fun0001_ip = 98; continue _fun0001 }
 38:
                    if(!(var9 === var2)) { _fun0001_ip = 98; continue _fun0001 }
 42:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                    var2 = var2.bind(var3)(var4, var7, var8);
                    SaveGenerator(address=84);
 82:
                    return var2;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 162; continue _fun0001 }
 90:
                    if(var2) { _fun0001_ip = 98; continue _fun0001 }
 93:
                    var3 = false;
                    return var3;
 98:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION';
                    var4['type'] = var10;
                    var4['id'] = var9;
                    var4['allow'] = var8;
                    var4['deny'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 162:
                    return var2;
 165:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var2 = function saveAndClearPermissionUpdates(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var4 = var2.Promise;
        var2 = var4.prototype;
        var3 = Object.create(var2, {constructor: {value: var4}});
        var6 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = function chain() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var3 === var2)) { _fun0002_ip = 34; continue _fun0002 }
 18:
                    var2 = _closure2_slot2;
                    var2 = var2.length;
                    if(!(var3 !== var2)) { _fun0002_ip = 241; continue _fun0002 }
 34:
                    var2 = _closure2_slot1;
                    var2 = var2.length;
                    if(!(!(var2 > var3))) { _fun0002_ip = 143; continue _fun0002 }
 47:
                    var3 = _closure2_slot2;
                    var2 = var3.pop;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 128; continue _fun0002 }
 67:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.clearPermissionOverwrite;
                    var2 = _closure2_slot0;
                    var4 = var3.bind(var4)(var2, var5);
                    var3 = var4.then;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var4)(var2, var2);
                    _fun0002_ip = 222; continue _fun0002;
 128:
                    var3 = _closure3_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    return var2;
 143:
                    var3 = _closure2_slot1;
                    var2 = var3.pop;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 226; continue _fun0002 }
 163:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.updatePermissionOverwrite;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1, var4);
                    var2 = var3.then;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1, var1);
 222:
                    var1 = undefined;
                    return var1;
 226:
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
 241:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                }
            };
            var _closure3_slot1 = var2;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var3;
        var2 = new var7[var4](var6, var5);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.then;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS';
            var2['type'] = var5;
            var5 = _closure2_slot3;
            var2['silent'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/ChannelSettingsPermissionsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function updatePermission() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updatePermission'] = var5;
    var5 = function selectPermission(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['selectPermission'] = var5;
    var5 = function setAdvancedMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE';
        var2['type'] = var5;
        var5 = arg1;
        var2['advancedMode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setAdvancedMode'] = var5;
    var5 = function init() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_PERMISSIONS_INIT';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['init'] = var5;
    var4 = function savePermissionUpdates(arg1, arg2, arg3) {
        var6 = _closure1_slot5;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var8 = new Array(0);
        var7 = arg3;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['savePermissionUpdates'] = var4;
    var3['saveAndClearPermissionUpdates'] = var2;
    return var1;
})();