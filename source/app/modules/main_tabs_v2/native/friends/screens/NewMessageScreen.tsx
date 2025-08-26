// app/modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 46:
                if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
                var2 = var3.@@iterator;
 55:
                if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
                var7 = var3.constructor;
 163:
                var10 = var9;
                if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
                var7 = var3.constructor;
                var10 = var7.name;
 179:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
                var9 = _closure1_slot23;
                var7 = var9.bind(var8)(var3, var8);
 247:
                _fun0002_ip = 265; continue _fun0002;
 249:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 265:
                var6 = var7;
                _fun0002_ip = 283; continue _fun0002;
 270:
                var7 = _closure1_slot23;
                var6 = var7.bind(var8)(var3, var8);
 283:
                var4 = var6;
                if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
                _closure2_slot0 = var4;
 330:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                        _fun0003_ip = 67; continue _fun0003;
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
        var _closure1_slot22 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
                return var1;
            }
        };
        var _closure1_slot23 = var1;
        var1 = function isPrivateChannelMatch(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var1.recipients;
                var3 = var2.length;
                var1 = var5.length;
                if(!(var3 === var1)) { _fun0005_ip = 93; continue _fun0005 }
 26:
                var1 = _closure1_slot22;
                var4 = undefined;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0005_ip = 89; continue _fun0005 }
 52:
                var6 = var2.value;
                var1 = var5.includes;
                var1 = var1.bind(var5)(var6);
                if(var1) { _fun0005_ip = 74; continue _fun0005 }
 70:
                var1 = false;
                return var1;
 74:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(!var1) { _fun0005_ip = 52; continue _fun0005 }
 89:
                var1 = true;
                return var1;
 93:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var1 = function findLocalMatchingPrivateChannelId(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var _closure2_slot0 = var2;
                var1 = var2.length;
                var3 = 1;
                if(!(var3 !== var1)) { _fun0006_ip = 135; continue _fun0006 }
 21:
                var5 = _closure1_slot10;
                var4 = var5.getSortedChannels;
                var6 = var4.bind(var5)();
                var5 = _closure1_slot4;
                var4 = undefined;
                var1 = 2;
                var1 = var5.bind(var4)(var6, var1);
                var6 = 0;
                var4 = var1[var6];
                var5 = new Array(2);
                var5[0] = var4;
                var1 = var1[var3];
                var5[1] = var1;
                var1 = var5.length;
                var1 = var6 < var1;
                var3 = null;
                if(!var1) { _fun0006_ip = 126; continue _fun0006 }
 89:
                var8 = var5[var6];
                var4 = var8.find;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var3 = _closure1_slot8;
                        var1 = var3.getChannel;
                        var5 = var1.bind(var3)(var4);
                        var1 = null;
                        var3 = var1 == var5;
                        if(var3) { _fun0007_ip = 47; continue _fun0007 }
 34:
                        var1 = var5.isPrivate;
                        var1 = var1.bind(var5)();
                        var3 = !var1;
 47:
                        var1 = !var3;
                        if(var3) { _fun0007_ip = 72; continue _fun0007 }
 53:
                        var4 = _closure1_slot24;
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3, var5);
 72:
                        return var1;
                    }
                };
                var1 = var4.bind(var8)(var1);
                if(!(var3 == var1)) { _fun0006_ip = 128; continue _fun0006 }
 114:
                var6 = var6 + 1;
                var4 = var5.length;
                if(var6 < var4) { _fun0006_ip = 89; continue _fun0006 }
 126:
                return var3;
 128:
                var1 = var1.channelId;
                return var1;
 135:
                var1 = 0;
                var3 = var2[var1];
                var2 = _closure1_slot8;
                var1 = var2.getDMFromUserId;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0006_ip = 171; continue _fun0006 }
 168:
                var1 = var2;
 171:
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var1 = function _findMatchingPrivateChannelId() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        StartGenerator();
                        var3 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 115; continue _fun0008 }
 10:
                        var4 = var3;
                        var2 = _closure1_slot25;
                        var7 = undefined;
                        var2 = var2.bind(var7)(var3);
                        var3 = null;
                        if(!(var3 == var2)) { _fun0008_ip = 112; continue _fun0008 }
 33:
                        var6 = var4;
                        var8 = var6.length;
                        var6 = 1;
                        if(!(!(var8 > var6))) { _fun0008_ip = 109; continue _fun0008 }
 48: // try_start_0
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 18;
                        var5 = var8[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.getDMChannel;
                        var7 = var4;
                        var4 = 0;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address=92);
 90:
                        return var4;
 92:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0008_ip = 101; continue _fun0008 }
 98: // try_end0
                        return var4;
 101:
                        return var4;
 104: // catch_target0
                        CatchBlockStart(arg_register=3);
                        return var3;
 109:
                        return var3;
 112:
                        return var2;
 115:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot26 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot26 = var1;
        var1 = function useChannelForParticipants(arg1) {
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot5;
            var5 = var6.useState;
            var1 = null;
            var6 = var5.bind(var6)(var1);
            var5 = _closure1_slot4;
            var7 = undefined;
            var1 = 2;
            var6 = var5.bind(var7)(var6, var1);
            var1 = 0;
            var1 = var6[var1];
            var _closure2_slot1 = var1;
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot2 = var5;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var6 = new Array(1);
            var6[0] = var4;
            var5 = function() {
                var10 = function handleChannelCreate(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.channel;
                        var4 = var6.id;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(var4 !== var2)) { _fun0009_ip = 103; continue _fun0009 }
 48:
                        var2 = var6.isPrivate;
                        var2 = var2.bind(var6)();
                        if(!var2) { _fun0009_ip = 103; continue _fun0009 }
 61:
                        var5 = _closure1_slot24;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var1)(var4, var6);
                        if(!var4) { _fun0009_ip = 103; continue _fun0009 }
 81:
                        var4 = _closure1_slot25;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)(var3);
 103:
                        return var1;
                    }
                };
                var _closure3_slot0 = var10;
                var5 = function handleChannelDelete(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var3 = arg1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            var2 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            var1 = var3;
                            if(!(var1 !== var2)) { _fun0010_ip = 70; continue _fun0010 }
 41:
                            var2 = _closure4_slot0;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = null;
                            if(!(var3 !== var4)) { _fun0010_ip = 67; continue _fun0010 }
 64:
                            var2 = var3;
 67:
                            var1 = var2;
 70:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot1 = var5;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 20;
                var7 = var6[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var7);
                var8 = var9.subscribe;
                var7 = 'CHANNEL_CREATE';
                var7 = var8.bind(var9)(var7, var10);
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.subscribe;
                var2 = 'CHANNEL_DELETE';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 20;
                    var2 = var5[var3];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.unsubscribe;
                    var7 = _closure3_slot0;
                    var6 = 'CHANNEL_CREATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.unsubscribe;
                    var3 = _closure3_slot1;
                    var2 = 'CHANNEL_DELETE';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var5 = var8.bind(var9)(var5, var6);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 21;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var5);
            var _closure2_slot3 = var6;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var4;
            var7[1] = var6;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = function _doAction() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0012_ip = 93; continue _fun0012 }
 7:
                                    var5 = _closure2_slot0;
                                    var2 = function findMatchingPrivateChannelId() {
                                        var1 = undefined;
                                        var4 = _closure1_slot26;
                                        var3 = var4.apply;
                                        var1 = arguments;
                                        var2 = var1;
                                        var1 = this;
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var1;
                                    };
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var5);
                                    SaveGenerator(address=34);
 32:
                                    return var2;
 34:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0012_ip = 90; continue _fun0012 }
 40:
                                    var5 = _closure2_slot2;
                                    var6 = null;
                                    var4 = var2;
                                    if(!(var6 == var4)) { _fun0012_ip = 82; continue _fun0012 }
 53:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var6 = 19;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var3)(var6);
                                    var4 = var6.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
 82:
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
 90:
                                    return var2;
 93:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot0 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot0;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0011_ip = 46; continue _fun0011 }
 31:
                    var5 = _closure2_slot2;
                    var4 = undefined;
                    var2 = null;
                    var2 = var5.bind(var4)(var2);
                    _fun0011_ip = 115; continue _fun0011;
 46:
                    var4 = _closure2_slot3;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0011_ip = 73; continue _fun0011 }
 59:
                    var5 = _closure2_slot3;
                    var4 = var5.isPrivate;
                    var2 = var4.bind(var5)();
 73:
                    if(!var2) { _fun0011_ip = 99; continue _fun0011 }
 76:
                    var6 = _closure1_slot24;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var2 = var6.bind(var3)(var5, var4);
 99:
                    if(var2) { _fun0011_ip = 115; continue _fun0011 }
 102:
                    var2 = function doAction() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5, var7);
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var4;
            var5[1] = var1;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0013_ip = 52; continue _fun0013 }
 13:
                    var2 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var2 === var1)) { _fun0013_ip = 74; continue _fun0013 }
 52:
                    var2 = _closure1_slot25;
                    var1 = _closure2_slot0;
                    var11 = undefined;
                    var1 = var2.bind(var11)(var1);
                    if(!(var7 != var1)) { _fun0013_ip = 78; continue _fun0013 }
 74:
                    var1 = undefined;
                    return var1;
 78:
                    var2 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 20;
                    var1 = var12[var1];
                    var3 = var2.bind(var11)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CHANNEL_CREATE';
                    var1['type'] = var4;
                    var6 = _closure1_slot7;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var8 = 19;
                    var8 = var12[var8];
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var4['id'] = var8;
                    var8 = _closure2_slot0;
                    var10 = var8.length;
                    var8 = 1;
                    if(!(var8 !== var10)) { _fun0013_ip = 173; continue _fun0013 }
 161:
                    var8 = _closure1_slot14;
                    var8 = var8.GROUP_DM;
                    _fun0013_ip = 183; continue _fun0013;
 173:
                    var9 = _closure1_slot14;
                    var8 = var9.DM;
 183:
                    var4['type'] = var8;
                    var8 = '';
                    var4['name'] = var8;
                    var4['guild_id'] = var7;
                    var5 = _closure2_slot0;
                    var4['recipients'] = var5;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var14 = var5;
                    var13 = var4;
                    var4 = new var14[var6](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var1['channel'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 20;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'CHANNEL_DELETE';
                        var2['type'] = var5;
                        var5 = {};
                        var7 = _closure1_slot0;
                        var6 = 19;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        var5['id'] = var6;
                        var5['guild_id'] = var1;
                        var5['parent_id'] = var1;
                        var2['channel'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var5);
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0014_ip = 60; continue _fun0014 }
 16:
                    var2 = _closure2_slot3;
                    var3 = var2.id;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var4);
                    var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var1 = var3 === var2;
 60:
                    if(!var1) { _fun0014_ip = 143; continue _fun0014 }
 63:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.dispatch;
                    var1 = {'type': 'LOAD_MESSAGES_SUCCESS', 'channelId': null, 'messages': null, 'isBefore': false, 'isAfter': false, 'hasMoreBefore': false, 'hasMoreAfter': false, 'limit': 0, 'jump': null, 'isStale': false};
                    var5 = _closure2_slot3;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var5 = new Array(0);
                    var1['messages'] = var5;
                    var1['jump'] = var4;
                    var1 = var2.bind(var3)(var1);
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function Header(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var2 = arg1;
                var8 = var2.title;
                var9 = var2.numInGroup;
                var _closure2_slot0 = var9;
                var2 = _closure1_slot20;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var2 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    var1 = var2 - var1;
                    return var1;
                };
                var18 = var6.bind(var7)(var2, var3);
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 11;
                var2 = var12[var2];
                var3 = var6.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function a() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = 5;
                        var5 = var2 >= var1;
                        var1 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var7 = 25;
                        var3 = var3[var7];
                        var6 = undefined;
                        var9 = var4.bind(var6)(var3);
                        var8 = var9.withTiming;
                        var3 = 0;
                        if(!var5) { _fun0016_ip = 54; continue _fun0016 }
 51:
                        var3 = 1;
 54:
                        var3 = var8.bind(var9)(var3);
                        var1['opacity'] = var3;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.withTiming;
                        var4 = 0;
                        if(!var5) { _fun0016_ip = 93; continue _fun0016 }
 90:
                        var4 = 20;
 93:
                        var2 = var2.bind(var3)(var4);
                        var1['maxHeight'] = var2;
                        return var1;
                    }
                };
                var7 = {};
                var7['numInGroup'] = var9;
                var9 = 5;
                var7['NUM_IN_GROUP_THRESHOLD'] = var9;
                var9 = 25;
                var9 = var12[var9];
                var9 = var6.bind(var4)(var9);
                var9 = var9.withTiming;
                var7['withTiming'] = var9;
                var1['__closure'] = var7;
                var7 = 12426216833792.0;
                var1['__workletHash'] = var7;
                var7 = _closure1_slot21;
                var1['__initData'] = var7;
                var11 = var2.bind(var3)(var1);
                var1 = 0;
                var9 = var1 === var18;
                var3 = _closure1_slot18;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var5.header;
                var1['style'] = var5;
                var7 = _closure1_slot17;
                var5 = 26;
                var5 = var12[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.GenericHeaderTitle;
                var5 = {};
                var5['title'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot17;
                var7 = _closure1_slot19;
                var6 = {};
                var6['style'] = var11;
                var11 = 'text-xs/medium';
                var6['variant'] = var11;
                var11 = 'text-muted';
                if(!var9) { _fun0015_ip = 275; continue _fun0015 }
 269:
                var11 = 'status-danger';
 275:
                var6['color'] = var11;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 27;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                if(var9) { _fun0015_ip = 371; continue _fun0015 }
 307:
                var15 = var12.formatToPlainString;
                var9 = var14[var10];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var11 = var9.HrSDPD;
                var9 = {};
                var16 = global;
                var16 = var16.HermesInternal;
                var17 = var16.concat;
                var16 = '';
                var16 = var17.bind(var16)(var18);
                var9['number'] = var16;
                var9 = var15.bind(var12)(var11, var9);
                _fun0015_ip = 403; continue _fun0015;
 371:
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.yiQW1N;
                var9 = var11.bind(var12)(var10);
 403:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function ChatPreview(arg1) {
            var3 = arg1;
            var15 = var3.channelId;
            var _closure2_slot0 = var15;
            var2 = var3.navigateToChannel;
            var12 = var3.tagListInputRef;
            var3 = _closure1_slot20;
            var4 = undefined;
            var8 = var3.bind(var4)();
            var6 = _closure1_slot5;
            var5 = var6.useRef;
            var3 = null;
            var13 = var5.bind(var6)(var3);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var15;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0017_ip = 17; continue _fun0017 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 18;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.preload;
                    var2 = _closure1_slot15;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = function() {
                        var5 = _closure2_slot0;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 16;
                        var3 = var4[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.disableAutomaticAck;
                        var3 = '';
                        var3 = var6.bind(var7)(var5, var3);
                        var3 = _closure1_slot1;
                        var2 = 17;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateChatOpen;
                        var2 = false;
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var5);
            var1 = function useRedirectToChannelOnMessage(arg1, arg2) {
                var7 = arg1;
                var6 = arg2;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var6;
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var2 = _closure1_slot12;
                    var5 = var2.MESSAGE_COMPOSER_TRANSITIONED;
                    var4 = {};
                    var3 = _closure3_slot0;
                    var4['channel_id'] = var3;
                    var4 = var6.bind(var7)(var5, var4);
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = var4.bind(var5)(var2, var3);
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var1.bind(var4)(var15, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var8.background;
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var8.container;
            var5['style'] = var8;
            var11 = _closure1_slot17;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 28;
            var8 = var14[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {'guildId': null, 'channelId': null, 'chatInputRef': null, 'HACK_fixModalInteraction': true, 'alwaysRespectKeyboard': true, 'screenIndex': 'new-message'};
            var16 = _closure1_slot15;
            var8['guildId'] = var16;
            var8['channelId'] = var15;
            var8['chatInputRef'] = var13;
            var8['secondaryTextFieldRef'] = var12;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot17;
            var13 = _closure1_slot0;
            var9 = 29;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var10 = var9.PortalKeyboardRenderer;
            var9 = {};
            var12 = 15;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var9['portal'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot29 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var12 = 1;
        var4 = var6[var12];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.PrivateChannelRecord;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UserRowModes;
        var _closure1_slot11 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.AnalyticEvents;
        var _closure1_slot12 = var7;
        var7 = var4.AnalyticsSections;
        var _closure1_slot13 = var7;
        var7 = var4.ChannelTypes;
        var _closure1_slot14 = var7;
        var7 = var4.ME;
        var _closure1_slot15 = var7;
        var4 = var4.Routes;
        var _closure1_slot16 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot17 = var7;
        var4 = var4.jsxs;
        var _closure1_slot18 = var4;
        var4 = 11;
        var4 = var6[var4];
        var8 = var11.bind(var1)(var4);
        var7 = var8.createAnimatedComponent;
        var4 = 12;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.Text;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot19 = var4;
        var4 = 13;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['flex'] = var12;
        var4['container'] = var9;
        var9 = {};
        var9['flex'] = var12;
        var10 = 14;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BG_BASE_PRIMARY;
        var9['backgroundColor'] = var13;
        var4['background'] = var9;
        var9 = {};
        var13 = 'column';
        var9['flexDirection'] = var13;
        var13 = 15;
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isAndroid;
        var14 = var13.bind(var14)();
        var13 = 'center';
        if(!var14) { _fun0001_ip = 557; continue _fun0001 }
 551:
        var13 = 'flex-start';
 557:
        var9['alignItems'] = var13;
        var4['header'] = var9;
        var9 = {};
        var13 = 24;
        var9['marginTop'] = var13;
        var4['loading'] = var9;
        var9 = {'flexGrow': 1, 'justifyContent': 'center'};
        var4['emptyContainer'] = var9;
        var9 = {};
        var9['flexGrow'] = var12;
        var4['emptyKeyboardView'] = var9;
        var9 = {'marginBottom': null, 'flexDirection': 'row', 'justifyContent': 'center', 'width': '100%'};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var9['marginBottom'] = var10;
        var4['addFriendsButtonContainer'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot20 = var4;
        var4 = {};
        var7 = 'function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}';
        var4['code'] = var7;
        var _closure1_slot21 = var4;
        var4 = 45;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function NewMessageScreen(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = arg1;
                var24 = var1.navigation;
                var _closure2_slot0 = var24;
                var1 = var1.route;
                var1 = var1.params;
                var11 = var1.defaultSelectedUserId;
                var1 = var1.sourcePage;
                var _closure2_slot1 = var1;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var1 = _closure1_slot20;
                var23 = var1.bind(var4)();
                var _closure2_slot2 = var23;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 30;
                var2 = var7[var1];
                var5 = var6.bind(var4)(var2);
                var2 = 31;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.NEW_MESSAGE_COMPOSER;
                var2 = var5.bind(var4)(var2);
                var5 = var2.analyticsLocations;
                var2 = 32;
                var2 = var7[var2];
                var8 = var6.bind(var4)(var2);
                var2 = {};
                var9 = true;
                var2['includeKeyboardHeightIOS'] = var9;
                var2 = var8.bind(var4)(var2);
                var10 = var2.insets;
                var _closure2_slot3 = var10;
                var2 = 33;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var2 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.MESSAGE_COMPOSER_OPENED;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['source_page'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var6.bind(var4)(var2);
                var7 = _closure1_slot5;
                var6 = var7.useState;
                var22 = null;
                if(!(var22 == var11)) { _fun0018_ip = 222; continue _fun0018 }
 216:
                var2 = new Array(0);
                _fun0018_ip = 233; continue _fun0018;
 222:
                var8 = new Array(1);
                var8[0] = var11;
                var2 = var8;
 233:
                var6 = var6.bind(var7)(var2);
                var2 = _closure1_slot4;
                var12 = 2;
                var2 = var2.bind(var4)(var6, var12);
                var6 = 0;
                var15 = var2[var6];
                _closure2_slot4 = var15;
                var8 = 1;
                var2 = var2[var8];
                _closure2_slot5 = var2;
                var7 = _closure1_slot5;
                var2 = var7.useState;
                var13 = false;
                var7 = var2.bind(var7)(var13);
                var2 = _closure1_slot4;
                var7 = var2.bind(var4)(var7, var12);
                var2 = var7[var6];
                var7 = var7[var8];
                _closure2_slot6 = var7;
                var11 = _closure1_slot5;
                var7 = var11.useState;
                var11 = var7.bind(var11)(var13);
                var7 = _closure1_slot4;
                var7 = var7.bind(var4)(var11, var12);
                var12 = var7[var6];
                var7 = var7[var8];
                _closure2_slot7 = var7;
                var7 = _closure1_slot27;
                var21 = var7.bind(var4)(var15);
                _closure2_slot8 = var21;
                var8 = _closure1_slot5;
                var7 = var8.useRef;
                var18 = var7.bind(var8)(var22);
                var13 = _closure1_slot5;
                var11 = var13.useLayoutEffect;
                var8 = new Array(3);
                var8[0] = var24;
                var7 = var15.length;
                var8[1] = var7;
                var8[2] = var21;
                var7 = function() {
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = function headerTitle(arg1) {
                        var1 = arg1;
                        var1 = var1.children;
                        var4 = _closure1_slot17;
                        var3 = _closure1_slot28;
                        var2 = {};
                        var5 = _closure2_slot4;
                        var5 = var5.length;
                        var2['numInGroup'] = var5;
                        var2['title'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['headerTitle'] = var5;
                    var4 = function headerRight() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var2 = _closure2_slot8;
                            var7 = null;
                            var1 = null;
                            if(!(var7 !== var2)) { _fun0019_ip = 107; continue _fun0019 }
 15:
                            var4 = _closure2_slot8;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var5 = undefined;
                            var3 = var8.bind(var5)(var3);
                            var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            var1 = null;
                            if(!(var4 !== var3)) { _fun0019_ip = 107; continue _fun0019 }
 56:
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 34;
                            var2 = var7[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var6 = _closure2_slot8;
                            var2['channelId'] = var6;
                            var6 = 'new-message';
                            var2['screenIndex'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
 107:
                            return var1;
                        }
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var7 = var11.bind(var13)(var7, var8);
                var13 = _closure1_slot5;
                var11 = var13.useCallback;
                var8 = new Array(1);
                var8[0] = var24;
                var7 = function(arg1) {
                    var2 = _closure2_slot0;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionTo;
                    var7 = _closure1_slot16;
                    var6 = var7.CHANNEL;
                    var5 = _closure1_slot15;
                    var2 = arg1;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var20 = var11.bind(var13)(var7, var8);
                _closure2_slot9 = var20;
                var13 = _closure1_slot5;
                var11 = var13.useCallback;
                var7 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0020_ip = 449; continue _fun0020 }
 13:
                                var4 = _closure1_slot7;
                                var4 = var2 instanceof var4;
                                if(var4) { _fun0020_ip = 385; continue _fun0020 }
 30:
                                var6 = _closure1_slot9;
                                var5 = var6.isFriend;
                                var4 = var2.id;
                                var4 = var5.bind(var6)(var4);
                                if(var4) { _fun0020_ip = 161; continue _fun0020 }
 53:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 18;
                                var4 = var6[var4];
                                var6 = undefined;
                                var7 = var5.bind(var6)(var4);
                                var5 = var7.getOrEnsurePrivateChannel;
                                var4 = var2.id;
                                var4 = var5.bind(var7)(var4);
                                SaveGenerator(address=95);
 93:
                                return var4;
 95:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                if(var5) { _fun0020_ip = 158; continue _fun0020 }
 101:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 22;
                                var5 = var8[var5];
                                var8 = var7.bind(var6)(var5);
                                var7 = var8.track;
                                var5 = _closure1_slot12;
                                var5 = var5.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                var5 = var7.bind(var8)(var5);
                                var5 = _closure2_slot9;
                                var5 = var5.bind(var6)(var4);
                                var5 = undefined;
                                return var5;
 158:
                                return var4;
 161:
                                var7 = _closure2_slot4;
                                var6 = var7.indexOf;
                                var4 = var2.id;
                                var7 = var6.bind(var7)(var4);
                                var11 = _closure2_slot4;
                                var8 = new Array(0);
                                var10 = 0;
                                var12 = var8;
                                var4 = arraySpread(var12, var11, var10);
                                var4 = -1;
                                if(!(var4 !== var7)) { _fun0020_ip = 228; continue _fun0020 }
 211:
                                var6 = var8.splice;
                                var4 = 1;
                                var4 = var6.bind(var8)(var7, var4);
                                _fun0020_ip = 289; continue _fun0020;
 228:
                                var4 = _closure2_slot4;
                                var7 = var4.length;
                                var9 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 24;
                                var4 = var6[var4];
                                var6 = undefined;
                                var4 = var9.bind(var6)(var4);
                                var9 = var4.bind(var6)();
                                var4 = 1;
                                var4 = var9 - var4;
                                if(!(!(var7 >= var4))) { _fun0020_ip = 314; continue _fun0020 }
 274:
                                var7 = var8.push;
                                var4 = var2.id;
                                var4 = var7.bind(var8)(var4);
 289:
                                var7 = _closure2_slot5;
                                var4 = undefined;
                                var7 = var7.bind(var4)(var8);
                                var7 = _closure2_slot7;
                                var5 = false;
                                var5 = var7.bind(var4)(var5);
                                return var4;
 314:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 36;
                                var4 = var7[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.showMaxGroupMembers;
                                var4 = var4.bind(var5)();
                                var5 = _closure1_slot1;
                                var4 = 22;
                                var4 = var7[var4];
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.track;
                                var4 = _closure1_slot12;
                                var4 = var4.MESSAGE_COMPOSER_MAX_USERS_ADDED;
                                var4 = var5.bind(var6)(var4);
                                var4 = undefined;
                                return var4;
 385:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var4 = 22;
                                var5 = var5[var4];
                                var4 = undefined;
                                var6 = var6.bind(var4)(var5);
                                var5 = var6.track;
                                var3 = _closure1_slot12;
                                var3 = var3.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure2_slot9;
                                var2 = var2.id;
                                var2 = var3.bind(var4)(var2);
                                var2 = undefined;
                                return var2;
 449:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot0 = var2;
                    var1 = function(arg1) {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var8 = var7.bind(var4)();
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var20;
                var17 = var11.bind(var13)(var8, var7);
                var13 = _closure1_slot5;
                var11 = var13.useCallback;
                var8 = function() {
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var7 = new Array(0);
                var11 = var11.bind(var13)(var8, var7);
                var14 = _closure1_slot5;
                var13 = var14.useCallback;
                var8 = function(arg1) {
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
                    var2 = arg1;
                    var4 = var2.length;
                    var2 = 0;
                    var2 = var4 > var2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var7 = new Array(0);
                var16 = var13.bind(var14)(var8, var7);
                var14 = _closure1_slot5;
                var13 = var14.useMemo;
                var8 = new Array(1);
                var8[0] = var15;
                var7 = function() {
                    var3 = _closure2_slot4;
                    var2 = var3.join;
                    var1 = ':';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13 = var13.bind(var14)(var7, var8);
                var14 = undefined;
                if(var2) { _fun0018_ip = 656; continue _fun0018 }
 576:
                var14 = undefined;
                if(var12) { _fun0018_ip = 656; continue _fun0018 }
 581:
                var2 = var15.length;
                var2 = var2 > var6;
                var14 = undefined;
                if(!var2) { _fun0018_ip = 656; continue _fun0018 }
 595:
                var8 = _closure1_slot17;
                var7 = _closure1_slot29;
                var2 = {};
                if(!(var22 == var21)) { _fun0018_ip = 635; continue _fun0018 }
 609:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 19;
                var22 = var26[var22];
                var22 = var25.bind(var4)(var22);
                var21 = var22.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
 635:
                var2['channelId'] = var21;
                var2['navigateToChannel'] = var20;
                var2['tagListInputRef'] = var18;
                var14 = var8.bind(var4)(var7, var2, var13);
 656:
                var2 = var15.length;
                var13 = var6 === var2;
                _closure2_slot10 = var13;
                var2 = _closure1_slot0;
                var22 = _closure1_slot2;
                var6 = 21;
                var6 = var22[var6];
                var20 = var2.bind(var4)(var6);
                var8 = var20.useStateFromStores;
                var6 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() {
                    var2 = _closure1_slot9;
                    var1 = var2.getRelationshipCount;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var6 = var8.bind(var20)(var7, var6);
                _closure2_slot11 = var6;
                var20 = _closure1_slot5;
                var8 = var20.useMemo;
                var7 = new Array(3);
                var7[0] = var24;
                var7[1] = var6;
                var7[2] = var13;
                var6 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var1 = new Array(0);
                        var3 = _closure2_slot10;
                        if(!var3) { _fun0021_ip = 307; continue _fun0021 }
 19:
                        var2 = _closure2_slot11;
                        if(!var2) { _fun0021_ip = 167; continue _fun0021 }
 29:
                        var3 = var1.push;
                        var2 = {};
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 37;
                        var6 = var10[var6];
                        var9 = undefined;
                        var6 = var7.bind(var9)(var6);
                        var2['icon'] = var6;
                        var8 = _closure1_slot0;
                        var5 = 38;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.GroupPlusIcon;
                        var2['IconComponent'] = var5;
                        var5 = 27;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.3hF1W1;
                        var5 = var6.bind(var7)(var5);
                        var2['label'] = var5;
                        var5 = 'blurple';
                        var2['iconVariant'] = var5;
                        var5 = function onPress() {
                            var4 = _closure2_slot0;
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = false;
                            var2['allowNameEdit'] = var1;
                            var1 = _closure1_slot13;
                            var1 = var1.NEW_MESSAGE_COMPOSER;
                            var2['locationPage'] = var1;
                            var1 = 'gdm';
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var2['onPress'] = var5;
                        var2 = var3.bind(var1)(var2);
 167:
                        var3 = var1.push;
                        var2 = {};
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 39;
                        var6 = var10[var6];
                        var9 = undefined;
                        var6 = var7.bind(var9)(var6);
                        var2['icon'] = var6;
                        var8 = _closure1_slot0;
                        var5 = 40;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.UserPlusIcon;
                        var2['IconComponent'] = var5;
                        var5 = 27;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.9nbDJy;
                        var5 = var6.bind(var7)(var5);
                        var2['label'] = var5;
                        var5 = 'boosting-pink';
                        var2['iconVariant'] = var5;
                        var4 = function onPress() {
                            var4 = _closure2_slot0;
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = 'New Message Composer';
                            var2['sourcePage'] = var1;
                            var1 = 'add-friends';
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = undefined;
                            return var1;
                        };
                        var2['onPress'] = var4;
                        var2 = var3.bind(var1)(var2);
 307:
                        return var1;
                    }
                };
                var21 = var8.bind(var20)(var6, var7);
                var20 = _closure1_slot5;
                var8 = var20.useMemo;
                var7 = new Array(1);
                var7[0] = var24;
                var6 = function() {
                    var2 = {};
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 39;
                    var3 = var7[var3];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var3);
                    var2['icon'] = var3;
                    var5 = _closure1_slot0;
                    var1 = 40;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.UserPlusIcon;
                    var2['IconComponent'] = var1;
                    var1 = 27;
                    var3 = var7[var1];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.9nbDJy;
                    var1 = var3.bind(var4)(var1);
                    var2['label'] = var1;
                    var1 = 'boosting-pink';
                    var2['iconVariant'] = var1;
                    var1 = function onPress() {
                        var4 = _closure2_slot0;
                        var3 = var4.navigate;
                        var2 = {};
                        var1 = 'New Message Composer';
                        var2['sourcePage'] = var1;
                        var1 = 'add-friends';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var2['onPress'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                };
                var20 = var8.bind(var20)(var6, var7);
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var6 = new Array(3);
                var6[0] = var24;
                var6[1] = var23;
                var10 = var10.bottom;
                var6[2] = var10;
                var3 = function() {
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var12 = _closure2_slot2;
                    var5 = var12.emptyKeyboardView;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var5 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.bottom;
                    var5['paddingBottom'] = var6;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var7 = _closure1_slot17;
                    var6 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var1 = 41;
                    var5 = var19[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = {};
                    var18 = _closure1_slot0;
                    var15 = 27;
                    var8 = var19[var15];
                    var8 = var18.bind(var1)(var8);
                    var10 = var8.intl;
                    var9 = var10.string;
                    var8 = var19[var15];
                    var8 = var18.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.1ESycn;
                    var8 = var9.bind(var10)(var8);
                    var5['title'] = var8;
                    var8 = var19[var15];
                    var8 = var18.bind(var1)(var8);
                    var10 = var8.intl;
                    var9 = var10.string;
                    var8 = var19[var15];
                    var8 = var18.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.5IlFpq;
                    var8 = var9.bind(var10)(var8);
                    var5['subtitle'] = var8;
                    var8 = var12.emptyContainer;
                    var5['containerStyle'] = var8;
                    var14 = true;
                    var5['fullHeight'] = var14;
                    var10 = _closure1_slot17;
                    var9 = _closure1_slot6;
                    var8 = {};
                    var12 = var12.addFriendsButtonContainer;
                    var8['style'] = var12;
                    var13 = _closure1_slot17;
                    var11 = 42;
                    var11 = var19[var11];
                    var11 = var18.bind(var1)(var11);
                    var12 = var11.Button;
                    var11 = {};
                    var16 = var19[var15];
                    var16 = var18.bind(var1)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.zIJnAw;
                    var15 = var16.bind(var17)(var15);
                    var11['text'] = var15;
                    var15 = 'lg';
                    var11['size'] = var15;
                    var15 = function onPress() {
                        var4 = _closure2_slot0;
                        var3 = var4.navigate;
                        var2 = {};
                        var1 = 'New Message Composer No Results';
                        var2['sourcePage'] = var1;
                        var1 = 'add-friends';
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var11['onPress'] = var15;
                    var11['grow'] = var14;
                    var11 = var13.bind(var1)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var5['children'] = var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var10 = var7.bind(var8)(var3, var6);
                var3 = _closure1_slot18;
                var1 = var22[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1['value'] = var5;
                var8 = _closure1_slot17;
                var7 = _closure1_slot1;
                var5 = 43;
                var5 = var22[var5];
                var6 = var7.bind(var4)(var5);
                var5 = {'absolute': true, 'tall': true, 'wide': true};
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot17;
                var6 = 44;
                var6 = var22[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['actions'] = var21;
                var6['noResultActions'] = var20;
                var19 = _closure1_slot11;
                var19 = var19.NONE;
                var6['rowMode'] = var19;
                var6['tagListInputRef'] = var18;
                var6['onSelectUser'] = var17;
                var6['onQueryChanged'] = var16;
                var6['selectedUserIds'] = var15;
                var6['withAffinitySuggestions'] = var9;
                var6['overrideResults'] = var14;
                var6['withGuildMembers'] = var13;
                var6['withGDMNames'] = var9;
                var6['forceSearchResults'] = var12;
                var6['onForceSearchResults'] = var11;
                var6['defaultNoResultsFound'] = var10;
                var6['autoFocusSearch'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();