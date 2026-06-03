// app/modules/user_settings/family_center/ParentalControlledUserSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var15;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var15[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var4 = var4.ExplicitContentFilterTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var15[var4];
    var4 = var14.bind(var1)(var4);
    var4 = var4.AllFriendSourceFlags;
    var _closure1_slot3 = var4;
    var13 = 2;
    var4 = var15[var13];
    var12 = var14.bind(var1)(var4);
    var11 = var12.defineParentalControlledSetting;
    var5 = 3;
    var4 = var15[var5];
    var4 = var14.bind(var1)(var4);
    var23 = var4.explicitContentFromProto;
    var4 = var15[var5];
    var4 = var14.bind(var1)(var4);
    var22 = var4.explicitContentToProto;
    var7 = {};
    var4 = 4;
    var6 = var15[var4];
    var6 = var16.bind(var1)(var6);
    var7['comparator'] = var6;
    var10 = 'textAndImages';
    var24 = 'explicitContentSettings';
    var26 = var12;
    var25 = var10;
    var21 = var7;
    var12 = var26[var11](var25, var24, var23, var22, var21, var20);
    var6 = var15[var13];
    var11 = var14.bind(var1)(var6);
    var9 = var11.defineParentalControlledSetting;
    var24 = 'explicitContentFilter';
    var23 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.value;
case 2:
            if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var1 = var2.NON_FRIENDS;
case 4:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.UInt32Value;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var11;
    var25 = var10;
    var11 = var26[var9](var25, var24, var23, var22, var21);
    var6 = var15[var13];
    var9 = var14.bind(var1)(var6);
    var8 = var9.defineParentalControlledSetting;
    var6 = var15[var5];
    var6 = var14.bind(var1)(var6);
    var23 = var6.goreContentFromProto;
    var5 = var15[var5];
    var5 = var14.bind(var1)(var5);
    var22 = var5.goreContentToProto;
    var5 = {};
    var4 = var15[var4];
    var4 = var16.bind(var1)(var4);
    var5['comparator'] = var4;
    var24 = 'goreContentSettings';
    var26 = var9;
    var25 = var10;
    var21 = var5;
    var10 = var26[var8](var25, var24, var23, var22, var21, var20);
    var4 = var15[var13];
    var8 = var14.bind(var1)(var4);
    var7 = var8.defineParentalControlledSetting;
    var20 = 'privacy';
    var24 = 'defaultMessageRequestRestricted';
    var23 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2.value;
case 2:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.BoolValue;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var8;
    var25 = var20;
    var9 = var26[var7](var25, var24, var23, var22, var21);
    var4 = var15[var13];
    var8 = var14.bind(var1)(var4);
    var7 = var8.defineParentalControlledSetting;
    var24 = 'defaultGuildsRestricted';
    var23 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var22 = function(arg1) {
        var1 = arg1;
        return var1;
    };
    var26 = var8;
    var25 = var20;
    var8 = var26[var7](var25, var24, var23, var22, var21);
    var4 = var15[var13];
    var16 = var14.bind(var1)(var4);
    var7 = var16.defineParentalControlledSetting;
    var24 = 'defaultGuildsRestrictedV2';
    var23 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = var2.value;
case 2:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.BoolValue;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var16;
    var25 = var20;
    var7 = var26[var7](var25, var24, var23, var22, var21);
    var4 = var15[var13];
    var17 = var14.bind(var1)(var4);
    var16 = var17.defineParentalControlledSetting;
    var24 = 'friendSourceFlags';
    var23 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var1 = var3.value;
case 2:
            if(!(var2 == var1)) { _fun0005_ip = 8; continue _fun0005 }
case 5:
            var1 = _closure1_slot3;
case 8:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.UInt32Value;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var17;
    var25 = var20;
    var6 = var26[var16](var25, var24, var23, var22, var21);
    var4 = var15[var13];
    var18 = var14.bind(var1)(var4);
    var17 = var18.defineParentalControlledSetting;
    var24 = 'dropsOptedOut';
    var23 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var2 = var3.value;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 9; continue _fun0006 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.BoolValue;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var18;
    var25 = var20;
    var5 = var26[var17](var25, var24, var23, var22, var21);
    var4 = var15[var13];
    var19 = var14.bind(var1)(var4);
    var18 = var19.defineParentalControlledSetting;
    var24 = 'quests3PDataOptedOut';
    var23 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var2 = var3.value;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0007_ip = 9; continue _fun0007 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var22 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.BoolValue;
        var2 = var3.create;
        var1 = {};
        var4 = arg1;
        var1['value'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var19;
    var25 = var20;
    var4 = var26[var18](var25, var24, var23, var22, var21);
    var13 = var15[var13];
    var20 = var14.bind(var1)(var13);
    var19 = var20.defineParentalControlledSetting;
    var18 = {};
    var13 = 7;
    var13 = var15[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.spendingLimitEqual;
    var18['comparator'] = var13;
    var25 = 'safetySettings';
    var24 = 'spendingLimitSettings';
    var23 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            var3 = undefined;
            if(var4) { _fun0008_ip = 11; continue _fun0008 }
case 12:
            var3 = var2.oneTimePurchaseLimit;
case 11:
            var2 = var1 == var3;
            var1 = null;
            if(var2) { _fun0008_ip = 13; continue _fun0008 }
case 14:
            var2 = {};
            var4 = global;
            var5 = var4.Number;
            var4 = var3.amount;
            var4 = var5.bind(var6)(var4);
            var2['amount'] = var4;
            var3 = var3.currency;
            var2['currency'] = var3;
            var1 = var2;
case 13:
            return var1;
        }
    };
    var22 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0009_ip = 15; continue _fun0009 }
case 16:
            var10 = var1.amount;
            var7 = var1.currency;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 6;
            var1 = var6[var4];
            var9 = undefined;
            var1 = var5.bind(var9)(var1);
            var3 = var1.SpendingLimitSettings;
            var2 = var3.create;
            var1 = {};
            var4 = var6[var4];
            var4 = var5.bind(var9)(var4);
            var6 = var4.SpendingLimit;
            var5 = var6.create;
            var4 = {};
            var8 = global;
            var8 = var8.String;
            var8 = var8.bind(var9)(var10);
            var4['amount'] = var8;
            var4['currency'] = var7;
            var4 = var5.bind(var6)(var4);
            var1['oneTimePurchaseLimit'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 15:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.SpendingLimitSettings;
            var2 = var3.create;
            var1 = {};
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var26 = var20;
    var21 = var18;
    var2 = var26[var19](var25, var24, var23, var22, var21, var20);
    var13 = 8;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/user_settings/family_center/ParentalControlledUserSettings.tsx';
    var13 = var14.bind(var15)(var13);
    var3['ParentalControlledExplicitContent'] = var12;
    var3['ParentalControlledLegacyExplicitContent'] = var11;
    var3['ParentalControlledGoreContent'] = var10;
    var3['ParentalControlledDefaultMessageRequestRestricted'] = var9;
    var3['ParentalControlledDefaultGuildsRestricted'] = var8;
    var3['ParentalControlledDefaultGuildsRestrictedV2'] = var7;
    var3['ParentalControlledFriendSourceFlags'] = var6;
    var3['ParentalControlledDropsOptedOut'] = var5;
    var3['ParentalControlledQuests3PDataOptedOut'] = var4;
    var3['ParentalControlledSpendingLimit'] = var2;
    return var1;
})();