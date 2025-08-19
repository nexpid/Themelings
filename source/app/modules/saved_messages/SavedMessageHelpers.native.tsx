// app/modules/saved_messages/SavedMessageHelpers.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _addOrUpdateSavedMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 503; continue _fun0001 }
 13:
                    var8 = var5.displayToast;
                    var7 = null;
                    var4 = Object.create(var7);
                    var2 = 0;
                    var4['displayToast'] = var2;
                    var16 = {};
                    var15 = var5;
                    var14 = var4;
                    var6 = copyDataProperties(var16, var15, var14);
                    var4 = undefined;
                    SaveGenerator(address=49);
 47:
                    return var4;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 500; continue _fun0001 }
 58:
                    var11 = _closure1_slot4;
                    var10 = var11.getSavedMessage;
                    var9 = var6.channelId;
                    var3 = var6.messageId;
                    var3 = var10.bind(var11)(var9, var3);
                    if(!(var7 == var3)) { _fun0001_ip = 176; continue _fun0001 }
 91:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 4;
                    var3 = var10[var3];
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0001_ip = 176; continue _fun0001 }
 118:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var9 = var9.bind(var4)(var3);
                    var10 = _closure1_slot0;
                    var3 = 6;
                    var3 = var11[var3];
                    var3 = var10.bind(var4)(var3);
                    var3 = var3.EntitlementFeatureNames;
                    var3 = var3.SAVED_MESSAGES;
                    var3 = var9.bind(var4)(var3);
                    _fun0001_ip = 494; continue _fun0001;
 176:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = var9.upsertSavedMessage;
                    var10 = var3.bind(var9)(var6);
                    var9 = var10.catch;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var6 = arg1;
                            var1 = null;
                            var2 = var1 == var6;
                            var9 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0002_ip = 35; continue _fun0002 }
 16:
                            var2 = var6.body;
                            var4 = var1 == var2;
                            var3 = undefined;
                            if(var4) { _fun0002_ip = 35; continue _fun0002 }
 30:
                            var3 = var2.code;
 35:
                            var2 = _closure1_slot5;
                            var2 = var2.TOO_MANY_SAVED_MESSAGES;
                            if(!(var3 !== var2)) { _fun0002_ip = 220; continue _fun0002 }
 55:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 13;
                            var2 = var8[var2];
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var5 = 'SAVED_MESSAGE_CREATE_ERROR';
                            var2['key'] = var5;
                            var7 = _closure1_slot0;
                            var5 = 14;
                            var5 = var8[var5];
                            var5 = var7.bind(var9)(var5);
                            var5 = var5.CircleErrorIcon;
                            var2['IconComponent'] = var5;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 147; continue _fun0002 }
 128:
                            var6 = var6.body;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 147; continue _fun0002 }
 142:
                            var5 = var6.message;
 147:
                            if(!(var1 == var5)) { _fun0002_ip = 206; continue _fun0002 }
 151:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 9;
                            var7 = var11[var6];
                            var7 = var10.bind(var9)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var11[var6];
                            var6 = var10.bind(var9)(var6);
                            var6 = var6.t;
                            var6 = var6.R0RpRU;
                            var5 = var7.bind(var8)(var6);
 206:
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun0002_ip = 485; continue _fun0002;
 220:
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 8;
                            var2 = var10[var2];
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 9;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var11 = var6.intl;
                            var7 = var11.string;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.t;
                            var6 = var6.mlbiZW;
                            var6 = var7.bind(var11)(var6);
                            var2['title'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var12 = var6.intl;
                            var11 = var12.formatToPlainString;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.t;
                            var7 = var6.1zVbEB;
                            var6 = {};
                            var13 = _closure1_slot6;
                            var6['max'] = var13;
                            var6 = var11.bind(var12)(var7, var6);
                            var2['body'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var11 = var6.intl;
                            var7 = var11.string;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.t;
                            var6 = var6.BddRzc;
                            var6 = var7.bind(var11)(var6);
                            var2['confirmText'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            var5 = var5.ZGbTc3;
                            var5 = var6.bind(var7)(var5);
                            var2['cancelText'] = var5;
                            var5 = function onCancel() {
                                var3 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var2 = 10;
                                var2 = var1[var2];
                                var6 = undefined;
                                var3 = var3.bind(var6)(var2);
                                var2 = var3.pushLazy;
                                var5 = _closure1_slot0;
                                var4 = 12;
                                var4 = var1[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = 11;
                                var4 = var1[var4];
                                var1 = var1.paths;
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2['onCancel'] = var5;
                            var2 = var3.bind(var4)(var2);
 485:
                            return var1;
                        }
                    };
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=231);
 229:
                    return var3;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 497; continue _fun0001 }
 240:
                    if(!(var7 != var3)) { _fun0001_ip = 494; continue _fun0001 }
 247:
                    if(!var8) { _fun0001_ip = 494; continue _fun0001 }
 253:
                    var8 = var6.dueAt;
                    if(!(var7 == var8)) { _fun0001_ip = 322; continue _fun0001 }
 263:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 9;
                    var9 = var12[var8];
                    var9 = var11.bind(var4)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.DQjes7;
                    var8 = var9.bind(var10)(var8);
                    _fun0001_ip = 379; continue _fun0001;
 322:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 9;
                    var10 = var13[var9];
                    var10 = var12.bind(var4)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.t;
                    var9 = var9.i1IsOz;
                    var8 = var10.bind(var11)(var9);
 379:
                    var6 = var6.dueAt;
                    if(!(var7 == var6)) { _fun0001_ip = 417; continue _fun0001 }
 389:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 16;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.BookmarkIcon;
                    _fun0001_ip = 443; continue _fun0001;
 417:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.ClockIcon;
 443:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 13;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.open;
                    var5 = {};
                    var10 = 'SAVED_MESSAGE_CREATE_SUCCESS';
                    var5['key'] = var10;
                    var5['IconComponent'] = var9;
                    var5['content'] = var8;
                    var5 = var6.bind(var7)(var5);
 494:
                    return var4;
 497:
                    return var3;
 500:
                    return var2;
 503:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _removeSavedMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 388; continue _fun0003 }
 13:
                    var8 = var5.displayToast;
                    var7 = null;
                    var4 = Object.create(var7);
                    var2 = 0;
                    var4['displayToast'] = var2;
                    var16 = {};
                    var15 = var5;
                    var14 = var4;
                    var6 = copyDataProperties(var16, var15, var14);
                    var4 = undefined;
                    SaveGenerator(address=49);
 47:
                    return var4;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 385; continue _fun0003 }
 58:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = var9.deleteSavedMessage;
                    var10 = var3.bind(var9)(var6);
                    var9 = var10.catch;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var7 = arg1;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 13;
                            var1 = var8[var1];
                            var10 = undefined;
                            var4 = var2.bind(var10)(var1);
                            var3 = var4.open;
                            var2 = {};
                            var1 = 'SAVED_MESSAGE_REMOVE_ERROR';
                            var2['key'] = var1;
                            var5 = _closure1_slot0;
                            var1 = 14;
                            var1 = var8[var1];
                            var1 = var5.bind(var10)(var1);
                            var1 = var1.CircleErrorIcon;
                            var2['IconComponent'] = var1;
                            var1 = null;
                            var8 = var1 == var7;
                            var5 = undefined;
                            if(var8) { _fun0004_ip = 102; continue _fun0004 }
 83:
                            var7 = var7.body;
                            var8 = var1 == var7;
                            var5 = undefined;
                            if(var8) { _fun0004_ip = 102; continue _fun0004 }
 97:
                            var5 = var7.message;
 102:
                            if(!(var1 == var5)) { _fun0004_ip = 161; continue _fun0004 }
 106:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 9;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var11[var6];
                            var6 = var9.bind(var10)(var6);
                            var6 = var6.t;
                            var6 = var6.R0RpRU;
                            var5 = var7.bind(var8)(var6);
 161:
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=116);
 114:
                    return var3;
 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0003_ip = 382; continue _fun0003 }
 125:
                    if(!(var7 != var3)) { _fun0003_ip = 379; continue _fun0003 }
 132:
                    if(!var8) { _fun0003_ip = 379; continue _fun0003 }
 138:
                    var8 = var6.dueAt;
                    if(!(var7 == var8)) { _fun0003_ip = 207; continue _fun0003 }
 148:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 9;
                    var9 = var12[var8];
                    var9 = var11.bind(var4)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.5KOMiY;
                    var8 = var9.bind(var10)(var8);
                    _fun0003_ip = 264; continue _fun0003;
 207:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 9;
                    var10 = var13[var9];
                    var10 = var12.bind(var4)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.t;
                    var9 = var9.D0tS09;
                    var8 = var10.bind(var11)(var9);
 264:
                    var6 = var6.dueAt;
                    if(!(var7 == var6)) { _fun0003_ip = 302; continue _fun0003 }
 274:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 16;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.BookmarkIcon;
                    _fun0003_ip = 328; continue _fun0003;
 302:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.ClockIcon;
 328:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 13;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.open;
                    var5 = {};
                    var10 = 'SAVED_MESSAGE_REMOVE_SUCCESS';
                    var5['key'] = var10;
                    var5['IconComponent'] = var9;
                    var5['content'] = var8;
                    var5 = var6.bind(var7)(var5);
 379:
                    return var4;
 382:
                    return var3;
 385:
                    return var2;
 388:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SAVED_MESSAGES_MAX;
    var _closure1_slot6 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/SavedMessageHelpers.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function addOrUpdateSavedMessage() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['addOrUpdateSavedMessage'] = var4;
    var2 = function removeSavedMessage() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeSavedMessage'] = var2;
    return var1;
})();