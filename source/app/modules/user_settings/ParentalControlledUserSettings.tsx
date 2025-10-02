// app/modules/user_settings/ParentalControlledUserSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var12;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var12[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var4 = var4.ExplicitContentFilterTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.AllFriendSourceFlags;
    var _closure1_slot3 = var4;
    var10 = 2;
    var4 = var12[var10];
    var14 = var11.bind(var1)(var4);
    var13 = var14.defineParentalControlledSetting;
    var5 = 3;
    var4 = var12[var5];
    var4 = var11.bind(var1)(var4);
    var20 = var4.explicitContentFromProto;
    var4 = var12[var5];
    var4 = var11.bind(var1)(var4);
    var19 = var4.explicitContentToProto;
    var7 = {};
    var4 = 4;
    var6 = var12[var4];
    var6 = var16.bind(var1)(var6);
    var7['comparator'] = var6;
    var15 = 'textAndImages';
    var21 = 'explicitContentSettings';
    var23 = var14;
    var22 = var15;
    var18 = var7;
    var9 = var23[var13](var22, var21, var20, var19, var18, var17);
    var6 = var12[var10];
    var14 = var11.bind(var1)(var6);
    var13 = var14.defineParentalControlledSetting;
    var21 = 'explicitContentFilter';
    var20 = function(arg1) {
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
    var19 = function(arg1) {
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
    var23 = var14;
    var22 = var15;
    var8 = var23[var13](var22, var21, var20, var19, var18);
    var6 = var12[var10];
    var14 = var11.bind(var1)(var6);
    var13 = var14.defineParentalControlledSetting;
    var6 = var12[var5];
    var6 = var11.bind(var1)(var6);
    var20 = var6.goreContentFromProto;
    var5 = var12[var5];
    var5 = var11.bind(var1)(var5);
    var19 = var5.goreContentToProto;
    var5 = {};
    var4 = var12[var4];
    var4 = var16.bind(var1)(var4);
    var5['comparator'] = var4;
    var21 = 'goreContentSettings';
    var23 = var14;
    var22 = var15;
    var18 = var5;
    var7 = var23[var13](var22, var21, var20, var19, var18, var17);
    var4 = var12[var10];
    var14 = var11.bind(var1)(var4);
    var13 = var14.defineParentalControlledSetting;
    var16 = 'privacy';
    var21 = 'defaultMessageRequestRestricted';
    var20 = function(arg1) {
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
    var19 = function(arg1) {
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
    var23 = var14;
    var22 = var16;
    var6 = var23[var13](var22, var21, var20, var19, var18);
    var4 = var12[var10];
    var15 = var11.bind(var1)(var4);
    var14 = var15.defineParentalControlledSetting;
    var21 = 'defaultGuildsRestricted';
    var20 = function(arg1) {
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
    var19 = function(arg1) {
        var1 = arg1;
        return var1;
    };
    var23 = var15;
    var22 = var16;
    var5 = var23[var14](var22, var21, var20, var19, var18);
    var4 = var12[var10];
    var17 = var11.bind(var1)(var4);
    var15 = var17.defineParentalControlledSetting;
    var21 = 'defaultGuildsRestrictedV2';
    var20 = function(arg1) {
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
    var19 = function(arg1) {
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
    var23 = var17;
    var22 = var16;
    var4 = var23[var15](var22, var21, var20, var19, var18);
    var10 = var12[var10];
    var15 = var11.bind(var1)(var10);
    var14 = var15.defineParentalControlledSetting;
    var21 = 'friendSourceFlags';
    var20 = function(arg1) {
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
    var19 = function(arg1) {
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
    var23 = var15;
    var22 = var16;
    var2 = var23[var14](var22, var21, var20, var19, var18);
    var10 = 6;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/user_settings/ParentalControlledUserSettings.tsx';
    var10 = var11.bind(var12)(var10);
    var3['ParentalControlledExplicitContent'] = var9;
    var3['ParentalControlledLegacyExplicitContent'] = var8;
    var3['ParentalControlledGoreContent'] = var7;
    var3['ParentalControlledDefaultMessageRequestRestricted'] = var6;
    var3['ParentalControlledDefaultGuildsRestricted'] = var5;
    var3['ParentalControlledDefaultGuildsRestrictedV2'] = var4;
    var3['ParentalControlledFriendSourceFlags'] = var2;
    return var1;
})();