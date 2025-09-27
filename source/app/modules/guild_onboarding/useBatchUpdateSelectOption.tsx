// app/modules/guild_onboarding/useBatchUpdateSelectOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function resetStoreState(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/useBatchUpdateSelectOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBatchUpdateSelectOption(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var8 = var5.bind(var1)(var4);
        var7 = var8.useStateFromStores;
        var1 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var1;
        var4 = new Array(1);
        var4[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot5;
                var3 = var4.getPendingResponseOptions;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0001_ip = 37; continue _fun0001 }
 33:
                var1 = _closure1_slot7;
 37:
                return var1;
            }
        };
        var1 = var7.bind(var8)(var5, var1, var4);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var7 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0002_ip = 49; continue _fun0002 }
 16:
                var3 = global;
                var5 = var3.Object;
                var4 = var5.keys;
                var3 = _closure2_slot1;
                var3 = var4.bind(var5)(var3);
                var4 = var3.length;
                var3 = 0;
                var2 = var3 !== var4;
 49:
                if(!var2) { _fun0002_ip = 92; continue _fun0002 }
 52:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.updateOnboardingResponses;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 92:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1, arg2, arg3) {
            var9 = arg1;
            var8 = arg2;
            var13 = arg3;
            var4 = _closure1_slot5;
            var1 = var4.getOnboardingResponses;
            var6 = _closure2_slot0;
            var7 = var1.bind(var4)(var6);
            var4 = function getRoles(arg1, arg2, arg3, arg4) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var1 = arg2;
                    var2 = arg3;
                    var _closure4_slot0 = var1;
                    var3 = arg4;
                    var _closure4_slot1 = var3;
                    var3 = var5.singleSelect;
                    if(!var3) { _fun0003_ip = 37; continue _fun0003 }
 31:
                    if(var2) { _fun0003_ip = 267; continue _fun0003 }
 37:
                    if(var2) { _fun0003_ip = 239; continue _fun0003 }
 43:
                    var6 = var5.options;
                    var3 = var6.filter;
                    var2 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var3.bind(var6)(var2);
                    var3 = var6.filter;
                    var2 = function(arg1) {
                        var1 = _closure4_slot0;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var12 = var3.bind(var6)(var2);
                    var3 = var6.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.roleIds;
                        return var1;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.flat;
                    var8 = var2.bind(var3)();
                    var7 = var8.filter;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var6 = var10[var3];
                    var9 = undefined;
                    var6 = var11.bind(var9)(var6);
                    var6 = var6.isNotNullish;
                    var8 = var7.bind(var8)(var6);
                    var7 = var12.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.roleIds;
                        return var1;
                    };
                    var7 = var7.bind(var12)(var6);
                    var6 = var7.flat;
                    var7 = var6.bind(var7)();
                    var6 = var7.filter;
                    var3 = var10[var3];
                    var3 = var11.bind(var9)(var3);
                    var3 = var3.isNotNullish;
                    var7 = var6.bind(var7)(var3);
                    var3 = new Array(0);
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var2 = var10[var2];
                    var6 = var6.bind(var9)(var2);
                    var2 = var6.difference;
                    var2 = var2.bind(var6)(var8, var7);
                    _fun0003_ip = 435; continue _fun0003;
 239:
                    var7 = var1.roleIds;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0003_ip = 255; continue _fun0003 }
 251:
                    var7 = new Array(0);
 255:
                    var2 = new Array(0);
                    var3 = var7;
                    _fun0003_ip = 435; continue _fun0003;
 267:
                    var6 = var5.options;
                    var5 = var6.find;
                    var4 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var5.bind(var6)(var4);
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var10 = 5;
                    var4 = var4[var10];
                    var5 = undefined;
                    var12 = var7.bind(var5)(var4);
                    var11 = var12.difference;
                    var7 = var1.roleIds;
                    var8 = null;
                    if(!(var8 == var7)) { _fun0003_ip = 337; continue _fun0003 }
 333:
                    var7 = new Array(0);
 337:
                    var13 = var8 == var9;
                    var4 = undefined;
                    if(var13) { _fun0003_ip = 352; continue _fun0003 }
 346:
                    var4 = var9.roleIds;
 352:
                    if(!(var8 == var4)) { _fun0003_ip = 360; continue _fun0003 }
 356:
                    var4 = new Array(0);
 360:
                    var4 = var11.bind(var12)(var7, var4);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.difference;
                    var10 = var8 == var9;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 404; continue _fun0003 }
 398:
                    var5 = var9.roleIds;
 404:
                    if(!(var8 == var5)) { _fun0003_ip = 412; continue _fun0003 }
 408:
                    var5 = new Array(0);
 412:
                    var1 = var1.roleIds;
                    if(!(var8 == var1)) { _fun0003_ip = 426; continue _fun0003 }
 422:
                    var1 = new Array(0);
 426:
                    var2 = var6.bind(var7)(var5, var1);
                    var3 = var4;
 435:
                    var1 = {};
                    var1['addedRoleIds'] = var3;
                    var1['removedRoleIds'] = var2;
                    return var1;
                }
            };
            var1 = undefined;
            var20 = undefined;
            var19 = var9;
            var18 = var8;
            var17 = var13;
            var16 = var7;
            var4 = var20[var4](var19, var18, var17, var16, var15);
            var5 = var4.addedRoleIds;
            var4 = var4.removedRoleIds;
            var10 = {};
            var10['guildId'] = var6;
            var10['prompt'] = var9;
            var10['option'] = var8;
            var10['selected'] = var13;
            var10['responses'] = var7;
            var7 = function getChannels(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var6 = var3.guildId;
                    var5 = var3.prompt;
                    var1 = var3.option;
                    var _closure4_slot0 = var1;
                    var2 = var3.selected;
                    var3 = var3.responses;
                    var _closure4_slot1 = var3;
                    var3 = var5.singleSelect;
                    if(!var3) { _fun0004_ip = 57; continue _fun0004 }
 51:
                    if(var2) { _fun0004_ip = 287; continue _fun0004 }
 57:
                    if(var2) { _fun0004_ip = 259; continue _fun0004 }
 63:
                    var7 = var5.options;
                    var3 = var7.filter;
                    var2 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var3.bind(var7)(var2);
                    var3 = var7.filter;
                    var2 = function(arg1) {
                        var1 = _closure4_slot0;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var13 = var3.bind(var7)(var2);
                    var3 = var7.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channelIds;
                        return var1;
                    };
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.flat;
                    var9 = var2.bind(var3)();
                    var8 = var9.filter;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 6;
                    var7 = var11[var3];
                    var10 = undefined;
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.isNotNullish;
                    var9 = var8.bind(var9)(var7);
                    var8 = var13.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channelIds;
                        return var1;
                    };
                    var8 = var8.bind(var13)(var7);
                    var7 = var8.flat;
                    var8 = var7.bind(var8)();
                    var7 = var8.filter;
                    var3 = var11[var3];
                    var3 = var12.bind(var10)(var3);
                    var3 = var3.isNotNullish;
                    var8 = var7.bind(var8)(var3);
                    var3 = new Array(0);
                    var7 = _closure1_slot1;
                    var2 = 5;
                    var2 = var11[var2];
                    var7 = var7.bind(var10)(var2);
                    var2 = var7.difference;
                    var2 = var2.bind(var7)(var9, var8);
                    _fun0004_ip = 455; continue _fun0004;
 259:
                    var8 = var1.channelIds;
                    var7 = null;
                    if(!(var7 == var8)) { _fun0004_ip = 275; continue _fun0004 }
 271:
                    var8 = new Array(0);
 275:
                    var2 = new Array(0);
                    var3 = var8;
                    _fun0004_ip = 455; continue _fun0004;
 287:
                    var7 = var5.options;
                    var5 = var7.find;
                    var4 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var5.bind(var7)(var4);
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var11 = 5;
                    var4 = var4[var11];
                    var5 = undefined;
                    var13 = var8.bind(var5)(var4);
                    var12 = var13.difference;
                    var8 = var1.channelIds;
                    var9 = null;
                    if(!(var9 == var8)) { _fun0004_ip = 357; continue _fun0004 }
 353:
                    var8 = new Array(0);
 357:
                    var14 = var9 == var10;
                    var4 = undefined;
                    if(var14) { _fun0004_ip = 372; continue _fun0004 }
 366:
                    var4 = var10.channelIds;
 372:
                    if(!(var9 == var4)) { _fun0004_ip = 380; continue _fun0004 }
 376:
                    var4 = new Array(0);
 380:
                    var4 = var12.bind(var13)(var8, var4);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.difference;
                    var11 = var9 == var10;
                    var5 = undefined;
                    if(var11) { _fun0004_ip = 424; continue _fun0004 }
 418:
                    var5 = var10.channelIds;
 424:
                    if(!(var9 == var5)) { _fun0004_ip = 432; continue _fun0004 }
 428:
                    var5 = new Array(0);
 432:
                    var1 = var1.channelIds;
                    if(!(var9 == var1)) { _fun0004_ip = 446; continue _fun0004 }
 442:
                    var1 = new Array(0);
 446:
                    var2 = var7.bind(var8)(var5, var1);
                    var3 = var4;
 455:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.hasNotSetUpChannelOptIn;
                    var4 = var4.bind(var5)(var6);
                    if(!var4) { _fun0004_ip = 540; continue _fun0004 }
 494:
                    var4 = var3.push;
                    var5 = _closure1_slot5;
                    var1 = var5.getDefaultChannelIds;
                    var16 = var1.bind(var5)(var6);
                    var1 = new Array(0);
                    var15 = 0;
                    var17 = var1;
                    var5 = arraySpread(var17, var16, var15);
                    var17 = var4;
                    var16 = var1;
                    var15 = var3;
                    var1 = apply(var17, var16, var15);
 540:
                    var1 = {};
                    var1['addedChannelIds'] = var3;
                    var1['removedChannelIds'] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var1)(var10);
            var15 = var7.addedChannelIds;
            var12 = var7.removedChannelIds;
            var11 = {};
            var14 = var15.reduce;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var6 = _closure1_slot4;
                var5 = var6.getChannelIdFlags;
                var2 = _closure2_slot0;
                var8 = var5.bind(var6)(var2, var3);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 10;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.setFlag;
                var4 = _closure1_slot6;
                var5 = var4.OPT_IN_ENABLED;
                var4 = true;
                var4 = var6.bind(var7)(var8, var5, var4);
                var2['flags'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var7 = {};
            var18 = var14.bind(var15)(var10, var7);
            var19 = var11;
            var7 = copyDataProperties(var19, var18);
            var10 = var12.reduce;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var6 = _closure1_slot4;
                var5 = var6.getChannelIdFlags;
                var2 = _closure2_slot0;
                var8 = var5.bind(var6)(var2, var3);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 10;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.setFlag;
                var4 = _closure1_slot6;
                var5 = var4.OPT_IN_ENABLED;
                var4 = false;
                var4 = var6.bind(var7)(var8, var5, var4);
                var2['flags'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var3 = {};
            var18 = var10.bind(var12)(var7, var3);
            var19 = var11;
            var3 = copyDataProperties(var19, var18);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var10 = var7[var2];
            var12 = var3.bind(var1)(var10);
            var10 = var12.selectOption;
            var18 = var9.id;
            var17 = var8.id;
            var20 = var12;
            var19 = var6;
            var16 = var13;
            var8 = var20[var10](var19, var18, var17, var16, var15);
            var8 = 4;
            var8 = var7[var8];
            var10 = var3.bind(var1)(var8);
            var9 = var10.dispatch;
            var8 = {};
            var12 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK';
            var8['type'] = var12;
            var8['guildId'] = var6;
            var8['overrides'] = var11;
            var8 = var9.bind(var10)(var8);
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateRolesLocal;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['handleSelectOption'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();