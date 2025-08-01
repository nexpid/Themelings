// app/modules/contact_sync/native/components/ContactSyncSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var9[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var2 = 2;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.deleteStoredContacts;
    var _closure1_slot5 = var4;
    var2 = var2.setStoredContacts;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = var2.FriendDiscoveryFlags;
    var _closure1_slot8 = var4;
    var2 = var2.AnalyticsSections;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot10 = var4;
    var4 = var2.Fragment;
    var _closure1_slot11 = var4;
    var2 = var2.jsxs;
    var _closure1_slot12 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 321; continue _fun0001 }
 10:
                    var3 = arg2;
                    var4 = _closure1_slot5;
                    var2 = undefined;
                    var4 = var4.bind(var2)();
                    var4 = arg3;
                    if(!var4) { _fun0001_ip = 318; continue _fun0001 }
 35:
                    var5 = null;
                    var4 = arg1;
                    if(!(var5 != var4)) { _fun0001_ip = 318; continue _fun0001 }
 47:
                    var4 = var3;
                    if(!(var5 != var4)) { _fun0001_ip = 318; continue _fun0001 }
 57: // try_start_0
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 6;
                    var4 = var4[var7];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getContacts;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=92);
 90:
                    return var3;
 92:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 167; continue _fun0001 }
 98:
                    var5 = var3.names;
                    var8 = var3.payload;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var5);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var5.bind(var2)(var4);
                    var5 = var7.uploadContacts;
                    var4 = true;
                    var4 = var5.bind(var7)(var8, var4);
                    SaveGenerator(address=153);
 151:
                    return var4;
 153:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 164; continue _fun0001 }
 159: // try_end0
                    _fun0001_ip = 318; continue _fun0001;
 164:
                    return var4;
 167:
                    return var3;
 170: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ContactSyncPermissionDenied;
                    if(!(var4 === var3)) { _fun0001_ip = 318; continue _fun0001 }
 202:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var5 = var7.bind(var2)(var3);
                    var4 = var5.open;
                    var3 = {};
                    var9 = 'CONTACT_SYNC_NEEDS_PERMISSIONS';
                    var3['key'] = var9;
                    var11 = _closure1_slot0;
                    var6 = 8;
                    var9 = var8[var6];
                    var9 = var11.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var6 = var8[var6];
                    var6 = var11.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.h+jFOj;
                    var6 = var9.bind(var10)(var6);
                    var3['content'] = var6;
                    var6 = 9;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var3['icon'] = var6;
                    var3 = var4.bind(var5)(var3);
 318:
                    return var2;
 321:
                    return var1;
                }
            };
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
    var5 = var2.bind(var1)();
    var _closure1_slot13 = var5;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 246; continue _fun0002 }
 13:
                    var5 = var6;
                    var4 = arg2;
                    var3 = arg3;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0002_ip = 241; continue _fun0002 }
 31: // try_start_0
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var2 = var7[var2];
                    var7 = undefined;
                    var9 = var8.bind(var7)(var2);
                    var8 = var9.updateContactSyncEnabled;
                    var2 = {};
                    var10 = var3;
                    var2['enabled'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=80);
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 115; continue _fun0002 }
 86:
                    var6 = _closure1_slot13;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    SaveGenerator(address=101);
 99:
                    return var3;
 101:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 112; continue _fun0002 }
 107: // try_end0
                    _fun0002_ip = 241; continue _fun0002;
 112:
                    return var3;
 115:
                    return var2;
 118: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 7;
                    var2 = var8[var2];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var9 = 'CONTACT_SYNC_FAILED_ALERT_TITLE';
                    var2['key'] = var9;
                    var11 = _closure1_slot0;
                    var5 = 8;
                    var9 = var8[var5];
                    var9 = var11.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var8[var5];
                    var5 = var11.bind(var6)(var5);
                    var5 = var5.t;
                    var5 = var5.GCwBtL;
                    var5 = var9.bind(var10)(var5);
                    var2['content'] = var5;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
 241:
                    var2 = undefined;
                    return var2;
 246:
                    return var1;
                }
            };
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
    var4 = var2.bind(var1)();
    var _closure1_slot14 = var4;
    var2 = function handleSyncContacts(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 33; continue _fun0003 }
 9:
            var4 = _closure1_slot14;
            var3 = undefined;
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var3)(var5, var2, var1);
            _fun0003_ip = 149; continue _fun0003;
 33:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var4 = undefined;
            var8 = var3.bind(var4)(var1);
            var7 = var8.track;
            var1 = _closure1_slot7;
            var6 = var1.OPEN_MODAL;
            var3 = {};
            var1 = _closure1_slot9;
            var1 = var1.CONTACT_SYNC_MODAL;
            var3['type'] = var1;
            var9 = {};
            var1 = 'User Settings';
            var9['page'] = var1;
            var3['location'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.openContactSyncModal;
            var2 = {};
            var2['page'] = var1;
            var1 = {};
            var1 = var3.bind(var4)(var1, var2);
 149:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/contact_sync/native/components/ContactSyncSettings.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function _default() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var21 = 6;
            var1 = var3[var21];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = var5.useContactSyncAccount;
            var25 = var1.bind(var5)();
            var _closure2_slot0 = var25;
            var1 = 13;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var5)(var2, var1);
            var9 = null;
            var3 = var9 == var2;
            var1 = undefined;
            if(var3) { _fun0004_ip = 100; continue _fun0004 }
 94:
            var1 = var2.phone;
 100:
            var _closure2_slot1 = var1;
            var1 = var9 == var2;
            var8 = undefined;
            if(var1) { _fun0004_ip = 123; continue _fun0004 }
 113:
            var1 = var2.isStaff;
            var8 = var1.bind(var2)();
 123:
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = var11[var21];
            var2 = var18.bind(var4)(var1);
            var1 = var2.isContactSyncEnabled;
            var17 = var1.bind(var2)(var25);
            var1 = 14;
            var1 = var11[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.FriendDiscoverySettings;
            var1 = var2.useSetting;
            var5 = var1.bind(var2)();
            var2 = 15;
            var1 = var11[var2];
            var10 = var18.bind(var4)(var1);
            var7 = var10.hasFlag;
            var1 = _closure1_slot8;
            var3 = var1.FIND_BY_PHONE;
            var16 = var7.bind(var10)(var5, var3);
            var _closure2_slot2 = var16;
            var2 = var11[var2];
            var3 = var18.bind(var4)(var2);
            var2 = var3.hasFlag;
            var1 = var1.FIND_BY_EMAIL;
            var14 = var2.bind(var3)(var5, var1);
            var _closure2_slot3 = var14;
            var3 = _closure1_slot12;
            var2 = _closure1_slot11;
            var1 = {};
            var10 = 16;
            var5 = var11[var10];
            var5 = var18.bind(var4)(var5);
            var7 = var5.FormSection;
            var5 = {};
            var19 = 8;
            var12 = var11[var19];
            var12 = var18.bind(var4)(var12);
            var15 = var12.intl;
            var12 = var15.string;
            var11 = var11[var19];
            var11 = var18.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.bGSsnZ;
            var11 = var12.bind(var15)(var11);
            var5['title'] = var11;
            var11 = null;
            if(!var8) { _fun0004_ip = 459; continue _fun0004 }
 337:
            var15 = _closure1_slot12;
            var12 = _closure1_slot11;
            var8 = {};
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = var20[var10];
            var18 = var22.bind(var4)(var18);
            var24 = var18.FormSwitchRow;
            var18 = {'label': 'STAFF ONLY - Find your friends deletion', 'value': true};
            var26 = var20[var21];
            var26 = var22.bind(var4)(var26);
            var26 = var26.adminDeleteContactSync;
            var18['onValueChange'] = var26;
            var24 = var23.bind(var4)(var24, var18);
            var18 = new Array(2);
            var18[0] = var24;
            var20 = var20[var10];
            var20 = var22.bind(var4)(var20);
            var22 = var20.FormDivider;
            var20 = {};
            var20 = var23.bind(var4)(var22, var20);
            var18[1] = var20;
            var8['children'] = var18;
            var11 = var15.bind(var4)(var12, var8);
 459:
            var8 = new Array(3);
            var8[0] = var11;
            var15 = _closure1_slot10;
            var23 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = var18[var10];
            var11 = var23.bind(var4)(var11);
            var12 = var11.FormSwitchRow;
            var11 = {};
            var20 = var18[var19];
            var20 = var23.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var18 = var18[var19];
            var18 = var23.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.uSvEy8;
            var18 = var20.bind(var22)(var18);
            var11['label'] = var18;
            var11['value'] = var17;
            var17 = function onValueChange(arg1) {
                var5 = _closure1_slot15;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var11['onValueChange'] = var17;
            var11 = var15.bind(var4)(var12, var11);
            var8[1] = var11;
            var11 = var9 != var25;
            var9 = null;
            if(!var11) { _fun0004_ip = 774; continue _fun0004 }
 582:
            var15 = _closure1_slot12;
            var12 = _closure1_slot11;
            var11 = {};
            var22 = _closure1_slot10;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = var23[var10];
            var17 = var24.bind(var4)(var17);
            var18 = var17.FormDivider;
            var17 = {};
            var18 = var22.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var23[var10];
            var18 = var24.bind(var4)(var18);
            var20 = var18.FormRow;
            var18 = {};
            var26 = var23[var19];
            var26 = var24.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var23[var19];
            var26 = var24.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.nAsWKy;
            var26 = var27.bind(var28)(var26);
            var18['label'] = var26;
            var23 = var23[var10];
            var23 = var24.bind(var4)(var23);
            var23 = var23.FormRow;
            var24 = var23.Arrow;
            var23 = {};
            var25 = var25.name;
            var23['label'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var18['trailing'] = var23;
            var23 = function onPress() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var4 = var2[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var7 = var8.track;
                var4 = _closure1_slot7;
                var6 = var4.OPEN_MODAL;
                var4 = {};
                var9 = 'Change Name';
                var4['type'] = var9;
                var9 = {};
                var10 = 'User Settings';
                var9['page'] = var10;
                var4['location'] = var9;
                var4 = var7.bind(var8)(var6, var4);
                var4 = 17;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var6 = _closure1_slot0;
                var3 = 19;
                var3 = var2[var3];
                var6 = var6.bind(var1)(var3);
                var3 = 18;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var1)(var3, var2);
                var2 = 'Contact Sync Name Update Modal';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var18['onPress'] = var23;
            var18 = var22.bind(var4)(var20, var18);
            var17[1] = var18;
            var11['children'] = var17;
            var9 = var15.bind(var4)(var12, var11);
 774:
            var8[2] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var12 = _closure1_slot10;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = var15[var10];
            var7 = var18.bind(var4)(var7);
            var8 = var7.FormHint;
            var7 = {};
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var20 = var9.intl;
            var17 = var20.format;
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var11 = var9.BoR0dH;
            var9 = {};
            var21 = var15[var21];
            var21 = var18.bind(var4)(var21);
            var21 = var21.handleOpenLearnMoreLink;
            var9['onClick'] = var21;
            var9 = var17.bind(var20)(var11, var9);
            var7['children'] = var9;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var7 = var15[var10];
            var7 = var18.bind(var4)(var7);
            var8 = var7.FormHint;
            var7 = {};
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var17 = var9.intl;
            var11 = var17.string;
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.cW1nr6;
            var9 = var11.bind(var17)(var9);
            var7['children'] = var9;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot12;
            var6 = var15[var10];
            var6 = var18.bind(var4)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var17 = var9.intl;
            var11 = var17.string;
            var9 = var15[var19];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.0t2wRU;
            var9 = var11.bind(var17)(var9);
            var6['title'] = var9;
            var9 = var15[var10];
            var9 = var18.bind(var4)(var9);
            var11 = var9.FormSwitchRow;
            var9 = {};
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.eJnn09;
            var17 = var20.bind(var21)(var17);
            var9['label'] = var17;
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.X7pIKC;
            var17 = var20.bind(var21)(var17);
            var9['subLabel'] = var17;
            var9['value'] = var16;
            var16 = function onValueChange(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updateDiscoverability;
                var2 = {};
                var5 = arg1;
                var2['phone'] = var5;
                var5 = _closure2_slot3;
                var2['email'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9['onValueChange'] = var16;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var11 = var15[var10];
            var11 = var18.bind(var4)(var11);
            var16 = var11.FormDivider;
            var11 = {};
            var11 = var12.bind(var4)(var16, var11);
            var9[1] = var11;
            var10 = var15[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.FormSwitchRow;
            var10 = {};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.dI4d4e;
            var16 = var17.bind(var20)(var16);
            var10['label'] = var16;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.ilGsHB;
            var15 = var16.bind(var17)(var15);
            var10['subLabel'] = var15;
            var10['value'] = var14;
            var13 = function onValueChange(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updateDiscoverability;
                var2 = {};
                var5 = _closure2_slot2;
                var2['phone'] = var5;
                var5 = arg1;
                var2['email'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onValueChange'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['syncContacts'] = var5;
    var3['updateFriendSync'] = var4;
    var3['handleSyncContacts'] = var2;
    return var1;
})();