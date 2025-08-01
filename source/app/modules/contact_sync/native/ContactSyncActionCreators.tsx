// app/modules/contact_sync/native/ContactSyncActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.FriendDiscoveryFlags;
    var _closure1_slot6 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot7 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 488; continue _fun0001 }
 13:
                    var11 = var2.phone;
                    var9 = var2.email;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 3;
                    var2 = var2[var6];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.FriendDiscoverySettings;
                    var2 = var4.getSetting;
                    var13 = var2.bind(var4)();
                    var5 = _closure1_slot4;
                    var4 = var5.getLocalAccount;
                    var2 = _closure1_slot7;
                    var2 = var2.CONTACTS;
                    var2 = var4.bind(var5)(var2);
                    var10 = null;
                    var4 = var10 == var2;
                    var12 = undefined;
                    if(var4) { _fun0001_ip = 107; continue _fun0001 }
 102:
                    var12 = var2.name;
 107:
                    var14 = var13;
                    if(!(var10 != var11)) { _fun0001_ip = 157; continue _fun0001 }
 114:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.setFlag;
                    var2 = _closure1_slot6;
                    var2 = var2.FIND_BY_PHONE;
                    var14 = var4.bind(var5)(var13, var2, var11);
 157:
                    var5 = var14;
                    if(!(var10 != var9)) { _fun0001_ip = 207; continue _fun0001 }
 164:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var7 = var4.bind(var3)(var2);
                    var4 = var7.setFlag;
                    var2 = _closure1_slot6;
                    var2 = var2.FIND_BY_EMAIL;
                    var5 = var4.bind(var7)(var14, var2, var9);
 207:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.FriendDiscoverySettings;
                    var2 = var4.updateSetting;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=245);
 243:
                    return var2;
 245:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 485; continue _fun0001 }
 254:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot5;
                    var5 = var4.USER_DISCOVERY_UPDATED;
                    var4 = {};
                    var14 = 'string';
                    var12 = typeof var12;
                    var12 = var14 === var12;
                    var4['has_name'] = var12;
                    if(!(var10 == var11)) { _fun0001_ip = 355; continue _fun0001 }
 313:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 4;
                    var12 = var15[var12];
                    var15 = var14.bind(var3)(var12);
                    var14 = var15.hasFlag;
                    var12 = _closure1_slot6;
                    var12 = var12.FIND_BY_PHONE;
                    var11 = var14.bind(var15)(var13, var12);
 355:
                    var4['discoverable_phone'] = var11;
                    if(!(var10 == var9)) { _fun0001_ip = 408; continue _fun0001 }
 366:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 4;
                    var10 = var12[var10];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.hasFlag;
                    var10 = _closure1_slot6;
                    var10 = var10.FIND_BY_EMAIL;
                    var9 = var11.bind(var12)(var13, var10);
 408:
                    var4['discoverable_email'] = var9;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 6;
                    var9 = var11[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = var10.isContactSyncEnabled;
                    var12 = _closure1_slot4;
                    var11 = var12.getLocalAccount;
                    var8 = _closure1_slot7;
                    var8 = var8.CONTACTS;
                    var8 = var11.bind(var12)(var8);
                    var8 = var9.bind(var10)(var8);
                    var4['contact_sync_enabled'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 485:
                    return var2;
 488:
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
    var7 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 187; continue _fun0002 }
 13:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.update;
                    var2 = _closure1_slot7;
                    var6 = var2.CONTACTS;
                    var5 = {};
                    var5['name'] = var9;
                    var2 = '@me';
                    var2 = var7.bind(var8)(var6, var2, var5);
                    SaveGenerator(address=77);
 75:
                    return var2;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 184; continue _fun0002 }
 83:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot5;
                    var5 = var4.NAME_SUBMITTED;
                    var4 = {};
                    var8 = null;
                    var11 = var8 != var9;
                    var10 = 1;
                    if(!var11) { _fun0002_ip = 151; continue _fun0002 }
 132:
                    var12 = var9.split;
                    var11 = ' ';
                    var11 = var12.bind(var9)(var11);
                    var10 = var11.length;
 151:
                    var4['num_words'] = var10;
                    var10 = var8 != var9;
                    var8 = 0;
                    if(!var10) { _fun0002_ip = 170; continue _fun0002 }
 165:
                    var8 = var9.length;
 170:
                    var4['num_chars'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 184:
                    return var2;
 187:
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
    var8 = var4.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 648; continue _fun0003 }
 13:
                    var6 = _closure1_slot4;
                    var5 = var6.getLocalAccount;
                    var3 = _closure1_slot7;
                    var3 = var3.CONTACTS;
                    var5 = var5.bind(var6)(var3);
                    var9 = null;
                    var6 = var9 == var5;
                    var3 = undefined;
                    var8 = undefined;
                    if(var6) { _fun0003_ip = 59; continue _fun0003 }
 54:
                    var8 = var5.id;
 59:
                    var10 = var2.enabled;
                    var11 = var2.name;
                    if(!(var9 != var8)) { _fun0003_ip = 307; continue _fun0003 }
 76:
                    if(!(var3 === var11)) { _fun0003_ip = 139; continue _fun0003 }
 80:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.setFriendSync;
                    var2 = _closure1_slot7;
                    var2 = var2.CONTACTS;
                    var2 = var5.bind(var6)(var2, var8, var10);
                    SaveGenerator(address=127);
 125:
                    return var2;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(!var5) { _fun0003_ip = 485; continue _fun0003 }
 136:
                    return var2;
 139:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var7 = var5.bind(var3)(var2);
                    var6 = var7.update;
                    var2 = _closure1_slot7;
                    var5 = var2.CONTACTS;
                    var2 = {};
                    var2['friend_sync'] = var10;
                    var2['name'] = var11;
                    var2 = var6.bind(var7)(var5, var8, var2);
                    SaveGenerator(address=197);
 195:
                    return var2;
 197:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 304; continue _fun0003 }
 203:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot5;
                    var6 = var5.NAME_SUBMITTED;
                    var5 = {};
                    var13 = var9 != var11;
                    var12 = 1;
                    if(!var13) { _fun0003_ip = 269; continue _fun0003 }
 250:
                    var14 = var11.split;
                    var13 = ' ';
                    var13 = var14.bind(var11)(var13);
                    var12 = var13.length;
 269:
                    var5['num_words'] = var12;
                    var13 = var9 != var11;
                    var12 = 0;
                    if(!var13) { _fun0003_ip = 288; continue _fun0003 }
 283:
                    var12 = var11.length;
 288:
                    var5['num_chars'] = var12;
                    var5 = var7.bind(var8)(var6, var5);
                    _fun0003_ip = 485; continue _fun0003;
 304:
                    return var2;
 307:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var12 = var5.bind(var3)(var2);
                    var8 = var12.connect;
                    var2 = _closure1_slot7;
                    var19 = var2.CONTACTS;
                    var6 = {};
                    var6['friend_sync'] = var10;
                    var18 = '@me';
                    var16 = arg2;
                    var20 = var12;
                    var17 = var11;
                    var15 = var6;
                    var2 = var20[var8](var19, var18, var17, var16, var15, var14);
                    SaveGenerator(address=376);
 374:
                    return var2;
 376:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 645; continue _fun0003 }
 385:
                    if(!(var3 !== var11)) { _fun0003_ip = 485; continue _fun0003 }
 389:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot5;
                    var6 = var5.NAME_SUBMITTED;
                    var5 = {};
                    var13 = var9 != var11;
                    var12 = 1;
                    if(!var13) { _fun0003_ip = 455; continue _fun0003 }
 436:
                    var14 = var11.split;
                    var13 = ' ';
                    var13 = var14.bind(var11)(var13);
                    var12 = var13.length;
 455:
                    var5['num_words'] = var12;
                    var12 = var9 != var11;
                    var9 = 0;
                    if(!var12) { _fun0003_ip = 474; continue _fun0003 }
 469:
                    var9 = var11.length;
 474:
                    var5['num_chars'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
 485:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var5 = var8.bind(var3)(var5);
                    var6 = var5.FriendDiscoverySettings;
                    var5 = var6.getSetting;
                    var11 = var5.bind(var6)();
                    var6 = 4;
                    var5 = var7[var6];
                    var13 = var8.bind(var3)(var5);
                    var12 = var13.hasFlag;
                    var5 = _closure1_slot6;
                    var9 = var5.FIND_BY_PHONE;
                    var9 = var12.bind(var13)(var11, var9);
                    var6 = var7[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.hasFlag;
                    var5 = var5.FIND_BY_EMAIL;
                    var8 = var6.bind(var8)(var11, var5);
                    var6 = _closure1_slot1;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot5;
                    var5 = var4.CONTACT_SYNC_TOGGLED;
                    var4 = {};
                    var4['is_enabled'] = var10;
                    var4['am_discoverable_phone'] = var9;
                    var4['am_discoverable_email'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 645:
                    return var2;
 648:
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
    var2 = {};
    var2['updateName'] = var8;
    var2['updateDiscoverability'] = var7;
    var2['updateContactSyncEnabled'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/ContactSyncActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();