// app/modules/reactions/ReactionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getReactionEmojiName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 44; continue _fun0001 }
 14:
            var4 = var2.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ':';
            var1 = var3.bind(var1)(var4, var1);
            _fun0001_ip = 85; continue _fun0001;
 44:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.convertSurrogateToName;
            var2 = var2.name;
            var1 = var3.bind(var4)(var2);
 85:
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
 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 4;
            var2 = var2[var3];
            var9 = undefined;
            var2 = var4.bind(var9)(var2);
            var2 = var2.t;
            var4 = arg4;
            if(var4) { _fun0002_ip = 62; continue _fun0002 }
 39:
            if(var1) { _fun0002_ip = 52; continue _fun0002 }
 42:
            var4 = var2.PirBBA;
            _fun0002_ip = 60; continue _fun0002;
 52:
            var4 = var2.CLuzw8;
 60:
            _fun0002_ip = 86; continue _fun0002;
 62:
            if(var1) { _fun0002_ip = 75; continue _fun0002 }
 65:
            var1 = var2.Z/l+qq;
            _fun0002_ip = 83; continue _fun0002;
 75:
            var1 = var2.i9DXqK;
 83:
            var4 = var1;
 86:
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
            if(var7) { _fun0002_ip = 194; continue _fun0002 }
 146:
            var10 = var11.replace;
            var8 = /[:_]/g;
            var7 = ' ';
            var8 = var10.bind(var11)(var8, var7);
            var7 = var5 == var8;
            var6 = undefined;
            if(var7) { _fun0002_ip = 194; continue _fun0002 }
 184:
            var7 = var8.trim;
            var6 = var7.bind(var8)();
 194:
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0002_ip = 208; continue _fun0002 }
 205:
            var5 = var6;
 208:
            var1['emojiName'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getAccessibleEmojiDisplayName'] = var4;
    var4 = function toReactionEmoji(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = var2.id;
            var3 = null;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0003_ip = 24; continue _fun0003 }
 21:
            var4 = var5;
 24:
            var1['id'] = var4;
            var4 = var2.id;
            if(!(var3 == var4)) { _fun0003_ip = 45; continue _fun0003 }
 37:
            var4 = var2.optionallyDiverseSequence;
            _fun0003_ip = 50; continue _fun0003;
 45:
            var4 = var2.name;
 50:
            if(!(var3 == var4)) { _fun0003_ip = 59; continue _fun0003 }
 54:
            var4 = var2.name;
 59:
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0003_ip = 73; continue _fun0003 }
 70:
            var3 = var4;
 73:
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
 0:
            var3 = arg1;
            var1 = arg2;
            var2 = var1.id;
            var4 = null;
            if(!(var4 == var2)) { _fun0004_ip = 45; continue _fun0004 }
 17:
            var2 = var3.id;
            var2 = var4 == var2;
            if(!var2) { _fun0004_ip = 43; continue _fun0004 }
 29:
            var6 = var1.name;
            var5 = var3.name;
            var2 = var6 === var5;
 43:
            return var2;
 45:
            var2 = var3.id;
            if(!(var4 == var2)) { _fun0004_ip = 61; continue _fun0004 }
 54:
            var2 = var3.id;
            _fun0004_ip = 88; continue _fun0004;
 61:
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var2 = var4.bind(var3)(var5);
 88:
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
 0:
            var3 = arg1;
            var1 = var3.isThread;
            var1 = var1.bind(var3)();
            if(var1) { _fun0005_ip = 77; continue _fun0005 }
 19:
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            if(var1) { _fun0005_ip = 65; continue _fun0005 }
 32:
            var1 = var3.isGuildVocal;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot4;
            if(var1) { _fun0005_ip = 57; continue _fun0005 }
 49:
            var1 = var3.CHANNEL_TEXT_AREA;
            _fun0005_ip = 63; continue _fun0005;
 57:
            var1 = var3.TEXT_IN_VOICE;
 63:
            _fun0005_ip = 75; continue _fun0005;
 65:
            var3 = _closure1_slot4;
            var1 = var3.FORUM_CHANNEL_TEXT_AREA;
 75:
            _fun0005_ip = 87; continue _fun0005;
 77:
            var2 = _closure1_slot4;
            var1 = var2.THREAD_TEXT_AREA;
 87:
            return var1;
        }
    };
    var3['getBurstAnalyticsSection'] = var4;
    var4 = function shouldApplyReaction(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var1 = var1.optimistic;
            var4 = _closure1_slot3;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            if(!var1) { _fun0006_ip = 41; continue _fun0006 }
 34:
            var2 = var2 === var3;
            var1 = !var2;
 41:
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