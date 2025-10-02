// app/modules/changelog/useCurrentChangelog.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useChangelog(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var11;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var5 = var5[var2];
            var2 = undefined;
            var8 = var6.bind(var2)(var5);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var1 = var6 != var1;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot5;
                    var3 = var7.getChangelog;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var7)(var2, var1);
case 2:
                    var1 = _closure2_slot0;
                    var1 = var6 != var1;
                    var3 = null;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var8 = _closure1_slot5;
                    var7 = var8.getChangelog;
                    var2 = _closure2_slot0;
                    var1 = 'en-US';
                    var3 = var7.bind(var8)(var2, var1);
case 4:
                    var1 = _closure2_slot0;
                    var2 = var6 != var1;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = _closure1_slot5;
                    var8 = var9.getChangelogLoadStatus;
                    var7 = _closure2_slot0;
                    var1 = 'en-US';
                    var2 = var8.bind(var9)(var7, var1);
case 6:
                    var1 = {};
                    var1['changelog'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var6 != var4;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var8 = _closure1_slot5;
                    var7 = var8.getChangelogLoadStatus;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = var7.bind(var8)(var6, var5);
case 8:
                    var1['loadState'] = var4;
                    var1['defaultChangelog'] = var3;
                    var1['defaultLoadState'] = var2;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var2, var5);
            var2 = var5.changelog;
            var _closure2_slot2 = var2;
            var7 = var5.loadState;
            var _closure2_slot3 = var7;
            var6 = var5.defaultChangelog;
            var5 = var5.defaultLoadState;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var8 = new Array(4);
            var8[0] = var3;
            var8[1] = var2;
            var8[2] = var7;
            var8[3] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot2;
                    var2 = var4 == var3;
case 10:
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot6;
                    var3 = var3.NOT_LOADED;
                    var2 = var4 === var3;
case 12:
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 14:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchChangelog;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(!(var1 == var2)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = _closure1_slot6;
            var1 = var1.LOADED_FAILURE;
            if(!(var7 !== var1)) { _fun0001_ip = 19; continue _fun0001 }
case 17:
            var1 = {};
            var1['id'] = var3;
            var1['changelog'] = var2;
            var2 = _closure1_slot6;
            var2 = var2.NOT_LOADED;
            var2 = var7 !== var2;
            var1['loaded'] = var2;
            _fun0001_ip = 20; continue _fun0001;
case 19:
            var2 = {};
            var2['id'] = var3;
            var2['changelog'] = var6;
            var4 = _closure1_slot6;
            var4 = var4.NOT_LOADED;
            var4 = var5 !== var4;
            var2['loaded'] = var4;
            var1 = var2;
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 15:
            var2 = {'id': null, 'changelog': null, 'loaded': false};
            var2['id'] = var3;
            var1 = var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChangelogLoadState;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/changelog/useCurrentChangelog.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useChangelog'] = var4;
    var2 = function useCurrentChangelog() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 4;
            var5 = var1[var11];
            var10 = undefined;
            var8 = var3.bind(var10)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var8 = var7.bind(var8)(var6, var5);
            var5 = var1[var11];
            var9 = var3.bind(var10)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.latestChangelogId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var9)(var6, var5);
            var1 = var1[var11];
            var6 = var3.bind(var10)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getConfig;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var5.bind(var6)(var3, var1);
            var1 = null;
            var6 = var1 != var12;
            if(!var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = global;
            var5 = var3.Object;
            var3 = var5.keys;
            var3 = var3.bind(var5)(var12);
            var5 = var3.length;
            var3 = 0;
            var6 = var3 === var5;
case 22:
            var3 = var1 != var12;
            if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var5 = global;
            var9 = var5.Object;
            var5 = var9.keys;
            var5 = var5.bind(var9)(var12);
            var9 = var5.length;
            var5 = 0;
            var3 = var9 > var5;
case 24:
            if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var3 = var1 == var7;
case 26:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var11 = var9.bind(var10)(var5);
            var9 = var11.useStateFromStores;
            var12 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var12;
            var4 = function() {
                var2 = _closure1_slot5;
                var1 = var2.overrideId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var11)(var5, var4);
            var2 = _closure1_slot7;
            var5 = var2.bind(var10)(var7, var8);
            var4 = var5.changelog;
            var5 = var5.loaded;
            var2 = var2.bind(var10)(var9, var8);
            var8 = var2.changelog;
            var2 = var2.loaded;
            if(!(var1 != var9)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            if(!(var1 == var8)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 30:
            var1 = {};
            var1['id'] = var9;
            var1['changelog'] = var8;
            var1['loaded'] = var2;
            var2 = false;
            var1['clientTooOld'] = var2;
            _fun0004_ip = 32; continue _fun0004;
case 28:
            var2 = {};
            var2['id'] = var7;
            var2['changelog'] = var4;
            var4 = !var6;
            var4 = !var4;
            if(var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var4 = var5;
case 33:
            var2['loaded'] = var4;
            var2['clientTooOld'] = var3;
            var1 = var2;
case 32:
            return var1;
        }
    };
    var3['useCurrentChangelog'] = var2;
    return var1;
})();