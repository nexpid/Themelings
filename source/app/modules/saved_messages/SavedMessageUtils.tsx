// app/modules/saved_messages/SavedMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _savedMessageJumpToMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg1;
                    var2 = undefined;
                    var7 = undefined;
                    var4 = null;
                    var5 = var4 == var9;
                    var8 = undefined;
                    if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = var9.type;
case 4:
                    var5 = _closure1_slot7;
                    var5 = var5.UNKNOWN;
                    if(!(var8 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = var3;
                    var5 = var5.saveData;
                    var5 = var5.guildId;
                    if(!(var4 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 8: // try_start_0
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var11 = 8;
                    var5 = var5[var11];
                    var10 = var8.bind(var2)(var5);
                    var8 = var10.fetchChannel;
                    var5 = var3;
                    var5 = var5.saveData;
                    var5 = var5.channelId;
                    var5 = var8.bind(var10)(var5);
                    SaveGenerator(address=126);
case 9:
                    return var5;
case 10:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = var5;
                    var8 = var5.recipients;
                    if(!(var4 != var8)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var8 = var7;
                    var8 = var8.recipients;
                    var10 = var8.length;
                    var8 = 1;
                    if(!(!(var10 > var8))) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var10 = var10.bind(var2)(var8);
                    var8 = var10.ensurePrivateChannel;
                    var12 = var7.recipients;
                    var11 = var12.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    var7 = var8.bind(var10)(var7);
                    SaveGenerator(address=223);
case 17:
                    return var7;
case 18:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 19; continue _fun0001 }
case 20: // try_end0
                    _fun0001_ip = 6; continue _fun0001;
case 19:
                    return var7;
case 15:
                    return var2;
case 13:
                    return var2;
case 11:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=4);
case 6:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var2)(var5);
                    var8 = _closure1_slot8;
                    var7 = var8.CHANNEL;
                    var4 = var4 == var9;
                    var6 = undefined;
                    if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var4 = var9.getGuildId;
                    var6 = var4.bind(var9)();
case 22:
                    var4 = var3.saveData;
                    var4 = var4.channelId;
                    var3 = var3.saveData;
                    var3 = var3.messageId;
                    var4 = var7.bind(var8)(var6, var4, var3);
                    var3 = {};
                    var6 = true;
                    var3['openChannel'] = var6;
                    var3 = var5.bind(var2)(var4, var3);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var7[var9];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var10 = var7[var8];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var10);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.UnknownChannelRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot7 = var5;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = {};
    var4['LONG'] = var9;
    var5 = 'LONG';
    var4[var9] = var5;
    var4['SHORT'] = var8;
    var5 = 'SHORT';
    var4[var8] = var5;
    var _closure1_slot9 = var4;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/saved_messages/SavedMessageUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DueInStringTypes'] = var4;
    var4 = function useDueInString(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.dueAt;
            var11 = var1.now;
            var2 = var1.type;
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var1 = _closure1_slot9;
            var1 = var1.LONG;
            if(!(var2 !== var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.t;
            var6 = var1.H4gnX1;
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.t;
            var6 = var1.TjNWND;
case 28:
            var1 = _closure1_slot9;
            var1 = var1.LONG;
            if(!(var2 !== var1)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.Uq7Y+/;
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var1 = var2.haia19;
case 31:
            var2 = var11 > var8;
            if(!var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var6 = var1;
case 32:
            var1 = {};
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 5;
            var3 = var12[var3];
            var10 = undefined;
            var3 = var4.bind(var10)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = {};
            var9 = _closure1_slot1;
            var7 = 6;
            var7 = var12[var7];
            var10 = var9.bind(var10)(var7);
            var9 = var10.duration;
            var7 = var8.getTime;
            var8 = var7.bind(var8)();
            var7 = var11.getTime;
            var7 = var7.bind(var11)();
            var8 = var8 - var7;
            var7 = 'millisecond';
            var8 = var9.bind(var10)(var8, var7);
            var7 = var8.humanize;
            var7 = var7.bind(var8)();
            var3['duration'] = var7;
            var3 = var4.bind(var5)(var6, var3);
            var1['dueInText'] = var3;
            var1['isOverdue'] = var2;
            return var1;
case 24:
            var1 = {'string': '', 'isOverdue': false};
            return var1;
        }
    };
    var3['useDueInString'] = var4;
    var4 = function useSavedMessageChannel(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 7;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var6.bind(var3)(var4);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var1.saveData;
            var1 = var1.channelId;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var7)(var4, var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var1 = _closure2_slot0;
                var1 = var1.message;
                var3 = var3 != var1;
                var9 = undefined;
                var1 = undefined;
                if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var5 = _closure1_slot5;
                var3 = {};
                var6 = _closure2_slot0;
                var7 = var6.saveData;
                var7 = var7.channelId;
                var3['id'] = var7;
                var6 = var6.saveData;
                var6 = var6.guildId;
                var3['guild_id'] = var6;
                var6 = _closure1_slot7;
                var6 = var6.UNKNOWN;
                var3['type'] = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 5;
                var6 = var10[var4];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var10[var4];
                var4 = var8.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.J90oLS;
                var4 = var6.bind(var7)(var4);
                var3['name'] = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var12 = var4;
                var11 = var3;
                var3 = new var12[var5](var11, var10);
                var1 = var3 instanceof Object ? var3 : var4;
case 36:
                _fun0003_ip = 38; continue _fun0003;
case 34:
                var1 = _closure2_slot1;
case 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSavedMessageChannel'] = var4;
    var2 = function savedMessageJumpToMessage() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['savedMessageJumpToMessage'] = var2;
    return var1;
})();