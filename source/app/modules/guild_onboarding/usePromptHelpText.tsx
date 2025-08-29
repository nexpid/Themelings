// app/modules/guild_onboarding/usePromptHelpText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            var3 = arg1;
            var1 = var3.guild;
            var2 = var3.prompt;
            var8 = var3.selectedRoleIds;
            var _closure2_slot0 = var8;
            var5 = var3.selectedChannelIds;
            var _closure2_slot1 = var5;
            var6 = var3.itemHook;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var3 = null;
            var7 = var3 == var1;
            var15 = undefined;
            if(var7) { _fun0002_ip = 64; continue _fun0002 }
 59:
            var15 = var1.id;
 64:
            _closure2_slot2 = var15;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 5;
            var11 = var10[var7];
            var14 = var9.bind(var5)(var11);
            var13 = var14.useStateFromStoresArray;
            var11 = _closure1_slot3;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 19; continue _fun0003 }
 13:
                    var1 = new Array(0);
                    _fun0003_ip = 46; continue _fun0003;
 19:
                    var5 = _closure1_slot3;
                    var4 = var5.getManyRoles;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 46:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8, var11);
            var7 = var10[var7];
            var11 = var9.bind(var5)(var7);
            var10 = var11.useStateFromStoresArray;
            var7 = _closure1_slot2;
            var9 = new Array(3);
            var9[0] = var7;
            var7 = _closure1_slot5;
            var9[1] = var7;
            var7 = _closure1_slot4;
            var9[2] = var7;
            var7 = function() {
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
            var15 = var10.bind(var11)(var9, var7);
            var7 = var8.map;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '@';
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            if(!(var3 != var2)) { _fun0002_ip = 225; continue _fun0002 }
 212:
            var2 = var2.singleSelect;
            var3 = '';
            if(var2) { _fun0002_ip = 280; continue _fun0002 }
 225:
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
 280:
            var2 = var15.length;
            var10 = 0;
            if(!(var10 === var2)) { _fun0002_ip = 303; continue _fun0002 }
 291:
            var2 = var4.length;
            if(!(!(var2 > var10))) { _fun0002_ip = 504; continue _fun0002 }
 303:
            var2 = var15.length;
            var8 = var2 > var10;
            var7 = '';
            var2 = var7;
            if(!var8) { _fun0002_ip = 518; continue _fun0002 }
 325:
            var9 = var15.length;
            var8 = var7;
            if(!(var10 !== var9)) { _fun0002_ip = 471; continue _fun0002 }
 340:
            var11 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 4;
            var12 = var14[var9];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var9 = var14[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.t;
            var11 = var9.Rj841d;
            var9 = {};
            var14 = var15.length;
            var9['count'] = var14;
            var14 = global;
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
 471:
            var9 = var4.length;
            var9 = var9 > var10;
            if(!var9) { _fun0002_ip = 496; continue _fun0002 }
 483:
            var10 = _closure1_slot6;
            var9 = true;
            var7 = var10.bind(var5)(var4, var6, var9);
 496:
            var2 = var7;
            var3 = var8;
            _fun0002_ip = 518; continue _fun0002;
 504:
            var1 = _closure1_slot6;
            var3 = var1.bind(var5)(var4, var6);
            var2 = '';
 518:
            var1 = {};
            var1['helpText'] = var3;
            var1['helpTextAdditional'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useCustomizeCommunityPromptHelpText(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = var3.guild;
            var2 = var3.prompt;
            var7 = var3.selectedRoleIds;
            var _closure2_slot0 = var7;
            var5 = var3.selectedChannelIds;
            var _closure2_slot1 = var5;
            var6 = var3.itemHook;
            var9 = undefined;
            var _closure2_slot2 = var9;
            var3 = null;
            var5 = var3 == var1;
            var15 = undefined;
            if(var5) { _fun0004_ip = 64; continue _fun0004 }
 59:
            var15 = var1.id;
 64:
            _closure2_slot2 = var15;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 5;
            var11 = var10[var5];
            var14 = var8.bind(var9)(var11);
            var13 = var14.useStateFromStoresArray;
            var11 = _closure1_slot3;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 19; continue _fun0005 }
 13:
                    var1 = new Array(0);
                    _fun0005_ip = 46; continue _fun0005;
 19:
                    var5 = _closure1_slot3;
                    var4 = var5.getManyRoles;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 46:
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var12, var7, var11);
            var5 = var10[var5];
            var11 = var8.bind(var9)(var5);
            var10 = var11.useStateFromStoresArray;
            var5 = _closure1_slot2;
            var8 = new Array(3);
            var8[0] = var5;
            var5 = _closure1_slot5;
            var8[1] = var5;
            var5 = _closure1_slot4;
            var8[2] = var5;
            var5 = function() {
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
            var12 = var10.bind(var11)(var8, var5);
            var5 = var7.map;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '@';
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var8 = var5.bind(var7)(var4);
            if(!(var3 != var2)) { _fun0004_ip = 225; continue _fun0004 }
 212:
            var3 = var2.singleSelect;
            var2 = '';
            if(var3) { _fun0004_ip = 280; continue _fun0004 }
 225:
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 4;
            var4 = var10[var3];
            var4 = var7.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var10[var3];
            var3 = var7.bind(var9)(var3);
            var3 = var3.t;
            var3 = var3.JshhEh;
            var2 = var4.bind(var5)(var3);
 280:
            var3 = var12.length;
            var7 = 0;
            if(!(var7 === var3)) { _fun0004_ip = 303; continue _fun0004 }
 291:
            var3 = var8.length;
            if(!(!(var3 > var7))) { _fun0004_ip = 689; continue _fun0004 }
 303:
            var3 = var12.length;
            if(!(var3 > var7)) { _fun0004_ip = 324; continue _fun0004 }
 312:
            var3 = var8.length;
            if(!(var7 !== var3)) { _fun0004_ip = 553; continue _fun0004 }
 324:
            var3 = var12.length;
            var3 = var3 > var7;
            if(!var3) { _fun0004_ip = 345; continue _fun0004 }
 336:
            var4 = var8.length;
            var3 = var4 > var7;
 345:
            if(!var3) { _fun0004_ip = 820; continue _fun0004 }
 351:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var5 = var11[var3];
            var5 = var4.bind(var9)(var5);
            var10 = var5.intl;
            var5 = var10.format;
            var3 = var11[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            var4 = var3.WewRHB;
            var3 = {};
            var11 = var12.length;
            var3['channelCount'] = var11;
            var13 = global;
            var15 = var13.Math;
            var14 = var15.max;
            var11 = var12.length;
            var16 = 2;
            var11 = var11 - var16;
            var11 = var14.bind(var15)(var11, var7);
            var3['extraChannelCount'] = var11;
            var11 = var12[var7];
            var3['channel1'] = var11;
            var11 = 1;
            var14 = var12[var11];
            var3['channel2'] = var14;
            var3['itemHook'] = var6;
            var14 = var8.length;
            var3['roleCount'] = var14;
            var15 = var13.Math;
            var14 = var15.max;
            var13 = var8.length;
            var13 = var13 - var16;
            var13 = var14.bind(var15)(var13, var7);
            var3['extraRoleCount'] = var13;
            var13 = var8[var7];
            var3['role1'] = var13;
            var11 = var8[var11];
            var3['role2'] = var11;
            var2 = var5.bind(var10)(var4, var3);
            _fun0004_ip = 820; continue _fun0004;
 553:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var5 = var11[var3];
            var5 = var4.bind(var9)(var5);
            var10 = var5.intl;
            var5 = var10.format;
            var3 = var11[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            var4 = var3.ZKywGR;
            var3 = {};
            var11 = var12.length;
            var3['count'] = var11;
            var11 = global;
            var14 = var11.Math;
            var13 = var14.max;
            var15 = var12.length;
            var11 = 2;
            var11 = var15 - var11;
            var11 = var13.bind(var14)(var11, var7);
            var3['extraCount'] = var11;
            var11 = var12[var7];
            var3['channel1'] = var11;
            var11 = 1;
            var11 = var12[var11];
            var3['channel2'] = var11;
            var3['itemHook'] = var6;
            var2 = var5.bind(var10)(var4, var3);
            _fun0004_ip = 820; continue _fun0004;
 689:
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 4;
            var4 = var10[var1];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var1 = var10[var1];
            var1 = var3.bind(var9)(var1);
            var1 = var1.t;
            var3 = var1.vdtNYW;
            var1 = {};
            var9 = var8.length;
            var1['count'] = var9;
            var9 = global;
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
 820:
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