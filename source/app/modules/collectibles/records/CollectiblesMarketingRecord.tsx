// app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMarketingBadgeRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMarketingBannerRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMarketingCoachmarkRecord;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var2 = function() {
        var5 = function CollectiblesMarketingsRecord(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['marketingsBySurfaces'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'fromServer';
        var1['key'] = var3;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = arg1;
                var3 = _closure2_slot0;
                var1 = global;
                var4 = var1.Object;
                var2 = var4.fromEntries;
                var6 = var1.Object;
                var5 = var6.entries;
                var7 = null;
                var9 = var7 == var8;
                var1 = undefined;
                if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var8.marketings;
case 2:
                if(!(var7 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = {};
case 4:
                var6 = var5.bind(var6)(var1);
                var5 = var6.map;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var5 = var6().value;
                        var3 = var1;
                        var2 = undefined;
                        var3 = var3 === var2;
                        var4 = undefined;
                        if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = var5;
case 6:
                        var5 = undefined;
                        if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var2;
                        var5 = undefined;
                        var3 = var6;
                        if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 9:
                        var5 = var7;
                        var3 = var6;
case 5:
                        if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var1.return();
case 10:
                        var1 = null;
                        var3 = var1 == var5;
                        var7 = undefined;
                        if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var7 = var5.type;
case 12:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var8 = 6;
                        var6 = var6[var8];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.CollectiblesMarketingType;
                        var6 = var6.BADGE;
                        if(!(var7 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var6 = var1 == var5;
                        var7 = undefined;
                        if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var7 = var5.type;
case 16:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var8];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.CollectiblesMarketingType;
                        var6 = var6.BANNER;
                        if(!(var7 !== var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var6 = var1 == var5;
                        var7 = undefined;
                        if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var7 = var5.type;
case 20:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var8];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.CollectiblesMarketingType;
                        var6 = var6.COACHMARK;
                        if(!(var7 !== var6)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        var1 = var1 == var5;
                        var6 = undefined;
                        if(var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var6 = var5.type;
case 24:
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var8];
                        var1 = var7.bind(var2)(var1);
                        var1 = var1.CollectiblesMarketingType;
                        var1 = var1.TAB_TOOLTIP;
                        if(!(var6 !== var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var1 = new Array(2);
                        var1[0] = var4;
                        var1[1] = var2;
                        _fun0002_ip = 28; continue _fun0002;
case 26:
                        var2 = new Array(2);
                        var2[0] = var4;
                        var7 = _closure1_slot7;
                        var6 = var7.fromServer;
                        var6 = var6.bind(var7)(var5);
                        var2[1] = var6;
                        var1 = var2;
case 28:
                        _fun0002_ip = 29; continue _fun0002;
case 22:
                        var2 = new Array(2);
                        var2[0] = var4;
                        var7 = _closure1_slot6;
                        var6 = var7.fromServer;
                        var6 = var6.bind(var7)(var5);
                        var2[1] = var6;
                        var1 = var2;
case 29:
                        _fun0002_ip = 30; continue _fun0002;
case 18:
                        var2 = new Array(2);
                        var2[0] = var4;
                        var7 = _closure1_slot5;
                        var6 = var7.fromServer;
                        var6 = var6.bind(var7)(var5);
                        var2[1] = var6;
                        var1 = var2;
case 30:
                        _fun0002_ip = 31; continue _fun0002;
case 14:
                        var2 = new Array(2);
                        var2[0] = var4;
                        var4 = _closure1_slot4;
                        var3 = var4.fromServer;
                        var3 = var3.bind(var4)(var5);
                        var2[1] = var3;
                        var1 = var2;
case 31:
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var10 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesMarketingRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CollectiblesMarketingsRecord'] = var2;
    return var1;
})();