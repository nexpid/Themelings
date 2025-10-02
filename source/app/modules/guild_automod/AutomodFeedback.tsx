// app/modules/guild_automod/AutomodFeedback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var7 = {};
    var1 = 'BUG';
    var7['BUG'] = var1;
    var1 = 'ALLOWED';
    var7['ALLOWED'] = var1;
    var1 = 'MENTION_RAID_REMOVE_RESTRICTION';
    var7['MENTION_RAID_REMOVE_RESTRICTION'] = var1;
    var _closure1_slot2 = var7;
    var6 = {};
    var1 = 'JOIN_RAID';
    var6['JOIN_RAID'] = var1;
    var2 = 'MENTION_RAID';
    var6['MENTION_RAID'] = var2;
    var5 = {};
    var2 = 'LEGITIMATE_ACTIVITY';
    var5['LEGITIMATE_ACTIVITY'] = var2;
    var2 = 'LEGITIMATE_ACCOUNTS';
    var5['LEGITIMATE_ACCOUNTS'] = var2;
    var2 = 'LEGITIMATE_DMS';
    var5['LEGITIMATE_DMS'] = var2;
    var10 = 'DM_SPAM';
    var5['DM_SPAM'] = var10;
    var5['JOIN_RAID'] = var1;
    var1 = 'OTHER';
    var5['OTHER'] = var1;
    var _closure1_slot3 = var5;
    var2 = {};
    var2['DM_SPAM'] = var10;
    var10 = 'MENTION_SPAM';
    var2['MENTION_SPAM'] = var10;
    var10 = 'CHANNEL_SPAM';
    var2['CHANNEL_SPAM'] = var10;
    var10 = 'SUS_NEW_MEMBERS';
    var2['SUS_NEW_MEMBERS'] = var10;
    var10 = 'CHANGING_SETTINGS';
    var2['CHANGING_SETTINGS'] = var10;
    var2['OTHER'] = var1;
    var1 = 1;
    var8 = var8[var1];
    var1 = undefined;
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_automod/AutomodFeedback.tsx';
    var8 = var9.bind(var10)(var8);
    var3['Feedback'] = var7;
    var7 = function generateFeedbackOptions() {
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 0;
        var3 = var9[var4];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.+MbOX1;
        var3 = var5.bind(var6)(var3);
        var2['name'] = var3;
        var3 = _closure1_slot2;
        var1 = var3.BUG;
        var2['value'] = var1;
        var1 = new Array(2);
        var1[0] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var9[var4];
        var4 = var8.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.CRsCRE;
        var4 = var5.bind(var6)(var4);
        var2['name'] = var4;
        var3 = var3.ALLOWED;
        var2['value'] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['generateFeedbackOptions'] = var7;
    var3['RaidAlertType'] = var6;
    var3['RaidResolutionType'] = var5;
    var4 = function getMostImportantRaidResolutionType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.includes;
            var1 = _closure1_slot3;
            var1 = var1.LEGITIMATE_ACTIVITY;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.includes;
            var1 = _closure1_slot3;
            var1 = var1.DM_SPAM;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.includes;
            var1 = _closure1_slot3;
            var1 = var1.JOIN_RAID;
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot3;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3.OTHER;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = var3.JOIN_RAID;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var3 = _closure1_slot3;
            var1 = var3.DM_SPAM;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.LEGITIMATE_ACTIVITY;
case 10:
            return var1;
        }
    };
    var3['getMostImportantRaidResolutionType'] = var4;
    var3['RaidLockdownFeedbackType'] = var2;
    return var1;
})();