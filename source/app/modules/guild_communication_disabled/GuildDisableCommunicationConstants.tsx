// app/modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function getFriendlyDurationString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot2;
            var2 = var2.DURATION_60_SEC;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.DURATION_5_MIN;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.DURATION_10_MIN;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot2;
            var2 = var2.DURATION_1_HOUR;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot2;
            var2 = var2.DURATION_1_DAY;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot2;
            var2 = var2.DURATION_1_WEEK;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = undefined;
            return var2;
case 12:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var4 = var2[var6];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var6];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.EmoBDw;
            var2 = {};
            var2['weeks'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 10:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var4 = var2[var6];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var6];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.k2UNz8;
            var2 = {};
            var2['days'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 8:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var4 = var2[var6];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var6];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.xCjYxM;
            var2 = {};
            var2['hours'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.opVZ9v;
            var2 = {};
            var6 = 10;
            var2['mins'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.opVZ9v;
            var2 = {};
            var6 = 5;
            var2['mins'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.4zv/jo;
            var1 = {};
            var5 = 60;
            var1['secs'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var2 = var2.HelpdeskArticles;
    var6 = {};
    var10 = 60;
    var6['DURATION_60_SEC'] = var10;
    var7 = 'DURATION_60_SEC';
    var6[var10] = var7;
    var10 = 300;
    var6['DURATION_5_MIN'] = var10;
    var7 = 'DURATION_5_MIN';
    var6[var10] = var7;
    var10 = 600;
    var6['DURATION_10_MIN'] = var10;
    var7 = 'DURATION_10_MIN';
    var6[var10] = var7;
    var10 = 3600;
    var6['DURATION_1_HOUR'] = var10;
    var7 = 'DURATION_1_HOUR';
    var6[var10] = var7;
    var10 = 86400;
    var6['DURATION_1_DAY'] = var10;
    var7 = 'DURATION_1_DAY';
    var6[var10] = var7;
    var10 = 604800;
    var6['DURATION_1_WEEK'] = var10;
    var7 = 'DURATION_1_WEEK';
    var6[var10] = var7;
    var _closure1_slot2 = var6;
    var7 = 2;
    var10 = var9[var7];
    var7 = metroImportDefault;
    var10 = var7.bind(var1)(var10);
    var7 = var10.getArticleURL;
    var2 = var2.DISABLE_GUILD_COMMUNICATION;
    var2 = var7.bind(var10)(var2);
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx';
    var7 = var8.bind(var9)(var7);
    var3['DisableCommunicationDuration'] = var6;
    var3['getFriendlyDurationString'] = var5;
    var4 = function() {
        var2 = global;
        var4 = var2.Object;
        var3 = var4.keys;
        var2 = _closure1_slot2;
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            var1 = global;
            var3 = var1.isNaN;
            var4 = var1.Number;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var6 = _closure1_slot3;
                var4 = _closure1_slot2;
                var5 = var4[var3];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = null;
                var6 = var4 != var5;
                var4 = '';
                if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 5:
                var4 = var5;
case 14:
                var1['label'] = var4;
                var2 = _closure1_slot2;
                var2 = var2[var3];
                var1['value'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getDisableCommunicationDurationOptions'] = var4;
    var3['GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK'] = var2;
    var2 = 'GuildCommunicationDisabledDismissedGuilds';
    var3['DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY'] = var2;
    var2 = 'Set Communication Disabled Modal';
    var3['SET_COMMUNICATION_DISABLED_MODAL_NAME'] = var2;
    var2 = 'Clear Communication Disabled Modal';
    var3['CLEAR_COMMUNICATION_DISABLED_MODAL_NAME'] = var2;
    var2 = 512;
    var3['MAX_REASON_LENGTH'] = var2;
    return var1;
})();