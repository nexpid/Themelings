// app/modules/messages/VoiceSessionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getSortedVoiceSessionParticipants(arg1) {
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = var1.call;
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = var4.participants;
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot6;
                        var2 = var3.getUser;
                        var1 = arg2;
                        var3 = var2.bind(var3)(var1);
                        var2 = null;
                        var1 = var5;
                        if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = var3.id;
                        var2 = _closure3_slot0;
                        var2 = var2.author;
                        var2 = var2.id;
                        var1 = var5;
                        if(!(var4 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                        var2 = new Array(1);
                        var6 = 0;
                        var8 = var2;
                        var7 = var5;
                        var4 = arraySpread(var8, var7, var6);
                        var2[3] = var3;
                        var3 = 1;
                        var3 = var4 + var3;
                        var1 = var2;
case 4:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var1 = var5.bind(var6)(var4, var3);
case 2:
                if(!(var2 == var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var1 = new Array(0);
case 7:
                return var1;
            }
        };
        var3 = undefined;
        var1 = arg1;
        var5 = var2.bind(var3)(var1);
        var4 = _closure1_slot4;
        var2 = var4.getUserAffinitiesMap;
        var4 = var2.bind(var4)();
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.maybeSortByProbability;
        var1 = 'VoiceSessionUtils - participants';
        var1 = var2.bind(var3)(var5, var4, var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/VoiceSessionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getSortedVoiceSessionParticipants'] = var4;
    var4 = function useSortedVoiceSessionParticipants(arg1) {
        var3 = function(arg1) {
            var6 = arg1;
            var _closure3_slot0 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.useStateFromStoresArray;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = var6.author;
            var7 = var2.id;
            var2 = new Array(2);
            var2[0] = var7;
            var6 = var6.call;
            var2[1] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var5 = var1.call;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                    var1 = var5.participants;
case 9:
                    if(!(var4 == var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = new Array(0);
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = _closure3_slot0;
                    var3 = var3.call;
                    var5 = var3.participants;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot6;
                        var2 = var3.getUser;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.author;
                        var1 = var1.id;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        };
        var5 = undefined;
        var2 = arg1;
        var6 = var3.bind(var5)(var2);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 5;
        var3 = var7[var3];
        var8 = var4.bind(var5)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getUserAffinitiesMap;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var5 = var7.bind(var8)(var5, var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.maybeSortByProbability;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = 'VoiceSessionUtils - participants';
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSortedVoiceSessionParticipants'] = var4;
    var2 = function getVoiceSessionMessageContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot5;
            var5 = var6.getChannel;
            var3 = var4.channel_id;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var8 = undefined;
            var3 = var5.bind(var8)(var3);
            var7 = var3.bind(var8)(var4);
            var5 = _closure1_slot0;
            var3 = 7;
            var3 = var6[var3];
            var5 = var5.bind(var8)(var3);
            var3 = var5.getMessageAuthor;
            var6 = var3.bind(var5)(var4);
            var3 = _closure1_slot7;
            var4 = var3.bind(var8)(var4);
            var3 = var4.map;
            var1 = function(arg1) {
                var5 = arg1;
                var1 = {};
                var1['user'] = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getUserAuthor;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var5, var2);
                var1['messageAuthor'] = var2;
                return var1;
            };
            var9 = var3.bind(var4)(var1);
            var11 = null;
            if(!(var11 != var7)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 8;
            var3 = var12[var1];
            var3 = var14.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var1 = var12[var1];
            var1 = var14.bind(var8)(var1);
            var1 = var1.t;
            var3 = var1.atbXuX;
            var1 = {};
            var13 = var9.length;
            var10 = 1;
            var13 = var13 + var10;
            var1['userCount'] = var13;
            var13 = var6.nick;
            var1['username'] = var13;
            var13 = 9;
            var12 = var12[var13];
            var12 = var14.bind(var8)(var12);
            var12 = var12.identity;
            var1['usernameOnClick'] = var12;
            var12 = 0;
            var14 = var9[var12];
            var15 = var11 == var14;
            var12 = undefined;
            if(var15) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var14 = var14.messageAuthor;
            var12 = var14.nick;
case 15:
            var1['username2'] = var12;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var13];
            var12 = var14.bind(var8)(var12);
            var12 = var12.identity;
            var1['username2OnClick'] = var12;
            var12 = var9[var10];
            var14 = var11 == var12;
            var11 = undefined;
            if(var14) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var12 = var12.messageAuthor;
            var11 = var12.nick;
case 17:
            var1['username3'] = var11;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var11 = var12.bind(var8)(var11);
            var11 = var11.identity;
            var1['username3OnClick'] = var11;
            var9 = var9.length;
            var9 = var9 - var10;
            var1['otherCount'] = var9;
            var1['duration'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 19; continue _fun0004;
case 13:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var3 = var9[var2];
            var3 = var7.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.HzBfIN;
            var2 = {};
            var6 = var6.nick;
            var2['username'] = var6;
            var6 = 9;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.identity;
            var2['usernameOnClick'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var3['getVoiceSessionMessageContent'] = var2;
    return var1;
})();