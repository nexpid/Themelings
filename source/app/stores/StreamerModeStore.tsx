// app/stores/StreamerModeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function trackToggle(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.STREAMER_MODE_TOGGLE;
        var2 = {};
        var6 = arg1;
        var2['enabled'] = var6;
        var6 = arg2;
        var2['automatic'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot8 = var2;
    var8 = {'enabled': false, 'autoToggle': true, 'hideInstantInvites': true, 'hidePersonalInformation': true, 'disableSounds': true, 'disableNotifications': true, 'enableContentProtection': false};
    var _closure1_slot9 = var8;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var12 = var2;
    var11 = var8;
    var8 = copyDataProperties(var12, var11);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function StreamerModeStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var4 = this;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.assign;
            var3 = _closure1_slot10;
            var2 = arg1;
            var2 = var5.bind(var6)(var3, var2);
            var3 = var4.syncWith;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var1 = var3.getId;
                    var6 = var1.bind(var3)();
                    var4 = null;
                    if(!(var4 == var6)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = {};
                    var8 = _closure1_slot9;
                    var9 = var1;
                    var3 = copyDataProperties(var9, var8);
                    _fun0003_ip = 11; continue _fun0003;
case 9:
                    var3 = _closure1_slot10;
                    var3 = var3[var6];
                    if(!(var4 == var3)) { _fun0003_ip = 4; continue _fun0003 }
case 12:
                    var5 = _closure1_slot10;
                    var4 = {};
                    var8 = _closure1_slot9;
                    var9 = var4;
                    var7 = copyDataProperties(var9, var8);
                    var5[var6] = var4;
                    var3 = var4;
case 4:
                    var1 = var3;
case 11:
                    _closure1_slot11 = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'enabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            var1 = var1.enabled;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'autoToggle';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            var1 = var1.autoToggle;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hideInstantInvites';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var1 = var1.enabled;
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = _closure1_slot11;
                var1 = var2.hideInstantInvites;
case 13:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hidePersonalInformation';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var1 = var1.enabled;
                if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var2 = _closure1_slot11;
                var1 = var2.hidePersonalInformation;
case 13:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'disableSounds';
        var5['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var1 = var1.enabled;
                if(!var1) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                var2 = _closure1_slot11;
                var1 = var2.disableSounds;
case 13:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'disableNotifications';
        var5['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var1 = var1.enabled;
                if(!var1) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var2 = _closure1_slot11;
                var1 = var2.disableNotifications;
case 13:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'enableContentProtection';
        var5['key'] = var7;
        var6 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var1 = var1.enabled;
                if(!var1) { _fun0008_ip = 13; continue _fun0008 }
case 14:
                var2 = _closure1_slot11;
                var1 = var2.enableContentProtection;
case 13:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StreamerModeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot7;
            var1 = var2.getId;
            var3 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 7; continue _fun0009 }
case 15:
            if(!(var1 != var3)) { _fun0009_ip = 7; continue _fun0009 }
case 16:
            var1 = {};
            var2 = {};
            var6 = var2;
            var5 = var4;
            var4 = copyDataProperties(var6, var5);
            var1[var3] = var2;
            _fun0009_ip = 17; continue _fun0009;
case 7:
            var1 = {};
case 17:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0010_ip = 18; continue _fun0010 }
case 19:
            var1 = {};
            _closure1_slot10 = var1;
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOGOUT'] = var9;
    var9 = function handleMultiAccountRemove(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var3 = _closure1_slot10;
            var3 = var4 in var3;
            if(!var3) { _fun0011_ip = 20; continue _fun0011 }
case 21:
            var2 = _closure1_slot10;
            var1 = var1.userId;
            var1 = delete var2[var1];
case 20:
            var1 = undefined;
            return var1;
        }
    };
    var2['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = var9;
    var9 = function handleStreamerModeUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var7 = {};
            var9 = _closure1_slot11;
            var10 = var7;
            var3 = copyDataProperties(var10, var9);
            var5 = _closure1_slot11;
            var4 = var1.key;
            var3 = var1.value;
            var5[var4] = var3;
            var4 = var1.key;
            var3 = 'enabled';
            if(!(var3 !== var4)) { _fun0012_ip = 22; continue _fun0012 }
case 17:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.track;
            var3 = _closure1_slot8;
            var4 = var3.UPDATE_STREAMER_MODE_SETTINGS;
            var3 = {};
            var8 = _closure1_slot11;
            var8 = var8.enabled;
            var3['enabled'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.autoToggle;
            var3['automatic'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.disableNotifications;
            var3['disable_notifications'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.disableSounds;
            var3['disable_sounds'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.hideInstantInvites;
            var3['hide_instant_invites'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.hidePersonalInformation;
            var3['hide_personal_info'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.enableContentProtection;
            var3['enable_content_protection'] = var8;
            var8 = var7.enabled;
            var3['old_enabled'] = var8;
            var8 = var7.autoToggle;
            var3['old_automatic'] = var8;
            var8 = var7.disableNotifications;
            var3['old_disable_notifications'] = var8;
            var8 = var7.disableSounds;
            var3['old_disable_sounds'] = var8;
            var8 = var7.hideInstantInvites;
            var3['old_hide_instant_invites'] = var8;
            var8 = var7.hidePersonalInformation;
            var3['old_hide_personal_info'] = var8;
            var7 = var7.enableContentProtection;
            var3['old_enable_content_protection'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            _fun0012_ip = 23; continue _fun0012;
case 22:
            var4 = _closure1_slot13;
            var3 = var1.value;
            var2 = undefined;
            var1 = false;
            var1 = var4.bind(var2)(var3, var1);
case 23:
            var1 = true;
            return var1;
        }
    };
    var2['STREAMER_MODE_UPDATE'] = var9;
    var4 = function handleRunningStreamerToolsChange(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = _closure1_slot11;
            var2 = var2.autoToggle;
            if(var2) { _fun0013_ip = 24; continue _fun0013 }
case 25:
            var2 = false;
            return var2;
case 24:
            var2 = arg1;
            var3 = var2.count;
            var2 = 0;
            var4 = var3 > var2;
            var2 = _closure1_slot11;
            var2['enabled'] = var4;
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = true;
            var2 = var3.bind(var2)(var4, var1);
            return var1;
        }
    };
    var2['RUNNING_STREAMER_TOOLS_CHANGE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/StreamerModeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();