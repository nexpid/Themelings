// app/modules/saved_messages/SavedMessagesTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function savedMessageDataToClient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.channel_id;
            var1['channelId'] = var2;
            var2 = var3.message_id;
            var1['messageId'] = var2;
            var4 = global;
            var6 = var4.Date;
            var8 = var3.saved_at;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            var1['savedAt'] = var2;
            var2 = var3.author_summary;
            var1['authorSummary'] = var2;
            var2 = var3.channel_summary;
            var1['channelSummary'] = var2;
            var2 = var3.message_summary;
            var1['messageSummary'] = var2;
            var6 = var3.guild_id;
            var7 = 0;
            var5 = undefined;
            if(!(var7 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.guild_id;
case 2:
            var1['guildId'] = var5;
            var6 = var3.author_id;
            var5 = undefined;
            if(!(var7 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.author_id;
case 4:
            var1['authorId'] = var5;
            var5 = var3.notes;
            var1['notes'] = var5;
            var6 = var3.due_at;
            var5 = null;
            var5 = var5 != var6;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var4.Date;
            var8 = var3.due_at;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var3 = new var9[var5](var8, var7);
            var2 = var3 instanceof Object ? var3 : var4;
case 6:
            var1['dueAt'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = {};
    var1 = 'ALL';
    var5['ALL'] = var1;
    var1 = 'REMINDER';
    var5['REMINDER'] = var1;
    var1 = 'BOOKMARK';
    var5['BOOKMARK'] = var1;
    var1 = 1;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/saved_messages/SavedMessagesTypes.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SavedMessageSortTypes'] = var5;
    var3['savedMessageDataToClient'] = var4;
    var4 = function savedMessageCreateObjectToClient(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.message;
            var3 = null;
            var4 = var3 != var4;
            if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 0;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.createMessageRecord;
            var4 = var2.message;
            var3 = var5.bind(var6)(var4);
case 8:
            var1['message'] = var3;
            var4 = _closure1_slot2;
            var3 = var2.save_data;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1['saveData'] = var2;
            return var1;
        }
    };
    var3['savedMessageCreateObjectToClient'] = var4;
    var2 = function savedMessageDeleteObjectToClient(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.channel_id;
        var1['channelId'] = var3;
        var2 = var2.message_id;
        var1['messageId'] = var2;
        return var1;
    };
    var3['savedMessageDeleteObjectToClient'] = var2;
    return var1;
})();