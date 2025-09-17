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
 0:
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
 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var1 = var6 != var1;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 45; continue _fun0002 }
 18:
                    var7 = _closure1_slot5;
                    var3 = var7.getChangelog;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var7)(var2, var1);
 45:
                    var1 = _closure2_slot0;
                    var1 = var6 != var1;
                    var3 = null;
                    if(!var1) { _fun0002_ip = 85; continue _fun0002 }
 58:
                    var8 = _closure1_slot5;
                    var7 = var8.getChangelog;
                    var2 = _closure2_slot0;
                    var1 = 'en-US';
                    var3 = var7.bind(var8)(var2, var1);
 85:
                    var1 = _closure2_slot0;
                    var2 = var6 != var1;
                    if(!var2) { _fun0002_ip = 123; continue _fun0002 }
 96:
                    var9 = _closure1_slot5;
                    var8 = var9.getChangelogLoadStatus;
                    var7 = _closure2_slot0;
                    var1 = 'en-US';
                    var2 = var8.bind(var9)(var7, var1);
 123:
                    var1 = {};
                    var1['changelog'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var6 != var4;
                    if(!var4) { _fun0002_ip = 168; continue _fun0002 }
 141:
                    var8 = _closure1_slot5;
                    var7 = var8.getChangelogLoadStatus;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = var7.bind(var8)(var6, var5);
 168:
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
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var4 == var3;
 24:
                    if(!var2) { _fun0003_ip = 48; continue _fun0003 }
 27:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot6;
                    var3 = var3.NOT_LOADED;
                    var2 = var4 === var3;
 48:
                    if(!var2) { _fun0003_ip = 96; continue _fun0003 }
 51:
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
 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 246; continue _fun0001 }
 161:
            if(!(var1 == var2)) { _fun0001_ip = 179; continue _fun0001 }
 165:
            var1 = _closure1_slot6;
            var1 = var1.LOADED_FAILURE;
            if(!(var7 !== var1)) { _fun0001_ip = 211; continue _fun0001 }
 179:
            var1 = {};
            var1['id'] = var3;
            var1['changelog'] = var2;
            var2 = _closure1_slot6;
            var2 = var2.NOT_LOADED;
            var2 = var7 !== var2;
            var1['loaded'] = var2;
            _fun0001_ip = 244; continue _fun0001;
 211:
            var2 = {};
            var2['id'] = var3;
            var2['changelog'] = var6;
            var4 = _closure1_slot6;
            var4 = var4.NOT_LOADED;
            var4 = var5 !== var4;
            var2['loaded'] = var4;
            var1 = var2;
 244:
            _fun0001_ip = 265; continue _fun0001;
 246:
            var2 = {'id': null, 'changelog': null, 'loaded': false};
            var2['id'] = var3;
            var1 = var2;
 265:
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
 0:
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
            if(!var6) { _fun0004_ip = 167; continue _fun0004 }
 138:
            var3 = global;
            var5 = var3.Object;
            var3 = var5.keys;
            var3 = var3.bind(var5)(var12);
            var5 = var3.length;
            var3 = 0;
            var6 = var3 === var5;
 167:
            var3 = var1 != var12;
            if(!var3) { _fun0004_ip = 203; continue _fun0004 }
 174:
            var5 = global;
            var9 = var5.Object;
            var5 = var9.keys;
            var5 = var5.bind(var9)(var12);
            var9 = var5.length;
            var5 = 0;
            var3 = var9 > var5;
 203:
            if(!var3) { _fun0004_ip = 210; continue _fun0004 }
 206:
            var3 = var1 == var7;
 210:
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
            if(!(var1 != var9)) { _fun0004_ip = 331; continue _fun0004 }
 299:
            if(!(var1 == var8)) { _fun0004_ip = 306; continue _fun0004 }
 303:
            if(var2) { _fun0004_ip = 331; continue _fun0004 }
 306:
            var1 = {};
            var1['id'] = var9;
            var1['changelog'] = var8;
            var1['loaded'] = var2;
            var2 = false;
            var1['clientTooOld'] = var2;
            _fun0004_ip = 367; continue _fun0004;
 331:
            var2 = {};
            var2['id'] = var7;
            var2['changelog'] = var4;
            var4 = !var6;
            var4 = !var4;
            if(var6) { _fun0004_ip = 354; continue _fun0004 }
 351:
            var4 = var5;
 354:
            var2['loaded'] = var4;
            var2['clientTooOld'] = var3;
            var1 = var2;
 367:
            return var1;
        }
    };
    var3['useCurrentChangelog'] = var2;
    return var1;
})();