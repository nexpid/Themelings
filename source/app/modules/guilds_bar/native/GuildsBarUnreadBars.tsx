// app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function checkNodeAndIterate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.node;
            var6 = var1.section;
            var3 = var1.item;
            var15 = var1.direction;
            var14 = var1.selectedGuildId;
            var4 = null;
            if(!(var4 != var9)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var9.type;
            var2 = _closure1_slot9;
            var2 = var2.GUILD;
            if(!(var5 === var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = var9.id;
            if(!(var2 !== var14)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var7 = _closure1_slot6;
            var5 = var7.getMentionCount;
            var2 = var9.id;
            var5 = var5.bind(var7)(var2);
            var2 = 0;
            var7 = var5 > var2;
            var5 = undefined;
            if(!var7) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var5 = var9;
case 41:
            if(!(var4 == var5)) { _fun0004_ip = 43; continue _fun0004 }
case 38:
            var13 = 0;
            var8 = 1;
            var12 = 0;
            if(!(var8 !== var15)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var7 = var9.children;
            var7 = var7.length;
            var12 = var7 - var8;
case 44:
            if(!(var12 >= var13)) { _fun0004_ip = 36; continue _fun0004 }
case 46:
            var7 = var9.children;
            var7 = var7.length;
            var11 = undefined;
            if(!(var12 < var7)) { _fun0004_ip = 36; continue _fun0004 }
case 15:
            var8 = var12;
            if(!(var4 != var6)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var8 = var6;
case 47:
            var10 = _closure1_slot23;
            var7 = {};
            var16 = var9.children;
            var16 = var16[var12];
            var7['node'] = var16;
            var7['section'] = var8;
            var17 = var4 != var6;
            var16 = undefined;
            if(!var17) { _fun0004_ip = 22; continue _fun0004 }
case 49:
            var16 = var12;
case 22:
            var7['item'] = var16;
            var7['direction'] = var15;
            var7['selectedGuildId'] = var14;
            var10 = var10.bind(var11)(var7);
            if(!(var4 == var10)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var12 = var12 + var15;
            if(!(var12 >= var13)) { _fun0004_ip = 36; continue _fun0004 }
case 52:
            var7 = var9.children;
            var7 = var7.length;
            if(var12 < var7) { _fun0004_ip = 15; continue _fun0004 }
case 36:
            var7 = undefined;
            return var7;
case 50:
            var11 = var9.type;
            var1 = _closure1_slot9;
            var7 = var1.FOLDER;
            var1 = var10;
            if(!(var11 === var7)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var7 = var9.expanded;
            var1 = var10;
            if(var7) { _fun0004_ip = 53; continue _fun0004 }
case 55:
            var7 = {};
            var7['node'] = var9;
            var7['section'] = var8;
            var1 = var7;
case 53:
            return var1;
case 43:
            var1 = {};
            var1['node'] = var5;
            var7 = var4 != var6;
            var5 = 0;
            if(!var7) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var5 = var6;
case 56:
            var1['section'] = var5;
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var2 = var3;
case 58:
            var1['item'] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function findFirstOrLastMentionedItem(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var9 = arg3;
            var3 = _closure1_slot8;
            var2 = var3.getGuildsTree;
            var24 = var2.bind(var3)();
            var11 = var24.root;
            var3 = var5.getSectionItemFromPosition;
            var4 = var5.scrollPosValue;
            var2 = var4.get;
            var4 = var2.bind(var4)();
            var2 = arg5;
            var2 = var4 + var2;
            var2 = var3.bind(var5)(var2);
            var4 = var2.item;
            var2 = null;
            var6 = var2 == var4;
            var3 = undefined;
            var23 = undefined;
            if(var6) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var23 = var4.layoutStart;
case 60:
            if(!(var2 == var23)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var6 = var5.scrollPosValue;
            var4 = var6.get;
            var23 = var4.bind(var6)();
case 62:
            var6 = var5.scrollPosValue;
            var4 = var6.get;
            var6 = var4.bind(var6)();
            var4 = var5.containerSize;
            var6 = var6 + var4;
            var4 = arg4;
            var6 = var6 - var4;
            var8 = _closure1_slot13;
            var4 = _closure1_slot14;
            var4 = var8 + var4;
            var22 = var6 - var4;
            var4 = {'section': 4294967295, 'item': 4294967295};
            var10 = -1;
            var6 = _closure1_slot21;
            var5 = var5.state;
            var5 = var5.items;
            var21 = var6.bind(var3)(var5);
            var13 = var21.bind(var3)();
            var12 = var13.done;
            var18 = false;
            var5 = true;
            var8 = 0;
            var20 = 10;
            var19 = var13;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var6 = false;
            if(var12) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var12 = var19.value;
            var31 = var12.layoutStart;
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(!(var31 < var23))) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.ITEM;
            if(!(var32 !== var31)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.SECTION;
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var31)) { _fun0005_ip = 66; continue _fun0005 }
case 68:
            var31 = var12.layoutStart;
            var6 = var18;
            if(!(!(var31 > var22))) { _fun0005_ip = 64; continue _fun0005 }
case 70:
            var32 = var12.section;
            var31 = _closure1_slot10;
            var31 = var31.GUILDS;
            if(!(!(var32 < var31))) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var31 = var12.layoutSize;
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var8 !== var31)) { _fun0005_ip = 66; continue _fun0005 }
case 73:
            var31 = var4.section;
            if(!(var10 === var31)) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var31 = var12.section;
            var4['section'] = var31;
            var31 = var12.item;
            var4['item'] = var31;
case 74:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.SECTION;
            if(!(var32 === var31)) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var32 = var24.getNode;
            var31 = var12.recyclerKey;
            var34 = var32.bind(var24)(var31);
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var2 != var34)) { _fun0005_ip = 66; continue _fun0005 }
case 78:
            var32 = var34.type;
            var31 = _closure1_slot9;
            var31 = var31.FOLDER;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var31)) { _fun0005_ip = 66; continue _fun0005 }
case 79:
            var31 = var34.expanded;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(var31) { _fun0005_ip = 66; continue _fun0005 }
case 80:
            var32 = _closure1_slot21;
            var31 = var34.children;
            var33 = var32.bind(var3)(var31);
            var35 = var33.bind(var3)();
            var31 = var35.done;
            var32 = var35;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var32;
            var27 = var33;
            var26 = var13;
            if(var31) { _fun0005_ip = 66; continue _fun0005 }
case 81:
            var35 = var32.value;
            var36 = var35.type;
            var31 = _closure1_slot9;
            var31 = var31.GUILD;
            if(!(var36 === var31)) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var37 = _closure1_slot6;
            var36 = var37.getMentionCount;
            var31 = var35.id;
            var31 = var36.bind(var37)(var31);
            var31 = var31 > var8;
            var25 = true;
            var30 = var17;
            var29 = var34;
            var28 = var32;
            var27 = var33;
            var26 = var35;
            if(var31) { _fun0005_ip = 66; continue _fun0005 }
case 82:
            var36 = var33.bind(var3)();
            var31 = var36.done;
            var32 = var36;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var32;
            var27 = var33;
            var26 = var35;
            if(var31) { _fun0005_ip = 66; continue _fun0005 }
case 84:
            _fun0005_ip = 81; continue _fun0005;
case 76:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.ITEM;
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var31)) { _fun0005_ip = 66; continue _fun0005 }
case 85:
            var31 = var24.getNode;
            var12 = var12.recyclerKey;
            var31 = var31.bind(var24)(var12);
            var25 = var18;
            var30 = var31;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var2 != var31)) { _fun0005_ip = 66; continue _fun0005 }
case 86:
            var32 = var31.type;
            var12 = _closure1_slot9;
            var12 = var12.GUILD;
            var25 = var18;
            var30 = var31;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var12)) { _fun0005_ip = 66; continue _fun0005 }
case 87:
            var33 = _closure1_slot6;
            var32 = var33.getMentionCount;
            var12 = var31.id;
            var12 = var32.bind(var33)(var12);
            var12 = var12 > var8;
            var25 = var18;
            var30 = var31;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            var6 = true;
            if(var12) { _fun0005_ip = 64; continue _fun0005 }
case 88:
            _fun0005_ip = 66; continue _fun0005;
case 71:
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            var6 = true;
            if(var7) { _fun0005_ip = 64; continue _fun0005 }
case 66:
            var31 = var21.bind(var3)();
            var12 = var31.done;
            var18 = var25;
            var17 = var30;
            var16 = var29;
            var15 = var28;
            var14 = var27;
            var13 = var26;
            var19 = var31;
            var6 = var18;
            if(!var12) { _fun0005_ip = 65; continue _fun0005 }
case 64:
            if(var6) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var6 = undefined;
            if(var7) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var13 = _closure1_slot23;
            var12 = {};
            var12['node'] = var11;
            var14 = 1;
            var12['direction'] = var14;
            var12['selectedGuildId'] = var9;
            var6 = var13.bind(var3)(var12);
case 91:
            if(!(var2 == var6)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            if(var7) { _fun0005_ip = 95; continue _fun0005 }
case 93:
            if(!(var2 == var6)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            if(!(var2 == var6)) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var7 = _closure1_slot17;
            return var7;
case 95:
            if(!(var2 != var6)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var12 = var6.section;
            var7 = _closure1_slot10;
            var7 = var7.GUILDS;
            var7 = var12 + var7;
            var12 = var4.section;
            if(!(!(var7 < var12))) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var12 = var4.section;
            if(!(var7 === var12)) { _fun0005_ip = 97; continue _fun0005 }
case 103:
            var12 = var6.item;
            var13 = var2 != var12;
            var8 = 0;
            if(!var13) { _fun0005_ip = 104; continue _fun0005 }
case 105:
            var8 = var12;
case 104:
            var4 = var4.item;
            if(!(!(var8 < var4))) { _fun0005_ip = 101; continue _fun0005 }
case 97:
            var8 = _closure1_slot23;
            var4 = {};
            var4['node'] = var11;
            var4['direction'] = var10;
            var4['selectedGuildId'] = var9;
            var9 = var8.bind(var3)(var4);
            if(!(var2 == var9)) { _fun0005_ip = 106; continue _fun0005 }
case 107:
            var2 = _closure1_slot17;
            _fun0005_ip = 108; continue _fun0005;
case 106:
            var4 = {};
            var4['beforeItem'] = var3;
            var8 = {};
            var11 = var9.section;
            var10 = _closure1_slot10;
            var10 = var10.GUILDS;
            var10 = var11 + var10;
            var8['section'] = var10;
            var9 = var9.item;
            var8['row'] = var9;
            var8['mention'] = var5;
            var4['afterItem'] = var8;
            var2 = var4;
case 108:
            return var2;
case 101:
            var2 = {};
            var4 = {};
            var4['section'] = var7;
            var6 = var6.item;
            var4['row'] = var6;
            var4['mention'] = var5;
            var2['beforeItem'] = var4;
            var2['afterItem'] = var3;
            return var2;
case 99:
            var2 = _closure1_slot18;
            return var2;
case 89:
            var1 = _closure1_slot17;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var8 = var6[var4];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.FastListRenderSections;
    var _closure1_slot10 = var8;
    var11 = var4.GUILD_LIST_WIDTH;
    var4 = var4.useGuildWrapperSize;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useYouBarTotalHeight;
    var _closure1_slot12 = var8;
    var8 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot13 = var8;
    var4 = var4.YOU_BAR_MARGIN;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0};
    var10['width'] = var11;
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var4['beforeItem'] = var1;
    var4['afterItem'] = var1;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = {'section': 0, 'row': 0, 'mention': true};
    var4['beforeItem'] = var8;
    var4['afterItem'] = var1;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarUnreadBars(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var13 = var2.fastList;
            var _closure2_slot0 = var13;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.top;
            var6 = _closure1_slot0;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.MobileHomeDrawerExperiment;
            var6 = var7.useConfig;
            var3 = {};
            var8 = 'guilds';
            var3['location'] = var8;
            var3 = var6.bind(var7)(var3);
            var6 = var3.enableHome;
            var3 = 0;
            var10 = 0;
            if(var6) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var10 = var2;
case 109:
            _closure2_slot1 = var10;
            var2 = _closure1_slot11;
            var2 = var2.bind(var4)();
            var9 = 2;
            var2 = var2 / var9;
            _closure2_slot2 = var2;
            var7 = _closure1_slot4;
            var8 = var7.useState;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = _closure1_slot24;
                    var6 = _closure2_slot0;
                    var4 = _closure1_slot6;
                    var3 = var4.getPrivateChannelMentionCount;
                    var4 = var3.bind(var4)();
                    var3 = 0;
                    var5 = var4 > var3;
                    var3 = _closure1_slot7;
                    var2 = var3.getGuildId;
                    var2 = var2.bind(var3)();
                    var4 = null;
                    var3 = var4 != var2;
                    if(!var3) { _fun0007_ip = 111; continue _fun0007 }
case 112:
                    var4 = var2;
case 111:
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var13 = undefined;
                    var12 = var6;
                    var11 = var5;
                    var10 = var4;
                    var1 = var13[var7](var12, var11, var10, var9, var8, var7);
                    return var1;
                }
            };
            var8 = var8.bind(var7)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var8, var9);
            var3 = var6[var3];
            var9 = var3.beforeItem;
            var8 = var3.afterItem;
            var3 = 1;
            var3 = var6[var3];
            _closure2_slot3 = var3;
            var6 = var7.useMemo;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var10;
            var3[2] = var2;
            var2 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var9 = _closure1_slot24;
                        var8 = _closure2_slot0;
                        var5 = _closure1_slot6;
                        var4 = var5.getPrivateChannelMentionCount;
                        var5 = var4.bind(var5)();
                        var4 = 0;
                        var7 = var5 > var4;
                        var4 = _closure1_slot7;
                        var1 = var4.getGuildId;
                        var1 = var1.bind(var4)();
                        var6 = null;
                        var4 = var6 != var1;
                        if(!var4) { _fun0008_ip = 113; continue _fun0008 }
case 114:
                        var6 = var1;
case 113:
                        var11 = _closure2_slot1;
                        var10 = _closure2_slot2;
                        var1 = undefined;
                        var15 = undefined;
                        var14 = var8;
                        var13 = var7;
                        var12 = var6;
                        var4 = var15[var9](var14, var13, var12, var11, var10, var9);
                        var _closure4_slot0 = var4;
                        var3 = _closure2_slot3;
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var4 = arg1;
                                var3 = _closure4_slot0;
                                var1 = var4;
                                if(!(var4 !== var3)) { _fun0009_ip = 115; continue _fun0009 }
case 116:
                                var8 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var6 = 15;
                                var5 = var5[var6];
                                var7 = undefined;
                                var9 = var8.bind(var7)(var5);
                                var8 = var4.afterItem;
                                var5 = _closure4_slot0;
                                var5 = var5.afterItem;
                                var5 = var9.bind(var7)(var8, var5);
                                if(!var5) { _fun0009_ip = 117; continue _fun0009 }
case 30:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var6 = var5.bind(var7)(var3);
                                var5 = var4.beforeItem;
                                var3 = _closure4_slot0;
                                var3 = var3.beforeItem;
                                var3 = var6.bind(var7)(var5, var3);
                                var1 = var4;
                                if(var3) { _fun0009_ip = 115; continue _fun0009 }
case 117:
                                var1 = _closure4_slot0;
case 115:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = 100;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var6.bind(var7)(var2, var3);
            _closure2_slot4 = var14;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var14;
            var2 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.BatchedStoreListener;
                var3 = _closure1_slot6;
                var4 = new Array(3);
                var4[0] = var3;
                var3 = _closure1_slot7;
                var4[1] = var3;
                var2 = _closure1_slot8;
                var4[2] = var2;
                var6 = _closure2_slot4;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var8 = var3;
                var7 = var4;
                var2 = new var8[var5](var7, var6, var5);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'guild-mention-bars';
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var6.bind(var7)(var2, var3);
            var12 = var13.scrollPosValue;
            _closure2_slot5 = var12;
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var15 = 17;
            var2 = var10[var15];
            var11 = var16.bind(var4)(var2);
            var6 = var11.useAnimatedReaction;
            var3 = function A() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = {};
            var2['scrollPosValue'] = var12;
            var3['__closure'] = var2;
            var2 = 16367582542434.0;
            var3['__workletHash'] = var2;
            var2 = _closure1_slot19;
            var3['__initData'] = var2;
            var2 = function O(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg2;
                    if(!(var2 !== var1)) { _fun0010_ip = 28; continue _fun0010 }
case 118:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = {};
            var15 = var10[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.runOnJS;
            var12['runOnJS'] = var15;
            var12['debouncedUpdate'] = var14;
            var2['__closure'] = var12;
            var12 = 13727289405147.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot20;
            var2['__initData'] = var12;
            var2 = var6.bind(var11)(var3, var2);
            var2 = function useUnreadBarWrapperStyles() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot16;
                    var8 = undefined;
                    var2 = var2.bind(var8)();
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var4 = var5.bind(var8)(var4);
                    var4 = var4.bind(var8)();
                    var5 = var4.top;
                    var6 = _closure1_slot0;
                    var4 = 12;
                    var4 = var7[var4];
                    var4 = var6.bind(var8)(var4);
                    var7 = var4.MobileHomeDrawerExperiment;
                    var6 = var7.useConfig;
                    var4 = {};
                    var9 = 'guilds';
                    var4['location'] = var9;
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.enableHome;
                    var7 = var5;
                    if(!var4) { _fun0011_ip = 13; continue _fun0011 }
case 42:
                    var4 = 56;
                    var7 = var5 + var4;
case 13:
                    var _closure3_slot1 = var7;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.useMobileQuestDockHeight;
                    var6 = var4.bind(var5)();
                    var _closure3_slot2 = var6;
                    var5 = _closure1_slot12;
                    var9 = 0;
                    var10 = var6 > var9;
                    var4 = 8;
                    if(!var10) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                    var4 = 0;
case 119:
                    var5 = var5.bind(var8)(var4);
                    var _closure3_slot3 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.useMemo;
                    var8 = var2.wrapper;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        var1 = {};
                        var3 = _closure3_slot0;
                        var4 = var3.wrapper;
                        var3 = new Array(2);
                        var3[0] = var4;
                        var4 = {};
                        var5 = _closure3_slot1;
                        var4['top'] = var5;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot3;
                        var5 = var6 + var5;
                        var4['bottom'] = var5;
                        var3[1] = var4;
                        var1['style'] = var3;
                        var3 = _closure3_slot1;
                        var1['paddingStart'] = var3;
                        var4 = _closure3_slot2;
                        var3 = 4;
                        var3 = var4 + var3;
                        var2 = _closure3_slot3;
                        var2 = var3 + var2;
                        var1['paddingEnd'] = var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var2 = var2.bind(var4)();
            var6 = var2.style;
            var12 = var2.paddingStart;
            _closure2_slot6 = var12;
            var11 = var2.paddingEnd;
            _closure2_slot7 = var11;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.scrollToLocation;
                var1 = {};
                var7 = arg1;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var6 = _closure2_slot6;
                var5 = 'paddingStart';
                var1[4] = var6;
                var5 = _closure2_slot7;
                var4 = 'paddingEnd';
                var1[3] = var5;
                var5 = 'visible';
                var4 = 'orientation';
                var1[3] = var5;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {'style': null, 'collapsable': false, 'pointerEvents': 'box-none', 'testID': 'guilds-bar-unread-bars'};
            var1['style'] = var6;
            var6 = _closure1_slot1;
            var5 = 18;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['beforeItem'] = var9;
            var5['afterItem'] = var8;
            var5['scrollToLocation'] = var7;
            var7 = true;
            var5['compact'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarUnreadBars.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();