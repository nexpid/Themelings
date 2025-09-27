// app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useEmbeddedActivityParticipantAvatarUris(arg1) {
        var3 = arg1;
        var2 = var3.activity;
        var _closure2_slot0 = var2;
        var6 = var3.guildId;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var7 = var4.useMemo;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure2_slot0;
                var4 = null;
                var6 = var4 == var1;
                var1 = undefined;
                if(var6) { _fun0001_ip = 41; continue _fun0001 }
 31:
                var5 = _closure2_slot0;
                var1 = var5.userIds;
 41:
                if(!(var4 == var1)) { _fun0001_ip = 49; continue _fun0001 }
 45:
                var1 = new Array(0);
 49:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var2 = var7.bind(var4)(var2, var5);
        var _closure2_slot2 = var2;
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var5 = 4;
        var7 = var7[var5];
        var5 = undefined;
        var8 = var8.bind(var5)(var7);
        var7 = var8.useStateFromStoresArray;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure2_slot2;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var2, var3);
        var _closure2_slot3 = var5;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure2_slot3;
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = var4.getAvatarURL;
                var2 = _closure2_slot1;
                var1 = 64;
                var3 = var3.bind(var4)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getEmbeddedActivityParticipantAvatarUris(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.channelId;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.applicationId;
            var _closure2_slot1 = var3;
            var7 = var2.activity;
            var6 = null;
            if(!(var6 == var7)) { _fun0002_ip = 74; continue _fun0002 }
 40:
            var3 = _closure1_slot3;
            var2 = var3.getEmbeddedActivitiesForChannel;
            var4 = var2.bind(var3)(var4);
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var3.bind(var4)(var2);
 74:
            var2 = global;
            var4 = var2.Array;
            var3 = var4.from;
            var8 = var6 == var7;
            var5 = undefined;
            var2 = undefined;
            if(var8) { _fun0002_ip = 104; continue _fun0002 }
 98:
            var2 = var7.userIds;
 104:
            if(!(var6 == var2)) { _fun0002_ip = 112; continue _fun0002 }
 108:
            var2 = new Array(0);
 112:
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var5 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var5;
                    var3 = undefined;
                    if(var1) { _fun0003_ip = 54; continue _fun0003 }
 32:
                    var4 = var5.getAvatarURL;
                    var2 = _closure2_slot0;
                    var1 = 64;
                    var3 = var4.bind(var5)(var2, var1);
 54:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getEmbeddedActivityParticipantAvatarUris'] = var2;
    return var1;
})();