// app/modules/contact_sync/native/ContactSyncModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function handleNameInputScreenOrSuggestions() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _handleNameInputScreenOrSuggestions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = arg1;
                    var10 = arg2;
                    var3 = undefined;
                    var12 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var14 = _closure1_slot4;
                    var8 = var14.getLocalAccount;
                    var2 = _closure1_slot22;
                    var2 = var2.CONTACTS;
                    var12 = var8.bind(var14)(var2);
                    var8 = _closure1_slot12;
                    var2 = var8.getState;
                    var2 = var2.bind(var8)();
                    var6 = var2.name;
                    var14 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 8;
                    var2 = var2[var8];
                    var14 = var14.bind(var3)(var2);
                    var2 = var14.checkContactPermissions;
                    var2 = var2.bind(var14)();
                    SaveGenerator(address=111);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var14 = _closure1_slot7;
                    var14 = var14.bind(var3)(var2);
                    var14 = _closure1_slot18;
                    var14 = var14.NOT_DETERMINED;
                    if(!(var2 === var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 9;
                    var16 = var18[var14];
                    var17 = var15.bind(var3)(var16);
                    var16 = var17.trackFlowStep;
                    var14 = var18[var14];
                    var14 = var15.bind(var3)(var14);
                    var14 = var14.Steps;
                    var15 = var14.PERMISSION_REQUESTED;
                    var14 = false;
                    var14 = var16.bind(var17)(var15, var14, var14);
case 8: // try_start_0
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var8];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.getContacts;
                    var5 = var14.bind(var15)(var5);
                    SaveGenerator(address=231);
case 10:
                    return var5;
case 11:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var15 = var5.names;
                    var13 = var5.ownName;
                    var7 = var5.payload;
                    var14 = _closure1_slot17;
                    var14 = var14.bind(var3)(var15);
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 10;
                    var14 = var16[var14];
                    var17 = var15.bind(var3)(var14);
                    var16 = var17.track;
                    var14 = _closure1_slot21;
                    var15 = var14.PERMISSIONS_ACKED;
                    var14 = {};
                    var18 = _closure1_slot24;
                    var18 = var18.CONTACTS;
                    var14['type'] = var18;
                    var18 = _closure1_slot23;
                    var18 = var18.ACCEPTED;
                    var14['action'] = var18;
                    var14 = var16.bind(var17)(var15, var14);
                    var14 = var6;
                    var16 = null;
                    if(!(var16 == var14)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var15 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var14 = 9;
                    var17 = var19[var14];
                    var18 = var15.bind(var3)(var17);
                    var17 = var18.trackFlowStep;
                    var14 = var19[var14];
                    var14 = var15.bind(var3)(var14);
                    var14 = var14.Steps;
                    var15 = var14.NAME_INPUT;
                    var14 = false;
                    var14 = var17.bind(var18)(var15, var14, var14);
                    var15 = _closure1_slot11;
                    var14 = var13;
                    var13 = true;
                    var13 = var15.bind(var3)(var14, var13);
                    var15 = var10;
                    var14 = var15.navigate;
                    var13 = _closure1_slot19;
                    var13 = var13.NAME_INPUT;
                    var13 = var14.bind(var15)(var13);
                    _fun0001_ip = 16; continue _fun0001;
case 14:
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var8];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.isContactSyncEnabled;
                    var12 = var13.bind(var14)(var12);
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 11;
                    var13 = var15[var13];
                    var13 = var14.bind(var3)(var13);
                    if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var14 = var13.updateContactSyncEnabled;
                    var12 = {};
                    var15 = true;
                    var12['enabled'] = var15;
                    var15 = var6;
                    var16 = var16 != var15;
                    var15 = undefined;
                    if(!var16) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var15 = var6;
case 19:
                    var12['name'] = var15;
                    var12 = var14.bind(var13)(var12);
                    SaveGenerator(address=539);
case 21:
                    return var12;
case 22:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 24: // try_end0
                    return var12;
case 17: // try_start_1
                    var12 = var13.updateName;
                    var6 = var12.bind(var13)(var6);
                    SaveGenerator(address=563);
case 25:
                    return var6;
case 26:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 27; continue _fun0001 }
case 23:
                    var12 = _closure1_slot19;
                    var9 = var12.SUGGESTIONS;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var14 = 9;
                    var15 = var12[var14];
                    var15 = var13.bind(var3)(var15);
                    var15 = var15.Steps;
                    var11 = var15.SUGGESTIONS_RESULTS;
                    var12 = var12[var8];
                    var13 = var13.bind(var3)(var12);
                    var12 = var13.uploadContacts;
                    var15 = false;
                    var7 = var12.bind(var13)(var7, var15);
                    SaveGenerator(address=641);
case 28:
                    return var7;
case 29:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var16 = _closure1_slot8;
                    var13 = var7.friend_suggestions;
                    var12 = var7.bulk_add_token;
                    var12 = var16.bind(var3)(var13, var12);
                    var12 = var7.friend_suggestions;
                    var16 = var12.length;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var14];
                    var14 = var13.bind(var3)(var12);
                    var13 = var14.trackFlowStep;
                    var23 = var11;
                    var11 = {};
                    var11['num_contacts_found'] = var16;
                    var24 = var14;
                    var22 = false;
                    var21 = false;
                    var20 = var11;
                    var11 = var24[var13](var23, var22, var21, var20, var19);
                    var11 = var10;
                    var10 = var11.navigate;
                    var9 = var10.bind(var11)(var9);
case 16: // try_end1
                    _fun0001_ip = 32; continue _fun0001;
case 30:
                    return var7;
case 27:
                    return var6;
case 12:
                    return var5;
case 33: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 10;
                    var7 = var5[var7];
                    var11 = var9.bind(var3)(var7);
                    var10 = var11.track;
                    var7 = _closure1_slot21;
                    var9 = var7.PERMISSIONS_ACKED;
                    var7 = {};
                    var12 = _closure1_slot24;
                    var12 = var12.CONTACTS;
                    var7['type'] = var12;
                    var12 = _closure1_slot23;
                    var12 = var12.DENIED;
                    var7['action'] = var12;
                    var7 = var10.bind(var11)(var9, var7);
                    var7 = _closure1_slot0;
                    var5 = var5[var8];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.ContactSyncPermissionDenied;
                    if(!(var6 !== var5)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var6 = _closure1_slot6;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 12;
                    var7 = var10[var5];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.fGrbRU;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6.bind(var3)(var5);
                    var5 = _closure1_slot16;
                    var5 = var5.bind(var3)();
                    _fun0001_ip = 32; continue _fun0001;
case 34:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var8 = var7[var5];
                    var10 = var6.bind(var3)(var8);
                    var9 = var10.trackFlowStep;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Steps;
                    var23 = var5.LANDING;
                    var7 = {};
                    var5 = 'denied';
                    var7['mobile_contacts_permission'] = var5;
                    var22 = true;
                    var21 = false;
                    var24 = var10;
                    var20 = var7;
                    var5 = var24[var9](var23, var22, var21, var20, var19);
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot18;
                    var4 = var4.UNAUTHORIZED;
                    var4 = var5.bind(var3)(var4);
case 32:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _handlePhoneVerificationComplete() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var5 = _closure1_slot25;
                    var3 = undefined;
                    var4 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=32);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    return var3;
case 40:
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _startContactSync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var5 = _closure1_slot5;
                    var3 = var5.getCurrentUser;
                    var3 = var3.bind(var5)();
                    var6 = null;
                    var8 = var6 == var3;
                    var5 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var7 = var3.phone;
case 44:
                    if(!(var6 != var7)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var3 = _closure1_slot25;
                    var3 = var3.bind(var5)(var7, var4);
                    SaveGenerator(address=66);
case 48:
                    return var3;
case 49:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                    return var5;
case 50:
                    return var3;
case 46:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 9;
                    var8 = var10[var3];
                    var9 = var7.bind(var5)(var8);
                    var8 = var9.trackFlowStep;
                    var3 = var10[var3];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.Steps;
                    var7 = var3.ADD_PHONE_NUMBER;
                    var3 = false;
                    var3 = var8.bind(var9)(var7, var3, var3);
                    var3 = _closure1_slot9;
                    var3 = var3.bind(var5)(var6);
                    var3 = var4.navigate;
                    var2 = _closure1_slot19;
                    var2 = var2.ADD_PHONE;
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _bulkAddFriendSuggestions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var10 = var4;
                    var _closure4_slot0 = var4;
                    var8 = var2;
                    var _closure4_slot1 = var2;
                    var2 = undefined;
                    var11 = undefined;
                    var _closure4_slot2 = var2;
                    var3 = undefined;
                    var5 = _closure1_slot12;
                    var4 = var5.getState;
                    var4 = var4.bind(var5)();
                    var5 = var4.suggestions;
                    var11 = var5;
                    _closure4_slot2 = var5;
                    var5 = var4.bulkAddToken;
                    var3 = var5;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var5 = _closure1_slot33;
                    var4 = {'skip': false, 'friendsFound': null, 'friendsAdded': 0, 'back': false};
                    var9 = var11;
                    var9 = var9.length;
                    var4['friendsFound'] = var9;
                    var9 = var8;
                    var4['onComplete'] = var9;
                    var4 = var5.bind(var2)(var4);
                    _fun0004_ip = 56; continue _fun0004;
case 54: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 8;
                    var4 = var9[var4];
                    var9 = var5.bind(var2)(var4);
                    var5 = var9.bulkAddFriends;
                    var4 = var10;
                    var3 = var5.bind(var9)(var4, var3);
                    SaveGenerator(address=176);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 59:
                    var4 = var3.failed_requests;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(!(var5 > var4))) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var4 = 14;
                    var4 = var14[var4];
                    var9 = var13.bind(var2)(var4);
                    var5 = var9.open;
                    var4 = {};
                    var12 = 'TOAST_ADD_FRIENDS';
                    var4['key'] = var12;
                    var17 = _closure1_slot0;
                    var12 = 12;
                    var15 = var14[var12];
                    var15 = var17.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var12 = var14[var12];
                    var12 = var17.bind(var2)(var12);
                    var12 = var12.t;
                    var12 = var12.+hjBfX;
                    var12 = var15.bind(var16)(var12);
                    var4['content'] = var12;
                    var12 = 15;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var4['icon'] = var12;
                    var4 = var5.bind(var9)(var4);
                    _fun0004_ip = 62; continue _fun0004;
case 60:
                    var9 = var10;
                    var5 = var9.map;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var3 = _closure4_slot2;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.suggested_user;
                            var2 = var1.id;
                            var1 = _closure5_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var5.bind(var9)(var4);
                    var5 = var9.filter;
                    var4 = global;
                    var4 = var4.Boolean;
                    var21 = var5.bind(var9)(var4);
                    var5 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = 13;
                    var4 = var16[var4];
                    var9 = var5.bind(var2)(var4);
                    var5 = var9.show;
                    var4 = {};
                    var15 = _closure1_slot0;
                    var12 = 12;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var17 = var13.intl;
                    var14 = var17.string;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var13 = var13.t;
                    var13 = var13.6moJ8v;
                    var13 = var14.bind(var17)(var13);
                    var4['title'] = var13;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var18 = var13.intl;
                    var17 = var18.formatToPlainString;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var13 = var13.t;
                    var14 = var13.045SiI;
                    var13 = {};
                    var20 = var21.join;
                    var19 = ', ';
                    var19 = var20.bind(var21)(var19);
                    var13['name'] = var19;
                    var13 = var17.bind(var18)(var14, var13);
                    var4['body'] = var13;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.t;
                    var12 = var12.BddRzc;
                    var12 = var13.bind(var14)(var12);
                    var4['confirmText'] = var12;
                    var12 = function onConfirm() {
                        var3 = _closure1_slot33;
                        var2 = {};
                        var4 = false;
                        var2['skip'] = var4;
                        var5 = _closure4_slot2;
                        var5 = var5.length;
                        var2['friendsFound'] = var5;
                        var5 = _closure4_slot0;
                        var5 = var5.length;
                        var2['friendsAdded'] = var5;
                        var2['back'] = var4;
                        var1 = _closure4_slot1;
                        var2['onComplete'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['onConfirm'] = var12;
                    var4 = var5.bind(var9)(var4);
case 62:
                    var5 = _closure1_slot33;
                    var4 = {};
                    var9 = false;
                    var4['skip'] = var9;
                    var11 = var11.length;
                    var4['friendsFound'] = var11;
                    var10 = var10.length;
                    var4['friendsAdded'] = var10;
                    var4['back'] = var9;
                    var4['onComplete'] = var8;
                    var4 = var5.bind(var2)(var4);
case 63: // try_end0
                    _fun0004_ip = 56; continue _fun0004;
case 29:
                    return var3;
case 64: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 13;
                    var3 = var11[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var7 = 12;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.6moJ8v;
                    var8 = var9.bind(var12)(var8);
                    var3['title'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.Gt2L39;
                    var8 = var9.bind(var12)(var8);
                    var3['body'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.BddRzc;
                    var7 = var8.bind(var9)(var7);
                    var3['confirmText'] = var7;
                    var6 = function onConfirm() {
                        var3 = _closure1_slot33;
                        var2 = {};
                        var4 = false;
                        var2['skip'] = var4;
                        var5 = _closure4_slot2;
                        var5 = var5.length;
                        var2['friendsFound'] = var5;
                        var5 = _closure4_slot0;
                        var5 = var5.length;
                        var2['friendsAdded'] = var5;
                        var2['back'] = var4;
                        var1 = _closure4_slot1;
                        var2['onComplete'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onConfirm'] = var6;
                    var3 = var4.bind(var5)(var3);
case 56:
                    return var2;
case 52:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _verifyPhone() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 65; continue _fun0005 }
case 3:
                    var2 = arg1;
                    var7 = undefined;
                    var8 = undefined;
                    var10 = undefined;
case 66: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.addPhoneWithoutPassword;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=57);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 69; continue _fun0005 }
case 70: // try_end0
                    var3 = {'codeIntercepted': true, 'addedPhone': true};
                    return var3;
case 69:
                    return var2;
case 71: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var6 = var2;
                    var3 = var2.status;
                    var2 = 301;
                    if(!(var2 !== var3)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                    var2 = var6;
                    var3 = var2.status;
                    var2 = 404;
                    if(!(var2 !== var3)) { _fun0005_ip = 72; continue _fun0005 }
case 74:
                    var3 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 14;
                    var2 = var12[var2];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var9 = 'PHONE_FAILED_TO_ADD';
                    var2['key'] = var9;
                    var11 = _closure1_slot0;
                    var9 = 17;
                    var9 = var12[var9];
                    var9 = var11.bind(var7)(var9);
                    var11 = var9.APIError;
                    var13 = var6;
                    var9 = var11.prototype;
                    var9 = Object.create(var9, {constructor: {value: var11}});
                    var14 = var9;
                    var6 = new var14[var11](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var9;
                    var10 = var6;
                    var9 = null;
                    var11 = var9 == var6;
                    var6 = undefined;
                    if(var11) { _fun0005_ip = 13; continue _fun0005 }
case 75:
                    var11 = var10;
                    var10 = var11.getAnyErrorMessage;
                    var6 = var10.bind(var11)();
case 13:
                    var8 = var6;
                    if(!(var9 == var6)) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 12;
                    var9 = var12[var6];
                    var9 = var11.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var6 = var12[var6];
                    var6 = var11.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.cCVXOT;
                    var6 = var9.bind(var10)(var6);
                    _fun0005_ip = 78; continue _fun0005;
case 76:
                    var6 = var8;
case 78:
                    var2['content'] = var6;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = {'codeIntercepted': true, 'addedPhone': false};
                    _fun0005_ip = 79; continue _fun0005;
case 72:
                    var2 = {'codeIntercepted': false, 'addedPhone': false};
case 79:
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var6 = function openContactSyncModal(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var3 = _closure1_slot32;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = var7.initialRoutes;
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var4 = _closure1_slot14;
            var3 = _closure1_slot13;
            var3 = var3.NORMAL;
            var3 = var4.bind(var1)(var3);
case 80:
            if(!var6) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackFlowStart;
            var3 = {};
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
case 82:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 19;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var8 = _closure1_slot0;
            var4 = 21;
            var4 = var3[var4];
            var8 = var8.bind(var1)(var4);
            var4 = 20;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var8.bind(var1)(var4, var3);
            var3 = {};
            var8 = var7.initialRoutes;
            var3['initialRoutes'] = var8;
            var8 = var7.openSettings;
            var3['openSettingsSheet'] = var8;
            var7 = var7.customLandingPage;
            var3['customLandingPage'] = var7;
            var2 = _closure1_slot20;
            var4 = var5.bind(var6)(var4, var3, var2);
            var3 = var4.then;
            var2 = arg3;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot31 = var6;
    var4 = function refreshContactSyncPermissionStatus() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.checkContactPermissions;
        var4 = var2.bind(var3)();
        var3 = var4.then;
        var2 = function(arg1) {
            var3 = _closure1_slot7;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot32 = var4;
    var2 = function closeContactSyncModal(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var6 = var3.skip;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0007_ip = 66; continue _fun0007 }
case 84:
            var6 = true;
case 66:
            var5 = var3.friendsFound;
            var4 = var3.friendsAdded;
            var8 = var3.back;
            if(!(var8 === var1)) { _fun0007_ip = 85; continue _fun0007 }
case 40:
            var8 = false;
case 85:
            var3 = var3.onComplete;
            var7 = null;
            if(!(var7 == var3)) { _fun0007_ip = 86; continue _fun0007 }
case 67:
            var7 = function oldCloseContactSyncModal() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var9 = arguments[0];
                    var7 = arguments[3];
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var9 = true;
case 87:
                    var _closure3_slot0 = var9;
                    if(!(var7 === var1)) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var7 = false;
case 89:
                    var _closure3_slot1 = var7;
                    var _closure3_slot2 = var1;
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var1)();
                    _closure3_slot2 = var4;
                    if(var7) { _fun0008_ip = 91; continue _fun0008 }
case 47:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var8 = var6.bind(var1)(var5);
                    var6 = var8.trackFlowEnd;
                    var5 = {};
                    var10 = arguments[1];
                    var5['num_contacts_found'] = var10;
                    var10 = arguments[2];
                    var5['num_contacts_added'] = var10;
                    var5 = var6.bind(var8)(var9, var5);
case 91:
                    if(!var4) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 19;
                    var4 = var9[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.updateAnimation;
                    var4 = _closure1_slot20;
                    var8 = _closure1_slot0;
                    var3 = 23;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.ModalAnimation;
                    if(var7) { _fun0008_ip = 57; continue _fun0008 }
case 94:
                    var7 = var3.SLIDE_IN_OUT;
                    var7 = var5.bind(var6)(var4, var7);
                    _fun0008_ip = 92; continue _fun0008;
case 57:
                    var3 = var3.SLIDE_IN_OUT_REVERSE;
                    var3 = var5.bind(var6)(var4, var3);
case 92:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 19;
                            var4 = var1[var3];
                            var1 = undefined;
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.popWithKey;
                            var4 = _closure1_slot20;
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure3_slot2;
                            if(!var4) { _fun0009_ip = 95; continue _fun0009 }
case 83:
                            var8 = _closure3_slot1;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = var4[var3];
                            var7 = var5.bind(var1)(var3);
                            var6 = var7.updateAnimation;
                            var5 = _closure1_slot20;
                            var3 = _closure1_slot0;
                            var2 = 23;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.ModalAnimation;
                            if(var8) { _fun0009_ip = 96; continue _fun0009 }
case 4:
                            var8 = var2.SLIDE_IN_OUT;
                            var8 = var6.bind(var7)(var5, var8);
                            var8 = 24;
                            var8 = var4[var8];
                            var10 = var3.bind(var1)(var8);
                            var9 = var10.nextOnboardingStep;
                            var8 = {};
                            var11 = _closure3_slot0;
                            var8['skip'] = var11;
                            var8 = var9.bind(var10)(var8);
                            _fun0009_ip = 95; continue _fun0009;
case 96:
                            var2 = var2.SLIDE_IN_OUT_REVERSE;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = 24;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.previousOnboardingStep;
                            var2 = var2.bind(var3)();
case 95:
                            return var1;
                        }
                    };
                    var2 = 0;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var13 = undefined;
            var12 = var6;
            var11 = var5;
            var10 = var4;
            var9 = var8;
            var7 = var13[var7](var12, var11, var10, var9, var8);
            _fun0007_ip = 97; continue _fun0007;
case 86:
            var2 = function redesignCloseContactSyncModal(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arguments[1];
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                    var3 = true;
case 98:
                    var2 = _closure1_slot15;
                    var2 = var2.bind(var1)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.trackFlowEnd;
                    var4 = {};
                    var7 = arguments[2];
                    var4['num_contacts_found'] = var7;
                    var7 = arguments[3];
                    var4['num_contacts_added'] = var7;
                    var4 = var5.bind(var6)(var3, var4);
                    if(var2) { _fun0010_ip = 91; continue _fun0010 }
case 50:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.popWithKey;
                        var2 = _closure1_slot20;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = 0;
                    var2 = var5.bind(var1)(var4, var2);
                    _fun0010_ip = 100; continue _fun0010;
case 91:
                    var2 = arg1;
                    var2 = var2.bind(var1)(var3);
case 100:
                    return var1;
                }
            };
            var13 = undefined;
            var12 = var3;
            var11 = var6;
            var10 = var5;
            var9 = var4;
            var2 = var13[var2](var12, var11, var10, var9, var8);
case 97:
            return var1;
        }
    };
    var _closure1_slot33 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.setError;
    var _closure1_slot6 = var10;
    var10 = var7.setPermissionState;
    var _closure1_slot7 = var10;
    var10 = var7.setSuggestions;
    var _closure1_slot8 = var10;
    var10 = var7.setPhone;
    var _closure1_slot9 = var10;
    var10 = var7.setPhoneToken;
    var _closure1_slot10 = var10;
    var10 = var7.setName;
    var _closure1_slot11 = var10;
    var10 = var7.useContactSyncModalStore;
    var _closure1_slot12 = var10;
    var10 = var7.ContactSyncModes;
    var _closure1_slot13 = var10;
    var10 = var7.initialize;
    var _closure1_slot14 = var10;
    var7 = var7.getIsOnboarding;
    var _closure1_slot15 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.deleteStoredContacts;
    var _closure1_slot16 = var10;
    var7 = var7.setStoredContacts;
    var _closure1_slot17 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ContactPermissions;
    var _closure1_slot18 = var10;
    var10 = var7.ContactSyncScenes;
    var _closure1_slot19 = var10;
    var7 = var7.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot20 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot21 = var10;
    var7 = var7.PlatformTypes;
    var _closure1_slot22 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.NativePermissionStates;
    var _closure1_slot23 = var10;
    var7 = var7.NativePermissionTypes;
    var _closure1_slot24 = var7;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/contact_sync/native/ContactSyncModalActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function handlePhoneVerificationComplete() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handlePhoneVerificationComplete'] = var7;
    var7 = function startContactSync() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startContactSync'] = var7;
    var7 = function bulkAddFriendSuggestions() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['bulkAddFriendSuggestions'] = var7;
    var7 = function goBackToLanding(arg1) {
        var4 = arg1;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var6 = var5[var2];
        var1 = undefined;
        var7 = var3.bind(var1)(var6);
        var6 = var7.trackFlowStep;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.Steps;
        var5 = var2.LANDING;
        var3 = false;
        var2 = true;
        var2 = var6.bind(var7)(var5, var3, var2);
        var2 = var4.getState;
        var2 = var2.bind(var4)();
        var2 = var2.routes;
        var3 = var4.pop;
        var5 = var2.length;
        var2 = 1;
        var2 = var5 - var2;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['goBackToLanding'] = var7;
    var7 = function submitPhone(arg1, arg2) {
        var4 = arg2;
        var5 = _closure1_slot9;
        var1 = undefined;
        var3 = arg1;
        var3 = var5.bind(var1)(var3);
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 9;
        var6 = var8[var3];
        var7 = var5.bind(var1)(var6);
        var6 = var7.trackFlowStep;
        var3 = var8[var3];
        var3 = var5.bind(var1)(var3);
        var3 = var3.Steps;
        var5 = var3.VERIFY_PHONE_NUMBER;
        var3 = false;
        var3 = var6.bind(var7)(var5, var3, var3);
        var3 = var4.navigate;
        var2 = _closure1_slot19;
        var2 = var2.VERIFY_PHONE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['submitPhone'] = var7;
    var7 = function verifyPhone() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['verifyPhone'] = var7;
    var7 = function verifyPhoneWithPassword(arg1, arg2) {
        var4 = arg2;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 9;
        var6 = var8[var3];
        var1 = undefined;
        var7 = var5.bind(var1)(var6);
        var6 = var7.trackFlowStep;
        var3 = var8[var3];
        var3 = var5.bind(var1)(var3);
        var3 = var3.Steps;
        var5 = var3.PASSWORD_CONFIRM;
        var3 = false;
        var3 = var6.bind(var7)(var5, var3, var3);
        var5 = _closure1_slot10;
        var3 = arg1;
        var3 = var5.bind(var1)(var3);
        var3 = var4.navigate;
        var2 = _closure1_slot19;
        var2 = var2.VERIFY_PASSWORD;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['verifyPhoneWithPassword'] = var7;
    var7 = function upsellDismissed() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.trackFlowEnd;
        var2 = true;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['upsellDismissed'] = var7;
    var3['openContactSyncModal'] = var6;
    var6 = function openContactSyncModalOnboarding() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var2 = false;
case 98:
            if(!var2) { _fun0011_ip = 101; continue _fun0011 }
case 88:
            var3 = _closure1_slot14;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.hasDeferredInvite;
            var2 = var2.bind(var5)();
            var4 = _closure1_slot13;
            if(var2) { _fun0011_ip = 49; continue _fun0011 }
case 102:
            var2 = var4.ONBOARDING;
            _fun0011_ip = 51; continue _fun0011;
case 49:
            var2 = var4.ONBOARDING_INVITE;
case 51:
            var2 = var3.bind(var1)(var2);
case 101:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 9;
            var3 = var5[var8];
            var6 = var9.bind(var1)(var3);
            var4 = var6.trackFlowStart;
            var3 = {};
            var7 = {};
            var8 = var5[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CONTACT_SYNC_ONBOARDING_LOCATION;
            var7['page'] = var8;
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot1;
            var3 = 19;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 103; continue _fun0012 }
case 37:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 21;
                        var3 = var2[var3];
                        var7 = undefined;
                        var4 = var4.bind(var7)(var3);
                        var3 = 20;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var2 = var4.bind(var7)(var3, var2);
                        SaveGenerator(address=54);
case 47:
                        return var2;
case 104:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                        var3 = var2.default;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 23;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.ModalAnimation;
                        var5 = var5.SLIDE_IN_OUT;
                        var4['animation'] = var5;
                        var3['modalConfig'] = var4;
                        return var3;
case 105:
                        return var2;
case 103:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot20;
            var2 = {};
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var3['openContactSyncModalOnboarding'] = var6;
    var5 = function openContactSyncModalDeeplink() {
        var4 = _closure1_slot31;
        var3 = {};
        var1 = 'Deep Link';
        var3['page'] = var1;
        var1 = undefined;
        var2 = {};
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['openContactSyncModalDeeplink'] = var5;
    var3['refreshContactSyncPermissionStatus'] = var4;
    var3['closeContactSyncModal'] = var2;
    return var1;
})();