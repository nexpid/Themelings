// app/modules/hub/HubProgressActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot6;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot6;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function changeHubProgressUserSetting(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 3;
        var5 = var7[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var5);
        var5 = var6.updateUserGuildSettings;
        var3 = var7[var3];
        var3 = var4.bind(var1)(var3);
        var3 = var3.UserSettingsDelay;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = arg1;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var10 = arg1;
                var2 = _closure1_slot5;
                var1 = _closure2_slot0;
                var8 = undefined;
                var7 = var2.bind(var8)(var1);
                var3 = var7.bind(var8)();
                var2 = var3.done;
                var6 = 4;
                var4 = var3;
                var3 = false;
                var1 = false;
                if(var2) { _fun0004_ip = 150; continue _fun0004 }
 46:
                var13 = var4.value;
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var12 = var11.bind(var8)(var2);
                var11 = var12.hasFlag;
                var2 = var10.hubProgress;
                var2 = var11.bind(var12)(var2, var13);
                if(var2) { _fun0004_ip = 132; continue _fun0004 }
 89:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var12 = var11.bind(var8)(var2);
                var11 = var12.addFlag;
                var2 = var10.hubProgress;
                var2 = var11.bind(var12)(var2, var13);
                var10['hubProgress'] = var2;
                var3 = true;
 132:
                var12 = var7.bind(var8)();
                var2 = var12.done;
                var4 = var12;
                var1 = var3;
                if(!var2) { _fun0004_ip = 46; continue _fun0004 }
 150:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/HubProgressActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function setHubProgressActionComplete(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 85; continue _fun0005 }
 9:
            var5 = _closure1_slot2;
            var3 = var5.getGuild;
            var3 = var3.bind(var5)(var4);
            var2 = var2 != var3;
            if(!var2) { _fun0005_ip = 59; continue _fun0005 }
 33:
            var6 = var3.features;
            var5 = var6.has;
            var3 = _closure1_slot4;
            var3 = var3.HUB;
            var2 = var5.bind(var6)(var3);
 59:
            if(!var2) { _fun0005_ip = 85; continue _fun0005 }
 62:
            var3 = _closure1_slot7;
            var2 = new Array(1);
            var1 = arg2;
            var2[0] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
 85:
            var1 = undefined;
            return var1;
        }
    };
    var3['setHubProgressActionComplete'] = var4;
    var2 = function skipHubProgress(arg1) {
        var4 = _closure1_slot7;
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['skipHubProgress'] = var2;
    return var1;
})();