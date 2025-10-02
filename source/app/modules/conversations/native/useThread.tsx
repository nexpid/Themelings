// app/modules/conversations/native/useThread.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/useThread.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useThread(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var9 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var11 = undefined;
            var6 = var3.bind(var11)(var2);
            var4 = var6.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot4;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot0;
                    if(!(var4 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = {};
                    var7 = _closure1_slot5;
                    var6 = var7.getChannel;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var6 = var6.bind(var7)(var5);
                    var7 = var4 != var6;
                    var5 = null;
                    if(!var7) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var5 = var6;
case 5:
                    var1['thread'] = var5;
                    var7 = _closure1_slot4;
                    var6 = var7.getCount;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var6 = var4 != var5;
                    var4 = 0;
                    if(!var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = var5;
case 7:
                    var1['messageCount'] = var4;
                    var4 = _closure1_slot4;
                    var3 = var4.getMostRecentMessage;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['mostRecentMessage'] = var2;
                    _fun0002_ip = 9; continue _fun0002;
case 2:
                    var1 = {'thread': null, 'messageCount': 0, 'mostRecentMessage': null};
case 9:
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var3, var2);
            var4 = var2.thread;
            var3 = var2.messageCount;
            var2 = var2.mostRecentMessage;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = null;
            var5 = var5 == var8;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = var8.id;
case 10:
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var4 != var3;
case 4:
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = _closure2_slot1;
                    var5 = var6.hasFlag;
                    var3 = _closure1_slot6;
                    var3 = var3.HAS_THREAD;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = _closure2_slot2;
case 14:
                    var2 = var3;
case 12:
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = _closure1_slot4;
                    var5 = var6.getMostRecentMessage;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
case 16:
                    if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 8:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var4 = var5[var2];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var4);
                    var7 = var8.preload;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var4 = _closure2_slot1;
                    var1 = var4.id;
                    var1 = var7.bind(var8)(var6, var1);
                    var1 = 6;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {'channelId': null, 'isPreload': true, 'limit': 25};
                    var4 = var4.id;
                    var1['channelId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['thread'] = var4;
            var1['messageCount'] = var3;
            var1['mostRecentMessage'] = var2;
            return var1;
        }
    };
    var3['useThread'] = var2;
    return var1;
})();