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
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
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
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var5 = _closure1_slot11;
                    var2 = var5.getHydratedItems;
                    var2 = var2.bind(var5)();
                    _closure4_slot0 = var2;
                    var2 = var4.slice;
                    var11 = var2.bind(var4)(var7, var6);
                    var2 = var11.length;
                    var13 = 0;
                    if(!(var13 !== var2)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
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
                    var15 = var10.bind(var11)(var9);
                    var10 = var15.filter;
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
                    var11 = var10.bind(var15)(var9);
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
                    var17 = var10.bind(var11)(var9);
                    var10 = var15.map;
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
                            if(!(var3 !== var1)) { _fun0005_ip = 36; continue _fun0005 }
case 41:
                            var1 = new Array(0);
                            return var1;
case 36:
                            var1 = new Array(0);
                            var3 = var4.data;
                            var6 = var3.message_context;
                            var3 = null;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                            var5 = var6.reply_message_id;
case 42:
                            if(!(var3 != var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
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
case 44:
                            var5 = var4.data;
                            var6 = var5.message_context;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                            var5 = var6.before_message_id;
case 46:
                            if(!(var3 != var5)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
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
case 48:
                            var5 = var4.data;
                            var5 = var5.message_context;
                            var6 = var3 == var5;
                            var2 = undefined;
                            if(var6) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                            var2 = var5.after_message_id;
case 50:
                            if(!(var3 != var2)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
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
case 52:
                            return var1;
                        }
                    };
                    var10 = var10.bind(var15)(var9);
                    var9 = var10.flat;
                    var12 = var9.bind(var10)();
                    var10 = var12.filter;
                    var9 = global;
                    var9 = var9.Boolean;
                    var12 = var10.bind(var12)(var9);
                    var10 = var15.filter;
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
                    var14 = var10.bind(var15)(var9);
                    var10 = var14.map;
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
                    var9 = var10.bind(var14)(var9);
                    var14 = var15.filter;
                    var10 = function(arg1) {
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
                    var14 = var14.bind(var15)(var10);
                    var10 = var14.map;
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
                    var8 = var10.bind(var14)(var8);
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.fetchHydrated;
                    var2 = {};
                    var10 = new Array(0);
                    var18 = var10;
                    var16 = 0;
                    var16 = arraySpread(var18, var17, var16);
                    var18 = var10;
                    var17 = var12;
                    var11 = arraySpread(var18, var17, var16);
                    var2['messageItems'] = var10;
                    var2['activityItems'] = var9;
                    var2['generatedCandidateItems'] = var8;
                    var2 = var4.bind(var5)(var7, var6, var2);
                    SaveGenerator(address=344);
case 54:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 55; continue _fun0004 }
case 39:
                    return var3;
case 55:
                    return var2;
case 37:
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
                    if(var2) { _fun0006_ip = 56; continue _fun0006 }
case 57:
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
case 58:
                    return var2;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    return var3;
case 60:
                    return var2;
case 56:
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
    var1 = function _regenerateFeedAndClearReadStates() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
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
case 64:
                    return var2;
case 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 66; continue _fun0007 }
case 67:
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
case 68:
                    return var3;
case 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var5 = var3.AnalyticsObjectTypes;
                    _closure4_slot2 = var5;
                    var6 = _closure1_slot11;
                    var5 = var6.getDehydratedItems;
                    var6 = var5.bind(var6)();
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                            if(!var4) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                            var5 = var2.data;
                            var6 = var5.channel_type;
                            var5 = _closure1_slot13;
                            var5 = var5.GUILD_ANNOUNCEMENT;
                            var4 = var6 === var5;
case 72:
                            if(!var4) { _fun0008_ip = 74; continue _fun0008 }
case 75:
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
case 74:
                            if(!var4) { _fun0008_ip = 76; continue _fun0008 }
case 15:
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
case 76:
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
case 77:
                    return var4;
case 78:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.fetchDehydrated;
                    var5 = {'isReloading': true, 'forceRefresh': true};
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=267);
case 81:
                    return var5;
case 82:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.reloadICYMITab;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=304);
case 85:
                    return var6;
case 86:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.getGuildChannelScores;
                    var7 = var7.bind(var10)();
                    SaveGenerator(address=341);
case 89:
                    return var7;
case 90:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.getRecommendedGuilds;
                    var9 = var9.bind(var10)();
                    return var8;
case 91:
                    return var7;
case 87:
                    return var6;
case 83:
                    return var5;
case 79:
                    return var4;
case 70:
                    return var3;
case 66:
                    return var2;
case 62:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            if(var1) { _fun0009_ip = 93; continue _fun0009 }
case 73:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.GENERATED_CANDIDATE;
            var1 = var7 === var4;
case 93:
            if(var1) { _fun0009_ip = 61; continue _fun0009 }
case 94:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.GUILD_EVENT;
            var1 = var3 === var2;
case 61:
            return var1;
        }
    };
    var3['isGuildItem'] = var5;
    var5 = function isChannelCustomScoreEligible(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var2 = var4.type;
            var1 = _closure1_slot13;
            var1 = var1.GUILD_FORUM;
            var1 = var2 === var1;
            if(var1) { _fun0010_ip = 64; continue _fun0010 }
case 34:
            var5 = var4.type;
            var2 = _closure1_slot13;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var5 === var2;
            if(var2) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var4 = var4.type;
            var3 = _closure1_slot13;
            var3 = var3.GUILD_TEXT;
            var2 = var4 === var3;
case 95:
            var1 = var2;
case 64:
            return var1;
        }
    };
    var3['isChannelCustomScoreEligible'] = var5;
    var5 = function numberToCustomScore(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = -1.5;
            if(!(!(var2 < var1))) { _fun0011_ip = 64; continue _fun0011 }
case 97:
            var1 = 0;
            if(!(!(var2 < var1))) { _fun0011_ip = 98; continue _fun0011 }
case 31:
            if(!(!(var2 > var1))) { _fun0011_ip = 99; continue _fun0011 }
case 100:
            var1 = _closure1_slot15;
            var1 = var1.DEFAULT;
            _fun0011_ip = 36; continue _fun0011;
case 99:
            var2 = _closure1_slot15;
            var1 = var2.MORE;
case 36:
            _fun0011_ip = 35; continue _fun0011;
case 98:
            var2 = _closure1_slot15;
            var1 = var2.LESS;
case 35:
            _fun0011_ip = 9; continue _fun0011;
case 64:
            var2 = _closure1_slot15;
            var1 = var2.MUTED;
case 9:
            return var1;
        }
    };
    var3['numberToCustomScore'] = var5;
    var5 = function customScoreToNumber(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            var3 = var3.MORE;
            if(!(var3 !== var2)) { _fun0012_ip = 101; continue _fun0012 }
case 29:
            var3 = _closure1_slot15;
            var3 = var3.LESS;
            if(!(var3 !== var2)) { _fun0012_ip = 7; continue _fun0012 }
case 102:
            var1 = _closure1_slot15;
            var1 = var1.MUTED;
            if(!(var1 !== var2)) { _fun0012_ip = 73; continue _fun0012 }
case 5:
            var1 = 0;
            return var1;
case 73:
            var1 = -2;
            return var1;
case 7:
            var1 = -1;
            return var1;
case 101:
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
    var4 = function createGravityGeneratedCandidateFromServer(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var4 = new Array(0);
            var1 = var3.messages;
            var10 = null;
            if(!(var10 != var1)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
            var4 = var3.messages;
case 103:
            var2 = new Array(0);
            var1 = _closure1_slot16;
            var8 = undefined;
            var7 = var1.bind(var8)(var4);
            var4 = var7.bind(var8)();
            var1 = var4.done;
            var6 = 13;
            var5 = var4;
            var4 = null;
            if(var1) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var1 = var5.value;
            var11 = var1.author;
            if(!(var10 != var11)) { _fun0013_ip = 71; continue _fun0013 }
case 107:
            var11 = _closure1_slot6;
            var11 = var1 instanceof var11;
            var12 = var1;
            if(var11) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var6];
            var13 = var13.bind(var8)(var11);
            var11 = var13.createMessageRecord;
            var12 = var11.bind(var13)(var1);
case 108:
            var11 = var2.push;
            var11 = var11.bind(var2)(var12);
            var1 = var1.author;
            var4 = var1.id;
case 71:
            var11 = var7.bind(var8)();
            var1 = var11.done;
            var5 = var11;
            if(!var1) { _fun0013_ip = 106; continue _fun0013 }
case 105:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
            if(!var5) { _fun0014_ip = 110; continue _fun0014 }
case 75:
            var6 = _closure1_slot5;
            var5 = var6.fromServer;
            var4 = var2.thread_channel;
            var2 = var2.guild_id;
            var3 = var5.bind(var6)(var4, var2);
case 110:
            var2 = 'threadChannel';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createGravityMessageFromServer'] = var4;
    var4 = function isItemUnreadInChannel(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = _closure1_slot10;
            var3 = var4.getTrackedAckMessageId;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0015_ip = 93; continue _fun0015 }
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
case 93:
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var6 = _closure1_slot9;
                var5 = var6.getMessage;
                var1 = _closure2_slot0;
                var3 = var1.getChannelId;
                var3 = var3.bind(var1)();
                var1 = var1.id;
                var1 = var5.bind(var6)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                var6 = _closure1_slot11;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var5 = var5.bind(var6)(var4);
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0016_ip = 9; continue _fun0016 }
case 75:
                var4 = var5.message;
case 9:
                var1 = var4;
case 111:
                if(!(var3 == var1)) { _fun0016_ip = 113; continue _fun0016 }
case 109:
                var1 = _closure2_slot0;
case 113:
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = null;
                var2 = var3 != var1;
                var1 = null;
                if(!var2) { _fun0017_ip = 111; continue _fun0017 }
case 114:
                var8 = _closure1_slot9;
                var7 = var8.getMessage;
                var6 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var7.bind(var8)(var6, var2);
                if(!(var3 == var2)) { _fun0017_ip = 9; continue _fun0017 }
case 41:
                var6 = _closure1_slot11;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0017_ip = 115; continue _fun0017 }
case 72:
                var3 = var4.message;
case 115:
                var2 = var3;
case 9:
                var1 = var2;
case 111:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
            if(!var7) { _fun0018_ip = 116; continue _fun0018 }
case 117:
            var5 = var6;
case 116:
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var2 = arg3;
            var4 = _closure1_slot12;
            var3 = var4.getReadTimestamp;
            var5 = var3.bind(var4)(var7);
            var3 = null;
            if(!(var3 == var5)) { _fun0019_ip = 41; continue _fun0019 }
case 33:
            var8 = var3 == var2;
            var4 = undefined;
            if(var8) { _fun0019_ip = 118; continue _fun0019 }
case 99:
            var4 = var2[var7];
case 118:
            var5 = var4;
case 41:
            var4 = _closure1_slot12;
            var1 = var4.getReadTimestamp;
            var4 = var1.bind(var4)(var6);
            if(!(var3 == var4)) { _fun0019_ip = 119; continue _fun0019 }
case 101:
            var7 = var3 == var2;
            var1 = undefined;
            if(var7) { _fun0019_ip = 43; continue _fun0019 }
case 72:
            var1 = var2[var6];
case 43:
            var4 = var1;
case 119:
            if(!(var3 == var5)) { _fun0019_ip = 120; continue _fun0019 }
case 111:
            var2 = var3 == var4;
            var1 = 0;
            if(var2) { _fun0019_ip = 68; continue _fun0019 }
case 120:
            var6 = var3 == var5;
            var2 = -1;
            if(var6) { _fun0019_ip = 121; continue _fun0019 }
case 122:
            var6 = var3 == var4;
            var3 = 1;
            if(var6) { _fun0019_ip = 123; continue _fun0019 }
case 108:
            var3 = var4 - var5;
case 123:
            var2 = var3;
case 121:
            var1 = var2;
case 68:
            return var1;
        }
    };
    var3['compareGravityUnreadIds'] = var4;
    var4 = function getViewableFeedItemsArray(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
            if(!(var9 >= var3)) { _fun0020_ip = 124; continue _fun0020 }
case 42:
            var12 = var11[var9];
            if(!(var6 != var12)) { _fun0020_ip = 46; continue _fun0020 }
case 11:
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
            if(var13) { _fun0020_ip = 46; continue _fun0020 }
case 125:
            var12 = var12.item;
            var12 = var12.id;
            _closure2_slot0 = var12;
            var2 = var12;
            _fun0020_ip = 124; continue _fun0020;
case 46:
            var9 = var9 - 1;
            var2 = null;
            if(var9 >= var3) { _fun0020_ip = 42; continue _fun0020 }
case 124:
            if(!(var6 != var2)) { _fun0020_ip = 126; continue _fun0020 }
case 16:
            var2 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            if(!(!(var1 < var3))) { _fun0020_ip = 48; continue _fun0020 }
case 127:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0020_ip = 128; continue _fun0020;
case 48:
            var1 = new Array(0);
case 128:
            return var1;
case 126:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getViewableFeedItemsArray'] = var4;
    var4 = function isItemNSFW(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.data;
            var3 = var2.kind;
            var2 = 'message';
            if(!(var2 !== var3)) { _fun0021_ip = 71; continue _fun0021 }
case 38:
            var2 = 'generatedCandidate';
            if(!(var2 !== var3)) { _fun0021_ip = 129; continue _fun0021 }
case 130:
            var2 = 'forumThread';
            if(!(var2 !== var3)) { _fun0021_ip = 131; continue _fun0021 }
case 132:
            var2 = 'guildEvent';
            if(!(var2 !== var3)) { _fun0021_ip = 133; continue _fun0021 }
case 41:
            var2 = false;
            return var2;
case 133:
            var4 = _closure1_slot4;
            var3 = var4.getGuildScheduledEvent;
            var2 = var1.data;
            var2 = var2.eventId;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            var3 = var3 == var2;
            var7 = undefined;
            if(var3) { _fun0021_ip = 134; continue _fun0021 }
case 94:
            var7 = var2.guild_id;
case 134:
            var4 = undefined;
            _fun0021_ip = 135; continue _fun0021;
case 131:
            var2 = var1.data;
            var2 = var2.threadChannel;
            var4 = var2.id;
            var7 = undefined;
            _fun0021_ip = 135; continue _fun0021;
case 129:
            var2 = var1.data;
            var2 = var2.item;
            var4 = var2.channel_id;
            var7 = undefined;
            _fun0021_ip = 135; continue _fun0021;
case 71:
            var1 = var1.data;
            var1 = var1.message;
            var4 = var1.channel_id;
            var7 = undefined;
case 135:
            var3 = _closure1_slot7;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0021_ip = 136; continue _fun0021 }
case 137:
            var1 = var4.nsfw;
            if(var1) { _fun0021_ip = 138; continue _fun0021 }
case 136:
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0021_ip = 22; continue _fun0021 }
case 139:
            var1 = var4.guild_id;
case 22:
            if(!(var5 != var1)) { _fun0021_ip = 140; continue _fun0021 }
case 141:
            var7 = var1;
case 140:
            var1 = var5 != var7;
            var4 = null;
            if(!var1) { _fun0021_ip = 142; continue _fun0021 }
case 143:
            var6 = _closure1_slot8;
            var1 = var6.getGuild;
            var4 = var1.bind(var6)(var7);
case 142:
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0021_ip = 144; continue _fun0021 }
case 50:
            var6 = var4.nsfwLevel;
case 144:
            var1 = _closure1_slot14;
            var1 = var1.EXPLICIT;
            var1 = var6 === var1;
            if(var1) { _fun0021_ip = 52; continue _fun0021 }
case 145:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0021_ip = 146; continue _fun0021 }
case 147:
            var3 = var4.nsfwLevel;
case 146:
            var2 = _closure1_slot14;
            var2 = var2.AGE_RESTRICTED;
            var1 = var3 === var2;
case 52:
            return var1;
case 138:
            var1 = true;
            return var1;
        }
    };
    var3['isItemNSFW'] = var4;
    var4 = function itemToType(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var6 = arg1;
            var1 = var6.data;
            var7 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var7)) { _fun0022_ip = 148; continue _fun0022 }
case 149:
            var2 = 'loading';
            if(!(var2 !== var7)) { _fun0022_ip = 150; continue _fun0022 }
case 151:
            var3 = 'bottomLoading';
            if(!(var3 !== var7)) { _fun0022_ip = 88; continue _fun0022 }
case 5:
            var5 = 'message';
            if(!(var5 !== var7)) { _fun0022_ip = 51; continue _fun0022 }
case 152:
            var4 = 'guildEvent';
            if(!(var4 !== var7)) { _fun0022_ip = 153; continue _fun0022 }
case 35:
            var4 = 'contentInventory';
            if(!(var4 !== var7)) { _fun0022_ip = 135; continue _fun0022 }
case 75:
            var4 = 'recommendedGuilds';
            if(!(var4 !== var7)) { _fun0022_ip = 154; continue _fun0022 }
case 93:
            var4 = 'forumThread';
            if(!(var4 !== var7)) { _fun0022_ip = 155; continue _fun0022 }
case 156:
            var4 = 'generatedCandidate';
            if(!(var4 !== var7)) { _fun0022_ip = 60; continue _fun0022 }
case 122:
            var4 = 'icymiHeader';
            if(!(var4 !== var7)) { _fun0022_ip = 157; continue _fun0022 }
case 108:
            var4 = 'unknown';
            return var4;
case 157:
            var4 = 'icymi_header';
            return var4;
case 60:
            var4 = 'generated_candidate';
            return var4;
case 155:
            var4 = 'forum_thread';
            return var4;
case 154:
            var4 = 'recommended_guilds';
            return var4;
case 135:
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
            if(!(var8 === var7)) { _fun0022_ip = 158; continue _fun0022 }
case 128:
            var4 = 'hotwheels_custom_status';
case 158:
            return var4;
case 153:
            var4 = 'guild_event';
            return var4;
case 51:
            var8 = var6.channelType;
            var4 = _closure1_slot13;
            var7 = var4.GUILD_ANNOUNCEMENT;
            var4 = 'announcement';
            if(!(var8 !== var7)) { _fun0022_ip = 159; continue _fun0022 }
case 24:
            var6 = var6.data;
            var8 = var6.messageContext;
            var7 = null;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0022_ip = 160; continue _fun0022 }
case 161:
            var6 = var8.external_content_application_id;
case 160:
            var6 = var7 != var6;
            if(!var6) { _fun0022_ip = 162; continue _fun0022 }
case 163:
            var5 = 'game_message';
case 162:
            var4 = var5;
case 159:
            return var4;
case 88:
            return var3;
case 150:
            return var2;
case 148:
            return var1;
        }
    };
    var3['itemToType'] = var4;
    var4 = function determineContentType(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var6 = var4.type;
            var5 = _closure1_slot13;
            var5 = var5.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var5)) { _fun0023_ip = 164; continue _fun0023 }
case 33:
            var5 = var4.type;
            var4 = _closure1_slot13;
            var4 = var4.GUILD_FORUM;
            if(!(var5 !== var4)) { _fun0023_ip = 165; continue _fun0023 }
case 36:
            var5 = var3.reactions;
            var4 = null;
            if(!(var4 != var5)) { _fun0023_ip = 166; continue _fun0023 }
case 30:
            var6 = var3.reactions;
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.count_details;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = 0;
                    if(var2) { _fun0024_ip = 64; continue _fun0024 }
case 29:
                    var2 = var4.count_details;
                    var6 = var2.burst;
                    var7 = var5 != var6;
                    var2 = 0;
                    if(!var7) { _fun0024_ip = 167; continue _fun0024 }
case 132:
                    var2 = var6;
case 167:
                    var4 = var4.count_details;
                    var4 = var4.normal;
                    var5 = var5 != var4;
                    var3 = 0;
                    if(!var5) { _fun0024_ip = 101; continue _fun0024 }
case 168:
                    var3 = var4;
case 101:
                    var1 = var2 + var3;
case 64:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var6 = var5.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0023_ip = 166; continue _fun0023 }
case 169:
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = 10;
            if(!(!(var4 > var2))) { _fun0023_ip = 170; continue _fun0023 }
case 166:
            var2 = var3.attachments;
            var2 = var2.length;
            var9 = 0;
            if(!(!(var2 > var9))) { _fun0023_ip = 171; continue _fun0023 }
case 125:
            var2 = var3.embeds;
            var2 = var2.length;
            if(!(!(var2 > var9))) { _fun0023_ip = 172; continue _fun0023 }
case 173:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ContentType;
            var2 = var2.INTERESTING;
            _fun0023_ip = 174; continue _fun0023;
case 172:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 11;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ContentType;
            var2 = var4.LINK;
case 174:
            _fun0023_ip = 66; continue _fun0023;
case 171:
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
            if(var8) { _fun0023_ip = 175; continue _fun0023 }
case 176:
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
            if(var3) { _fun0023_ip = 177; continue _fun0023 }
case 178:
            var3 = var4.FILE;
            _fun0023_ip = 179; continue _fun0023;
case 177:
            var3 = var4.VIDEO;
case 179:
            _fun0023_ip = 70; continue _fun0023;
case 175:
            var4 = 11;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ContentType;
            var3 = var4.IMAGE;
case 70:
            var2 = var3;
case 66:
            return var2;
case 170:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.POPULAR_MESSAGE;
            return var2;
case 165:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.FORUM_POST;
            return var2;
case 164:
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
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0025_ip = 32; continue _fun0025 }
case 63:
            var2 = false;
case 32:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 11;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.POPULAR_MESSAGE;
            if(!(var3 !== var4)) { _fun0025_ip = 180; continue _fun0025 }
case 28:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.IMAGE;
            if(!(var3 !== var4)) { _fun0025_ip = 181; continue _fun0025 }
case 109:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.VIDEO;
            if(!(var3 !== var4)) { _fun0025_ip = 182; continue _fun0025 }
case 183:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.LINK;
            if(!(var3 !== var4)) { _fun0025_ip = 184; continue _fun0025 }
case 185:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0025_ip = 186; continue _fun0025 }
case 127:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FORUM_POST;
            if(!(var3 !== var4)) { _fun0025_ip = 187; continue _fun0025 }
case 171:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.CHANGED_STATUS;
            if(!(var3 !== var4)) { _fun0025_ip = 188; continue _fun0025 }
case 189:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.INTERESTING;
            if(!(var3 !== var4)) { _fun0025_ip = 190; continue _fun0025 }
case 159:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0025_ip = 191; continue _fun0025 }
case 6:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0025_ip = 192; continue _fun0025 }
case 87:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.TRENDING_TOPIC;
            if(!(var3 !== var4)) { _fun0025_ip = 193; continue _fun0025 }
case 194:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.PRO_TIP;
            if(!(var3 !== var4)) { _fun0025_ip = 195; continue _fun0025 }
case 196:
            return var5;
case 195:
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
case 193:
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
case 192:
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
case 191:
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
            if(var2) { _fun0025_ip = 197; continue _fun0025 }
case 198:
            var2 = var3.2ih63V;
            var2 = var4.bind(var6)(var2);
            _fun0025_ip = 199; continue _fun0025;
case 197:
            var3 = var3.E0MW8I;
            var2 = var4.bind(var6)(var3);
case 199:
            return var2;
case 190:
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
case 188:
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
case 187:
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
case 186:
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
case 184:
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
case 182:
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
case 181:
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
case 180:
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
        var4 = _closure1_slot22;
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