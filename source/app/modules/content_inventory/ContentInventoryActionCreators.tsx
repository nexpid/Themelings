// app/modules/content_inventory/ContentInventoryActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/ContentInventoryActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var7 = var3.bind(var1)(var2);
        var5 = var7.dispatch;
        var2 = {};
        var8 = 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN';
        var2['type'] = var8;
        var2 = var5.bind(var7)(var2);
        var2 = 7;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.MEMBERLIST_CONTENT_FEED_HIDDEN;
        var2 = {};
        var8 = _closure1_slot4;
        var7 = var8.getChannelId;
        var7 = var7.bind(var8)();
        var2['channel_id'] = var7;
        var8 = _closure1_slot5;
        var7 = var8.getGuildId;
        var7 = var7.bind(var8)();
        var2['guild_id'] = var7;
        var6 = _closure1_slot7;
        var6 = var6.hidden;
        var2['hidden'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['toggleMemberListContentFeedHidden'] = var4;
    var4 = function onGameProfileOpen() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GAME_PROFILE_OPEN';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['onGameProfileOpen'] = var4;
    var4 = function onTapContentInventoryEntryEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var3 = var1.authorId;
            var2 = var1.tappedElement;
            var7 = _closure1_slot3;
            var4 = var7.getChannel;
            var1 = var6.channel_id;
            var9 = var4.bind(var7)(var1);
            var1 = 'avatar';
            var4 = var1 === var2;
            if(var4) { _fun0001_ip = 64; continue _fun0001 }
 53:
            var1 = 'username';
            if(!(var1 === var2)) { _fun0001_ip = 220; continue _fun0001 }
 64:
            var2 = _closure1_slot6;
            var1 = var2.getUser;
            var10 = var1.bind(var2)(var3);
            var8 = null;
            if(!(var8 != var10)) { _fun0001_ip = 220; continue _fun0001 }
 88:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.showUserProfile;
            var1 = {};
            var10 = var10.id;
            var1['userId'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 141; continue _fun0001 }
 136:
            var8 = var9.id;
 141:
            var1['channelId'] = var8;
            var6 = var6.id;
            var1['messageId'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 9;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            if(var4) { _fun0001_ip = 193; continue _fun0001 }
 177:
            var6 = var5.USERNAME;
            var4 = new Array(1);
            var4[0] = var6;
            _fun0001_ip = 210; continue _fun0001;
 193:
            var6 = var5.AVATAR;
            var5 = new Array(1);
            var5[0] = var6;
            var4 = var5;
 210:
            var1['sourceAnalyticsLocations'] = var4;
            var1 = var2.bind(var3)(var1);
 220:
            var1 = undefined;
            return var1;
        }
    };
    var3['onTapContentInventoryEntryEmbed'] = var4;
    var2 = function clearDeleteHistoryError() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearDeleteHistoryError'] = var2;
    return var1;
})();