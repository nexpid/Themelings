// app/modules/hang_status/components/native/HangStatusFavoriteActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_FAVORITES;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HANG_STATUS_FAVORITE_ACTION_SHEET_KEY;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/HangStatusFavoriteActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HangStatusFavoriteActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var6 = var3.status;
            var _closure2_slot1 = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var3 = var9[var5];
            var4 = undefined;
            var13 = var8.bind(var4)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var3;
            var7 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getFavoritedStatuses;
                var2 = var2.bind(var3)();
                var2 = var2.length;
                var1 = _closure1_slot5;
                var1 = var2 >= var1;
                return var1;
            };
            var7 = var12.bind(var13)(var10, var7);
            var _closure2_slot2 = var7;
            var5 = var9[var5];
            var9 = var8.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isFavorited;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var8.bind(var9)(var5, var3);
            var _closure2_slot3 = var10;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var8 = null;
            var9 = var8 == var2;
            var8 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var2.id;
case 2:
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var10;
            var2[3] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = _closure2_slot1;
                    var8 = var4.bind(var1)(var3);
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot3;
                    var3 = !var4;
case 4:
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateFavoriteHangStatus;
                    var3 = _closure2_slot1;
                    if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var3.status;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var4 = var3;
case 10:
                    var10 = null;
                    var3 = null;
                    if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var8 = _closure2_slot1;
                    var3 = var8.emoji;
case 11:
                    var3 = var5.bind(var6)(var4, var3);
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 8;
                    var3 = var11[var3];
                    var6 = var9.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.HANG_STATUS_FAVORITE_CLICKED;
                    var3 = {};
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = _closure2_slot0;
                    var10 = var10 == var8;
                    var8 = undefined;
                    if(var10) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var10 = _closure2_slot0;
                    var8 = var10.id;
case 13:
                    var12 = var9.bind(var1)(var8);
                    var13 = var3;
                    var8 = copyDataProperties(var13, var12);
                    var7 = _closure2_slot3;
                    var8 = !var7;
                    var7 = 'favorited';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var9 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.StarIcon;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.StarOutlineIcon;
case 17:
            var3 = _closure1_slot8;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var7 = 14;
            var5 = var12[var7];
            var5 = var8.bind(var4)(var5);
            var5 = var5.ActionSheetRow;
            var6 = var5.Group;
            var5 = {};
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ActionSheetRow;
            var7 = {};
            var12 = {};
            var12 = var3.bind(var4)(var13, var12);
            var7['icon'] = var12;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 15;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var11.R3BPHx;
            var10 = var12.bind(var13)(var10);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var11 = var11.aSMptL;
            var10 = var12.bind(var13)(var11);
case 20:
            var7['label'] = var10;
            var7['onPress'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();