// app/modules/contact_sync/native/ContactSyncManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _requestAndSyncContacts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var9 = 11;
                    var8 = var8[var9];
                    var8 = var11.bind(var2)(var8);
                    var13 = var8.Storage;
                    var12 = var13.get;
                    var8 = _closure1_slot15;
                    var11 = 0;
                    var12 = var12.bind(var13)(var8, var11);
                    var8 = null;
                    var13 = var8 != var12;
                    if(!var13) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var11 = var12;
case 8:
                    var7 = var11;
                    var11 = global;
                    var12 = var11.Date;
                    var11 = var12.now;
                    var6 = var11.bind(var12)();
case 10: // try_start_0
                    var11 = var7;
                    var7 = 86400000;
                    var11 = var11 + var7;
                    var7 = var6;
                    if(!(var11 <= var7)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var11 = _closure1_slot9;
                    var7 = var11.getCurrentUser;
                    var7 = var7.bind(var11)();
                    var10 = var7;
                    var11 = var8 == var7;
                    var7 = undefined;
                    if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var7 = var10.phone;
case 13:
                    var4 = var7;
                    if(!(var8 != var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var10 = 12;
                    var7 = var7[var10];
                    var12 = var11.bind(var2)(var7);
                    var11 = var12.getContacts;
                    var7 = var4;
                    var13 = _closure1_slot12;
                    var4 = var13.getState;
                    var4 = var4.bind(var13)();
                    var4 = var4.storedContacts;
                    var4 = var11.bind(var12)(var7, var4);
                    SaveGenerator(address=223);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var12 = var4.names;
                    var7 = var4.payload;
                    var5 = var7;
                    var11 = _closure1_slot10;
                    var11 = var11.bind(var2)(var12);
                    if(!(var8 != var7)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var10];
                    var10 = var8.bind(var2)(var7);
                    var8 = var10.uploadContacts;
                    var7 = var5;
                    var5 = true;
                    var5 = var8.bind(var10)(var7, var5);
                    SaveGenerator(address=294);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 25; continue _fun0002 }
case 21:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var9];
                    var7 = var8.bind(var2)(var7);
                    var9 = var7.Storage;
                    var8 = var9.set;
                    var7 = _closure1_slot15;
                    var6 = var8.bind(var9)(var7, var6);
case 11: // try_end0
                    _fun0002_ip = 26; continue _fun0002;
case 25:
                    return var5;
case 19:
                    return var4;
case 15:
                    return var2;
case 27: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot11;
                    var3 = var3.bind(var2)();
case 26:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.setStoredContacts;
    var _closure1_slot10 = var5;
    var5 = var4.deleteStoredContacts;
    var _closure1_slot11 = var5;
    var4 = var4.useContactSyncStore;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ContactPermissions;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot14 = var4;
    var4 = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
    var _closure1_slot15 = var4;
    var5 = 14;
    var5 = var8[var5];
    var6 = var6.bind(var1)(var5);
    var5 = function(arg1) {
        var3 = function ContactSyncLifecycleManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 30; continue _fun0003;
case 28:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 30:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot9;
                        var2 = var3.getCurrentUser;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var4 = _closure1_slot8;
                        var3 = var4.getLocalAccount;
                        var2 = _closure1_slot14;
                        var2 = var2.CONTACTS;
                        var6 = var3.bind(var4)(var2);
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var4 = 12;
                        var2 = var2[var4];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.isContactSyncEnabled;
                        var2 = var2.bind(var5)(var6);
                        if(!var2) { _fun0004_ip = 31; continue _fun0004 }
case 33:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var4];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.checkContactPermissions;
                        var3 = var1.bind(var2)();
                        var2 = var3.then;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = _closure1_slot13;
                                var3 = var2.AUTHORIZED;
                                var2 = arg1;
                                if(!(var2 === var3)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 13;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.runAfterInteractions;
                                var1 = function() {
                                    var2 = function requestAndSyncContacts() {
                                        var1 = undefined;
                                        var4 = _closure1_slot17;
                                        var3 = var4.apply;
                                        var1 = arguments;
                                        var2 = var1;
                                        var1 = this;
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var1;
                                    };
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
case 34:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var5 = var5.bind(var1)(var6);
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var13 = var6;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/contact_sync/native/ContactSyncManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY'] = var4;
    var2 = function removeLastUserContactsUpload() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot15;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeLastUserContactsUpload'] = var2;
    return var1;
})();