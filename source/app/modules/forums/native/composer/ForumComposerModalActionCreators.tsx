// app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/ForumComposerModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 0;
            var2 = var1[var5];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var4 = var7.trackMobileForumComposerOpened;
            var2 = {};
            var8 = var6.guildId;
            var2['guildId'] = var8;
            var8 = var6.parentChannelId;
            var2['channelId'] = var8;
            var8 = var6.analyticsLocationObject;
            var2['location'] = var8;
            var2 = var4.bind(var7)(var2);
            var4 = var6.isEdit;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 90; continue _fun0001 }
 84:
            var2 = var6.isEdit;
 90:
            if(var2) { _fun0001_ip = 142; continue _fun0001 }
 93:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var5 = var4.bind(var1)(var2);
            var4 = var5.trackForumCreateNewPostStarted;
            var2 = {};
            var7 = var6.guildId;
            var2['guildId'] = var7;
            var7 = var6.parentChannelId;
            var2['channelId'] = var7;
            var2 = var4.bind(var5)(var2);
 142:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 1;
            var4 = var2[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.pushLazy;
            var7 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var7 = var7.bind(var1)(var3);
            var3 = 2;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var7.bind(var1)(var3, var2);
            var2 = 'create-forum-post';
            var2 = var4.bind(var5)(var3, var6, var2);
            return var1;
        }
    };
    var3['openCreateForumPostModal'] = var4;
    var2 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var2 = false;
 11:
            if(var2) { _fun0002_ip = 46; continue _fun0002 }
 14:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 0;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackMobileForumComposerDismissed;
            var2 = var2.bind(var3)();
 46:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = 'create-forum-post';
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['closeCreateForumPostModal'] = var2;
    return var1;
})();