// app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var4 = function getJoinFromSupportedPlatformsIconKeys(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.platforms;
            var3 = var1.currentPlatform;
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var8 = var2;
            var7 = var4;
            var1 = new var8[var1](var7, var6);
            var5 = var1 instanceof Object ? var1 : var2;
            var2 = new Array(0);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 412; continue _fun0001 }
 59:
            var6 = var4.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0001_ip = 412; continue _fun0001 }
 73:
            if(!(var1 != var3)) { _fun0001_ip = 93; continue _fun0001 }
 77:
            var1 = var5.has;
            var1 = var1.bind(var5)(var3);
            if(var1) { _fun0001_ip = 412; continue _fun0001 }
 93:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.ANDROID;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 142; continue _fun0001 }
 119:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.IOS;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 232; continue _fun0001 }
 142:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.ANDROID;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 210; continue _fun0001 }
 165:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.IOS;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 252; continue _fun0001 }
 188:
            var4 = var2.push;
            var1 = _closure1_slot2;
            var1 = var1.IOS;
            var1 = var4.bind(var2)(var1);
            _fun0001_ip = 252; continue _fun0001;
 210:
            var4 = var2.push;
            var1 = _closure1_slot2;
            var1 = var1.ANDROID;
            var1 = var4.bind(var2)(var1);
            _fun0001_ip = 252; continue _fun0001;
 232:
            var4 = var2.push;
            var1 = _closure1_slot2;
            var1 = var1.MOBILE;
            var1 = var4.bind(var2)(var1);
 252:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.PS4;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 295; continue _fun0001 }
 275:
            var6 = var5.has;
            var4 = _closure1_slot1;
            var4 = var4.PS5;
            var1 = var6.bind(var5)(var4);
 295:
            if(!var1) { _fun0001_ip = 318; continue _fun0001 }
 298:
            var4 = var2.push;
            var1 = _closure1_slot2;
            var1 = var1.PLAYSTATION;
            var1 = var4.bind(var2)(var1);
 318:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.XBOX;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 361; continue _fun0001 }
 341:
            var4 = var2.push;
            var1 = _closure1_slot2;
            var1 = var1.XBOX;
            var1 = var4.bind(var2)(var1);
 361:
            var4 = var5.has;
            var1 = _closure1_slot1;
            var1 = var1.DESKTOP;
            var4 = var4.bind(var5)(var1);
            var1 = var2;
            if(!var4) { _fun0001_ip = 419; continue _fun0001 }
 387:
            var4 = var2.push;
            var3 = _closure1_slot2;
            var3 = var3.DESKTOP;
            var3 = var4.bind(var2)(var3);
            var1 = var2;
            _fun0001_ip = 419; continue _fun0001;
 412:
            var1 = _closure1_slot3;
 419:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var6 = var8[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.ActivityGamePlatforms;
    var _closure1_slot1 = var5;
    var5 = {};
    var6 = 'desktop';
    var5['DESKTOP'] = var6;
    var6 = 'mobile';
    var5['MOBILE'] = var6;
    var6 = 'android';
    var5['ANDROID'] = var6;
    var6 = 'ios';
    var5['IOS'] = var6;
    var6 = 'playstation';
    var5['PLAYSTATION'] = var6;
    var6 = 'xbox';
    var5['XBOX'] = var6;
    var _closure1_slot2 = var5;
    var6 = new Array(0);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx';
    var6 = var7.bind(var8)(var6);
    var3['IconKey'] = var5;
    var3['getJoinFromSupportedPlatformsIconKeys'] = var4;
    var2 = function useJoinFromSupportedPlatformsIconKeys(arg1) {
        var2 = arg1;
        var5 = var2.platforms;
        var _closure2_slot0 = var5;
        var6 = var2.currentPlatform;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = {};
            var4 = _closure2_slot0;
            var2['platforms'] = var4;
            var1 = _closure2_slot1;
            var2['currentPlatform'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useJoinFromSupportedPlatformsIconKeys'] = var2;
    return var1;
})();