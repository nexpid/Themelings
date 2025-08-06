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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getUsedTemplateChannelsForGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!(var7 != var4)) { _fun0004_ip = 111; continue _fun0004 }
 94:
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var3 = var2[var1];
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 33; continue _fun0005 }
 27:
                    var4 = var3.channelBenefits;
 33:
                    if(!(var2 != var4)) { _fun0005_ip = 56; continue _fun0005 }
 37:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var4 = _closure1_slot7;
                            var3 = var4.getChannel;
                            var2 = var1.ref_id;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 55; continue _fun0006 }
 32:
                            var3 = _closure2_slot1;
                            var2 = var3.add;
                            var1 = var1.ref_id;
                            var1 = var2.bind(var3)(var1);
 55:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
 111:
            var1 = new Array(0);
            var2 = _closure1_slot11;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'guild_id';
            if(var2) { _fun0004_ip = 201; continue _fun0004 }
 142:
            var11 = var3.value;
            var10 = _closure1_slot7;
            var2 = var10.getChannel;
            var10 = var2.bind(var10)(var11);
            if(!(var7 != var10)) { _fun0004_ip = 186; continue _fun0004 }
 165:
            var2 = var10.set;
            var10 = var2.bind(var10)(var4, var9);
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
 186:
            var10 = var5.bind(var6)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0004_ip = 142; continue _fun0004 }
 201:
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
 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 121; continue _fun0007 }
 12:
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
 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var1 = var1.ref_id;
                            var3 = var3.bind(var4)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0008_ip = 118; continue _fun0008 }
 32:
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
 118:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = var5.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0007_ip = 113; continue _fun0007 }
 67:
                    var2 = global;
                    var4 = var2.Promise;
                    var2 = var4.allSettled;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=90);
 88:
                    return var2;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 118; continue _fun0007 }
 96:
                    var4 = var2.forEach;
                    var3 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var5 = _closure4_slot3;
                            var4 = arg2;
                            var4 = var5[var4];
                            var4 = var4.id;
                            var _closure5_slot0 = var4;
                            var5 = var2.status;
                            var4 = 'fulfilled';
                            if(!(var4 !== var5)) { _fun0009_ip = 120; continue _fun0009 }
 43:
                            var4 = _closure4_slot1;
                            var5 = null;
                            if(!(var5 != var4)) { _fun0009_ip = 212; continue _fun0009 }
 56:
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
                            if(!(var4 !== var7)) { _fun0009_ip = 212; continue _fun0009 }
 91:
                            var4 = _closure4_slot1;
                            if(!(var5 != var4)) { _fun0009_ip = 212; continue _fun0009 }
 99:
                            var6 = _closure4_slot1;
                            var5 = var6.splice;
                            var4 = 1;
                            var4 = var5.bind(var6)(var7, var4);
                            _fun0009_ip = 212; continue _fun0009;
 120:
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
                            if(!(var2 != var3)) { _fun0009_ip = 212; continue _fun0009 }
 195:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    var2 = _closure5_slot2;
                                    var1 = arg1;
                                    var3 = var2[var1];
                                    var2 = null;
                                    var5 = var2 == var3;
                                    var1 = undefined;
                                    var4 = undefined;
                                    if(var5) { _fun0010_ip = 33; continue _fun0010 }
 27:
                                    var4 = var3.channelBenefits;
 33:
                                    if(!(var2 != var4)) { _fun0010_ip = 56; continue _fun0010 }
 37:
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                            var2 = arg1;
                                            var4 = var2.ref_id;
                                            var3 = _closure5_slot0;
                                            if(!(var4 === var3)) { _fun0011_ip = 35; continue _fun0011 }
 20:
                                            var1 = _closure5_slot1;
                                            var1 = var1.id;
                                            var2['ref_id'] = var1;
 35:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
 56:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
 212:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var2)(var3);
 113:
                    var3 = undefined;
                    return var3;
 118:
                    return var2;
 121:
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
 0:
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
            if(!(var3 != var2)) { _fun0012_ip = 112; continue _fun0012 }
 109:
            var1 = var2;
 112:
            return var1;
        }
    };
    var3['useChannelWithTemplateFallback'] = var4;
    var4 = function useSuggestedUnusedPrices(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
            if(!(var4 !== var2)) { _fun0013_ip = 342; continue _fun0013 }
 113:
            if(!(var4 !== var6)) { _fun0013_ip = 342; continue _fun0013 }
 120:
            var5 = var8.filter;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.soft_deleted;
                    var1 = !var1;
                    if(!var1) { _fun0014_ip = 24; continue _fun0014 }
 15:
                    var2 = var2.archived;
                    var1 = !var2;
 24:
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
            if(!(var4 !== var7)) { _fun0013_ip = 183; continue _fun0013 }
 166:
            var4 = var7.forEach;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = arg1;
                    var5 = var3[var1];
                    var3 = null;
                    var6 = var3 == var5;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0015_ip = 33; continue _fun0015 }
 27:
                    var4 = var5.priceTier;
 33:
                    if(!(var3 != var4)) { _fun0015_ip = 51; continue _fun0015 }
 37:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 51:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1);
 183:
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
            if(var1) { _fun0013_ip = 238; continue _fun0013 }
 234:
            var1 = null;
            return var1;
 238:
            var1 = var6.indexOf;
            var3 = var1.bind(var6)(var2);
            var1 = -1;
            if(!(var1 !== var3)) { _fun0013_ip = 338; continue _fun0013 }
 259:
            var1 = new Array(0);
            var2 = 1;
            var4 = var3 + var2;
            var2 = var6.length;
            var3 = 3;
            if(!(var4 < var2)) { _fun0013_ip = 334; continue _fun0013 }
 282:
            var7 = var5.has;
            var2 = var6[var4];
            var2 = var7.bind(var5)(var2);
            if(var2) { _fun0013_ip = 313; continue _fun0013 }
 299:
            var7 = var1.push;
            var2 = var6[var4];
            var2 = var7.bind(var1)(var2);
 313:
            var2 = var1.length;
            if(!(var3 !== var2)) { _fun0013_ip = 336; continue _fun0013 }
 322:
            var4 = var4 + 1;
            var2 = var6.length;
            if(var4 < var2) { _fun0013_ip = 282; continue _fun0013 }
 334:
            return var1;
 336:
            return var1;
 338:
            var1 = null;
            return var1;
 342:
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
 0:
            var4 = arg1;
            var2 = _closure1_slot10;
            var3 = var2[var4];
            var2 = null;
            if(!(var2 == var3)) { _fun0016_ip = 31; continue _fun0016 }
 20:
            var2 = _closure1_slot13;
            var1 = undefined;
            var3 = var2.bind(var1)(var4);
 31:
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
 0:
            var3 = _closure1_slot6;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.listings;
            var2 = arg1;
            var5 = var3[var2];
            var7 = null;
            var2 = var7 == var5;
            var4 = undefined;
            if(var2) { _fun0017_ip = 47; continue _fun0017 }
 41:
            var4 = var5.usedTemplate;
 47:
            if(!(var7 != var4)) { _fun0017_ip = 663; continue _fun0017 }
 54:
            var3 = _closure1_slot7;
            var2 = var3.getTemplateWithCategory;
            var1 = arg2;
            var2 = var2.bind(var3)(var1, var4);
            if(!(var7 != var2)) { _fun0017_ip = 647; continue _fun0017 }
 82:
            var1 = var2.listings;
            var4 = 0;
            var3 = var1[var4];
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 108; continue _fun0017 }
 103:
            var6 = var5.name;
 108:
            var1 = var3.name;
            if(!(var6 === var1)) { _fun0017_ip = 625; continue _fun0017 }
 120:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 134; continue _fun0017 }
 129:
            var6 = var5.description;
 134:
            var1 = var3.description;
            if(!(var6 === var1)) { _fun0017_ip = 625; continue _fun0017 }
 146:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 161; continue _fun0017 }
 155:
            var6 = var5.priceTier;
 161:
            var1 = var3.price_tier;
            if(!(var6 === var1)) { _fun0017_ip = 625; continue _fun0017 }
 174:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 189; continue _fun0017 }
 183:
            var6 = var5.image;
 189:
            var1 = var3.image;
            if(!(var6 === var1)) { _fun0017_ip = 625; continue _fun0017 }
 202:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 217; continue _fun0017 }
 211:
            var6 = var5.roleColor;
 217:
            var1 = var3.role_color;
            if(!(var6 === var1)) { _fun0017_ip = 625; continue _fun0017 }
 230:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 259; continue _fun0017 }
 239:
            var1 = var5.channelBenefits;
            var9 = var7 == var1;
            var6 = undefined;
            if(var9) { _fun0017_ip = 259; continue _fun0017 }
 254:
            var6 = var1.length;
 259:
            var1 = var3.channels;
            var1 = var1.length;
            if(!(var6 === var1)) { _fun0017_ip = 603; continue _fun0017 }
 277:
            var1 = var7 == var5;
            var6 = undefined;
            if(var1) { _fun0017_ip = 306; continue _fun0017 }
 286:
            var1 = var5.intangibleBenefits;
            var7 = var7 == var1;
            var6 = undefined;
            if(var7) { _fun0017_ip = 306; continue _fun0017 }
 301:
            var6 = var1.length;
 306:
            var1 = var3.additional_perks;
            var1 = var1.length;
            if(!(var6 === var1)) { _fun0017_ip = 603; continue _fun0017 }
 324:
            var1 = var3.channels;
            var1 = var1.length;
            var1 = var4 < var1;
            var6 = 0;
            if(!var1) { _fun0017_ip = 435; continue _fun0017 }
 344:
            var1 = var5.channelBenefits;
            var7 = var1[var6];
            var1 = var3.channels;
            var1 = var1[var6];
            var9 = var7.name;
            var8 = var1.name;
            if(!(var9 === var8)) { _fun0017_ip = 581; continue _fun0017 }
 381:
            var9 = var7.description;
            var8 = var1.description;
            if(!(var9 === var8)) { _fun0017_ip = 581; continue _fun0017 }
 398:
            var7 = var7.emoji_name;
            var1 = var1.emoji_name;
            if(!(var7 === var1)) { _fun0017_ip = 581; continue _fun0017 }
 417:
            var6 = var6 + 1;
            var1 = var3.channels;
            var1 = var1.length;
            if(var6 < var1) { _fun0017_ip = 344; continue _fun0017 }
 435:
            var1 = var3.additional_perks;
            var1 = var1.length;
            var1 = var4 < var1;
            var4 = 0;
            if(!var1) { _fun0017_ip = 537; continue _fun0017 }
 455:
            var1 = var5.intangibleBenefits;
            var6 = var1[var4];
            var1 = var3.additional_perks;
            var1 = var1[var4];
            var8 = var6.name;
            var7 = var1.name;
            if(!(var8 === var7)) { _fun0017_ip = 559; continue _fun0017 }
 489:
            var8 = var6.description;
            var7 = var1.description;
            if(!(var8 === var7)) { _fun0017_ip = 559; continue _fun0017 }
 503:
            var6 = var6.emoji_name;
            var1 = var1.emoji_name;
            if(!(var6 === var1)) { _fun0017_ip = 559; continue _fun0017 }
 519:
            var4 = var4 + 1;
            var1 = var3.additional_perks;
            var1 = var1.length;
            if(var4 < var1) { _fun0017_ip = 455; continue _fun0017 }
 537:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = false;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
 559:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
 581:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
 603:
            var1 = {};
            var3 = var2.category;
            var1['templateCategory'] = var3;
            var3 = true;
            var1['hasChangeFromTemplate'] = var3;
            return var1;
 625:
            var1 = {};
            var2 = var2.category;
            var1['templateCategory'] = var2;
            var2 = true;
            var1['hasChangeFromTemplate'] = var2;
            return var1;
 647:
            var1 = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return var1;
 663:
            var1 = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return var1;
        }
    };
    var3['getTemplateTierCreationAnalyticsContext'] = var4;
    var2 = function isEligibleForNewBadge(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.canManageGuildRoleSubscriptions;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0018_ip = 68; continue _fun0018 }
 42:
            var7 = var2.features;
            var6 = var7.has;
            var4 = _closure1_slot8;
            var4 = var4.ROLE_SUBSCRIPTIONS_ENABLED;
            var1 = var6.bind(var7)(var4);
 68:
            if(!var1) { _fun0018_ip = 101; continue _fun0018 }
 71:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.isUserEligibleForTierTemplates;
            var1 = var4.bind(var6)();
 101:
            if(!var1) { _fun0018_ip = 140; continue _fun0018 }
 104:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isGuildEligibleForTierTemplates;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
 140:
            return var1;
        }
    };
    var3['isEligibleForNewBadge'] = var2;
    return var1;
})();