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
    var7 = var2.AbortCodes;
    var _closure1_slot6 = var7;
    var7 = var2.Endpoints;
    var _closure1_slot7 = var7;
    var2 = var2.MAX_PINS_PER_CHANNEL;
    var _closure1_slot8 = var2;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.put;
                    var5 = {};
                    var10 = _closure1_slot7;
                    var9 = var10.PIN;
                    var8 = _closure2_slot1;
                    var8 = var9.bind(var10)(var11, var8);
                    var5['url'] = var8;
                    var8 = true;
                    var5['rejectWithError'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.catch;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var3 = var2[var1];
                            var1 = undefined;
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.APIError;
                            var3 = var5.prototype;
                            var4 = Object.create(var3, {constructor: {value: var5}});
                            var14 = arg1;
                            var15 = var4;
                            var3 = new var15[var5](var14, var13);
                            var5 = var3 instanceof Object ? var3 : var4;
                            var3 = var5.code;
                            var9 = 6;
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var8 = var4.intl;
                            var7 = var8.string;
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var4 = var4.t;
                            var4 = var4.j2d6Km;
                            var7 = var7.bind(var8)(var4);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var8 = var4.intl;
                            var4 = var8.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.fEptJP;
                            var2 = var4.bind(var8)(var2);
                            var4 = null;
                            var8 = var7;
                            var7 = var2;
                            if(!(var4 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var2 = _closure1_slot6;
                            var2 = var2.TOO_MANY_PINS_IN_CHANNEL;
                            if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var2 = _closure1_slot6;
                            var2 = var2.INVALID_ACCESS;
                            if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var2 = _closure1_slot6;
                            var2 = var2.INVALID_PIN_MESSAGE_CHANNEL;
                            if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var2 = _closure1_slot6;
                            var2 = var2.INVALID_THREAD_ARCHIVE_STATE;
                            if(!(var2 !== var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var2 = _closure1_slot6;
                            var2 = var2.INVALID_ACTION_SYSTEM_MESSAGE;
                            if(!(var2 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                            var2 = _closure1_slot6;
                            var2 = var2.UNKNOWN_MESSAGE;
                            if(!(var2 !== var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                            var11 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var11.bind(var1)(var3);
                            var10 = var3.intl;
                            var3 = var10.string;
                            var2 = var2[var9];
                            var2 = var11.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.HI88Q3;
                            var3 = var3.bind(var10)(var2);
                            var2 = var5.getAnyErrorMessage;
                            var2 = var2.bind(var5)();
                            if(!(var4 == var2)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                            var11 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = var4[var9];
                            var5 = var11.bind(var1)(var5);
                            var10 = var5.intl;
                            var5 = var10.string;
                            var4 = var4[var9];
                            var4 = var11.bind(var1)(var4);
                            var4 = var4.t;
                            var4 = var4.fEptJP;
                            var2 = var5.bind(var10)(var4);
case 22:
                            var7 = var2;
                            var8 = var3;
                            _fun0002_ip = 8; continue _fun0002;
case 20:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.fkqPro;
                            var8 = var4.bind(var5)(var3);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.H6fRIg;
                            var7 = var4.bind(var5)(var2);
                            _fun0002_ip = 8; continue _fun0002;
case 18:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.zV0/FC;
                            var8 = var4.bind(var5)(var3);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.C4a7xI;
                            var7 = var4.bind(var5)(var2);
                            _fun0002_ip = 8; continue _fun0002;
case 16:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.fu6Lbl;
                            var8 = var4.bind(var5)(var3);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.FmrcZM;
                            var7 = var4.bind(var5)(var2);
                            _fun0002_ip = 8; continue _fun0002;
case 14:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.Q5G6+m;
                            var8 = var4.bind(var5)(var3);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2["5hgPfC"];
                            var7 = var4.bind(var5)(var2);
                            _fun0002_ip = 8; continue _fun0002;
case 12:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = var2[var9];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3["25gfQX"];
                            var8 = var4.bind(var5)(var3);
                            var4 = var2[var9];
                            var4 = var10.bind(var1)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var2[var9];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.QNnTwN;
                            var7 = var4.bind(var5)(var2);
                            _fun0002_ip = 8; continue _fun0002;
case 10:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var5.bind(var1)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var2[var9];
                            var2 = var5.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.HI88Q3;
                            var3 = var3.bind(var4)(var2);
                            var4 = _closure2_slot0;
                            var2 = var4.isPrivate;
                            var2 = var2.bind(var4)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var10 = var4[var9];
                            var10 = var5.bind(var1)(var10);
                            var11 = var10.intl;
                            var10 = var11.formatToPlainString;
                            var4 = var4[var9];
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.t;
                            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                            var5 = var4.NnO1S5;
                            var2 = {};
                            var12 = _closure1_slot8;
                            var2['maxPins'] = var12;
                            var12 = _closure4_slot0;
                            var2['channelName'] = var12;
                            var2 = var10.bind(var11)(var5, var2);
                            _fun0002_ip = 26; continue _fun0002;
case 24:
                            var5 = var4.Q89oQU;
                            var4 = {};
                            var12 = _closure1_slot8;
                            var4['maxPins'] = var12;
                            var2 = var10.bind(var11)(var5, var4);
case 26:
                            var7 = var2;
                            var8 = var3;
case 8:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 7;
                            var2 = var5[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var2['title'] = var8;
                            var2['body'] = var7;
                            var8 = _closure1_slot0;
                            var6 = var5[var9];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.BddRzS;
                            var5 = var6.bind(var7)(var5);
                            var2['confirmText'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
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
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.del;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var10 = _closure1_slot7;
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
                        var1 = 7;
                        var1 = var10[var1];
                        var9 = undefined;
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var8 = _closure1_slot0;
                        var5 = 6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.xFjByk;
                        var6 = var7.bind(var11)(var6);
                        var1['title'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6["0R/Toc"];
                        var6 = var7.bind(var11)(var6);
                        var1['body'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6["7NqTJn"];
                        var6 = var7.bind(var11)(var6);
                        var1['confirmText'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oC;
                        var5 = var6.bind(var7)(var5);
                        var1['cancelText'] = var5;
                        var5 = _closure1_slot9;
                        var8 = var5.unpinMessage;
                        var7 = var8.bind;
                        var6 = _closure1_slot9;
                        var5 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        var1['onConfirm'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 31:
                    return var2;
case 27:
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
        var1 = 8;
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
case 0:
            var11 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var11;
            var7 = null;
            var5 = var7 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var4 = var3.reset;
case 33:
            var12 = var7 != var4;
            if(!var12) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var12 = var4;
case 35:
            var5 = var7 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var4 = var3.limit;
case 37:
            var5 = var7 != var4;
            var8 = 25;
            if(!var5) { _fun0004_ip = 32; continue _fun0004 }
case 39:
            var8 = var4;
case 32:
            var4 = var7 == var3;
            var9 = undefined;
            if(var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var9 = var3.before;
case 40:
            var3 = var12;
            if(var3) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var6 = _closure1_slot4;
            var4 = var6.getPins;
            var6 = var4.bind(var6)(var11);
            var10 = var7 == var6;
            var4 = true;
            if(var10) { _fun0004_ip = 19; continue _fun0004 }
case 44:
            var10 = var6.state;
            var13 = _closure1_slot5;
            var13 = var13.FAILED;
            var4 = true;
            if(!(var13 !== var10)) { _fun0004_ip = 19; continue _fun0004 }
case 45:
            var13 = _closure1_slot5;
            var13 = var13.LOADING;
            var4 = false;
            if(!(var13 !== var10)) { _fun0004_ip = 19; continue _fun0004 }
case 46:
            var13 = _closure1_slot5;
            var13 = var13.LOADED_FINISHED;
            var4 = false;
            if(!(var13 !== var10)) { _fun0004_ip = 19; continue _fun0004 }
case 27:
            var5 = _closure1_slot5;
            var5 = var5.LOADED_HAS_MORE;
            var4 = undefined;
            if(!(var5 === var10)) { _fun0004_ip = 19; continue _fun0004 }
case 47:
            if(!(var7 != var9)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var13 = var6.items;
            var10 = var13.at;
            var5 = -1;
            var5 = var10.bind(var13)(var5);
            var5 = var5.pinnedAt;
            var5 = var5 === var9;
            _fun0004_ip = 50; continue _fun0004;
case 48:
            var6 = var6.items;
            var10 = var6.length;
            var6 = 0;
            var5 = var6 === var10;
case 50:
            var4 = var5;
case 19:
            var3 = var4;
case 42:
            if(!var3) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
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
            var10 = _closure1_slot7;
            var6 = var10.PINS;
            var6 = var6.bind(var10)(var11);
            var3['url'] = var6;
            var6 = {};
            var6['limit'] = var8;
            var8 = var7 == var9;
            var7 = undefined;
            if(var8) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var8 = var9.toISOString;
            var7 = var8.bind(var9)();
case 53:
            var6['before'] = var7;
            var3['query'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
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
                var1 = 8;
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
case 51:
            return var1;
        }
    };
    var2['fetchPins'] = var7;
    var _closure1_slot9 = var2;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChannelPinActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();