// app/modules/messages/native/renderer/rows/BlockedGroup.tsx
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
    var7 = var4.RowType;
    var _closure1_slot3 = var7;
    var4 = var4.SeparatorAction;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UNSAFE_Colors;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.memoize;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            var10 = '#DBE0E4';
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.PRIMARY_700;
case 2:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            var9 = '#FAFAFA';
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var9 = var1.PRIMARY_630;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot5;
            var4 = var1.GREY1;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.hexWithOpacity;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_300;
            var1 = 0.6;
            var4 = var6.bind(var7)(var3, var1);
case 8:
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var7 = var6[var2];
            var8 = var3.bind(var5)(var7);
            var7 = var8.processColorOrThrow;
            var7 = var7.bind(var8)(var10);
            var1['borderColor'] = var7;
            var7 = var6[var2];
            var8 = var3.bind(var5)(var7);
            var7 = var8.processColorOrThrow;
            var7 = var7.bind(var8)(var9);
            var1['backgroundColor'] = var7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.processColorOrThrow;
            var2 = var2.bind(var3)(var4);
            var1['color'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/rows/BlockedGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateBlockedGroupRowData(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var1 = arg3;
            var _closure2_slot0 = var1;
            var7 = var8.changeType;
            var1 = var8.message;
            var11 = var8.content;
            var6 = var8.text;
            var5 = var8.revealed;
            var9 = var8.context;
            var12 = var8.rowType;
            var3 = 'canUncollapse';
            var10 = var3 in var8;
            var2 = !var10;
            if(!var10) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var8.canUncollapse;
case 9:
            var10 = 'contextIds';
            var10 = var10 in var8;
            var14 = undefined;
            var15 = undefined;
            if(!var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var15 = var8.contextIds;
case 11:
            var10 = _closure1_slot3;
            var10 = var10.SUSPENDED_USER_GROUP;
            if(!(var12 !== var10)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var10 = _closure1_slot4;
            var10 = var10.TOGGLE_BLOCKED_MESSAGES;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var13 = _closure1_slot4;
            var10 = var13.DISMISS_SUSPENDED_USER_MESSAGES;
case 15:
            var13 = null;
            if(!(var13 == var9)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var9 = var1.id;
case 16:
            var1 = _closure1_slot3;
            var1 = var1.SUSPENDED_USER_GROUP;
            var1 = var12 === var1;
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var13 != var15;
case 18:
            if(!var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var16 = var15.length;
            var13 = 0;
            var1 = var16 > var13;
case 20:
            if(!var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var13 = var15.join;
            var1 = ',';
            var9 = var13.bind(var15)(var1);
case 22:
            var1 = {};
            var13 = _closure1_slot6;
            var8 = arg2;
            var17 = var13.bind(var14)(var8);
            var18 = var1;
            var8 = copyDataProperties(var18, var17);
            var8 = 'type';
            var1[var8] = var12;
            var8 = var11.map;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.generate;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var11)(var4);
            var4 = 'content';
            var1[var4] = var8;
            var8 = {};
            var4 = {};
            var4['type'] = var10;
            var4['context'] = var9;
            var8['action'] = var4;
            var4 = 'button';
            var1[var4] = var8;
            var4 = 'changeType';
            var1[var4] = var7;
            var4 = 'text';
            var1[var4] = var6;
            var4 = 'revealed';
            var1[var4] = var5;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['generateBlockedGroupRowData'] = var2;
    return var1;
})();