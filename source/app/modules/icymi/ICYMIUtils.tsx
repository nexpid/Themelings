// app/modules/icymi/ICYMIUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var4 = function hydrateItems() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = function _hydrateItems() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 365; continue _fun0004 }
 21:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var9 = _closure1_slot8;
                    var5 = var9.getHydratedItems;
                    var5 = var5.bind(var9)();
                    _closure4_slot0 = var5;
                    var5 = var8.slice;
                    var9 = var5.bind(var8)(var7, var6);
                    var5 = var9.length;
                    var14 = 0;
                    if(!(var14 !== var5)) { _fun0004_ip = 359; continue _fun0004 }
 73:
                    var8 = var9.filter;
                    var5 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var2 = var2[var1];
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var11 = var8.bind(var9)(var5);
                    var8 = var11.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.MESSAGE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var8.bind(var11)(var5);
                    var8 = var9.map;
                    var5 = function(arg1) {
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
                    var16 = var8.bind(var9)(var5);
                    var8 = var11.map;
                    var5 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = arg1;
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.MESSAGE;
                            if(!(var3 !== var1)) { _fun0005_ip = 55; continue _fun0005 }
 49:
                            var1 = new Array(0);
                            return var1;
 55:
                            var1 = new Array(0);
                            var3 = var4.data;
                            var6 = var3.message_context;
                            var3 = null;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 87; continue _fun0005 }
 81:
                            var5 = var6.reply_message_id;
 87:
                            if(!(var3 != var5)) { _fun0005_ip = 139; continue _fun0005 }
 91:
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
 139:
                            var5 = var4.data;
                            var6 = var5.message_context;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 165; continue _fun0005 }
 159:
                            var5 = var6.before_message_id;
 165:
                            if(!(var3 != var5)) { _fun0005_ip = 217; continue _fun0005 }
 169:
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
 217:
                            var5 = var4.data;
                            var5 = var5.message_context;
                            var6 = var3 == var5;
                            var2 = undefined;
                            if(var6) { _fun0005_ip = 243; continue _fun0005 }
 237:
                            var2 = var5.after_message_id;
 243:
                            if(!(var3 != var2)) { _fun0005_ip = 295; continue _fun0005 }
 247:
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
 295:
                            return var1;
                        }
                    };
                    var8 = var8.bind(var11)(var5);
                    var5 = var8.flat;
                    var9 = var5.bind(var8)();
                    var8 = var9.filter;
                    var5 = global;
                    var5 = var5.Boolean;
                    var13 = var8.bind(var9)(var5);
                    var8 = var11.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.SUMMARY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var8.bind(var11)(var5);
                    var8 = var9.map;
                    var5 = function(arg1) {
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
                    var10 = var8.bind(var9)(var5);
                    var8 = var11.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.ACTIVITY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var8.bind(var11)(var5);
                    var8 = var9.map;
                    var5 = function(arg1) {
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
                    var9 = var8.bind(var9)(var5);
                    var8 = var11.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.GENERATED_CANDIDATE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var8.bind(var11)(var5);
                    var5 = var8.map;
                    var4 = function(arg1) {
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
                    var8 = var5.bind(var8)(var4);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.fetchHydrated;
                    var2 = {};
                    var11 = new Array(0);
                    var17 = var11;
                    var15 = 0;
                    var15 = arraySpread(var17, var16, var15);
                    var17 = var11;
                    var16 = var13;
                    var12 = arraySpread(var17, var16, var15);
                    var2['messageItems'] = var11;
                    var2['summaryItems'] = var10;
                    var2['activityItems'] = var9;
                    var2['generatedCandidateItems'] = var8;
                    var2 = var4.bind(var5)(var7, var6, var2);
                    SaveGenerator(address=353);
 351:
                    return var2;
 353:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 362; continue _fun0004 }
 359:
                    return var3;
 362:
                    return var2;
 365:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _hydrateNextPage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 137; continue _fun0006 }
 10:
                    var4 = _closure1_slot8;
                    var3 = var4.getUnreadDisplayItems;
                    var10 = var3.bind(var4)();
                    var4 = _closure1_slot8;
                    var3 = var4.getReadDisplayItems;
                    var7 = var3.bind(var4)();
                    var4 = _closure1_slot8;
                    var3 = var4.getNextIndexToHydrate;
                    var6 = var3.bind(var4)();
                    var5 = _closure1_slot15;
                    var4 = new Array(0);
                    var9 = 0;
                    var11 = var4;
                    var9 = arraySpread(var11, var10, var9);
                    var11 = var4;
                    var10 = var7;
                    var3 = arraySpread(var11, var10, var9);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.ICYMI_PAGE_SIZE;
                    var2 = var6 + var2;
                    var2 = var5.bind(var3)(var4, var6, var2);
                    SaveGenerator(address=125);
 123:
                    return var2;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 134; continue _fun0006 }
 131:
                    return var3;
 134:
                    return var2;
 137:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function countReactions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var1 = var3.reactions;
            var6 = null;
            var4 = var6 != var1;
            var5 = 0;
            var1 = 0;
            if(!var4) { _fun0007_ip = 95; continue _fun0007 }
 24:
            var4 = var3.reactions;
            if(!(var6 == var4)) { _fun0007_ip = 40; continue _fun0007 }
 34:
            var6 = new Array(0);
            _fun0007_ip = 46; continue _fun0007;
 40:
            var6 = var3.reactions;
 46:
            var4 = var6.map;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.count_details;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = 0;
                    if(var2) { _fun0008_ip = 72; continue _fun0008 }
 20:
                    var2 = var4.count_details;
                    var6 = var2.burst;
                    var7 = var5 != var6;
                    var2 = 0;
                    if(!var7) { _fun0008_ip = 44; continue _fun0008 }
 41:
                    var2 = var6;
 44:
                    var4 = var4.count_details;
                    var4 = var4.normal;
                    var5 = var5 != var4;
                    var3 = 0;
                    if(!var5) { _fun0008_ip = 68; continue _fun0008 }
 65:
                    var3 = var4;
 68:
                    var1 = var2 + var3;
 72:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var3);
            var3 = var4.length;
            var3 = var3 > var5;
            var1 = 0;
            if(!var3) { _fun0007_ip = 95; continue _fun0007 }
 77:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 95:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function processMessages(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var11 = arg2;
            var10 = arg3;
            var1 = new Array(0);
            var3 = _closure1_slot13;
            var8 = undefined;
            var2 = arg1;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = null;
            var5 = 10;
            var4 = var3;
            var3 = null;
            if(var2) { _fun0009_ip = 194; continue _fun0009 }
 52:
            var2 = var4.value;
            var13 = var2.author;
            var12 = var3;
            if(!(var6 != var13)) { _fun0009_ip = 173; continue _fun0009 }
 70:
            if(!var11) { _fun0009_ip = 91; continue _fun0009 }
 73:
            var13 = var2.author;
            var13 = var13.id;
            var12 = var3;
            if(!(var12 !== var13)) { _fun0009_ip = 173; continue _fun0009 }
 91:
            var13 = _closure1_slot5;
            var13 = var2 instanceof var13;
            var14 = var2;
            if(var13) { _fun0009_ip = 133; continue _fun0009 }
 105:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var15 = var15.bind(var8)(var13);
            var13 = var15.createMessageRecord;
            var14 = var13.bind(var15)(var2);
 133:
            var13 = var1.push;
            var13 = var13.bind(var1)(var14);
            var2 = var2.author;
            var13 = var2.id;
            var12 = var13;
            if(!(var6 != var10)) { _fun0009_ip = 173; continue _fun0009 }
 161:
            var2 = var1.length;
            var12 = var13;
            if(!(!(var2 >= var10))) { _fun0009_ip = 194; continue _fun0009 }
 173:
            var13 = var7.bind(var8)();
            var2 = var13.done;
            var3 = var12;
            var4 = var13;
            if(!var2) { _fun0009_ip = 52; continue _fun0009 }
 194:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var13 = 0;
    var5 = var8[var13];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var12 = 1;
    var5 = var8[var12];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 2;
    var5 = var8[var11];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var10 = 3;
    var5 = var8[var10];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var9 = 4;
    var5 = var8[var9];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.ChannelTypes;
    var _closure1_slot10 = var6;
    var5 = var5.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot11 = var5;
    var5 = {};
    var5['UNKNOWN'] = var13;
    var6 = 'UNKNOWN';
    var5[var13] = var6;
    var5['DEFAULT'] = var12;
    var6 = 'DEFAULT';
    var5[var12] = var6;
    var5['MORE'] = var11;
    var6 = 'MORE';
    var5[var11] = var6;
    var5['LESS'] = var10;
    var6 = 'LESS';
    var5[var10] = var6;
    var5['MUTED'] = var9;
    var6 = 'MUTED';
    var5[var9] = var6;
    var _closure1_slot12 = var5;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/ICYMIUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ICYMICustomScore'] = var5;
    var5 = function isGuildItem(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 8;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.MESSAGE;
            var1 = var4 === var1;
            if(var1) { _fun0010_ip = 90; continue _fun0010 }
 52:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.SUMMARY;
            var1 = var7 === var4;
 90:
            if(var1) { _fun0010_ip = 131; continue _fun0010 }
 93:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.GENERATED_CANDIDATE;
            var1 = var7 === var4;
 131:
            if(var1) { _fun0010_ip = 172; continue _fun0010 }
 134:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.GUILD_EVENT;
            var1 = var3 === var2;
 172:
            return var1;
        }
    };
    var3['isGuildItem'] = var5;
    var5 = function isChannelCustomScoreEligible(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var2 = !var1;
            if(var2) { _fun0011_ip = 34; continue _fun0011 }
 12:
            var3 = var4.type;
            var1 = _closure1_slot10;
            var1 = var1.GUILD_FORUM;
            var2 = var3 !== var1;
 34:
            var1 = !var2;
            if(!var2) { _fun0011_ip = 87; continue _fun0011 }
 40:
            var5 = var4.type;
            var2 = _closure1_slot10;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var5 === var2;
            if(var2) { _fun0011_ip = 84; continue _fun0011 }
 65:
            var4 = var4.type;
            var3 = _closure1_slot10;
            var3 = var3.GUILD_TEXT;
            var2 = var4 === var3;
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var3['isChannelCustomScoreEligible'] = var5;
    var5 = function numberToCustomScore(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = arg1;
            var1 = -1.5;
            if(!(!(var2 < var1))) { _fun0012_ip = 72; continue _fun0012 }
 17:
            var1 = 0;
            if(!(!(var2 < var1))) { _fun0012_ip = 57; continue _fun0012 }
 23:
            if(!(!(var2 > var1))) { _fun0012_ip = 42; continue _fun0012 }
 27:
            var1 = _closure1_slot12;
            var1 = var1.DEFAULT;
            _fun0012_ip = 55; continue _fun0012;
 42:
            var2 = _closure1_slot12;
            var1 = var2.MORE;
 55:
            _fun0012_ip = 70; continue _fun0012;
 57:
            var2 = _closure1_slot12;
            var1 = var2.LESS;
 70:
            _fun0012_ip = 85; continue _fun0012;
 72:
            var2 = _closure1_slot12;
            var1 = var2.MUTED;
 85:
            return var1;
        }
    };
    var3['numberToCustomScore'] = var5;
    var5 = function customScoreToNumber(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot12;
            var3 = var3.MORE;
            if(!(var3 !== var2)) { _fun0013_ip = 68; continue _fun0013 }
 20:
            var3 = _closure1_slot12;
            var3 = var3.LESS;
            if(!(var3 !== var2)) { _fun0013_ip = 60; continue _fun0013 }
 34:
            var1 = _closure1_slot12;
            var1 = var1.MUTED;
            if(!(var1 !== var2)) { _fun0013_ip = 52; continue _fun0013 }
 48:
            var1 = 0;
            return var1;
 52:
            var1 = -2;
            return var1;
 60:
            var1 = -1;
            return var1;
 68:
            var1 = 1;
            return var1;
        }
    };
    var3['customScoreToNumber'] = var5;
    var3['hydrateItems'] = var4;
    var4 = function hydrateNextPage() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['hydrateNextPage'] = var4;
    var4 = function createGravitySummaryFromServer(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var4 = var2.messages;
            var5 = new Array(0);
            var3 = _closure1_slot13;
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
            if(var3) { _fun0014_ip = 385; continue _fun0014 }
 66:
            var27 = var13.value;
            var3 = var27.reactions;
            var18 = var12;
            var23 = var11;
            var22 = var10;
            var21 = var9;
            var20 = var7;
            var19 = var6;
            if(!(var15 != var3)) { _fun0014_ip = 346; continue _fun0014 }
 102:
            var26 = var5.length;
            var25 = var9;
            var24 = var7;
            var3 = var6;
            if(!(var26 < var14)) { _fun0014_ip = 318; continue _fun0014 }
 123:
            var28 = _closure1_slot13;
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
            if(var26) { _fun0014_ip = 318; continue _fun0014 }
 177:
            var32 = var30.value;
            var26 = var32.count_details;
            var26 = var15 == var26;
            if(var26) { _fun0014_ip = 226; continue _fun0014 }
 195:
            var33 = var32.count_details;
            var33 = var33.burst;
            var35 = var15 != var33;
            var34 = 0;
            if(!var35) { _fun0014_ip = 219; continue _fun0014 }
 216:
            var34 = var33;
 219:
            var26 = var34 > var16;
            var29 = var33;
 226:
            var34 = var29;
            if(var26) { _fun0014_ip = 263; continue _fun0014 }
 232:
            var33 = var32.count_details;
            var33 = var33.normal;
            var36 = var15 != var33;
            var35 = 0;
            if(!var36) { _fun0014_ip = 256; continue _fun0014 }
 253:
            var35 = var33;
 256:
            var26 = var35 > var16;
            var28 = var33;
 263:
            var33 = var28;
            if(!var26) { _fun0014_ip = 279; continue _fun0014 }
 269:
            var26 = var5.push;
            var26 = var26.bind(var5)(var32);
 279:
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
            if(!var26) { _fun0014_ip = 177; continue _fun0014 }
 318:
            var26 = _closure1_slot18;
            var26 = var26.bind(var8)(var27);
            var18 = var12 + var26;
            var23 = var11;
            var22 = var10;
            var21 = var25;
            var20 = var24;
            var19 = var3;
 346:
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
            if(!var3) { _fun0014_ip = 66; continue _fun0014 }
 385:
            var3 = {};
            var3['reactions'] = var5;
            var3['reactionCount'] = var4;
            var4 = var3.reactions;
            var3 = var3.reactionCount;
            var7 = _closure1_slot19;
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var4 = new Array(0);
            var2 = var3.messages;
            var1 = null;
            if(!(var1 != var2)) { _fun0015_ip = 25; continue _fun0015 }
 19:
            var4 = var3.messages;
 25:
            var2 = _closure1_slot19;
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
    var4 = function isItemUnreadInChannel(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = _closure1_slot7;
            var3 = var4.getTrackedAckMessageId;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0016_ip = 90; continue _fun0016 }
 30:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
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
 90:
            return var1;
        }
    };
    var3['isItemUnreadInChannel'] = var4;
    var4 = function useGravityMessage(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot6;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot8;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var6 = _closure1_slot6;
                var5 = var6.getMessage;
                var1 = _closure2_slot0;
                var3 = var1.getChannelId;
                var3 = var3.bind(var1)();
                var1 = var1.id;
                var1 = var5.bind(var6)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0017_ip = 88; continue _fun0017 }
 47:
                var6 = _closure1_slot8;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var5 = var5.bind(var6)(var4);
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0017_ip = 85; continue _fun0017 }
 80:
                var4 = var5.message;
 85:
                var1 = var4;
 88:
                if(!(var3 == var1)) { _fun0017_ip = 96; continue _fun0017 }
 92:
                var1 = _closure2_slot0;
 96:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGravityMessage'] = var4;
    var4 = function useICYMIMessage(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot6;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot8;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = _closure2_slot1;
                var3 = null;
                var2 = var3 != var1;
                var1 = null;
                if(!var2) { _fun0018_ip = 88; continue _fun0018 }
 18:
                var8 = _closure1_slot6;
                var7 = var8.getMessage;
                var6 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var7.bind(var8)(var6, var2);
                if(!(var3 == var2)) { _fun0018_ip = 85; continue _fun0018 }
 49:
                var6 = _closure1_slot8;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0018_ip = 82; continue _fun0018 }
 77:
                var3 = var4.message;
 82:
                var2 = var3;
 85:
                var1 = var2;
 88:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useICYMIMessage'] = var4;
    var4 = function icymiEnabled(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getICYMIExperiment;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot4;
            var3 = var4.get;
            var2 = 'hide_icymi_tab';
            var2 = var3.bind(var4)(var2);
            if(!var1) { _fun0019_ip = 65; continue _fun0019 }
 62:
            var1 = !var2;
 65:
            return var1;
        }
    };
    var3['icymiEnabled'] = var4;
    var4 = function customStatusToContentInventoryEntry(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
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
            var4 = 14;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ContentInventoryAuthorType;
            var4 = var4.USER;
            var3['author_type'] = var4;
            var4 = new Array(0);
            var3['traits'] = var4;
            var4 = new Array(0);
            var3['participants'] = var4;
            var4 = 15;
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
            if(!var7) { _fun0020_ip = 196; continue _fun0020 }
 193:
            var5 = var6;
 196:
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
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var2 = arg3;
            var4 = _closure1_slot9;
            var3 = var4.getReadTimestamp;
            var5 = var3.bind(var4)(var7);
            var3 = null;
            if(!(var3 == var5)) { _fun0021_ip = 49; continue _fun0021 }
 33:
            var8 = var3 == var2;
            var4 = undefined;
            if(var8) { _fun0021_ip = 46; continue _fun0021 }
 42:
            var4 = var2[var7];
 46:
            var5 = var4;
 49:
            var4 = _closure1_slot9;
            var1 = var4.getReadTimestamp;
            var4 = var1.bind(var4)(var6);
            if(!(var3 == var4)) { _fun0021_ip = 84; continue _fun0021 }
 68:
            var7 = var3 == var2;
            var1 = undefined;
            if(var7) { _fun0021_ip = 81; continue _fun0021 }
 77:
            var1 = var2[var6];
 81:
            var4 = var1;
 84:
            if(!(var3 == var5)) { _fun0021_ip = 97; continue _fun0021 }
 88:
            var2 = var3 == var4;
            var1 = 0;
            if(var2) { _fun0021_ip = 130; continue _fun0021 }
 97:
            var6 = var3 == var5;
            var2 = -1;
            if(var6) { _fun0021_ip = 127; continue _fun0021 }
 110:
            var6 = var3 == var4;
            var3 = 1;
            if(var6) { _fun0021_ip = 124; continue _fun0021 }
 120:
            var3 = var4 - var5;
 124:
            var2 = var3;
 127:
            var1 = var2;
 130:
            return var1;
        }
    };
    var3['compareGravityUnreadIds'] = var4;
    var2 = function gravityFetchMentions(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.fetchRecentMentions;
        var2 = {};
        var6 = arg3;
        var2['before'] = var6;
        var5 = _closure1_slot11;
        var2['limit'] = var5;
        var5 = arg1;
        var2['roles'] = var5;
        var5 = arg2;
        var2['everyone'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['gravityFetchMentions'] = var2;
    return var1;
})();