// app/modules/reactions/native/MessagePreviewReactions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/MessagePreviewReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.channelId;
            var11 = var1.messageId;
            var10 = var1.emoji;
            var1 = function usePreviewMessageReactions(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = _closure1_slot3;
                        var3 = var4.getMessage;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        if(!(var3 == var2)) { _fun0002_ip = 37; continue _fun0002 }
 31:
                        var1 = _closure1_slot5;
                        _fun0002_ip = 43; continue _fun0002;
 37:
                        var1 = var2.reactions;
 43:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var4 = undefined;
            var9 = var1.bind(var4)(var11);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var2 = var7[var1];
            var3 = var5.bind(var4)(var2);
            var2 = 5;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.MESSAGE_PREVIEW_REACTIONS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = var9.length;
            var5 = 0;
            if(!(!(var7 > var5))) { _fun0001_ip = 166; continue _fun0001 }
 126:
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 6;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.MessageReactionsEmpty;
            var5 = {};
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 221; continue _fun0001;
 166:
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 6;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.MessageReactionsContent;
            var6 = {};
            var6['channelId'] = var12;
            var6['messageId'] = var11;
            var6['emoji'] = var10;
            var6['reactions'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 221:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();