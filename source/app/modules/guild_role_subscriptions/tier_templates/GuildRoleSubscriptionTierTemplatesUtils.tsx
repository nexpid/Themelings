// app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getUsedTemplateChannelsForGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.editStateIdsForGroup;
            var4 = var2[var9];
            var3 = _closure1_slot6;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.listings;
            var _closure2_slot0 = var2;
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var14 = var3;
            var2 = new var14[var2](var13);
            var3 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot1 = var3;
            var7 = null;
            if(!(var7 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var3 = var2[var1];
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 33; continue _fun0005 }
case 38:
                    var4 = var3.channelBenefits;
case 33:
                    if(!(var2 != var4)) { _fun0005_ip = 28; continue _fun0005 }
case 39:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure1_slot7;
                            var3 = var4.getChannel;
                            var2 = var1.ref_id;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 4; continue _fun0006 }
case 40:
                            var3 = _closure2_slot1;
                            var2 = var3.add;
                            var1 = var1.ref_id;
                            var1 = var2.bind(var3)(var1);
case 4:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
case 36:
            var1 = new Array(0);
            var2 = _closure1_slot11;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'guild_id';
            if(var2) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var11 = var3.value;
            var10 = _closure1_slot7;
            var2 = var10.getChannel;
            var10 = var2.bind(var10)(var11);
            if(!(var7 != var10)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = var10.set;
            var10 = var2.bind(var10)(var4, var9);
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
case 43:
            var10 = var5.bind(var6)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 41:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _createChannelsFromTemplateTierBenefits() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var6;
                    var5 = new Array(0);
                    var _closure4_slot2 = var5;
                    var2 = new Array(0);
                    var _closure4_slot3 = var2;
                    var4 = var6.forEach;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var1 = var1.ref_id;
                            var3 = var3.bind(var4)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0008_ip = 47; continue _fun0008 }
case 40:
                            var5 = _closure4_slot2;
                            var4 = var5.push;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var6 = var6[var2];
                            var2 = undefined;
                            var10 = var7.bind(var2)(var6);
                            var9 = var10.createRoleSubscriptionTemplateChannel;
                            var14 = _closure4_slot0;
                            var13 = var3.name;
                            var12 = var3.type;
                            var11 = var3.topic;
                            var15 = var10;
                            var2 = var15[var9](var14, var13, var12, var11, var10);
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure4_slot3;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
case 47:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = var5.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0007_ip = 48; continue _fun0007 }
case 30:
                    var2 = global;
                    var4 = var2.Promise;
                    var2 = var4.allSettled;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=90);
case 49:
                    return var2;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 11:
                    var4 = var2.forEach;
                    var3 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var5 = _closure4_slot3;
                            var4 = arg2;
                            var4 = var5[var4];
                            var4 = var4.id;
                            var _closure5_slot0 = var4;
                            var5 = var2.status;
                            var4 = 'fulfilled';
                            if(!(var4 !== var5)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                            var4 = _closure4_slot1;
                            var5 = null;
                            if(!(var5 != var4)) { _fun0009_ip = 53; continue _fun0009 }
case 28:
                            var7 = _closure4_slot1;
                            var6 = var7.findIndex;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.ref_id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var7 = var6.bind(var7)(var4);
                            var4 = -1;
                            if(!(var4 !== var7)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                            var4 = _closure4_slot1;
                            if(!(var5 != var4)) { _fun0009_ip = 53; continue _fun0009 }
case 55:
                            var6 = _closure4_slot1;
                            var5 = var6.splice;
                            var4 = 1;
                            var4 = var5.bind(var6)(var7, var4);
                            _fun0009_ip = 53; continue _fun0009;
case 51:
                            var2 = var2.value;
                            var2 = var2.body;
                            var _closure5_slot1 = var2;
                            var5 = _closure1_slot6;
                            var4 = var5.getState;
                            var4 = var4.bind(var5)();
                            var4 = var4.editStateIdsForGroup;
                            var3 = _closure4_slot0;
                            var3 = var4[var3];
                            var4 = _closure1_slot6;
                            var2 = var4.getState;
                            var2 = var2.bind(var4)();
                            var2 = var2.listings;
                            var _closure5_slot2 = var2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0009_ip = 53; continue _fun0009 }
case 20:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var2 = _closure5_slot2;
                                    var1 = arg1;
                                    var3 = var2[var1];
                                    var2 = null;
                                    var5 = var2 == var3;
                                    var1 = undefined;
                                    var4 = undefined;
                                    if(var5) { _fun0010_ip = 33; continue _fun0010 }
case 38:
                                    var4 = var3.channelBenefits;
case 33:
                                    if(!(var2 != var4)) { _fun0010_ip = 28; continue _fun0010 }
case 39:
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                            var2 = arg1;
                                            var4 = var2.ref_id;
                                            var3 = _closure5_slot0;
                                            if(!(var4 === var3)) { _fun0011_ip = 56; continue _fun0011 }
case 29:
                                            var1 = _closure5_slot1;
                                            var1 = var1.id;
                                            var2['ref_id'] = var1;
case 56:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
case 28:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var2)(var3);
case 48:
                    var3 = undefined;
                    return var3;
case 47:
                    return var2;
case 45:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEditStateStore;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.shim;
    var4 = var4.bind(var7)();
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChannelWithTemplateFallback(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var2 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var8, var2);
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var3 = null;
            if(!(var3 != var2)) { _fun0012_ip = 57; continue _fun0012 }
case 58:
            var1 = var2;
case 57:
            return var1;
        }
    };
    var3['useChannelWithTemplateFallback'] = var4;
    var4 = function useSuggestedUnusedPrices(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg2;
            var2 = arg3;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var9 = var7.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getSubscriptionListingsForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7, var5);
            var7 = _closure1_slot6;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.editStateIdsForGroup;
                var1 = _closure2_slot0;
                var1 = var2[var1];
                return var1;
            };
            var7 = var7.bind(var4)(var5);
            var5 = _closure1_slot6;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.listings;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var _closure2_slot1 = var3;
            if(!(var4 !== var2)) { _fun0013_ip = 59; continue _fun0013 }
case 48:
            if(!(var4 !== var6)) { _fun0013_ip = 59; continue _fun0013 }
case 51:
            var5 = var8.filter;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.soft_deleted;
                    var1 = !var1;
                    if(!var1) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                    var2 = var2.archived;
                    var1 = !var2;
case 60:
                    return var1;
                }
            };
            var8 = var5.bind(var8)(var3);
            var5 = var8.map;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.subscription_plans;
                var1 = 0;
                var1 = var2[var1];
                var1 = var1.price;
                return var1;
            };
            var5 = var5.bind(var8)(var3);
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            if(!(var4 !== var7)) { _fun0013_ip = 62; continue _fun0013 }
case 63:
            var4 = var7.forEach;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = arg1;
                    var5 = var3[var1];
                    var3 = null;
                    var6 = var3 == var5;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0015_ip = 33; continue _fun0015 }
case 38:
                    var4 = var5.priceTier;
case 33:
                    if(!(var3 != var4)) { _fun0015_ip = 64; continue _fun0015 }
case 39:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 64:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1);
case 62:
            var1 = global;
            var4 = var1.Set;
            var1 = var3.concat;
            var11 = var1.bind(var3)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var1 = new var12[var4](var11, var10);
            var5 = var1 instanceof Object ? var1 : var3;
            var1 = var5.has;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0013_ip = 65; continue _fun0013 }
case 21:
            var1 = null;
            return var1;
case 65:
            var1 = var6.indexOf;
            var3 = var1.bind(var6)(var2);
            var1 = -1;
            if(!(var1 !== var3)) { _fun0013_ip = 66; continue _fun0013 }
case 67:
            var1 = new Array(0);
            var2 = 1;
            var4 = var3 + var2;
            var2 = var6.length;
            var3 = 3;
            if(!(var4 < var2)) { _fun0013_ip = 68; continue _fun0013 }
case 69:
            var7 = var5.has;
            var2 = var6[var4];
            var2 = var7.bind(var5)(var2);
            if(var2) { _fun0013_ip = 70; continue _fun0013 }
case 71:
            var7 = var1.push;
            var2 = var6[var4];
            var2 = var7.bind(var1)(var2);
case 70:
            var2 = var1.length;
            if(!(var3 !== var2)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var4 = var4 + 1;
            var2 = var6.length;
            if(var4 < var2) { _fun0013_ip = 69; continue _fun0013 }
case 68:
            return var1;
case 72:
            return var1;
case 66:
            var1 = null;
            return var1;
case 59:
            var1 = null;
            return var1;
        }
    };
    var3['useSuggestedUnusedPrices'] = var4;
    var4 = function announceCreateTemplateChannels(arg1) {
        var3 = arg1;
        var4 = _closure1_slot13;
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot10;
        var2[var3] = var4;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var5 = arg1;
            var4 = var5.set;
            var2 = _closure1_slot9;
            var3 = var2.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL;
            var2 = 'flags';
            var5 = var4.bind(var5)(var2, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'CHANNEL_CREATE';
            var2['type'] = var6;
            var2['channel'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['announceCreateTemplateChannels'] = var4;
    var4 = function announceDeleteTemplateChannels(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot10;
            var3 = var2[var4];
            var2 = null;
            if(!(var2 == var3)) { _fun0016_ip = 74; continue _fun0016 }
case 29:
            var2 = _closure1_slot13;
            var1 = undefined;
            var3 = var2.bind(var1)(var4);
case 74:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CHANNEL_DELETE';
                var2['type'] = var5;
                var5 = arg1;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['announceDeleteTemplateChannels'] = var4;
    var4 = function createChannelsFromTemplateTierBenefits() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createChannelsFromTemplateTierBenefits'] = var4;
    var4 = function getTemplateTierCreationAnalyticsContext(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot6;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.listings;
            var2 = arg1;
            var5 = var3[var2];
            var7 = null;
            var2 = var7 == var5;
            var4 = undefined;
            if(var2) { _fun0017_ip = 75; continue _fun0017 }
case 76:
            var4 = var5.usedTemplate;
case 75:
            if(!(var7 != var4)) { _fun0017_ip = 77; continue _fun0017 }
case 78:
            var3 = _closure1_slot7;
            var2 = var3.getTemplateWithCategory;
            var1 = arg2;
            var2 = var2.bind(var3)(var1, var4);
            if(!(var7 != var2)) { _fun0017_ip = 79; continue _fun0017 }
case 80:
            var1 = var2.listings;
            var4 = 0;
            var3 = var1[var4];
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 81; continue _fun0017 }
case 82:
            var6 = var5.name;
case 81:
            var1 = var3.name;
            if(!(var6 === var1)) { _fun0017_ip = 83; continue _fun0017 }
case 51:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var6 = var5.description;
case 84:
            var1 = var3.description;
            if(!(var6 === var1)) { _fun0017_ip = 83; continue _fun0017 }
case 86:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 87; continue _fun0017 }
case 88:
            var6 = var5.priceTier;
case 87:
            var1 = var3.price_tier;
            if(!(var6 === var1)) { _fun0017_ip = 83; continue _fun0017 }
case 89:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 90; continue _fun0017 }
case 62:
            var6 = var5.image;
case 90:
            var1 = var3.image;
            if(!(var6 === var1)) { _fun0017_ip = 83; continue _fun0017 }
case 91:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 92; continue _fun0017 }
case 93:
            var6 = var5.roleColor;
case 92:
            var1 = var3.role_color;
            if(!(var6 === var1)) { _fun0017_ip = 83; continue _fun0017 }
case 94:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 67; continue _fun0017 }
case 95:
            var1 = var5.channelBenefits;
            var9 = var7 == var1;
            var6 = undefined;
            if(var9) { _fun0017_ip = 67; continue _fun0017 }
case 96:
            var6 = var1.length;
case 67:
            var1 = var3.channels;
            var1 = var1.length;
            if(!(var6 === var1)) { _fun0017_ip = 97; continue _fun0017 }
case 98:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 99; continue _fun0017 }
case 100:
            var1 = var5.intangibleBenefits;
            var7 = var7 == var1;
            var6 = undefined;
            if(var7) { _fun0017_ip = 99; continue _fun0017 }
case 101:
            var6 = var1.length;
case 99:
            var1 = var3.additional_perks;
            var1 = var1.length;
            if(!(var6 === var1)) { _fun0017_ip = 97; continue _fun0017 }
case 102:
            var1 = var3.channels;
            var1 = var1.length;
            var1 = var4 < var1;
            var6 = 0;
            if(!var1) { _fun0017_ip = 103; continue _fun0017 }
case 104:
            var1 = var5.channelBenefits;
            var7 = var1[var6];
            var1 = var3.channels;
            var1 = var1[var6];
            var9 = var7.name;
            var8 = var1.name;
            if(!(var9 === var8)) { _fun0017_ip = 105; continue _fun0017 }
case 106:
            var9 = var7.description;
            var8 = var1.description;
            if(!(var9 === var8)) { _fun0017_ip = 105; continue _fun0017 }
case 107:
            var7 = var7.emoji_name;
            var1 = var1.emoji_name;
            if(!(var7 === var1)) { _fun0017_ip = 105; continue _fun0017 }
case 108:
            var6 = var6 + 1;
            var1 = var3.channels;
            var1 = var1.length;
            if(var6 < var1) { _fun0017_ip = 104; continue _fun0017 }
case 103:
            var1 = var3.additional_perks;
            var1 = var1.length;
            var1 = var4 < var1;
            var4 = 0;
            if(!var1) { _fun0017_ip = 109; continue _fun0017 }
case 110:
            var1 = var5.intangibleBenefits;
            var6 = var1[var4];
            var1 = var3.additional_perks;
            var1 = var1[var4];
            var8 = var6.name;
            var7 = var1.name;
            if(!(var8 === var7)) { _fun0017_ip = 111; continue _fun0017 }
case 112:
            var8 = var6.description;
            var7 = var1.description;
            if(!(var8 === var7)) { _fun0017_ip = 111; continue _fun0017 }
case 113:
            var6 = var6.emoji_name;
            var1 = var1.emoji_name;
            if(!(var6 === var1)) { _fun0017_ip = 111; continue _fun0017 }
case 114:
            var4 = var4 + 1;
            var1 = var3.additional_perks;
            var1 = var1.length;
            if(var4 < var1) { _fun0017_ip = 110; continue _fun0017 }
case 109:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = false;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
case 111:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
case 105:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
case 97:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
case 83:
            var1 = {};
            var2 = var2.category;
            var1['templateCategory'] = var2;
            var2 = true;
            var1['hasChangeFromTemplate'] = var2;
            return var1;
case 79:
            var1 = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return var1;
case 77:
            var1 = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return var1;
        }
    };
    var3['getTemplateTierCreationAnalyticsContext'] = var4;
    var2 = function isEligibleForNewBadge(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.canManageGuildRoleSubscriptions;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0018_ip = 115; continue _fun0018 }
case 116:
            var7 = var2.features;
            var6 = var7.has;
            var4 = _closure1_slot8;
            var4 = var4.ROLE_SUBSCRIPTIONS_ENABLED;
            var1 = var6.bind(var7)(var4);
case 115:
            if(!var1) { _fun0018_ip = 117; continue _fun0018 }
case 118:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.isUserEligibleForTierTemplates;
            var1 = var4.bind(var6)();
case 117:
            if(!var1) { _fun0018_ip = 119; continue _fun0018 }
case 120:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isGuildEligibleForTierTemplates;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
case 119:
            return var1;
        }
    };
    var3['isEligibleForNewBadge'] = var2;
    return var1;
})();