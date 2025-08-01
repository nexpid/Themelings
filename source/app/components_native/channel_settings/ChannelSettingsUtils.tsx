// app/components_native/channel_settings/ChannelSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'components_native/channel_settings/ChannelSettingsUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getIsChannelNameSettingEditable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = var3.canManageThread;
            var5 = var3.canManageChannels;
            var1 = var3.canSendMessages;
            var6 = var3.isForumPost;
            var2 = var3.isThread;
            var3 = var3.isChannelOwner;
            if(!var6) { _fun0001_ip = 45; continue _fun0001 }
 42:
            if(var3) { _fun0001_ip = 69; continue _fun0001 }
 45:
            var1 = var4;
            if(var6) { _fun0001_ip = 69; continue _fun0001 }
 51:
            var1 = var5;
            if(!var2) { _fun0001_ip = 69; continue _fun0001 }
 57:
            var2 = var4;
            if(var4) { _fun0001_ip = 66; continue _fun0001 }
 63:
            var2 = var3;
 66:
            var1 = var2;
 69:
            return var1;
        }
    };
    var3['getIsChannelNameSettingEditable'] = var2;
    return var1;
})();