// app/modules/conversations/native/util/navigateToMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.AnalyticsObjects;
    var _closure1_slot3 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot4 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot5 = var7;
    var7 = var4.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot6 = var7;
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/util/navigateToMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function navigateToMessage(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var6 = arg3;
            var5 = arguments[3];
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var6;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var3 = global;
            var7 = var3.setTimeout;
            var4 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.ack;
                var13 = _closure2_slot0;
                var4 = {};
                var8 = _closure1_slot5;
                var8 = var8.ICYMI;
                var4['page'] = var8;
                var8 = _closure1_slot3;
                var8 = var8.ACK_MESSAGE_VIEWED;
                var4['object'] = var8;
                var3 = _closure1_slot4;
                var3 = var3.ACK_SEMI_AUTOMATIC;
                var4['objectType'] = var3;
                var9 = _closure2_slot1;
                var14 = var7;
                var12 = var4;
                var11 = true;
                var10 = true;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var3 = 1500;
            var3 = var7.bind(var1)(var4, var3);
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 2;
            var4 = var11[var4];
            var8 = var7.bind(var1)(var4);
            var9 = _closure1_slot7;
            var7 = var9.CHANNEL;
            var4 = arg2;
            var7 = var7.bind(var9)(var4, var10, var6);
            var4 = {'openChannel': true, 'navigationReplace': false};
            var10 = _closure1_slot0;
            var9 = 3;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.JumpTypes;
            var9 = var9.ANIMATED;
            var4['jumpType'] = var9;
            var4 = var8.bind(var1)(var7, var4);
            var4 = null;
            var4 = var4 == var6;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5;
case 4:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.runAfterInteractions;
            var3 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchMessages;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var5 = _closure1_slot6;
                var2['limit'] = var5;
                var5 = {};
                var7 = _closure2_slot1;
                var5['messageId'] = var7;
                var7 = true;
                var5['flash'] = var7;
                var7 = _closure1_slot0;
                var6 = 3;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.JumpTypes;
                var6 = var6.ANIMATED;
                var5['jumpType'] = var6;
                var2['jump'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 150;
            var2 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['navigateToMessage'] = var2;
    return var1;
})();