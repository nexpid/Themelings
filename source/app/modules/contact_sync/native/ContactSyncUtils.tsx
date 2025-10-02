// app/modules/contact_sync/native/ContactSyncUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var11;
    var4 = function isContactSyncEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.friendSync;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.type;
            var2 = _closure1_slot12;
            var2 = var2.CONTACTS;
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var11[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.NativeModules;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var11[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var7 = var6.useContactSyncStore;
    var _closure1_slot6 = var7;
    var7 = var6.clearDismissState;
    var _closure1_slot7 = var7;
    var6 = var6.deleteStoredContacts;
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var7 = var6.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot9 = var7;
    var6 = var6.ContactSyncSuggestionsSetting;
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var7 = var6.Endpoints;
    var _closure1_slot11 = var7;
    var7 = var6.PlatformTypes;
    var _closure1_slot12 = var7;
    var7 = var6.FriendDiscoveryFlags;
    var _closure1_slot13 = var7;
    var6 = var6.HelpdeskArticles;
    var _closure1_slot14 = var6;
    var8 = var5.Error;
    var6 = var8.prototype;
    var7 = Object.create(var6, {constructor: {value: var8}});
    var14 = 'No contact permissions';
    var15 = var7;
    var6 = new var15[var8](var14, var13);
    var8 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot15 = var8;
    var9 = var5.Error;
    var6 = var9.prototype;
    var7 = Object.create(var6, {constructor: {value: var9}});
    var14 = 'No phone number';
    var15 = var7;
    var6 = new var15[var9](var14, var13);
    var7 = var6 instanceof Object ? var6 : var7;
    var9 = var5.Error;
    var5 = var9.prototype;
    var6 = Object.create(var5, {constructor: {value: var9}});
    var14 = 'Failed to fetch contact image';
    var15 = var6;
    var5 = new var15[var9](var14, var13);
    var6 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot16 = var6;
    var5 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var9 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = undefined;
                    if(!(var9 === var8)) { _fun0002_ip = 8; continue _fun0002 }
case 5:
                    var9 = false;
case 8:
                    var _closure4_slot0 = var8;
                    SaveGenerator(address=31);
case 9:
                    return var8;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = global;
                    var6 = var3.JSON;
                    var4 = var6.parse;
                    var3 = arg1;
                    var11 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 6;
                    var3 = var13[var3];
                    var7 = var4.bind(var8)(var3);
                    var4 = var7.put;
                    var3 = {};
                    var10 = _closure1_slot11;
                    var10 = var10.CONNECTION_SYNC_CONTACTS;
                    var3['url'] = var10;
                    var10 = {};
                    var10['friend_list_entries'] = var11;
                    var10['background'] = var9;
                    var9 = _closure1_slot10;
                    var9 = var9.ANYONE_WITH_CONTACT_INFO;
                    var10['allowed_in_suggestions'] = var9;
                    var9 = false;
                    var10['include_mutual_friends_count'] = var9;
                    var3['body'] = var10;
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = 7;
                    var11 = var13[var11];
                    var11 = var12.bind(var8)(var11);
                    var11 = var11.NetworkActionNames;
                    var11 = var11.USER_CONTACTS_SYNC;
                    var10['event'] = var11;
                    var3['trackedActionData'] = var10;
                    var3['rejectWithError'] = var9;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=204);
case 13:
                    return var3;
case 14:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = var3.body;
                    _closure4_slot0 = var4;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 8;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.wait;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'LOAD_FRIEND_SUGGESTIONS_SUCCESS';
                        var1['type'] = var4;
                        var4 = _closure4_slot0;
                        var4 = var4.friend_suggestions;
                        var1['suggestions'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 15:
                    return var3;
case 11:
                    return var2;
case 6:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var9 = 17;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/contact_sync/native/ContactSyncUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['ContactSyncPermissionDenied'] = var8;
    var3['ContactSyncFailedUserHasNoPhone'] = var7;
    var3['ContactImageFetchFailed'] = var6;
    var6 = function() {
        var1 = _closure1_slot4;
        var2 = var1.DCDContactSyncManager;
        var1 = var2.hasContactsPermissions;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['checkContactPermissions'] = var6;
    var3['uploadContacts'] = var5;
    var5 = function(arg1, arg2) {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 6;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot11;
        var4 = var4.USER_BULK_RELATIONSHIPS;
        var1['url'] = var4;
        var4 = {};
        var6 = arg1;
        var4['user_ids'] = var6;
        var6 = arg2;
        var4['token'] = var6;
        var1['body'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 7;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_BULK_RELATIONSHIPS_UPDATE;
        var4['event'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['bulkAddFriends'] = var5;
    var5 = function() {
        var1 = _closure1_slot7;
        var8 = undefined;
        var1 = var1.bind(var8)();
        var1 = _closure1_slot8;
        var1 = var1.bind(var8)();
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 9;
        var1 = var9[var1];
        var2 = var7.bind(var8)(var1);
        var1 = var2.removeLastUserContactsUpload;
        var1 = var1.bind(var2)();
        var1 = 10;
        var1 = var9[var1];
        var1 = var7.bind(var8)(var1);
        var2 = var1.ContactSyncEnabled;
        var1 = var2.updateSetting;
        var4 = false;
        var1 = var1.bind(var2)(var4);
        var2 = _closure1_slot1;
        var1 = 6;
        var1 = var9[var1];
        var3 = var2.bind(var8)(var1);
        var2 = var3.delete;
        var1 = {};
        var11 = _closure1_slot11;
        var10 = var11.CONNECTION;
        var5 = _closure1_slot12;
        var6 = var5.CONTACTS;
        var5 = '@me';
        var5 = var10.bind(var11)(var6, var5);
        var1['url'] = var5;
        var5 = true;
        var1['oldFormErrors'] = var5;
        var5 = {};
        var6 = 7;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.NetworkActionNames;
        var6 = var6.USER_CONNECTIONS_UPDATE;
        var5['event'] = var6;
        var1['trackedActionData'] = var5;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['adminDeleteContactSync'] = var5;
    var5 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot4;
        var2 = var2.DCDContactSyncManager;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var4 = _closure2_slot1;
            var3 = var4.getImageForContactId;
            var2 = _closure2_slot0;
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg2;
                    var2 = null;
                    var1 = arg1;
                    if(!(var2 != var1)) { _fun0003_ip = 17; continue _fun0003 }
case 3:
                    var3 = _closure3_slot1;
                    var2 = _closure1_slot16;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0003_ip = 18; continue _fun0003;
case 17:
                    var3 = _closure3_slot0;
                    var4 = var5.replace;
                    var2 = /(\r\n|\n|\r)/gm;
                    var1 = '';
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getImageForContactId'] = var5;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0004_ip = 19; continue _fun0004 }
case 2:
            var3 = '';
case 19:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot4;
            var2 = var2.DCDContactSyncManager;
            _closure2_slot2 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = function(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var5 = _closure2_slot2;
                var4 = var5.syncContacts;
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = function(arg1, arg2, arg3) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var8 = arg2;
                        var4 = arg3;
                        var1 = undefined;
                        var2 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var5 = null;
                        var7 = arg1;
                        if(!(var5 != var7)) { _fun0005_ip = 20; continue _fun0005 }
case 8:
                        var9 = _closure3_slot1;
                        var7 = _closure1_slot15;
                        var7 = var9.bind(var1)(var7);
                        _fun0005_ip = 21; continue _fun0005;
case 20: // try_start_0
                        var7 = global;
                        var10 = var7.JSON;
                        var9 = var10.parse;
                        var7 = var8;
                        var3 = var9.bind(var10)(var7);
case 22: // try_end0
                        _fun0005_ip = 23; continue _fun0005;
case 24: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var3 = {};
case 23:
                        var7 = global;
                        var9 = var7.Object;
                        var7 = var9.values;
                        var9 = var7.bind(var9)(var3);
                        var7 = var9.find;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.phone;
                            var1 = _closure2_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var7.bind(var9)(var3);
                        var2 = var3;
                        var3 = var5 == var3;
                        var7 = undefined;
                        if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var7 = var2.unencryptedName;
case 25:
                        var6 = var7;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var2['names'] = var8;
                        var7 = var5 != var7;
                        var5 = null;
                        if(!var7) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        var5 = var6;
case 27:
                        var2['ownName'] = var5;
                        var2['payload'] = var4;
                        var2 = var3.bind(var1)(var2);
case 21:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
            };
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getContacts'] = var5;
    var5 = function getStoredContacts() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = undefined;
            var3 = undefined;
            var1 = undefined;
            var6 = _closure1_slot6;
            var4 = var6.getState;
            var4 = var4.bind(var6)();
            var3 = var4.storedContacts;
            var1 = {};
case 10: // try_start_0
            var4 = global;
            var6 = var4.JSON;
            var4 = var6.parse;
            var1 = var4.bind(var6)(var3);
case 29: // try_end0
            _fun0006_ip = 30; continue _fun0006;
case 31: // catch_target0
            CatchBlockStart(arg_register=3);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.captureException;
            var2 = var2.bind(var3)(var4);
case 30:
            return var1;
        }
    };
    var3['getStoredContacts'] = var5;
    var5 = function useContactSyncAccount() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 12;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getLocalAccount;
            var1 = _closure1_slot12;
            var1 = var1.CONTACTS;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useContactSyncAccount'] = var5;
    var5 = function useContactSyncEnabled() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 12;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot17;
            var4 = _closure1_slot5;
            var2 = var4.getLocalAccount;
            var1 = _closure1_slot12;
            var1 = var1.CONTACTS;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useContactSyncEnabled'] = var5;
    var5 = function useContactSyncUserIsDiscoverable() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var3 = var2.FriendDiscoverySettings;
            var2 = var3.useSetting;
            var5 = var2.bind(var3)();
            var3 = 13;
            var2 = var7[var3];
            var9 = var6.bind(var4)(var2);
            var8 = var9.hasFlag;
            var1 = _closure1_slot13;
            var2 = var1.FIND_BY_PHONE;
            var2 = var8.bind(var9)(var5, var2);
            var3 = var7[var3];
            var4 = var6.bind(var4)(var3);
            var3 = var4.hasFlag;
            var1 = var1.FIND_BY_EMAIL;
            var3 = var3.bind(var4)(var5, var1);
            var1 = {};
            var1['phone'] = var2;
            var1['email'] = var3;
            if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var2 = var3;
case 32:
            var1['any'] = var2;
            return var1;
        }
    };
    var3['useContactSyncUserIsDiscoverable'] = var5;
    var3['isContactSyncEnabled'] = var4;
    var4 = function handleOpenLearnMoreLink() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 14;
        var3 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var3);
        var3 = var4.openURL;
        var5 = 15;
        var5 = var7[var5];
        var6 = var6.bind(var1)(var5);
        var5 = var6.getArticleURL;
        var2 = _closure1_slot14;
        var2 = var2.CONTACT_SYNC;
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['handleOpenLearnMoreLink'] = var4;
    var2 = function transitionToAddFriendsLandingPage() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 16;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot9;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['transitionToAddFriendsLandingPage'] = var2;
    return var1;
})();