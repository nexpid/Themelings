// app/stores/SortedGuildStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot24 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var2 = function insertUnsortedGuilds(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var3 = _closure1_slot24;
            var2 = _closure1_slot14;
            var1 = var2.getGuildIds;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 118; continue _fun0005 }
 46:
            var2 = var3.value;
            var8 = var7.bind(var1)(var2);
            var8 = !var8;
            if(var8) { _fun0005_ip = 77; continue _fun0005 }
 62:
            var10 = _closure1_slot9;
            var9 = var10.isLurking;
            var8 = var9.bind(var10)(var2);
 77:
            if(var8) { _fun0005_ip = 95; continue _fun0005 }
 80:
            var10 = _closure1_slot13;
            var9 = var10.isCurrentUserGuest;
            var8 = var9.bind(var10)(var2);
 95:
            if(var8) { _fun0005_ip = 103; continue _fun0005 }
 98:
            var2 = var6.bind(var1)(var2);
 103:
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0005_ip = 46; continue _fun0005 }
 118:
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var1 = function convertNodeToGuildFolder(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 15;
            var5 = var3[var6];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var5 = var5.GuildsNodeType;
            var5 = var5.FOLDER;
            if(!(var5 !== var4)) { _fun0006_ip = 130; continue _fun0006 }
 49:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.GuildsNodeType;
            var1 = var1.GUILD;
            if(!(var1 !== var4)) { _fun0006_ip = 103; continue _fun0006 }
 82:
            var1 = global;
            var4 = var1.Error;
            var1 = '[SortedGuildStore] Unexpected guilds tree node type.';
            var1 = var4.bind(var3)(var1);
            throw var1;
 103:
            var1 = {};
            var1['folderId'] = var3;
            var4 = var2.id;
            var3 = new Array(1);
            var3[0] = var4;
            var1['guildIds'] = var3;
            return var1;
 130:
            var1 = {};
            var3 = var2.id;
            var1['folderId'] = var3;
            var3 = var2.name;
            var1['folderName'] = var3;
            var3 = var2.color;
            var1['folderColor'] = var3;
            var3 = var2.expanded;
            var1['expanded'] = var3;
            var4 = var2.children;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['guildIds'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function rebuildTree(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var2 = _closure1_slot18;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 15;
            var4 = var4[var9];
            var5 = undefined;
            var4 = var8.bind(var5)(var4);
            var4 = var4.GuildsTree;
            var8 = var4.prototype;
            var8 = Object.create(var8, {constructor: {value: var4}});
            var29 = var8;
            var4 = new var29[var4](var28);
            var4 = var4 instanceof Object ? var4 : var8;
            _closure1_slot18 = var4;
            var4 = var7.length;
            var8 = 0;
            if(!(var8 === var4)) { _fun0007_ip = 90; continue _fun0007 }
 78:
            var4 = var6.length;
            if(!(!(var4 > var8))) { _fun0007_ip = 444; continue _fun0007 }
 90:
            var4 = _closure1_slot24;
            var14 = var4.bind(var5)(var7);
            var7 = var14.bind(var5)();
            var4 = var7.done;
            var13 = null;
            var12 = var7;
            var11 = undefined;
            var10 = undefined;
            var7 = undefined;
            if(var4) { _fun0007_ip = 528; continue _fun0007 }
 125:
            var4 = var12.value;
            var15 = var4.guildIds;
            var18 = var15.length;
            var17 = var11;
            var16 = var10;
            var15 = var7;
            if(!(var8 !== var18)) { _fun0007_ip = 415; continue _fun0007 }
 157:
            var18 = var4.folderId;
            if(!(var13 != var18)) { _fun0007_ip = 353; continue _fun0007 }
 170:
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var9];
            var20 = var19.bind(var5)(var18);
            var19 = var20.createFolderNode;
            var22 = _closure1_slot11;
            var21 = var22.isFolderExpanded;
            var18 = var4.folderId;
            var18 = var21.bind(var22)(var18);
            var21 = var19.bind(var20)(var4, var5, var18);
            var19 = _closure1_slot18;
            var18 = var19.addNode;
            var18 = var18.bind(var19)(var21);
            var19 = _closure1_slot24;
            var18 = var4.guildIds;
            var20 = var19.bind(var5)(var18);
            var22 = var20.bind(var5)();
            var18 = var22.done;
            var19 = var22;
            var17 = var21;
            var16 = var19;
            var15 = var20;
            if(var18) { _fun0007_ip = 415; continue _fun0007 }
 278:
            var25 = var19.value;
            var23 = _closure1_slot18;
            var22 = var23.addNode;
            var24 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var9];
            var24 = var24.bind(var5)(var18);
            var18 = var24.createGuildNode;
            var18 = var18.bind(var24)(var25);
            var18 = var22.bind(var23)(var18, var21);
            var22 = var20.bind(var5)();
            var18 = var22.done;
            var19 = var22;
            var17 = var21;
            var16 = var19;
            var15 = var20;
            if(var18) { _fun0007_ip = 415; continue _fun0007 }
 351:
            _fun0007_ip = 278; continue _fun0007;
 353:
            var19 = _closure1_slot18;
            var18 = var19.addNode;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var9];
            var21 = var21.bind(var5)(var20);
            var20 = var21.createGuildNode;
            var4 = var4.guildIds;
            var4 = var4[var8];
            var4 = var20.bind(var21)(var4);
            var4 = var18.bind(var19)(var4);
            var17 = var11;
            var16 = var10;
            var15 = var7;
 415:
            var18 = var14.bind(var5)();
            var4 = var18.done;
            var11 = var17;
            var10 = var16;
            var7 = var15;
            var12 = var18;
            if(var4) { _fun0007_ip = 528; continue _fun0007 }
 439:
            _fun0007_ip = 125; continue _fun0007;
 444:
            var4 = _closure1_slot24;
            var7 = var4.bind(var5)(var6);
            var6 = var7.bind(var5)();
            var4 = var6.done;
            if(var4) { _fun0007_ip = 528; continue _fun0007 }
 465:
            var13 = var6.value;
            var11 = _closure1_slot18;
            var10 = var11.addNode;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var12 = var12.bind(var5)(var4);
            var4 = var12.createGuildNode;
            var4 = var4.bind(var12)(var13);
            var4 = var10.bind(var11)(var4);
            var10 = var7.bind(var5)();
            var4 = var10.done;
            var6 = var10;
            if(!var4) { _fun0007_ip = 465; continue _fun0007 }
 528:
            var6 = _closure1_slot24;
            var7 = _closure1_slot18;
            var4 = var7.allNodes;
            var4 = var4.bind(var7)();
            var10 = var6.bind(var5)(var4);
            var6 = var10.bind(var5)();
            var4 = var6.done;
            var7 = null;
            if(var4) { _fun0007_ip = 751; continue _fun0007 }
 568:
            var12 = var6.value;
            var11 = var12.type;
            var13 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var13.bind(var5)(var4);
            var4 = var4.GuildsNodeType;
            var4 = var4.GUILD;
            var4 = var11 === var4;
            if(!var4) { _fun0007_ip = 715; continue _fun0007 }
 614:
            var14 = _closure1_slot9;
            var13 = var14.isLurking;
            var11 = var12.id;
            var11 = var13.bind(var14)(var11);
            if(var11) { _fun0007_ip = 657; continue _fun0007 }
 637:
            var15 = _closure1_slot13;
            var14 = var15.isCurrentUserGuest;
            var13 = var12.id;
            var11 = var14.bind(var15)(var13);
 657:
            if(var11) { _fun0007_ip = 712; continue _fun0007 }
 660:
            var15 = _closure1_slot14;
            var14 = var15.getGuild;
            var13 = var12.id;
            var13 = var14.bind(var15)(var13);
            var13 = var7 == var13;
            if(!var13) { _fun0007_ip = 709; continue _fun0007 }
 686:
            var16 = _closure1_slot12;
            var15 = var16.isUnavailable;
            var14 = var12.id;
            var14 = var15.bind(var16)(var14);
            var13 = !var14;
 709:
            var11 = var13;
 712:
            var4 = var11;
 715:
            if(!var4) { _fun0007_ip = 733; continue _fun0007 }
 718:
            var11 = _closure1_slot18;
            var4 = var11.removeNode;
            var4 = var4.bind(var11)(var12);
 733:
            var11 = var10.bind(var5)();
            var4 = var11.done;
            var6 = var11;
            if(!var4) { _fun0007_ip = 568; continue _fun0007 }
 751:
            var4 = global;
            var7 = var4.Object;
            var6 = var7.values;
            var4 = _closure1_slot18;
            var4 = var4.nodes;
            var7 = var6.bind(var7)(var4);
            var4 = var7.length;
            var4 = var8 < var4;
            var6 = 0;
            if(!var4) { _fun0007_ip = 882; continue _fun0007 }
 793:
            var11 = var7[var6];
            var10 = var11.type;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var12.bind(var5)(var4);
            var4 = var4.GuildsNodeType;
            var4 = var4.FOLDER;
            var4 = var10 === var4;
            if(!var4) { _fun0007_ip = 852; continue _fun0007 }
 838:
            var10 = var11.children;
            var10 = var10.length;
            var4 = var8 === var10;
 852:
            if(!var4) { _fun0007_ip = 870; continue _fun0007 }
 855:
            var10 = _closure1_slot18;
            var4 = var10.removeNode;
            var4 = var4.bind(var10)(var11);
 870:
            var6 = var6 + 1;
            var4 = var7.length;
            if(var6 < var4) { _fun0007_ip = 793; continue _fun0007 }
 882:
            var6 = _closure1_slot26;
            var4 = function(arg1) {
                var1 = _closure1_slot18;
                var2 = var1.nodes;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var1 = function(arg1) {
                var5 = _closure1_slot18;
                var4 = var5.addNode;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.createGuildNode;
                var2 = arg1;
                var3 = var3.bind(var6)(var2);
                var1 = _closure1_slot18;
                var2 = var1.root;
                var1 = false;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1 = var6.bind(var5)(var4, var1);
            var4 = _closure1_slot18;
            var1 = var2.version;
            var4['version'] = var1;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = _closure1_slot18;
            var1 = var4.bind(var5)(var2, var1);
            if(var1) { _fun0007_ip = 976; continue _fun0007 }
 951:
            var5 = _closure1_slot18;
            var6 = var2.version;
            var4 = 1;
            var4 = var6 + var4;
            var5['version'] = var4;
            _fun0007_ip = 980; continue _fun0007;
 976:
            _closure1_slot18 = var2;
 980:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handleRebuild() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = _closure1_slot28;
            var3 = _closure1_slot10;
            var2 = var3.getGuildFolders;
            var3 = var2.bind(var3)();
            var5 = null;
            if(!(var5 == var3)) { _fun0008_ip = 31; continue _fun0008 }
 27:
            var3 = new Array(0);
 31:
            var1 = _closure1_slot10;
            var1 = var1.settings;
            var6 = var1.guildFolders;
            var7 = var5 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var7) { _fun0008_ip = 64; continue _fun0008 }
 58:
            var1 = var6.guildPositions;
 64:
            if(!(var5 == var1)) { _fun0008_ip = 72; continue _fun0008 }
 68:
            var1 = new Array(0);
 72:
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function handleSettingsUpdate() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot10;
            var1 = var3.getGuildFolders;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot17;
            var6 = null;
            var1 = var6 == var1;
            if(var1) { _fun0009_ip = 65; continue _fun0009 }
 30:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 16;
            var4 = var7[var4];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = _closure1_slot17;
            var4 = var5.bind(var7)(var4, var3);
            var1 = !var4;
 65:
            if(!var1) { _fun0009_ip = 137; continue _fun0009 }
 68:
            var5 = _closure1_slot28;
            var _closure1_slot17 = var3;
            if(!(var6 == var3)) { _fun0009_ip = 86; continue _fun0009 }
 80:
            var4 = new Array(0);
            _fun0009_ip = 90; continue _fun0009;
 86:
            var4 = _closure1_slot17;
 90:
            var2 = _closure1_slot10;
            var2 = var2.settings;
            var7 = var2.guildFolders;
            var8 = var6 == var7;
            var3 = undefined;
            var2 = undefined;
            if(var8) { _fun0009_ip = 123; continue _fun0009 }
 117:
            var2 = var7.guildPositions;
 123:
            if(!(var6 == var2)) { _fun0009_ip = 131; continue _fun0009 }
 127:
            var2 = new Array(0);
 131:
            var1 = var5.bind(var3)(var4, var2);
 137:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleMoveById(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = var1.sourceId;
            var7 = var1.targetId;
            var6 = var1.moveToBelow;
            var3 = var1.combine;
            var4 = _closure1_slot18;
            var1 = var4.getNode;
            var5 = var1.bind(var4)(var5);
            var4 = _closure1_slot18;
            var1 = var4.getNode;
            var8 = var1.bind(var4)(var7);
            var12 = null;
            if(!(var12 != var5)) { _fun0010_ip = 480; continue _fun0010 }
 69:
            if(!(var12 != var8)) { _fun0010_ip = 480; continue _fun0010 }
 76:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 17;
            var4 = var1[var9];
            var1 = undefined;
            var11 = var7.bind(var1)(var4);
            var4 = var3;
            if(!var3) { _fun0010_ip = 145; continue _fun0010 }
 104:
            var10 = var5.type;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var7 = var13.bind(var1)(var7);
            var7 = var7.GuildsNodeType;
            var7 = var7.FOLDER;
            var4 = var10 === var7;
 145:
            var10 = !var4;
            var15 = var5.id;
            var7 = global;
            var4 = var7.HermesInternal;
            var14 = var4.concat;
            var13 = "[SORTED GUILDS] Can't combine a folder ";
            var4 = ' with another guilds list item';
            var4 = var14.bind(var13)(var15, var4);
            var4 = var11.bind(var1)(var10, var4);
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var11 = var10.bind(var1)(var4);
            var4 = var3;
            if(!var4) { _fun0010_ip = 223; continue _fun0010 }
 213:
            var10 = var8.parentId;
            var4 = var12 != var10;
 223:
            var10 = !var4;
            var15 = var8.id;
            var4 = var7.HermesInternal;
            var14 = var4.concat;
            var13 = "[SORTED GUILDS] Can't combine with a guild ";
            var4 = " that's already inside of a folder";
            var4 = var14.bind(var13)(var15, var4);
            var4 = var11.bind(var1)(var10, var4);
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var9 = var4[var9];
            var10 = var10.bind(var1)(var9);
            var11 = var5.type;
            var13 = _closure1_slot0;
            var9 = 15;
            var4 = var4[var9];
            var4 = var13.bind(var1)(var4);
            var4 = var4.GuildsNodeType;
            var4 = var4.FOLDER;
            var4 = var11 === var4;
            if(!var4) { _fun0010_ip = 333; continue _fun0010 }
 323:
            var11 = var8.parentId;
            var4 = var12 != var11;
 333:
            var14 = var5.id;
            var13 = var8.parentId;
            var7 = var7.HermesInternal;
            var12 = var7.concat;
            var11 = "[SORTED GUILDS] Can't move a folder ";
            var7 = ' to inside of another folder ';
            var7 = var12.bind(var11)(var14, var7, var13);
            var4 = !var4;
            var4 = var10.bind(var1)(var4, var7);
            if(var3) { _fun0010_ip = 405; continue _fun0010 }
 386:
            var4 = _closure1_slot18;
            var3 = var4.moveNextTo;
            var3 = var3.bind(var4)(var5, var8, var6);
            _fun0010_ip = 478; continue _fun0010;
 405:
            var7 = var8.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var4.bind(var1)(var3);
            var3 = var3.GuildsNodeType;
            var3 = var3.FOLDER;
            var4 = var8;
            if(!(var7 !== var3)) { _fun0010_ip = 461; continue _fun0010 }
 446:
            var7 = _closure1_slot18;
            var3 = var7.convertToFolder;
            var4 = var3.bind(var7)(var8);
 461:
            var3 = _closure1_slot18;
            var2 = var3.moveInto;
            var2 = var2.bind(var3)(var5, var4, var6);
 478:
            return var1;
 480:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function handleGuildFolderCreateLocal(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.sourceIds;
            var5 = var1.name;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var3 = var4.shift;
            var9 = var3.bind(var4)();
            var6 = null;
            if(!(var6 != var9)) { _fun0011_ip = 106; continue _fun0011 }
 38:
            var8 = _closure1_slot18;
            var7 = var8.getNode;
            var7 = var7.bind(var8)(var9);
            if(!(var6 != var7)) { _fun0011_ip = 102; continue _fun0011 }
 60:
            var6 = _closure1_slot18;
            var3 = var6.convertToFolder;
            var3 = var3.bind(var6)(var7);
            _closure2_slot0 = var3;
            var3['name'] = var5;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = _closure1_slot18;
                    var3 = var4.getNode;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0012_ip = 53; continue _fun0012 }
 27:
                    var4 = _closure1_slot18;
                    var3 = var4.moveInto;
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var5, var2, var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 102:
            var1 = false;
            return var1;
 106:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleGuildFolderEditLocal(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var9 = var5.targetId;
            var6 = var5.sourceIds;
            var7 = null;
            var3 = Object.create(var7);
            var4 = 0;
            var3['targetId'] = var4;
            var3['sourceIds'] = var4;
            var16 = {};
            var15 = var5;
            var14 = var3;
            var8 = copyDataProperties(var16, var15, var14);
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var10 = _closure1_slot18;
            var5 = var10.getNode;
            var11 = var5.bind(var10)(var9);
            if(!(var7 != var11)) { _fun0013_ip = 503; continue _fun0013 }
 85:
            var10 = var11.type;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 15;
            var5 = var13[var5];
            var5 = var12.bind(var1)(var5);
            var5 = var5.GuildsNodeType;
            var5 = var5.FOLDER;
            if(!(var10 === var5)) { _fun0013_ip = 499; continue _fun0013 }
 129:
            var12 = var8.name;
            var10 = '';
            var5 = undefined;
            if(!(var10 !== var12)) { _fun0013_ip = 149; continue _fun0013 }
 144:
            var5 = var8.name;
 149:
            var8 = var11.name;
            if(!(var5 !== var8)) { _fun0013_ip = 241; continue _fun0013 }
 158:
            var10 = _closure1_slot18;
            var8 = var10.cloneNode;
            var10 = var8.bind(var10)(var11);
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 17;
            var8 = var13[var8];
            var13 = var12.bind(var1)(var8);
            var12 = var10.id;
            var8 = var11.id;
            var12 = var12 === var8;
            var8 = '[SORTED GUILDS] Replacement folder node must have same id.';
            var8 = var13.bind(var1)(var12, var8);
            var10['name'] = var5;
            var8 = _closure1_slot18;
            var5 = var8.replaceNode;
            var5 = var5.bind(var8)(var11, var10);
 241:
            var8 = _closure1_slot18;
            var5 = var8.getNode;
            var5 = var5.bind(var8)(var9);
            _closure2_slot0 = var5;
            if(!(var7 != var5)) { _fun0013_ip = 495; continue _fun0013 }
 267:
            var8 = var5.children;
            var7 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var7.bind(var8)(var5);
            var5 = var7.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 18;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.isNotNullish;
            var3 = var5.bind(var7)(var3);
            var5 = global;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var17 = var8;
            var16 = var3;
            var7 = new var17[var7](var16, var15);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure2_slot1 = var7;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var17 = var8;
            var16 = var6;
            var7 = new var17[var7](var16, var15);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure2_slot2 = var7;
            var5 = var5.Set;
            var7 = new Array(0);
            var16 = var7;
            var15 = var3;
            var14 = 0;
            var3 = arraySpread(var16, var15, var14);
            var4 = var7.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var16 = var4.bind(var7)(var3);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var17 = var4;
            var3 = new var17[var5](var16, var15);
            var4 = var3 instanceof Object ? var3 : var4;
            var5 = var6.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var5.bind(var6)(var3);
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure1_slot18;
                    var3 = var4.getNode;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0014_ip = 53; continue _fun0014 }
 27:
                    var4 = _closure1_slot18;
                    var3 = var4.moveInto;
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var5, var2, var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var4 = _closure1_slot18;
                    var3 = var4.getNode;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0015_ip = 53; continue _fun0015 }
 27:
                    var4 = _closure1_slot18;
                    var3 = var4.moveNextTo;
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var5, var2, var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 495:
            var1 = false;
            return var1;
 499:
            var1 = false;
            return var1;
 503:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function handleGuildFolderDeleteLocal(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var5 = var1.targetId;
            var2 = _closure1_slot18;
            var1 = var2.getNode;
            var5 = var1.bind(var2)(var5);
            var _closure2_slot0 = var5;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0016_ip = 167; continue _fun0016 }
 45:
            var6 = var5.type;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var2 = var8[var2];
            var8 = undefined;
            var2 = var7.bind(var8)(var2);
            var2 = var2.GuildsNodeType;
            var2 = var2.FOLDER;
            var2 = var6 === var2;
            if(!var2) { _fun0016_ip = 164; continue _fun0016 }
 91:
            var7 = var5.children;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.filter;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 18;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.isNotNullish;
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = _closure1_slot18;
                    var3 = var4.getNode;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0017_ip = 53; continue _fun0017 }
 27:
                    var4 = _closure1_slot18;
                    var3 = var4.moveNextTo;
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var5, var2, var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2 = undefined;
 164:
            var1 = var2;
 167:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleJoinedLurkingGuild(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.joinedAt;
            var4 = var1.user;
            var3 = _closure1_slot16;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var3 = _closure1_slot14;
            var1 = var3.getGuild;
            var1 = var1.bind(var3)(var5);
            var5 = null;
            var9 = var5 == var7;
            var3 = undefined;
            var6 = undefined;
            if(var9) { _fun0018_ip = 67; continue _fun0018 }
 62:
            var6 = var7.id;
 67:
            var4 = var4.id;
            if(!(var6 === var4)) { _fun0018_ip = 155; continue _fun0018 }
 76:
            if(!(var5 != var1)) { _fun0018_ip = 155; continue _fun0018 }
 80:
            var7 = 'string';
            var6 = typeof var8;
            var4 = var8;
            if(!(var7 === var6)) { _fun0018_ip = 125; continue _fun0018 }
 94:
            var6 = global;
            var6 = var6.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var11 = var7;
            var10 = var8;
            var6 = new var11[var6](var10, var9);
            var4 = var6 instanceof Object ? var6 : var7;
 125:
            var1 = var1.joinedAt;
            var1 = var4 !== var1;
            if(!var1) { _fun0018_ip = 142; continue _fun0018 }
 138:
            var1 = var5 != var4;
 142:
            if(!var1) { _fun0018_ip = 153; continue _fun0018 }
 145:
            var2 = _closure1_slot29;
            var1 = var2.bind(var3)();
 153:
            return var1;
 155:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleGuildFolderExpand(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var5 = var1.folderId;
            var3 = _closure1_slot18;
            var1 = var3.getNode;
            var4 = var1.bind(var3)(var5);
            var3 = _closure1_slot11;
            var1 = var3.isFolderExpanded;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var4)) { _fun0019_ip = 113; continue _fun0019 }
 48:
            var6 = var4.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var5 = var5.GuildsNodeType;
            var5 = var5.FOLDER;
            if(!(var6 === var5)) { _fun0019_ip = 113; continue _fun0019 }
 91:
            var5 = var4.expanded;
            if(!(var5 !== var3)) { _fun0019_ip = 113; continue _fun0019 }
 101:
            var2 = _closure1_slot39;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
 113:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleFolderExpanded(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var5 = var1.folderId;
            var4 = var1.expanded;
            var3 = _closure1_slot18;
            var1 = var3.getNode;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0020_ip = 104; continue _fun0020 }
 39:
            var6 = var3.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var5 = var5.GuildsNodeType;
            var5 = var5.FOLDER;
            if(!(var6 === var5)) { _fun0020_ip = 104; continue _fun0020 }
 82:
            var5 = var3.expanded;
            if(!(var5 !== var4)) { _fun0020_ip = 104; continue _fun0020 }
 92:
            var2 = _closure1_slot39;
            var2 = var2.bind(var1)(var3, var4);
            return var1;
 104:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleCollapseAll() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var3 = _closure1_slot24;
            var2 = _closure1_slot18;
            var1 = var2.allNodes;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var3 = var6.bind(var1)();
            var2 = var3.done;
            var5 = false;
            var4 = 15;
            if(var2) { _fun0021_ip = 125; continue _fun0021 }
 45:
            var8 = var3.value;
            var9 = var8.type;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var10.bind(var1)(var2);
            var2 = var2.GuildsNodeType;
            var2 = var2.FOLDER;
            var2 = var9 === var2;
            if(!var2) { _fun0021_ip = 97; continue _fun0021 }
 91:
            var2 = var8.expanded;
 97:
            if(!var2) { _fun0021_ip = 110; continue _fun0021 }
 100:
            var2 = _closure1_slot39;
            var2 = var2.bind(var1)(var8, var5);
 110:
            var8 = var6.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0021_ip = 45; continue _fun0021 }
 125:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function setNodeExpanded(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot18;
        var1 = var3.cloneNode;
        var4 = var1.bind(var3)(var5);
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 17;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var3);
        var6 = var4.id;
        var3 = var5.id;
        var6 = var6 === var3;
        var3 = '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.';
        var3 = var7.bind(var1)(var6, var3);
        var3 = arg2;
        var4['expanded'] = var3;
        var3 = _closure1_slot18;
        var2 = var3.replaceNode;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var _closure1_slot39 = var1;
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
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 15;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.GuildsTree;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var17 = var11;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot18 = var10;
    var10 = 19;
    var11 = var6[var10];
    var13 = var5.bind(var1)(var11);
    var12 = var13.cachedFunction;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = var2.sortedGuildNodes;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot19 = var11;
    var11 = var6[var10];
    var13 = var5.bind(var1)(var11);
    var12 = var13.cachedFunction;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = var2.getRoots;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = _closure1_slot27;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot20 = var11;
    var11 = var6[var10];
    var13 = var5.bind(var1)(var11);
    var12 = var13.cachedFunction;
    var11 = function(arg1) {
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var4 = function flattenNodes(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var2 = arg1;
                var5 = var2.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 15;
                var4 = var1[var7];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.FOLDER;
                if(!(var4 !== var5)) { _fun0022_ip = 82; continue _fun0022 }
 49:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.GUILD;
                if(!(var4 === var5)) { _fun0022_ip = 99; continue _fun0022 }
 82:
                var5 = _closure2_slot0;
                var4 = var5.push;
                var4 = var4.bind(var5)(var2);
 99:
                var3 = _closure1_slot24;
                var2 = var2.children;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0022_ip = 157; continue _fun0022 }
 128:
                var6 = _closure2_slot1;
                var2 = var3.value;
                var2 = var6.bind(var1)(var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0022_ip = 128; continue _fun0022 }
 157:
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = arg1;
        var3 = var2.root;
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot21 = var11;
    var10 = var6[var10];
    var12 = var5.bind(var1)(var10);
    var11 = var12.cachedFunction;
    var10 = function(arg1) {
        var1 = arg1;
        var1 = var1.root;
        var3 = var1.children;
        var2 = var3.map;
        var1 = _closure1_slot27;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot22 = var10;
    var7 = function(arg1) {
        var4 = function SortedGuildStore() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot29;
                var1['CONNECTION_OPEN'] = var7;
                var1['OVERLAY_INITIALIZE'] = var7;
                var8 = function CACHE_LOADED() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED'] = var8;
                var1['GUILD_CREATE'] = var7;
                var1['GUILD_DELETE'] = var7;
                var7 = _closure1_slot35;
                var1['GUILD_MEMBER_ADD'] = var7;
                var7 = _closure1_slot30;
                var1['USER_SETTINGS_PROTO_UPDATE'] = var7;
                var7 = _closure1_slot31;
                var1['GUILD_MOVE_BY_ID'] = var7;
                var7 = _closure1_slot32;
                var1['GUILD_FOLDER_CREATE_LOCAL'] = var7;
                var7 = _closure1_slot33;
                var1['GUILD_FOLDER_EDIT_LOCAL'] = var7;
                var7 = _closure1_slot34;
                var1['GUILD_FOLDER_DELETE_LOCAL'] = var7;
                var7 = _closure1_slot36;
                var1['TOGGLE_GUILD_FOLDER_EXPAND'] = var7;
                var7 = _closure1_slot37;
                var1['SET_GUILD_FOLDER_EXPANDED'] = var7;
                var7 = _closure1_slot38;
                var1['GUILD_FOLDER_COLLAPSE'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot23;
                var1 = var1.bind(var4)();
                if(var1) { _fun0023_ip = 197; continue _fun0023 }
 184:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0023_ip = 231; continue _fun0023;
 197:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 231:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.readSnapshot;
                        var1 = _closure2_slot0;
                        var1 = var1.LATEST_SNAPSHOT_VERSION;
                        var3 = var2.bind(var3)(var1);
                        var2 = null;
                        var5 = var2 == var3;
                        var1 = undefined;
                        var4 = undefined;
                        if(var5) { _fun0024_ip = 50; continue _fun0024 }
 44:
                        var4 = var3.tree;
 50:
                        if(!(var2 != var4)) { _fun0024_ip = 242; continue _fun0024 }
 57:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 15;
                        var2 = var2[var5];
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.GuildsTree;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var11 = var3;
                        var2 = new var11[var2](var10);
                        var3 = var2 instanceof Object ? var2 : var3;
                        _closure1_slot18 = var3;
                        var2 = var3.loadSnapshot;
                        var2 = var2.bind(var3)(var4);
                        var3 = _closure1_slot24;
                        var4 = _closure1_slot18;
                        var2 = var4.allNodes;
                        var2 = var2.bind(var4)();
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0024_ip = 242; continue _fun0024 }
 158:
                        var7 = var3.value;
                        var8 = var7.type;
                        var9 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var2 = var9.bind(var1)(var2);
                        var2 = var2.GuildsNodeType;
                        var2 = var2.FOLDER;
                        if(!(var8 === var2)) { _fun0024_ip = 227; continue _fun0024 }
 201:
                        var9 = _closure1_slot11;
                        var8 = var9.isFolderExpanded;
                        var2 = var7.id;
                        var2 = var8.bind(var9)(var2);
                        var7['expanded'] = var2;
 227:
                        var7 = var4.bind(var1)();
                        var2 = var7.done;
                        var3 = var7;
                        if(!var2) { _fun0024_ip = 158; continue _fun0024 }
 242:
                        return var1;
                    }
                };
                var1['loadCache'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var9 = this;
            var8 = var9.waitFor;
            var16 = _closure1_slot14;
            var15 = _closure1_slot15;
            var14 = _closure1_slot10;
            var13 = _closure1_slot12;
            var12 = _closure1_slot9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot8;
            var17 = var9;
            var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildsTree';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildFolders';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot20;
            var3 = _closure1_slot18;
            var2 = var3.version;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildFolderById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = var3.getGuildFolders;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.folderId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFlattenedGuildIds';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot19;
            var3 = _closure1_slot18;
            var2 = var3.version;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFlattenedGuildFolderList';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot21;
            var3 = _closure1_slot18;
            var2 = var3.version;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCompatibleGuildFolders';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot22;
            var3 = _closure1_slot18;
            var2 = var3.version;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getFastListGuildFolders';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = var2.getRoots;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var4 = _closure1_slot18;
            var3 = var4.getSnapshot;
            var3 = var3.bind(var4)();
            var2['tree'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var9);
    var9 = 'SortedGuildStore';
    var7['displayName'] = var9;
    var7['LATEST_SNAPSHOT_VERSION'] = var8;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var17 = var8;
    var7 = new var17[var7](var16);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 20;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/SortedGuildStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var3['GuildsNodeType'] = var4;
    var3['insertUnsortedGuilds'] = var2;
    return var1;
})();