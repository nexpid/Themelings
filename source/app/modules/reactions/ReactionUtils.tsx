// app/modules/reactions/ReactionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getReactionEmojiName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ':';
            var1 = var3.bind(var1)(var4, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.convertSurrogateToName;
            var2 = var2.name;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
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
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsSections;
    var _closure1_slot4 = var8;
    var5 = var5.AnalyticEvents;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NotificationSettingsUpdateType;
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/reactions/ReactionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 20;
    var3['MAX_REACTIONS'] = var5;
    var3['getReactionEmojiName'] = var4;
    var4 = function getAccessibleEmojiDisplayName(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 4;
            var2 = var2[var3];
            var9 = undefined;
            var2 = var4.bind(var9)(var2);
            var2 = var2.t;
            var4 = arg4;
            if(var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = var2.PirBBA;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = var2.CLuzw8;
case 9:
            _fun0002_ip = 10; continue _fun0002;
case 5:
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2.Z/l+qq;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var1 = var2.i9DXqK;
case 13:
            var4 = var1;
case 10:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var9)(var1);
            var3 = var1.intl;
            var2 = var3.formatToPlainString;
            var1 = {};
            var6 = arg2;
            var1['reactions'] = var6;
            var6 = _closure1_slot7;
            var5 = arg3;
            var11 = var6.bind(var9)(var5);
            var5 = null;
            var7 = var5 == var11;
            var6 = undefined;
            if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var10 = var11.replace;
            var8 = /[:_]/g;
            var7 = ' ';
            var8 = var10.bind(var11)(var8, var7);
            var7 = var5 == var8;
            var6 = undefined;
            if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var7 = var8.trim;
            var6 = var7.bind(var8)();
case 14:
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = var6;
case 17:
            var1['emojiName'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getAccessibleEmojiDisplayName'] = var4;
    var4 = function toReactionEmoji(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var2.id;
            var3 = null;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = var5;
case 19:
            var1['id'] = var4;
            var4 = var2.id;
            if(!(var3 == var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = var2.optionallyDiverseSequence;
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var4 = var2.name;
case 23:
            if(!(var3 == var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = var2.name;
case 24:
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = var4;
case 26:
            var1['name'] = var3;
            var3 = global;
            var4 = var3.Boolean;
            var3 = var2.animated;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1['animated'] = var2;
            return var1;
        }
    };
    var3['toReactionEmoji'] = var4;
    var4 = function emojiEquals(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var2 = var1.id;
            var4 = null;
            if(!(var4 == var2)) { _fun0004_ip = 21; continue _fun0004 }
case 28:
            var2 = var3.id;
            var2 = var4 == var2;
            if(!var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var6 = var1.name;
            var5 = var3.name;
            var2 = var6 === var5;
case 29:
            return var2;
case 21:
            var2 = var3.id;
            if(!(var4 == var2)) { _fun0004_ip = 31; continue _fun0004 }
case 25:
            var2 = var3.id;
            _fun0004_ip = 32; continue _fun0004;
case 31:
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var2 = var4.bind(var3)(var5);
case 32:
            var4 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var4);
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['emojiEquals'] = var4;
    var4 = function getBurstAnalyticsSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isThread;
            var1 = var1.bind(var3)();
            if(var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 35:
            var1 = var3.isGuildVocal;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot4;
            if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var1 = var3.CHANNEL_TEXT_AREA;
            _fun0005_ip = 38; continue _fun0005;
case 36:
            var1 = var3.TEXT_IN_VOICE;
case 38:
            _fun0005_ip = 11; continue _fun0005;
case 12:
            var3 = _closure1_slot4;
            var1 = var3.FORUM_CHANNEL_TEXT_AREA;
case 11:
            _fun0005_ip = 39; continue _fun0005;
case 33:
            var2 = _closure1_slot4;
            var1 = var2.THREAD_TEXT_AREA;
case 39:
            return var1;
        }
    };
    var3['getBurstAnalyticsSection'] = var4;
    var4 = function shouldApplyReaction(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var1 = var1.optimistic;
            var4 = _closure1_slot3;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            if(!var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var2 = var2 === var3;
            var1 = !var2;
case 40:
            var1 = !var1;
            return var1;
        }
    };
    var3['shouldApplyReaction'] = var4;
    var2 = function updateReactionNotificationsSetting(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 5;
        var2 = var4[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var2.ReactionNotifications;
        var2 = var3.updateSetting;
        var2 = var2.bind(var3)(var6);
        var3 = _closure1_slot1;
        var2 = 6;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.NOTIFICATION_SETTINGS_UPDATED;
        var2 = {};
        var7 = _closure1_slot6;
        var7 = var7.ACCOUNT;
        var2['update_type'] = var7;
        var2['reaction_notifications'] = var6;
        var6 = arg2;
        var2['reaction_notifications_old'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['updateReactionNotificationsSetting'] = var2;
    return var1;
})();