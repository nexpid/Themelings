// app/modules/user_identifiers/native/IOSUserIdentifiersManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function IOSUserIdentifiersManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var2 = _closure2_slot2;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var3 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot2 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var7 = 'onPostConnectionOpen';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.isIOS;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.isIOSAppTransactionIdTrackingEnabled;
                    var4 = 'IOSUserIdentifiersManager';
                    var4 = var6.bind(var7)(var4);
                    if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                    var4 = _closure1_slot10;
                    var2 = var4.getCurrentUser;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 11; continue _fun0003 }
case 14:
                    var2 = var5.syncAppTransactionId;
                    var2 = var2.bind(var5)(var4);
                    SaveGenerator(address=127);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 11:
                    return var3;
case 17:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var1 = function onPostConnectionOpen() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'syncAppTransactionId';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var6 = arg1;
                    var2 = undefined;
                    var4 = undefined;
                    var9 = undefined;
case 20: // try_start_0
                    var3 = _closure1_slot9;
                    var7 = var3.DCDAppTransactionManager;
                    var3 = var7.getAppTransactionId;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=50);
case 21:
                    return var3;
case 22:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var8 = var3.appTransactionId;
                    var9 = var8;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var10 = var9;
                    var8 = '';
                    if(!(var8 !== var10)) { _fun0004_ip = 25; continue _fun0004 }
case 27:
                    var6 = var6.appTransactionIds;
                    var4 = var6;
                    if(!(var7 != var6)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var7 = var4;
                    var6 = var7.includes;
                    var4 = var9;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 28:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.post;
                    var4 = {'url': '/users/@me/app-transaction-ids', 'body': null, 'rejectWithError': true};
                    var8 = {};
                    var8['app_transaction_id'] = var9;
                    var4['body'] = var8;
                    var9 = true;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=199);
case 31:
                    return var4;
case 32:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.track;
                    var5 = _closure1_slot11;
                    var6 = var5.APP_TRANSACTION_ID_SYNCED;
                    var5 = {};
                    var5['success'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
case 35: // try_end0
                    _fun0004_ip = 36; continue _fun0004;
case 33:
                    return var4;
case 30:
                    return var2;
case 25:
                    return var2;
case 23:
                    return var3;
case 37: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.captureException;
                    var4 = {};
                    var10 = {'source': 'ios_user_identifiers_manager', 'step': 'sync_app_transaction_id'};
                    var4['tags'] = var10;
                    var4 = var7.bind(var8)(var9, var4);
                    var4 = 12;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot11;
                    var4 = var3.APP_TRANSACTION_ID_SYNCED;
                    var3 = {};
                    var7 = false;
                    var3['success'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 36:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function syncAppTransactionId() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_identifiers/native/IOSUserIdentifiersManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();