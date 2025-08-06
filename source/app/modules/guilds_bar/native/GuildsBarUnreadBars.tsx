// app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function checkNodeAndIterate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.node;
            var6 = var1.section;
            var3 = var1.item;
            var15 = var1.direction;
            var14 = var1.selectedGuildId;
            var4 = null;
            if(!(var4 != var9)) { _fun0004_ip = 248; continue _fun0004 }
 40:
            var5 = var9.type;
            var2 = _closure1_slot9;
            var2 = var2.GUILD;
            if(!(var5 === var2)) { _fun0004_ip = 112; continue _fun0004 }
 62:
            var2 = var9.id;
            if(!(var2 !== var14)) { _fun0004_ip = 112; continue _fun0004 }
 71:
            var7 = _closure1_slot6;
            var5 = var7.getMentionCount;
            var2 = var9.id;
            var5 = var5.bind(var7)(var2);
            var2 = 0;
            var7 = var5 > var2;
            var5 = undefined;
            if(!var7) { _fun0004_ip = 105; continue _fun0004 }
 102:
            var5 = var9;
 105:
            if(!(var4 == var5)) { _fun0004_ip = 302; continue _fun0004 }
 112:
            var13 = 0;
            var8 = 1;
            var12 = 0;
            if(!(var8 !== var15)) { _fun0004_ip = 137; continue _fun0004 }
 123:
            var7 = var9.children;
            var7 = var7.length;
            var12 = var7 - var8;
 137:
            if(!(var12 >= var13)) { _fun0004_ip = 248; continue _fun0004 }
 141:
            var7 = var9.children;
            var7 = var7.length;
            var11 = undefined;
            if(!(var12 < var7)) { _fun0004_ip = 248; continue _fun0004 }
 157:
            var8 = var12;
            if(!(var4 != var6)) { _fun0004_ip = 167; continue _fun0004 }
 164:
            var8 = var6;
 167:
            var10 = _closure1_slot20;
            var7 = {};
            var16 = var9.children;
            var16 = var16[var12];
            var7['node'] = var16;
            var7['section'] = var8;
            var17 = var4 != var6;
            var16 = undefined;
            if(!var17) { _fun0004_ip = 203; continue _fun0004 }
 200:
            var16 = var12;
 203:
            var7['item'] = var16;
            var7['direction'] = var15;
            var7['selectedGuildId'] = var14;
            var10 = var10.bind(var11)(var7);
            if(!(var4 == var10)) { _fun0004_ip = 252; continue _fun0004 }
 226:
            var12 = var12 + var15;
            if(!(var12 >= var13)) { _fun0004_ip = 248; continue _fun0004 }
 234:
            var7 = var9.children;
            var7 = var7.length;
            if(var12 < var7) { _fun0004_ip = 157; continue _fun0004 }
 248:
            var7 = undefined;
            return var7;
 252:
            var11 = var9.type;
            var1 = _closure1_slot9;
            var7 = var1.FOLDER;
            var1 = var10;
            if(!(var11 === var7)) { _fun0004_ip = 300; continue _fun0004 }
 274:
            var7 = var9.expanded;
            var1 = var10;
            if(var7) { _fun0004_ip = 300; continue _fun0004 }
 286:
            var7 = {};
            var7['node'] = var9;
            var7['section'] = var8;
            var1 = var7;
 300:
            return var1;
 302:
            var1 = {};
            var1['node'] = var5;
            var7 = var4 != var6;
            var5 = 0;
            if(!var7) { _fun0004_ip = 321; continue _fun0004 }
 318:
            var5 = var6;
 321:
            var1['section'] = var5;
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0004_ip = 337; continue _fun0004 }
 334:
            var2 = var3;
 337:
            var1['item'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function findFirstOrLastMentionedItem(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            var2 = _closure1_slot12;
            var2 = var4 + var2;
            var2 = var3.bind(var5)(var2);
            var4 = var2.item;
            var2 = null;
            var6 = var2 == var4;
            var3 = undefined;
            var23 = undefined;
            if(var6) { _fun0005_ip = 90; continue _fun0005 }
 84:
            var23 = var4.layoutStart;
 90:
            if(!(var2 == var23)) { _fun0005_ip = 109; continue _fun0005 }
 94:
            var6 = var5.scrollPosValue;
            var4 = var6.get;
            var23 = var4.bind(var6)();
 109:
            var4 = var5.containerSize;
            var6 = var23 + var4;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 8;
            var4 = var10[var4];
            var4 = var8.bind(var3)(var4);
            var8 = var4.TabsVisibleStore;
            var4 = var8.getState;
            var4 = var4.bind(var8)();
            var4 = var4.tabsHeight;
            var22 = var6 - var4;
            var4 = {'section': 4294967295, 'item': 4294967295};
            var10 = -1;
            var6 = _closure1_slot18;
            var5 = var5.state;
            var5 = var5.items;
            var21 = var6.bind(var3)(var5);
            var13 = var21.bind(var3)();
            var12 = var13.done;
            var18 = false;
            var5 = true;
            var8 = 0;
            var20 = 9;
            var19 = var13;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var6 = false;
            if(var12) { _fun0005_ip = 1004; continue _fun0005 }
 244:
            var12 = var19.value;
            var31 = var12.layoutStart;
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(!(var31 < var23))) { _fun0005_ip = 965; continue _fun0005 }
 280:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.ITEM;
            if(!(var32 !== var31)) { _fun0005_ip = 377; continue _fun0005 }
 318:
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
            if(!(var32 === var31)) { _fun0005_ip = 965; continue _fun0005 }
 377:
            var31 = var12.layoutStart;
            var6 = var18;
            if(!(!(var31 > var22))) { _fun0005_ip = 1004; continue _fun0005 }
 393:
            var32 = var12.section;
            var31 = _closure1_slot10;
            var31 = var31.GUILDS;
            if(!(!(var32 < var31))) { _fun0005_ip = 942; continue _fun0005 }
 415:
            var31 = var4.section;
            if(!(var10 === var31)) { _fun0005_ip = 446; continue _fun0005 }
 424:
            var31 = var12.section;
            var4['section'] = var31;
            var31 = var12.item;
            var4['item'] = var31;
 446:
            var32 = var12.type;
            var33 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var20];
            var31 = var33.bind(var3)(var31);
            var31 = var31.FastListItemTypes;
            var31 = var31.SECTION;
            if(!(var32 === var31)) { _fun0005_ip = 758; continue _fun0005 }
 487:
            var32 = var24.getNode;
            var31 = var12.recyclerKey;
            var34 = var32.bind(var24)(var31);
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var2 != var34)) { _fun0005_ip = 965; continue _fun0005 }
 529:
            var32 = var34.type;
            var31 = _closure1_slot9;
            var31 = var31.FOLDER;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var31)) { _fun0005_ip = 965; continue _fun0005 }
 569:
            var31 = var34.expanded;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(var31) { _fun0005_ip = 965; continue _fun0005 }
 599:
            var32 = _closure1_slot18;
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
            if(var31) { _fun0005_ip = 965; continue _fun0005 }
 649:
            var35 = var32.value;
            var36 = var35.type;
            var31 = _closure1_slot9;
            var31 = var31.GUILD;
            if(!(var36 === var31)) { _fun0005_ip = 720; continue _fun0005 }
 673:
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
            if(var31) { _fun0005_ip = 965; continue _fun0005 }
 720:
            var36 = var33.bind(var3)();
            var31 = var36.done;
            var32 = var36;
            var25 = var18;
            var30 = var17;
            var29 = var34;
            var28 = var32;
            var27 = var33;
            var26 = var35;
            if(var31) { _fun0005_ip = 965; continue _fun0005 }
 756:
            _fun0005_ip = 649; continue _fun0005;
 758:
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
            if(!(var32 === var31)) { _fun0005_ip = 965; continue _fun0005 }
 817:
            var31 = var24.getNode;
            var12 = var12.recyclerKey;
            var31 = var31.bind(var24)(var12);
            var25 = var18;
            var30 = var31;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var2 != var31)) { _fun0005_ip = 965; continue _fun0005 }
 856:
            var32 = var31.type;
            var12 = _closure1_slot9;
            var12 = var12.GUILD;
            var25 = var18;
            var30 = var31;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            if(!(var32 === var12)) { _fun0005_ip = 965; continue _fun0005 }
 893:
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
            if(var12) { _fun0005_ip = 1004; continue _fun0005 }
 940:
            _fun0005_ip = 965; continue _fun0005;
 942:
            var25 = var18;
            var30 = var17;
            var29 = var16;
            var28 = var15;
            var27 = var14;
            var26 = var13;
            var6 = true;
            if(var7) { _fun0005_ip = 1004; continue _fun0005 }
 965:
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
            if(!var12) { _fun0005_ip = 244; continue _fun0005 }
 1004:
            if(var6) { _fun0005_ip = 1272; continue _fun0005 }
 1010:
            var6 = undefined;
            if(var7) { _fun0005_ip = 1044; continue _fun0005 }
 1015:
            var13 = _closure1_slot20;
            var12 = {};
            var12['node'] = var11;
            var14 = 1;
            var12['direction'] = var14;
            var12['selectedGuildId'] = var9;
            var6 = var13.bind(var3)(var12);
 1044:
            if(!(var2 == var6)) { _fun0005_ip = 1051; continue _fun0005 }
 1048:
            if(var7) { _fun0005_ip = 1065; continue _fun0005 }
 1051:
            if(!(var2 == var6)) { _fun0005_ip = 1065; continue _fun0005 }
 1055:
            if(!(var2 == var6)) { _fun0005_ip = 1138; continue _fun0005 }
 1059:
            var7 = _closure1_slot14;
            return var7;
 1065:
            if(!(var2 != var6)) { _fun0005_ip = 1266; continue _fun0005 }
 1072:
            var12 = var6.section;
            var7 = _closure1_slot10;
            var7 = var7.GUILDS;
            var7 = var12 + var7;
            var12 = var4.section;
            if(!(!(var7 < var12))) { _fun0005_ip = 1231; continue _fun0005 }
 1103:
            var12 = var4.section;
            if(!(var7 === var12)) { _fun0005_ip = 1138; continue _fun0005 }
 1112:
            var12 = var6.item;
            var13 = var2 != var12;
            var8 = 0;
            if(!var13) { _fun0005_ip = 1129; continue _fun0005 }
 1126:
            var8 = var12;
 1129:
            var4 = var4.item;
            if(!(!(var8 < var4))) { _fun0005_ip = 1231; continue _fun0005 }
 1138:
            var8 = _closure1_slot20;
            var4 = {};
            var4['node'] = var11;
            var4['direction'] = var10;
            var4['selectedGuildId'] = var9;
            var9 = var8.bind(var3)(var4);
            if(!(var2 == var9)) { _fun0005_ip = 1174; continue _fun0005 }
 1168:
            var2 = _closure1_slot14;
            _fun0005_ip = 1229; continue _fun0005;
 1174:
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
 1229:
            return var2;
 1231:
            var2 = {};
            var4 = {};
            var4['section'] = var7;
            var6 = var6.item;
            var4['row'] = var6;
            var4['mention'] = var5;
            var2['beforeItem'] = var4;
            var2['afterItem'] = var3;
            return var2;
 1266:
            var2 = _closure1_slot15;
            return var2;
 1272:
            var1 = _closure1_slot14;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var8 = 2;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var10 = var6[var4];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.FastListRenderSections;
    var _closure1_slot10 = var10;
    var11 = var4.GUILD_LIST_WIDTH;
    var10 = var4.GUILD_ITEM_SIZE;
    var4 = var4.GUILD_ITEM_MARGIN;
    var12 = 7;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.jsx;
    var _closure1_slot11 = var12;
    var4 = var8 * var4;
    var4 = var10 + var4;
    var4 = var4 / var8;
    var _closure1_slot12 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0};
    var10['width'] = var11;
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var4['beforeItem'] = var1;
    var4['afterItem'] = var1;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = {'section': 0, 'row': 0, 'mention': true};
    var4['beforeItem'] = var8;
    var4['afterItem'] = var1;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarUnreadBars(arg1) {
        var2 = arg1;
        var13 = var2.fastList;
        var _closure2_slot0 = var13;
        var7 = _closure1_slot4;
        var3 = var7.useState;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot21;
                var4 = _closure2_slot0;
                var3 = _closure1_slot6;
                var2 = var3.getPrivateChannelMentionCount;
                var3 = var2.bind(var3)();
                var2 = 0;
                var3 = var3 > var2;
                var2 = _closure1_slot7;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                var2 = null;
                var6 = var2 != var1;
                if(!var6) { _fun0006_ip = 60; continue _fun0006 }
 57:
                var2 = var1;
 60:
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            }
        };
        var6 = var3.bind(var7)(var2);
        var3 = _closure1_slot3;
        var4 = undefined;
        var2 = 2;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var2 = var3[var2];
        var9 = var2.beforeItem;
        var8 = var2.afterItem;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var6 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var13;
        var2 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var7 = _closure1_slot21;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var4 = var5.getPrivateChannelMentionCount;
                    var5 = var4.bind(var5)();
                    var4 = 0;
                    var5 = var5 > var4;
                    var4 = _closure1_slot7;
                    var1 = var4.getGuildId;
                    var1 = var1.bind(var4)();
                    var4 = null;
                    var8 = var4 != var1;
                    if(!var8) { _fun0007_ip = 62; continue _fun0007 }
 59:
                    var4 = var1;
 62:
                    var1 = undefined;
                    var4 = var7.bind(var1)(var6, var5, var4);
                    var _closure4_slot0 = var4;
                    var3 = _closure2_slot1;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure4_slot0;
                            var1 = var4;
                            if(!(var4 !== var3)) { _fun0008_ip = 116; continue _fun0008 }
 17:
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var6 = 13;
                            var5 = var5[var6];
                            var7 = undefined;
                            var9 = var8.bind(var7)(var5);
                            var8 = var4.afterItem;
                            var5 = _closure4_slot0;
                            var5 = var5.afterItem;
                            var5 = var9.bind(var7)(var8, var5);
                            if(!var5) { _fun0008_ip = 112; continue _fun0008 }
 67:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var6 = var5.bind(var7)(var3);
                            var5 = var4.beforeItem;
                            var3 = _closure4_slot0;
                            var3 = var3.beforeItem;
                            var3 = var6.bind(var7)(var5, var3);
                            var1 = var4;
                            if(var3) { _fun0008_ip = 116; continue _fun0008 }
 112:
                            var1 = _closure4_slot0;
 116:
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
        var _closure2_slot2 = var14;
        var6 = var7.useEffect;
        var3 = new Array(1);
        var3[0] = var14;
        var2 = function() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 14;
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
            var6 = _closure2_slot2;
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
        var _closure2_slot3 = var12;
        var16 = _closure1_slot0;
        var10 = _closure1_slot2;
        var15 = 15;
        var2 = var10[var15];
        var11 = var16.bind(var4)(var2);
        var6 = var11.useAnimatedReaction;
        var3 = function S() {
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = {};
        var2['scrollPosValue'] = var12;
        var3['__closure'] = var2;
        var2 = 16367582542434.0;
        var3['__workletHash'] = var2;
        var2 = _closure1_slot16;
        var3['__initData'] = var2;
        var2 = function b(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 !== var1)) { _fun0009_ip = 56; continue _fun0009 }
 10:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.runOnJS;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
 56:
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
        var12 = _closure1_slot17;
        var2['__initData'] = var12;
        var2 = var6.bind(var11)(var3, var2);
        var2 = function useUnreadBarWrapperStyles() {
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var6 = var3.top;
            var _closure3_slot0 = var6;
            var4 = _closure1_slot0;
            var3 = 11;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useMobileQuestDockHeight;
            var5 = var3.bind(var4)();
            var _closure3_slot1 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure1_slot13;
                var2 = var2.wrapper;
                var4 = new Array(2);
                var4[0] = var2;
                var5 = {};
                var2 = _closure3_slot0;
                var5['top'] = var2;
                var3 = _closure3_slot1;
                var5['bottom'] = var3;
                var4[1] = var5;
                var1['style'] = var4;
                var1['paddingStart'] = var2;
                var2 = 4;
                var2 = var3 + var2;
                var1['paddingEnd'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2 = var2.bind(var4)();
        var6 = var2.style;
        var12 = var2.paddingStart;
        var _closure2_slot4 = var12;
        var11 = var2.paddingEnd;
        var _closure2_slot5 = var11;
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
            var6 = _closure2_slot4;
            var5 = 'paddingStart';
            var1[var5] = var6;
            var5 = _closure2_slot5;
            var4 = 'paddingEnd';
            var1[var4] = var5;
            var5 = 'visible';
            var4 = 'orientation';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var1['style'] = var6;
        var6 = 'box-none';
        var1['pointerEvents'] = var6;
        var6 = _closure1_slot1;
        var5 = 16;
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
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarUnreadBars.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();