// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromInvite;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelAndRecipientsFromInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.channel;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.channel;
            var1 = var1.recipients;
            if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var6 = new Array(0);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var1 = var3.channel;
            var4 = var1.recipients;
            var1 = var4.slice;
            var6 = var1.bind(var4)();
case 5:
            var1 = {};
            var1['recipients_'] = var6;
            var4 = var3.channel;
            var4 = var2 != var4;
            var2 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var4 = {};
            var7 = var3.channel;
            var8 = var4;
            var3 = copyDataProperties(var8, var7);
            var3 = 'recipients';
            var4[var3] = var6;
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 6:
            var1['channel'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();