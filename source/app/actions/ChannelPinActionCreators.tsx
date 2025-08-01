// app/actions/ChannelPinActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var7 = var6[var2];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FetchState;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot6 = var7;
    var2 = var2.MAX_PINS_PER_CHANNEL;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function pinMessage(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 184; continue _fun0001 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var2 = _closure2_slot0;
                    var11 = var2.id;
                    var5 = var2.name;
                    _closure4_slot0 = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=82);
 80:
                    return var2;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 181; continue _fun0001 }
 88:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.put;
                    var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var10 = _closure1_slot6;
                    var9 = var10.PIN;
                    var8 = _closure2_slot1;
                    var8 = var9.bind(var10)(var11, var8);
                    var5['url'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.catch;
                    var4 = function() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var2 = _closure2_slot0;
                            var1 = var2.isPrivate;
                            var3 = var1.bind(var2)();
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var9 = 5;
                            var4 = var2[var9];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var2[var9];
                            var2 = var6.bind(var1)(var2);
                            var2 = var2.t;
                            if(var3) { _fun0002_ip = 108; continue _fun0002 }
 69:
                            var6 = var2.NnO1S0;
                            var3 = {};
                            var8 = _closure1_slot7;
                            var3['maxPins'] = var8;
                            var8 = _closure4_slot0;
                            var3['channelName'] = var8;
                            var6 = var4.bind(var5)(var6, var3);
                            _fun0002_ip = 133; continue _fun0002;
 108:
                            var3 = var2.Q89oQU;
                            var2 = {};
                            var8 = _closure1_slot7;
                            var2['maxPins'] = var8;
                            var6 = var4.bind(var5)(var3, var2);
 133:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 6;
                            var2 = var5[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var7 = var5[var9];
                            var7 = var8.bind(var1)(var7);
                            var11 = var7.intl;
                            var10 = var11.string;
                            var7 = var5[var9];
                            var7 = var8.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.HI88Q0;
                            var7 = var10.bind(var11)(var7);
                            var2['title'] = var7;
                            var2['body'] = var6;
                            var6 = var5[var9];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.BddRzc;
                            var5 = var6.bind(var7)(var5);
                            var2['confirmText'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
 181:
                    return var2;
 184:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['pinMessage'] = var7;
    var7 = function unpinMessage(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 175; continue _fun0003 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=62);
 60:
                    return var2;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 172; continue _fun0003 }
 68:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.del;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var10 = _closure1_slot6;
                    var9 = var10.PIN;
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var7 = _closure2_slot1;
                    var7 = var9.bind(var10)(var8, var7);
                    var4['url'] = var7;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.catch;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 6;
                        var1 = var10[var1];
                        var9 = undefined;
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var8 = _closure1_slot0;
                        var5 = 5;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.xFjBys;
                        var6 = var7.bind(var11)(var6);
                        var1['title'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.0R/Toa;
                        var6 = var7.bind(var11)(var6);
                        var1['body'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.7NqTJi;
                        var6 = var7.bind(var11)(var6);
                        var1['confirmText'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oK;
                        var5 = var6.bind(var7)(var5);
                        var1['cancelText'] = var5;
                        var5 = _closure1_slot8;
                        var8 = var5.unpinMessage;
                        var7 = var8.bind;
                        var6 = _closure1_slot8;
                        var5 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        var1['onConfirm'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
 172:
                    return var2;
 175:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['unpinMessage'] = var7;
    var7 = function ackPins(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_PINS_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['ackPins'] = var7;
    var7 = function fetchPins(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var11 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var11;
            var7 = null;
            var5 = var7 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0004_ip = 31; continue _fun0004 }
 25:
            var4 = var3.reset;
 31:
            var12 = var7 != var4;
            if(!var12) { _fun0004_ip = 41; continue _fun0004 }
 38:
            var12 = var4;
 41:
            var5 = var7 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 55; continue _fun0004 }
 50:
            var4 = var3.limit;
 55:
            var5 = var7 != var4;
            var8 = 25;
            if(!var5) { _fun0004_ip = 68; continue _fun0004 }
 65:
            var8 = var4;
 68:
            var4 = var7 == var3;
            var9 = undefined;
            if(var4) { _fun0004_ip = 83; continue _fun0004 }
 77:
            var9 = var3.before;
 83:
            var3 = var12;
            if(var3) { _fun0004_ip = 253; continue _fun0004 }
 92:
            var6 = _closure1_slot4;
            var4 = var6.getPins;
            var6 = var4.bind(var6)(var11);
            var10 = var7 == var6;
            var4 = true;
            if(var10) { _fun0004_ip = 250; continue _fun0004 }
 122:
            var10 = var6.state;
            var13 = _closure1_slot5;
            var13 = var13.FAILED;
            var4 = true;
            if(!(var13 !== var10)) { _fun0004_ip = 250; continue _fun0004 }
 143:
            var13 = _closure1_slot5;
            var13 = var13.LOADING;
            var4 = false;
            if(!(var13 !== var10)) { _fun0004_ip = 250; continue _fun0004 }
 159:
            var13 = _closure1_slot5;
            var13 = var13.LOADED_FINISHED;
            var4 = false;
            if(!(var13 !== var10)) { _fun0004_ip = 250; continue _fun0004 }
 175:
            var5 = _closure1_slot5;
            var5 = var5.LOADED_HAS_MORE;
            var4 = undefined;
            if(!(var5 === var10)) { _fun0004_ip = 250; continue _fun0004 }
 191:
            if(!(var7 != var9)) { _fun0004_ip = 230; continue _fun0004 }
 195:
            var13 = var6.items;
            var10 = var13.at;
            var5 = -1;
            var5 = var10.bind(var13)(var5);
            var5 = var5.pinnedAt;
            var5 = var5 === var9;
            _fun0004_ip = 247; continue _fun0004;
 230:
            var6 = var6.items;
            var10 = var6.length;
            var6 = 0;
            var5 = var6 === var10;
 247:
            var4 = var5;
 250:
            var3 = var4;
 253:
            if(!var3) { _fun0004_ip = 440; continue _fun0004 }
 259:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var10 = var4.bind(var1)(var3);
            var4 = var10.dispatch;
            var3 = {};
            var13 = 'LOAD_PINNED_MESSAGES';
            var3['type'] = var13;
            var3['channelId'] = var11;
            var3['reset'] = var12;
            var3 = var4.bind(var10)(var3);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            var10 = _closure1_slot6;
            var6 = var10.PINS;
            var6 = var6.bind(var10)(var11);
            var3['url'] = var6;
            var6 = {};
            var6['limit'] = var8;
            var8 = var7 == var9;
            var7 = undefined;
            if(var8) { _fun0004_ip = 399; continue _fun0004 }
 389:
            var8 = var9.toISOString;
            var7 = var8.bind(var9)();
 399:
            var6['before'] = var7;
            var3['query'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'LOAD_PINNED_MESSAGES_SUCCESS';
                var2['type'] = var6;
                var6 = var5.body;
                var6 = var6.items;
                var2['pins'] = var6;
                var6 = _closure2_slot0;
                var2['channelId'] = var6;
                var5 = var5.body;
                var5 = var5.has_more;
                var2['hasMore'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'LOAD_PINNED_MESSAGES_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
 440:
            return var1;
        }
    };
    var2['fetchPins'] = var7;
    var _closure1_slot8 = var2;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChannelPinActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();