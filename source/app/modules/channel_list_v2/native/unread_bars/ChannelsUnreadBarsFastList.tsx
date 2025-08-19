// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function shouldSkipSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 13;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var2)) { _fun0004_ip = 69; continue _fun0004 }
 38:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var2)) { _fun0004_ip = 69; continue _fun0004 }
 65:
            var1 = false;
            return var1;
 69:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function checkHasMentionOrUnread(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var2 = arg4;
            var4 = var5.getChannelFromSectionRow;
            var3 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var1);
            var11 = null;
            if(!(var11 != var1)) { _fun0005_ip = 380; continue _fun0005 }
 33:
            var3 = var1.channel;
            var1 = _closure1_slot17;
            var1 = var1.MENTION;
            if(!(var2 !== var1)) { _fun0005_ip = 267; continue _fun0005 }
 58:
            var1 = _closure1_slot17;
            var1 = var1.UNREAD;
            var1 = var2 === var1;
            if(!var1) { _fun0005_ip = 265; continue _fun0005 }
 78:
            var7 = var3.record;
            var4 = _closure1_slot21;
            var2 = var3.threadIds;
            var9 = undefined;
            var8 = var4.bind(var9)(var2);
            var4 = var8.bind(var9)();
            var2 = var4.done;
            var5 = var4;
            if(var2) { _fun0005_ip = 179; continue _fun0005 }
 116:
            var12 = var5.value;
            var4 = _closure1_slot7;
            var2 = var4.getChannel;
            var2 = var2.bind(var4)(var12);
            if(!(var11 != var2)) { _fun0005_ip = 164; continue _fun0005 }
 139:
            var12 = _closure1_slot9;
            var4 = var12.hasUnread;
            var2 = var2.id;
            var4 = var4.bind(var12)(var2);
            var2 = true;
            if(var4) { _fun0005_ip = 262; continue _fun0005 }
 164:
            var12 = var8.bind(var9)();
            var4 = var12.done;
            var5 = var12;
            if(!var4) { _fun0005_ip = 116; continue _fun0005 }
 179:
            var4 = var7.isGuildVocal;
            var4 = var4.bind(var7)();
            var4 = !var4;
            if(!var4) { _fun0005_ip = 204; continue _fun0005 }
 195:
            var5 = var3.isMuted;
            var4 = !var5;
 204:
            if(!var4) { _fun0005_ip = 227; continue _fun0005 }
 207:
            var8 = _closure1_slot9;
            var6 = var8.hasUnread;
            var5 = var7.id;
            var4 = var6.bind(var8)(var5);
 227:
            if(!var4) { _fun0005_ip = 259; continue _fun0005 }
 230:
            var6 = _closure1_slot10;
            var5 = var6.resolveUnreadSetting;
            var6 = var5.bind(var6)(var7);
            var5 = _closure1_slot13;
            var5 = var5.ALL_MESSAGES;
            var4 = var6 === var5;
 259:
            var2 = var4;
 262:
            var1 = var2;
 265:
            _fun0005_ip = 378; continue _fun0005;
 267:
            var5 = _closure1_slot9;
            var4 = var5.getMentionCount;
            var2 = var3.id;
            var2 = var4.bind(var5)(var2);
            var9 = 0;
            var4 = var2 > var9;
            var2 = true;
            if(var4) { _fun0005_ip = 375; continue _fun0005 }
 298:
            var4 = _closure1_slot21;
            var3 = var3.threadIds;
            var7 = undefined;
            var6 = var4.bind(var7)(var3);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var2 = false;
            if(var3) { _fun0005_ip = 375; continue _fun0005 }
 329:
            var12 = var4.value;
            var11 = _closure1_slot9;
            var3 = var11.getMentionCount;
            var3 = var3.bind(var11)(var12);
            var3 = var3 > var9;
            var2 = true;
            if(var3) { _fun0005_ip = 375; continue _fun0005 }
 358:
            var11 = var6.bind(var7)();
            var3 = var11.done;
            var4 = var11;
            var2 = false;
            if(!var3) { _fun0005_ip = 329; continue _fun0005 }
 375:
            var1 = var2;
 378:
            return var1;
 380:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function findFirstOrLastUnreadItem(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var17 = arg2;
            var4 = arg3;
            var7 = var17.id;
            var5 = _closure1_slot8;
            var3 = var5.getMentionCount;
            var3 = var3.bind(var5)(var7);
            var16 = 0;
            var5 = var3 > var16;
            var6 = _closure1_slot8;
            var3 = var6.hasUnread;
            var3 = var3.bind(var6)(var7);
            if(var5) { _fun0006_ip = 73; continue _fun0006 }
 56:
            var15 = null;
            if(!var3) { _fun0006_ip = 71; continue _fun0006 }
 61:
            var3 = _closure1_slot17;
            var15 = var3.UNREAD;
 71:
            _fun0006_ip = 83; continue _fun0006;
 73:
            var3 = _closure1_slot17;
            var15 = var3.MENTION;
 83:
            var14 = null;
            if(!(var14 != var15)) { _fun0006_ip = 1239; continue _fun0006 }
 92:
            var3 = var2.containerSize;
            if(!(var16 !== var3)) { _fun0006_ip = 1233; continue _fun0006 }
 105:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var13 = undefined;
            var5 = var5.bind(var13)(var3);
            var3 = var5.getFontScale;
            var5 = var3.bind(var5)();
            var3 = _closure1_slot11;
            var5 = var3.bind(var13)(var5);
            var3 = 2;
            var7 = var5 / var3;
            var5 = var2.scrollPosValue;
            var3 = var5.get;
            var5 = var3.bind(var5)();
            var6 = var2.getSectionItemFromPosition;
            var3 = var4 + var5;
            var3 = var3 + var7;
            var3 = var6.bind(var2)(var3);
            var6 = var3.item;
            var7 = var14 == var6;
            var3 = undefined;
            if(var7) { _fun0006_ip = 207; continue _fun0006 }
 201:
            var3 = var6.layoutStart;
 207:
            var8 = var5;
            if(!(var14 != var3)) { _fun0006_ip = 217; continue _fun0006 }
 214:
            var8 = var3;
 217:
            var3 = var2.containerSize;
            var3 = var8 + var3;
            var4 = var3 - var4;
            var3 = arg4;
            var7 = var4 - var3;
            var19 = {'section': 4294967295, 'item': 4294967295};
            var12 = -1;
            var3 = _closure1_slot21;
            var2 = var2.state;
            var2 = var2.items;
            var6 = var3.bind(var13)(var2);
            var3 = var6.bind(var13)();
            var2 = var3.done;
            var5 = 15;
            var4 = var3;
            var3 = null;
            var11 = null;
            if(var2) { _fun0006_ip = 576; continue _fun0006 }
 303:
            var10 = var4.value;
            var2 = var10.layoutStart;
            var9 = var3;
            if(!(!(var2 < var8))) { _fun0006_ip = 552; continue _fun0006 }
 324:
            var18 = var10.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var13)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.ITEM;
            if(!(var18 !== var2)) { _fun0006_ip = 406; continue _fun0006 }
 362:
            var18 = var10.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var13)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.SECTION;
            var9 = var3;
            if(!(var18 === var2)) { _fun0006_ip = 552; continue _fun0006 }
 406:
            var2 = var10.layoutStart;
            var11 = var3;
            if(!(!(var2 > var7))) { _fun0006_ip = 576; continue _fun0006 }
 422:
            var2 = var19.section;
            if(!(var12 === var2)) { _fun0006_ip = 453; continue _fun0006 }
 431:
            var2 = var10.section;
            var19['section'] = var2;
            var2 = var10.item;
            var19['item'] = var2;
 453:
            var18 = var10.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var13)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.ITEM;
            var9 = var10;
            if(!(var18 === var2)) { _fun0006_ip = 552; continue _fun0006 }
 494:
            var18 = _closure1_slot23;
            var2 = var10.section;
            var2 = var18.bind(var13)(var2);
            var9 = var3;
            if(var2) { _fun0006_ip = 552; continue _fun0006 }
 514:
            var20 = _closure1_slot24;
            var39 = var10.section;
            var38 = var10.item;
            var41 = undefined;
            var40 = var17;
            var37 = var15;
            var2 = var41[var20](var40, var39, var38, var37, var36);
            var9 = var10;
            if(!var2) { _fun0006_ip = 552; continue _fun0006 }
 546:
            var2 = _closure1_slot18;
            return var2;
 552:
            var10 = var6.bind(var13)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            var11 = var3;
            if(!var2) { _fun0006_ip = 303; continue _fun0006 }
 576:
            var2 = var17.getSections;
            var10 = var2.bind(var17)();
            var2 = var10.length;
            var2 = var16 < var2;
            var18 = false;
            var7 = 0;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(!var2) { _fun0006_ip = 854; continue _fun0006 }
 613:
            var2 = _closure1_slot23;
            var23 = var2.bind(var13)(var7);
            var2 = var7;
            var22 = var18;
            var21 = var4;
            var20 = var3;
            if(var23) { _fun0006_ip = 830; continue _fun0006 }
 640:
            var25 = var10[var2];
            var27 = var16 < var25;
            var26 = 0;
            var23 = var18;
            var24 = 0;
            if(!var27) { _fun0006_ip = 812; continue _fun0006 }
 661:
            var27 = var19.section;
            var27 = var2 > var27;
            var28 = var19.section;
            var30 = var2 === var28;
            var28 = var19.item;
            var29 = var26 >= var28;
            var28 = var26;
            var23 = true;
            var24 = var28;
            var4 = var30;
            var3 = var29;
            if(var27) { _fun0006_ip = 812; continue _fun0006 }
 705:
            if(!var30) { _fun0006_ip = 722; continue _fun0006 }
 708:
            var23 = true;
            var24 = var28;
            var4 = var30;
            var3 = var29;
            if(var3) { _fun0006_ip = 812; continue _fun0006 }
 722:
            var27 = _closure1_slot24;
            var41 = undefined;
            var40 = var17;
            var39 = var2;
            var38 = var28;
            var37 = var15;
            var27 = var41[var27](var40, var39, var38, var37, var36);
            if(var27) { _fun0006_ip = 768; continue _fun0006 }
 747:
            var26 = var28 + 1;
            var23 = var18;
            var4 = var30;
            var3 = var29;
            var24 = var26;
            if(var24 < var25) { _fun0006_ip = 661; continue _fun0006 }
 766:
            _fun0006_ip = 812; continue _fun0006;
 768:
            var26 = {};
            var27 = {};
            var27['section'] = var2;
            var27['row'] = var28;
            var28 = _closure1_slot17;
            var28 = var28.MENTION;
            var28 = var15 === var28;
            var27['isMention'] = var28;
            var26['beforeItem'] = var27;
            var26['afterItem'] = var14;
            return var26;
 812:
            var22 = var23;
            var5 = var24;
            var21 = var4;
            var20 = var3;
            var6 = var25;
            if(var22) { _fun0006_ip = 854; continue _fun0006 }
 830:
            var7 = var2 + 1;
            var2 = var10.length;
            var18 = var22;
            var4 = var21;
            var3 = var20;
            if(var7 < var2) { _fun0006_ip = 613; continue _fun0006 }
 854:
            var2 = var10.length;
            var7 = 1;
            var6 = var2 - var7;
            var9 = false;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!(var6 >= var16)) { _fun0006_ip = 1227; continue _fun0006 }
 883:
            var18 = _closure1_slot23;
            var23 = var18.bind(var13)(var6);
            var22 = var6;
            var21 = var9;
            var20 = var4;
            var19 = var3;
            var18 = var2;
            if(var23) { _fun0006_ip = 1205; continue _fun0006 }
 913:
            var23 = var10[var22];
            var32 = var23 - var7;
            var31 = var4;
            var29 = var3;
            var28 = var2;
            var23 = var9;
            var26 = var31;
            var25 = var29;
            var24 = var28;
            var27 = var32;
            if(!(var27 >= var16)) { _fun0006_ip = 1187; continue _fun0006 }
 952:
            var30 = var32;
            if(!(var14 != var11)) { _fun0006_ip = 1073; continue _fun0006 }
 959:
            var33 = var11.section;
            var36 = var22 < var33;
            var33 = var11.section;
            var35 = var22 === var33;
            var33 = var11.item;
            var34 = var12 === var33;
            var33 = var11.item;
            var33 = var30 <= var33;
            var23 = true;
            var27 = var30;
            var26 = var35;
            var25 = var34;
            var24 = var33;
            if(var36) { _fun0006_ip = 1187; continue _fun0006 }
 1015:
            var31 = var35;
            var29 = var34;
            var28 = var33;
            if(!var35) { _fun0006_ip = 1073; continue _fun0006 }
 1027:
            var23 = true;
            var27 = var30;
            var26 = var35;
            var25 = var34;
            var24 = var33;
            if(var34) { _fun0006_ip = 1187; continue _fun0006 }
 1047:
            var31 = var35;
            var29 = var34;
            var28 = var33;
            var23 = true;
            var27 = var30;
            var26 = var31;
            var25 = var29;
            var24 = var28;
            if(var24) { _fun0006_ip = 1187; continue _fun0006 }
 1073:
            var33 = _closure1_slot24;
            var41 = undefined;
            var40 = var17;
            var39 = var22;
            var38 = var30;
            var37 = var15;
            var33 = var41[var33](var40, var39, var38, var37, var36);
            var36 = var31;
            var35 = var29;
            var34 = var28;
            if(var33) { _fun0006_ip = 1143; continue _fun0006 }
 1107:
            var32 = var30 - 1;
            var31 = var36;
            var29 = var35;
            var28 = var34;
            var23 = var9;
            var26 = var31;
            var25 = var29;
            var24 = var28;
            var27 = var32;
            if(var27 >= var16) { _fun0006_ip = 952; continue _fun0006 }
 1141:
            _fun0006_ip = 1187; continue _fun0006;
 1143:
            var28 = {};
            var29 = {};
            var29['section'] = var22;
            var29['row'] = var30;
            var30 = _closure1_slot17;
            var30 = var30.MENTION;
            var30 = var15 === var30;
            var29['isMention'] = var30;
            var28['afterItem'] = var29;
            var28['beforeItem'] = var14;
            return var28;
 1187:
            var21 = var23;
            var5 = var27;
            var20 = var26;
            var19 = var25;
            var18 = var24;
            if(var21) { _fun0006_ip = 1227; continue _fun0006 }
 1205:
            var6 = var22 - 1;
            var9 = var21;
            var4 = var20;
            var3 = var19;
            var2 = var18;
            if(var6 >= var16) { _fun0006_ip = 883; continue _fun0006 }
 1227:
            var2 = _closure1_slot18;
            return var2;
 1233:
            var2 = _closure1_slot18;
            return var2;
 1239:
            var1 = _closure1_slot18;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var10 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getScaledChannelRowHeight;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = var10.absoluteFillObject;
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'mention';
    var4['MENTION'] = var8;
    var8 = 'unread';
    var4['UNREAD'] = var8;
    var _closure1_slot17 = var4;
    var4 = {'beforeItem': null, 'afterItem': null};
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function ChannelsUnreadBarsFastListTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function ChannelsUnreadBarsFastListTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function ChannelUnreadBarsComponent(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var11 = var2.fastList;
            var _closure2_slot0 = var11;
            var15 = var2.guild;
            var8 = var2.guildChannels;
            var _closure2_slot1 = var8;
            var9 = var2.headerHeight;
            var _closure2_slot2 = var9;
            var2 = var8.id;
            var _closure2_slot3 = var2;
            var14 = _closure1_slot4;
            var4 = var14.useRef;
            var3 = -1;
            var3 = var4.bind(var14)(var3);
            var _closure2_slot4 = var3;
            var3 = var14.useRef;
            var12 = null;
            var3 = var3.bind(var14)(var12);
            var _closure2_slot5 = var3;
            var3 = _closure1_slot12;
            var4 = undefined;
            var3 = var3.bind(var4)();
            var _closure2_slot6 = var3;
            var7 = var14.useState;
            var5 = function() {
                var6 = _closure1_slot25;
                var10 = _closure2_slot0;
                var9 = _closure2_slot1;
                var8 = _closure2_slot2;
                var7 = _closure2_slot6;
                var11 = undefined;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var10 = var7.bind(var14)(var5);
            var7 = _closure1_slot3;
            var5 = 2;
            var7 = var7.bind(var4)(var10, var5);
            var10 = 0;
            var5 = var7[var10];
            var18 = var5.beforeItem;
            var _closure2_slot7 = var18;
            var13 = var5.afterItem;
            var _closure2_slot8 = var13;
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot9 = var5;
            var7 = var14.useMemo;
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var8;
            var5[2] = var9;
            var5[3] = var3;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = function() {
                    var8 = _closure1_slot25;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot6;
                    var1 = undefined;
                    var13 = undefined;
                    var4 = var13[var8](var12, var11, var10, var9, var8);
                    var _closure4_slot0 = var4;
                    var3 = _closure2_slot9;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure4_slot0;
                            var1 = var4;
                            if(!(var4 !== var3)) { _fun0008_ip = 169; continue _fun0008 }
 20:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var8 = 17;
                            var3 = var3[var8];
                            var7 = undefined;
                            var10 = var6.bind(var7)(var3);
                            var6 = var4.afterItem;
                            var3 = null;
                            var11 = var3 != var6;
                            var9 = undefined;
                            if(!var11) { _fun0008_ip = 65; continue _fun0008 }
 62:
                            var9 = var6;
 65:
                            var6 = _closure4_slot0;
                            var11 = var6.afterItem;
                            var12 = var3 != var11;
                            var6 = undefined;
                            if(!var12) { _fun0008_ip = 87; continue _fun0008 }
 84:
                            var6 = var11;
 87:
                            var6 = var10.bind(var7)(var9, var6);
                            if(!var6) { _fun0008_ip = 165; continue _fun0008 }
 96:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var6 = var6.bind(var7)(var5);
                            var8 = var4.beforeItem;
                            var9 = var3 != var8;
                            var5 = undefined;
                            if(!var9) { _fun0008_ip = 131; continue _fun0008 }
 128:
                            var5 = var8;
 131:
                            var8 = _closure4_slot0;
                            var8 = var8.beforeItem;
                            var9 = var3 != var8;
                            var3 = undefined;
                            if(!var9) { _fun0008_ip = 153; continue _fun0008 }
 150:
                            var3 = var8;
 153:
                            var3 = var6.bind(var7)(var5, var3);
                            var1 = var4;
                            if(var3) { _fun0008_ip = 169; continue _fun0008 }
 165:
                            var1 = _closure4_slot0;
 169:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = 100;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var7.bind(var14)(var3, var5);
            var _closure2_slot10 = var19;
            var5 = var14.useEffect;
            var3 = new Array(2);
            var3[0] = var19;
            var3[1] = var2;
            var2 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.BatchedStoreListener;
                var3 = _closure1_slot8;
                var4 = new Array(2);
                var4[0] = var3;
                var2 = _closure1_slot9;
                var4[1] = var2;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var6 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = _closure2_slot3;
                        var3 = _closure1_slot9;
                        var2 = var3.getGuildUnreadsSentinel;
                        var3 = var2.bind(var3)(var4);
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        var2 = var4 === var2;
                        if(!var2) { _fun0009_ip = 54; continue _fun0009 }
 41:
                        var5 = _closure2_slot4;
                        var5 = var5.current;
                        var2 = var3 === var5;
 54:
                        if(var2) { _fun0009_ip = 87; continue _fun0009 }
 57:
                        var2 = _closure2_slot5;
                        var2['current'] = var4;
                        var2 = _closure2_slot4;
                        var2['current'] = var3;
                        var2 = _closure2_slot10;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var3;
                var7 = var4;
                var2 = new var8[var5](var7, var6, var5);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'channel-list-unread-bars';
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
            var2 = var5.bind(var14)(var2, var3);
            var17 = var11.scrollPosValue;
            var _closure2_slot11 = var17;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var20 = 19;
            var2 = var5[var20];
            var16 = var3.bind(var4)(var2);
            var8 = var16.useAnimatedReaction;
            var7 = function F() {
                var2 = _closure2_slot11;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = {};
            var2['scrollPosValue'] = var17;
            var7['__closure'] = var2;
            var2 = 13585715584001.0;
            var7['__workletHash'] = var2;
            var2 = _closure1_slot19;
            var7['__initData'] = var2;
            var2 = function N(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
                    if(!(var2 !== var1)) { _fun0010_ip = 56; continue _fun0010 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot10;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = {};
            var20 = var5[var20];
            var20 = var3.bind(var4)(var20);
            var20 = var20.runOnJS;
            var17['runOnJS'] = var20;
            var17['debouncedUpdate'] = var19;
            var2['__closure'] = var17;
            var17 = 14932911601944.0;
            var2['__workletHash'] = var17;
            var17 = _closure1_slot20;
            var2['__initData'] = var17;
            var2 = var8.bind(var16)(var7, var2);
            var2 = _closure1_slot16;
            var8 = var2.bind(var4)();
            var _closure2_slot12 = var8;
            var7 = _closure1_slot1;
            var2 = 20;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)(var15);
            var17 = var2.bannerWidth;
            var _closure2_slot13 = var17;
            var16 = var2.listBottom;
            var _closure2_slot14 = var16;
            var2 = 21;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot15 = var2;
            var15 = var14.useMemo;
            var19 = var8.wrapper;
            var8 = new Array(4);
            var8[0] = var19;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot12;
                    var2 = var1.wrapper;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var3 = _closure2_slot13;
                    var2['width'] = var3;
                    var5 = _closure2_slot15;
                    var3 = 0;
                    if(var5) { _fun0011_ip = 44; continue _fun0011 }
 40:
                    var3 = _closure2_slot14;
 44:
                    var2['bottom'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var8 = var15.bind(var14)(var2, var8);
            if(!(var12 != var18)) { _fun0007_ip = 531; continue _fun0007 }
 518:
            var2 = var18.isMention;
            var16 = 'before';
            if(var2) { _fun0007_ip = 581; continue _fun0007 }
 531:
            if(!(var12 != var13)) { _fun0007_ip = 548; continue _fun0007 }
 535:
            var15 = var13.isMention;
            var2 = 'after';
            if(var15) { _fun0007_ip = 578; continue _fun0007 }
 548:
            var17 = var12 != var18;
            var15 = 'before';
            if(var17) { _fun0007_ip = 575; continue _fun0007 }
 559:
            var19 = var12 != var13;
            var17 = null;
            if(!var19) { _fun0007_ip = 572; continue _fun0007 }
 568:
            var17 = 'after';
 572:
            var15 = var17;
 575:
            var2 = var15;
 578:
            var16 = var2;
 581:
            var2 = 18;
            var2 = var5[var2];
            var17 = var3.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var15 = var15.bind(var17)(var3, var2);
            var _closure2_slot16 = var15;
            var17 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var15;
            var3[2] = var11;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 132; continue _fun0012 }
 13:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 22;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var1 = 23;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = var3.scrollToLocation;
                    var1 = {};
                    var5 = _closure2_slot7;
                    var6 = var5.section;
                    var1['section'] = var6;
                    var5 = var5.row;
                    var1['item'] = var5;
                    var4 = _closure2_slot16;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 'center';
                    var1['orientation'] = var4;
                    var1 = var2.bind(var3)(var1);
 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var14)(var2, var3);
            var3 = var14.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var15;
            var2[2] = var11;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 132; continue _fun0013 }
 13:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 22;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var1 = 23;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = var3.scrollToLocation;
                    var1 = {};
                    var5 = _closure2_slot8;
                    var6 = var5.section;
                    var1['section'] = var6;
                    var5 = var5.row;
                    var1['item'] = var5;
                    var4 = _closure2_slot16;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 'center';
                    var1['orientation'] = var4;
                    var1 = var2.bind(var3)(var1);
 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var3.bind(var14)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var8 = _closure1_slot14;
            var15 = 24;
            var5 = var5[var15];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var19 = 'top';
            var5['position'] = var19;
            var19 = 'before';
            var19 = var19 === var16;
            var5['shown'] = var19;
            var5['onPress'] = var17;
            var19 = var12 == var18;
            var17 = undefined;
            if(var19) { _fun0007_ip = 778; continue _fun0007 }
 772:
            var17 = var18.isMention;
 778:
            var5['isMention'] = var17;
            var17 = var11.scrollPosValue;
            var5['scrollPosition'] = var17;
            var5['listPaddingTop'] = var10;
            var5['headerHeight'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var15 = 'bottom';
            var6['position'] = var15;
            var15 = 'after';
            var15 = var15 === var16;
            var6['shown'] = var15;
            var6['onPress'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0007_ip = 881; continue _fun0007 }
 875:
            var12 = var13.isMention;
 881:
            var6['isMention'] = var12;
            var11 = var11.scrollPosValue;
            var6['scrollPosition'] = var11;
            var6['listPaddingTop'] = var10;
            var6['headerHeight'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();