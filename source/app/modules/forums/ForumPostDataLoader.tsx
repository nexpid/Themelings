// app/modules/forums/ForumPostDataLoader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _shouldRequestFirstMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var2 = arg2;
            var1 = var3 == var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function loadMultipleForumPostData(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = false;
            var _closure2_slot1 = var2;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot8;
                    var1 = var3.getMessage;
                    var1 = var1.bind(var3)(var6);
                    var5 = _closure1_slot14;
                    var4 = var1.loaded;
                    var3 = var1.firstMessage;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var4, var3);
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = _closure1_slot12;
                    var4 = var5.request;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2, var6);
                    var2 = true;
                    _closure2_slot1 = var2;
case 4:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot13;
            var2 = null;
            var1 = var2 == var3;
case 6:
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = global;
            var5 = var1.setTimeout;
            var4 = _closure1_slot16;
            var3 = undefined;
            var1 = 0;
            var1 = var5.bind(var3)(var4, var1);
            _closure1_slot13 = var1;
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function loadForumPostData() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _loadForumPostData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11: // try_start_0
                    var3 = _closure1_slot12;
                    var2 = var3.hasNext;
                    var2 = var2.bind(var3)();
                    var3 = undefined;
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = _closure1_slot18;
                    var6 = _closure1_slot12;
                    var2 = var6.next;
                    var2 = var2.bind(var6)();
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=55);
case 14:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 15:
                    var6 = _closure1_slot12;
                    var5 = var6.hasNext;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 12: // try_end0
                    var5 = null;
                    _closure1_slot13 = var5;
                    return var3;
case 8:
                    var3 = null;
                    _closure1_slot13 = var3;
                    return var2;
case 16: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = null;
                    _closure1_slot13 = var3;
                    throw var2;
case 10:
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
    var1 = function loadForumPostDataForChannelId() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _loadForumPostDataForChannelId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = var10;
                    var2 = undefined;
                    var3 = undefined;
                    var8 = undefined;
                    var11 = undefined;
                    var9 = _closure1_slot12;
                    var7 = var9.getNextBatch;
                    var6 = 10;
                    var3 = var7.bind(var9)(var10, var6);
case 5: // try_start_0 // try_start_1
                    var6 = var3;
                    var7 = var6.length;
                    var6 = 0;
                    if(!(var6 !== var7)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var9 = _closure1_slot6;
                    var7 = var9.getChannel;
                    var6 = var4;
                    var6 = var7.bind(var9)(var6);
                    var8 = var6;
                    var7 = null;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0005_ip = 21; continue _fun0005 }
case 16:
                    var6 = var8.guild_id;
case 21:
                    var11 = var6;
                    if(!(var7 != var6)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.post;
                    var6 = {};
                    var12 = _closure1_slot10;
                    var10 = var12.FORUM_POSTS;
                    var9 = var4;
                    var9 = var10.bind(var12)(var9);
                    var6['url'] = var9;
                    var9 = {};
                    var10 = var3;
                    var9['thread_ids'] = var10;
                    var6['body'] = var9;
                    var9 = true;
                    var6['rejectWithError'] = var9;
                    var6 = var7.bind(var8)(var6);
                    SaveGenerator(address=197);
case 24:
                    return var6;
case 25:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var7 = var6.body;
                    var10 = var7.threads;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var12 = 'LOAD_FORUM_POSTS';
                    var7['type'] = var12;
                    var7['guildId'] = var11;
                    var7['threads'] = var10;
                    var7 = var8.bind(var9)(var7);
case 28: // try_end0
                    _fun0005_ip = 29; continue _fun0005;
case 26: // try_end1
                    var10 = _closure1_slot12;
                    var9 = var10.finishRequesting;
                    var8 = var4;
                    var7 = var3;
                    var7 = var9.bind(var10)(var8, var7);
                    return var6;
case 22:
                    var9 = _closure1_slot12;
                    var8 = var9.finishRequesting;
                    var7 = var4;
                    var6 = var3;
                    var6 = var8.bind(var9)(var7, var6);
                    return var2;
case 19:
                    var9 = _closure1_slot12;
                    var8 = var9.finishRequesting;
                    var7 = var4;
                    var6 = var3;
                    var6 = var8.bind(var9)(var7, var6);
                    return var2;
case 30: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=5);
case 29: // try_end2
                    var9 = _closure1_slot12;
                    var8 = var9.finishRequesting;
                    var7 = var4;
                    var6 = var3;
                    var6 = var8.bind(var9)(var7, var6);
                    return var2;
case 31: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var6 = _closure1_slot12;
                    var5 = var6.finishRequesting;
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.computeThreadIdsSnapshot;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function DefaultDict(arg1) {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['_set'] = var2;
            var2 = arg1;
            var3['_defaultValueFunc'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'get';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var4 = var1._set;
                var3 = var4.hasOwnProperty;
                var3 = var3.bind(var4)(var2);
                if(var3) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var4 = var1._set;
                var3 = var1._defaultValueFunc;
                var3 = var3.bind(var1)();
                var4[var2] = var3;
case 32:
                var1 = var1._set;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._set;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'hasNext';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEmpty;
            var1 = this;
            var1 = var1._set;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'next';
        var1['key'] = var6;
        var5 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.keys;
            var1 = this;
            var1 = var1._set;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot11 = var4;
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function RequestQueue() {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var5 = _closure1_slot11;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var7 = function() {
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['requested'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'request';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.requested;
            var2 = var3.get;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.add;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasRequested';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.requested;
            var2 = var3.get;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.has;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'finishRequesting';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = arg1;
            var4 = arg2;
            var2 = this;
            var5 = var2.requested;
            var2 = var5.get;
            var2 = var2.bind(var5)(var3);
            var _closure3_slot0 = var2;
            var2 = var4.forEach;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var2 = _closure1_slot12;
            var1 = var2.compact;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getRequested';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.requested;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getNextBatch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = this;
            var5 = var1.requested;
            var4 = var5.get;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var4 = var2.bind(var3)(var1);
            var3 = var4.slice;
            var2 = 0;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'hasNext';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.requested;
            var1 = var2.hasNext;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'next';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.requested;
            var1 = var2.next;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'compact';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.requested;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = var2.size;
                var2 = 0;
                if(!(var2 === var4)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                var2 = var1.requested;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = null;
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumPostDataLoader.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFirstForumPostMessage(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var2 = var9[var5];
            var6 = undefined;
            var11 = var7.bind(var6)(var2);
            var10 = var11.useStateFromStoresObject;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var10.bind(var11)(var3, var2);
            var3 = var2.loaded;
            var2 = var2.firstMessage;
            var5 = var9[var5];
            var10 = var7.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var10)(var7, var5);
            var7 = null;
            var7 = var7 != var5;
            if(!var7) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var8 = _closure1_slot14;
            var7 = var8.bind(var6)(var3, var2);
case 36:
            if(!var7) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var4 = var4.id;
            var1 = function preloadForumPostDataFrom(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var7 = arg2;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var6 = _closure1_slot12;
                    var5 = var6.hasRequested;
                    var1 = var4.id;
                    var5 = var5.bind(var6)(var1, var7);
                    var1 = undefined;
                    if(var5) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var6 = _closure1_slot7;
                    var5 = var4.id;
                    var8 = var6.bind(var1)(var5);
                    var6 = var8.findIndex;
                    var5 = function(arg1) {
                        var2 = _closure3_slot1;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var7 = var6.bind(var8)(var5);
                    var6 = var8.slice;
                    var5 = 5;
                    var5 = var7 + var5;
                    var6 = var6.bind(var8)(var7, var5);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var4 = _closure1_slot12;
                        var3 = var4.hasRequested;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    var2 = _closure1_slot15;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
case 40:
                    return var1;
                }
            };
            var1 = var1.bind(var6)(var5, var4);
case 38:
            var1 = {};
            var1['loaded'] = var3;
            var1['firstMessage'] = var2;
            return var1;
        }
    };
    var3['useFirstForumPostMessage'] = var4;
    var4 = function useMostRecentForumMessage(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getMessageState;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = {};
        var3 = var2.loaded;
        var1['loaded'] = var3;
        var2 = var2.message;
        var1['mostRecentMessage'] = var2;
        return var1;
    };
    var3['useMostRecentForumMessage'] = var4;
    var2 = function preloadForumThreads(arg1) {
        var4 = arg1;
        var3 = _closure1_slot15;
        var5 = _closure1_slot7;
        var2 = var4.id;
        var1 = undefined;
        var7 = var5.bind(var1)(var2);
        var6 = var7.slice;
        var5 = 0;
        var2 = 10;
        var2 = var6.bind(var7)(var5, var2);
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['preloadForumThreads'] = var2;
    return var1;
})();