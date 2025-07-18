// app/modules/media_viewer/native/useMediaViewerSources.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.createZustandStore;
    var4 = function() {
        var1 = {};
        var2 = new Array(0);
        var1['sources'] = var2;
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['spoilerIndexes'] = var2;
        return var1;
    };
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/useMediaViewerSources.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MediaViewerSourcesStore'] = var4;
    var4 = function setMediaViewerSources(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.sources;
            var3 = var1.initialIndex;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            var3 = null;
 25:
            var _closure2_slot0 = var3;
            var _closure2_slot2 = var1;
            var6 = new Array(0);
            var _closure2_slot1 = var6;
            var3 = global;
            var3 = var3.Set;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var5 = var3 instanceof Object ? var3 : var5;
            _closure2_slot2 = var5;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var5 = arg2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.flattenSource;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.spoiler;
                    if(var2) { _fun0002_ip = 57; continue _fun0002 }
 51:
                    var2 = var3.obscure;
 57:
                    if(!var2) { _fun0002_ip = 71; continue _fun0002 }
 60:
                    var3 = _closure2_slot0;
                    var2 = var3 !== var5;
 71:
                    if(!var2) { _fun0002_ip = 91; continue _fun0002 }
 74:
                    var3 = _closure2_slot2;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var5);
 91:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot2;
            var3 = var4.setState;
            var2 = {};
            var2['sources'] = var6;
            var2['spoilerIndexes'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setMediaViewerSources'] = var4;
    var4 = function removeSpoiler(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getField;
            var2 = 'spoilerIndexes';
            var5 = var4.bind(var5)(var2);
            var2 = var5.has;
            var2 = var2.bind(var5)(var3);
            if(!var2) { _fun0003_ip = 101; continue _fun0003 }
 38:
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var6 = var5;
            var2 = new var7[var2](var6, var5);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = {};
            var1['spoilerIndexes'] = var4;
            var1 = var2.bind(var3)(var1);
 101:
            var1 = undefined;
            return var1;
        }
    };
    var3['removeSpoiler'] = var4;
    var2 = function toggleSpoiler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getField;
            var2 = 'spoilerIndexes';
            var6 = var4.bind(var5)(var2);
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6, var5);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0004_ip = 78; continue _fun0004 }
 66:
            var2 = var4.add;
            var2 = var2.bind(var4)(var3);
            _fun0004_ip = 88; continue _fun0004;
 78:
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
 88:
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = {};
            var1['spoilerIndexes'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleSpoiler'] = var2;
    return var1;
})();