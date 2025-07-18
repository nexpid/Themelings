// app/modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var5 = 0;
    var4 = var7[var5];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.getIsOnboarding;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ContactPermissions;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 'Flow Initialized';
    var4['INITIALIZED'] = var8;
    var8 = 'Landing';
    var4['LANDING'] = var8;
    var8 = 'Contacts Permission Requested';
    var4['PERMISSION_REQUESTED'] = var8;
    var8 = 'Name Input';
    var4['NAME_INPUT'] = var8;
    var8 = 'Suggestions Results';
    var4['SUGGESTIONS_RESULTS'] = var8;
    var8 = 'Contact Invites';
    var4['CONTACT_INVITES'] = var8;
    var8 = 'Add Phone Number';
    var4['ADD_PHONE_NUMBER'] = var8;
    var8 = 'Verify Phone Number';
    var4['VERIFY_PHONE_NUMBER'] = var8;
    var8 = 'Password Confirmation';
    var4['PASSWORD_CONFIRM'] = var8;
    var8 = 'Complete';
    var4['COMPLETE'] = var8;
    var _closure1_slot7 = var4;
    var8 = null;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Steps'] = var4;
    var4 = 'Onboarding';
    var3['CONTACT_SYNC_ONBOARDING_LOCATION'] = var4;
    var4 = function trackFlowStart(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot7;
            var1 = var1.LANDING;
            _closure1_slot8 = var1;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            _closure1_slot9 = var1;
            var4 = _closure1_slot3;
            var1 = var4.getCurrentUser;
            var6 = var1.bind(var4)();
            var5 = null;
            var7 = var5 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0001_ip = 79; continue _fun0001 }
 73:
            var4 = var6.phone;
 79:
            var4 = var5 != var4;
            var _closure2_slot1 = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.checkContactPermissions;
            var4 = var3.bind(var4)();
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot5;
                    var1 = var1.NOT_DETERMINED;
                    var7 = null;
                    if(!(var3 !== var1)) { _fun0002_ip = 49; continue _fun0002 }
 22:
                    var1 = _closure1_slot5;
                    var2 = var1.AUTHORIZED;
                    var1 = 'denied';
                    if(!(var3 === var2)) { _fun0002_ip = 46; continue _fun0002 }
 42:
                    var1 = 'accepted';
 46:
                    var7 = var1;
 49:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.CONTACT_SYNC_FLOW_KEY;
                    var2 = {};
                    var11 = _closure2_slot0;
                    var12 = var2;
                    var9 = copyDataProperties(var12, var11);
                    var10 = 'Contact Sync';
                    var9 = 'flow_type';
                    var2[var9] = var10;
                    var8 = _closure1_slot7;
                    var10 = var8.INITIALIZED;
                    var9 = 'from_step';
                    var2[var9] = var10;
                    var9 = var8.LANDING;
                    var8 = 'to_step';
                    var2[var8] = var9;
                    var9 = false;
                    var8 = 'skip';
                    var2[var8] = var9;
                    var8 = 'back';
                    var2[var8] = var9;
                    var9 = 0;
                    var8 = 'seconds_on_from_step';
                    var2[var8] = var9;
                    var8 = _closure2_slot1;
                    var6 = 'has_phone_number';
                    var2[var6] = var8;
                    var6 = 'mobile_contacts_permission';
                    var2[var6] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackFlowStart'] = var4;
    var4 = function trackFlowStep(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var9 = arg2;
            var14 = arg4;
            var4 = _closure1_slot4;
            var1 = undefined;
            var5 = var4.bind(var1)();
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var6 = _closure1_slot9;
            var7 = var4 - var6;
            var6 = 1000;
            var12 = var7 / var6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var10 = var7.bind(var1)(var6);
            var8 = var10.track;
            var6 = _closure1_slot6;
            var7 = var6.CONTACT_SYNC_FLOW_KEY;
            var6 = {};
            var18 = var6;
            var17 = var14;
            var11 = copyDataProperties(var18, var17);
            var13 = 'Onboarding';
            if(var5) { _fun0003_ip = 132; continue _fun0003 }
 113:
            var11 = null;
            var15 = var11 == var14;
            var11 = undefined;
            if(var15) { _fun0003_ip = 129; continue _fun0003 }
 124:
            var11 = var14.location;
 129:
            var13 = var11;
 132:
            var11 = 'location';
            var6[var11] = var13;
            var13 = 'Contact Sync';
            var11 = 'flow_type';
            var6[var11] = var13;
            var13 = _closure1_slot8;
            var11 = 'from_step';
            var6[var11] = var13;
            var11 = 'to_step';
            var6[var11] = var3;
            var11 = 'skip';
            var6[var11] = var9;
            var13 = arg3;
            var11 = 'back';
            var6[var11] = var13;
            var11 = 'seconds_on_from_step';
            var6[var11] = var12;
            var6 = var8.bind(var10)(var7, var6);
            if(!var5) { _fun0003_ip = 263; continue _fun0003 }
 219:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var8 = var6.bind(var1)(var5);
            var7 = var8.trackNUFStep;
            var6 = _closure1_slot8;
            var5 = {};
            var5['skip'] = var9;
            var5 = var7.bind(var8)(var6, var3, var5);
 263:
            _closure1_slot9 = var4;
            _closure1_slot8 = var3;
            return var1;
        }
    };
    var3['trackFlowStep'] = var4;
    var2 = function trackFlowEnd(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var10 = arg2;
            var2 = _closure1_slot4;
            var1 = undefined;
            var7 = var2.bind(var1)();
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var8 = var2.bind(var4)();
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var6 = var4.bind(var1)(var2);
            var5 = var6.track;
            var2 = _closure1_slot6;
            var4 = var2.CONTACT_SYNC_FLOW_KEY;
            var2 = {};
            var13 = var2;
            var12 = var10;
            var9 = copyDataProperties(var13, var12);
            var9 = 'Onboarding';
            if(var7) { _fun0004_ip = 108; continue _fun0004 }
 89:
            var7 = null;
            var11 = var7 == var10;
            var7 = undefined;
            if(var11) { _fun0004_ip = 105; continue _fun0004 }
 100:
            var7 = var10.location;
 105:
            var9 = var7;
 108:
            var7 = 'location';
            var2[var7] = var9;
            var9 = 'Contact Sync';
            var7 = 'flow_type';
            var2[var7] = var9;
            var9 = _closure1_slot8;
            var7 = 'from_step';
            var2[var7] = var9;
            var7 = _closure1_slot7;
            var9 = var7.COMPLETE;
            var7 = 'to_step';
            var2[var7] = var9;
            var9 = arg1;
            var7 = 'skip';
            var2[var7] = var9;
            var9 = false;
            var7 = 'back';
            var2[var7] = var9;
            var7 = _closure1_slot9;
            var8 = var8 - var7;
            var7 = 1000;
            var8 = var8 / var7;
            var7 = 'seconds_on_from_step';
            var2[var7] = var8;
            var2 = var5.bind(var6)(var4, var2);
            var2 = null;
            _closure1_slot8 = var2;
            return var1;
        }
    };
    var3['trackFlowEnd'] = var2;
    return var1;
})();