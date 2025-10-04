// app/modules/user_settings/ParentalControlledUserSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var14;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var14[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var4 = var4.ExplicitContentFilterTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.AllFriendSourceFlags;
    var _closure1_slot3 = var4;
    var12 = 2;
    var4 = var14[var12];
    var11 = var13.bind(var1)(var4);
    var10 = var11.defineParentalControlledSetting;
    var5 = 3;
    var4 = var14[var5];
    var4 = var13.bind(var1)(var4);
    var22 = var4.explicitContentFromProto;
    var4 = var14[var5];
    var4 = var13.bind(var1)(var4);
    var21 = var4.explicitContentToProto;
    var7 = {};
    var4 = 4;
    var6 = var14[var4];
    var6 = var16.bind(var1)(var6);
    var7['comparator'] = var6;
    var15 = 'textAndImages';
    var23 = 'explicitContentSettings';
    var25 = var11;
    var24 = var15;
    var20 = var7;
    var11 = var25[var10](var24, var23, var22, var21, var20, var19);
    var6 = var14[var12];
    var10 = var13.bind(var1)(var6);
    var9 = var10.defineParentalControlledSetting;
    var23 = 'explicitContentFilter';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var10;
    var24 = var15;
    var10 = var25[var9](var24, var23, var22, var21, var20);
    var6 = var14[var12];
    var9 = var13.bind(var1)(var6);
    var8 = var9.defineParentalControlledSetting;
    var6 = var14[var5];
    var6 = var13.bind(var1)(var6);
    var22 = var6.goreContentFromProto;
    var5 = var14[var5];
    var5 = var13.bind(var1)(var5);
    var21 = var5.goreContentToProto;
    var5 = {};
    var4 = var14[var4];
    var4 = var16.bind(var1)(var4);
    var5['comparator'] = var4;
    var23 = 'goreContentSettings';
    var25 = var9;
    var24 = var15;
    var20 = var5;
    var9 = var25[var8](var24, var23, var22, var21, var20, var19);
    var4 = var14[var12];
    var8 = var13.bind(var1)(var4);
    var7 = var8.defineParentalControlledSetting;
    var18 = 'privacy';
    var23 = 'defaultMessageRequestRestricted';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var8;
    var24 = var18;
    var8 = var25[var7](var24, var23, var22, var21, var20);
    var4 = var14[var12];
    var15 = var13.bind(var1)(var4);
    var7 = var15.defineParentalControlledSetting;
    var23 = 'defaultGuildsRestricted';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
        var1 = arg1;
        return var1;
    };
    var25 = var15;
    var24 = var18;
    var7 = var25[var7](var24, var23, var22, var21, var20);
    var4 = var14[var12];
    var16 = var13.bind(var1)(var4);
    var15 = var16.defineParentalControlledSetting;
    var23 = 'defaultGuildsRestrictedV2';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var16;
    var24 = var18;
    var6 = var25[var15](var24, var23, var22, var21, var20);
    var4 = var14[var12];
    var17 = var13.bind(var1)(var4);
    var16 = var17.defineParentalControlledSetting;
    var23 = 'friendSourceFlags';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var17;
    var24 = var18;
    var5 = var25[var16](var24, var23, var22, var21, var20);
    var4 = var14[var12];
    var19 = var13.bind(var1)(var4);
    var17 = var19.defineParentalControlledSetting;
    var23 = 'dropsOptedOut';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var19;
    var24 = var18;
    var4 = var25[var17](var24, var23, var22, var21, var20);
    var12 = var14[var12];
    var17 = var13.bind(var1)(var12);
    var16 = var17.defineParentalControlledSetting;
    var23 = 'quests3PDataOptedOut';
    var22 = function(arg1) {
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
    var21 = function(arg1) {
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
    var25 = var17;
    var24 = var18;
    var2 = var25[var16](var24, var23, var22, var21, var20);
    var12 = 6;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/user_settings/ParentalControlledUserSettings.tsx';
    var12 = var13.bind(var14)(var12);
    var3['ParentalControlledExplicitContent'] = var11;
    var3['ParentalControlledLegacyExplicitContent'] = var10;
    var3['ParentalControlledGoreContent'] = var9;
    var3['ParentalControlledDefaultMessageRequestRestricted'] = var8;
    var3['ParentalControlledDefaultGuildsRestricted'] = var7;
    var3['ParentalControlledDefaultGuildsRestrictedV2'] = var6;
    var3['ParentalControlledFriendSourceFlags'] = var5;
    var3['ParentalControlledDropsOptedOut'] = var4;
    var3['ParentalControlledQuests3PDataOptedOut'] = var2;
    return var1;
})();