// app/modules/app_launcher/AppLauncherStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var11 = function handleDismiss(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.closeReason;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.AppLauncherCloseReason;
            var4 = var1.DISMISSED;
case 6:
            var5 = _closure1_slot7;
            var3 = false;
            var5['show'] = var3;
            var5 = _closure1_slot7;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var3 = var6.bind(var2)(var3);
            var3 = var3.AppLauncherEntrypoint;
            var3 = var3.NONE;
            var5['entrypoint'] = var3;
            var3 = _closure1_slot7;
            var3['closeReason'] = var4;
            var1 = _closure1_slot7;
            var1['initialState'] = var2;
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot10 = var11;
    var10 = function handleDismissWithDismissed() {
        var3 = _closure1_slot10;
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 5;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.AppLauncherCloseReason;
        var4 = var4.DISMISSED;
        var2['closeReason'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var9 = function handleSetActiveCommand() {
        var3 = _closure1_slot10;
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 5;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.AppLauncherCloseReason;
        var4 = var4.COMMAND;
        var2['closeReason'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = {};
    var12 = false;
    var8['show'] = var12;
    var12 = 5;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.AppLauncherEntrypoint;
    var13 = var13.NONE;
    var8['entrypoint'] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.AppLauncherEntrypoint;
    var13 = var13.NONE;
    var8['lastShownEntrypoint'] = var13;
    var13 = null;
    var8['activeViewType'] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.AppLauncherCloseReason;
    var12 = var12.DISMISSED;
    var8['closeReason'] = var12;
    var8['initialState'] = var1;
    var _closure1_slot7 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var17 = var8;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function AppLauncherStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldShowPopup';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot7;
                var1 = var1.show;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure1_slot7;
                var3 = var3.entrypoint;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.AppLauncherEntrypoint;
                var2 = var2.TEXT;
                var1 = var3 === var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldShowModal';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure1_slot7;
                var1 = var1.show;
                if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var3 = _closure1_slot7;
                var3 = var3.entrypoint;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.AppLauncherEntrypoint;
                var2 = var2.VOICE;
                var1 = var3 === var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'entrypoint';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.entrypoint;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastShownEntrypoint';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.lastShownEntrypoint;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'activeViewType';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.activeViewType;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'closeReason';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.closeReason;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'initialState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.initialState;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'appDMChannelsWithFailedLoads';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'AppLauncherStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleShow(arg1) {
        var1 = arg1;
        var6 = var1.entrypoint;
        var5 = var1.activeViewType;
        var3 = var1.initialState;
        var4 = _closure1_slot7;
        var1 = true;
        var4['show'] = var1;
        var4 = _closure1_slot7;
        var4['entrypoint'] = var6;
        var4 = _closure1_slot7;
        var4['lastShownEntrypoint'] = var6;
        var6 = _closure1_slot7;
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 5;
        var7 = var7[var4];
        var4 = undefined;
        var4 = var8.bind(var4)(var7);
        var4 = var4.AppLauncherCloseReason;
        var4 = var4.DISMISSED;
        var6['closeReason'] = var4;
        var4 = _closure1_slot7;
        var4['activeViewType'] = var5;
        var2 = _closure1_slot7;
        var2['initialState'] = var3;
        return var1;
    };
    var2['APP_LAUNCHER_SHOW'] = var12;
    var2['APP_LAUNCHER_DISMISS'] = var11;
    var2['CONNECTION_OPEN'] = var10;
    var2['LOGOUT'] = var10;
    var2['CHANNEL_SELECT'] = var10;
    var2['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = var9;
    var2['APP_LAUNCHER_SET_ACTIVE_COMMAND'] = var9;
    var9 = function handleAddFailedAppDMLoad(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot8;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD'] = var9;
    var4 = function handleRemoveFailedAppDMLoad(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/AppLauncherStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();