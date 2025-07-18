// app/modules/guilds_bar/GuildsTree.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var5 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function randomFolderId() {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.floor;
        var4 = var1.Math;
        var1 = var4.random;
        var4 = var1.bind(var4)();
        var1 = 4294967296.0;
        var1 = var1 * var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var5 = {};
    var4 = 'root';
    var5['ROOT'] = var4;
    var4 = 'folder';
    var5['FOLDER'] = var4;
    var4 = 'guild';
    var5['GUILD'] = var4;
    var _closure1_slot5 = var5;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildsTree() {
            var3 = this;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var4 = _closure1_slot5;
            var4 = var4.ROOT;
            var2['type'] = var4;
            var4 = new Array(0);
            var2['children'] = var4;
            var3['root'] = var2;
            var2 = {};
            var3['nodes'] = var2;
            var2 = 0;
            var3['version'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getSnapshot';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = this;
                var2 = {};
                var10 = var4.nodes;
                var6 = undefined;
                var5 = 'children';
                var1 = 'childrenIds';
                for(var7 in var10)
 31:
                {
 40:
                    var13 = var7;
                    var12 = var4.nodes;
                    var14 = var12[var13];
                    var12 = {};
                    var18 = var12;
                    var17 = var14;
                    var15 = copyDataProperties(var18, var17);
                    var12[var5] = var6;
                    var16 = var14.children;
                    var15 = var16.map;
                    var14 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var14 = var15.bind(var16)(var14);
                    var12[var1] = var14;
                    var2[var13] = var12;
                    _fun0001_ip = 31; continue _fun0001;
                }
 101:
                var1 = {};
                var4 = var4.root;
                var5 = var4.children;
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['rootChildrenIds'] = var3;
                var1['nodes'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(15);
        var2[0] = var1;
        var1 = {};
        var6 = 'loadSnapshot';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var4.nodes;
                var2['nodes'] = var3;
                var7 = var2.nodes;
                for(var3 in var7)
 38:
                {
 47:
                    var10 = var3;
                    var9 = var2.nodes;
                    var9 = var9[var10];
                    var12 = var9.childrenIds;
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var1 = _closure3_slot0;
                        var2 = var1.nodes;
                        var1 = arg1;
                        var1 = var2[var1];
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10);
                    var9['children'] = var10;
                    var9 = delete var9.childrenIds;
                    _fun0002_ip = 38; continue _fun0002;
                }
 94:
                var3 = var2.root;
                var5 = var4.rootChildrenIds;
                var4 = var5.map;
                var1 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.nodes;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var1 = var4.bind(var5)(var1);
                var3['children'] = var1;
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'moveNextTo';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var11 = arg2;
                var5 = arguments[2];
                var1 = this;
                var10 = undefined;
                if(!(var5 === var10)) { _fun0003_ip = 20; continue _fun0003 }
 18:
                var5 = false;
 20:
                var2 = var1._pluckNode;
                var2 = var2.bind(var1)(var3);
                var4 = var11.parentId;
                var2 = null;
                if(!(var2 == var4)) { _fun0003_ip = 51; continue _fun0003 }
 43:
                var2 = var1.root;
                _fun0003_ip = 67; continue _fun0003;
 51:
                var6 = var1.nodes;
                var4 = var11.parentId;
                var2 = var6[var4];
 67:
                var6 = var2.children;
                var4 = var6.indexOf;
                var8 = var4.bind(var6)(var11);
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var9 = 2;
                var4 = var4[var9];
                var13 = var7.bind(var10)(var4);
                var7 = var3.type;
                var4 = _closure1_slot5;
                var4 = var4.FOLDER;
                var7 = var7 === var4;
                if(!var7) { _fun0003_ip = 147; continue _fun0003 }
 128:
                var12 = var2.type;
                var4 = _closure1_slot5;
                var4 = var4.FOLDER;
                var7 = var12 === var4;
 147:
                var22 = var3.id;
                var20 = var2.id;
                var4 = global;
                var12 = var4.HermesInternal;
                var16 = var12.concat;
                var23 = '[GUILDS TREE] Tried moving a folder (';
                var21 = ') inside of another folder (';
                var15 = ')';
                var19 = var15;
                var12 = var23[var16](var22, var21, var20, var19, var18);
                var7 = !var7;
                var7 = var13.bind(var10)(var7, var12);
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var9 = var7.bind(var10)(var6);
                var7 = 0;
                var6 = var8 >= var7;
                var22 = var11.id;
                var20 = var11.parentId;
                var4 = var4.HermesInternal;
                var12 = var4.concat;
                var23 = '[GUILDS TREE] target node (';
                var21 = ') did not exist within its specified parent (';
                var4 = var23[var12](var22, var21, var20, var19, var18);
                var4 = var9.bind(var10)(var6, var4);
                var4 = 0;
                if(!var5) { _fun0003_ip = 277; continue _fun0003 }
 274:
                var4 = 1;
 277:
                var21 = var2.children;
                var5 = new Array(0);
                var22 = var5;
                var20 = 0;
                var6 = arraySpread(var22, var21, var20);
                var2['children'] = var5;
                var6 = var2.children;
                var5 = var6.splice;
                var4 = var8 + var4;
                var4 = var5.bind(var6)(var4, var7, var3);
                var2 = var2.id;
                var3['parentId'] = var2;
                var2 = var1.version;
                var2 = var2 + 1;
                var1['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'moveInto';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var4 = arguments[2];
                var1 = this;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0004_ip = 20; continue _fun0004 }
 18:
                var4 = true;
 20:
                var5 = var1._pluckNode;
                var5 = var5.bind(var1)(var3);
                var7 = 0;
                var6 = 0;
                if(!var4) { _fun0004_ip = 48; continue _fun0004 }
 38:
                var4 = var2.children;
                var6 = var4.length;
 48:
                var9 = var2.children;
                var4 = new Array(0);
                var10 = var4;
                var8 = 0;
                var5 = arraySpread(var10, var9, var8);
                var2['children'] = var4;
                var5 = var2.children;
                var4 = var5.splice;
                var4 = var4.bind(var5)(var6, var7, var3);
                var2 = var2.id;
                var3['parentId'] = var2;
                var2 = var1.version;
                var2 = var2 + 1;
                var1['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'addNode';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var4 = arguments[1];
                var3 = arguments[2];
                var2 = this;
                var8 = undefined;
                if(!(var4 === var8)) { _fun0005_ip = 24; continue _fun0005 }
 18:
                var4 = var2.root;
 24:
                if(!(var3 === var8)) { _fun0005_ip = 30; continue _fun0005 }
 28:
                var3 = true;
 30:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 2;
                var10 = var9[var1];
                var11 = var7.bind(var8)(var10);
                var10 = var5.type;
                var6 = _closure1_slot5;
                var6 = var6.ROOT;
                var10 = var10 !== var6;
                var6 = '[GUILDS TREE] Tried adding another root node into the tree';
                var6 = var11.bind(var8)(var10, var6);
                var6 = var9[var1];
                var12 = var7.bind(var8)(var6);
                var10 = var5.id;
                var6 = null;
                var11 = var6 != var10;
                var10 = '[GUILDS TREE] Tried adding a node without an id';
                var10 = var12.bind(var8)(var11, var10);
                var1 = var9[var1];
                var7 = var7.bind(var8)(var1);
                var9 = var2.nodes;
                var1 = var5.id;
                var1 = var9[var1];
                var6 = var6 == var1;
                var11 = var5.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var10 = var1.concat;
                var9 = '[GUILDS TREE] Tried adding a node that already exists (';
                var1 = ')';
                var1 = var10.bind(var9)(var11, var1);
                var1 = var7.bind(var8)(var6, var1);
                var6 = var2.nodes;
                var1 = var5.id;
                var6[var1] = var5;
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
                var1 = var2.moveInto;
                var1 = var1.bind(var2)(var5, var4, var3);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'removeNode';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 2;
            var7 = var6[var4];
            var3 = undefined;
            var9 = var5.bind(var3)(var7);
            var7 = var1.root;
            var8 = var2 !== var7;
            var7 = '[GUILDS TREE] Tried removing the root node from the tree';
            var7 = var9.bind(var3)(var8, var7);
            var4 = var6[var4];
            var6 = var5.bind(var3)(var4);
            var5 = var2.id;
            var4 = null;
            var5 = var4 != var5;
            var4 = '[GUILDS TREE] Tried removing a node without an id';
            var4 = var6.bind(var3)(var5, var4);
            var4 = var1._pluckNode;
            var4 = var4.bind(var1)(var2);
            var2['parentId'] = var3;
            var3 = var1.nodes;
            var2 = var2.id;
            var2 = delete var3[var2];
            var2 = var1.version;
            var2 = var2 + 1;
            var1['version'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'replaceNode';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var4 = arg2;
                var1 = this;
                var9 = _closure1_slot1;
                var5 = _closure1_slot2;
                var8 = 2;
                var7 = var5[var8];
                var3 = undefined;
                var12 = var9.bind(var3)(var7);
                var10 = var2.id;
                var7 = null;
                var11 = var7 != var10;
                var10 = '[GUILDS TREE] Tried replacing a node without an id';
                var10 = var12.bind(var3)(var11, var10);
                var5 = var5[var8];
                var10 = var9.bind(var3)(var5);
                var5 = var4.id;
                var9 = var7 != var5;
                var5 = '[GUILDS TREE] Tried replacing a node with one that does not have an id';
                var5 = var10.bind(var3)(var9, var5);
                var5 = var2.parentId;
                if(!(var7 == var5)) { _fun0006_ip = 105; continue _fun0006 }
 97:
                var5 = var1.root;
                _fun0006_ip = 121; continue _fun0006;
 105:
                var9 = var1.nodes;
                var7 = var2.parentId;
                var5 = var9[var7];
 121:
                var9 = var5.children;
                var7 = var9.indexOf;
                var9 = var7.bind(var9)(var2);
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var10 = var7.bind(var3)(var6);
                var8 = 0;
                var7 = var9 >= var8;
                var19 = var2.id;
                var17 = var2.parentId;
                var6 = global;
                var6 = var6.HermesInternal;
                var13 = var6.concat;
                var20 = '[GUILDS TREE] existing node (';
                var18 = ') did not exist within its specified parent (';
                var16 = ')';
                var6 = var20[var13](var19, var18, var17, var16, var15);
                var6 = var10.bind(var3)(var7, var6);
                var18 = var5.children;
                var6 = new Array(0);
                var19 = var6;
                var17 = 0;
                var7 = arraySpread(var19, var18, var17);
                var5['children'] = var6;
                var8 = var5.children;
                var7 = var8.splice;
                var6 = 1;
                var6 = var7.bind(var8)(var9, var6, var4);
                var5 = var5.id;
                var4['parentId'] = var5;
                var2['parentId'] = var3;
                var3 = var1.nodes;
                var2 = var2.id;
                var2 = delete var3[var2];
                var3 = var1.nodes;
                var2 = var4.id;
                var3[var2] = var4;
                var2 = var1.version;
                var2 = var2 + 1;
                var1['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'cloneNode';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.clone;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'convertToFolder';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var1 = _closure1_slot6;
                var7 = undefined;
                var2 = var1.bind(var7)();
                var1 = var3.getNode;
                var1 = var1.bind(var3)(var2);
                var6 = null;
                if(!(var6 != var1)) { _fun0007_ip = 62; continue _fun0007 }
 36:
                var1 = _closure1_slot6;
                var8 = var1.bind(var7)();
                var1 = var3.getNode;
                var1 = var1.bind(var3)(var8);
                var2 = var8;
                if(var6 != var1) { _fun0007_ip = 36; continue _fun0007 }
 62:
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.FOLDER;
                var1['type'] = var4;
                var1['id'] = var2;
                var4 = false;
                var1['expanded'] = var4;
                var2 = new Array(0);
                var1['children'] = var2;
                var2 = var3.replaceNode;
                var2 = var2.bind(var3)(var5, var1);
                var2 = var3.removeNode;
                var2 = var2.bind(var3)(var5);
                var2 = var3.addNode;
                var2 = var2.bind(var3)(var5, var1, var4);
                var2 = var3.version;
                var2 = var2 + 1;
                var3['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'allNodes';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = this;
            var1 = var1.nodes;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getNode';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.nodes;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getRoots';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.root;
            var1 = var1.children;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'size';
        var1['key'] = var6;
        var6 = function get() {
            var2 = this;
            var1 = var2.allNodes;
            var1 = var1.bind(var2)();
            var1 = var1.length;
            return var1;
        };
        var1['get'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'sortedGuildNodes';
        var1['key'] = var6;
        var6 = function value() {
            var3 = function collectChildren(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = _closure1_slot5;
                    var1 = var1.GUILD;
                    if(!(var2 !== var1)) { _fun0008_ip = 76; continue _fun0008 }
 25:
                    var2 = var3.children;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 70; continue _fun0008 }
 36:
                    var4 = var3.children;
                    var2 = var4.map;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.flat;
                    var1 = var1.bind(var2)();
                    _fun0008_ip = 74; continue _fun0008;
 70:
                    var1 = new Array(0);
 74:
                    _fun0008_ip = 87; continue _fun0008;
 76:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 87:
                    return var1;
                }
            };
            var _closure3_slot0 = var3;
            var1 = this;
            var2 = var1.root;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = '_pluckNode';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var _closure3_slot0 = var2;
                var1 = var2.parentId;
                var8 = null;
                if(!(var8 == var1)) { _fun0009_ip = 32; continue _fun0009 }
 24:
                var5 = var3.root;
                _fun0009_ip = 48; continue _fun0009;
 32:
                var6 = var3.nodes;
                var1 = var2.parentId;
                var5 = var6[var1];
 48:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 2;
                var6 = var11[var9];
                var1 = undefined;
                var15 = var10.bind(var1)(var6);
                var12 = var8 != var5;
                var22 = var2.id;
                var20 = var2.parentId;
                var6 = global;
                var7 = var6.HermesInternal;
                var16 = var7.concat;
                var14 = '[GUILDS TREE] source node (';
                var13 = ') had a parent id (';
                var19 = ") which doesn't exist in the tree";
                var23 = var14;
                var21 = var13;
                var7 = var23[var16](var22, var21, var20, var19, var18);
                var7 = var15.bind(var1)(var12, var7);
                var7 = var5.children;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var8 = var8 != var7;
                var22 = var2.id;
                var20 = var2.parentId;
                var6 = var6.HermesInternal;
                var10 = var6.concat;
                var19 = ') which contains no children';
                var23 = var14;
                var21 = var13;
                var6 = var23[var10](var22, var21, var20, var19, var18);
                var6 = var9.bind(var1)(var8, var6);
                var6 = var7.filter;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
                var5['children'] = var4;
                var2['parentId'] = var1;
                var2 = var3.version;
                var2 = var2 + 1;
                var3['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[14] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/GuildsTree.tsx';
    var6 = var7.bind(var8)(var6);
    var3['GuildsNodeType'] = var5;
    var3['GuildsTree'] = var4;
    var4 = function createGuildNode(arg1, arg2) {
        var1 = {};
        var2 = _closure1_slot5;
        var2 = var2.GUILD;
        var1['type'] = var2;
        var2 = arg1;
        var1['id'] = var2;
        var2 = arg2;
        var1['parentId'] = var2;
        var2 = new Array(0);
        var1['children'] = var2;
        var2 = false;
        var1['unavailable'] = var2;
        return var1;
    };
    var3['createGuildNode'] = var4;
    var2 = function createFolderNode(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var2 = arg3;
            var1 = {};
            var3 = _closure1_slot5;
            var3 = var3.FOLDER;
            var1['type'] = var3;
            var3 = var4.folderId;
            var1['id'] = var3;
            var3 = arg2;
            var1['parentId'] = var3;
            var7 = var4.folderName;
            var3 = null;
            var8 = var3 != var7;
            var6 = undefined;
            if(!var8) { _fun0010_ip = 63; continue _fun0010 }
 60:
            var6 = var7;
 63:
            var1['name'] = var6;
            var6 = var4.folderColor;
            var7 = var3 != var6;
            var5 = undefined;
            if(!var7) { _fun0010_ip = 85; continue _fun0010 }
 82:
            var5 = var6;
 85:
            var1['color'] = var5;
            if(!(var3 == var2)) { _fun0010_ip = 112; continue _fun0010 }
 93:
            var4 = var4.expanded;
            var3 = var3 != var4;
            if(!var3) { _fun0010_ip = 109; continue _fun0010 }
 106:
            var3 = var4;
 109:
            var2 = var3;
 112:
            var1['expanded'] = var2;
            var2 = new Array(0);
            var1['children'] = var2;
            return var1;
        }
    };
    var3['createFolderNode'] = var2;
    return var1;
})();