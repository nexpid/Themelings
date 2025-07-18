// app/modules/native_permissions/NativePermissionBaseUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var7.bind(var1)(var4);
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
    var7 = var4.NativePermissionTypes;
    var _closure1_slot7 = var7;
    var7 = var4.NativePermissionStates;
    var _closure1_slot8 = var7;
    var4 = var4.NativePermissionStatus;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var2 = function() {
        var5 = function NativePermissionBaseUtils() {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot1;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var2 = _closure1_slot6;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['storage'] = var2;
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var6 = {};
        var3 = 'requestAuthorization';
        var6['key'] = var3;
        var7 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var2 = arg2;
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 277; continue _fun0001 }
 19:
                    var4 = 'function';
                    var3 = typeof var2;
                    if(!(var4 === var3)) { _fun0001_ip = 220; continue _fun0001 }
 33:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var9 = undefined;
                    var10 = var7.bind(var9)(var3);
                    var8 = var10.track;
                    var3 = _closure1_slot10;
                    var7 = var3.PERMISSIONS_REQUESTED;
                    var3 = {};
                    var3['type'] = var6;
                    var3 = var8.bind(var10)(var7, var3);
                    var2 = var2.bind(var9)();
                    SaveGenerator(address=93);
 91:
                    return var2;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 217; continue _fun0001 }
 99:
                    var3 = _closure1_slot9;
                    var3 = var3.AUTHORIZED;
                    var3 = var2 === var3;
                    if(var3) { _fun0001_ip = 130; continue _fun0001 }
 116:
                    var7 = _closure1_slot9;
                    var7 = var7.LIMITED;
                    var3 = var2 === var7;
 130:
                    var7 = _closure1_slot8;
                    if(var3) { _fun0001_ip = 145; continue _fun0001 }
 137:
                    var8 = var7.DENIED;
                    _fun0001_ip = 151; continue _fun0001;
 145:
                    var8 = var7.ACCEPTED;
 151:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 7;
                    var4 = var10[var4];
                    var7 = var7.bind(var9)(var4);
                    var4 = var7.setPermission;
                    var4 = var4.bind(var7)(var6, var8);
                    var4 = !var3;
                    if(var3) { _fun0001_ip = 200; continue _fun0001 }
 191:
                    var7 = arg3;
                    var4 = var7.showAuthorizationError;
 200:
                    if(!var4) { _fun0001_ip = 214; continue _fun0001 }
 203:
                    var4 = var5.showAlert;
                    var4 = var4.bind(var5)(var6);
 214:
                    return var3;
 217:
                    return var2;
 220:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = 'requestAuthorization: Was provided with not a function for ';
                    var2 = '.';
                    var13 = var5.bind(var3)(var6, var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 277:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var7.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var2 = function requestAuthorization() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'requestPermission';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = _closure2_slot1;
            var2 = var3.defaultNativePermissionsRequestOptions;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var2 = var4.requestPermissionCore;
            var1 = arg1;
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'hasPermission';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = _closure2_slot1;
            var2 = var3.defaultNativePermissionsRequestOptions;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var2 = var4.hasPermissionCore;
            var1 = arg1;
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'showAlert';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var3;
                var2 = {};
                var8 = _closure1_slot7;
                var14 = var8.CAMERA;
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var9 = 8;
                var7 = var10[var9];
                var1 = undefined;
                var7 = var16.bind(var1)(var7);
                var12 = var7.intl;
                var11 = var12.string;
                var7 = var10[var9];
                var7 = var16.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.68G7fH;
                var17 = var11.bind(var12)(var7);
                var7 = var10[var9];
                var7 = var16.bind(var1)(var7);
                var12 = var7.intl;
                var11 = var12.string;
                var7 = var10[var9];
                var7 = var16.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.5Jvu1d;
                var15 = var11.bind(var12)(var7);
                var7 = global;
                var11 = var7.HermesInternal;
                var11 = var11.concat;
                var13 = '';
                var12 = '. ';
                var11 = var11.bind(var13)(var17, var12, var15);
                var2[var14] = var11;
                var14 = var8.AUDIO;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var17 = var11.intl;
                var15 = var17.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.xisTfX;
                var17 = var15.bind(var17)(var11);
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var18 = var11.intl;
                var15 = var18.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.5Jvu1d;
                var15 = var15.bind(var18)(var11);
                var11 = var7.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var13)(var17, var12, var15);
                var2[var14] = var11;
                var14 = var8.PHOTOS;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var17 = var11.intl;
                var15 = var17.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.jQHU4O;
                var17 = var15.bind(var17)(var11);
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var18 = var11.intl;
                var15 = var18.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.5Jvu1d;
                var15 = var15.bind(var18)(var11);
                var11 = var7.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var13)(var17, var12, var15);
                var2[var14] = var11;
                var14 = var8.INPUT_MONITORING;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var17 = var11.intl;
                var15 = var17.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.UIBqsb;
                var17 = var15.bind(var17)(var11);
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var18 = var11.intl;
                var15 = var18.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.5Jvu1d;
                var15 = var15.bind(var18)(var11);
                var11 = var7.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var13)(var17, var12, var15);
                var2[var14] = var11;
                var8 = var8.CONTACTS;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var10[var9];
                var11 = var16.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.kTtf7u;
                var11 = var14.bind(var15)(var11);
                var14 = var10[var9];
                var14 = var16.bind(var1)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var10 = var10[var9];
                var10 = var16.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10.5Jvu1d;
                var10 = var14.bind(var15)(var10);
                var7 = var7.HermesInternal;
                var7 = var7.concat;
                var7 = var7.bind(var13)(var11, var12, var10);
                var2[var8] = var7;
                var7 = var2[var3];
                var2 = null;
                if(!(var2 != var7)) { _fun0002_ip = 845; continue _fun0002 }
 658:
                var3 = var4.openAlertModal;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = var5[var9];
                var10 = var8.bind(var1)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var5[var9];
                var10 = var8.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10.u1Gxpq;
                var10 = var11.bind(var12)(var10);
                var2['title'] = var10;
                var2['body'] = var7;
                var6 = function onConfirm() {
                    var3 = _closure3_slot0;
                    var2 = var3.openSettings;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['onConfirm'] = var6;
                var6 = var5[var9];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var5[var9];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.ETE/oK;
                var6 = var7.bind(var10)(var6);
                var2['cancelText'] = var6;
                var6 = var5[var9];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var5[var9];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.XgZk+v;
                var5 = var6.bind(var7)(var5);
                var2['confirmText'] = var5;
                var2 = var3.bind(var4)(var2);
 845:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'defaultNativePermissionsRequestOptions';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var4 = {};
                var1 = true;
                var4['showAuthorizationError'] = var1;
                var2 = null;
                var1 = var4;
                if(!(var2 != var3)) { _fun0003_ip = 46; continue _fun0003 }
 21:
                var2 = {};
                var6 = var2;
                var5 = var4;
                var4 = copyDataProperties(var6, var5);
                var6 = var2;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                var1 = var2;
 46:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var4.bind(var3)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/native_permissions/NativePermissionBaseUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['NativePermissionBaseUtils'] = var2;
    return var1;
})();