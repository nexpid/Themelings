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
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var6.displayToast;
                    var7 = null;
                    var4 = Object.create(var7);
                    var2 = 0;
                    var4['displayToast'] = var2;
                    var16 = {};
                    var15 = var6;
                    var14 = var4;
                    var6 = copyDataProperties(var16, var15, var14);
                    var _closure4_slot0 = var6;
                    var4 = undefined;
                    SaveGenerator(address=55);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var12 = _closure1_slot4;
                    var11 = var12.getSavedMessage;
                    var10 = var6.channelId;
                    var9 = var6.messageId;
                    var9 = var11.bind(var12)(var10, var9);
                    if(!(var7 == var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 4;
                    var9 = var11[var9];
                    var9 = var10.bind(var4)(var9);
                    var9 = var9.bind(var4)();
                    if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 5;
                    var9 = var12[var9];
                    var10 = var10.bind(var4)(var9);
                    var11 = _closure1_slot0;
                    var9 = 6;
                    var9 = var12[var9];
                    var9 = var11.bind(var4)(var9);
                    var9 = var9.EntitlementFeatureNames;
                    var9 = var9.SAVED_MESSAGES;
                    var9 = var10.bind(var4)(var9);
                    _fun0001_ip = 11; continue _fun0001;
case 8:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 7;
                    var9 = var11[var9];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.upsertSavedMessage;
                    var10 = var9.bind(var10)(var6);
                    var9 = var10.catch;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var1 = null;
                            var2 = var1 == var6;
                            var9 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var2 = var6.body;
                            var4 = var1 == var2;
                            var3 = undefined;
                            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                            var3 = var2.code;
case 12:
                            var2 = _closure1_slot5;
                            var2 = var2.TOO_MANY_SAVED_MESSAGES;
                            if(!(var3 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 5:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 12;
                            var2 = var8[var2];
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var5 = 'SAVED_MESSAGE_CREATE_ERROR';
                            var2['key'] = var5;
                            var7 = _closure1_slot0;
                            var5 = 13;
                            var5 = var8[var5];
                            var5 = var7.bind(var9)(var5);
                            var5 = var5.CircleErrorIcon;
                            var2['IconComponent'] = var5;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var6 = var6.body;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 18:
                            var5 = var6.message;
case 16:
                            if(!(var1 == var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
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
                            var6 = var6.R0RpRX;
                            var5 = var7.bind(var8)(var6);
case 19:
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun0002_ip = 21; continue _fun0002;
case 15:
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
                            var7 = var6["1zVbEG"];
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
                            var6 = var6.BddRzS;
                            var6 = var7.bind(var11)(var6);
                            var2['confirmText'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            var5 = var5.ZGbTcy;
                            var5 = var6.bind(var7)(var5);
                            var2['cancelText'] = var5;
                            var5 = function onCancel() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 10;
                                    var1 = var3[var1];
                                    var6 = undefined;
                                    var3 = var2.bind(var6)(var1);
                                    var2 = var3.showForLaterModal;
                                    var1 = _closure4_slot0;
                                    var5 = var1.dueAt;
                                    var1 = null;
                                    if(!(var1 == var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var1 = 11;
                                    var1 = var7[var1];
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var1.SavedMessageSortTypes;
                                    var1 = var1.BOOKMARK;
                                    _fun0003_ip = 24; continue _fun0003;
case 22:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 11;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var6)(var4);
                                    var4 = var4.SavedMessageSortTypes;
                                    var1 = var4.REMINDER;
case 24:
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                }
                            };
                            var2['onCancel'] = var5;
                            var2 = var3.bind(var4)(var2);
case 21:
                            return var1;
                        }
                    };
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=235);
case 25:
                    return var3;
case 26:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    if(!(var7 != var3)) { _fun0001_ip = 11; continue _fun0001 }
case 29:
                    if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 30:
                    var8 = var6.dueAt;
                    if(!(var7 == var8)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
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
                    var8 = var8.DQjes4;
                    var8 = var9.bind(var10)(var8);
                    _fun0001_ip = 33; continue _fun0001;
case 31:
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
                    var9 = var9.i1IsOy;
                    var8 = var10.bind(var11)(var9);
case 33:
                    var6 = var6.dueAt;
                    if(!(var7 == var6)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.BookmarkIcon;
                    _fun0001_ip = 36; continue _fun0001;
case 34:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.ClockIcon;
case 36:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.open;
                    var5 = {};
                    var10 = 'SAVED_MESSAGE_CREATE_SUCCESS';
                    var5['key'] = var10;
                    var5['IconComponent'] = var9;
                    var5['content'] = var8;
                    var5 = var6.bind(var7)(var5);
case 11:
                    return var4;
case 27:
                    return var3;
case 6:
                    return var2;
case 2:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var8 = var5.displayToast;
                    var6 = var5.isReminder;
                    var9 = null;
                    var4 = Object.create(var9);
                    var2 = 0;
                    var4['displayToast'] = var2;
                    var4['isReminder'] = var2;
                    var17 = {};
                    var16 = var5;
                    var15 = var4;
                    var7 = copyDataProperties(var17, var16, var15);
                    var4 = undefined;
                    SaveGenerator(address=60);
case 39:
                    return var4;
case 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 7;
                    var3 = var11[var3];
                    var10 = var10.bind(var4)(var3);
                    var3 = var10.deleteSavedMessage;
                    var11 = var3.bind(var10)(var7);
                    var10 = var11.catch;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var7 = arg1;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 12;
                            var1 = var8[var1];
                            var10 = undefined;
                            var4 = var2.bind(var10)(var1);
                            var3 = var4.open;
                            var2 = {};
                            var1 = 'SAVED_MESSAGE_REMOVE_ERROR';
                            var2['key'] = var1;
                            var5 = _closure1_slot0;
                            var1 = 13;
                            var1 = var8[var1];
                            var1 = var5.bind(var10)(var1);
                            var1 = var1.CircleErrorIcon;
                            var2['IconComponent'] = var1;
                            var1 = null;
                            var8 = var1 == var7;
                            var5 = undefined;
                            if(var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                            var7 = var7.body;
                            var8 = var1 == var7;
                            var5 = undefined;
                            if(var8) { _fun0005_ip = 43; continue _fun0005 }
case 9:
                            var5 = var7.message;
case 43:
                            if(!(var1 == var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
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
                            var6 = var6.R0RpRX;
                            var5 = var7.bind(var8)(var6);
case 45:
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=127);
case 47:
                    return var3;
case 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    if(!(var9 != var3)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    if(!var8) { _fun0004_ip = 51; continue _fun0004 }
case 53:
                    var8 = var7.dueAt;
                    if(!(var9 == var8)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    if(var6) { _fun0004_ip = 54; continue _fun0004 }
case 56:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 9;
                    var10 = var13[var8];
                    var10 = var12.bind(var4)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8["5KOMiV"];
                    var8 = var10.bind(var11)(var8);
                    _fun0004_ip = 57; continue _fun0004;
case 54:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 9;
                    var11 = var14[var10];
                    var11 = var13.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.t;
                    var10 = var10.D0tS02;
                    var8 = var11.bind(var12)(var10);
case 57:
                    var7 = var7.dueAt;
                    if(!(var9 == var7)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    if(var6) { _fun0004_ip = 58; continue _fun0004 }
case 60:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.BookmarkIcon;
                    _fun0004_ip = 61; continue _fun0004;
case 58:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var9 = var6.ClockIcon;
case 61:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.open;
                    var5 = {};
                    var10 = 'SAVED_MESSAGE_REMOVE_SUCCESS';
                    var5['key'] = var10;
                    var5['IconComponent'] = var9;
                    var5['content'] = var8;
                    var5 = var6.bind(var7)(var5);
case 51:
                    return var4;
case 49:
                    return var3;
case 41:
                    return var2;
case 37:
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
    var4 = 16;
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