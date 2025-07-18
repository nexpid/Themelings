// app/modules/guild_onboarding/usePromptHelpText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function formatRoleString(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var2 = var7.length;
            var1 = '';
            var6 = 0;
            if(!(var6 !== var2)) { _fun0001_ip = 184; continue _fun0001 }
 21:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 4;
            var3 = var3[var9];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var9];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = arg3;
            if(var3) { _fun0001_ip = 94; continue _fun0001 }
 84:
            var3 = var2.Kj5GIS;
            _fun0001_ip = 102; continue _fun0001;
 94:
            var3 = var2.cJZxWV;
 102:
            var2 = {};
            var8 = var7.length;
            var2['count'] = var8;
            var8 = global;
            var10 = var8.Math;
            var9 = var10.max;
            var11 = var7.length;
            var8 = 2;
            var8 = var11 - var8;
            var8 = var9.bind(var10)(var8, var6);
            var2['extraCount'] = var8;
            var6 = var7[var6];
            var2['role1'] = var6;
            var6 = 1;
            var6 = var7[var6];
            var2['role2'] = var6;
            var6 = arg2;
            var2['itemHook'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 184:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/usePromptHelpText.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePromptHelpText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var2 = var1.prompt;
            var8 = var1.selectedRoleIds;
            var4 = var1.selectedChannelIds;
            var _closure2_slot1 = var4;
            var6 = var1.itemHook;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 5;
            var7 = var10[var4];
            var5 = undefined;
            var13 = var9.bind(var5)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 45; continue _fun0003 }
 18:
                    var4 = _closure1_slot3;
                    var3 = var4.getRoles;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var11, var7);
            var _closure2_slot2 = var7;
            var4 = var10[var4];
            var12 = var9.bind(var5)(var4);
            var11 = var12.useStateFromStoresArray;
            var4 = _closure1_slot2;
            var7 = new Array(3);
            var7[0] = var4;
            var4 = _closure1_slot5;
            var7[1] = var4;
            var4 = _closure1_slot4;
            var7[2] = var4;
            var4 = function() {
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = _closure2_slot1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.computeChannelName;
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot4;
                    var10 = arg1;
                    var7 = true;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var11.bind(var12)(var7, var4);
            var14 = global;
            var7 = var14.Array;
            var4 = var7.from;
            var8 = var4.bind(var7)(var8);
            var7 = var8.map;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 17; continue _fun0004 }
 13:
                    var3 = {};
                    _fun0004_ip = 21; continue _fun0004;
 17:
                    var3 = _closure2_slot2;
 21:
                    var2 = arg1;
                    var2 = var3[var2];
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 42; continue _fun0004 }
 37:
                    var1 = var2.name;
 42:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var4);
            var7 = var8.filter;
            var4 = 6;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.isNotNullish;
            var7 = var7.bind(var8)(var4);
            var4 = var7.map;
            var3 = function(arg1) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '@';
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var4 = var4.bind(var7)(var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 256; continue _fun0002 }
 243:
            var2 = var2.singleSelect;
            var3 = '';
            if(var2) { _fun0002_ip = 311; continue _fun0002 }
 256:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 4;
            var7 = var10[var2];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.JshhEh;
            var3 = var7.bind(var8)(var2);
 311:
            var2 = var15.length;
            var10 = 0;
            if(!(var10 === var2)) { _fun0002_ip = 334; continue _fun0002 }
 322:
            var2 = var4.length;
            if(!(!(var2 > var10))) { _fun0002_ip = 533; continue _fun0002 }
 334:
            var2 = var15.length;
            var8 = var2 > var10;
            var7 = '';
            var2 = var7;
            if(!var8) { _fun0002_ip = 547; continue _fun0002 }
 356:
            var9 = var15.length;
            var8 = var7;
            if(!(var10 !== var9)) { _fun0002_ip = 500; continue _fun0002 }
 371:
            var11 = _closure1_slot0;
            var16 = _closure1_slot1;
            var9 = 4;
            var12 = var16[var9];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var9 = var16[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.t;
            var11 = var9.Rj841d;
            var9 = {};
            var16 = var15.length;
            var9['count'] = var16;
            var17 = var14.Math;
            var16 = var17.max;
            var18 = var15.length;
            var14 = 2;
            var14 = var18 - var14;
            var14 = var16.bind(var17)(var14, var10);
            var9['extraCount'] = var14;
            var14 = var15[var10];
            var9['channel1'] = var14;
            var14 = 1;
            var14 = var15[var14];
            var9['channel2'] = var14;
            var9['itemHook'] = var6;
            var8 = var12.bind(var13)(var11, var9);
 500:
            var9 = var4.length;
            var9 = var9 > var10;
            if(!var9) { _fun0002_ip = 525; continue _fun0002 }
 512:
            var10 = _closure1_slot6;
            var9 = true;
            var7 = var10.bind(var5)(var4, var6, var9);
 525:
            var2 = var7;
            var3 = var8;
            _fun0002_ip = 547; continue _fun0002;
 533:
            var1 = _closure1_slot6;
            var3 = var1.bind(var5)(var4, var6);
            var2 = '';
 547:
            var1 = {};
            var1['helpText'] = var3;
            var1['helpTextAdditional'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useCustomizeCommunityPromptHelpText(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var2 = var1.prompt;
            var7 = var1.selectedRoleIds;
            var4 = var1.selectedChannelIds;
            var _closure2_slot1 = var4;
            var6 = var1.itemHook;
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var4 = 5;
            var5 = var11[var4];
            var10 = undefined;
            var13 = var8.bind(var10)(var5);
            var12 = var13.useStateFromStores;
            var5 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 45; continue _fun0006 }
 18:
                    var4 = _closure1_slot3;
                    var3 = var4.getRoles;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var9, var5);
            var _closure2_slot2 = var5;
            var4 = var11[var4];
            var12 = var8.bind(var10)(var4);
            var9 = var12.useStateFromStoresArray;
            var4 = _closure1_slot2;
            var5 = new Array(3);
            var5[0] = var4;
            var4 = _closure1_slot5;
            var5[1] = var4;
            var4 = _closure1_slot4;
            var5[2] = var4;
            var4 = function() {
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = _closure2_slot1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.computeChannelName;
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot4;
                    var10 = arg1;
                    var7 = true;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var12)(var5, var4);
            var9 = global;
            var5 = var9.Array;
            var4 = var5.from;
            var7 = var4.bind(var5)(var7);
            var5 = var7.map;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0007_ip = 17; continue _fun0007 }
 13:
                    var3 = {};
                    _fun0007_ip = 21; continue _fun0007;
 17:
                    var3 = _closure2_slot2;
 21:
                    var2 = arg1;
                    var2 = var3[var2];
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 42; continue _fun0007 }
 37:
                    var1 = var2.name;
 42:
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var4);
            var5 = var7.filter;
            var4 = 6;
            var4 = var11[var4];
            var4 = var8.bind(var10)(var4);
            var4 = var4.isNotNullish;
            var5 = var5.bind(var7)(var4);
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '@';
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var8 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 256; continue _fun0005 }
 243:
            var3 = var2.singleSelect;
            var2 = '';
            if(var3) { _fun0005_ip = 311; continue _fun0005 }
 256:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var4 = var11[var3];
            var4 = var7.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var11[var3];
            var3 = var7.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.JshhEh;
            var2 = var4.bind(var5)(var3);
 311:
            var3 = var13.length;
            var7 = 0;
            if(!(var7 === var3)) { _fun0005_ip = 334; continue _fun0005 }
 322:
            var3 = var8.length;
            if(!(!(var3 > var7))) { _fun0005_ip = 716; continue _fun0005 }
 334:
            var3 = var13.length;
            if(!(var3 > var7)) { _fun0005_ip = 355; continue _fun0005 }
 343:
            var3 = var8.length;
            if(!(var7 !== var3)) { _fun0005_ip = 582; continue _fun0005 }
 355:
            var3 = var13.length;
            var3 = var3 > var7;
            if(!var3) { _fun0005_ip = 376; continue _fun0005 }
 367:
            var4 = var8.length;
            var3 = var4 > var7;
 376:
            if(!var3) { _fun0005_ip = 845; continue _fun0005 }
 382:
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var5 = var12[var3];
            var5 = var4.bind(var10)(var5);
            var11 = var5.intl;
            var5 = var11.format;
            var3 = var12[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var4 = var3.WewRHB;
            var3 = {};
            var12 = var13.length;
            var3['channelCount'] = var12;
            var15 = var9.Math;
            var14 = var15.max;
            var12 = var13.length;
            var17 = 2;
            var12 = var12 - var17;
            var12 = var14.bind(var15)(var12, var7);
            var3['extraChannelCount'] = var12;
            var12 = var13[var7];
            var3['channel1'] = var12;
            var12 = 1;
            var14 = var13[var12];
            var3['channel2'] = var14;
            var3['itemHook'] = var6;
            var14 = var8.length;
            var3['roleCount'] = var14;
            var16 = var9.Math;
            var15 = var16.max;
            var14 = var8.length;
            var14 = var14 - var17;
            var14 = var15.bind(var16)(var14, var7);
            var3['extraRoleCount'] = var14;
            var14 = var8[var7];
            var3['role1'] = var14;
            var12 = var8[var12];
            var3['role2'] = var12;
            var2 = var5.bind(var11)(var4, var3);
            _fun0005_ip = 845; continue _fun0005;
 582:
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var5 = var12[var3];
            var5 = var4.bind(var10)(var5);
            var11 = var5.intl;
            var5 = var11.format;
            var3 = var12[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var4 = var3.ZKywGR;
            var3 = {};
            var12 = var13.length;
            var3['count'] = var12;
            var15 = var9.Math;
            var14 = var15.max;
            var16 = var13.length;
            var12 = 2;
            var12 = var16 - var12;
            var12 = var14.bind(var15)(var12, var7);
            var3['extraCount'] = var12;
            var12 = var13[var7];
            var3['channel1'] = var12;
            var12 = 1;
            var12 = var13[var12];
            var3['channel2'] = var12;
            var3['itemHook'] = var6;
            var2 = var5.bind(var11)(var4, var3);
            _fun0005_ip = 845; continue _fun0005;
 716:
            var3 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 4;
            var4 = var11[var1];
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var1 = var11[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.t;
            var3 = var1.vdtNYW;
            var1 = {};
            var10 = var8.length;
            var1['count'] = var10;
            var11 = var9.Math;
            var10 = var11.max;
            var12 = var8.length;
            var9 = 2;
            var9 = var12 - var9;
            var9 = var10.bind(var11)(var9, var7);
            var1['extraCount'] = var9;
            var7 = var8[var7];
            var1['role1'] = var7;
            var7 = 1;
            var7 = var8[var7];
            var1['role2'] = var7;
            var1['itemHook'] = var6;
            var2 = var4.bind(var5)(var3, var1);
 845:
            var1 = {};
            var1['helpText'] = var2;
            var2 = '';
            var1['helpTextAdditional'] = var2;
            return var1;
        }
    };
    var3['useCustomizeCommunityPromptHelpText'] = var2;
    return var1;
})();