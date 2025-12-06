// app/modules/icymi/ICYMIUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var6 = function generateHydrationId(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'hydration-';
        var3 = arg1;
        var2 = '-';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot18 = var6;
    var4 = function hydrateItems() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = function _hydrateItems() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var5 = _closure1_slot11;
                    var2 = var5.getHydratedItems;
                    var2 = var2.bind(var5)();
                    _closure4_slot0 = var2;
                    var2 = var4.slice;
                    var11 = var2.bind(var4)(var7, var6);
                    var2 = var11.length;
                    var14 = 0;
                    if(!(var14 !== var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var10 = var5[var2];
                    var12 = var4.bind(var3)(var10);
                    var10 = var12.loadHydratedAttempt;
                    var9 = _closure1_slot18;
                    var9 = var9.bind(var3)(var7, var6);
                    var9 = var10.bind(var12)(var9);
                    var10 = var11.filter;
                    var9 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var2 = var2[var1];
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var16 = var10.bind(var11)(var9);
                    var10 = var16.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.MESSAGE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var10.bind(var16)(var9);
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.channel_id;
                        var1['channel_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.message_id;
                        var1['message_id'] = var2;
                        return var1;
                    };
                    var18 = var10.bind(var11)(var9);
                    var10 = var16.map;
                    var9 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = arg1;
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.MESSAGE;
                            if(!(var3 !== var1)) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                            var1 = new Array(0);
                            return var1;
case 4:
                            var1 = new Array(0);
                            var3 = var4.data;
                            var6 = var3.message_context;
                            var3 = null;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                            var5 = var6.reply_message_id;
case 40:
                            if(!(var3 != var5)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                            var6 = var1.push;
                            var5 = {};
                            var7 = var4.data;
                            var7 = var7.channel_id;
                            var5['channel_id'] = var7;
                            var7 = var4.data;
                            var7 = var7.message_context;
                            var7 = var7.reply_message_id;
                            var5['message_id'] = var7;
                            var5 = var6.bind(var1)(var5);
case 42:
                            var5 = var4.data;
                            var6 = var5.message_context;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                            var5 = var6.before_message_id;
case 44:
                            if(!(var3 != var5)) { _fun0005_ip = 46; continue _fun0005 }
case 17:
                            var6 = var1.push;
                            var5 = {};
                            var7 = var4.data;
                            var7 = var7.channel_id;
                            var5['channel_id'] = var7;
                            var7 = var4.data;
                            var7 = var7.message_context;
                            var7 = var7.before_message_id;
                            var5['message_id'] = var7;
                            var5 = var6.bind(var1)(var5);
case 46:
                            var5 = var4.data;
                            var5 = var5.message_context;
                            var6 = var3 == var5;
                            var2 = undefined;
                            if(var6) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                            var2 = var5.after_message_id;
case 47:
                            if(!(var3 != var2)) { _fun0005_ip = 49; continue _fun0005 }
case 23:
                            var3 = var1.push;
                            var2 = {};
                            var5 = var4.data;
                            var5 = var5.channel_id;
                            var2['channel_id'] = var5;
                            var4 = var4.data;
                            var4 = var4.message_context;
                            var4 = var4.after_message_id;
                            var2['message_id'] = var4;
                            var2 = var3.bind(var1)(var2);
case 49:
                            return var1;
                        }
                    };
                    var10 = var10.bind(var16)(var9);
                    var9 = var10.flat;
                    var11 = var9.bind(var10)();
                    var10 = var11.filter;
                    var9 = global;
                    var9 = var9.Boolean;
                    var13 = var10.bind(var11)(var9);
                    var10 = var16.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.SUMMARY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var10.bind(var16)(var9);
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.guild_id;
                        var1['guild_id'] = var3;
                        var3 = var2.data;
                        var3 = var3.channel_id;
                        var1['channel_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.summary_id;
                        var1['summary_id'] = var2;
                        return var1;
                    };
                    var10 = var10.bind(var11)(var9);
                    var11 = var16.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.ACTIVITY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var15 = var11.bind(var16)(var9);
                    var11 = var15.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.user_id;
                        var1['user_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.content_id;
                        var1['content_id'] = var2;
                        return var1;
                    };
                    var9 = var11.bind(var15)(var9);
                    var15 = var16.filter;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.GENERATED_CANDIDATE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var15 = var15.bind(var16)(var11);
                    var11 = var15.map;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.content_id;
                        var1['content_id'] = var3;
                        var3 = var2.data;
                        var3 = var3.guild_id;
                        var1['guild_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.channel_id;
                        var1['channel_id'] = var2;
                        return var1;
                    };
                    var8 = var11.bind(var15)(var8);
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.fetchHydrated;
                    var2 = {};
                    var11 = new Array(0);
                    var19 = var11;
                    var17 = 0;
                    var17 = arraySpread(var19, var18, var17);
                    var19 = var11;
                    var18 = var13;
                    var12 = arraySpread(var19, var18, var17);
                    var2['messageItems'] = var11;
                    var2['summaryItems'] = var10;
                    var2['activityItems'] = var9;
                    var2['generatedCandidateItems'] = var8;
                    var2 = var4.bind(var5)(var7, var6, var2);
                    SaveGenerator(address=383);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 52; continue _fun0004 }
case 38:
                    return var3;
case 52:
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _hydrateNextPage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var4 = _closure1_slot11;
                    var3 = var4.getUnreadDisplayItems;
                    var10 = var3.bind(var4)();
                    var4 = _closure1_slot11;
                    var3 = var4.getReadDisplayItems;
                    var7 = var3.bind(var4)();
                    var4 = _closure1_slot11;
                    var3 = var4.getNextIndexToHydrate;
                    var6 = var3.bind(var4)();
                    var5 = _closure1_slot19;
                    var4 = new Array(0);
                    var9 = 0;
                    var11 = var4;
                    var9 = arraySpread(var11, var10, var9);
                    var11 = var4;
                    var10 = var7;
                    var3 = arraySpread(var11, var10, var9);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.ICYMI_PAGE_SIZE;
                    var2 = var6 + var2;
                    var2 = var5.bind(var3)(var4, var6, var2);
                    SaveGenerator(address=125);
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    return var3;
case 57:
                    return var2;
case 53:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function countReactions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = var3.reactions;
            var6 = null;
            var4 = var6 != var1;
            var5 = 0;
            var1 = 0;
            if(!var4) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var4 = var3.reactions;
            if(!(var6 == var4)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var6 = new Array(0);
            _fun0007_ip = 2; continue _fun0007;
case 61:
            var6 = var3.reactions;
case 2:
            var4 = var6.map;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.count_details;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = 0;
                    if(var2) { _fun0008_ip = 63; continue _fun0008 }
case 29:
                    var2 = var4.count_details;
                    var6 = var2.burst;
                    var7 = var5 != var6;
                    var2 = 0;
                    if(!var7) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var2 = var6;
case 64:
                    var4 = var4.count_details;
                    var4 = var4.normal;
                    var5 = var5 != var4;
                    var3 = 0;
                    if(!var5) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var3 = var4;
case 66:
                    var1 = var2 + var3;
case 63:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var3);
            var3 = var4.length;
            var3 = var3 > var5;
            var1 = 0;
            if(!var3) { _fun0007_ip = 59; continue _fun0007 }
case 68:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 59:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function processMessages(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var11 = arg2;
            var10 = arg3;
            var1 = new Array(0);
            var3 = _closure1_slot16;
            var8 = undefined;
            var2 = arg1;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = null;
            var5 = 13;
            var4 = var3;
            var3 = null;
            if(var2) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var2 = var4.value;
            var13 = var2.author;
            var12 = var3;
            if(!(var6 != var13)) { _fun0009_ip = 71; continue _fun0009 }
case 35:
            if(!var11) { _fun0009_ip = 43; continue _fun0009 }
case 39:
            var13 = var2.author;
            var13 = var13.id;
            var12 = var3;
            if(!(var12 !== var13)) { _fun0009_ip = 71; continue _fun0009 }
case 43:
            var13 = _closure1_slot6;
            var13 = var2 instanceof var13;
            var14 = var2;
            if(var13) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var15 = var15.bind(var8)(var13);
            var13 = var15.createMessageRecord;
            var14 = var13.bind(var15)(var2);
case 72:
            var13 = var1.push;
            var13 = var13.bind(var1)(var14);
            var2 = var2.author;
            var13 = var2.id;
            var12 = var13;
            if(!(var6 != var10)) { _fun0009_ip = 71; continue _fun0009 }
case 74:
            var2 = var1.length;
            var12 = var13;
            if(!(!(var2 >= var10))) { _fun0009_ip = 69; continue _fun0009 }
case 71:
            var13 = var7.bind(var8)();
            var2 = var13.done;
            var3 = var12;
            var4 = var13;
            if(!var2) { _fun0009_ip = 70; continue _fun0009 }
case 69:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _regenerateFeedAndClearReadStates() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var8 = undefined;
                    var _closure4_slot1 = var8;
                    var _closure4_slot2 = var8;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 23;
                    var3 = var2[var5];
                    var6 = var6.bind(var8)(var3);
                    var3 = 22;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var8)(var3, var2);
                    SaveGenerator(address=74);
case 63:
                    return var2;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 78; continue _fun0010 }
case 79:
                    var3 = var2.ack;
                    _closure4_slot1 = var3;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = 24;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var3 = var6.bind(var8)(var5, var3);
                    SaveGenerator(address=132);
case 80:
                    return var3;
case 81:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var5 = var3.AnalyticsObjectTypes;
                    _closure4_slot2 = var5;
                    var6 = _closure1_slot11;
                    var5 = var6.getDehydratedItems;
                    var6 = var5.bind(var6)();
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.type;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.ICYMIItemTypes;
                            var4 = var4.MESSAGE;
                            var4 = var5 === var4;
                            if(!var4) { _fun0011_ip = 68; continue _fun0011 }
case 70:
                            var5 = var2.data;
                            var6 = var5.channel_type;
                            var5 = _closure1_slot13;
                            var5 = var5.GUILD_ANNOUNCEMENT;
                            var4 = var6 === var5;
case 68:
                            if(!var4) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 14;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.compare;
                            var9 = _closure1_slot10;
                            var6 = var9.ackMessageId;
                            var5 = var2.data;
                            var5 = var5.channel_id;
                            var6 = var6.bind(var9)(var5);
                            var5 = var2.data;
                            var5 = var5.message_id;
                            var6 = var7.bind(var8)(var6, var5);
                            var5 = 0;
                            var4 = var6 >= var5;
case 84:
                            if(!var4) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                            var6 = _closure4_slot1;
                            var4 = var2.data;
                            var5 = var4.channel_id;
                            var4 = {};
                            var8 = _closure4_slot0;
                            var4['object'] = var8;
                            var7 = _closure4_slot2;
                            var7 = var7.ACK_SEMI_AUTOMATIC;
                            var4['objectType'] = var7;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 14;
                            var3 = var8[var3];
                            var7 = var7.bind(var1)(var3);
                            var3 = var7.atPreviousMillisecond;
                            var2 = var2.data;
                            var2 = var2.message_id;
                            var10 = var3.bind(var7)(var2);
                            var15 = undefined;
                            var14 = var5;
                            var13 = var4;
                            var12 = true;
                            var11 = true;
                            var2 = var15[var6](var14, var13, var12, var11, var10, var9);
case 86:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var11 = 12;
                    var4 = var4[var11];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.clearReadStates;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=216);
case 88:
                    return var4;
case 89:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.fetchDehydrated;
                    var5 = {'isReloading': true, 'forceRefresh': true};
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=271);
case 92:
                    return var5;
case 93:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.reloadICYMITab;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=308);
case 96:
                    return var6;
case 97:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.getGuildChannelScores;
                    var7 = var7.bind(var10)();
                    SaveGenerator(address=345);
case 100:
                    return var7;
case 6:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0010_ip = 50; continue _fun0010 }
case 101:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.getRecommendedGuilds;
                    var9 = var9.bind(var10)();
                    return var8;
case 50:
                    return var7;
case 98:
                    return var6;
case 94:
                    return var5;
case 90:
                    return var4;
case 82:
                    return var3;
case 78:
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var14 = 0;
    var5 = var9[var14];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var9[var13];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var12 = 2;
    var5 = var9[var12];
    var5 = var8.bind(var1)(var5);
    var5 = var5.ThreadChannelRecord;
    var _closure1_slot5 = var5;
    var11 = 3;
    var5 = var9[var11];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var10 = 4;
    var5 = var9[var10];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var7 = var5.ChannelTypes;
    var _closure1_slot13 = var7;
    var5 = var5.GuildNSFWContentLevel;
    var _closure1_slot14 = var5;
    var5 = {};
    var5['UNKNOWN'] = var14;
    var7 = 'UNKNOWN';
    var5[var14] = var7;
    var5['DEFAULT'] = var13;
    var7 = 'DEFAULT';
    var5[var13] = var7;
    var5['MORE'] = var12;
    var7 = 'MORE';
    var5[var12] = var7;
    var5['LESS'] = var11;
    var7 = 'LESS';
    var5[var11] = var7;
    var5['MUTED'] = var10;
    var7 = 'MUTED';
    var5[var10] = var7;
    var _closure1_slot15 = var5;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/icymi/ICYMIUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['generateHydrationId'] = var6;
    var3['ICYMICustomScore'] = var5;
    var5 = function isGuildItem(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 11;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.MESSAGE;
            var1 = var4 === var1;
            if(var1) { _fun0012_ip = 102; continue _fun0012 }
case 70:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.SUMMARY;
            var1 = var7 === var4;
case 102:
            if(var1) { _fun0012_ip = 58; continue _fun0012 }
case 103:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.GENERATED_CANDIDATE;
            var1 = var7 === var4;
case 58:
            if(var1) { _fun0012_ip = 104; continue _fun0012 }
case 57:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.GUILD_EVENT;
            var1 = var3 === var2;
case 104:
            return var1;
        }
    };
    var3['isGuildItem'] = var5;
    var5 = function isChannelCustomScoreEligible(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var2 = var4.type;
            var1 = _closure1_slot13;
            var1 = var1.GUILD_FORUM;
            var1 = var2 === var1;
            if(var1) { _fun0013_ip = 63; continue _fun0013 }
case 34:
            var5 = var4.type;
            var2 = _closure1_slot13;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var5 === var2;
            if(var2) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var4 = var4.type;
            var3 = _closure1_slot13;
            var3 = var3.GUILD_TEXT;
            var2 = var4 === var3;
case 105:
            var1 = var2;
case 63:
            return var1;
        }
    };
    var3['isChannelCustomScoreEligible'] = var5;
    var5 = function numberToCustomScore(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = -1.5;
            if(!(!(var2 < var1))) { _fun0014_ip = 63; continue _fun0014 }
case 107:
            var1 = 0;
            if(!(!(var2 < var1))) { _fun0014_ip = 108; continue _fun0014 }
case 31:
            if(!(!(var2 > var1))) { _fun0014_ip = 109; continue _fun0014 }
case 110:
            var1 = _closure1_slot15;
            var1 = var1.DEFAULT;
            _fun0014_ip = 4; continue _fun0014;
case 109:
            var2 = _closure1_slot15;
            var1 = var2.MORE;
case 4:
            _fun0014_ip = 35; continue _fun0014;
case 108:
            var2 = _closure1_slot15;
            var1 = var2.LESS;
case 35:
            _fun0014_ip = 111; continue _fun0014;
case 63:
            var2 = _closure1_slot15;
            var1 = var2.MUTED;
case 111:
            return var1;
        }
    };
    var3['numberToCustomScore'] = var5;
    var5 = function customScoreToNumber(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            var3 = var3.MORE;
            if(!(var3 !== var2)) { _fun0015_ip = 66; continue _fun0015 }
case 29:
            var3 = _closure1_slot15;
            var3 = var3.LESS;
            if(!(var3 !== var2)) { _fun0015_ip = 112; continue _fun0015 }
case 62:
            var1 = _closure1_slot15;
            var1 = var1.MUTED;
            if(!(var1 !== var2)) { _fun0015_ip = 70; continue _fun0015 }
case 113:
            var1 = 0;
            return var1;
case 70:
            var1 = -2;
            return var1;
case 112:
            var1 = -1;
            return var1;
case 66:
            var1 = 1;
            return var1;
        }
    };
    var3['customScoreToNumber'] = var5;
    var3['hydrateItems'] = var4;
    var4 = function hydrateNextPage() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['hydrateNextPage'] = var4;
    var4 = function createGravitySummaryFromServer(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var4 = var2.messages;
            var5 = new Array(0);
            var3 = _closure1_slot16;
            var8 = undefined;
            var17 = var3.bind(var8)(var4);
            var4 = var17.bind(var8)();
            var3 = var4.done;
            var16 = 0;
            var15 = null;
            var14 = 5;
            var13 = var4;
            var12 = 0;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var7 = undefined;
            var6 = undefined;
            var4 = 0;
            if(var3) { _fun0016_ip = 114; continue _fun0016 }
case 115:
            var27 = var13.value;
            var3 = var27.reactions;
            var18 = var12;
            var23 = var11;
            var22 = var10;
            var21 = var9;
            var20 = var7;
            var19 = var6;
            if(!(var15 != var3)) { _fun0016_ip = 116; continue _fun0016 }
case 117:
            var26 = var5.length;
            var25 = var9;
            var24 = var7;
            var3 = var6;
            if(!(var26 < var14)) { _fun0016_ip = 118; continue _fun0016 }
case 55:
            var28 = _closure1_slot16;
            var26 = var27.reactions;
            var31 = var28.bind(var8)(var26);
            var32 = var31.bind(var8)();
            var26 = var32.done;
            var30 = var32;
            var29 = var9;
            var28 = var7;
            var11 = var30;
            var10 = var31;
            var25 = var29;
            var24 = var28;
            var3 = var6;
            if(var26) { _fun0016_ip = 118; continue _fun0016 }
case 119:
            var32 = var30.value;
            var26 = var32.count_details;
            var26 = var15 == var26;
            if(var26) { _fun0016_ip = 120; continue _fun0016 }
case 20:
            var33 = var32.count_details;
            var33 = var33.burst;
            var35 = var15 != var33;
            var34 = 0;
            if(!var35) { _fun0016_ip = 121; continue _fun0016 }
case 89:
            var34 = var33;
case 121:
            var26 = var34 > var16;
            var29 = var33;
case 120:
            var34 = var29;
            if(var26) { _fun0016_ip = 122; continue _fun0016 }
case 123:
            var33 = var32.count_details;
            var33 = var33.normal;
            var36 = var15 != var33;
            var35 = 0;
            if(!var36) { _fun0016_ip = 124; continue _fun0016 }
case 125:
            var35 = var33;
case 124:
            var26 = var35 > var16;
            var28 = var33;
case 122:
            var33 = var28;
            if(!var26) { _fun0016_ip = 126; continue _fun0016 }
case 92:
            var26 = var5.push;
            var26 = var26.bind(var5)(var32);
case 126:
            var35 = var31.bind(var8)();
            var26 = var35.done;
            var30 = var35;
            var29 = var34;
            var28 = var33;
            var11 = var30;
            var10 = var31;
            var25 = var29;
            var24 = var28;
            var3 = var32;
            if(!var26) { _fun0016_ip = 119; continue _fun0016 }
case 118:
            var26 = _closure1_slot22;
            var26 = var26.bind(var8)(var27);
            var18 = var12 + var26;
            var23 = var11;
            var22 = var10;
            var21 = var25;
            var20 = var24;
            var19 = var3;
case 116:
            var24 = var17.bind(var8)();
            var3 = var24.done;
            var12 = var18;
            var11 = var23;
            var10 = var22;
            var9 = var21;
            var7 = var20;
            var6 = var19;
            var13 = var24;
            var4 = var12;
            if(!var3) { _fun0016_ip = 115; continue _fun0016 }
case 114:
            var3 = {};
            var3['reactions'] = var5;
            var3['reactionCount'] = var4;
            var4 = var3.reactions;
            var3 = var3.reactionCount;
            var7 = _closure1_slot23;
            var6 = var2.messages;
            var5 = true;
            var1 = 3;
            var5 = var7.bind(var8)(var6, var5, var1);
            var1 = {};
            var6 = var2.id;
            var1['id'] = var6;
            var6 = var2.topic;
            var1['topic'] = var6;
            var6 = var2.summ_short;
            var1['summShort'] = var6;
            var6 = global;
            var8 = var6.Array;
            var7 = var8.from;
            var10 = var6.Set;
            var39 = var2.people;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var40 = var9;
            var6 = new var40[var10](var39, var38);
            var6 = var6 instanceof Object ? var6 : var9;
            var6 = var7.bind(var8)(var6);
            var1['people'] = var6;
            var6 = var2.start_id;
            var1['startId'] = var6;
            var6 = var2.end_id;
            var1['endId'] = var6;
            var6 = var2.count;
            var1['count'] = var6;
            var6 = var2.channel_id;
            var1['channelId'] = var6;
            var6 = var2.type;
            var1['type'] = var6;
            var1['messages'] = var5;
            var1['reactions'] = var4;
            var6 = var2.messages;
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var1['messageIds'] = var4;
            var4 = arg2;
            var1['guildId'] = var4;
            var1['reactionCount'] = var3;
            var3 = var2.messages;
            var3 = var3.length;
            var1['numTotalMessages'] = var3;
            var2 = var2.source;
            var1['source'] = var2;
            return var1;
        }
    };
    var3['createGravitySummaryFromServer'] = var4;
    var4 = function createGravityGeneratedCandidateFromServer(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var4 = new Array(0);
            var2 = var3.messages;
            var1 = null;
            if(!(var1 != var2)) { _fun0017_ip = 127; continue _fun0017 }
case 128:
            var4 = var3.messages;
case 127:
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var1 = {};
            var4 = var3.guild_id;
            var1['guild_id'] = var4;
            var4 = var3.content_id;
            var1['content_id'] = var4;
            var4 = var3.channel_id;
            var1['channel_id'] = var4;
            var4 = var3.type;
            var1['type'] = var4;
            var4 = var3.primary_text;
            var1['primary_text'] = var4;
            var4 = var3.secondary_text;
            var1['secondary_text'] = var4;
            var4 = var3.message_ids;
            var1['message_ids'] = var4;
            var4 = var3.message_scores;
            var1['message_scores'] = var4;
            var4 = var3.user_ids;
            var1['user_ids'] = var4;
            var4 = var3.image_urls;
            var1['image_urls'] = var4;
            var3 = var3.created_at;
            var1['created_at'] = var3;
            var1['messages'] = var2;
            return var1;
        }
    };
    var3['createGravityGeneratedCandidateFromServer'] = var4;
    var4 = function createGravityMessageFromServer(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var8 = arg2;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.createMessageRecord;
            var5 = var2.message;
            var6 = var6.bind(var7)(var5);
            var5 = 'message';
            var1[var5] = var6;
            var6 = var2.thread_channel;
            var5 = null;
            var5 = var5 != var6;
            if(!var5) { _fun0018_ip = 129; continue _fun0018 }
case 85:
            var6 = _closure1_slot5;
            var5 = var6.fromServer;
            var4 = var2.thread_channel;
            var2 = var2.guild_id;
            var3 = var5.bind(var6)(var4, var2);
case 129:
            var2 = 'threadChannel';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createGravityMessageFromServer'] = var4;
    var4 = function isItemUnreadInChannel(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = _closure1_slot10;
            var3 = var4.getTrackedAckMessageId;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0019_ip = 102; continue _fun0019 }
case 3:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.extractTimestamp;
            var3 = arg2;
            var3 = var8.bind(var9)(var3);
            var2 = var7[var2];
            var4 = var6.bind(var4)(var2);
            var2 = var4.extractTimestamp;
            var2 = var2.bind(var4)(var5);
            var1 = var3 > var2;
case 102:
            return var1;
        }
    };
    var3['isItemUnreadInChannel'] = var4;
    var4 = function useGravityMessage(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 15;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot9;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot11;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var6 = _closure1_slot9;
                var5 = var6.getMessage;
                var1 = _closure2_slot0;
                var3 = var1.getChannelId;
                var3 = var3.bind(var1)();
                var1 = var1.id;
                var1 = var5.bind(var6)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0020_ip = 130; continue _fun0020 }
case 131:
                var6 = _closure1_slot11;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var5 = var5.bind(var6)(var4);
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0020_ip = 111; continue _fun0020 }
case 85:
                var4 = var5.message;
case 111:
                var1 = var4;
case 130:
                if(!(var3 == var1)) { _fun0020_ip = 11; continue _fun0020 }
case 132:
                var1 = _closure2_slot0;
case 11:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGravityMessage'] = var4;
    var4 = function useGravityMessageItem(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 15;
        var5 = var5[var4];
        var4 = undefined;
        var5 = var6.bind(var4)(var5);
        var4 = var5.useStateFromStores;
        var6 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var6;
        var6 = var2.id;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getHydratedItem;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGravityMessageItem'] = var4;
    var4 = function useICYMIMessage(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 15;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot9;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot11;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = null;
                var2 = var3 != var1;
                var1 = null;
                if(!var2) { _fun0021_ip = 130; continue _fun0021 }
case 133:
                var8 = _closure1_slot9;
                var7 = var8.getMessage;
                var6 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var7.bind(var8)(var6, var2);
                if(!(var3 == var2)) { _fun0021_ip = 111; continue _fun0021 }
case 5:
                var6 = _closure1_slot11;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0021_ip = 134; continue _fun0021 }
case 68:
                var3 = var4.message;
case 134:
                var2 = var3;
case 111:
                var1 = var2;
case 130:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useICYMIMessage'] = var4;
    var4 = function icymiEnabled(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getICYMIEnabled;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['icymiEnabled'] = var4;
    var4 = function customStatusToContentInventoryEntry(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.ICYMIItemTypes;
            var3 = var3.CUSTOM_STATUS;
            var1['type'] = var3;
            var3 = {};
            var4 = var2.id;
            var3['id'] = var4;
            var4 = var2.data;
            var4 = var4.user_id;
            var3['author_id'] = var4;
            var4 = 17;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ContentInventoryAuthorType;
            var4 = var4.USER;
            var3['author_type'] = var4;
            var4 = new Array(0);
            var3['traits'] = var4;
            var4 = new Array(0);
            var3['participants'] = var4;
            var4 = 18;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ContentInventoryEntryType;
            var4 = var4.CUSTOM_STATUS;
            var3['content_type'] = var4;
            var4 = {};
            var5 = 'custom_status_extra';
            var4['type'] = var5;
            var5 = var2.data;
            var6 = var5.text;
            var5 = null;
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0022_ip = 135; continue _fun0022 }
case 136:
            var5 = var6;
case 135:
            var4['status'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_id;
            var4['emoji_id'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_name;
            var4['emoji_name'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_animated;
            var4['emoji_animated'] = var5;
            var5 = var2.data;
            var5 = var5.attachments;
            var4['attachments'] = var5;
            var3['extra'] = var4;
            var1['activity'] = var3;
            var3 = var2.score;
            var1['score'] = var3;
            var2 = var2.score_components;
            var1['score_components'] = var2;
            return var1;
        }
    };
    var3['customStatusToContentInventoryEntry'] = var4;
    var4 = function compareGravityUnreadIds(arg1, arg2, arg3) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var2 = arg3;
            var4 = _closure1_slot12;
            var3 = var4.getReadTimestamp;
            var5 = var3.bind(var4)(var7);
            var3 = null;
            if(!(var3 == var5)) { _fun0023_ip = 5; continue _fun0023 }
case 33:
            var8 = var3 == var2;
            var4 = undefined;
            if(var8) { _fun0023_ip = 2; continue _fun0023 }
case 109:
            var4 = var2[var7];
case 2:
            var5 = var4;
case 5:
            var4 = _closure1_slot12;
            var1 = var4.getReadTimestamp;
            var4 = var1.bind(var4)(var6);
            if(!(var3 == var4)) { _fun0023_ip = 137; continue _fun0023 }
case 66:
            var7 = var3 == var2;
            var1 = undefined;
            if(var7) { _fun0023_ip = 41; continue _fun0023 }
case 68:
            var1 = var2[var6];
case 41:
            var4 = var1;
case 137:
            if(!(var3 == var5)) { _fun0023_ip = 138; continue _fun0023 }
case 130:
            var2 = var3 == var4;
            var1 = 0;
            if(var2) { _fun0023_ip = 80; continue _fun0023 }
case 138:
            var6 = var3 == var5;
            var2 = -1;
            if(var6) { _fun0023_ip = 139; continue _fun0023 }
case 13:
            var6 = var3 == var4;
            var3 = 1;
            if(var6) { _fun0023_ip = 140; continue _fun0023 }
case 141:
            var3 = var4 - var5;
case 140:
            var2 = var3;
case 139:
            var1 = var2;
case 80:
            return var1;
        }
    };
    var3['compareGravityUnreadIds'] = var4;
    var4 = function getViewableFeedItemsArray(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var11 = arg1;
            var3 = _closure1_slot11;
            var2 = var3.getUnreadDisplayItems;
            var17 = var2.bind(var3)();
            var4 = new Array(0);
            var3 = 0;
            var18 = var4;
            var16 = 0;
            var16 = arraySpread(var18, var17, var16);
            var6 = _closure1_slot11;
            var2 = var6.getReadDisplayItems;
            var17 = var2.bind(var6)();
            var18 = var4;
            var2 = arraySpread(var18, var17, var16);
            var6 = null;
            var _closure2_slot0 = var6;
            var2 = var11.length;
            var5 = 1;
            var9 = var2 - var5;
            var8 = 19;
            var7 = undefined;
            var2 = null;
            if(!(var9 >= var3)) { _fun0024_ip = 142; continue _fun0024 }
case 40:
            var12 = var11[var9];
            if(!(var6 != var12)) { _fun0024_ip = 44; continue _fun0024 }
case 59:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var15 = var13.NON_ELIGIBLE_SCROLL_ITEMS;
            var14 = var15.has;
            var13 = var12.item;
            var13 = var13.data;
            var13 = var13.kind;
            var13 = var14.bind(var15)(var13);
            if(var13) { _fun0024_ip = 44; continue _fun0024 }
case 143:
            var12 = var12.item;
            var12 = var12.id;
            _closure2_slot0 = var12;
            var2 = var12;
            _fun0024_ip = 142; continue _fun0024;
case 44:
            var9 = var9 - 1;
            var2 = null;
            if(var9 >= var3) { _fun0024_ip = 40; continue _fun0024 }
case 142:
            if(!(var6 != var2)) { _fun0024_ip = 144; continue _fun0024 }
case 145:
            var2 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            if(!(!(var1 < var3))) { _fun0024_ip = 46; continue _fun0024 }
case 146:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0024_ip = 147; continue _fun0024;
case 46:
            var1 = new Array(0);
case 147:
            return var1;
case 144:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getViewableFeedItemsArray'] = var4;
    var4 = function isItemNSFW(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var2 = var1.data;
            var3 = var2.kind;
            var2 = 'message';
            if(!(var2 !== var3)) { _fun0025_ip = 142; continue _fun0025 }
case 60:
            var2 = 'channelSummary';
            if(!(var2 !== var3)) { _fun0025_ip = 84; continue _fun0025 }
case 62:
            var2 = 'generatedCandidate';
            if(!(var2 !== var3)) { _fun0025_ip = 148; continue _fun0025 }
case 64:
            var2 = 'forumThread';
            if(!(var2 !== var3)) { _fun0025_ip = 149; continue _fun0025 }
case 150:
            var2 = 'guildEvent';
            if(!(var2 !== var3)) { _fun0025_ip = 115; continue _fun0025 }
case 151:
            var2 = false;
            return var2;
case 115:
            var4 = _closure1_slot4;
            var3 = var4.getGuildScheduledEvent;
            var2 = var1.data;
            var2 = var2.eventId;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            var3 = var3 == var2;
            var7 = undefined;
            if(var3) { _fun0025_ip = 152; continue _fun0025 }
case 153:
            var7 = var2.guild_id;
case 152:
            var4 = undefined;
            _fun0025_ip = 154; continue _fun0025;
case 149:
            var2 = var1.data;
            var2 = var2.threadChannel;
            var4 = var2.id;
            var7 = undefined;
            _fun0025_ip = 154; continue _fun0025;
case 148:
            var2 = var1.data;
            var2 = var2.item;
            var4 = var2.channel_id;
            var7 = undefined;
            _fun0025_ip = 154; continue _fun0025;
case 84:
            var2 = var1.data;
            var2 = var2.topic;
            var4 = var2.channelId;
            var7 = undefined;
            _fun0025_ip = 154; continue _fun0025;
case 142:
            var1 = var1.data;
            var1 = var1.message;
            var4 = var1.channel_id;
            var7 = undefined;
case 154:
            var3 = _closure1_slot7;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0025_ip = 144; continue _fun0025 }
case 88:
            var1 = var4.nsfw;
            if(var1) { _fun0025_ip = 26; continue _fun0025 }
case 144:
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0025_ip = 48; continue _fun0025 }
case 123:
            var1 = var4.guild_id;
case 48:
            if(!(var5 != var1)) { _fun0025_ip = 155; continue _fun0025 }
case 156:
            var7 = var1;
case 155:
            var1 = var5 != var7;
            var4 = null;
            if(!var1) { _fun0025_ip = 157; continue _fun0025 }
case 125:
            var6 = _closure1_slot8;
            var1 = var6.getGuild;
            var4 = var1.bind(var6)(var7);
case 157:
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0025_ip = 158; continue _fun0025 }
case 159:
            var6 = var4.nsfwLevel;
case 158:
            var1 = _closure1_slot14;
            var1 = var1.EXPLICIT;
            var1 = var6 === var1;
            if(var1) { _fun0025_ip = 160; continue _fun0025 }
case 161:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0025_ip = 99; continue _fun0025 }
case 97:
            var3 = var4.nsfwLevel;
case 99:
            var2 = _closure1_slot14;
            var2 = var2.AGE_RESTRICTED;
            var1 = var3 === var2;
case 160:
            return var1;
case 26:
            var1 = true;
            return var1;
        }
    };
    var3['isItemNSFW'] = var4;
    var4 = function itemToType(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var6 = arg1;
            var1 = var6.data;
            var7 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var7)) { _fun0026_ip = 162; continue _fun0026 }
case 60:
            var2 = 'loading';
            if(!(var2 !== var7)) { _fun0026_ip = 163; continue _fun0026 }
case 164:
            var3 = 'bottomLoading';
            if(!(var3 !== var7)) { _fun0026_ip = 165; continue _fun0026 }
case 113:
            var5 = 'message';
            if(!(var5 !== var7)) { _fun0026_ip = 124; continue _fun0026 }
case 166:
            var4 = 'channelSummary';
            if(!(var4 !== var7)) { _fun0026_ip = 167; continue _fun0026 }
case 63:
            var4 = 'guildEvent';
            if(!(var4 !== var7)) { _fun0026_ip = 168; continue _fun0026 }
case 79:
            var4 = 'contentInventory';
            if(!(var4 !== var7)) { _fun0026_ip = 169; continue _fun0026 }
case 103:
            var4 = 'recommendedGuilds';
            if(!(var4 !== var7)) { _fun0026_ip = 14; continue _fun0026 }
case 170:
            var4 = 'forumThread';
            if(!(var4 !== var7)) { _fun0026_ip = 171; continue _fun0026 }
case 172:
            var4 = 'generatedCandidate';
            if(!(var4 !== var7)) { _fun0026_ip = 173; continue _fun0026 }
case 55:
            var4 = 'icymiHeader';
            if(!(var4 !== var7)) { _fun0026_ip = 42; continue _fun0026 }
case 72:
            var4 = 'unknown';
            return var4;
case 42:
            var4 = 'icymi_header';
            return var4;
case 173:
            var4 = 'generated_candidate';
            return var4;
case 171:
            var4 = 'forum_thread';
            return var4;
case 14:
            var4 = 'recommended_guilds';
            return var4;
case 169:
            var4 = var6.data;
            var4 = var4.content;
            var8 = var4.content_type;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 18;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var9.bind(var4)(var7);
            var4 = var4.ContentInventoryEntryType;
            var7 = var4.CUSTOM_STATUS;
            var4 = 'hotwheels_gaming_activity';
            if(!(var8 === var7)) { _fun0026_ip = 174; continue _fun0026 }
case 21:
            var4 = 'hotwheels_custom_status';
case 174:
            return var4;
case 168:
            var4 = 'guild_event';
            return var4;
case 167:
            var4 = 'summary';
            return var4;
case 124:
            var8 = var6.channelType;
            var4 = _closure1_slot13;
            var7 = var4.GUILD_ANNOUNCEMENT;
            var4 = 'announcement';
            if(!(var8 !== var7)) { _fun0026_ip = 175; continue _fun0026 }
case 10:
            var6 = var6.data;
            var8 = var6.messageContext;
            var7 = null;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0026_ip = 176; continue _fun0026 }
case 177:
            var6 = var8.external_content_application_id;
case 176:
            var6 = var7 != var6;
            if(!var6) { _fun0026_ip = 178; continue _fun0026 }
case 118:
            var5 = 'game_message';
case 178:
            var4 = var5;
case 175:
            return var4;
case 165:
            return var3;
case 163:
            return var2;
case 162:
            return var1;
        }
    };
    var3['itemToType'] = var4;
    var4 = function determineContentType(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var6 = var4.type;
            var5 = _closure1_slot13;
            var5 = var5.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var5)) { _fun0027_ip = 179; continue _fun0027 }
case 33:
            var5 = var4.type;
            var4 = _closure1_slot13;
            var4 = var4.GUILD_FORUM;
            if(!(var5 !== var4)) { _fun0027_ip = 180; continue _fun0027 }
case 4:
            var5 = var3.reactions;
            var4 = null;
            if(!(var4 != var5)) { _fun0027_ip = 181; continue _fun0027 }
case 30:
            var6 = var3.reactions;
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.count_details;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = 0;
                    if(var2) { _fun0028_ip = 63; continue _fun0028 }
case 29:
                    var2 = var4.count_details;
                    var6 = var2.burst;
                    var7 = var5 != var6;
                    var2 = 0;
                    if(!var7) { _fun0028_ip = 64; continue _fun0028 }
case 65:
                    var2 = var6;
case 64:
                    var4 = var4.count_details;
                    var4 = var4.normal;
                    var5 = var5 != var4;
                    var3 = 0;
                    if(!var5) { _fun0028_ip = 66; continue _fun0028 }
case 67:
                    var3 = var4;
case 66:
                    var1 = var2 + var3;
case 63:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var6 = var5.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0027_ip = 181; continue _fun0027 }
case 182:
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = 10;
            if(!(!(var4 > var2))) { _fun0027_ip = 183; continue _fun0027 }
case 181:
            var2 = var3.attachments;
            var2 = var2.length;
            var9 = 0;
            if(!(!(var2 > var9))) { _fun0027_ip = 184; continue _fun0027 }
case 143:
            var2 = var3.embeds;
            var2 = var2.length;
            if(!(!(var2 > var9))) { _fun0027_ip = 185; continue _fun0027 }
case 74:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ContentType;
            var2 = var2.INTERESTING;
            _fun0027_ip = 186; continue _fun0027;
case 185:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 11;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ContentType;
            var2 = var4.LINK;
case 186:
            _fun0027_ip = 52; continue _fun0027;
case 184:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 20;
            var5 = var5[var4];
            var6 = undefined;
            var8 = var7.bind(var6)(var5);
            var7 = var8.isValidImageAttachment;
            var5 = var3.attachments;
            var5 = var5[var9];
            var8 = var7.bind(var8)(var5);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var8) { _fun0027_ip = 187; continue _fun0027 }
case 188:
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var4 = var8.isValidVideoAttachment;
            var3 = var3.attachments;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 11;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.ContentType;
            if(var3) { _fun0027_ip = 189; continue _fun0027 }
case 190:
            var3 = var4.FILE;
            _fun0027_ip = 191; continue _fun0027;
case 189:
            var3 = var4.VIDEO;
case 191:
            _fun0027_ip = 38; continue _fun0027;
case 187:
            var4 = 11;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ContentType;
            var3 = var4.IMAGE;
case 38:
            var2 = var3;
case 52:
            return var2;
case 183:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.POPULAR_MESSAGE;
            return var2;
case 180:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.FORUM_POST;
            return var2;
case 179:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.ContentType;
            var1 = var1.ANNOUNCEMENT;
            return var1;
        }
    };
    var3['determineContentType'] = var4;
    var4 = function contentTypeToText(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0029_ip = 32; continue _fun0029 }
case 76:
            var2 = false;
case 32:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 11;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.POPULAR_MESSAGE;
            if(!(var3 !== var4)) { _fun0029_ip = 192; continue _fun0029 }
case 28:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.IMAGE;
            if(!(var3 !== var4)) { _fun0029_ip = 193; continue _fun0029 }
case 132:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.VIDEO;
            if(!(var3 !== var4)) { _fun0029_ip = 194; continue _fun0029 }
case 195:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.LINK;
            if(!(var3 !== var4)) { _fun0029_ip = 196; continue _fun0029 }
case 197:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0029_ip = 198; continue _fun0029 }
case 146:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FORUM_POST;
            if(!(var3 !== var4)) { _fun0029_ip = 199; continue _fun0029 }
case 184:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.CHANGED_STATUS;
            if(!(var3 !== var4)) { _fun0029_ip = 200; continue _fun0029 }
case 201:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.INTERESTING;
            if(!(var3 !== var4)) { _fun0029_ip = 202; continue _fun0029 }
case 97:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0029_ip = 203; continue _fun0029 }
case 204:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0029_ip = 205; continue _fun0029 }
case 206:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.TRENDING_TOPIC;
            if(!(var3 !== var4)) { _fun0029_ip = 207; continue _fun0029 }
case 208:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.PRO_TIP;
            if(!(var3 !== var4)) { _fun0029_ip = 209; continue _fun0029 }
case 210:
            return var5;
case 209:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.0ktiVd;
            var3 = var4.bind(var6)(var3);
            return var3;
case 207:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.aDAwS+;
            var3 = var4.bind(var6)(var3);
            return var3;
case 205:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.pYrnTY;
            var3 = var4.bind(var6)(var3);
            return var3;
case 203:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0029_ip = 211; continue _fun0029 }
case 212:
            var2 = var3.2ih63V;
            var2 = var4.bind(var6)(var2);
            _fun0029_ip = 213; continue _fun0029;
case 211:
            var3 = var3.E0MW8I;
            var2 = var4.bind(var6)(var3);
case 213:
            return var2;
case 202:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TahE/i;
            var2 = var3.bind(var4)(var2);
            return var2;
case 200:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TGrUmi;
            var2 = var3.bind(var4)(var2);
            return var2;
case 199:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Q9/6BS;
            var2 = var3.bind(var4)(var2);
            return var2;
case 198:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DwLrLK;
            var2 = var3.bind(var4)(var2);
            return var2;
case 196:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.oj5yvD;
            var2 = var3.bind(var4)(var2);
            return var2;
case 194:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.swhcPM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 193:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gmOWAo;
            var2 = var3.bind(var4)(var2);
            return var2;
case 192:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 21;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.H/2+cl;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['contentTypeToText'] = var4;
    var2 = function regenerateFeedAndClearReadStates() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['regenerateFeedAndClearReadStates'] = var2;
    return var1;
})();