// app/modules/channel_list_v2/native/RedesignChannelListUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignChannelListUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        var1 = arg2;
        var2 = var1.height;
        var1 = arg1;
        var1['size'] = var2;
        var1 = undefined;
        return var1;
    };
    var3['redesignChannelListOverrideItemLayout'] = var4;
    var4 = function(arg1) {
        var1 = arg1;
        var1 = var1.itemKey;
        return var1;
    };
    var3['redesignChannelListKeyExtractor'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.kind;
            var1 = 'channel';
            if(!(var1 !== var3)) { _fun0001_ip = 158; continue _fun0001 }
 19:
            var3 = var2.kind;
            var1 = 'sectionFooterVoice';
            if(!(var1 === var3)) { _fun0001_ip = 52; continue _fun0001 }
 34:
            var1 = var2.activeVoiceChannels;
            var3 = var1.length;
            var1 = 1;
            if(!(var1 !== var3)) { _fun0001_ip = 115; continue _fun0001 }
 52:
            var3 = var2.kind;
            var1 = 'sectionHeaderCategory';
            if(!(var1 !== var3)) { _fun0001_ip = 74; continue _fun0001 }
 67:
            var1 = var2.kind;
            _fun0001_ip = 113; continue _fun0001;
 74:
            var7 = var2.kind;
            var6 = var2.isFirstCategory;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var1 = var5.bind(var4)(var7, var3, var6);
 113:
            _fun0001_ip = 156; continue _fun0001;
 115:
            var4 = var2.activeVoiceChannels;
            var3 = 0;
            var3 = var4[var3];
            var5 = var3.type;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'channel-';
            var1 = var4.bind(var3)(var5);
 156:
            _fun0001_ip = 201; continue _fun0001;
 158:
            var6 = var2.kind;
            var2 = var2.channel;
            var5 = var2.type;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var1 = var4.bind(var3)(var6, var2, var5);
 201:
            return var1;
        }
    };
    var3['getRedesignChannelListItemType'] = var2;
    return var1;
})();