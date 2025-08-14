// app/modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarCreatePendingFolderNode() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var4 = var5[var2];
            var7 = undefined;
            var10 = var3.bind(var7)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.hasFetchedRequestToJoinGuilds;
                return var1;
            };
            var9 = var9.bind(var10)(var6, var4);
            var _closure2_slot0 = var9;
            var6 = _closure1_slot1;
            var4 = 4;
            var4 = var5[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.bind(var7)();
            var2 = var5[var2];
            var6 = var3.bind(var7)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isFolderExpanded;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.SpecialGuildsNodeIds;
                var1 = var1.PENDING_JOIN_REQUESTS_FOLDER;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 45; continue _fun0005 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchRequestToJoinGuilds;
                    var1 = var1.bind(var2)();
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var2);
            var2 = var4.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0004_ip = 177; continue _fun0004 }
 161:
            var1 = {'expanded': false, 'pendingFolderNode': null};
            return var1;
 177:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 7;
            var1 = var13[var6];
            var5 = var12.bind(var7)(var1);
            var2 = var5.createFolderNode;
            var1 = {};
            var9 = 5;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.SpecialGuildsNodeIds;
            var9 = var9.PENDING_JOIN_REQUESTS_FOLDER;
            var1['folderId'] = var9;
            var9 = 8;
            var10 = var13[var9];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.scsU+v;
            var9 = var10.bind(var11)(var9);
            var1['folderName'] = var9;
            var1['expanded'] = var3;
            var1['guildIds'] = var4;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot6;
            var5 = var1.bind(var7)(var4);
            var4 = var5.bind(var7)();
            var1 = var4.done;
            if(var1) { _fun0004_ip = 391; continue _fun0004 }
 322:
            var13 = var4.value;
            var10 = var2.children;
            var9 = var10.push;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var12 = var11.bind(var7)(var1);
            var11 = var12.createGuildNode;
            var1 = var2.id;
            var1 = var11.bind(var12)(var13, var1);
            var1 = var9.bind(var10)(var1);
            var9 = var5.bind(var7)();
            var1 = var9.done;
            var4 = var9;
            if(!var1) { _fun0004_ip = 322; continue _fun0004 }
 391:
            var1 = {};
            var1['expanded'] = var3;
            var1['pendingFolderNode'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();