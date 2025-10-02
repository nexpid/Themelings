// app/modules/messages/native/VisibleMessagesWindowHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function getRowMessageId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'rowType';
            var3 = var3 in var1;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1.type;
            var3 = _closure1_slot1;
            var3 = var3.MESSAGE;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = var1.message;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3.id;
case 7:
            return var2;
case 4:
            var3 = var1.rowType;
            var2 = _closure1_slot1;
            var2 = var2.MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 9; continue _fun0001 }
case 2:
            var2 = undefined;
            return var2;
case 9:
            var1 = var1.message;
            var1 = var1.id;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.RowType;
    var _closure1_slot1 = var2;
    var2 = function VisibleMessagesWindowHandler() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = null;
        var3['data'] = var4;
        var3['callback'] = var4;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = arg1;
                var2['callback'] = var3;
                var3 = var2.data;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = _closure2_slot0;
                var2 = var3.callback;
                var1 = var3.data;
                var1 = var2.bind(var3)(var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var3['setCallback'] = var4;
        var4 = function() {
            var2 = _closure2_slot0;
            var1 = null;
            var2['callback'] = var1;
            var2['data'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['clearCallback'] = var4;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var10 = var1.rows;
                var6 = var1.firstVisibleMessageRowIndex;
                var3 = var1.lastVisibleMessageRowIndex;
                var2 = _closure2_slot0;
                var2 = var2.callback;
                var9 = null;
                if(!(var9 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = var9 != var6;
                var5 = null;
                if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var8 = 0;
                var11 = var6 >= var8;
                var4 = undefined;
                var2 = var6;
                var5 = null;
                if(!var11) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                var12 = _closure1_slot2;
                var11 = var10[var2];
                var5 = var12.bind(var4)(var11);
                if(!(var9 == var5)) { _fun0003_ip = 14; continue _fun0003 }
case 17:
                var2 = var2 - 1;
                var5 = null;
                if(var2 >= var8) { _fun0003_ip = 16; continue _fun0003 }
case 14:
                var4 = var9 != var3;
                var2 = null;
                if(!var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var4 = var10.length;
                var4 = var3 < var4;
                var8 = undefined;
                var7 = var3;
                var2 = null;
                if(!var4) { _fun0003_ip = 18; continue _fun0003 }
case 20:
                var12 = _closure1_slot2;
                var4 = var10[var7];
                var2 = var12.bind(var8)(var4);
                if(!(var9 == var2)) { _fun0003_ip = 18; continue _fun0003 }
case 21:
                var7 = var7 + 1;
                var4 = var10.length;
                var4 = var7 < var4;
                var2 = null;
                if(var4) { _fun0003_ip = 20; continue _fun0003 }
case 18:
                var7 = var9 != var6;
                var4 = null;
                if(!var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = var9 != var3;
                var4 = null;
                if(!var7) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var7 = global;
                var8 = var7.Math;
                var7 = var8.floor;
                var11 = var3 - var6;
                var3 = 2;
                var3 = var11 / var3;
                var3 = var7.bind(var8)(var3);
                var8 = var6 + var3;
                var3 = var10.length;
                var3 = var8 < var3;
                var6 = undefined;
                var4 = null;
                if(!var3) { _fun0003_ip = 22; continue _fun0003 }
case 25:
                var11 = _closure1_slot2;
                var3 = var10[var8];
                var4 = var11.bind(var6)(var3);
                if(!(var9 == var4)) { _fun0003_ip = 22; continue _fun0003 }
case 26:
                var8 = var8 + 1;
                var3 = var10.length;
                var3 = var8 < var3;
                var4 = null;
                if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 22:
                var3 = _closure2_slot0;
                var1 = {};
                var1['topVisibleMessage'] = var5;
                var1['middleVisibleMessage'] = var4;
                var1['bottomVisibleMessage'] = var2;
                var3['data'] = var1;
                var2 = var3.callback;
                var1 = var3.data;
                var1 = var2.bind(var3)(var1);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var3['handleScrollPosition'] = var2;
        return var1;
    };
    var _closure1_slot3 = var2;
    var2 = var4.bind(var1)(var2);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/VisibleMessagesWindowHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();